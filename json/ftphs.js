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
        "word": "ftphs"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides a parser that is used internally by\n\u003ca\u003eNetwork.FTP.Client\u003c/a\u003e.  You almost certainly do not want to use\nthis module directly.  Use \u003ca\u003eNetwork.FTP.Client\u003c/a\u003e instead.\n\u003c/p\u003e\u003cp\u003eWritten by John Goerzen, jgoerzen@complete.org\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.FTP.Client.Parser",
          "name": "Parser",
          "package": "ftphs",
          "source": "src/Network-FTP-Client-Parser.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides parser that is used internally by Network.FTP.Client You almost certainly do not want to use this module directly Use Network.FTP.Client instead Written by John Goerzen jgoerzen@complete.org",
          "hierarchy": "Network FTP Client Parser",
          "module": "Network.FTP.Client.Parser",
          "name": "Parser",
          "package": "ftphs",
          "partial": "Parser",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ftphs/docs/Network-FTP-Client-Parser.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.FTP.Client.Parser",
          "name": "FTPResult",
          "package": "ftphs",
          "source": "src/Network-FTP-Client-Parser.html#FTPResult",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network FTP Client Parser",
          "module": "Network.FTP.Client.Parser",
          "name": "FTPResult",
          "package": "ftphs",
          "partial": "FTPResult",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ftphs/docs/Network-FTP-Client-Parser.html#t:FTPResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a FTP reply.  Logs debug messages.\n\u003c/p\u003e",
          "module": "Network.FTP.Client.Parser",
          "name": "debugParseGoodReply",
          "package": "ftphs",
          "signature": "String -\u003e IO FTPResult",
          "source": "src/Network-FTP-Client-Parser.html#debugParseGoodReply",
          "type": "function"
        },
        "index": {
          "description": "Parse FTP reply Logs debug messages",
          "hierarchy": "Network FTP Client Parser",
          "module": "Network.FTP.Client.Parser",
          "name": "debugParseGoodReply",
          "normalized": "String-\u003eIO FTPResult",
          "package": "ftphs",
          "partial": "Parse Good Reply",
          "signature": "String-\u003eIO FTPResult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ftphs/docs/Network-FTP-Client-Parser.html#v:debugParseGoodReply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.FTP.Client.Parser",
          "name": "forceioresp",
          "package": "ftphs",
          "signature": "Int -\u003e FTPResult -\u003e IO ()",
          "source": "src/Network-FTP-Client-Parser.html#forceioresp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network FTP Client Parser",
          "module": "Network.FTP.Client.Parser",
          "name": "forceioresp",
          "normalized": "Int-\u003eFTPResult-\u003eIO()",
          "package": "ftphs",
          "signature": "Int-\u003eFTPResult-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ftphs/docs/Network-FTP-Client-Parser.html#v:forceioresp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.FTP.Client.Parser",
          "name": "forcexresp",
          "package": "ftphs",
          "signature": "a -\u003e (a, t) -\u003e (a, t)",
          "source": "src/Network-FTP-Client-Parser.html#forcexresp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network FTP Client Parser",
          "module": "Network.FTP.Client.Parser",
          "name": "forcexresp",
          "normalized": "a-\u003e(a,b)-\u003e(a,b)",
          "package": "ftphs",
          "signature": "a-\u003e(a,t)-\u003e(a,t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ftphs/docs/Network-FTP-Client-Parser.html#v:forcexresp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a port string to a socket address.  This is the inverse calculation of \u003ccode\u003e\u003ca\u003etoPortString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.FTP.Client.Parser",
          "name": "fromPortString",
          "package": "ftphs",
          "signature": "String -\u003e IO SockAddr",
          "source": "src/Network-FTP-Client-Parser.html#fromPortString",
          "type": "function"
        },
        "index": {
          "description": "Converts port string to socket address This is the inverse calculation of toPortString",
          "hierarchy": "Network FTP Client Parser",
          "module": "Network.FTP.Client.Parser",
          "name": "fromPortString",
          "normalized": "String-\u003eIO SockAddr",
          "package": "ftphs",
          "partial": "Port String",
          "signature": "String-\u003eIO SockAddr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ftphs/docs/Network-FTP-Client-Parser.html#v:fromPortString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.FTP.Client.Parser",
          "name": "isxresp",
          "package": "ftphs",
          "signature": "a -\u003e (a, t) -\u003e Bool",
          "source": "src/Network-FTP-Client-Parser.html#isxresp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network FTP Client Parser",
          "module": "Network.FTP.Client.Parser",
          "name": "isxresp",
          "normalized": "a-\u003e(a,b)-\u003eBool",
          "package": "ftphs",
          "signature": "a-\u003e(a,t)-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ftphs/docs/Network-FTP-Client-Parser.html#v:isxresp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.FTP.Client.Parser",
          "name": "parseDirName",
          "package": "ftphs",
          "signature": "FTPResult -\u003e Maybe String",
          "source": "src/Network-FTP-Client-Parser.html#parseDirName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network FTP Client Parser",
          "module": "Network.FTP.Client.Parser",
          "name": "parseDirName",
          "normalized": "FTPResult-\u003eMaybe String",
          "package": "ftphs",
          "partial": "Dir Name",
          "signature": "FTPResult-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ftphs/docs/Network-FTP-Client-Parser.html#v:parseDirName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a FTP reply.  Returns a (result code, text) pair.\n If the result code indicates an error, raise an exception instead\n of just passing it back.\n\u003c/p\u003e",
          "module": "Network.FTP.Client.Parser",
          "name": "parseGoodReply",
          "package": "ftphs",
          "signature": "String -\u003e IO FTPResult",
          "source": "src/Network-FTP-Client-Parser.html#parseGoodReply",
          "type": "function"
        },
        "index": {
          "description": "Parse FTP reply Returns result code text pair If the result code indicates an error raise an exception instead of just passing it back",
          "hierarchy": "Network FTP Client Parser",
          "module": "Network.FTP.Client.Parser",
          "name": "parseGoodReply",
          "normalized": "String-\u003eIO FTPResult",
          "package": "ftphs",
          "partial": "Good Reply",
          "signature": "String-\u003eIO FTPResult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ftphs/docs/Network-FTP-Client-Parser.html#v:parseGoodReply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a FTP reply.  Returns a (result code, text) pair.\n\u003c/p\u003e",
          "module": "Network.FTP.Client.Parser",
          "name": "parseReply",
          "package": "ftphs",
          "signature": "String -\u003e FTPResult",
          "source": "src/Network-FTP-Client-Parser.html#parseReply",
          "type": "function"
        },
        "index": {
          "description": "Parse FTP reply Returns result code text pair",
          "hierarchy": "Network FTP Client Parser",
          "module": "Network.FTP.Client.Parser",
          "name": "parseReply",
          "normalized": "String-\u003eFTPResult",
          "package": "ftphs",
          "partial": "Reply",
          "signature": "String-\u003eFTPResult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ftphs/docs/Network-FTP-Client-Parser.html#v:parseReply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a response code to a socket address\n\u003c/p\u003e",
          "module": "Network.FTP.Client.Parser",
          "name": "respToSockAddr",
          "package": "ftphs",
          "signature": "FTPResult -\u003e IO SockAddr",
          "source": "src/Network-FTP-Client-Parser.html#respToSockAddr",
          "type": "function"
        },
        "index": {
          "description": "Converts response code to socket address",
          "hierarchy": "Network FTP Client Parser",
          "module": "Network.FTP.Client.Parser",
          "name": "respToSockAddr",
          "normalized": "FTPResult-\u003eIO SockAddr",
          "package": "ftphs",
          "partial": "To Sock Addr",
          "signature": "FTPResult-\u003eIO SockAddr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ftphs/docs/Network-FTP-Client-Parser.html#v:respToSockAddr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a socket address to a string suitable for a PORT command.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e toPortString (SockAddrInet (PortNum 0x1234) (0xaabbccdd)) -\u003e\n                              \"170,187,204,221,18,52\"\n\u003c/pre\u003e",
          "module": "Network.FTP.Client.Parser",
          "name": "toPortString",
          "package": "ftphs",
          "signature": "SockAddr -\u003e IO String",
          "source": "src/Network-FTP-Client-Parser.html#toPortString",
          "type": "function"
        },
        "index": {
          "description": "Converts socket address to string suitable for PORT command Example toPortString SockAddrInet PortNum x1234 xaabbccdd",
          "hierarchy": "Network FTP Client Parser",
          "module": "Network.FTP.Client.Parser",
          "name": "toPortString",
          "normalized": "SockAddr-\u003eIO String",
          "package": "ftphs",
          "partial": "Port String",
          "signature": "SockAddr-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ftphs/docs/Network-FTP-Client-Parser.html#v:toPortString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.FTP.Client.Parser",
          "name": "unexpectedresp",
          "package": "ftphs",
          "signature": "[Char] -\u003e a -\u003e [Char]",
          "source": "src/Network-FTP-Client-Parser.html#unexpectedresp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network FTP Client Parser",
          "module": "Network.FTP.Client.Parser",
          "name": "unexpectedresp",
          "normalized": "[Char]-\u003ea-\u003e[Char]",
          "package": "ftphs",
          "signature": "[Char]-\u003ea-\u003e[Char]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ftphs/docs/Network-FTP-Client-Parser.html#v:unexpectedresp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides a client-side interface to the File Transfer Protocol\nas defined by RFC959 and RFC1123.\n\u003c/p\u003e\u003cp\u003eWritten by John Goerzen, jgoerzen@complete.org\n\u003c/p\u003e\u003cp\u003eWelcome to the FTP module for Haskell.\n\u003c/p\u003e\u003cp\u003eHere is a quick usage example to get you started.  This is a log of a real\nsession with ghci: \n\u003c/p\u003e\u003cp\u003e(This would be similar in a \u003ccode\u003edo\u003c/code\u003e block.  You could also save it to a file and\nrun that with Hugs.)\n\u003c/p\u003e\u003cpre\u003e Prelude\u003e :l Network.FTP.Client\n ...\n\u003c/pre\u003e\u003cp\u003eThe above loads the module.\n\u003c/p\u003e\u003cp\u003eNext, we enable the debugging.  This will turn on all the \u003ccode\u003eFTP sent\u003c/code\u003e and\n\u003ccode\u003eFTP received\u003c/code\u003e messages you'll see.\n\u003c/p\u003e\u003cpre\u003e Prelude Network.FTP.Client\u003e enableFTPDebugging\n\u003c/pre\u003e\u003cp\u003eNow, connect to the server on \u003ccode\u003eftp.kernel.org\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e *Network.FTP.Client\u003e h \u003c- easyConnectFTP \"ftp.kernel.org\"\n FTP received: 220 Welcome to ftp.kernel.org.\n\u003c/pre\u003e\u003cp\u003eAnd log in anonymously.\n\u003c/p\u003e\u003cpre\u003e *Network.FTP.Client\u003e loginAnon h\n FTP sent: USER anonymous\n FTP received: 331 Please specify the password.\n FTP sent: PASS anonymous@\n ...\n FTP received: 230 Login successful.\n\u003c/pre\u003e\u003cp\u003eChange the directory...\n\u003c/p\u003e\u003cpre\u003e Prelude Network.FTP.Client\u003e cwd h \"/pub/linux/kernel/Historic\"\n FTP sent: CWD /pub/linux/kernel/Historic\n FTP received: 250 Directory successfully changed.\n\u003c/pre\u003e\u003cp\u003eLet's look at the directory. \u003ccode\u003e\u003ca\u003enlst\u003c/a\u003e\u003c/code\u003e returns a list of strings, each string\ncorresponding to a filename.  Here, \u003ccode\u003eputStrLn . unlines\u003c/code\u003e will simply\nprint them out, one per line.\n\u003c/p\u003e\u003cpre\u003e Prelude Network.FTP.Client\u003e nlst h Nothing \u003e\u003e= putStrLn . unlines\n FTP sent: TYPE A\n FTP received: 200 Switching to ASCII mode.\n FTP sent: PASV\n FTP received: 227 Entering Passive Mode (204,152,189,116,130,143)\n FTP sent: NLST\n FTP received: 150 Here comes the directory listing.\n linux-0.01.tar.bz2\n linux-0.01.tar.bz2.sign\n linux-0.01.tar.gz\n linux-0.01.tar.gz.sign\n linux-0.01.tar.sign\n old-versions\n v0.99\n FTP received: 226 Directory send OK.\n\u003c/pre\u003e\u003cp\u003eLet's try downloading something and print it to the screen.  Again, we use\n\u003ccode\u003eputStrLn\u003c/code\u003e.  We use \u003ccode\u003efst\u003c/code\u003e here because \u003ccode\u003e\u003ca\u003egetbinary\u003c/a\u003e\u003c/code\u003e returns a tuple consisting\nof a string representing the data and a \u003ccode\u003e\u003ca\u003eFTPResult\u003c/a\u003e\u003c/code\u003e code.\n\u003c/p\u003e\u003cpre\u003e Prelude Network.FTP.Client\u003e getbinary h \"linux-0.01.tar.gz.sign\" \u003e\u003e= putStrLn . fst\n FTP sent: TYPE I\n FTP received: 200 Switching to Binary mode.\n FTP sent: PASV\n FTP received: 227 Entering Passive Mode (204,152,189,116,121,121)\n FTP sent: RETR linux-0.01.tar.gz.sign\n FTP received: 150 Opening BINARY mode data connection for linux-0.01.tar.gz.sign (248 bytes).\n -----BEGIN PGP SIGNATURE-----\n Version: GnuPG v1.0.0 (GNU/Linux)\n Comment: See http://www.kernel.org/signature.html for info\n \n iD8DBQA54rf0yGugalF9Dw4RAqelAJ9lafFni4f/QyJ2IqDXzW2nz/ZIogCfRPtg\n uYpWffOhkyByfhUt8Lcelec=\n =KnLA\n -----END PGP SIGNATURE-----\n FTP received: 226 File send OK.\n\u003c/pre\u003e\u003cp\u003eHere's an example showing you what the result code looks like.\n\u003c/p\u003e\u003cpre\u003e Prelude Network.FTP.Client\u003e getbinary h \"linux-0.01.tar.gz.sign\" \u003e\u003e= print . snd\n ...\n (226,[\"File send OK.\"])\n\u003c/pre\u003e\u003cp\u003eThe first component of the \u003ccode\u003e\u003ca\u003eFTPResult\u003c/a\u003e\u003c/code\u003e object is the numeric status code from\nthe server.  The second component is a list of message lines from the server.\n\u003c/p\u003e\u003cp\u003eNow, let's get a more detailed directory listing:\n\u003c/p\u003e\u003cpre\u003e Prelude Network.FTP.Client\u003e dir h Nothing \u003e\u003e= putStrLn . unlines\n ...\n -r--r--r--    1 536      536         63362 Oct 30  1993 linux-0.01.tar.bz2\n -r--r--r--    1 536      536           248 Oct 30  1993 linux-0.01.tar.bz2.sign\n -r--r--r--    1 536      536         73091 Oct 30  1993 linux-0.01.tar.gz\n -r--r--r--    1 536      536           248 Oct 30  1993 linux-0.01.tar.gz.sign\n -r--r--r--    1 536      536           248 Oct 30  1993 linux-0.01.tar.sign\n drwxrwsr-x    5 536      536          4096 Mar 20  2003 old-versions\n drwxrwsr-x    2 536      536          4096 Mar 20  2003 v0.99\n FTP received: 226 Directory send OK.\n\u003c/pre\u003e\u003cp\u003eAnd finally, log out:\n\u003c/p\u003e\u003cpre\u003e Prelude Network.FTP.Client\u003e quit h\n FTP sent: QUIT\n FTP received: 221 Goodbye.\n\u003c/pre\u003e\u003cp\u003eHere is one big important caution:\n\u003c/p\u003e\u003cp\u003e/You MUST consume all data from commands that return file data before you\nissue any other FTP commands./\n\u003c/p\u003e\u003cp\u003eThat's due to the lazy nature of Haskell.  This means that, for instance,\nyou can't just iterate over the items \u003ccode\u003e\u003ca\u003enlst\u003c/a\u003e\u003c/code\u003e returns, trying to \u003ccode\u003e\u003ca\u003egetbinary\u003c/a\u003e\u003c/code\u003e\neach one of them -- the system is still transferring \u003ccode\u003e\u003ca\u003enlst\u003c/a\u003e\u003c/code\u003e data while you\nare trying that, and confusion will ensue.  Either open two FTP connections\nor make sure you consume the \u003ccode\u003e\u003ca\u003enlst\u003c/a\u003e\u003c/code\u003e data first.\n\u003c/p\u003e\u003cp\u003eHere is a partial list of commands effected: \u003ccode\u003e\u003ca\u003enlst\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003edir\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003egetbinary\u003c/a\u003e\u003c/code\u003e,\n\u003ccode\u003e\u003ca\u003egetlines\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003edownloadbinary\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eseqList\u003c/a\u003e\u003c/code\u003e function could be quite helpful here.  For instance:\n\u003c/p\u003e\u003cpre\u003e x \u003c- nlst h Nothing\n map (\\fn -\u003e ...download files from FTP... ) (seqList x)\n\u003c/pre\u003e\u003cp\u003eIf you omit the call to \u003ccode\u003e\u003ca\u003eseqList\u003c/a\u003e\u003c/code\u003e, commands to download files\nwill be issued before the entire directory listing is read.  FTP cannot handle\nthis.\n\u003c/p\u003e\u003cp\u003eThe corrolary is:\n\u003c/p\u003e\u003cp\u003e/Actions that yield lazy data for data uploading must not issue FTP\ncommands themselves./\n\u003c/p\u003e\u003cp\u003eThis will be fairly rare.  Just be aware of this.\n\u003c/p\u003e\u003cp\u003eThis module logs messages under \u003ccode\u003eNetwork.FTP.Client\u003c/code\u003e for outgoing\ntraffic and \u003ccode\u003eNetwork.FTP.Client.Parser\u003c/code\u003e for incoming traffic, all with the\n\u003ccode\u003e\u003ca\u003eDEBUG\u003c/a\u003e\u003c/code\u003e priority, so by default, no log messages are seen.\nThe \u003ccode\u003e\u003ca\u003eenableFTPDebugging\u003c/a\u003e\u003c/code\u003e function will adjust the priorities of these\ntwo handlers so debug messages are seen.  Only control channel conversations\nare logged.  Data channel conversations are never logged.\n\u003c/p\u003e\u003cp\u003eAll exceptions raised by this module have a string beginning with\n\u003ccode\u003e\"FTP: \"\u003c/code\u003e.  Most errors will be IO userErrors.  In a few extremely rare\ncases, errors may be raised by the Prelude error function, though these\nwill also have a string beginning with \u003ccode\u003e\"FTP: \"\u003c/code\u003e.  Exceptions raised by\nthe underlying networking code will be passed on to you unmodified.\n\u003c/p\u003e\u003cp\u003eUseful standards:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e RFC959, \u003ca\u003ehttp://www.cse.ohio-state.edu/cgi-bin/rfc/rfc0959.html\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e Passive mode, RFC1579, \u003ca\u003ehttp://www.cse.ohio-state.edu/cgi-bin/rfc/rfc1579.html\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e Extended passive mode, IPv6, RFC2428 \u003ca\u003ehttp://www.cse.ohio-state.edu/cgi-bin/rfc/rfc2428.html\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e Feature negotiation, RFC2389, \u003ca\u003ehttp://www.cse.ohio-state.edu/cgi-bin/rfc/rfc2389.html\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e Internationalization of FTP, RFC2640, \u003ca\u003ehttp://www.cse.ohio-state.edu/cgi-bin/rfc/rfc2640.html\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e FTP security considerations, RFC2577, \u003ca\u003ehttp://www.cse.ohio-state.edu/cgi-bin/rfc/rfc2577.html\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e FTP URLs, RFC1738, \u003ca\u003ehttp://www.cse.ohio-state.edu/cgi-bin/rfc/rfc1738.html\u003c/a\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
          "module": "Network.FTP.Client",
          "name": "Client",
          "package": "ftphs",
          "source": "src/Network-FTP-Client.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides client-side interface to the File Transfer Protocol as defined by RFC959 and RFC1123 Written by John Goerzen jgoerzen@complete.org Welcome to the FTP module for Haskell Here is quick usage example to get you started This is log of real session with ghci This would be similar in do block You could also save it to file and run that with Hugs Prelude Network.FTP.Client The above loads the module Next we enable the debugging This will turn on all the FTP sent and FTP received messages you ll see Prelude Network.FTP.Client enableFTPDebugging Now connect to the server on ftp.kernel.org Network.FTP.Client easyConnectFTP ftp.kernel.org FTP received Welcome to ftp.kernel.org And log in anonymously Network.FTP.Client loginAnon FTP sent USER anonymous FTP received Please specify the password FTP sent PASS anonymous FTP received Login successful Change the directory Prelude Network.FTP.Client cwd pub linux kernel Historic FTP sent CWD pub linux kernel Historic FTP received Directory successfully changed Let look at the directory nlst returns list of strings each string corresponding to filename Here putStrLn unlines will simply print them out one per line Prelude Network.FTP.Client nlst Nothing putStrLn unlines FTP sent TYPE FTP received Switching to ASCII mode FTP sent PASV FTP received Entering Passive Mode FTP sent NLST FTP received Here comes the directory listing linux-0.01.tar.bz2 linux-0.01.tar.bz2.sign linux-0.01.tar.gz linux-0.01.tar.gz.sign linux-0.01.tar.sign old-versions v0.99 FTP received Directory send OK Let try downloading something and print it to the screen Again we use putStrLn We use fst here because getbinary returns tuple consisting of string representing the data and FTPResult code Prelude Network.FTP.Client getbinary linux-0.01.tar.gz.sign putStrLn fst FTP sent TYPE FTP received Switching to Binary mode FTP sent PASV FTP received Entering Passive Mode FTP sent RETR linux-0.01.tar.gz.sign FTP received Opening BINARY mode data connection for linux-0.01.tar.gz.sign bytes BEGIN PGP SIGNATURE Version GnuPG v1.0.0 GNU Linux Comment See http www.kernel.org signature.html for info iD8DBQA54rf0yGugalF9Dw4RAqelAJ9lafFni4f QyJ2IqDXzW2nz ZIogCfRPtg uYpWffOhkyByfhUt8Lcelec KnLA END PGP SIGNATURE FTP received File send OK Here an example showing you what the result code looks like Prelude Network.FTP.Client getbinary linux-0.01.tar.gz.sign print snd File send OK The first component of the FTPResult object is the numeric status code from the server The second component is list of message lines from the server Now let get more detailed directory listing Prelude Network.FTP.Client dir Nothing putStrLn unlines r--r--r Oct linux-0.01.tar.bz2 r--r--r Oct linux-0.01.tar.bz2.sign r--r--r Oct linux-0.01.tar.gz r--r--r Oct linux-0.01.tar.gz.sign r--r--r Oct linux-0.01.tar.sign drwxrwsr-x Mar old-versions drwxrwsr-x Mar v0.99 FTP received Directory send OK And finally log out Prelude Network.FTP.Client quit FTP sent QUIT FTP received Goodbye Here is one big important caution You MUST consume all data from commands that return file data before you issue any other FTP commands That due to the lazy nature of Haskell This means that for instance you can just iterate over the items nlst returns trying to getbinary each one of them the system is still transferring nlst data while you are trying that and confusion will ensue Either open two FTP connections or make sure you consume the nlst data first Here is partial list of commands effected nlst dir getbinary getlines downloadbinary The seqList function could be quite helpful here For instance nlst Nothing map fn download files from FTP seqList If you omit the call to seqList commands to download files will be issued before the entire directory listing is read FTP cannot handle this The corrolary is Actions that yield lazy data for data uploading must not issue FTP commands themselves This will be fairly rare Just be aware of this This module logs messages under Network.FTP.Client for outgoing traffic and Network.FTP.Client.Parser for incoming traffic all with the DEBUG priority so by default no log messages are seen The enableFTPDebugging function will adjust the priorities of these two handlers so debug messages are seen Only control channel conversations are logged Data channel conversations are never logged All exceptions raised by this module have string beginning with FTP Most errors will be IO userErrors In few extremely rare cases errors may be raised by the Prelude error function though these will also have string beginning with FTP Exceptions raised by the underlying networking code will be passed on to you unmodified Useful standards RFC959 http www.cse.ohio-state.edu cgi-bin rfc rfc0959.html Passive mode RFC1579 http www.cse.ohio-state.edu cgi-bin rfc rfc1579.html Extended passive mode IPv6 RFC2428 http www.cse.ohio-state.edu cgi-bin rfc rfc2428.html Feature negotiation RFC2389 http www.cse.ohio-state.edu cgi-bin rfc rfc2389.html Internationalization of FTP RFC2640 http www.cse.ohio-state.edu cgi-bin rfc rfc2640.html FTP security considerations RFC2577 http www.cse.ohio-state.edu cgi-bin rfc rfc2577.html FTP URLs RFC1738 http www.cse.ohio-state.edu cgi-bin rfc rfc1738.html",
          "hierarchy": "Network FTP Client",
          "module": "Network.FTP.Client",
          "name": "Client",
          "package": "ftphs",
          "partial": "Client",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ftphs/docs/Network-FTP-Client.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.FTP.Client",
          "name": "FTPConnection",
          "package": "ftphs",
          "source": "src/Network-FTP-Client.html#FTPConnection",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network FTP Client",
          "module": "Network.FTP.Client",
          "name": "FTPConnection",
          "package": "ftphs",
          "partial": "FTPConnection",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ftphs/docs/Network-FTP-Client.html#t:FTPConnection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConnect to remote FTP server and read the welcome. \n\u003c/p\u003e",
          "module": "Network.FTP.Client",
          "name": "connectFTP",
          "package": "ftphs",
          "signature": "HostName -\u003e PortNumber -\u003e IO (FTPConnection, FTPResult)",
          "source": "src/Network-FTP-Client.html#connectFTP",
          "type": "function"
        },
        "index": {
          "description": "Connect to remote FTP server and read the welcome",
          "hierarchy": "Network FTP Client",
          "module": "Network.FTP.Client",
          "name": "connectFTP",
          "normalized": "HostName-\u003ePortNumber-\u003eIO(FTPConnection,FTPResult)",
          "package": "ftphs",
          "partial": "FTP",
          "signature": "HostName-\u003ePortNumber-\u003eIO(FTPConnection,FTPResult)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ftphs/docs/Network-FTP-Client.html#v:connectFTP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChange the working directory. \n\u003c/p\u003e",
          "module": "Network.FTP.Client",
          "name": "cwd",
          "package": "ftphs",
          "signature": "FTPConnection -\u003e String -\u003e IO FTPResult",
          "source": "src/Network-FTP-Client.html#cwd",
          "type": "function"
        },
        "index": {
          "description": "Change the working directory",
          "hierarchy": "Network FTP Client",
          "module": "Network.FTP.Client",
          "name": "cwd",
          "normalized": "FTPConnection-\u003eString-\u003eIO FTPResult",
          "package": "ftphs",
          "signature": "FTPConnection-\u003eString-\u003eIO FTPResult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ftphs/docs/Network-FTP-Client.html#v:cwd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelete (unlink) a file. \n\u003c/p\u003e",
          "module": "Network.FTP.Client",
          "name": "delete",
          "package": "ftphs",
          "signature": "FTPConnection -\u003e String -\u003e IO FTPResult",
          "source": "src/Network-FTP-Client.html#delete",
          "type": "function"
        },
        "index": {
          "description": "Delete unlink file",
          "hierarchy": "Network FTP Client",
          "module": "Network.FTP.Client",
          "name": "delete",
          "normalized": "FTPConnection-\u003eString-\u003eIO FTPResult",
          "package": "ftphs",
          "signature": "FTPConnection-\u003eString-\u003eIO FTPResult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ftphs/docs/Network-FTP-Client.html#v:delete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve the system-specific long form of a directory list.\n\u003c/p\u003e\u003cp\u003eFIXME: should this take a list of dirs? \n\u003c/p\u003e",
          "module": "Network.FTP.Client",
          "name": "dir",
          "package": "ftphs",
          "signature": "FTPConnection-\u003e Maybe String-\u003e IO [String]",
          "type": "function"
        },
        "index": {
          "description": "Retrieve the system-specific long form of directory list FIXME should this take list of dirs",
          "hierarchy": "Network FTP Client",
          "module": "Network.FTP.Client",
          "name": "dir",
          "normalized": "FTPConnection-\u003eMaybe String-\u003eIO[String]",
          "package": "ftphs",
          "signature": "FTPConnection-\u003eMaybe String-\u003eIO[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ftphs/docs/Network-FTP-Client.html#v:dir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDownloads a file from remote and saves to disk in binary mode.  Note: filename is used for both local and remote. \n\u003c/p\u003e",
          "module": "Network.FTP.Client",
          "name": "downloadbinary",
          "package": "ftphs",
          "signature": "FTPConnection -\u003e String -\u003e IO FTPResult",
          "source": "src/Network-FTP-Client.html#downloadbinary",
          "type": "function"
        },
        "index": {
          "description": "Downloads file from remote and saves to disk in binary mode Note filename is used for both local and remote",
          "hierarchy": "Network FTP Client",
          "module": "Network.FTP.Client",
          "name": "downloadbinary",
          "normalized": "FTPConnection-\u003eString-\u003eIO FTPResult",
          "package": "ftphs",
          "signature": "FTPConnection-\u003eString-\u003eIO FTPResult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ftphs/docs/Network-FTP-Client.html#v:downloadbinary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConnect to the remote FTP server and read but discard\n   the welcome.  Assumes\n   default FTP port, 21, on remote. \n\u003c/p\u003e",
          "module": "Network.FTP.Client",
          "name": "easyConnectFTP",
          "package": "ftphs",
          "signature": "HostName -\u003e IO FTPConnection",
          "source": "src/Network-FTP-Client.html#easyConnectFTP",
          "type": "function"
        },
        "index": {
          "description": "Connect to the remote FTP server and read but discard the welcome Assumes default FTP port on remote",
          "hierarchy": "Network FTP Client",
          "module": "Network.FTP.Client",
          "name": "easyConnectFTP",
          "normalized": "HostName-\u003eIO FTPConnection",
          "package": "ftphs",
          "partial": "Connect FTP",
          "signature": "HostName-\u003eIO FTPConnection",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ftphs/docs/Network-FTP-Client.html#v:easyConnectFTP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnable logging of FTP messages through \u003ccode\u003e\u003ca\u003eLogger\u003c/a\u003e\u003c/code\u003e.\nThis sets the log levels of \u003ccode\u003eNetwork.FTP.Client.Parser\u003c/code\u003e and\n\u003ccode\u003eNetwork.FTP.Client\u003c/code\u003e to DEBUG.  By default, this means that\nfull protocol dumps will be sent to stderr.\n\u003c/p\u003e\u003cp\u003eThe effect is global and persists until changed.\n\u003c/p\u003e",
          "module": "Network.FTP.Client",
          "name": "enableFTPDebugging",
          "package": "ftphs",
          "signature": "IO ()",
          "source": "src/Network-FTP-Client.html#enableFTPDebugging",
          "type": "function"
        },
        "index": {
          "description": "Enable logging of FTP messages through Logger This sets the log levels of Network.FTP.Client.Parser and Network.FTP.Client to DEBUG By default this means that full protocol dumps will be sent to stderr The effect is global and persists until changed",
          "hierarchy": "Network FTP Client",
          "module": "Network.FTP.Client",
          "name": "enableFTPDebugging",
          "normalized": "IO()",
          "package": "ftphs",
          "partial": "FTPDebugging",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ftphs/docs/Network-FTP-Client.html#v:enableFTPDebugging"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieves the specified file in binary mode. \n\u003c/p\u003e",
          "module": "Network.FTP.Client",
          "name": "getbinary",
          "package": "ftphs",
          "signature": "FTPConnection -\u003e String -\u003e IO (String, FTPResult)",
          "source": "src/Network-FTP-Client.html#getbinary",
          "type": "function"
        },
        "index": {
          "description": "Retrieves the specified file in binary mode",
          "hierarchy": "Network FTP Client",
          "module": "Network.FTP.Client",
          "name": "getbinary",
          "normalized": "FTPConnection-\u003eString-\u003eIO(String,FTPResult)",
          "package": "ftphs",
          "signature": "FTPConnection-\u003eString-\u003eIO(String,FTPResult)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ftphs/docs/Network-FTP-Client.html#v:getbinary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieves the specified file in text mode. \n\u003c/p\u003e",
          "module": "Network.FTP.Client",
          "name": "getlines",
          "package": "ftphs",
          "signature": "FTPConnection -\u003e String -\u003e IO ([String], FTPResult)",
          "source": "src/Network-FTP-Client.html#getlines",
          "type": "function"
        },
        "index": {
          "description": "Retrieves the specified file in text mode",
          "hierarchy": "Network FTP Client",
          "module": "Network.FTP.Client",
          "name": "getlines",
          "normalized": "FTPConnection-\u003eString-\u003eIO([String],FTPResult)",
          "package": "ftphs",
          "signature": "FTPConnection-\u003eString-\u003eIO([String],FTPResult)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ftphs/docs/Network-FTP-Client.html#v:getlines"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.FTP.Client",
          "name": "isPassive",
          "package": "ftphs",
          "signature": "FTPConnection -\u003e Bool",
          "source": "src/Network-FTP-Client.html#isPassive",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network FTP Client",
          "module": "Network.FTP.Client",
          "name": "isPassive",
          "normalized": "FTPConnection-\u003eBool",
          "package": "ftphs",
          "partial": "Passive",
          "signature": "FTPConnection-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ftphs/docs/Network-FTP-Client.html#v:isPassive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLog in to an FTP account. \n\u003c/p\u003e",
          "module": "Network.FTP.Client",
          "name": "login",
          "package": "ftphs",
          "signature": "FTPConnection-\u003e String-\u003e Maybe String-\u003e Maybe String-\u003e IO FTPResult",
          "type": "function"
        },
        "index": {
          "description": "Log in to an FTP account",
          "hierarchy": "Network FTP Client",
          "module": "Network.FTP.Client",
          "name": "login",
          "normalized": "FTPConnection-\u003eString-\u003eMaybe String-\u003eMaybe String-\u003eIO FTPResult",
          "package": "ftphs",
          "signature": "FTPConnection-\u003eString-\u003eMaybe String-\u003eMaybe String-\u003eIO FTPResult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ftphs/docs/Network-FTP-Client.html#v:login"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLog in anonymously. \n\u003c/p\u003e",
          "module": "Network.FTP.Client",
          "name": "loginAnon",
          "package": "ftphs",
          "signature": "FTPConnection -\u003e IO FTPResult",
          "source": "src/Network-FTP-Client.html#loginAnon",
          "type": "function"
        },
        "index": {
          "description": "Log in anonymously",
          "hierarchy": "Network FTP Client",
          "module": "Network.FTP.Client",
          "name": "loginAnon",
          "normalized": "FTPConnection-\u003eIO FTPResult",
          "package": "ftphs",
          "partial": "Anon",
          "signature": "FTPConnection-\u003eIO FTPResult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ftphs/docs/Network-FTP-Client.html#v:loginAnon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake new directory.  Returns the absolute name of the\n new directory if possible.\n\u003c/p\u003e",
          "module": "Network.FTP.Client",
          "name": "mkdir",
          "package": "ftphs",
          "signature": "FTPConnection -\u003e String -\u003e IO (Maybe String, FTPResult)",
          "source": "src/Network-FTP-Client.html#mkdir",
          "type": "function"
        },
        "index": {
          "description": "Make new directory Returns the absolute name of the new directory if possible",
          "hierarchy": "Network FTP Client",
          "module": "Network.FTP.Client",
          "name": "mkdir",
          "normalized": "FTPConnection-\u003eString-\u003eIO(Maybe String,FTPResult)",
          "package": "ftphs",
          "signature": "FTPConnection-\u003eString-\u003eIO(Maybe String,FTPResult)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ftphs/docs/Network-FTP-Client.html#v:mkdir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieves a list of files in the given directory. \n\u003c/p\u003e\u003cp\u003eFIXME: should this take a list of dirs? \n\u003c/p\u003e",
          "module": "Network.FTP.Client",
          "name": "nlst",
          "package": "ftphs",
          "signature": "FTPConnection-\u003e Maybe String-\u003e IO [String]",
          "type": "function"
        },
        "index": {
          "description": "Retrieves list of files in the given directory FIXME should this take list of dirs",
          "hierarchy": "Network FTP Client",
          "module": "Network.FTP.Client",
          "name": "nlst",
          "normalized": "FTPConnection-\u003eMaybe String-\u003eIO[String]",
          "package": "ftphs",
          "signature": "FTPConnection-\u003eMaybe String-\u003eIO[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ftphs/docs/Network-FTP-Client.html#v:nlst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEstablishes a connection to the remote. \n\u003c/p\u003e\u003cp\u003eFIXME: need support for rest\n\u003c/p\u003e",
          "module": "Network.FTP.Client",
          "name": "ntransfercmd",
          "package": "ftphs",
          "signature": "FTPConnection -\u003e String -\u003e IO (Handle, Maybe Integer)",
          "source": "src/Network-FTP-Client.html#ntransfercmd",
          "type": "function"
        },
        "index": {
          "description": "Establishes connection to the remote FIXME need support for rest",
          "hierarchy": "Network FTP Client",
          "module": "Network.FTP.Client",
          "name": "ntransfercmd",
          "normalized": "FTPConnection-\u003eString-\u003eIO(Handle,Maybe Integer)",
          "package": "ftphs",
          "signature": "FTPConnection-\u003eString-\u003eIO(Handle,Maybe Integer)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ftphs/docs/Network-FTP-Client.html#v:ntransfercmd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePuts data in the specified file in binary.  The first string is the filename. \n\u003c/p\u003e",
          "module": "Network.FTP.Client",
          "name": "putbinary",
          "package": "ftphs",
          "signature": "FTPConnection -\u003e String -\u003e String -\u003e IO FTPResult",
          "source": "src/Network-FTP-Client.html#putbinary",
          "type": "function"
        },
        "index": {
          "description": "Puts data in the specified file in binary The first string is the filename",
          "hierarchy": "Network FTP Client",
          "module": "Network.FTP.Client",
          "name": "putbinary",
          "normalized": "FTPConnection-\u003eString-\u003eString-\u003eIO FTPResult",
          "package": "ftphs",
          "signature": "FTPConnection-\u003eString-\u003eString-\u003eIO FTPResult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ftphs/docs/Network-FTP-Client.html#v:putbinary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePuts data in the specified file in text mode.  The first string\nis the filename. \n\u003c/p\u003e",
          "module": "Network.FTP.Client",
          "name": "putlines",
          "package": "ftphs",
          "signature": "FTPConnection -\u003e String -\u003e [String] -\u003e IO FTPResult",
          "source": "src/Network-FTP-Client.html#putlines",
          "type": "function"
        },
        "index": {
          "description": "Puts data in the specified file in text mode The first string is the filename",
          "hierarchy": "Network FTP Client",
          "module": "Network.FTP.Client",
          "name": "putlines",
          "normalized": "FTPConnection-\u003eString-\u003e[String]-\u003eIO FTPResult",
          "package": "ftphs",
          "signature": "FTPConnection-\u003eString-\u003e[String]-\u003eIO FTPResult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ftphs/docs/Network-FTP-Client.html#v:putlines"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrint the current working directory.  The first component of the result\n is the parsed directory name, if the servers response was parsable.\n\u003c/p\u003e",
          "module": "Network.FTP.Client",
          "name": "pwd",
          "package": "ftphs",
          "signature": "FTPConnection -\u003e IO (Maybe String, FTPResult)",
          "source": "src/Network-FTP-Client.html#pwd",
          "type": "function"
        },
        "index": {
          "description": "Print the current working directory The first component of the result is the parsed directory name if the servers response was parsable",
          "hierarchy": "Network FTP Client",
          "module": "Network.FTP.Client",
          "name": "pwd",
          "normalized": "FTPConnection-\u003eIO(Maybe String,FTPResult)",
          "package": "ftphs",
          "signature": "FTPConnection-\u003eIO(Maybe String,FTPResult)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ftphs/docs/Network-FTP-Client.html#v:pwd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLog off the server and quit.\n\u003c/p\u003e",
          "module": "Network.FTP.Client",
          "name": "quit",
          "package": "ftphs",
          "signature": "FTPConnection -\u003e IO FTPResult",
          "source": "src/Network-FTP-Client.html#quit",
          "type": "function"
        },
        "index": {
          "description": "Log off the server and quit",
          "hierarchy": "Network FTP Client",
          "module": "Network.FTP.Client",
          "name": "quit",
          "normalized": "FTPConnection-\u003eIO FTPResult",
          "package": "ftphs",
          "signature": "FTPConnection-\u003eIO FTPResult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ftphs/docs/Network-FTP-Client.html#v:quit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRename or move a file. \n\u003c/p\u003e",
          "module": "Network.FTP.Client",
          "name": "rename",
          "package": "ftphs",
          "signature": "FTPConnection-\u003e String-\u003e String-\u003e IO FTPResult",
          "type": "function"
        },
        "index": {
          "description": "Rename or move file",
          "hierarchy": "Network FTP Client",
          "module": "Network.FTP.Client",
          "name": "rename",
          "normalized": "FTPConnection-\u003eString-\u003eString-\u003eIO FTPResult",
          "package": "ftphs",
          "signature": "FTPConnection-\u003eString-\u003eString-\u003eIO FTPResult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ftphs/docs/Network-FTP-Client.html#v:rename"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieves lines of data from the remote. The string gives \nthe command to issue. \n\u003c/p\u003e",
          "module": "Network.FTP.Client",
          "name": "retrlines",
          "package": "ftphs",
          "signature": "FTPConnection -\u003e String -\u003e IO ([String], FTPResult)",
          "source": "src/Network-FTP-Client.html#retrlines",
          "type": "function"
        },
        "index": {
          "description": "Retrieves lines of data from the remote The string gives the command to issue",
          "hierarchy": "Network FTP Client",
          "module": "Network.FTP.Client",
          "name": "retrlines",
          "normalized": "FTPConnection-\u003eString-\u003eIO([String],FTPResult)",
          "package": "ftphs",
          "signature": "FTPConnection-\u003eString-\u003eIO([String],FTPResult)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ftphs/docs/Network-FTP-Client.html#v:retrlines"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove a directory.\n\u003c/p\u003e",
          "module": "Network.FTP.Client",
          "name": "rmdir",
          "package": "ftphs",
          "signature": "FTPConnection -\u003e String -\u003e IO FTPResult",
          "source": "src/Network-FTP-Client.html#rmdir",
          "type": "function"
        },
        "index": {
          "description": "Remove directory",
          "hierarchy": "Network FTP Client",
          "module": "Network.FTP.Client",
          "name": "rmdir",
          "normalized": "FTPConnection-\u003eString-\u003eIO FTPResult",
          "package": "ftphs",
          "signature": "FTPConnection-\u003eString-\u003eIO FTPResult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ftphs/docs/Network-FTP-Client.html#v:rmdir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.FTP.Client",
          "name": "sendcmd",
          "package": "ftphs",
          "signature": "FTPConnection -\u003e [Char] -\u003e IO FTPResult",
          "source": "src/Network-FTP-Client.html#sendcmd",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network FTP Client",
          "module": "Network.FTP.Client",
          "name": "sendcmd",
          "normalized": "FTPConnection-\u003e[Char]-\u003eIO FTPResult",
          "package": "ftphs",
          "signature": "FTPConnection-\u003e[Char]-\u003eIO FTPResult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ftphs/docs/Network-FTP-Client.html#v:sendcmd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets whether passive mode is used (returns new\nconnection object reflecting this) \n\u003c/p\u003e",
          "module": "Network.FTP.Client",
          "name": "setPassive",
          "package": "ftphs",
          "signature": "FTPConnection -\u003e Bool -\u003e FTPConnection",
          "source": "src/Network-FTP-Client.html#setPassive",
          "type": "function"
        },
        "index": {
          "description": "Sets whether passive mode is used returns new connection object reflecting this",
          "hierarchy": "Network FTP Client",
          "module": "Network.FTP.Client",
          "name": "setPassive",
          "normalized": "FTPConnection-\u003eBool-\u003eFTPConnection",
          "package": "ftphs",
          "partial": "Passive",
          "signature": "FTPConnection-\u003eBool-\u003eFTPConnection",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ftphs/docs/Network-FTP-Client.html#v:setPassive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the size of a file.\n\u003c/p\u003e\u003cp\u003eThis command is non-standard and may possibly fail.\n\u003c/p\u003e",
          "module": "Network.FTP.Client",
          "name": "size",
          "package": "ftphs",
          "signature": "FTPConnection -\u003e String -\u003e IO a",
          "source": "src/Network-FTP-Client.html#size",
          "type": "function"
        },
        "index": {
          "description": "Get the size of file This command is non-standard and may possibly fail",
          "hierarchy": "Network FTP Client",
          "module": "Network.FTP.Client",
          "name": "size",
          "normalized": "FTPConnection-\u003eString-\u003eIO a",
          "package": "ftphs",
          "signature": "FTPConnection-\u003eString-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ftphs/docs/Network-FTP-Client.html#v:size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStores the lines of data to the remote.  The string gives the\ncommands to issue. \n\u003c/p\u003e",
          "module": "Network.FTP.Client",
          "name": "storlines",
          "package": "ftphs",
          "signature": "FTPConnection -\u003e String -\u003e [String] -\u003e IO FTPResult",
          "source": "src/Network-FTP-Client.html#storlines",
          "type": "function"
        },
        "index": {
          "description": "Stores the lines of data to the remote The string gives the commands to issue",
          "hierarchy": "Network FTP Client",
          "module": "Network.FTP.Client",
          "name": "storlines",
          "normalized": "FTPConnection-\u003eString-\u003e[String]-\u003eIO FTPResult",
          "package": "ftphs",
          "signature": "FTPConnection-\u003eString-\u003e[String]-\u003eIO FTPResult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ftphs/docs/Network-FTP-Client.html#v:storlines"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the socket part from calling \u003ccode\u003e\u003ca\u003entransfercmd\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "Network.FTP.Client",
          "name": "transfercmd",
          "package": "ftphs",
          "signature": "FTPConnection -\u003e String -\u003e IO Handle",
          "source": "src/Network-FTP-Client.html#transfercmd",
          "type": "function"
        },
        "index": {
          "description": "Returns the socket part from calling ntransfercmd",
          "hierarchy": "Network FTP Client",
          "module": "Network.FTP.Client",
          "name": "transfercmd",
          "normalized": "FTPConnection-\u003eString-\u003eIO Handle",
          "package": "ftphs",
          "signature": "FTPConnection-\u003eString-\u003eIO Handle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ftphs/docs/Network-FTP-Client.html#v:transfercmd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUploads a file from disk in binary mode. Note: filename is used for both local and remote. \n\u003c/p\u003e",
          "module": "Network.FTP.Client",
          "name": "uploadbinary",
          "package": "ftphs",
          "signature": "FTPConnection -\u003e String -\u003e IO FTPResult",
          "source": "src/Network-FTP-Client.html#uploadbinary",
          "type": "function"
        },
        "index": {
          "description": "Uploads file from disk in binary mode Note filename is used for both local and remote",
          "hierarchy": "Network FTP Client",
          "module": "Network.FTP.Client",
          "name": "uploadbinary",
          "normalized": "FTPConnection-\u003eString-\u003eIO FTPResult",
          "package": "ftphs",
          "signature": "FTPConnection-\u003eString-\u003eIO FTPResult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ftphs/docs/Network-FTP-Client.html#v:uploadbinary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides a parser that is used internally by\n\u003ca\u003eNetwork.FTP.Server\u003c/a\u003e.  You almost certainly do not want to use\nthis module directly.  Use \u003ca\u003eNetwork.FTP.Server\u003c/a\u003e instead.\n\u003c/p\u003e\u003cp\u003eWritten by John Goerzen, jgoerzen@complete.org\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.FTP.Server.Parser",
          "name": "Parser",
          "package": "ftphs",
          "source": "src/Network-FTP-Server-Parser.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides parser that is used internally by Network.FTP.Server You almost certainly do not want to use this module directly Use Network.FTP.Server instead Written by John Goerzen jgoerzen@complete.org",
          "hierarchy": "Network FTP Server Parser",
          "module": "Network.FTP.Server.Parser",
          "name": "Parser",
          "package": "ftphs",
          "partial": "Parser",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ftphs/docs/Network-FTP-Server-Parser.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.FTP.Server.Parser",
          "name": "parseCommand",
          "package": "ftphs",
          "signature": "Handle -\u003e IO (Either ParseError (String, String))",
          "source": "src/Network-FTP-Server-Parser.html#parseCommand",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network FTP Server Parser",
          "module": "Network.FTP.Server.Parser",
          "name": "parseCommand",
          "normalized": "Handle-\u003eIO(Either ParseError(String,String))",
          "package": "ftphs",
          "partial": "Command",
          "signature": "Handle-\u003eIO(Either ParseError(String,String))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ftphs/docs/Network-FTP-Server-Parser.html#v:parseCommand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides a server-side interface to the File Transfer Protocol\nas defined by:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e RFC959, basic protocol\n\u003c/li\u003e\u003cli\u003e RFC1123, clarifications\n\u003c/li\u003e\u003cli\u003e RFC1579, passive mode discussion\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eWritten by John Goerzen, jgoerzen@complete.org\n\u003c/p\u003e\u003cp\u003eThis is a modular FTP server implementation in pure Haskell.  It is highly\nadaptable to many different tasks, and can serve up not only real files\nand directories, but also virtually any data structure you could represent\nas a filesystem.  It does this by using the\n\u003ca\u003eSystem.IO.HVFS\u003c/a\u003e and \u003ca\u003eSystem.IO.HVIO\u003c/a\u003e modules.\n\u003c/p\u003e\u003cp\u003eIn addition, basic networking and multitasking configuration is handled\nvia \u003ca\u003eNetwork.SocketServer\u003c/a\u003e and logging via \n\u003ca\u003eSystem.Log.Logger\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eThis module is believed to be secure, but it not believed to be robust enough\nfor use on a public FTP server.  In particular, it may be vulnerable to denial\nof service attacks due to no timeouts or restrictions on data size, and\nerror catching is not yet completely pervasive.  These will be fixed in time.\nYour patches would also be welcomed.\n\u003c/p\u003e\u003cp\u003eHere is an example server that serves up the entire local filesystem\nin a read-only manner:\n\u003c/p\u003e\u003cpre\u003eimport Network.FTP.Server\nimport Network.SocketServer\nimport System.Log.Logger\nimport System.IO.HVFS\nimport System.IO.HVFS.Combinators\n\nmain = do\n       updateGlobalLogger \"\" (setLevel DEBUG)\n       updateGlobalLogger \"Network.FTP.Server\" (setLevel DEBUG)\n       let opts = (simpleTCPOptions 12345) {reuse = True}\n       serveTCPforever opts $\n            threadedHandler $\n            loggingHandler \"\" INFO $\n            handleHandler $\n            anonFtpHandler (HVFSReadOnly SystemFS)\n\u003c/pre\u003e\u003cp\u003eHint: if you wantto serve up only part of a filesystem, see\n\u003ccode\u003e\u003ca\u003enewHVFSChroot\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.FTP.Server",
          "name": "Server",
          "package": "ftphs",
          "source": "src/Network-FTP-Server.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides server-side interface to the File Transfer Protocol as defined by RFC959 basic protocol RFC1123 clarifications RFC1579 passive mode discussion Written by John Goerzen jgoerzen@complete.org This is modular FTP server implementation in pure Haskell It is highly adaptable to many different tasks and can serve up not only real files and directories but also virtually any data structure you could represent as filesystem It does this by using the System.IO.HVFS and System.IO.HVIO modules In addition basic networking and multitasking configuration is handled via Network.SocketServer and logging via System.Log.Logger This module is believed to be secure but it not believed to be robust enough for use on public FTP server In particular it may be vulnerable to denial of service attacks due to no timeouts or restrictions on data size and error catching is not yet completely pervasive These will be fixed in time Your patches would also be welcomed Here is an example server that serves up the entire local filesystem in read-only manner import Network.FTP.Server import Network.SocketServer import System.Log.Logger import System.IO.HVFS import System.IO.HVFS.Combinators main do updateGlobalLogger setLevel DEBUG updateGlobalLogger Network.FTP.Server setLevel DEBUG let opts simpleTCPOptions reuse True serveTCPforever opts threadedHandler loggingHandler INFO handleHandler anonFtpHandler HVFSReadOnly SystemFS Hint if you wantto serve up only part of filesystem see newHVFSChroot",
          "hierarchy": "Network FTP Server",
          "module": "Network.FTP.Server",
          "name": "Server",
          "package": "ftphs",
          "partial": "Server",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ftphs/docs/Network-FTP-Server.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMain FTP handler; pass the result of applying this to one argument to \n\u003ccode\u003e\u003ca\u003ehandleHandler\u003c/a\u003e\u003c/code\u003e \n\u003c/p\u003e",
          "module": "Network.FTP.Server",
          "name": "anonFtpHandler",
          "package": "ftphs",
          "signature": "a -\u003e Handle -\u003e SockAddr -\u003e SockAddr -\u003e IO ()",
          "source": "src/Network-FTP-Server.html#anonFtpHandler",
          "type": "function"
        },
        "index": {
          "description": "Main FTP handler pass the result of applying this to one argument to handleHandler",
          "hierarchy": "Network FTP Server",
          "module": "Network.FTP.Server",
          "name": "anonFtpHandler",
          "normalized": "a-\u003eHandle-\u003eSockAddr-\u003eSockAddr-\u003eIO()",
          "package": "ftphs",
          "partial": "Ftp Handler",
          "signature": "a-\u003eHandle-\u003eSockAddr-\u003eSockAddr-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ftphs/docs/Network-FTP-Server.html#v:anonFtpHandler"
      }
    }
  ]
]