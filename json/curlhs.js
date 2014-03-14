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
        "word": "curlhs"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eModule \u003ca\u003eNetwork.Curlhs.Base\u003c/a\u003e provides a direct low-level bindings to\n \u003ccode\u003elibcurl\u003c/code\u003e. It is basically a 1:1 mapping of the \u003ccode\u003elibcurl\u003c/code\u003e's C API,\n a direct translation of \"curl/curl.h\" header files to Haskell FFI.\n A higher level interface, without ubiquitous pointers and all of that\n C stuff, is provided through the module \u003ca\u003eNetwork.Curlhs.Core\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eDocumentation about the library and/or particular functions may be found\n in the \u003ccode\u003elibcurl\u003c/code\u003e's manual pages or on the \u003ccode\u003elibcurl\u003c/code\u003e's project site\n (\u003ca\u003ehttp://curl.haxx.se/libcurl/\u003c/a\u003e). Because API of this module mirrors API\n of the external library, particular symbols may exist or not,\n dependently of that, which version of \u003ccode\u003elibcurl\u003c/code\u003e is used during compilation\n of the package. The module as closely as possible tries to follow\n the original \u003ccode\u003elibcurl\u003c/code\u003e API. The main differences are in types of functions\n such as \u003ccode\u003ecurl_easy_setopt\u003c/code\u003e and \u003ccode\u003ecurl_easy_getinfo\u003c/code\u003e. Besides that all\n symbol names are prefixed with 'c' or 'C'. \n\u003c/p\u003e\u003cp\u003eAs the name of the module may suggest, this module is a basis for the\n rest of \u003ccode\u003ecurlhs\u003c/code\u003e package. For now exposed API is somewhat incomplete,\n still lacks some things (like the \"multi interface\"), but the aim is\n to provide here a complete API of \u003ccode\u003elibcurl\u003c/code\u003e, as defined in its C headers.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.Curlhs.Base",
          "name": "Base",
          "package": "curlhs",
          "source": "src/Network-Curlhs-Base.html",
          "type": "module"
        },
        "index": {
          "description": "Module Network.Curlhs.Base provides direct low-level bindings to libcurl It is basically mapping of the libcurl API direct translation of curl curl.h header files to Haskell FFI higher level interface without ubiquitous pointers and all of that stuff is provided through the module Network.Curlhs.Core Documentation about the library and or particular functions may be found in the libcurl manual pages or on the libcurl project site http curl.haxx.se libcurl Because API of this module mirrors API of the external library particular symbols may exist or not dependently of that which version of libcurl is used during compilation of the package The module as closely as possible tries to follow the original libcurl API The main differences are in types of functions such as curl easy setopt and curl easy getinfo Besides that all symbol names are prefixed with or As the name of the module may suggest this module is basis for the rest of curlhs package For now exposed API is somewhat incomplete still lacks some things like the multi interface but the aim is to provide here complete API of libcurl as defined in its headers",
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "Base",
          "package": "curlhs",
          "partial": "Base",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "CCURL",
          "package": "curlhs",
          "source": "src/Network-Curlhs-Base.html#CCURL",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "CCURL",
          "package": "curlhs",
          "partial": "CCURL",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#t:CCURL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "CCURLSH",
          "package": "curlhs",
          "source": "src/Network-Curlhs-Base.html#CCURLSH",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "CCURLSH",
          "package": "curlhs",
          "partial": "CCURLSH",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#t:CCURLSH"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "CCURLSHcode",
          "package": "curlhs",
          "source": "src/Network-Curlhs-Base.html#CCURLSHcode",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "CCURLSHcode",
          "package": "curlhs",
          "partial": "CCURLSHcode",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#t:CCURLSHcode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "CCURLSHoption'FLOCK",
          "package": "curlhs",
          "source": "src/Network-Curlhs-Base.html#CCURLSHoption%27FLOCK",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "CCURLSHoption'FLOCK",
          "package": "curlhs",
          "partial": "CCURLSHoption' FLOCK",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#t:CCURLSHoption-39-FLOCK"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "CCURLSHoption'FUNLOCK",
          "package": "curlhs",
          "source": "src/Network-Curlhs-Base.html#CCURLSHoption%27FUNLOCK",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "CCURLSHoption'FUNLOCK",
          "package": "curlhs",
          "partial": "CCURLSHoption' FUNLOCK",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#t:CCURLSHoption-39-FUNLOCK"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "CCURLSHoption'Lock",
          "package": "curlhs",
          "source": "src/Network-Curlhs-Base.html#CCURLSHoption%27Lock",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "CCURLSHoption'Lock",
          "package": "curlhs",
          "partial": "CCURLSHoption' Lock",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#t:CCURLSHoption-39-Lock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "CCURLSHoption'UsrPtr",
          "package": "curlhs",
          "source": "src/Network-Curlhs-Base.html#CCURLSHoption%27UsrPtr",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "CCURLSHoption'UsrPtr",
          "package": "curlhs",
          "partial": "CCURLSHoption' Usr Ptr",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#t:CCURLSHoption-39-UsrPtr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "CCURL_calloc_callback",
          "package": "curlhs",
          "source": "src/Network-Curlhs-Base.html#CCURL_calloc_callback",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "CCURL_calloc_callback",
          "package": "curlhs",
          "partial": "CCURL",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#t:CCURL_calloc_callback"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "CCURL_certinfo",
          "package": "curlhs",
          "source": "src/Network-Curlhs-Base.html#CCURL_certinfo",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "CCURL_certinfo",
          "package": "curlhs",
          "partial": "CCURL",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#t:CCURL_certinfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "CCURL_chunk_bgn_callback",
          "package": "curlhs",
          "source": "src/Network-Curlhs-Base.html#CCURL_chunk_bgn_callback",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "CCURL_chunk_bgn_callback",
          "package": "curlhs",
          "partial": "CCURL",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#t:CCURL_chunk_bgn_callback"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "CCURL_chunk_end_callback",
          "package": "curlhs",
          "source": "src/Network-Curlhs-Base.html#CCURL_chunk_end_callback",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "CCURL_chunk_end_callback",
          "package": "curlhs",
          "partial": "CCURL",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#t:CCURL_chunk_end_callback"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "CCURL_closesocket_callback",
          "package": "curlhs",
          "source": "src/Network-Curlhs-Base.html#CCURL_closesocket_callback",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "CCURL_closesocket_callback",
          "package": "curlhs",
          "partial": "CCURL",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#t:CCURL_closesocket_callback"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "CCURL_conv_callback",
          "package": "curlhs",
          "source": "src/Network-Curlhs-Base.html#CCURL_conv_callback",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "CCURL_conv_callback",
          "package": "curlhs",
          "partial": "CCURL",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#t:CCURL_conv_callback"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "CCURL_debug_callback",
          "package": "curlhs",
          "source": "src/Network-Curlhs-Base.html#CCURL_debug_callback",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "CCURL_debug_callback",
          "package": "curlhs",
          "partial": "CCURL",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#t:CCURL_debug_callback"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "CCURL_fileinfo",
          "package": "curlhs",
          "source": "src/Network-Curlhs-Base.html#CCURL_fileinfo",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "CCURL_fileinfo",
          "package": "curlhs",
          "partial": "CCURL",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#t:CCURL_fileinfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "CCURL_fnmatch_callback",
          "package": "curlhs",
          "source": "src/Network-Curlhs-Base.html#CCURL_fnmatch_callback",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "CCURL_fnmatch_callback",
          "package": "curlhs",
          "partial": "CCURL",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#t:CCURL_fnmatch_callback"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "CCURL_formget_callback",
          "package": "curlhs",
          "source": "src/Network-Curlhs-Base.html#CCURL_formget_callback",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "CCURL_formget_callback",
          "package": "curlhs",
          "partial": "CCURL",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#t:CCURL_formget_callback"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "CCURL_forms",
          "package": "curlhs",
          "source": "src/Network-Curlhs-Base.html#CCURL_forms",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "CCURL_forms",
          "package": "curlhs",
          "partial": "CCURL",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#t:CCURL_forms"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "CCURL_free_callback",
          "package": "curlhs",
          "source": "src/Network-Curlhs-Base.html#CCURL_free_callback",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "CCURL_free_callback",
          "package": "curlhs",
          "partial": "CCURL",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#t:CCURL_free_callback"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "CCURL_httppost",
          "package": "curlhs",
          "source": "src/Network-Curlhs-Base.html#CCURL_httppost",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "CCURL_httppost",
          "package": "curlhs",
          "partial": "CCURL",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#t:CCURL_httppost"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "CCURL_infotype",
          "package": "curlhs",
          "source": "src/Network-Curlhs-Base.html#CCURL_infotype",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "CCURL_infotype",
          "package": "curlhs",
          "partial": "CCURL",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#t:CCURL_infotype"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "CCURL_ioctl_callback",
          "package": "curlhs",
          "source": "src/Network-Curlhs-Base.html#CCURL_ioctl_callback",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "CCURL_ioctl_callback",
          "package": "curlhs",
          "partial": "CCURL",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#t:CCURL_ioctl_callback"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "CCURL_khkey",
          "package": "curlhs",
          "source": "src/Network-Curlhs-Base.html#CCURL_khkey",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "CCURL_khkey",
          "package": "curlhs",
          "partial": "CCURL",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#t:CCURL_khkey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "CCURL_khmatch",
          "package": "curlhs",
          "source": "src/Network-Curlhs-Base.html#CCURL_khmatch",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "CCURL_khmatch",
          "package": "curlhs",
          "partial": "CCURL",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#t:CCURL_khmatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "CCURL_khstat",
          "package": "curlhs",
          "source": "src/Network-Curlhs-Base.html#CCURL_khstat",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "CCURL_khstat",
          "package": "curlhs",
          "partial": "CCURL",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#t:CCURL_khstat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "CCURL_khtype",
          "package": "curlhs",
          "source": "src/Network-Curlhs-Base.html#CCURL_khtype",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "CCURL_khtype",
          "package": "curlhs",
          "partial": "CCURL",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#t:CCURL_khtype"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "CCURL_lock_access",
          "package": "curlhs",
          "source": "src/Network-Curlhs-Base.html#CCURL_lock_access",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "CCURL_lock_access",
          "package": "curlhs",
          "partial": "CCURL",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#t:CCURL_lock_access"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "CCURL_lock_data",
          "package": "curlhs",
          "source": "src/Network-Curlhs-Base.html#CCURL_lock_data",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "CCURL_lock_data",
          "package": "curlhs",
          "partial": "CCURL",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#t:CCURL_lock_data"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "CCURL_lock_function",
          "package": "curlhs",
          "source": "src/Network-Curlhs-Base.html#CCURL_lock_function",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "CCURL_lock_function",
          "package": "curlhs",
          "partial": "CCURL",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#t:CCURL_lock_function"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "CCURL_malloc_callback",
          "package": "curlhs",
          "source": "src/Network-Curlhs-Base.html#CCURL_malloc_callback",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "CCURL_malloc_callback",
          "package": "curlhs",
          "partial": "CCURL",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#t:CCURL_malloc_callback"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "CCURL_off_t",
          "package": "curlhs",
          "source": "src/Network-Curlhs-Base.html#CCURL_off_t",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "CCURL_off_t",
          "package": "curlhs",
          "partial": "CCURL",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#t:CCURL_off_t"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "CCURL_opensocket_callback",
          "package": "curlhs",
          "source": "src/Network-Curlhs-Base.html#CCURL_opensocket_callback",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "CCURL_opensocket_callback",
          "package": "curlhs",
          "partial": "CCURL",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#t:CCURL_opensocket_callback"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "CCURL_progress_callback",
          "package": "curlhs",
          "source": "src/Network-Curlhs-Base.html#CCURL_progress_callback",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "CCURL_progress_callback",
          "package": "curlhs",
          "partial": "CCURL",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#t:CCURL_progress_callback"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "CCURL_read_callback",
          "package": "curlhs",
          "source": "src/Network-Curlhs-Base.html#CCURL_read_callback",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "CCURL_read_callback",
          "package": "curlhs",
          "partial": "CCURL",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#t:CCURL_read_callback"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "CCURL_realloc_callback",
          "package": "curlhs",
          "source": "src/Network-Curlhs-Base.html#CCURL_realloc_callback",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "CCURL_realloc_callback",
          "package": "curlhs",
          "partial": "CCURL",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#t:CCURL_realloc_callback"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "CCURL_seek_callback",
          "package": "curlhs",
          "source": "src/Network-Curlhs-Base.html#CCURL_seek_callback",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "CCURL_seek_callback",
          "package": "curlhs",
          "partial": "CCURL",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#t:CCURL_seek_callback"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "CCURL_slist",
          "package": "curlhs",
          "source": "src/Network-Curlhs-Base.html#CCURL_slist",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "CCURL_slist",
          "package": "curlhs",
          "partial": "CCURL",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#t:CCURL_slist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "CCURL_sockaddr",
          "package": "curlhs",
          "source": "src/Network-Curlhs-Base.html#CCURL_sockaddr",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "CCURL_sockaddr",
          "package": "curlhs",
          "partial": "CCURL",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#t:CCURL_sockaddr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "CCURL_socket_t",
          "package": "curlhs",
          "source": "src/Network-Curlhs-Base.html#CCURL_socket_t",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "CCURL_socket_t",
          "package": "curlhs",
          "partial": "CCURL",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#t:CCURL_socket_t"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "CCURL_sockopt_callback",
          "package": "curlhs",
          "source": "src/Network-Curlhs-Base.html#CCURL_sockopt_callback",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "CCURL_sockopt_callback",
          "package": "curlhs",
          "partial": "CCURL",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#t:CCURL_sockopt_callback"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "CCURL_sshkey_callback",
          "package": "curlhs",
          "source": "src/Network-Curlhs-Base.html#CCURL_sshkey_callback",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "CCURL_sshkey_callback",
          "package": "curlhs",
          "partial": "CCURL",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#t:CCURL_sshkey_callback"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "CCURL_ssl_ctx_callback",
          "package": "curlhs",
          "source": "src/Network-Curlhs-Base.html#CCURL_ssl_ctx_callback",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "CCURL_ssl_ctx_callback",
          "package": "curlhs",
          "partial": "CCURL",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#t:CCURL_ssl_ctx_callback"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "CCURL_strdup_callback",
          "package": "curlhs",
          "source": "src/Network-Curlhs-Base.html#CCURL_strdup_callback",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "CCURL_strdup_callback",
          "package": "curlhs",
          "partial": "CCURL",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#t:CCURL_strdup_callback"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "CCURL_unlock_function",
          "package": "curlhs",
          "source": "src/Network-Curlhs-Base.html#CCURL_unlock_function",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "CCURL_unlock_function",
          "package": "curlhs",
          "partial": "CCURL",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#t:CCURL_unlock_function"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "CCURL_version_info_data",
          "package": "curlhs",
          "source": "src/Network-Curlhs-Base.html#CCURL_version_info_data",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "CCURL_version_info_data",
          "package": "curlhs",
          "partial": "CCURL",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#t:CCURL_version_info_data"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "CCURL_write_callback",
          "package": "curlhs",
          "source": "src/Network-Curlhs-Base.html#CCURL_write_callback",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "CCURL_write_callback",
          "package": "curlhs",
          "partial": "CCURL",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#t:CCURL_write_callback"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "CCURLcode",
          "package": "curlhs",
          "source": "src/Network-Curlhs-Base.html#CCURLcode",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "CCURLcode",
          "package": "curlhs",
          "partial": "CCURLcode",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#t:CCURLcode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "CCURLfiletype",
          "package": "curlhs",
          "source": "src/Network-Curlhs-Base.html#CCURLfiletype",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "CCURLfiletype",
          "package": "curlhs",
          "partial": "CCURLfiletype",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#t:CCURLfiletype"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "CCURLformcode",
          "package": "curlhs",
          "source": "src/Network-Curlhs-Base.html#CCURLformcode",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "CCURLformcode",
          "package": "curlhs",
          "partial": "CCURLformcode",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#t:CCURLformcode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "CCURLformoption",
          "package": "curlhs",
          "source": "src/Network-Curlhs-Base.html#CCURLformoption",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "CCURLformoption",
          "package": "curlhs",
          "partial": "CCURLformoption",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#t:CCURLformoption"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "CCURLinfo'CDouble",
          "package": "curlhs",
          "source": "src/Network-Curlhs-Base.html#CCURLinfo%27CDouble",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "CCURLinfo'CDouble",
          "package": "curlhs",
          "partial": "CCURLinfo' CDouble",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#t:CCURLinfo-39-CDouble"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "CCURLinfo'CLong",
          "package": "curlhs",
          "source": "src/Network-Curlhs-Base.html#CCURLinfo%27CLong",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "CCURLinfo'CLong",
          "package": "curlhs",
          "partial": "CCURLinfo' CLong",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#t:CCURLinfo-39-CLong"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "CCURLinfo'CString",
          "package": "curlhs",
          "source": "src/Network-Curlhs-Base.html#CCURLinfo%27CString",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "CCURLinfo'CString",
          "package": "curlhs",
          "partial": "CCURLinfo' CString",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#t:CCURLinfo-39-CString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "CCURLinfo'CertI",
          "package": "curlhs",
          "source": "src/Network-Curlhs-Base.html#CCURLinfo%27CertI",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "CCURLinfo'CertI",
          "package": "curlhs",
          "partial": "CCURLinfo' Cert",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#t:CCURLinfo-39-CertI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "CCURLinfo'SList",
          "package": "curlhs",
          "source": "src/Network-Curlhs-Base.html#CCURLinfo%27SList",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "CCURLinfo'SList",
          "package": "curlhs",
          "partial": "CCURLinfo' SList",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#t:CCURLinfo-39-SList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "CCURLiocmd",
          "package": "curlhs",
          "source": "src/Network-Curlhs-Base.html#CCURLiocmd",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "CCURLiocmd",
          "package": "curlhs",
          "partial": "CCURLiocmd",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#t:CCURLiocmd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "CCURLioerr",
          "package": "curlhs",
          "source": "src/Network-Curlhs-Base.html#CCURLioerr",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "CCURLioerr",
          "package": "curlhs",
          "partial": "CCURLioerr",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#t:CCURLioerr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "CCURLoption'CFile",
          "package": "curlhs",
          "source": "src/Network-Curlhs-Base.html#CCURLoption%27CFile",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "CCURLoption'CFile",
          "package": "curlhs",
          "partial": "CCURLoption' CFile",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#t:CCURLoption-39-CFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "CCURLoption'CLong",
          "package": "curlhs",
          "source": "src/Network-Curlhs-Base.html#CCURLoption%27CLong",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "CCURLoption'CLong",
          "package": "curlhs",
          "partial": "CCURLoption' CLong",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#t:CCURLoption-39-CLong"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "CCURLoption'CString",
          "package": "curlhs",
          "source": "src/Network-Curlhs-Base.html#CCURLoption%27CString",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "CCURLoption'CString",
          "package": "curlhs",
          "partial": "CCURLoption' CString",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#t:CCURLoption-39-CString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "CCURLoption'CURLSH",
          "package": "curlhs",
          "source": "src/Network-Curlhs-Base.html#CCURLoption%27CURLSH",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "CCURLoption'CURLSH",
          "package": "curlhs",
          "partial": "CCURLoption' CURLSH",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#t:CCURLoption-39-CURLSH"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "CCURLoption'FunPtr",
          "package": "curlhs",
          "source": "src/Network-Curlhs-Base.html#CCURLoption%27FunPtr",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "CCURLoption'FunPtr",
          "package": "curlhs",
          "partial": "CCURLoption' Fun Ptr",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#t:CCURLoption-39-FunPtr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "CCURLoption'HTTPP",
          "package": "curlhs",
          "source": "src/Network-Curlhs-Base.html#CCURLoption%27HTTPP",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "CCURLoption'HTTPP",
          "package": "curlhs",
          "partial": "CCURLoption' HTTPP",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#t:CCURLoption-39-HTTPP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "CCURLoption'Int64",
          "package": "curlhs",
          "source": "src/Network-Curlhs-Base.html#CCURLoption%27Int64",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "CCURLoption'Int64",
          "package": "curlhs",
          "partial": "CCURLoption' Int",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#t:CCURLoption-39-Int64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "CCURLoption'SList",
          "package": "curlhs",
          "source": "src/Network-Curlhs-Base.html#CCURLoption%27SList",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "CCURLoption'SList",
          "package": "curlhs",
          "partial": "CCURLoption' SList",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#t:CCURLoption-39-SList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "CCURLoption'UsrPtr",
          "package": "curlhs",
          "source": "src/Network-Curlhs-Base.html#CCURLoption%27UsrPtr",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "CCURLoption'UsrPtr",
          "package": "curlhs",
          "partial": "CCURLoption' Usr Ptr",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#t:CCURLoption-39-UsrPtr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "CCURLsocktype",
          "package": "curlhs",
          "source": "src/Network-Curlhs-Base.html#CCURLsocktype",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "CCURLsocktype",
          "package": "curlhs",
          "partial": "CCURLsocktype",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#t:CCURLsocktype"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "CCURLversion",
          "package": "curlhs",
          "source": "src/Network-Curlhs-Base.html#CCURLversion",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "CCURLversion",
          "package": "curlhs",
          "partial": "CCURLversion",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#t:CCURLversion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "CCURLSHcode",
          "package": "curlhs",
          "signature": "CCURLSHcode CInt",
          "source": "src/Network-Curlhs-Base.html#CCURLSHcode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "CCURLSHcode",
          "package": "curlhs",
          "partial": "CCURLSHcode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:CCURLSHcode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "CCURLSHoption'FLOCK",
          "package": "curlhs",
          "signature": "CCURLSHoption'FLOCK CInt",
          "source": "src/Network-Curlhs-Base.html#CCURLSHoption%27FLOCK",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "CCURLSHoption'FLOCK",
          "package": "curlhs",
          "partial": "CCURLSHoption' FLOCK",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:CCURLSHoption-39-FLOCK"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "CCURLSHoption'FUNLOCK",
          "package": "curlhs",
          "signature": "CCURLSHoption'FUNLOCK CInt",
          "source": "src/Network-Curlhs-Base.html#CCURLSHoption%27FUNLOCK",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "CCURLSHoption'FUNLOCK",
          "package": "curlhs",
          "partial": "CCURLSHoption' FUNLOCK",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:CCURLSHoption-39-FUNLOCK"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "CCURLSHoption'Lock",
          "package": "curlhs",
          "signature": "CCURLSHoption'Lock CInt",
          "source": "src/Network-Curlhs-Base.html#CCURLSHoption%27Lock",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "CCURLSHoption'Lock",
          "package": "curlhs",
          "partial": "CCURLSHoption' Lock",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:CCURLSHoption-39-Lock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "CCURLSHoption'UsrPtr",
          "package": "curlhs",
          "signature": "CCURLSHoption'UsrPtr CInt",
          "source": "src/Network-Curlhs-Base.html#CCURLSHoption%27UsrPtr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "CCURLSHoption'UsrPtr",
          "package": "curlhs",
          "partial": "CCURLSHoption' Usr Ptr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:CCURLSHoption-39-UsrPtr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "CCURL_certinfo",
          "package": "curlhs",
          "signature": "CCURL_certinfo",
          "source": "src/Network-Curlhs-Base.html#CCURL_certinfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "CCURL_certinfo",
          "package": "curlhs",
          "partial": "CCURL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:CCURL_certinfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "CCURL_fileinfo",
          "package": "curlhs",
          "signature": "CCURL_fileinfo",
          "source": "src/Network-Curlhs-Base.html#CCURL_fileinfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "CCURL_fileinfo",
          "package": "curlhs",
          "partial": "CCURL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:CCURL_fileinfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "CCURL_forms",
          "package": "curlhs",
          "signature": "CCURL_forms",
          "source": "src/Network-Curlhs-Base.html#CCURL_forms",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "CCURL_forms",
          "package": "curlhs",
          "partial": "CCURL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:CCURL_forms"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "CCURL_httppost",
          "package": "curlhs",
          "signature": "CCURL_httppost",
          "source": "src/Network-Curlhs-Base.html#CCURL_httppost",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "CCURL_httppost",
          "package": "curlhs",
          "partial": "CCURL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:CCURL_httppost"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "CCURL_infotype",
          "package": "curlhs",
          "signature": "CCURL_infotype CInt",
          "source": "src/Network-Curlhs-Base.html#CCURL_infotype",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "CCURL_infotype",
          "package": "curlhs",
          "partial": "CCURL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:CCURL_infotype"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "CCURL_khkey",
          "package": "curlhs",
          "signature": "CCURL_khkey",
          "source": "src/Network-Curlhs-Base.html#CCURL_khkey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "CCURL_khkey",
          "package": "curlhs",
          "partial": "CCURL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:CCURL_khkey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "CCURL_khmatch",
          "package": "curlhs",
          "signature": "CCURL_khmatch CInt",
          "source": "src/Network-Curlhs-Base.html#CCURL_khmatch",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "CCURL_khmatch",
          "package": "curlhs",
          "partial": "CCURL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:CCURL_khmatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "CCURL_khstat",
          "package": "curlhs",
          "signature": "CCURL_khstat CInt",
          "source": "src/Network-Curlhs-Base.html#CCURL_khstat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "CCURL_khstat",
          "package": "curlhs",
          "partial": "CCURL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:CCURL_khstat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "CCURL_khtype",
          "package": "curlhs",
          "signature": "CCURL_khtype CInt",
          "source": "src/Network-Curlhs-Base.html#CCURL_khtype",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "CCURL_khtype",
          "package": "curlhs",
          "partial": "CCURL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:CCURL_khtype"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "CCURL_lock_access",
          "package": "curlhs",
          "signature": "CCURL_lock_access CInt",
          "source": "src/Network-Curlhs-Base.html#CCURL_lock_access",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "CCURL_lock_access",
          "package": "curlhs",
          "partial": "CCURL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:CCURL_lock_access"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "CCURL_lock_data",
          "package": "curlhs",
          "signature": "CCURL_lock_data CInt",
          "source": "src/Network-Curlhs-Base.html#CCURL_lock_data",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "CCURL_lock_data",
          "package": "curlhs",
          "partial": "CCURL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:CCURL_lock_data"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "CCURL_slist",
          "package": "curlhs",
          "signature": "CCURL_slist",
          "source": "src/Network-Curlhs-Base.html#CCURL_slist",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "CCURL_slist",
          "package": "curlhs",
          "partial": "CCURL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:CCURL_slist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "CCURL_sockaddr",
          "package": "curlhs",
          "signature": "CCURL_sockaddr",
          "source": "src/Network-Curlhs-Base.html#CCURL_sockaddr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "CCURL_sockaddr",
          "package": "curlhs",
          "partial": "CCURL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:CCURL_sockaddr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "CCURL_version_info_data",
          "package": "curlhs",
          "signature": "CCURL_version_info_data",
          "source": "src/Network-Curlhs-Base.html#CCURL_version_info_data",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "CCURL_version_info_data",
          "package": "curlhs",
          "partial": "CCURL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:CCURL_version_info_data"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "CCURLcode",
          "package": "curlhs",
          "signature": "CCURLcode CInt",
          "source": "src/Network-Curlhs-Base.html#CCURLcode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "CCURLcode",
          "package": "curlhs",
          "partial": "CCURLcode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:CCURLcode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "CCURLfiletype",
          "package": "curlhs",
          "signature": "CCURLfiletype CInt",
          "source": "src/Network-Curlhs-Base.html#CCURLfiletype",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "CCURLfiletype",
          "package": "curlhs",
          "partial": "CCURLfiletype",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:CCURLfiletype"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "CCURLformcode",
          "package": "curlhs",
          "signature": "CCURLformcode CInt",
          "source": "src/Network-Curlhs-Base.html#CCURLformcode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "CCURLformcode",
          "package": "curlhs",
          "partial": "CCURLformcode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:CCURLformcode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "CCURLformoption",
          "package": "curlhs",
          "signature": "CCURLformoption CInt",
          "source": "src/Network-Curlhs-Base.html#CCURLformoption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "CCURLformoption",
          "package": "curlhs",
          "partial": "CCURLformoption",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:CCURLformoption"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "CCURLinfo'CDouble",
          "package": "curlhs",
          "signature": "CCURLinfo'CDouble CInt",
          "source": "src/Network-Curlhs-Base.html#CCURLinfo%27CDouble",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "CCURLinfo'CDouble",
          "package": "curlhs",
          "partial": "CCURLinfo' CDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:CCURLinfo-39-CDouble"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "CCURLinfo'CLong",
          "package": "curlhs",
          "signature": "CCURLinfo'CLong CInt",
          "source": "src/Network-Curlhs-Base.html#CCURLinfo%27CLong",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "CCURLinfo'CLong",
          "package": "curlhs",
          "partial": "CCURLinfo' CLong",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:CCURLinfo-39-CLong"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "CCURLinfo'CString",
          "package": "curlhs",
          "signature": "CCURLinfo'CString CInt",
          "source": "src/Network-Curlhs-Base.html#CCURLinfo%27CString",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "CCURLinfo'CString",
          "package": "curlhs",
          "partial": "CCURLinfo' CString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:CCURLinfo-39-CString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "CCURLinfo'CertI",
          "package": "curlhs",
          "signature": "CCURLinfo'CertI CInt",
          "source": "src/Network-Curlhs-Base.html#CCURLinfo%27CertI",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "CCURLinfo'CertI",
          "package": "curlhs",
          "partial": "CCURLinfo' Cert",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:CCURLinfo-39-CertI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "CCURLinfo'SList",
          "package": "curlhs",
          "signature": "CCURLinfo'SList CInt",
          "source": "src/Network-Curlhs-Base.html#CCURLinfo%27SList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "CCURLinfo'SList",
          "package": "curlhs",
          "partial": "CCURLinfo' SList",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:CCURLinfo-39-SList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "CCURLiocmd",
          "package": "curlhs",
          "signature": "CCURLiocmd CInt",
          "source": "src/Network-Curlhs-Base.html#CCURLiocmd",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "CCURLiocmd",
          "package": "curlhs",
          "partial": "CCURLiocmd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:CCURLiocmd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "CCURLioerr",
          "package": "curlhs",
          "signature": "CCURLioerr CInt",
          "source": "src/Network-Curlhs-Base.html#CCURLioerr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "CCURLioerr",
          "package": "curlhs",
          "partial": "CCURLioerr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:CCURLioerr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "CCURLoption'CFile",
          "package": "curlhs",
          "signature": "CCURLoption'CFile CInt",
          "source": "src/Network-Curlhs-Base.html#CCURLoption%27CFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "CCURLoption'CFile",
          "package": "curlhs",
          "partial": "CCURLoption' CFile",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:CCURLoption-39-CFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "CCURLoption'CLong",
          "package": "curlhs",
          "signature": "CCURLoption'CLong CInt",
          "source": "src/Network-Curlhs-Base.html#CCURLoption%27CLong",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "CCURLoption'CLong",
          "package": "curlhs",
          "partial": "CCURLoption' CLong",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:CCURLoption-39-CLong"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "CCURLoption'CString",
          "package": "curlhs",
          "signature": "CCURLoption'CString CInt",
          "source": "src/Network-Curlhs-Base.html#CCURLoption%27CString",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "CCURLoption'CString",
          "package": "curlhs",
          "partial": "CCURLoption' CString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:CCURLoption-39-CString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "CCURLoption'CURLSH",
          "package": "curlhs",
          "signature": "CCURLoption'CURLSH CInt",
          "source": "src/Network-Curlhs-Base.html#CCURLoption%27CURLSH",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "CCURLoption'CURLSH",
          "package": "curlhs",
          "partial": "CCURLoption' CURLSH",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:CCURLoption-39-CURLSH"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "CCURLoption'FunPtr",
          "package": "curlhs",
          "signature": "CCURLoption'FunPtr CInt",
          "source": "src/Network-Curlhs-Base.html#CCURLoption%27FunPtr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "CCURLoption'FunPtr",
          "package": "curlhs",
          "partial": "CCURLoption' Fun Ptr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:CCURLoption-39-FunPtr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "CCURLoption'HTTPP",
          "package": "curlhs",
          "signature": "CCURLoption'HTTPP CInt",
          "source": "src/Network-Curlhs-Base.html#CCURLoption%27HTTPP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "CCURLoption'HTTPP",
          "package": "curlhs",
          "partial": "CCURLoption' HTTPP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:CCURLoption-39-HTTPP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "CCURLoption'Int64",
          "package": "curlhs",
          "signature": "CCURLoption'Int64 CInt",
          "source": "src/Network-Curlhs-Base.html#CCURLoption%27Int64",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "CCURLoption'Int64",
          "package": "curlhs",
          "partial": "CCURLoption' Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:CCURLoption-39-Int64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "CCURLoption'SList",
          "package": "curlhs",
          "signature": "CCURLoption'SList CInt",
          "source": "src/Network-Curlhs-Base.html#CCURLoption%27SList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "CCURLoption'SList",
          "package": "curlhs",
          "partial": "CCURLoption' SList",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:CCURLoption-39-SList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "CCURLoption'UsrPtr",
          "package": "curlhs",
          "signature": "CCURLoption'UsrPtr CInt",
          "source": "src/Network-Curlhs-Base.html#CCURLoption%27UsrPtr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "CCURLoption'UsrPtr",
          "package": "curlhs",
          "partial": "CCURLoption' Usr Ptr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:CCURLoption-39-UsrPtr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "CCURLsocktype",
          "package": "curlhs",
          "signature": "CCURLsocktype CInt",
          "source": "src/Network-Curlhs-Base.html#CCURLsocktype",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "CCURLsocktype",
          "package": "curlhs",
          "partial": "CCURLsocktype",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:CCURLsocktype"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "CCURLversion",
          "package": "curlhs",
          "signature": "CCURLversion CInt",
          "source": "src/Network-Curlhs-Base.html#CCURLversion",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "CCURLversion",
          "package": "curlhs",
          "partial": "CCURLversion",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:CCURLversion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLAUTH_ANY",
          "package": "curlhs",
          "signature": "CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLAUTH_ANY",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLAUTH_ANY",
          "package": "curlhs",
          "partial": "CURLAUTH ANY",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLAUTH_ANY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLAUTH_ANYSAFE",
          "package": "curlhs",
          "signature": "CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLAUTH_ANYSAFE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLAUTH_ANYSAFE",
          "package": "curlhs",
          "partial": "CURLAUTH ANYSAFE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLAUTH_ANYSAFE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLAUTH_BASIC",
          "package": "curlhs",
          "signature": "CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLAUTH_BASIC",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLAUTH_BASIC",
          "package": "curlhs",
          "partial": "CURLAUTH BASIC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLAUTH_BASIC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLAUTH_DIGEST",
          "package": "curlhs",
          "signature": "CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLAUTH_DIGEST",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLAUTH_DIGEST",
          "package": "curlhs",
          "partial": "CURLAUTH DIGEST",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLAUTH_DIGEST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLAUTH_DIGEST_IE",
          "package": "curlhs",
          "signature": "CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLAUTH_DIGEST_IE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLAUTH_DIGEST_IE",
          "package": "curlhs",
          "partial": "CURLAUTH DIGEST IE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLAUTH_DIGEST_IE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLAUTH_GSSNEGOTIATE",
          "package": "curlhs",
          "signature": "CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLAUTH_GSSNEGOTIATE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLAUTH_GSSNEGOTIATE",
          "package": "curlhs",
          "partial": "CURLAUTH GSSNEGOTIATE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLAUTH_GSSNEGOTIATE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLAUTH_NONE",
          "package": "curlhs",
          "signature": "CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLAUTH_NONE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLAUTH_NONE",
          "package": "curlhs",
          "partial": "CURLAUTH NONE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLAUTH_NONE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLAUTH_NTLM",
          "package": "curlhs",
          "signature": "CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLAUTH_NTLM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLAUTH_NTLM",
          "package": "curlhs",
          "partial": "CURLAUTH NTLM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLAUTH_NTLM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLAUTH_NTLM_WB",
          "package": "curlhs",
          "signature": "CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLAUTH_NTLM_WB",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLAUTH_NTLM_WB",
          "package": "curlhs",
          "partial": "CURLAUTH NTLM WB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLAUTH_NTLM_WB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLAUTH_ONLY",
          "package": "curlhs",
          "signature": "CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLAUTH_ONLY",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLAUTH_ONLY",
          "package": "curlhs",
          "partial": "CURLAUTH ONLY",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLAUTH_ONLY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLCLOSEPOLICY_CALLBACK",
          "package": "curlhs",
          "signature": "CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLCLOSEPOLICY_CALLBACK",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLCLOSEPOLICY_CALLBACK",
          "package": "curlhs",
          "partial": "CURLCLOSEPOLICY CALLBACK",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLCLOSEPOLICY_CALLBACK"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLCLOSEPOLICY_LEAST_RECENTLY_USED",
          "package": "curlhs",
          "signature": "CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLCLOSEPOLICY_LEAST_RECENTLY_USED",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLCLOSEPOLICY_LEAST_RECENTLY_USED",
          "package": "curlhs",
          "partial": "CURLCLOSEPOLICY LEAST RECENTLY USED",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLCLOSEPOLICY_LEAST_RECENTLY_USED"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLCLOSEPOLICY_LEAST_TRAFFIC",
          "package": "curlhs",
          "signature": "CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLCLOSEPOLICY_LEAST_TRAFFIC",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLCLOSEPOLICY_LEAST_TRAFFIC",
          "package": "curlhs",
          "partial": "CURLCLOSEPOLICY LEAST TRAFFIC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLCLOSEPOLICY_LEAST_TRAFFIC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLCLOSEPOLICY_NONE",
          "package": "curlhs",
          "signature": "CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLCLOSEPOLICY_NONE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLCLOSEPOLICY_NONE",
          "package": "curlhs",
          "partial": "CURLCLOSEPOLICY NONE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLCLOSEPOLICY_NONE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLCLOSEPOLICY_OLDEST",
          "package": "curlhs",
          "signature": "CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLCLOSEPOLICY_OLDEST",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLCLOSEPOLICY_OLDEST",
          "package": "curlhs",
          "partial": "CURLCLOSEPOLICY OLDEST",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLCLOSEPOLICY_OLDEST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLCLOSEPOLICY_SLOWEST",
          "package": "curlhs",
          "signature": "CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLCLOSEPOLICY_SLOWEST",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLCLOSEPOLICY_SLOWEST",
          "package": "curlhs",
          "partial": "CURLCLOSEPOLICY SLOWEST",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLCLOSEPOLICY_SLOWEST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLE_ABORTED_BY_CALLBACK",
          "package": "curlhs",
          "signature": "CCURLcode",
          "source": "src/Network-Curlhs-Base.html#cCURLE_ABORTED_BY_CALLBACK",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLE_ABORTED_BY_CALLBACK",
          "package": "curlhs",
          "partial": "CURLE ABORTED BY CALLBACK",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLE_ABORTED_BY_CALLBACK"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLE_AGAIN",
          "package": "curlhs",
          "signature": "CCURLcode",
          "source": "src/Network-Curlhs-Base.html#cCURLE_AGAIN",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLE_AGAIN",
          "package": "curlhs",
          "partial": "CURLE AGAIN",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLE_AGAIN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLE_BAD_CONTENT_ENCODING",
          "package": "curlhs",
          "signature": "CCURLcode",
          "source": "src/Network-Curlhs-Base.html#cCURLE_BAD_CONTENT_ENCODING",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLE_BAD_CONTENT_ENCODING",
          "package": "curlhs",
          "partial": "CURLE BAD CONTENT ENCODING",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLE_BAD_CONTENT_ENCODING"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLE_BAD_DOWNLOAD_RESUME",
          "package": "curlhs",
          "signature": "CCURLcode",
          "source": "src/Network-Curlhs-Base.html#cCURLE_BAD_DOWNLOAD_RESUME",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLE_BAD_DOWNLOAD_RESUME",
          "package": "curlhs",
          "partial": "CURLE BAD DOWNLOAD RESUME",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLE_BAD_DOWNLOAD_RESUME"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLE_BAD_FUNCTION_ARGUMENT",
          "package": "curlhs",
          "signature": "CCURLcode",
          "source": "src/Network-Curlhs-Base.html#cCURLE_BAD_FUNCTION_ARGUMENT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLE_BAD_FUNCTION_ARGUMENT",
          "package": "curlhs",
          "partial": "CURLE BAD FUNCTION ARGUMENT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLE_BAD_FUNCTION_ARGUMENT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLE_CHUNK_FAILED",
          "package": "curlhs",
          "signature": "CCURLcode",
          "source": "src/Network-Curlhs-Base.html#cCURLE_CHUNK_FAILED",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLE_CHUNK_FAILED",
          "package": "curlhs",
          "partial": "CURLE CHUNK FAILED",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLE_CHUNK_FAILED"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLE_CONV_FAILED",
          "package": "curlhs",
          "signature": "CCURLcode",
          "source": "src/Network-Curlhs-Base.html#cCURLE_CONV_FAILED",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLE_CONV_FAILED",
          "package": "curlhs",
          "partial": "CURLE CONV FAILED",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLE_CONV_FAILED"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLE_CONV_REQD",
          "package": "curlhs",
          "signature": "CCURLcode",
          "source": "src/Network-Curlhs-Base.html#cCURLE_CONV_REQD",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLE_CONV_REQD",
          "package": "curlhs",
          "partial": "CURLE CONV REQD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLE_CONV_REQD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLE_COULDNT_CONNECT",
          "package": "curlhs",
          "signature": "CCURLcode",
          "source": "src/Network-Curlhs-Base.html#cCURLE_COULDNT_CONNECT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLE_COULDNT_CONNECT",
          "package": "curlhs",
          "partial": "CURLE COULDNT CONNECT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLE_COULDNT_CONNECT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLE_COULDNT_RESOLVE_HOST",
          "package": "curlhs",
          "signature": "CCURLcode",
          "source": "src/Network-Curlhs-Base.html#cCURLE_COULDNT_RESOLVE_HOST",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLE_COULDNT_RESOLVE_HOST",
          "package": "curlhs",
          "partial": "CURLE COULDNT RESOLVE HOST",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLE_COULDNT_RESOLVE_HOST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLE_COULDNT_RESOLVE_PROXY",
          "package": "curlhs",
          "signature": "CCURLcode",
          "source": "src/Network-Curlhs-Base.html#cCURLE_COULDNT_RESOLVE_PROXY",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLE_COULDNT_RESOLVE_PROXY",
          "package": "curlhs",
          "partial": "CURLE COULDNT RESOLVE PROXY",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLE_COULDNT_RESOLVE_PROXY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLE_FAILED_INIT",
          "package": "curlhs",
          "signature": "CCURLcode",
          "source": "src/Network-Curlhs-Base.html#cCURLE_FAILED_INIT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLE_FAILED_INIT",
          "package": "curlhs",
          "partial": "CURLE FAILED INIT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLE_FAILED_INIT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLE_FILESIZE_EXCEEDED",
          "package": "curlhs",
          "signature": "CCURLcode",
          "source": "src/Network-Curlhs-Base.html#cCURLE_FILESIZE_EXCEEDED",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLE_FILESIZE_EXCEEDED",
          "package": "curlhs",
          "partial": "CURLE FILESIZE EXCEEDED",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLE_FILESIZE_EXCEEDED"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLE_FILE_COULDNT_READ_FILE",
          "package": "curlhs",
          "signature": "CCURLcode",
          "source": "src/Network-Curlhs-Base.html#cCURLE_FILE_COULDNT_READ_FILE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLE_FILE_COULDNT_READ_FILE",
          "package": "curlhs",
          "partial": "CURLE FILE COULDNT READ FILE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLE_FILE_COULDNT_READ_FILE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLE_FTP_ACCEPT_FAILED",
          "package": "curlhs",
          "signature": "CCURLcode",
          "source": "src/Network-Curlhs-Base.html#cCURLE_FTP_ACCEPT_FAILED",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLE_FTP_ACCEPT_FAILED",
          "package": "curlhs",
          "partial": "CURLE FTP ACCEPT FAILED",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLE_FTP_ACCEPT_FAILED"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLE_FTP_ACCEPT_TIMEOUT",
          "package": "curlhs",
          "signature": "CCURLcode",
          "source": "src/Network-Curlhs-Base.html#cCURLE_FTP_ACCEPT_TIMEOUT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLE_FTP_ACCEPT_TIMEOUT",
          "package": "curlhs",
          "partial": "CURLE FTP ACCEPT TIMEOUT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLE_FTP_ACCEPT_TIMEOUT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLE_FTP_BAD_FILE_LIST",
          "package": "curlhs",
          "signature": "CCURLcode",
          "source": "src/Network-Curlhs-Base.html#cCURLE_FTP_BAD_FILE_LIST",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLE_FTP_BAD_FILE_LIST",
          "package": "curlhs",
          "partial": "CURLE FTP BAD FILE LIST",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLE_FTP_BAD_FILE_LIST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLE_FTP_CANT_GET_HOST",
          "package": "curlhs",
          "signature": "CCURLcode",
          "source": "src/Network-Curlhs-Base.html#cCURLE_FTP_CANT_GET_HOST",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLE_FTP_CANT_GET_HOST",
          "package": "curlhs",
          "partial": "CURLE FTP CANT GET HOST",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLE_FTP_CANT_GET_HOST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLE_FTP_COULDNT_RETR_FILE",
          "package": "curlhs",
          "signature": "CCURLcode",
          "source": "src/Network-Curlhs-Base.html#cCURLE_FTP_COULDNT_RETR_FILE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLE_FTP_COULDNT_RETR_FILE",
          "package": "curlhs",
          "partial": "CURLE FTP COULDNT RETR FILE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLE_FTP_COULDNT_RETR_FILE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLE_FTP_COULDNT_SET_TYPE",
          "package": "curlhs",
          "signature": "CCURLcode",
          "source": "src/Network-Curlhs-Base.html#cCURLE_FTP_COULDNT_SET_TYPE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLE_FTP_COULDNT_SET_TYPE",
          "package": "curlhs",
          "partial": "CURLE FTP COULDNT SET TYPE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLE_FTP_COULDNT_SET_TYPE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLE_FTP_COULDNT_USE_REST",
          "package": "curlhs",
          "signature": "CCURLcode",
          "source": "src/Network-Curlhs-Base.html#cCURLE_FTP_COULDNT_USE_REST",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLE_FTP_COULDNT_USE_REST",
          "package": "curlhs",
          "partial": "CURLE FTP COULDNT USE REST",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLE_FTP_COULDNT_USE_REST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLE_FTP_PORT_FAILED",
          "package": "curlhs",
          "signature": "CCURLcode",
          "source": "src/Network-Curlhs-Base.html#cCURLE_FTP_PORT_FAILED",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLE_FTP_PORT_FAILED",
          "package": "curlhs",
          "partial": "CURLE FTP PORT FAILED",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLE_FTP_PORT_FAILED"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLE_FTP_PRET_FAILED",
          "package": "curlhs",
          "signature": "CCURLcode",
          "source": "src/Network-Curlhs-Base.html#cCURLE_FTP_PRET_FAILED",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLE_FTP_PRET_FAILED",
          "package": "curlhs",
          "partial": "CURLE FTP PRET FAILED",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLE_FTP_PRET_FAILED"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLE_FTP_WEIRD_227_FORMAT",
          "package": "curlhs",
          "signature": "CCURLcode",
          "source": "src/Network-Curlhs-Base.html#cCURLE_FTP_WEIRD_227_FORMAT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLE_FTP_WEIRD_227_FORMAT",
          "package": "curlhs",
          "partial": "CURLE FTP WEIRD FORMAT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLE_FTP_WEIRD_227_FORMAT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLE_FTP_WEIRD_PASS_REPLY",
          "package": "curlhs",
          "signature": "CCURLcode",
          "source": "src/Network-Curlhs-Base.html#cCURLE_FTP_WEIRD_PASS_REPLY",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLE_FTP_WEIRD_PASS_REPLY",
          "package": "curlhs",
          "partial": "CURLE FTP WEIRD PASS REPLY",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLE_FTP_WEIRD_PASS_REPLY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLE_FTP_WEIRD_PASV_REPLY",
          "package": "curlhs",
          "signature": "CCURLcode",
          "source": "src/Network-Curlhs-Base.html#cCURLE_FTP_WEIRD_PASV_REPLY",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLE_FTP_WEIRD_PASV_REPLY",
          "package": "curlhs",
          "partial": "CURLE FTP WEIRD PASV REPLY",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLE_FTP_WEIRD_PASV_REPLY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLE_FTP_WEIRD_SERVER_REPLY",
          "package": "curlhs",
          "signature": "CCURLcode",
          "source": "src/Network-Curlhs-Base.html#cCURLE_FTP_WEIRD_SERVER_REPLY",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLE_FTP_WEIRD_SERVER_REPLY",
          "package": "curlhs",
          "partial": "CURLE FTP WEIRD SERVER REPLY",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLE_FTP_WEIRD_SERVER_REPLY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLE_FUNCTION_NOT_FOUND",
          "package": "curlhs",
          "signature": "CCURLcode",
          "source": "src/Network-Curlhs-Base.html#cCURLE_FUNCTION_NOT_FOUND",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLE_FUNCTION_NOT_FOUND",
          "package": "curlhs",
          "partial": "CURLE FUNCTION NOT FOUND",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLE_FUNCTION_NOT_FOUND"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLE_GOT_NOTHING",
          "package": "curlhs",
          "signature": "CCURLcode",
          "source": "src/Network-Curlhs-Base.html#cCURLE_GOT_NOTHING",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLE_GOT_NOTHING",
          "package": "curlhs",
          "partial": "CURLE GOT NOTHING",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLE_GOT_NOTHING"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLE_HTTP_POST_ERROR",
          "package": "curlhs",
          "signature": "CCURLcode",
          "source": "src/Network-Curlhs-Base.html#cCURLE_HTTP_POST_ERROR",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLE_HTTP_POST_ERROR",
          "package": "curlhs",
          "partial": "CURLE HTTP POST ERROR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLE_HTTP_POST_ERROR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLE_HTTP_RETURNED_ERROR",
          "package": "curlhs",
          "signature": "CCURLcode",
          "source": "src/Network-Curlhs-Base.html#cCURLE_HTTP_RETURNED_ERROR",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLE_HTTP_RETURNED_ERROR",
          "package": "curlhs",
          "partial": "CURLE HTTP RETURNED ERROR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLE_HTTP_RETURNED_ERROR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLE_INTERFACE_FAILED",
          "package": "curlhs",
          "signature": "CCURLcode",
          "source": "src/Network-Curlhs-Base.html#cCURLE_INTERFACE_FAILED",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLE_INTERFACE_FAILED",
          "package": "curlhs",
          "partial": "CURLE INTERFACE FAILED",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLE_INTERFACE_FAILED"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLE_LDAP_CANNOT_BIND",
          "package": "curlhs",
          "signature": "CCURLcode",
          "source": "src/Network-Curlhs-Base.html#cCURLE_LDAP_CANNOT_BIND",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLE_LDAP_CANNOT_BIND",
          "package": "curlhs",
          "partial": "CURLE LDAP CANNOT BIND",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLE_LDAP_CANNOT_BIND"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLE_LDAP_INVALID_URL",
          "package": "curlhs",
          "signature": "CCURLcode",
          "source": "src/Network-Curlhs-Base.html#cCURLE_LDAP_INVALID_URL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLE_LDAP_INVALID_URL",
          "package": "curlhs",
          "partial": "CURLE LDAP INVALID URL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLE_LDAP_INVALID_URL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLE_LDAP_SEARCH_FAILED",
          "package": "curlhs",
          "signature": "CCURLcode",
          "source": "src/Network-Curlhs-Base.html#cCURLE_LDAP_SEARCH_FAILED",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLE_LDAP_SEARCH_FAILED",
          "package": "curlhs",
          "partial": "CURLE LDAP SEARCH FAILED",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLE_LDAP_SEARCH_FAILED"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLE_LOGIN_DENIED",
          "package": "curlhs",
          "signature": "CCURLcode",
          "source": "src/Network-Curlhs-Base.html#cCURLE_LOGIN_DENIED",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLE_LOGIN_DENIED",
          "package": "curlhs",
          "partial": "CURLE LOGIN DENIED",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLE_LOGIN_DENIED"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLE_NOT_BUILT_IN",
          "package": "curlhs",
          "signature": "CCURLcode",
          "source": "src/Network-Curlhs-Base.html#cCURLE_NOT_BUILT_IN",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLE_NOT_BUILT_IN",
          "package": "curlhs",
          "partial": "CURLE NOT BUILT IN",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLE_NOT_BUILT_IN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLE_OK",
          "package": "curlhs",
          "signature": "CCURLcode",
          "source": "src/Network-Curlhs-Base.html#cCURLE_OK",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLE_OK",
          "package": "curlhs",
          "partial": "CURLE OK",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLE_OK"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLE_OPERATION_TIMEDOUT",
          "package": "curlhs",
          "signature": "CCURLcode",
          "source": "src/Network-Curlhs-Base.html#cCURLE_OPERATION_TIMEDOUT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLE_OPERATION_TIMEDOUT",
          "package": "curlhs",
          "partial": "CURLE OPERATION TIMEDOUT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLE_OPERATION_TIMEDOUT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLE_OUT_OF_MEMORY",
          "package": "curlhs",
          "signature": "CCURLcode",
          "source": "src/Network-Curlhs-Base.html#cCURLE_OUT_OF_MEMORY",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLE_OUT_OF_MEMORY",
          "package": "curlhs",
          "partial": "CURLE OUT OF MEMORY",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLE_OUT_OF_MEMORY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLE_PARTIAL_FILE",
          "package": "curlhs",
          "signature": "CCURLcode",
          "source": "src/Network-Curlhs-Base.html#cCURLE_PARTIAL_FILE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLE_PARTIAL_FILE",
          "package": "curlhs",
          "partial": "CURLE PARTIAL FILE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLE_PARTIAL_FILE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLE_PEER_FAILED_VERIFICATION",
          "package": "curlhs",
          "signature": "CCURLcode",
          "source": "src/Network-Curlhs-Base.html#cCURLE_PEER_FAILED_VERIFICATION",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLE_PEER_FAILED_VERIFICATION",
          "package": "curlhs",
          "partial": "CURLE PEER FAILED VERIFICATION",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLE_PEER_FAILED_VERIFICATION"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLE_QUOTE_ERROR",
          "package": "curlhs",
          "signature": "CCURLcode",
          "source": "src/Network-Curlhs-Base.html#cCURLE_QUOTE_ERROR",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLE_QUOTE_ERROR",
          "package": "curlhs",
          "partial": "CURLE QUOTE ERROR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLE_QUOTE_ERROR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLE_RANGE_ERROR",
          "package": "curlhs",
          "signature": "CCURLcode",
          "source": "src/Network-Curlhs-Base.html#cCURLE_RANGE_ERROR",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLE_RANGE_ERROR",
          "package": "curlhs",
          "partial": "CURLE RANGE ERROR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLE_RANGE_ERROR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLE_READ_ERROR",
          "package": "curlhs",
          "signature": "CCURLcode",
          "source": "src/Network-Curlhs-Base.html#cCURLE_READ_ERROR",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLE_READ_ERROR",
          "package": "curlhs",
          "partial": "CURLE READ ERROR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLE_READ_ERROR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLE_RECV_ERROR",
          "package": "curlhs",
          "signature": "CCURLcode",
          "source": "src/Network-Curlhs-Base.html#cCURLE_RECV_ERROR",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLE_RECV_ERROR",
          "package": "curlhs",
          "partial": "CURLE RECV ERROR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLE_RECV_ERROR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLE_REMOTE_ACCESS_DENIED",
          "package": "curlhs",
          "signature": "CCURLcode",
          "source": "src/Network-Curlhs-Base.html#cCURLE_REMOTE_ACCESS_DENIED",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLE_REMOTE_ACCESS_DENIED",
          "package": "curlhs",
          "partial": "CURLE REMOTE ACCESS DENIED",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLE_REMOTE_ACCESS_DENIED"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLE_REMOTE_DISK_FULL",
          "package": "curlhs",
          "signature": "CCURLcode",
          "source": "src/Network-Curlhs-Base.html#cCURLE_REMOTE_DISK_FULL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLE_REMOTE_DISK_FULL",
          "package": "curlhs",
          "partial": "CURLE REMOTE DISK FULL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLE_REMOTE_DISK_FULL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLE_REMOTE_FILE_EXISTS",
          "package": "curlhs",
          "signature": "CCURLcode",
          "source": "src/Network-Curlhs-Base.html#cCURLE_REMOTE_FILE_EXISTS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLE_REMOTE_FILE_EXISTS",
          "package": "curlhs",
          "partial": "CURLE REMOTE FILE EXISTS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLE_REMOTE_FILE_EXISTS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLE_REMOTE_FILE_NOT_FOUND",
          "package": "curlhs",
          "signature": "CCURLcode",
          "source": "src/Network-Curlhs-Base.html#cCURLE_REMOTE_FILE_NOT_FOUND",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLE_REMOTE_FILE_NOT_FOUND",
          "package": "curlhs",
          "partial": "CURLE REMOTE FILE NOT FOUND",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLE_REMOTE_FILE_NOT_FOUND"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLE_RTSP_CSEQ_ERROR",
          "package": "curlhs",
          "signature": "CCURLcode",
          "source": "src/Network-Curlhs-Base.html#cCURLE_RTSP_CSEQ_ERROR",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLE_RTSP_CSEQ_ERROR",
          "package": "curlhs",
          "partial": "CURLE RTSP CSEQ ERROR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLE_RTSP_CSEQ_ERROR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLE_RTSP_SESSION_ERROR",
          "package": "curlhs",
          "signature": "CCURLcode",
          "source": "src/Network-Curlhs-Base.html#cCURLE_RTSP_SESSION_ERROR",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLE_RTSP_SESSION_ERROR",
          "package": "curlhs",
          "partial": "CURLE RTSP SESSION ERROR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLE_RTSP_SESSION_ERROR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLE_SEND_ERROR",
          "package": "curlhs",
          "signature": "CCURLcode",
          "source": "src/Network-Curlhs-Base.html#cCURLE_SEND_ERROR",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLE_SEND_ERROR",
          "package": "curlhs",
          "partial": "CURLE SEND ERROR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLE_SEND_ERROR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLE_SEND_FAIL_REWIND",
          "package": "curlhs",
          "signature": "CCURLcode",
          "source": "src/Network-Curlhs-Base.html#cCURLE_SEND_FAIL_REWIND",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLE_SEND_FAIL_REWIND",
          "package": "curlhs",
          "partial": "CURLE SEND FAIL REWIND",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLE_SEND_FAIL_REWIND"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLE_SSH",
          "package": "curlhs",
          "signature": "CCURLcode",
          "source": "src/Network-Curlhs-Base.html#cCURLE_SSH",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLE_SSH",
          "package": "curlhs",
          "partial": "CURLE SSH",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLE_SSH"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLE_SSL_CACERT",
          "package": "curlhs",
          "signature": "CCURLcode",
          "source": "src/Network-Curlhs-Base.html#cCURLE_SSL_CACERT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLE_SSL_CACERT",
          "package": "curlhs",
          "partial": "CURLE SSL CACERT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLE_SSL_CACERT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLE_SSL_CACERT_BADFILE",
          "package": "curlhs",
          "signature": "CCURLcode",
          "source": "src/Network-Curlhs-Base.html#cCURLE_SSL_CACERT_BADFILE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLE_SSL_CACERT_BADFILE",
          "package": "curlhs",
          "partial": "CURLE SSL CACERT BADFILE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLE_SSL_CACERT_BADFILE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLE_SSL_CERTPROBLEM",
          "package": "curlhs",
          "signature": "CCURLcode",
          "source": "src/Network-Curlhs-Base.html#cCURLE_SSL_CERTPROBLEM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLE_SSL_CERTPROBLEM",
          "package": "curlhs",
          "partial": "CURLE SSL CERTPROBLEM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLE_SSL_CERTPROBLEM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLE_SSL_CIPHER",
          "package": "curlhs",
          "signature": "CCURLcode",
          "source": "src/Network-Curlhs-Base.html#cCURLE_SSL_CIPHER",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLE_SSL_CIPHER",
          "package": "curlhs",
          "partial": "CURLE SSL CIPHER",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLE_SSL_CIPHER"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLE_SSL_CONNECT_ERROR",
          "package": "curlhs",
          "signature": "CCURLcode",
          "source": "src/Network-Curlhs-Base.html#cCURLE_SSL_CONNECT_ERROR",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLE_SSL_CONNECT_ERROR",
          "package": "curlhs",
          "partial": "CURLE SSL CONNECT ERROR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLE_SSL_CONNECT_ERROR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLE_SSL_CRL_BADFILE",
          "package": "curlhs",
          "signature": "CCURLcode",
          "source": "src/Network-Curlhs-Base.html#cCURLE_SSL_CRL_BADFILE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLE_SSL_CRL_BADFILE",
          "package": "curlhs",
          "partial": "CURLE SSL CRL BADFILE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLE_SSL_CRL_BADFILE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLE_SSL_ENGINE_INITFAILED",
          "package": "curlhs",
          "signature": "CCURLcode",
          "source": "src/Network-Curlhs-Base.html#cCURLE_SSL_ENGINE_INITFAILED",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLE_SSL_ENGINE_INITFAILED",
          "package": "curlhs",
          "partial": "CURLE SSL ENGINE INITFAILED",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLE_SSL_ENGINE_INITFAILED"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLE_SSL_ENGINE_NOTFOUND",
          "package": "curlhs",
          "signature": "CCURLcode",
          "source": "src/Network-Curlhs-Base.html#cCURLE_SSL_ENGINE_NOTFOUND",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLE_SSL_ENGINE_NOTFOUND",
          "package": "curlhs",
          "partial": "CURLE SSL ENGINE NOTFOUND",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLE_SSL_ENGINE_NOTFOUND"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLE_SSL_ENGINE_SETFAILED",
          "package": "curlhs",
          "signature": "CCURLcode",
          "source": "src/Network-Curlhs-Base.html#cCURLE_SSL_ENGINE_SETFAILED",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLE_SSL_ENGINE_SETFAILED",
          "package": "curlhs",
          "partial": "CURLE SSL ENGINE SETFAILED",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLE_SSL_ENGINE_SETFAILED"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLE_SSL_ISSUER_ERROR",
          "package": "curlhs",
          "signature": "CCURLcode",
          "source": "src/Network-Curlhs-Base.html#cCURLE_SSL_ISSUER_ERROR",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLE_SSL_ISSUER_ERROR",
          "package": "curlhs",
          "partial": "CURLE SSL ISSUER ERROR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLE_SSL_ISSUER_ERROR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLE_SSL_SHUTDOWN_FAILED",
          "package": "curlhs",
          "signature": "CCURLcode",
          "source": "src/Network-Curlhs-Base.html#cCURLE_SSL_SHUTDOWN_FAILED",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLE_SSL_SHUTDOWN_FAILED",
          "package": "curlhs",
          "partial": "CURLE SSL SHUTDOWN FAILED",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLE_SSL_SHUTDOWN_FAILED"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLE_TELNET_OPTION_SYNTAX",
          "package": "curlhs",
          "signature": "CCURLcode",
          "source": "src/Network-Curlhs-Base.html#cCURLE_TELNET_OPTION_SYNTAX",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLE_TELNET_OPTION_SYNTAX",
          "package": "curlhs",
          "partial": "CURLE TELNET OPTION SYNTAX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLE_TELNET_OPTION_SYNTAX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLE_TFTP_ILLEGAL",
          "package": "curlhs",
          "signature": "CCURLcode",
          "source": "src/Network-Curlhs-Base.html#cCURLE_TFTP_ILLEGAL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLE_TFTP_ILLEGAL",
          "package": "curlhs",
          "partial": "CURLE TFTP ILLEGAL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLE_TFTP_ILLEGAL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLE_TFTP_NOSUCHUSER",
          "package": "curlhs",
          "signature": "CCURLcode",
          "source": "src/Network-Curlhs-Base.html#cCURLE_TFTP_NOSUCHUSER",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLE_TFTP_NOSUCHUSER",
          "package": "curlhs",
          "partial": "CURLE TFTP NOSUCHUSER",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLE_TFTP_NOSUCHUSER"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLE_TFTP_NOTFOUND",
          "package": "curlhs",
          "signature": "CCURLcode",
          "source": "src/Network-Curlhs-Base.html#cCURLE_TFTP_NOTFOUND",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLE_TFTP_NOTFOUND",
          "package": "curlhs",
          "partial": "CURLE TFTP NOTFOUND",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLE_TFTP_NOTFOUND"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLE_TFTP_PERM",
          "package": "curlhs",
          "signature": "CCURLcode",
          "source": "src/Network-Curlhs-Base.html#cCURLE_TFTP_PERM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLE_TFTP_PERM",
          "package": "curlhs",
          "partial": "CURLE TFTP PERM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLE_TFTP_PERM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLE_TFTP_UNKNOWNID",
          "package": "curlhs",
          "signature": "CCURLcode",
          "source": "src/Network-Curlhs-Base.html#cCURLE_TFTP_UNKNOWNID",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLE_TFTP_UNKNOWNID",
          "package": "curlhs",
          "partial": "CURLE TFTP UNKNOWNID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLE_TFTP_UNKNOWNID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLE_TOO_MANY_REDIRECTS",
          "package": "curlhs",
          "signature": "CCURLcode",
          "source": "src/Network-Curlhs-Base.html#cCURLE_TOO_MANY_REDIRECTS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLE_TOO_MANY_REDIRECTS",
          "package": "curlhs",
          "partial": "CURLE TOO MANY REDIRECTS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLE_TOO_MANY_REDIRECTS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLE_UNKNOWN_OPTION",
          "package": "curlhs",
          "signature": "CCURLcode",
          "source": "src/Network-Curlhs-Base.html#cCURLE_UNKNOWN_OPTION",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLE_UNKNOWN_OPTION",
          "package": "curlhs",
          "partial": "CURLE UNKNOWN OPTION",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLE_UNKNOWN_OPTION"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLE_UNSUPPORTED_PROTOCOL",
          "package": "curlhs",
          "signature": "CCURLcode",
          "source": "src/Network-Curlhs-Base.html#cCURLE_UNSUPPORTED_PROTOCOL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLE_UNSUPPORTED_PROTOCOL",
          "package": "curlhs",
          "partial": "CURLE UNSUPPORTED PROTOCOL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLE_UNSUPPORTED_PROTOCOL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLE_UPLOAD_FAILED",
          "package": "curlhs",
          "signature": "CCURLcode",
          "source": "src/Network-Curlhs-Base.html#cCURLE_UPLOAD_FAILED",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLE_UPLOAD_FAILED",
          "package": "curlhs",
          "partial": "CURLE UPLOAD FAILED",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLE_UPLOAD_FAILED"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLE_URL_MALFORMAT",
          "package": "curlhs",
          "signature": "CCURLcode",
          "source": "src/Network-Curlhs-Base.html#cCURLE_URL_MALFORMAT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLE_URL_MALFORMAT",
          "package": "curlhs",
          "partial": "CURLE URL MALFORMAT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLE_URL_MALFORMAT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLE_USE_SSL_FAILED",
          "package": "curlhs",
          "signature": "CCURLcode",
          "source": "src/Network-Curlhs-Base.html#cCURLE_USE_SSL_FAILED",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLE_USE_SSL_FAILED",
          "package": "curlhs",
          "partial": "CURLE USE SSL FAILED",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLE_USE_SSL_FAILED"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLE_WRITE_ERROR",
          "package": "curlhs",
          "signature": "CCURLcode",
          "source": "src/Network-Curlhs-Base.html#cCURLE_WRITE_ERROR",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLE_WRITE_ERROR",
          "package": "curlhs",
          "partial": "CURLE WRITE ERROR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLE_WRITE_ERROR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLFILETYPE_DEVICE_BLOCK",
          "package": "curlhs",
          "signature": "CCURLfiletype",
          "source": "src/Network-Curlhs-Base.html#cCURLFILETYPE_DEVICE_BLOCK",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLFILETYPE_DEVICE_BLOCK",
          "package": "curlhs",
          "partial": "CURLFILETYPE DEVICE BLOCK",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLFILETYPE_DEVICE_BLOCK"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLFILETYPE_DEVICE_CHAR",
          "package": "curlhs",
          "signature": "CCURLfiletype",
          "source": "src/Network-Curlhs-Base.html#cCURLFILETYPE_DEVICE_CHAR",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLFILETYPE_DEVICE_CHAR",
          "package": "curlhs",
          "partial": "CURLFILETYPE DEVICE CHAR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLFILETYPE_DEVICE_CHAR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLFILETYPE_DIRECTORY",
          "package": "curlhs",
          "signature": "CCURLfiletype",
          "source": "src/Network-Curlhs-Base.html#cCURLFILETYPE_DIRECTORY",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLFILETYPE_DIRECTORY",
          "package": "curlhs",
          "partial": "CURLFILETYPE DIRECTORY",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLFILETYPE_DIRECTORY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLFILETYPE_DOOR",
          "package": "curlhs",
          "signature": "CCURLfiletype",
          "source": "src/Network-Curlhs-Base.html#cCURLFILETYPE_DOOR",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLFILETYPE_DOOR",
          "package": "curlhs",
          "partial": "CURLFILETYPE DOOR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLFILETYPE_DOOR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLFILETYPE_FILE",
          "package": "curlhs",
          "signature": "CCURLfiletype",
          "source": "src/Network-Curlhs-Base.html#cCURLFILETYPE_FILE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLFILETYPE_FILE",
          "package": "curlhs",
          "partial": "CURLFILETYPE FILE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLFILETYPE_FILE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLFILETYPE_NAMEDPIPE",
          "package": "curlhs",
          "signature": "CCURLfiletype",
          "source": "src/Network-Curlhs-Base.html#cCURLFILETYPE_NAMEDPIPE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLFILETYPE_NAMEDPIPE",
          "package": "curlhs",
          "partial": "CURLFILETYPE NAMEDPIPE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLFILETYPE_NAMEDPIPE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLFILETYPE_SOCKET",
          "package": "curlhs",
          "signature": "CCURLfiletype",
          "source": "src/Network-Curlhs-Base.html#cCURLFILETYPE_SOCKET",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLFILETYPE_SOCKET",
          "package": "curlhs",
          "partial": "CURLFILETYPE SOCKET",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLFILETYPE_SOCKET"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLFILETYPE_SYMLINK",
          "package": "curlhs",
          "signature": "CCURLfiletype",
          "source": "src/Network-Curlhs-Base.html#cCURLFILETYPE_SYMLINK",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLFILETYPE_SYMLINK",
          "package": "curlhs",
          "partial": "CURLFILETYPE SYMLINK",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLFILETYPE_SYMLINK"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLFILETYPE_UNKNOWN",
          "package": "curlhs",
          "signature": "CCURLfiletype",
          "source": "src/Network-Curlhs-Base.html#cCURLFILETYPE_UNKNOWN",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLFILETYPE_UNKNOWN",
          "package": "curlhs",
          "partial": "CURLFILETYPE UNKNOWN",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLFILETYPE_UNKNOWN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLFINFOFLAG_KNOWN_FILENAME",
          "package": "curlhs",
          "signature": "CUInt",
          "source": "src/Network-Curlhs-Base.html#cCURLFINFOFLAG_KNOWN_FILENAME",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLFINFOFLAG_KNOWN_FILENAME",
          "package": "curlhs",
          "partial": "CURLFINFOFLAG KNOWN FILENAME",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLFINFOFLAG_KNOWN_FILENAME"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLFINFOFLAG_KNOWN_FILETYPE",
          "package": "curlhs",
          "signature": "CUInt",
          "source": "src/Network-Curlhs-Base.html#cCURLFINFOFLAG_KNOWN_FILETYPE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLFINFOFLAG_KNOWN_FILETYPE",
          "package": "curlhs",
          "partial": "CURLFINFOFLAG KNOWN FILETYPE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLFINFOFLAG_KNOWN_FILETYPE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLFINFOFLAG_KNOWN_GID",
          "package": "curlhs",
          "signature": "CUInt",
          "source": "src/Network-Curlhs-Base.html#cCURLFINFOFLAG_KNOWN_GID",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLFINFOFLAG_KNOWN_GID",
          "package": "curlhs",
          "partial": "CURLFINFOFLAG KNOWN GID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLFINFOFLAG_KNOWN_GID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLFINFOFLAG_KNOWN_HLINKCOUNT",
          "package": "curlhs",
          "signature": "CUInt",
          "source": "src/Network-Curlhs-Base.html#cCURLFINFOFLAG_KNOWN_HLINKCOUNT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLFINFOFLAG_KNOWN_HLINKCOUNT",
          "package": "curlhs",
          "partial": "CURLFINFOFLAG KNOWN HLINKCOUNT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLFINFOFLAG_KNOWN_HLINKCOUNT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLFINFOFLAG_KNOWN_PERM",
          "package": "curlhs",
          "signature": "CUInt",
          "source": "src/Network-Curlhs-Base.html#cCURLFINFOFLAG_KNOWN_PERM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLFINFOFLAG_KNOWN_PERM",
          "package": "curlhs",
          "partial": "CURLFINFOFLAG KNOWN PERM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLFINFOFLAG_KNOWN_PERM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLFINFOFLAG_KNOWN_SIZE",
          "package": "curlhs",
          "signature": "CUInt",
          "source": "src/Network-Curlhs-Base.html#cCURLFINFOFLAG_KNOWN_SIZE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLFINFOFLAG_KNOWN_SIZE",
          "package": "curlhs",
          "partial": "CURLFINFOFLAG KNOWN SIZE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLFINFOFLAG_KNOWN_SIZE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLFINFOFLAG_KNOWN_TIME",
          "package": "curlhs",
          "signature": "CUInt",
          "source": "src/Network-Curlhs-Base.html#cCURLFINFOFLAG_KNOWN_TIME",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLFINFOFLAG_KNOWN_TIME",
          "package": "curlhs",
          "partial": "CURLFINFOFLAG KNOWN TIME",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLFINFOFLAG_KNOWN_TIME"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLFINFOFLAG_KNOWN_UID",
          "package": "curlhs",
          "signature": "CUInt",
          "source": "src/Network-Curlhs-Base.html#cCURLFINFOFLAG_KNOWN_UID",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLFINFOFLAG_KNOWN_UID",
          "package": "curlhs",
          "partial": "CURLFINFOFLAG KNOWN UID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLFINFOFLAG_KNOWN_UID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLFTPAUTH_DEFAULT",
          "package": "curlhs",
          "signature": "CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLFTPAUTH_DEFAULT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLFTPAUTH_DEFAULT",
          "package": "curlhs",
          "partial": "CURLFTPAUTH DEFAULT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLFTPAUTH_DEFAULT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLFTPAUTH_SSL",
          "package": "curlhs",
          "signature": "CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLFTPAUTH_SSL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLFTPAUTH_SSL",
          "package": "curlhs",
          "partial": "CURLFTPAUTH SSL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLFTPAUTH_SSL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLFTPAUTH_TLS",
          "package": "curlhs",
          "signature": "CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLFTPAUTH_TLS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLFTPAUTH_TLS",
          "package": "curlhs",
          "partial": "CURLFTPAUTH TLS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLFTPAUTH_TLS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLFTPMETHOD_DEFAULT",
          "package": "curlhs",
          "signature": "CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLFTPMETHOD_DEFAULT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLFTPMETHOD_DEFAULT",
          "package": "curlhs",
          "partial": "CURLFTPMETHOD DEFAULT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLFTPMETHOD_DEFAULT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLFTPMETHOD_MULTICWD",
          "package": "curlhs",
          "signature": "CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLFTPMETHOD_MULTICWD",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLFTPMETHOD_MULTICWD",
          "package": "curlhs",
          "partial": "CURLFTPMETHOD MULTICWD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLFTPMETHOD_MULTICWD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLFTPMETHOD_NOCWD",
          "package": "curlhs",
          "signature": "CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLFTPMETHOD_NOCWD",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLFTPMETHOD_NOCWD",
          "package": "curlhs",
          "partial": "CURLFTPMETHOD NOCWD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLFTPMETHOD_NOCWD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLFTPMETHOD_SINGLECWD",
          "package": "curlhs",
          "signature": "CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLFTPMETHOD_SINGLECWD",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLFTPMETHOD_SINGLECWD",
          "package": "curlhs",
          "partial": "CURLFTPMETHOD SINGLECWD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLFTPMETHOD_SINGLECWD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLFTPSSL_CCC_ACTIVE",
          "package": "curlhs",
          "signature": "CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLFTPSSL_CCC_ACTIVE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLFTPSSL_CCC_ACTIVE",
          "package": "curlhs",
          "partial": "CURLFTPSSL CCC ACTIVE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLFTPSSL_CCC_ACTIVE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLFTPSSL_CCC_NONE",
          "package": "curlhs",
          "signature": "CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLFTPSSL_CCC_NONE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLFTPSSL_CCC_NONE",
          "package": "curlhs",
          "partial": "CURLFTPSSL CCC NONE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLFTPSSL_CCC_NONE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLFTPSSL_CCC_PASSIVE",
          "package": "curlhs",
          "signature": "CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLFTPSSL_CCC_PASSIVE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLFTPSSL_CCC_PASSIVE",
          "package": "curlhs",
          "partial": "CURLFTPSSL CCC PASSIVE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLFTPSSL_CCC_PASSIVE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLFTP_CREATE_DIR",
          "package": "curlhs",
          "signature": "CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLFTP_CREATE_DIR",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLFTP_CREATE_DIR",
          "package": "curlhs",
          "partial": "CURLFTP CREATE DIR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLFTP_CREATE_DIR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLFTP_CREATE_DIR_NONE",
          "package": "curlhs",
          "signature": "CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLFTP_CREATE_DIR_NONE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLFTP_CREATE_DIR_NONE",
          "package": "curlhs",
          "partial": "CURLFTP CREATE DIR NONE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLFTP_CREATE_DIR_NONE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLFTP_CREATE_DIR_RETRY",
          "package": "curlhs",
          "signature": "CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLFTP_CREATE_DIR_RETRY",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLFTP_CREATE_DIR_RETRY",
          "package": "curlhs",
          "partial": "CURLFTP CREATE DIR RETRY",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLFTP_CREATE_DIR_RETRY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLGSSAPI_DELEGATION_FLAG",
          "package": "curlhs",
          "signature": "CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLGSSAPI_DELEGATION_FLAG",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLGSSAPI_DELEGATION_FLAG",
          "package": "curlhs",
          "partial": "CURLGSSAPI DELEGATION FLAG",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLGSSAPI_DELEGATION_FLAG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLGSSAPI_DELEGATION_NONE",
          "package": "curlhs",
          "signature": "CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLGSSAPI_DELEGATION_NONE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLGSSAPI_DELEGATION_NONE",
          "package": "curlhs",
          "partial": "CURLGSSAPI DELEGATION NONE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLGSSAPI_DELEGATION_NONE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLGSSAPI_DELEGATION_POLICY_FLAG",
          "package": "curlhs",
          "signature": "CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLGSSAPI_DELEGATION_POLICY_FLAG",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLGSSAPI_DELEGATION_POLICY_FLAG",
          "package": "curlhs",
          "partial": "CURLGSSAPI DELEGATION POLICY FLAG",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLGSSAPI_DELEGATION_POLICY_FLAG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLINFO_APPCONNECT_TIME",
          "package": "curlhs",
          "signature": "CCURLinfo'CDouble",
          "source": "src/Network-Curlhs-Base.html#cCURLINFO_APPCONNECT_TIME",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLINFO_APPCONNECT_TIME",
          "package": "curlhs",
          "partial": "CURLINFO APPCONNECT TIME",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLINFO_APPCONNECT_TIME"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLINFO_CERTINFO",
          "package": "curlhs",
          "signature": "CCURLinfo'CertI",
          "source": "src/Network-Curlhs-Base.html#cCURLINFO_CERTINFO",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLINFO_CERTINFO",
          "package": "curlhs",
          "partial": "CURLINFO CERTINFO",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLINFO_CERTINFO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLINFO_CONDITION_UNMET",
          "package": "curlhs",
          "signature": "CCURLinfo'CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLINFO_CONDITION_UNMET",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLINFO_CONDITION_UNMET",
          "package": "curlhs",
          "partial": "CURLINFO CONDITION UNMET",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLINFO_CONDITION_UNMET"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLINFO_CONNECT_TIME",
          "package": "curlhs",
          "signature": "CCURLinfo'CDouble",
          "source": "src/Network-Curlhs-Base.html#cCURLINFO_CONNECT_TIME",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLINFO_CONNECT_TIME",
          "package": "curlhs",
          "partial": "CURLINFO CONNECT TIME",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLINFO_CONNECT_TIME"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLINFO_CONTENT_LENGTH_DOWNLOAD",
          "package": "curlhs",
          "signature": "CCURLinfo'CDouble",
          "source": "src/Network-Curlhs-Base.html#cCURLINFO_CONTENT_LENGTH_DOWNLOAD",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLINFO_CONTENT_LENGTH_DOWNLOAD",
          "package": "curlhs",
          "partial": "CURLINFO CONTENT LENGTH DOWNLOAD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLINFO_CONTENT_LENGTH_DOWNLOAD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLINFO_CONTENT_LENGTH_UPLOAD",
          "package": "curlhs",
          "signature": "CCURLinfo'CDouble",
          "source": "src/Network-Curlhs-Base.html#cCURLINFO_CONTENT_LENGTH_UPLOAD",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLINFO_CONTENT_LENGTH_UPLOAD",
          "package": "curlhs",
          "partial": "CURLINFO CONTENT LENGTH UPLOAD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLINFO_CONTENT_LENGTH_UPLOAD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLINFO_CONTENT_TYPE",
          "package": "curlhs",
          "signature": "CCURLinfo'CString",
          "source": "src/Network-Curlhs-Base.html#cCURLINFO_CONTENT_TYPE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLINFO_CONTENT_TYPE",
          "package": "curlhs",
          "partial": "CURLINFO CONTENT TYPE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLINFO_CONTENT_TYPE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLINFO_COOKIELIST",
          "package": "curlhs",
          "signature": "CCURLinfo'SList",
          "source": "src/Network-Curlhs-Base.html#cCURLINFO_COOKIELIST",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLINFO_COOKIELIST",
          "package": "curlhs",
          "partial": "CURLINFO COOKIELIST",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLINFO_COOKIELIST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLINFO_DATA_IN",
          "package": "curlhs",
          "signature": "CCURL_infotype",
          "source": "src/Network-Curlhs-Base.html#cCURLINFO_DATA_IN",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLINFO_DATA_IN",
          "package": "curlhs",
          "partial": "CURLINFO DATA IN",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLINFO_DATA_IN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLINFO_DATA_OUT",
          "package": "curlhs",
          "signature": "CCURL_infotype",
          "source": "src/Network-Curlhs-Base.html#cCURLINFO_DATA_OUT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLINFO_DATA_OUT",
          "package": "curlhs",
          "partial": "CURLINFO DATA OUT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLINFO_DATA_OUT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLINFO_EFFECTIVE_URL",
          "package": "curlhs",
          "signature": "CCURLinfo'CString",
          "source": "src/Network-Curlhs-Base.html#cCURLINFO_EFFECTIVE_URL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLINFO_EFFECTIVE_URL",
          "package": "curlhs",
          "partial": "CURLINFO EFFECTIVE URL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLINFO_EFFECTIVE_URL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLINFO_END",
          "package": "curlhs",
          "signature": "CCURL_infotype",
          "source": "src/Network-Curlhs-Base.html#cCURLINFO_END",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLINFO_END",
          "package": "curlhs",
          "partial": "CURLINFO END",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLINFO_END"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLINFO_FILETIME",
          "package": "curlhs",
          "signature": "CCURLinfo'CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLINFO_FILETIME",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLINFO_FILETIME",
          "package": "curlhs",
          "partial": "CURLINFO FILETIME",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLINFO_FILETIME"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLINFO_FTP_ENTRY_PATH",
          "package": "curlhs",
          "signature": "CCURLinfo'CString",
          "source": "src/Network-Curlhs-Base.html#cCURLINFO_FTP_ENTRY_PATH",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLINFO_FTP_ENTRY_PATH",
          "package": "curlhs",
          "partial": "CURLINFO FTP ENTRY PATH",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLINFO_FTP_ENTRY_PATH"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLINFO_HEADER_IN",
          "package": "curlhs",
          "signature": "CCURL_infotype",
          "source": "src/Network-Curlhs-Base.html#cCURLINFO_HEADER_IN",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLINFO_HEADER_IN",
          "package": "curlhs",
          "partial": "CURLINFO HEADER IN",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLINFO_HEADER_IN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLINFO_HEADER_OUT",
          "package": "curlhs",
          "signature": "CCURL_infotype",
          "source": "src/Network-Curlhs-Base.html#cCURLINFO_HEADER_OUT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLINFO_HEADER_OUT",
          "package": "curlhs",
          "partial": "CURLINFO HEADER OUT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLINFO_HEADER_OUT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLINFO_HEADER_SIZE",
          "package": "curlhs",
          "signature": "CCURLinfo'CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLINFO_HEADER_SIZE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLINFO_HEADER_SIZE",
          "package": "curlhs",
          "partial": "CURLINFO HEADER SIZE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLINFO_HEADER_SIZE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLINFO_HTTPAUTH_AVAIL",
          "package": "curlhs",
          "signature": "CCURLinfo'CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLINFO_HTTPAUTH_AVAIL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLINFO_HTTPAUTH_AVAIL",
          "package": "curlhs",
          "partial": "CURLINFO HTTPAUTH AVAIL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLINFO_HTTPAUTH_AVAIL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLINFO_HTTP_CONNECTCODE",
          "package": "curlhs",
          "signature": "CCURLinfo'CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLINFO_HTTP_CONNECTCODE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLINFO_HTTP_CONNECTCODE",
          "package": "curlhs",
          "partial": "CURLINFO HTTP CONNECTCODE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLINFO_HTTP_CONNECTCODE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLINFO_LASTSOCKET",
          "package": "curlhs",
          "signature": "CCURLinfo'CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLINFO_LASTSOCKET",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLINFO_LASTSOCKET",
          "package": "curlhs",
          "partial": "CURLINFO LASTSOCKET",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLINFO_LASTSOCKET"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLINFO_LOCAL_IP",
          "package": "curlhs",
          "signature": "CCURLinfo'CString",
          "source": "src/Network-Curlhs-Base.html#cCURLINFO_LOCAL_IP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLINFO_LOCAL_IP",
          "package": "curlhs",
          "partial": "CURLINFO LOCAL IP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLINFO_LOCAL_IP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLINFO_LOCAL_PORT",
          "package": "curlhs",
          "signature": "CCURLinfo'CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLINFO_LOCAL_PORT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLINFO_LOCAL_PORT",
          "package": "curlhs",
          "partial": "CURLINFO LOCAL PORT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLINFO_LOCAL_PORT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLINFO_NAMELOOKUP_TIME",
          "package": "curlhs",
          "signature": "CCURLinfo'CDouble",
          "source": "src/Network-Curlhs-Base.html#cCURLINFO_NAMELOOKUP_TIME",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLINFO_NAMELOOKUP_TIME",
          "package": "curlhs",
          "partial": "CURLINFO NAMELOOKUP TIME",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLINFO_NAMELOOKUP_TIME"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLINFO_NUM_CONNECTS",
          "package": "curlhs",
          "signature": "CCURLinfo'CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLINFO_NUM_CONNECTS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLINFO_NUM_CONNECTS",
          "package": "curlhs",
          "partial": "CURLINFO NUM CONNECTS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLINFO_NUM_CONNECTS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLINFO_OS_ERRNO",
          "package": "curlhs",
          "signature": "CCURLinfo'CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLINFO_OS_ERRNO",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLINFO_OS_ERRNO",
          "package": "curlhs",
          "partial": "CURLINFO OS ERRNO",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLINFO_OS_ERRNO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLINFO_PRETRANSFER_TIME",
          "package": "curlhs",
          "signature": "CCURLinfo'CDouble",
          "source": "src/Network-Curlhs-Base.html#cCURLINFO_PRETRANSFER_TIME",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLINFO_PRETRANSFER_TIME",
          "package": "curlhs",
          "partial": "CURLINFO PRETRANSFER TIME",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLINFO_PRETRANSFER_TIME"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLINFO_PRIMARY_IP",
          "package": "curlhs",
          "signature": "CCURLinfo'CString",
          "source": "src/Network-Curlhs-Base.html#cCURLINFO_PRIMARY_IP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLINFO_PRIMARY_IP",
          "package": "curlhs",
          "partial": "CURLINFO PRIMARY IP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLINFO_PRIMARY_IP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLINFO_PRIMARY_PORT",
          "package": "curlhs",
          "signature": "CCURLinfo'CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLINFO_PRIMARY_PORT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLINFO_PRIMARY_PORT",
          "package": "curlhs",
          "partial": "CURLINFO PRIMARY PORT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLINFO_PRIMARY_PORT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLINFO_PRIVATE",
          "package": "curlhs",
          "signature": "CCURLinfo'CString",
          "source": "src/Network-Curlhs-Base.html#cCURLINFO_PRIVATE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLINFO_PRIVATE",
          "package": "curlhs",
          "partial": "CURLINFO PRIVATE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLINFO_PRIVATE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLINFO_PROXYAUTH_AVAIL",
          "package": "curlhs",
          "signature": "CCURLinfo'CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLINFO_PROXYAUTH_AVAIL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLINFO_PROXYAUTH_AVAIL",
          "package": "curlhs",
          "partial": "CURLINFO PROXYAUTH AVAIL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLINFO_PROXYAUTH_AVAIL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLINFO_REDIRECT_COUNT",
          "package": "curlhs",
          "signature": "CCURLinfo'CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLINFO_REDIRECT_COUNT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLINFO_REDIRECT_COUNT",
          "package": "curlhs",
          "partial": "CURLINFO REDIRECT COUNT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLINFO_REDIRECT_COUNT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLINFO_REDIRECT_TIME",
          "package": "curlhs",
          "signature": "CCURLinfo'CDouble",
          "source": "src/Network-Curlhs-Base.html#cCURLINFO_REDIRECT_TIME",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLINFO_REDIRECT_TIME",
          "package": "curlhs",
          "partial": "CURLINFO REDIRECT TIME",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLINFO_REDIRECT_TIME"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLINFO_REDIRECT_URL",
          "package": "curlhs",
          "signature": "CCURLinfo'CString",
          "source": "src/Network-Curlhs-Base.html#cCURLINFO_REDIRECT_URL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLINFO_REDIRECT_URL",
          "package": "curlhs",
          "partial": "CURLINFO REDIRECT URL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLINFO_REDIRECT_URL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLINFO_REQUEST_SIZE",
          "package": "curlhs",
          "signature": "CCURLinfo'CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLINFO_REQUEST_SIZE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLINFO_REQUEST_SIZE",
          "package": "curlhs",
          "partial": "CURLINFO REQUEST SIZE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLINFO_REQUEST_SIZE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLINFO_RESPONSE_CODE",
          "package": "curlhs",
          "signature": "CCURLinfo'CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLINFO_RESPONSE_CODE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLINFO_RESPONSE_CODE",
          "package": "curlhs",
          "partial": "CURLINFO RESPONSE CODE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLINFO_RESPONSE_CODE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLINFO_RTSP_CLIENT_CSEQ",
          "package": "curlhs",
          "signature": "CCURLinfo'CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLINFO_RTSP_CLIENT_CSEQ",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLINFO_RTSP_CLIENT_CSEQ",
          "package": "curlhs",
          "partial": "CURLINFO RTSP CLIENT CSEQ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLINFO_RTSP_CLIENT_CSEQ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLINFO_RTSP_CSEQ_RECV",
          "package": "curlhs",
          "signature": "CCURLinfo'CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLINFO_RTSP_CSEQ_RECV",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLINFO_RTSP_CSEQ_RECV",
          "package": "curlhs",
          "partial": "CURLINFO RTSP CSEQ RECV",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLINFO_RTSP_CSEQ_RECV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLINFO_RTSP_SERVER_CSEQ",
          "package": "curlhs",
          "signature": "CCURLinfo'CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLINFO_RTSP_SERVER_CSEQ",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLINFO_RTSP_SERVER_CSEQ",
          "package": "curlhs",
          "partial": "CURLINFO RTSP SERVER CSEQ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLINFO_RTSP_SERVER_CSEQ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLINFO_RTSP_SESSION_ID",
          "package": "curlhs",
          "signature": "CCURLinfo'CString",
          "source": "src/Network-Curlhs-Base.html#cCURLINFO_RTSP_SESSION_ID",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLINFO_RTSP_SESSION_ID",
          "package": "curlhs",
          "partial": "CURLINFO RTSP SESSION ID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLINFO_RTSP_SESSION_ID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLINFO_SIZE_DOWNLOAD",
          "package": "curlhs",
          "signature": "CCURLinfo'CDouble",
          "source": "src/Network-Curlhs-Base.html#cCURLINFO_SIZE_DOWNLOAD",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLINFO_SIZE_DOWNLOAD",
          "package": "curlhs",
          "partial": "CURLINFO SIZE DOWNLOAD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLINFO_SIZE_DOWNLOAD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLINFO_SIZE_UPLOAD",
          "package": "curlhs",
          "signature": "CCURLinfo'CDouble",
          "source": "src/Network-Curlhs-Base.html#cCURLINFO_SIZE_UPLOAD",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLINFO_SIZE_UPLOAD",
          "package": "curlhs",
          "partial": "CURLINFO SIZE UPLOAD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLINFO_SIZE_UPLOAD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLINFO_SPEED_DOWNLOAD",
          "package": "curlhs",
          "signature": "CCURLinfo'CDouble",
          "source": "src/Network-Curlhs-Base.html#cCURLINFO_SPEED_DOWNLOAD",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLINFO_SPEED_DOWNLOAD",
          "package": "curlhs",
          "partial": "CURLINFO SPEED DOWNLOAD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLINFO_SPEED_DOWNLOAD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLINFO_SPEED_UPLOAD",
          "package": "curlhs",
          "signature": "CCURLinfo'CDouble",
          "source": "src/Network-Curlhs-Base.html#cCURLINFO_SPEED_UPLOAD",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLINFO_SPEED_UPLOAD",
          "package": "curlhs",
          "partial": "CURLINFO SPEED UPLOAD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLINFO_SPEED_UPLOAD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLINFO_SSL_DATA_IN",
          "package": "curlhs",
          "signature": "CCURL_infotype",
          "source": "src/Network-Curlhs-Base.html#cCURLINFO_SSL_DATA_IN",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLINFO_SSL_DATA_IN",
          "package": "curlhs",
          "partial": "CURLINFO SSL DATA IN",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLINFO_SSL_DATA_IN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLINFO_SSL_DATA_OUT",
          "package": "curlhs",
          "signature": "CCURL_infotype",
          "source": "src/Network-Curlhs-Base.html#cCURLINFO_SSL_DATA_OUT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLINFO_SSL_DATA_OUT",
          "package": "curlhs",
          "partial": "CURLINFO SSL DATA OUT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLINFO_SSL_DATA_OUT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLINFO_SSL_ENGINES",
          "package": "curlhs",
          "signature": "CCURLinfo'SList",
          "source": "src/Network-Curlhs-Base.html#cCURLINFO_SSL_ENGINES",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLINFO_SSL_ENGINES",
          "package": "curlhs",
          "partial": "CURLINFO SSL ENGINES",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLINFO_SSL_ENGINES"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLINFO_SSL_VERIFYRESULT",
          "package": "curlhs",
          "signature": "CCURLinfo'CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLINFO_SSL_VERIFYRESULT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLINFO_SSL_VERIFYRESULT",
          "package": "curlhs",
          "partial": "CURLINFO SSL VERIFYRESULT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLINFO_SSL_VERIFYRESULT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLINFO_STARTTRANSFER_TIME",
          "package": "curlhs",
          "signature": "CCURLinfo'CDouble",
          "source": "src/Network-Curlhs-Base.html#cCURLINFO_STARTTRANSFER_TIME",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLINFO_STARTTRANSFER_TIME",
          "package": "curlhs",
          "partial": "CURLINFO STARTTRANSFER TIME",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLINFO_STARTTRANSFER_TIME"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLINFO_TEXT",
          "package": "curlhs",
          "signature": "CCURL_infotype",
          "source": "src/Network-Curlhs-Base.html#cCURLINFO_TEXT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLINFO_TEXT",
          "package": "curlhs",
          "partial": "CURLINFO TEXT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLINFO_TEXT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLINFO_TOTAL_TIME",
          "package": "curlhs",
          "signature": "CCURLinfo'CDouble",
          "source": "src/Network-Curlhs-Base.html#cCURLINFO_TOTAL_TIME",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLINFO_TOTAL_TIME",
          "package": "curlhs",
          "partial": "CURLINFO TOTAL TIME",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLINFO_TOTAL_TIME"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLIOCMD_NOP",
          "package": "curlhs",
          "signature": "CCURLiocmd",
          "source": "src/Network-Curlhs-Base.html#cCURLIOCMD_NOP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLIOCMD_NOP",
          "package": "curlhs",
          "partial": "CURLIOCMD NOP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLIOCMD_NOP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLIOCMD_RESTARTREAD",
          "package": "curlhs",
          "signature": "CCURLiocmd",
          "source": "src/Network-Curlhs-Base.html#cCURLIOCMD_RESTARTREAD",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLIOCMD_RESTARTREAD",
          "package": "curlhs",
          "partial": "CURLIOCMD RESTARTREAD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLIOCMD_RESTARTREAD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLIOE_FAILRESTART",
          "package": "curlhs",
          "signature": "CCURLioerr",
          "source": "src/Network-Curlhs-Base.html#cCURLIOE_FAILRESTART",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLIOE_FAILRESTART",
          "package": "curlhs",
          "partial": "CURLIOE FAILRESTART",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLIOE_FAILRESTART"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLIOE_OK",
          "package": "curlhs",
          "signature": "CCURLioerr",
          "source": "src/Network-Curlhs-Base.html#cCURLIOE_OK",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLIOE_OK",
          "package": "curlhs",
          "partial": "CURLIOE OK",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLIOE_OK"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLIOE_UNKNOWNCMD",
          "package": "curlhs",
          "signature": "CCURLioerr",
          "source": "src/Network-Curlhs-Base.html#cCURLIOE_UNKNOWNCMD",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLIOE_UNKNOWNCMD",
          "package": "curlhs",
          "partial": "CURLIOE UNKNOWNCMD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLIOE_UNKNOWNCMD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLKHMATCH_MISMATCH",
          "package": "curlhs",
          "signature": "CCURL_khmatch",
          "source": "src/Network-Curlhs-Base.html#cCURLKHMATCH_MISMATCH",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLKHMATCH_MISMATCH",
          "package": "curlhs",
          "partial": "CURLKHMATCH MISMATCH",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLKHMATCH_MISMATCH"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLKHMATCH_MISSING",
          "package": "curlhs",
          "signature": "CCURL_khmatch",
          "source": "src/Network-Curlhs-Base.html#cCURLKHMATCH_MISSING",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLKHMATCH_MISSING",
          "package": "curlhs",
          "partial": "CURLKHMATCH MISSING",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLKHMATCH_MISSING"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLKHMATCH_OK",
          "package": "curlhs",
          "signature": "CCURL_khmatch",
          "source": "src/Network-Curlhs-Base.html#cCURLKHMATCH_OK",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLKHMATCH_OK",
          "package": "curlhs",
          "partial": "CURLKHMATCH OK",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLKHMATCH_OK"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLKHSTAT_DEFER",
          "package": "curlhs",
          "signature": "CCURL_khstat",
          "source": "src/Network-Curlhs-Base.html#cCURLKHSTAT_DEFER",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLKHSTAT_DEFER",
          "package": "curlhs",
          "partial": "CURLKHSTAT DEFER",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLKHSTAT_DEFER"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLKHSTAT_FINE",
          "package": "curlhs",
          "signature": "CCURL_khstat",
          "source": "src/Network-Curlhs-Base.html#cCURLKHSTAT_FINE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLKHSTAT_FINE",
          "package": "curlhs",
          "partial": "CURLKHSTAT FINE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLKHSTAT_FINE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLKHSTAT_FINE_ADD_TO_FILE",
          "package": "curlhs",
          "signature": "CCURL_khstat",
          "source": "src/Network-Curlhs-Base.html#cCURLKHSTAT_FINE_ADD_TO_FILE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLKHSTAT_FINE_ADD_TO_FILE",
          "package": "curlhs",
          "partial": "CURLKHSTAT FINE ADD TO FILE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLKHSTAT_FINE_ADD_TO_FILE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLKHSTAT_REJECT",
          "package": "curlhs",
          "signature": "CCURL_khstat",
          "source": "src/Network-Curlhs-Base.html#cCURLKHSTAT_REJECT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLKHSTAT_REJECT",
          "package": "curlhs",
          "partial": "CURLKHSTAT REJECT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLKHSTAT_REJECT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLKHTYPE_DSS",
          "package": "curlhs",
          "signature": "CCURL_khtype",
          "source": "src/Network-Curlhs-Base.html#cCURLKHTYPE_DSS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLKHTYPE_DSS",
          "package": "curlhs",
          "partial": "CURLKHTYPE DSS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLKHTYPE_DSS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLKHTYPE_RSA",
          "package": "curlhs",
          "signature": "CCURL_khtype",
          "source": "src/Network-Curlhs-Base.html#cCURLKHTYPE_RSA",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLKHTYPE_RSA",
          "package": "curlhs",
          "partial": "CURLKHTYPE RSA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLKHTYPE_RSA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLKHTYPE_RSA1",
          "package": "curlhs",
          "signature": "CCURL_khtype",
          "source": "src/Network-Curlhs-Base.html#cCURLKHTYPE_RSA1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLKHTYPE_RSA1",
          "package": "curlhs",
          "partial": "CURLKHTYPE RSA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLKHTYPE_RSA1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLKHTYPE_UNKNOWN",
          "package": "curlhs",
          "signature": "CCURL_khtype",
          "source": "src/Network-Curlhs-Base.html#cCURLKHTYPE_UNKNOWN",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLKHTYPE_UNKNOWN",
          "package": "curlhs",
          "partial": "CURLKHTYPE UNKNOWN",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLKHTYPE_UNKNOWN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_ACCEPTTIMEOUT_MS",
          "package": "curlhs",
          "signature": "CCURLoption'CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_ACCEPTTIMEOUT_MS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_ACCEPTTIMEOUT_MS",
          "package": "curlhs",
          "partial": "CURLOPT ACCEPTTIMEOUT MS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_ACCEPTTIMEOUT_MS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_ACCEPT_ENCODING",
          "package": "curlhs",
          "signature": "CCURLoption'CString",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_ACCEPT_ENCODING",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_ACCEPT_ENCODING",
          "package": "curlhs",
          "partial": "CURLOPT ACCEPT ENCODING",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_ACCEPT_ENCODING"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_ADDRESS_SCOPE",
          "package": "curlhs",
          "signature": "CCURLoption'CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_ADDRESS_SCOPE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_ADDRESS_SCOPE",
          "package": "curlhs",
          "partial": "CURLOPT ADDRESS SCOPE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_ADDRESS_SCOPE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_APPEND",
          "package": "curlhs",
          "signature": "CCURLoption'CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_APPEND",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_APPEND",
          "package": "curlhs",
          "partial": "CURLOPT APPEND",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_APPEND"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_AUTOREFERER",
          "package": "curlhs",
          "signature": "CCURLoption'CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_AUTOREFERER",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_AUTOREFERER",
          "package": "curlhs",
          "partial": "CURLOPT AUTOREFERER",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_AUTOREFERER"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_BUFFERSIZE",
          "package": "curlhs",
          "signature": "CCURLoption'CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_BUFFERSIZE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_BUFFERSIZE",
          "package": "curlhs",
          "partial": "CURLOPT BUFFERSIZE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_BUFFERSIZE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_CAINFO",
          "package": "curlhs",
          "signature": "CCURLoption'CString",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_CAINFO",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_CAINFO",
          "package": "curlhs",
          "partial": "CURLOPT CAINFO",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_CAINFO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_CAPATH",
          "package": "curlhs",
          "signature": "CCURLoption'CString",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_CAPATH",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_CAPATH",
          "package": "curlhs",
          "partial": "CURLOPT CAPATH",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_CAPATH"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_CERTINFO",
          "package": "curlhs",
          "signature": "CCURLoption'CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_CERTINFO",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_CERTINFO",
          "package": "curlhs",
          "partial": "CURLOPT CERTINFO",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_CERTINFO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_CHUNK_BGN_FUNCTION",
          "package": "curlhs",
          "signature": "CCURLoption'FunPtr",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_CHUNK_BGN_FUNCTION",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_CHUNK_BGN_FUNCTION",
          "package": "curlhs",
          "partial": "CURLOPT CHUNK BGN FUNCTION",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_CHUNK_BGN_FUNCTION"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_CHUNK_DATA",
          "package": "curlhs",
          "signature": "CCURLoption'UsrPtr",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_CHUNK_DATA",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_CHUNK_DATA",
          "package": "curlhs",
          "partial": "CURLOPT CHUNK DATA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_CHUNK_DATA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_CHUNK_END_FUNCTION",
          "package": "curlhs",
          "signature": "CCURLoption'FunPtr",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_CHUNK_END_FUNCTION",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_CHUNK_END_FUNCTION",
          "package": "curlhs",
          "partial": "CURLOPT CHUNK END FUNCTION",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_CHUNK_END_FUNCTION"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: \u003c/p\u003e\u003c/div\u003e",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_CLOSEPOLICY",
          "package": "curlhs",
          "signature": "CCURLoption'CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_CLOSEPOLICY",
          "type": "function"
        },
        "index": {
          "description": "Deprecated",
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_CLOSEPOLICY",
          "package": "curlhs",
          "partial": "CURLOPT CLOSEPOLICY",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_CLOSEPOLICY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_CLOSESOCKETDATA",
          "package": "curlhs",
          "signature": "CCURLoption'UsrPtr",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_CLOSESOCKETDATA",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_CLOSESOCKETDATA",
          "package": "curlhs",
          "partial": "CURLOPT CLOSESOCKETDATA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_CLOSESOCKETDATA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_CLOSESOCKETFUNCTION",
          "package": "curlhs",
          "signature": "CCURLoption'FunPtr",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_CLOSESOCKETFUNCTION",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_CLOSESOCKETFUNCTION",
          "package": "curlhs",
          "partial": "CURLOPT CLOSESOCKETFUNCTION",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_CLOSESOCKETFUNCTION"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_CONNECTTIMEOUT",
          "package": "curlhs",
          "signature": "CCURLoption'CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_CONNECTTIMEOUT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_CONNECTTIMEOUT",
          "package": "curlhs",
          "partial": "CURLOPT CONNECTTIMEOUT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_CONNECTTIMEOUT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_CONNECTTIMEOUT_MS",
          "package": "curlhs",
          "signature": "CCURLoption'CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_CONNECTTIMEOUT_MS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_CONNECTTIMEOUT_MS",
          "package": "curlhs",
          "partial": "CURLOPT CONNECTTIMEOUT MS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_CONNECTTIMEOUT_MS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_CONNECT_ONLY",
          "package": "curlhs",
          "signature": "CCURLoption'CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_CONNECT_ONLY",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_CONNECT_ONLY",
          "package": "curlhs",
          "partial": "CURLOPT CONNECT ONLY",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_CONNECT_ONLY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_CONV_FROM_NETWORK_FUNCTION",
          "package": "curlhs",
          "signature": "CCURLoption'FunPtr",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_CONV_FROM_NETWORK_FUNCTION",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_CONV_FROM_NETWORK_FUNCTION",
          "package": "curlhs",
          "partial": "CURLOPT CONV FROM NETWORK FUNCTION",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_CONV_FROM_NETWORK_FUNCTION"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_CONV_FROM_UTF8_FUNCTION",
          "package": "curlhs",
          "signature": "CCURLoption'FunPtr",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_CONV_FROM_UTF8_FUNCTION",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_CONV_FROM_UTF8_FUNCTION",
          "package": "curlhs",
          "partial": "CURLOPT CONV FROM UTF FUNCTION",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_CONV_FROM_UTF8_FUNCTION"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_CONV_TO_NETWORK_FUNCTION",
          "package": "curlhs",
          "signature": "CCURLoption'FunPtr",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_CONV_TO_NETWORK_FUNCTION",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_CONV_TO_NETWORK_FUNCTION",
          "package": "curlhs",
          "partial": "CURLOPT CONV TO NETWORK FUNCTION",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_CONV_TO_NETWORK_FUNCTION"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_COOKIE",
          "package": "curlhs",
          "signature": "CCURLoption'CString",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_COOKIE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_COOKIE",
          "package": "curlhs",
          "partial": "CURLOPT COOKIE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_COOKIE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_COOKIEFILE",
          "package": "curlhs",
          "signature": "CCURLoption'CString",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_COOKIEFILE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_COOKIEFILE",
          "package": "curlhs",
          "partial": "CURLOPT COOKIEFILE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_COOKIEFILE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_COOKIEJAR",
          "package": "curlhs",
          "signature": "CCURLoption'CString",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_COOKIEJAR",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_COOKIEJAR",
          "package": "curlhs",
          "partial": "CURLOPT COOKIEJAR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_COOKIEJAR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_COOKIELIST",
          "package": "curlhs",
          "signature": "CCURLoption'CString",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_COOKIELIST",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_COOKIELIST",
          "package": "curlhs",
          "partial": "CURLOPT COOKIELIST",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_COOKIELIST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_COOKIESESSION",
          "package": "curlhs",
          "signature": "CCURLoption'CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_COOKIESESSION",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_COOKIESESSION",
          "package": "curlhs",
          "partial": "CURLOPT COOKIESESSION",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_COOKIESESSION"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_COPYPOSTFIELDS",
          "package": "curlhs",
          "signature": "CCURLoption'CString",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_COPYPOSTFIELDS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_COPYPOSTFIELDS",
          "package": "curlhs",
          "partial": "CURLOPT COPYPOSTFIELDS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_COPYPOSTFIELDS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_CRLF",
          "package": "curlhs",
          "signature": "CCURLoption'CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_CRLF",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_CRLF",
          "package": "curlhs",
          "partial": "CURLOPT CRLF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_CRLF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_CRLFILE",
          "package": "curlhs",
          "signature": "CCURLoption'CString",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_CRLFILE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_CRLFILE",
          "package": "curlhs",
          "partial": "CURLOPT CRLFILE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_CRLFILE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_CUSTOMREQUEST",
          "package": "curlhs",
          "signature": "CCURLoption'CString",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_CUSTOMREQUEST",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_CUSTOMREQUEST",
          "package": "curlhs",
          "partial": "CURLOPT CUSTOMREQUEST",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_CUSTOMREQUEST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_DEBUGDATA",
          "package": "curlhs",
          "signature": "CCURLoption'UsrPtr",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_DEBUGDATA",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_DEBUGDATA",
          "package": "curlhs",
          "partial": "CURLOPT DEBUGDATA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_DEBUGDATA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_DEBUGFUNCTION",
          "package": "curlhs",
          "signature": "CCURLoption'FunPtr",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_DEBUGFUNCTION",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_DEBUGFUNCTION",
          "package": "curlhs",
          "partial": "CURLOPT DEBUGFUNCTION",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_DEBUGFUNCTION"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_DIRLISTONLY",
          "package": "curlhs",
          "signature": "CCURLoption'CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_DIRLISTONLY",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_DIRLISTONLY",
          "package": "curlhs",
          "partial": "CURLOPT DIRLISTONLY",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_DIRLISTONLY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_DNS_CACHE_TIMEOUT",
          "package": "curlhs",
          "signature": "CCURLoption'CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_DNS_CACHE_TIMEOUT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_DNS_CACHE_TIMEOUT",
          "package": "curlhs",
          "partial": "CURLOPT DNS CACHE TIMEOUT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_DNS_CACHE_TIMEOUT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_DNS_SERVERS",
          "package": "curlhs",
          "signature": "CCURLoption'CString",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_DNS_SERVERS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_DNS_SERVERS",
          "package": "curlhs",
          "partial": "CURLOPT DNS SERVERS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_DNS_SERVERS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: \u003c/p\u003e\u003c/div\u003e",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_DNS_USE_GLOBAL_CACHE",
          "package": "curlhs",
          "signature": "CCURLoption'CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_DNS_USE_GLOBAL_CACHE",
          "type": "function"
        },
        "index": {
          "description": "Deprecated",
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_DNS_USE_GLOBAL_CACHE",
          "package": "curlhs",
          "partial": "CURLOPT DNS USE GLOBAL CACHE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_DNS_USE_GLOBAL_CACHE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_EGDSOCKET",
          "package": "curlhs",
          "signature": "CCURLoption'CString",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_EGDSOCKET",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_EGDSOCKET",
          "package": "curlhs",
          "partial": "CURLOPT EGDSOCKET",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_EGDSOCKET"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_ERRORBUFFER",
          "package": "curlhs",
          "signature": "CCURLoption'CString",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_ERRORBUFFER",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_ERRORBUFFER",
          "package": "curlhs",
          "partial": "CURLOPT ERRORBUFFER",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_ERRORBUFFER"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_FAILONERROR",
          "package": "curlhs",
          "signature": "CCURLoption'CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_FAILONERROR",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_FAILONERROR",
          "package": "curlhs",
          "partial": "CURLOPT FAILONERROR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_FAILONERROR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_FILE",
          "package": "curlhs",
          "signature": "CCURLoption'CFile",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_FILE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_FILE",
          "package": "curlhs",
          "partial": "CURLOPT FILE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_FILE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_FILETIME",
          "package": "curlhs",
          "signature": "CCURLoption'CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_FILETIME",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_FILETIME",
          "package": "curlhs",
          "partial": "CURLOPT FILETIME",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_FILETIME"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_FNMATCH_DATA",
          "package": "curlhs",
          "signature": "CCURLoption'UsrPtr",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_FNMATCH_DATA",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_FNMATCH_DATA",
          "package": "curlhs",
          "partial": "CURLOPT FNMATCH DATA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_FNMATCH_DATA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_FNMATCH_FUNCTION",
          "package": "curlhs",
          "signature": "CCURLoption'FunPtr",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_FNMATCH_FUNCTION",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_FNMATCH_FUNCTION",
          "package": "curlhs",
          "partial": "CURLOPT FNMATCH FUNCTION",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_FNMATCH_FUNCTION"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_FOLLOWLOCATION",
          "package": "curlhs",
          "signature": "CCURLoption'CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_FOLLOWLOCATION",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_FOLLOWLOCATION",
          "package": "curlhs",
          "partial": "CURLOPT FOLLOWLOCATION",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_FOLLOWLOCATION"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_FORBID_REUSE",
          "package": "curlhs",
          "signature": "CCURLoption'CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_FORBID_REUSE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_FORBID_REUSE",
          "package": "curlhs",
          "partial": "CURLOPT FORBID REUSE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_FORBID_REUSE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_FRESH_CONNECT",
          "package": "curlhs",
          "signature": "CCURLoption'CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_FRESH_CONNECT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_FRESH_CONNECT",
          "package": "curlhs",
          "partial": "CURLOPT FRESH CONNECT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_FRESH_CONNECT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_FTPPORT",
          "package": "curlhs",
          "signature": "CCURLoption'CString",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_FTPPORT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_FTPPORT",
          "package": "curlhs",
          "partial": "CURLOPT FTPPORT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_FTPPORT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_FTPSSLAUTH",
          "package": "curlhs",
          "signature": "CCURLoption'CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_FTPSSLAUTH",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_FTPSSLAUTH",
          "package": "curlhs",
          "partial": "CURLOPT FTPSSLAUTH",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_FTPSSLAUTH"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_FTP_ACCOUNT",
          "package": "curlhs",
          "signature": "CCURLoption'CString",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_FTP_ACCOUNT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_FTP_ACCOUNT",
          "package": "curlhs",
          "partial": "CURLOPT FTP ACCOUNT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_FTP_ACCOUNT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_FTP_ALTERNATIVE_TO_USER",
          "package": "curlhs",
          "signature": "CCURLoption'CString",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_FTP_ALTERNATIVE_TO_USER",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_FTP_ALTERNATIVE_TO_USER",
          "package": "curlhs",
          "partial": "CURLOPT FTP ALTERNATIVE TO USER",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_FTP_ALTERNATIVE_TO_USER"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_FTP_CREATE_MISSING_DIRS",
          "package": "curlhs",
          "signature": "CCURLoption'CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_FTP_CREATE_MISSING_DIRS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_FTP_CREATE_MISSING_DIRS",
          "package": "curlhs",
          "partial": "CURLOPT FTP CREATE MISSING DIRS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_FTP_CREATE_MISSING_DIRS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_FTP_FILEMETHOD",
          "package": "curlhs",
          "signature": "CCURLoption'CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_FTP_FILEMETHOD",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_FTP_FILEMETHOD",
          "package": "curlhs",
          "partial": "CURLOPT FTP FILEMETHOD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_FTP_FILEMETHOD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_FTP_RESPONSE_TIMEOUT",
          "package": "curlhs",
          "signature": "CCURLoption'CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_FTP_RESPONSE_TIMEOUT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_FTP_RESPONSE_TIMEOUT",
          "package": "curlhs",
          "partial": "CURLOPT FTP RESPONSE TIMEOUT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_FTP_RESPONSE_TIMEOUT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_FTP_SKIP_PASV_IP",
          "package": "curlhs",
          "signature": "CCURLoption'CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_FTP_SKIP_PASV_IP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_FTP_SKIP_PASV_IP",
          "package": "curlhs",
          "partial": "CURLOPT FTP SKIP PASV IP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_FTP_SKIP_PASV_IP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_FTP_SSL_CCC",
          "package": "curlhs",
          "signature": "CCURLoption'CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_FTP_SSL_CCC",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_FTP_SSL_CCC",
          "package": "curlhs",
          "partial": "CURLOPT FTP SSL CCC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_FTP_SSL_CCC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_FTP_USE_EPRT",
          "package": "curlhs",
          "signature": "CCURLoption'CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_FTP_USE_EPRT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_FTP_USE_EPRT",
          "package": "curlhs",
          "partial": "CURLOPT FTP USE EPRT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_FTP_USE_EPRT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_FTP_USE_EPSV",
          "package": "curlhs",
          "signature": "CCURLoption'CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_FTP_USE_EPSV",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_FTP_USE_EPSV",
          "package": "curlhs",
          "partial": "CURLOPT FTP USE EPSV",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_FTP_USE_EPSV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_FTP_USE_PRET",
          "package": "curlhs",
          "signature": "CCURLoption'CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_FTP_USE_PRET",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_FTP_USE_PRET",
          "package": "curlhs",
          "partial": "CURLOPT FTP USE PRET",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_FTP_USE_PRET"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_GSSAPI_DELEGATION",
          "package": "curlhs",
          "signature": "CCURLoption'CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_GSSAPI_DELEGATION",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_GSSAPI_DELEGATION",
          "package": "curlhs",
          "partial": "CURLOPT GSSAPI DELEGATION",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_GSSAPI_DELEGATION"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_HEADER",
          "package": "curlhs",
          "signature": "CCURLoption'CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_HEADER",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_HEADER",
          "package": "curlhs",
          "partial": "CURLOPT HEADER",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_HEADER"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_HEADERDATA",
          "package": "curlhs",
          "signature": "CCURLoption'UsrPtr",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_HEADERDATA",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_HEADERDATA",
          "package": "curlhs",
          "partial": "CURLOPT HEADERDATA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_HEADERDATA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_HEADERFUNCTION",
          "package": "curlhs",
          "signature": "CCURLoption'FunPtr",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_HEADERFUNCTION",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_HEADERFUNCTION",
          "package": "curlhs",
          "partial": "CURLOPT HEADERFUNCTION",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_HEADERFUNCTION"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_HTTP200ALIASES",
          "package": "curlhs",
          "signature": "CCURLoption'SList",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_HTTP200ALIASES",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_HTTP200ALIASES",
          "package": "curlhs",
          "partial": "CURLOPT HTTP ALIASES",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_HTTP200ALIASES"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_HTTPAUTH",
          "package": "curlhs",
          "signature": "CCURLoption'CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_HTTPAUTH",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_HTTPAUTH",
          "package": "curlhs",
          "partial": "CURLOPT HTTPAUTH",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_HTTPAUTH"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_HTTPGET",
          "package": "curlhs",
          "signature": "CCURLoption'CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_HTTPGET",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_HTTPGET",
          "package": "curlhs",
          "partial": "CURLOPT HTTPGET",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_HTTPGET"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_HTTPHEADER",
          "package": "curlhs",
          "signature": "CCURLoption'SList",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_HTTPHEADER",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_HTTPHEADER",
          "package": "curlhs",
          "partial": "CURLOPT HTTPHEADER",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_HTTPHEADER"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_HTTPPOST",
          "package": "curlhs",
          "signature": "CCURLoption'HTTPP",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_HTTPPOST",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_HTTPPOST",
          "package": "curlhs",
          "partial": "CURLOPT HTTPPOST",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_HTTPPOST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_HTTPPROXYTUNNEL",
          "package": "curlhs",
          "signature": "CCURLoption'CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_HTTPPROXYTUNNEL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_HTTPPROXYTUNNEL",
          "package": "curlhs",
          "partial": "CURLOPT HTTPPROXYTUNNEL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_HTTPPROXYTUNNEL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_HTTP_CONTENT_DECODING",
          "package": "curlhs",
          "signature": "CCURLoption'CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_HTTP_CONTENT_DECODING",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_HTTP_CONTENT_DECODING",
          "package": "curlhs",
          "partial": "CURLOPT HTTP CONTENT DECODING",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_HTTP_CONTENT_DECODING"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_HTTP_TRANSFER_DECODING",
          "package": "curlhs",
          "signature": "CCURLoption'CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_HTTP_TRANSFER_DECODING",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_HTTP_TRANSFER_DECODING",
          "package": "curlhs",
          "partial": "CURLOPT HTTP TRANSFER DECODING",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_HTTP_TRANSFER_DECODING"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_HTTP_VERSION",
          "package": "curlhs",
          "signature": "CCURLoption'CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_HTTP_VERSION",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_HTTP_VERSION",
          "package": "curlhs",
          "partial": "CURLOPT HTTP VERSION",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_HTTP_VERSION"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_IGNORE_CONTENT_LENGTH",
          "package": "curlhs",
          "signature": "CCURLoption'CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_IGNORE_CONTENT_LENGTH",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_IGNORE_CONTENT_LENGTH",
          "package": "curlhs",
          "partial": "CURLOPT IGNORE CONTENT LENGTH",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_IGNORE_CONTENT_LENGTH"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_INFILE",
          "package": "curlhs",
          "signature": "CCURLoption'CFile",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_INFILE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_INFILE",
          "package": "curlhs",
          "partial": "CURLOPT INFILE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_INFILE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_INFILESIZE",
          "package": "curlhs",
          "signature": "CCURLoption'CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_INFILESIZE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_INFILESIZE",
          "package": "curlhs",
          "partial": "CURLOPT INFILESIZE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_INFILESIZE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_INFILESIZE_LARGE",
          "package": "curlhs",
          "signature": "CCURLoption'Int64",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_INFILESIZE_LARGE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_INFILESIZE_LARGE",
          "package": "curlhs",
          "partial": "CURLOPT INFILESIZE LARGE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_INFILESIZE_LARGE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_INTERFACE",
          "package": "curlhs",
          "signature": "CCURLoption'CString",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_INTERFACE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_INTERFACE",
          "package": "curlhs",
          "partial": "CURLOPT INTERFACE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_INTERFACE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_INTERLEAVEDATA",
          "package": "curlhs",
          "signature": "CCURLoption'UsrPtr",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_INTERLEAVEDATA",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_INTERLEAVEDATA",
          "package": "curlhs",
          "partial": "CURLOPT INTERLEAVEDATA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_INTERLEAVEDATA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_INTERLEAVEFUNCTION",
          "package": "curlhs",
          "signature": "CCURLoption'FunPtr",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_INTERLEAVEFUNCTION",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_INTERLEAVEFUNCTION",
          "package": "curlhs",
          "partial": "CURLOPT INTERLEAVEFUNCTION",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_INTERLEAVEFUNCTION"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_IOCTLDATA",
          "package": "curlhs",
          "signature": "CCURLoption'UsrPtr",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_IOCTLDATA",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_IOCTLDATA",
          "package": "curlhs",
          "partial": "CURLOPT IOCTLDATA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_IOCTLDATA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_IOCTLFUNCTION",
          "package": "curlhs",
          "signature": "CCURLoption'FunPtr",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_IOCTLFUNCTION",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_IOCTLFUNCTION",
          "package": "curlhs",
          "partial": "CURLOPT IOCTLFUNCTION",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_IOCTLFUNCTION"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_IPRESOLVE",
          "package": "curlhs",
          "signature": "CCURLoption'CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_IPRESOLVE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_IPRESOLVE",
          "package": "curlhs",
          "partial": "CURLOPT IPRESOLVE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_IPRESOLVE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_ISSUERCERT",
          "package": "curlhs",
          "signature": "CCURLoption'CString",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_ISSUERCERT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_ISSUERCERT",
          "package": "curlhs",
          "partial": "CURLOPT ISSUERCERT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_ISSUERCERT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_KEYPASSWD",
          "package": "curlhs",
          "signature": "CCURLoption'CString",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_KEYPASSWD",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_KEYPASSWD",
          "package": "curlhs",
          "partial": "CURLOPT KEYPASSWD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_KEYPASSWD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_KRBLEVEL",
          "package": "curlhs",
          "signature": "CCURLoption'CString",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_KRBLEVEL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_KRBLEVEL",
          "package": "curlhs",
          "partial": "CURLOPT KRBLEVEL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_KRBLEVEL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_LOCALPORT",
          "package": "curlhs",
          "signature": "CCURLoption'CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_LOCALPORT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_LOCALPORT",
          "package": "curlhs",
          "partial": "CURLOPT LOCALPORT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_LOCALPORT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_LOCALPORTRANGE",
          "package": "curlhs",
          "signature": "CCURLoption'CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_LOCALPORTRANGE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_LOCALPORTRANGE",
          "package": "curlhs",
          "partial": "CURLOPT LOCALPORTRANGE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_LOCALPORTRANGE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_LOW_SPEED_LIMIT",
          "package": "curlhs",
          "signature": "CCURLoption'CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_LOW_SPEED_LIMIT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_LOW_SPEED_LIMIT",
          "package": "curlhs",
          "partial": "CURLOPT LOW SPEED LIMIT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_LOW_SPEED_LIMIT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_LOW_SPEED_TIME",
          "package": "curlhs",
          "signature": "CCURLoption'CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_LOW_SPEED_TIME",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_LOW_SPEED_TIME",
          "package": "curlhs",
          "partial": "CURLOPT LOW SPEED TIME",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_LOW_SPEED_TIME"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_MAIL_AUTH",
          "package": "curlhs",
          "signature": "CCURLoption'CString",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_MAIL_AUTH",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_MAIL_AUTH",
          "package": "curlhs",
          "partial": "CURLOPT MAIL AUTH",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_MAIL_AUTH"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_MAIL_FROM",
          "package": "curlhs",
          "signature": "CCURLoption'CString",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_MAIL_FROM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_MAIL_FROM",
          "package": "curlhs",
          "partial": "CURLOPT MAIL FROM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_MAIL_FROM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_MAIL_RCPT",
          "package": "curlhs",
          "signature": "CCURLoption'SList",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_MAIL_RCPT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_MAIL_RCPT",
          "package": "curlhs",
          "partial": "CURLOPT MAIL RCPT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_MAIL_RCPT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_MAXCONNECTS",
          "package": "curlhs",
          "signature": "CCURLoption'CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_MAXCONNECTS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_MAXCONNECTS",
          "package": "curlhs",
          "partial": "CURLOPT MAXCONNECTS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_MAXCONNECTS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_MAXFILESIZE",
          "package": "curlhs",
          "signature": "CCURLoption'CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_MAXFILESIZE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_MAXFILESIZE",
          "package": "curlhs",
          "partial": "CURLOPT MAXFILESIZE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_MAXFILESIZE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_MAXFILESIZE_LARGE",
          "package": "curlhs",
          "signature": "CCURLoption'Int64",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_MAXFILESIZE_LARGE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_MAXFILESIZE_LARGE",
          "package": "curlhs",
          "partial": "CURLOPT MAXFILESIZE LARGE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_MAXFILESIZE_LARGE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_MAXREDIRS",
          "package": "curlhs",
          "signature": "CCURLoption'CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_MAXREDIRS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_MAXREDIRS",
          "package": "curlhs",
          "partial": "CURLOPT MAXREDIRS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_MAXREDIRS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_MAX_RECV_SPEED_LARGE",
          "package": "curlhs",
          "signature": "CCURLoption'Int64",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_MAX_RECV_SPEED_LARGE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_MAX_RECV_SPEED_LARGE",
          "package": "curlhs",
          "partial": "CURLOPT MAX RECV SPEED LARGE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_MAX_RECV_SPEED_LARGE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_MAX_SEND_SPEED_LARGE",
          "package": "curlhs",
          "signature": "CCURLoption'Int64",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_MAX_SEND_SPEED_LARGE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_MAX_SEND_SPEED_LARGE",
          "package": "curlhs",
          "partial": "CURLOPT MAX SEND SPEED LARGE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_MAX_SEND_SPEED_LARGE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_NETRC",
          "package": "curlhs",
          "signature": "CCURLoption'CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_NETRC",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_NETRC",
          "package": "curlhs",
          "partial": "CURLOPT NETRC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_NETRC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_NETRC_FILE",
          "package": "curlhs",
          "signature": "CCURLoption'CString",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_NETRC_FILE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_NETRC_FILE",
          "package": "curlhs",
          "partial": "CURLOPT NETRC FILE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_NETRC_FILE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_NEW_DIRECTORY_PERMS",
          "package": "curlhs",
          "signature": "CCURLoption'CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_NEW_DIRECTORY_PERMS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_NEW_DIRECTORY_PERMS",
          "package": "curlhs",
          "partial": "CURLOPT NEW DIRECTORY PERMS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_NEW_DIRECTORY_PERMS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_NEW_FILE_PERMS",
          "package": "curlhs",
          "signature": "CCURLoption'CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_NEW_FILE_PERMS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_NEW_FILE_PERMS",
          "package": "curlhs",
          "partial": "CURLOPT NEW FILE PERMS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_NEW_FILE_PERMS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_NOBODY",
          "package": "curlhs",
          "signature": "CCURLoption'CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_NOBODY",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_NOBODY",
          "package": "curlhs",
          "partial": "CURLOPT NOBODY",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_NOBODY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_NOPROGRESS",
          "package": "curlhs",
          "signature": "CCURLoption'CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_NOPROGRESS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_NOPROGRESS",
          "package": "curlhs",
          "partial": "CURLOPT NOPROGRESS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_NOPROGRESS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_NOPROXY",
          "package": "curlhs",
          "signature": "CCURLoption'CString",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_NOPROXY",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_NOPROXY",
          "package": "curlhs",
          "partial": "CURLOPT NOPROXY",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_NOPROXY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_NOSIGNAL",
          "package": "curlhs",
          "signature": "CCURLoption'CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_NOSIGNAL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_NOSIGNAL",
          "package": "curlhs",
          "partial": "CURLOPT NOSIGNAL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_NOSIGNAL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_OPENSOCKETDATA",
          "package": "curlhs",
          "signature": "CCURLoption'UsrPtr",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_OPENSOCKETDATA",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_OPENSOCKETDATA",
          "package": "curlhs",
          "partial": "CURLOPT OPENSOCKETDATA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_OPENSOCKETDATA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_OPENSOCKETFUNCTION",
          "package": "curlhs",
          "signature": "CCURLoption'FunPtr",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_OPENSOCKETFUNCTION",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_OPENSOCKETFUNCTION",
          "package": "curlhs",
          "partial": "CURLOPT OPENSOCKETFUNCTION",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_OPENSOCKETFUNCTION"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_PASSWORD",
          "package": "curlhs",
          "signature": "CCURLoption'CString",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_PASSWORD",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_PASSWORD",
          "package": "curlhs",
          "partial": "CURLOPT PASSWORD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_PASSWORD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_PORT",
          "package": "curlhs",
          "signature": "CCURLoption'CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_PORT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_PORT",
          "package": "curlhs",
          "partial": "CURLOPT PORT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_PORT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_POST",
          "package": "curlhs",
          "signature": "CCURLoption'CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_POST",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_POST",
          "package": "curlhs",
          "partial": "CURLOPT POST",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_POST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_POSTFIELDS",
          "package": "curlhs",
          "signature": "CCURLoption'CString",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_POSTFIELDS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_POSTFIELDS",
          "package": "curlhs",
          "partial": "CURLOPT POSTFIELDS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_POSTFIELDS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_POSTFIELDSIZE",
          "package": "curlhs",
          "signature": "CCURLoption'CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_POSTFIELDSIZE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_POSTFIELDSIZE",
          "package": "curlhs",
          "partial": "CURLOPT POSTFIELDSIZE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_POSTFIELDSIZE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_POSTFIELDSIZE_LARGE",
          "package": "curlhs",
          "signature": "CCURLoption'Int64",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_POSTFIELDSIZE_LARGE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_POSTFIELDSIZE_LARGE",
          "package": "curlhs",
          "partial": "CURLOPT POSTFIELDSIZE LARGE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_POSTFIELDSIZE_LARGE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_POSTQUOTE",
          "package": "curlhs",
          "signature": "CCURLoption'SList",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_POSTQUOTE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_POSTQUOTE",
          "package": "curlhs",
          "partial": "CURLOPT POSTQUOTE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_POSTQUOTE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_POSTREDIR",
          "package": "curlhs",
          "signature": "CCURLoption'CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_POSTREDIR",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_POSTREDIR",
          "package": "curlhs",
          "partial": "CURLOPT POSTREDIR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_POSTREDIR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_PREQUOTE",
          "package": "curlhs",
          "signature": "CCURLoption'SList",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_PREQUOTE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_PREQUOTE",
          "package": "curlhs",
          "partial": "CURLOPT PREQUOTE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_PREQUOTE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_PRIVATE",
          "package": "curlhs",
          "signature": "CCURLoption'UsrPtr",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_PRIVATE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_PRIVATE",
          "package": "curlhs",
          "partial": "CURLOPT PRIVATE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_PRIVATE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_PROGRESSDATA",
          "package": "curlhs",
          "signature": "CCURLoption'UsrPtr",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_PROGRESSDATA",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_PROGRESSDATA",
          "package": "curlhs",
          "partial": "CURLOPT PROGRESSDATA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_PROGRESSDATA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_PROGRESSFUNCTION",
          "package": "curlhs",
          "signature": "CCURLoption'FunPtr",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_PROGRESSFUNCTION",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_PROGRESSFUNCTION",
          "package": "curlhs",
          "partial": "CURLOPT PROGRESSFUNCTION",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_PROGRESSFUNCTION"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_PROTOCOLS",
          "package": "curlhs",
          "signature": "CCURLoption'CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_PROTOCOLS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_PROTOCOLS",
          "package": "curlhs",
          "partial": "CURLOPT PROTOCOLS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_PROTOCOLS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_PROXY",
          "package": "curlhs",
          "signature": "CCURLoption'CString",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_PROXY",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_PROXY",
          "package": "curlhs",
          "partial": "CURLOPT PROXY",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_PROXY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_PROXYAUTH",
          "package": "curlhs",
          "signature": "CCURLoption'CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_PROXYAUTH",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_PROXYAUTH",
          "package": "curlhs",
          "partial": "CURLOPT PROXYAUTH",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_PROXYAUTH"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_PROXYPASSWORD",
          "package": "curlhs",
          "signature": "CCURLoption'CString",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_PROXYPASSWORD",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_PROXYPASSWORD",
          "package": "curlhs",
          "partial": "CURLOPT PROXYPASSWORD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_PROXYPASSWORD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_PROXYPORT",
          "package": "curlhs",
          "signature": "CCURLoption'CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_PROXYPORT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_PROXYPORT",
          "package": "curlhs",
          "partial": "CURLOPT PROXYPORT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_PROXYPORT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_PROXYTYPE",
          "package": "curlhs",
          "signature": "CCURLoption'CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_PROXYTYPE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_PROXYTYPE",
          "package": "curlhs",
          "partial": "CURLOPT PROXYTYPE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_PROXYTYPE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_PROXYUSERNAME",
          "package": "curlhs",
          "signature": "CCURLoption'CString",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_PROXYUSERNAME",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_PROXYUSERNAME",
          "package": "curlhs",
          "partial": "CURLOPT PROXYUSERNAME",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_PROXYUSERNAME"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_PROXYUSERPWD",
          "package": "curlhs",
          "signature": "CCURLoption'CString",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_PROXYUSERPWD",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_PROXYUSERPWD",
          "package": "curlhs",
          "partial": "CURLOPT PROXYUSERPWD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_PROXYUSERPWD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_PROXY_TRANSFER_MODE",
          "package": "curlhs",
          "signature": "CCURLoption'CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_PROXY_TRANSFER_MODE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_PROXY_TRANSFER_MODE",
          "package": "curlhs",
          "partial": "CURLOPT PROXY TRANSFER MODE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_PROXY_TRANSFER_MODE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_PUT",
          "package": "curlhs",
          "signature": "CCURLoption'CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_PUT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_PUT",
          "package": "curlhs",
          "partial": "CURLOPT PUT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_PUT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_QUOTE",
          "package": "curlhs",
          "signature": "CCURLoption'SList",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_QUOTE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_QUOTE",
          "package": "curlhs",
          "partial": "CURLOPT QUOTE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_QUOTE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_RANDOM_FILE",
          "package": "curlhs",
          "signature": "CCURLoption'CString",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_RANDOM_FILE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_RANDOM_FILE",
          "package": "curlhs",
          "partial": "CURLOPT RANDOM FILE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_RANDOM_FILE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_RANGE",
          "package": "curlhs",
          "signature": "CCURLoption'CString",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_RANGE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_RANGE",
          "package": "curlhs",
          "partial": "CURLOPT RANGE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_RANGE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_READDATA",
          "package": "curlhs",
          "signature": "CCURLoption'UsrPtr",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_READDATA",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_READDATA",
          "package": "curlhs",
          "partial": "CURLOPT READDATA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_READDATA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_READFUNCTION",
          "package": "curlhs",
          "signature": "CCURLoption'FunPtr",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_READFUNCTION",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_READFUNCTION",
          "package": "curlhs",
          "partial": "CURLOPT READFUNCTION",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_READFUNCTION"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_REDIR_PROTOCOLS",
          "package": "curlhs",
          "signature": "CCURLoption'CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_REDIR_PROTOCOLS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_REDIR_PROTOCOLS",
          "package": "curlhs",
          "partial": "CURLOPT REDIR PROTOCOLS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_REDIR_PROTOCOLS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_REFERER",
          "package": "curlhs",
          "signature": "CCURLoption'CString",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_REFERER",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_REFERER",
          "package": "curlhs",
          "partial": "CURLOPT REFERER",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_REFERER"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_RESOLVE",
          "package": "curlhs",
          "signature": "CCURLoption'SList",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_RESOLVE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_RESOLVE",
          "package": "curlhs",
          "partial": "CURLOPT RESOLVE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_RESOLVE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_RESUME_FROM",
          "package": "curlhs",
          "signature": "CCURLoption'CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_RESUME_FROM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_RESUME_FROM",
          "package": "curlhs",
          "partial": "CURLOPT RESUME FROM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_RESUME_FROM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_RESUME_FROM_LARGE",
          "package": "curlhs",
          "signature": "CCURLoption'Int64",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_RESUME_FROM_LARGE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_RESUME_FROM_LARGE",
          "package": "curlhs",
          "partial": "CURLOPT RESUME FROM LARGE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_RESUME_FROM_LARGE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_RTSPHEADER",
          "package": "curlhs",
          "signature": "CCURLoption'SList",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_RTSPHEADER",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_RTSPHEADER",
          "package": "curlhs",
          "partial": "CURLOPT RTSPHEADER",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_RTSPHEADER"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_RTSP_CLIENT_CSEQ",
          "package": "curlhs",
          "signature": "CCURLoption'CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_RTSP_CLIENT_CSEQ",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_RTSP_CLIENT_CSEQ",
          "package": "curlhs",
          "partial": "CURLOPT RTSP CLIENT CSEQ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_RTSP_CLIENT_CSEQ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_RTSP_REQUEST",
          "package": "curlhs",
          "signature": "CCURLoption'CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_RTSP_REQUEST",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_RTSP_REQUEST",
          "package": "curlhs",
          "partial": "CURLOPT RTSP REQUEST",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_RTSP_REQUEST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_RTSP_SERVER_CSEQ",
          "package": "curlhs",
          "signature": "CCURLoption'CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_RTSP_SERVER_CSEQ",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_RTSP_SERVER_CSEQ",
          "package": "curlhs",
          "partial": "CURLOPT RTSP SERVER CSEQ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_RTSP_SERVER_CSEQ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_RTSP_SESSION_ID",
          "package": "curlhs",
          "signature": "CCURLoption'CString",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_RTSP_SESSION_ID",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_RTSP_SESSION_ID",
          "package": "curlhs",
          "partial": "CURLOPT RTSP SESSION ID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_RTSP_SESSION_ID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_RTSP_STREAM_URI",
          "package": "curlhs",
          "signature": "CCURLoption'CString",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_RTSP_STREAM_URI",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_RTSP_STREAM_URI",
          "package": "curlhs",
          "partial": "CURLOPT RTSP STREAM URI",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_RTSP_STREAM_URI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_RTSP_TRANSPORT",
          "package": "curlhs",
          "signature": "CCURLoption'CString",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_RTSP_TRANSPORT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_RTSP_TRANSPORT",
          "package": "curlhs",
          "partial": "CURLOPT RTSP TRANSPORT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_RTSP_TRANSPORT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_SEEKDATA",
          "package": "curlhs",
          "signature": "CCURLoption'UsrPtr",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_SEEKDATA",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_SEEKDATA",
          "package": "curlhs",
          "partial": "CURLOPT SEEKDATA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_SEEKDATA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_SEEKFUNCTION",
          "package": "curlhs",
          "signature": "CCURLoption'FunPtr",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_SEEKFUNCTION",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_SEEKFUNCTION",
          "package": "curlhs",
          "partial": "CURLOPT SEEKFUNCTION",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_SEEKFUNCTION"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_SHARE",
          "package": "curlhs",
          "signature": "CCURLoption'CURLSH",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_SHARE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_SHARE",
          "package": "curlhs",
          "partial": "CURLOPT SHARE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_SHARE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_SOCKOPTDATA",
          "package": "curlhs",
          "signature": "CCURLoption'UsrPtr",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_SOCKOPTDATA",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_SOCKOPTDATA",
          "package": "curlhs",
          "partial": "CURLOPT SOCKOPTDATA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_SOCKOPTDATA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_SOCKOPTFUNCTION",
          "package": "curlhs",
          "signature": "CCURLoption'FunPtr",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_SOCKOPTFUNCTION",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_SOCKOPTFUNCTION",
          "package": "curlhs",
          "partial": "CURLOPT SOCKOPTFUNCTION",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_SOCKOPTFUNCTION"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_SOCKS5_GSSAPI_NEC",
          "package": "curlhs",
          "signature": "CCURLoption'CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_SOCKS5_GSSAPI_NEC",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_SOCKS5_GSSAPI_NEC",
          "package": "curlhs",
          "partial": "CURLOPT SOCKS GSSAPI NEC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_SOCKS5_GSSAPI_NEC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_SOCKS5_GSSAPI_SERVICE",
          "package": "curlhs",
          "signature": "CCURLoption'CString",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_SOCKS5_GSSAPI_SERVICE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_SOCKS5_GSSAPI_SERVICE",
          "package": "curlhs",
          "partial": "CURLOPT SOCKS GSSAPI SERVICE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_SOCKS5_GSSAPI_SERVICE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_SSH_AUTH_TYPES",
          "package": "curlhs",
          "signature": "CCURLoption'CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_SSH_AUTH_TYPES",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_SSH_AUTH_TYPES",
          "package": "curlhs",
          "partial": "CURLOPT SSH AUTH TYPES",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_SSH_AUTH_TYPES"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_SSH_HOST_PUBLIC_KEY_MD5",
          "package": "curlhs",
          "signature": "CCURLoption'CString",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_SSH_HOST_PUBLIC_KEY_MD5",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_SSH_HOST_PUBLIC_KEY_MD5",
          "package": "curlhs",
          "partial": "CURLOPT SSH HOST PUBLIC KEY MD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_SSH_HOST_PUBLIC_KEY_MD5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_SSH_KEYDATA",
          "package": "curlhs",
          "signature": "CCURLoption'UsrPtr",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_SSH_KEYDATA",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_SSH_KEYDATA",
          "package": "curlhs",
          "partial": "CURLOPT SSH KEYDATA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_SSH_KEYDATA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_SSH_KEYFUNCTION",
          "package": "curlhs",
          "signature": "CCURLoption'FunPtr",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_SSH_KEYFUNCTION",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_SSH_KEYFUNCTION",
          "package": "curlhs",
          "partial": "CURLOPT SSH KEYFUNCTION",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_SSH_KEYFUNCTION"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_SSH_KNOWNHOSTS",
          "package": "curlhs",
          "signature": "CCURLoption'CString",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_SSH_KNOWNHOSTS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_SSH_KNOWNHOSTS",
          "package": "curlhs",
          "partial": "CURLOPT SSH KNOWNHOSTS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_SSH_KNOWNHOSTS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_SSH_PRIVATE_KEYFILE",
          "package": "curlhs",
          "signature": "CCURLoption'CString",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_SSH_PRIVATE_KEYFILE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_SSH_PRIVATE_KEYFILE",
          "package": "curlhs",
          "partial": "CURLOPT SSH PRIVATE KEYFILE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_SSH_PRIVATE_KEYFILE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_SSH_PUBLIC_KEYFILE",
          "package": "curlhs",
          "signature": "CCURLoption'CString",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_SSH_PUBLIC_KEYFILE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_SSH_PUBLIC_KEYFILE",
          "package": "curlhs",
          "partial": "CURLOPT SSH PUBLIC KEYFILE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_SSH_PUBLIC_KEYFILE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_SSLCERT",
          "package": "curlhs",
          "signature": "CCURLoption'CString",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_SSLCERT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_SSLCERT",
          "package": "curlhs",
          "partial": "CURLOPT SSLCERT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_SSLCERT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_SSLCERTTYPE",
          "package": "curlhs",
          "signature": "CCURLoption'CString",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_SSLCERTTYPE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_SSLCERTTYPE",
          "package": "curlhs",
          "partial": "CURLOPT SSLCERTTYPE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_SSLCERTTYPE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_SSLENGINE",
          "package": "curlhs",
          "signature": "CCURLoption'CString",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_SSLENGINE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_SSLENGINE",
          "package": "curlhs",
          "partial": "CURLOPT SSLENGINE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_SSLENGINE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_SSLENGINE_DEFAULT",
          "package": "curlhs",
          "signature": "CCURLoption'CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_SSLENGINE_DEFAULT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_SSLENGINE_DEFAULT",
          "package": "curlhs",
          "partial": "CURLOPT SSLENGINE DEFAULT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_SSLENGINE_DEFAULT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_SSLKEY",
          "package": "curlhs",
          "signature": "CCURLoption'CString",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_SSLKEY",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_SSLKEY",
          "package": "curlhs",
          "partial": "CURLOPT SSLKEY",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_SSLKEY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_SSLKEYTYPE",
          "package": "curlhs",
          "signature": "CCURLoption'CString",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_SSLKEYTYPE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_SSLKEYTYPE",
          "package": "curlhs",
          "partial": "CURLOPT SSLKEYTYPE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_SSLKEYTYPE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_SSLVERSION",
          "package": "curlhs",
          "signature": "CCURLoption'CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_SSLVERSION",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_SSLVERSION",
          "package": "curlhs",
          "partial": "CURLOPT SSLVERSION",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_SSLVERSION"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_SSL_CIPHER_LIST",
          "package": "curlhs",
          "signature": "CCURLoption'CString",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_SSL_CIPHER_LIST",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_SSL_CIPHER_LIST",
          "package": "curlhs",
          "partial": "CURLOPT SSL CIPHER LIST",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_SSL_CIPHER_LIST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_SSL_CTX_DATA",
          "package": "curlhs",
          "signature": "CCURLoption'UsrPtr",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_SSL_CTX_DATA",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_SSL_CTX_DATA",
          "package": "curlhs",
          "partial": "CURLOPT SSL CTX DATA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_SSL_CTX_DATA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_SSL_CTX_FUNCTION",
          "package": "curlhs",
          "signature": "CCURLoption'FunPtr",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_SSL_CTX_FUNCTION",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_SSL_CTX_FUNCTION",
          "package": "curlhs",
          "partial": "CURLOPT SSL CTX FUNCTION",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_SSL_CTX_FUNCTION"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_SSL_OPTIONS",
          "package": "curlhs",
          "signature": "CCURLoption'CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_SSL_OPTIONS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_SSL_OPTIONS",
          "package": "curlhs",
          "partial": "CURLOPT SSL OPTIONS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_SSL_OPTIONS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_SSL_SESSIONID_CACHE",
          "package": "curlhs",
          "signature": "CCURLoption'CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_SSL_SESSIONID_CACHE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_SSL_SESSIONID_CACHE",
          "package": "curlhs",
          "partial": "CURLOPT SSL SESSIONID CACHE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_SSL_SESSIONID_CACHE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_SSL_VERIFYHOST",
          "package": "curlhs",
          "signature": "CCURLoption'CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_SSL_VERIFYHOST",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_SSL_VERIFYHOST",
          "package": "curlhs",
          "partial": "CURLOPT SSL VERIFYHOST",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_SSL_VERIFYHOST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_SSL_VERIFYPEER",
          "package": "curlhs",
          "signature": "CCURLoption'CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_SSL_VERIFYPEER",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_SSL_VERIFYPEER",
          "package": "curlhs",
          "partial": "CURLOPT SSL VERIFYPEER",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_SSL_VERIFYPEER"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_STDERR",
          "package": "curlhs",
          "signature": "CCURLoption'CFile",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_STDERR",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_STDERR",
          "package": "curlhs",
          "partial": "CURLOPT STDERR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_STDERR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_TCP_KEEPALIVE",
          "package": "curlhs",
          "signature": "CCURLoption'CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_TCP_KEEPALIVE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_TCP_KEEPALIVE",
          "package": "curlhs",
          "partial": "CURLOPT TCP KEEPALIVE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_TCP_KEEPALIVE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_TCP_KEEPIDLE",
          "package": "curlhs",
          "signature": "CCURLoption'CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_TCP_KEEPIDLE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_TCP_KEEPIDLE",
          "package": "curlhs",
          "partial": "CURLOPT TCP KEEPIDLE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_TCP_KEEPIDLE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_TCP_KEEPINTVL",
          "package": "curlhs",
          "signature": "CCURLoption'CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_TCP_KEEPINTVL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_TCP_KEEPINTVL",
          "package": "curlhs",
          "partial": "CURLOPT TCP KEEPINTVL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_TCP_KEEPINTVL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_TCP_NODELAY",
          "package": "curlhs",
          "signature": "CCURLoption'CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_TCP_NODELAY",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_TCP_NODELAY",
          "package": "curlhs",
          "partial": "CURLOPT TCP NODELAY",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_TCP_NODELAY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_TELNETOPTIONS",
          "package": "curlhs",
          "signature": "CCURLoption'SList",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_TELNETOPTIONS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_TELNETOPTIONS",
          "package": "curlhs",
          "partial": "CURLOPT TELNETOPTIONS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_TELNETOPTIONS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_TFTP_BLKSIZE",
          "package": "curlhs",
          "signature": "CCURLoption'CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_TFTP_BLKSIZE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_TFTP_BLKSIZE",
          "package": "curlhs",
          "partial": "CURLOPT TFTP BLKSIZE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_TFTP_BLKSIZE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_TIMECONDITION",
          "package": "curlhs",
          "signature": "CCURLoption'CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_TIMECONDITION",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_TIMECONDITION",
          "package": "curlhs",
          "partial": "CURLOPT TIMECONDITION",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_TIMECONDITION"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_TIMEOUT",
          "package": "curlhs",
          "signature": "CCURLoption'CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_TIMEOUT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_TIMEOUT",
          "package": "curlhs",
          "partial": "CURLOPT TIMEOUT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_TIMEOUT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_TIMEOUT_MS",
          "package": "curlhs",
          "signature": "CCURLoption'CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_TIMEOUT_MS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_TIMEOUT_MS",
          "package": "curlhs",
          "partial": "CURLOPT TIMEOUT MS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_TIMEOUT_MS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_TIMEVALUE",
          "package": "curlhs",
          "signature": "CCURLoption'CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_TIMEVALUE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_TIMEVALUE",
          "package": "curlhs",
          "partial": "CURLOPT TIMEVALUE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_TIMEVALUE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_TLSAUTH_PASSWORD",
          "package": "curlhs",
          "signature": "CCURLoption'CString",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_TLSAUTH_PASSWORD",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_TLSAUTH_PASSWORD",
          "package": "curlhs",
          "partial": "CURLOPT TLSAUTH PASSWORD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_TLSAUTH_PASSWORD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_TLSAUTH_TYPE",
          "package": "curlhs",
          "signature": "CCURLoption'CString",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_TLSAUTH_TYPE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_TLSAUTH_TYPE",
          "package": "curlhs",
          "partial": "CURLOPT TLSAUTH TYPE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_TLSAUTH_TYPE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_TLSAUTH_USERNAME",
          "package": "curlhs",
          "signature": "CCURLoption'CString",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_TLSAUTH_USERNAME",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_TLSAUTH_USERNAME",
          "package": "curlhs",
          "partial": "CURLOPT TLSAUTH USERNAME",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_TLSAUTH_USERNAME"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_TRANSFERTEXT",
          "package": "curlhs",
          "signature": "CCURLoption'CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_TRANSFERTEXT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_TRANSFERTEXT",
          "package": "curlhs",
          "partial": "CURLOPT TRANSFERTEXT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_TRANSFERTEXT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_TRANSFER_ENCODING",
          "package": "curlhs",
          "signature": "CCURLoption'CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_TRANSFER_ENCODING",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_TRANSFER_ENCODING",
          "package": "curlhs",
          "partial": "CURLOPT TRANSFER ENCODING",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_TRANSFER_ENCODING"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_UNRESTRICTED_AUTH",
          "package": "curlhs",
          "signature": "CCURLoption'CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_UNRESTRICTED_AUTH",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_UNRESTRICTED_AUTH",
          "package": "curlhs",
          "partial": "CURLOPT UNRESTRICTED AUTH",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_UNRESTRICTED_AUTH"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_UPLOAD",
          "package": "curlhs",
          "signature": "CCURLoption'CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_UPLOAD",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_UPLOAD",
          "package": "curlhs",
          "partial": "CURLOPT UPLOAD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_UPLOAD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_URL",
          "package": "curlhs",
          "signature": "CCURLoption'CString",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_URL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_URL",
          "package": "curlhs",
          "partial": "CURLOPT URL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_URL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_USERAGENT",
          "package": "curlhs",
          "signature": "CCURLoption'CString",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_USERAGENT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_USERAGENT",
          "package": "curlhs",
          "partial": "CURLOPT USERAGENT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_USERAGENT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_USERNAME",
          "package": "curlhs",
          "signature": "CCURLoption'CString",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_USERNAME",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_USERNAME",
          "package": "curlhs",
          "partial": "CURLOPT USERNAME",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_USERNAME"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_USERPWD",
          "package": "curlhs",
          "signature": "CCURLoption'CString",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_USERPWD",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_USERPWD",
          "package": "curlhs",
          "partial": "CURLOPT USERPWD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_USERPWD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_USE_SSL",
          "package": "curlhs",
          "signature": "CCURLoption'CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_USE_SSL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_USE_SSL",
          "package": "curlhs",
          "partial": "CURLOPT USE SSL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_USE_SSL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_VERBOSE",
          "package": "curlhs",
          "signature": "CCURLoption'CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_VERBOSE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_VERBOSE",
          "package": "curlhs",
          "partial": "CURLOPT VERBOSE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_VERBOSE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_WILDCARDMATCH",
          "package": "curlhs",
          "signature": "CCURLoption'CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_WILDCARDMATCH",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_WILDCARDMATCH",
          "package": "curlhs",
          "partial": "CURLOPT WILDCARDMATCH",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_WILDCARDMATCH"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_WRITEDATA",
          "package": "curlhs",
          "signature": "CCURLoption'UsrPtr",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_WRITEDATA",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_WRITEDATA",
          "package": "curlhs",
          "partial": "CURLOPT WRITEDATA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_WRITEDATA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_WRITEFUNCTION",
          "package": "curlhs",
          "signature": "CCURLoption'FunPtr",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_WRITEFUNCTION",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_WRITEFUNCTION",
          "package": "curlhs",
          "partial": "CURLOPT WRITEFUNCTION",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_WRITEFUNCTION"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_WRITEHEADER",
          "package": "curlhs",
          "signature": "CCURLoption'CFile",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_WRITEHEADER",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_WRITEHEADER",
          "package": "curlhs",
          "partial": "CURLOPT WRITEHEADER",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_WRITEHEADER"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: \u003c/p\u003e\u003c/div\u003e",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_WRITEINFO",
          "package": "curlhs",
          "signature": "CCURLoption'CString",
          "source": "src/Network-Curlhs-Base.html#cCURLOPT_WRITEINFO",
          "type": "function"
        },
        "index": {
          "description": "Deprecated",
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLOPT_WRITEINFO",
          "package": "curlhs",
          "partial": "CURLOPT WRITEINFO",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLOPT_WRITEINFO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLPAUSE_ALL",
          "package": "curlhs",
          "signature": "CInt",
          "source": "src/Network-Curlhs-Base.html#cCURLPAUSE_ALL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLPAUSE_ALL",
          "package": "curlhs",
          "partial": "CURLPAUSE ALL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLPAUSE_ALL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLPAUSE_CONT",
          "package": "curlhs",
          "signature": "CInt",
          "source": "src/Network-Curlhs-Base.html#cCURLPAUSE_CONT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLPAUSE_CONT",
          "package": "curlhs",
          "partial": "CURLPAUSE CONT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLPAUSE_CONT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLPAUSE_RECV",
          "package": "curlhs",
          "signature": "CInt",
          "source": "src/Network-Curlhs-Base.html#cCURLPAUSE_RECV",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLPAUSE_RECV",
          "package": "curlhs",
          "partial": "CURLPAUSE RECV",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLPAUSE_RECV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLPAUSE_RECV_CONT",
          "package": "curlhs",
          "signature": "CInt",
          "source": "src/Network-Curlhs-Base.html#cCURLPAUSE_RECV_CONT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLPAUSE_RECV_CONT",
          "package": "curlhs",
          "partial": "CURLPAUSE RECV CONT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLPAUSE_RECV_CONT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLPAUSE_SEND",
          "package": "curlhs",
          "signature": "CInt",
          "source": "src/Network-Curlhs-Base.html#cCURLPAUSE_SEND",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLPAUSE_SEND",
          "package": "curlhs",
          "partial": "CURLPAUSE SEND",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLPAUSE_SEND"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLPAUSE_SEND_CONT",
          "package": "curlhs",
          "signature": "CInt",
          "source": "src/Network-Curlhs-Base.html#cCURLPAUSE_SEND_CONT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLPAUSE_SEND_CONT",
          "package": "curlhs",
          "partial": "CURLPAUSE SEND CONT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLPAUSE_SEND_CONT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLPROTO_ALL",
          "package": "curlhs",
          "signature": "CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLPROTO_ALL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLPROTO_ALL",
          "package": "curlhs",
          "partial": "CURLPROTO ALL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLPROTO_ALL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLPROTO_DICT",
          "package": "curlhs",
          "signature": "CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLPROTO_DICT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLPROTO_DICT",
          "package": "curlhs",
          "partial": "CURLPROTO DICT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLPROTO_DICT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLPROTO_FILE",
          "package": "curlhs",
          "signature": "CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLPROTO_FILE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLPROTO_FILE",
          "package": "curlhs",
          "partial": "CURLPROTO FILE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLPROTO_FILE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLPROTO_FTP",
          "package": "curlhs",
          "signature": "CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLPROTO_FTP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLPROTO_FTP",
          "package": "curlhs",
          "partial": "CURLPROTO FTP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLPROTO_FTP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLPROTO_FTPS",
          "package": "curlhs",
          "signature": "CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLPROTO_FTPS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLPROTO_FTPS",
          "package": "curlhs",
          "partial": "CURLPROTO FTPS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLPROTO_FTPS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLPROTO_GOPHER",
          "package": "curlhs",
          "signature": "CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLPROTO_GOPHER",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLPROTO_GOPHER",
          "package": "curlhs",
          "partial": "CURLPROTO GOPHER",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLPROTO_GOPHER"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLPROTO_HTTP",
          "package": "curlhs",
          "signature": "CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLPROTO_HTTP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLPROTO_HTTP",
          "package": "curlhs",
          "partial": "CURLPROTO HTTP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLPROTO_HTTP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLPROTO_HTTPS",
          "package": "curlhs",
          "signature": "CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLPROTO_HTTPS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLPROTO_HTTPS",
          "package": "curlhs",
          "partial": "CURLPROTO HTTPS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLPROTO_HTTPS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLPROTO_IMAP",
          "package": "curlhs",
          "signature": "CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLPROTO_IMAP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLPROTO_IMAP",
          "package": "curlhs",
          "partial": "CURLPROTO IMAP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLPROTO_IMAP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLPROTO_IMAPS",
          "package": "curlhs",
          "signature": "CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLPROTO_IMAPS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLPROTO_IMAPS",
          "package": "curlhs",
          "partial": "CURLPROTO IMAPS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLPROTO_IMAPS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLPROTO_LDAP",
          "package": "curlhs",
          "signature": "CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLPROTO_LDAP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLPROTO_LDAP",
          "package": "curlhs",
          "partial": "CURLPROTO LDAP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLPROTO_LDAP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLPROTO_LDAPS",
          "package": "curlhs",
          "signature": "CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLPROTO_LDAPS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLPROTO_LDAPS",
          "package": "curlhs",
          "partial": "CURLPROTO LDAPS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLPROTO_LDAPS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLPROTO_POP3",
          "package": "curlhs",
          "signature": "CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLPROTO_POP3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLPROTO_POP3",
          "package": "curlhs",
          "partial": "CURLPROTO POP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLPROTO_POP3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLPROTO_POP3S",
          "package": "curlhs",
          "signature": "CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLPROTO_POP3S",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLPROTO_POP3S",
          "package": "curlhs",
          "partial": "CURLPROTO POP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLPROTO_POP3S"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLPROTO_RTMP",
          "package": "curlhs",
          "signature": "CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLPROTO_RTMP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLPROTO_RTMP",
          "package": "curlhs",
          "partial": "CURLPROTO RTMP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLPROTO_RTMP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLPROTO_RTMPE",
          "package": "curlhs",
          "signature": "CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLPROTO_RTMPE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLPROTO_RTMPE",
          "package": "curlhs",
          "partial": "CURLPROTO RTMPE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLPROTO_RTMPE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLPROTO_RTMPS",
          "package": "curlhs",
          "signature": "CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLPROTO_RTMPS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLPROTO_RTMPS",
          "package": "curlhs",
          "partial": "CURLPROTO RTMPS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLPROTO_RTMPS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLPROTO_RTMPT",
          "package": "curlhs",
          "signature": "CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLPROTO_RTMPT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLPROTO_RTMPT",
          "package": "curlhs",
          "partial": "CURLPROTO RTMPT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLPROTO_RTMPT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLPROTO_RTMPTE",
          "package": "curlhs",
          "signature": "CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLPROTO_RTMPTE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLPROTO_RTMPTE",
          "package": "curlhs",
          "partial": "CURLPROTO RTMPTE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLPROTO_RTMPTE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLPROTO_RTMPTS",
          "package": "curlhs",
          "signature": "CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLPROTO_RTMPTS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLPROTO_RTMPTS",
          "package": "curlhs",
          "partial": "CURLPROTO RTMPTS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLPROTO_RTMPTS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLPROTO_RTSP",
          "package": "curlhs",
          "signature": "CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLPROTO_RTSP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLPROTO_RTSP",
          "package": "curlhs",
          "partial": "CURLPROTO RTSP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLPROTO_RTSP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLPROTO_SCP",
          "package": "curlhs",
          "signature": "CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLPROTO_SCP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLPROTO_SCP",
          "package": "curlhs",
          "partial": "CURLPROTO SCP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLPROTO_SCP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLPROTO_SFTP",
          "package": "curlhs",
          "signature": "CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLPROTO_SFTP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLPROTO_SFTP",
          "package": "curlhs",
          "partial": "CURLPROTO SFTP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLPROTO_SFTP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLPROTO_SMTP",
          "package": "curlhs",
          "signature": "CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLPROTO_SMTP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLPROTO_SMTP",
          "package": "curlhs",
          "partial": "CURLPROTO SMTP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLPROTO_SMTP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLPROTO_SMTPS",
          "package": "curlhs",
          "signature": "CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLPROTO_SMTPS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLPROTO_SMTPS",
          "package": "curlhs",
          "partial": "CURLPROTO SMTPS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLPROTO_SMTPS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLPROTO_TELNET",
          "package": "curlhs",
          "signature": "CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLPROTO_TELNET",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLPROTO_TELNET",
          "package": "curlhs",
          "partial": "CURLPROTO TELNET",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLPROTO_TELNET"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLPROTO_TFTP",
          "package": "curlhs",
          "signature": "CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLPROTO_TFTP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLPROTO_TFTP",
          "package": "curlhs",
          "partial": "CURLPROTO TFTP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLPROTO_TFTP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLPROXY_HTTP",
          "package": "curlhs",
          "signature": "CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLPROXY_HTTP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLPROXY_HTTP",
          "package": "curlhs",
          "partial": "CURLPROXY HTTP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLPROXY_HTTP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLPROXY_HTTP_1_0",
          "package": "curlhs",
          "signature": "CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLPROXY_HTTP_1_0",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLPROXY_HTTP_1_0",
          "package": "curlhs",
          "partial": "CURLPROXY HTTP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLPROXY_HTTP_1_0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLPROXY_SOCKS4",
          "package": "curlhs",
          "signature": "CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLPROXY_SOCKS4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLPROXY_SOCKS4",
          "package": "curlhs",
          "partial": "CURLPROXY SOCKS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLPROXY_SOCKS4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLPROXY_SOCKS4A",
          "package": "curlhs",
          "signature": "CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLPROXY_SOCKS4A",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLPROXY_SOCKS4A",
          "package": "curlhs",
          "partial": "CURLPROXY SOCKS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLPROXY_SOCKS4A"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLPROXY_SOCKS5",
          "package": "curlhs",
          "signature": "CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLPROXY_SOCKS5",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLPROXY_SOCKS5",
          "package": "curlhs",
          "partial": "CURLPROXY SOCKS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLPROXY_SOCKS5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLPROXY_SOCKS5_HOSTNAME",
          "package": "curlhs",
          "signature": "CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLPROXY_SOCKS5_HOSTNAME",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLPROXY_SOCKS5_HOSTNAME",
          "package": "curlhs",
          "partial": "CURLPROXY SOCKS HOSTNAME",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLPROXY_SOCKS5_HOSTNAME"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLSHE_BAD_OPTION",
          "package": "curlhs",
          "signature": "CCURLSHcode",
          "source": "src/Network-Curlhs-Base.html#cCURLSHE_BAD_OPTION",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLSHE_BAD_OPTION",
          "package": "curlhs",
          "partial": "CURLSHE BAD OPTION",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLSHE_BAD_OPTION"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLSHE_INVALID",
          "package": "curlhs",
          "signature": "CCURLSHcode",
          "source": "src/Network-Curlhs-Base.html#cCURLSHE_INVALID",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLSHE_INVALID",
          "package": "curlhs",
          "partial": "CURLSHE INVALID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLSHE_INVALID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLSHE_IN_USE",
          "package": "curlhs",
          "signature": "CCURLSHcode",
          "source": "src/Network-Curlhs-Base.html#cCURLSHE_IN_USE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLSHE_IN_USE",
          "package": "curlhs",
          "partial": "CURLSHE IN USE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLSHE_IN_USE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLSHE_NOMEM",
          "package": "curlhs",
          "signature": "CCURLSHcode",
          "source": "src/Network-Curlhs-Base.html#cCURLSHE_NOMEM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLSHE_NOMEM",
          "package": "curlhs",
          "partial": "CURLSHE NOMEM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLSHE_NOMEM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLSHE_NOT_BUILT_IN",
          "package": "curlhs",
          "signature": "CCURLSHcode",
          "source": "src/Network-Curlhs-Base.html#cCURLSHE_NOT_BUILT_IN",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLSHE_NOT_BUILT_IN",
          "package": "curlhs",
          "partial": "CURLSHE NOT BUILT IN",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLSHE_NOT_BUILT_IN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLSHE_OK",
          "package": "curlhs",
          "signature": "CCURLSHcode",
          "source": "src/Network-Curlhs-Base.html#cCURLSHE_OK",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLSHE_OK",
          "package": "curlhs",
          "partial": "CURLSHE OK",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLSHE_OK"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLSHOPT_LOCKFUNC",
          "package": "curlhs",
          "signature": "CCURLSHoption'FLOCK",
          "source": "src/Network-Curlhs-Base.html#cCURLSHOPT_LOCKFUNC",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLSHOPT_LOCKFUNC",
          "package": "curlhs",
          "partial": "CURLSHOPT LOCKFUNC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLSHOPT_LOCKFUNC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLSHOPT_SHARE",
          "package": "curlhs",
          "signature": "CCURLSHoption'Lock",
          "source": "src/Network-Curlhs-Base.html#cCURLSHOPT_SHARE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLSHOPT_SHARE",
          "package": "curlhs",
          "partial": "CURLSHOPT SHARE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLSHOPT_SHARE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLSHOPT_UNLOCKFUNC",
          "package": "curlhs",
          "signature": "CCURLSHoption'FUNLOCK",
          "source": "src/Network-Curlhs-Base.html#cCURLSHOPT_UNLOCKFUNC",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLSHOPT_UNLOCKFUNC",
          "package": "curlhs",
          "partial": "CURLSHOPT UNLOCKFUNC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLSHOPT_UNLOCKFUNC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLSHOPT_UNSHARE",
          "package": "curlhs",
          "signature": "CCURLSHoption'Lock",
          "source": "src/Network-Curlhs-Base.html#cCURLSHOPT_UNSHARE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLSHOPT_UNSHARE",
          "package": "curlhs",
          "partial": "CURLSHOPT UNSHARE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLSHOPT_UNSHARE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLSHOPT_USERDATA",
          "package": "curlhs",
          "signature": "CCURLSHoption'UsrPtr",
          "source": "src/Network-Curlhs-Base.html#cCURLSHOPT_USERDATA",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLSHOPT_USERDATA",
          "package": "curlhs",
          "partial": "CURLSHOPT USERDATA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLSHOPT_USERDATA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLSOCKTYPE_IPCXN",
          "package": "curlhs",
          "signature": "CCURLsocktype",
          "source": "src/Network-Curlhs-Base.html#cCURLSOCKTYPE_IPCXN",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLSOCKTYPE_IPCXN",
          "package": "curlhs",
          "partial": "CURLSOCKTYPE IPCXN",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLSOCKTYPE_IPCXN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLSSH_AUTH_ANY",
          "package": "curlhs",
          "signature": "CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLSSH_AUTH_ANY",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLSSH_AUTH_ANY",
          "package": "curlhs",
          "partial": "CURLSSH AUTH ANY",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLSSH_AUTH_ANY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLSSH_AUTH_DEFAULT",
          "package": "curlhs",
          "signature": "CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLSSH_AUTH_DEFAULT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLSSH_AUTH_DEFAULT",
          "package": "curlhs",
          "partial": "CURLSSH AUTH DEFAULT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLSSH_AUTH_DEFAULT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLSSH_AUTH_HOST",
          "package": "curlhs",
          "signature": "CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLSSH_AUTH_HOST",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLSSH_AUTH_HOST",
          "package": "curlhs",
          "partial": "CURLSSH AUTH HOST",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLSSH_AUTH_HOST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLSSH_AUTH_KEYBOARD",
          "package": "curlhs",
          "signature": "CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLSSH_AUTH_KEYBOARD",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLSSH_AUTH_KEYBOARD",
          "package": "curlhs",
          "partial": "CURLSSH AUTH KEYBOARD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLSSH_AUTH_KEYBOARD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLSSH_AUTH_NONE",
          "package": "curlhs",
          "signature": "CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLSSH_AUTH_NONE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLSSH_AUTH_NONE",
          "package": "curlhs",
          "partial": "CURLSSH AUTH NONE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLSSH_AUTH_NONE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLSSH_AUTH_PASSWORD",
          "package": "curlhs",
          "signature": "CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLSSH_AUTH_PASSWORD",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLSSH_AUTH_PASSWORD",
          "package": "curlhs",
          "partial": "CURLSSH AUTH PASSWORD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLSSH_AUTH_PASSWORD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLSSH_AUTH_PUBLICKEY",
          "package": "curlhs",
          "signature": "CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLSSH_AUTH_PUBLICKEY",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLSSH_AUTH_PUBLICKEY",
          "package": "curlhs",
          "partial": "CURLSSH AUTH PUBLICKEY",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLSSH_AUTH_PUBLICKEY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLSSLOPT_ALLOW_BEAST",
          "package": "curlhs",
          "signature": "CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLSSLOPT_ALLOW_BEAST",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLSSLOPT_ALLOW_BEAST",
          "package": "curlhs",
          "partial": "CURLSSLOPT ALLOW BEAST",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLSSLOPT_ALLOW_BEAST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLUSESSL_ALL",
          "package": "curlhs",
          "signature": "CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLUSESSL_ALL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLUSESSL_ALL",
          "package": "curlhs",
          "partial": "CURLUSESSL ALL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLUSESSL_ALL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLUSESSL_CONTROL",
          "package": "curlhs",
          "signature": "CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLUSESSL_CONTROL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLUSESSL_CONTROL",
          "package": "curlhs",
          "partial": "CURLUSESSL CONTROL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLUSESSL_CONTROL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLUSESSL_NONE",
          "package": "curlhs",
          "signature": "CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLUSESSL_NONE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLUSESSL_NONE",
          "package": "curlhs",
          "partial": "CURLUSESSL NONE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLUSESSL_NONE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLUSESSL_TRY",
          "package": "curlhs",
          "signature": "CLong",
          "source": "src/Network-Curlhs-Base.html#cCURLUSESSL_TRY",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLUSESSL_TRY",
          "package": "curlhs",
          "partial": "CURLUSESSL TRY",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLUSESSL_TRY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLVERSION_FIRST",
          "package": "curlhs",
          "signature": "CCURLversion",
          "source": "src/Network-Curlhs-Base.html#cCURLVERSION_FIRST",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLVERSION_FIRST",
          "package": "curlhs",
          "partial": "CURLVERSION FIRST",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLVERSION_FIRST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLVERSION_FOURTH",
          "package": "curlhs",
          "signature": "CCURLversion",
          "source": "src/Network-Curlhs-Base.html#cCURLVERSION_FOURTH",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLVERSION_FOURTH",
          "package": "curlhs",
          "partial": "CURLVERSION FOURTH",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLVERSION_FOURTH"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLVERSION_NOW",
          "package": "curlhs",
          "signature": "CCURLversion",
          "source": "src/Network-Curlhs-Base.html#cCURLVERSION_NOW",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLVERSION_NOW",
          "package": "curlhs",
          "partial": "CURLVERSION NOW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLVERSION_NOW"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLVERSION_SECOND",
          "package": "curlhs",
          "signature": "CCURLversion",
          "source": "src/Network-Curlhs-Base.html#cCURLVERSION_SECOND",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLVERSION_SECOND",
          "package": "curlhs",
          "partial": "CURLVERSION SECOND",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLVERSION_SECOND"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURLVERSION_THIRD",
          "package": "curlhs",
          "signature": "CCURLversion",
          "source": "src/Network-Curlhs-Base.html#cCURLVERSION_THIRD",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURLVERSION_THIRD",
          "package": "curlhs",
          "partial": "CURLVERSION THIRD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURLVERSION_THIRD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURL_CHUNK_BGN_FUNC_FAIL",
          "package": "curlhs",
          "signature": "CLong",
          "source": "src/Network-Curlhs-Base.html#cCURL_CHUNK_BGN_FUNC_FAIL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURL_CHUNK_BGN_FUNC_FAIL",
          "package": "curlhs",
          "partial": "CURL CHUNK BGN FUNC FAIL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURL_CHUNK_BGN_FUNC_FAIL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURL_CHUNK_BGN_FUNC_OK",
          "package": "curlhs",
          "signature": "CLong",
          "source": "src/Network-Curlhs-Base.html#cCURL_CHUNK_BGN_FUNC_OK",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURL_CHUNK_BGN_FUNC_OK",
          "package": "curlhs",
          "partial": "CURL CHUNK BGN FUNC OK",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURL_CHUNK_BGN_FUNC_OK"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURL_CHUNK_BGN_FUNC_SKIP",
          "package": "curlhs",
          "signature": "CLong",
          "source": "src/Network-Curlhs-Base.html#cCURL_CHUNK_BGN_FUNC_SKIP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURL_CHUNK_BGN_FUNC_SKIP",
          "package": "curlhs",
          "partial": "CURL CHUNK BGN FUNC SKIP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURL_CHUNK_BGN_FUNC_SKIP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURL_CHUNK_END_FUNC_FAIL",
          "package": "curlhs",
          "signature": "CLong",
          "source": "src/Network-Curlhs-Base.html#cCURL_CHUNK_END_FUNC_FAIL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURL_CHUNK_END_FUNC_FAIL",
          "package": "curlhs",
          "partial": "CURL CHUNK END FUNC FAIL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURL_CHUNK_END_FUNC_FAIL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURL_CHUNK_END_FUNC_OK",
          "package": "curlhs",
          "signature": "CLong",
          "source": "src/Network-Curlhs-Base.html#cCURL_CHUNK_END_FUNC_OK",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURL_CHUNK_END_FUNC_OK",
          "package": "curlhs",
          "partial": "CURL CHUNK END FUNC OK",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURL_CHUNK_END_FUNC_OK"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURL_ERROR_SIZE",
          "package": "curlhs",
          "signature": "CLong",
          "source": "src/Network-Curlhs-Base.html#cCURL_ERROR_SIZE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURL_ERROR_SIZE",
          "package": "curlhs",
          "partial": "CURL ERROR SIZE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURL_ERROR_SIZE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURL_FNMATCHFUNC_FAIL",
          "package": "curlhs",
          "signature": "CInt",
          "source": "src/Network-Curlhs-Base.html#cCURL_FNMATCHFUNC_FAIL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURL_FNMATCHFUNC_FAIL",
          "package": "curlhs",
          "partial": "CURL FNMATCHFUNC FAIL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURL_FNMATCHFUNC_FAIL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURL_FNMATCHFUNC_MATCH",
          "package": "curlhs",
          "signature": "CInt",
          "source": "src/Network-Curlhs-Base.html#cCURL_FNMATCHFUNC_MATCH",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURL_FNMATCHFUNC_MATCH",
          "package": "curlhs",
          "partial": "CURL FNMATCHFUNC MATCH",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURL_FNMATCHFUNC_MATCH"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURL_FNMATCHFUNC_NOMATCH",
          "package": "curlhs",
          "signature": "CInt",
          "source": "src/Network-Curlhs-Base.html#cCURL_FNMATCHFUNC_NOMATCH",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURL_FNMATCHFUNC_NOMATCH",
          "package": "curlhs",
          "partial": "CURL FNMATCHFUNC NOMATCH",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURL_FNMATCHFUNC_NOMATCH"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURL_FORMADD_DISABLED",
          "package": "curlhs",
          "signature": "CCURLformcode",
          "source": "src/Network-Curlhs-Base.html#cCURL_FORMADD_DISABLED",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURL_FORMADD_DISABLED",
          "package": "curlhs",
          "partial": "CURL FORMADD DISABLED",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURL_FORMADD_DISABLED"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURL_FORMADD_ILLEGAL_ARRAY",
          "package": "curlhs",
          "signature": "CCURLformcode",
          "source": "src/Network-Curlhs-Base.html#cCURL_FORMADD_ILLEGAL_ARRAY",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURL_FORMADD_ILLEGAL_ARRAY",
          "package": "curlhs",
          "partial": "CURL FORMADD ILLEGAL ARRAY",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURL_FORMADD_ILLEGAL_ARRAY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURL_FORMADD_INCOMPLETE",
          "package": "curlhs",
          "signature": "CCURLformcode",
          "source": "src/Network-Curlhs-Base.html#cCURL_FORMADD_INCOMPLETE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURL_FORMADD_INCOMPLETE",
          "package": "curlhs",
          "partial": "CURL FORMADD INCOMPLETE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURL_FORMADD_INCOMPLETE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURL_FORMADD_MEMORY",
          "package": "curlhs",
          "signature": "CCURLformcode",
          "source": "src/Network-Curlhs-Base.html#cCURL_FORMADD_MEMORY",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURL_FORMADD_MEMORY",
          "package": "curlhs",
          "partial": "CURL FORMADD MEMORY",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURL_FORMADD_MEMORY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURL_FORMADD_NULL",
          "package": "curlhs",
          "signature": "CCURLformcode",
          "source": "src/Network-Curlhs-Base.html#cCURL_FORMADD_NULL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURL_FORMADD_NULL",
          "package": "curlhs",
          "partial": "CURL FORMADD NULL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURL_FORMADD_NULL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURL_FORMADD_OK",
          "package": "curlhs",
          "signature": "CCURLformcode",
          "source": "src/Network-Curlhs-Base.html#cCURL_FORMADD_OK",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURL_FORMADD_OK",
          "package": "curlhs",
          "partial": "CURL FORMADD OK",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURL_FORMADD_OK"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURL_FORMADD_OPTION_TWICE",
          "package": "curlhs",
          "signature": "CCURLformcode",
          "source": "src/Network-Curlhs-Base.html#cCURL_FORMADD_OPTION_TWICE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURL_FORMADD_OPTION_TWICE",
          "package": "curlhs",
          "partial": "CURL FORMADD OPTION TWICE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURL_FORMADD_OPTION_TWICE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURL_FORMADD_UNKNOWN_OPTION",
          "package": "curlhs",
          "signature": "CCURLformcode",
          "source": "src/Network-Curlhs-Base.html#cCURL_FORMADD_UNKNOWN_OPTION",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURL_FORMADD_UNKNOWN_OPTION",
          "package": "curlhs",
          "partial": "CURL FORMADD UNKNOWN OPTION",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURL_FORMADD_UNKNOWN_OPTION"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURL_GLOBAL_ALL",
          "package": "curlhs",
          "signature": "CLong",
          "source": "src/Network-Curlhs-Base.html#cCURL_GLOBAL_ALL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURL_GLOBAL_ALL",
          "package": "curlhs",
          "partial": "CURL GLOBAL ALL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURL_GLOBAL_ALL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURL_GLOBAL_DEFAULT",
          "package": "curlhs",
          "signature": "CLong",
          "source": "src/Network-Curlhs-Base.html#cCURL_GLOBAL_DEFAULT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURL_GLOBAL_DEFAULT",
          "package": "curlhs",
          "partial": "CURL GLOBAL DEFAULT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURL_GLOBAL_DEFAULT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURL_GLOBAL_NOTHING",
          "package": "curlhs",
          "signature": "CLong",
          "source": "src/Network-Curlhs-Base.html#cCURL_GLOBAL_NOTHING",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURL_GLOBAL_NOTHING",
          "package": "curlhs",
          "partial": "CURL GLOBAL NOTHING",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURL_GLOBAL_NOTHING"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURL_GLOBAL_SSL",
          "package": "curlhs",
          "signature": "CLong",
          "source": "src/Network-Curlhs-Base.html#cCURL_GLOBAL_SSL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURL_GLOBAL_SSL",
          "package": "curlhs",
          "partial": "CURL GLOBAL SSL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURL_GLOBAL_SSL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURL_GLOBAL_WIN32",
          "package": "curlhs",
          "signature": "CLong",
          "source": "src/Network-Curlhs-Base.html#cCURL_GLOBAL_WIN32",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURL_GLOBAL_WIN32",
          "package": "curlhs",
          "partial": "CURL GLOBAL WIN",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURL_GLOBAL_WIN32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURL_HTTP_VERSION_1_0",
          "package": "curlhs",
          "signature": "CLong",
          "source": "src/Network-Curlhs-Base.html#cCURL_HTTP_VERSION_1_0",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURL_HTTP_VERSION_1_0",
          "package": "curlhs",
          "partial": "CURL HTTP VERSION",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURL_HTTP_VERSION_1_0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURL_HTTP_VERSION_1_1",
          "package": "curlhs",
          "signature": "CLong",
          "source": "src/Network-Curlhs-Base.html#cCURL_HTTP_VERSION_1_1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURL_HTTP_VERSION_1_1",
          "package": "curlhs",
          "partial": "CURL HTTP VERSION",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURL_HTTP_VERSION_1_1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURL_HTTP_VERSION_NONE",
          "package": "curlhs",
          "signature": "CLong",
          "source": "src/Network-Curlhs-Base.html#cCURL_HTTP_VERSION_NONE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURL_HTTP_VERSION_NONE",
          "package": "curlhs",
          "partial": "CURL HTTP VERSION NONE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURL_HTTP_VERSION_NONE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURL_IPRESOLVE_V4",
          "package": "curlhs",
          "signature": "CLong",
          "source": "src/Network-Curlhs-Base.html#cCURL_IPRESOLVE_V4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURL_IPRESOLVE_V4",
          "package": "curlhs",
          "partial": "CURL IPRESOLVE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURL_IPRESOLVE_V4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURL_IPRESOLVE_V6",
          "package": "curlhs",
          "signature": "CLong",
          "source": "src/Network-Curlhs-Base.html#cCURL_IPRESOLVE_V6",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURL_IPRESOLVE_V6",
          "package": "curlhs",
          "partial": "CURL IPRESOLVE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURL_IPRESOLVE_V6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURL_IPRESOLVE_WHATEVER",
          "package": "curlhs",
          "signature": "CLong",
          "source": "src/Network-Curlhs-Base.html#cCURL_IPRESOLVE_WHATEVER",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURL_IPRESOLVE_WHATEVER",
          "package": "curlhs",
          "partial": "CURL IPRESOLVE WHATEVER",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURL_IPRESOLVE_WHATEVER"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURL_LOCK_ACCESS_NONE",
          "package": "curlhs",
          "signature": "CCURL_lock_access",
          "source": "src/Network-Curlhs-Base.html#cCURL_LOCK_ACCESS_NONE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURL_LOCK_ACCESS_NONE",
          "package": "curlhs",
          "partial": "CURL LOCK ACCESS NONE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURL_LOCK_ACCESS_NONE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURL_LOCK_ACCESS_SHARED",
          "package": "curlhs",
          "signature": "CCURL_lock_access",
          "source": "src/Network-Curlhs-Base.html#cCURL_LOCK_ACCESS_SHARED",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURL_LOCK_ACCESS_SHARED",
          "package": "curlhs",
          "partial": "CURL LOCK ACCESS SHARED",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURL_LOCK_ACCESS_SHARED"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURL_LOCK_ACCESS_SINGLE",
          "package": "curlhs",
          "signature": "CCURL_lock_access",
          "source": "src/Network-Curlhs-Base.html#cCURL_LOCK_ACCESS_SINGLE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURL_LOCK_ACCESS_SINGLE",
          "package": "curlhs",
          "partial": "CURL LOCK ACCESS SINGLE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURL_LOCK_ACCESS_SINGLE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURL_LOCK_DATA_CONNECT",
          "package": "curlhs",
          "signature": "CCURL_lock_data",
          "source": "src/Network-Curlhs-Base.html#cCURL_LOCK_DATA_CONNECT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURL_LOCK_DATA_CONNECT",
          "package": "curlhs",
          "partial": "CURL LOCK DATA CONNECT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURL_LOCK_DATA_CONNECT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURL_LOCK_DATA_COOKIE",
          "package": "curlhs",
          "signature": "CCURL_lock_data",
          "source": "src/Network-Curlhs-Base.html#cCURL_LOCK_DATA_COOKIE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURL_LOCK_DATA_COOKIE",
          "package": "curlhs",
          "partial": "CURL LOCK DATA COOKIE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURL_LOCK_DATA_COOKIE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURL_LOCK_DATA_DNS",
          "package": "curlhs",
          "signature": "CCURL_lock_data",
          "source": "src/Network-Curlhs-Base.html#cCURL_LOCK_DATA_DNS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURL_LOCK_DATA_DNS",
          "package": "curlhs",
          "partial": "CURL LOCK DATA DNS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURL_LOCK_DATA_DNS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURL_LOCK_DATA_SSL_SESSION",
          "package": "curlhs",
          "signature": "CCURL_lock_data",
          "source": "src/Network-Curlhs-Base.html#cCURL_LOCK_DATA_SSL_SESSION",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURL_LOCK_DATA_SSL_SESSION",
          "package": "curlhs",
          "partial": "CURL LOCK DATA SSL SESSION",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURL_LOCK_DATA_SSL_SESSION"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURL_MAX_HTTP_HEADER",
          "package": "curlhs",
          "signature": "CSize",
          "source": "src/Network-Curlhs-Base.html#cCURL_MAX_HTTP_HEADER",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURL_MAX_HTTP_HEADER",
          "package": "curlhs",
          "partial": "CURL MAX HTTP HEADER",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURL_MAX_HTTP_HEADER"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURL_MAX_WRITE_SIZE",
          "package": "curlhs",
          "signature": "CSize",
          "source": "src/Network-Curlhs-Base.html#cCURL_MAX_WRITE_SIZE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURL_MAX_WRITE_SIZE",
          "package": "curlhs",
          "partial": "CURL MAX WRITE SIZE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURL_MAX_WRITE_SIZE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURL_NETRC_IGNORED",
          "package": "curlhs",
          "signature": "CLong",
          "source": "src/Network-Curlhs-Base.html#cCURL_NETRC_IGNORED",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURL_NETRC_IGNORED",
          "package": "curlhs",
          "partial": "CURL NETRC IGNORED",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURL_NETRC_IGNORED"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURL_NETRC_OPTIONAL",
          "package": "curlhs",
          "signature": "CLong",
          "source": "src/Network-Curlhs-Base.html#cCURL_NETRC_OPTIONAL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURL_NETRC_OPTIONAL",
          "package": "curlhs",
          "partial": "CURL NETRC OPTIONAL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURL_NETRC_OPTIONAL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURL_NETRC_REQUIRED",
          "package": "curlhs",
          "signature": "CLong",
          "source": "src/Network-Curlhs-Base.html#cCURL_NETRC_REQUIRED",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURL_NETRC_REQUIRED",
          "package": "curlhs",
          "partial": "CURL NETRC REQUIRED",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURL_NETRC_REQUIRED"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURL_READFUNC_ABORT",
          "package": "curlhs",
          "signature": "CSize",
          "source": "src/Network-Curlhs-Base.html#cCURL_READFUNC_ABORT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURL_READFUNC_ABORT",
          "package": "curlhs",
          "partial": "CURL READFUNC ABORT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURL_READFUNC_ABORT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURL_READFUNC_PAUSE",
          "package": "curlhs",
          "signature": "CSize",
          "source": "src/Network-Curlhs-Base.html#cCURL_READFUNC_PAUSE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURL_READFUNC_PAUSE",
          "package": "curlhs",
          "partial": "CURL READFUNC PAUSE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURL_READFUNC_PAUSE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURL_REDIR_GET_ALL",
          "package": "curlhs",
          "signature": "CLong",
          "source": "src/Network-Curlhs-Base.html#cCURL_REDIR_GET_ALL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURL_REDIR_GET_ALL",
          "package": "curlhs",
          "partial": "CURL REDIR GET ALL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURL_REDIR_GET_ALL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURL_REDIR_POST_301",
          "package": "curlhs",
          "signature": "CLong",
          "source": "src/Network-Curlhs-Base.html#cCURL_REDIR_POST_301",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURL_REDIR_POST_301",
          "package": "curlhs",
          "partial": "CURL REDIR POST",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURL_REDIR_POST_301"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURL_REDIR_POST_302",
          "package": "curlhs",
          "signature": "CLong",
          "source": "src/Network-Curlhs-Base.html#cCURL_REDIR_POST_302",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURL_REDIR_POST_302",
          "package": "curlhs",
          "partial": "CURL REDIR POST",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURL_REDIR_POST_302"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURL_REDIR_POST_ALL",
          "package": "curlhs",
          "signature": "CLong",
          "source": "src/Network-Curlhs-Base.html#cCURL_REDIR_POST_ALL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURL_REDIR_POST_ALL",
          "package": "curlhs",
          "partial": "CURL REDIR POST ALL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURL_REDIR_POST_ALL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURL_RTSPREQ_ANNOUNCE",
          "package": "curlhs",
          "signature": "CLong",
          "source": "src/Network-Curlhs-Base.html#cCURL_RTSPREQ_ANNOUNCE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURL_RTSPREQ_ANNOUNCE",
          "package": "curlhs",
          "partial": "CURL RTSPREQ ANNOUNCE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURL_RTSPREQ_ANNOUNCE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURL_RTSPREQ_DESCRIBE",
          "package": "curlhs",
          "signature": "CLong",
          "source": "src/Network-Curlhs-Base.html#cCURL_RTSPREQ_DESCRIBE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURL_RTSPREQ_DESCRIBE",
          "package": "curlhs",
          "partial": "CURL RTSPREQ DESCRIBE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURL_RTSPREQ_DESCRIBE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURL_RTSPREQ_GET_PARAMETER",
          "package": "curlhs",
          "signature": "CLong",
          "source": "src/Network-Curlhs-Base.html#cCURL_RTSPREQ_GET_PARAMETER",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURL_RTSPREQ_GET_PARAMETER",
          "package": "curlhs",
          "partial": "CURL RTSPREQ GET PARAMETER",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURL_RTSPREQ_GET_PARAMETER"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURL_RTSPREQ_NONE",
          "package": "curlhs",
          "signature": "CLong",
          "source": "src/Network-Curlhs-Base.html#cCURL_RTSPREQ_NONE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURL_RTSPREQ_NONE",
          "package": "curlhs",
          "partial": "CURL RTSPREQ NONE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURL_RTSPREQ_NONE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURL_RTSPREQ_OPTIONS",
          "package": "curlhs",
          "signature": "CLong",
          "source": "src/Network-Curlhs-Base.html#cCURL_RTSPREQ_OPTIONS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURL_RTSPREQ_OPTIONS",
          "package": "curlhs",
          "partial": "CURL RTSPREQ OPTIONS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURL_RTSPREQ_OPTIONS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURL_RTSPREQ_PAUSE",
          "package": "curlhs",
          "signature": "CLong",
          "source": "src/Network-Curlhs-Base.html#cCURL_RTSPREQ_PAUSE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURL_RTSPREQ_PAUSE",
          "package": "curlhs",
          "partial": "CURL RTSPREQ PAUSE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURL_RTSPREQ_PAUSE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURL_RTSPREQ_PLAY",
          "package": "curlhs",
          "signature": "CLong",
          "source": "src/Network-Curlhs-Base.html#cCURL_RTSPREQ_PLAY",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURL_RTSPREQ_PLAY",
          "package": "curlhs",
          "partial": "CURL RTSPREQ PLAY",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURL_RTSPREQ_PLAY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURL_RTSPREQ_RECEIVE",
          "package": "curlhs",
          "signature": "CLong",
          "source": "src/Network-Curlhs-Base.html#cCURL_RTSPREQ_RECEIVE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURL_RTSPREQ_RECEIVE",
          "package": "curlhs",
          "partial": "CURL RTSPREQ RECEIVE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURL_RTSPREQ_RECEIVE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURL_RTSPREQ_RECORD",
          "package": "curlhs",
          "signature": "CLong",
          "source": "src/Network-Curlhs-Base.html#cCURL_RTSPREQ_RECORD",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURL_RTSPREQ_RECORD",
          "package": "curlhs",
          "partial": "CURL RTSPREQ RECORD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURL_RTSPREQ_RECORD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURL_RTSPREQ_SETUP",
          "package": "curlhs",
          "signature": "CLong",
          "source": "src/Network-Curlhs-Base.html#cCURL_RTSPREQ_SETUP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURL_RTSPREQ_SETUP",
          "package": "curlhs",
          "partial": "CURL RTSPREQ SETUP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURL_RTSPREQ_SETUP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURL_RTSPREQ_SET_PARAMETER",
          "package": "curlhs",
          "signature": "CLong",
          "source": "src/Network-Curlhs-Base.html#cCURL_RTSPREQ_SET_PARAMETER",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURL_RTSPREQ_SET_PARAMETER",
          "package": "curlhs",
          "partial": "CURL RTSPREQ SET PARAMETER",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURL_RTSPREQ_SET_PARAMETER"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURL_RTSPREQ_TEARDOWN",
          "package": "curlhs",
          "signature": "CLong",
          "source": "src/Network-Curlhs-Base.html#cCURL_RTSPREQ_TEARDOWN",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURL_RTSPREQ_TEARDOWN",
          "package": "curlhs",
          "partial": "CURL RTSPREQ TEARDOWN",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURL_RTSPREQ_TEARDOWN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURL_SEEKFUNC_CANTSEEK",
          "package": "curlhs",
          "signature": "CInt",
          "source": "src/Network-Curlhs-Base.html#cCURL_SEEKFUNC_CANTSEEK",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURL_SEEKFUNC_CANTSEEK",
          "package": "curlhs",
          "partial": "CURL SEEKFUNC CANTSEEK",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURL_SEEKFUNC_CANTSEEK"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURL_SEEKFUNC_FAIL",
          "package": "curlhs",
          "signature": "CInt",
          "source": "src/Network-Curlhs-Base.html#cCURL_SEEKFUNC_FAIL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURL_SEEKFUNC_FAIL",
          "package": "curlhs",
          "partial": "CURL SEEKFUNC FAIL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURL_SEEKFUNC_FAIL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURL_SEEKFUNC_OK",
          "package": "curlhs",
          "signature": "CInt",
          "source": "src/Network-Curlhs-Base.html#cCURL_SEEKFUNC_OK",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURL_SEEKFUNC_OK",
          "package": "curlhs",
          "partial": "CURL SEEKFUNC OK",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURL_SEEKFUNC_OK"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURL_SOCKET_BAD",
          "package": "curlhs",
          "signature": "CCURL_socket_t",
          "source": "src/Network-Curlhs-Base.html#cCURL_SOCKET_BAD",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURL_SOCKET_BAD",
          "package": "curlhs",
          "partial": "CURL SOCKET BAD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURL_SOCKET_BAD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURL_SOCKOPT_ALREADY_CONNECTED",
          "package": "curlhs",
          "signature": "CInt",
          "source": "src/Network-Curlhs-Base.html#cCURL_SOCKOPT_ALREADY_CONNECTED",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURL_SOCKOPT_ALREADY_CONNECTED",
          "package": "curlhs",
          "partial": "CURL SOCKOPT ALREADY CONNECTED",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURL_SOCKOPT_ALREADY_CONNECTED"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURL_SOCKOPT_ERROR",
          "package": "curlhs",
          "signature": "CInt",
          "source": "src/Network-Curlhs-Base.html#cCURL_SOCKOPT_ERROR",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURL_SOCKOPT_ERROR",
          "package": "curlhs",
          "partial": "CURL SOCKOPT ERROR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURL_SOCKOPT_ERROR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURL_SOCKOPT_OK",
          "package": "curlhs",
          "signature": "CInt",
          "source": "src/Network-Curlhs-Base.html#cCURL_SOCKOPT_OK",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURL_SOCKOPT_OK",
          "package": "curlhs",
          "partial": "CURL SOCKOPT OK",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURL_SOCKOPT_OK"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURL_SSLVERSION_DEFAULT",
          "package": "curlhs",
          "signature": "CLong",
          "source": "src/Network-Curlhs-Base.html#cCURL_SSLVERSION_DEFAULT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURL_SSLVERSION_DEFAULT",
          "package": "curlhs",
          "partial": "CURL SSLVERSION DEFAULT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURL_SSLVERSION_DEFAULT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURL_SSLVERSION_SSLv2",
          "package": "curlhs",
          "signature": "CLong",
          "source": "src/Network-Curlhs-Base.html#cCURL_SSLVERSION_SSLv2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURL_SSLVERSION_SSLv2",
          "package": "curlhs",
          "partial": "CURL SSLVERSION SSLv",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURL_SSLVERSION_SSLv2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURL_SSLVERSION_SSLv3",
          "package": "curlhs",
          "signature": "CLong",
          "source": "src/Network-Curlhs-Base.html#cCURL_SSLVERSION_SSLv3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURL_SSLVERSION_SSLv3",
          "package": "curlhs",
          "partial": "CURL SSLVERSION SSLv",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURL_SSLVERSION_SSLv3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURL_SSLVERSION_TLSv1",
          "package": "curlhs",
          "signature": "CLong",
          "source": "src/Network-Curlhs-Base.html#cCURL_SSLVERSION_TLSv1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURL_SSLVERSION_TLSv1",
          "package": "curlhs",
          "partial": "CURL SSLVERSION TLSv",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURL_SSLVERSION_TLSv1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURL_TIMECOND_IFMODSINCE",
          "package": "curlhs",
          "signature": "CLong",
          "source": "src/Network-Curlhs-Base.html#cCURL_TIMECOND_IFMODSINCE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURL_TIMECOND_IFMODSINCE",
          "package": "curlhs",
          "partial": "CURL TIMECOND IFMODSINCE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURL_TIMECOND_IFMODSINCE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURL_TIMECOND_IFUNMODSINCE",
          "package": "curlhs",
          "signature": "CLong",
          "source": "src/Network-Curlhs-Base.html#cCURL_TIMECOND_IFUNMODSINCE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURL_TIMECOND_IFUNMODSINCE",
          "package": "curlhs",
          "partial": "CURL TIMECOND IFUNMODSINCE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURL_TIMECOND_IFUNMODSINCE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURL_TIMECOND_LASTMOD",
          "package": "curlhs",
          "signature": "CLong",
          "source": "src/Network-Curlhs-Base.html#cCURL_TIMECOND_LASTMOD",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURL_TIMECOND_LASTMOD",
          "package": "curlhs",
          "partial": "CURL TIMECOND LASTMOD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURL_TIMECOND_LASTMOD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURL_TIMECOND_NONE",
          "package": "curlhs",
          "signature": "CLong",
          "source": "src/Network-Curlhs-Base.html#cCURL_TIMECOND_NONE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURL_TIMECOND_NONE",
          "package": "curlhs",
          "partial": "CURL TIMECOND NONE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURL_TIMECOND_NONE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURL_TLSAUTH_NONE",
          "package": "curlhs",
          "signature": "CLong",
          "source": "src/Network-Curlhs-Base.html#cCURL_TLSAUTH_NONE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURL_TLSAUTH_NONE",
          "package": "curlhs",
          "partial": "CURL TLSAUTH NONE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURL_TLSAUTH_NONE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURL_TLSAUTH_SRP",
          "package": "curlhs",
          "signature": "CLong",
          "source": "src/Network-Curlhs-Base.html#cCURL_TLSAUTH_SRP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURL_TLSAUTH_SRP",
          "package": "curlhs",
          "partial": "CURL TLSAUTH SRP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURL_TLSAUTH_SRP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURL_VERSION_ASYNCHDNS",
          "package": "curlhs",
          "signature": "CInt",
          "source": "src/Network-Curlhs-Base.html#cCURL_VERSION_ASYNCHDNS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURL_VERSION_ASYNCHDNS",
          "package": "curlhs",
          "partial": "CURL VERSION ASYNCHDNS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURL_VERSION_ASYNCHDNS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURL_VERSION_CONV",
          "package": "curlhs",
          "signature": "CInt",
          "source": "src/Network-Curlhs-Base.html#cCURL_VERSION_CONV",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURL_VERSION_CONV",
          "package": "curlhs",
          "partial": "CURL VERSION CONV",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURL_VERSION_CONV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURL_VERSION_CURLDEBUG",
          "package": "curlhs",
          "signature": "CInt",
          "source": "src/Network-Curlhs-Base.html#cCURL_VERSION_CURLDEBUG",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURL_VERSION_CURLDEBUG",
          "package": "curlhs",
          "partial": "CURL VERSION CURLDEBUG",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURL_VERSION_CURLDEBUG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURL_VERSION_DEBUG",
          "package": "curlhs",
          "signature": "CInt",
          "source": "src/Network-Curlhs-Base.html#cCURL_VERSION_DEBUG",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURL_VERSION_DEBUG",
          "package": "curlhs",
          "partial": "CURL VERSION DEBUG",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURL_VERSION_DEBUG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURL_VERSION_GSSNEGOTIATE",
          "package": "curlhs",
          "signature": "CInt",
          "source": "src/Network-Curlhs-Base.html#cCURL_VERSION_GSSNEGOTIATE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURL_VERSION_GSSNEGOTIATE",
          "package": "curlhs",
          "partial": "CURL VERSION GSSNEGOTIATE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURL_VERSION_GSSNEGOTIATE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURL_VERSION_IDN",
          "package": "curlhs",
          "signature": "CInt",
          "source": "src/Network-Curlhs-Base.html#cCURL_VERSION_IDN",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURL_VERSION_IDN",
          "package": "curlhs",
          "partial": "CURL VERSION IDN",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURL_VERSION_IDN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURL_VERSION_IPV6",
          "package": "curlhs",
          "signature": "CInt",
          "source": "src/Network-Curlhs-Base.html#cCURL_VERSION_IPV6",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURL_VERSION_IPV6",
          "package": "curlhs",
          "partial": "CURL VERSION IPV",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURL_VERSION_IPV6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURL_VERSION_KERBEROS4",
          "package": "curlhs",
          "signature": "CInt",
          "source": "src/Network-Curlhs-Base.html#cCURL_VERSION_KERBEROS4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURL_VERSION_KERBEROS4",
          "package": "curlhs",
          "partial": "CURL VERSION KERBEROS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURL_VERSION_KERBEROS4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURL_VERSION_LARGEFILE",
          "package": "curlhs",
          "signature": "CInt",
          "source": "src/Network-Curlhs-Base.html#cCURL_VERSION_LARGEFILE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURL_VERSION_LARGEFILE",
          "package": "curlhs",
          "partial": "CURL VERSION LARGEFILE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURL_VERSION_LARGEFILE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURL_VERSION_LIBZ",
          "package": "curlhs",
          "signature": "CInt",
          "source": "src/Network-Curlhs-Base.html#cCURL_VERSION_LIBZ",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURL_VERSION_LIBZ",
          "package": "curlhs",
          "partial": "CURL VERSION LIBZ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURL_VERSION_LIBZ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURL_VERSION_NTLM",
          "package": "curlhs",
          "signature": "CInt",
          "source": "src/Network-Curlhs-Base.html#cCURL_VERSION_NTLM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURL_VERSION_NTLM",
          "package": "curlhs",
          "partial": "CURL VERSION NTLM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURL_VERSION_NTLM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURL_VERSION_NTLM_WB",
          "package": "curlhs",
          "signature": "CInt",
          "source": "src/Network-Curlhs-Base.html#cCURL_VERSION_NTLM_WB",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURL_VERSION_NTLM_WB",
          "package": "curlhs",
          "partial": "CURL VERSION NTLM WB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURL_VERSION_NTLM_WB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURL_VERSION_SPNEGO",
          "package": "curlhs",
          "signature": "CInt",
          "source": "src/Network-Curlhs-Base.html#cCURL_VERSION_SPNEGO",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURL_VERSION_SPNEGO",
          "package": "curlhs",
          "partial": "CURL VERSION SPNEGO",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURL_VERSION_SPNEGO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURL_VERSION_SSL",
          "package": "curlhs",
          "signature": "CInt",
          "source": "src/Network-Curlhs-Base.html#cCURL_VERSION_SSL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURL_VERSION_SSL",
          "package": "curlhs",
          "partial": "CURL VERSION SSL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURL_VERSION_SSL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURL_VERSION_SSPI",
          "package": "curlhs",
          "signature": "CInt",
          "source": "src/Network-Curlhs-Base.html#cCURL_VERSION_SSPI",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURL_VERSION_SSPI",
          "package": "curlhs",
          "partial": "CURL VERSION SSPI",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURL_VERSION_SSPI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURL_VERSION_TLSAUTH_SRP",
          "package": "curlhs",
          "signature": "CInt",
          "source": "src/Network-Curlhs-Base.html#cCURL_VERSION_TLSAUTH_SRP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURL_VERSION_TLSAUTH_SRP",
          "package": "curlhs",
          "partial": "CURL VERSION TLSAUTH SRP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURL_VERSION_TLSAUTH_SRP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cCURL_WRITEFUNC_PAUSE",
          "package": "curlhs",
          "signature": "CSize",
          "source": "src/Network-Curlhs-Base.html#cCURL_WRITEFUNC_PAUSE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cCURL_WRITEFUNC_PAUSE",
          "package": "curlhs",
          "partial": "CURL WRITEFUNC PAUSE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cCURL_WRITEFUNC_PAUSE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cHTTPPOST_BUFFER",
          "package": "curlhs",
          "signature": "CLong",
          "source": "src/Network-Curlhs-Base.html#cHTTPPOST_BUFFER",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cHTTPPOST_BUFFER",
          "package": "curlhs",
          "partial": "HTTPPOST BUFFER",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cHTTPPOST_BUFFER"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cHTTPPOST_CALLBACK",
          "package": "curlhs",
          "signature": "CLong",
          "source": "src/Network-Curlhs-Base.html#cHTTPPOST_CALLBACK",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cHTTPPOST_CALLBACK",
          "package": "curlhs",
          "partial": "HTTPPOST CALLBACK",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cHTTPPOST_CALLBACK"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cHTTPPOST_FILENAME",
          "package": "curlhs",
          "signature": "CLong",
          "source": "src/Network-Curlhs-Base.html#cHTTPPOST_FILENAME",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cHTTPPOST_FILENAME",
          "package": "curlhs",
          "partial": "HTTPPOST FILENAME",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cHTTPPOST_FILENAME"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cHTTPPOST_PTRBUFFER",
          "package": "curlhs",
          "signature": "CLong",
          "source": "src/Network-Curlhs-Base.html#cHTTPPOST_PTRBUFFER",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cHTTPPOST_PTRBUFFER",
          "package": "curlhs",
          "partial": "HTTPPOST PTRBUFFER",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cHTTPPOST_PTRBUFFER"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cHTTPPOST_PTRCONTENTS",
          "package": "curlhs",
          "signature": "CLong",
          "source": "src/Network-Curlhs-Base.html#cHTTPPOST_PTRCONTENTS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cHTTPPOST_PTRCONTENTS",
          "package": "curlhs",
          "partial": "HTTPPOST PTRCONTENTS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cHTTPPOST_PTRCONTENTS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cHTTPPOST_PTRNAME",
          "package": "curlhs",
          "signature": "CLong",
          "source": "src/Network-Curlhs-Base.html#cHTTPPOST_PTRNAME",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cHTTPPOST_PTRNAME",
          "package": "curlhs",
          "partial": "HTTPPOST PTRNAME",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cHTTPPOST_PTRNAME"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "cHTTPPOST_READFILE",
          "package": "curlhs",
          "signature": "CLong",
          "source": "src/Network-Curlhs-Base.html#cHTTPPOST_READFILE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "cHTTPPOST_READFILE",
          "package": "curlhs",
          "partial": "HTTPPOST READFILE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:cHTTPPOST_READFILE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "ccurl_certinfo_certinfo",
          "package": "curlhs",
          "signature": "Ptr (Ptr CCURL_slist)",
          "source": "src/Network-Curlhs-Base.html#CCURL_certinfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "ccurl_certinfo_certinfo",
          "package": "curlhs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:ccurl_certinfo_certinfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "ccurl_certinfo_num_of_certs",
          "package": "curlhs",
          "signature": "CInt",
          "source": "src/Network-Curlhs-Base.html#CCURL_certinfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "ccurl_certinfo_num_of_certs",
          "package": "curlhs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:ccurl_certinfo_num_of_certs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "ccurl_easy_cleanup",
          "package": "curlhs",
          "signature": "Ptr CCURL -\u003e IO ()",
          "source": "src/Network-Curlhs-Base.html#ccurl_easy_cleanup",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "ccurl_easy_cleanup",
          "normalized": "Ptr CCURL-\u003eIO()",
          "package": "curlhs",
          "signature": "Ptr CCURL-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:ccurl_easy_cleanup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "ccurl_easy_duphandle",
          "package": "curlhs",
          "signature": "Ptr CCURL -\u003e IO (Ptr CCURL)",
          "source": "src/Network-Curlhs-Base.html#ccurl_easy_duphandle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "ccurl_easy_duphandle",
          "normalized": "Ptr CCURL-\u003eIO(Ptr CCURL)",
          "package": "curlhs",
          "signature": "Ptr CCURL-\u003eIO(Ptr CCURL)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:ccurl_easy_duphandle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "ccurl_easy_escape",
          "package": "curlhs",
          "signature": "Ptr CCURL -\u003e Ptr CChar -\u003e CInt -\u003e IO (Ptr CChar)",
          "source": "src/Network-Curlhs-Base.html#ccurl_easy_escape",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "ccurl_easy_escape",
          "normalized": "Ptr CCURL-\u003ePtr CChar-\u003eCInt-\u003eIO(Ptr CChar)",
          "package": "curlhs",
          "signature": "Ptr CCURL-\u003ePtr CChar-\u003eCInt-\u003eIO(Ptr CChar)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:ccurl_easy_escape"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "ccurl_easy_getinfo'CDouble",
          "package": "curlhs",
          "signature": "Ptr CCURL -\u003e CCURLinfo'CDouble -\u003e Ptr CDouble -\u003e IO CCURLcode",
          "source": "src/Network-Curlhs-Base.html#ccurl_easy_getinfo%27CDouble",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "ccurl_easy_getinfo'CDouble",
          "normalized": "Ptr CCURL-\u003eCCURLinfo'CDouble-\u003ePtr CDouble-\u003eIO CCURLcode",
          "package": "curlhs",
          "partial": "CDouble",
          "signature": "Ptr CCURL-\u003eCCURLinfo'CDouble-\u003ePtr CDouble-\u003eIO CCURLcode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:ccurl_easy_getinfo-39-CDouble"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "ccurl_easy_getinfo'CLong",
          "package": "curlhs",
          "signature": "Ptr CCURL -\u003e CCURLinfo'CLong -\u003e Ptr CLong -\u003e IO CCURLcode",
          "source": "src/Network-Curlhs-Base.html#ccurl_easy_getinfo%27CLong",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "ccurl_easy_getinfo'CLong",
          "normalized": "Ptr CCURL-\u003eCCURLinfo'CLong-\u003ePtr CLong-\u003eIO CCURLcode",
          "package": "curlhs",
          "partial": "CLong",
          "signature": "Ptr CCURL-\u003eCCURLinfo'CLong-\u003ePtr CLong-\u003eIO CCURLcode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:ccurl_easy_getinfo-39-CLong"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "ccurl_easy_getinfo'CString",
          "package": "curlhs",
          "signature": "Ptr CCURL -\u003e CCURLinfo'CString -\u003e Ptr (Ptr CChar) -\u003e IO CCURLcode",
          "source": "src/Network-Curlhs-Base.html#ccurl_easy_getinfo%27CString",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "ccurl_easy_getinfo'CString",
          "normalized": "Ptr CCURL-\u003eCCURLinfo'CString-\u003ePtr(Ptr CChar)-\u003eIO CCURLcode",
          "package": "curlhs",
          "partial": "CString",
          "signature": "Ptr CCURL-\u003eCCURLinfo'CString-\u003ePtr(Ptr CChar)-\u003eIO CCURLcode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:ccurl_easy_getinfo-39-CString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "ccurl_easy_getinfo'CertI",
          "package": "curlhs",
          "signature": "Ptr CCURL -\u003e CCURLinfo'CertI -\u003e Ptr (Ptr CCURL_certinfo) -\u003e IO CCURLcode",
          "source": "src/Network-Curlhs-Base.html#ccurl_easy_getinfo%27CertI",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "ccurl_easy_getinfo'CertI",
          "normalized": "Ptr CCURL-\u003eCCURLinfo'CertI-\u003ePtr(Ptr CCURL_certinfo)-\u003eIO CCURLcode",
          "package": "curlhs",
          "partial": "Cert",
          "signature": "Ptr CCURL-\u003eCCURLinfo'CertI-\u003ePtr(Ptr CCURL_certinfo)-\u003eIO CCURLcode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:ccurl_easy_getinfo-39-CertI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "ccurl_easy_getinfo'SList",
          "package": "curlhs",
          "signature": "Ptr CCURL -\u003e CCURLinfo'SList -\u003e Ptr (Ptr CCURL_slist) -\u003e IO CCURLcode",
          "source": "src/Network-Curlhs-Base.html#ccurl_easy_getinfo%27SList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "ccurl_easy_getinfo'SList",
          "normalized": "Ptr CCURL-\u003eCCURLinfo'SList-\u003ePtr(Ptr CCURL_slist)-\u003eIO CCURLcode",
          "package": "curlhs",
          "partial": "SList",
          "signature": "Ptr CCURL-\u003eCCURLinfo'SList-\u003ePtr(Ptr CCURL_slist)-\u003eIO CCURLcode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:ccurl_easy_getinfo-39-SList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "ccurl_easy_init",
          "package": "curlhs",
          "signature": "IO (Ptr CCURL)",
          "source": "src/Network-Curlhs-Base.html#ccurl_easy_init",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "ccurl_easy_init",
          "package": "curlhs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:ccurl_easy_init"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "ccurl_easy_pause",
          "package": "curlhs",
          "signature": "Ptr CCURL -\u003e CInt -\u003e IO CCURLcode",
          "source": "src/Network-Curlhs-Base.html#ccurl_easy_pause",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "ccurl_easy_pause",
          "normalized": "Ptr CCURL-\u003eCInt-\u003eIO CCURLcode",
          "package": "curlhs",
          "signature": "Ptr CCURL-\u003eCInt-\u003eIO CCURLcode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:ccurl_easy_pause"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "ccurl_easy_perform",
          "package": "curlhs",
          "signature": "Ptr CCURL -\u003e IO CCURLcode",
          "source": "src/Network-Curlhs-Base.html#ccurl_easy_perform",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "ccurl_easy_perform",
          "normalized": "Ptr CCURL-\u003eIO CCURLcode",
          "package": "curlhs",
          "signature": "Ptr CCURL-\u003eIO CCURLcode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:ccurl_easy_perform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "ccurl_easy_recv",
          "package": "curlhs",
          "signature": "Ptr CCURL -\u003e Ptr a -\u003e CSize -\u003e Ptr CSize -\u003e IO CCURLcode",
          "source": "src/Network-Curlhs-Base.html#ccurl_easy_recv",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "ccurl_easy_recv",
          "normalized": "Ptr CCURL-\u003ePtr a-\u003eCSize-\u003ePtr CSize-\u003eIO CCURLcode",
          "package": "curlhs",
          "signature": "Ptr CCURL-\u003ePtr a-\u003eCSize-\u003ePtr CSize-\u003eIO CCURLcode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:ccurl_easy_recv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "ccurl_easy_reset",
          "package": "curlhs",
          "signature": "Ptr CCURL -\u003e IO ()",
          "source": "src/Network-Curlhs-Base.html#ccurl_easy_reset",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "ccurl_easy_reset",
          "normalized": "Ptr CCURL-\u003eIO()",
          "package": "curlhs",
          "signature": "Ptr CCURL-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:ccurl_easy_reset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "ccurl_easy_send",
          "package": "curlhs",
          "signature": "Ptr CCURL -\u003e Ptr a -\u003e CSize -\u003e Ptr CSize -\u003e IO CCURLcode",
          "source": "src/Network-Curlhs-Base.html#ccurl_easy_send",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "ccurl_easy_send",
          "normalized": "Ptr CCURL-\u003ePtr a-\u003eCSize-\u003ePtr CSize-\u003eIO CCURLcode",
          "package": "curlhs",
          "signature": "Ptr CCURL-\u003ePtr a-\u003eCSize-\u003ePtr CSize-\u003eIO CCURLcode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:ccurl_easy_send"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "ccurl_easy_setopt'CFile",
          "package": "curlhs",
          "signature": "Ptr CCURL -\u003e CCURLoption'CFile -\u003e Ptr CFile -\u003e IO CCURLcode",
          "source": "src/Network-Curlhs-Base.html#ccurl_easy_setopt%27CFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "ccurl_easy_setopt'CFile",
          "normalized": "Ptr CCURL-\u003eCCURLoption'CFile-\u003ePtr CFile-\u003eIO CCURLcode",
          "package": "curlhs",
          "partial": "CFile",
          "signature": "Ptr CCURL-\u003eCCURLoption'CFile-\u003ePtr CFile-\u003eIO CCURLcode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:ccurl_easy_setopt-39-CFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "ccurl_easy_setopt'CLong",
          "package": "curlhs",
          "signature": "Ptr CCURL -\u003e CCURLoption'CLong -\u003e CLong -\u003e IO CCURLcode",
          "source": "src/Network-Curlhs-Base.html#ccurl_easy_setopt%27CLong",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "ccurl_easy_setopt'CLong",
          "normalized": "Ptr CCURL-\u003eCCURLoption'CLong-\u003eCLong-\u003eIO CCURLcode",
          "package": "curlhs",
          "partial": "CLong",
          "signature": "Ptr CCURL-\u003eCCURLoption'CLong-\u003eCLong-\u003eIO CCURLcode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:ccurl_easy_setopt-39-CLong"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "ccurl_easy_setopt'CString",
          "package": "curlhs",
          "signature": "Ptr CCURL -\u003e CCURLoption'CString -\u003e Ptr CChar -\u003e IO CCURLcode",
          "source": "src/Network-Curlhs-Base.html#ccurl_easy_setopt%27CString",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "ccurl_easy_setopt'CString",
          "normalized": "Ptr CCURL-\u003eCCURLoption'CString-\u003ePtr CChar-\u003eIO CCURLcode",
          "package": "curlhs",
          "partial": "CString",
          "signature": "Ptr CCURL-\u003eCCURLoption'CString-\u003ePtr CChar-\u003eIO CCURLcode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:ccurl_easy_setopt-39-CString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "ccurl_easy_setopt'CURLSH",
          "package": "curlhs",
          "signature": "Ptr CCURL -\u003e CCURLoption'CURLSH -\u003e Ptr CCURLSH -\u003e IO CCURLcode",
          "source": "src/Network-Curlhs-Base.html#ccurl_easy_setopt%27CURLSH",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "ccurl_easy_setopt'CURLSH",
          "normalized": "Ptr CCURL-\u003eCCURLoption'CURLSH-\u003ePtr CCURLSH-\u003eIO CCURLcode",
          "package": "curlhs",
          "partial": "CURLSH",
          "signature": "Ptr CCURL-\u003eCCURLoption'CURLSH-\u003ePtr CCURLSH-\u003eIO CCURLcode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:ccurl_easy_setopt-39-CURLSH"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "ccurl_easy_setopt'FCHUNKBGN",
          "package": "curlhs",
          "signature": "Ptr CCURL -\u003e FunPtr CCURL_chunk_bgn_callback -\u003e IO CCURLcode",
          "source": "src/Network-Curlhs-Base.html#ccurl_easy_setopt%27FCHUNKBGN",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "ccurl_easy_setopt'FCHUNKBGN",
          "normalized": "Ptr CCURL-\u003eFunPtr CCURL_chunk_bgn_callback-\u003eIO CCURLcode",
          "package": "curlhs",
          "partial": "FCHUNKBGN",
          "signature": "Ptr CCURL-\u003eFunPtr CCURL_chunk_bgn_callback-\u003eIO CCURLcode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:ccurl_easy_setopt-39-FCHUNKBGN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "ccurl_easy_setopt'FCHUNKEND",
          "package": "curlhs",
          "signature": "Ptr CCURL -\u003e FunPtr CCURL_chunk_end_callback -\u003e IO CCURLcode",
          "source": "src/Network-Curlhs-Base.html#ccurl_easy_setopt%27FCHUNKEND",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "ccurl_easy_setopt'FCHUNKEND",
          "normalized": "Ptr CCURL-\u003eFunPtr CCURL_chunk_end_callback-\u003eIO CCURLcode",
          "package": "curlhs",
          "partial": "FCHUNKEND",
          "signature": "Ptr CCURL-\u003eFunPtr CCURL_chunk_end_callback-\u003eIO CCURLcode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:ccurl_easy_setopt-39-FCHUNKEND"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "ccurl_easy_setopt'FCLOSESOCKET",
          "package": "curlhs",
          "signature": "Ptr CCURL -\u003e FunPtr CCURL_closesocket_callback -\u003e IO CCURLcode",
          "source": "src/Network-Curlhs-Base.html#ccurl_easy_setopt%27FCLOSESOCKET",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "ccurl_easy_setopt'FCLOSESOCKET",
          "normalized": "Ptr CCURL-\u003eFunPtr CCURL_closesocket_callback-\u003eIO CCURLcode",
          "package": "curlhs",
          "partial": "FCLOSESOCKET",
          "signature": "Ptr CCURL-\u003eFunPtr CCURL_closesocket_callback-\u003eIO CCURLcode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:ccurl_easy_setopt-39-FCLOSESOCKET"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "ccurl_easy_setopt'FCONVFROM",
          "package": "curlhs",
          "signature": "Ptr CCURL -\u003e FunPtr CCURL_conv_callback -\u003e IO CCURLcode",
          "source": "src/Network-Curlhs-Base.html#ccurl_easy_setopt%27FCONVFROM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "ccurl_easy_setopt'FCONVFROM",
          "normalized": "Ptr CCURL-\u003eFunPtr CCURL_conv_callback-\u003eIO CCURLcode",
          "package": "curlhs",
          "partial": "FCONVFROM",
          "signature": "Ptr CCURL-\u003eFunPtr CCURL_conv_callback-\u003eIO CCURLcode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:ccurl_easy_setopt-39-FCONVFROM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "ccurl_easy_setopt'FCONVTO",
          "package": "curlhs",
          "signature": "Ptr CCURL -\u003e FunPtr CCURL_conv_callback -\u003e IO CCURLcode",
          "source": "src/Network-Curlhs-Base.html#ccurl_easy_setopt%27FCONVTO",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "ccurl_easy_setopt'FCONVTO",
          "normalized": "Ptr CCURL-\u003eFunPtr CCURL_conv_callback-\u003eIO CCURLcode",
          "package": "curlhs",
          "partial": "FCONVTO",
          "signature": "Ptr CCURL-\u003eFunPtr CCURL_conv_callback-\u003eIO CCURLcode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:ccurl_easy_setopt-39-FCONVTO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "ccurl_easy_setopt'FCONVUTF8",
          "package": "curlhs",
          "signature": "Ptr CCURL -\u003e FunPtr CCURL_conv_callback -\u003e IO CCURLcode",
          "source": "src/Network-Curlhs-Base.html#ccurl_easy_setopt%27FCONVUTF8",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "ccurl_easy_setopt'FCONVUTF8",
          "normalized": "Ptr CCURL-\u003eFunPtr CCURL_conv_callback-\u003eIO CCURLcode",
          "package": "curlhs",
          "partial": "FCONVUTF",
          "signature": "Ptr CCURL-\u003eFunPtr CCURL_conv_callback-\u003eIO CCURLcode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:ccurl_easy_setopt-39-FCONVUTF8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "ccurl_easy_setopt'FDEBUG",
          "package": "curlhs",
          "signature": "Ptr CCURL -\u003e FunPtr CCURL_debug_callback -\u003e IO CCURLcode",
          "source": "src/Network-Curlhs-Base.html#ccurl_easy_setopt%27FDEBUG",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "ccurl_easy_setopt'FDEBUG",
          "normalized": "Ptr CCURL-\u003eFunPtr CCURL_debug_callback-\u003eIO CCURLcode",
          "package": "curlhs",
          "partial": "FDEBUG",
          "signature": "Ptr CCURL-\u003eFunPtr CCURL_debug_callback-\u003eIO CCURLcode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:ccurl_easy_setopt-39-FDEBUG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "ccurl_easy_setopt'FFNMATCH",
          "package": "curlhs",
          "signature": "Ptr CCURL -\u003e FunPtr CCURL_fnmatch_callback -\u003e IO CCURLcode",
          "source": "src/Network-Curlhs-Base.html#ccurl_easy_setopt%27FFNMATCH",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "ccurl_easy_setopt'FFNMATCH",
          "normalized": "Ptr CCURL-\u003eFunPtr CCURL_fnmatch_callback-\u003eIO CCURLcode",
          "package": "curlhs",
          "partial": "FFNMATCH",
          "signature": "Ptr CCURL-\u003eFunPtr CCURL_fnmatch_callback-\u003eIO CCURLcode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:ccurl_easy_setopt-39-FFNMATCH"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "ccurl_easy_setopt'FHEADER",
          "package": "curlhs",
          "signature": "Ptr CCURL -\u003e FunPtr CCURL_write_callback -\u003e IO CCURLcode",
          "source": "src/Network-Curlhs-Base.html#ccurl_easy_setopt%27FHEADER",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "ccurl_easy_setopt'FHEADER",
          "normalized": "Ptr CCURL-\u003eFunPtr CCURL_write_callback-\u003eIO CCURLcode",
          "package": "curlhs",
          "partial": "FHEADER",
          "signature": "Ptr CCURL-\u003eFunPtr CCURL_write_callback-\u003eIO CCURLcode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:ccurl_easy_setopt-39-FHEADER"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "ccurl_easy_setopt'FINTERLEAVE",
          "package": "curlhs",
          "signature": "Ptr CCURL -\u003e FunPtr CCURL_write_callback -\u003e IO CCURLcode",
          "source": "src/Network-Curlhs-Base.html#ccurl_easy_setopt%27FINTERLEAVE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "ccurl_easy_setopt'FINTERLEAVE",
          "normalized": "Ptr CCURL-\u003eFunPtr CCURL_write_callback-\u003eIO CCURLcode",
          "package": "curlhs",
          "partial": "FINTERLEAVE",
          "signature": "Ptr CCURL-\u003eFunPtr CCURL_write_callback-\u003eIO CCURLcode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:ccurl_easy_setopt-39-FINTERLEAVE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "ccurl_easy_setopt'FIOCTL",
          "package": "curlhs",
          "signature": "Ptr CCURL -\u003e FunPtr CCURL_ioctl_callback -\u003e IO CCURLcode",
          "source": "src/Network-Curlhs-Base.html#ccurl_easy_setopt%27FIOCTL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "ccurl_easy_setopt'FIOCTL",
          "normalized": "Ptr CCURL-\u003eFunPtr CCURL_ioctl_callback-\u003eIO CCURLcode",
          "package": "curlhs",
          "partial": "FIOCTL",
          "signature": "Ptr CCURL-\u003eFunPtr CCURL_ioctl_callback-\u003eIO CCURLcode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:ccurl_easy_setopt-39-FIOCTL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "ccurl_easy_setopt'FOPENSOCKET",
          "package": "curlhs",
          "signature": "Ptr CCURL -\u003e FunPtr CCURL_opensocket_callback -\u003e IO CCURLcode",
          "source": "src/Network-Curlhs-Base.html#ccurl_easy_setopt%27FOPENSOCKET",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "ccurl_easy_setopt'FOPENSOCKET",
          "normalized": "Ptr CCURL-\u003eFunPtr CCURL_opensocket_callback-\u003eIO CCURLcode",
          "package": "curlhs",
          "partial": "FOPENSOCKET",
          "signature": "Ptr CCURL-\u003eFunPtr CCURL_opensocket_callback-\u003eIO CCURLcode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:ccurl_easy_setopt-39-FOPENSOCKET"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "ccurl_easy_setopt'FPROGRESS",
          "package": "curlhs",
          "signature": "Ptr CCURL -\u003e FunPtr CCURL_progress_callback -\u003e IO CCURLcode",
          "source": "src/Network-Curlhs-Base.html#ccurl_easy_setopt%27FPROGRESS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "ccurl_easy_setopt'FPROGRESS",
          "normalized": "Ptr CCURL-\u003eFunPtr CCURL_progress_callback-\u003eIO CCURLcode",
          "package": "curlhs",
          "partial": "FPROGRESS",
          "signature": "Ptr CCURL-\u003eFunPtr CCURL_progress_callback-\u003eIO CCURLcode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:ccurl_easy_setopt-39-FPROGRESS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "ccurl_easy_setopt'FREAD",
          "package": "curlhs",
          "signature": "Ptr CCURL -\u003e FunPtr CCURL_read_callback -\u003e IO CCURLcode",
          "source": "src/Network-Curlhs-Base.html#ccurl_easy_setopt%27FREAD",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "ccurl_easy_setopt'FREAD",
          "normalized": "Ptr CCURL-\u003eFunPtr CCURL_read_callback-\u003eIO CCURLcode",
          "package": "curlhs",
          "partial": "FREAD",
          "signature": "Ptr CCURL-\u003eFunPtr CCURL_read_callback-\u003eIO CCURLcode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:ccurl_easy_setopt-39-FREAD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "ccurl_easy_setopt'FSEEK",
          "package": "curlhs",
          "signature": "Ptr CCURL -\u003e FunPtr CCURL_seek_callback -\u003e IO CCURLcode",
          "source": "src/Network-Curlhs-Base.html#ccurl_easy_setopt%27FSEEK",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "ccurl_easy_setopt'FSEEK",
          "normalized": "Ptr CCURL-\u003eFunPtr CCURL_seek_callback-\u003eIO CCURLcode",
          "package": "curlhs",
          "partial": "FSEEK",
          "signature": "Ptr CCURL-\u003eFunPtr CCURL_seek_callback-\u003eIO CCURLcode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:ccurl_easy_setopt-39-FSEEK"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "ccurl_easy_setopt'FSOCKOPT",
          "package": "curlhs",
          "signature": "Ptr CCURL -\u003e FunPtr CCURL_sockopt_callback -\u003e IO CCURLcode",
          "source": "src/Network-Curlhs-Base.html#ccurl_easy_setopt%27FSOCKOPT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "ccurl_easy_setopt'FSOCKOPT",
          "normalized": "Ptr CCURL-\u003eFunPtr CCURL_sockopt_callback-\u003eIO CCURLcode",
          "package": "curlhs",
          "partial": "FSOCKOPT",
          "signature": "Ptr CCURL-\u003eFunPtr CCURL_sockopt_callback-\u003eIO CCURLcode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:ccurl_easy_setopt-39-FSOCKOPT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "ccurl_easy_setopt'FSSHKEY",
          "package": "curlhs",
          "signature": "Ptr CCURL -\u003e FunPtr CCURL_sshkey_callback -\u003e IO CCURLcode",
          "source": "src/Network-Curlhs-Base.html#ccurl_easy_setopt%27FSSHKEY",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "ccurl_easy_setopt'FSSHKEY",
          "normalized": "Ptr CCURL-\u003eFunPtr CCURL_sshkey_callback-\u003eIO CCURLcode",
          "package": "curlhs",
          "partial": "FSSHKEY",
          "signature": "Ptr CCURL-\u003eFunPtr CCURL_sshkey_callback-\u003eIO CCURLcode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:ccurl_easy_setopt-39-FSSHKEY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "ccurl_easy_setopt'FSSLCTX",
          "package": "curlhs",
          "signature": "Ptr CCURL -\u003e FunPtr CCURL_ssl_ctx_callback -\u003e IO CCURLcode",
          "source": "src/Network-Curlhs-Base.html#ccurl_easy_setopt%27FSSLCTX",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "ccurl_easy_setopt'FSSLCTX",
          "normalized": "Ptr CCURL-\u003eFunPtr CCURL_ssl_ctx_callback-\u003eIO CCURLcode",
          "package": "curlhs",
          "partial": "FSSLCTX",
          "signature": "Ptr CCURL-\u003eFunPtr CCURL_ssl_ctx_callback-\u003eIO CCURLcode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:ccurl_easy_setopt-39-FSSLCTX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "ccurl_easy_setopt'FWRITE",
          "package": "curlhs",
          "signature": "Ptr CCURL -\u003e FunPtr CCURL_write_callback -\u003e IO CCURLcode",
          "source": "src/Network-Curlhs-Base.html#ccurl_easy_setopt%27FWRITE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "ccurl_easy_setopt'FWRITE",
          "normalized": "Ptr CCURL-\u003eFunPtr CCURL_write_callback-\u003eIO CCURLcode",
          "package": "curlhs",
          "partial": "FWRITE",
          "signature": "Ptr CCURL-\u003eFunPtr CCURL_write_callback-\u003eIO CCURLcode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:ccurl_easy_setopt-39-FWRITE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "ccurl_easy_setopt'FunPtr",
          "package": "curlhs",
          "signature": "Ptr CCURL -\u003e CCURLoption'FunPtr -\u003e FunPtr a -\u003e IO CCURLcode",
          "source": "src/Network-Curlhs-Base.html#ccurl_easy_setopt%27FunPtr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "ccurl_easy_setopt'FunPtr",
          "normalized": "Ptr CCURL-\u003eCCURLoption'FunPtr-\u003eFunPtr a-\u003eIO CCURLcode",
          "package": "curlhs",
          "partial": "Fun Ptr",
          "signature": "Ptr CCURL-\u003eCCURLoption'FunPtr-\u003eFunPtr a-\u003eIO CCURLcode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:ccurl_easy_setopt-39-FunPtr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "ccurl_easy_setopt'HTTPP",
          "package": "curlhs",
          "signature": "Ptr CCURL -\u003e CCURLoption'HTTPP -\u003e Ptr CCURL_httppost -\u003e IO CCURLcode",
          "source": "src/Network-Curlhs-Base.html#ccurl_easy_setopt%27HTTPP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "ccurl_easy_setopt'HTTPP",
          "normalized": "Ptr CCURL-\u003eCCURLoption'HTTPP-\u003ePtr CCURL_httppost-\u003eIO CCURLcode",
          "package": "curlhs",
          "partial": "HTTPP",
          "signature": "Ptr CCURL-\u003eCCURLoption'HTTPP-\u003ePtr CCURL_httppost-\u003eIO CCURLcode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:ccurl_easy_setopt-39-HTTPP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "ccurl_easy_setopt'Int64",
          "package": "curlhs",
          "signature": "Ptr CCURL -\u003e CCURLoption'Int64 -\u003e CCURL_off_t -\u003e IO CCURLcode",
          "source": "src/Network-Curlhs-Base.html#ccurl_easy_setopt%27Int64",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "ccurl_easy_setopt'Int64",
          "normalized": "Ptr CCURL-\u003eCCURLoption'Int-\u003eCCURL_off_t-\u003eIO CCURLcode",
          "package": "curlhs",
          "partial": "Int",
          "signature": "Ptr CCURL-\u003eCCURLoption'Int-\u003eCCURL_off_t-\u003eIO CCURLcode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:ccurl_easy_setopt-39-Int64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "ccurl_easy_setopt'SList",
          "package": "curlhs",
          "signature": "Ptr CCURL -\u003e CCURLoption'SList -\u003e Ptr CCURL_slist -\u003e IO CCURLcode",
          "source": "src/Network-Curlhs-Base.html#ccurl_easy_setopt%27SList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "ccurl_easy_setopt'SList",
          "normalized": "Ptr CCURL-\u003eCCURLoption'SList-\u003ePtr CCURL_slist-\u003eIO CCURLcode",
          "package": "curlhs",
          "partial": "SList",
          "signature": "Ptr CCURL-\u003eCCURLoption'SList-\u003ePtr CCURL_slist-\u003eIO CCURLcode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:ccurl_easy_setopt-39-SList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "ccurl_easy_setopt'UsrPtr",
          "package": "curlhs",
          "signature": "Ptr CCURL -\u003e CCURLoption'UsrPtr -\u003e Ptr () -\u003e IO CCURLcode",
          "source": "src/Network-Curlhs-Base.html#ccurl_easy_setopt%27UsrPtr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "ccurl_easy_setopt'UsrPtr",
          "normalized": "Ptr CCURL-\u003eCCURLoption'UsrPtr-\u003ePtr()-\u003eIO CCURLcode",
          "package": "curlhs",
          "partial": "Usr Ptr",
          "signature": "Ptr CCURL-\u003eCCURLoption'UsrPtr-\u003ePtr()-\u003eIO CCURLcode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:ccurl_easy_setopt-39-UsrPtr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "ccurl_easy_strerror",
          "package": "curlhs",
          "signature": "CCURLcode -\u003e IO (Ptr CChar)",
          "source": "src/Network-Curlhs-Base.html#ccurl_easy_strerror",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "ccurl_easy_strerror",
          "normalized": "CCURLcode-\u003eIO(Ptr CChar)",
          "package": "curlhs",
          "signature": "CCURLcode-\u003eIO(Ptr CChar)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:ccurl_easy_strerror"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "ccurl_easy_unescape",
          "package": "curlhs",
          "signature": "Ptr CCURL -\u003e Ptr CChar -\u003e CInt -\u003e Ptr CInt -\u003e IO (Ptr CChar)",
          "source": "src/Network-Curlhs-Base.html#ccurl_easy_unescape",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "ccurl_easy_unescape",
          "normalized": "Ptr CCURL-\u003ePtr CChar-\u003eCInt-\u003ePtr CInt-\u003eIO(Ptr CChar)",
          "package": "curlhs",
          "signature": "Ptr CCURL-\u003ePtr CChar-\u003eCInt-\u003ePtr CInt-\u003eIO(Ptr CChar)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:ccurl_easy_unescape"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "ccurl_escape",
          "package": "curlhs",
          "signature": "Ptr CChar -\u003e CInt -\u003e IO (Ptr CChar)",
          "source": "src/Network-Curlhs-Base.html#ccurl_escape",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "ccurl_escape",
          "normalized": "Ptr CChar-\u003eCInt-\u003eIO(Ptr CChar)",
          "package": "curlhs",
          "signature": "Ptr CChar-\u003eCInt-\u003eIO(Ptr CChar)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:ccurl_escape"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "ccurl_fileinfo_b_data",
          "package": "curlhs",
          "signature": "Ptr CChar",
          "source": "src/Network-Curlhs-Base.html#CCURL_fileinfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "ccurl_fileinfo_b_data",
          "package": "curlhs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:ccurl_fileinfo_b_data"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "ccurl_fileinfo_b_size",
          "package": "curlhs",
          "signature": "CSize",
          "source": "src/Network-Curlhs-Base.html#CCURL_fileinfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "ccurl_fileinfo_b_size",
          "package": "curlhs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:ccurl_fileinfo_b_size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "ccurl_fileinfo_b_used",
          "package": "curlhs",
          "signature": "CSize",
          "source": "src/Network-Curlhs-Base.html#CCURL_fileinfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "ccurl_fileinfo_b_used",
          "package": "curlhs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:ccurl_fileinfo_b_used"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "ccurl_fileinfo_filename",
          "package": "curlhs",
          "signature": "Ptr CChar",
          "source": "src/Network-Curlhs-Base.html#CCURL_fileinfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "ccurl_fileinfo_filename",
          "package": "curlhs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:ccurl_fileinfo_filename"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "ccurl_fileinfo_filetype",
          "package": "curlhs",
          "signature": "CCURLfiletype",
          "source": "src/Network-Curlhs-Base.html#CCURL_fileinfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "ccurl_fileinfo_filetype",
          "package": "curlhs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:ccurl_fileinfo_filetype"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "ccurl_fileinfo_flags",
          "package": "curlhs",
          "signature": "CUInt",
          "source": "src/Network-Curlhs-Base.html#CCURL_fileinfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "ccurl_fileinfo_flags",
          "package": "curlhs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:ccurl_fileinfo_flags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "ccurl_fileinfo_gid",
          "package": "curlhs",
          "signature": "CInt",
          "source": "src/Network-Curlhs-Base.html#CCURL_fileinfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "ccurl_fileinfo_gid",
          "package": "curlhs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:ccurl_fileinfo_gid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "ccurl_fileinfo_hardlinks",
          "package": "curlhs",
          "signature": "CLong",
          "source": "src/Network-Curlhs-Base.html#CCURL_fileinfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "ccurl_fileinfo_hardlinks",
          "package": "curlhs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:ccurl_fileinfo_hardlinks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "ccurl_fileinfo_perm",
          "package": "curlhs",
          "signature": "CUInt",
          "source": "src/Network-Curlhs-Base.html#CCURL_fileinfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "ccurl_fileinfo_perm",
          "package": "curlhs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:ccurl_fileinfo_perm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "ccurl_fileinfo_size",
          "package": "curlhs",
          "signature": "CCURL_off_t",
          "source": "src/Network-Curlhs-Base.html#CCURL_fileinfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "ccurl_fileinfo_size",
          "package": "curlhs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:ccurl_fileinfo_size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "ccurl_fileinfo_strings_group",
          "package": "curlhs",
          "signature": "Ptr CChar",
          "source": "src/Network-Curlhs-Base.html#CCURL_fileinfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "ccurl_fileinfo_strings_group",
          "package": "curlhs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:ccurl_fileinfo_strings_group"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "ccurl_fileinfo_strings_perm",
          "package": "curlhs",
          "signature": "Ptr CChar",
          "source": "src/Network-Curlhs-Base.html#CCURL_fileinfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "ccurl_fileinfo_strings_perm",
          "package": "curlhs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:ccurl_fileinfo_strings_perm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "ccurl_fileinfo_strings_target",
          "package": "curlhs",
          "signature": "Ptr CChar",
          "source": "src/Network-Curlhs-Base.html#CCURL_fileinfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "ccurl_fileinfo_strings_target",
          "package": "curlhs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:ccurl_fileinfo_strings_target"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "ccurl_fileinfo_strings_time",
          "package": "curlhs",
          "signature": "Ptr CChar",
          "source": "src/Network-Curlhs-Base.html#CCURL_fileinfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "ccurl_fileinfo_strings_time",
          "package": "curlhs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:ccurl_fileinfo_strings_time"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "ccurl_fileinfo_strings_user",
          "package": "curlhs",
          "signature": "Ptr CChar",
          "source": "src/Network-Curlhs-Base.html#CCURL_fileinfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "ccurl_fileinfo_strings_user",
          "package": "curlhs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:ccurl_fileinfo_strings_user"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "ccurl_fileinfo_time",
          "package": "curlhs",
          "signature": "CTime",
          "source": "src/Network-Curlhs-Base.html#CCURL_fileinfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "ccurl_fileinfo_time",
          "package": "curlhs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:ccurl_fileinfo_time"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "ccurl_fileinfo_uid",
          "package": "curlhs",
          "signature": "CInt",
          "source": "src/Network-Curlhs-Base.html#CCURL_fileinfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "ccurl_fileinfo_uid",
          "package": "curlhs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:ccurl_fileinfo_uid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "ccurl_formfree",
          "package": "curlhs",
          "signature": "Ptr CCURL_httppost -\u003e IO ()",
          "source": "src/Network-Curlhs-Base.html#ccurl_formfree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "ccurl_formfree",
          "normalized": "Ptr CCURL_httppost-\u003eIO()",
          "package": "curlhs",
          "signature": "Ptr CCURL_httppost-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:ccurl_formfree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "ccurl_formget",
          "package": "curlhs",
          "signature": "Ptr CCURL_httppost -\u003e Ptr () -\u003e FunPtr CCURL_formget_callback -\u003e IO CInt",
          "source": "src/Network-Curlhs-Base.html#ccurl_formget",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "ccurl_formget",
          "normalized": "Ptr CCURL_httppost-\u003ePtr()-\u003eFunPtr CCURL_formget_callback-\u003eIO CInt",
          "package": "curlhs",
          "signature": "Ptr CCURL_httppost-\u003ePtr()-\u003eFunPtr CCURL_formget_callback-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:ccurl_formget"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "ccurl_forms_option",
          "package": "curlhs",
          "signature": "CCURLformoption",
          "source": "src/Network-Curlhs-Base.html#CCURL_forms",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "ccurl_forms_option",
          "package": "curlhs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:ccurl_forms_option"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "ccurl_forms_value",
          "package": "curlhs",
          "signature": "Ptr CChar",
          "source": "src/Network-Curlhs-Base.html#CCURL_forms",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "ccurl_forms_value",
          "package": "curlhs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:ccurl_forms_value"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "ccurl_free",
          "package": "curlhs",
          "signature": "Ptr a -\u003e IO ()",
          "source": "src/Network-Curlhs-Base.html#ccurl_free",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "ccurl_free",
          "normalized": "Ptr a-\u003eIO()",
          "package": "curlhs",
          "signature": "Ptr a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:ccurl_free"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "ccurl_getdate",
          "package": "curlhs",
          "signature": "Ptr CChar -\u003e Ptr CTime -\u003e IO CTime",
          "source": "src/Network-Curlhs-Base.html#ccurl_getdate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "ccurl_getdate",
          "normalized": "Ptr CChar-\u003ePtr CTime-\u003eIO CTime",
          "package": "curlhs",
          "signature": "Ptr CChar-\u003ePtr CTime-\u003eIO CTime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:ccurl_getdate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: \u003c/p\u003e\u003c/div\u003e",
          "module": "Network.Curlhs.Base",
          "name": "ccurl_getenv",
          "package": "curlhs",
          "signature": "Ptr CChar -\u003e IO (Ptr CChar)",
          "source": "src/Network-Curlhs-Base.html#ccurl_getenv",
          "type": "function"
        },
        "index": {
          "description": "Deprecated",
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "ccurl_getenv",
          "normalized": "Ptr CChar-\u003eIO(Ptr CChar)",
          "package": "curlhs",
          "signature": "Ptr CChar-\u003eIO(Ptr CChar)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:ccurl_getenv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "ccurl_global_cleanup",
          "package": "curlhs",
          "signature": "IO ()",
          "source": "src/Network-Curlhs-Base.html#ccurl_global_cleanup",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "ccurl_global_cleanup",
          "normalized": "IO()",
          "package": "curlhs",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:ccurl_global_cleanup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "ccurl_global_init",
          "package": "curlhs",
          "signature": "CLong -\u003e IO CCURLcode",
          "source": "src/Network-Curlhs-Base.html#ccurl_global_init",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "ccurl_global_init",
          "normalized": "CLong-\u003eIO CCURLcode",
          "package": "curlhs",
          "signature": "CLong-\u003eIO CCURLcode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:ccurl_global_init"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "ccurl_global_init_mem",
          "package": "curlhs",
          "signature": "CLong -\u003e FunPtr CCURL_malloc_callback -\u003e FunPtr CCURL_free_callback -\u003e FunPtr CCURL_realloc_callback -\u003e FunPtr CCURL_strdup_callback -\u003e FunPtr CCURL_calloc_callback -\u003e IO CCURLcode",
          "source": "src/Network-Curlhs-Base.html#ccurl_global_init_mem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "ccurl_global_init_mem",
          "normalized": "CLong-\u003eFunPtr CCURL_malloc_callback-\u003eFunPtr CCURL_free_callback-\u003eFunPtr CCURL_realloc_callback-\u003eFunPtr CCURL_strdup_callback-\u003eFunPtr CCURL_calloc_callback-\u003eIO CCURLcode",
          "package": "curlhs",
          "signature": "CLong-\u003eFunPtr CCURL_malloc_callback-\u003eFunPtr CCURL_free_callback-\u003eFunPtr CCURL_realloc_callback-\u003eFunPtr CCURL_strdup_callback-\u003eFunPtr CCURL_calloc_callback-\u003eIO CCURLcode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:ccurl_global_init_mem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "ccurl_httppost_buffer",
          "package": "curlhs",
          "signature": "Ptr CChar",
          "source": "src/Network-Curlhs-Base.html#CCURL_httppost",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "ccurl_httppost_buffer",
          "package": "curlhs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:ccurl_httppost_buffer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "ccurl_httppost_bufferlength",
          "package": "curlhs",
          "signature": "CLong",
          "source": "src/Network-Curlhs-Base.html#CCURL_httppost",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "ccurl_httppost_bufferlength",
          "package": "curlhs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:ccurl_httppost_bufferlength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "ccurl_httppost_contentheader",
          "package": "curlhs",
          "signature": "Ptr CCURL_slist",
          "source": "src/Network-Curlhs-Base.html#CCURL_httppost",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "ccurl_httppost_contentheader",
          "package": "curlhs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:ccurl_httppost_contentheader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "ccurl_httppost_contents",
          "package": "curlhs",
          "signature": "Ptr CChar",
          "source": "src/Network-Curlhs-Base.html#CCURL_httppost",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "ccurl_httppost_contents",
          "package": "curlhs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:ccurl_httppost_contents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "ccurl_httppost_contentslength",
          "package": "curlhs",
          "signature": "CLong",
          "source": "src/Network-Curlhs-Base.html#CCURL_httppost",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "ccurl_httppost_contentslength",
          "package": "curlhs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:ccurl_httppost_contentslength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "ccurl_httppost_contenttype",
          "package": "curlhs",
          "signature": "Ptr CChar",
          "source": "src/Network-Curlhs-Base.html#CCURL_httppost",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "ccurl_httppost_contenttype",
          "package": "curlhs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:ccurl_httppost_contenttype"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "ccurl_httppost_flags",
          "package": "curlhs",
          "signature": "CLong",
          "source": "src/Network-Curlhs-Base.html#CCURL_httppost",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "ccurl_httppost_flags",
          "package": "curlhs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:ccurl_httppost_flags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "ccurl_httppost_more",
          "package": "curlhs",
          "signature": "Ptr CCURL_httppost",
          "source": "src/Network-Curlhs-Base.html#CCURL_httppost",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "ccurl_httppost_more",
          "package": "curlhs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:ccurl_httppost_more"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "ccurl_httppost_name",
          "package": "curlhs",
          "signature": "Ptr CChar",
          "source": "src/Network-Curlhs-Base.html#CCURL_httppost",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "ccurl_httppost_name",
          "package": "curlhs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:ccurl_httppost_name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "ccurl_httppost_namelength",
          "package": "curlhs",
          "signature": "CLong",
          "source": "src/Network-Curlhs-Base.html#CCURL_httppost",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "ccurl_httppost_namelength",
          "package": "curlhs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:ccurl_httppost_namelength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "ccurl_httppost_next",
          "package": "curlhs",
          "signature": "Ptr CCURL_httppost",
          "source": "src/Network-Curlhs-Base.html#CCURL_httppost",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "ccurl_httppost_next",
          "package": "curlhs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:ccurl_httppost_next"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "ccurl_httppost_showfilename",
          "package": "curlhs",
          "signature": "Ptr CChar",
          "source": "src/Network-Curlhs-Base.html#CCURL_httppost",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "ccurl_httppost_showfilename",
          "package": "curlhs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:ccurl_httppost_showfilename"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "ccurl_httppost_userp",
          "package": "curlhs",
          "signature": "Ptr ()",
          "source": "src/Network-Curlhs-Base.html#CCURL_httppost",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "ccurl_httppost_userp",
          "normalized": "Ptr()",
          "package": "curlhs",
          "signature": "Ptr()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:ccurl_httppost_userp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "ccurl_khkey_key",
          "package": "curlhs",
          "signature": "Ptr CChar",
          "source": "src/Network-Curlhs-Base.html#CCURL_khkey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "ccurl_khkey_key",
          "package": "curlhs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:ccurl_khkey_key"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "ccurl_khkey_keytype",
          "package": "curlhs",
          "signature": "CCURL_khtype",
          "source": "src/Network-Curlhs-Base.html#CCURL_khkey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "ccurl_khkey_keytype",
          "package": "curlhs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:ccurl_khkey_keytype"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "ccurl_khkey_len",
          "package": "curlhs",
          "signature": "CSize",
          "source": "src/Network-Curlhs-Base.html#CCURL_khkey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "ccurl_khkey_len",
          "package": "curlhs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:ccurl_khkey_len"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "ccurl_share_cleanup",
          "package": "curlhs",
          "signature": "Ptr CCURLSH -\u003e IO CCURLSHcode",
          "source": "src/Network-Curlhs-Base.html#ccurl_share_cleanup",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "ccurl_share_cleanup",
          "normalized": "Ptr CCURLSH-\u003eIO CCURLSHcode",
          "package": "curlhs",
          "signature": "Ptr CCURLSH-\u003eIO CCURLSHcode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:ccurl_share_cleanup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "ccurl_share_init",
          "package": "curlhs",
          "signature": "IO (Ptr CCURLSH)",
          "source": "src/Network-Curlhs-Base.html#ccurl_share_init",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "ccurl_share_init",
          "package": "curlhs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:ccurl_share_init"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "ccurl_share_setopt'FLOCK",
          "package": "curlhs",
          "signature": "Ptr CCURLSH -\u003e CCURLSHoption'FLOCK -\u003e FunPtr CCURL_lock_function -\u003e IO CCURLSHcode",
          "source": "src/Network-Curlhs-Base.html#ccurl_share_setopt%27FLOCK",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "ccurl_share_setopt'FLOCK",
          "normalized": "Ptr CCURLSH-\u003eCCURLSHoption'FLOCK-\u003eFunPtr CCURL_lock_function-\u003eIO CCURLSHcode",
          "package": "curlhs",
          "partial": "FLOCK",
          "signature": "Ptr CCURLSH-\u003eCCURLSHoption'FLOCK-\u003eFunPtr CCURL_lock_function-\u003eIO CCURLSHcode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:ccurl_share_setopt-39-FLOCK"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "ccurl_share_setopt'FUNLOCK",
          "package": "curlhs",
          "signature": "Ptr CCURLSH -\u003e CCURLSHoption'FUNLOCK -\u003e FunPtr CCURL_unlock_function -\u003e IO CCURLSHcode",
          "source": "src/Network-Curlhs-Base.html#ccurl_share_setopt%27FUNLOCK",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "ccurl_share_setopt'FUNLOCK",
          "normalized": "Ptr CCURLSH-\u003eCCURLSHoption'FUNLOCK-\u003eFunPtr CCURL_unlock_function-\u003eIO CCURLSHcode",
          "package": "curlhs",
          "partial": "FUNLOCK",
          "signature": "Ptr CCURLSH-\u003eCCURLSHoption'FUNLOCK-\u003eFunPtr CCURL_unlock_function-\u003eIO CCURLSHcode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:ccurl_share_setopt-39-FUNLOCK"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "ccurl_share_setopt'Lock",
          "package": "curlhs",
          "signature": "Ptr CCURLSH -\u003e CCURLSHoption'Lock -\u003e CCURL_lock_data -\u003e IO CCURLSHcode",
          "source": "src/Network-Curlhs-Base.html#ccurl_share_setopt%27Lock",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "ccurl_share_setopt'Lock",
          "normalized": "Ptr CCURLSH-\u003eCCURLSHoption'Lock-\u003eCCURL_lock_data-\u003eIO CCURLSHcode",
          "package": "curlhs",
          "partial": "Lock",
          "signature": "Ptr CCURLSH-\u003eCCURLSHoption'Lock-\u003eCCURL_lock_data-\u003eIO CCURLSHcode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:ccurl_share_setopt-39-Lock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "ccurl_share_setopt'UsrPtr",
          "package": "curlhs",
          "signature": "Ptr CCURLSH -\u003e CCURLSHoption'UsrPtr -\u003e Ptr () -\u003e IO CCURLSHcode",
          "source": "src/Network-Curlhs-Base.html#ccurl_share_setopt%27UsrPtr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "ccurl_share_setopt'UsrPtr",
          "normalized": "Ptr CCURLSH-\u003eCCURLSHoption'UsrPtr-\u003ePtr()-\u003eIO CCURLSHcode",
          "package": "curlhs",
          "partial": "Usr Ptr",
          "signature": "Ptr CCURLSH-\u003eCCURLSHoption'UsrPtr-\u003ePtr()-\u003eIO CCURLSHcode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:ccurl_share_setopt-39-UsrPtr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "ccurl_share_strerror",
          "package": "curlhs",
          "signature": "CCURLSHcode -\u003e IO (Ptr CChar)",
          "source": "src/Network-Curlhs-Base.html#ccurl_share_strerror",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "ccurl_share_strerror",
          "normalized": "CCURLSHcode-\u003eIO(Ptr CChar)",
          "package": "curlhs",
          "signature": "CCURLSHcode-\u003eIO(Ptr CChar)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:ccurl_share_strerror"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "ccurl_slist_append",
          "package": "curlhs",
          "signature": "Ptr CCURL_slist -\u003e Ptr CChar -\u003e IO (Ptr CCURL_slist)",
          "source": "src/Network-Curlhs-Base.html#ccurl_slist_append",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "ccurl_slist_append",
          "normalized": "Ptr CCURL_slist-\u003ePtr CChar-\u003eIO(Ptr CCURL_slist)",
          "package": "curlhs",
          "signature": "Ptr CCURL_slist-\u003ePtr CChar-\u003eIO(Ptr CCURL_slist)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:ccurl_slist_append"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "ccurl_slist_data",
          "package": "curlhs",
          "signature": "Ptr CChar",
          "source": "src/Network-Curlhs-Base.html#CCURL_slist",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "ccurl_slist_data",
          "package": "curlhs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:ccurl_slist_data"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "ccurl_slist_free_all",
          "package": "curlhs",
          "signature": "Ptr CCURL_slist -\u003e IO ()",
          "source": "src/Network-Curlhs-Base.html#ccurl_slist_free_all",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "ccurl_slist_free_all",
          "normalized": "Ptr CCURL_slist-\u003eIO()",
          "package": "curlhs",
          "signature": "Ptr CCURL_slist-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:ccurl_slist_free_all"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "ccurl_slist_next",
          "package": "curlhs",
          "signature": "Ptr CCURL_slist",
          "source": "src/Network-Curlhs-Base.html#CCURL_slist",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "ccurl_slist_next",
          "package": "curlhs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:ccurl_slist_next"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "ccurl_sockaddr_addr",
          "package": "curlhs",
          "signature": "Ptr ()",
          "source": "src/Network-Curlhs-Base.html#CCURL_sockaddr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "ccurl_sockaddr_addr",
          "normalized": "Ptr()",
          "package": "curlhs",
          "signature": "Ptr()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:ccurl_sockaddr_addr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "ccurl_sockaddr_addrlen",
          "package": "curlhs",
          "signature": "CUInt",
          "source": "src/Network-Curlhs-Base.html#CCURL_sockaddr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "ccurl_sockaddr_addrlen",
          "package": "curlhs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:ccurl_sockaddr_addrlen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "ccurl_sockaddr_family",
          "package": "curlhs",
          "signature": "CInt",
          "source": "src/Network-Curlhs-Base.html#CCURL_sockaddr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "ccurl_sockaddr_family",
          "package": "curlhs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:ccurl_sockaddr_family"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "ccurl_sockaddr_protocol",
          "package": "curlhs",
          "signature": "CInt",
          "source": "src/Network-Curlhs-Base.html#CCURL_sockaddr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "ccurl_sockaddr_protocol",
          "package": "curlhs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:ccurl_sockaddr_protocol"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "ccurl_sockaddr_socktype",
          "package": "curlhs",
          "signature": "CInt",
          "source": "src/Network-Curlhs-Base.html#CCURL_sockaddr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "ccurl_sockaddr_socktype",
          "package": "curlhs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:ccurl_sockaddr_socktype"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: \u003c/p\u003e\u003c/div\u003e",
          "module": "Network.Curlhs.Base",
          "name": "ccurl_strequal",
          "package": "curlhs",
          "signature": "Ptr CChar -\u003e Ptr CChar -\u003e IO CInt",
          "source": "src/Network-Curlhs-Base.html#ccurl_strequal",
          "type": "function"
        },
        "index": {
          "description": "Deprecated",
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "ccurl_strequal",
          "normalized": "Ptr CChar-\u003ePtr CChar-\u003eIO CInt",
          "package": "curlhs",
          "signature": "Ptr CChar-\u003ePtr CChar-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:ccurl_strequal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: \u003c/p\u003e\u003c/div\u003e",
          "module": "Network.Curlhs.Base",
          "name": "ccurl_strnequal",
          "package": "curlhs",
          "signature": "Ptr CChar -\u003e Ptr CChar -\u003e CSize -\u003e IO CInt",
          "source": "src/Network-Curlhs-Base.html#ccurl_strnequal",
          "type": "function"
        },
        "index": {
          "description": "Deprecated",
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "ccurl_strnequal",
          "normalized": "Ptr CChar-\u003ePtr CChar-\u003eCSize-\u003eIO CInt",
          "package": "curlhs",
          "signature": "Ptr CChar-\u003ePtr CChar-\u003eCSize-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:ccurl_strnequal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "ccurl_unescape",
          "package": "curlhs",
          "signature": "Ptr CChar -\u003e CInt -\u003e IO (Ptr CChar)",
          "source": "src/Network-Curlhs-Base.html#ccurl_unescape",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "ccurl_unescape",
          "normalized": "Ptr CChar-\u003eCInt-\u003eIO(Ptr CChar)",
          "package": "curlhs",
          "signature": "Ptr CChar-\u003eCInt-\u003eIO(Ptr CChar)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:ccurl_unescape"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "ccurl_version",
          "package": "curlhs",
          "signature": "IO (Ptr CChar)",
          "source": "src/Network-Curlhs-Base.html#ccurl_version",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "ccurl_version",
          "package": "curlhs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:ccurl_version"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "ccurl_version_info",
          "package": "curlhs",
          "signature": "CCURLversion -\u003e IO (Ptr CCURL_version_info_data)",
          "source": "src/Network-Curlhs-Base.html#ccurl_version_info",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "ccurl_version_info",
          "normalized": "CCURLversion-\u003eIO(Ptr CCURL_version_info_data)",
          "package": "curlhs",
          "signature": "CCURLversion-\u003eIO(Ptr CCURL_version_info_data)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:ccurl_version_info"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "ccurl_version_info_data_age",
          "package": "curlhs",
          "signature": "CCURLversion",
          "source": "src/Network-Curlhs-Base.html#CCURL_version_info_data",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "ccurl_version_info_data_age",
          "package": "curlhs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:ccurl_version_info_data_age"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "ccurl_version_info_data_ares",
          "package": "curlhs",
          "signature": "Ptr CChar",
          "source": "src/Network-Curlhs-Base.html#CCURL_version_info_data",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "ccurl_version_info_data_ares",
          "package": "curlhs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:ccurl_version_info_data_ares"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "ccurl_version_info_data_ares_num",
          "package": "curlhs",
          "signature": "CInt",
          "source": "src/Network-Curlhs-Base.html#CCURL_version_info_data",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "ccurl_version_info_data_ares_num",
          "package": "curlhs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:ccurl_version_info_data_ares_num"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "ccurl_version_info_data_features",
          "package": "curlhs",
          "signature": "CInt",
          "source": "src/Network-Curlhs-Base.html#CCURL_version_info_data",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "ccurl_version_info_data_features",
          "package": "curlhs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:ccurl_version_info_data_features"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "ccurl_version_info_data_host",
          "package": "curlhs",
          "signature": "Ptr CChar",
          "source": "src/Network-Curlhs-Base.html#CCURL_version_info_data",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "ccurl_version_info_data_host",
          "package": "curlhs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:ccurl_version_info_data_host"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "ccurl_version_info_data_iconv_ver_num",
          "package": "curlhs",
          "signature": "CInt",
          "source": "src/Network-Curlhs-Base.html#CCURL_version_info_data",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "ccurl_version_info_data_iconv_ver_num",
          "package": "curlhs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:ccurl_version_info_data_iconv_ver_num"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "ccurl_version_info_data_libidn",
          "package": "curlhs",
          "signature": "Ptr CChar",
          "source": "src/Network-Curlhs-Base.html#CCURL_version_info_data",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "ccurl_version_info_data_libidn",
          "package": "curlhs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:ccurl_version_info_data_libidn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "ccurl_version_info_data_libssh_version",
          "package": "curlhs",
          "signature": "Ptr CChar",
          "source": "src/Network-Curlhs-Base.html#CCURL_version_info_data",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "ccurl_version_info_data_libssh_version",
          "package": "curlhs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:ccurl_version_info_data_libssh_version"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "ccurl_version_info_data_libz_version",
          "package": "curlhs",
          "signature": "Ptr CChar",
          "source": "src/Network-Curlhs-Base.html#CCURL_version_info_data",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "ccurl_version_info_data_libz_version",
          "package": "curlhs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:ccurl_version_info_data_libz_version"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "ccurl_version_info_data_protocols",
          "package": "curlhs",
          "signature": "Ptr (Ptr CChar)",
          "source": "src/Network-Curlhs-Base.html#CCURL_version_info_data",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "ccurl_version_info_data_protocols",
          "package": "curlhs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:ccurl_version_info_data_protocols"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "ccurl_version_info_data_ssl_version",
          "package": "curlhs",
          "signature": "Ptr CChar",
          "source": "src/Network-Curlhs-Base.html#CCURL_version_info_data",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "ccurl_version_info_data_ssl_version",
          "package": "curlhs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:ccurl_version_info_data_ssl_version"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "ccurl_version_info_data_ssl_version_num",
          "package": "curlhs",
          "signature": "CLong",
          "source": "src/Network-Curlhs-Base.html#CCURL_version_info_data",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "ccurl_version_info_data_ssl_version_num",
          "package": "curlhs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:ccurl_version_info_data_ssl_version_num"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "ccurl_version_info_data_version",
          "package": "curlhs",
          "signature": "Ptr CChar",
          "source": "src/Network-Curlhs-Base.html#CCURL_version_info_data",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "ccurl_version_info_data_version",
          "package": "curlhs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:ccurl_version_info_data_version"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "ccurl_version_info_data_version_num",
          "package": "curlhs",
          "signature": "CUInt",
          "source": "src/Network-Curlhs-Base.html#CCURL_version_info_data",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "ccurl_version_info_data_version_num",
          "package": "curlhs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:ccurl_version_info_data_version_num"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "libCURL_COPYRIGHT",
          "package": "curlhs",
          "signature": "String",
          "source": "src/Network-Curlhs-Base.html#libCURL_COPYRIGHT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "libCURL_COPYRIGHT",
          "package": "curlhs",
          "partial": "CURL COPYRIGHT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:libCURL_COPYRIGHT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "libCURL_TIMESTAMP",
          "package": "curlhs",
          "signature": "String",
          "source": "src/Network-Curlhs-Base.html#libCURL_TIMESTAMP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "libCURL_TIMESTAMP",
          "package": "curlhs",
          "partial": "CURL TIMESTAMP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:libCURL_TIMESTAMP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "libCURL_VERSION",
          "package": "curlhs",
          "signature": "String",
          "source": "src/Network-Curlhs-Base.html#libCURL_VERSION",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "libCURL_VERSION",
          "package": "curlhs",
          "partial": "CURL VERSION",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:libCURL_VERSION"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "libCURL_VERSION_MAJOR",
          "package": "curlhs",
          "signature": "Int",
          "source": "src/Network-Curlhs-Base.html#libCURL_VERSION_MAJOR",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "libCURL_VERSION_MAJOR",
          "package": "curlhs",
          "partial": "CURL VERSION MAJOR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:libCURL_VERSION_MAJOR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "libCURL_VERSION_MINOR",
          "package": "curlhs",
          "signature": "Int",
          "source": "src/Network-Curlhs-Base.html#libCURL_VERSION_MINOR",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "libCURL_VERSION_MINOR",
          "package": "curlhs",
          "partial": "CURL VERSION MINOR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:libCURL_VERSION_MINOR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "libCURL_VERSION_NUM",
          "package": "curlhs",
          "signature": "Int",
          "source": "src/Network-Curlhs-Base.html#libCURL_VERSION_NUM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "libCURL_VERSION_NUM",
          "package": "curlhs",
          "partial": "CURL VERSION NUM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:libCURL_VERSION_NUM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "libCURL_VERSION_PATCH",
          "package": "curlhs",
          "signature": "Int",
          "source": "src/Network-Curlhs-Base.html#libCURL_VERSION_PATCH",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "libCURL_VERSION_PATCH",
          "package": "curlhs",
          "partial": "CURL VERSION PATCH",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:libCURL_VERSION_PATCH"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "wrap_ccurl_calloc_callback",
          "package": "curlhs",
          "signature": "CCURL_calloc_callback -\u003e IO (FunPtr CCURL_calloc_callback)",
          "source": "src/Network-Curlhs-Base.html#wrap_ccurl_calloc_callback",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "wrap_ccurl_calloc_callback",
          "normalized": "CCURL_calloc_callback-\u003eIO(FunPtr CCURL_calloc_callback)",
          "package": "curlhs",
          "signature": "CCURL_calloc_callback-\u003eIO(FunPtr CCURL_calloc_callback)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:wrap_ccurl_calloc_callback"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "wrap_ccurl_chunk_bgn_callback",
          "package": "curlhs",
          "signature": "CCURL_chunk_bgn_callback -\u003e IO (FunPtr CCURL_chunk_bgn_callback)",
          "source": "src/Network-Curlhs-Base.html#wrap_ccurl_chunk_bgn_callback",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "wrap_ccurl_chunk_bgn_callback",
          "normalized": "CCURL_chunk_bgn_callback-\u003eIO(FunPtr CCURL_chunk_bgn_callback)",
          "package": "curlhs",
          "signature": "CCURL_chunk_bgn_callback-\u003eIO(FunPtr CCURL_chunk_bgn_callback)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:wrap_ccurl_chunk_bgn_callback"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "wrap_ccurl_chunk_end_callback",
          "package": "curlhs",
          "signature": "CCURL_chunk_end_callback -\u003e IO (FunPtr CCURL_chunk_end_callback)",
          "source": "src/Network-Curlhs-Base.html#wrap_ccurl_chunk_end_callback",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "wrap_ccurl_chunk_end_callback",
          "normalized": "CCURL_chunk_end_callback-\u003eIO(FunPtr CCURL_chunk_end_callback)",
          "package": "curlhs",
          "signature": "CCURL_chunk_end_callback-\u003eIO(FunPtr CCURL_chunk_end_callback)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:wrap_ccurl_chunk_end_callback"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "wrap_ccurl_closesocket_callback",
          "package": "curlhs",
          "signature": "CCURL_closesocket_callback -\u003e IO (FunPtr CCURL_closesocket_callback)",
          "source": "src/Network-Curlhs-Base.html#wrap_ccurl_closesocket_callback",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "wrap_ccurl_closesocket_callback",
          "normalized": "CCURL_closesocket_callback-\u003eIO(FunPtr CCURL_closesocket_callback)",
          "package": "curlhs",
          "signature": "CCURL_closesocket_callback-\u003eIO(FunPtr CCURL_closesocket_callback)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:wrap_ccurl_closesocket_callback"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "wrap_ccurl_conv_callback",
          "package": "curlhs",
          "signature": "CCURL_conv_callback -\u003e IO (FunPtr CCURL_conv_callback)",
          "source": "src/Network-Curlhs-Base.html#wrap_ccurl_conv_callback",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "wrap_ccurl_conv_callback",
          "normalized": "CCURL_conv_callback-\u003eIO(FunPtr CCURL_conv_callback)",
          "package": "curlhs",
          "signature": "CCURL_conv_callback-\u003eIO(FunPtr CCURL_conv_callback)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:wrap_ccurl_conv_callback"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "wrap_ccurl_debug_callback",
          "package": "curlhs",
          "signature": "CCURL_debug_callback -\u003e IO (FunPtr CCURL_debug_callback)",
          "source": "src/Network-Curlhs-Base.html#wrap_ccurl_debug_callback",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "wrap_ccurl_debug_callback",
          "normalized": "CCURL_debug_callback-\u003eIO(FunPtr CCURL_debug_callback)",
          "package": "curlhs",
          "signature": "CCURL_debug_callback-\u003eIO(FunPtr CCURL_debug_callback)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:wrap_ccurl_debug_callback"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "wrap_ccurl_fnmatch_callback",
          "package": "curlhs",
          "signature": "CCURL_fnmatch_callback -\u003e IO (FunPtr CCURL_fnmatch_callback)",
          "source": "src/Network-Curlhs-Base.html#wrap_ccurl_fnmatch_callback",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "wrap_ccurl_fnmatch_callback",
          "normalized": "CCURL_fnmatch_callback-\u003eIO(FunPtr CCURL_fnmatch_callback)",
          "package": "curlhs",
          "signature": "CCURL_fnmatch_callback-\u003eIO(FunPtr CCURL_fnmatch_callback)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:wrap_ccurl_fnmatch_callback"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "wrap_ccurl_formget_callback",
          "package": "curlhs",
          "signature": "CCURL_formget_callback -\u003e IO (FunPtr CCURL_formget_callback)",
          "source": "src/Network-Curlhs-Base.html#wrap_ccurl_formget_callback",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "wrap_ccurl_formget_callback",
          "normalized": "CCURL_formget_callback-\u003eIO(FunPtr CCURL_formget_callback)",
          "package": "curlhs",
          "signature": "CCURL_formget_callback-\u003eIO(FunPtr CCURL_formget_callback)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:wrap_ccurl_formget_callback"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "wrap_ccurl_free_callback",
          "package": "curlhs",
          "signature": "CCURL_free_callback -\u003e IO (FunPtr CCURL_free_callback)",
          "source": "src/Network-Curlhs-Base.html#wrap_ccurl_free_callback",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "wrap_ccurl_free_callback",
          "normalized": "CCURL_free_callback-\u003eIO(FunPtr CCURL_free_callback)",
          "package": "curlhs",
          "signature": "CCURL_free_callback-\u003eIO(FunPtr CCURL_free_callback)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:wrap_ccurl_free_callback"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "wrap_ccurl_ioctl_callback",
          "package": "curlhs",
          "signature": "CCURL_ioctl_callback -\u003e IO (FunPtr CCURL_ioctl_callback)",
          "source": "src/Network-Curlhs-Base.html#wrap_ccurl_ioctl_callback",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "wrap_ccurl_ioctl_callback",
          "normalized": "CCURL_ioctl_callback-\u003eIO(FunPtr CCURL_ioctl_callback)",
          "package": "curlhs",
          "signature": "CCURL_ioctl_callback-\u003eIO(FunPtr CCURL_ioctl_callback)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:wrap_ccurl_ioctl_callback"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "wrap_ccurl_lock_function",
          "package": "curlhs",
          "signature": "CCURL_lock_function -\u003e IO (FunPtr CCURL_lock_function)",
          "source": "src/Network-Curlhs-Base.html#wrap_ccurl_lock_function",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "wrap_ccurl_lock_function",
          "normalized": "CCURL_lock_function-\u003eIO(FunPtr CCURL_lock_function)",
          "package": "curlhs",
          "signature": "CCURL_lock_function-\u003eIO(FunPtr CCURL_lock_function)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:wrap_ccurl_lock_function"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "wrap_ccurl_malloc_callback",
          "package": "curlhs",
          "signature": "CCURL_malloc_callback -\u003e IO (FunPtr CCURL_malloc_callback)",
          "source": "src/Network-Curlhs-Base.html#wrap_ccurl_malloc_callback",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "wrap_ccurl_malloc_callback",
          "normalized": "CCURL_malloc_callback-\u003eIO(FunPtr CCURL_malloc_callback)",
          "package": "curlhs",
          "signature": "CCURL_malloc_callback-\u003eIO(FunPtr CCURL_malloc_callback)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:wrap_ccurl_malloc_callback"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "wrap_ccurl_opensocket_callback",
          "package": "curlhs",
          "signature": "CCURL_opensocket_callback -\u003e IO (FunPtr CCURL_opensocket_callback)",
          "source": "src/Network-Curlhs-Base.html#wrap_ccurl_opensocket_callback",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "wrap_ccurl_opensocket_callback",
          "normalized": "CCURL_opensocket_callback-\u003eIO(FunPtr CCURL_opensocket_callback)",
          "package": "curlhs",
          "signature": "CCURL_opensocket_callback-\u003eIO(FunPtr CCURL_opensocket_callback)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:wrap_ccurl_opensocket_callback"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "wrap_ccurl_progress_callback",
          "package": "curlhs",
          "signature": "CCURL_progress_callback -\u003e IO (FunPtr CCURL_progress_callback)",
          "source": "src/Network-Curlhs-Base.html#wrap_ccurl_progress_callback",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "wrap_ccurl_progress_callback",
          "normalized": "CCURL_progress_callback-\u003eIO(FunPtr CCURL_progress_callback)",
          "package": "curlhs",
          "signature": "CCURL_progress_callback-\u003eIO(FunPtr CCURL_progress_callback)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:wrap_ccurl_progress_callback"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "wrap_ccurl_read_callback",
          "package": "curlhs",
          "signature": "CCURL_read_callback -\u003e IO (FunPtr CCURL_read_callback)",
          "source": "src/Network-Curlhs-Base.html#wrap_ccurl_read_callback",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "wrap_ccurl_read_callback",
          "normalized": "CCURL_read_callback-\u003eIO(FunPtr CCURL_read_callback)",
          "package": "curlhs",
          "signature": "CCURL_read_callback-\u003eIO(FunPtr CCURL_read_callback)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:wrap_ccurl_read_callback"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "wrap_ccurl_realloc_callback",
          "package": "curlhs",
          "signature": "CCURL_realloc_callback -\u003e IO (FunPtr CCURL_realloc_callback)",
          "source": "src/Network-Curlhs-Base.html#wrap_ccurl_realloc_callback",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "wrap_ccurl_realloc_callback",
          "normalized": "CCURL_realloc_callback-\u003eIO(FunPtr CCURL_realloc_callback)",
          "package": "curlhs",
          "signature": "CCURL_realloc_callback-\u003eIO(FunPtr CCURL_realloc_callback)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:wrap_ccurl_realloc_callback"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "wrap_ccurl_seek_callback",
          "package": "curlhs",
          "signature": "CCURL_seek_callback -\u003e IO (FunPtr CCURL_seek_callback)",
          "source": "src/Network-Curlhs-Base.html#wrap_ccurl_seek_callback",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "wrap_ccurl_seek_callback",
          "normalized": "CCURL_seek_callback-\u003eIO(FunPtr CCURL_seek_callback)",
          "package": "curlhs",
          "signature": "CCURL_seek_callback-\u003eIO(FunPtr CCURL_seek_callback)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:wrap_ccurl_seek_callback"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "wrap_ccurl_sockopt_callback",
          "package": "curlhs",
          "signature": "CCURL_sockopt_callback -\u003e IO (FunPtr CCURL_sockopt_callback)",
          "source": "src/Network-Curlhs-Base.html#wrap_ccurl_sockopt_callback",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "wrap_ccurl_sockopt_callback",
          "normalized": "CCURL_sockopt_callback-\u003eIO(FunPtr CCURL_sockopt_callback)",
          "package": "curlhs",
          "signature": "CCURL_sockopt_callback-\u003eIO(FunPtr CCURL_sockopt_callback)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:wrap_ccurl_sockopt_callback"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "wrap_ccurl_sshkey_callback",
          "package": "curlhs",
          "signature": "CCURL_sshkey_callback -\u003e IO (FunPtr CCURL_sshkey_callback)",
          "source": "src/Network-Curlhs-Base.html#wrap_ccurl_sshkey_callback",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "wrap_ccurl_sshkey_callback",
          "normalized": "CCURL_sshkey_callback-\u003eIO(FunPtr CCURL_sshkey_callback)",
          "package": "curlhs",
          "signature": "CCURL_sshkey_callback-\u003eIO(FunPtr CCURL_sshkey_callback)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:wrap_ccurl_sshkey_callback"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "wrap_ccurl_ssl_ctx_callback",
          "package": "curlhs",
          "signature": "CCURL_ssl_ctx_callback -\u003e IO (FunPtr CCURL_ssl_ctx_callback)",
          "source": "src/Network-Curlhs-Base.html#wrap_ccurl_ssl_ctx_callback",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "wrap_ccurl_ssl_ctx_callback",
          "normalized": "CCURL_ssl_ctx_callback-\u003eIO(FunPtr CCURL_ssl_ctx_callback)",
          "package": "curlhs",
          "signature": "CCURL_ssl_ctx_callback-\u003eIO(FunPtr CCURL_ssl_ctx_callback)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:wrap_ccurl_ssl_ctx_callback"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "wrap_ccurl_strdup_callback",
          "package": "curlhs",
          "signature": "CCURL_strdup_callback -\u003e IO (FunPtr CCURL_strdup_callback)",
          "source": "src/Network-Curlhs-Base.html#wrap_ccurl_strdup_callback",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "wrap_ccurl_strdup_callback",
          "normalized": "CCURL_strdup_callback-\u003eIO(FunPtr CCURL_strdup_callback)",
          "package": "curlhs",
          "signature": "CCURL_strdup_callback-\u003eIO(FunPtr CCURL_strdup_callback)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:wrap_ccurl_strdup_callback"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "wrap_ccurl_unlock_function",
          "package": "curlhs",
          "signature": "CCURL_unlock_function -\u003e IO (FunPtr CCURL_unlock_function)",
          "source": "src/Network-Curlhs-Base.html#wrap_ccurl_unlock_function",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "wrap_ccurl_unlock_function",
          "normalized": "CCURL_unlock_function-\u003eIO(FunPtr CCURL_unlock_function)",
          "package": "curlhs",
          "signature": "CCURL_unlock_function-\u003eIO(FunPtr CCURL_unlock_function)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:wrap_ccurl_unlock_function"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Base",
          "name": "wrap_ccurl_write_callback",
          "package": "curlhs",
          "signature": "CCURL_write_callback -\u003e IO (FunPtr CCURL_write_callback)",
          "source": "src/Network-Curlhs-Base.html#wrap_ccurl_write_callback",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Base",
          "module": "Network.Curlhs.Base",
          "name": "wrap_ccurl_write_callback",
          "normalized": "CCURL_write_callback-\u003eIO(FunPtr CCURL_write_callback)",
          "package": "curlhs",
          "signature": "CCURL_write_callback-\u003eIO(FunPtr CCURL_write_callback)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Base.html#v:wrap_ccurl_write_callback"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eModule \u003ca\u003eNetwork.Curlhs.Core\u003c/a\u003e provides a mid-level interface to \u003ccode\u003elibcurl\u003c/code\u003e.\n For a direct low-level bindings go to \u003ca\u003eNetwork.Curlhs.Base\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eAPI of this module follows the API of \u003ccode\u003elibcurl\u003c/code\u003e as defined in version\n 7.25.0 of the library. But it also depends on the version of \u003ccode\u003elibcurl\u003c/code\u003e\n that is used during compilation of the \u003ccode\u003ecurlhs\u003c/code\u003e package. It is possible\n to use \u003ccode\u003ecurlhs\u003c/code\u003e with older versions of \u003ccode\u003elibcurl\u003c/code\u003e, just keep in mind\n that some features may not be available then.\n\u003c/p\u003e\u003cp\u003eThere is not much documentation here, maybe the future will change that,\n but for now please use the original \u003ccode\u003elibcurl\u003c/code\u003e documentation. API provided\n here follows the original API, so this shouldn't be a big problem.\n Documentation about \u003ccode\u003elibcurl\u003c/code\u003e and/or its particular functions may be\n found in manual pages, which are available among others at the \u003ccode\u003elibcurl\u003c/code\u003e\n project site (please refer to \u003ca\u003ehttp://curl.haxx.se/libcurl/\u003c/a\u003e).\n\u003c/p\u003e\u003cp\u003eExposed API is still somewhat incomplete, but is usable.\n Work on the rest are in progress.\n\u003c/p\u003e\u003cp\u003eSimple example:\n\u003c/p\u003e\u003cpre\u003e import qualified Data.ByteString.Char8 as BS\n import Data.IORef (newIORef, readIORef, atomicModifyIORef)\n import Control.Exception (bracket)\n import Network.Curlhs.Core\n \n curlGET :: BS.ByteString -\u003e IO BS.ByteString\n curlGET url = do\n   buff \u003c- newIORef BS.empty\n   bracket (curl_easy_init) (curl_easy_cleanup) $ \\curl -\u003e do\n     curl_easy_setopt curl\n       [ CURLOPT_URL     url\n       , CURLOPT_VERBOSE True\n       , CURLOPT_WRITEFUNCTION $ Just (memwrite buff)\n       ]\n     curl_easy_perform curl\n   readIORef buff\n \n memwrite buff newbs = atomicModifyIORef buff $ \\oldbuff -\u003e\n   (BS.append oldbuff newbs, CURL_WRITEFUNC_OK)\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Network.Curlhs.Core",
          "name": "Core",
          "package": "curlhs",
          "source": "src/Network-Curlhs-Core.html",
          "type": "module"
        },
        "index": {
          "description": "Module Network.Curlhs.Core provides mid-level interface to libcurl For direct low-level bindings go to Network.Curlhs.Base API of this module follows the API of libcurl as defined in version of the library But it also depends on the version of libcurl that is used during compilation of the curlhs package It is possible to use curlhs with older versions of libcurl just keep in mind that some features may not be available then There is not much documentation here maybe the future will change that but for now please use the original libcurl documentation API provided here follows the original API so this shouldn be big problem Documentation about libcurl and or its particular functions may be found in manual pages which are available among others at the libcurl project site please refer to http curl.haxx.se libcurl Exposed API is still somewhat incomplete but is usable Work on the rest are in progress Simple example import qualified Data.ByteString.Char8 as BS import Data.IORef newIORef readIORef atomicModifyIORef import Control.Exception bracket import Network.Curlhs.Core curlGET BS.ByteString IO BS.ByteString curlGET url do buff newIORef BS.empty bracket curl easy init curl easy cleanup curl do curl easy setopt curl CURLOPT URL url CURLOPT VERBOSE True CURLOPT WRITEFUNCTION Just memwrite buff curl easy perform curl readIORef buff memwrite buff newbs atomicModifyIORef buff oldbuff BS.append oldbuff newbs CURL WRITEFUNC OK",
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "Core",
          "package": "curlhs",
          "partial": "Core",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURL",
          "package": "curlhs",
          "source": "src/Network-Curlhs-Types.html#CURL",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURL",
          "package": "curlhs",
          "partial": "CURL",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#t:CURL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURL_read_callback",
          "package": "curlhs",
          "source": "src/Network-Curlhs-Types.html#CURL_read_callback",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURL_read_callback",
          "package": "curlhs",
          "partial": "CURL",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#t:CURL_read_callback"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURL_read_response",
          "package": "curlhs",
          "source": "src/Network-Curlhs-Types.html#CURL_read_response",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURL_read_response",
          "package": "curlhs",
          "partial": "CURL",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#t:CURL_read_response"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURL_version",
          "package": "curlhs",
          "source": "src/Network-Curlhs-Types.html#CURL_version",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURL_version",
          "package": "curlhs",
          "partial": "CURL",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#t:CURL_version"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURL_version_info_data",
          "package": "curlhs",
          "source": "src/Network-Curlhs-Types.html#CURL_version_info_data",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURL_version_info_data",
          "package": "curlhs",
          "partial": "CURL",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#t:CURL_version_info_data"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURL_write_callback",
          "package": "curlhs",
          "source": "src/Network-Curlhs-Types.html#CURL_write_callback",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURL_write_callback",
          "package": "curlhs",
          "partial": "CURL",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#t:CURL_write_callback"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURL_write_response",
          "package": "curlhs",
          "source": "src/Network-Curlhs-Types.html#CURL_write_response",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURL_write_response",
          "package": "curlhs",
          "partial": "CURL",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#t:CURL_write_response"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLauth",
          "package": "curlhs",
          "source": "src/Network-Curlhs-Types.html#CURLauth",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLauth",
          "package": "curlhs",
          "partial": "CURLauth",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#t:CURLauth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLclosepol",
          "package": "curlhs",
          "source": "src/Network-Curlhs-Types.html#CURLclosepol",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLclosepol",
          "package": "curlhs",
          "partial": "CURLclosepol",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#t:CURLclosepol"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLcode",
          "package": "curlhs",
          "source": "src/Network-Curlhs-Types.html#CURLcode",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLcode",
          "package": "curlhs",
          "partial": "CURLcode",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#t:CURLcode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLftpauth",
          "package": "curlhs",
          "source": "src/Network-Curlhs-Types.html#CURLftpauth",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLftpauth",
          "package": "curlhs",
          "partial": "CURLftpauth",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#t:CURLftpauth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLftpcreate",
          "package": "curlhs",
          "source": "src/Network-Curlhs-Types.html#CURLftpcreate",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLftpcreate",
          "package": "curlhs",
          "partial": "CURLftpcreate",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#t:CURLftpcreate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLftpmethod",
          "package": "curlhs",
          "source": "src/Network-Curlhs-Types.html#CURLftpmethod",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLftpmethod",
          "package": "curlhs",
          "partial": "CURLftpmethod",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#t:CURLftpmethod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLftpssl",
          "package": "curlhs",
          "source": "src/Network-Curlhs-Types.html#CURLftpssl",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLftpssl",
          "package": "curlhs",
          "partial": "CURLftpssl",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#t:CURLftpssl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLgssapi",
          "package": "curlhs",
          "source": "src/Network-Curlhs-Types.html#CURLgssapi",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLgssapi",
          "package": "curlhs",
          "partial": "CURLgssapi",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#t:CURLgssapi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLhttpver",
          "package": "curlhs",
          "source": "src/Network-Curlhs-Types.html#CURLhttpver",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLhttpver",
          "package": "curlhs",
          "partial": "CURLhttpver",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#t:CURLhttpver"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLinfo",
          "package": "curlhs",
          "source": "src/Network-Curlhs-Types.html#CURLinfo",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLinfo",
          "package": "curlhs",
          "partial": "CURLinfo",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#t:CURLinfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLipresolve",
          "package": "curlhs",
          "source": "src/Network-Curlhs-Types.html#CURLipresolve",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLipresolve",
          "package": "curlhs",
          "partial": "CURLipresolve",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#t:CURLipresolve"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLnetrc",
          "package": "curlhs",
          "source": "src/Network-Curlhs-Types.html#CURLnetrc",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLnetrc",
          "package": "curlhs",
          "partial": "CURLnetrc",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#t:CURLnetrc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLoption",
          "package": "curlhs",
          "source": "src/Network-Curlhs-Types.html#CURLoption",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLoption",
          "package": "curlhs",
          "partial": "CURLoption",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#t:CURLoption"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLproto",
          "package": "curlhs",
          "source": "src/Network-Curlhs-Types.html#CURLproto",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLproto",
          "package": "curlhs",
          "partial": "CURLproto",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#t:CURLproto"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLproxy",
          "package": "curlhs",
          "source": "src/Network-Curlhs-Types.html#CURLproxy",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLproxy",
          "package": "curlhs",
          "partial": "CURLproxy",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#t:CURLproxy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLredir",
          "package": "curlhs",
          "source": "src/Network-Curlhs-Types.html#CURLredir",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLredir",
          "package": "curlhs",
          "partial": "CURLredir",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#t:CURLredir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLrtspreq",
          "package": "curlhs",
          "source": "src/Network-Curlhs-Types.html#CURLrtspreq",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLrtspreq",
          "package": "curlhs",
          "partial": "CURLrtspreq",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#t:CURLrtspreq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLsshauth",
          "package": "curlhs",
          "source": "src/Network-Curlhs-Types.html#CURLsshauth",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLsshauth",
          "package": "curlhs",
          "partial": "CURLsshauth",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#t:CURLsshauth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLsslopt",
          "package": "curlhs",
          "source": "src/Network-Curlhs-Types.html#CURLsslopt",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLsslopt",
          "package": "curlhs",
          "partial": "CURLsslopt",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#t:CURLsslopt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLsslver",
          "package": "curlhs",
          "source": "src/Network-Curlhs-Types.html#CURLsslver",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLsslver",
          "package": "curlhs",
          "partial": "CURLsslver",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#t:CURLsslver"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLtimecond",
          "package": "curlhs",
          "source": "src/Network-Curlhs-Types.html#CURLtimecond",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLtimecond",
          "package": "curlhs",
          "partial": "CURLtimecond",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#t:CURLtimecond"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLtlsauth",
          "package": "curlhs",
          "source": "src/Network-Curlhs-Types.html#CURLtlsauth",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLtlsauth",
          "package": "curlhs",
          "partial": "CURLtlsauth",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#t:CURLtlsauth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLusessl",
          "package": "curlhs",
          "source": "src/Network-Curlhs-Types.html#CURLusessl",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLusessl",
          "package": "curlhs",
          "partial": "CURLusessl",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#t:CURLusessl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLAUTH_ANY",
          "package": "curlhs",
          "signature": "CURLAUTH_ANY",
          "source": "src/Network-Curlhs-Types.html#CURLauth",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLAUTH_ANY",
          "package": "curlhs",
          "partial": "CURLAUTH ANY",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLAUTH_ANY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLAUTH_ANYSAFE",
          "package": "curlhs",
          "signature": "CURLAUTH_ANYSAFE",
          "source": "src/Network-Curlhs-Types.html#CURLauth",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLAUTH_ANYSAFE",
          "package": "curlhs",
          "partial": "CURLAUTH ANYSAFE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLAUTH_ANYSAFE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLAUTH_BASIC",
          "package": "curlhs",
          "signature": "CURLAUTH_BASIC",
          "source": "src/Network-Curlhs-Types.html#CURLauth",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLAUTH_BASIC",
          "package": "curlhs",
          "partial": "CURLAUTH BASIC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLAUTH_BASIC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLAUTH_DIGEST",
          "package": "curlhs",
          "signature": "CURLAUTH_DIGEST",
          "source": "src/Network-Curlhs-Types.html#CURLauth",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLAUTH_DIGEST",
          "package": "curlhs",
          "partial": "CURLAUTH DIGEST",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLAUTH_DIGEST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLAUTH_DIGEST_IE",
          "package": "curlhs",
          "signature": "CURLAUTH_DIGEST_IE",
          "source": "src/Network-Curlhs-Types.html#CURLauth",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLAUTH_DIGEST_IE",
          "package": "curlhs",
          "partial": "CURLAUTH DIGEST IE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLAUTH_DIGEST_IE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLAUTH_GSSNEGOTIATE",
          "package": "curlhs",
          "signature": "CURLAUTH_GSSNEGOTIATE",
          "source": "src/Network-Curlhs-Types.html#CURLauth",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLAUTH_GSSNEGOTIATE",
          "package": "curlhs",
          "partial": "CURLAUTH GSSNEGOTIATE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLAUTH_GSSNEGOTIATE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLAUTH_NTLM",
          "package": "curlhs",
          "signature": "CURLAUTH_NTLM",
          "source": "src/Network-Curlhs-Types.html#CURLauth",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLAUTH_NTLM",
          "package": "curlhs",
          "partial": "CURLAUTH NTLM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLAUTH_NTLM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLAUTH_NTLM_WB",
          "package": "curlhs",
          "signature": "CURLAUTH_NTLM_WB",
          "source": "src/Network-Curlhs-Types.html#CURLauth",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLAUTH_NTLM_WB",
          "package": "curlhs",
          "partial": "CURLAUTH NTLM WB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLAUTH_NTLM_WB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLAUTH_ONLY",
          "package": "curlhs",
          "signature": "CURLAUTH_ONLY",
          "source": "src/Network-Curlhs-Types.html#CURLauth",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLAUTH_ONLY",
          "package": "curlhs",
          "partial": "CURLAUTH ONLY",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLAUTH_ONLY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLCLOSEPOLICY_CALLBACK",
          "package": "curlhs",
          "signature": "CURLCLOSEPOLICY_CALLBACK",
          "source": "src/Network-Curlhs-Types.html#CURLclosepol",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLCLOSEPOLICY_CALLBACK",
          "package": "curlhs",
          "partial": "CURLCLOSEPOLICY CALLBACK",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLCLOSEPOLICY_CALLBACK"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLCLOSEPOLICY_LEAST_RECENTLY_USED",
          "package": "curlhs",
          "signature": "CURLCLOSEPOLICY_LEAST_RECENTLY_USED",
          "source": "src/Network-Curlhs-Types.html#CURLclosepol",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLCLOSEPOLICY_LEAST_RECENTLY_USED",
          "package": "curlhs",
          "partial": "CURLCLOSEPOLICY LEAST RECENTLY USED",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLCLOSEPOLICY_LEAST_RECENTLY_USED"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLCLOSEPOLICY_LEAST_TRAFFIC",
          "package": "curlhs",
          "signature": "CURLCLOSEPOLICY_LEAST_TRAFFIC",
          "source": "src/Network-Curlhs-Types.html#CURLclosepol",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLCLOSEPOLICY_LEAST_TRAFFIC",
          "package": "curlhs",
          "partial": "CURLCLOSEPOLICY LEAST TRAFFIC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLCLOSEPOLICY_LEAST_TRAFFIC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLCLOSEPOLICY_NONE",
          "package": "curlhs",
          "signature": "CURLCLOSEPOLICY_NONE",
          "source": "src/Network-Curlhs-Types.html#CURLclosepol",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLCLOSEPOLICY_NONE",
          "package": "curlhs",
          "partial": "CURLCLOSEPOLICY NONE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLCLOSEPOLICY_NONE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLCLOSEPOLICY_OLDEST",
          "package": "curlhs",
          "signature": "CURLCLOSEPOLICY_OLDEST",
          "source": "src/Network-Curlhs-Types.html#CURLclosepol",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLCLOSEPOLICY_OLDEST",
          "package": "curlhs",
          "partial": "CURLCLOSEPOLICY OLDEST",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLCLOSEPOLICY_OLDEST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLCLOSEPOLICY_SLOWEST",
          "package": "curlhs",
          "signature": "CURLCLOSEPOLICY_SLOWEST",
          "source": "src/Network-Curlhs-Types.html#CURLclosepol",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLCLOSEPOLICY_SLOWEST",
          "package": "curlhs",
          "partial": "CURLCLOSEPOLICY SLOWEST",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLCLOSEPOLICY_SLOWEST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLE_ABORTED_BY_CALLBACK",
          "package": "curlhs",
          "signature": "CURLE_ABORTED_BY_CALLBACK",
          "source": "src/Network-Curlhs-Types.html#CURLcode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLE_ABORTED_BY_CALLBACK",
          "package": "curlhs",
          "partial": "CURLE ABORTED BY CALLBACK",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLE_ABORTED_BY_CALLBACK"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLE_AGAIN",
          "package": "curlhs",
          "signature": "CURLE_AGAIN",
          "source": "src/Network-Curlhs-Types.html#CURLcode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLE_AGAIN",
          "package": "curlhs",
          "partial": "CURLE AGAIN",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLE_AGAIN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLE_BAD_CONTENT_ENCODING",
          "package": "curlhs",
          "signature": "CURLE_BAD_CONTENT_ENCODING",
          "source": "src/Network-Curlhs-Types.html#CURLcode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLE_BAD_CONTENT_ENCODING",
          "package": "curlhs",
          "partial": "CURLE BAD CONTENT ENCODING",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLE_BAD_CONTENT_ENCODING"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLE_BAD_DOWNLOAD_RESUME",
          "package": "curlhs",
          "signature": "CURLE_BAD_DOWNLOAD_RESUME",
          "source": "src/Network-Curlhs-Types.html#CURLcode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLE_BAD_DOWNLOAD_RESUME",
          "package": "curlhs",
          "partial": "CURLE BAD DOWNLOAD RESUME",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLE_BAD_DOWNLOAD_RESUME"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLE_BAD_FUNCTION_ARGUMENT",
          "package": "curlhs",
          "signature": "CURLE_BAD_FUNCTION_ARGUMENT",
          "source": "src/Network-Curlhs-Types.html#CURLcode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLE_BAD_FUNCTION_ARGUMENT",
          "package": "curlhs",
          "partial": "CURLE BAD FUNCTION ARGUMENT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLE_BAD_FUNCTION_ARGUMENT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLE_CHUNK_FAILED",
          "package": "curlhs",
          "signature": "CURLE_CHUNK_FAILED",
          "source": "src/Network-Curlhs-Types.html#CURLcode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLE_CHUNK_FAILED",
          "package": "curlhs",
          "partial": "CURLE CHUNK FAILED",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLE_CHUNK_FAILED"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLE_CONV_FAILED",
          "package": "curlhs",
          "signature": "CURLE_CONV_FAILED",
          "source": "src/Network-Curlhs-Types.html#CURLcode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLE_CONV_FAILED",
          "package": "curlhs",
          "partial": "CURLE CONV FAILED",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLE_CONV_FAILED"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLE_CONV_REQD",
          "package": "curlhs",
          "signature": "CURLE_CONV_REQD",
          "source": "src/Network-Curlhs-Types.html#CURLcode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLE_CONV_REQD",
          "package": "curlhs",
          "partial": "CURLE CONV REQD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLE_CONV_REQD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLE_COULDNT_CONNECT",
          "package": "curlhs",
          "signature": "CURLE_COULDNT_CONNECT",
          "source": "src/Network-Curlhs-Types.html#CURLcode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLE_COULDNT_CONNECT",
          "package": "curlhs",
          "partial": "CURLE COULDNT CONNECT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLE_COULDNT_CONNECT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLE_COULDNT_RESOLVE_HOST",
          "package": "curlhs",
          "signature": "CURLE_COULDNT_RESOLVE_HOST",
          "source": "src/Network-Curlhs-Types.html#CURLcode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLE_COULDNT_RESOLVE_HOST",
          "package": "curlhs",
          "partial": "CURLE COULDNT RESOLVE HOST",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLE_COULDNT_RESOLVE_HOST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLE_COULDNT_RESOLVE_PROXY",
          "package": "curlhs",
          "signature": "CURLE_COULDNT_RESOLVE_PROXY",
          "source": "src/Network-Curlhs-Types.html#CURLcode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLE_COULDNT_RESOLVE_PROXY",
          "package": "curlhs",
          "partial": "CURLE COULDNT RESOLVE PROXY",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLE_COULDNT_RESOLVE_PROXY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLE_FAILED_INIT",
          "package": "curlhs",
          "signature": "CURLE_FAILED_INIT",
          "source": "src/Network-Curlhs-Types.html#CURLcode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLE_FAILED_INIT",
          "package": "curlhs",
          "partial": "CURLE FAILED INIT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLE_FAILED_INIT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLE_FILESIZE_EXCEEDED",
          "package": "curlhs",
          "signature": "CURLE_FILESIZE_EXCEEDED",
          "source": "src/Network-Curlhs-Types.html#CURLcode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLE_FILESIZE_EXCEEDED",
          "package": "curlhs",
          "partial": "CURLE FILESIZE EXCEEDED",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLE_FILESIZE_EXCEEDED"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLE_FILE_COULDNT_READ_FILE",
          "package": "curlhs",
          "signature": "CURLE_FILE_COULDNT_READ_FILE",
          "source": "src/Network-Curlhs-Types.html#CURLcode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLE_FILE_COULDNT_READ_FILE",
          "package": "curlhs",
          "partial": "CURLE FILE COULDNT READ FILE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLE_FILE_COULDNT_READ_FILE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLE_FTP_ACCEPT_FAILED",
          "package": "curlhs",
          "signature": "CURLE_FTP_ACCEPT_FAILED",
          "source": "src/Network-Curlhs-Types.html#CURLcode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLE_FTP_ACCEPT_FAILED",
          "package": "curlhs",
          "partial": "CURLE FTP ACCEPT FAILED",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLE_FTP_ACCEPT_FAILED"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLE_FTP_ACCEPT_TIMEOUT",
          "package": "curlhs",
          "signature": "CURLE_FTP_ACCEPT_TIMEOUT",
          "source": "src/Network-Curlhs-Types.html#CURLcode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLE_FTP_ACCEPT_TIMEOUT",
          "package": "curlhs",
          "partial": "CURLE FTP ACCEPT TIMEOUT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLE_FTP_ACCEPT_TIMEOUT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLE_FTP_BAD_FILE_LIST",
          "package": "curlhs",
          "signature": "CURLE_FTP_BAD_FILE_LIST",
          "source": "src/Network-Curlhs-Types.html#CURLcode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLE_FTP_BAD_FILE_LIST",
          "package": "curlhs",
          "partial": "CURLE FTP BAD FILE LIST",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLE_FTP_BAD_FILE_LIST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLE_FTP_CANT_GET_HOST",
          "package": "curlhs",
          "signature": "CURLE_FTP_CANT_GET_HOST",
          "source": "src/Network-Curlhs-Types.html#CURLcode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLE_FTP_CANT_GET_HOST",
          "package": "curlhs",
          "partial": "CURLE FTP CANT GET HOST",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLE_FTP_CANT_GET_HOST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLE_FTP_COULDNT_RETR_FILE",
          "package": "curlhs",
          "signature": "CURLE_FTP_COULDNT_RETR_FILE",
          "source": "src/Network-Curlhs-Types.html#CURLcode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLE_FTP_COULDNT_RETR_FILE",
          "package": "curlhs",
          "partial": "CURLE FTP COULDNT RETR FILE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLE_FTP_COULDNT_RETR_FILE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLE_FTP_COULDNT_SET_TYPE",
          "package": "curlhs",
          "signature": "CURLE_FTP_COULDNT_SET_TYPE",
          "source": "src/Network-Curlhs-Types.html#CURLcode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLE_FTP_COULDNT_SET_TYPE",
          "package": "curlhs",
          "partial": "CURLE FTP COULDNT SET TYPE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLE_FTP_COULDNT_SET_TYPE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLE_FTP_COULDNT_USE_REST",
          "package": "curlhs",
          "signature": "CURLE_FTP_COULDNT_USE_REST",
          "source": "src/Network-Curlhs-Types.html#CURLcode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLE_FTP_COULDNT_USE_REST",
          "package": "curlhs",
          "partial": "CURLE FTP COULDNT USE REST",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLE_FTP_COULDNT_USE_REST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLE_FTP_PORT_FAILED",
          "package": "curlhs",
          "signature": "CURLE_FTP_PORT_FAILED",
          "source": "src/Network-Curlhs-Types.html#CURLcode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLE_FTP_PORT_FAILED",
          "package": "curlhs",
          "partial": "CURLE FTP PORT FAILED",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLE_FTP_PORT_FAILED"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLE_FTP_PRET_FAILED",
          "package": "curlhs",
          "signature": "CURLE_FTP_PRET_FAILED",
          "source": "src/Network-Curlhs-Types.html#CURLcode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLE_FTP_PRET_FAILED",
          "package": "curlhs",
          "partial": "CURLE FTP PRET FAILED",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLE_FTP_PRET_FAILED"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLE_FTP_WEIRD_227_FORMAT",
          "package": "curlhs",
          "signature": "CURLE_FTP_WEIRD_227_FORMAT",
          "source": "src/Network-Curlhs-Types.html#CURLcode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLE_FTP_WEIRD_227_FORMAT",
          "package": "curlhs",
          "partial": "CURLE FTP WEIRD FORMAT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLE_FTP_WEIRD_227_FORMAT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLE_FTP_WEIRD_PASS_REPLY",
          "package": "curlhs",
          "signature": "CURLE_FTP_WEIRD_PASS_REPLY",
          "source": "src/Network-Curlhs-Types.html#CURLcode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLE_FTP_WEIRD_PASS_REPLY",
          "package": "curlhs",
          "partial": "CURLE FTP WEIRD PASS REPLY",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLE_FTP_WEIRD_PASS_REPLY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLE_FTP_WEIRD_PASV_REPLY",
          "package": "curlhs",
          "signature": "CURLE_FTP_WEIRD_PASV_REPLY",
          "source": "src/Network-Curlhs-Types.html#CURLcode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLE_FTP_WEIRD_PASV_REPLY",
          "package": "curlhs",
          "partial": "CURLE FTP WEIRD PASV REPLY",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLE_FTP_WEIRD_PASV_REPLY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLE_FTP_WEIRD_SERVER_REPLY",
          "package": "curlhs",
          "signature": "CURLE_FTP_WEIRD_SERVER_REPLY",
          "source": "src/Network-Curlhs-Types.html#CURLcode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLE_FTP_WEIRD_SERVER_REPLY",
          "package": "curlhs",
          "partial": "CURLE FTP WEIRD SERVER REPLY",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLE_FTP_WEIRD_SERVER_REPLY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLE_FUNCTION_NOT_FOUND",
          "package": "curlhs",
          "signature": "CURLE_FUNCTION_NOT_FOUND",
          "source": "src/Network-Curlhs-Types.html#CURLcode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLE_FUNCTION_NOT_FOUND",
          "package": "curlhs",
          "partial": "CURLE FUNCTION NOT FOUND",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLE_FUNCTION_NOT_FOUND"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLE_GOT_NOTHING",
          "package": "curlhs",
          "signature": "CURLE_GOT_NOTHING",
          "source": "src/Network-Curlhs-Types.html#CURLcode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLE_GOT_NOTHING",
          "package": "curlhs",
          "partial": "CURLE GOT NOTHING",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLE_GOT_NOTHING"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLE_HTTP_POST_ERROR",
          "package": "curlhs",
          "signature": "CURLE_HTTP_POST_ERROR",
          "source": "src/Network-Curlhs-Types.html#CURLcode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLE_HTTP_POST_ERROR",
          "package": "curlhs",
          "partial": "CURLE HTTP POST ERROR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLE_HTTP_POST_ERROR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLE_HTTP_RETURNED_ERROR",
          "package": "curlhs",
          "signature": "CURLE_HTTP_RETURNED_ERROR",
          "source": "src/Network-Curlhs-Types.html#CURLcode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLE_HTTP_RETURNED_ERROR",
          "package": "curlhs",
          "partial": "CURLE HTTP RETURNED ERROR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLE_HTTP_RETURNED_ERROR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLE_INTERFACE_FAILED",
          "package": "curlhs",
          "signature": "CURLE_INTERFACE_FAILED",
          "source": "src/Network-Curlhs-Types.html#CURLcode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLE_INTERFACE_FAILED",
          "package": "curlhs",
          "partial": "CURLE INTERFACE FAILED",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLE_INTERFACE_FAILED"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLE_LDAP_CANNOT_BIND",
          "package": "curlhs",
          "signature": "CURLE_LDAP_CANNOT_BIND",
          "source": "src/Network-Curlhs-Types.html#CURLcode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLE_LDAP_CANNOT_BIND",
          "package": "curlhs",
          "partial": "CURLE LDAP CANNOT BIND",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLE_LDAP_CANNOT_BIND"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLE_LDAP_INVALID_URL",
          "package": "curlhs",
          "signature": "CURLE_LDAP_INVALID_URL",
          "source": "src/Network-Curlhs-Types.html#CURLcode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLE_LDAP_INVALID_URL",
          "package": "curlhs",
          "partial": "CURLE LDAP INVALID URL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLE_LDAP_INVALID_URL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLE_LDAP_SEARCH_FAILED",
          "package": "curlhs",
          "signature": "CURLE_LDAP_SEARCH_FAILED",
          "source": "src/Network-Curlhs-Types.html#CURLcode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLE_LDAP_SEARCH_FAILED",
          "package": "curlhs",
          "partial": "CURLE LDAP SEARCH FAILED",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLE_LDAP_SEARCH_FAILED"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLE_LOGIN_DENIED",
          "package": "curlhs",
          "signature": "CURLE_LOGIN_DENIED",
          "source": "src/Network-Curlhs-Types.html#CURLcode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLE_LOGIN_DENIED",
          "package": "curlhs",
          "partial": "CURLE LOGIN DENIED",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLE_LOGIN_DENIED"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLE_NOT_BUILT_IN",
          "package": "curlhs",
          "signature": "CURLE_NOT_BUILT_IN",
          "source": "src/Network-Curlhs-Types.html#CURLcode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLE_NOT_BUILT_IN",
          "package": "curlhs",
          "partial": "CURLE NOT BUILT IN",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLE_NOT_BUILT_IN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLE_OK",
          "package": "curlhs",
          "signature": "CURLE_OK",
          "source": "src/Network-Curlhs-Types.html#CURLcode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLE_OK",
          "package": "curlhs",
          "partial": "CURLE OK",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLE_OK"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLE_OPERATION_TIMEDOUT",
          "package": "curlhs",
          "signature": "CURLE_OPERATION_TIMEDOUT",
          "source": "src/Network-Curlhs-Types.html#CURLcode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLE_OPERATION_TIMEDOUT",
          "package": "curlhs",
          "partial": "CURLE OPERATION TIMEDOUT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLE_OPERATION_TIMEDOUT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLE_OUT_OF_MEMORY",
          "package": "curlhs",
          "signature": "CURLE_OUT_OF_MEMORY",
          "source": "src/Network-Curlhs-Types.html#CURLcode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLE_OUT_OF_MEMORY",
          "package": "curlhs",
          "partial": "CURLE OUT OF MEMORY",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLE_OUT_OF_MEMORY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLE_PARTIAL_FILE",
          "package": "curlhs",
          "signature": "CURLE_PARTIAL_FILE",
          "source": "src/Network-Curlhs-Types.html#CURLcode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLE_PARTIAL_FILE",
          "package": "curlhs",
          "partial": "CURLE PARTIAL FILE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLE_PARTIAL_FILE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLE_PEER_FAILED_VERIFICATION",
          "package": "curlhs",
          "signature": "CURLE_PEER_FAILED_VERIFICATION",
          "source": "src/Network-Curlhs-Types.html#CURLcode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLE_PEER_FAILED_VERIFICATION",
          "package": "curlhs",
          "partial": "CURLE PEER FAILED VERIFICATION",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLE_PEER_FAILED_VERIFICATION"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLE_QUOTE_ERROR",
          "package": "curlhs",
          "signature": "CURLE_QUOTE_ERROR",
          "source": "src/Network-Curlhs-Types.html#CURLcode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLE_QUOTE_ERROR",
          "package": "curlhs",
          "partial": "CURLE QUOTE ERROR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLE_QUOTE_ERROR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLE_RANGE_ERROR",
          "package": "curlhs",
          "signature": "CURLE_RANGE_ERROR",
          "source": "src/Network-Curlhs-Types.html#CURLcode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLE_RANGE_ERROR",
          "package": "curlhs",
          "partial": "CURLE RANGE ERROR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLE_RANGE_ERROR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLE_READ_ERROR",
          "package": "curlhs",
          "signature": "CURLE_READ_ERROR",
          "source": "src/Network-Curlhs-Types.html#CURLcode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLE_READ_ERROR",
          "package": "curlhs",
          "partial": "CURLE READ ERROR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLE_READ_ERROR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLE_RECV_ERROR",
          "package": "curlhs",
          "signature": "CURLE_RECV_ERROR",
          "source": "src/Network-Curlhs-Types.html#CURLcode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLE_RECV_ERROR",
          "package": "curlhs",
          "partial": "CURLE RECV ERROR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLE_RECV_ERROR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLE_REMOTE_ACCESS_DENIED",
          "package": "curlhs",
          "signature": "CURLE_REMOTE_ACCESS_DENIED",
          "source": "src/Network-Curlhs-Types.html#CURLcode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLE_REMOTE_ACCESS_DENIED",
          "package": "curlhs",
          "partial": "CURLE REMOTE ACCESS DENIED",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLE_REMOTE_ACCESS_DENIED"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLE_REMOTE_DISK_FULL",
          "package": "curlhs",
          "signature": "CURLE_REMOTE_DISK_FULL",
          "source": "src/Network-Curlhs-Types.html#CURLcode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLE_REMOTE_DISK_FULL",
          "package": "curlhs",
          "partial": "CURLE REMOTE DISK FULL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLE_REMOTE_DISK_FULL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLE_REMOTE_FILE_EXISTS",
          "package": "curlhs",
          "signature": "CURLE_REMOTE_FILE_EXISTS",
          "source": "src/Network-Curlhs-Types.html#CURLcode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLE_REMOTE_FILE_EXISTS",
          "package": "curlhs",
          "partial": "CURLE REMOTE FILE EXISTS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLE_REMOTE_FILE_EXISTS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLE_REMOTE_FILE_NOT_FOUND",
          "package": "curlhs",
          "signature": "CURLE_REMOTE_FILE_NOT_FOUND",
          "source": "src/Network-Curlhs-Types.html#CURLcode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLE_REMOTE_FILE_NOT_FOUND",
          "package": "curlhs",
          "partial": "CURLE REMOTE FILE NOT FOUND",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLE_REMOTE_FILE_NOT_FOUND"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLE_RTSP_CSEQ_ERROR",
          "package": "curlhs",
          "signature": "CURLE_RTSP_CSEQ_ERROR",
          "source": "src/Network-Curlhs-Types.html#CURLcode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLE_RTSP_CSEQ_ERROR",
          "package": "curlhs",
          "partial": "CURLE RTSP CSEQ ERROR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLE_RTSP_CSEQ_ERROR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLE_RTSP_SESSION_ERROR",
          "package": "curlhs",
          "signature": "CURLE_RTSP_SESSION_ERROR",
          "source": "src/Network-Curlhs-Types.html#CURLcode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLE_RTSP_SESSION_ERROR",
          "package": "curlhs",
          "partial": "CURLE RTSP SESSION ERROR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLE_RTSP_SESSION_ERROR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLE_SEND_ERROR",
          "package": "curlhs",
          "signature": "CURLE_SEND_ERROR",
          "source": "src/Network-Curlhs-Types.html#CURLcode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLE_SEND_ERROR",
          "package": "curlhs",
          "partial": "CURLE SEND ERROR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLE_SEND_ERROR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLE_SEND_FAIL_REWIND",
          "package": "curlhs",
          "signature": "CURLE_SEND_FAIL_REWIND",
          "source": "src/Network-Curlhs-Types.html#CURLcode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLE_SEND_FAIL_REWIND",
          "package": "curlhs",
          "partial": "CURLE SEND FAIL REWIND",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLE_SEND_FAIL_REWIND"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLE_SSH",
          "package": "curlhs",
          "signature": "CURLE_SSH",
          "source": "src/Network-Curlhs-Types.html#CURLcode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLE_SSH",
          "package": "curlhs",
          "partial": "CURLE SSH",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLE_SSH"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLE_SSL_CACERT",
          "package": "curlhs",
          "signature": "CURLE_SSL_CACERT",
          "source": "src/Network-Curlhs-Types.html#CURLcode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLE_SSL_CACERT",
          "package": "curlhs",
          "partial": "CURLE SSL CACERT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLE_SSL_CACERT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLE_SSL_CACERT_BADFILE",
          "package": "curlhs",
          "signature": "CURLE_SSL_CACERT_BADFILE",
          "source": "src/Network-Curlhs-Types.html#CURLcode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLE_SSL_CACERT_BADFILE",
          "package": "curlhs",
          "partial": "CURLE SSL CACERT BADFILE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLE_SSL_CACERT_BADFILE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLE_SSL_CERTPROBLEM",
          "package": "curlhs",
          "signature": "CURLE_SSL_CERTPROBLEM",
          "source": "src/Network-Curlhs-Types.html#CURLcode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLE_SSL_CERTPROBLEM",
          "package": "curlhs",
          "partial": "CURLE SSL CERTPROBLEM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLE_SSL_CERTPROBLEM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLE_SSL_CIPHER",
          "package": "curlhs",
          "signature": "CURLE_SSL_CIPHER",
          "source": "src/Network-Curlhs-Types.html#CURLcode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLE_SSL_CIPHER",
          "package": "curlhs",
          "partial": "CURLE SSL CIPHER",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLE_SSL_CIPHER"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLE_SSL_CONNECT_ERROR",
          "package": "curlhs",
          "signature": "CURLE_SSL_CONNECT_ERROR",
          "source": "src/Network-Curlhs-Types.html#CURLcode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLE_SSL_CONNECT_ERROR",
          "package": "curlhs",
          "partial": "CURLE SSL CONNECT ERROR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLE_SSL_CONNECT_ERROR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLE_SSL_CRL_BADFILE",
          "package": "curlhs",
          "signature": "CURLE_SSL_CRL_BADFILE",
          "source": "src/Network-Curlhs-Types.html#CURLcode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLE_SSL_CRL_BADFILE",
          "package": "curlhs",
          "partial": "CURLE SSL CRL BADFILE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLE_SSL_CRL_BADFILE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLE_SSL_ENGINE_INITFAILED",
          "package": "curlhs",
          "signature": "CURLE_SSL_ENGINE_INITFAILED",
          "source": "src/Network-Curlhs-Types.html#CURLcode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLE_SSL_ENGINE_INITFAILED",
          "package": "curlhs",
          "partial": "CURLE SSL ENGINE INITFAILED",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLE_SSL_ENGINE_INITFAILED"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLE_SSL_ENGINE_NOTFOUND",
          "package": "curlhs",
          "signature": "CURLE_SSL_ENGINE_NOTFOUND",
          "source": "src/Network-Curlhs-Types.html#CURLcode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLE_SSL_ENGINE_NOTFOUND",
          "package": "curlhs",
          "partial": "CURLE SSL ENGINE NOTFOUND",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLE_SSL_ENGINE_NOTFOUND"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLE_SSL_ENGINE_SETFAILED",
          "package": "curlhs",
          "signature": "CURLE_SSL_ENGINE_SETFAILED",
          "source": "src/Network-Curlhs-Types.html#CURLcode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLE_SSL_ENGINE_SETFAILED",
          "package": "curlhs",
          "partial": "CURLE SSL ENGINE SETFAILED",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLE_SSL_ENGINE_SETFAILED"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLE_SSL_ISSUER_ERROR",
          "package": "curlhs",
          "signature": "CURLE_SSL_ISSUER_ERROR",
          "source": "src/Network-Curlhs-Types.html#CURLcode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLE_SSL_ISSUER_ERROR",
          "package": "curlhs",
          "partial": "CURLE SSL ISSUER ERROR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLE_SSL_ISSUER_ERROR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLE_SSL_SHUTDOWN_FAILED",
          "package": "curlhs",
          "signature": "CURLE_SSL_SHUTDOWN_FAILED",
          "source": "src/Network-Curlhs-Types.html#CURLcode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLE_SSL_SHUTDOWN_FAILED",
          "package": "curlhs",
          "partial": "CURLE SSL SHUTDOWN FAILED",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLE_SSL_SHUTDOWN_FAILED"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLE_TELNET_OPTION_SYNTAX",
          "package": "curlhs",
          "signature": "CURLE_TELNET_OPTION_SYNTAX",
          "source": "src/Network-Curlhs-Types.html#CURLcode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLE_TELNET_OPTION_SYNTAX",
          "package": "curlhs",
          "partial": "CURLE TELNET OPTION SYNTAX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLE_TELNET_OPTION_SYNTAX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLE_TFTP_ILLEGAL",
          "package": "curlhs",
          "signature": "CURLE_TFTP_ILLEGAL",
          "source": "src/Network-Curlhs-Types.html#CURLcode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLE_TFTP_ILLEGAL",
          "package": "curlhs",
          "partial": "CURLE TFTP ILLEGAL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLE_TFTP_ILLEGAL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLE_TFTP_NOSUCHUSER",
          "package": "curlhs",
          "signature": "CURLE_TFTP_NOSUCHUSER",
          "source": "src/Network-Curlhs-Types.html#CURLcode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLE_TFTP_NOSUCHUSER",
          "package": "curlhs",
          "partial": "CURLE TFTP NOSUCHUSER",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLE_TFTP_NOSUCHUSER"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLE_TFTP_NOTFOUND",
          "package": "curlhs",
          "signature": "CURLE_TFTP_NOTFOUND",
          "source": "src/Network-Curlhs-Types.html#CURLcode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLE_TFTP_NOTFOUND",
          "package": "curlhs",
          "partial": "CURLE TFTP NOTFOUND",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLE_TFTP_NOTFOUND"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLE_TFTP_PERM",
          "package": "curlhs",
          "signature": "CURLE_TFTP_PERM",
          "source": "src/Network-Curlhs-Types.html#CURLcode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLE_TFTP_PERM",
          "package": "curlhs",
          "partial": "CURLE TFTP PERM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLE_TFTP_PERM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLE_TFTP_UNKNOWNID",
          "package": "curlhs",
          "signature": "CURLE_TFTP_UNKNOWNID",
          "source": "src/Network-Curlhs-Types.html#CURLcode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLE_TFTP_UNKNOWNID",
          "package": "curlhs",
          "partial": "CURLE TFTP UNKNOWNID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLE_TFTP_UNKNOWNID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLE_TOO_MANY_REDIRECTS",
          "package": "curlhs",
          "signature": "CURLE_TOO_MANY_REDIRECTS",
          "source": "src/Network-Curlhs-Types.html#CURLcode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLE_TOO_MANY_REDIRECTS",
          "package": "curlhs",
          "partial": "CURLE TOO MANY REDIRECTS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLE_TOO_MANY_REDIRECTS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLE_UNKNOWN_OPTION",
          "package": "curlhs",
          "signature": "CURLE_UNKNOWN_OPTION",
          "source": "src/Network-Curlhs-Types.html#CURLcode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLE_UNKNOWN_OPTION",
          "package": "curlhs",
          "partial": "CURLE UNKNOWN OPTION",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLE_UNKNOWN_OPTION"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLE_UNSUPPORTED_PROTOCOL",
          "package": "curlhs",
          "signature": "CURLE_UNSUPPORTED_PROTOCOL",
          "source": "src/Network-Curlhs-Types.html#CURLcode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLE_UNSUPPORTED_PROTOCOL",
          "package": "curlhs",
          "partial": "CURLE UNSUPPORTED PROTOCOL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLE_UNSUPPORTED_PROTOCOL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLE_UPLOAD_FAILED",
          "package": "curlhs",
          "signature": "CURLE_UPLOAD_FAILED",
          "source": "src/Network-Curlhs-Types.html#CURLcode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLE_UPLOAD_FAILED",
          "package": "curlhs",
          "partial": "CURLE UPLOAD FAILED",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLE_UPLOAD_FAILED"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLE_URL_MALFORMAT",
          "package": "curlhs",
          "signature": "CURLE_URL_MALFORMAT",
          "source": "src/Network-Curlhs-Types.html#CURLcode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLE_URL_MALFORMAT",
          "package": "curlhs",
          "partial": "CURLE URL MALFORMAT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLE_URL_MALFORMAT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLE_USE_SSL_FAILED",
          "package": "curlhs",
          "signature": "CURLE_USE_SSL_FAILED",
          "source": "src/Network-Curlhs-Types.html#CURLcode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLE_USE_SSL_FAILED",
          "package": "curlhs",
          "partial": "CURLE USE SSL FAILED",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLE_USE_SSL_FAILED"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLE_WRITE_ERROR",
          "package": "curlhs",
          "signature": "CURLE_WRITE_ERROR",
          "source": "src/Network-Curlhs-Types.html#CURLcode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLE_WRITE_ERROR",
          "package": "curlhs",
          "partial": "CURLE WRITE ERROR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLE_WRITE_ERROR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLFTPAUTH_DEFAULT",
          "package": "curlhs",
          "signature": "CURLFTPAUTH_DEFAULT",
          "source": "src/Network-Curlhs-Types.html#CURLftpauth",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLFTPAUTH_DEFAULT",
          "package": "curlhs",
          "partial": "CURLFTPAUTH DEFAULT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLFTPAUTH_DEFAULT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLFTPAUTH_SSL",
          "package": "curlhs",
          "signature": "CURLFTPAUTH_SSL",
          "source": "src/Network-Curlhs-Types.html#CURLftpauth",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLFTPAUTH_SSL",
          "package": "curlhs",
          "partial": "CURLFTPAUTH SSL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLFTPAUTH_SSL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLFTPAUTH_TLS",
          "package": "curlhs",
          "signature": "CURLFTPAUTH_TLS",
          "source": "src/Network-Curlhs-Types.html#CURLftpauth",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLFTPAUTH_TLS",
          "package": "curlhs",
          "partial": "CURLFTPAUTH TLS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLFTPAUTH_TLS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLFTPMETHOD_DEFAULT",
          "package": "curlhs",
          "signature": "CURLFTPMETHOD_DEFAULT",
          "source": "src/Network-Curlhs-Types.html#CURLftpmethod",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLFTPMETHOD_DEFAULT",
          "package": "curlhs",
          "partial": "CURLFTPMETHOD DEFAULT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLFTPMETHOD_DEFAULT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLFTPMETHOD_MULTICWD",
          "package": "curlhs",
          "signature": "CURLFTPMETHOD_MULTICWD",
          "source": "src/Network-Curlhs-Types.html#CURLftpmethod",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLFTPMETHOD_MULTICWD",
          "package": "curlhs",
          "partial": "CURLFTPMETHOD MULTICWD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLFTPMETHOD_MULTICWD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLFTPMETHOD_NOCWD",
          "package": "curlhs",
          "signature": "CURLFTPMETHOD_NOCWD",
          "source": "src/Network-Curlhs-Types.html#CURLftpmethod",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLFTPMETHOD_NOCWD",
          "package": "curlhs",
          "partial": "CURLFTPMETHOD NOCWD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLFTPMETHOD_NOCWD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLFTPMETHOD_SINGLECWD",
          "package": "curlhs",
          "signature": "CURLFTPMETHOD_SINGLECWD",
          "source": "src/Network-Curlhs-Types.html#CURLftpmethod",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLFTPMETHOD_SINGLECWD",
          "package": "curlhs",
          "partial": "CURLFTPMETHOD SINGLECWD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLFTPMETHOD_SINGLECWD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLFTPSSL_CCC_ACTIVE",
          "package": "curlhs",
          "signature": "CURLFTPSSL_CCC_ACTIVE",
          "source": "src/Network-Curlhs-Types.html#CURLftpssl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLFTPSSL_CCC_ACTIVE",
          "package": "curlhs",
          "partial": "CURLFTPSSL CCC ACTIVE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLFTPSSL_CCC_ACTIVE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLFTPSSL_CCC_NONE",
          "package": "curlhs",
          "signature": "CURLFTPSSL_CCC_NONE",
          "source": "src/Network-Curlhs-Types.html#CURLftpssl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLFTPSSL_CCC_NONE",
          "package": "curlhs",
          "partial": "CURLFTPSSL CCC NONE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLFTPSSL_CCC_NONE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLFTPSSL_CCC_PASSIVE",
          "package": "curlhs",
          "signature": "CURLFTPSSL_CCC_PASSIVE",
          "source": "src/Network-Curlhs-Types.html#CURLftpssl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLFTPSSL_CCC_PASSIVE",
          "package": "curlhs",
          "partial": "CURLFTPSSL CCC PASSIVE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLFTPSSL_CCC_PASSIVE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLFTP_CREATE_DIR",
          "package": "curlhs",
          "signature": "CURLFTP_CREATE_DIR",
          "source": "src/Network-Curlhs-Types.html#CURLftpcreate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLFTP_CREATE_DIR",
          "package": "curlhs",
          "partial": "CURLFTP CREATE DIR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLFTP_CREATE_DIR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLFTP_CREATE_DIR_NONE",
          "package": "curlhs",
          "signature": "CURLFTP_CREATE_DIR_NONE",
          "source": "src/Network-Curlhs-Types.html#CURLftpcreate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLFTP_CREATE_DIR_NONE",
          "package": "curlhs",
          "partial": "CURLFTP CREATE DIR NONE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLFTP_CREATE_DIR_NONE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLFTP_CREATE_DIR_RETRY",
          "package": "curlhs",
          "signature": "CURLFTP_CREATE_DIR_RETRY",
          "source": "src/Network-Curlhs-Types.html#CURLftpcreate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLFTP_CREATE_DIR_RETRY",
          "package": "curlhs",
          "partial": "CURLFTP CREATE DIR RETRY",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLFTP_CREATE_DIR_RETRY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLGSSAPI_DELEGATION_FLAG",
          "package": "curlhs",
          "signature": "CURLGSSAPI_DELEGATION_FLAG",
          "source": "src/Network-Curlhs-Types.html#CURLgssapi",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLGSSAPI_DELEGATION_FLAG",
          "package": "curlhs",
          "partial": "CURLGSSAPI DELEGATION FLAG",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLGSSAPI_DELEGATION_FLAG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLGSSAPI_DELEGATION_NONE",
          "package": "curlhs",
          "signature": "CURLGSSAPI_DELEGATION_NONE",
          "source": "src/Network-Curlhs-Types.html#CURLgssapi",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLGSSAPI_DELEGATION_NONE",
          "package": "curlhs",
          "partial": "CURLGSSAPI DELEGATION NONE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLGSSAPI_DELEGATION_NONE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLGSSAPI_DELEGATION_POLICY_FLAG",
          "package": "curlhs",
          "signature": "CURLGSSAPI_DELEGATION_POLICY_FLAG",
          "source": "src/Network-Curlhs-Types.html#CURLgssapi",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLGSSAPI_DELEGATION_POLICY_FLAG",
          "package": "curlhs",
          "partial": "CURLGSSAPI DELEGATION POLICY FLAG",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLGSSAPI_DELEGATION_POLICY_FLAG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_ACCEPTTIMEOUT_MS",
          "package": "curlhs",
          "signature": "CURLOPT_ACCEPTTIMEOUT_MS Int",
          "source": "src/Network-Curlhs-Types.html#CURLoption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_ACCEPTTIMEOUT_MS",
          "package": "curlhs",
          "partial": "CURLOPT ACCEPTTIMEOUT MS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLOPT_ACCEPTTIMEOUT_MS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_ACCEPT_ENCODING",
          "package": "curlhs",
          "signature": "CURLOPT_ACCEPT_ENCODING ByteString",
          "source": "src/Network-Curlhs-Types.html#CURLoption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_ACCEPT_ENCODING",
          "package": "curlhs",
          "partial": "CURLOPT ACCEPT ENCODING",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLOPT_ACCEPT_ENCODING"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_ADDRESS_SCOPE",
          "package": "curlhs",
          "signature": "CURLOPT_ADDRESS_SCOPE Int",
          "source": "src/Network-Curlhs-Types.html#CURLoption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_ADDRESS_SCOPE",
          "package": "curlhs",
          "partial": "CURLOPT ADDRESS SCOPE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLOPT_ADDRESS_SCOPE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_APPEND",
          "package": "curlhs",
          "signature": "CURLOPT_APPEND Bool",
          "source": "src/Network-Curlhs-Types.html#CURLoption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_APPEND",
          "package": "curlhs",
          "partial": "CURLOPT APPEND",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLOPT_APPEND"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_AUTOREFERER",
          "package": "curlhs",
          "signature": "CURLOPT_AUTOREFERER Bool",
          "source": "src/Network-Curlhs-Types.html#CURLoption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_AUTOREFERER",
          "package": "curlhs",
          "partial": "CURLOPT AUTOREFERER",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLOPT_AUTOREFERER"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_BUFFERSIZE",
          "package": "curlhs",
          "signature": "CURLOPT_BUFFERSIZE Int",
          "source": "src/Network-Curlhs-Types.html#CURLoption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_BUFFERSIZE",
          "package": "curlhs",
          "partial": "CURLOPT BUFFERSIZE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLOPT_BUFFERSIZE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_CAINFO",
          "package": "curlhs",
          "signature": "CURLOPT_CAINFO ByteString",
          "source": "src/Network-Curlhs-Types.html#CURLoption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_CAINFO",
          "package": "curlhs",
          "partial": "CURLOPT CAINFO",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLOPT_CAINFO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_CAPATH",
          "package": "curlhs",
          "signature": "CURLOPT_CAPATH ByteString",
          "source": "src/Network-Curlhs-Types.html#CURLoption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_CAPATH",
          "package": "curlhs",
          "partial": "CURLOPT CAPATH",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLOPT_CAPATH"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_CERTINFO",
          "package": "curlhs",
          "signature": "CURLOPT_CERTINFO Bool",
          "source": "src/Network-Curlhs-Types.html#CURLoption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_CERTINFO",
          "package": "curlhs",
          "partial": "CURLOPT CERTINFO",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLOPT_CERTINFO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_CLOSEPOLICY",
          "package": "curlhs",
          "signature": "CURLOPT_CLOSEPOLICY CURLclosepol",
          "source": "src/Network-Curlhs-Types.html#CURLoption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_CLOSEPOLICY",
          "package": "curlhs",
          "partial": "CURLOPT CLOSEPOLICY",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLOPT_CLOSEPOLICY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_CONNECTTIMEOUT",
          "package": "curlhs",
          "signature": "CURLOPT_CONNECTTIMEOUT Int",
          "source": "src/Network-Curlhs-Types.html#CURLoption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_CONNECTTIMEOUT",
          "package": "curlhs",
          "partial": "CURLOPT CONNECTTIMEOUT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLOPT_CONNECTTIMEOUT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_CONNECTTIMEOUT_MS",
          "package": "curlhs",
          "signature": "CURLOPT_CONNECTTIMEOUT_MS Int",
          "source": "src/Network-Curlhs-Types.html#CURLoption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_CONNECTTIMEOUT_MS",
          "package": "curlhs",
          "partial": "CURLOPT CONNECTTIMEOUT MS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLOPT_CONNECTTIMEOUT_MS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_CONNECT_ONLY",
          "package": "curlhs",
          "signature": "CURLOPT_CONNECT_ONLY Bool",
          "source": "src/Network-Curlhs-Types.html#CURLoption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_CONNECT_ONLY",
          "package": "curlhs",
          "partial": "CURLOPT CONNECT ONLY",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLOPT_CONNECT_ONLY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_COOKIE",
          "package": "curlhs",
          "signature": "CURLOPT_COOKIE ByteString",
          "source": "src/Network-Curlhs-Types.html#CURLoption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_COOKIE",
          "package": "curlhs",
          "partial": "CURLOPT COOKIE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLOPT_COOKIE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_COOKIEFILE",
          "package": "curlhs",
          "signature": "CURLOPT_COOKIEFILE ByteString",
          "source": "src/Network-Curlhs-Types.html#CURLoption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_COOKIEFILE",
          "package": "curlhs",
          "partial": "CURLOPT COOKIEFILE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLOPT_COOKIEFILE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_COOKIEJAR",
          "package": "curlhs",
          "signature": "CURLOPT_COOKIEJAR ByteString",
          "source": "src/Network-Curlhs-Types.html#CURLoption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_COOKIEJAR",
          "package": "curlhs",
          "partial": "CURLOPT COOKIEJAR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLOPT_COOKIEJAR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_COOKIELIST",
          "package": "curlhs",
          "signature": "CURLOPT_COOKIELIST ByteString",
          "source": "src/Network-Curlhs-Types.html#CURLoption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_COOKIELIST",
          "package": "curlhs",
          "partial": "CURLOPT COOKIELIST",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLOPT_COOKIELIST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_COOKIESESSION",
          "package": "curlhs",
          "signature": "CURLOPT_COOKIESESSION Bool",
          "source": "src/Network-Curlhs-Types.html#CURLoption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_COOKIESESSION",
          "package": "curlhs",
          "partial": "CURLOPT COOKIESESSION",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLOPT_COOKIESESSION"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_COPYPOSTFIELDS",
          "package": "curlhs",
          "signature": "CURLOPT_COPYPOSTFIELDS ByteString",
          "source": "src/Network-Curlhs-Types.html#CURLoption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_COPYPOSTFIELDS",
          "package": "curlhs",
          "partial": "CURLOPT COPYPOSTFIELDS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLOPT_COPYPOSTFIELDS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_CRLF",
          "package": "curlhs",
          "signature": "CURLOPT_CRLF Bool",
          "source": "src/Network-Curlhs-Types.html#CURLoption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_CRLF",
          "package": "curlhs",
          "partial": "CURLOPT CRLF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLOPT_CRLF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_CRLFILE",
          "package": "curlhs",
          "signature": "CURLOPT_CRLFILE ByteString",
          "source": "src/Network-Curlhs-Types.html#CURLoption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_CRLFILE",
          "package": "curlhs",
          "partial": "CURLOPT CRLFILE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLOPT_CRLFILE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_CUSTOMREQUEST",
          "package": "curlhs",
          "signature": "CURLOPT_CUSTOMREQUEST ByteString",
          "source": "src/Network-Curlhs-Types.html#CURLoption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_CUSTOMREQUEST",
          "package": "curlhs",
          "partial": "CURLOPT CUSTOMREQUEST",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLOPT_CUSTOMREQUEST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_DIRLISTONLY",
          "package": "curlhs",
          "signature": "CURLOPT_DIRLISTONLY Bool",
          "source": "src/Network-Curlhs-Types.html#CURLoption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_DIRLISTONLY",
          "package": "curlhs",
          "partial": "CURLOPT DIRLISTONLY",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLOPT_DIRLISTONLY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_DNS_CACHE_TIMEOUT",
          "package": "curlhs",
          "signature": "CURLOPT_DNS_CACHE_TIMEOUT Int",
          "source": "src/Network-Curlhs-Types.html#CURLoption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_DNS_CACHE_TIMEOUT",
          "package": "curlhs",
          "partial": "CURLOPT DNS CACHE TIMEOUT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLOPT_DNS_CACHE_TIMEOUT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_DNS_SERVERS",
          "package": "curlhs",
          "signature": "CURLOPT_DNS_SERVERS ByteString",
          "source": "src/Network-Curlhs-Types.html#CURLoption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_DNS_SERVERS",
          "package": "curlhs",
          "partial": "CURLOPT DNS SERVERS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLOPT_DNS_SERVERS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_DNS_USE_GLOBAL_CACHE",
          "package": "curlhs",
          "signature": "CURLOPT_DNS_USE_GLOBAL_CACHE Bool",
          "source": "src/Network-Curlhs-Types.html#CURLoption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_DNS_USE_GLOBAL_CACHE",
          "package": "curlhs",
          "partial": "CURLOPT DNS USE GLOBAL CACHE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLOPT_DNS_USE_GLOBAL_CACHE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_EGDSOCKET",
          "package": "curlhs",
          "signature": "CURLOPT_EGDSOCKET ByteString",
          "source": "src/Network-Curlhs-Types.html#CURLoption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_EGDSOCKET",
          "package": "curlhs",
          "partial": "CURLOPT EGDSOCKET",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLOPT_EGDSOCKET"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_FAILONERROR",
          "package": "curlhs",
          "signature": "CURLOPT_FAILONERROR Bool",
          "source": "src/Network-Curlhs-Types.html#CURLoption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_FAILONERROR",
          "package": "curlhs",
          "partial": "CURLOPT FAILONERROR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLOPT_FAILONERROR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_FILETIME",
          "package": "curlhs",
          "signature": "CURLOPT_FILETIME Bool",
          "source": "src/Network-Curlhs-Types.html#CURLoption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_FILETIME",
          "package": "curlhs",
          "partial": "CURLOPT FILETIME",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLOPT_FILETIME"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_FOLLOWLOCATION",
          "package": "curlhs",
          "signature": "CURLOPT_FOLLOWLOCATION Bool",
          "source": "src/Network-Curlhs-Types.html#CURLoption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_FOLLOWLOCATION",
          "package": "curlhs",
          "partial": "CURLOPT FOLLOWLOCATION",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLOPT_FOLLOWLOCATION"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_FORBID_REUSE",
          "package": "curlhs",
          "signature": "CURLOPT_FORBID_REUSE Bool",
          "source": "src/Network-Curlhs-Types.html#CURLoption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_FORBID_REUSE",
          "package": "curlhs",
          "partial": "CURLOPT FORBID REUSE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLOPT_FORBID_REUSE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_FRESH_CONNECT",
          "package": "curlhs",
          "signature": "CURLOPT_FRESH_CONNECT Bool",
          "source": "src/Network-Curlhs-Types.html#CURLoption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_FRESH_CONNECT",
          "package": "curlhs",
          "partial": "CURLOPT FRESH CONNECT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLOPT_FRESH_CONNECT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_FTPPORT",
          "package": "curlhs",
          "signature": "CURLOPT_FTPPORT ByteString",
          "source": "src/Network-Curlhs-Types.html#CURLoption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_FTPPORT",
          "package": "curlhs",
          "partial": "CURLOPT FTPPORT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLOPT_FTPPORT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_FTPSSLAUTH",
          "package": "curlhs",
          "signature": "CURLOPT_FTPSSLAUTH CURLftpauth",
          "source": "src/Network-Curlhs-Types.html#CURLoption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_FTPSSLAUTH",
          "package": "curlhs",
          "partial": "CURLOPT FTPSSLAUTH",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLOPT_FTPSSLAUTH"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_FTP_ACCOUNT",
          "package": "curlhs",
          "signature": "CURLOPT_FTP_ACCOUNT ByteString",
          "source": "src/Network-Curlhs-Types.html#CURLoption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_FTP_ACCOUNT",
          "package": "curlhs",
          "partial": "CURLOPT FTP ACCOUNT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLOPT_FTP_ACCOUNT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_FTP_ALTERNATIVE_TO_USER",
          "package": "curlhs",
          "signature": "CURLOPT_FTP_ALTERNATIVE_TO_USER ByteString",
          "source": "src/Network-Curlhs-Types.html#CURLoption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_FTP_ALTERNATIVE_TO_USER",
          "package": "curlhs",
          "partial": "CURLOPT FTP ALTERNATIVE TO USER",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLOPT_FTP_ALTERNATIVE_TO_USER"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_FTP_CREATE_MISSING_DIRS",
          "package": "curlhs",
          "signature": "CURLOPT_FTP_CREATE_MISSING_DIRS CURLftpcreate",
          "source": "src/Network-Curlhs-Types.html#CURLoption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_FTP_CREATE_MISSING_DIRS",
          "package": "curlhs",
          "partial": "CURLOPT FTP CREATE MISSING DIRS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLOPT_FTP_CREATE_MISSING_DIRS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_FTP_FILEMETHOD",
          "package": "curlhs",
          "signature": "CURLOPT_FTP_FILEMETHOD CURLftpmethod",
          "source": "src/Network-Curlhs-Types.html#CURLoption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_FTP_FILEMETHOD",
          "package": "curlhs",
          "partial": "CURLOPT FTP FILEMETHOD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLOPT_FTP_FILEMETHOD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_FTP_RESPONSE_TIMEOUT",
          "package": "curlhs",
          "signature": "CURLOPT_FTP_RESPONSE_TIMEOUT Int",
          "source": "src/Network-Curlhs-Types.html#CURLoption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_FTP_RESPONSE_TIMEOUT",
          "package": "curlhs",
          "partial": "CURLOPT FTP RESPONSE TIMEOUT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLOPT_FTP_RESPONSE_TIMEOUT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_FTP_SKIP_PASV_IP",
          "package": "curlhs",
          "signature": "CURLOPT_FTP_SKIP_PASV_IP Bool",
          "source": "src/Network-Curlhs-Types.html#CURLoption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_FTP_SKIP_PASV_IP",
          "package": "curlhs",
          "partial": "CURLOPT FTP SKIP PASV IP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLOPT_FTP_SKIP_PASV_IP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_FTP_SSL_CCC",
          "package": "curlhs",
          "signature": "CURLOPT_FTP_SSL_CCC CURLftpssl",
          "source": "src/Network-Curlhs-Types.html#CURLoption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_FTP_SSL_CCC",
          "package": "curlhs",
          "partial": "CURLOPT FTP SSL CCC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLOPT_FTP_SSL_CCC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_FTP_USE_EPRT",
          "package": "curlhs",
          "signature": "CURLOPT_FTP_USE_EPRT Bool",
          "source": "src/Network-Curlhs-Types.html#CURLoption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_FTP_USE_EPRT",
          "package": "curlhs",
          "partial": "CURLOPT FTP USE EPRT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLOPT_FTP_USE_EPRT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_FTP_USE_EPSV",
          "package": "curlhs",
          "signature": "CURLOPT_FTP_USE_EPSV Bool",
          "source": "src/Network-Curlhs-Types.html#CURLoption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_FTP_USE_EPSV",
          "package": "curlhs",
          "partial": "CURLOPT FTP USE EPSV",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLOPT_FTP_USE_EPSV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_FTP_USE_PRET",
          "package": "curlhs",
          "signature": "CURLOPT_FTP_USE_PRET Bool",
          "source": "src/Network-Curlhs-Types.html#CURLoption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_FTP_USE_PRET",
          "package": "curlhs",
          "partial": "CURLOPT FTP USE PRET",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLOPT_FTP_USE_PRET"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_GSSAPI_DELEGATION",
          "package": "curlhs",
          "signature": "CURLOPT_GSSAPI_DELEGATION CURLgssapi",
          "source": "src/Network-Curlhs-Types.html#CURLoption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_GSSAPI_DELEGATION",
          "package": "curlhs",
          "partial": "CURLOPT GSSAPI DELEGATION",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLOPT_GSSAPI_DELEGATION"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_HEADER",
          "package": "curlhs",
          "signature": "CURLOPT_HEADER Bool",
          "source": "src/Network-Curlhs-Types.html#CURLoption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_HEADER",
          "package": "curlhs",
          "partial": "CURLOPT HEADER",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLOPT_HEADER"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_HTTPAUTH",
          "package": "curlhs",
          "signature": "CURLOPT_HTTPAUTH [CURLauth]",
          "source": "src/Network-Curlhs-Types.html#CURLoption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_HTTPAUTH",
          "normalized": "CURLOPT_HTTPAUTH[CURLauth]",
          "package": "curlhs",
          "partial": "CURLOPT HTTPAUTH",
          "signature": "CURLOPT_HTTPAUTH[CURLauth]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLOPT_HTTPAUTH"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_HTTPGET",
          "package": "curlhs",
          "signature": "CURLOPT_HTTPGET Bool",
          "source": "src/Network-Curlhs-Types.html#CURLoption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_HTTPGET",
          "package": "curlhs",
          "partial": "CURLOPT HTTPGET",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLOPT_HTTPGET"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_HTTPPROXYTUNNEL",
          "package": "curlhs",
          "signature": "CURLOPT_HTTPPROXYTUNNEL Bool",
          "source": "src/Network-Curlhs-Types.html#CURLoption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_HTTPPROXYTUNNEL",
          "package": "curlhs",
          "partial": "CURLOPT HTTPPROXYTUNNEL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLOPT_HTTPPROXYTUNNEL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_HTTP_CONTENT_DECODING",
          "package": "curlhs",
          "signature": "CURLOPT_HTTP_CONTENT_DECODING Bool",
          "source": "src/Network-Curlhs-Types.html#CURLoption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_HTTP_CONTENT_DECODING",
          "package": "curlhs",
          "partial": "CURLOPT HTTP CONTENT DECODING",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLOPT_HTTP_CONTENT_DECODING"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_HTTP_TRANSFER_DECODING",
          "package": "curlhs",
          "signature": "CURLOPT_HTTP_TRANSFER_DECODING Bool",
          "source": "src/Network-Curlhs-Types.html#CURLoption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_HTTP_TRANSFER_DECODING",
          "package": "curlhs",
          "partial": "CURLOPT HTTP TRANSFER DECODING",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLOPT_HTTP_TRANSFER_DECODING"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_HTTP_VERSION",
          "package": "curlhs",
          "signature": "CURLOPT_HTTP_VERSION CURLhttpver",
          "source": "src/Network-Curlhs-Types.html#CURLoption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_HTTP_VERSION",
          "package": "curlhs",
          "partial": "CURLOPT HTTP VERSION",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLOPT_HTTP_VERSION"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_IGNORE_CONTENT_LENGTH",
          "package": "curlhs",
          "signature": "CURLOPT_IGNORE_CONTENT_LENGTH Bool",
          "source": "src/Network-Curlhs-Types.html#CURLoption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_IGNORE_CONTENT_LENGTH",
          "package": "curlhs",
          "partial": "CURLOPT IGNORE CONTENT LENGTH",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLOPT_IGNORE_CONTENT_LENGTH"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_INFILESIZE",
          "package": "curlhs",
          "signature": "CURLOPT_INFILESIZE Int",
          "source": "src/Network-Curlhs-Types.html#CURLoption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_INFILESIZE",
          "package": "curlhs",
          "partial": "CURLOPT INFILESIZE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLOPT_INFILESIZE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_INFILESIZE_LARGE",
          "package": "curlhs",
          "signature": "CURLOPT_INFILESIZE_LARGE Int64",
          "source": "src/Network-Curlhs-Types.html#CURLoption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_INFILESIZE_LARGE",
          "package": "curlhs",
          "partial": "CURLOPT INFILESIZE LARGE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLOPT_INFILESIZE_LARGE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_INTERFACE",
          "package": "curlhs",
          "signature": "CURLOPT_INTERFACE ByteString",
          "source": "src/Network-Curlhs-Types.html#CURLoption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_INTERFACE",
          "package": "curlhs",
          "partial": "CURLOPT INTERFACE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLOPT_INTERFACE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_IPRESOLVE",
          "package": "curlhs",
          "signature": "CURLOPT_IPRESOLVE CURLipresolve",
          "source": "src/Network-Curlhs-Types.html#CURLoption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_IPRESOLVE",
          "package": "curlhs",
          "partial": "CURLOPT IPRESOLVE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLOPT_IPRESOLVE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_ISSUERCERT",
          "package": "curlhs",
          "signature": "CURLOPT_ISSUERCERT ByteString",
          "source": "src/Network-Curlhs-Types.html#CURLoption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_ISSUERCERT",
          "package": "curlhs",
          "partial": "CURLOPT ISSUERCERT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLOPT_ISSUERCERT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_KEYPASSWD",
          "package": "curlhs",
          "signature": "CURLOPT_KEYPASSWD ByteString",
          "source": "src/Network-Curlhs-Types.html#CURLoption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_KEYPASSWD",
          "package": "curlhs",
          "partial": "CURLOPT KEYPASSWD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLOPT_KEYPASSWD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_KRBLEVEL",
          "package": "curlhs",
          "signature": "CURLOPT_KRBLEVEL ByteString",
          "source": "src/Network-Curlhs-Types.html#CURLoption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_KRBLEVEL",
          "package": "curlhs",
          "partial": "CURLOPT KRBLEVEL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLOPT_KRBLEVEL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_LOCALPORT",
          "package": "curlhs",
          "signature": "CURLOPT_LOCALPORT Int",
          "source": "src/Network-Curlhs-Types.html#CURLoption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_LOCALPORT",
          "package": "curlhs",
          "partial": "CURLOPT LOCALPORT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLOPT_LOCALPORT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_LOCALPORTRANGE",
          "package": "curlhs",
          "signature": "CURLOPT_LOCALPORTRANGE Int",
          "source": "src/Network-Curlhs-Types.html#CURLoption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_LOCALPORTRANGE",
          "package": "curlhs",
          "partial": "CURLOPT LOCALPORTRANGE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLOPT_LOCALPORTRANGE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_LOW_SPEED_LIMIT",
          "package": "curlhs",
          "signature": "CURLOPT_LOW_SPEED_LIMIT Int",
          "source": "src/Network-Curlhs-Types.html#CURLoption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_LOW_SPEED_LIMIT",
          "package": "curlhs",
          "partial": "CURLOPT LOW SPEED LIMIT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLOPT_LOW_SPEED_LIMIT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_LOW_SPEED_TIME",
          "package": "curlhs",
          "signature": "CURLOPT_LOW_SPEED_TIME Int",
          "source": "src/Network-Curlhs-Types.html#CURLoption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_LOW_SPEED_TIME",
          "package": "curlhs",
          "partial": "CURLOPT LOW SPEED TIME",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLOPT_LOW_SPEED_TIME"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_MAIL_AUTH",
          "package": "curlhs",
          "signature": "CURLOPT_MAIL_AUTH ByteString",
          "source": "src/Network-Curlhs-Types.html#CURLoption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_MAIL_AUTH",
          "package": "curlhs",
          "partial": "CURLOPT MAIL AUTH",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLOPT_MAIL_AUTH"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_MAIL_FROM",
          "package": "curlhs",
          "signature": "CURLOPT_MAIL_FROM ByteString",
          "source": "src/Network-Curlhs-Types.html#CURLoption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_MAIL_FROM",
          "package": "curlhs",
          "partial": "CURLOPT MAIL FROM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLOPT_MAIL_FROM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_MAXCONNECTS",
          "package": "curlhs",
          "signature": "CURLOPT_MAXCONNECTS Int",
          "source": "src/Network-Curlhs-Types.html#CURLoption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_MAXCONNECTS",
          "package": "curlhs",
          "partial": "CURLOPT MAXCONNECTS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLOPT_MAXCONNECTS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_MAXFILESIZE",
          "package": "curlhs",
          "signature": "CURLOPT_MAXFILESIZE Int",
          "source": "src/Network-Curlhs-Types.html#CURLoption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_MAXFILESIZE",
          "package": "curlhs",
          "partial": "CURLOPT MAXFILESIZE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLOPT_MAXFILESIZE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_MAXFILESIZE_LARGE",
          "package": "curlhs",
          "signature": "CURLOPT_MAXFILESIZE_LARGE Int64",
          "source": "src/Network-Curlhs-Types.html#CURLoption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_MAXFILESIZE_LARGE",
          "package": "curlhs",
          "partial": "CURLOPT MAXFILESIZE LARGE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLOPT_MAXFILESIZE_LARGE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_MAXREDIRS",
          "package": "curlhs",
          "signature": "CURLOPT_MAXREDIRS Int",
          "source": "src/Network-Curlhs-Types.html#CURLoption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_MAXREDIRS",
          "package": "curlhs",
          "partial": "CURLOPT MAXREDIRS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLOPT_MAXREDIRS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_MAX_RECV_SPEED_LARGE",
          "package": "curlhs",
          "signature": "CURLOPT_MAX_RECV_SPEED_LARGE Int64",
          "source": "src/Network-Curlhs-Types.html#CURLoption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_MAX_RECV_SPEED_LARGE",
          "package": "curlhs",
          "partial": "CURLOPT MAX RECV SPEED LARGE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLOPT_MAX_RECV_SPEED_LARGE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_MAX_SEND_SPEED_LARGE",
          "package": "curlhs",
          "signature": "CURLOPT_MAX_SEND_SPEED_LARGE Int64",
          "source": "src/Network-Curlhs-Types.html#CURLoption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_MAX_SEND_SPEED_LARGE",
          "package": "curlhs",
          "partial": "CURLOPT MAX SEND SPEED LARGE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLOPT_MAX_SEND_SPEED_LARGE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_NETRC",
          "package": "curlhs",
          "signature": "CURLOPT_NETRC CURLnetrc",
          "source": "src/Network-Curlhs-Types.html#CURLoption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_NETRC",
          "package": "curlhs",
          "partial": "CURLOPT NETRC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLOPT_NETRC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_NETRC_FILE",
          "package": "curlhs",
          "signature": "CURLOPT_NETRC_FILE ByteString",
          "source": "src/Network-Curlhs-Types.html#CURLoption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_NETRC_FILE",
          "package": "curlhs",
          "partial": "CURLOPT NETRC FILE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLOPT_NETRC_FILE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_NEW_DIRECTORY_PERMS",
          "package": "curlhs",
          "signature": "CURLOPT_NEW_DIRECTORY_PERMS Int",
          "source": "src/Network-Curlhs-Types.html#CURLoption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_NEW_DIRECTORY_PERMS",
          "package": "curlhs",
          "partial": "CURLOPT NEW DIRECTORY PERMS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLOPT_NEW_DIRECTORY_PERMS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_NEW_FILE_PERMS",
          "package": "curlhs",
          "signature": "CURLOPT_NEW_FILE_PERMS Int",
          "source": "src/Network-Curlhs-Types.html#CURLoption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_NEW_FILE_PERMS",
          "package": "curlhs",
          "partial": "CURLOPT NEW FILE PERMS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLOPT_NEW_FILE_PERMS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_NOBODY",
          "package": "curlhs",
          "signature": "CURLOPT_NOBODY Bool",
          "source": "src/Network-Curlhs-Types.html#CURLoption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_NOBODY",
          "package": "curlhs",
          "partial": "CURLOPT NOBODY",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLOPT_NOBODY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_NOPROGRESS",
          "package": "curlhs",
          "signature": "CURLOPT_NOPROGRESS Bool",
          "source": "src/Network-Curlhs-Types.html#CURLoption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_NOPROGRESS",
          "package": "curlhs",
          "partial": "CURLOPT NOPROGRESS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLOPT_NOPROGRESS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_NOPROXY",
          "package": "curlhs",
          "signature": "CURLOPT_NOPROXY ByteString",
          "source": "src/Network-Curlhs-Types.html#CURLoption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_NOPROXY",
          "package": "curlhs",
          "partial": "CURLOPT NOPROXY",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLOPT_NOPROXY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_NOSIGNAL",
          "package": "curlhs",
          "signature": "CURLOPT_NOSIGNAL Bool",
          "source": "src/Network-Curlhs-Types.html#CURLoption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_NOSIGNAL",
          "package": "curlhs",
          "partial": "CURLOPT NOSIGNAL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLOPT_NOSIGNAL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_PASSWORD",
          "package": "curlhs",
          "signature": "CURLOPT_PASSWORD ByteString",
          "source": "src/Network-Curlhs-Types.html#CURLoption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_PASSWORD",
          "package": "curlhs",
          "partial": "CURLOPT PASSWORD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLOPT_PASSWORD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_PORT",
          "package": "curlhs",
          "signature": "CURLOPT_PORT Int",
          "source": "src/Network-Curlhs-Types.html#CURLoption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_PORT",
          "package": "curlhs",
          "partial": "CURLOPT PORT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLOPT_PORT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_POST",
          "package": "curlhs",
          "signature": "CURLOPT_POST Bool",
          "source": "src/Network-Curlhs-Types.html#CURLoption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_POST",
          "package": "curlhs",
          "partial": "CURLOPT POST",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLOPT_POST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_POSTFIELDSIZE",
          "package": "curlhs",
          "signature": "CURLOPT_POSTFIELDSIZE Int",
          "source": "src/Network-Curlhs-Types.html#CURLoption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_POSTFIELDSIZE",
          "package": "curlhs",
          "partial": "CURLOPT POSTFIELDSIZE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLOPT_POSTFIELDSIZE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_POSTFIELDSIZE_LARGE",
          "package": "curlhs",
          "signature": "CURLOPT_POSTFIELDSIZE_LARGE Int64",
          "source": "src/Network-Curlhs-Types.html#CURLoption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_POSTFIELDSIZE_LARGE",
          "package": "curlhs",
          "partial": "CURLOPT POSTFIELDSIZE LARGE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLOPT_POSTFIELDSIZE_LARGE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_POSTREDIR",
          "package": "curlhs",
          "signature": "CURLOPT_POSTREDIR [CURLredir]",
          "source": "src/Network-Curlhs-Types.html#CURLoption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_POSTREDIR",
          "normalized": "CURLOPT_POSTREDIR[CURLredir]",
          "package": "curlhs",
          "partial": "CURLOPT POSTREDIR",
          "signature": "CURLOPT_POSTREDIR[CURLredir]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLOPT_POSTREDIR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_PROTOCOLS",
          "package": "curlhs",
          "signature": "CURLOPT_PROTOCOLS [CURLproto]",
          "source": "src/Network-Curlhs-Types.html#CURLoption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_PROTOCOLS",
          "normalized": "CURLOPT_PROTOCOLS[CURLproto]",
          "package": "curlhs",
          "partial": "CURLOPT PROTOCOLS",
          "signature": "CURLOPT_PROTOCOLS[CURLproto]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLOPT_PROTOCOLS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_PROXY",
          "package": "curlhs",
          "signature": "CURLOPT_PROXY ByteString",
          "source": "src/Network-Curlhs-Types.html#CURLoption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_PROXY",
          "package": "curlhs",
          "partial": "CURLOPT PROXY",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLOPT_PROXY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_PROXYAUTH",
          "package": "curlhs",
          "signature": "CURLOPT_PROXYAUTH [CURLauth]",
          "source": "src/Network-Curlhs-Types.html#CURLoption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_PROXYAUTH",
          "normalized": "CURLOPT_PROXYAUTH[CURLauth]",
          "package": "curlhs",
          "partial": "CURLOPT PROXYAUTH",
          "signature": "CURLOPT_PROXYAUTH[CURLauth]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLOPT_PROXYAUTH"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_PROXYPASSWORD",
          "package": "curlhs",
          "signature": "CURLOPT_PROXYPASSWORD ByteString",
          "source": "src/Network-Curlhs-Types.html#CURLoption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_PROXYPASSWORD",
          "package": "curlhs",
          "partial": "CURLOPT PROXYPASSWORD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLOPT_PROXYPASSWORD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_PROXYPORT",
          "package": "curlhs",
          "signature": "CURLOPT_PROXYPORT Int",
          "source": "src/Network-Curlhs-Types.html#CURLoption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_PROXYPORT",
          "package": "curlhs",
          "partial": "CURLOPT PROXYPORT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLOPT_PROXYPORT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_PROXYTYPE",
          "package": "curlhs",
          "signature": "CURLOPT_PROXYTYPE CURLproxy",
          "source": "src/Network-Curlhs-Types.html#CURLoption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_PROXYTYPE",
          "package": "curlhs",
          "partial": "CURLOPT PROXYTYPE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLOPT_PROXYTYPE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_PROXYUSERNAME",
          "package": "curlhs",
          "signature": "CURLOPT_PROXYUSERNAME ByteString",
          "source": "src/Network-Curlhs-Types.html#CURLoption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_PROXYUSERNAME",
          "package": "curlhs",
          "partial": "CURLOPT PROXYUSERNAME",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLOPT_PROXYUSERNAME"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_PROXYUSERPWD",
          "package": "curlhs",
          "signature": "CURLOPT_PROXYUSERPWD ByteString",
          "source": "src/Network-Curlhs-Types.html#CURLoption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_PROXYUSERPWD",
          "package": "curlhs",
          "partial": "CURLOPT PROXYUSERPWD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLOPT_PROXYUSERPWD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_PROXY_TRANSFER_MODE",
          "package": "curlhs",
          "signature": "CURLOPT_PROXY_TRANSFER_MODE Bool",
          "source": "src/Network-Curlhs-Types.html#CURLoption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_PROXY_TRANSFER_MODE",
          "package": "curlhs",
          "partial": "CURLOPT PROXY TRANSFER MODE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLOPT_PROXY_TRANSFER_MODE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_PUT",
          "package": "curlhs",
          "signature": "CURLOPT_PUT Bool",
          "source": "src/Network-Curlhs-Types.html#CURLoption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_PUT",
          "package": "curlhs",
          "partial": "CURLOPT PUT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLOPT_PUT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_RANDOM_FILE",
          "package": "curlhs",
          "signature": "CURLOPT_RANDOM_FILE ByteString",
          "source": "src/Network-Curlhs-Types.html#CURLoption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_RANDOM_FILE",
          "package": "curlhs",
          "partial": "CURLOPT RANDOM FILE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLOPT_RANDOM_FILE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_RANGE",
          "package": "curlhs",
          "signature": "CURLOPT_RANGE ByteString",
          "source": "src/Network-Curlhs-Types.html#CURLoption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_RANGE",
          "package": "curlhs",
          "partial": "CURLOPT RANGE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLOPT_RANGE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_READFUNCTION",
          "package": "curlhs",
          "signature": "CURLOPT_READFUNCTION (Maybe CURL_read_callback)",
          "source": "src/Network-Curlhs-Types.html#CURLoption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_READFUNCTION",
          "package": "curlhs",
          "partial": "CURLOPT READFUNCTION",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLOPT_READFUNCTION"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_REDIR_PROTOCOLS",
          "package": "curlhs",
          "signature": "CURLOPT_REDIR_PROTOCOLS [CURLproto]",
          "source": "src/Network-Curlhs-Types.html#CURLoption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_REDIR_PROTOCOLS",
          "normalized": "CURLOPT_REDIR_PROTOCOLS[CURLproto]",
          "package": "curlhs",
          "partial": "CURLOPT REDIR PROTOCOLS",
          "signature": "CURLOPT_REDIR_PROTOCOLS[CURLproto]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLOPT_REDIR_PROTOCOLS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_REFERER",
          "package": "curlhs",
          "signature": "CURLOPT_REFERER ByteString",
          "source": "src/Network-Curlhs-Types.html#CURLoption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_REFERER",
          "package": "curlhs",
          "partial": "CURLOPT REFERER",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLOPT_REFERER"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_RESUME_FROM",
          "package": "curlhs",
          "signature": "CURLOPT_RESUME_FROM Int",
          "source": "src/Network-Curlhs-Types.html#CURLoption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_RESUME_FROM",
          "package": "curlhs",
          "partial": "CURLOPT RESUME FROM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLOPT_RESUME_FROM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_RESUME_FROM_LARGE",
          "package": "curlhs",
          "signature": "CURLOPT_RESUME_FROM_LARGE Int64",
          "source": "src/Network-Curlhs-Types.html#CURLoption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_RESUME_FROM_LARGE",
          "package": "curlhs",
          "partial": "CURLOPT RESUME FROM LARGE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLOPT_RESUME_FROM_LARGE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_RTSP_CLIENT_CSEQ",
          "package": "curlhs",
          "signature": "CURLOPT_RTSP_CLIENT_CSEQ Int",
          "source": "src/Network-Curlhs-Types.html#CURLoption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_RTSP_CLIENT_CSEQ",
          "package": "curlhs",
          "partial": "CURLOPT RTSP CLIENT CSEQ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLOPT_RTSP_CLIENT_CSEQ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_RTSP_REQUEST",
          "package": "curlhs",
          "signature": "CURLOPT_RTSP_REQUEST CURLrtspreq",
          "source": "src/Network-Curlhs-Types.html#CURLoption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_RTSP_REQUEST",
          "package": "curlhs",
          "partial": "CURLOPT RTSP REQUEST",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLOPT_RTSP_REQUEST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_RTSP_SERVER_CSEQ",
          "package": "curlhs",
          "signature": "CURLOPT_RTSP_SERVER_CSEQ Int",
          "source": "src/Network-Curlhs-Types.html#CURLoption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_RTSP_SERVER_CSEQ",
          "package": "curlhs",
          "partial": "CURLOPT RTSP SERVER CSEQ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLOPT_RTSP_SERVER_CSEQ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_RTSP_SESSION_ID",
          "package": "curlhs",
          "signature": "CURLOPT_RTSP_SESSION_ID ByteString",
          "source": "src/Network-Curlhs-Types.html#CURLoption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_RTSP_SESSION_ID",
          "package": "curlhs",
          "partial": "CURLOPT RTSP SESSION ID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLOPT_RTSP_SESSION_ID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_RTSP_STREAM_URI",
          "package": "curlhs",
          "signature": "CURLOPT_RTSP_STREAM_URI ByteString",
          "source": "src/Network-Curlhs-Types.html#CURLoption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_RTSP_STREAM_URI",
          "package": "curlhs",
          "partial": "CURLOPT RTSP STREAM URI",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLOPT_RTSP_STREAM_URI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_RTSP_TRANSPORT",
          "package": "curlhs",
          "signature": "CURLOPT_RTSP_TRANSPORT ByteString",
          "source": "src/Network-Curlhs-Types.html#CURLoption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_RTSP_TRANSPORT",
          "package": "curlhs",
          "partial": "CURLOPT RTSP TRANSPORT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLOPT_RTSP_TRANSPORT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_SOCKS5_GSSAPI_NEC",
          "package": "curlhs",
          "signature": "CURLOPT_SOCKS5_GSSAPI_NEC Bool",
          "source": "src/Network-Curlhs-Types.html#CURLoption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_SOCKS5_GSSAPI_NEC",
          "package": "curlhs",
          "partial": "CURLOPT SOCKS GSSAPI NEC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLOPT_SOCKS5_GSSAPI_NEC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_SOCKS5_GSSAPI_SERVICE",
          "package": "curlhs",
          "signature": "CURLOPT_SOCKS5_GSSAPI_SERVICE ByteString",
          "source": "src/Network-Curlhs-Types.html#CURLoption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_SOCKS5_GSSAPI_SERVICE",
          "package": "curlhs",
          "partial": "CURLOPT SOCKS GSSAPI SERVICE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLOPT_SOCKS5_GSSAPI_SERVICE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_SSH_AUTH_TYPES",
          "package": "curlhs",
          "signature": "CURLOPT_SSH_AUTH_TYPES [CURLsshauth]",
          "source": "src/Network-Curlhs-Types.html#CURLoption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_SSH_AUTH_TYPES",
          "normalized": "CURLOPT_SSH_AUTH_TYPES[CURLsshauth]",
          "package": "curlhs",
          "partial": "CURLOPT SSH AUTH TYPES",
          "signature": "CURLOPT_SSH_AUTH_TYPES[CURLsshauth]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLOPT_SSH_AUTH_TYPES"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_SSH_HOST_PUBLIC_KEY_MD5",
          "package": "curlhs",
          "signature": "CURLOPT_SSH_HOST_PUBLIC_KEY_MD5 ByteString",
          "source": "src/Network-Curlhs-Types.html#CURLoption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_SSH_HOST_PUBLIC_KEY_MD5",
          "package": "curlhs",
          "partial": "CURLOPT SSH HOST PUBLIC KEY MD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLOPT_SSH_HOST_PUBLIC_KEY_MD5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_SSH_KNOWNHOSTS",
          "package": "curlhs",
          "signature": "CURLOPT_SSH_KNOWNHOSTS ByteString",
          "source": "src/Network-Curlhs-Types.html#CURLoption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_SSH_KNOWNHOSTS",
          "package": "curlhs",
          "partial": "CURLOPT SSH KNOWNHOSTS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLOPT_SSH_KNOWNHOSTS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_SSH_PRIVATE_KEYFILE",
          "package": "curlhs",
          "signature": "CURLOPT_SSH_PRIVATE_KEYFILE ByteString",
          "source": "src/Network-Curlhs-Types.html#CURLoption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_SSH_PRIVATE_KEYFILE",
          "package": "curlhs",
          "partial": "CURLOPT SSH PRIVATE KEYFILE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLOPT_SSH_PRIVATE_KEYFILE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_SSH_PUBLIC_KEYFILE",
          "package": "curlhs",
          "signature": "CURLOPT_SSH_PUBLIC_KEYFILE ByteString",
          "source": "src/Network-Curlhs-Types.html#CURLoption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_SSH_PUBLIC_KEYFILE",
          "package": "curlhs",
          "partial": "CURLOPT SSH PUBLIC KEYFILE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLOPT_SSH_PUBLIC_KEYFILE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_SSLCERT",
          "package": "curlhs",
          "signature": "CURLOPT_SSLCERT ByteString",
          "source": "src/Network-Curlhs-Types.html#CURLoption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_SSLCERT",
          "package": "curlhs",
          "partial": "CURLOPT SSLCERT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLOPT_SSLCERT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_SSLCERTTYPE",
          "package": "curlhs",
          "signature": "CURLOPT_SSLCERTTYPE ByteString",
          "source": "src/Network-Curlhs-Types.html#CURLoption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_SSLCERTTYPE",
          "package": "curlhs",
          "partial": "CURLOPT SSLCERTTYPE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLOPT_SSLCERTTYPE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_SSLENGINE",
          "package": "curlhs",
          "signature": "CURLOPT_SSLENGINE ByteString",
          "source": "src/Network-Curlhs-Types.html#CURLoption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_SSLENGINE",
          "package": "curlhs",
          "partial": "CURLOPT SSLENGINE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLOPT_SSLENGINE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_SSLENGINE_DEFAULT",
          "package": "curlhs",
          "signature": "CURLOPT_SSLENGINE_DEFAULT Bool",
          "source": "src/Network-Curlhs-Types.html#CURLoption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_SSLENGINE_DEFAULT",
          "package": "curlhs",
          "partial": "CURLOPT SSLENGINE DEFAULT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLOPT_SSLENGINE_DEFAULT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_SSLKEY",
          "package": "curlhs",
          "signature": "CURLOPT_SSLKEY ByteString",
          "source": "src/Network-Curlhs-Types.html#CURLoption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_SSLKEY",
          "package": "curlhs",
          "partial": "CURLOPT SSLKEY",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLOPT_SSLKEY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_SSLKEYTYPE",
          "package": "curlhs",
          "signature": "CURLOPT_SSLKEYTYPE ByteString",
          "source": "src/Network-Curlhs-Types.html#CURLoption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_SSLKEYTYPE",
          "package": "curlhs",
          "partial": "CURLOPT SSLKEYTYPE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLOPT_SSLKEYTYPE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_SSLVERSION",
          "package": "curlhs",
          "signature": "CURLOPT_SSLVERSION CURLsslver",
          "source": "src/Network-Curlhs-Types.html#CURLoption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_SSLVERSION",
          "package": "curlhs",
          "partial": "CURLOPT SSLVERSION",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLOPT_SSLVERSION"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_SSL_CIPHER_LIST",
          "package": "curlhs",
          "signature": "CURLOPT_SSL_CIPHER_LIST ByteString",
          "source": "src/Network-Curlhs-Types.html#CURLoption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_SSL_CIPHER_LIST",
          "package": "curlhs",
          "partial": "CURLOPT SSL CIPHER LIST",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLOPT_SSL_CIPHER_LIST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_SSL_OPTIONS",
          "package": "curlhs",
          "signature": "CURLOPT_SSL_OPTIONS CURLsslopt",
          "source": "src/Network-Curlhs-Types.html#CURLoption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_SSL_OPTIONS",
          "package": "curlhs",
          "partial": "CURLOPT SSL OPTIONS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLOPT_SSL_OPTIONS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_SSL_SESSIONID_CACHE",
          "package": "curlhs",
          "signature": "CURLOPT_SSL_SESSIONID_CACHE Bool",
          "source": "src/Network-Curlhs-Types.html#CURLoption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_SSL_SESSIONID_CACHE",
          "package": "curlhs",
          "partial": "CURLOPT SSL SESSIONID CACHE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLOPT_SSL_SESSIONID_CACHE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_SSL_VERIFYHOST",
          "package": "curlhs",
          "signature": "CURLOPT_SSL_VERIFYHOST Int",
          "source": "src/Network-Curlhs-Types.html#CURLoption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_SSL_VERIFYHOST",
          "package": "curlhs",
          "partial": "CURLOPT SSL VERIFYHOST",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLOPT_SSL_VERIFYHOST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_SSL_VERIFYPEER",
          "package": "curlhs",
          "signature": "CURLOPT_SSL_VERIFYPEER Bool",
          "source": "src/Network-Curlhs-Types.html#CURLoption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_SSL_VERIFYPEER",
          "package": "curlhs",
          "partial": "CURLOPT SSL VERIFYPEER",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLOPT_SSL_VERIFYPEER"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_TCP_KEEPALIVE",
          "package": "curlhs",
          "signature": "CURLOPT_TCP_KEEPALIVE Bool",
          "source": "src/Network-Curlhs-Types.html#CURLoption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_TCP_KEEPALIVE",
          "package": "curlhs",
          "partial": "CURLOPT TCP KEEPALIVE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLOPT_TCP_KEEPALIVE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_TCP_KEEPIDLE",
          "package": "curlhs",
          "signature": "CURLOPT_TCP_KEEPIDLE Int",
          "source": "src/Network-Curlhs-Types.html#CURLoption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_TCP_KEEPIDLE",
          "package": "curlhs",
          "partial": "CURLOPT TCP KEEPIDLE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLOPT_TCP_KEEPIDLE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_TCP_KEEPINTVL",
          "package": "curlhs",
          "signature": "CURLOPT_TCP_KEEPINTVL Int",
          "source": "src/Network-Curlhs-Types.html#CURLoption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_TCP_KEEPINTVL",
          "package": "curlhs",
          "partial": "CURLOPT TCP KEEPINTVL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLOPT_TCP_KEEPINTVL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_TCP_NODELAY",
          "package": "curlhs",
          "signature": "CURLOPT_TCP_NODELAY Bool",
          "source": "src/Network-Curlhs-Types.html#CURLoption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_TCP_NODELAY",
          "package": "curlhs",
          "partial": "CURLOPT TCP NODELAY",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLOPT_TCP_NODELAY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_TFTP_BLKSIZE",
          "package": "curlhs",
          "signature": "CURLOPT_TFTP_BLKSIZE Int",
          "source": "src/Network-Curlhs-Types.html#CURLoption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_TFTP_BLKSIZE",
          "package": "curlhs",
          "partial": "CURLOPT TFTP BLKSIZE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLOPT_TFTP_BLKSIZE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_TIMECONDITION",
          "package": "curlhs",
          "signature": "CURLOPT_TIMECONDITION CURLtimecond",
          "source": "src/Network-Curlhs-Types.html#CURLoption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_TIMECONDITION",
          "package": "curlhs",
          "partial": "CURLOPT TIMECONDITION",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLOPT_TIMECONDITION"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_TIMEOUT",
          "package": "curlhs",
          "signature": "CURLOPT_TIMEOUT Int",
          "source": "src/Network-Curlhs-Types.html#CURLoption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_TIMEOUT",
          "package": "curlhs",
          "partial": "CURLOPT TIMEOUT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLOPT_TIMEOUT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_TIMEOUT_MS",
          "package": "curlhs",
          "signature": "CURLOPT_TIMEOUT_MS Int",
          "source": "src/Network-Curlhs-Types.html#CURLoption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_TIMEOUT_MS",
          "package": "curlhs",
          "partial": "CURLOPT TIMEOUT MS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLOPT_TIMEOUT_MS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_TIMEVALUE",
          "package": "curlhs",
          "signature": "CURLOPT_TIMEVALUE UTCTime",
          "source": "src/Network-Curlhs-Types.html#CURLoption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_TIMEVALUE",
          "package": "curlhs",
          "partial": "CURLOPT TIMEVALUE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLOPT_TIMEVALUE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_TLSAUTH_PASSWORD",
          "package": "curlhs",
          "signature": "CURLOPT_TLSAUTH_PASSWORD ByteString",
          "source": "src/Network-Curlhs-Types.html#CURLoption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_TLSAUTH_PASSWORD",
          "package": "curlhs",
          "partial": "CURLOPT TLSAUTH PASSWORD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLOPT_TLSAUTH_PASSWORD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_TLSAUTH_TYPE",
          "package": "curlhs",
          "signature": "CURLOPT_TLSAUTH_TYPE ByteString",
          "source": "src/Network-Curlhs-Types.html#CURLoption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_TLSAUTH_TYPE",
          "package": "curlhs",
          "partial": "CURLOPT TLSAUTH TYPE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLOPT_TLSAUTH_TYPE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_TLSAUTH_USERNAME",
          "package": "curlhs",
          "signature": "CURLOPT_TLSAUTH_USERNAME ByteString",
          "source": "src/Network-Curlhs-Types.html#CURLoption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_TLSAUTH_USERNAME",
          "package": "curlhs",
          "partial": "CURLOPT TLSAUTH USERNAME",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLOPT_TLSAUTH_USERNAME"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_TRANSFERTEXT",
          "package": "curlhs",
          "signature": "CURLOPT_TRANSFERTEXT Bool",
          "source": "src/Network-Curlhs-Types.html#CURLoption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_TRANSFERTEXT",
          "package": "curlhs",
          "partial": "CURLOPT TRANSFERTEXT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLOPT_TRANSFERTEXT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_TRANSFER_ENCODING",
          "package": "curlhs",
          "signature": "CURLOPT_TRANSFER_ENCODING Bool",
          "source": "src/Network-Curlhs-Types.html#CURLoption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_TRANSFER_ENCODING",
          "package": "curlhs",
          "partial": "CURLOPT TRANSFER ENCODING",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLOPT_TRANSFER_ENCODING"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_UNRESTRICTED_AUTH",
          "package": "curlhs",
          "signature": "CURLOPT_UNRESTRICTED_AUTH Bool",
          "source": "src/Network-Curlhs-Types.html#CURLoption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_UNRESTRICTED_AUTH",
          "package": "curlhs",
          "partial": "CURLOPT UNRESTRICTED AUTH",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLOPT_UNRESTRICTED_AUTH"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_UPLOAD",
          "package": "curlhs",
          "signature": "CURLOPT_UPLOAD Bool",
          "source": "src/Network-Curlhs-Types.html#CURLoption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_UPLOAD",
          "package": "curlhs",
          "partial": "CURLOPT UPLOAD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLOPT_UPLOAD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_URL",
          "package": "curlhs",
          "signature": "CURLOPT_URL ByteString",
          "source": "src/Network-Curlhs-Types.html#CURLoption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_URL",
          "package": "curlhs",
          "partial": "CURLOPT URL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLOPT_URL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_USERAGENT",
          "package": "curlhs",
          "signature": "CURLOPT_USERAGENT ByteString",
          "source": "src/Network-Curlhs-Types.html#CURLoption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_USERAGENT",
          "package": "curlhs",
          "partial": "CURLOPT USERAGENT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLOPT_USERAGENT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_USERNAME",
          "package": "curlhs",
          "signature": "CURLOPT_USERNAME ByteString",
          "source": "src/Network-Curlhs-Types.html#CURLoption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_USERNAME",
          "package": "curlhs",
          "partial": "CURLOPT USERNAME",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLOPT_USERNAME"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_USERPWD",
          "package": "curlhs",
          "signature": "CURLOPT_USERPWD ByteString",
          "source": "src/Network-Curlhs-Types.html#CURLoption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_USERPWD",
          "package": "curlhs",
          "partial": "CURLOPT USERPWD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLOPT_USERPWD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_USE_SSL",
          "package": "curlhs",
          "signature": "CURLOPT_USE_SSL CURLusessl",
          "source": "src/Network-Curlhs-Types.html#CURLoption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_USE_SSL",
          "package": "curlhs",
          "partial": "CURLOPT USE SSL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLOPT_USE_SSL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_VERBOSE",
          "package": "curlhs",
          "signature": "CURLOPT_VERBOSE Bool",
          "source": "src/Network-Curlhs-Types.html#CURLoption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_VERBOSE",
          "package": "curlhs",
          "partial": "CURLOPT VERBOSE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLOPT_VERBOSE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_WILDCARDMATCH",
          "package": "curlhs",
          "signature": "CURLOPT_WILDCARDMATCH Bool",
          "source": "src/Network-Curlhs-Types.html#CURLoption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_WILDCARDMATCH",
          "package": "curlhs",
          "partial": "CURLOPT WILDCARDMATCH",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLOPT_WILDCARDMATCH"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_WRITEFUNCTION",
          "package": "curlhs",
          "signature": "CURLOPT_WRITEFUNCTION (Maybe CURL_write_callback)",
          "source": "src/Network-Curlhs-Types.html#CURLoption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLOPT_WRITEFUNCTION",
          "package": "curlhs",
          "partial": "CURLOPT WRITEFUNCTION",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLOPT_WRITEFUNCTION"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLPROTO_ALL",
          "package": "curlhs",
          "signature": "CURLPROTO_ALL",
          "source": "src/Network-Curlhs-Types.html#CURLproto",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLPROTO_ALL",
          "package": "curlhs",
          "partial": "CURLPROTO ALL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLPROTO_ALL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLPROTO_DICT",
          "package": "curlhs",
          "signature": "CURLPROTO_DICT",
          "source": "src/Network-Curlhs-Types.html#CURLproto",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLPROTO_DICT",
          "package": "curlhs",
          "partial": "CURLPROTO DICT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLPROTO_DICT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLPROTO_FILE",
          "package": "curlhs",
          "signature": "CURLPROTO_FILE",
          "source": "src/Network-Curlhs-Types.html#CURLproto",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLPROTO_FILE",
          "package": "curlhs",
          "partial": "CURLPROTO FILE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLPROTO_FILE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLPROTO_FTP",
          "package": "curlhs",
          "signature": "CURLPROTO_FTP",
          "source": "src/Network-Curlhs-Types.html#CURLproto",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLPROTO_FTP",
          "package": "curlhs",
          "partial": "CURLPROTO FTP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLPROTO_FTP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLPROTO_FTPS",
          "package": "curlhs",
          "signature": "CURLPROTO_FTPS",
          "source": "src/Network-Curlhs-Types.html#CURLproto",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLPROTO_FTPS",
          "package": "curlhs",
          "partial": "CURLPROTO FTPS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLPROTO_FTPS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLPROTO_GOPHER",
          "package": "curlhs",
          "signature": "CURLPROTO_GOPHER",
          "source": "src/Network-Curlhs-Types.html#CURLproto",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLPROTO_GOPHER",
          "package": "curlhs",
          "partial": "CURLPROTO GOPHER",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLPROTO_GOPHER"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLPROTO_HTTP",
          "package": "curlhs",
          "signature": "CURLPROTO_HTTP",
          "source": "src/Network-Curlhs-Types.html#CURLproto",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLPROTO_HTTP",
          "package": "curlhs",
          "partial": "CURLPROTO HTTP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLPROTO_HTTP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLPROTO_HTTPS",
          "package": "curlhs",
          "signature": "CURLPROTO_HTTPS",
          "source": "src/Network-Curlhs-Types.html#CURLproto",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLPROTO_HTTPS",
          "package": "curlhs",
          "partial": "CURLPROTO HTTPS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLPROTO_HTTPS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLPROTO_IMAP",
          "package": "curlhs",
          "signature": "CURLPROTO_IMAP",
          "source": "src/Network-Curlhs-Types.html#CURLproto",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLPROTO_IMAP",
          "package": "curlhs",
          "partial": "CURLPROTO IMAP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLPROTO_IMAP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLPROTO_IMAPS",
          "package": "curlhs",
          "signature": "CURLPROTO_IMAPS",
          "source": "src/Network-Curlhs-Types.html#CURLproto",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLPROTO_IMAPS",
          "package": "curlhs",
          "partial": "CURLPROTO IMAPS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLPROTO_IMAPS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLPROTO_LDAP",
          "package": "curlhs",
          "signature": "CURLPROTO_LDAP",
          "source": "src/Network-Curlhs-Types.html#CURLproto",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLPROTO_LDAP",
          "package": "curlhs",
          "partial": "CURLPROTO LDAP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLPROTO_LDAP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLPROTO_LDAPS",
          "package": "curlhs",
          "signature": "CURLPROTO_LDAPS",
          "source": "src/Network-Curlhs-Types.html#CURLproto",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLPROTO_LDAPS",
          "package": "curlhs",
          "partial": "CURLPROTO LDAPS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLPROTO_LDAPS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLPROTO_POP3",
          "package": "curlhs",
          "signature": "CURLPROTO_POP3",
          "source": "src/Network-Curlhs-Types.html#CURLproto",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLPROTO_POP3",
          "package": "curlhs",
          "partial": "CURLPROTO POP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLPROTO_POP3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLPROTO_POP3S",
          "package": "curlhs",
          "signature": "CURLPROTO_POP3S",
          "source": "src/Network-Curlhs-Types.html#CURLproto",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLPROTO_POP3S",
          "package": "curlhs",
          "partial": "CURLPROTO POP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLPROTO_POP3S"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLPROTO_RTMP",
          "package": "curlhs",
          "signature": "CURLPROTO_RTMP",
          "source": "src/Network-Curlhs-Types.html#CURLproto",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLPROTO_RTMP",
          "package": "curlhs",
          "partial": "CURLPROTO RTMP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLPROTO_RTMP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLPROTO_RTMPE",
          "package": "curlhs",
          "signature": "CURLPROTO_RTMPE",
          "source": "src/Network-Curlhs-Types.html#CURLproto",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLPROTO_RTMPE",
          "package": "curlhs",
          "partial": "CURLPROTO RTMPE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLPROTO_RTMPE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLPROTO_RTMPS",
          "package": "curlhs",
          "signature": "CURLPROTO_RTMPS",
          "source": "src/Network-Curlhs-Types.html#CURLproto",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLPROTO_RTMPS",
          "package": "curlhs",
          "partial": "CURLPROTO RTMPS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLPROTO_RTMPS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLPROTO_RTMPT",
          "package": "curlhs",
          "signature": "CURLPROTO_RTMPT",
          "source": "src/Network-Curlhs-Types.html#CURLproto",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLPROTO_RTMPT",
          "package": "curlhs",
          "partial": "CURLPROTO RTMPT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLPROTO_RTMPT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLPROTO_RTMPTE",
          "package": "curlhs",
          "signature": "CURLPROTO_RTMPTE",
          "source": "src/Network-Curlhs-Types.html#CURLproto",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLPROTO_RTMPTE",
          "package": "curlhs",
          "partial": "CURLPROTO RTMPTE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLPROTO_RTMPTE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLPROTO_RTMPTS",
          "package": "curlhs",
          "signature": "CURLPROTO_RTMPTS",
          "source": "src/Network-Curlhs-Types.html#CURLproto",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLPROTO_RTMPTS",
          "package": "curlhs",
          "partial": "CURLPROTO RTMPTS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLPROTO_RTMPTS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLPROTO_RTSP",
          "package": "curlhs",
          "signature": "CURLPROTO_RTSP",
          "source": "src/Network-Curlhs-Types.html#CURLproto",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLPROTO_RTSP",
          "package": "curlhs",
          "partial": "CURLPROTO RTSP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLPROTO_RTSP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLPROTO_SCP",
          "package": "curlhs",
          "signature": "CURLPROTO_SCP",
          "source": "src/Network-Curlhs-Types.html#CURLproto",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLPROTO_SCP",
          "package": "curlhs",
          "partial": "CURLPROTO SCP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLPROTO_SCP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLPROTO_SFTP",
          "package": "curlhs",
          "signature": "CURLPROTO_SFTP",
          "source": "src/Network-Curlhs-Types.html#CURLproto",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLPROTO_SFTP",
          "package": "curlhs",
          "partial": "CURLPROTO SFTP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLPROTO_SFTP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLPROTO_SMTP",
          "package": "curlhs",
          "signature": "CURLPROTO_SMTP",
          "source": "src/Network-Curlhs-Types.html#CURLproto",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLPROTO_SMTP",
          "package": "curlhs",
          "partial": "CURLPROTO SMTP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLPROTO_SMTP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLPROTO_SMTPS",
          "package": "curlhs",
          "signature": "CURLPROTO_SMTPS",
          "source": "src/Network-Curlhs-Types.html#CURLproto",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLPROTO_SMTPS",
          "package": "curlhs",
          "partial": "CURLPROTO SMTPS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLPROTO_SMTPS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLPROTO_TELNET",
          "package": "curlhs",
          "signature": "CURLPROTO_TELNET",
          "source": "src/Network-Curlhs-Types.html#CURLproto",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLPROTO_TELNET",
          "package": "curlhs",
          "partial": "CURLPROTO TELNET",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLPROTO_TELNET"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLPROTO_TFTP",
          "package": "curlhs",
          "signature": "CURLPROTO_TFTP",
          "source": "src/Network-Curlhs-Types.html#CURLproto",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLPROTO_TFTP",
          "package": "curlhs",
          "partial": "CURLPROTO TFTP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLPROTO_TFTP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLPROXY_HTTP",
          "package": "curlhs",
          "signature": "CURLPROXY_HTTP",
          "source": "src/Network-Curlhs-Types.html#CURLproxy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLPROXY_HTTP",
          "package": "curlhs",
          "partial": "CURLPROXY HTTP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLPROXY_HTTP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLPROXY_HTTP_1_0",
          "package": "curlhs",
          "signature": "CURLPROXY_HTTP_1_0",
          "source": "src/Network-Curlhs-Types.html#CURLproxy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLPROXY_HTTP_1_0",
          "package": "curlhs",
          "partial": "CURLPROXY HTTP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLPROXY_HTTP_1_0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLPROXY_SOCKS4",
          "package": "curlhs",
          "signature": "CURLPROXY_SOCKS4",
          "source": "src/Network-Curlhs-Types.html#CURLproxy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLPROXY_SOCKS4",
          "package": "curlhs",
          "partial": "CURLPROXY SOCKS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLPROXY_SOCKS4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLPROXY_SOCKS4A",
          "package": "curlhs",
          "signature": "CURLPROXY_SOCKS4A",
          "source": "src/Network-Curlhs-Types.html#CURLproxy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLPROXY_SOCKS4A",
          "package": "curlhs",
          "partial": "CURLPROXY SOCKS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLPROXY_SOCKS4A"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLPROXY_SOCKS5",
          "package": "curlhs",
          "signature": "CURLPROXY_SOCKS5",
          "source": "src/Network-Curlhs-Types.html#CURLproxy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLPROXY_SOCKS5",
          "package": "curlhs",
          "partial": "CURLPROXY SOCKS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLPROXY_SOCKS5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLPROXY_SOCKS5_HOSTNAME",
          "package": "curlhs",
          "signature": "CURLPROXY_SOCKS5_HOSTNAME",
          "source": "src/Network-Curlhs-Types.html#CURLproxy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLPROXY_SOCKS5_HOSTNAME",
          "package": "curlhs",
          "partial": "CURLPROXY SOCKS HOSTNAME",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLPROXY_SOCKS5_HOSTNAME"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLSSH_AUTH_ANY",
          "package": "curlhs",
          "signature": "CURLSSH_AUTH_ANY",
          "source": "src/Network-Curlhs-Types.html#CURLsshauth",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLSSH_AUTH_ANY",
          "package": "curlhs",
          "partial": "CURLSSH AUTH ANY",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLSSH_AUTH_ANY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLSSH_AUTH_DEFAULT",
          "package": "curlhs",
          "signature": "CURLSSH_AUTH_DEFAULT",
          "source": "src/Network-Curlhs-Types.html#CURLsshauth",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLSSH_AUTH_DEFAULT",
          "package": "curlhs",
          "partial": "CURLSSH AUTH DEFAULT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLSSH_AUTH_DEFAULT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLSSH_AUTH_HOST",
          "package": "curlhs",
          "signature": "CURLSSH_AUTH_HOST",
          "source": "src/Network-Curlhs-Types.html#CURLsshauth",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLSSH_AUTH_HOST",
          "package": "curlhs",
          "partial": "CURLSSH AUTH HOST",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLSSH_AUTH_HOST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLSSH_AUTH_KEYBOARD",
          "package": "curlhs",
          "signature": "CURLSSH_AUTH_KEYBOARD",
          "source": "src/Network-Curlhs-Types.html#CURLsshauth",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLSSH_AUTH_KEYBOARD",
          "package": "curlhs",
          "partial": "CURLSSH AUTH KEYBOARD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLSSH_AUTH_KEYBOARD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLSSH_AUTH_NONE",
          "package": "curlhs",
          "signature": "CURLSSH_AUTH_NONE",
          "source": "src/Network-Curlhs-Types.html#CURLsshauth",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLSSH_AUTH_NONE",
          "package": "curlhs",
          "partial": "CURLSSH AUTH NONE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLSSH_AUTH_NONE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLSSH_AUTH_PASSWORD",
          "package": "curlhs",
          "signature": "CURLSSH_AUTH_PASSWORD",
          "source": "src/Network-Curlhs-Types.html#CURLsshauth",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLSSH_AUTH_PASSWORD",
          "package": "curlhs",
          "partial": "CURLSSH AUTH PASSWORD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLSSH_AUTH_PASSWORD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLSSH_AUTH_PUBLICKEY",
          "package": "curlhs",
          "signature": "CURLSSH_AUTH_PUBLICKEY",
          "source": "src/Network-Curlhs-Types.html#CURLsshauth",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLSSH_AUTH_PUBLICKEY",
          "package": "curlhs",
          "partial": "CURLSSH AUTH PUBLICKEY",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLSSH_AUTH_PUBLICKEY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLSSLOPT_ALLOW_BEAST",
          "package": "curlhs",
          "signature": "CURLSSLOPT_ALLOW_BEAST",
          "source": "src/Network-Curlhs-Types.html#CURLsslopt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLSSLOPT_ALLOW_BEAST",
          "package": "curlhs",
          "partial": "CURLSSLOPT ALLOW BEAST",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLSSLOPT_ALLOW_BEAST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLUSESSL_ALL",
          "package": "curlhs",
          "signature": "CURLUSESSL_ALL",
          "source": "src/Network-Curlhs-Types.html#CURLusessl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLUSESSL_ALL",
          "package": "curlhs",
          "partial": "CURLUSESSL ALL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLUSESSL_ALL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLUSESSL_CONTROL",
          "package": "curlhs",
          "signature": "CURLUSESSL_CONTROL",
          "source": "src/Network-Curlhs-Types.html#CURLusessl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLUSESSL_CONTROL",
          "package": "curlhs",
          "partial": "CURLUSESSL CONTROL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLUSESSL_CONTROL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLUSESSL_NONE",
          "package": "curlhs",
          "signature": "CURLUSESSL_NONE",
          "source": "src/Network-Curlhs-Types.html#CURLusessl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLUSESSL_NONE",
          "package": "curlhs",
          "partial": "CURLUSESSL NONE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLUSESSL_NONE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLUSESSL_TRY",
          "package": "curlhs",
          "signature": "CURLUSESSL_TRY",
          "source": "src/Network-Curlhs-Types.html#CURLusessl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLUSESSL_TRY",
          "package": "curlhs",
          "partial": "CURLUSESSL TRY",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLUSESSL_TRY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURL_HTTP_VERSION_1_0",
          "package": "curlhs",
          "signature": "CURL_HTTP_VERSION_1_0",
          "source": "src/Network-Curlhs-Types.html#CURLhttpver",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURL_HTTP_VERSION_1_0",
          "package": "curlhs",
          "partial": "CURL HTTP VERSION",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURL_HTTP_VERSION_1_0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURL_HTTP_VERSION_1_1",
          "package": "curlhs",
          "signature": "CURL_HTTP_VERSION_1_1",
          "source": "src/Network-Curlhs-Types.html#CURLhttpver",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURL_HTTP_VERSION_1_1",
          "package": "curlhs",
          "partial": "CURL HTTP VERSION",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURL_HTTP_VERSION_1_1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURL_HTTP_VERSION_NONE",
          "package": "curlhs",
          "signature": "CURL_HTTP_VERSION_NONE",
          "source": "src/Network-Curlhs-Types.html#CURLhttpver",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURL_HTTP_VERSION_NONE",
          "package": "curlhs",
          "partial": "CURL HTTP VERSION NONE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURL_HTTP_VERSION_NONE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURL_IPRESOLVE_V4",
          "package": "curlhs",
          "signature": "CURL_IPRESOLVE_V4",
          "source": "src/Network-Curlhs-Types.html#CURLipresolve",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURL_IPRESOLVE_V4",
          "package": "curlhs",
          "partial": "CURL IPRESOLVE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURL_IPRESOLVE_V4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURL_IPRESOLVE_V6",
          "package": "curlhs",
          "signature": "CURL_IPRESOLVE_V6",
          "source": "src/Network-Curlhs-Types.html#CURLipresolve",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURL_IPRESOLVE_V6",
          "package": "curlhs",
          "partial": "CURL IPRESOLVE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURL_IPRESOLVE_V6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURL_IPRESOLVE_WHATEVER",
          "package": "curlhs",
          "signature": "CURL_IPRESOLVE_WHATEVER",
          "source": "src/Network-Curlhs-Types.html#CURLipresolve",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURL_IPRESOLVE_WHATEVER",
          "package": "curlhs",
          "partial": "CURL IPRESOLVE WHATEVER",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURL_IPRESOLVE_WHATEVER"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURL_NETRC_IGNORED",
          "package": "curlhs",
          "signature": "CURL_NETRC_IGNORED",
          "source": "src/Network-Curlhs-Types.html#CURLnetrc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURL_NETRC_IGNORED",
          "package": "curlhs",
          "partial": "CURL NETRC IGNORED",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURL_NETRC_IGNORED"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURL_NETRC_OPTIONAL",
          "package": "curlhs",
          "signature": "CURL_NETRC_OPTIONAL",
          "source": "src/Network-Curlhs-Types.html#CURLnetrc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURL_NETRC_OPTIONAL",
          "package": "curlhs",
          "partial": "CURL NETRC OPTIONAL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURL_NETRC_OPTIONAL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURL_NETRC_REQUIRED",
          "package": "curlhs",
          "signature": "CURL_NETRC_REQUIRED",
          "source": "src/Network-Curlhs-Types.html#CURLnetrc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURL_NETRC_REQUIRED",
          "package": "curlhs",
          "partial": "CURL NETRC REQUIRED",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURL_NETRC_REQUIRED"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURL_READFUNC_ABORT",
          "package": "curlhs",
          "signature": "CURL_READFUNC_ABORT",
          "source": "src/Network-Curlhs-Types.html#CURL_read_response",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURL_READFUNC_ABORT",
          "package": "curlhs",
          "partial": "CURL READFUNC ABORT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURL_READFUNC_ABORT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURL_READFUNC_OK",
          "package": "curlhs",
          "signature": "CURL_READFUNC_OK ByteString",
          "source": "src/Network-Curlhs-Types.html#CURL_read_response",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURL_READFUNC_OK",
          "package": "curlhs",
          "partial": "CURL READFUNC OK",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURL_READFUNC_OK"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURL_READFUNC_PAUSE",
          "package": "curlhs",
          "signature": "CURL_READFUNC_PAUSE",
          "source": "src/Network-Curlhs-Types.html#CURL_read_response",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURL_READFUNC_PAUSE",
          "package": "curlhs",
          "partial": "CURL READFUNC PAUSE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURL_READFUNC_PAUSE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURL_REDIR_GET_ALL",
          "package": "curlhs",
          "signature": "CURL_REDIR_GET_ALL",
          "source": "src/Network-Curlhs-Types.html#CURLredir",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURL_REDIR_GET_ALL",
          "package": "curlhs",
          "partial": "CURL REDIR GET ALL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURL_REDIR_GET_ALL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURL_REDIR_POST_301",
          "package": "curlhs",
          "signature": "CURL_REDIR_POST_301",
          "source": "src/Network-Curlhs-Types.html#CURLredir",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURL_REDIR_POST_301",
          "package": "curlhs",
          "partial": "CURL REDIR POST",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURL_REDIR_POST_301"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURL_REDIR_POST_302",
          "package": "curlhs",
          "signature": "CURL_REDIR_POST_302",
          "source": "src/Network-Curlhs-Types.html#CURLredir",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURL_REDIR_POST_302",
          "package": "curlhs",
          "partial": "CURL REDIR POST",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURL_REDIR_POST_302"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURL_REDIR_POST_ALL",
          "package": "curlhs",
          "signature": "CURL_REDIR_POST_ALL",
          "source": "src/Network-Curlhs-Types.html#CURLredir",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURL_REDIR_POST_ALL",
          "package": "curlhs",
          "partial": "CURL REDIR POST ALL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURL_REDIR_POST_ALL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURL_RTSPREQ_ANNOUNCE",
          "package": "curlhs",
          "signature": "CURL_RTSPREQ_ANNOUNCE",
          "source": "src/Network-Curlhs-Types.html#CURLrtspreq",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURL_RTSPREQ_ANNOUNCE",
          "package": "curlhs",
          "partial": "CURL RTSPREQ ANNOUNCE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURL_RTSPREQ_ANNOUNCE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURL_RTSPREQ_DESCRIBE",
          "package": "curlhs",
          "signature": "CURL_RTSPREQ_DESCRIBE",
          "source": "src/Network-Curlhs-Types.html#CURLrtspreq",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURL_RTSPREQ_DESCRIBE",
          "package": "curlhs",
          "partial": "CURL RTSPREQ DESCRIBE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURL_RTSPREQ_DESCRIBE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURL_RTSPREQ_GET_PARAMETER",
          "package": "curlhs",
          "signature": "CURL_RTSPREQ_GET_PARAMETER",
          "source": "src/Network-Curlhs-Types.html#CURLrtspreq",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURL_RTSPREQ_GET_PARAMETER",
          "package": "curlhs",
          "partial": "CURL RTSPREQ GET PARAMETER",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURL_RTSPREQ_GET_PARAMETER"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURL_RTSPREQ_OPTIONS",
          "package": "curlhs",
          "signature": "CURL_RTSPREQ_OPTIONS",
          "source": "src/Network-Curlhs-Types.html#CURLrtspreq",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURL_RTSPREQ_OPTIONS",
          "package": "curlhs",
          "partial": "CURL RTSPREQ OPTIONS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURL_RTSPREQ_OPTIONS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURL_RTSPREQ_PAUSE",
          "package": "curlhs",
          "signature": "CURL_RTSPREQ_PAUSE",
          "source": "src/Network-Curlhs-Types.html#CURLrtspreq",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURL_RTSPREQ_PAUSE",
          "package": "curlhs",
          "partial": "CURL RTSPREQ PAUSE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURL_RTSPREQ_PAUSE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURL_RTSPREQ_PLAY",
          "package": "curlhs",
          "signature": "CURL_RTSPREQ_PLAY",
          "source": "src/Network-Curlhs-Types.html#CURLrtspreq",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURL_RTSPREQ_PLAY",
          "package": "curlhs",
          "partial": "CURL RTSPREQ PLAY",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURL_RTSPREQ_PLAY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURL_RTSPREQ_RECEIVE",
          "package": "curlhs",
          "signature": "CURL_RTSPREQ_RECEIVE",
          "source": "src/Network-Curlhs-Types.html#CURLrtspreq",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURL_RTSPREQ_RECEIVE",
          "package": "curlhs",
          "partial": "CURL RTSPREQ RECEIVE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURL_RTSPREQ_RECEIVE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURL_RTSPREQ_RECORD",
          "package": "curlhs",
          "signature": "CURL_RTSPREQ_RECORD",
          "source": "src/Network-Curlhs-Types.html#CURLrtspreq",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURL_RTSPREQ_RECORD",
          "package": "curlhs",
          "partial": "CURL RTSPREQ RECORD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURL_RTSPREQ_RECORD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURL_RTSPREQ_SETUP",
          "package": "curlhs",
          "signature": "CURL_RTSPREQ_SETUP",
          "source": "src/Network-Curlhs-Types.html#CURLrtspreq",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURL_RTSPREQ_SETUP",
          "package": "curlhs",
          "partial": "CURL RTSPREQ SETUP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURL_RTSPREQ_SETUP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURL_RTSPREQ_SET_PARAMETER",
          "package": "curlhs",
          "signature": "CURL_RTSPREQ_SET_PARAMETER",
          "source": "src/Network-Curlhs-Types.html#CURLrtspreq",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURL_RTSPREQ_SET_PARAMETER",
          "package": "curlhs",
          "partial": "CURL RTSPREQ SET PARAMETER",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURL_RTSPREQ_SET_PARAMETER"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURL_RTSPREQ_TEARDOWN",
          "package": "curlhs",
          "signature": "CURL_RTSPREQ_TEARDOWN",
          "source": "src/Network-Curlhs-Types.html#CURLrtspreq",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURL_RTSPREQ_TEARDOWN",
          "package": "curlhs",
          "partial": "CURL RTSPREQ TEARDOWN",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURL_RTSPREQ_TEARDOWN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURL_SSLVERSION_DEFAULT",
          "package": "curlhs",
          "signature": "CURL_SSLVERSION_DEFAULT",
          "source": "src/Network-Curlhs-Types.html#CURLsslver",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURL_SSLVERSION_DEFAULT",
          "package": "curlhs",
          "partial": "CURL SSLVERSION DEFAULT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURL_SSLVERSION_DEFAULT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURL_SSLVERSION_SSLv2",
          "package": "curlhs",
          "signature": "CURL_SSLVERSION_SSLv2",
          "source": "src/Network-Curlhs-Types.html#CURLsslver",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURL_SSLVERSION_SSLv2",
          "package": "curlhs",
          "partial": "CURL SSLVERSION SSLv",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURL_SSLVERSION_SSLv2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURL_SSLVERSION_SSLv3",
          "package": "curlhs",
          "signature": "CURL_SSLVERSION_SSLv3",
          "source": "src/Network-Curlhs-Types.html#CURLsslver",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURL_SSLVERSION_SSLv3",
          "package": "curlhs",
          "partial": "CURL SSLVERSION SSLv",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURL_SSLVERSION_SSLv3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURL_SSLVERSION_TLSv1",
          "package": "curlhs",
          "signature": "CURL_SSLVERSION_TLSv1",
          "source": "src/Network-Curlhs-Types.html#CURLsslver",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURL_SSLVERSION_TLSv1",
          "package": "curlhs",
          "partial": "CURL SSLVERSION TLSv",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURL_SSLVERSION_TLSv1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURL_TIMECOND_IFMODSINCE",
          "package": "curlhs",
          "signature": "CURL_TIMECOND_IFMODSINCE",
          "source": "src/Network-Curlhs-Types.html#CURLtimecond",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURL_TIMECOND_IFMODSINCE",
          "package": "curlhs",
          "partial": "CURL TIMECOND IFMODSINCE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURL_TIMECOND_IFMODSINCE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURL_TIMECOND_IFUNMODSINCE",
          "package": "curlhs",
          "signature": "CURL_TIMECOND_IFUNMODSINCE",
          "source": "src/Network-Curlhs-Types.html#CURLtimecond",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURL_TIMECOND_IFUNMODSINCE",
          "package": "curlhs",
          "partial": "CURL TIMECOND IFUNMODSINCE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURL_TIMECOND_IFUNMODSINCE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURL_TIMECOND_LASTMOD",
          "package": "curlhs",
          "signature": "CURL_TIMECOND_LASTMOD",
          "source": "src/Network-Curlhs-Types.html#CURLtimecond",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURL_TIMECOND_LASTMOD",
          "package": "curlhs",
          "partial": "CURL TIMECOND LASTMOD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURL_TIMECOND_LASTMOD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURL_TIMECOND_NONE",
          "package": "curlhs",
          "signature": "CURL_TIMECOND_NONE",
          "source": "src/Network-Curlhs-Types.html#CURLtimecond",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURL_TIMECOND_NONE",
          "package": "curlhs",
          "partial": "CURL TIMECOND NONE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURL_TIMECOND_NONE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURL_TLSAUTH_SRP",
          "package": "curlhs",
          "signature": "CURL_TLSAUTH_SRP",
          "source": "src/Network-Curlhs-Types.html#CURLtlsauth",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURL_TLSAUTH_SRP",
          "package": "curlhs",
          "partial": "CURL TLSAUTH SRP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURL_TLSAUTH_SRP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURL_VERSION_ASYNCHDNS",
          "package": "curlhs",
          "signature": "CURL_VERSION_ASYNCHDNS",
          "source": "src/Network-Curlhs-Types.html#CURL_version",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURL_VERSION_ASYNCHDNS",
          "package": "curlhs",
          "partial": "CURL VERSION ASYNCHDNS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURL_VERSION_ASYNCHDNS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURL_VERSION_CONV",
          "package": "curlhs",
          "signature": "CURL_VERSION_CONV",
          "source": "src/Network-Curlhs-Types.html#CURL_version",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURL_VERSION_CONV",
          "package": "curlhs",
          "partial": "CURL VERSION CONV",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURL_VERSION_CONV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURL_VERSION_CURLDEBUG",
          "package": "curlhs",
          "signature": "CURL_VERSION_CURLDEBUG",
          "source": "src/Network-Curlhs-Types.html#CURL_version",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURL_VERSION_CURLDEBUG",
          "package": "curlhs",
          "partial": "CURL VERSION CURLDEBUG",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURL_VERSION_CURLDEBUG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURL_VERSION_DEBUG",
          "package": "curlhs",
          "signature": "CURL_VERSION_DEBUG",
          "source": "src/Network-Curlhs-Types.html#CURL_version",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURL_VERSION_DEBUG",
          "package": "curlhs",
          "partial": "CURL VERSION DEBUG",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURL_VERSION_DEBUG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURL_VERSION_GSSNEGOTIATE",
          "package": "curlhs",
          "signature": "CURL_VERSION_GSSNEGOTIATE",
          "source": "src/Network-Curlhs-Types.html#CURL_version",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURL_VERSION_GSSNEGOTIATE",
          "package": "curlhs",
          "partial": "CURL VERSION GSSNEGOTIATE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURL_VERSION_GSSNEGOTIATE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURL_VERSION_IDN",
          "package": "curlhs",
          "signature": "CURL_VERSION_IDN",
          "source": "src/Network-Curlhs-Types.html#CURL_version",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURL_VERSION_IDN",
          "package": "curlhs",
          "partial": "CURL VERSION IDN",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURL_VERSION_IDN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURL_VERSION_IPV6",
          "package": "curlhs",
          "signature": "CURL_VERSION_IPV6",
          "source": "src/Network-Curlhs-Types.html#CURL_version",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURL_VERSION_IPV6",
          "package": "curlhs",
          "partial": "CURL VERSION IPV",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURL_VERSION_IPV6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURL_VERSION_KERBEROS4",
          "package": "curlhs",
          "signature": "CURL_VERSION_KERBEROS4",
          "source": "src/Network-Curlhs-Types.html#CURL_version",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURL_VERSION_KERBEROS4",
          "package": "curlhs",
          "partial": "CURL VERSION KERBEROS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURL_VERSION_KERBEROS4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURL_VERSION_LARGEFILE",
          "package": "curlhs",
          "signature": "CURL_VERSION_LARGEFILE",
          "source": "src/Network-Curlhs-Types.html#CURL_version",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURL_VERSION_LARGEFILE",
          "package": "curlhs",
          "partial": "CURL VERSION LARGEFILE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURL_VERSION_LARGEFILE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURL_VERSION_LIBZ",
          "package": "curlhs",
          "signature": "CURL_VERSION_LIBZ",
          "source": "src/Network-Curlhs-Types.html#CURL_version",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURL_VERSION_LIBZ",
          "package": "curlhs",
          "partial": "CURL VERSION LIBZ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURL_VERSION_LIBZ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURL_VERSION_NTLM",
          "package": "curlhs",
          "signature": "CURL_VERSION_NTLM",
          "source": "src/Network-Curlhs-Types.html#CURL_version",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURL_VERSION_NTLM",
          "package": "curlhs",
          "partial": "CURL VERSION NTLM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURL_VERSION_NTLM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURL_VERSION_NTLM_WB",
          "package": "curlhs",
          "signature": "CURL_VERSION_NTLM_WB",
          "source": "src/Network-Curlhs-Types.html#CURL_version",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURL_VERSION_NTLM_WB",
          "package": "curlhs",
          "partial": "CURL VERSION NTLM WB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURL_VERSION_NTLM_WB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURL_VERSION_SPNEGO",
          "package": "curlhs",
          "signature": "CURL_VERSION_SPNEGO",
          "source": "src/Network-Curlhs-Types.html#CURL_version",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURL_VERSION_SPNEGO",
          "package": "curlhs",
          "partial": "CURL VERSION SPNEGO",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURL_VERSION_SPNEGO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURL_VERSION_SSL",
          "package": "curlhs",
          "signature": "CURL_VERSION_SSL",
          "source": "src/Network-Curlhs-Types.html#CURL_version",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURL_VERSION_SSL",
          "package": "curlhs",
          "partial": "CURL VERSION SSL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURL_VERSION_SSL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURL_VERSION_SSPI",
          "package": "curlhs",
          "signature": "CURL_VERSION_SSPI",
          "source": "src/Network-Curlhs-Types.html#CURL_version",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURL_VERSION_SSPI",
          "package": "curlhs",
          "partial": "CURL VERSION SSPI",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURL_VERSION_SSPI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURL_VERSION_TLSAUTH_SRP",
          "package": "curlhs",
          "signature": "CURL_VERSION_TLSAUTH_SRP",
          "source": "src/Network-Curlhs-Types.html#CURL_version",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURL_VERSION_TLSAUTH_SRP",
          "package": "curlhs",
          "partial": "CURL VERSION TLSAUTH SRP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURL_VERSION_TLSAUTH_SRP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURL_WRITEFUNC_FAIL",
          "package": "curlhs",
          "signature": "CURL_WRITEFUNC_FAIL",
          "source": "src/Network-Curlhs-Types.html#CURL_write_response",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURL_WRITEFUNC_FAIL",
          "package": "curlhs",
          "partial": "CURL WRITEFUNC FAIL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURL_WRITEFUNC_FAIL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURL_WRITEFUNC_OK",
          "package": "curlhs",
          "signature": "CURL_WRITEFUNC_OK",
          "source": "src/Network-Curlhs-Types.html#CURL_write_response",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURL_WRITEFUNC_OK",
          "package": "curlhs",
          "partial": "CURL WRITEFUNC OK",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURL_WRITEFUNC_OK"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURL_WRITEFUNC_PAUSE",
          "package": "curlhs",
          "signature": "CURL_WRITEFUNC_PAUSE",
          "source": "src/Network-Curlhs-Types.html#CURL_write_response",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURL_WRITEFUNC_PAUSE",
          "package": "curlhs",
          "partial": "CURL WRITEFUNC PAUSE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURL_WRITEFUNC_PAUSE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURL_version_info_data",
          "package": "curlhs",
          "signature": "CURL_version_info_data",
          "source": "src/Network-Curlhs-Types.html#CURL_version_info_data",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURL_version_info_data",
          "package": "curlhs",
          "partial": "CURL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURL_version_info_data"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "CURLinfo",
          "package": "curlhs",
          "signature": "CURLinfo",
          "source": "src/Network-Curlhs-Types.html#CURLinfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "CURLinfo",
          "package": "curlhs",
          "partial": "CURLinfo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:CURLinfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnd a libcurl easy session\n   (\u003ca\u003ehttp://curl.haxx.se/libcurl/c/curl_easy_cleanup.html\u003c/a\u003e).\n\u003c/p\u003e",
          "module": "Network.Curlhs.Core",
          "name": "curl_easy_cleanup",
          "package": "curlhs",
          "signature": "CURL -\u003e IO ()",
          "source": "src/Network-Curlhs-Easy.html#curl_easy_cleanup",
          "type": "function"
        },
        "index": {
          "description": "End libcurl easy session http curl.haxx.se libcurl curl easy cleanup.html",
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "curl_easy_cleanup",
          "normalized": "CURL-\u003eIO()",
          "package": "curlhs",
          "signature": "CURL-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:curl_easy_cleanup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract information from a curl handle\n   (\u003ca\u003ehttp://curl.haxx.se/libcurl/c/curl_easy_getinfo.html\u003c/a\u003e).\n\u003c/p\u003e",
          "module": "Network.Curlhs.Core",
          "name": "curl_easy_getinfo",
          "package": "curlhs",
          "signature": "CURL -\u003e IO CURLinfo",
          "source": "src/Network-Curlhs-Easy.html#curl_easy_getinfo",
          "type": "function"
        },
        "index": {
          "description": "Extract information from curl handle http curl.haxx.se libcurl curl easy getinfo.html",
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "curl_easy_getinfo",
          "normalized": "CURL-\u003eIO CURLinfo",
          "package": "curlhs",
          "signature": "CURL-\u003eIO CURLinfo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:curl_easy_getinfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStart a libcurl easy session\n   (\u003ca\u003ehttp://curl.haxx.se/libcurl/c/curl_easy_init.html\u003c/a\u003e).\n\u003c/p\u003e",
          "module": "Network.Curlhs.Core",
          "name": "curl_easy_init",
          "package": "curlhs",
          "signature": "IO CURL",
          "source": "src/Network-Curlhs-Easy.html#curl_easy_init",
          "type": "function"
        },
        "index": {
          "description": "Start libcurl easy session http curl.haxx.se libcurl curl easy init.html",
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "curl_easy_init",
          "package": "curlhs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:curl_easy_init"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerform a file transfer\n   (\u003ca\u003ehttp://curl.haxx.se/libcurl/c/curl_easy_perform.html\u003c/a\u003e).\n\u003c/p\u003e",
          "module": "Network.Curlhs.Core",
          "name": "curl_easy_perform",
          "package": "curlhs",
          "signature": "CURL -\u003e IO ()",
          "source": "src/Network-Curlhs-Easy.html#curl_easy_perform",
          "type": "function"
        },
        "index": {
          "description": "Perform file transfer http curl.haxx.se libcurl curl easy perform.html",
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "curl_easy_perform",
          "normalized": "CURL-\u003eIO()",
          "package": "curlhs",
          "signature": "CURL-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:curl_easy_perform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReset all options of a libcurl session handle\n   (\u003ca\u003ehttp://curl.haxx.se/libcurl/c/curl_easy_reset.html\u003c/a\u003e).\n\u003c/p\u003e",
          "module": "Network.Curlhs.Core",
          "name": "curl_easy_reset",
          "package": "curlhs",
          "signature": "CURL -\u003e IO ()",
          "source": "src/Network-Curlhs-Easy.html#curl_easy_reset",
          "type": "function"
        },
        "index": {
          "description": "Reset all options of libcurl session handle http curl.haxx.se libcurl curl easy reset.html",
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "curl_easy_reset",
          "normalized": "CURL-\u003eIO()",
          "package": "curlhs",
          "signature": "CURL-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:curl_easy_reset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet options for a curl easy handle\n   (\u003ca\u003ehttp://curl.haxx.se/libcurl/c/curl_easy_setopt.html\u003c/a\u003e).\n\u003c/p\u003e",
          "module": "Network.Curlhs.Core",
          "name": "curl_easy_setopt",
          "package": "curlhs",
          "signature": "CURL -\u003e [CURLoption] -\u003e IO ()",
          "source": "src/Network-Curlhs-Setopt.html#curl_easy_setopt",
          "type": "function"
        },
        "index": {
          "description": "Set options for curl easy handle http curl.haxx.se libcurl curl easy setopt.html",
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "curl_easy_setopt",
          "normalized": "CURL-\u003e[CURLoption]-\u003eIO()",
          "package": "curlhs",
          "signature": "CURL-\u003e[CURLoption]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:curl_easy_setopt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a string describing error code\n   (\u003ca\u003ehttp://curl.haxx.se/libcurl/c/curl_easy_strerror.html\u003c/a\u003e).\n\u003c/p\u003e",
          "module": "Network.Curlhs.Core",
          "name": "curl_easy_strerror",
          "package": "curlhs",
          "signature": "CURLcode -\u003e IO ByteString",
          "source": "src/Network-Curlhs-Errors.html#curl_easy_strerror",
          "type": "function"
        },
        "index": {
          "description": "Returns string describing error code http curl.haxx.se libcurl curl easy strerror.html",
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "curl_easy_strerror",
          "normalized": "CURLcode-\u003eIO ByteString",
          "package": "curlhs",
          "signature": "CURLcode-\u003eIO ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:curl_easy_strerror"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the libcurl version string\n   (\u003ca\u003ehttp://curl.haxx.se/libcurl/c/curl_version.html\u003c/a\u003e).\n\u003c/p\u003e",
          "module": "Network.Curlhs.Core",
          "name": "curl_version",
          "package": "curlhs",
          "signature": "IO String",
          "source": "src/Network-Curlhs-Easy.html#curl_version",
          "type": "function"
        },
        "index": {
          "description": "Returns the libcurl version string http curl.haxx.se libcurl curl version.html",
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "curl_version",
          "package": "curlhs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:curl_version"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns run-time libcurl version info\n   (\u003ca\u003ehttp://curl.haxx.se/libcurl/c/curl_version_info.html\u003c/a\u003e).\n\u003c/p\u003e",
          "module": "Network.Curlhs.Core",
          "name": "curl_version_info",
          "package": "curlhs",
          "signature": "IO CURL_version_info_data",
          "source": "src/Network-Curlhs-Easy.html#curl_version_info",
          "type": "function"
        },
        "index": {
          "description": "Returns run-time libcurl version info http curl.haxx.se libcurl curl version info.html",
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "curl_version_info",
          "package": "curlhs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:curl_version_info"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "curl_version_info_data_ares",
          "package": "curlhs",
          "signature": "Maybe String",
          "source": "src/Network-Curlhs-Types.html#CURL_version_info_data",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "curl_version_info_data_ares",
          "package": "curlhs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:curl_version_info_data_ares"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "curl_version_info_data_ares_num",
          "package": "curlhs",
          "signature": "Int",
          "source": "src/Network-Curlhs-Types.html#CURL_version_info_data",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "curl_version_info_data_ares_num",
          "package": "curlhs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:curl_version_info_data_ares_num"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "curl_version_info_data_features",
          "package": "curlhs",
          "signature": "[CURL_version]",
          "source": "src/Network-Curlhs-Types.html#CURL_version_info_data",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "curl_version_info_data_features",
          "normalized": "[CURL_version]",
          "package": "curlhs",
          "signature": "[CURL_version]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:curl_version_info_data_features"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "curl_version_info_data_host",
          "package": "curlhs",
          "signature": "String",
          "source": "src/Network-Curlhs-Types.html#CURL_version_info_data",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "curl_version_info_data_host",
          "package": "curlhs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:curl_version_info_data_host"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "curl_version_info_data_iconv_ver_num",
          "package": "curlhs",
          "signature": "Int",
          "source": "src/Network-Curlhs-Types.html#CURL_version_info_data",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "curl_version_info_data_iconv_ver_num",
          "package": "curlhs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:curl_version_info_data_iconv_ver_num"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "curl_version_info_data_libidn",
          "package": "curlhs",
          "signature": "Maybe String",
          "source": "src/Network-Curlhs-Types.html#CURL_version_info_data",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "curl_version_info_data_libidn",
          "package": "curlhs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:curl_version_info_data_libidn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "curl_version_info_data_libssh_version",
          "package": "curlhs",
          "signature": "Maybe String",
          "source": "src/Network-Curlhs-Types.html#CURL_version_info_data",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "curl_version_info_data_libssh_version",
          "package": "curlhs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:curl_version_info_data_libssh_version"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "curl_version_info_data_libz_version",
          "package": "curlhs",
          "signature": "Maybe String",
          "source": "src/Network-Curlhs-Types.html#CURL_version_info_data",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "curl_version_info_data_libz_version",
          "package": "curlhs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:curl_version_info_data_libz_version"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "curl_version_info_data_protocols",
          "package": "curlhs",
          "signature": "[String]",
          "source": "src/Network-Curlhs-Types.html#CURL_version_info_data",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "curl_version_info_data_protocols",
          "normalized": "[String]",
          "package": "curlhs",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:curl_version_info_data_protocols"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "curl_version_info_data_ssl_version",
          "package": "curlhs",
          "signature": "Maybe String",
          "source": "src/Network-Curlhs-Types.html#CURL_version_info_data",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "curl_version_info_data_ssl_version",
          "package": "curlhs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:curl_version_info_data_ssl_version"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "curl_version_info_data_ssl_version_num",
          "package": "curlhs",
          "signature": "Int",
          "source": "src/Network-Curlhs-Types.html#CURL_version_info_data",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "curl_version_info_data_ssl_version_num",
          "package": "curlhs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:curl_version_info_data_ssl_version_num"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "curl_version_info_data_version",
          "package": "curlhs",
          "signature": "String",
          "source": "src/Network-Curlhs-Types.html#CURL_version_info_data",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "curl_version_info_data_version",
          "package": "curlhs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:curl_version_info_data_version"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "curl_version_info_data_version_num",
          "package": "curlhs",
          "signature": "Int",
          "source": "src/Network-Curlhs-Types.html#CURL_version_info_data",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "curl_version_info_data_version_num",
          "package": "curlhs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:curl_version_info_data_version_num"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "curlinfo_appconnect_time",
          "package": "curlhs",
          "signature": "Double",
          "source": "src/Network-Curlhs-Types.html#CURLinfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "curlinfo_appconnect_time",
          "package": "curlhs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:curlinfo_appconnect_time"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "curlinfo_certinfo",
          "package": "curlhs",
          "signature": "[[String]]",
          "source": "src/Network-Curlhs-Types.html#CURLinfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "curlinfo_certinfo",
          "normalized": "[[String]]",
          "package": "curlhs",
          "signature": "[[String]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:curlinfo_certinfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "curlinfo_condition_unmet",
          "package": "curlhs",
          "signature": "Bool",
          "source": "src/Network-Curlhs-Types.html#CURLinfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "curlinfo_condition_unmet",
          "package": "curlhs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:curlinfo_condition_unmet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "curlinfo_connect_time",
          "package": "curlhs",
          "signature": "Double",
          "source": "src/Network-Curlhs-Types.html#CURLinfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "curlinfo_connect_time",
          "package": "curlhs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:curlinfo_connect_time"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "curlinfo_content_length_download",
          "package": "curlhs",
          "signature": "Maybe Double",
          "source": "src/Network-Curlhs-Types.html#CURLinfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "curlinfo_content_length_download",
          "package": "curlhs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:curlinfo_content_length_download"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "curlinfo_content_length_upload",
          "package": "curlhs",
          "signature": "Maybe Double",
          "source": "src/Network-Curlhs-Types.html#CURLinfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "curlinfo_content_length_upload",
          "package": "curlhs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:curlinfo_content_length_upload"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "curlinfo_content_type",
          "package": "curlhs",
          "signature": "Maybe String",
          "source": "src/Network-Curlhs-Types.html#CURLinfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "curlinfo_content_type",
          "package": "curlhs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:curlinfo_content_type"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "curlinfo_cookielist",
          "package": "curlhs",
          "signature": "[String]",
          "source": "src/Network-Curlhs-Types.html#CURLinfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "curlinfo_cookielist",
          "normalized": "[String]",
          "package": "curlhs",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:curlinfo_cookielist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "curlinfo_effective_url",
          "package": "curlhs",
          "signature": "String",
          "source": "src/Network-Curlhs-Types.html#CURLinfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "curlinfo_effective_url",
          "package": "curlhs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:curlinfo_effective_url"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "curlinfo_filetime",
          "package": "curlhs",
          "signature": "Maybe UTCTime",
          "source": "src/Network-Curlhs-Types.html#CURLinfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "curlinfo_filetime",
          "package": "curlhs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:curlinfo_filetime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "curlinfo_ftp_entry_path",
          "package": "curlhs",
          "signature": "Maybe String",
          "source": "src/Network-Curlhs-Types.html#CURLinfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "curlinfo_ftp_entry_path",
          "package": "curlhs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:curlinfo_ftp_entry_path"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "curlinfo_header_size",
          "package": "curlhs",
          "signature": "Int",
          "source": "src/Network-Curlhs-Types.html#CURLinfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "curlinfo_header_size",
          "package": "curlhs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:curlinfo_header_size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "curlinfo_http_connectcode",
          "package": "curlhs",
          "signature": "Maybe Int",
          "source": "src/Network-Curlhs-Types.html#CURLinfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "curlinfo_http_connectcode",
          "package": "curlhs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:curlinfo_http_connectcode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "curlinfo_httpauth_avail",
          "package": "curlhs",
          "signature": "[CURLauth]",
          "source": "src/Network-Curlhs-Types.html#CURLinfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "curlinfo_httpauth_avail",
          "normalized": "[CURLauth]",
          "package": "curlhs",
          "signature": "[CURLauth]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:curlinfo_httpauth_avail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "curlinfo_lastsocket",
          "package": "curlhs",
          "signature": "Maybe Int",
          "source": "src/Network-Curlhs-Types.html#CURLinfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "curlinfo_lastsocket",
          "package": "curlhs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:curlinfo_lastsocket"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "curlinfo_local_ip",
          "package": "curlhs",
          "signature": "String",
          "source": "src/Network-Curlhs-Types.html#CURLinfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "curlinfo_local_ip",
          "package": "curlhs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:curlinfo_local_ip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "curlinfo_local_port",
          "package": "curlhs",
          "signature": "Int",
          "source": "src/Network-Curlhs-Types.html#CURLinfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "curlinfo_local_port",
          "package": "curlhs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:curlinfo_local_port"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "curlinfo_namelookup_time",
          "package": "curlhs",
          "signature": "Double",
          "source": "src/Network-Curlhs-Types.html#CURLinfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "curlinfo_namelookup_time",
          "package": "curlhs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:curlinfo_namelookup_time"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "curlinfo_num_connects",
          "package": "curlhs",
          "signature": "Int",
          "source": "src/Network-Curlhs-Types.html#CURLinfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "curlinfo_num_connects",
          "package": "curlhs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:curlinfo_num_connects"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "curlinfo_os_errno",
          "package": "curlhs",
          "signature": "Int",
          "source": "src/Network-Curlhs-Types.html#CURLinfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "curlinfo_os_errno",
          "package": "curlhs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:curlinfo_os_errno"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "curlinfo_pretransfer_time",
          "package": "curlhs",
          "signature": "Double",
          "source": "src/Network-Curlhs-Types.html#CURLinfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "curlinfo_pretransfer_time",
          "package": "curlhs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:curlinfo_pretransfer_time"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "curlinfo_primary_ip",
          "package": "curlhs",
          "signature": "String",
          "source": "src/Network-Curlhs-Types.html#CURLinfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "curlinfo_primary_ip",
          "package": "curlhs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:curlinfo_primary_ip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "curlinfo_primary_port",
          "package": "curlhs",
          "signature": "Int",
          "source": "src/Network-Curlhs-Types.html#CURLinfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "curlinfo_primary_port",
          "package": "curlhs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:curlinfo_primary_port"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "curlinfo_proxyauth_avail",
          "package": "curlhs",
          "signature": "[CURLauth]",
          "source": "src/Network-Curlhs-Types.html#CURLinfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "curlinfo_proxyauth_avail",
          "normalized": "[CURLauth]",
          "package": "curlhs",
          "signature": "[CURLauth]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:curlinfo_proxyauth_avail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "curlinfo_redirect_count",
          "package": "curlhs",
          "signature": "Int",
          "source": "src/Network-Curlhs-Types.html#CURLinfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "curlinfo_redirect_count",
          "package": "curlhs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:curlinfo_redirect_count"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "curlinfo_redirect_time",
          "package": "curlhs",
          "signature": "Double",
          "source": "src/Network-Curlhs-Types.html#CURLinfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "curlinfo_redirect_time",
          "package": "curlhs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:curlinfo_redirect_time"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "curlinfo_redirect_url",
          "package": "curlhs",
          "signature": "Maybe String",
          "source": "src/Network-Curlhs-Types.html#CURLinfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "curlinfo_redirect_url",
          "package": "curlhs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:curlinfo_redirect_url"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "curlinfo_request_size",
          "package": "curlhs",
          "signature": "Int",
          "source": "src/Network-Curlhs-Types.html#CURLinfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "curlinfo_request_size",
          "package": "curlhs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:curlinfo_request_size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "curlinfo_response_code",
          "package": "curlhs",
          "signature": "Maybe Int",
          "source": "src/Network-Curlhs-Types.html#CURLinfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "curlinfo_response_code",
          "package": "curlhs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:curlinfo_response_code"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "curlinfo_rtsp_client_cseq",
          "package": "curlhs",
          "signature": "Int",
          "source": "src/Network-Curlhs-Types.html#CURLinfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "curlinfo_rtsp_client_cseq",
          "package": "curlhs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:curlinfo_rtsp_client_cseq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "curlinfo_rtsp_cseq_recv",
          "package": "curlhs",
          "signature": "Int",
          "source": "src/Network-Curlhs-Types.html#CURLinfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "curlinfo_rtsp_cseq_recv",
          "package": "curlhs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:curlinfo_rtsp_cseq_recv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "curlinfo_rtsp_server_cseq",
          "package": "curlhs",
          "signature": "Int",
          "source": "src/Network-Curlhs-Types.html#CURLinfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "curlinfo_rtsp_server_cseq",
          "package": "curlhs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:curlinfo_rtsp_server_cseq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "curlinfo_rtsp_session_id",
          "package": "curlhs",
          "signature": "Maybe String",
          "source": "src/Network-Curlhs-Types.html#CURLinfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "curlinfo_rtsp_session_id",
          "package": "curlhs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:curlinfo_rtsp_session_id"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "curlinfo_size_download",
          "package": "curlhs",
          "signature": "Double",
          "source": "src/Network-Curlhs-Types.html#CURLinfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "curlinfo_size_download",
          "package": "curlhs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:curlinfo_size_download"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "curlinfo_size_upload",
          "package": "curlhs",
          "signature": "Double",
          "source": "src/Network-Curlhs-Types.html#CURLinfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "curlinfo_size_upload",
          "package": "curlhs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:curlinfo_size_upload"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "curlinfo_speed_download",
          "package": "curlhs",
          "signature": "Double",
          "source": "src/Network-Curlhs-Types.html#CURLinfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "curlinfo_speed_download",
          "package": "curlhs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:curlinfo_speed_download"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "curlinfo_speed_upload",
          "package": "curlhs",
          "signature": "Double",
          "source": "src/Network-Curlhs-Types.html#CURLinfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "curlinfo_speed_upload",
          "package": "curlhs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:curlinfo_speed_upload"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "curlinfo_ssl_engines",
          "package": "curlhs",
          "signature": "[String]",
          "source": "src/Network-Curlhs-Types.html#CURLinfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "curlinfo_ssl_engines",
          "normalized": "[String]",
          "package": "curlhs",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:curlinfo_ssl_engines"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "curlinfo_ssl_verifyresult",
          "package": "curlhs",
          "signature": "Int",
          "source": "src/Network-Curlhs-Types.html#CURLinfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "curlinfo_ssl_verifyresult",
          "package": "curlhs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:curlinfo_ssl_verifyresult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "curlinfo_starttransfer_time",
          "package": "curlhs",
          "signature": "Double",
          "source": "src/Network-Curlhs-Types.html#CURLinfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "curlinfo_starttransfer_time",
          "package": "curlhs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:curlinfo_starttransfer_time"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curlhs.Core",
          "name": "curlinfo_total_time",
          "package": "curlhs",
          "signature": "Double",
          "source": "src/Network-Curlhs-Types.html#CURLinfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curlhs Core",
          "module": "Network.Curlhs.Core",
          "name": "curlinfo_total_time",
          "package": "curlhs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curlhs/docs/Network-Curlhs-Core.html#v:curlinfo_total_time"
      }
    }
  ]
]