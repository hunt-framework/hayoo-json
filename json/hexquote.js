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
        "word": "hexquote"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eProvides a quasiquoter for hexadecimal ByteString literals, with\n placeholders that bind variables.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Hex.Quote",
          "name": "Quote",
          "package": "hexquote",
          "source": "src/Data-Hex-Quote.html",
          "type": "module"
        },
        "index": {
          "description": "Provides quasiquoter for hexadecimal ByteString literals with placeholders that bind variables",
          "hierarchy": "Data Hex Quote",
          "module": "Data.Hex.Quote",
          "name": "Quote",
          "package": "hexquote",
          "partial": "Quote",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hexquote/docs/Data-Hex-Quote.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAs an expression, the \u003ccode\u003e\u003ccode\u003e\u003ca\u003ehex\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e quasiquoter provides hexadecimal \u003ccode\u003e\u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e\nliterals:\n\u003c/p\u003e\u003cpre\u003eimport Data.Hex.Quote\nimport qualified Data.ByteString as B\n\nmain = B.putStr [hex|\n    57 65 2c 20 61 6c 6f 6e 65 20 6f 6e 20 65 61 72\n    74 68 2c 20 63 61 6e 20 72 65 62 65 6c 20 61 67\n    61 69 6e 73 74 20 74 68 65 20 74 79 72 61 6e 6e\n    79 20 6f 66 20 74 68 65 20 73 65 6c 66 69 73 68\n    20 72 65 70 6c 69 63 61 74 6f 72 73 2e 0a |]\n\u003c/pre\u003e\u003cp\u003eAll characters other than \u003ccode\u003e0123456789abcdefABCDEF\u003c/code\u003e are ignored, including\nwhitespace.  Comments start with \"\u003ccode\u003e--\u003c/code\u003e\" and continue to end-of-line:\n\u003c/p\u003e\u003cpre\u003ecode = [hex|\n    7e3a          -- jle  0x3c\n    4889f5        -- mov  rbp, rsi\n    bb01000000    -- mov  ebx, 0x1\n    488b7d08 |]   -- mov  rdi, [rbp+0x8]\n\u003c/pre\u003e\u003cp\u003eWhen using \u003ccode\u003e\u003ccode\u003e\u003ca\u003ehex\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e as a pattern, you can include placeholders of the form\n\u003ccode\u003e\u003cname:size\u003e\u003c/code\u003e, where\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003ename\u003c/code\u003e is a Haskell identifier, or the wildcard pattern \"\u003ccode\u003e_\u003c/code\u003e\"\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003esize\u003c/code\u003e is the size of the field in bytes, or the word \u003ccode\u003erest\u003c/code\u003e to consume\n  the rest of the \u003ccode\u003e\u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe named placeholders bind local variables of type \u003ccode\u003e\u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.  Here's\nan example of pattern-matching an IPv4-over-Ethernet-II frame:\n\u003c/p\u003e\u003cpre\u003eimport Data.Hex.Quote\n\ndescribe [hex|\n    \u003csrc_mac:6\u003e \u003cdst_mac:6\u003e 08 00  -- ethernet header\n    45 \u003c_:1\u003e \u003clen:2\u003e               -- start of IP header\n    \u003c_:rest\u003e                       -- discard remaining frame\n  |] = (src_mac, dst_mac, len)\n\ndescribe _ = error \"unknown frame\"\n\u003c/pre\u003e\u003cp\u003eQuasiquotes require the \u003ccode\u003eQuasiQuotes\u003c/code\u003e extension.  In pattern context, \u003ccode\u003e\u003ccode\u003e\u003ca\u003ehex\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e also\nrequires the \u003ccode\u003eViewPatterns\u003c/code\u003e extension.\n\u003c/p\u003e",
          "module": "Data.Hex.Quote",
          "name": "hex",
          "package": "hexquote",
          "signature": "QuasiQuoter",
          "source": "src/Data-Hex-Quote.html#hex",
          "type": "function"
        },
        "index": {
          "description": "As an expression the hex quasiquoter provides hexadecimal ByteString literals import Data.Hex.Quote import qualified Data.ByteString as main B.putStr hex All characters other than abcdefABCDEF are ignored including whitespace Comments start with and continue to end-of-line code hex e3a jle x3c f5 mov rbp rsi bb01000000 mov ebx x1 b7d08 mov rdi rbp x8 When using hex as pattern you can include placeholders of the form name size where name is Haskell identifier or the wildcard pattern size is the size of the field in bytes or the word rest to consume the rest of the ByteString The named placeholders bind local variables of type ByteString Here an example of pattern-matching an IPv4-over-Ethernet-II frame import Data.Hex.Quote describe hex src mac dst mac ethernet header len start of IP header rest discard remaining frame src mac dst mac len describe error unknown frame Quasiquotes require the QuasiQuotes extension In pattern context hex also requires the ViewPatterns extension",
          "hierarchy": "Data Hex Quote",
          "module": "Data.Hex.Quote",
          "name": "hex",
          "package": "hexquote",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexquote/docs/Data-Hex-Quote.html#v:hex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe hexadecimal parser used for \u003ccode\u003e\u003ccode\u003e\u003ca\u003ehex\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e expressions.\n\u003c/p\u003e",
          "module": "Data.Hex.Quote",
          "name": "parseHex",
          "package": "hexquote",
          "signature": "String -\u003e [Word8]",
          "source": "src/Data-Hex-Quote.html#parseHex",
          "type": "function"
        },
        "index": {
          "description": "The hexadecimal parser used for hex expressions",
          "hierarchy": "Data Hex Quote",
          "module": "Data.Hex.Quote",
          "name": "parseHex",
          "normalized": "String-\u003e[Word]",
          "package": "hexquote",
          "partial": "Hex",
          "signature": "String-\u003e[Word]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexquote/docs/Data-Hex-Quote.html#v:parseHex"
      }
    }
  ]
]