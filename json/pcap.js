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
        "word": "pcap"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eBase\u003c/a\u003e\u003c/code\u003e module is a low-level binding to all of the\n functions in \u003ccode\u003elibpcap\u003c/code\u003e.  See \u003ca\u003ehttp://www.tcpdump.org\u003c/a\u003e for more\n information.\n\u003c/p\u003e\u003cp\u003eOnly a minimum of marshaling is done.  For a higher-level interface\n that's more friendly, use the \u003ccode\u003e\u003ca\u003ePcap\u003c/a\u003e\u003c/code\u003e module.\n\u003c/p\u003e\u003cp\u003eTo convert captured packet data to a list, extract the length of\n the captured buffer from the packet header record and use\n \u003ccode\u003e\u003ca\u003epeekArray\u003c/a\u003e\u003c/code\u003e to convert the captured data to a list.  For\n illustration:\n\u003c/p\u003e\u003cpre\u003e import Foreign\n import Network.Pcap.Base\n\n main :: IO ()\n main = do\n     p \u003c- openLive \"eth0\" 100 True 10000\n     withForeignPtr p $ \\ptr -\u003e\n       dispatch ptr (-1) printIt\n     return ()\n\n printIt :: PktHdr -\u003e Ptr Word8 -\u003e IO ()\n printIt ph bytep =\n     peekArray (fromIntegral (hdrCaptureLength ph)) bytep \u003e\u003e= print\n\u003c/pre\u003e\u003cp\u003eNote that the \u003ccode\u003e\u003ca\u003eSockAddr\u003c/a\u003e\u003c/code\u003e exported here is not the \u003ccode\u003eSockAddr\u003c/code\u003e from\n \u003ccode\u003e\u003ca\u003eSocket\u003c/a\u003e\u003c/code\u003e. The \u003ccode\u003eSockAddr\u003c/code\u003e from \u003ccode\u003e\u003ca\u003eSocket\u003c/a\u003e\u003c/code\u003e corresponds\n to \u003ccode\u003estruct sockaddr_in\u003c/code\u003e in BSD terminology. The \u003ccode\u003e\u003ca\u003eSockAddr\u003c/a\u003e\u003c/code\u003e record\n here is BSD's \u003ccode\u003estruct sockaddr\u003c/code\u003e. See W.R.Stevens, TCP Illustrated,\n volume 2, for further elucidation.\n\u003c/p\u003e\u003cp\u003eThis binding should be portable across systems that can use the\n \u003ccode\u003elibpcap\u003c/code\u003e library from \u003ccode\u003etcpdump.org\u003c/code\u003e. It will not work with\n Winpcap, a similar library for Windows, although adapting it should\n not prove difficult.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.Pcap.Base",
          "name": "Base",
          "package": "pcap",
          "source": "src/Network-Pcap-Base.html",
          "type": "module"
        },
        "index": {
          "description": "The Base module is low-level binding to all of the functions in libpcap See http www.tcpdump.org for more information Only minimum of marshaling is done For higher-level interface that more friendly use the Pcap module To convert captured packet data to list extract the length of the captured buffer from the packet header record and use peekArray to convert the captured data to list For illustration import Foreign import Network.Pcap.Base main IO main do openLive eth0 True withForeignPtr ptr dispatch ptr printIt return printIt PktHdr Ptr Word8 IO printIt ph bytep peekArray fromIntegral hdrCaptureLength ph bytep print Note that the SockAddr exported here is not the SockAddr from Socket The SockAddr from Socket corresponds to struct sockaddr in in BSD terminology The SockAddr record here is BSD struct sockaddr See W.R.Stevens TCP Illustrated volume for further elucidation This binding should be portable across systems that can use the libpcap library from tcpdump.org It will not work with Winpcap similar library for Windows although adapting it should not prove difficult",
          "hierarchy": "Network Pcap Base",
          "module": "Network.Pcap.Base",
          "name": "Base",
          "package": "pcap",
          "partial": "Base",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompiled Berkeley Packet Filter program.\n\u003c/p\u003e",
          "module": "Network.Pcap.Base",
          "name": "BpfProgram",
          "package": "pcap",
          "source": "src/Network-Pcap-Base.html#BpfProgram",
          "type": "type"
        },
        "index": {
          "description": "Compiled Berkeley Packet Filter program",
          "hierarchy": "Network Pcap Base",
          "module": "Network.Pcap.Base",
          "name": "BpfProgram",
          "package": "pcap",
          "partial": "Bpf Program",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#t:BpfProgram"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Pcap.Base",
          "name": "BpfProgramTag",
          "package": "pcap",
          "source": "src/Network-Pcap-Base.html#BpfProgramTag",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Pcap Base",
          "module": "Network.Pcap.Base",
          "name": "BpfProgramTag",
          "package": "pcap",
          "partial": "Bpf Program Tag",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#t:BpfProgramTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe type of the callback function passed to \u003ccode\u003e\u003ca\u003edispatch\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eloop\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.Pcap.Base",
          "name": "Callback",
          "package": "pcap",
          "source": "src/Network-Pcap-Base.html#Callback",
          "type": "type"
        },
        "index": {
          "description": "the type of the callback function passed to dispatch or loop",
          "hierarchy": "Network Pcap Base",
          "module": "Network.Pcap.Base",
          "name": "Callback",
          "package": "pcap",
          "partial": "Callback",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#t:Callback"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe direction in which packets are to be captured.  See\n \u003ccode\u003e\u003ca\u003esetDirection\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.Pcap.Base",
          "name": "Direction",
          "package": "pcap",
          "source": "src/Network-Pcap-Base.html#Direction",
          "type": "data"
        },
        "index": {
          "description": "The direction in which packets are to be captured See setDirection",
          "hierarchy": "Network Pcap Base",
          "module": "Network.Pcap.Base",
          "name": "Direction",
          "package": "pcap",
          "partial": "Direction",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#t:Direction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe interface structure.\n\u003c/p\u003e",
          "module": "Network.Pcap.Base",
          "name": "Interface",
          "package": "pcap",
          "source": "src/Network-Pcap-Base.html#Interface",
          "type": "data"
        },
        "index": {
          "description": "The interface structure",
          "hierarchy": "Network Pcap Base",
          "module": "Network.Pcap.Base",
          "name": "Interface",
          "package": "pcap",
          "partial": "Interface",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#t:Interface"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDatalink types.\n\u003c/p\u003e\u003cp\u003eThis covers all of the datalink types defined in bpf.h.  Types\n   defined on your system may vary.\n\u003c/p\u003e",
          "module": "Network.Pcap.Base",
          "name": "Link",
          "package": "pcap",
          "source": "src/Network-Pcap-Base.html#Link",
          "type": "data"
        },
        "index": {
          "description": "Datalink types This covers all of the datalink types defined in bpf.h Types defined on your system may vary",
          "hierarchy": "Network Pcap Base",
          "module": "Network.Pcap.Base",
          "name": "Link",
          "package": "pcap",
          "partial": "Link",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#t:Link"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe network address record. Both the address and mask are in\n network byte order.\n\u003c/p\u003e",
          "module": "Network.Pcap.Base",
          "name": "Network",
          "package": "pcap",
          "source": "src/Network-Pcap-Base.html#Network",
          "type": "data"
        },
        "index": {
          "description": "The network address record Both the address and mask are in network byte order",
          "hierarchy": "Network Pcap Base",
          "module": "Network.Pcap.Base",
          "name": "Network",
          "package": "pcap",
          "partial": "Network",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#t:Network"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe address structure.\n\u003c/p\u003e",
          "module": "Network.Pcap.Base",
          "name": "PcapAddr",
          "package": "pcap",
          "source": "src/Network-Pcap-Base.html#PcapAddr",
          "type": "data"
        },
        "index": {
          "description": "The address structure",
          "hierarchy": "Network Pcap Base",
          "module": "Network.Pcap.Base",
          "name": "PcapAddr",
          "package": "pcap",
          "partial": "Pcap Addr",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#t:PcapAddr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePacket capture descriptor.\n\u003c/p\u003e",
          "module": "Network.Pcap.Base",
          "name": "PcapDumpTag",
          "package": "pcap",
          "source": "src/Network-Pcap-Base.html#PcapDumpTag",
          "type": "data"
        },
        "index": {
          "description": "Packet capture descriptor",
          "hierarchy": "Network Pcap Base",
          "module": "Network.Pcap.Base",
          "name": "PcapDumpTag",
          "package": "pcap",
          "partial": "Pcap Dump Tag",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#t:PcapDumpTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Pcap.Base",
          "name": "PcapTag",
          "package": "pcap",
          "source": "src/Network-Pcap-Base.html#PcapTag",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Pcap Base",
          "module": "Network.Pcap.Base",
          "name": "PcapTag",
          "package": "pcap",
          "partial": "Pcap Tag",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#t:PcapTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDump file descriptor.\n\u003c/p\u003e",
          "module": "Network.Pcap.Base",
          "name": "Pdump",
          "package": "pcap",
          "source": "src/Network-Pcap-Base.html#Pdump",
          "type": "type"
        },
        "index": {
          "description": "Dump file descriptor",
          "hierarchy": "Network Pcap Base",
          "module": "Network.Pcap.Base",
          "name": "Pdump",
          "package": "pcap",
          "partial": "Pdump",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#t:Pdump"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Pcap.Base",
          "name": "PktHdr",
          "package": "pcap",
          "source": "src/Network-Pcap-Base.html#PktHdr",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Pcap Base",
          "module": "Network.Pcap.Base",
          "name": "PktHdr",
          "package": "pcap",
          "partial": "Pkt Hdr",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#t:PktHdr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe socket address record. Note that this is not the same as\n SockAddr from \u003ccode\u003e\u003ca\u003eSocket\u003c/a\u003e\u003c/code\u003e. (That is a Haskell version of C's\n \u003ccode\u003estruct sockaddr_in\u003c/code\u003e. This is the real \u003ccode\u003estruct sockaddr\u003c/code\u003e from the\n BSD network stack.)\n\u003c/p\u003e",
          "module": "Network.Pcap.Base",
          "name": "SockAddr",
          "package": "pcap",
          "source": "src/Network-Pcap-Base.html#SockAddr",
          "type": "data"
        },
        "index": {
          "description": "The socket address record Note that this is not the same as SockAddr from Socket That is Haskell version of struct sockaddr in This is the real struct sockaddr from the BSD network stack",
          "hierarchy": "Network Pcap Base",
          "module": "Network.Pcap.Base",
          "name": "SockAddr",
          "package": "pcap",
          "partial": "Sock Addr",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#t:SockAddr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Pcap.Base",
          "name": "Statistics",
          "package": "pcap",
          "source": "src/Network-Pcap-Base.html#Statistics",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Pcap Base",
          "module": "Network.Pcap.Base",
          "name": "Statistics",
          "package": "pcap",
          "partial": "Statistics",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#t:Statistics"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eARINC 429\n\u003c/p\u003e",
          "module": "[\"Network.Pcap.Base\",\"Network.Pcap\"]",
          "name": "DLT_A429",
          "package": "pcap",
          "signature": "DLT_A429",
          "source": "src/Network-Pcap-Base.html#Link",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_A429\",\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:DLT_A429\"]"
        },
        "index": {
          "description": "ARINC",
          "hierarchy": "Network Pcap Base",
          "module": "Network.Pcap.Base",
          "name": "DLT_A429",
          "package": "pcap",
          "partial": "DLT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_A429"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eARINC 653 Interpartition Communication messages\n\u003c/p\u003e",
          "module": "[\"Network.Pcap.Base\",\"Network.Pcap\"]",
          "name": "DLT_A653_ICM",
          "package": "pcap",
          "signature": "DLT_A653_ICM",
          "source": "src/Network-Pcap-Base.html#Link",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_A653_ICM\",\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:DLT_A653_ICM\"]"
        },
        "index": {
          "description": "ARINC Interpartition Communication messages",
          "hierarchy": "Network Pcap Base",
          "module": "Network.Pcap.Base",
          "name": "DLT_A653_ICM",
          "package": "pcap",
          "partial": "DLT ICM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_A653_ICM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAironet (Cisco) 802.11 wireless\n\u003c/p\u003e",
          "module": "[\"Network.Pcap.Base\",\"Network.Pcap\"]",
          "name": "DLT_AIRONET_HEADER",
          "package": "pcap",
          "signature": "DLT_AIRONET_HEADER",
          "source": "src/Network-Pcap-Base.html#Link",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_AIRONET_HEADER\",\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:DLT_AIRONET_HEADER\"]"
        },
        "index": {
          "description": "Aironet Cisco wireless",
          "hierarchy": "Network Pcap Base",
          "module": "Network.Pcap.Base",
          "name": "DLT_AIRONET_HEADER",
          "package": "pcap",
          "partial": "DLT AIRONET HEADER",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_AIRONET_HEADER"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApple IP-over-IEEE 1394\n\u003c/p\u003e",
          "module": "[\"Network.Pcap.Base\",\"Network.Pcap\"]",
          "name": "DLT_APPLE_IP_OVER_IEEE1394",
          "package": "pcap",
          "signature": "DLT_APPLE_IP_OVER_IEEE1394",
          "source": "src/Network-Pcap-Base.html#Link",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_APPLE_IP_OVER_IEEE1394\",\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:DLT_APPLE_IP_OVER_IEEE1394\"]"
        },
        "index": {
          "description": "Apple IP-over-IEEE",
          "hierarchy": "Network Pcap Base",
          "module": "Network.Pcap.Base",
          "name": "DLT_APPLE_IP_OVER_IEEE1394",
          "package": "pcap",
          "partial": "DLT APPLE IP OVER IEEE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_APPLE_IP_OVER_IEEE1394"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eARCNET\n\u003c/p\u003e",
          "module": "[\"Network.Pcap.Base\",\"Network.Pcap\"]",
          "name": "DLT_ARCNET",
          "package": "pcap",
          "signature": "DLT_ARCNET",
          "source": "src/Network-Pcap-Base.html#Link",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_ARCNET\",\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:DLT_ARCNET\"]"
        },
        "index": {
          "description": "ARCNET",
          "hierarchy": "Network Pcap Base",
          "module": "Network.Pcap.Base",
          "name": "DLT_ARCNET",
          "package": "pcap",
          "partial": "DLT ARCNET",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_ARCNET"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLinux ARCNET header\n\u003c/p\u003e",
          "module": "[\"Network.Pcap.Base\",\"Network.Pcap\"]",
          "name": "DLT_ARCNET_LINUX",
          "package": "pcap",
          "signature": "DLT_ARCNET_LINUX",
          "source": "src/Network-Pcap-Base.html#Link",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_ARCNET_LINUX\",\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:DLT_ARCNET_LINUX\"]"
        },
        "index": {
          "description": "Linux ARCNET header",
          "hierarchy": "Network Pcap Base",
          "module": "Network.Pcap.Base",
          "name": "DLT_ARCNET_LINUX",
          "package": "pcap",
          "partial": "DLT ARCNET LINUX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_ARCNET_LINUX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLinux classical IP over ATM\n\u003c/p\u003e",
          "module": "[\"Network.Pcap.Base\",\"Network.Pcap\"]",
          "name": "DLT_ATM_CLIP",
          "package": "pcap",
          "signature": "DLT_ATM_CLIP",
          "source": "src/Network-Pcap-Base.html#Link",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_ATM_CLIP\",\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:DLT_ATM_CLIP\"]"
        },
        "index": {
          "description": "Linux classical IP over ATM",
          "hierarchy": "Network Pcap Base",
          "module": "Network.Pcap.Base",
          "name": "DLT_ATM_CLIP",
          "package": "pcap",
          "partial": "DLT ATM CLIP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_ATM_CLIP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLLC SNAP encapsulated ATM\n\u003c/p\u003e",
          "module": "[\"Network.Pcap.Base\",\"Network.Pcap\"]",
          "name": "DLT_ATM_RFC1483",
          "package": "pcap",
          "signature": "DLT_ATM_RFC1483",
          "source": "src/Network-Pcap-Base.html#Link",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_ATM_RFC1483\",\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:DLT_ATM_RFC1483\"]"
        },
        "index": {
          "description": "LLC SNAP encapsulated ATM",
          "hierarchy": "Network Pcap Base",
          "module": "Network.Pcap.Base",
          "name": "DLT_ATM_RFC1483",
          "package": "pcap",
          "partial": "DLT ATM RFC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_ATM_RFC1483"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eamateur radio AX.25\n\u003c/p\u003e",
          "module": "[\"Network.Pcap.Base\",\"Network.Pcap\"]",
          "name": "DLT_AX25",
          "package": "pcap",
          "signature": "DLT_AX25",
          "source": "src/Network-Pcap-Base.html#Link",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_AX25\",\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:DLT_AX25\"]"
        },
        "index": {
          "description": "amateur radio AX.25",
          "hierarchy": "Network Pcap Base",
          "module": "Network.Pcap.Base",
          "name": "DLT_AX25",
          "package": "pcap",
          "partial": "DLT AX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_AX25"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBluetooth HCI UART transport layer (part H:4)\n\u003c/p\u003e",
          "module": "[\"Network.Pcap.Base\",\"Network.Pcap\"]",
          "name": "DLT_BLUETOOTH_HCI_H4",
          "package": "pcap",
          "signature": "DLT_BLUETOOTH_HCI_H4",
          "source": "src/Network-Pcap-Base.html#Link",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_BLUETOOTH_HCI_H4\",\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:DLT_BLUETOOTH_HCI_H4\"]"
        },
        "index": {
          "description": "Bluetooth HCI UART transport layer part",
          "hierarchy": "Network Pcap Base",
          "module": "Network.Pcap.Base",
          "name": "DLT_BLUETOOTH_HCI_H4",
          "package": "pcap",
          "partial": "DLT BLUETOOTH HCI",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_BLUETOOTH_HCI_H4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eController Area Network (CAN) v2.0B\n\u003c/p\u003e",
          "module": "[\"Network.Pcap.Base\",\"Network.Pcap\"]",
          "name": "DLT_CAN20B",
          "package": "pcap",
          "signature": "DLT_CAN20B",
          "source": "src/Network-Pcap-Base.html#Link",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_CAN20B\",\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:DLT_CAN20B\"]"
        },
        "index": {
          "description": "Controller Area Network CAN v2.0B",
          "hierarchy": "Network Pcap Base",
          "module": "Network.Pcap.Base",
          "name": "DLT_CAN20B",
          "package": "pcap",
          "partial": "DLT CAN",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_CAN20B"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChaos\n\u003c/p\u003e",
          "module": "[\"Network.Pcap.Base\",\"Network.Pcap\"]",
          "name": "DLT_CHAOS",
          "package": "pcap",
          "signature": "DLT_CHAOS",
          "source": "src/Network-Pcap-Base.html#Link",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_CHAOS\",\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:DLT_CHAOS\"]"
        },
        "index": {
          "description": "Chaos",
          "hierarchy": "Network Pcap Base",
          "module": "Network.Pcap.Base",
          "name": "DLT_CHAOS",
          "package": "pcap",
          "partial": "DLT CHAOS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_CHAOS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCisco IOS\n\u003c/p\u003e",
          "module": "[\"Network.Pcap.Base\",\"Network.Pcap\"]",
          "name": "DLT_CISCO_IOS",
          "package": "pcap",
          "signature": "DLT_CISCO_IOS",
          "source": "src/Network-Pcap-Base.html#Link",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_CISCO_IOS\",\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:DLT_CISCO_IOS\"]"
        },
        "index": {
          "description": "Cisco IOS",
          "hierarchy": "Network Pcap Base",
          "module": "Network.Pcap.Base",
          "name": "DLT_CISCO_IOS",
          "package": "pcap",
          "partial": "DLT CISCO IOS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_CISCO_IOS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCisco HDLC\n\u003c/p\u003e",
          "module": "[\"Network.Pcap.Base\",\"Network.Pcap\"]",
          "name": "DLT_C_HDLC",
          "package": "pcap",
          "signature": "DLT_C_HDLC",
          "source": "src/Network-Pcap-Base.html#Link",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_C_HDLC\",\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:DLT_C_HDLC\"]"
        },
        "index": {
          "description": "Cisco HDLC",
          "hierarchy": "Network Pcap Base",
          "module": "Network.Pcap.Base",
          "name": "DLT_C_HDLC",
          "package": "pcap",
          "partial": "DLT HDLC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_C_HDLC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDOCSIS MAC frame\n\u003c/p\u003e",
          "module": "[\"Network.Pcap.Base\",\"Network.Pcap\"]",
          "name": "DLT_DOCSIS",
          "package": "pcap",
          "signature": "DLT_DOCSIS",
          "source": "src/Network-Pcap-Base.html#Link",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_DOCSIS\",\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:DLT_DOCSIS\"]"
        },
        "index": {
          "description": "DOCSIS MAC frame",
          "hierarchy": "Network Pcap Base",
          "module": "Network.Pcap.Base",
          "name": "DLT_DOCSIS",
          "package": "pcap",
          "partial": "DLT DOCSIS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_DOCSIS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAcorn Econet\n\u003c/p\u003e",
          "module": "[\"Network.Pcap.Base\",\"Network.Pcap\"]",
          "name": "DLT_ECONET",
          "package": "pcap",
          "signature": "DLT_ECONET",
          "source": "src/Network-Pcap-Base.html#Link",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_ECONET\",\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:DLT_ECONET\"]"
        },
        "index": {
          "description": "Acorn Econet",
          "hierarchy": "Network Pcap Base",
          "module": "Network.Pcap.Base",
          "name": "DLT_ECONET",
          "package": "pcap",
          "partial": "DLT ECONET",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_ECONET"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e10 Mbit per second (or faster) ethernet\n\u003c/p\u003e",
          "module": "[\"Network.Pcap.Base\",\"Network.Pcap\"]",
          "name": "DLT_EN10MB",
          "package": "pcap",
          "signature": "DLT_EN10MB",
          "source": "src/Network-Pcap-Base.html#Link",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_EN10MB\",\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:DLT_EN10MB\"]"
        },
        "index": {
          "description": "Mbit per second or faster ethernet",
          "hierarchy": "Network Pcap Base",
          "module": "Network.Pcap.Base",
          "name": "DLT_EN10MB",
          "package": "pcap",
          "partial": "DLT EN MB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_EN10MB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eoriginal 3 Mbit per second ethernet\n\u003c/p\u003e",
          "module": "[\"Network.Pcap.Base\",\"Network.Pcap\"]",
          "name": "DLT_EN3MB",
          "package": "pcap",
          "signature": "DLT_EN3MB",
          "source": "src/Network-Pcap-Base.html#Link",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_EN3MB\",\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:DLT_EN3MB\"]"
        },
        "index": {
          "description": "original Mbit per second ethernet",
          "hierarchy": "Network Pcap Base",
          "module": "Network.Pcap.Base",
          "name": "DLT_EN3MB",
          "package": "pcap",
          "partial": "DLT EN MB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_EN3MB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncapsulated packets for IPsec\n\u003c/p\u003e",
          "module": "[\"Network.Pcap.Base\",\"Network.Pcap\"]",
          "name": "DLT_ENC",
          "package": "pcap",
          "signature": "DLT_ENC",
          "source": "src/Network-Pcap-Base.html#Link",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_ENC\",\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:DLT_ENC\"]"
        },
        "index": {
          "description": "Encapsulated packets for IPsec",
          "hierarchy": "Network Pcap Base",
          "module": "Network.Pcap.Base",
          "name": "DLT_ENC",
          "package": "pcap",
          "partial": "DLT ENC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_ENC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFDDI\n\u003c/p\u003e",
          "module": "[\"Network.Pcap.Base\",\"Network.Pcap\"]",
          "name": "DLT_FDDI",
          "package": "pcap",
          "signature": "DLT_FDDI",
          "source": "src/Network-Pcap-Base.html#Link",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_FDDI\",\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:DLT_FDDI\"]"
        },
        "index": {
          "description": "FDDI",
          "hierarchy": "Network Pcap Base",
          "module": "Network.Pcap.Base",
          "name": "DLT_FDDI",
          "package": "pcap",
          "partial": "DLT FDDI",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_FDDI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFrame Relay\n\u003c/p\u003e",
          "module": "[\"Network.Pcap.Base\",\"Network.Pcap\"]",
          "name": "DLT_FRELAY",
          "package": "pcap",
          "signature": "DLT_FRELAY",
          "source": "src/Network-Pcap-Base.html#Link",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_FRELAY\",\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:DLT_FRELAY\"]"
        },
        "index": {
          "description": "Frame Relay",
          "hierarchy": "Network Pcap Base",
          "module": "Network.Pcap.Base",
          "name": "DLT_FRELAY",
          "package": "pcap",
          "partial": "DLT FRELAY",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_FRELAY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGPF-F (ITU-T G.7041/Y.1303)\n\u003c/p\u003e",
          "module": "[\"Network.Pcap.Base\",\"Network.Pcap\"]",
          "name": "DLT_GPF_F",
          "package": "pcap",
          "signature": "DLT_GPF_F",
          "source": "src/Network-Pcap-Base.html#Link",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_GPF_F\",\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:DLT_GPF_F\"]"
        },
        "index": {
          "description": "GPF-F ITU-T G.7041 Y.1303",
          "hierarchy": "Network Pcap Base",
          "module": "Network.Pcap.Base",
          "name": "DLT_GPF_F",
          "package": "pcap",
          "partial": "DLT GPF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_GPF_F"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGPF-T (ITU-T G.7041/Y.1303)\n\u003c/p\u003e",
          "module": "[\"Network.Pcap.Base\",\"Network.Pcap\"]",
          "name": "DLT_GPF_T",
          "package": "pcap",
          "signature": "DLT_GPF_T",
          "source": "src/Network-Pcap-Base.html#Link",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_GPF_T\",\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:DLT_GPF_T\"]"
        },
        "index": {
          "description": "GPF-T ITU-T G.7041 Y.1303",
          "hierarchy": "Network Pcap Base",
          "module": "Network.Pcap.Base",
          "name": "DLT_GPF_T",
          "package": "pcap",
          "partial": "DLT GPF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_GPF_T"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGPRS LLC\n\u003c/p\u003e",
          "module": "[\"Network.Pcap.Base\",\"Network.Pcap\"]",
          "name": "DLT_GPRS_LLC",
          "package": "pcap",
          "signature": "DLT_GPRS_LLC",
          "source": "src/Network-Pcap-Base.html#Link",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_GPRS_LLC\",\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:DLT_GPRS_LLC\"]"
        },
        "index": {
          "description": "GPRS LLC",
          "hierarchy": "Network Pcap Base",
          "module": "Network.Pcap.Base",
          "name": "DLT_GPRS_LLC",
          "package": "pcap",
          "partial": "DLT GPRS LLC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_GPRS_LLC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSiemens HiPath HDLC\n\u003c/p\u003e",
          "module": "[\"Network.Pcap.Base\",\"Network.Pcap\"]",
          "name": "DLT_HHDLC",
          "package": "pcap",
          "signature": "DLT_HHDLC",
          "source": "src/Network-Pcap-Base.html#Link",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_HHDLC\",\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:DLT_HHDLC\"]"
        },
        "index": {
          "description": "Siemens HiPath HDLC",
          "hierarchy": "Network Pcap Base",
          "module": "Network.Pcap.Base",
          "name": "DLT_HHDLC",
          "package": "pcap",
          "partial": "DLT HHDLC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_HHDLC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIEEE 802 networks\n\u003c/p\u003e",
          "module": "[\"Network.Pcap.Base\",\"Network.Pcap\"]",
          "name": "DLT_IEEE802",
          "package": "pcap",
          "signature": "DLT_IEEE802",
          "source": "src/Network-Pcap-Base.html#Link",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_IEEE802\",\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:DLT_IEEE802\"]"
        },
        "index": {
          "description": "IEEE networks",
          "hierarchy": "Network Pcap Base",
          "module": "Network.Pcap.Base",
          "name": "DLT_IEEE802",
          "package": "pcap",
          "partial": "DLT IEEE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_IEEE802"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIEEE 802.11 wireless\n\u003c/p\u003e",
          "module": "[\"Network.Pcap.Base\",\"Network.Pcap\"]",
          "name": "DLT_IEEE802_11",
          "package": "pcap",
          "signature": "DLT_IEEE802_11",
          "source": "src/Network-Pcap-Base.html#Link",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_IEEE802_11\",\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:DLT_IEEE802_11\"]"
        },
        "index": {
          "description": "IEEE wireless",
          "hierarchy": "Network Pcap Base",
          "module": "Network.Pcap.Base",
          "name": "DLT_IEEE802_11",
          "package": "pcap",
          "partial": "DLT IEEE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_IEEE802_11"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003col\u003e\u003cli\u003e11 plus a number of bits of link-layer information\n\u003c/li\u003e\u003c/ol\u003e",
          "module": "[\"Network.Pcap.Base\",\"Network.Pcap\"]",
          "name": "DLT_IEEE802_11_RADIO",
          "package": "pcap",
          "signature": "DLT_IEEE802_11_RADIO",
          "source": "src/Network-Pcap-Base.html#Link",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_IEEE802_11_RADIO\",\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:DLT_IEEE802_11_RADIO\"]"
        },
        "index": {
          "description": "plus number of bits of link-layer information",
          "hierarchy": "Network Pcap Base",
          "module": "Network.Pcap.Base",
          "name": "DLT_IEEE802_11_RADIO",
          "package": "pcap",
          "partial": "DLT IEEE RADIO",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_IEEE802_11_RADIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIEEE 802.15.4, exactly as in the spec\n\u003c/p\u003e",
          "module": "[\"Network.Pcap.Base\",\"Network.Pcap\"]",
          "name": "DLT_IEEE802_15_4",
          "package": "pcap",
          "signature": "DLT_IEEE802_15_4",
          "source": "src/Network-Pcap-Base.html#Link",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_IEEE802_15_4\",\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:DLT_IEEE802_15_4\"]"
        },
        "index": {
          "description": "IEEE exactly as in the spec",
          "hierarchy": "Network Pcap Base",
          "module": "Network.Pcap.Base",
          "name": "DLT_IEEE802_15_4",
          "package": "pcap",
          "partial": "DLT IEEE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_IEEE802_15_4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIEEE 802.15.4, with address fields padded\n\u003c/p\u003e",
          "module": "[\"Network.Pcap.Base\",\"Network.Pcap\"]",
          "name": "DLT_IEEE802_15_4_LINUX",
          "package": "pcap",
          "signature": "DLT_IEEE802_15_4_LINUX",
          "source": "src/Network-Pcap-Base.html#Link",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_IEEE802_15_4_LINUX\",\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:DLT_IEEE802_15_4_LINUX\"]"
        },
        "index": {
          "description": "IEEE with address fields padded",
          "hierarchy": "Network Pcap Base",
          "module": "Network.Pcap.Base",
          "name": "DLT_IEEE802_15_4_LINUX",
          "package": "pcap",
          "partial": "DLT IEEE LINUX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_IEEE802_15_4_LINUX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIEEE 802.16 MAC Common Part Sublayer\n\u003c/p\u003e",
          "module": "[\"Network.Pcap.Base\",\"Network.Pcap\"]",
          "name": "DLT_IEEE802_16_MAC_CPS",
          "package": "pcap",
          "signature": "DLT_IEEE802_16_MAC_CPS",
          "source": "src/Network-Pcap-Base.html#Link",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_IEEE802_16_MAC_CPS\",\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:DLT_IEEE802_16_MAC_CPS\"]"
        },
        "index": {
          "description": "IEEE MAC Common Part Sublayer",
          "hierarchy": "Network Pcap Base",
          "module": "Network.Pcap.Base",
          "name": "DLT_IEEE802_16_MAC_CPS",
          "package": "pcap",
          "partial": "DLT IEEE MAC CPS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_IEEE802_16_MAC_CPS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003col\u003e\u003cli\u003e16 MAC Common Part Sublayer with radiotap radio header\n\u003c/li\u003e\u003c/ol\u003e",
          "module": "[\"Network.Pcap.Base\",\"Network.Pcap\"]",
          "name": "DLT_IEEE802_16_MAC_CPS_RADIO",
          "package": "pcap",
          "signature": "DLT_IEEE802_16_MAC_CPS_RADIO",
          "source": "src/Network-Pcap-Base.html#Link",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_IEEE802_16_MAC_CPS_RADIO\",\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:DLT_IEEE802_16_MAC_CPS_RADIO\"]"
        },
        "index": {
          "description": "MAC Common Part Sublayer with radiotap radio header",
          "hierarchy": "Network Pcap Base",
          "module": "Network.Pcap.Base",
          "name": "DLT_IEEE802_16_MAC_CPS_RADIO",
          "package": "pcap",
          "partial": "DLT IEEE MAC CPS RADIO",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_IEEE802_16_MAC_CPS_RADIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOpenBSD's old ipfilter\n\u003c/p\u003e",
          "module": "[\"Network.Pcap.Base\",\"Network.Pcap\"]",
          "name": "DLT_IPFILTER",
          "package": "pcap",
          "signature": "DLT_IPFILTER",
          "source": "src/Network-Pcap-Base.html#Link",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_IPFILTER\",\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:DLT_IPFILTER\"]"
        },
        "index": {
          "description": "OpenBSD old ipfilter",
          "hierarchy": "Network Pcap Base",
          "module": "Network.Pcap.Base",
          "name": "DLT_IPFILTER",
          "package": "pcap",
          "partial": "DLT IPFILTER",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_IPFILTER"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRFC 2625 IP-over-Fibre Channel\n\u003c/p\u003e",
          "module": "[\"Network.Pcap.Base\",\"Network.Pcap\"]",
          "name": "DLT_IP_OVER_FC",
          "package": "pcap",
          "signature": "DLT_IP_OVER_FC",
          "source": "src/Network-Pcap-Base.html#Link",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_IP_OVER_FC\",\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:DLT_IP_OVER_FC\"]"
        },
        "index": {
          "description": "RFC IP-over-Fibre Channel",
          "hierarchy": "Network Pcap Base",
          "module": "Network.Pcap.Base",
          "name": "DLT_IP_OVER_FC",
          "package": "pcap",
          "partial": "DLT IP OVER FC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_IP_OVER_FC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLinux IrDA packet\n\u003c/p\u003e",
          "module": "[\"Network.Pcap.Base\",\"Network.Pcap\"]",
          "name": "DLT_LINUX_IRDA",
          "package": "pcap",
          "signature": "DLT_LINUX_IRDA",
          "source": "src/Network-Pcap-Base.html#Link",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_LINUX_IRDA\",\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:DLT_LINUX_IRDA\"]"
        },
        "index": {
          "description": "Linux IrDA packet",
          "hierarchy": "Network Pcap Base",
          "module": "Network.Pcap.Base",
          "name": "DLT_LINUX_IRDA",
          "package": "pcap",
          "partial": "DLT LINUX IRDA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_LINUX_IRDA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRaw LAPD for vISDN (\u003cem\u003enot\u003c/em\u003e generic LAPD)\n\u003c/p\u003e",
          "module": "[\"Network.Pcap.Base\",\"Network.Pcap\"]",
          "name": "DLT_LINUX_LAPD",
          "package": "pcap",
          "signature": "DLT_LINUX_LAPD",
          "source": "src/Network-Pcap-Base.html#Link",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_LINUX_LAPD\",\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:DLT_LINUX_LAPD\"]"
        },
        "index": {
          "description": "Raw LAPD for vISDN not generic LAPD",
          "hierarchy": "Network Pcap Base",
          "module": "Network.Pcap.Base",
          "name": "DLT_LINUX_LAPD",
          "package": "pcap",
          "partial": "DLT LINUX LAPD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_LINUX_LAPD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLinux cooked sockets\n\u003c/p\u003e",
          "module": "[\"Network.Pcap.Base\",\"Network.Pcap\"]",
          "name": "DLT_LINUX_SLL",
          "package": "pcap",
          "signature": "DLT_LINUX_SLL",
          "source": "src/Network-Pcap-Base.html#Link",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_LINUX_SLL\",\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:DLT_LINUX_SLL\"]"
        },
        "index": {
          "description": "Linux cooked sockets",
          "hierarchy": "Network Pcap Base",
          "module": "Network.Pcap.Base",
          "name": "DLT_LINUX_SLL",
          "package": "pcap",
          "partial": "DLT LINUX SLL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_LINUX_SLL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOpenBSD loopback device\n\u003c/p\u003e",
          "module": "[\"Network.Pcap.Base\",\"Network.Pcap\"]",
          "name": "DLT_LOOP",
          "package": "pcap",
          "signature": "DLT_LOOP",
          "source": "src/Network-Pcap-Base.html#Link",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_LOOP\",\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:DLT_LOOP\"]"
        },
        "index": {
          "description": "OpenBSD loopback device",
          "hierarchy": "Network Pcap Base",
          "module": "Network.Pcap.Base",
          "name": "DLT_LOOP",
          "package": "pcap",
          "partial": "DLT LOOP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_LOOP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApple LocalTalk\n\u003c/p\u003e",
          "module": "[\"Network.Pcap.Base\",\"Network.Pcap\"]",
          "name": "DLT_LTALK",
          "package": "pcap",
          "signature": "DLT_LTALK",
          "source": "src/Network-Pcap-Base.html#Link",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_LTALK\",\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:DLT_LTALK\"]"
        },
        "index": {
          "description": "Apple LocalTalk",
          "hierarchy": "Network Pcap Base",
          "module": "Network.Pcap.Base",
          "name": "DLT_LTALK",
          "package": "pcap",
          "partial": "DLT LTALK",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_LTALK"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMulti Link Frame Relay (FRF.16)\n\u003c/p\u003e",
          "module": "[\"Network.Pcap.Base\",\"Network.Pcap\"]",
          "name": "DLT_MFR",
          "package": "pcap",
          "signature": "DLT_MFR",
          "source": "src/Network-Pcap-Base.html#Link",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_MFR\",\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:DLT_MFR\"]"
        },
        "index": {
          "description": "Multi Link Frame Relay FRF.16",
          "hierarchy": "Network Pcap Base",
          "module": "Network.Pcap.Base",
          "name": "DLT_MFR",
          "package": "pcap",
          "partial": "DLT MFR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_MFR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSS7, C7 Message Transfer Part 2 (MPT2)\n\u003c/p\u003e",
          "module": "[\"Network.Pcap.Base\",\"Network.Pcap\"]",
          "name": "DLT_MTP2",
          "package": "pcap",
          "signature": "DLT_MTP2",
          "source": "src/Network-Pcap-Base.html#Link",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_MTP2\",\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:DLT_MTP2\"]"
        },
        "index": {
          "description": "SS7 C7 Message Transfer Part MPT2",
          "hierarchy": "Network Pcap Base",
          "module": "Network.Pcap.Base",
          "name": "DLT_MTP2",
          "package": "pcap",
          "partial": "DLT MTP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_MTP2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSS7, C7 MTP2 with pseudo-header\n\u003c/p\u003e",
          "module": "[\"Network.Pcap.Base\",\"Network.Pcap\"]",
          "name": "DLT_MTP2_WITH_PHDR",
          "package": "pcap",
          "signature": "DLT_MTP2_WITH_PHDR",
          "source": "src/Network-Pcap-Base.html#Link",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_MTP2_WITH_PHDR\",\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:DLT_MTP2_WITH_PHDR\"]"
        },
        "index": {
          "description": "SS7 C7 MTP2 with pseudo-header",
          "hierarchy": "Network Pcap Base",
          "module": "Network.Pcap.Base",
          "name": "DLT_MTP2_WITH_PHDR",
          "package": "pcap",
          "partial": "DLT MTP WITH PHDR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_MTP2_WITH_PHDR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSS7, C7 Message Transfer Part 3 (MPT3)\n\u003c/p\u003e",
          "module": "[\"Network.Pcap.Base\",\"Network.Pcap\"]",
          "name": "DLT_MTP3",
          "package": "pcap",
          "signature": "DLT_MTP3",
          "source": "src/Network-Pcap-Base.html#Link",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_MTP3\",\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:DLT_MTP3\"]"
        },
        "index": {
          "description": "SS7 C7 Message Transfer Part MPT3",
          "hierarchy": "Network Pcap Base",
          "module": "Network.Pcap.Base",
          "name": "DLT_MTP3",
          "package": "pcap",
          "partial": "DLT MTP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_MTP3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eno link layer encapsulation\n\u003c/p\u003e",
          "module": "[\"Network.Pcap.Base\",\"Network.Pcap\"]",
          "name": "DLT_NULL",
          "package": "pcap",
          "signature": "DLT_NULL",
          "source": "src/Network-Pcap-Base.html#Link",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_NULL\",\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:DLT_NULL\"]"
        },
        "index": {
          "description": "no link layer encapsulation",
          "hierarchy": "Network Pcap Base",
          "module": "Network.Pcap.Base",
          "name": "DLT_NULL",
          "package": "pcap",
          "partial": "DLT NULL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_NULL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOpenBSD's pflog\n\u003c/p\u003e",
          "module": "[\"Network.Pcap.Base\",\"Network.Pcap\"]",
          "name": "DLT_PFLOG",
          "package": "pcap",
          "signature": "DLT_PFLOG",
          "source": "src/Network-Pcap-Base.html#Link",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_PFLOG\",\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:DLT_PFLOG\"]"
        },
        "index": {
          "description": "OpenBSD pflog",
          "hierarchy": "Network Pcap Base",
          "module": "Network.Pcap.Base",
          "name": "DLT_PFLOG",
          "package": "pcap",
          "partial": "DLT PFLOG",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_PFLOG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.Pcap.Base\",\"Network.Pcap\"]",
          "name": "DLT_PFSYNC",
          "package": "pcap",
          "signature": "DLT_PFSYNC",
          "source": "src/Network-Pcap-Base.html#Link",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_PFSYNC\",\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:DLT_PFSYNC\"]"
        },
        "index": {
          "hierarchy": "Network Pcap Base",
          "module": "Network.Pcap.Base",
          "name": "DLT_PFSYNC",
          "package": "pcap",
          "partial": "DLT PFSYNC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_PFSYNC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePer Packet Information encapsulated packets\n\u003c/p\u003e",
          "module": "[\"Network.Pcap.Base\",\"Network.Pcap\"]",
          "name": "DLT_PPI",
          "package": "pcap",
          "signature": "DLT_PPI",
          "source": "src/Network-Pcap-Base.html#Link",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_PPI\",\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:DLT_PPI\"]"
        },
        "index": {
          "description": "Per Packet Information encapsulated packets",
          "hierarchy": "Network Pcap Base",
          "module": "Network.Pcap.Base",
          "name": "DLT_PPI",
          "package": "pcap",
          "partial": "DLT PPI",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_PPI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePoint-to-point protocol\n\u003c/p\u003e",
          "module": "[\"Network.Pcap.Base\",\"Network.Pcap\"]",
          "name": "DLT_PPP",
          "package": "pcap",
          "signature": "DLT_PPP",
          "source": "src/Network-Pcap-Base.html#Link",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_PPP\",\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:DLT_PPP\"]"
        },
        "index": {
          "description": "Point-to-point protocol",
          "hierarchy": "Network Pcap Base",
          "module": "Network.Pcap.Base",
          "name": "DLT_PPP",
          "package": "pcap",
          "partial": "DLT PPP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_PPP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBSD OS point-to-point protocol\n\u003c/p\u003e",
          "module": "[\"Network.Pcap.Base\",\"Network.Pcap\"]",
          "name": "DLT_PPP_BSDOS",
          "package": "pcap",
          "signature": "DLT_PPP_BSDOS",
          "source": "src/Network-Pcap-Base.html#Link",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_PPP_BSDOS\",\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:DLT_PPP_BSDOS\"]"
        },
        "index": {
          "description": "BSD OS point-to-point protocol",
          "hierarchy": "Network Pcap Base",
          "module": "Network.Pcap.Base",
          "name": "DLT_PPP_BSDOS",
          "package": "pcap",
          "partial": "DLT PPP BSDOS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_PPP_BSDOS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePPP over ethernet\n\u003c/p\u003e",
          "module": "[\"Network.Pcap.Base\",\"Network.Pcap\"]",
          "name": "DLT_PPP_ETHER",
          "package": "pcap",
          "signature": "DLT_PPP_ETHER",
          "source": "src/Network-Pcap-Base.html#Link",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_PPP_ETHER\",\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:DLT_PPP_ETHER\"]"
        },
        "index": {
          "description": "PPP over ethernet",
          "hierarchy": "Network Pcap Base",
          "module": "Network.Pcap.Base",
          "name": "DLT_PPP_ETHER",
          "package": "pcap",
          "partial": "DLT PPP ETHER",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_PPP_ETHER"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOutgoing packets for ppp daemon\n\u003c/p\u003e",
          "module": "[\"Network.Pcap.Base\",\"Network.Pcap\"]",
          "name": "DLT_PPP_PPPD",
          "package": "pcap",
          "signature": "DLT_PPP_PPPD",
          "source": "src/Network-Pcap-Base.html#Link",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_PPP_PPPD\",\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:DLT_PPP_PPPD\"]"
        },
        "index": {
          "description": "Outgoing packets for ppp daemon",
          "hierarchy": "Network Pcap Base",
          "module": "Network.Pcap.Base",
          "name": "DLT_PPP_PPPD",
          "package": "pcap",
          "partial": "DLT PPP PPPD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_PPP_PPPD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePPP over serial with HDLC encapsulation\n\u003c/p\u003e",
          "module": "[\"Network.Pcap.Base\",\"Network.Pcap\"]",
          "name": "DLT_PPP_SERIAL",
          "package": "pcap",
          "signature": "DLT_PPP_SERIAL",
          "source": "src/Network-Pcap-Base.html#Link",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_PPP_SERIAL\",\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:DLT_PPP_SERIAL\"]"
        },
        "index": {
          "description": "PPP over serial with HDLC encapsulation",
          "hierarchy": "Network Pcap Base",
          "module": "Network.Pcap.Base",
          "name": "DLT_PPP_SERIAL",
          "package": "pcap",
          "partial": "DLT PPP SERIAL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_PPP_SERIAL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIntersil Prism II wireless chips\n\u003c/p\u003e",
          "module": "[\"Network.Pcap.Base\",\"Network.Pcap\"]",
          "name": "DLT_PRISM_HEADER",
          "package": "pcap",
          "signature": "DLT_PRISM_HEADER",
          "source": "src/Network-Pcap-Base.html#Link",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_PRISM_HEADER\",\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:DLT_PRISM_HEADER\"]"
        },
        "index": {
          "description": "Intersil Prism II wireless chips",
          "hierarchy": "Network Pcap Base",
          "module": "Network.Pcap.Base",
          "name": "DLT_PRISM_HEADER",
          "package": "pcap",
          "partial": "DLT PRISM HEADER",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_PRISM_HEADER"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProteon ProNET Token Ring\n\u003c/p\u003e",
          "module": "[\"Network.Pcap.Base\",\"Network.Pcap\"]",
          "name": "DLT_PRONET",
          "package": "pcap",
          "signature": "DLT_PRONET",
          "source": "src/Network-Pcap-Base.html#Link",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_PRONET\",\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:DLT_PRONET\"]"
        },
        "index": {
          "description": "Proteon ProNET Token Ring",
          "hierarchy": "Network Pcap Base",
          "module": "Network.Pcap.Base",
          "name": "DLT_PRONET",
          "package": "pcap",
          "partial": "DLT PRONET",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_PRONET"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eraw IP\n\u003c/p\u003e",
          "module": "[\"Network.Pcap.Base\",\"Network.Pcap\"]",
          "name": "DLT_RAW",
          "package": "pcap",
          "signature": "DLT_RAW",
          "source": "src/Network-Pcap-Base.html#Link",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_RAW\",\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:DLT_RAW\"]"
        },
        "index": {
          "description": "raw IP",
          "hierarchy": "Network Pcap Base",
          "module": "Network.Pcap.Base",
          "name": "DLT_RAW",
          "package": "pcap",
          "partial": "DLT RAW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_RAW"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRedback SmartEdge 400/800\n\u003c/p\u003e",
          "module": "[\"Network.Pcap.Base\",\"Network.Pcap\"]",
          "name": "DLT_REDBACK_SMARTEDGE",
          "package": "pcap",
          "signature": "DLT_REDBACK_SMARTEDGE",
          "source": "src/Network-Pcap-Base.html#Link",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_REDBACK_SMARTEDGE\",\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:DLT_REDBACK_SMARTEDGE\"]"
        },
        "index": {
          "description": "Redback SmartEdge",
          "hierarchy": "Network Pcap Base",
          "module": "Network.Pcap.Base",
          "name": "DLT_REDBACK_SMARTEDGE",
          "package": "pcap",
          "partial": "DLT REDBACK SMARTEDGE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_REDBACK_SMARTEDGE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSS7, C7 SCCP\n\u003c/p\u003e",
          "module": "[\"Network.Pcap.Base\",\"Network.Pcap\"]",
          "name": "DLT_SCCP",
          "package": "pcap",
          "signature": "DLT_SCCP",
          "source": "src/Network-Pcap-Base.html#Link",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_SCCP\",\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:DLT_SCCP\"]"
        },
        "index": {
          "description": "SS7 C7 SCCP",
          "hierarchy": "Network Pcap Base",
          "module": "Network.Pcap.Base",
          "name": "DLT_SCCP",
          "package": "pcap",
          "partial": "DLT SCCP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_SCCP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSerial line IP\n\u003c/p\u003e",
          "module": "[\"Network.Pcap.Base\",\"Network.Pcap\"]",
          "name": "DLT_SLIP",
          "package": "pcap",
          "signature": "DLT_SLIP",
          "source": "src/Network-Pcap-Base.html#Link",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_SLIP\",\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:DLT_SLIP\"]"
        },
        "index": {
          "description": "Serial line IP",
          "hierarchy": "Network Pcap Base",
          "module": "Network.Pcap.Base",
          "name": "DLT_SLIP",
          "package": "pcap",
          "partial": "DLT SLIP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_SLIP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBSD OS serial line IP\n\u003c/p\u003e",
          "module": "[\"Network.Pcap.Base\",\"Network.Pcap\"]",
          "name": "DLT_SLIP_BSDOS",
          "package": "pcap",
          "signature": "DLT_SLIP_BSDOS",
          "source": "src/Network-Pcap-Base.html#Link",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_SLIP_BSDOS\",\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:DLT_SLIP_BSDOS\"]"
        },
        "index": {
          "description": "BSD OS serial line IP",
          "hierarchy": "Network Pcap Base",
          "module": "Network.Pcap.Base",
          "name": "DLT_SLIP_BSDOS",
          "package": "pcap",
          "partial": "DLT SLIP BSDOS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_SLIP_BSDOS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFull Frontal ATM on Solaris with SunATM\n\u003c/p\u003e",
          "module": "[\"Network.Pcap.Base\",\"Network.Pcap\"]",
          "name": "DLT_SUNATM",
          "package": "pcap",
          "signature": "DLT_SUNATM",
          "source": "src/Network-Pcap-Base.html#Link",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_SUNATM\",\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:DLT_SUNATM\"]"
        },
        "index": {
          "description": "Full Frontal ATM on Solaris with SunATM",
          "hierarchy": "Network Pcap Base",
          "module": "Network.Pcap.Base",
          "name": "DLT_SUNATM",
          "package": "pcap",
          "partial": "DLT SUNATM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_SUNATM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSymantec Enterprise Firewall\n\u003c/p\u003e",
          "module": "[\"Network.Pcap.Base\",\"Network.Pcap\"]",
          "name": "DLT_SYMANTEC_FIREWALL",
          "package": "pcap",
          "signature": "DLT_SYMANTEC_FIREWALL",
          "source": "src/Network-Pcap-Base.html#Link",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_SYMANTEC_FIREWALL\",\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:DLT_SYMANTEC_FIREWALL\"]"
        },
        "index": {
          "description": "Symantec Enterprise Firewall",
          "hierarchy": "Network Pcap Base",
          "module": "Network.Pcap.Base",
          "name": "DLT_SYMANTEC_FIREWALL",
          "package": "pcap",
          "partial": "DLT SYMANTEC FIREWALL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_SYMANTEC_FIREWALL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eunknown encapsulation\n\u003c/p\u003e",
          "module": "[\"Network.Pcap.Base\",\"Network.Pcap\"]",
          "name": "DLT_UNKNOWN",
          "package": "pcap",
          "signature": "DLT_UNKNOWN Int",
          "source": "src/Network-Pcap-Base.html#Link",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_UNKNOWN\",\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:DLT_UNKNOWN\"]"
        },
        "index": {
          "description": "unknown encapsulation",
          "hierarchy": "Network Pcap Base",
          "module": "Network.Pcap.Base",
          "name": "DLT_UNKNOWN",
          "package": "pcap",
          "partial": "DLT UNKNOWN",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_UNKNOWN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUSB packet\n\u003c/p\u003e",
          "module": "[\"Network.Pcap.Base\",\"Network.Pcap\"]",
          "name": "DLT_USB",
          "package": "pcap",
          "signature": "DLT_USB",
          "source": "src/Network-Pcap-Base.html#Link",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_USB\",\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:DLT_USB\"]"
        },
        "index": {
          "description": "USB packet",
          "hierarchy": "Network Pcap Base",
          "module": "Network.Pcap.Base",
          "name": "DLT_USB",
          "package": "pcap",
          "partial": "DLT USB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_USB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUSB packets, beginning with a Linux USB header\n\u003c/p\u003e",
          "module": "[\"Network.Pcap.Base\",\"Network.Pcap\"]",
          "name": "DLT_USB_LINUX",
          "package": "pcap",
          "signature": "DLT_USB_LINUX",
          "source": "src/Network-Pcap-Base.html#Link",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_USB_LINUX\",\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:DLT_USB_LINUX\"]"
        },
        "index": {
          "description": "USB packets beginning with Linux USB header",
          "hierarchy": "Network Pcap Base",
          "module": "Network.Pcap.Base",
          "name": "DLT_USB_LINUX",
          "package": "pcap",
          "partial": "DLT USB LINUX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_USB_LINUX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReserved for private use\n\u003c/p\u003e",
          "module": "[\"Network.Pcap.Base\",\"Network.Pcap\"]",
          "name": "DLT_USER0",
          "package": "pcap",
          "signature": "DLT_USER0",
          "source": "src/Network-Pcap-Base.html#Link",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_USER0\",\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:DLT_USER0\"]"
        },
        "index": {
          "description": "Reserved for private use",
          "hierarchy": "Network Pcap Base",
          "module": "Network.Pcap.Base",
          "name": "DLT_USER0",
          "package": "pcap",
          "partial": "DLT USER",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_USER0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReserved for private use\n\u003c/p\u003e",
          "module": "[\"Network.Pcap.Base\",\"Network.Pcap\"]",
          "name": "DLT_USER1",
          "package": "pcap",
          "signature": "DLT_USER1",
          "source": "src/Network-Pcap-Base.html#Link",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_USER1\",\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:DLT_USER1\"]"
        },
        "index": {
          "description": "Reserved for private use",
          "hierarchy": "Network Pcap Base",
          "module": "Network.Pcap.Base",
          "name": "DLT_USER1",
          "package": "pcap",
          "partial": "DLT USER",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_USER1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReserved for private use\n\u003c/p\u003e",
          "module": "[\"Network.Pcap.Base\",\"Network.Pcap\"]",
          "name": "DLT_USER10",
          "package": "pcap",
          "signature": "DLT_USER10",
          "source": "src/Network-Pcap-Base.html#Link",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_USER10\",\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:DLT_USER10\"]"
        },
        "index": {
          "description": "Reserved for private use",
          "hierarchy": "Network Pcap Base",
          "module": "Network.Pcap.Base",
          "name": "DLT_USER10",
          "package": "pcap",
          "partial": "DLT USER",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_USER10"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReserved for private use\n\u003c/p\u003e",
          "module": "[\"Network.Pcap.Base\",\"Network.Pcap\"]",
          "name": "DLT_USER11",
          "package": "pcap",
          "signature": "DLT_USER11",
          "source": "src/Network-Pcap-Base.html#Link",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_USER11\",\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:DLT_USER11\"]"
        },
        "index": {
          "description": "Reserved for private use",
          "hierarchy": "Network Pcap Base",
          "module": "Network.Pcap.Base",
          "name": "DLT_USER11",
          "package": "pcap",
          "partial": "DLT USER",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_USER11"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReserved for private use\n\u003c/p\u003e",
          "module": "[\"Network.Pcap.Base\",\"Network.Pcap\"]",
          "name": "DLT_USER12",
          "package": "pcap",
          "signature": "DLT_USER12",
          "source": "src/Network-Pcap-Base.html#Link",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_USER12\",\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:DLT_USER12\"]"
        },
        "index": {
          "description": "Reserved for private use",
          "hierarchy": "Network Pcap Base",
          "module": "Network.Pcap.Base",
          "name": "DLT_USER12",
          "package": "pcap",
          "partial": "DLT USER",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_USER12"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReserved for private use\n\u003c/p\u003e",
          "module": "[\"Network.Pcap.Base\",\"Network.Pcap\"]",
          "name": "DLT_USER13",
          "package": "pcap",
          "signature": "DLT_USER13",
          "source": "src/Network-Pcap-Base.html#Link",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_USER13\",\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:DLT_USER13\"]"
        },
        "index": {
          "description": "Reserved for private use",
          "hierarchy": "Network Pcap Base",
          "module": "Network.Pcap.Base",
          "name": "DLT_USER13",
          "package": "pcap",
          "partial": "DLT USER",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_USER13"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReserved for private use\n\u003c/p\u003e",
          "module": "[\"Network.Pcap.Base\",\"Network.Pcap\"]",
          "name": "DLT_USER14",
          "package": "pcap",
          "signature": "DLT_USER14",
          "source": "src/Network-Pcap-Base.html#Link",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_USER14\",\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:DLT_USER14\"]"
        },
        "index": {
          "description": "Reserved for private use",
          "hierarchy": "Network Pcap Base",
          "module": "Network.Pcap.Base",
          "name": "DLT_USER14",
          "package": "pcap",
          "partial": "DLT USER",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_USER14"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReserved for private use\n\u003c/p\u003e",
          "module": "[\"Network.Pcap.Base\",\"Network.Pcap\"]",
          "name": "DLT_USER15",
          "package": "pcap",
          "signature": "DLT_USER15",
          "source": "src/Network-Pcap-Base.html#Link",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_USER15\",\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:DLT_USER15\"]"
        },
        "index": {
          "description": "Reserved for private use",
          "hierarchy": "Network Pcap Base",
          "module": "Network.Pcap.Base",
          "name": "DLT_USER15",
          "package": "pcap",
          "partial": "DLT USER",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_USER15"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReserved for private use\n\u003c/p\u003e",
          "module": "[\"Network.Pcap.Base\",\"Network.Pcap\"]",
          "name": "DLT_USER2",
          "package": "pcap",
          "signature": "DLT_USER2",
          "source": "src/Network-Pcap-Base.html#Link",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_USER2\",\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:DLT_USER2\"]"
        },
        "index": {
          "description": "Reserved for private use",
          "hierarchy": "Network Pcap Base",
          "module": "Network.Pcap.Base",
          "name": "DLT_USER2",
          "package": "pcap",
          "partial": "DLT USER",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_USER2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReserved for private use\n\u003c/p\u003e",
          "module": "[\"Network.Pcap.Base\",\"Network.Pcap\"]",
          "name": "DLT_USER3",
          "package": "pcap",
          "signature": "DLT_USER3",
          "source": "src/Network-Pcap-Base.html#Link",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_USER3\",\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:DLT_USER3\"]"
        },
        "index": {
          "description": "Reserved for private use",
          "hierarchy": "Network Pcap Base",
          "module": "Network.Pcap.Base",
          "name": "DLT_USER3",
          "package": "pcap",
          "partial": "DLT USER",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_USER3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReserved for private use\n\u003c/p\u003e",
          "module": "[\"Network.Pcap.Base\",\"Network.Pcap\"]",
          "name": "DLT_USER4",
          "package": "pcap",
          "signature": "DLT_USER4",
          "source": "src/Network-Pcap-Base.html#Link",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_USER4\",\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:DLT_USER4\"]"
        },
        "index": {
          "description": "Reserved for private use",
          "hierarchy": "Network Pcap Base",
          "module": "Network.Pcap.Base",
          "name": "DLT_USER4",
          "package": "pcap",
          "partial": "DLT USER",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_USER4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReserved for private use\n\u003c/p\u003e",
          "module": "[\"Network.Pcap.Base\",\"Network.Pcap\"]",
          "name": "DLT_USER5",
          "package": "pcap",
          "signature": "DLT_USER5",
          "source": "src/Network-Pcap-Base.html#Link",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_USER5\",\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:DLT_USER5\"]"
        },
        "index": {
          "description": "Reserved for private use",
          "hierarchy": "Network Pcap Base",
          "module": "Network.Pcap.Base",
          "name": "DLT_USER5",
          "package": "pcap",
          "partial": "DLT USER",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_USER5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReserved for private use\n\u003c/p\u003e",
          "module": "[\"Network.Pcap.Base\",\"Network.Pcap\"]",
          "name": "DLT_USER6",
          "package": "pcap",
          "signature": "DLT_USER6",
          "source": "src/Network-Pcap-Base.html#Link",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_USER6\",\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:DLT_USER6\"]"
        },
        "index": {
          "description": "Reserved for private use",
          "hierarchy": "Network Pcap Base",
          "module": "Network.Pcap.Base",
          "name": "DLT_USER6",
          "package": "pcap",
          "partial": "DLT USER",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_USER6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReserved for private use\n\u003c/p\u003e",
          "module": "[\"Network.Pcap.Base\",\"Network.Pcap\"]",
          "name": "DLT_USER7",
          "package": "pcap",
          "signature": "DLT_USER7",
          "source": "src/Network-Pcap-Base.html#Link",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_USER7\",\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:DLT_USER7\"]"
        },
        "index": {
          "description": "Reserved for private use",
          "hierarchy": "Network Pcap Base",
          "module": "Network.Pcap.Base",
          "name": "DLT_USER7",
          "package": "pcap",
          "partial": "DLT USER",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_USER7"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReserved for private use\n\u003c/p\u003e",
          "module": "[\"Network.Pcap.Base\",\"Network.Pcap\"]",
          "name": "DLT_USER8",
          "package": "pcap",
          "signature": "DLT_USER8",
          "source": "src/Network-Pcap-Base.html#Link",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_USER8\",\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:DLT_USER8\"]"
        },
        "index": {
          "description": "Reserved for private use",
          "hierarchy": "Network Pcap Base",
          "module": "Network.Pcap.Base",
          "name": "DLT_USER8",
          "package": "pcap",
          "partial": "DLT USER",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_USER8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReserved for private use\n\u003c/p\u003e",
          "module": "[\"Network.Pcap.Base\",\"Network.Pcap\"]",
          "name": "DLT_USER9",
          "package": "pcap",
          "signature": "DLT_USER9",
          "source": "src/Network-Pcap-Base.html#Link",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_USER9\",\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:DLT_USER9\"]"
        },
        "index": {
          "description": "Reserved for private use",
          "hierarchy": "Network Pcap Base",
          "module": "Network.Pcap.Base",
          "name": "DLT_USER9",
          "package": "pcap",
          "partial": "DLT USER",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_USER9"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eincoming packets\n\u003c/p\u003e",
          "module": "[\"Network.Pcap.Base\",\"Network.Pcap\"]",
          "name": "In",
          "package": "pcap",
          "signature": "In",
          "source": "src/Network-Pcap-Base.html#Direction",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:In\",\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:In\"]"
        },
        "index": {
          "description": "incoming packets",
          "hierarchy": "Network Pcap Base",
          "module": "Network.Pcap.Base",
          "name": "In",
          "package": "pcap",
          "partial": "In",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:In"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eincoming and outgoing packets (the default)\n\u003c/p\u003e",
          "module": "[\"Network.Pcap.Base\",\"Network.Pcap\"]",
          "name": "InOut",
          "package": "pcap",
          "signature": "InOut",
          "source": "src/Network-Pcap-Base.html#Direction",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:InOut\",\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:InOut\"]"
        },
        "index": {
          "description": "incoming and outgoing packets the default",
          "hierarchy": "Network Pcap Base",
          "module": "Network.Pcap.Base",
          "name": "InOut",
          "package": "pcap",
          "partial": "In Out",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:InOut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.Pcap.Base\",\"Network.Pcap\"]",
          "name": "Interface",
          "package": "pcap",
          "signature": "Interface",
          "source": "src/Network-Pcap-Base.html#Interface",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:Interface\",\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:Interface\"]"
        },
        "index": {
          "hierarchy": "Network Pcap Base",
          "module": "Network.Pcap.Base",
          "name": "Interface",
          "package": "pcap",
          "partial": "Interface",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:Interface"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.Pcap.Base\",\"Network.Pcap\"]",
          "name": "Network",
          "package": "pcap",
          "signature": "Network",
          "source": "src/Network-Pcap-Base.html#Network",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:Network\",\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:Network\"]"
        },
        "index": {
          "hierarchy": "Network Pcap Base",
          "module": "Network.Pcap.Base",
          "name": "Network",
          "package": "pcap",
          "partial": "Network",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:Network"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eoutgoing packets\n\u003c/p\u003e",
          "module": "[\"Network.Pcap.Base\",\"Network.Pcap\"]",
          "name": "Out",
          "package": "pcap",
          "signature": "Out",
          "source": "src/Network-Pcap-Base.html#Direction",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:Out\",\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:Out\"]"
        },
        "index": {
          "description": "outgoing packets",
          "hierarchy": "Network Pcap Base",
          "module": "Network.Pcap.Base",
          "name": "Out",
          "package": "pcap",
          "partial": "Out",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:Out"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.Pcap.Base\",\"Network.Pcap\"]",
          "name": "PcapAddr",
          "package": "pcap",
          "signature": "PcapAddr",
          "source": "src/Network-Pcap-Base.html#PcapAddr",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:PcapAddr\",\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:PcapAddr\"]"
        },
        "index": {
          "hierarchy": "Network Pcap Base",
          "module": "Network.Pcap.Base",
          "name": "PcapAddr",
          "package": "pcap",
          "partial": "Pcap Addr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:PcapAddr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.Pcap.Base\",\"Network.Pcap\"]",
          "name": "PktHdr",
          "package": "pcap",
          "signature": "PktHdr",
          "source": "src/Network-Pcap-Base.html#PktHdr",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:PktHdr\",\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:PktHdr\"]"
        },
        "index": {
          "hierarchy": "Network Pcap Base",
          "module": "Network.Pcap.Base",
          "name": "PktHdr",
          "package": "pcap",
          "partial": "Pkt Hdr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:PktHdr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.Pcap.Base\",\"Network.Pcap\"]",
          "name": "SockAddr",
          "package": "pcap",
          "signature": "SockAddr",
          "source": "src/Network-Pcap-Base.html#SockAddr",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:SockAddr\",\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:SockAddr\"]"
        },
        "index": {
          "hierarchy": "Network Pcap Base",
          "module": "Network.Pcap.Base",
          "name": "SockAddr",
          "package": "pcap",
          "partial": "Sock Addr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:SockAddr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.Pcap.Base\",\"Network.Pcap\"]",
          "name": "Statistics",
          "package": "pcap",
          "signature": "Statistics",
          "source": "src/Network-Pcap-Base.html#Statistics",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:Statistics\",\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:Statistics\"]"
        },
        "index": {
          "hierarchy": "Network Pcap Base",
          "module": "Network.Pcap.Base",
          "name": "Statistics",
          "package": "pcap",
          "partial": "Statistics",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:Statistics"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ebroadcast address\n\u003c/p\u003e",
          "module": "[\"Network.Pcap.Base\",\"Network.Pcap\"]",
          "name": "addrBcast",
          "package": "pcap",
          "signature": "Maybe SockAddr",
          "source": "src/Network-Pcap-Base.html#PcapAddr",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:addrBcast\",\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:addrBcast\"]"
        },
        "index": {
          "description": "broadcast address",
          "hierarchy": "Network Pcap Base",
          "module": "Network.Pcap.Base",
          "name": "addrBcast",
          "package": "pcap",
          "partial": "Bcast",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:addrBcast"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003enetwork mask\n\u003c/p\u003e",
          "module": "[\"Network.Pcap.Base\",\"Network.Pcap\"]",
          "name": "addrMask",
          "package": "pcap",
          "signature": "Maybe SockAddr",
          "source": "src/Network-Pcap-Base.html#PcapAddr",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:addrMask\",\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:addrMask\"]"
        },
        "index": {
          "description": "network mask",
          "hierarchy": "Network Pcap Base",
          "module": "Network.Pcap.Base",
          "name": "addrMask",
          "package": "pcap",
          "partial": "Mask",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:addrMask"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eaddress of peer, of a point-to-point link\n\u003c/p\u003e",
          "module": "[\"Network.Pcap.Base\",\"Network.Pcap\"]",
          "name": "addrPeer",
          "package": "pcap",
          "signature": "Maybe SockAddr",
          "source": "src/Network-Pcap-Base.html#PcapAddr",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:addrPeer\",\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:addrPeer\"]"
        },
        "index": {
          "description": "address of peer of point-to-point link",
          "hierarchy": "Network Pcap Base",
          "module": "Network.Pcap.Base",
          "name": "addrPeer",
          "package": "pcap",
          "partial": "Peer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:addrPeer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003einterface address\n\u003c/p\u003e",
          "module": "[\"Network.Pcap.Base\",\"Network.Pcap\"]",
          "name": "addrSA",
          "package": "pcap",
          "signature": "SockAddr",
          "source": "src/Network-Pcap-Base.html#PcapAddr",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:addrSA\",\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:addrSA\"]"
        },
        "index": {
          "description": "interface address",
          "hierarchy": "Network Pcap Base",
          "module": "Network.Pcap.Base",
          "name": "addrSA",
          "package": "pcap",
          "partial": "SA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:addrSA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompile a filter for use by another program using the Berkeley\n Packet Filter library.\n\u003c/p\u003e",
          "module": "[\"Network.Pcap.Base\",\"Network.Pcap\"]",
          "name": "compileFilter",
          "package": "pcap",
          "signature": "Int-\u003e Link-\u003e String-\u003e Bool-\u003e Word32-\u003e IO BpfProgram",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:compileFilter\",\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:compileFilter\"]"
        },
        "index": {
          "description": "Compile filter for use by another program using the Berkeley Packet Filter library",
          "hierarchy": "Network Pcap Base",
          "module": "Network.Pcap.Base",
          "name": "compileFilter",
          "normalized": "Int-\u003eLink-\u003eString-\u003eBool-\u003eWord-\u003eIO BpfProgram",
          "package": "pcap",
          "partial": "Filter",
          "signature": "Int-\u003eLink-\u003eString-\u003eBool-\u003eWord-\u003eIO BpfProgram",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:compileFilter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the datalink type associated with the given pcap\n descriptor.\n\u003c/p\u003e",
          "module": "Network.Pcap.Base",
          "name": "datalink",
          "package": "pcap",
          "signature": "Ptr PcapTag -\u003e IO Link",
          "source": "src/Network-Pcap-Base.html#datalink",
          "type": "function"
        },
        "index": {
          "description": "Returns the datalink type associated with the given pcap descriptor",
          "hierarchy": "Network Pcap Base",
          "module": "Network.Pcap.Base",
          "name": "datalink",
          "normalized": "Ptr PcapTag-\u003eIO Link",
          "package": "pcap",
          "signature": "Ptr PcapTag-\u003eIO Link",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:datalink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCollect and process packets. The arguments are the packet capture\n descriptor, the count and a callback function.\n\u003c/p\u003e\u003cp\u003eThe count is the maximum number of packets to process before\n returning.  A count of -1 means process all of the packets received\n in one buffer (if a live capture) or all of the packets in a dump\n file (if offline).\n\u003c/p\u003e\u003cp\u003eThe callback function is passed two arguments, a packet header\n record and a pointer to the packet data (\u003ccode\u003ePtr Word8\u003c/code\u003e). The header\n record contains the number of bytes captured, which can be used to\n marshal the data into a list or array.\n\u003c/p\u003e",
          "module": "Network.Pcap.Base",
          "name": "dispatch",
          "package": "pcap",
          "signature": "Ptr PcapTag-\u003e Int-\u003e Callback-\u003e IO Int",
          "type": "function"
        },
        "index": {
          "description": "Collect and process packets The arguments are the packet capture descriptor the count and callback function The count is the maximum number of packets to process before returning count of means process all of the packets received in one buffer if live capture or all of the packets in dump file if offline The callback function is passed two arguments packet header record and pointer to the packet data Ptr Word8 The header record contains the number of bytes captured which can be used to marshal the data into list or array",
          "hierarchy": "Network Pcap Base",
          "module": "Network.Pcap.Base",
          "name": "dispatch",
          "normalized": "Ptr PcapTag-\u003eInt-\u003eCallback-\u003eIO Int",
          "package": "pcap",
          "signature": "Ptr PcapTag-\u003eInt-\u003eCallback-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:dispatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite the packet data given by the second and third arguments to\n a dump file opened by \u003ccode\u003e\u003ca\u003eopenDead\u003c/a\u003e\u003c/code\u003e. \u003ccode\u003e\u003ca\u003edump\u003c/a\u003e\u003c/code\u003e is designed so it can be\n easily used as a default callback function by \u003ccode\u003e\u003ca\u003edispatch\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eloop\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.Pcap.Base",
          "name": "dump",
          "package": "pcap",
          "signature": "Ptr PcapDumpTag-\u003e Ptr PktHdr-\u003e Ptr Word8-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Write the packet data given by the second and third arguments to dump file opened by openDead dump is designed so it can be easily used as default callback function by dispatch or loop",
          "hierarchy": "Network Pcap Base",
          "module": "Network.Pcap.Base",
          "name": "dump",
          "normalized": "Ptr PcapDumpTag-\u003ePtr PktHdr-\u003ePtr Word-\u003eIO()",
          "package": "pcap",
          "signature": "Ptr PcapDumpTag-\u003ePtr PktHdr-\u003ePtr Word-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:dump"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003efindAllDevs\u003c/a\u003e\u003c/code\u003e returns a list of all the network devices that can\n be opened by \u003ccode\u003e\u003ca\u003eopenLive\u003c/a\u003e\u003c/code\u003e. It returns only those devices that the\n calling process has sufficient privileges to open, so it may not\n find every device on the system.\n\u003c/p\u003e",
          "module": "[\"Network.Pcap.Base\",\"Network.Pcap\"]",
          "name": "findAllDevs",
          "package": "pcap",
          "signature": "IO [Interface]",
          "source": "src/Network-Pcap-Base.html#findAllDevs",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:findAllDevs\",\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:findAllDevs\"]"
        },
        "index": {
          "description": "findAllDevs returns list of all the network devices that can be opened by openLive It returns only those devices that the calling process has sufficient privileges to open so it may not find every device on the system",
          "hierarchy": "Network Pcap Base",
          "module": "Network.Pcap.Base",
          "name": "findAllDevs",
          "normalized": "IO[Interface]",
          "package": "pcap",
          "partial": "All Devs",
          "signature": "IO[Interface]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:findAllDevs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the blocking status of the packet capture\n descriptor. \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e indicates that the descriptor is\n non-blocking. Descriptors referring to dump files opened by\n \u003ccode\u003e\u003ca\u003eopenDump\u003c/a\u003e\u003c/code\u003e always return \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.Pcap.Base",
          "name": "getNonBlock",
          "package": "pcap",
          "signature": "Ptr PcapTag -\u003e IO Bool",
          "source": "src/Network-Pcap-Base.html#getNonBlock",
          "type": "function"
        },
        "index": {
          "description": "Return the blocking status of the packet capture descriptor True indicates that the descriptor is non-blocking Descriptors referring to dump files opened by openDump always return False",
          "hierarchy": "Network Pcap Base",
          "module": "Network.Pcap.Base",
          "name": "getNonBlock",
          "normalized": "Ptr PcapTag-\u003eIO Bool",
          "package": "pcap",
          "partial": "Non Block",
          "signature": "Ptr PcapTag-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:getNonBlock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003enumber of bytes present in capture\n\u003c/p\u003e",
          "module": "[\"Network.Pcap.Base\",\"Network.Pcap\"]",
          "name": "hdrCaptureLength",
          "package": "pcap",
          "signature": "Word32",
          "source": "src/Network-Pcap-Base.html#PktHdr",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:hdrCaptureLength\",\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:hdrCaptureLength\"]"
        },
        "index": {
          "description": "number of bytes present in capture",
          "hierarchy": "Network Pcap Base",
          "module": "Network.Pcap.Base",
          "name": "hdrCaptureLength",
          "package": "pcap",
          "partial": "Capture Length",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:hdrCaptureLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etimestamp (seconds)\n\u003c/p\u003e",
          "module": "[\"Network.Pcap.Base\",\"Network.Pcap\"]",
          "name": "hdrSeconds",
          "package": "pcap",
          "signature": "Word32",
          "source": "src/Network-Pcap-Base.html#PktHdr",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:hdrSeconds\",\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:hdrSeconds\"]"
        },
        "index": {
          "description": "timestamp seconds",
          "hierarchy": "Network Pcap Base",
          "module": "Network.Pcap.Base",
          "name": "hdrSeconds",
          "package": "pcap",
          "partial": "Seconds",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:hdrSeconds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etimestamp (microseconds)\n\u003c/p\u003e",
          "module": "[\"Network.Pcap.Base\",\"Network.Pcap\"]",
          "name": "hdrUseconds",
          "package": "pcap",
          "signature": "Word32",
          "source": "src/Network-Pcap-Base.html#PktHdr",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:hdrUseconds\",\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:hdrUseconds\"]"
        },
        "index": {
          "description": "timestamp microseconds",
          "hierarchy": "Network Pcap Base",
          "module": "Network.Pcap.Base",
          "name": "hdrUseconds",
          "package": "pcap",
          "partial": "Useconds",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:hdrUseconds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003enumber of bytes on the wire\n\u003c/p\u003e",
          "module": "[\"Network.Pcap.Base\",\"Network.Pcap\"]",
          "name": "hdrWireLength",
          "package": "pcap",
          "signature": "Word32",
          "source": "src/Network-Pcap-Base.html#PktHdr",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:hdrWireLength\",\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:hdrWireLength\"]"
        },
        "index": {
          "description": "number of bytes on the wire",
          "hierarchy": "Network Pcap Base",
          "module": "Network.Pcap.Base",
          "name": "hdrWireLength",
          "package": "pcap",
          "partial": "Wire Length",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:hdrWireLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eaddress families supported by this interface\n\u003c/p\u003e",
          "module": "[\"Network.Pcap.Base\",\"Network.Pcap\"]",
          "name": "ifAddresses",
          "package": "pcap",
          "signature": "[PcapAddr]",
          "source": "src/Network-Pcap-Base.html#Interface",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:ifAddresses\",\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:ifAddresses\"]"
        },
        "index": {
          "description": "address families supported by this interface",
          "hierarchy": "Network Pcap Base",
          "module": "Network.Pcap.Base",
          "name": "ifAddresses",
          "normalized": "[PcapAddr]",
          "package": "pcap",
          "partial": "Addresses",
          "signature": "[PcapAddr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:ifAddresses"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003einterface description string (if any)\n\u003c/p\u003e",
          "module": "[\"Network.Pcap.Base\",\"Network.Pcap\"]",
          "name": "ifDescription",
          "package": "pcap",
          "signature": "String",
          "source": "src/Network-Pcap-Base.html#Interface",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:ifDescription\",\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:ifDescription\"]"
        },
        "index": {
          "description": "interface description string if any",
          "hierarchy": "Network Pcap Base",
          "module": "Network.Pcap.Base",
          "name": "ifDescription",
          "package": "pcap",
          "partial": "Description",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:ifDescription"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.Pcap.Base\",\"Network.Pcap\"]",
          "name": "ifFlags",
          "package": "pcap",
          "signature": "Word32",
          "source": "src/Network-Pcap-Base.html#Interface",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:ifFlags\",\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:ifFlags\"]"
        },
        "index": {
          "hierarchy": "Network Pcap Base",
          "module": "Network.Pcap.Base",
          "name": "ifFlags",
          "package": "pcap",
          "partial": "Flags",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:ifFlags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe interface name\n\u003c/p\u003e",
          "module": "[\"Network.Pcap.Base\",\"Network.Pcap\"]",
          "name": "ifName",
          "package": "pcap",
          "signature": "String",
          "source": "src/Network-Pcap-Base.html#Interface",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:ifName\",\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:ifName\"]"
        },
        "index": {
          "description": "the interface name",
          "hierarchy": "Network Pcap Base",
          "module": "Network.Pcap.Base",
          "name": "ifName",
          "package": "pcap",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:ifName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eisSwapped\u003c/a\u003e\u003c/code\u003e returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if the current dump file uses a\n different byte order than the one native to the system.\n\u003c/p\u003e",
          "module": "Network.Pcap.Base",
          "name": "isSwapped",
          "package": "pcap",
          "signature": "Ptr PcapTag -\u003e IO Bool",
          "source": "src/Network-Pcap-Base.html#isSwapped",
          "type": "function"
        },
        "index": {
          "description": "isSwapped returns True if the current dump file uses different byte order than the one native to the system",
          "hierarchy": "Network Pcap Base",
          "module": "Network.Pcap.Base",
          "name": "isSwapped",
          "normalized": "Ptr PcapTag-\u003eIO Bool",
          "package": "pcap",
          "partial": "Swapped",
          "signature": "Ptr PcapTag-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:isSwapped"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList all the datalink types supported by a pcap descriptor.\n Entries from the resulting list are valid arguments to\n \u003ccode\u003e\u003ca\u003esetDatalink\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.Pcap.Base",
          "name": "listDatalinks",
          "package": "pcap",
          "signature": "Ptr PcapTag -\u003e IO [Link]",
          "source": "src/Network-Pcap-Base.html#listDatalinks",
          "type": "function"
        },
        "index": {
          "description": "List all the datalink types supported by pcap descriptor Entries from the resulting list are valid arguments to setDatalink",
          "hierarchy": "Network Pcap Base",
          "module": "Network.Pcap.Base",
          "name": "listDatalinks",
          "normalized": "Ptr PcapTag-\u003eIO[Link]",
          "package": "pcap",
          "partial": "Datalinks",
          "signature": "Ptr PcapTag-\u003eIO[Link]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:listDatalinks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003elookupDev\u003c/a\u003e\u003c/code\u003e returns the name of a device suitable for use with\n \u003ccode\u003e\u003ca\u003eopenLive\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003elookupNet\u003c/a\u003e\u003c/code\u003e. If you only have one interface, it is\n the function of choice. If not, see \u003ccode\u003e\u003ca\u003efindAllDevs\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Network.Pcap.Base\",\"Network.Pcap\"]",
          "name": "lookupDev",
          "package": "pcap",
          "signature": "IO String",
          "source": "src/Network-Pcap-Base.html#lookupDev",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:lookupDev\",\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:lookupDev\"]"
        },
        "index": {
          "description": "lookupDev returns the name of device suitable for use with openLive and lookupNet If you only have one interface it is the function of choice If not see findAllDevs",
          "hierarchy": "Network Pcap Base",
          "module": "Network.Pcap.Base",
          "name": "lookupDev",
          "package": "pcap",
          "partial": "Dev",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:lookupDev"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the network address and mask for the specified interface\n name. Only valid for IPv4. For other protocols, use \u003ccode\u003e\u003ca\u003efindAllDevs\u003c/a\u003e\u003c/code\u003e\n and search the \u003ccode\u003e\u003ca\u003eInterface\u003c/a\u003e\u003c/code\u003e list for the associated network mask.\n\u003c/p\u003e",
          "module": "[\"Network.Pcap.Base\",\"Network.Pcap\"]",
          "name": "lookupNet",
          "package": "pcap",
          "signature": "String-\u003e IO Network",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:lookupNet\",\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:lookupNet\"]"
        },
        "index": {
          "description": "Return the network address and mask for the specified interface name Only valid for IPv4 For other protocols use findAllDevs and search the Interface list for the associated network mask",
          "hierarchy": "Network Pcap Base",
          "module": "Network.Pcap.Base",
          "name": "lookupNet",
          "normalized": "String-\u003eIO Network",
          "package": "pcap",
          "partial": "Net",
          "signature": "String-\u003eIO Network",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:lookupNet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003edispatch\u003c/a\u003e\u003c/code\u003e, but loop until the number of packets\n specified by the second argument are read. A negative value loops\n forever.\n\u003c/p\u003e\u003cp\u003eThis function does not return when a live read timeout occurs. Use\n \u003ccode\u003e\u003ca\u003edispatch\u003c/a\u003e\u003c/code\u003e instead if you want to specify a timeout.\n\u003c/p\u003e",
          "module": "Network.Pcap.Base",
          "name": "loop",
          "package": "pcap",
          "signature": "Ptr PcapTag-\u003e Int-\u003e Callback-\u003e IO Int",
          "type": "function"
        },
        "index": {
          "description": "Similar to dispatch but loop until the number of packets specified by the second argument are read negative value loops forever This function does not return when live read timeout occurs Use dispatch instead if you want to specify timeout",
          "hierarchy": "Network Pcap Base",
          "module": "Network.Pcap.Base",
          "name": "loop",
          "normalized": "Ptr PcapTag-\u003eInt-\u003eCallback-\u003eIO Int",
          "package": "pcap",
          "signature": "Ptr PcapTag-\u003eInt-\u003eCallback-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:loop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIPv4 network address\n\u003c/p\u003e",
          "module": "[\"Network.Pcap.Base\",\"Network.Pcap\"]",
          "name": "netAddr",
          "package": "pcap",
          "signature": "Word32",
          "source": "src/Network-Pcap-Base.html#Network",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:netAddr\",\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:netAddr\"]"
        },
        "index": {
          "description": "IPv4 network address",
          "hierarchy": "Network Pcap Base",
          "module": "Network.Pcap.Base",
          "name": "netAddr",
          "package": "pcap",
          "partial": "Addr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:netAddr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIPv4 netmask\n\u003c/p\u003e",
          "module": "[\"Network.Pcap.Base\",\"Network.Pcap\"]",
          "name": "netMask",
          "package": "pcap",
          "signature": "Word32",
          "source": "src/Network-Pcap-Base.html#Network",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:netMask\",\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:netMask\"]"
        },
        "index": {
          "description": "IPv4 netmask",
          "hierarchy": "Network Pcap Base",
          "module": "Network.Pcap.Base",
          "name": "netMask",
          "package": "pcap",
          "partial": "Mask",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:netMask"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead the next packet (equivalent to calling \u003ccode\u003e\u003ca\u003edispatch\u003c/a\u003e\u003c/code\u003e with a\n count of 1).\n\u003c/p\u003e",
          "module": "Network.Pcap.Base",
          "name": "next",
          "package": "pcap",
          "signature": "Ptr PcapTag-\u003e IO (PktHdr, Ptr Word8)",
          "type": "function"
        },
        "index": {
          "description": "Read the next packet equivalent to calling dispatch with count of",
          "hierarchy": "Network Pcap Base",
          "module": "Network.Pcap.Base",
          "name": "next",
          "normalized": "Ptr PcapTag-\u003eIO(PktHdr,Ptr Word)",
          "package": "pcap",
          "signature": "Ptr PcapTag-\u003eIO(PktHdr,Ptr Word)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:next"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eopenDead\u003c/a\u003e\u003c/code\u003e is used to get a packet capture descriptor without\n opening a file or device. It is typically used to test packet\n filter compilation by \u003ccode\u003e\u003ca\u003esetFilter\u003c/a\u003e\u003c/code\u003e. The arguments are the link type\n and the snapshot length.\n\u003c/p\u003e",
          "module": "Network.Pcap.Base",
          "name": "openDead",
          "package": "pcap",
          "signature": "Link-\u003e Int-\u003e IO (ForeignPtr PcapTag)",
          "type": "function"
        },
        "index": {
          "description": "openDead is used to get packet capture descriptor without opening file or device It is typically used to test packet filter compilation by setFilter The arguments are the link type and the snapshot length",
          "hierarchy": "Network Pcap Base",
          "module": "Network.Pcap.Base",
          "name": "openDead",
          "normalized": "Link-\u003eInt-\u003eIO(ForeignPtr PcapTag)",
          "package": "pcap",
          "partial": "Dead",
          "signature": "Link-\u003eInt-\u003eIO(ForeignPtr PcapTag)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:openDead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eopenDump\u003c/a\u003e\u003c/code\u003e opens a dump file for writing. This dump file is\n written to by the \u003ccode\u003e\u003ca\u003edump\u003c/a\u003e\u003c/code\u003e function. The arguments are a raw packet\n capture descriptor and the file name, with \"-\" as a synonym for\n \u003ccode\u003estdout\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.Pcap.Base",
          "name": "openDump",
          "package": "pcap",
          "signature": "Ptr PcapTag-\u003e FilePath-\u003e IO Pdump",
          "type": "function"
        },
        "index": {
          "description": "openDump opens dump file for writing This dump file is written to by the dump function The arguments are raw packet capture descriptor and the file name with as synonym for stdout",
          "hierarchy": "Network Pcap Base",
          "module": "Network.Pcap.Base",
          "name": "openDump",
          "normalized": "Ptr PcapTag-\u003eFilePath-\u003eIO Pdump",
          "package": "pcap",
          "partial": "Dump",
          "signature": "Ptr PcapTag-\u003eFilePath-\u003eIO Pdump",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:openDump"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eopenLive\u003c/a\u003e\u003c/code\u003e is used to get a packet descriptor that can be used to\n look at packets on the network. The arguments are the device name,\n the snapshot length (in bytes), the promiscuity of the interface\n (\u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e == promiscuous) and a timeout in milliseconds.\n\u003c/p\u003e\u003cp\u003eUsing \u003ccode\u003e\"any\"\u003c/code\u003e as the device name will capture packets from all\n interfaces.  On some systems, reading from the \u003ccode\u003e\"any\"\u003c/code\u003e device is\n incompatible with setting the interfaces into promiscuous mode. In\n that case, only packets whose link layer addresses match those of\n the interfaces are captured.\n\u003c/p\u003e",
          "module": "Network.Pcap.Base",
          "name": "openLive",
          "package": "pcap",
          "signature": "String-\u003e Int-\u003e Bool-\u003e Int-\u003e IO (ForeignPtr PcapTag)",
          "type": "function"
        },
        "index": {
          "description": "openLive is used to get packet descriptor that can be used to look at packets on the network The arguments are the device name the snapshot length in bytes the promiscuity of the interface True promiscuous and timeout in milliseconds Using any as the device name will capture packets from all interfaces On some systems reading from the any device is incompatible with setting the interfaces into promiscuous mode In that case only packets whose link layer addresses match those of the interfaces are captured",
          "hierarchy": "Network Pcap Base",
          "module": "Network.Pcap.Base",
          "name": "openLive",
          "normalized": "String-\u003eInt-\u003eBool-\u003eInt-\u003eIO(ForeignPtr PcapTag)",
          "package": "pcap",
          "partial": "Live",
          "signature": "String-\u003eInt-\u003eBool-\u003eInt-\u003eIO(ForeignPtr PcapTag)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:openLive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eopenOffline\u003c/a\u003e\u003c/code\u003e opens a dump file for reading. The file format is\n the same as used by \u003ccode\u003etcpdump\u003c/code\u003e and Wireshark. The string \u003ccode\u003e\"-\"\u003c/code\u003e is\n a synonym for \u003ccode\u003estdin\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.Pcap.Base",
          "name": "openOffline",
          "package": "pcap",
          "signature": "FilePath-\u003e IO (ForeignPtr PcapTag)",
          "type": "function"
        },
        "index": {
          "description": "openOffline opens dump file for reading The file format is the same as used by tcpdump and Wireshark The string is synonym for stdin",
          "hierarchy": "Network Pcap Base",
          "module": "Network.Pcap.Base",
          "name": "openOffline",
          "normalized": "FilePath-\u003eIO(ForeignPtr PcapTag)",
          "package": "pcap",
          "partial": "Offline",
          "signature": "FilePath-\u003eIO(ForeignPtr PcapTag)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:openOffline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.Pcap.Base\",\"Network.Pcap\"]",
          "name": "saAddr",
          "package": "pcap",
          "signature": "ByteString",
          "source": "src/Network-Pcap-Base.html#SockAddr",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:saAddr\",\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:saAddr\"]"
        },
        "index": {
          "hierarchy": "Network Pcap Base",
          "module": "Network.Pcap.Base",
          "name": "saAddr",
          "package": "pcap",
          "partial": "Addr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:saAddr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ean address family exported by Network.Socket\n\u003c/p\u003e",
          "module": "[\"Network.Pcap.Base\",\"Network.Pcap\"]",
          "name": "saFamily",
          "package": "pcap",
          "signature": "Family",
          "source": "src/Network-Pcap-Base.html#SockAddr",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:saFamily\",\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:saFamily\"]"
        },
        "index": {
          "description": "an address family exported by Network.Socket",
          "hierarchy": "Network Pcap Base",
          "module": "Network.Pcap.Base",
          "name": "saFamily",
          "package": "pcap",
          "partial": "Family",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:saFamily"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSend a raw packet through the network interface.\n\u003c/p\u003e",
          "module": "Network.Pcap.Base",
          "name": "sendPacket",
          "package": "pcap",
          "signature": "Ptr PcapTag-\u003e Ptr Word8-\u003e Int-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Send raw packet through the network interface",
          "hierarchy": "Network Pcap Base",
          "module": "Network.Pcap.Base",
          "name": "sendPacket",
          "normalized": "Ptr PcapTag-\u003ePtr Word-\u003eInt-\u003eIO()",
          "package": "pcap",
          "partial": "Packet",
          "signature": "Ptr PcapTag-\u003ePtr Word-\u003eInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:sendPacket"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets the datalink type for a given pcap descriptor.\n\u003c/p\u003e",
          "module": "Network.Pcap.Base",
          "name": "setDatalink",
          "package": "pcap",
          "signature": "Ptr PcapTag -\u003e Link -\u003e IO ()",
          "source": "src/Network-Pcap-Base.html#setDatalink",
          "type": "function"
        },
        "index": {
          "description": "Sets the datalink type for given pcap descriptor",
          "hierarchy": "Network Pcap Base",
          "module": "Network.Pcap.Base",
          "name": "setDatalink",
          "normalized": "Ptr PcapTag-\u003eLink-\u003eIO()",
          "package": "pcap",
          "partial": "Datalink",
          "signature": "Ptr PcapTag-\u003eLink-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:setDatalink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecify the direction in which packets are to be captured.\n Complete functionality is not necessarily available on all\n platforms.\n\u003c/p\u003e",
          "module": "Network.Pcap.Base",
          "name": "setDirection",
          "package": "pcap",
          "signature": "Ptr PcapTag -\u003e Direction -\u003e IO ()",
          "source": "src/Network-Pcap-Base.html#setDirection",
          "type": "function"
        },
        "index": {
          "description": "Specify the direction in which packets are to be captured Complete functionality is not necessarily available on all platforms",
          "hierarchy": "Network Pcap Base",
          "module": "Network.Pcap.Base",
          "name": "setDirection",
          "normalized": "Ptr PcapTag-\u003eDirection-\u003eIO()",
          "package": "pcap",
          "partial": "Direction",
          "signature": "Ptr PcapTag-\u003eDirection-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:setDirection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet a filter on the specified packet capture descriptor. Valid\n filter strings are those accepted by \u003ccode\u003etcpdump\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.Pcap.Base",
          "name": "setFilter",
          "package": "pcap",
          "signature": "Ptr PcapTag-\u003e String-\u003e Bool-\u003e Word32-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Set filter on the specified packet capture descriptor Valid filter strings are those accepted by tcpdump",
          "hierarchy": "Network Pcap Base",
          "module": "Network.Pcap.Base",
          "name": "setFilter",
          "normalized": "Ptr PcapTag-\u003eString-\u003eBool-\u003eWord-\u003eIO()",
          "package": "pcap",
          "partial": "Filter",
          "signature": "Ptr PcapTag-\u003eString-\u003eBool-\u003eWord-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:setFilter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet a packet capture descriptor into non-blocking mode if the\n second argument is \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e, otherwise put it in blocking mode. Note\n that the packet capture descriptor must have been obtained from\n \u003ccode\u003e\u003ca\u003eopenLive\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.Pcap.Base",
          "name": "setNonBlock",
          "package": "pcap",
          "signature": "Ptr PcapTag -\u003e Bool -\u003e IO ()",
          "source": "src/Network-Pcap-Base.html#setNonBlock",
          "type": "function"
        },
        "index": {
          "description": "Set packet capture descriptor into non-blocking mode if the second argument is True otherwise put it in blocking mode Note that the packet capture descriptor must have been obtained from openLive",
          "hierarchy": "Network Pcap Base",
          "module": "Network.Pcap.Base",
          "name": "setNonBlock",
          "normalized": "Ptr PcapTag-\u003eBool-\u003eIO()",
          "package": "pcap",
          "partial": "Non Block",
          "signature": "Ptr PcapTag-\u003eBool-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:setNonBlock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe snapshot length that was used in the call to \u003ccode\u003e\u003ca\u003eopenLive\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.Pcap.Base",
          "name": "snapshotLen",
          "package": "pcap",
          "signature": "Ptr PcapTag -\u003e IO Int",
          "source": "src/Network-Pcap-Base.html#snapshotLen",
          "type": "function"
        },
        "index": {
          "description": "The snapshot length that was used in the call to openLive",
          "hierarchy": "Network Pcap Base",
          "module": "Network.Pcap.Base",
          "name": "snapshotLen",
          "normalized": "Ptr PcapTag-\u003eIO Int",
          "package": "pcap",
          "partial": "Len",
          "signature": "Ptr PcapTag-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:snapshotLen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003epackets dropped by \u003ccode\u003elibpcap\u003c/code\u003e\n\u003c/p\u003e",
          "module": "[\"Network.Pcap.Base\",\"Network.Pcap\"]",
          "name": "statDropped",
          "package": "pcap",
          "signature": "Word32",
          "source": "src/Network-Pcap-Base.html#Statistics",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:statDropped\",\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:statDropped\"]"
        },
        "index": {
          "description": "packets dropped by libpcap",
          "hierarchy": "Network Pcap Base",
          "module": "Network.Pcap.Base",
          "name": "statDropped",
          "package": "pcap",
          "partial": "Dropped",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:statDropped"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003epackets dropped by the network interface\n\u003c/p\u003e",
          "module": "[\"Network.Pcap.Base\",\"Network.Pcap\"]",
          "name": "statIfaceDropped",
          "package": "pcap",
          "signature": "Word32",
          "source": "src/Network-Pcap-Base.html#Statistics",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:statIfaceDropped\",\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:statIfaceDropped\"]"
        },
        "index": {
          "description": "packets dropped by the network interface",
          "hierarchy": "Network Pcap Base",
          "module": "Network.Pcap.Base",
          "name": "statIfaceDropped",
          "package": "pcap",
          "partial": "Iface Dropped",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:statIfaceDropped"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003epackets received\n\u003c/p\u003e",
          "module": "[\"Network.Pcap.Base\",\"Network.Pcap\"]",
          "name": "statReceived",
          "package": "pcap",
          "signature": "Word32",
          "source": "src/Network-Pcap-Base.html#Statistics",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:statReceived\",\"http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:statReceived\"]"
        },
        "index": {
          "description": "packets received",
          "hierarchy": "Network Pcap Base",
          "module": "Network.Pcap.Base",
          "name": "statReceived",
          "package": "pcap",
          "partial": "Received",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:statReceived"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the number of packets received, the number of packets\n dropped by the packet filter and the number of packets dropped by\n the interface (before processing by the packet filter).\n\u003c/p\u003e",
          "module": "Network.Pcap.Base",
          "name": "statistics",
          "package": "pcap",
          "signature": "Ptr PcapTag -\u003e IO Statistics",
          "source": "src/Network-Pcap-Base.html#statistics",
          "type": "function"
        },
        "index": {
          "description": "Returns the number of packets received the number of packets dropped by the packet filter and the number of packets dropped by the interface before processing by the packet filter",
          "hierarchy": "Network Pcap Base",
          "module": "Network.Pcap.Base",
          "name": "statistics",
          "normalized": "Ptr PcapTag-\u003eIO Statistics",
          "package": "pcap",
          "signature": "Ptr PcapTag-\u003eIO Statistics",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:statistics"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Pcap.Base",
          "name": "toPktHdr",
          "package": "pcap",
          "signature": "Ptr PktHdr -\u003e IO PktHdr",
          "source": "src/Network-Pcap-Base.html#toPktHdr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Pcap Base",
          "module": "Network.Pcap.Base",
          "name": "toPktHdr",
          "normalized": "Ptr PktHdr-\u003eIO PktHdr",
          "package": "pcap",
          "partial": "Pkt Hdr",
          "signature": "Ptr PktHdr-\u003eIO PktHdr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:toPktHdr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVersion of the library.  The returned pair consists of the major\n and minor version numbers.\n\u003c/p\u003e",
          "module": "Network.Pcap.Base",
          "name": "version",
          "package": "pcap",
          "signature": "Ptr PcapTag -\u003e IO (Int, Int)",
          "source": "src/Network-Pcap-Base.html#version",
          "type": "function"
        },
        "index": {
          "description": "Version of the library The returned pair consists of the major and minor version numbers",
          "hierarchy": "Network Pcap Base",
          "module": "Network.Pcap.Base",
          "name": "version",
          "normalized": "Ptr PcapTag-\u003eIO(Int,Int)",
          "package": "pcap",
          "signature": "Ptr PcapTag-\u003eIO(Int,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:version"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ePcap\u003c/a\u003e\u003c/code\u003e module is a high(ish) level binding to all of\n the functions in \u003ccode\u003elibpcap\u003c/code\u003e.  See \u003ca\u003ehttp://www.tcpdump.org\u003c/a\u003e for more\n information.\n\u003c/p\u003e\u003cp\u003eThis module is built on the lower-level \u003ccode\u003e\u003ca\u003eBase\u003c/a\u003e\u003c/code\u003e module,\n which is slightly more efficient.  Don't use \u003ccode\u003e\u003ca\u003eBase\u003c/a\u003e\u003c/code\u003e\n unless profiling data indicates that you need to.\n\u003c/p\u003e\u003cp\u003eOnly a minimum of marshaling is done on received packets.  To\n convert captured packet data to a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e (space efficient,\n and with \u003cem\u003eO(1)\u003c/em\u003e access to every byte in a captured packet), use\n \u003ccode\u003e\u003ca\u003etoBS\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote that the \u003ccode\u003e\u003ca\u003eSockAddr\u003c/a\u003e\u003c/code\u003e exported here is not the \u003ccode\u003eSockAddr\u003c/code\u003e from\n \u003ccode\u003e\u003ca\u003eSocket\u003c/a\u003e\u003c/code\u003e. The \u003ccode\u003eSockAddr\u003c/code\u003e from \u003ccode\u003e\u003ca\u003eSocket\u003c/a\u003e\u003c/code\u003e corresponds\n to \u003ccode\u003estruct sockaddr_in\u003c/code\u003e in BSD terminology. The \u003ccode\u003e\u003ca\u003eSockAddr\u003c/a\u003e\u003c/code\u003e record\n here is BSD's \u003ccode\u003estruct sockaddr\u003c/code\u003e. See W.R.Stevens, TCP Illustrated,\n volume 2, for further elucidation.\n\u003c/p\u003e\u003cp\u003eThis binding should be portable across systems that can use the\n \u003ccode\u003elibpcap\u003c/code\u003e from \u003ccode\u003etcpdump.org\u003c/code\u003e. It does not yet work with Winpcap, a\n similar library for Windows, although adapting it should not prove\n difficult.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.Pcap",
          "name": "Pcap",
          "package": "pcap",
          "source": "src/Network-Pcap.html",
          "type": "module"
        },
        "index": {
          "description": "The Pcap module is high ish level binding to all of the functions in libpcap See http www.tcpdump.org for more information This module is built on the lower-level Base module which is slightly more efficient Don use Base unless profiling data indicates that you need to Only minimum of marshaling is done on received packets To convert captured packet data to ByteString space efficient and with access to every byte in captured packet use toBS Note that the SockAddr exported here is not the SockAddr from Socket The SockAddr from Socket corresponds to struct sockaddr in in BSD terminology The SockAddr record here is BSD struct sockaddr See W.R.Stevens TCP Illustrated volume for further elucidation This binding should be portable across systems that can use the libpcap from tcpdump.org It does not yet work with Winpcap similar library for Windows although adapting it should not prove difficult",
          "hierarchy": "Network Pcap",
          "module": "Network.Pcap",
          "name": "Pcap",
          "package": "pcap",
          "partial": "Pcap",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompiled Berkeley Packet Filter program.\n\u003c/p\u003e",
          "module": "Network.Pcap",
          "name": "BpfProgram",
          "package": "pcap",
          "source": "src/Network-Pcap-Base.html#BpfProgram",
          "type": "type"
        },
        "index": {
          "description": "Compiled Berkeley Packet Filter program",
          "hierarchy": "Network Pcap",
          "module": "Network.Pcap",
          "name": "BpfProgram",
          "package": "pcap",
          "partial": "Bpf Program",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#t:BpfProgram"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe type of the callback function passed to \u003ccode\u003e\u003ca\u003edispatch\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eloop\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.Pcap",
          "name": "Callback",
          "package": "pcap",
          "source": "src/Network-Pcap-Base.html#Callback",
          "type": "type"
        },
        "index": {
          "description": "the type of the callback function passed to dispatch or loop",
          "hierarchy": "Network Pcap",
          "module": "Network.Pcap",
          "name": "Callback",
          "package": "pcap",
          "partial": "Callback",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#t:Callback"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCallback using \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e for packet body.\n\u003c/p\u003e",
          "module": "Network.Pcap",
          "name": "CallbackBS",
          "package": "pcap",
          "source": "src/Network-Pcap.html#CallbackBS",
          "type": "type"
        },
        "index": {
          "description": "Callback using ByteString for packet body",
          "hierarchy": "Network Pcap",
          "module": "Network.Pcap",
          "name": "CallbackBS",
          "package": "pcap",
          "partial": "Callback BS",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#t:CallbackBS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe direction in which packets are to be captured.  See\n \u003ccode\u003e\u003ca\u003esetDirection\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.Pcap",
          "name": "Direction",
          "package": "pcap",
          "source": "src/Network-Pcap-Base.html#Direction",
          "type": "data"
        },
        "index": {
          "description": "The direction in which packets are to be captured See setDirection",
          "hierarchy": "Network Pcap",
          "module": "Network.Pcap",
          "name": "Direction",
          "package": "pcap",
          "partial": "Direction",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#t:Direction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDump file handle.\n\u003c/p\u003e",
          "module": "Network.Pcap",
          "name": "DumpHandle",
          "package": "pcap",
          "source": "src/Network-Pcap.html#DumpHandle",
          "type": "data"
        },
        "index": {
          "description": "Dump file handle",
          "hierarchy": "Network Pcap",
          "module": "Network.Pcap",
          "name": "DumpHandle",
          "package": "pcap",
          "partial": "Dump Handle",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#t:DumpHandle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe interface structure.\n\u003c/p\u003e",
          "module": "Network.Pcap",
          "name": "Interface",
          "package": "pcap",
          "source": "src/Network-Pcap-Base.html#Interface",
          "type": "data"
        },
        "index": {
          "description": "The interface structure",
          "hierarchy": "Network Pcap",
          "module": "Network.Pcap",
          "name": "Interface",
          "package": "pcap",
          "partial": "Interface",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#t:Interface"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDatalink types.\n\u003c/p\u003e\u003cp\u003eThis covers all of the datalink types defined in bpf.h.  Types\n   defined on your system may vary.\n\u003c/p\u003e",
          "module": "Network.Pcap",
          "name": "Link",
          "package": "pcap",
          "source": "src/Network-Pcap-Base.html#Link",
          "type": "data"
        },
        "index": {
          "description": "Datalink types This covers all of the datalink types defined in bpf.h Types defined on your system may vary",
          "hierarchy": "Network Pcap",
          "module": "Network.Pcap",
          "name": "Link",
          "package": "pcap",
          "partial": "Link",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#t:Link"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe network address record. Both the address and mask are in\n network byte order.\n\u003c/p\u003e",
          "module": "Network.Pcap",
          "name": "Network",
          "package": "pcap",
          "source": "src/Network-Pcap-Base.html#Network",
          "type": "data"
        },
        "index": {
          "description": "The network address record Both the address and mask are in network byte order",
          "hierarchy": "Network Pcap",
          "module": "Network.Pcap",
          "name": "Network",
          "package": "pcap",
          "partial": "Network",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#t:Network"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe address structure.\n\u003c/p\u003e",
          "module": "Network.Pcap",
          "name": "PcapAddr",
          "package": "pcap",
          "source": "src/Network-Pcap-Base.html#PcapAddr",
          "type": "data"
        },
        "index": {
          "description": "The address structure",
          "hierarchy": "Network Pcap",
          "module": "Network.Pcap",
          "name": "PcapAddr",
          "package": "pcap",
          "partial": "Pcap Addr",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#t:PcapAddr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePacket capture handle.\n\u003c/p\u003e",
          "module": "Network.Pcap",
          "name": "PcapHandle",
          "package": "pcap",
          "source": "src/Network-Pcap.html#PcapHandle",
          "type": "data"
        },
        "index": {
          "description": "Packet capture handle",
          "hierarchy": "Network Pcap",
          "module": "Network.Pcap",
          "name": "PcapHandle",
          "package": "pcap",
          "partial": "Pcap Handle",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#t:PcapHandle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Pcap",
          "name": "PktHdr",
          "package": "pcap",
          "source": "src/Network-Pcap-Base.html#PktHdr",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Pcap",
          "module": "Network.Pcap",
          "name": "PktHdr",
          "package": "pcap",
          "partial": "Pkt Hdr",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#t:PktHdr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe socket address record. Note that this is not the same as\n SockAddr from \u003ccode\u003e\u003ca\u003eSocket\u003c/a\u003e\u003c/code\u003e. (That is a Haskell version of C's\n \u003ccode\u003estruct sockaddr_in\u003c/code\u003e. This is the real \u003ccode\u003estruct sockaddr\u003c/code\u003e from the\n BSD network stack.)\n\u003c/p\u003e",
          "module": "Network.Pcap",
          "name": "SockAddr",
          "package": "pcap",
          "source": "src/Network-Pcap-Base.html#SockAddr",
          "type": "data"
        },
        "index": {
          "description": "The socket address record Note that this is not the same as SockAddr from Socket That is Haskell version of struct sockaddr in This is the real struct sockaddr from the BSD network stack",
          "hierarchy": "Network Pcap",
          "module": "Network.Pcap",
          "name": "SockAddr",
          "package": "pcap",
          "partial": "Sock Addr",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#t:SockAddr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Pcap",
          "name": "Statistics",
          "package": "pcap",
          "source": "src/Network-Pcap-Base.html#Statistics",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Pcap",
          "module": "Network.Pcap",
          "name": "Statistics",
          "package": "pcap",
          "partial": "Statistics",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#t:Statistics"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the datalink type associated with the given handle.\n\u003c/p\u003e",
          "module": "Network.Pcap",
          "name": "datalink",
          "package": "pcap",
          "signature": "PcapHandle -\u003e IO Link",
          "source": "src/Network-Pcap.html#datalink",
          "type": "function"
        },
        "index": {
          "description": "Returns the datalink type associated with the given handle",
          "hierarchy": "Network Pcap",
          "module": "Network.Pcap",
          "name": "datalink",
          "normalized": "PcapHandle-\u003eIO Link",
          "package": "pcap",
          "signature": "PcapHandle-\u003eIO Link",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:datalink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCollect and process packets.\n\u003c/p\u003e\u003cp\u003eThe count is the maximum number of packets to process before\n returning.  A count of -1 means process all of the packets received\n in one buffer (if a live capture) or all of the packets in a dump\n file (if offline).\n\u003c/p\u003e\u003cp\u003eThe callback function is passed two arguments, a packet header\n record and a pointer to the packet data (\u003ccode\u003ePtr Word8\u003c/code\u003e). THe header\n record contains the number of bytes captured, which can be used to\n marshal the data into a list, array, or \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e (using\n \u003ccode\u003e\u003ca\u003etoBS\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Network.Pcap",
          "name": "dispatch",
          "package": "pcap",
          "signature": "PcapHandle-\u003e Int-\u003e Callback-\u003e IO Int",
          "type": "function"
        },
        "index": {
          "description": "Collect and process packets The count is the maximum number of packets to process before returning count of means process all of the packets received in one buffer if live capture or all of the packets in dump file if offline The callback function is passed two arguments packet header record and pointer to the packet data Ptr Word8 THe header record contains the number of bytes captured which can be used to marshal the data into list array or ByteString using toBS",
          "hierarchy": "Network Pcap",
          "module": "Network.Pcap",
          "name": "dispatch",
          "normalized": "PcapHandle-\u003eInt-\u003eCallback-\u003eIO Int",
          "package": "pcap",
          "signature": "PcapHandle-\u003eInt-\u003eCallback-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:dispatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVariant of \u003ccode\u003e\u003ca\u003edispatch\u003c/a\u003e\u003c/code\u003e for use with \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.Pcap",
          "name": "dispatchBS",
          "package": "pcap",
          "signature": "PcapHandle-\u003e Int-\u003e CallbackBS-\u003e IO Int",
          "type": "function"
        },
        "index": {
          "description": "Variant of dispatch for use with ByteString",
          "hierarchy": "Network Pcap",
          "module": "Network.Pcap",
          "name": "dispatchBS",
          "normalized": "PcapHandle-\u003eInt-\u003eCallbackBS-\u003eIO Int",
          "package": "pcap",
          "partial": "BS",
          "signature": "PcapHandle-\u003eInt-\u003eCallbackBS-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:dispatchBS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite the packet data given by the second and third arguments to\n a dump file opened by \u003ccode\u003e\u003ca\u003eopenDead\u003c/a\u003e\u003c/code\u003e. \u003ccode\u003e\u003ca\u003edump\u003c/a\u003e\u003c/code\u003e is designed so it can be\n easily used as a default callback function by \u003ccode\u003e\u003ca\u003edispatch\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eloop\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.Pcap",
          "name": "dump",
          "package": "pcap",
          "signature": "DumpHandle-\u003e Ptr PktHdr-\u003e Ptr Word8-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Write the packet data given by the second and third arguments to dump file opened by openDead dump is designed so it can be easily used as default callback function by dispatch or loop",
          "hierarchy": "Network Pcap",
          "module": "Network.Pcap",
          "name": "dump",
          "normalized": "DumpHandle-\u003ePtr PktHdr-\u003ePtr Word-\u003eIO()",
          "package": "pcap",
          "signature": "DumpHandle-\u003ePtr PktHdr-\u003ePtr Word-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:dump"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Pcap",
          "name": "dumpBS",
          "package": "pcap",
          "signature": "DumpHandle-\u003e Ptr PktHdr-\u003e ByteString-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Pcap",
          "module": "Network.Pcap",
          "name": "dumpBS",
          "normalized": "DumpHandle-\u003ePtr PktHdr-\u003eByteString-\u003eIO()",
          "package": "pcap",
          "partial": "BS",
          "signature": "DumpHandle-\u003ePtr PktHdr-\u003eByteString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:dumpBS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the blocking status of the \u003ccode\u003e\u003ca\u003ePcapHandle\u003c/a\u003e\u003c/code\u003e. \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e indicates\n that the handle is non-blocking. Handles referring to dump files\n opened by \u003ccode\u003e\u003ca\u003eopenDump\u003c/a\u003e\u003c/code\u003e always return \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.Pcap",
          "name": "getNonBlock",
          "package": "pcap",
          "signature": "PcapHandle -\u003e IO Bool",
          "source": "src/Network-Pcap.html#getNonBlock",
          "type": "function"
        },
        "index": {
          "description": "Return the blocking status of the PcapHandle True indicates that the handle is non-blocking Handles referring to dump files opened by openDump always return False",
          "hierarchy": "Network Pcap",
          "module": "Network.Pcap",
          "name": "getNonBlock",
          "normalized": "PcapHandle-\u003eIO Bool",
          "package": "pcap",
          "partial": "Non Block",
          "signature": "PcapHandle-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:getNonBlock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the timestamp of a packet as a \u003ccode\u003e\u003ca\u003eDiffTime\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.Pcap",
          "name": "hdrDiffTime",
          "package": "pcap",
          "signature": "PktHdr -\u003e DiffTime",
          "source": "src/Network-Pcap.html#hdrDiffTime",
          "type": "function"
        },
        "index": {
          "description": "Get the timestamp of packet as DiffTime",
          "hierarchy": "Network Pcap",
          "module": "Network.Pcap",
          "name": "hdrDiffTime",
          "normalized": "PktHdr-\u003eDiffTime",
          "package": "pcap",
          "partial": "Diff Time",
          "signature": "PktHdr-\u003eDiffTime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:hdrDiffTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the timestamp of a packet as a single quantity, in\n microseconds.\n\u003c/p\u003e",
          "module": "Network.Pcap",
          "name": "hdrTime",
          "package": "pcap",
          "signature": "PktHdr -\u003e Int64",
          "source": "src/Network-Pcap.html#hdrTime",
          "type": "function"
        },
        "index": {
          "description": "Get the timestamp of packet as single quantity in microseconds",
          "hierarchy": "Network Pcap",
          "module": "Network.Pcap",
          "name": "hdrTime",
          "normalized": "PktHdr-\u003eInt",
          "package": "pcap",
          "partial": "Time",
          "signature": "PktHdr-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:hdrTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eisSwapped\u003c/a\u003e\u003c/code\u003e returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if the current dump file uses a\n different byte order than the one native to the system.\n\u003c/p\u003e",
          "module": "Network.Pcap",
          "name": "isSwapped",
          "package": "pcap",
          "signature": "PcapHandle -\u003e IO Bool",
          "source": "src/Network-Pcap.html#isSwapped",
          "type": "function"
        },
        "index": {
          "description": "isSwapped returns True if the current dump file uses different byte order than the one native to the system",
          "hierarchy": "Network Pcap",
          "module": "Network.Pcap",
          "name": "isSwapped",
          "normalized": "PcapHandle-\u003eIO Bool",
          "package": "pcap",
          "partial": "Swapped",
          "signature": "PcapHandle-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:isSwapped"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList all the datalink types supported by the given\n handle. Entries from the resulting list are valid arguments to\n \u003ccode\u003e\u003ca\u003esetDatalink\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.Pcap",
          "name": "listDatalinks",
          "package": "pcap",
          "signature": "PcapHandle -\u003e IO [Link]",
          "source": "src/Network-Pcap.html#listDatalinks",
          "type": "function"
        },
        "index": {
          "description": "List all the datalink types supported by the given handle Entries from the resulting list are valid arguments to setDatalink",
          "hierarchy": "Network Pcap",
          "module": "Network.Pcap",
          "name": "listDatalinks",
          "normalized": "PcapHandle-\u003eIO[Link]",
          "package": "pcap",
          "partial": "Datalinks",
          "signature": "PcapHandle-\u003eIO[Link]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:listDatalinks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003edispatch\u003c/a\u003e\u003c/code\u003e, but loop until the number of packets\n specified by the second argument are read. A negative value loops\n forever.\n\u003c/p\u003e\u003cp\u003eThis function does not return when a live read timeout occurs. Use\n \u003ccode\u003e\u003ca\u003edispatch\u003c/a\u003e\u003c/code\u003e instead if you want to specify a timeout.\n\u003c/p\u003e",
          "module": "Network.Pcap",
          "name": "loop",
          "package": "pcap",
          "signature": "PcapHandle-\u003e Int-\u003e Callback-\u003e IO Int",
          "type": "function"
        },
        "index": {
          "description": "Similar to dispatch but loop until the number of packets specified by the second argument are read negative value loops forever This function does not return when live read timeout occurs Use dispatch instead if you want to specify timeout",
          "hierarchy": "Network Pcap",
          "module": "Network.Pcap",
          "name": "loop",
          "normalized": "PcapHandle-\u003eInt-\u003eCallback-\u003eIO Int",
          "package": "pcap",
          "signature": "PcapHandle-\u003eInt-\u003eCallback-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:loop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVariant of \u003ccode\u003e\u003ca\u003eloop\u003c/a\u003e\u003c/code\u003e for use with \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.Pcap",
          "name": "loopBS",
          "package": "pcap",
          "signature": "PcapHandle-\u003e Int-\u003e CallbackBS-\u003e IO Int",
          "type": "function"
        },
        "index": {
          "description": "Variant of loop for use with ByteString",
          "hierarchy": "Network Pcap",
          "module": "Network.Pcap",
          "name": "loopBS",
          "normalized": "PcapHandle-\u003eInt-\u003eCallbackBS-\u003eIO Int",
          "package": "pcap",
          "partial": "BS",
          "signature": "PcapHandle-\u003eInt-\u003eCallbackBS-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:loopBS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead the next packet (equivalent to calling \u003ccode\u003e\u003ca\u003edispatch\u003c/a\u003e\u003c/code\u003e with a\n count of 1).\n\u003c/p\u003e",
          "module": "Network.Pcap",
          "name": "next",
          "package": "pcap",
          "signature": "PcapHandle -\u003e IO (PktHdr, Ptr Word8)",
          "source": "src/Network-Pcap.html#next",
          "type": "function"
        },
        "index": {
          "description": "Read the next packet equivalent to calling dispatch with count of",
          "hierarchy": "Network Pcap",
          "module": "Network.Pcap",
          "name": "next",
          "normalized": "PcapHandle-\u003eIO(PktHdr,Ptr Word)",
          "package": "pcap",
          "signature": "PcapHandle-\u003eIO(PktHdr,Ptr Word)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:next"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Pcap",
          "name": "nextBS",
          "package": "pcap",
          "signature": "PcapHandle -\u003e IO (PktHdr, ByteString)",
          "source": "src/Network-Pcap.html#nextBS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Pcap",
          "module": "Network.Pcap",
          "name": "nextBS",
          "normalized": "PcapHandle-\u003eIO(PktHdr,ByteString)",
          "package": "pcap",
          "partial": "BS",
          "signature": "PcapHandle-\u003eIO(PktHdr,ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:nextBS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eopenDead\u003c/a\u003e\u003c/code\u003e is used to get a \u003ccode\u003e\u003ca\u003ePcapHandle\u003c/a\u003e\u003c/code\u003e without opening a file\n or device. It is typically used to test packet filter compilation\n by \u003ccode\u003e\u003ca\u003esetFilter\u003c/a\u003e\u003c/code\u003e. The arguments are the link type and the snapshot\n length.\n\u003c/p\u003e",
          "module": "Network.Pcap",
          "name": "openDead",
          "package": "pcap",
          "signature": "Link-\u003e Int-\u003e IO PcapHandle",
          "type": "function"
        },
        "index": {
          "description": "openDead is used to get PcapHandle without opening file or device It is typically used to test packet filter compilation by setFilter The arguments are the link type and the snapshot length",
          "hierarchy": "Network Pcap",
          "module": "Network.Pcap",
          "name": "openDead",
          "normalized": "Link-\u003eInt-\u003eIO PcapHandle",
          "package": "pcap",
          "partial": "Dead",
          "signature": "Link-\u003eInt-\u003eIO PcapHandle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:openDead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eopenDump\u003c/a\u003e\u003c/code\u003e opens a dump file for writing. This dump file is\n written to by the \u003ccode\u003e\u003ca\u003edump\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e",
          "module": "Network.Pcap",
          "name": "openDump",
          "package": "pcap",
          "signature": "PcapHandle-\u003e FilePath-\u003e IO DumpHandle",
          "type": "function"
        },
        "index": {
          "description": "openDump opens dump file for writing This dump file is written to by the dump function",
          "hierarchy": "Network Pcap",
          "module": "Network.Pcap",
          "name": "openDump",
          "normalized": "PcapHandle-\u003eFilePath-\u003eIO DumpHandle",
          "package": "pcap",
          "partial": "Dump",
          "signature": "PcapHandle-\u003eFilePath-\u003eIO DumpHandle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:openDump"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eopenLive\u003c/a\u003e\u003c/code\u003e is used to get a \u003ccode\u003e\u003ca\u003ePcapHandle\u003c/a\u003e\u003c/code\u003e that can be used to look\n at packets on the network. The arguments are the device name, the\n snapshot length (in bytes), the promiscuity of the interface\n (\u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e == promiscuous) and a timeout in microseconds.\n\u003c/p\u003e\u003cp\u003eThe timeout allows the packet filter to delay while accumulating\n multiple packets, which is more efficient than reading packets one\n by one.  A timeout of zero will wait indefinitely for \"enough\"\n packets to arrive.\n\u003c/p\u003e\u003cp\u003eUsing \u003ccode\u003e\"any\"\u003c/code\u003e as the device name will capture packets from all\n interfaces.  On some systems, reading from the \u003ccode\u003e\"any\"\u003c/code\u003e device is\n incompatible with setting the interfaces into promiscuous mode. In\n that case, only packets whose link layer addresses match those of\n the interfaces are captured.\n\u003c/p\u003e",
          "module": "Network.Pcap",
          "name": "openLive",
          "package": "pcap",
          "signature": "String-\u003e Int-\u003e Bool-\u003e Int64-\u003e IO PcapHandle",
          "type": "function"
        },
        "index": {
          "description": "openLive is used to get PcapHandle that can be used to look at packets on the network The arguments are the device name the snapshot length in bytes the promiscuity of the interface True promiscuous and timeout in microseconds The timeout allows the packet filter to delay while accumulating multiple packets which is more efficient than reading packets one by one timeout of zero will wait indefinitely for enough packets to arrive Using any as the device name will capture packets from all interfaces On some systems reading from the any device is incompatible with setting the interfaces into promiscuous mode In that case only packets whose link layer addresses match those of the interfaces are captured",
          "hierarchy": "Network Pcap",
          "module": "Network.Pcap",
          "name": "openLive",
          "normalized": "String-\u003eInt-\u003eBool-\u003eInt-\u003eIO PcapHandle",
          "package": "pcap",
          "partial": "Live",
          "signature": "String-\u003eInt-\u003eBool-\u003eInt-\u003eIO PcapHandle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:openLive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eopenOffline\u003c/a\u003e\u003c/code\u003e opens a dump file for reading. The file format is\n the same as used by \u003ccode\u003etcpdump\u003c/code\u003e and Wireshark. The string \u003ccode\u003e\"-\"\u003c/code\u003e is\n a synonym for \u003ccode\u003estdin\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.Pcap",
          "name": "openOffline",
          "package": "pcap",
          "signature": "FilePath-\u003e IO PcapHandle",
          "type": "function"
        },
        "index": {
          "description": "openOffline opens dump file for reading The file format is the same as used by tcpdump and Wireshark The string is synonym for stdin",
          "hierarchy": "Network Pcap",
          "module": "Network.Pcap",
          "name": "openOffline",
          "normalized": "FilePath-\u003eIO PcapHandle",
          "package": "pcap",
          "partial": "Offline",
          "signature": "FilePath-\u003eIO PcapHandle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:openOffline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSend a raw packet through the network interface.\n\u003c/p\u003e",
          "module": "Network.Pcap",
          "name": "sendPacket",
          "package": "pcap",
          "signature": "PcapHandle-\u003e Ptr Word8-\u003e Int-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Send raw packet through the network interface",
          "hierarchy": "Network Pcap",
          "module": "Network.Pcap",
          "name": "sendPacket",
          "normalized": "PcapHandle-\u003ePtr Word-\u003eInt-\u003eIO()",
          "package": "pcap",
          "partial": "Packet",
          "signature": "PcapHandle-\u003ePtr Word-\u003eInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:sendPacket"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVariant of \u003ccode\u003e\u003ca\u003esendPacket\u003c/a\u003e\u003c/code\u003e for use with \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.Pcap",
          "name": "sendPacketBS",
          "package": "pcap",
          "signature": "PcapHandle-\u003e ByteString-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Variant of sendPacket for use with ByteString",
          "hierarchy": "Network Pcap",
          "module": "Network.Pcap",
          "name": "sendPacketBS",
          "normalized": "PcapHandle-\u003eByteString-\u003eIO()",
          "package": "pcap",
          "partial": "Packet BS",
          "signature": "PcapHandle-\u003eByteString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:sendPacketBS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets the datalink type for the given handle.\n\u003c/p\u003e",
          "module": "Network.Pcap",
          "name": "setDatalink",
          "package": "pcap",
          "signature": "PcapHandle -\u003e Link -\u003e IO ()",
          "source": "src/Network-Pcap.html#setDatalink",
          "type": "function"
        },
        "index": {
          "description": "Sets the datalink type for the given handle",
          "hierarchy": "Network Pcap",
          "module": "Network.Pcap",
          "name": "setDatalink",
          "normalized": "PcapHandle-\u003eLink-\u003eIO()",
          "package": "pcap",
          "partial": "Datalink",
          "signature": "PcapHandle-\u003eLink-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:setDatalink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecify the direction in which packets are to be captured.\n Complete functionality is not necessarily available on all\n platforms.\n\u003c/p\u003e",
          "module": "Network.Pcap",
          "name": "setDirection",
          "package": "pcap",
          "signature": "PcapHandle -\u003e Direction -\u003e IO ()",
          "source": "src/Network-Pcap.html#setDirection",
          "type": "function"
        },
        "index": {
          "description": "Specify the direction in which packets are to be captured Complete functionality is not necessarily available on all platforms",
          "hierarchy": "Network Pcap",
          "module": "Network.Pcap",
          "name": "setDirection",
          "normalized": "PcapHandle-\u003eDirection-\u003eIO()",
          "package": "pcap",
          "partial": "Direction",
          "signature": "PcapHandle-\u003eDirection-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:setDirection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet a filter on the specified packet capture handle. Valid filter\n strings are those accepted by \u003ccode\u003etcpdump\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.Pcap",
          "name": "setFilter",
          "package": "pcap",
          "signature": "PcapHandle-\u003e String-\u003e Bool-\u003e Word32-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Set filter on the specified packet capture handle Valid filter strings are those accepted by tcpdump",
          "hierarchy": "Network Pcap",
          "module": "Network.Pcap",
          "name": "setFilter",
          "normalized": "PcapHandle-\u003eString-\u003eBool-\u003eWord-\u003eIO()",
          "package": "pcap",
          "partial": "Filter",
          "signature": "PcapHandle-\u003eString-\u003eBool-\u003eWord-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:setFilter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the given \u003ccode\u003e\u003ca\u003ePcapHandle\u003c/a\u003e\u003c/code\u003e into non-blocking mode if the second\n argument is \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e, otherwise put it in blocking mode. Note that\n the \u003ccode\u003e\u003ca\u003ePcapHandle\u003c/a\u003e\u003c/code\u003e must have been obtained from \u003ccode\u003e\u003ca\u003eopenLive\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.Pcap",
          "name": "setNonBlock",
          "package": "pcap",
          "signature": "PcapHandle-\u003e Bool-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Set the given PcapHandle into non-blocking mode if the second argument is True otherwise put it in blocking mode Note that the PcapHandle must have been obtained from openLive",
          "hierarchy": "Network Pcap",
          "module": "Network.Pcap",
          "name": "setNonBlock",
          "normalized": "PcapHandle-\u003eBool-\u003eIO()",
          "package": "pcap",
          "partial": "Non Block",
          "signature": "PcapHandle-\u003eBool-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:setNonBlock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe snapshot length that was used in the call to \u003ccode\u003e\u003ca\u003eopenLive\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.Pcap",
          "name": "snapshotLen",
          "package": "pcap",
          "signature": "PcapHandle -\u003e IO Int",
          "source": "src/Network-Pcap.html#snapshotLen",
          "type": "function"
        },
        "index": {
          "description": "The snapshot length that was used in the call to openLive",
          "hierarchy": "Network Pcap",
          "module": "Network.Pcap",
          "name": "snapshotLen",
          "normalized": "PcapHandle-\u003eIO Int",
          "package": "pcap",
          "partial": "Len",
          "signature": "PcapHandle-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:snapshotLen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the number of packets received, the number of packets\n dropped by the packet filter and the number of packets dropped by\n the interface (before processing by the packet filter).\n\u003c/p\u003e",
          "module": "Network.Pcap",
          "name": "statistics",
          "package": "pcap",
          "signature": "PcapHandle -\u003e IO Statistics",
          "source": "src/Network-Pcap.html#statistics",
          "type": "function"
        },
        "index": {
          "description": "Returns the number of packets received the number of packets dropped by the packet filter and the number of packets dropped by the interface before processing by the packet filter",
          "hierarchy": "Network Pcap",
          "module": "Network.Pcap",
          "name": "statistics",
          "normalized": "PcapHandle-\u003eIO Statistics",
          "package": "pcap",
          "signature": "PcapHandle-\u003eIO Statistics",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:statistics"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresent a captured packet as a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.  Suitable for\n use as is with the result of \u003ccode\u003e\u003ca\u003enext\u003c/a\u003e\u003c/code\u003e, or use \u003ccode\u003e\u003ccode\u003e\u003ca\u003ecurry\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003etoBS\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e inside\n a \u003ccode\u003e\u003ca\u003eCallback\u003c/a\u003e\u003c/code\u003e with \u003ccode\u003e\u003ca\u003edispatch\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.Pcap",
          "name": "toBS",
          "package": "pcap",
          "signature": "(PktHdr, Ptr Word8) -\u003e IO (PktHdr, ByteString)",
          "source": "src/Network-Pcap.html#toBS",
          "type": "function"
        },
        "index": {
          "description": "Represent captured packet as ByteString Suitable for use as is with the result of next or use curry toBS inside Callback with dispatch",
          "hierarchy": "Network Pcap",
          "module": "Network.Pcap",
          "name": "toBS",
          "normalized": "(PktHdr,Ptr Word)-\u003eIO(PktHdr,ByteString)",
          "package": "pcap",
          "partial": "BS",
          "signature": "(PktHdr,Ptr Word)-\u003eIO(PktHdr,ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:toBS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVersion of the library.  The returned pair consists of the major\n and minor version numbers.\n\u003c/p\u003e",
          "module": "Network.Pcap",
          "name": "version",
          "package": "pcap",
          "signature": "PcapHandle -\u003e IO (Int, Int)",
          "source": "src/Network-Pcap.html#version",
          "type": "function"
        },
        "index": {
          "description": "Version of the library The returned pair consists of the major and minor version numbers",
          "hierarchy": "Network Pcap",
          "module": "Network.Pcap",
          "name": "version",
          "normalized": "PcapHandle-\u003eIO(Int,Int)",
          "package": "pcap",
          "signature": "PcapHandle-\u003eIO(Int,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:version"
      }
    }
  ]
]