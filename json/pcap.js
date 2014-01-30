[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eBase\u003c/a\u003e\u003c/code\u003e module is a low-level binding to all of the\n functions in \u003ccode\u003elibpcap\u003c/code\u003e.  See \u003ca\u003ehttp://www.tcpdump.org\u003c/a\u003e for more\n information.\n\u003c/p\u003e\u003cp\u003eOnly a minimum of marshaling is done.  For a higher-level interface\n that's more friendly, use the \u003ccode\u003e\u003ca\u003ePcap\u003c/a\u003e\u003c/code\u003e module.\n\u003c/p\u003e\u003cp\u003eTo convert captured packet data to a list, extract the length of\n the captured buffer from the packet header record and use\n \u003ccode\u003e\u003ca\u003epeekArray\u003c/a\u003e\u003c/code\u003e to convert the captured data to a list.  For\n illustration:\n\u003c/p\u003e\u003cpre\u003e import Foreign\n import Network.Pcap.Base\n\n main :: IO ()\n main = do\n     p \u003c- openLive \"eth0\" 100 True 10000\n     withForeignPtr p $ \\ptr -\u003e\n       dispatch ptr (-1) printIt\n     return ()\n\n printIt :: PktHdr -\u003e Ptr Word8 -\u003e IO ()\n printIt ph bytep =\n     peekArray (fromIntegral (hdrCaptureLength ph)) bytep \u003e\u003e= print\n\u003c/pre\u003e\u003cp\u003eNote that the \u003ccode\u003e\u003ca\u003eSockAddr\u003c/a\u003e\u003c/code\u003e exported here is not the \u003ccode\u003eSockAddr\u003c/code\u003e from\n \u003ccode\u003e\u003ca\u003eSocket\u003c/a\u003e\u003c/code\u003e. The \u003ccode\u003eSockAddr\u003c/code\u003e from \u003ccode\u003e\u003ca\u003eSocket\u003c/a\u003e\u003c/code\u003e corresponds\n to \u003ccode\u003estruct sockaddr_in\u003c/code\u003e in BSD terminology. The \u003ccode\u003e\u003ca\u003eSockAddr\u003c/a\u003e\u003c/code\u003e record\n here is BSD's \u003ccode\u003estruct sockaddr\u003c/code\u003e. See W.R.Stevens, TCP Illustrated,\n volume 2, for further elucidation.\n\u003c/p\u003e\u003cp\u003eThis binding should be portable across systems that can use the\n \u003ccode\u003elibpcap\u003c/code\u003e library from \u003ccode\u003etcpdump.org\u003c/code\u003e. It will not work with\n Winpcap, a similar library for Windows, although adapting it should\n not prove difficult.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Network.Pcap.Base",
        "fct-package": "pcap",
        "fct-signature": "module",
        "fct-source": "src/Network-Pcap-Base.html",
        "fct-type": "module",
        "title": "Base"
      },
      "index": {
        "description": "The Base module is low-level binding to all of the functions in libpcap See http www.tcpdump.org for more information Only minimum of marshaling is done For higher-level interface that more friendly use the Pcap module To convert captured packet data to list extract the length of the captured buffer from the packet header record and use peekArray to convert the captured data to list For illustration import Foreign import Network.Pcap.Base main IO main do openLive eth0 True withForeignPtr ptr dispatch ptr printIt return printIt PktHdr Ptr Word8 IO printIt ph bytep peekArray fromIntegral hdrCaptureLength ph bytep print Note that the SockAddr exported here is not the SockAddr from Socket The SockAddr from Socket corresponds to struct sockaddr in in BSD terminology The SockAddr record here is BSD struct sockaddr See W.R.Stevens TCP Illustrated volume for further elucidation This binding should be portable across systems that can use the libpcap library from tcpdump.org It will not work with Winpcap similar library for Windows although adapting it should not prove difficult",
        "hierarchy": "Network Pcap Base",
        "module": "Network.Pcap.Base",
        "name": "Base",
        "normalized": "",
        "package": "pcap",
        "partial": "Base",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#t:BpfProgram",
      "description": {
        "fct-descr": "\u003cp\u003eCompiled Berkeley Packet Filter program.\n\u003c/p\u003e",
        "fct-module": "Network.Pcap.Base",
        "fct-package": "pcap",
        "fct-signature": "type",
        "fct-source": "src/Network-Pcap-Base.html#BpfProgram",
        "fct-type": "type",
        "title": "BpfProgram"
      },
      "index": {
        "description": "Compiled Berkeley Packet Filter program",
        "hierarchy": "Network Pcap Base",
        "module": "Network.Pcap.Base",
        "name": "BpfProgram",
        "normalized": "",
        "package": "pcap",
        "partial": "Bpf Program",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#t:BpfProgramTag",
      "description": {
        "fct-module": "Network.Pcap.Base",
        "fct-package": "pcap",
        "fct-signature": "data",
        "fct-source": "src/Network-Pcap-Base.html#BpfProgramTag",
        "fct-type": "data",
        "title": "BpfProgramTag"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Pcap Base",
        "module": "Network.Pcap.Base",
        "name": "BpfProgramTag",
        "normalized": "",
        "package": "pcap",
        "partial": "Bpf Program Tag",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#t:Callback",
      "description": {
        "fct-descr": "\u003cp\u003ethe type of the callback function passed to \u003ccode\u003e\u003ca\u003edispatch\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eloop\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.Pcap.Base",
        "fct-package": "pcap",
        "fct-signature": "type",
        "fct-source": "src/Network-Pcap-Base.html#Callback",
        "fct-type": "type",
        "title": "Callback"
      },
      "index": {
        "description": "the type of the callback function passed to dispatch or loop",
        "hierarchy": "Network Pcap Base",
        "module": "Network.Pcap.Base",
        "name": "Callback",
        "normalized": "",
        "package": "pcap",
        "partial": "Callback",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#t:Direction",
      "description": {
        "fct-descr": "\u003cp\u003eThe direction in which packets are to be captured.  See\n \u003ccode\u003e\u003ca\u003esetDirection\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.Pcap.Base",
        "fct-package": "pcap",
        "fct-signature": "data",
        "fct-source": "src/Network-Pcap-Base.html#Direction",
        "fct-type": "data",
        "title": "Direction"
      },
      "index": {
        "description": "The direction in which packets are to be captured See setDirection",
        "hierarchy": "Network Pcap Base",
        "module": "Network.Pcap.Base",
        "name": "Direction",
        "normalized": "",
        "package": "pcap",
        "partial": "Direction",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#t:Interface",
      "description": {
        "fct-descr": "\u003cp\u003eThe interface structure.\n\u003c/p\u003e",
        "fct-module": "Network.Pcap.Base",
        "fct-package": "pcap",
        "fct-signature": "data",
        "fct-source": "src/Network-Pcap-Base.html#Interface",
        "fct-type": "data",
        "title": "Interface"
      },
      "index": {
        "description": "The interface structure",
        "hierarchy": "Network Pcap Base",
        "module": "Network.Pcap.Base",
        "name": "Interface",
        "normalized": "",
        "package": "pcap",
        "partial": "Interface",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#t:Link",
      "description": {
        "fct-descr": "\u003cp\u003eDatalink types.\n\u003c/p\u003e\u003cp\u003eThis covers all of the datalink types defined in bpf.h.  Types\n   defined on your system may vary.\n\u003c/p\u003e",
        "fct-module": "Network.Pcap.Base",
        "fct-package": "pcap",
        "fct-signature": "data",
        "fct-source": "src/Network-Pcap-Base.html#Link",
        "fct-type": "data",
        "title": "Link"
      },
      "index": {
        "description": "Datalink types This covers all of the datalink types defined in bpf.h Types defined on your system may vary",
        "hierarchy": "Network Pcap Base",
        "module": "Network.Pcap.Base",
        "name": "Link",
        "normalized": "",
        "package": "pcap",
        "partial": "Link",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#t:Network",
      "description": {
        "fct-descr": "\u003cp\u003eThe network address record. Both the address and mask are in\n network byte order.\n\u003c/p\u003e",
        "fct-module": "Network.Pcap.Base",
        "fct-package": "pcap",
        "fct-signature": "data",
        "fct-source": "src/Network-Pcap-Base.html#Network",
        "fct-type": "data",
        "title": "Network"
      },
      "index": {
        "description": "The network address record Both the address and mask are in network byte order",
        "hierarchy": "Network Pcap Base",
        "module": "Network.Pcap.Base",
        "name": "Network",
        "normalized": "",
        "package": "pcap",
        "partial": "Network",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#t:PcapAddr",
      "description": {
        "fct-descr": "\u003cp\u003eThe address structure.\n\u003c/p\u003e",
        "fct-module": "Network.Pcap.Base",
        "fct-package": "pcap",
        "fct-signature": "data",
        "fct-source": "src/Network-Pcap-Base.html#PcapAddr",
        "fct-type": "data",
        "title": "PcapAddr"
      },
      "index": {
        "description": "The address structure",
        "hierarchy": "Network Pcap Base",
        "module": "Network.Pcap.Base",
        "name": "PcapAddr",
        "normalized": "",
        "package": "pcap",
        "partial": "Pcap Addr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#t:PcapDumpTag",
      "description": {
        "fct-descr": "\u003cp\u003ePacket capture descriptor.\n\u003c/p\u003e",
        "fct-module": "Network.Pcap.Base",
        "fct-package": "pcap",
        "fct-signature": "data",
        "fct-source": "src/Network-Pcap-Base.html#PcapDumpTag",
        "fct-type": "data",
        "title": "PcapDumpTag"
      },
      "index": {
        "description": "Packet capture descriptor",
        "hierarchy": "Network Pcap Base",
        "module": "Network.Pcap.Base",
        "name": "PcapDumpTag",
        "normalized": "",
        "package": "pcap",
        "partial": "Pcap Dump Tag",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#t:PcapTag",
      "description": {
        "fct-module": "Network.Pcap.Base",
        "fct-package": "pcap",
        "fct-signature": "data",
        "fct-source": "src/Network-Pcap-Base.html#PcapTag",
        "fct-type": "data",
        "title": "PcapTag"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Pcap Base",
        "module": "Network.Pcap.Base",
        "name": "PcapTag",
        "normalized": "",
        "package": "pcap",
        "partial": "Pcap Tag",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#t:Pdump",
      "description": {
        "fct-descr": "\u003cp\u003eDump file descriptor.\n\u003c/p\u003e",
        "fct-module": "Network.Pcap.Base",
        "fct-package": "pcap",
        "fct-signature": "type",
        "fct-source": "src/Network-Pcap-Base.html#Pdump",
        "fct-type": "type",
        "title": "Pdump"
      },
      "index": {
        "description": "Dump file descriptor",
        "hierarchy": "Network Pcap Base",
        "module": "Network.Pcap.Base",
        "name": "Pdump",
        "normalized": "",
        "package": "pcap",
        "partial": "Pdump",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#t:PktHdr",
      "description": {
        "fct-module": "Network.Pcap.Base",
        "fct-package": "pcap",
        "fct-signature": "data",
        "fct-source": "src/Network-Pcap-Base.html#PktHdr",
        "fct-type": "data",
        "title": "PktHdr"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Pcap Base",
        "module": "Network.Pcap.Base",
        "name": "PktHdr",
        "normalized": "",
        "package": "pcap",
        "partial": "Pkt Hdr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#t:SockAddr",
      "description": {
        "fct-descr": "\u003cp\u003eThe socket address record. Note that this is not the same as\n SockAddr from \u003ccode\u003e\u003ca\u003eSocket\u003c/a\u003e\u003c/code\u003e. (That is a Haskell version of C's\n \u003ccode\u003estruct sockaddr_in\u003c/code\u003e. This is the real \u003ccode\u003estruct sockaddr\u003c/code\u003e from the\n BSD network stack.)\n\u003c/p\u003e",
        "fct-module": "Network.Pcap.Base",
        "fct-package": "pcap",
        "fct-signature": "data",
        "fct-source": "src/Network-Pcap-Base.html#SockAddr",
        "fct-type": "data",
        "title": "SockAddr"
      },
      "index": {
        "description": "The socket address record Note that this is not the same as SockAddr from Socket That is Haskell version of struct sockaddr in This is the real struct sockaddr from the BSD network stack",
        "hierarchy": "Network Pcap Base",
        "module": "Network.Pcap.Base",
        "name": "SockAddr",
        "normalized": "",
        "package": "pcap",
        "partial": "Sock Addr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#t:Statistics",
      "description": {
        "fct-module": "Network.Pcap.Base",
        "fct-package": "pcap",
        "fct-signature": "data",
        "fct-source": "src/Network-Pcap-Base.html#Statistics",
        "fct-type": "data",
        "title": "Statistics"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Pcap Base",
        "module": "Network.Pcap.Base",
        "name": "Statistics",
        "normalized": "",
        "package": "pcap",
        "partial": "Statistics",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_A429",
      "description": {
        "fct-descr": "\u003cp\u003eARINC 429\n\u003c/p\u003e",
        "fct-module": "Network.Pcap.Base",
        "fct-package": "pcap",
        "fct-signature": "DLT_A429",
        "fct-source": "src/Network-Pcap-Base.html#Link",
        "fct-type": "function",
        "title": "DLT_A429"
      },
      "index": {
        "description": "ARINC",
        "hierarchy": "Network Pcap Base",
        "module": "Network.Pcap.Base",
        "name": "DLT_A429",
        "normalized": "",
        "package": "pcap",
        "partial": "DLT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_A653_ICM",
      "description": {
        "fct-descr": "\u003cp\u003eARINC 653 Interpartition Communication messages\n\u003c/p\u003e",
        "fct-module": "Network.Pcap.Base",
        "fct-package": "pcap",
        "fct-signature": "DLT_A653_ICM",
        "fct-source": "src/Network-Pcap-Base.html#Link",
        "fct-type": "function",
        "title": "DLT_A653_ICM"
      },
      "index": {
        "description": "ARINC Interpartition Communication messages",
        "hierarchy": "Network Pcap Base",
        "module": "Network.Pcap.Base",
        "name": "DLT_A653_ICM",
        "normalized": "",
        "package": "pcap",
        "partial": "DLT ICM",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_AIRONET_HEADER",
      "description": {
        "fct-descr": "\u003cp\u003eAironet (Cisco) 802.11 wireless\n\u003c/p\u003e",
        "fct-module": "Network.Pcap.Base",
        "fct-package": "pcap",
        "fct-signature": "DLT_AIRONET_HEADER",
        "fct-source": "src/Network-Pcap-Base.html#Link",
        "fct-type": "function",
        "title": "DLT_AIRONET_HEADER"
      },
      "index": {
        "description": "Aironet Cisco wireless",
        "hierarchy": "Network Pcap Base",
        "module": "Network.Pcap.Base",
        "name": "DLT_AIRONET_HEADER",
        "normalized": "",
        "package": "pcap",
        "partial": "DLT AIRONET HEADER",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_APPLE_IP_OVER_IEEE1394",
      "description": {
        "fct-descr": "\u003cp\u003eApple IP-over-IEEE 1394\n\u003c/p\u003e",
        "fct-module": "Network.Pcap.Base",
        "fct-package": "pcap",
        "fct-signature": "DLT_APPLE_IP_OVER_IEEE1394",
        "fct-source": "src/Network-Pcap-Base.html#Link",
        "fct-type": "function",
        "title": "DLT_APPLE_IP_OVER_IEEE1394"
      },
      "index": {
        "description": "Apple IP-over-IEEE",
        "hierarchy": "Network Pcap Base",
        "module": "Network.Pcap.Base",
        "name": "DLT_APPLE_IP_OVER_IEEE1394",
        "normalized": "",
        "package": "pcap",
        "partial": "DLT APPLE IP OVER IEEE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_ARCNET",
      "description": {
        "fct-descr": "\u003cp\u003eARCNET\n\u003c/p\u003e",
        "fct-module": "Network.Pcap.Base",
        "fct-package": "pcap",
        "fct-signature": "DLT_ARCNET",
        "fct-source": "src/Network-Pcap-Base.html#Link",
        "fct-type": "function",
        "title": "DLT_ARCNET"
      },
      "index": {
        "description": "ARCNET",
        "hierarchy": "Network Pcap Base",
        "module": "Network.Pcap.Base",
        "name": "DLT_ARCNET",
        "normalized": "",
        "package": "pcap",
        "partial": "DLT ARCNET",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_ARCNET_LINUX",
      "description": {
        "fct-descr": "\u003cp\u003eLinux ARCNET header\n\u003c/p\u003e",
        "fct-module": "Network.Pcap.Base",
        "fct-package": "pcap",
        "fct-signature": "DLT_ARCNET_LINUX",
        "fct-source": "src/Network-Pcap-Base.html#Link",
        "fct-type": "function",
        "title": "DLT_ARCNET_LINUX"
      },
      "index": {
        "description": "Linux ARCNET header",
        "hierarchy": "Network Pcap Base",
        "module": "Network.Pcap.Base",
        "name": "DLT_ARCNET_LINUX",
        "normalized": "",
        "package": "pcap",
        "partial": "DLT ARCNET LINUX",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_ATM_CLIP",
      "description": {
        "fct-descr": "\u003cp\u003eLinux classical IP over ATM\n\u003c/p\u003e",
        "fct-module": "Network.Pcap.Base",
        "fct-package": "pcap",
        "fct-signature": "DLT_ATM_CLIP",
        "fct-source": "src/Network-Pcap-Base.html#Link",
        "fct-type": "function",
        "title": "DLT_ATM_CLIP"
      },
      "index": {
        "description": "Linux classical IP over ATM",
        "hierarchy": "Network Pcap Base",
        "module": "Network.Pcap.Base",
        "name": "DLT_ATM_CLIP",
        "normalized": "",
        "package": "pcap",
        "partial": "DLT ATM CLIP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_ATM_RFC1483",
      "description": {
        "fct-descr": "\u003cp\u003eLLC SNAP encapsulated ATM\n\u003c/p\u003e",
        "fct-module": "Network.Pcap.Base",
        "fct-package": "pcap",
        "fct-signature": "DLT_ATM_RFC1483",
        "fct-source": "src/Network-Pcap-Base.html#Link",
        "fct-type": "function",
        "title": "DLT_ATM_RFC1483"
      },
      "index": {
        "description": "LLC SNAP encapsulated ATM",
        "hierarchy": "Network Pcap Base",
        "module": "Network.Pcap.Base",
        "name": "DLT_ATM_RFC1483",
        "normalized": "",
        "package": "pcap",
        "partial": "DLT ATM RFC",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_AX25",
      "description": {
        "fct-descr": "\u003cp\u003eamateur radio AX.25\n\u003c/p\u003e",
        "fct-module": "Network.Pcap.Base",
        "fct-package": "pcap",
        "fct-signature": "DLT_AX25",
        "fct-source": "src/Network-Pcap-Base.html#Link",
        "fct-type": "function",
        "title": "DLT_AX25"
      },
      "index": {
        "description": "amateur radio AX.25",
        "hierarchy": "Network Pcap Base",
        "module": "Network.Pcap.Base",
        "name": "DLT_AX25",
        "normalized": "",
        "package": "pcap",
        "partial": "DLT AX",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_BLUETOOTH_HCI_H4",
      "description": {
        "fct-descr": "\u003cp\u003eBluetooth HCI UART transport layer (part H:4)\n\u003c/p\u003e",
        "fct-module": "Network.Pcap.Base",
        "fct-package": "pcap",
        "fct-signature": "DLT_BLUETOOTH_HCI_H4",
        "fct-source": "src/Network-Pcap-Base.html#Link",
        "fct-type": "function",
        "title": "DLT_BLUETOOTH_HCI_H4"
      },
      "index": {
        "description": "Bluetooth HCI UART transport layer part",
        "hierarchy": "Network Pcap Base",
        "module": "Network.Pcap.Base",
        "name": "DLT_BLUETOOTH_HCI_H4",
        "normalized": "",
        "package": "pcap",
        "partial": "DLT BLUETOOTH HCI",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_CAN20B",
      "description": {
        "fct-descr": "\u003cp\u003eController Area Network (CAN) v2.0B\n\u003c/p\u003e",
        "fct-module": "Network.Pcap.Base",
        "fct-package": "pcap",
        "fct-signature": "DLT_CAN20B",
        "fct-source": "src/Network-Pcap-Base.html#Link",
        "fct-type": "function",
        "title": "DLT_CAN20B"
      },
      "index": {
        "description": "Controller Area Network CAN v2.0B",
        "hierarchy": "Network Pcap Base",
        "module": "Network.Pcap.Base",
        "name": "DLT_CAN20B",
        "normalized": "",
        "package": "pcap",
        "partial": "DLT CAN",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_CHAOS",
      "description": {
        "fct-descr": "\u003cp\u003eChaos\n\u003c/p\u003e",
        "fct-module": "Network.Pcap.Base",
        "fct-package": "pcap",
        "fct-signature": "DLT_CHAOS",
        "fct-source": "src/Network-Pcap-Base.html#Link",
        "fct-type": "function",
        "title": "DLT_CHAOS"
      },
      "index": {
        "description": "Chaos",
        "hierarchy": "Network Pcap Base",
        "module": "Network.Pcap.Base",
        "name": "DLT_CHAOS",
        "normalized": "",
        "package": "pcap",
        "partial": "DLT CHAOS",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_CISCO_IOS",
      "description": {
        "fct-descr": "\u003cp\u003eCisco IOS\n\u003c/p\u003e",
        "fct-module": "Network.Pcap.Base",
        "fct-package": "pcap",
        "fct-signature": "DLT_CISCO_IOS",
        "fct-source": "src/Network-Pcap-Base.html#Link",
        "fct-type": "function",
        "title": "DLT_CISCO_IOS"
      },
      "index": {
        "description": "Cisco IOS",
        "hierarchy": "Network Pcap Base",
        "module": "Network.Pcap.Base",
        "name": "DLT_CISCO_IOS",
        "normalized": "",
        "package": "pcap",
        "partial": "DLT CISCO IOS",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_C_HDLC",
      "description": {
        "fct-descr": "\u003cp\u003eCisco HDLC\n\u003c/p\u003e",
        "fct-module": "Network.Pcap.Base",
        "fct-package": "pcap",
        "fct-signature": "DLT_C_HDLC",
        "fct-source": "src/Network-Pcap-Base.html#Link",
        "fct-type": "function",
        "title": "DLT_C_HDLC"
      },
      "index": {
        "description": "Cisco HDLC",
        "hierarchy": "Network Pcap Base",
        "module": "Network.Pcap.Base",
        "name": "DLT_C_HDLC",
        "normalized": "",
        "package": "pcap",
        "partial": "DLT HDLC",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_DOCSIS",
      "description": {
        "fct-descr": "\u003cp\u003eDOCSIS MAC frame\n\u003c/p\u003e",
        "fct-module": "Network.Pcap.Base",
        "fct-package": "pcap",
        "fct-signature": "DLT_DOCSIS",
        "fct-source": "src/Network-Pcap-Base.html#Link",
        "fct-type": "function",
        "title": "DLT_DOCSIS"
      },
      "index": {
        "description": "DOCSIS MAC frame",
        "hierarchy": "Network Pcap Base",
        "module": "Network.Pcap.Base",
        "name": "DLT_DOCSIS",
        "normalized": "",
        "package": "pcap",
        "partial": "DLT DOCSIS",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_ECONET",
      "description": {
        "fct-descr": "\u003cp\u003eAcorn Econet\n\u003c/p\u003e",
        "fct-module": "Network.Pcap.Base",
        "fct-package": "pcap",
        "fct-signature": "DLT_ECONET",
        "fct-source": "src/Network-Pcap-Base.html#Link",
        "fct-type": "function",
        "title": "DLT_ECONET"
      },
      "index": {
        "description": "Acorn Econet",
        "hierarchy": "Network Pcap Base",
        "module": "Network.Pcap.Base",
        "name": "DLT_ECONET",
        "normalized": "",
        "package": "pcap",
        "partial": "DLT ECONET",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_EN10MB",
      "description": {
        "fct-descr": "\u003cp\u003e10 Mbit per second (or faster) ethernet\n\u003c/p\u003e",
        "fct-module": "Network.Pcap.Base",
        "fct-package": "pcap",
        "fct-signature": "DLT_EN10MB",
        "fct-source": "src/Network-Pcap-Base.html#Link",
        "fct-type": "function",
        "title": "DLT_EN10MB"
      },
      "index": {
        "description": "Mbit per second or faster ethernet",
        "hierarchy": "Network Pcap Base",
        "module": "Network.Pcap.Base",
        "name": "DLT_EN10MB",
        "normalized": "",
        "package": "pcap",
        "partial": "DLT EN MB",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_EN3MB",
      "description": {
        "fct-descr": "\u003cp\u003eoriginal 3 Mbit per second ethernet\n\u003c/p\u003e",
        "fct-module": "Network.Pcap.Base",
        "fct-package": "pcap",
        "fct-signature": "DLT_EN3MB",
        "fct-source": "src/Network-Pcap-Base.html#Link",
        "fct-type": "function",
        "title": "DLT_EN3MB"
      },
      "index": {
        "description": "original Mbit per second ethernet",
        "hierarchy": "Network Pcap Base",
        "module": "Network.Pcap.Base",
        "name": "DLT_EN3MB",
        "normalized": "",
        "package": "pcap",
        "partial": "DLT EN MB",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_ENC",
      "description": {
        "fct-descr": "\u003cp\u003eEncapsulated packets for IPsec\n\u003c/p\u003e",
        "fct-module": "Network.Pcap.Base",
        "fct-package": "pcap",
        "fct-signature": "DLT_ENC",
        "fct-source": "src/Network-Pcap-Base.html#Link",
        "fct-type": "function",
        "title": "DLT_ENC"
      },
      "index": {
        "description": "Encapsulated packets for IPsec",
        "hierarchy": "Network Pcap Base",
        "module": "Network.Pcap.Base",
        "name": "DLT_ENC",
        "normalized": "",
        "package": "pcap",
        "partial": "DLT ENC",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_FDDI",
      "description": {
        "fct-descr": "\u003cp\u003eFDDI\n\u003c/p\u003e",
        "fct-module": "Network.Pcap.Base",
        "fct-package": "pcap",
        "fct-signature": "DLT_FDDI",
        "fct-source": "src/Network-Pcap-Base.html#Link",
        "fct-type": "function",
        "title": "DLT_FDDI"
      },
      "index": {
        "description": "FDDI",
        "hierarchy": "Network Pcap Base",
        "module": "Network.Pcap.Base",
        "name": "DLT_FDDI",
        "normalized": "",
        "package": "pcap",
        "partial": "DLT FDDI",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_FRELAY",
      "description": {
        "fct-descr": "\u003cp\u003eFrame Relay\n\u003c/p\u003e",
        "fct-module": "Network.Pcap.Base",
        "fct-package": "pcap",
        "fct-signature": "DLT_FRELAY",
        "fct-source": "src/Network-Pcap-Base.html#Link",
        "fct-type": "function",
        "title": "DLT_FRELAY"
      },
      "index": {
        "description": "Frame Relay",
        "hierarchy": "Network Pcap Base",
        "module": "Network.Pcap.Base",
        "name": "DLT_FRELAY",
        "normalized": "",
        "package": "pcap",
        "partial": "DLT FRELAY",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_GPF_F",
      "description": {
        "fct-descr": "\u003cp\u003eGPF-F (ITU-T G.7041/Y.1303)\n\u003c/p\u003e",
        "fct-module": "Network.Pcap.Base",
        "fct-package": "pcap",
        "fct-signature": "DLT_GPF_F",
        "fct-source": "src/Network-Pcap-Base.html#Link",
        "fct-type": "function",
        "title": "DLT_GPF_F"
      },
      "index": {
        "description": "GPF-F ITU-T G.7041 Y.1303",
        "hierarchy": "Network Pcap Base",
        "module": "Network.Pcap.Base",
        "name": "DLT_GPF_F",
        "normalized": "",
        "package": "pcap",
        "partial": "DLT GPF",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_GPF_T",
      "description": {
        "fct-descr": "\u003cp\u003eGPF-T (ITU-T G.7041/Y.1303)\n\u003c/p\u003e",
        "fct-module": "Network.Pcap.Base",
        "fct-package": "pcap",
        "fct-signature": "DLT_GPF_T",
        "fct-source": "src/Network-Pcap-Base.html#Link",
        "fct-type": "function",
        "title": "DLT_GPF_T"
      },
      "index": {
        "description": "GPF-T ITU-T G.7041 Y.1303",
        "hierarchy": "Network Pcap Base",
        "module": "Network.Pcap.Base",
        "name": "DLT_GPF_T",
        "normalized": "",
        "package": "pcap",
        "partial": "DLT GPF",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_GPRS_LLC",
      "description": {
        "fct-descr": "\u003cp\u003eGPRS LLC\n\u003c/p\u003e",
        "fct-module": "Network.Pcap.Base",
        "fct-package": "pcap",
        "fct-signature": "DLT_GPRS_LLC",
        "fct-source": "src/Network-Pcap-Base.html#Link",
        "fct-type": "function",
        "title": "DLT_GPRS_LLC"
      },
      "index": {
        "description": "GPRS LLC",
        "hierarchy": "Network Pcap Base",
        "module": "Network.Pcap.Base",
        "name": "DLT_GPRS_LLC",
        "normalized": "",
        "package": "pcap",
        "partial": "DLT GPRS LLC",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_HHDLC",
      "description": {
        "fct-descr": "\u003cp\u003eSiemens HiPath HDLC\n\u003c/p\u003e",
        "fct-module": "Network.Pcap.Base",
        "fct-package": "pcap",
        "fct-signature": "DLT_HHDLC",
        "fct-source": "src/Network-Pcap-Base.html#Link",
        "fct-type": "function",
        "title": "DLT_HHDLC"
      },
      "index": {
        "description": "Siemens HiPath HDLC",
        "hierarchy": "Network Pcap Base",
        "module": "Network.Pcap.Base",
        "name": "DLT_HHDLC",
        "normalized": "",
        "package": "pcap",
        "partial": "DLT HHDLC",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_IEEE802",
      "description": {
        "fct-descr": "\u003cp\u003eIEEE 802 networks\n\u003c/p\u003e",
        "fct-module": "Network.Pcap.Base",
        "fct-package": "pcap",
        "fct-signature": "DLT_IEEE802",
        "fct-source": "src/Network-Pcap-Base.html#Link",
        "fct-type": "function",
        "title": "DLT_IEEE802"
      },
      "index": {
        "description": "IEEE networks",
        "hierarchy": "Network Pcap Base",
        "module": "Network.Pcap.Base",
        "name": "DLT_IEEE802",
        "normalized": "",
        "package": "pcap",
        "partial": "DLT IEEE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_IEEE802_11",
      "description": {
        "fct-descr": "\u003cp\u003eIEEE 802.11 wireless\n\u003c/p\u003e",
        "fct-module": "Network.Pcap.Base",
        "fct-package": "pcap",
        "fct-signature": "DLT_IEEE802_11",
        "fct-source": "src/Network-Pcap-Base.html#Link",
        "fct-type": "function",
        "title": "DLT_IEEE802_11"
      },
      "index": {
        "description": "IEEE wireless",
        "hierarchy": "Network Pcap Base",
        "module": "Network.Pcap.Base",
        "name": "DLT_IEEE802_11",
        "normalized": "",
        "package": "pcap",
        "partial": "DLT IEEE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_IEEE802_11_RADIO",
      "description": {
        "fct-descr": "\u003col\u003e\u003cli\u003e11 plus a number of bits of link-layer information\n\u003c/li\u003e\u003c/ol\u003e",
        "fct-module": "Network.Pcap.Base",
        "fct-package": "pcap",
        "fct-signature": "DLT_IEEE802_11_RADIO",
        "fct-source": "src/Network-Pcap-Base.html#Link",
        "fct-type": "function",
        "title": "DLT_IEEE802_11_RADIO"
      },
      "index": {
        "description": "plus number of bits of link-layer information",
        "hierarchy": "Network Pcap Base",
        "module": "Network.Pcap.Base",
        "name": "DLT_IEEE802_11_RADIO",
        "normalized": "",
        "package": "pcap",
        "partial": "DLT IEEE RADIO",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_IEEE802_15_4",
      "description": {
        "fct-descr": "\u003cp\u003eIEEE 802.15.4, exactly as in the spec\n\u003c/p\u003e",
        "fct-module": "Network.Pcap.Base",
        "fct-package": "pcap",
        "fct-signature": "DLT_IEEE802_15_4",
        "fct-source": "src/Network-Pcap-Base.html#Link",
        "fct-type": "function",
        "title": "DLT_IEEE802_15_4"
      },
      "index": {
        "description": "IEEE exactly as in the spec",
        "hierarchy": "Network Pcap Base",
        "module": "Network.Pcap.Base",
        "name": "DLT_IEEE802_15_4",
        "normalized": "",
        "package": "pcap",
        "partial": "DLT IEEE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_IEEE802_15_4_LINUX",
      "description": {
        "fct-descr": "\u003cp\u003eIEEE 802.15.4, with address fields padded\n\u003c/p\u003e",
        "fct-module": "Network.Pcap.Base",
        "fct-package": "pcap",
        "fct-signature": "DLT_IEEE802_15_4_LINUX",
        "fct-source": "src/Network-Pcap-Base.html#Link",
        "fct-type": "function",
        "title": "DLT_IEEE802_15_4_LINUX"
      },
      "index": {
        "description": "IEEE with address fields padded",
        "hierarchy": "Network Pcap Base",
        "module": "Network.Pcap.Base",
        "name": "DLT_IEEE802_15_4_LINUX",
        "normalized": "",
        "package": "pcap",
        "partial": "DLT IEEE LINUX",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_IEEE802_16_MAC_CPS",
      "description": {
        "fct-descr": "\u003cp\u003eIEEE 802.16 MAC Common Part Sublayer\n\u003c/p\u003e",
        "fct-module": "Network.Pcap.Base",
        "fct-package": "pcap",
        "fct-signature": "DLT_IEEE802_16_MAC_CPS",
        "fct-source": "src/Network-Pcap-Base.html#Link",
        "fct-type": "function",
        "title": "DLT_IEEE802_16_MAC_CPS"
      },
      "index": {
        "description": "IEEE MAC Common Part Sublayer",
        "hierarchy": "Network Pcap Base",
        "module": "Network.Pcap.Base",
        "name": "DLT_IEEE802_16_MAC_CPS",
        "normalized": "",
        "package": "pcap",
        "partial": "DLT IEEE MAC CPS",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_IEEE802_16_MAC_CPS_RADIO",
      "description": {
        "fct-descr": "\u003col\u003e\u003cli\u003e16 MAC Common Part Sublayer with radiotap radio header\n\u003c/li\u003e\u003c/ol\u003e",
        "fct-module": "Network.Pcap.Base",
        "fct-package": "pcap",
        "fct-signature": "DLT_IEEE802_16_MAC_CPS_RADIO",
        "fct-source": "src/Network-Pcap-Base.html#Link",
        "fct-type": "function",
        "title": "DLT_IEEE802_16_MAC_CPS_RADIO"
      },
      "index": {
        "description": "MAC Common Part Sublayer with radiotap radio header",
        "hierarchy": "Network Pcap Base",
        "module": "Network.Pcap.Base",
        "name": "DLT_IEEE802_16_MAC_CPS_RADIO",
        "normalized": "",
        "package": "pcap",
        "partial": "DLT IEEE MAC CPS RADIO",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_IPFILTER",
      "description": {
        "fct-descr": "\u003cp\u003eOpenBSD's old ipfilter\n\u003c/p\u003e",
        "fct-module": "Network.Pcap.Base",
        "fct-package": "pcap",
        "fct-signature": "DLT_IPFILTER",
        "fct-source": "src/Network-Pcap-Base.html#Link",
        "fct-type": "function",
        "title": "DLT_IPFILTER"
      },
      "index": {
        "description": "OpenBSD old ipfilter",
        "hierarchy": "Network Pcap Base",
        "module": "Network.Pcap.Base",
        "name": "DLT_IPFILTER",
        "normalized": "",
        "package": "pcap",
        "partial": "DLT IPFILTER",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_IP_OVER_FC",
      "description": {
        "fct-descr": "\u003cp\u003eRFC 2625 IP-over-Fibre Channel\n\u003c/p\u003e",
        "fct-module": "Network.Pcap.Base",
        "fct-package": "pcap",
        "fct-signature": "DLT_IP_OVER_FC",
        "fct-source": "src/Network-Pcap-Base.html#Link",
        "fct-type": "function",
        "title": "DLT_IP_OVER_FC"
      },
      "index": {
        "description": "RFC IP-over-Fibre Channel",
        "hierarchy": "Network Pcap Base",
        "module": "Network.Pcap.Base",
        "name": "DLT_IP_OVER_FC",
        "normalized": "",
        "package": "pcap",
        "partial": "DLT IP OVER FC",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_LINUX_IRDA",
      "description": {
        "fct-descr": "\u003cp\u003eLinux IrDA packet\n\u003c/p\u003e",
        "fct-module": "Network.Pcap.Base",
        "fct-package": "pcap",
        "fct-signature": "DLT_LINUX_IRDA",
        "fct-source": "src/Network-Pcap-Base.html#Link",
        "fct-type": "function",
        "title": "DLT_LINUX_IRDA"
      },
      "index": {
        "description": "Linux IrDA packet",
        "hierarchy": "Network Pcap Base",
        "module": "Network.Pcap.Base",
        "name": "DLT_LINUX_IRDA",
        "normalized": "",
        "package": "pcap",
        "partial": "DLT LINUX IRDA",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_LINUX_LAPD",
      "description": {
        "fct-descr": "\u003cp\u003eRaw LAPD for vISDN (\u003cem\u003enot\u003c/em\u003e generic LAPD)\n\u003c/p\u003e",
        "fct-module": "Network.Pcap.Base",
        "fct-package": "pcap",
        "fct-signature": "DLT_LINUX_LAPD",
        "fct-source": "src/Network-Pcap-Base.html#Link",
        "fct-type": "function",
        "title": "DLT_LINUX_LAPD"
      },
      "index": {
        "description": "Raw LAPD for vISDN not generic LAPD",
        "hierarchy": "Network Pcap Base",
        "module": "Network.Pcap.Base",
        "name": "DLT_LINUX_LAPD",
        "normalized": "",
        "package": "pcap",
        "partial": "DLT LINUX LAPD",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_LINUX_SLL",
      "description": {
        "fct-descr": "\u003cp\u003eLinux cooked sockets\n\u003c/p\u003e",
        "fct-module": "Network.Pcap.Base",
        "fct-package": "pcap",
        "fct-signature": "DLT_LINUX_SLL",
        "fct-source": "src/Network-Pcap-Base.html#Link",
        "fct-type": "function",
        "title": "DLT_LINUX_SLL"
      },
      "index": {
        "description": "Linux cooked sockets",
        "hierarchy": "Network Pcap Base",
        "module": "Network.Pcap.Base",
        "name": "DLT_LINUX_SLL",
        "normalized": "",
        "package": "pcap",
        "partial": "DLT LINUX SLL",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_LOOP",
      "description": {
        "fct-descr": "\u003cp\u003eOpenBSD loopback device\n\u003c/p\u003e",
        "fct-module": "Network.Pcap.Base",
        "fct-package": "pcap",
        "fct-signature": "DLT_LOOP",
        "fct-source": "src/Network-Pcap-Base.html#Link",
        "fct-type": "function",
        "title": "DLT_LOOP"
      },
      "index": {
        "description": "OpenBSD loopback device",
        "hierarchy": "Network Pcap Base",
        "module": "Network.Pcap.Base",
        "name": "DLT_LOOP",
        "normalized": "",
        "package": "pcap",
        "partial": "DLT LOOP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_LTALK",
      "description": {
        "fct-descr": "\u003cp\u003eApple LocalTalk\n\u003c/p\u003e",
        "fct-module": "Network.Pcap.Base",
        "fct-package": "pcap",
        "fct-signature": "DLT_LTALK",
        "fct-source": "src/Network-Pcap-Base.html#Link",
        "fct-type": "function",
        "title": "DLT_LTALK"
      },
      "index": {
        "description": "Apple LocalTalk",
        "hierarchy": "Network Pcap Base",
        "module": "Network.Pcap.Base",
        "name": "DLT_LTALK",
        "normalized": "",
        "package": "pcap",
        "partial": "DLT LTALK",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_MFR",
      "description": {
        "fct-descr": "\u003cp\u003eMulti Link Frame Relay (FRF.16)\n\u003c/p\u003e",
        "fct-module": "Network.Pcap.Base",
        "fct-package": "pcap",
        "fct-signature": "DLT_MFR",
        "fct-source": "src/Network-Pcap-Base.html#Link",
        "fct-type": "function",
        "title": "DLT_MFR"
      },
      "index": {
        "description": "Multi Link Frame Relay FRF.16",
        "hierarchy": "Network Pcap Base",
        "module": "Network.Pcap.Base",
        "name": "DLT_MFR",
        "normalized": "",
        "package": "pcap",
        "partial": "DLT MFR",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_MTP2",
      "description": {
        "fct-descr": "\u003cp\u003eSS7, C7 Message Transfer Part 2 (MPT2)\n\u003c/p\u003e",
        "fct-module": "Network.Pcap.Base",
        "fct-package": "pcap",
        "fct-signature": "DLT_MTP2",
        "fct-source": "src/Network-Pcap-Base.html#Link",
        "fct-type": "function",
        "title": "DLT_MTP2"
      },
      "index": {
        "description": "SS7 C7 Message Transfer Part MPT2",
        "hierarchy": "Network Pcap Base",
        "module": "Network.Pcap.Base",
        "name": "DLT_MTP2",
        "normalized": "",
        "package": "pcap",
        "partial": "DLT MTP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_MTP2_WITH_PHDR",
      "description": {
        "fct-descr": "\u003cp\u003eSS7, C7 MTP2 with pseudo-header\n\u003c/p\u003e",
        "fct-module": "Network.Pcap.Base",
        "fct-package": "pcap",
        "fct-signature": "DLT_MTP2_WITH_PHDR",
        "fct-source": "src/Network-Pcap-Base.html#Link",
        "fct-type": "function",
        "title": "DLT_MTP2_WITH_PHDR"
      },
      "index": {
        "description": "SS7 C7 MTP2 with pseudo-header",
        "hierarchy": "Network Pcap Base",
        "module": "Network.Pcap.Base",
        "name": "DLT_MTP2_WITH_PHDR",
        "normalized": "",
        "package": "pcap",
        "partial": "DLT MTP WITH PHDR",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_MTP3",
      "description": {
        "fct-descr": "\u003cp\u003eSS7, C7 Message Transfer Part 3 (MPT3)\n\u003c/p\u003e",
        "fct-module": "Network.Pcap.Base",
        "fct-package": "pcap",
        "fct-signature": "DLT_MTP3",
        "fct-source": "src/Network-Pcap-Base.html#Link",
        "fct-type": "function",
        "title": "DLT_MTP3"
      },
      "index": {
        "description": "SS7 C7 Message Transfer Part MPT3",
        "hierarchy": "Network Pcap Base",
        "module": "Network.Pcap.Base",
        "name": "DLT_MTP3",
        "normalized": "",
        "package": "pcap",
        "partial": "DLT MTP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_NULL",
      "description": {
        "fct-descr": "\u003cp\u003eno link layer encapsulation\n\u003c/p\u003e",
        "fct-module": "Network.Pcap.Base",
        "fct-package": "pcap",
        "fct-signature": "DLT_NULL",
        "fct-source": "src/Network-Pcap-Base.html#Link",
        "fct-type": "function",
        "title": "DLT_NULL"
      },
      "index": {
        "description": "no link layer encapsulation",
        "hierarchy": "Network Pcap Base",
        "module": "Network.Pcap.Base",
        "name": "DLT_NULL",
        "normalized": "",
        "package": "pcap",
        "partial": "DLT NULL",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_PFLOG",
      "description": {
        "fct-descr": "\u003cp\u003eOpenBSD's pflog\n\u003c/p\u003e",
        "fct-module": "Network.Pcap.Base",
        "fct-package": "pcap",
        "fct-signature": "DLT_PFLOG",
        "fct-source": "src/Network-Pcap-Base.html#Link",
        "fct-type": "function",
        "title": "DLT_PFLOG"
      },
      "index": {
        "description": "OpenBSD pflog",
        "hierarchy": "Network Pcap Base",
        "module": "Network.Pcap.Base",
        "name": "DLT_PFLOG",
        "normalized": "",
        "package": "pcap",
        "partial": "DLT PFLOG",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_PFSYNC",
      "description": {
        "fct-module": "Network.Pcap.Base",
        "fct-package": "pcap",
        "fct-signature": "DLT_PFSYNC",
        "fct-source": "src/Network-Pcap-Base.html#Link",
        "fct-type": "function",
        "title": "DLT_PFSYNC"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Pcap Base",
        "module": "Network.Pcap.Base",
        "name": "DLT_PFSYNC",
        "normalized": "",
        "package": "pcap",
        "partial": "DLT PFSYNC",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_PPI",
      "description": {
        "fct-descr": "\u003cp\u003ePer Packet Information encapsulated packets\n\u003c/p\u003e",
        "fct-module": "Network.Pcap.Base",
        "fct-package": "pcap",
        "fct-signature": "DLT_PPI",
        "fct-source": "src/Network-Pcap-Base.html#Link",
        "fct-type": "function",
        "title": "DLT_PPI"
      },
      "index": {
        "description": "Per Packet Information encapsulated packets",
        "hierarchy": "Network Pcap Base",
        "module": "Network.Pcap.Base",
        "name": "DLT_PPI",
        "normalized": "",
        "package": "pcap",
        "partial": "DLT PPI",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_PPP",
      "description": {
        "fct-descr": "\u003cp\u003ePoint-to-point protocol\n\u003c/p\u003e",
        "fct-module": "Network.Pcap.Base",
        "fct-package": "pcap",
        "fct-signature": "DLT_PPP",
        "fct-source": "src/Network-Pcap-Base.html#Link",
        "fct-type": "function",
        "title": "DLT_PPP"
      },
      "index": {
        "description": "Point-to-point protocol",
        "hierarchy": "Network Pcap Base",
        "module": "Network.Pcap.Base",
        "name": "DLT_PPP",
        "normalized": "",
        "package": "pcap",
        "partial": "DLT PPP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_PPP_BSDOS",
      "description": {
        "fct-descr": "\u003cp\u003eBSD OS point-to-point protocol\n\u003c/p\u003e",
        "fct-module": "Network.Pcap.Base",
        "fct-package": "pcap",
        "fct-signature": "DLT_PPP_BSDOS",
        "fct-source": "src/Network-Pcap-Base.html#Link",
        "fct-type": "function",
        "title": "DLT_PPP_BSDOS"
      },
      "index": {
        "description": "BSD OS point-to-point protocol",
        "hierarchy": "Network Pcap Base",
        "module": "Network.Pcap.Base",
        "name": "DLT_PPP_BSDOS",
        "normalized": "",
        "package": "pcap",
        "partial": "DLT PPP BSDOS",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_PPP_ETHER",
      "description": {
        "fct-descr": "\u003cp\u003ePPP over ethernet\n\u003c/p\u003e",
        "fct-module": "Network.Pcap.Base",
        "fct-package": "pcap",
        "fct-signature": "DLT_PPP_ETHER",
        "fct-source": "src/Network-Pcap-Base.html#Link",
        "fct-type": "function",
        "title": "DLT_PPP_ETHER"
      },
      "index": {
        "description": "PPP over ethernet",
        "hierarchy": "Network Pcap Base",
        "module": "Network.Pcap.Base",
        "name": "DLT_PPP_ETHER",
        "normalized": "",
        "package": "pcap",
        "partial": "DLT PPP ETHER",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_PPP_PPPD",
      "description": {
        "fct-descr": "\u003cp\u003eOutgoing packets for ppp daemon\n\u003c/p\u003e",
        "fct-module": "Network.Pcap.Base",
        "fct-package": "pcap",
        "fct-signature": "DLT_PPP_PPPD",
        "fct-source": "src/Network-Pcap-Base.html#Link",
        "fct-type": "function",
        "title": "DLT_PPP_PPPD"
      },
      "index": {
        "description": "Outgoing packets for ppp daemon",
        "hierarchy": "Network Pcap Base",
        "module": "Network.Pcap.Base",
        "name": "DLT_PPP_PPPD",
        "normalized": "",
        "package": "pcap",
        "partial": "DLT PPP PPPD",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_PPP_SERIAL",
      "description": {
        "fct-descr": "\u003cp\u003ePPP over serial with HDLC encapsulation\n\u003c/p\u003e",
        "fct-module": "Network.Pcap.Base",
        "fct-package": "pcap",
        "fct-signature": "DLT_PPP_SERIAL",
        "fct-source": "src/Network-Pcap-Base.html#Link",
        "fct-type": "function",
        "title": "DLT_PPP_SERIAL"
      },
      "index": {
        "description": "PPP over serial with HDLC encapsulation",
        "hierarchy": "Network Pcap Base",
        "module": "Network.Pcap.Base",
        "name": "DLT_PPP_SERIAL",
        "normalized": "",
        "package": "pcap",
        "partial": "DLT PPP SERIAL",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_PRISM_HEADER",
      "description": {
        "fct-descr": "\u003cp\u003eIntersil Prism II wireless chips\n\u003c/p\u003e",
        "fct-module": "Network.Pcap.Base",
        "fct-package": "pcap",
        "fct-signature": "DLT_PRISM_HEADER",
        "fct-source": "src/Network-Pcap-Base.html#Link",
        "fct-type": "function",
        "title": "DLT_PRISM_HEADER"
      },
      "index": {
        "description": "Intersil Prism II wireless chips",
        "hierarchy": "Network Pcap Base",
        "module": "Network.Pcap.Base",
        "name": "DLT_PRISM_HEADER",
        "normalized": "",
        "package": "pcap",
        "partial": "DLT PRISM HEADER",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_PRONET",
      "description": {
        "fct-descr": "\u003cp\u003eProteon ProNET Token Ring\n\u003c/p\u003e",
        "fct-module": "Network.Pcap.Base",
        "fct-package": "pcap",
        "fct-signature": "DLT_PRONET",
        "fct-source": "src/Network-Pcap-Base.html#Link",
        "fct-type": "function",
        "title": "DLT_PRONET"
      },
      "index": {
        "description": "Proteon ProNET Token Ring",
        "hierarchy": "Network Pcap Base",
        "module": "Network.Pcap.Base",
        "name": "DLT_PRONET",
        "normalized": "",
        "package": "pcap",
        "partial": "DLT PRONET",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_RAW",
      "description": {
        "fct-descr": "\u003cp\u003eraw IP\n\u003c/p\u003e",
        "fct-module": "Network.Pcap.Base",
        "fct-package": "pcap",
        "fct-signature": "DLT_RAW",
        "fct-source": "src/Network-Pcap-Base.html#Link",
        "fct-type": "function",
        "title": "DLT_RAW"
      },
      "index": {
        "description": "raw IP",
        "hierarchy": "Network Pcap Base",
        "module": "Network.Pcap.Base",
        "name": "DLT_RAW",
        "normalized": "",
        "package": "pcap",
        "partial": "DLT RAW",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_REDBACK_SMARTEDGE",
      "description": {
        "fct-descr": "\u003cp\u003eRedback SmartEdge 400/800\n\u003c/p\u003e",
        "fct-module": "Network.Pcap.Base",
        "fct-package": "pcap",
        "fct-signature": "DLT_REDBACK_SMARTEDGE",
        "fct-source": "src/Network-Pcap-Base.html#Link",
        "fct-type": "function",
        "title": "DLT_REDBACK_SMARTEDGE"
      },
      "index": {
        "description": "Redback SmartEdge",
        "hierarchy": "Network Pcap Base",
        "module": "Network.Pcap.Base",
        "name": "DLT_REDBACK_SMARTEDGE",
        "normalized": "",
        "package": "pcap",
        "partial": "DLT REDBACK SMARTEDGE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_SCCP",
      "description": {
        "fct-descr": "\u003cp\u003eSS7, C7 SCCP\n\u003c/p\u003e",
        "fct-module": "Network.Pcap.Base",
        "fct-package": "pcap",
        "fct-signature": "DLT_SCCP",
        "fct-source": "src/Network-Pcap-Base.html#Link",
        "fct-type": "function",
        "title": "DLT_SCCP"
      },
      "index": {
        "description": "SS7 C7 SCCP",
        "hierarchy": "Network Pcap Base",
        "module": "Network.Pcap.Base",
        "name": "DLT_SCCP",
        "normalized": "",
        "package": "pcap",
        "partial": "DLT SCCP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_SLIP",
      "description": {
        "fct-descr": "\u003cp\u003eSerial line IP\n\u003c/p\u003e",
        "fct-module": "Network.Pcap.Base",
        "fct-package": "pcap",
        "fct-signature": "DLT_SLIP",
        "fct-source": "src/Network-Pcap-Base.html#Link",
        "fct-type": "function",
        "title": "DLT_SLIP"
      },
      "index": {
        "description": "Serial line IP",
        "hierarchy": "Network Pcap Base",
        "module": "Network.Pcap.Base",
        "name": "DLT_SLIP",
        "normalized": "",
        "package": "pcap",
        "partial": "DLT SLIP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_SLIP_BSDOS",
      "description": {
        "fct-descr": "\u003cp\u003eBSD OS serial line IP\n\u003c/p\u003e",
        "fct-module": "Network.Pcap.Base",
        "fct-package": "pcap",
        "fct-signature": "DLT_SLIP_BSDOS",
        "fct-source": "src/Network-Pcap-Base.html#Link",
        "fct-type": "function",
        "title": "DLT_SLIP_BSDOS"
      },
      "index": {
        "description": "BSD OS serial line IP",
        "hierarchy": "Network Pcap Base",
        "module": "Network.Pcap.Base",
        "name": "DLT_SLIP_BSDOS",
        "normalized": "",
        "package": "pcap",
        "partial": "DLT SLIP BSDOS",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_SUNATM",
      "description": {
        "fct-descr": "\u003cp\u003eFull Frontal ATM on Solaris with SunATM\n\u003c/p\u003e",
        "fct-module": "Network.Pcap.Base",
        "fct-package": "pcap",
        "fct-signature": "DLT_SUNATM",
        "fct-source": "src/Network-Pcap-Base.html#Link",
        "fct-type": "function",
        "title": "DLT_SUNATM"
      },
      "index": {
        "description": "Full Frontal ATM on Solaris with SunATM",
        "hierarchy": "Network Pcap Base",
        "module": "Network.Pcap.Base",
        "name": "DLT_SUNATM",
        "normalized": "",
        "package": "pcap",
        "partial": "DLT SUNATM",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_SYMANTEC_FIREWALL",
      "description": {
        "fct-descr": "\u003cp\u003eSymantec Enterprise Firewall\n\u003c/p\u003e",
        "fct-module": "Network.Pcap.Base",
        "fct-package": "pcap",
        "fct-signature": "DLT_SYMANTEC_FIREWALL",
        "fct-source": "src/Network-Pcap-Base.html#Link",
        "fct-type": "function",
        "title": "DLT_SYMANTEC_FIREWALL"
      },
      "index": {
        "description": "Symantec Enterprise Firewall",
        "hierarchy": "Network Pcap Base",
        "module": "Network.Pcap.Base",
        "name": "DLT_SYMANTEC_FIREWALL",
        "normalized": "",
        "package": "pcap",
        "partial": "DLT SYMANTEC FIREWALL",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_UNKNOWN",
      "description": {
        "fct-descr": "\u003cp\u003eunknown encapsulation\n\u003c/p\u003e",
        "fct-module": "Network.Pcap.Base",
        "fct-package": "pcap",
        "fct-signature": "DLT_UNKNOWN Int",
        "fct-source": "src/Network-Pcap-Base.html#Link",
        "fct-type": "function",
        "title": "DLT_UNKNOWN"
      },
      "index": {
        "description": "unknown encapsulation",
        "hierarchy": "Network Pcap Base",
        "module": "Network.Pcap.Base",
        "name": "DLT_UNKNOWN",
        "normalized": "",
        "package": "pcap",
        "partial": "DLT UNKNOWN",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_USB",
      "description": {
        "fct-descr": "\u003cp\u003eUSB packet\n\u003c/p\u003e",
        "fct-module": "Network.Pcap.Base",
        "fct-package": "pcap",
        "fct-signature": "DLT_USB",
        "fct-source": "src/Network-Pcap-Base.html#Link",
        "fct-type": "function",
        "title": "DLT_USB"
      },
      "index": {
        "description": "USB packet",
        "hierarchy": "Network Pcap Base",
        "module": "Network.Pcap.Base",
        "name": "DLT_USB",
        "normalized": "",
        "package": "pcap",
        "partial": "DLT USB",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_USB_LINUX",
      "description": {
        "fct-descr": "\u003cp\u003eUSB packets, beginning with a Linux USB header\n\u003c/p\u003e",
        "fct-module": "Network.Pcap.Base",
        "fct-package": "pcap",
        "fct-signature": "DLT_USB_LINUX",
        "fct-source": "src/Network-Pcap-Base.html#Link",
        "fct-type": "function",
        "title": "DLT_USB_LINUX"
      },
      "index": {
        "description": "USB packets beginning with Linux USB header",
        "hierarchy": "Network Pcap Base",
        "module": "Network.Pcap.Base",
        "name": "DLT_USB_LINUX",
        "normalized": "",
        "package": "pcap",
        "partial": "DLT USB LINUX",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_USER0",
      "description": {
        "fct-descr": "\u003cp\u003eReserved for private use\n\u003c/p\u003e",
        "fct-module": "Network.Pcap.Base",
        "fct-package": "pcap",
        "fct-signature": "DLT_USER0",
        "fct-source": "src/Network-Pcap-Base.html#Link",
        "fct-type": "function",
        "title": "DLT_USER0"
      },
      "index": {
        "description": "Reserved for private use",
        "hierarchy": "Network Pcap Base",
        "module": "Network.Pcap.Base",
        "name": "DLT_USER0",
        "normalized": "",
        "package": "pcap",
        "partial": "DLT USER",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_USER1",
      "description": {
        "fct-descr": "\u003cp\u003eReserved for private use\n\u003c/p\u003e",
        "fct-module": "Network.Pcap.Base",
        "fct-package": "pcap",
        "fct-signature": "DLT_USER1",
        "fct-source": "src/Network-Pcap-Base.html#Link",
        "fct-type": "function",
        "title": "DLT_USER1"
      },
      "index": {
        "description": "Reserved for private use",
        "hierarchy": "Network Pcap Base",
        "module": "Network.Pcap.Base",
        "name": "DLT_USER1",
        "normalized": "",
        "package": "pcap",
        "partial": "DLT USER",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_USER10",
      "description": {
        "fct-descr": "\u003cp\u003eReserved for private use\n\u003c/p\u003e",
        "fct-module": "Network.Pcap.Base",
        "fct-package": "pcap",
        "fct-signature": "DLT_USER10",
        "fct-source": "src/Network-Pcap-Base.html#Link",
        "fct-type": "function",
        "title": "DLT_USER10"
      },
      "index": {
        "description": "Reserved for private use",
        "hierarchy": "Network Pcap Base",
        "module": "Network.Pcap.Base",
        "name": "DLT_USER10",
        "normalized": "",
        "package": "pcap",
        "partial": "DLT USER",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_USER11",
      "description": {
        "fct-descr": "\u003cp\u003eReserved for private use\n\u003c/p\u003e",
        "fct-module": "Network.Pcap.Base",
        "fct-package": "pcap",
        "fct-signature": "DLT_USER11",
        "fct-source": "src/Network-Pcap-Base.html#Link",
        "fct-type": "function",
        "title": "DLT_USER11"
      },
      "index": {
        "description": "Reserved for private use",
        "hierarchy": "Network Pcap Base",
        "module": "Network.Pcap.Base",
        "name": "DLT_USER11",
        "normalized": "",
        "package": "pcap",
        "partial": "DLT USER",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_USER12",
      "description": {
        "fct-descr": "\u003cp\u003eReserved for private use\n\u003c/p\u003e",
        "fct-module": "Network.Pcap.Base",
        "fct-package": "pcap",
        "fct-signature": "DLT_USER12",
        "fct-source": "src/Network-Pcap-Base.html#Link",
        "fct-type": "function",
        "title": "DLT_USER12"
      },
      "index": {
        "description": "Reserved for private use",
        "hierarchy": "Network Pcap Base",
        "module": "Network.Pcap.Base",
        "name": "DLT_USER12",
        "normalized": "",
        "package": "pcap",
        "partial": "DLT USER",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_USER13",
      "description": {
        "fct-descr": "\u003cp\u003eReserved for private use\n\u003c/p\u003e",
        "fct-module": "Network.Pcap.Base",
        "fct-package": "pcap",
        "fct-signature": "DLT_USER13",
        "fct-source": "src/Network-Pcap-Base.html#Link",
        "fct-type": "function",
        "title": "DLT_USER13"
      },
      "index": {
        "description": "Reserved for private use",
        "hierarchy": "Network Pcap Base",
        "module": "Network.Pcap.Base",
        "name": "DLT_USER13",
        "normalized": "",
        "package": "pcap",
        "partial": "DLT USER",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_USER14",
      "description": {
        "fct-descr": "\u003cp\u003eReserved for private use\n\u003c/p\u003e",
        "fct-module": "Network.Pcap.Base",
        "fct-package": "pcap",
        "fct-signature": "DLT_USER14",
        "fct-source": "src/Network-Pcap-Base.html#Link",
        "fct-type": "function",
        "title": "DLT_USER14"
      },
      "index": {
        "description": "Reserved for private use",
        "hierarchy": "Network Pcap Base",
        "module": "Network.Pcap.Base",
        "name": "DLT_USER14",
        "normalized": "",
        "package": "pcap",
        "partial": "DLT USER",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_USER15",
      "description": {
        "fct-descr": "\u003cp\u003eReserved for private use\n\u003c/p\u003e",
        "fct-module": "Network.Pcap.Base",
        "fct-package": "pcap",
        "fct-signature": "DLT_USER15",
        "fct-source": "src/Network-Pcap-Base.html#Link",
        "fct-type": "function",
        "title": "DLT_USER15"
      },
      "index": {
        "description": "Reserved for private use",
        "hierarchy": "Network Pcap Base",
        "module": "Network.Pcap.Base",
        "name": "DLT_USER15",
        "normalized": "",
        "package": "pcap",
        "partial": "DLT USER",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_USER2",
      "description": {
        "fct-descr": "\u003cp\u003eReserved for private use\n\u003c/p\u003e",
        "fct-module": "Network.Pcap.Base",
        "fct-package": "pcap",
        "fct-signature": "DLT_USER2",
        "fct-source": "src/Network-Pcap-Base.html#Link",
        "fct-type": "function",
        "title": "DLT_USER2"
      },
      "index": {
        "description": "Reserved for private use",
        "hierarchy": "Network Pcap Base",
        "module": "Network.Pcap.Base",
        "name": "DLT_USER2",
        "normalized": "",
        "package": "pcap",
        "partial": "DLT USER",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_USER3",
      "description": {
        "fct-descr": "\u003cp\u003eReserved for private use\n\u003c/p\u003e",
        "fct-module": "Network.Pcap.Base",
        "fct-package": "pcap",
        "fct-signature": "DLT_USER3",
        "fct-source": "src/Network-Pcap-Base.html#Link",
        "fct-type": "function",
        "title": "DLT_USER3"
      },
      "index": {
        "description": "Reserved for private use",
        "hierarchy": "Network Pcap Base",
        "module": "Network.Pcap.Base",
        "name": "DLT_USER3",
        "normalized": "",
        "package": "pcap",
        "partial": "DLT USER",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_USER4",
      "description": {
        "fct-descr": "\u003cp\u003eReserved for private use\n\u003c/p\u003e",
        "fct-module": "Network.Pcap.Base",
        "fct-package": "pcap",
        "fct-signature": "DLT_USER4",
        "fct-source": "src/Network-Pcap-Base.html#Link",
        "fct-type": "function",
        "title": "DLT_USER4"
      },
      "index": {
        "description": "Reserved for private use",
        "hierarchy": "Network Pcap Base",
        "module": "Network.Pcap.Base",
        "name": "DLT_USER4",
        "normalized": "",
        "package": "pcap",
        "partial": "DLT USER",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_USER5",
      "description": {
        "fct-descr": "\u003cp\u003eReserved for private use\n\u003c/p\u003e",
        "fct-module": "Network.Pcap.Base",
        "fct-package": "pcap",
        "fct-signature": "DLT_USER5",
        "fct-source": "src/Network-Pcap-Base.html#Link",
        "fct-type": "function",
        "title": "DLT_USER5"
      },
      "index": {
        "description": "Reserved for private use",
        "hierarchy": "Network Pcap Base",
        "module": "Network.Pcap.Base",
        "name": "DLT_USER5",
        "normalized": "",
        "package": "pcap",
        "partial": "DLT USER",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_USER6",
      "description": {
        "fct-descr": "\u003cp\u003eReserved for private use\n\u003c/p\u003e",
        "fct-module": "Network.Pcap.Base",
        "fct-package": "pcap",
        "fct-signature": "DLT_USER6",
        "fct-source": "src/Network-Pcap-Base.html#Link",
        "fct-type": "function",
        "title": "DLT_USER6"
      },
      "index": {
        "description": "Reserved for private use",
        "hierarchy": "Network Pcap Base",
        "module": "Network.Pcap.Base",
        "name": "DLT_USER6",
        "normalized": "",
        "package": "pcap",
        "partial": "DLT USER",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_USER7",
      "description": {
        "fct-descr": "\u003cp\u003eReserved for private use\n\u003c/p\u003e",
        "fct-module": "Network.Pcap.Base",
        "fct-package": "pcap",
        "fct-signature": "DLT_USER7",
        "fct-source": "src/Network-Pcap-Base.html#Link",
        "fct-type": "function",
        "title": "DLT_USER7"
      },
      "index": {
        "description": "Reserved for private use",
        "hierarchy": "Network Pcap Base",
        "module": "Network.Pcap.Base",
        "name": "DLT_USER7",
        "normalized": "",
        "package": "pcap",
        "partial": "DLT USER",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_USER8",
      "description": {
        "fct-descr": "\u003cp\u003eReserved for private use\n\u003c/p\u003e",
        "fct-module": "Network.Pcap.Base",
        "fct-package": "pcap",
        "fct-signature": "DLT_USER8",
        "fct-source": "src/Network-Pcap-Base.html#Link",
        "fct-type": "function",
        "title": "DLT_USER8"
      },
      "index": {
        "description": "Reserved for private use",
        "hierarchy": "Network Pcap Base",
        "module": "Network.Pcap.Base",
        "name": "DLT_USER8",
        "normalized": "",
        "package": "pcap",
        "partial": "DLT USER",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:DLT_USER9",
      "description": {
        "fct-descr": "\u003cp\u003eReserved for private use\n\u003c/p\u003e",
        "fct-module": "Network.Pcap.Base",
        "fct-package": "pcap",
        "fct-signature": "DLT_USER9",
        "fct-source": "src/Network-Pcap-Base.html#Link",
        "fct-type": "function",
        "title": "DLT_USER9"
      },
      "index": {
        "description": "Reserved for private use",
        "hierarchy": "Network Pcap Base",
        "module": "Network.Pcap.Base",
        "name": "DLT_USER9",
        "normalized": "",
        "package": "pcap",
        "partial": "DLT USER",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:In",
      "description": {
        "fct-descr": "\u003cp\u003eincoming packets\n\u003c/p\u003e",
        "fct-module": "Network.Pcap.Base",
        "fct-package": "pcap",
        "fct-signature": "In",
        "fct-source": "src/Network-Pcap-Base.html#Direction",
        "fct-type": "function",
        "title": "In"
      },
      "index": {
        "description": "incoming packets",
        "hierarchy": "Network Pcap Base",
        "module": "Network.Pcap.Base",
        "name": "In",
        "normalized": "",
        "package": "pcap",
        "partial": "In",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:InOut",
      "description": {
        "fct-descr": "\u003cp\u003eincoming and outgoing packets (the default)\n\u003c/p\u003e",
        "fct-module": "Network.Pcap.Base",
        "fct-package": "pcap",
        "fct-signature": "InOut",
        "fct-source": "src/Network-Pcap-Base.html#Direction",
        "fct-type": "function",
        "title": "InOut"
      },
      "index": {
        "description": "incoming and outgoing packets the default",
        "hierarchy": "Network Pcap Base",
        "module": "Network.Pcap.Base",
        "name": "InOut",
        "normalized": "",
        "package": "pcap",
        "partial": "In Out",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:Interface",
      "description": {
        "fct-module": "Network.Pcap.Base",
        "fct-package": "pcap",
        "fct-signature": "Interface",
        "fct-source": "src/Network-Pcap-Base.html#Interface",
        "fct-type": "function",
        "title": "Interface"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Pcap Base",
        "module": "Network.Pcap.Base",
        "name": "Interface",
        "normalized": "",
        "package": "pcap",
        "partial": "Interface",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:Network",
      "description": {
        "fct-module": "Network.Pcap.Base",
        "fct-package": "pcap",
        "fct-signature": "Network",
        "fct-source": "src/Network-Pcap-Base.html#Network",
        "fct-type": "function",
        "title": "Network"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Pcap Base",
        "module": "Network.Pcap.Base",
        "name": "Network",
        "normalized": "",
        "package": "pcap",
        "partial": "Network",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:Out",
      "description": {
        "fct-descr": "\u003cp\u003eoutgoing packets\n\u003c/p\u003e",
        "fct-module": "Network.Pcap.Base",
        "fct-package": "pcap",
        "fct-signature": "Out",
        "fct-source": "src/Network-Pcap-Base.html#Direction",
        "fct-type": "function",
        "title": "Out"
      },
      "index": {
        "description": "outgoing packets",
        "hierarchy": "Network Pcap Base",
        "module": "Network.Pcap.Base",
        "name": "Out",
        "normalized": "",
        "package": "pcap",
        "partial": "Out",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:PcapAddr",
      "description": {
        "fct-module": "Network.Pcap.Base",
        "fct-package": "pcap",
        "fct-signature": "PcapAddr",
        "fct-source": "src/Network-Pcap-Base.html#PcapAddr",
        "fct-type": "function",
        "title": "PcapAddr"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Pcap Base",
        "module": "Network.Pcap.Base",
        "name": "PcapAddr",
        "normalized": "",
        "package": "pcap",
        "partial": "Pcap Addr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:PktHdr",
      "description": {
        "fct-module": "Network.Pcap.Base",
        "fct-package": "pcap",
        "fct-signature": "PktHdr",
        "fct-source": "src/Network-Pcap-Base.html#PktHdr",
        "fct-type": "function",
        "title": "PktHdr"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Pcap Base",
        "module": "Network.Pcap.Base",
        "name": "PktHdr",
        "normalized": "",
        "package": "pcap",
        "partial": "Pkt Hdr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:SockAddr",
      "description": {
        "fct-module": "Network.Pcap.Base",
        "fct-package": "pcap",
        "fct-signature": "SockAddr",
        "fct-source": "src/Network-Pcap-Base.html#SockAddr",
        "fct-type": "function",
        "title": "SockAddr"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Pcap Base",
        "module": "Network.Pcap.Base",
        "name": "SockAddr",
        "normalized": "",
        "package": "pcap",
        "partial": "Sock Addr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:Statistics",
      "description": {
        "fct-module": "Network.Pcap.Base",
        "fct-package": "pcap",
        "fct-signature": "Statistics",
        "fct-source": "src/Network-Pcap-Base.html#Statistics",
        "fct-type": "function",
        "title": "Statistics"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Pcap Base",
        "module": "Network.Pcap.Base",
        "name": "Statistics",
        "normalized": "",
        "package": "pcap",
        "partial": "Statistics",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:addrBcast",
      "description": {
        "fct-descr": "\u003cp\u003ebroadcast address\n\u003c/p\u003e",
        "fct-module": "Network.Pcap.Base",
        "fct-package": "pcap",
        "fct-signature": "Maybe SockAddr",
        "fct-source": "src/Network-Pcap-Base.html#PcapAddr",
        "fct-type": "function",
        "title": "addrBcast"
      },
      "index": {
        "description": "broadcast address",
        "hierarchy": "Network Pcap Base",
        "module": "Network.Pcap.Base",
        "name": "addrBcast",
        "normalized": "",
        "package": "pcap",
        "partial": "Bcast",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:addrMask",
      "description": {
        "fct-descr": "\u003cp\u003enetwork mask\n\u003c/p\u003e",
        "fct-module": "Network.Pcap.Base",
        "fct-package": "pcap",
        "fct-signature": "Maybe SockAddr",
        "fct-source": "src/Network-Pcap-Base.html#PcapAddr",
        "fct-type": "function",
        "title": "addrMask"
      },
      "index": {
        "description": "network mask",
        "hierarchy": "Network Pcap Base",
        "module": "Network.Pcap.Base",
        "name": "addrMask",
        "normalized": "",
        "package": "pcap",
        "partial": "Mask",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:addrPeer",
      "description": {
        "fct-descr": "\u003cp\u003eaddress of peer, of a point-to-point link\n\u003c/p\u003e",
        "fct-module": "Network.Pcap.Base",
        "fct-package": "pcap",
        "fct-signature": "Maybe SockAddr",
        "fct-source": "src/Network-Pcap-Base.html#PcapAddr",
        "fct-type": "function",
        "title": "addrPeer"
      },
      "index": {
        "description": "address of peer of point-to-point link",
        "hierarchy": "Network Pcap Base",
        "module": "Network.Pcap.Base",
        "name": "addrPeer",
        "normalized": "",
        "package": "pcap",
        "partial": "Peer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:addrSA",
      "description": {
        "fct-descr": "\u003cp\u003einterface address\n\u003c/p\u003e",
        "fct-module": "Network.Pcap.Base",
        "fct-package": "pcap",
        "fct-signature": "SockAddr",
        "fct-source": "src/Network-Pcap-Base.html#PcapAddr",
        "fct-type": "function",
        "title": "addrSA"
      },
      "index": {
        "description": "interface address",
        "hierarchy": "Network Pcap Base",
        "module": "Network.Pcap.Base",
        "name": "addrSA",
        "normalized": "",
        "package": "pcap",
        "partial": "SA",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:compileFilter",
      "description": {
        "fct-descr": "\u003cp\u003eCompile a filter for use by another program using the Berkeley\n Packet Filter library.\n\u003c/p\u003e",
        "fct-module": "Network.Pcap.Base",
        "fct-package": "pcap",
        "fct-signature": "Int-\u003e Link-\u003e String-\u003e Bool-\u003e Word32-\u003e IO BpfProgram",
        "fct-type": "function",
        "title": "compileFilter"
      },
      "index": {
        "description": "Compile filter for use by another program using the Berkeley Packet Filter library",
        "hierarchy": "Network Pcap Base",
        "module": "Network.Pcap.Base",
        "name": "compileFilter",
        "normalized": "Int-\u003eLink-\u003eString-\u003eBool-\u003eWord-\u003eIO BpfProgram",
        "package": "pcap",
        "partial": "Filter",
        "signature": "Int-\u003eLink-\u003eString-\u003eBool-\u003eWord-\u003eIO BpfProgram"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:datalink",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the datalink type associated with the given pcap\n descriptor.\n\u003c/p\u003e",
        "fct-module": "Network.Pcap.Base",
        "fct-package": "pcap",
        "fct-signature": "Ptr PcapTag -\u003e IO Link",
        "fct-source": "src/Network-Pcap-Base.html#datalink",
        "fct-type": "function",
        "title": "datalink"
      },
      "index": {
        "description": "Returns the datalink type associated with the given pcap descriptor",
        "hierarchy": "Network Pcap Base",
        "module": "Network.Pcap.Base",
        "name": "datalink",
        "normalized": "Ptr PcapTag-\u003eIO Link",
        "package": "pcap",
        "partial": "",
        "signature": "Ptr PcapTag-\u003eIO Link"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:dispatch",
      "description": {
        "fct-descr": "\u003cp\u003eCollect and process packets. The arguments are the packet capture\n descriptor, the count and a callback function.\n\u003c/p\u003e\u003cp\u003eThe count is the maximum number of packets to process before\n returning.  A count of -1 means process all of the packets received\n in one buffer (if a live capture) or all of the packets in a dump\n file (if offline).\n\u003c/p\u003e\u003cp\u003eThe callback function is passed two arguments, a packet header\n record and a pointer to the packet data (\u003ccode\u003ePtr Word8\u003c/code\u003e). The header\n record contains the number of bytes captured, which can be used to\n marshal the data into a list or array.\n\u003c/p\u003e",
        "fct-module": "Network.Pcap.Base",
        "fct-package": "pcap",
        "fct-signature": "Ptr PcapTag-\u003e Int-\u003e Callback-\u003e IO Int",
        "fct-type": "function",
        "title": "dispatch"
      },
      "index": {
        "description": "Collect and process packets The arguments are the packet capture descriptor the count and callback function The count is the maximum number of packets to process before returning count of means process all of the packets received in one buffer if live capture or all of the packets in dump file if offline The callback function is passed two arguments packet header record and pointer to the packet data Ptr Word8 The header record contains the number of bytes captured which can be used to marshal the data into list or array",
        "hierarchy": "Network Pcap Base",
        "module": "Network.Pcap.Base",
        "name": "dispatch",
        "normalized": "Ptr PcapTag-\u003eInt-\u003eCallback-\u003eIO Int",
        "package": "pcap",
        "partial": "",
        "signature": "Ptr PcapTag-\u003eInt-\u003eCallback-\u003eIO Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:dump",
      "description": {
        "fct-descr": "\u003cp\u003eWrite the packet data given by the second and third arguments to\n a dump file opened by \u003ccode\u003e\u003ca\u003eopenDead\u003c/a\u003e\u003c/code\u003e. \u003ccode\u003e\u003ca\u003edump\u003c/a\u003e\u003c/code\u003e is designed so it can be\n easily used as a default callback function by \u003ccode\u003e\u003ca\u003edispatch\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eloop\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.Pcap.Base",
        "fct-package": "pcap",
        "fct-signature": "Ptr PcapDumpTag-\u003e Ptr PktHdr-\u003e Ptr Word8-\u003e IO ()",
        "fct-type": "function",
        "title": "dump"
      },
      "index": {
        "description": "Write the packet data given by the second and third arguments to dump file opened by openDead dump is designed so it can be easily used as default callback function by dispatch or loop",
        "hierarchy": "Network Pcap Base",
        "module": "Network.Pcap.Base",
        "name": "dump",
        "normalized": "Ptr PcapDumpTag-\u003ePtr PktHdr-\u003ePtr Word-\u003eIO()",
        "package": "pcap",
        "partial": "",
        "signature": "Ptr PcapDumpTag-\u003ePtr PktHdr-\u003ePtr Word-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:findAllDevs",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003efindAllDevs\u003c/a\u003e\u003c/code\u003e returns a list of all the network devices that can\n be opened by \u003ccode\u003e\u003ca\u003eopenLive\u003c/a\u003e\u003c/code\u003e. It returns only those devices that the\n calling process has sufficient privileges to open, so it may not\n find every device on the system.\n\u003c/p\u003e",
        "fct-module": "Network.Pcap.Base",
        "fct-package": "pcap",
        "fct-signature": "IO [Interface]",
        "fct-source": "src/Network-Pcap-Base.html#findAllDevs",
        "fct-type": "function",
        "title": "findAllDevs"
      },
      "index": {
        "description": "findAllDevs returns list of all the network devices that can be opened by openLive It returns only those devices that the calling process has sufficient privileges to open so it may not find every device on the system",
        "hierarchy": "Network Pcap Base",
        "module": "Network.Pcap.Base",
        "name": "findAllDevs",
        "normalized": "IO[Interface]",
        "package": "pcap",
        "partial": "All Devs",
        "signature": "IO[Interface]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:getNonBlock",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the blocking status of the packet capture\n descriptor. \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e indicates that the descriptor is\n non-blocking. Descriptors referring to dump files opened by\n \u003ccode\u003e\u003ca\u003eopenDump\u003c/a\u003e\u003c/code\u003e always return \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.Pcap.Base",
        "fct-package": "pcap",
        "fct-signature": "Ptr PcapTag -\u003e IO Bool",
        "fct-source": "src/Network-Pcap-Base.html#getNonBlock",
        "fct-type": "function",
        "title": "getNonBlock"
      },
      "index": {
        "description": "Return the blocking status of the packet capture descriptor True indicates that the descriptor is non-blocking Descriptors referring to dump files opened by openDump always return False",
        "hierarchy": "Network Pcap Base",
        "module": "Network.Pcap.Base",
        "name": "getNonBlock",
        "normalized": "Ptr PcapTag-\u003eIO Bool",
        "package": "pcap",
        "partial": "Non Block",
        "signature": "Ptr PcapTag-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:hdrCaptureLength",
      "description": {
        "fct-descr": "\u003cp\u003enumber of bytes present in capture\n\u003c/p\u003e",
        "fct-module": "Network.Pcap.Base",
        "fct-package": "pcap",
        "fct-signature": "!Word32",
        "fct-source": "src/Network-Pcap-Base.html#PktHdr",
        "fct-type": "function",
        "title": "hdrCaptureLength"
      },
      "index": {
        "description": "number of bytes present in capture",
        "hierarchy": "Network Pcap Base",
        "module": "Network.Pcap.Base",
        "name": "hdrCaptureLength",
        "normalized": "",
        "package": "pcap",
        "partial": "Capture Length",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:hdrSeconds",
      "description": {
        "fct-descr": "\u003cp\u003etimestamp (seconds)\n\u003c/p\u003e",
        "fct-module": "Network.Pcap.Base",
        "fct-package": "pcap",
        "fct-signature": "!Word32",
        "fct-source": "src/Network-Pcap-Base.html#PktHdr",
        "fct-type": "function",
        "title": "hdrSeconds"
      },
      "index": {
        "description": "timestamp seconds",
        "hierarchy": "Network Pcap Base",
        "module": "Network.Pcap.Base",
        "name": "hdrSeconds",
        "normalized": "",
        "package": "pcap",
        "partial": "Seconds",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:hdrUseconds",
      "description": {
        "fct-descr": "\u003cp\u003etimestamp (microseconds)\n\u003c/p\u003e",
        "fct-module": "Network.Pcap.Base",
        "fct-package": "pcap",
        "fct-signature": "!Word32",
        "fct-source": "src/Network-Pcap-Base.html#PktHdr",
        "fct-type": "function",
        "title": "hdrUseconds"
      },
      "index": {
        "description": "timestamp microseconds",
        "hierarchy": "Network Pcap Base",
        "module": "Network.Pcap.Base",
        "name": "hdrUseconds",
        "normalized": "",
        "package": "pcap",
        "partial": "Useconds",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:hdrWireLength",
      "description": {
        "fct-descr": "\u003cp\u003enumber of bytes on the wire\n\u003c/p\u003e",
        "fct-module": "Network.Pcap.Base",
        "fct-package": "pcap",
        "fct-signature": "!Word32",
        "fct-source": "src/Network-Pcap-Base.html#PktHdr",
        "fct-type": "function",
        "title": "hdrWireLength"
      },
      "index": {
        "description": "number of bytes on the wire",
        "hierarchy": "Network Pcap Base",
        "module": "Network.Pcap.Base",
        "name": "hdrWireLength",
        "normalized": "",
        "package": "pcap",
        "partial": "Wire Length",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:ifAddresses",
      "description": {
        "fct-descr": "\u003cp\u003eaddress families supported by this interface\n\u003c/p\u003e",
        "fct-module": "Network.Pcap.Base",
        "fct-package": "pcap",
        "fct-signature": "[PcapAddr]",
        "fct-source": "src/Network-Pcap-Base.html#Interface",
        "fct-type": "function",
        "title": "ifAddresses"
      },
      "index": {
        "description": "address families supported by this interface",
        "hierarchy": "Network Pcap Base",
        "module": "Network.Pcap.Base",
        "name": "ifAddresses",
        "normalized": "[PcapAddr]",
        "package": "pcap",
        "partial": "Addresses",
        "signature": "[PcapAddr]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:ifDescription",
      "description": {
        "fct-descr": "\u003cp\u003einterface description string (if any)\n\u003c/p\u003e",
        "fct-module": "Network.Pcap.Base",
        "fct-package": "pcap",
        "fct-signature": "String",
        "fct-source": "src/Network-Pcap-Base.html#Interface",
        "fct-type": "function",
        "title": "ifDescription"
      },
      "index": {
        "description": "interface description string if any",
        "hierarchy": "Network Pcap Base",
        "module": "Network.Pcap.Base",
        "name": "ifDescription",
        "normalized": "",
        "package": "pcap",
        "partial": "Description",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:ifFlags",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.Pcap.Base",
        "fct-package": "pcap",
        "fct-signature": "Word32",
        "fct-source": "src/Network-Pcap-Base.html#Interface",
        "fct-type": "function",
        "title": "ifFlags"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Pcap Base",
        "module": "Network.Pcap.Base",
        "name": "ifFlags",
        "normalized": "",
        "package": "pcap",
        "partial": "Flags",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:ifName",
      "description": {
        "fct-descr": "\u003cp\u003ethe interface name\n\u003c/p\u003e",
        "fct-module": "Network.Pcap.Base",
        "fct-package": "pcap",
        "fct-signature": "String",
        "fct-source": "src/Network-Pcap-Base.html#Interface",
        "fct-type": "function",
        "title": "ifName"
      },
      "index": {
        "description": "the interface name",
        "hierarchy": "Network Pcap Base",
        "module": "Network.Pcap.Base",
        "name": "ifName",
        "normalized": "",
        "package": "pcap",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:isSwapped",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eisSwapped\u003c/a\u003e\u003c/code\u003e returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if the current dump file uses a\n different byte order than the one native to the system.\n\u003c/p\u003e",
        "fct-module": "Network.Pcap.Base",
        "fct-package": "pcap",
        "fct-signature": "Ptr PcapTag -\u003e IO Bool",
        "fct-source": "src/Network-Pcap-Base.html#isSwapped",
        "fct-type": "function",
        "title": "isSwapped"
      },
      "index": {
        "description": "isSwapped returns True if the current dump file uses different byte order than the one native to the system",
        "hierarchy": "Network Pcap Base",
        "module": "Network.Pcap.Base",
        "name": "isSwapped",
        "normalized": "Ptr PcapTag-\u003eIO Bool",
        "package": "pcap",
        "partial": "Swapped",
        "signature": "Ptr PcapTag-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:listDatalinks",
      "description": {
        "fct-descr": "\u003cp\u003eList all the datalink types supported by a pcap descriptor.\n Entries from the resulting list are valid arguments to\n \u003ccode\u003e\u003ca\u003esetDatalink\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.Pcap.Base",
        "fct-package": "pcap",
        "fct-signature": "Ptr PcapTag -\u003e IO [Link]",
        "fct-source": "src/Network-Pcap-Base.html#listDatalinks",
        "fct-type": "function",
        "title": "listDatalinks"
      },
      "index": {
        "description": "List all the datalink types supported by pcap descriptor Entries from the resulting list are valid arguments to setDatalink",
        "hierarchy": "Network Pcap Base",
        "module": "Network.Pcap.Base",
        "name": "listDatalinks",
        "normalized": "Ptr PcapTag-\u003eIO[Link]",
        "package": "pcap",
        "partial": "Datalinks",
        "signature": "Ptr PcapTag-\u003eIO[Link]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:lookupDev",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003elookupDev\u003c/a\u003e\u003c/code\u003e returns the name of a device suitable for use with\n \u003ccode\u003e\u003ca\u003eopenLive\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003elookupNet\u003c/a\u003e\u003c/code\u003e. If you only have one interface, it is\n the function of choice. If not, see \u003ccode\u003e\u003ca\u003efindAllDevs\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.Pcap.Base",
        "fct-package": "pcap",
        "fct-signature": "IO String",
        "fct-source": "src/Network-Pcap-Base.html#lookupDev",
        "fct-type": "function",
        "title": "lookupDev"
      },
      "index": {
        "description": "lookupDev returns the name of device suitable for use with openLive and lookupNet If you only have one interface it is the function of choice If not see findAllDevs",
        "hierarchy": "Network Pcap Base",
        "module": "Network.Pcap.Base",
        "name": "lookupDev",
        "normalized": "",
        "package": "pcap",
        "partial": "Dev",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:lookupNet",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the network address and mask for the specified interface\n name. Only valid for IPv4. For other protocols, use \u003ccode\u003e\u003ca\u003efindAllDevs\u003c/a\u003e\u003c/code\u003e\n and search the \u003ccode\u003e\u003ca\u003eInterface\u003c/a\u003e\u003c/code\u003e list for the associated network mask.\n\u003c/p\u003e",
        "fct-module": "Network.Pcap.Base",
        "fct-package": "pcap",
        "fct-signature": "String-\u003e IO Network",
        "fct-type": "function",
        "title": "lookupNet"
      },
      "index": {
        "description": "Return the network address and mask for the specified interface name Only valid for IPv4 For other protocols use findAllDevs and search the Interface list for the associated network mask",
        "hierarchy": "Network Pcap Base",
        "module": "Network.Pcap.Base",
        "name": "lookupNet",
        "normalized": "String-\u003eIO Network",
        "package": "pcap",
        "partial": "Net",
        "signature": "String-\u003eIO Network"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:loop",
      "description": {
        "fct-descr": "\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003edispatch\u003c/a\u003e\u003c/code\u003e, but loop until the number of packets\n specified by the second argument are read. A negative value loops\n forever.\n\u003c/p\u003e\u003cp\u003eThis function does not return when a live read timeout occurs. Use\n \u003ccode\u003e\u003ca\u003edispatch\u003c/a\u003e\u003c/code\u003e instead if you want to specify a timeout.\n\u003c/p\u003e",
        "fct-module": "Network.Pcap.Base",
        "fct-package": "pcap",
        "fct-signature": "Ptr PcapTag-\u003e Int-\u003e Callback-\u003e IO Int",
        "fct-type": "function",
        "title": "loop"
      },
      "index": {
        "description": "Similar to dispatch but loop until the number of packets specified by the second argument are read negative value loops forever This function does not return when live read timeout occurs Use dispatch instead if you want to specify timeout",
        "hierarchy": "Network Pcap Base",
        "module": "Network.Pcap.Base",
        "name": "loop",
        "normalized": "Ptr PcapTag-\u003eInt-\u003eCallback-\u003eIO Int",
        "package": "pcap",
        "partial": "",
        "signature": "Ptr PcapTag-\u003eInt-\u003eCallback-\u003eIO Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:netAddr",
      "description": {
        "fct-descr": "\u003cp\u003eIPv4 network address\n\u003c/p\u003e",
        "fct-module": "Network.Pcap.Base",
        "fct-package": "pcap",
        "fct-signature": "!Word32",
        "fct-source": "src/Network-Pcap-Base.html#Network",
        "fct-type": "function",
        "title": "netAddr"
      },
      "index": {
        "description": "IPv4 network address",
        "hierarchy": "Network Pcap Base",
        "module": "Network.Pcap.Base",
        "name": "netAddr",
        "normalized": "",
        "package": "pcap",
        "partial": "Addr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:netMask",
      "description": {
        "fct-descr": "\u003cp\u003eIPv4 netmask\n\u003c/p\u003e",
        "fct-module": "Network.Pcap.Base",
        "fct-package": "pcap",
        "fct-signature": "!Word32",
        "fct-source": "src/Network-Pcap-Base.html#Network",
        "fct-type": "function",
        "title": "netMask"
      },
      "index": {
        "description": "IPv4 netmask",
        "hierarchy": "Network Pcap Base",
        "module": "Network.Pcap.Base",
        "name": "netMask",
        "normalized": "",
        "package": "pcap",
        "partial": "Mask",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:next",
      "description": {
        "fct-descr": "\u003cp\u003eRead the next packet (equivalent to calling \u003ccode\u003e\u003ca\u003edispatch\u003c/a\u003e\u003c/code\u003e with a\n count of 1).\n\u003c/p\u003e",
        "fct-module": "Network.Pcap.Base",
        "fct-package": "pcap",
        "fct-signature": "Ptr PcapTag-\u003e IO (PktHdr, Ptr Word8)",
        "fct-type": "function",
        "title": "next"
      },
      "index": {
        "description": "Read the next packet equivalent to calling dispatch with count of",
        "hierarchy": "Network Pcap Base",
        "module": "Network.Pcap.Base",
        "name": "next",
        "normalized": "Ptr PcapTag-\u003eIO(PktHdr,Ptr Word)",
        "package": "pcap",
        "partial": "",
        "signature": "Ptr PcapTag-\u003eIO(PktHdr,Ptr Word)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:openDead",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eopenDead\u003c/a\u003e\u003c/code\u003e is used to get a packet capture descriptor without\n opening a file or device. It is typically used to test packet\n filter compilation by \u003ccode\u003e\u003ca\u003esetFilter\u003c/a\u003e\u003c/code\u003e. The arguments are the link type\n and the snapshot length.\n\u003c/p\u003e",
        "fct-module": "Network.Pcap.Base",
        "fct-package": "pcap",
        "fct-signature": "Link-\u003e Int-\u003e IO (ForeignPtr PcapTag)",
        "fct-type": "function",
        "title": "openDead"
      },
      "index": {
        "description": "openDead is used to get packet capture descriptor without opening file or device It is typically used to test packet filter compilation by setFilter The arguments are the link type and the snapshot length",
        "hierarchy": "Network Pcap Base",
        "module": "Network.Pcap.Base",
        "name": "openDead",
        "normalized": "Link-\u003eInt-\u003eIO(ForeignPtr PcapTag)",
        "package": "pcap",
        "partial": "Dead",
        "signature": "Link-\u003eInt-\u003eIO(ForeignPtr PcapTag)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:openDump",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eopenDump\u003c/a\u003e\u003c/code\u003e opens a dump file for writing. This dump file is\n written to by the \u003ccode\u003e\u003ca\u003edump\u003c/a\u003e\u003c/code\u003e function. The arguments are a raw packet\n capture descriptor and the file name, with \"-\" as a synonym for\n \u003ccode\u003estdout\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.Pcap.Base",
        "fct-package": "pcap",
        "fct-signature": "Ptr PcapTag-\u003e FilePath-\u003e IO Pdump",
        "fct-type": "function",
        "title": "openDump"
      },
      "index": {
        "description": "openDump opens dump file for writing This dump file is written to by the dump function The arguments are raw packet capture descriptor and the file name with as synonym for stdout",
        "hierarchy": "Network Pcap Base",
        "module": "Network.Pcap.Base",
        "name": "openDump",
        "normalized": "Ptr PcapTag-\u003eFilePath-\u003eIO Pdump",
        "package": "pcap",
        "partial": "Dump",
        "signature": "Ptr PcapTag-\u003eFilePath-\u003eIO Pdump"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:openLive",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eopenLive\u003c/a\u003e\u003c/code\u003e is used to get a packet descriptor that can be used to\n look at packets on the network. The arguments are the device name,\n the snapshot length (in bytes), the promiscuity of the interface\n (\u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e == promiscuous) and a timeout in milliseconds.\n\u003c/p\u003e\u003cp\u003eUsing \u003ccode\u003e\"any\"\u003c/code\u003e as the device name will capture packets from all\n interfaces.  On some systems, reading from the \u003ccode\u003e\"any\"\u003c/code\u003e device is\n incompatible with setting the interfaces into promiscuous mode. In\n that case, only packets whose link layer addresses match those of\n the interfaces are captured.\n\u003c/p\u003e",
        "fct-module": "Network.Pcap.Base",
        "fct-package": "pcap",
        "fct-signature": "String-\u003e Int-\u003e Bool-\u003e Int-\u003e IO (ForeignPtr PcapTag)",
        "fct-type": "function",
        "title": "openLive"
      },
      "index": {
        "description": "openLive is used to get packet descriptor that can be used to look at packets on the network The arguments are the device name the snapshot length in bytes the promiscuity of the interface True promiscuous and timeout in milliseconds Using any as the device name will capture packets from all interfaces On some systems reading from the any device is incompatible with setting the interfaces into promiscuous mode In that case only packets whose link layer addresses match those of the interfaces are captured",
        "hierarchy": "Network Pcap Base",
        "module": "Network.Pcap.Base",
        "name": "openLive",
        "normalized": "String-\u003eInt-\u003eBool-\u003eInt-\u003eIO(ForeignPtr PcapTag)",
        "package": "pcap",
        "partial": "Live",
        "signature": "String-\u003eInt-\u003eBool-\u003eInt-\u003eIO(ForeignPtr PcapTag)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:openOffline",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eopenOffline\u003c/a\u003e\u003c/code\u003e opens a dump file for reading. The file format is\n the same as used by \u003ccode\u003etcpdump\u003c/code\u003e and Wireshark. The string \u003ccode\u003e\"-\"\u003c/code\u003e is\n a synonym for \u003ccode\u003estdin\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.Pcap.Base",
        "fct-package": "pcap",
        "fct-signature": "FilePath-\u003e IO (ForeignPtr PcapTag)",
        "fct-type": "function",
        "title": "openOffline"
      },
      "index": {
        "description": "openOffline opens dump file for reading The file format is the same as used by tcpdump and Wireshark The string is synonym for stdin",
        "hierarchy": "Network Pcap Base",
        "module": "Network.Pcap.Base",
        "name": "openOffline",
        "normalized": "FilePath-\u003eIO(ForeignPtr PcapTag)",
        "package": "pcap",
        "partial": "Offline",
        "signature": "FilePath-\u003eIO(ForeignPtr PcapTag)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:saAddr",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.Pcap.Base",
        "fct-package": "pcap",
        "fct-signature": "!ByteString",
        "fct-source": "src/Network-Pcap-Base.html#SockAddr",
        "fct-type": "function",
        "title": "saAddr"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Pcap Base",
        "module": "Network.Pcap.Base",
        "name": "saAddr",
        "normalized": "",
        "package": "pcap",
        "partial": "Addr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:saFamily",
      "description": {
        "fct-descr": "\u003cp\u003ean address family exported by Network.Socket\n\u003c/p\u003e",
        "fct-module": "Network.Pcap.Base",
        "fct-package": "pcap",
        "fct-signature": "!Family",
        "fct-source": "src/Network-Pcap-Base.html#SockAddr",
        "fct-type": "function",
        "title": "saFamily"
      },
      "index": {
        "description": "an address family exported by Network.Socket",
        "hierarchy": "Network Pcap Base",
        "module": "Network.Pcap.Base",
        "name": "saFamily",
        "normalized": "",
        "package": "pcap",
        "partial": "Family",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:sendPacket",
      "description": {
        "fct-descr": "\u003cp\u003eSend a raw packet through the network interface.\n\u003c/p\u003e",
        "fct-module": "Network.Pcap.Base",
        "fct-package": "pcap",
        "fct-signature": "Ptr PcapTag-\u003e Ptr Word8-\u003e Int-\u003e IO ()",
        "fct-type": "function",
        "title": "sendPacket"
      },
      "index": {
        "description": "Send raw packet through the network interface",
        "hierarchy": "Network Pcap Base",
        "module": "Network.Pcap.Base",
        "name": "sendPacket",
        "normalized": "Ptr PcapTag-\u003ePtr Word-\u003eInt-\u003eIO()",
        "package": "pcap",
        "partial": "Packet",
        "signature": "Ptr PcapTag-\u003ePtr Word-\u003eInt-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:setDatalink",
      "description": {
        "fct-descr": "\u003cp\u003eSets the datalink type for a given pcap descriptor.\n\u003c/p\u003e",
        "fct-module": "Network.Pcap.Base",
        "fct-package": "pcap",
        "fct-signature": "Ptr PcapTag -\u003e Link -\u003e IO ()",
        "fct-source": "src/Network-Pcap-Base.html#setDatalink",
        "fct-type": "function",
        "title": "setDatalink"
      },
      "index": {
        "description": "Sets the datalink type for given pcap descriptor",
        "hierarchy": "Network Pcap Base",
        "module": "Network.Pcap.Base",
        "name": "setDatalink",
        "normalized": "Ptr PcapTag-\u003eLink-\u003eIO()",
        "package": "pcap",
        "partial": "Datalink",
        "signature": "Ptr PcapTag-\u003eLink-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:setDirection",
      "description": {
        "fct-descr": "\u003cp\u003eSpecify the direction in which packets are to be captured.\n Complete functionality is not necessarily available on all\n platforms.\n\u003c/p\u003e",
        "fct-module": "Network.Pcap.Base",
        "fct-package": "pcap",
        "fct-signature": "Ptr PcapTag -\u003e Direction -\u003e IO ()",
        "fct-source": "src/Network-Pcap-Base.html#setDirection",
        "fct-type": "function",
        "title": "setDirection"
      },
      "index": {
        "description": "Specify the direction in which packets are to be captured Complete functionality is not necessarily available on all platforms",
        "hierarchy": "Network Pcap Base",
        "module": "Network.Pcap.Base",
        "name": "setDirection",
        "normalized": "Ptr PcapTag-\u003eDirection-\u003eIO()",
        "package": "pcap",
        "partial": "Direction",
        "signature": "Ptr PcapTag-\u003eDirection-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:setFilter",
      "description": {
        "fct-descr": "\u003cp\u003eSet a filter on the specified packet capture descriptor. Valid\n filter strings are those accepted by \u003ccode\u003etcpdump\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.Pcap.Base",
        "fct-package": "pcap",
        "fct-signature": "Ptr PcapTag-\u003e String-\u003e Bool-\u003e Word32-\u003e IO ()",
        "fct-type": "function",
        "title": "setFilter"
      },
      "index": {
        "description": "Set filter on the specified packet capture descriptor Valid filter strings are those accepted by tcpdump",
        "hierarchy": "Network Pcap Base",
        "module": "Network.Pcap.Base",
        "name": "setFilter",
        "normalized": "Ptr PcapTag-\u003eString-\u003eBool-\u003eWord-\u003eIO()",
        "package": "pcap",
        "partial": "Filter",
        "signature": "Ptr PcapTag-\u003eString-\u003eBool-\u003eWord-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:setNonBlock",
      "description": {
        "fct-descr": "\u003cp\u003eSet a packet capture descriptor into non-blocking mode if the\n second argument is \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e, otherwise put it in blocking mode. Note\n that the packet capture descriptor must have been obtained from\n \u003ccode\u003e\u003ca\u003eopenLive\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.Pcap.Base",
        "fct-package": "pcap",
        "fct-signature": "Ptr PcapTag -\u003e Bool -\u003e IO ()",
        "fct-source": "src/Network-Pcap-Base.html#setNonBlock",
        "fct-type": "function",
        "title": "setNonBlock"
      },
      "index": {
        "description": "Set packet capture descriptor into non-blocking mode if the second argument is True otherwise put it in blocking mode Note that the packet capture descriptor must have been obtained from openLive",
        "hierarchy": "Network Pcap Base",
        "module": "Network.Pcap.Base",
        "name": "setNonBlock",
        "normalized": "Ptr PcapTag-\u003eBool-\u003eIO()",
        "package": "pcap",
        "partial": "Non Block",
        "signature": "Ptr PcapTag-\u003eBool-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:snapshotLen",
      "description": {
        "fct-descr": "\u003cp\u003eThe snapshot length that was used in the call to \u003ccode\u003e\u003ca\u003eopenLive\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.Pcap.Base",
        "fct-package": "pcap",
        "fct-signature": "Ptr PcapTag -\u003e IO Int",
        "fct-source": "src/Network-Pcap-Base.html#snapshotLen",
        "fct-type": "function",
        "title": "snapshotLen"
      },
      "index": {
        "description": "The snapshot length that was used in the call to openLive",
        "hierarchy": "Network Pcap Base",
        "module": "Network.Pcap.Base",
        "name": "snapshotLen",
        "normalized": "Ptr PcapTag-\u003eIO Int",
        "package": "pcap",
        "partial": "Len",
        "signature": "Ptr PcapTag-\u003eIO Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:statDropped",
      "description": {
        "fct-descr": "\u003cp\u003epackets dropped by \u003ccode\u003elibpcap\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Pcap.Base",
        "fct-package": "pcap",
        "fct-signature": "!Word32",
        "fct-source": "src/Network-Pcap-Base.html#Statistics",
        "fct-type": "function",
        "title": "statDropped"
      },
      "index": {
        "description": "packets dropped by libpcap",
        "hierarchy": "Network Pcap Base",
        "module": "Network.Pcap.Base",
        "name": "statDropped",
        "normalized": "",
        "package": "pcap",
        "partial": "Dropped",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:statIfaceDropped",
      "description": {
        "fct-descr": "\u003cp\u003epackets dropped by the network interface\n\u003c/p\u003e",
        "fct-module": "Network.Pcap.Base",
        "fct-package": "pcap",
        "fct-signature": "!Word32",
        "fct-source": "src/Network-Pcap-Base.html#Statistics",
        "fct-type": "function",
        "title": "statIfaceDropped"
      },
      "index": {
        "description": "packets dropped by the network interface",
        "hierarchy": "Network Pcap Base",
        "module": "Network.Pcap.Base",
        "name": "statIfaceDropped",
        "normalized": "",
        "package": "pcap",
        "partial": "Iface Dropped",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:statReceived",
      "description": {
        "fct-descr": "\u003cp\u003epackets received\n\u003c/p\u003e",
        "fct-module": "Network.Pcap.Base",
        "fct-package": "pcap",
        "fct-signature": "!Word32",
        "fct-source": "src/Network-Pcap-Base.html#Statistics",
        "fct-type": "function",
        "title": "statReceived"
      },
      "index": {
        "description": "packets received",
        "hierarchy": "Network Pcap Base",
        "module": "Network.Pcap.Base",
        "name": "statReceived",
        "normalized": "",
        "package": "pcap",
        "partial": "Received",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:statistics",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the number of packets received, the number of packets\n dropped by the packet filter and the number of packets dropped by\n the interface (before processing by the packet filter).\n\u003c/p\u003e",
        "fct-module": "Network.Pcap.Base",
        "fct-package": "pcap",
        "fct-signature": "Ptr PcapTag -\u003e IO Statistics",
        "fct-source": "src/Network-Pcap-Base.html#statistics",
        "fct-type": "function",
        "title": "statistics"
      },
      "index": {
        "description": "Returns the number of packets received the number of packets dropped by the packet filter and the number of packets dropped by the interface before processing by the packet filter",
        "hierarchy": "Network Pcap Base",
        "module": "Network.Pcap.Base",
        "name": "statistics",
        "normalized": "Ptr PcapTag-\u003eIO Statistics",
        "package": "pcap",
        "partial": "",
        "signature": "Ptr PcapTag-\u003eIO Statistics"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:toPktHdr",
      "description": {
        "fct-module": "Network.Pcap.Base",
        "fct-package": "pcap",
        "fct-signature": "Ptr PktHdr -\u003e IO PktHdr",
        "fct-source": "src/Network-Pcap-Base.html#toPktHdr",
        "fct-type": "function",
        "title": "toPktHdr"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Pcap Base",
        "module": "Network.Pcap.Base",
        "name": "toPktHdr",
        "normalized": "Ptr PktHdr-\u003eIO PktHdr",
        "package": "pcap",
        "partial": "Pkt Hdr",
        "signature": "Ptr PktHdr-\u003eIO PktHdr"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap-Base.html#v:version",
      "description": {
        "fct-descr": "\u003cp\u003eVersion of the library.  The returned pair consists of the major\n and minor version numbers.\n\u003c/p\u003e",
        "fct-module": "Network.Pcap.Base",
        "fct-package": "pcap",
        "fct-signature": "Ptr PcapTag -\u003e IO (Int, Int)",
        "fct-source": "src/Network-Pcap-Base.html#version",
        "fct-type": "function",
        "title": "version"
      },
      "index": {
        "description": "Version of the library The returned pair consists of the major and minor version numbers",
        "hierarchy": "Network Pcap Base",
        "module": "Network.Pcap.Base",
        "name": "version",
        "normalized": "Ptr PcapTag-\u003eIO(Int,Int)",
        "package": "pcap",
        "partial": "",
        "signature": "Ptr PcapTag-\u003eIO(Int,Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ePcap\u003c/a\u003e\u003c/code\u003e module is a high(ish) level binding to all of\n the functions in \u003ccode\u003elibpcap\u003c/code\u003e.  See \u003ca\u003ehttp://www.tcpdump.org\u003c/a\u003e for more\n information.\n\u003c/p\u003e\u003cp\u003eThis module is built on the lower-level \u003ccode\u003e\u003ca\u003eBase\u003c/a\u003e\u003c/code\u003e module,\n which is slightly more efficient.  Don't use \u003ccode\u003e\u003ca\u003eBase\u003c/a\u003e\u003c/code\u003e\n unless profiling data indicates that you need to.\n\u003c/p\u003e\u003cp\u003eOnly a minimum of marshaling is done on received packets.  To\n convert captured packet data to a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e (space efficient,\n and with \u003cem\u003eO(1)\u003c/em\u003e access to every byte in a captured packet), use\n \u003ccode\u003e\u003ca\u003etoBS\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote that the \u003ccode\u003e\u003ca\u003eSockAddr\u003c/a\u003e\u003c/code\u003e exported here is not the \u003ccode\u003eSockAddr\u003c/code\u003e from\n \u003ccode\u003e\u003ca\u003eSocket\u003c/a\u003e\u003c/code\u003e. The \u003ccode\u003eSockAddr\u003c/code\u003e from \u003ccode\u003e\u003ca\u003eSocket\u003c/a\u003e\u003c/code\u003e corresponds\n to \u003ccode\u003estruct sockaddr_in\u003c/code\u003e in BSD terminology. The \u003ccode\u003e\u003ca\u003eSockAddr\u003c/a\u003e\u003c/code\u003e record\n here is BSD's \u003ccode\u003estruct sockaddr\u003c/code\u003e. See W.R.Stevens, TCP Illustrated,\n volume 2, for further elucidation.\n\u003c/p\u003e\u003cp\u003eThis binding should be portable across systems that can use the\n \u003ccode\u003elibpcap\u003c/code\u003e from \u003ccode\u003etcpdump.org\u003c/code\u003e. It does not yet work with Winpcap, a\n similar library for Windows, although adapting it should not prove\n difficult.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Network.Pcap",
        "fct-package": "pcap",
        "fct-signature": "module",
        "fct-source": "src/Network-Pcap.html",
        "fct-type": "module",
        "title": "Pcap"
      },
      "index": {
        "description": "The Pcap module is high ish level binding to all of the functions in libpcap See http www.tcpdump.org for more information This module is built on the lower-level Base module which is slightly more efficient Don use Base unless profiling data indicates that you need to Only minimum of marshaling is done on received packets To convert captured packet data to ByteString space efficient and with access to every byte in captured packet use toBS Note that the SockAddr exported here is not the SockAddr from Socket The SockAddr from Socket corresponds to struct sockaddr in in BSD terminology The SockAddr record here is BSD struct sockaddr See W.R.Stevens TCP Illustrated volume for further elucidation This binding should be portable across systems that can use the libpcap from tcpdump.org It does not yet work with Winpcap similar library for Windows although adapting it should not prove difficult",
        "hierarchy": "Network Pcap",
        "module": "Network.Pcap",
        "name": "Pcap",
        "normalized": "",
        "package": "pcap",
        "partial": "Pcap",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#t:BpfProgram",
      "description": {
        "fct-descr": "\u003cp\u003eCompiled Berkeley Packet Filter program.\n\u003c/p\u003e",
        "fct-module": "Network.Pcap",
        "fct-package": "pcap",
        "fct-signature": "type",
        "fct-source": "src/Network-Pcap-Base.html#BpfProgram",
        "fct-type": "type",
        "title": "BpfProgram"
      },
      "index": {
        "description": "Compiled Berkeley Packet Filter program",
        "hierarchy": "Network Pcap",
        "module": "Network.Pcap",
        "name": "BpfProgram",
        "normalized": "",
        "package": "pcap",
        "partial": "Bpf Program",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#t:Callback",
      "description": {
        "fct-descr": "\u003cp\u003ethe type of the callback function passed to \u003ccode\u003e\u003ca\u003edispatch\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eloop\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.Pcap",
        "fct-package": "pcap",
        "fct-signature": "type",
        "fct-source": "src/Network-Pcap-Base.html#Callback",
        "fct-type": "type",
        "title": "Callback"
      },
      "index": {
        "description": "the type of the callback function passed to dispatch or loop",
        "hierarchy": "Network Pcap",
        "module": "Network.Pcap",
        "name": "Callback",
        "normalized": "",
        "package": "pcap",
        "partial": "Callback",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#t:CallbackBS",
      "description": {
        "fct-descr": "\u003cp\u003eCallback using \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e for packet body.\n\u003c/p\u003e",
        "fct-module": "Network.Pcap",
        "fct-package": "pcap",
        "fct-signature": "type",
        "fct-source": "src/Network-Pcap.html#CallbackBS",
        "fct-type": "type",
        "title": "CallbackBS"
      },
      "index": {
        "description": "Callback using ByteString for packet body",
        "hierarchy": "Network Pcap",
        "module": "Network.Pcap",
        "name": "CallbackBS",
        "normalized": "",
        "package": "pcap",
        "partial": "Callback BS",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#t:Direction",
      "description": {
        "fct-descr": "\u003cp\u003eThe direction in which packets are to be captured.  See\n \u003ccode\u003e\u003ca\u003esetDirection\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.Pcap",
        "fct-package": "pcap",
        "fct-signature": "data",
        "fct-source": "src/Network-Pcap-Base.html#Direction",
        "fct-type": "data",
        "title": "Direction"
      },
      "index": {
        "description": "The direction in which packets are to be captured See setDirection",
        "hierarchy": "Network Pcap",
        "module": "Network.Pcap",
        "name": "Direction",
        "normalized": "",
        "package": "pcap",
        "partial": "Direction",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#t:DumpHandle",
      "description": {
        "fct-descr": "\u003cp\u003eDump file handle.\n\u003c/p\u003e",
        "fct-module": "Network.Pcap",
        "fct-package": "pcap",
        "fct-signature": "data",
        "fct-source": "src/Network-Pcap.html#DumpHandle",
        "fct-type": "data",
        "title": "DumpHandle"
      },
      "index": {
        "description": "Dump file handle",
        "hierarchy": "Network Pcap",
        "module": "Network.Pcap",
        "name": "DumpHandle",
        "normalized": "",
        "package": "pcap",
        "partial": "Dump Handle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#t:Interface",
      "description": {
        "fct-descr": "\u003cp\u003eThe interface structure.\n\u003c/p\u003e",
        "fct-module": "Network.Pcap",
        "fct-package": "pcap",
        "fct-signature": "data",
        "fct-source": "src/Network-Pcap-Base.html#Interface",
        "fct-type": "data",
        "title": "Interface"
      },
      "index": {
        "description": "The interface structure",
        "hierarchy": "Network Pcap",
        "module": "Network.Pcap",
        "name": "Interface",
        "normalized": "",
        "package": "pcap",
        "partial": "Interface",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#t:Link",
      "description": {
        "fct-descr": "\u003cp\u003eDatalink types.\n\u003c/p\u003e\u003cp\u003eThis covers all of the datalink types defined in bpf.h.  Types\n   defined on your system may vary.\n\u003c/p\u003e",
        "fct-module": "Network.Pcap",
        "fct-package": "pcap",
        "fct-signature": "data",
        "fct-source": "src/Network-Pcap-Base.html#Link",
        "fct-type": "data",
        "title": "Link"
      },
      "index": {
        "description": "Datalink types This covers all of the datalink types defined in bpf.h Types defined on your system may vary",
        "hierarchy": "Network Pcap",
        "module": "Network.Pcap",
        "name": "Link",
        "normalized": "",
        "package": "pcap",
        "partial": "Link",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#t:Network",
      "description": {
        "fct-descr": "\u003cp\u003eThe network address record. Both the address and mask are in\n network byte order.\n\u003c/p\u003e",
        "fct-module": "Network.Pcap",
        "fct-package": "pcap",
        "fct-signature": "data",
        "fct-source": "src/Network-Pcap-Base.html#Network",
        "fct-type": "data",
        "title": "Network"
      },
      "index": {
        "description": "The network address record Both the address and mask are in network byte order",
        "hierarchy": "Network Pcap",
        "module": "Network.Pcap",
        "name": "Network",
        "normalized": "",
        "package": "pcap",
        "partial": "Network",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#t:PcapAddr",
      "description": {
        "fct-descr": "\u003cp\u003eThe address structure.\n\u003c/p\u003e",
        "fct-module": "Network.Pcap",
        "fct-package": "pcap",
        "fct-signature": "data",
        "fct-source": "src/Network-Pcap-Base.html#PcapAddr",
        "fct-type": "data",
        "title": "PcapAddr"
      },
      "index": {
        "description": "The address structure",
        "hierarchy": "Network Pcap",
        "module": "Network.Pcap",
        "name": "PcapAddr",
        "normalized": "",
        "package": "pcap",
        "partial": "Pcap Addr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#t:PcapHandle",
      "description": {
        "fct-descr": "\u003cp\u003ePacket capture handle.\n\u003c/p\u003e",
        "fct-module": "Network.Pcap",
        "fct-package": "pcap",
        "fct-signature": "data",
        "fct-source": "src/Network-Pcap.html#PcapHandle",
        "fct-type": "data",
        "title": "PcapHandle"
      },
      "index": {
        "description": "Packet capture handle",
        "hierarchy": "Network Pcap",
        "module": "Network.Pcap",
        "name": "PcapHandle",
        "normalized": "",
        "package": "pcap",
        "partial": "Pcap Handle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#t:PktHdr",
      "description": {
        "fct-module": "Network.Pcap",
        "fct-package": "pcap",
        "fct-signature": "data",
        "fct-source": "src/Network-Pcap-Base.html#PktHdr",
        "fct-type": "data",
        "title": "PktHdr"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Pcap",
        "module": "Network.Pcap",
        "name": "PktHdr",
        "normalized": "",
        "package": "pcap",
        "partial": "Pkt Hdr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#t:SockAddr",
      "description": {
        "fct-descr": "\u003cp\u003eThe socket address record. Note that this is not the same as\n SockAddr from \u003ccode\u003e\u003ca\u003eSocket\u003c/a\u003e\u003c/code\u003e. (That is a Haskell version of C's\n \u003ccode\u003estruct sockaddr_in\u003c/code\u003e. This is the real \u003ccode\u003estruct sockaddr\u003c/code\u003e from the\n BSD network stack.)\n\u003c/p\u003e",
        "fct-module": "Network.Pcap",
        "fct-package": "pcap",
        "fct-signature": "data",
        "fct-source": "src/Network-Pcap-Base.html#SockAddr",
        "fct-type": "data",
        "title": "SockAddr"
      },
      "index": {
        "description": "The socket address record Note that this is not the same as SockAddr from Socket That is Haskell version of struct sockaddr in This is the real struct sockaddr from the BSD network stack",
        "hierarchy": "Network Pcap",
        "module": "Network.Pcap",
        "name": "SockAddr",
        "normalized": "",
        "package": "pcap",
        "partial": "Sock Addr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#t:Statistics",
      "description": {
        "fct-module": "Network.Pcap",
        "fct-package": "pcap",
        "fct-signature": "data",
        "fct-source": "src/Network-Pcap-Base.html#Statistics",
        "fct-type": "data",
        "title": "Statistics"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Pcap",
        "module": "Network.Pcap",
        "name": "Statistics",
        "normalized": "",
        "package": "pcap",
        "partial": "Statistics",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:DLT_A429",
      "description": {
        "fct-descr": "\u003cp\u003eARINC 429\n\u003c/p\u003e",
        "fct-module": "Network.Pcap",
        "fct-package": "pcap",
        "fct-signature": "DLT_A429",
        "fct-source": "src/Network-Pcap-Base.html#Link",
        "fct-type": "function",
        "title": "DLT_A429"
      },
      "index": {
        "description": "ARINC",
        "hierarchy": "Network Pcap",
        "module": "Network.Pcap",
        "name": "DLT_A429",
        "normalized": "",
        "package": "pcap",
        "partial": "DLT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:DLT_A653_ICM",
      "description": {
        "fct-descr": "\u003cp\u003eARINC 653 Interpartition Communication messages\n\u003c/p\u003e",
        "fct-module": "Network.Pcap",
        "fct-package": "pcap",
        "fct-signature": "DLT_A653_ICM",
        "fct-source": "src/Network-Pcap-Base.html#Link",
        "fct-type": "function",
        "title": "DLT_A653_ICM"
      },
      "index": {
        "description": "ARINC Interpartition Communication messages",
        "hierarchy": "Network Pcap",
        "module": "Network.Pcap",
        "name": "DLT_A653_ICM",
        "normalized": "",
        "package": "pcap",
        "partial": "DLT ICM",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:DLT_AIRONET_HEADER",
      "description": {
        "fct-descr": "\u003cp\u003eAironet (Cisco) 802.11 wireless\n\u003c/p\u003e",
        "fct-module": "Network.Pcap",
        "fct-package": "pcap",
        "fct-signature": "DLT_AIRONET_HEADER",
        "fct-source": "src/Network-Pcap-Base.html#Link",
        "fct-type": "function",
        "title": "DLT_AIRONET_HEADER"
      },
      "index": {
        "description": "Aironet Cisco wireless",
        "hierarchy": "Network Pcap",
        "module": "Network.Pcap",
        "name": "DLT_AIRONET_HEADER",
        "normalized": "",
        "package": "pcap",
        "partial": "DLT AIRONET HEADER",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:DLT_APPLE_IP_OVER_IEEE1394",
      "description": {
        "fct-descr": "\u003cp\u003eApple IP-over-IEEE 1394\n\u003c/p\u003e",
        "fct-module": "Network.Pcap",
        "fct-package": "pcap",
        "fct-signature": "DLT_APPLE_IP_OVER_IEEE1394",
        "fct-source": "src/Network-Pcap-Base.html#Link",
        "fct-type": "function",
        "title": "DLT_APPLE_IP_OVER_IEEE1394"
      },
      "index": {
        "description": "Apple IP-over-IEEE",
        "hierarchy": "Network Pcap",
        "module": "Network.Pcap",
        "name": "DLT_APPLE_IP_OVER_IEEE1394",
        "normalized": "",
        "package": "pcap",
        "partial": "DLT APPLE IP OVER IEEE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:DLT_ARCNET",
      "description": {
        "fct-descr": "\u003cp\u003eARCNET\n\u003c/p\u003e",
        "fct-module": "Network.Pcap",
        "fct-package": "pcap",
        "fct-signature": "DLT_ARCNET",
        "fct-source": "src/Network-Pcap-Base.html#Link",
        "fct-type": "function",
        "title": "DLT_ARCNET"
      },
      "index": {
        "description": "ARCNET",
        "hierarchy": "Network Pcap",
        "module": "Network.Pcap",
        "name": "DLT_ARCNET",
        "normalized": "",
        "package": "pcap",
        "partial": "DLT ARCNET",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:DLT_ARCNET_LINUX",
      "description": {
        "fct-descr": "\u003cp\u003eLinux ARCNET header\n\u003c/p\u003e",
        "fct-module": "Network.Pcap",
        "fct-package": "pcap",
        "fct-signature": "DLT_ARCNET_LINUX",
        "fct-source": "src/Network-Pcap-Base.html#Link",
        "fct-type": "function",
        "title": "DLT_ARCNET_LINUX"
      },
      "index": {
        "description": "Linux ARCNET header",
        "hierarchy": "Network Pcap",
        "module": "Network.Pcap",
        "name": "DLT_ARCNET_LINUX",
        "normalized": "",
        "package": "pcap",
        "partial": "DLT ARCNET LINUX",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:DLT_ATM_CLIP",
      "description": {
        "fct-descr": "\u003cp\u003eLinux classical IP over ATM\n\u003c/p\u003e",
        "fct-module": "Network.Pcap",
        "fct-package": "pcap",
        "fct-signature": "DLT_ATM_CLIP",
        "fct-source": "src/Network-Pcap-Base.html#Link",
        "fct-type": "function",
        "title": "DLT_ATM_CLIP"
      },
      "index": {
        "description": "Linux classical IP over ATM",
        "hierarchy": "Network Pcap",
        "module": "Network.Pcap",
        "name": "DLT_ATM_CLIP",
        "normalized": "",
        "package": "pcap",
        "partial": "DLT ATM CLIP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:DLT_ATM_RFC1483",
      "description": {
        "fct-descr": "\u003cp\u003eLLC SNAP encapsulated ATM\n\u003c/p\u003e",
        "fct-module": "Network.Pcap",
        "fct-package": "pcap",
        "fct-signature": "DLT_ATM_RFC1483",
        "fct-source": "src/Network-Pcap-Base.html#Link",
        "fct-type": "function",
        "title": "DLT_ATM_RFC1483"
      },
      "index": {
        "description": "LLC SNAP encapsulated ATM",
        "hierarchy": "Network Pcap",
        "module": "Network.Pcap",
        "name": "DLT_ATM_RFC1483",
        "normalized": "",
        "package": "pcap",
        "partial": "DLT ATM RFC",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:DLT_AX25",
      "description": {
        "fct-descr": "\u003cp\u003eamateur radio AX.25\n\u003c/p\u003e",
        "fct-module": "Network.Pcap",
        "fct-package": "pcap",
        "fct-signature": "DLT_AX25",
        "fct-source": "src/Network-Pcap-Base.html#Link",
        "fct-type": "function",
        "title": "DLT_AX25"
      },
      "index": {
        "description": "amateur radio AX.25",
        "hierarchy": "Network Pcap",
        "module": "Network.Pcap",
        "name": "DLT_AX25",
        "normalized": "",
        "package": "pcap",
        "partial": "DLT AX",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:DLT_BLUETOOTH_HCI_H4",
      "description": {
        "fct-descr": "\u003cp\u003eBluetooth HCI UART transport layer (part H:4)\n\u003c/p\u003e",
        "fct-module": "Network.Pcap",
        "fct-package": "pcap",
        "fct-signature": "DLT_BLUETOOTH_HCI_H4",
        "fct-source": "src/Network-Pcap-Base.html#Link",
        "fct-type": "function",
        "title": "DLT_BLUETOOTH_HCI_H4"
      },
      "index": {
        "description": "Bluetooth HCI UART transport layer part",
        "hierarchy": "Network Pcap",
        "module": "Network.Pcap",
        "name": "DLT_BLUETOOTH_HCI_H4",
        "normalized": "",
        "package": "pcap",
        "partial": "DLT BLUETOOTH HCI",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:DLT_CAN20B",
      "description": {
        "fct-descr": "\u003cp\u003eController Area Network (CAN) v2.0B\n\u003c/p\u003e",
        "fct-module": "Network.Pcap",
        "fct-package": "pcap",
        "fct-signature": "DLT_CAN20B",
        "fct-source": "src/Network-Pcap-Base.html#Link",
        "fct-type": "function",
        "title": "DLT_CAN20B"
      },
      "index": {
        "description": "Controller Area Network CAN v2.0B",
        "hierarchy": "Network Pcap",
        "module": "Network.Pcap",
        "name": "DLT_CAN20B",
        "normalized": "",
        "package": "pcap",
        "partial": "DLT CAN",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:DLT_CHAOS",
      "description": {
        "fct-descr": "\u003cp\u003eChaos\n\u003c/p\u003e",
        "fct-module": "Network.Pcap",
        "fct-package": "pcap",
        "fct-signature": "DLT_CHAOS",
        "fct-source": "src/Network-Pcap-Base.html#Link",
        "fct-type": "function",
        "title": "DLT_CHAOS"
      },
      "index": {
        "description": "Chaos",
        "hierarchy": "Network Pcap",
        "module": "Network.Pcap",
        "name": "DLT_CHAOS",
        "normalized": "",
        "package": "pcap",
        "partial": "DLT CHAOS",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:DLT_CISCO_IOS",
      "description": {
        "fct-descr": "\u003cp\u003eCisco IOS\n\u003c/p\u003e",
        "fct-module": "Network.Pcap",
        "fct-package": "pcap",
        "fct-signature": "DLT_CISCO_IOS",
        "fct-source": "src/Network-Pcap-Base.html#Link",
        "fct-type": "function",
        "title": "DLT_CISCO_IOS"
      },
      "index": {
        "description": "Cisco IOS",
        "hierarchy": "Network Pcap",
        "module": "Network.Pcap",
        "name": "DLT_CISCO_IOS",
        "normalized": "",
        "package": "pcap",
        "partial": "DLT CISCO IOS",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:DLT_C_HDLC",
      "description": {
        "fct-descr": "\u003cp\u003eCisco HDLC\n\u003c/p\u003e",
        "fct-module": "Network.Pcap",
        "fct-package": "pcap",
        "fct-signature": "DLT_C_HDLC",
        "fct-source": "src/Network-Pcap-Base.html#Link",
        "fct-type": "function",
        "title": "DLT_C_HDLC"
      },
      "index": {
        "description": "Cisco HDLC",
        "hierarchy": "Network Pcap",
        "module": "Network.Pcap",
        "name": "DLT_C_HDLC",
        "normalized": "",
        "package": "pcap",
        "partial": "DLT HDLC",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:DLT_DOCSIS",
      "description": {
        "fct-descr": "\u003cp\u003eDOCSIS MAC frame\n\u003c/p\u003e",
        "fct-module": "Network.Pcap",
        "fct-package": "pcap",
        "fct-signature": "DLT_DOCSIS",
        "fct-source": "src/Network-Pcap-Base.html#Link",
        "fct-type": "function",
        "title": "DLT_DOCSIS"
      },
      "index": {
        "description": "DOCSIS MAC frame",
        "hierarchy": "Network Pcap",
        "module": "Network.Pcap",
        "name": "DLT_DOCSIS",
        "normalized": "",
        "package": "pcap",
        "partial": "DLT DOCSIS",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:DLT_ECONET",
      "description": {
        "fct-descr": "\u003cp\u003eAcorn Econet\n\u003c/p\u003e",
        "fct-module": "Network.Pcap",
        "fct-package": "pcap",
        "fct-signature": "DLT_ECONET",
        "fct-source": "src/Network-Pcap-Base.html#Link",
        "fct-type": "function",
        "title": "DLT_ECONET"
      },
      "index": {
        "description": "Acorn Econet",
        "hierarchy": "Network Pcap",
        "module": "Network.Pcap",
        "name": "DLT_ECONET",
        "normalized": "",
        "package": "pcap",
        "partial": "DLT ECONET",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:DLT_EN10MB",
      "description": {
        "fct-descr": "\u003cp\u003e10 Mbit per second (or faster) ethernet\n\u003c/p\u003e",
        "fct-module": "Network.Pcap",
        "fct-package": "pcap",
        "fct-signature": "DLT_EN10MB",
        "fct-source": "src/Network-Pcap-Base.html#Link",
        "fct-type": "function",
        "title": "DLT_EN10MB"
      },
      "index": {
        "description": "Mbit per second or faster ethernet",
        "hierarchy": "Network Pcap",
        "module": "Network.Pcap",
        "name": "DLT_EN10MB",
        "normalized": "",
        "package": "pcap",
        "partial": "DLT EN MB",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:DLT_EN3MB",
      "description": {
        "fct-descr": "\u003cp\u003eoriginal 3 Mbit per second ethernet\n\u003c/p\u003e",
        "fct-module": "Network.Pcap",
        "fct-package": "pcap",
        "fct-signature": "DLT_EN3MB",
        "fct-source": "src/Network-Pcap-Base.html#Link",
        "fct-type": "function",
        "title": "DLT_EN3MB"
      },
      "index": {
        "description": "original Mbit per second ethernet",
        "hierarchy": "Network Pcap",
        "module": "Network.Pcap",
        "name": "DLT_EN3MB",
        "normalized": "",
        "package": "pcap",
        "partial": "DLT EN MB",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:DLT_ENC",
      "description": {
        "fct-descr": "\u003cp\u003eEncapsulated packets for IPsec\n\u003c/p\u003e",
        "fct-module": "Network.Pcap",
        "fct-package": "pcap",
        "fct-signature": "DLT_ENC",
        "fct-source": "src/Network-Pcap-Base.html#Link",
        "fct-type": "function",
        "title": "DLT_ENC"
      },
      "index": {
        "description": "Encapsulated packets for IPsec",
        "hierarchy": "Network Pcap",
        "module": "Network.Pcap",
        "name": "DLT_ENC",
        "normalized": "",
        "package": "pcap",
        "partial": "DLT ENC",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:DLT_FDDI",
      "description": {
        "fct-descr": "\u003cp\u003eFDDI\n\u003c/p\u003e",
        "fct-module": "Network.Pcap",
        "fct-package": "pcap",
        "fct-signature": "DLT_FDDI",
        "fct-source": "src/Network-Pcap-Base.html#Link",
        "fct-type": "function",
        "title": "DLT_FDDI"
      },
      "index": {
        "description": "FDDI",
        "hierarchy": "Network Pcap",
        "module": "Network.Pcap",
        "name": "DLT_FDDI",
        "normalized": "",
        "package": "pcap",
        "partial": "DLT FDDI",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:DLT_FRELAY",
      "description": {
        "fct-descr": "\u003cp\u003eFrame Relay\n\u003c/p\u003e",
        "fct-module": "Network.Pcap",
        "fct-package": "pcap",
        "fct-signature": "DLT_FRELAY",
        "fct-source": "src/Network-Pcap-Base.html#Link",
        "fct-type": "function",
        "title": "DLT_FRELAY"
      },
      "index": {
        "description": "Frame Relay",
        "hierarchy": "Network Pcap",
        "module": "Network.Pcap",
        "name": "DLT_FRELAY",
        "normalized": "",
        "package": "pcap",
        "partial": "DLT FRELAY",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:DLT_GPF_F",
      "description": {
        "fct-descr": "\u003cp\u003eGPF-F (ITU-T G.7041/Y.1303)\n\u003c/p\u003e",
        "fct-module": "Network.Pcap",
        "fct-package": "pcap",
        "fct-signature": "DLT_GPF_F",
        "fct-source": "src/Network-Pcap-Base.html#Link",
        "fct-type": "function",
        "title": "DLT_GPF_F"
      },
      "index": {
        "description": "GPF-F ITU-T G.7041 Y.1303",
        "hierarchy": "Network Pcap",
        "module": "Network.Pcap",
        "name": "DLT_GPF_F",
        "normalized": "",
        "package": "pcap",
        "partial": "DLT GPF",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:DLT_GPF_T",
      "description": {
        "fct-descr": "\u003cp\u003eGPF-T (ITU-T G.7041/Y.1303)\n\u003c/p\u003e",
        "fct-module": "Network.Pcap",
        "fct-package": "pcap",
        "fct-signature": "DLT_GPF_T",
        "fct-source": "src/Network-Pcap-Base.html#Link",
        "fct-type": "function",
        "title": "DLT_GPF_T"
      },
      "index": {
        "description": "GPF-T ITU-T G.7041 Y.1303",
        "hierarchy": "Network Pcap",
        "module": "Network.Pcap",
        "name": "DLT_GPF_T",
        "normalized": "",
        "package": "pcap",
        "partial": "DLT GPF",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:DLT_GPRS_LLC",
      "description": {
        "fct-descr": "\u003cp\u003eGPRS LLC\n\u003c/p\u003e",
        "fct-module": "Network.Pcap",
        "fct-package": "pcap",
        "fct-signature": "DLT_GPRS_LLC",
        "fct-source": "src/Network-Pcap-Base.html#Link",
        "fct-type": "function",
        "title": "DLT_GPRS_LLC"
      },
      "index": {
        "description": "GPRS LLC",
        "hierarchy": "Network Pcap",
        "module": "Network.Pcap",
        "name": "DLT_GPRS_LLC",
        "normalized": "",
        "package": "pcap",
        "partial": "DLT GPRS LLC",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:DLT_HHDLC",
      "description": {
        "fct-descr": "\u003cp\u003eSiemens HiPath HDLC\n\u003c/p\u003e",
        "fct-module": "Network.Pcap",
        "fct-package": "pcap",
        "fct-signature": "DLT_HHDLC",
        "fct-source": "src/Network-Pcap-Base.html#Link",
        "fct-type": "function",
        "title": "DLT_HHDLC"
      },
      "index": {
        "description": "Siemens HiPath HDLC",
        "hierarchy": "Network Pcap",
        "module": "Network.Pcap",
        "name": "DLT_HHDLC",
        "normalized": "",
        "package": "pcap",
        "partial": "DLT HHDLC",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:DLT_IEEE802",
      "description": {
        "fct-descr": "\u003cp\u003eIEEE 802 networks\n\u003c/p\u003e",
        "fct-module": "Network.Pcap",
        "fct-package": "pcap",
        "fct-signature": "DLT_IEEE802",
        "fct-source": "src/Network-Pcap-Base.html#Link",
        "fct-type": "function",
        "title": "DLT_IEEE802"
      },
      "index": {
        "description": "IEEE networks",
        "hierarchy": "Network Pcap",
        "module": "Network.Pcap",
        "name": "DLT_IEEE802",
        "normalized": "",
        "package": "pcap",
        "partial": "DLT IEEE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:DLT_IEEE802_11",
      "description": {
        "fct-descr": "\u003cp\u003eIEEE 802.11 wireless\n\u003c/p\u003e",
        "fct-module": "Network.Pcap",
        "fct-package": "pcap",
        "fct-signature": "DLT_IEEE802_11",
        "fct-source": "src/Network-Pcap-Base.html#Link",
        "fct-type": "function",
        "title": "DLT_IEEE802_11"
      },
      "index": {
        "description": "IEEE wireless",
        "hierarchy": "Network Pcap",
        "module": "Network.Pcap",
        "name": "DLT_IEEE802_11",
        "normalized": "",
        "package": "pcap",
        "partial": "DLT IEEE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:DLT_IEEE802_11_RADIO",
      "description": {
        "fct-descr": "\u003col\u003e\u003cli\u003e11 plus a number of bits of link-layer information\n\u003c/li\u003e\u003c/ol\u003e",
        "fct-module": "Network.Pcap",
        "fct-package": "pcap",
        "fct-signature": "DLT_IEEE802_11_RADIO",
        "fct-source": "src/Network-Pcap-Base.html#Link",
        "fct-type": "function",
        "title": "DLT_IEEE802_11_RADIO"
      },
      "index": {
        "description": "plus number of bits of link-layer information",
        "hierarchy": "Network Pcap",
        "module": "Network.Pcap",
        "name": "DLT_IEEE802_11_RADIO",
        "normalized": "",
        "package": "pcap",
        "partial": "DLT IEEE RADIO",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:DLT_IEEE802_15_4",
      "description": {
        "fct-descr": "\u003cp\u003eIEEE 802.15.4, exactly as in the spec\n\u003c/p\u003e",
        "fct-module": "Network.Pcap",
        "fct-package": "pcap",
        "fct-signature": "DLT_IEEE802_15_4",
        "fct-source": "src/Network-Pcap-Base.html#Link",
        "fct-type": "function",
        "title": "DLT_IEEE802_15_4"
      },
      "index": {
        "description": "IEEE exactly as in the spec",
        "hierarchy": "Network Pcap",
        "module": "Network.Pcap",
        "name": "DLT_IEEE802_15_4",
        "normalized": "",
        "package": "pcap",
        "partial": "DLT IEEE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:DLT_IEEE802_15_4_LINUX",
      "description": {
        "fct-descr": "\u003cp\u003eIEEE 802.15.4, with address fields padded\n\u003c/p\u003e",
        "fct-module": "Network.Pcap",
        "fct-package": "pcap",
        "fct-signature": "DLT_IEEE802_15_4_LINUX",
        "fct-source": "src/Network-Pcap-Base.html#Link",
        "fct-type": "function",
        "title": "DLT_IEEE802_15_4_LINUX"
      },
      "index": {
        "description": "IEEE with address fields padded",
        "hierarchy": "Network Pcap",
        "module": "Network.Pcap",
        "name": "DLT_IEEE802_15_4_LINUX",
        "normalized": "",
        "package": "pcap",
        "partial": "DLT IEEE LINUX",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:DLT_IEEE802_16_MAC_CPS",
      "description": {
        "fct-descr": "\u003cp\u003eIEEE 802.16 MAC Common Part Sublayer\n\u003c/p\u003e",
        "fct-module": "Network.Pcap",
        "fct-package": "pcap",
        "fct-signature": "DLT_IEEE802_16_MAC_CPS",
        "fct-source": "src/Network-Pcap-Base.html#Link",
        "fct-type": "function",
        "title": "DLT_IEEE802_16_MAC_CPS"
      },
      "index": {
        "description": "IEEE MAC Common Part Sublayer",
        "hierarchy": "Network Pcap",
        "module": "Network.Pcap",
        "name": "DLT_IEEE802_16_MAC_CPS",
        "normalized": "",
        "package": "pcap",
        "partial": "DLT IEEE MAC CPS",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:DLT_IEEE802_16_MAC_CPS_RADIO",
      "description": {
        "fct-descr": "\u003col\u003e\u003cli\u003e16 MAC Common Part Sublayer with radiotap radio header\n\u003c/li\u003e\u003c/ol\u003e",
        "fct-module": "Network.Pcap",
        "fct-package": "pcap",
        "fct-signature": "DLT_IEEE802_16_MAC_CPS_RADIO",
        "fct-source": "src/Network-Pcap-Base.html#Link",
        "fct-type": "function",
        "title": "DLT_IEEE802_16_MAC_CPS_RADIO"
      },
      "index": {
        "description": "MAC Common Part Sublayer with radiotap radio header",
        "hierarchy": "Network Pcap",
        "module": "Network.Pcap",
        "name": "DLT_IEEE802_16_MAC_CPS_RADIO",
        "normalized": "",
        "package": "pcap",
        "partial": "DLT IEEE MAC CPS RADIO",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:DLT_IPFILTER",
      "description": {
        "fct-descr": "\u003cp\u003eOpenBSD's old ipfilter\n\u003c/p\u003e",
        "fct-module": "Network.Pcap",
        "fct-package": "pcap",
        "fct-signature": "DLT_IPFILTER",
        "fct-source": "src/Network-Pcap-Base.html#Link",
        "fct-type": "function",
        "title": "DLT_IPFILTER"
      },
      "index": {
        "description": "OpenBSD old ipfilter",
        "hierarchy": "Network Pcap",
        "module": "Network.Pcap",
        "name": "DLT_IPFILTER",
        "normalized": "",
        "package": "pcap",
        "partial": "DLT IPFILTER",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:DLT_IP_OVER_FC",
      "description": {
        "fct-descr": "\u003cp\u003eRFC 2625 IP-over-Fibre Channel\n\u003c/p\u003e",
        "fct-module": "Network.Pcap",
        "fct-package": "pcap",
        "fct-signature": "DLT_IP_OVER_FC",
        "fct-source": "src/Network-Pcap-Base.html#Link",
        "fct-type": "function",
        "title": "DLT_IP_OVER_FC"
      },
      "index": {
        "description": "RFC IP-over-Fibre Channel",
        "hierarchy": "Network Pcap",
        "module": "Network.Pcap",
        "name": "DLT_IP_OVER_FC",
        "normalized": "",
        "package": "pcap",
        "partial": "DLT IP OVER FC",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:DLT_LINUX_IRDA",
      "description": {
        "fct-descr": "\u003cp\u003eLinux IrDA packet\n\u003c/p\u003e",
        "fct-module": "Network.Pcap",
        "fct-package": "pcap",
        "fct-signature": "DLT_LINUX_IRDA",
        "fct-source": "src/Network-Pcap-Base.html#Link",
        "fct-type": "function",
        "title": "DLT_LINUX_IRDA"
      },
      "index": {
        "description": "Linux IrDA packet",
        "hierarchy": "Network Pcap",
        "module": "Network.Pcap",
        "name": "DLT_LINUX_IRDA",
        "normalized": "",
        "package": "pcap",
        "partial": "DLT LINUX IRDA",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:DLT_LINUX_LAPD",
      "description": {
        "fct-descr": "\u003cp\u003eRaw LAPD for vISDN (\u003cem\u003enot\u003c/em\u003e generic LAPD)\n\u003c/p\u003e",
        "fct-module": "Network.Pcap",
        "fct-package": "pcap",
        "fct-signature": "DLT_LINUX_LAPD",
        "fct-source": "src/Network-Pcap-Base.html#Link",
        "fct-type": "function",
        "title": "DLT_LINUX_LAPD"
      },
      "index": {
        "description": "Raw LAPD for vISDN not generic LAPD",
        "hierarchy": "Network Pcap",
        "module": "Network.Pcap",
        "name": "DLT_LINUX_LAPD",
        "normalized": "",
        "package": "pcap",
        "partial": "DLT LINUX LAPD",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:DLT_LINUX_SLL",
      "description": {
        "fct-descr": "\u003cp\u003eLinux cooked sockets\n\u003c/p\u003e",
        "fct-module": "Network.Pcap",
        "fct-package": "pcap",
        "fct-signature": "DLT_LINUX_SLL",
        "fct-source": "src/Network-Pcap-Base.html#Link",
        "fct-type": "function",
        "title": "DLT_LINUX_SLL"
      },
      "index": {
        "description": "Linux cooked sockets",
        "hierarchy": "Network Pcap",
        "module": "Network.Pcap",
        "name": "DLT_LINUX_SLL",
        "normalized": "",
        "package": "pcap",
        "partial": "DLT LINUX SLL",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:DLT_LOOP",
      "description": {
        "fct-descr": "\u003cp\u003eOpenBSD loopback device\n\u003c/p\u003e",
        "fct-module": "Network.Pcap",
        "fct-package": "pcap",
        "fct-signature": "DLT_LOOP",
        "fct-source": "src/Network-Pcap-Base.html#Link",
        "fct-type": "function",
        "title": "DLT_LOOP"
      },
      "index": {
        "description": "OpenBSD loopback device",
        "hierarchy": "Network Pcap",
        "module": "Network.Pcap",
        "name": "DLT_LOOP",
        "normalized": "",
        "package": "pcap",
        "partial": "DLT LOOP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:DLT_LTALK",
      "description": {
        "fct-descr": "\u003cp\u003eApple LocalTalk\n\u003c/p\u003e",
        "fct-module": "Network.Pcap",
        "fct-package": "pcap",
        "fct-signature": "DLT_LTALK",
        "fct-source": "src/Network-Pcap-Base.html#Link",
        "fct-type": "function",
        "title": "DLT_LTALK"
      },
      "index": {
        "description": "Apple LocalTalk",
        "hierarchy": "Network Pcap",
        "module": "Network.Pcap",
        "name": "DLT_LTALK",
        "normalized": "",
        "package": "pcap",
        "partial": "DLT LTALK",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:DLT_MFR",
      "description": {
        "fct-descr": "\u003cp\u003eMulti Link Frame Relay (FRF.16)\n\u003c/p\u003e",
        "fct-module": "Network.Pcap",
        "fct-package": "pcap",
        "fct-signature": "DLT_MFR",
        "fct-source": "src/Network-Pcap-Base.html#Link",
        "fct-type": "function",
        "title": "DLT_MFR"
      },
      "index": {
        "description": "Multi Link Frame Relay FRF.16",
        "hierarchy": "Network Pcap",
        "module": "Network.Pcap",
        "name": "DLT_MFR",
        "normalized": "",
        "package": "pcap",
        "partial": "DLT MFR",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:DLT_MTP2",
      "description": {
        "fct-descr": "\u003cp\u003eSS7, C7 Message Transfer Part 2 (MPT2)\n\u003c/p\u003e",
        "fct-module": "Network.Pcap",
        "fct-package": "pcap",
        "fct-signature": "DLT_MTP2",
        "fct-source": "src/Network-Pcap-Base.html#Link",
        "fct-type": "function",
        "title": "DLT_MTP2"
      },
      "index": {
        "description": "SS7 C7 Message Transfer Part MPT2",
        "hierarchy": "Network Pcap",
        "module": "Network.Pcap",
        "name": "DLT_MTP2",
        "normalized": "",
        "package": "pcap",
        "partial": "DLT MTP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:DLT_MTP2_WITH_PHDR",
      "description": {
        "fct-descr": "\u003cp\u003eSS7, C7 MTP2 with pseudo-header\n\u003c/p\u003e",
        "fct-module": "Network.Pcap",
        "fct-package": "pcap",
        "fct-signature": "DLT_MTP2_WITH_PHDR",
        "fct-source": "src/Network-Pcap-Base.html#Link",
        "fct-type": "function",
        "title": "DLT_MTP2_WITH_PHDR"
      },
      "index": {
        "description": "SS7 C7 MTP2 with pseudo-header",
        "hierarchy": "Network Pcap",
        "module": "Network.Pcap",
        "name": "DLT_MTP2_WITH_PHDR",
        "normalized": "",
        "package": "pcap",
        "partial": "DLT MTP WITH PHDR",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:DLT_MTP3",
      "description": {
        "fct-descr": "\u003cp\u003eSS7, C7 Message Transfer Part 3 (MPT3)\n\u003c/p\u003e",
        "fct-module": "Network.Pcap",
        "fct-package": "pcap",
        "fct-signature": "DLT_MTP3",
        "fct-source": "src/Network-Pcap-Base.html#Link",
        "fct-type": "function",
        "title": "DLT_MTP3"
      },
      "index": {
        "description": "SS7 C7 Message Transfer Part MPT3",
        "hierarchy": "Network Pcap",
        "module": "Network.Pcap",
        "name": "DLT_MTP3",
        "normalized": "",
        "package": "pcap",
        "partial": "DLT MTP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:DLT_NULL",
      "description": {
        "fct-descr": "\u003cp\u003eno link layer encapsulation\n\u003c/p\u003e",
        "fct-module": "Network.Pcap",
        "fct-package": "pcap",
        "fct-signature": "DLT_NULL",
        "fct-source": "src/Network-Pcap-Base.html#Link",
        "fct-type": "function",
        "title": "DLT_NULL"
      },
      "index": {
        "description": "no link layer encapsulation",
        "hierarchy": "Network Pcap",
        "module": "Network.Pcap",
        "name": "DLT_NULL",
        "normalized": "",
        "package": "pcap",
        "partial": "DLT NULL",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:DLT_PFLOG",
      "description": {
        "fct-descr": "\u003cp\u003eOpenBSD's pflog\n\u003c/p\u003e",
        "fct-module": "Network.Pcap",
        "fct-package": "pcap",
        "fct-signature": "DLT_PFLOG",
        "fct-source": "src/Network-Pcap-Base.html#Link",
        "fct-type": "function",
        "title": "DLT_PFLOG"
      },
      "index": {
        "description": "OpenBSD pflog",
        "hierarchy": "Network Pcap",
        "module": "Network.Pcap",
        "name": "DLT_PFLOG",
        "normalized": "",
        "package": "pcap",
        "partial": "DLT PFLOG",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:DLT_PFSYNC",
      "description": {
        "fct-module": "Network.Pcap",
        "fct-package": "pcap",
        "fct-signature": "DLT_PFSYNC",
        "fct-source": "src/Network-Pcap-Base.html#Link",
        "fct-type": "function",
        "title": "DLT_PFSYNC"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Pcap",
        "module": "Network.Pcap",
        "name": "DLT_PFSYNC",
        "normalized": "",
        "package": "pcap",
        "partial": "DLT PFSYNC",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:DLT_PPI",
      "description": {
        "fct-descr": "\u003cp\u003ePer Packet Information encapsulated packets\n\u003c/p\u003e",
        "fct-module": "Network.Pcap",
        "fct-package": "pcap",
        "fct-signature": "DLT_PPI",
        "fct-source": "src/Network-Pcap-Base.html#Link",
        "fct-type": "function",
        "title": "DLT_PPI"
      },
      "index": {
        "description": "Per Packet Information encapsulated packets",
        "hierarchy": "Network Pcap",
        "module": "Network.Pcap",
        "name": "DLT_PPI",
        "normalized": "",
        "package": "pcap",
        "partial": "DLT PPI",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:DLT_PPP",
      "description": {
        "fct-descr": "\u003cp\u003ePoint-to-point protocol\n\u003c/p\u003e",
        "fct-module": "Network.Pcap",
        "fct-package": "pcap",
        "fct-signature": "DLT_PPP",
        "fct-source": "src/Network-Pcap-Base.html#Link",
        "fct-type": "function",
        "title": "DLT_PPP"
      },
      "index": {
        "description": "Point-to-point protocol",
        "hierarchy": "Network Pcap",
        "module": "Network.Pcap",
        "name": "DLT_PPP",
        "normalized": "",
        "package": "pcap",
        "partial": "DLT PPP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:DLT_PPP_BSDOS",
      "description": {
        "fct-descr": "\u003cp\u003eBSD OS point-to-point protocol\n\u003c/p\u003e",
        "fct-module": "Network.Pcap",
        "fct-package": "pcap",
        "fct-signature": "DLT_PPP_BSDOS",
        "fct-source": "src/Network-Pcap-Base.html#Link",
        "fct-type": "function",
        "title": "DLT_PPP_BSDOS"
      },
      "index": {
        "description": "BSD OS point-to-point protocol",
        "hierarchy": "Network Pcap",
        "module": "Network.Pcap",
        "name": "DLT_PPP_BSDOS",
        "normalized": "",
        "package": "pcap",
        "partial": "DLT PPP BSDOS",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:DLT_PPP_ETHER",
      "description": {
        "fct-descr": "\u003cp\u003ePPP over ethernet\n\u003c/p\u003e",
        "fct-module": "Network.Pcap",
        "fct-package": "pcap",
        "fct-signature": "DLT_PPP_ETHER",
        "fct-source": "src/Network-Pcap-Base.html#Link",
        "fct-type": "function",
        "title": "DLT_PPP_ETHER"
      },
      "index": {
        "description": "PPP over ethernet",
        "hierarchy": "Network Pcap",
        "module": "Network.Pcap",
        "name": "DLT_PPP_ETHER",
        "normalized": "",
        "package": "pcap",
        "partial": "DLT PPP ETHER",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:DLT_PPP_PPPD",
      "description": {
        "fct-descr": "\u003cp\u003eOutgoing packets for ppp daemon\n\u003c/p\u003e",
        "fct-module": "Network.Pcap",
        "fct-package": "pcap",
        "fct-signature": "DLT_PPP_PPPD",
        "fct-source": "src/Network-Pcap-Base.html#Link",
        "fct-type": "function",
        "title": "DLT_PPP_PPPD"
      },
      "index": {
        "description": "Outgoing packets for ppp daemon",
        "hierarchy": "Network Pcap",
        "module": "Network.Pcap",
        "name": "DLT_PPP_PPPD",
        "normalized": "",
        "package": "pcap",
        "partial": "DLT PPP PPPD",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:DLT_PPP_SERIAL",
      "description": {
        "fct-descr": "\u003cp\u003ePPP over serial with HDLC encapsulation\n\u003c/p\u003e",
        "fct-module": "Network.Pcap",
        "fct-package": "pcap",
        "fct-signature": "DLT_PPP_SERIAL",
        "fct-source": "src/Network-Pcap-Base.html#Link",
        "fct-type": "function",
        "title": "DLT_PPP_SERIAL"
      },
      "index": {
        "description": "PPP over serial with HDLC encapsulation",
        "hierarchy": "Network Pcap",
        "module": "Network.Pcap",
        "name": "DLT_PPP_SERIAL",
        "normalized": "",
        "package": "pcap",
        "partial": "DLT PPP SERIAL",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:DLT_PRISM_HEADER",
      "description": {
        "fct-descr": "\u003cp\u003eIntersil Prism II wireless chips\n\u003c/p\u003e",
        "fct-module": "Network.Pcap",
        "fct-package": "pcap",
        "fct-signature": "DLT_PRISM_HEADER",
        "fct-source": "src/Network-Pcap-Base.html#Link",
        "fct-type": "function",
        "title": "DLT_PRISM_HEADER"
      },
      "index": {
        "description": "Intersil Prism II wireless chips",
        "hierarchy": "Network Pcap",
        "module": "Network.Pcap",
        "name": "DLT_PRISM_HEADER",
        "normalized": "",
        "package": "pcap",
        "partial": "DLT PRISM HEADER",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:DLT_PRONET",
      "description": {
        "fct-descr": "\u003cp\u003eProteon ProNET Token Ring\n\u003c/p\u003e",
        "fct-module": "Network.Pcap",
        "fct-package": "pcap",
        "fct-signature": "DLT_PRONET",
        "fct-source": "src/Network-Pcap-Base.html#Link",
        "fct-type": "function",
        "title": "DLT_PRONET"
      },
      "index": {
        "description": "Proteon ProNET Token Ring",
        "hierarchy": "Network Pcap",
        "module": "Network.Pcap",
        "name": "DLT_PRONET",
        "normalized": "",
        "package": "pcap",
        "partial": "DLT PRONET",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:DLT_RAW",
      "description": {
        "fct-descr": "\u003cp\u003eraw IP\n\u003c/p\u003e",
        "fct-module": "Network.Pcap",
        "fct-package": "pcap",
        "fct-signature": "DLT_RAW",
        "fct-source": "src/Network-Pcap-Base.html#Link",
        "fct-type": "function",
        "title": "DLT_RAW"
      },
      "index": {
        "description": "raw IP",
        "hierarchy": "Network Pcap",
        "module": "Network.Pcap",
        "name": "DLT_RAW",
        "normalized": "",
        "package": "pcap",
        "partial": "DLT RAW",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:DLT_REDBACK_SMARTEDGE",
      "description": {
        "fct-descr": "\u003cp\u003eRedback SmartEdge 400/800\n\u003c/p\u003e",
        "fct-module": "Network.Pcap",
        "fct-package": "pcap",
        "fct-signature": "DLT_REDBACK_SMARTEDGE",
        "fct-source": "src/Network-Pcap-Base.html#Link",
        "fct-type": "function",
        "title": "DLT_REDBACK_SMARTEDGE"
      },
      "index": {
        "description": "Redback SmartEdge",
        "hierarchy": "Network Pcap",
        "module": "Network.Pcap",
        "name": "DLT_REDBACK_SMARTEDGE",
        "normalized": "",
        "package": "pcap",
        "partial": "DLT REDBACK SMARTEDGE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:DLT_SCCP",
      "description": {
        "fct-descr": "\u003cp\u003eSS7, C7 SCCP\n\u003c/p\u003e",
        "fct-module": "Network.Pcap",
        "fct-package": "pcap",
        "fct-signature": "DLT_SCCP",
        "fct-source": "src/Network-Pcap-Base.html#Link",
        "fct-type": "function",
        "title": "DLT_SCCP"
      },
      "index": {
        "description": "SS7 C7 SCCP",
        "hierarchy": "Network Pcap",
        "module": "Network.Pcap",
        "name": "DLT_SCCP",
        "normalized": "",
        "package": "pcap",
        "partial": "DLT SCCP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:DLT_SLIP",
      "description": {
        "fct-descr": "\u003cp\u003eSerial line IP\n\u003c/p\u003e",
        "fct-module": "Network.Pcap",
        "fct-package": "pcap",
        "fct-signature": "DLT_SLIP",
        "fct-source": "src/Network-Pcap-Base.html#Link",
        "fct-type": "function",
        "title": "DLT_SLIP"
      },
      "index": {
        "description": "Serial line IP",
        "hierarchy": "Network Pcap",
        "module": "Network.Pcap",
        "name": "DLT_SLIP",
        "normalized": "",
        "package": "pcap",
        "partial": "DLT SLIP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:DLT_SLIP_BSDOS",
      "description": {
        "fct-descr": "\u003cp\u003eBSD OS serial line IP\n\u003c/p\u003e",
        "fct-module": "Network.Pcap",
        "fct-package": "pcap",
        "fct-signature": "DLT_SLIP_BSDOS",
        "fct-source": "src/Network-Pcap-Base.html#Link",
        "fct-type": "function",
        "title": "DLT_SLIP_BSDOS"
      },
      "index": {
        "description": "BSD OS serial line IP",
        "hierarchy": "Network Pcap",
        "module": "Network.Pcap",
        "name": "DLT_SLIP_BSDOS",
        "normalized": "",
        "package": "pcap",
        "partial": "DLT SLIP BSDOS",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:DLT_SUNATM",
      "description": {
        "fct-descr": "\u003cp\u003eFull Frontal ATM on Solaris with SunATM\n\u003c/p\u003e",
        "fct-module": "Network.Pcap",
        "fct-package": "pcap",
        "fct-signature": "DLT_SUNATM",
        "fct-source": "src/Network-Pcap-Base.html#Link",
        "fct-type": "function",
        "title": "DLT_SUNATM"
      },
      "index": {
        "description": "Full Frontal ATM on Solaris with SunATM",
        "hierarchy": "Network Pcap",
        "module": "Network.Pcap",
        "name": "DLT_SUNATM",
        "normalized": "",
        "package": "pcap",
        "partial": "DLT SUNATM",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:DLT_SYMANTEC_FIREWALL",
      "description": {
        "fct-descr": "\u003cp\u003eSymantec Enterprise Firewall\n\u003c/p\u003e",
        "fct-module": "Network.Pcap",
        "fct-package": "pcap",
        "fct-signature": "DLT_SYMANTEC_FIREWALL",
        "fct-source": "src/Network-Pcap-Base.html#Link",
        "fct-type": "function",
        "title": "DLT_SYMANTEC_FIREWALL"
      },
      "index": {
        "description": "Symantec Enterprise Firewall",
        "hierarchy": "Network Pcap",
        "module": "Network.Pcap",
        "name": "DLT_SYMANTEC_FIREWALL",
        "normalized": "",
        "package": "pcap",
        "partial": "DLT SYMANTEC FIREWALL",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:DLT_UNKNOWN",
      "description": {
        "fct-descr": "\u003cp\u003eunknown encapsulation\n\u003c/p\u003e",
        "fct-module": "Network.Pcap",
        "fct-package": "pcap",
        "fct-signature": "DLT_UNKNOWN Int",
        "fct-source": "src/Network-Pcap-Base.html#Link",
        "fct-type": "function",
        "title": "DLT_UNKNOWN"
      },
      "index": {
        "description": "unknown encapsulation",
        "hierarchy": "Network Pcap",
        "module": "Network.Pcap",
        "name": "DLT_UNKNOWN",
        "normalized": "",
        "package": "pcap",
        "partial": "DLT UNKNOWN",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:DLT_USB",
      "description": {
        "fct-descr": "\u003cp\u003eUSB packet\n\u003c/p\u003e",
        "fct-module": "Network.Pcap",
        "fct-package": "pcap",
        "fct-signature": "DLT_USB",
        "fct-source": "src/Network-Pcap-Base.html#Link",
        "fct-type": "function",
        "title": "DLT_USB"
      },
      "index": {
        "description": "USB packet",
        "hierarchy": "Network Pcap",
        "module": "Network.Pcap",
        "name": "DLT_USB",
        "normalized": "",
        "package": "pcap",
        "partial": "DLT USB",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:DLT_USB_LINUX",
      "description": {
        "fct-descr": "\u003cp\u003eUSB packets, beginning with a Linux USB header\n\u003c/p\u003e",
        "fct-module": "Network.Pcap",
        "fct-package": "pcap",
        "fct-signature": "DLT_USB_LINUX",
        "fct-source": "src/Network-Pcap-Base.html#Link",
        "fct-type": "function",
        "title": "DLT_USB_LINUX"
      },
      "index": {
        "description": "USB packets beginning with Linux USB header",
        "hierarchy": "Network Pcap",
        "module": "Network.Pcap",
        "name": "DLT_USB_LINUX",
        "normalized": "",
        "package": "pcap",
        "partial": "DLT USB LINUX",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:DLT_USER0",
      "description": {
        "fct-descr": "\u003cp\u003eReserved for private use\n\u003c/p\u003e",
        "fct-module": "Network.Pcap",
        "fct-package": "pcap",
        "fct-signature": "DLT_USER0",
        "fct-source": "src/Network-Pcap-Base.html#Link",
        "fct-type": "function",
        "title": "DLT_USER0"
      },
      "index": {
        "description": "Reserved for private use",
        "hierarchy": "Network Pcap",
        "module": "Network.Pcap",
        "name": "DLT_USER0",
        "normalized": "",
        "package": "pcap",
        "partial": "DLT USER",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:DLT_USER1",
      "description": {
        "fct-descr": "\u003cp\u003eReserved for private use\n\u003c/p\u003e",
        "fct-module": "Network.Pcap",
        "fct-package": "pcap",
        "fct-signature": "DLT_USER1",
        "fct-source": "src/Network-Pcap-Base.html#Link",
        "fct-type": "function",
        "title": "DLT_USER1"
      },
      "index": {
        "description": "Reserved for private use",
        "hierarchy": "Network Pcap",
        "module": "Network.Pcap",
        "name": "DLT_USER1",
        "normalized": "",
        "package": "pcap",
        "partial": "DLT USER",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:DLT_USER10",
      "description": {
        "fct-descr": "\u003cp\u003eReserved for private use\n\u003c/p\u003e",
        "fct-module": "Network.Pcap",
        "fct-package": "pcap",
        "fct-signature": "DLT_USER10",
        "fct-source": "src/Network-Pcap-Base.html#Link",
        "fct-type": "function",
        "title": "DLT_USER10"
      },
      "index": {
        "description": "Reserved for private use",
        "hierarchy": "Network Pcap",
        "module": "Network.Pcap",
        "name": "DLT_USER10",
        "normalized": "",
        "package": "pcap",
        "partial": "DLT USER",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:DLT_USER11",
      "description": {
        "fct-descr": "\u003cp\u003eReserved for private use\n\u003c/p\u003e",
        "fct-module": "Network.Pcap",
        "fct-package": "pcap",
        "fct-signature": "DLT_USER11",
        "fct-source": "src/Network-Pcap-Base.html#Link",
        "fct-type": "function",
        "title": "DLT_USER11"
      },
      "index": {
        "description": "Reserved for private use",
        "hierarchy": "Network Pcap",
        "module": "Network.Pcap",
        "name": "DLT_USER11",
        "normalized": "",
        "package": "pcap",
        "partial": "DLT USER",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:DLT_USER12",
      "description": {
        "fct-descr": "\u003cp\u003eReserved for private use\n\u003c/p\u003e",
        "fct-module": "Network.Pcap",
        "fct-package": "pcap",
        "fct-signature": "DLT_USER12",
        "fct-source": "src/Network-Pcap-Base.html#Link",
        "fct-type": "function",
        "title": "DLT_USER12"
      },
      "index": {
        "description": "Reserved for private use",
        "hierarchy": "Network Pcap",
        "module": "Network.Pcap",
        "name": "DLT_USER12",
        "normalized": "",
        "package": "pcap",
        "partial": "DLT USER",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:DLT_USER13",
      "description": {
        "fct-descr": "\u003cp\u003eReserved for private use\n\u003c/p\u003e",
        "fct-module": "Network.Pcap",
        "fct-package": "pcap",
        "fct-signature": "DLT_USER13",
        "fct-source": "src/Network-Pcap-Base.html#Link",
        "fct-type": "function",
        "title": "DLT_USER13"
      },
      "index": {
        "description": "Reserved for private use",
        "hierarchy": "Network Pcap",
        "module": "Network.Pcap",
        "name": "DLT_USER13",
        "normalized": "",
        "package": "pcap",
        "partial": "DLT USER",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:DLT_USER14",
      "description": {
        "fct-descr": "\u003cp\u003eReserved for private use\n\u003c/p\u003e",
        "fct-module": "Network.Pcap",
        "fct-package": "pcap",
        "fct-signature": "DLT_USER14",
        "fct-source": "src/Network-Pcap-Base.html#Link",
        "fct-type": "function",
        "title": "DLT_USER14"
      },
      "index": {
        "description": "Reserved for private use",
        "hierarchy": "Network Pcap",
        "module": "Network.Pcap",
        "name": "DLT_USER14",
        "normalized": "",
        "package": "pcap",
        "partial": "DLT USER",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:DLT_USER15",
      "description": {
        "fct-descr": "\u003cp\u003eReserved for private use\n\u003c/p\u003e",
        "fct-module": "Network.Pcap",
        "fct-package": "pcap",
        "fct-signature": "DLT_USER15",
        "fct-source": "src/Network-Pcap-Base.html#Link",
        "fct-type": "function",
        "title": "DLT_USER15"
      },
      "index": {
        "description": "Reserved for private use",
        "hierarchy": "Network Pcap",
        "module": "Network.Pcap",
        "name": "DLT_USER15",
        "normalized": "",
        "package": "pcap",
        "partial": "DLT USER",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:DLT_USER2",
      "description": {
        "fct-descr": "\u003cp\u003eReserved for private use\n\u003c/p\u003e",
        "fct-module": "Network.Pcap",
        "fct-package": "pcap",
        "fct-signature": "DLT_USER2",
        "fct-source": "src/Network-Pcap-Base.html#Link",
        "fct-type": "function",
        "title": "DLT_USER2"
      },
      "index": {
        "description": "Reserved for private use",
        "hierarchy": "Network Pcap",
        "module": "Network.Pcap",
        "name": "DLT_USER2",
        "normalized": "",
        "package": "pcap",
        "partial": "DLT USER",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:DLT_USER3",
      "description": {
        "fct-descr": "\u003cp\u003eReserved for private use\n\u003c/p\u003e",
        "fct-module": "Network.Pcap",
        "fct-package": "pcap",
        "fct-signature": "DLT_USER3",
        "fct-source": "src/Network-Pcap-Base.html#Link",
        "fct-type": "function",
        "title": "DLT_USER3"
      },
      "index": {
        "description": "Reserved for private use",
        "hierarchy": "Network Pcap",
        "module": "Network.Pcap",
        "name": "DLT_USER3",
        "normalized": "",
        "package": "pcap",
        "partial": "DLT USER",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:DLT_USER4",
      "description": {
        "fct-descr": "\u003cp\u003eReserved for private use\n\u003c/p\u003e",
        "fct-module": "Network.Pcap",
        "fct-package": "pcap",
        "fct-signature": "DLT_USER4",
        "fct-source": "src/Network-Pcap-Base.html#Link",
        "fct-type": "function",
        "title": "DLT_USER4"
      },
      "index": {
        "description": "Reserved for private use",
        "hierarchy": "Network Pcap",
        "module": "Network.Pcap",
        "name": "DLT_USER4",
        "normalized": "",
        "package": "pcap",
        "partial": "DLT USER",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:DLT_USER5",
      "description": {
        "fct-descr": "\u003cp\u003eReserved for private use\n\u003c/p\u003e",
        "fct-module": "Network.Pcap",
        "fct-package": "pcap",
        "fct-signature": "DLT_USER5",
        "fct-source": "src/Network-Pcap-Base.html#Link",
        "fct-type": "function",
        "title": "DLT_USER5"
      },
      "index": {
        "description": "Reserved for private use",
        "hierarchy": "Network Pcap",
        "module": "Network.Pcap",
        "name": "DLT_USER5",
        "normalized": "",
        "package": "pcap",
        "partial": "DLT USER",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:DLT_USER6",
      "description": {
        "fct-descr": "\u003cp\u003eReserved for private use\n\u003c/p\u003e",
        "fct-module": "Network.Pcap",
        "fct-package": "pcap",
        "fct-signature": "DLT_USER6",
        "fct-source": "src/Network-Pcap-Base.html#Link",
        "fct-type": "function",
        "title": "DLT_USER6"
      },
      "index": {
        "description": "Reserved for private use",
        "hierarchy": "Network Pcap",
        "module": "Network.Pcap",
        "name": "DLT_USER6",
        "normalized": "",
        "package": "pcap",
        "partial": "DLT USER",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:DLT_USER7",
      "description": {
        "fct-descr": "\u003cp\u003eReserved for private use\n\u003c/p\u003e",
        "fct-module": "Network.Pcap",
        "fct-package": "pcap",
        "fct-signature": "DLT_USER7",
        "fct-source": "src/Network-Pcap-Base.html#Link",
        "fct-type": "function",
        "title": "DLT_USER7"
      },
      "index": {
        "description": "Reserved for private use",
        "hierarchy": "Network Pcap",
        "module": "Network.Pcap",
        "name": "DLT_USER7",
        "normalized": "",
        "package": "pcap",
        "partial": "DLT USER",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:DLT_USER8",
      "description": {
        "fct-descr": "\u003cp\u003eReserved for private use\n\u003c/p\u003e",
        "fct-module": "Network.Pcap",
        "fct-package": "pcap",
        "fct-signature": "DLT_USER8",
        "fct-source": "src/Network-Pcap-Base.html#Link",
        "fct-type": "function",
        "title": "DLT_USER8"
      },
      "index": {
        "description": "Reserved for private use",
        "hierarchy": "Network Pcap",
        "module": "Network.Pcap",
        "name": "DLT_USER8",
        "normalized": "",
        "package": "pcap",
        "partial": "DLT USER",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:DLT_USER9",
      "description": {
        "fct-descr": "\u003cp\u003eReserved for private use\n\u003c/p\u003e",
        "fct-module": "Network.Pcap",
        "fct-package": "pcap",
        "fct-signature": "DLT_USER9",
        "fct-source": "src/Network-Pcap-Base.html#Link",
        "fct-type": "function",
        "title": "DLT_USER9"
      },
      "index": {
        "description": "Reserved for private use",
        "hierarchy": "Network Pcap",
        "module": "Network.Pcap",
        "name": "DLT_USER9",
        "normalized": "",
        "package": "pcap",
        "partial": "DLT USER",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:In",
      "description": {
        "fct-descr": "\u003cp\u003eincoming packets\n\u003c/p\u003e",
        "fct-module": "Network.Pcap",
        "fct-package": "pcap",
        "fct-signature": "In",
        "fct-source": "src/Network-Pcap-Base.html#Direction",
        "fct-type": "function",
        "title": "In"
      },
      "index": {
        "description": "incoming packets",
        "hierarchy": "Network Pcap",
        "module": "Network.Pcap",
        "name": "In",
        "normalized": "",
        "package": "pcap",
        "partial": "In",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:InOut",
      "description": {
        "fct-descr": "\u003cp\u003eincoming and outgoing packets (the default)\n\u003c/p\u003e",
        "fct-module": "Network.Pcap",
        "fct-package": "pcap",
        "fct-signature": "InOut",
        "fct-source": "src/Network-Pcap-Base.html#Direction",
        "fct-type": "function",
        "title": "InOut"
      },
      "index": {
        "description": "incoming and outgoing packets the default",
        "hierarchy": "Network Pcap",
        "module": "Network.Pcap",
        "name": "InOut",
        "normalized": "",
        "package": "pcap",
        "partial": "In Out",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:Interface",
      "description": {
        "fct-module": "Network.Pcap",
        "fct-package": "pcap",
        "fct-signature": "Interface",
        "fct-source": "src/Network-Pcap-Base.html#Interface",
        "fct-type": "function",
        "title": "Interface"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Pcap",
        "module": "Network.Pcap",
        "name": "Interface",
        "normalized": "",
        "package": "pcap",
        "partial": "Interface",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:Network",
      "description": {
        "fct-module": "Network.Pcap",
        "fct-package": "pcap",
        "fct-signature": "Network",
        "fct-source": "src/Network-Pcap-Base.html#Network",
        "fct-type": "function",
        "title": "Network"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Pcap",
        "module": "Network.Pcap",
        "name": "Network",
        "normalized": "",
        "package": "pcap",
        "partial": "Network",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:Out",
      "description": {
        "fct-descr": "\u003cp\u003eoutgoing packets\n\u003c/p\u003e",
        "fct-module": "Network.Pcap",
        "fct-package": "pcap",
        "fct-signature": "Out",
        "fct-source": "src/Network-Pcap-Base.html#Direction",
        "fct-type": "function",
        "title": "Out"
      },
      "index": {
        "description": "outgoing packets",
        "hierarchy": "Network Pcap",
        "module": "Network.Pcap",
        "name": "Out",
        "normalized": "",
        "package": "pcap",
        "partial": "Out",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:PcapAddr",
      "description": {
        "fct-module": "Network.Pcap",
        "fct-package": "pcap",
        "fct-signature": "PcapAddr",
        "fct-source": "src/Network-Pcap-Base.html#PcapAddr",
        "fct-type": "function",
        "title": "PcapAddr"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Pcap",
        "module": "Network.Pcap",
        "name": "PcapAddr",
        "normalized": "",
        "package": "pcap",
        "partial": "Pcap Addr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:PktHdr",
      "description": {
        "fct-module": "Network.Pcap",
        "fct-package": "pcap",
        "fct-signature": "PktHdr",
        "fct-source": "src/Network-Pcap-Base.html#PktHdr",
        "fct-type": "function",
        "title": "PktHdr"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Pcap",
        "module": "Network.Pcap",
        "name": "PktHdr",
        "normalized": "",
        "package": "pcap",
        "partial": "Pkt Hdr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:SockAddr",
      "description": {
        "fct-module": "Network.Pcap",
        "fct-package": "pcap",
        "fct-signature": "SockAddr",
        "fct-source": "src/Network-Pcap-Base.html#SockAddr",
        "fct-type": "function",
        "title": "SockAddr"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Pcap",
        "module": "Network.Pcap",
        "name": "SockAddr",
        "normalized": "",
        "package": "pcap",
        "partial": "Sock Addr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:Statistics",
      "description": {
        "fct-module": "Network.Pcap",
        "fct-package": "pcap",
        "fct-signature": "Statistics",
        "fct-source": "src/Network-Pcap-Base.html#Statistics",
        "fct-type": "function",
        "title": "Statistics"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Pcap",
        "module": "Network.Pcap",
        "name": "Statistics",
        "normalized": "",
        "package": "pcap",
        "partial": "Statistics",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:addrBcast",
      "description": {
        "fct-descr": "\u003cp\u003ebroadcast address\n\u003c/p\u003e",
        "fct-module": "Network.Pcap",
        "fct-package": "pcap",
        "fct-signature": "Maybe SockAddr",
        "fct-source": "src/Network-Pcap-Base.html#PcapAddr",
        "fct-type": "function",
        "title": "addrBcast"
      },
      "index": {
        "description": "broadcast address",
        "hierarchy": "Network Pcap",
        "module": "Network.Pcap",
        "name": "addrBcast",
        "normalized": "",
        "package": "pcap",
        "partial": "Bcast",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:addrMask",
      "description": {
        "fct-descr": "\u003cp\u003enetwork mask\n\u003c/p\u003e",
        "fct-module": "Network.Pcap",
        "fct-package": "pcap",
        "fct-signature": "Maybe SockAddr",
        "fct-source": "src/Network-Pcap-Base.html#PcapAddr",
        "fct-type": "function",
        "title": "addrMask"
      },
      "index": {
        "description": "network mask",
        "hierarchy": "Network Pcap",
        "module": "Network.Pcap",
        "name": "addrMask",
        "normalized": "",
        "package": "pcap",
        "partial": "Mask",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:addrPeer",
      "description": {
        "fct-descr": "\u003cp\u003eaddress of peer, of a point-to-point link\n\u003c/p\u003e",
        "fct-module": "Network.Pcap",
        "fct-package": "pcap",
        "fct-signature": "Maybe SockAddr",
        "fct-source": "src/Network-Pcap-Base.html#PcapAddr",
        "fct-type": "function",
        "title": "addrPeer"
      },
      "index": {
        "description": "address of peer of point-to-point link",
        "hierarchy": "Network Pcap",
        "module": "Network.Pcap",
        "name": "addrPeer",
        "normalized": "",
        "package": "pcap",
        "partial": "Peer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:addrSA",
      "description": {
        "fct-descr": "\u003cp\u003einterface address\n\u003c/p\u003e",
        "fct-module": "Network.Pcap",
        "fct-package": "pcap",
        "fct-signature": "SockAddr",
        "fct-source": "src/Network-Pcap-Base.html#PcapAddr",
        "fct-type": "function",
        "title": "addrSA"
      },
      "index": {
        "description": "interface address",
        "hierarchy": "Network Pcap",
        "module": "Network.Pcap",
        "name": "addrSA",
        "normalized": "",
        "package": "pcap",
        "partial": "SA",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:compileFilter",
      "description": {
        "fct-descr": "\u003cp\u003eCompile a filter for use by another program using the Berkeley\n Packet Filter library.\n\u003c/p\u003e",
        "fct-module": "Network.Pcap",
        "fct-package": "pcap",
        "fct-signature": "Int-\u003e Link-\u003e String-\u003e Bool-\u003e Word32-\u003e IO BpfProgram",
        "fct-type": "function",
        "title": "compileFilter"
      },
      "index": {
        "description": "Compile filter for use by another program using the Berkeley Packet Filter library",
        "hierarchy": "Network Pcap",
        "module": "Network.Pcap",
        "name": "compileFilter",
        "normalized": "Int-\u003eLink-\u003eString-\u003eBool-\u003eWord-\u003eIO BpfProgram",
        "package": "pcap",
        "partial": "Filter",
        "signature": "Int-\u003eLink-\u003eString-\u003eBool-\u003eWord-\u003eIO BpfProgram"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:datalink",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the datalink type associated with the given handle.\n\u003c/p\u003e",
        "fct-module": "Network.Pcap",
        "fct-package": "pcap",
        "fct-signature": "PcapHandle -\u003e IO Link",
        "fct-source": "src/Network-Pcap.html#datalink",
        "fct-type": "function",
        "title": "datalink"
      },
      "index": {
        "description": "Returns the datalink type associated with the given handle",
        "hierarchy": "Network Pcap",
        "module": "Network.Pcap",
        "name": "datalink",
        "normalized": "PcapHandle-\u003eIO Link",
        "package": "pcap",
        "partial": "",
        "signature": "PcapHandle-\u003eIO Link"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:dispatch",
      "description": {
        "fct-descr": "\u003cp\u003eCollect and process packets.\n\u003c/p\u003e\u003cp\u003eThe count is the maximum number of packets to process before\n returning.  A count of -1 means process all of the packets received\n in one buffer (if a live capture) or all of the packets in a dump\n file (if offline).\n\u003c/p\u003e\u003cp\u003eThe callback function is passed two arguments, a packet header\n record and a pointer to the packet data (\u003ccode\u003ePtr Word8\u003c/code\u003e). THe header\n record contains the number of bytes captured, which can be used to\n marshal the data into a list, array, or \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e (using\n \u003ccode\u003e\u003ca\u003etoBS\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Network.Pcap",
        "fct-package": "pcap",
        "fct-signature": "PcapHandle-\u003e Int-\u003e Callback-\u003e IO Int",
        "fct-type": "function",
        "title": "dispatch"
      },
      "index": {
        "description": "Collect and process packets The count is the maximum number of packets to process before returning count of means process all of the packets received in one buffer if live capture or all of the packets in dump file if offline The callback function is passed two arguments packet header record and pointer to the packet data Ptr Word8 THe header record contains the number of bytes captured which can be used to marshal the data into list array or ByteString using toBS",
        "hierarchy": "Network Pcap",
        "module": "Network.Pcap",
        "name": "dispatch",
        "normalized": "PcapHandle-\u003eInt-\u003eCallback-\u003eIO Int",
        "package": "pcap",
        "partial": "",
        "signature": "PcapHandle-\u003eInt-\u003eCallback-\u003eIO Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:dispatchBS",
      "description": {
        "fct-descr": "\u003cp\u003eVariant of \u003ccode\u003e\u003ca\u003edispatch\u003c/a\u003e\u003c/code\u003e for use with \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.Pcap",
        "fct-package": "pcap",
        "fct-signature": "PcapHandle-\u003e Int-\u003e CallbackBS-\u003e IO Int",
        "fct-type": "function",
        "title": "dispatchBS"
      },
      "index": {
        "description": "Variant of dispatch for use with ByteString",
        "hierarchy": "Network Pcap",
        "module": "Network.Pcap",
        "name": "dispatchBS",
        "normalized": "PcapHandle-\u003eInt-\u003eCallbackBS-\u003eIO Int",
        "package": "pcap",
        "partial": "BS",
        "signature": "PcapHandle-\u003eInt-\u003eCallbackBS-\u003eIO Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:dump",
      "description": {
        "fct-descr": "\u003cp\u003eWrite the packet data given by the second and third arguments to\n a dump file opened by \u003ccode\u003e\u003ca\u003eopenDead\u003c/a\u003e\u003c/code\u003e. \u003ccode\u003e\u003ca\u003edump\u003c/a\u003e\u003c/code\u003e is designed so it can be\n easily used as a default callback function by \u003ccode\u003e\u003ca\u003edispatch\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eloop\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.Pcap",
        "fct-package": "pcap",
        "fct-signature": "DumpHandle-\u003e Ptr PktHdr-\u003e Ptr Word8-\u003e IO ()",
        "fct-type": "function",
        "title": "dump"
      },
      "index": {
        "description": "Write the packet data given by the second and third arguments to dump file opened by openDead dump is designed so it can be easily used as default callback function by dispatch or loop",
        "hierarchy": "Network Pcap",
        "module": "Network.Pcap",
        "name": "dump",
        "normalized": "DumpHandle-\u003ePtr PktHdr-\u003ePtr Word-\u003eIO()",
        "package": "pcap",
        "partial": "",
        "signature": "DumpHandle-\u003ePtr PktHdr-\u003ePtr Word-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:dumpBS",
      "description": {
        "fct-module": "Network.Pcap",
        "fct-package": "pcap",
        "fct-signature": "DumpHandle-\u003e Ptr PktHdr-\u003e ByteString-\u003e IO ()",
        "fct-type": "function",
        "title": "dumpBS"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Pcap",
        "module": "Network.Pcap",
        "name": "dumpBS",
        "normalized": "DumpHandle-\u003ePtr PktHdr-\u003eByteString-\u003eIO()",
        "package": "pcap",
        "partial": "BS",
        "signature": "DumpHandle-\u003ePtr PktHdr-\u003eByteString-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:findAllDevs",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003efindAllDevs\u003c/a\u003e\u003c/code\u003e returns a list of all the network devices that can\n be opened by \u003ccode\u003e\u003ca\u003eopenLive\u003c/a\u003e\u003c/code\u003e. It returns only those devices that the\n calling process has sufficient privileges to open, so it may not\n find every device on the system.\n\u003c/p\u003e",
        "fct-module": "Network.Pcap",
        "fct-package": "pcap",
        "fct-signature": "IO [Interface]",
        "fct-source": "src/Network-Pcap-Base.html#findAllDevs",
        "fct-type": "function",
        "title": "findAllDevs"
      },
      "index": {
        "description": "findAllDevs returns list of all the network devices that can be opened by openLive It returns only those devices that the calling process has sufficient privileges to open so it may not find every device on the system",
        "hierarchy": "Network Pcap",
        "module": "Network.Pcap",
        "name": "findAllDevs",
        "normalized": "IO[Interface]",
        "package": "pcap",
        "partial": "All Devs",
        "signature": "IO[Interface]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:getNonBlock",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the blocking status of the \u003ccode\u003e\u003ca\u003ePcapHandle\u003c/a\u003e\u003c/code\u003e. \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e indicates\n that the handle is non-blocking. Handles referring to dump files\n opened by \u003ccode\u003e\u003ca\u003eopenDump\u003c/a\u003e\u003c/code\u003e always return \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.Pcap",
        "fct-package": "pcap",
        "fct-signature": "PcapHandle -\u003e IO Bool",
        "fct-source": "src/Network-Pcap.html#getNonBlock",
        "fct-type": "function",
        "title": "getNonBlock"
      },
      "index": {
        "description": "Return the blocking status of the PcapHandle True indicates that the handle is non-blocking Handles referring to dump files opened by openDump always return False",
        "hierarchy": "Network Pcap",
        "module": "Network.Pcap",
        "name": "getNonBlock",
        "normalized": "PcapHandle-\u003eIO Bool",
        "package": "pcap",
        "partial": "Non Block",
        "signature": "PcapHandle-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:hdrCaptureLength",
      "description": {
        "fct-descr": "\u003cp\u003enumber of bytes present in capture\n\u003c/p\u003e",
        "fct-module": "Network.Pcap",
        "fct-package": "pcap",
        "fct-signature": "!Word32",
        "fct-source": "src/Network-Pcap-Base.html#PktHdr",
        "fct-type": "function",
        "title": "hdrCaptureLength"
      },
      "index": {
        "description": "number of bytes present in capture",
        "hierarchy": "Network Pcap",
        "module": "Network.Pcap",
        "name": "hdrCaptureLength",
        "normalized": "",
        "package": "pcap",
        "partial": "Capture Length",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:hdrDiffTime",
      "description": {
        "fct-descr": "\u003cp\u003eGet the timestamp of a packet as a \u003ccode\u003e\u003ca\u003eDiffTime\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.Pcap",
        "fct-package": "pcap",
        "fct-signature": "PktHdr -\u003e DiffTime",
        "fct-source": "src/Network-Pcap.html#hdrDiffTime",
        "fct-type": "function",
        "title": "hdrDiffTime"
      },
      "index": {
        "description": "Get the timestamp of packet as DiffTime",
        "hierarchy": "Network Pcap",
        "module": "Network.Pcap",
        "name": "hdrDiffTime",
        "normalized": "PktHdr-\u003eDiffTime",
        "package": "pcap",
        "partial": "Diff Time",
        "signature": "PktHdr-\u003eDiffTime"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:hdrSeconds",
      "description": {
        "fct-descr": "\u003cp\u003etimestamp (seconds)\n\u003c/p\u003e",
        "fct-module": "Network.Pcap",
        "fct-package": "pcap",
        "fct-signature": "!Word32",
        "fct-source": "src/Network-Pcap-Base.html#PktHdr",
        "fct-type": "function",
        "title": "hdrSeconds"
      },
      "index": {
        "description": "timestamp seconds",
        "hierarchy": "Network Pcap",
        "module": "Network.Pcap",
        "name": "hdrSeconds",
        "normalized": "",
        "package": "pcap",
        "partial": "Seconds",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:hdrTime",
      "description": {
        "fct-descr": "\u003cp\u003eGet the timestamp of a packet as a single quantity, in\n microseconds.\n\u003c/p\u003e",
        "fct-module": "Network.Pcap",
        "fct-package": "pcap",
        "fct-signature": "PktHdr -\u003e Int64",
        "fct-source": "src/Network-Pcap.html#hdrTime",
        "fct-type": "function",
        "title": "hdrTime"
      },
      "index": {
        "description": "Get the timestamp of packet as single quantity in microseconds",
        "hierarchy": "Network Pcap",
        "module": "Network.Pcap",
        "name": "hdrTime",
        "normalized": "PktHdr-\u003eInt",
        "package": "pcap",
        "partial": "Time",
        "signature": "PktHdr-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:hdrUseconds",
      "description": {
        "fct-descr": "\u003cp\u003etimestamp (microseconds)\n\u003c/p\u003e",
        "fct-module": "Network.Pcap",
        "fct-package": "pcap",
        "fct-signature": "!Word32",
        "fct-source": "src/Network-Pcap-Base.html#PktHdr",
        "fct-type": "function",
        "title": "hdrUseconds"
      },
      "index": {
        "description": "timestamp microseconds",
        "hierarchy": "Network Pcap",
        "module": "Network.Pcap",
        "name": "hdrUseconds",
        "normalized": "",
        "package": "pcap",
        "partial": "Useconds",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:hdrWireLength",
      "description": {
        "fct-descr": "\u003cp\u003enumber of bytes on the wire\n\u003c/p\u003e",
        "fct-module": "Network.Pcap",
        "fct-package": "pcap",
        "fct-signature": "!Word32",
        "fct-source": "src/Network-Pcap-Base.html#PktHdr",
        "fct-type": "function",
        "title": "hdrWireLength"
      },
      "index": {
        "description": "number of bytes on the wire",
        "hierarchy": "Network Pcap",
        "module": "Network.Pcap",
        "name": "hdrWireLength",
        "normalized": "",
        "package": "pcap",
        "partial": "Wire Length",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:ifAddresses",
      "description": {
        "fct-descr": "\u003cp\u003eaddress families supported by this interface\n\u003c/p\u003e",
        "fct-module": "Network.Pcap",
        "fct-package": "pcap",
        "fct-signature": "[PcapAddr]",
        "fct-source": "src/Network-Pcap-Base.html#Interface",
        "fct-type": "function",
        "title": "ifAddresses"
      },
      "index": {
        "description": "address families supported by this interface",
        "hierarchy": "Network Pcap",
        "module": "Network.Pcap",
        "name": "ifAddresses",
        "normalized": "[PcapAddr]",
        "package": "pcap",
        "partial": "Addresses",
        "signature": "[PcapAddr]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:ifDescription",
      "description": {
        "fct-descr": "\u003cp\u003einterface description string (if any)\n\u003c/p\u003e",
        "fct-module": "Network.Pcap",
        "fct-package": "pcap",
        "fct-signature": "String",
        "fct-source": "src/Network-Pcap-Base.html#Interface",
        "fct-type": "function",
        "title": "ifDescription"
      },
      "index": {
        "description": "interface description string if any",
        "hierarchy": "Network Pcap",
        "module": "Network.Pcap",
        "name": "ifDescription",
        "normalized": "",
        "package": "pcap",
        "partial": "Description",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:ifFlags",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.Pcap",
        "fct-package": "pcap",
        "fct-signature": "Word32",
        "fct-source": "src/Network-Pcap-Base.html#Interface",
        "fct-type": "function",
        "title": "ifFlags"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Pcap",
        "module": "Network.Pcap",
        "name": "ifFlags",
        "normalized": "",
        "package": "pcap",
        "partial": "Flags",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:ifName",
      "description": {
        "fct-descr": "\u003cp\u003ethe interface name\n\u003c/p\u003e",
        "fct-module": "Network.Pcap",
        "fct-package": "pcap",
        "fct-signature": "String",
        "fct-source": "src/Network-Pcap-Base.html#Interface",
        "fct-type": "function",
        "title": "ifName"
      },
      "index": {
        "description": "the interface name",
        "hierarchy": "Network Pcap",
        "module": "Network.Pcap",
        "name": "ifName",
        "normalized": "",
        "package": "pcap",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:isSwapped",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eisSwapped\u003c/a\u003e\u003c/code\u003e returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if the current dump file uses a\n different byte order than the one native to the system.\n\u003c/p\u003e",
        "fct-module": "Network.Pcap",
        "fct-package": "pcap",
        "fct-signature": "PcapHandle -\u003e IO Bool",
        "fct-source": "src/Network-Pcap.html#isSwapped",
        "fct-type": "function",
        "title": "isSwapped"
      },
      "index": {
        "description": "isSwapped returns True if the current dump file uses different byte order than the one native to the system",
        "hierarchy": "Network Pcap",
        "module": "Network.Pcap",
        "name": "isSwapped",
        "normalized": "PcapHandle-\u003eIO Bool",
        "package": "pcap",
        "partial": "Swapped",
        "signature": "PcapHandle-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:listDatalinks",
      "description": {
        "fct-descr": "\u003cp\u003eList all the datalink types supported by the given\n handle. Entries from the resulting list are valid arguments to\n \u003ccode\u003e\u003ca\u003esetDatalink\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.Pcap",
        "fct-package": "pcap",
        "fct-signature": "PcapHandle -\u003e IO [Link]",
        "fct-source": "src/Network-Pcap.html#listDatalinks",
        "fct-type": "function",
        "title": "listDatalinks"
      },
      "index": {
        "description": "List all the datalink types supported by the given handle Entries from the resulting list are valid arguments to setDatalink",
        "hierarchy": "Network Pcap",
        "module": "Network.Pcap",
        "name": "listDatalinks",
        "normalized": "PcapHandle-\u003eIO[Link]",
        "package": "pcap",
        "partial": "Datalinks",
        "signature": "PcapHandle-\u003eIO[Link]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:lookupDev",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003elookupDev\u003c/a\u003e\u003c/code\u003e returns the name of a device suitable for use with\n \u003ccode\u003e\u003ca\u003eopenLive\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003elookupNet\u003c/a\u003e\u003c/code\u003e. If you only have one interface, it is\n the function of choice. If not, see \u003ccode\u003e\u003ca\u003efindAllDevs\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.Pcap",
        "fct-package": "pcap",
        "fct-signature": "IO String",
        "fct-source": "src/Network-Pcap-Base.html#lookupDev",
        "fct-type": "function",
        "title": "lookupDev"
      },
      "index": {
        "description": "lookupDev returns the name of device suitable for use with openLive and lookupNet If you only have one interface it is the function of choice If not see findAllDevs",
        "hierarchy": "Network Pcap",
        "module": "Network.Pcap",
        "name": "lookupDev",
        "normalized": "",
        "package": "pcap",
        "partial": "Dev",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:lookupNet",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the network address and mask for the specified interface\n name. Only valid for IPv4. For other protocols, use \u003ccode\u003e\u003ca\u003efindAllDevs\u003c/a\u003e\u003c/code\u003e\n and search the \u003ccode\u003e\u003ca\u003eInterface\u003c/a\u003e\u003c/code\u003e list for the associated network mask.\n\u003c/p\u003e",
        "fct-module": "Network.Pcap",
        "fct-package": "pcap",
        "fct-signature": "String-\u003e IO Network",
        "fct-type": "function",
        "title": "lookupNet"
      },
      "index": {
        "description": "Return the network address and mask for the specified interface name Only valid for IPv4 For other protocols use findAllDevs and search the Interface list for the associated network mask",
        "hierarchy": "Network Pcap",
        "module": "Network.Pcap",
        "name": "lookupNet",
        "normalized": "String-\u003eIO Network",
        "package": "pcap",
        "partial": "Net",
        "signature": "String-\u003eIO Network"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:loop",
      "description": {
        "fct-descr": "\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003edispatch\u003c/a\u003e\u003c/code\u003e, but loop until the number of packets\n specified by the second argument are read. A negative value loops\n forever.\n\u003c/p\u003e\u003cp\u003eThis function does not return when a live read timeout occurs. Use\n \u003ccode\u003e\u003ca\u003edispatch\u003c/a\u003e\u003c/code\u003e instead if you want to specify a timeout.\n\u003c/p\u003e",
        "fct-module": "Network.Pcap",
        "fct-package": "pcap",
        "fct-signature": "PcapHandle-\u003e Int-\u003e Callback-\u003e IO Int",
        "fct-type": "function",
        "title": "loop"
      },
      "index": {
        "description": "Similar to dispatch but loop until the number of packets specified by the second argument are read negative value loops forever This function does not return when live read timeout occurs Use dispatch instead if you want to specify timeout",
        "hierarchy": "Network Pcap",
        "module": "Network.Pcap",
        "name": "loop",
        "normalized": "PcapHandle-\u003eInt-\u003eCallback-\u003eIO Int",
        "package": "pcap",
        "partial": "",
        "signature": "PcapHandle-\u003eInt-\u003eCallback-\u003eIO Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:loopBS",
      "description": {
        "fct-descr": "\u003cp\u003eVariant of \u003ccode\u003e\u003ca\u003eloop\u003c/a\u003e\u003c/code\u003e for use with \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.Pcap",
        "fct-package": "pcap",
        "fct-signature": "PcapHandle-\u003e Int-\u003e CallbackBS-\u003e IO Int",
        "fct-type": "function",
        "title": "loopBS"
      },
      "index": {
        "description": "Variant of loop for use with ByteString",
        "hierarchy": "Network Pcap",
        "module": "Network.Pcap",
        "name": "loopBS",
        "normalized": "PcapHandle-\u003eInt-\u003eCallbackBS-\u003eIO Int",
        "package": "pcap",
        "partial": "BS",
        "signature": "PcapHandle-\u003eInt-\u003eCallbackBS-\u003eIO Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:netAddr",
      "description": {
        "fct-descr": "\u003cp\u003eIPv4 network address\n\u003c/p\u003e",
        "fct-module": "Network.Pcap",
        "fct-package": "pcap",
        "fct-signature": "!Word32",
        "fct-source": "src/Network-Pcap-Base.html#Network",
        "fct-type": "function",
        "title": "netAddr"
      },
      "index": {
        "description": "IPv4 network address",
        "hierarchy": "Network Pcap",
        "module": "Network.Pcap",
        "name": "netAddr",
        "normalized": "",
        "package": "pcap",
        "partial": "Addr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:netMask",
      "description": {
        "fct-descr": "\u003cp\u003eIPv4 netmask\n\u003c/p\u003e",
        "fct-module": "Network.Pcap",
        "fct-package": "pcap",
        "fct-signature": "!Word32",
        "fct-source": "src/Network-Pcap-Base.html#Network",
        "fct-type": "function",
        "title": "netMask"
      },
      "index": {
        "description": "IPv4 netmask",
        "hierarchy": "Network Pcap",
        "module": "Network.Pcap",
        "name": "netMask",
        "normalized": "",
        "package": "pcap",
        "partial": "Mask",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:next",
      "description": {
        "fct-descr": "\u003cp\u003eRead the next packet (equivalent to calling \u003ccode\u003e\u003ca\u003edispatch\u003c/a\u003e\u003c/code\u003e with a\n count of 1).\n\u003c/p\u003e",
        "fct-module": "Network.Pcap",
        "fct-package": "pcap",
        "fct-signature": "PcapHandle -\u003e IO (PktHdr, Ptr Word8)",
        "fct-source": "src/Network-Pcap.html#next",
        "fct-type": "function",
        "title": "next"
      },
      "index": {
        "description": "Read the next packet equivalent to calling dispatch with count of",
        "hierarchy": "Network Pcap",
        "module": "Network.Pcap",
        "name": "next",
        "normalized": "PcapHandle-\u003eIO(PktHdr,Ptr Word)",
        "package": "pcap",
        "partial": "",
        "signature": "PcapHandle-\u003eIO(PktHdr,Ptr Word)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:nextBS",
      "description": {
        "fct-module": "Network.Pcap",
        "fct-package": "pcap",
        "fct-signature": "PcapHandle -\u003e IO (PktHdr, ByteString)",
        "fct-source": "src/Network-Pcap.html#nextBS",
        "fct-type": "function",
        "title": "nextBS"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Pcap",
        "module": "Network.Pcap",
        "name": "nextBS",
        "normalized": "PcapHandle-\u003eIO(PktHdr,ByteString)",
        "package": "pcap",
        "partial": "BS",
        "signature": "PcapHandle-\u003eIO(PktHdr,ByteString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:openDead",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eopenDead\u003c/a\u003e\u003c/code\u003e is used to get a \u003ccode\u003e\u003ca\u003ePcapHandle\u003c/a\u003e\u003c/code\u003e without opening a file\n or device. It is typically used to test packet filter compilation\n by \u003ccode\u003e\u003ca\u003esetFilter\u003c/a\u003e\u003c/code\u003e. The arguments are the link type and the snapshot\n length.\n\u003c/p\u003e",
        "fct-module": "Network.Pcap",
        "fct-package": "pcap",
        "fct-signature": "Link-\u003e Int-\u003e IO PcapHandle",
        "fct-type": "function",
        "title": "openDead"
      },
      "index": {
        "description": "openDead is used to get PcapHandle without opening file or device It is typically used to test packet filter compilation by setFilter The arguments are the link type and the snapshot length",
        "hierarchy": "Network Pcap",
        "module": "Network.Pcap",
        "name": "openDead",
        "normalized": "Link-\u003eInt-\u003eIO PcapHandle",
        "package": "pcap",
        "partial": "Dead",
        "signature": "Link-\u003eInt-\u003eIO PcapHandle"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:openDump",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eopenDump\u003c/a\u003e\u003c/code\u003e opens a dump file for writing. This dump file is\n written to by the \u003ccode\u003e\u003ca\u003edump\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e",
        "fct-module": "Network.Pcap",
        "fct-package": "pcap",
        "fct-signature": "PcapHandle-\u003e FilePath-\u003e IO DumpHandle",
        "fct-type": "function",
        "title": "openDump"
      },
      "index": {
        "description": "openDump opens dump file for writing This dump file is written to by the dump function",
        "hierarchy": "Network Pcap",
        "module": "Network.Pcap",
        "name": "openDump",
        "normalized": "PcapHandle-\u003eFilePath-\u003eIO DumpHandle",
        "package": "pcap",
        "partial": "Dump",
        "signature": "PcapHandle-\u003eFilePath-\u003eIO DumpHandle"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:openLive",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eopenLive\u003c/a\u003e\u003c/code\u003e is used to get a \u003ccode\u003e\u003ca\u003ePcapHandle\u003c/a\u003e\u003c/code\u003e that can be used to look\n at packets on the network. The arguments are the device name, the\n snapshot length (in bytes), the promiscuity of the interface\n (\u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e == promiscuous) and a timeout in microseconds.\n\u003c/p\u003e\u003cp\u003eThe timeout allows the packet filter to delay while accumulating\n multiple packets, which is more efficient than reading packets one\n by one.  A timeout of zero will wait indefinitely for \"enough\"\n packets to arrive.\n\u003c/p\u003e\u003cp\u003eUsing \u003ccode\u003e\"any\"\u003c/code\u003e as the device name will capture packets from all\n interfaces.  On some systems, reading from the \u003ccode\u003e\"any\"\u003c/code\u003e device is\n incompatible with setting the interfaces into promiscuous mode. In\n that case, only packets whose link layer addresses match those of\n the interfaces are captured.\n\u003c/p\u003e",
        "fct-module": "Network.Pcap",
        "fct-package": "pcap",
        "fct-signature": "String-\u003e Int-\u003e Bool-\u003e Int64-\u003e IO PcapHandle",
        "fct-type": "function",
        "title": "openLive"
      },
      "index": {
        "description": "openLive is used to get PcapHandle that can be used to look at packets on the network The arguments are the device name the snapshot length in bytes the promiscuity of the interface True promiscuous and timeout in microseconds The timeout allows the packet filter to delay while accumulating multiple packets which is more efficient than reading packets one by one timeout of zero will wait indefinitely for enough packets to arrive Using any as the device name will capture packets from all interfaces On some systems reading from the any device is incompatible with setting the interfaces into promiscuous mode In that case only packets whose link layer addresses match those of the interfaces are captured",
        "hierarchy": "Network Pcap",
        "module": "Network.Pcap",
        "name": "openLive",
        "normalized": "String-\u003eInt-\u003eBool-\u003eInt-\u003eIO PcapHandle",
        "package": "pcap",
        "partial": "Live",
        "signature": "String-\u003eInt-\u003eBool-\u003eInt-\u003eIO PcapHandle"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:openOffline",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eopenOffline\u003c/a\u003e\u003c/code\u003e opens a dump file for reading. The file format is\n the same as used by \u003ccode\u003etcpdump\u003c/code\u003e and Wireshark. The string \u003ccode\u003e\"-\"\u003c/code\u003e is\n a synonym for \u003ccode\u003estdin\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.Pcap",
        "fct-package": "pcap",
        "fct-signature": "FilePath-\u003e IO PcapHandle",
        "fct-type": "function",
        "title": "openOffline"
      },
      "index": {
        "description": "openOffline opens dump file for reading The file format is the same as used by tcpdump and Wireshark The string is synonym for stdin",
        "hierarchy": "Network Pcap",
        "module": "Network.Pcap",
        "name": "openOffline",
        "normalized": "FilePath-\u003eIO PcapHandle",
        "package": "pcap",
        "partial": "Offline",
        "signature": "FilePath-\u003eIO PcapHandle"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:saAddr",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.Pcap",
        "fct-package": "pcap",
        "fct-signature": "!ByteString",
        "fct-source": "src/Network-Pcap-Base.html#SockAddr",
        "fct-type": "function",
        "title": "saAddr"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Pcap",
        "module": "Network.Pcap",
        "name": "saAddr",
        "normalized": "",
        "package": "pcap",
        "partial": "Addr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:saFamily",
      "description": {
        "fct-descr": "\u003cp\u003ean address family exported by Network.Socket\n\u003c/p\u003e",
        "fct-module": "Network.Pcap",
        "fct-package": "pcap",
        "fct-signature": "!Family",
        "fct-source": "src/Network-Pcap-Base.html#SockAddr",
        "fct-type": "function",
        "title": "saFamily"
      },
      "index": {
        "description": "an address family exported by Network.Socket",
        "hierarchy": "Network Pcap",
        "module": "Network.Pcap",
        "name": "saFamily",
        "normalized": "",
        "package": "pcap",
        "partial": "Family",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:sendPacket",
      "description": {
        "fct-descr": "\u003cp\u003eSend a raw packet through the network interface.\n\u003c/p\u003e",
        "fct-module": "Network.Pcap",
        "fct-package": "pcap",
        "fct-signature": "PcapHandle-\u003e Ptr Word8-\u003e Int-\u003e IO ()",
        "fct-type": "function",
        "title": "sendPacket"
      },
      "index": {
        "description": "Send raw packet through the network interface",
        "hierarchy": "Network Pcap",
        "module": "Network.Pcap",
        "name": "sendPacket",
        "normalized": "PcapHandle-\u003ePtr Word-\u003eInt-\u003eIO()",
        "package": "pcap",
        "partial": "Packet",
        "signature": "PcapHandle-\u003ePtr Word-\u003eInt-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:sendPacketBS",
      "description": {
        "fct-descr": "\u003cp\u003eVariant of \u003ccode\u003e\u003ca\u003esendPacket\u003c/a\u003e\u003c/code\u003e for use with \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.Pcap",
        "fct-package": "pcap",
        "fct-signature": "PcapHandle-\u003e ByteString-\u003e IO ()",
        "fct-type": "function",
        "title": "sendPacketBS"
      },
      "index": {
        "description": "Variant of sendPacket for use with ByteString",
        "hierarchy": "Network Pcap",
        "module": "Network.Pcap",
        "name": "sendPacketBS",
        "normalized": "PcapHandle-\u003eByteString-\u003eIO()",
        "package": "pcap",
        "partial": "Packet BS",
        "signature": "PcapHandle-\u003eByteString-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:setDatalink",
      "description": {
        "fct-descr": "\u003cp\u003eSets the datalink type for the given handle.\n\u003c/p\u003e",
        "fct-module": "Network.Pcap",
        "fct-package": "pcap",
        "fct-signature": "PcapHandle -\u003e Link -\u003e IO ()",
        "fct-source": "src/Network-Pcap.html#setDatalink",
        "fct-type": "function",
        "title": "setDatalink"
      },
      "index": {
        "description": "Sets the datalink type for the given handle",
        "hierarchy": "Network Pcap",
        "module": "Network.Pcap",
        "name": "setDatalink",
        "normalized": "PcapHandle-\u003eLink-\u003eIO()",
        "package": "pcap",
        "partial": "Datalink",
        "signature": "PcapHandle-\u003eLink-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:setDirection",
      "description": {
        "fct-descr": "\u003cp\u003eSpecify the direction in which packets are to be captured.\n Complete functionality is not necessarily available on all\n platforms.\n\u003c/p\u003e",
        "fct-module": "Network.Pcap",
        "fct-package": "pcap",
        "fct-signature": "PcapHandle -\u003e Direction -\u003e IO ()",
        "fct-source": "src/Network-Pcap.html#setDirection",
        "fct-type": "function",
        "title": "setDirection"
      },
      "index": {
        "description": "Specify the direction in which packets are to be captured Complete functionality is not necessarily available on all platforms",
        "hierarchy": "Network Pcap",
        "module": "Network.Pcap",
        "name": "setDirection",
        "normalized": "PcapHandle-\u003eDirection-\u003eIO()",
        "package": "pcap",
        "partial": "Direction",
        "signature": "PcapHandle-\u003eDirection-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:setFilter",
      "description": {
        "fct-descr": "\u003cp\u003eSet a filter on the specified packet capture handle. Valid filter\n strings are those accepted by \u003ccode\u003etcpdump\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.Pcap",
        "fct-package": "pcap",
        "fct-signature": "PcapHandle-\u003e String-\u003e Bool-\u003e Word32-\u003e IO ()",
        "fct-type": "function",
        "title": "setFilter"
      },
      "index": {
        "description": "Set filter on the specified packet capture handle Valid filter strings are those accepted by tcpdump",
        "hierarchy": "Network Pcap",
        "module": "Network.Pcap",
        "name": "setFilter",
        "normalized": "PcapHandle-\u003eString-\u003eBool-\u003eWord-\u003eIO()",
        "package": "pcap",
        "partial": "Filter",
        "signature": "PcapHandle-\u003eString-\u003eBool-\u003eWord-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:setNonBlock",
      "description": {
        "fct-descr": "\u003cp\u003eSet the given \u003ccode\u003e\u003ca\u003ePcapHandle\u003c/a\u003e\u003c/code\u003e into non-blocking mode if the second\n argument is \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e, otherwise put it in blocking mode. Note that\n the \u003ccode\u003e\u003ca\u003ePcapHandle\u003c/a\u003e\u003c/code\u003e must have been obtained from \u003ccode\u003e\u003ca\u003eopenLive\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.Pcap",
        "fct-package": "pcap",
        "fct-signature": "PcapHandle-\u003e Bool-\u003e IO ()",
        "fct-type": "function",
        "title": "setNonBlock"
      },
      "index": {
        "description": "Set the given PcapHandle into non-blocking mode if the second argument is True otherwise put it in blocking mode Note that the PcapHandle must have been obtained from openLive",
        "hierarchy": "Network Pcap",
        "module": "Network.Pcap",
        "name": "setNonBlock",
        "normalized": "PcapHandle-\u003eBool-\u003eIO()",
        "package": "pcap",
        "partial": "Non Block",
        "signature": "PcapHandle-\u003eBool-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:snapshotLen",
      "description": {
        "fct-descr": "\u003cp\u003eThe snapshot length that was used in the call to \u003ccode\u003e\u003ca\u003eopenLive\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.Pcap",
        "fct-package": "pcap",
        "fct-signature": "PcapHandle -\u003e IO Int",
        "fct-source": "src/Network-Pcap.html#snapshotLen",
        "fct-type": "function",
        "title": "snapshotLen"
      },
      "index": {
        "description": "The snapshot length that was used in the call to openLive",
        "hierarchy": "Network Pcap",
        "module": "Network.Pcap",
        "name": "snapshotLen",
        "normalized": "PcapHandle-\u003eIO Int",
        "package": "pcap",
        "partial": "Len",
        "signature": "PcapHandle-\u003eIO Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:statDropped",
      "description": {
        "fct-descr": "\u003cp\u003epackets dropped by \u003ccode\u003elibpcap\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Pcap",
        "fct-package": "pcap",
        "fct-signature": "!Word32",
        "fct-source": "src/Network-Pcap-Base.html#Statistics",
        "fct-type": "function",
        "title": "statDropped"
      },
      "index": {
        "description": "packets dropped by libpcap",
        "hierarchy": "Network Pcap",
        "module": "Network.Pcap",
        "name": "statDropped",
        "normalized": "",
        "package": "pcap",
        "partial": "Dropped",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:statIfaceDropped",
      "description": {
        "fct-descr": "\u003cp\u003epackets dropped by the network interface\n\u003c/p\u003e",
        "fct-module": "Network.Pcap",
        "fct-package": "pcap",
        "fct-signature": "!Word32",
        "fct-source": "src/Network-Pcap-Base.html#Statistics",
        "fct-type": "function",
        "title": "statIfaceDropped"
      },
      "index": {
        "description": "packets dropped by the network interface",
        "hierarchy": "Network Pcap",
        "module": "Network.Pcap",
        "name": "statIfaceDropped",
        "normalized": "",
        "package": "pcap",
        "partial": "Iface Dropped",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:statReceived",
      "description": {
        "fct-descr": "\u003cp\u003epackets received\n\u003c/p\u003e",
        "fct-module": "Network.Pcap",
        "fct-package": "pcap",
        "fct-signature": "!Word32",
        "fct-source": "src/Network-Pcap-Base.html#Statistics",
        "fct-type": "function",
        "title": "statReceived"
      },
      "index": {
        "description": "packets received",
        "hierarchy": "Network Pcap",
        "module": "Network.Pcap",
        "name": "statReceived",
        "normalized": "",
        "package": "pcap",
        "partial": "Received",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:statistics",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the number of packets received, the number of packets\n dropped by the packet filter and the number of packets dropped by\n the interface (before processing by the packet filter).\n\u003c/p\u003e",
        "fct-module": "Network.Pcap",
        "fct-package": "pcap",
        "fct-signature": "PcapHandle -\u003e IO Statistics",
        "fct-source": "src/Network-Pcap.html#statistics",
        "fct-type": "function",
        "title": "statistics"
      },
      "index": {
        "description": "Returns the number of packets received the number of packets dropped by the packet filter and the number of packets dropped by the interface before processing by the packet filter",
        "hierarchy": "Network Pcap",
        "module": "Network.Pcap",
        "name": "statistics",
        "normalized": "PcapHandle-\u003eIO Statistics",
        "package": "pcap",
        "partial": "",
        "signature": "PcapHandle-\u003eIO Statistics"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:toBS",
      "description": {
        "fct-descr": "\u003cp\u003eRepresent a captured packet as a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.  Suitable for\n use as is with the result of \u003ccode\u003e\u003ca\u003enext\u003c/a\u003e\u003c/code\u003e, or use \u003ccode\u003e\u003ccode\u003e\u003ca\u003ecurry\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003etoBS\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e inside\n a \u003ccode\u003e\u003ca\u003eCallback\u003c/a\u003e\u003c/code\u003e with \u003ccode\u003e\u003ca\u003edispatch\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.Pcap",
        "fct-package": "pcap",
        "fct-signature": "(PktHdr, Ptr Word8) -\u003e IO (PktHdr, ByteString)",
        "fct-source": "src/Network-Pcap.html#toBS",
        "fct-type": "function",
        "title": "toBS"
      },
      "index": {
        "description": "Represent captured packet as ByteString Suitable for use as is with the result of next or use curry toBS inside Callback with dispatch",
        "hierarchy": "Network Pcap",
        "module": "Network.Pcap",
        "name": "toBS",
        "normalized": "(PktHdr,Ptr Word)-\u003eIO(PktHdr,ByteString)",
        "package": "pcap",
        "partial": "BS",
        "signature": "(PktHdr,Ptr Word)-\u003eIO(PktHdr,ByteString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap/docs/Network-Pcap.html#v:version",
      "description": {
        "fct-descr": "\u003cp\u003eVersion of the library.  The returned pair consists of the major\n and minor version numbers.\n\u003c/p\u003e",
        "fct-module": "Network.Pcap",
        "fct-package": "pcap",
        "fct-signature": "PcapHandle -\u003e IO (Int, Int)",
        "fct-source": "src/Network-Pcap.html#version",
        "fct-type": "function",
        "title": "version"
      },
      "index": {
        "description": "Version of the library The returned pair consists of the major and minor version numbers",
        "hierarchy": "Network Pcap",
        "module": "Network.Pcap",
        "name": "version",
        "normalized": "PcapHandle-\u003eIO(Int,Int)",
        "package": "pcap",
        "partial": "",
        "signature": "PcapHandle-\u003eIO(Int,Int)"
      }
    }
  }
]