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
        "word": "tcp"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Aux.HostMonad",
          "name": "HostMonad",
          "package": "tcp",
          "source": "src/Network-TCP-Aux-HostMonad.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Network TCP Aux HostMonad",
          "module": "Network.TCP.Aux.HostMonad",
          "name": "HostMonad",
          "package": "tcp",
          "partial": "Host Monad",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Aux-HostMonad.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Aux.HostMonad",
          "name": "HMonad",
          "package": "tcp",
          "source": "src/Network-TCP-Aux-HostMonad.html#HMonad",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Network TCP Aux HostMonad",
          "module": "Network.TCP.Aux.HostMonad",
          "name": "HMonad",
          "package": "tcp",
          "partial": "HMonad",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Aux-HostMonad.html#t:HMonad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Aux.HostMonad",
          "name": "HMonad",
          "package": "tcp",
          "signature": "HMonad (Host t -\u003e (a, Host t))",
          "source": "src/Network-TCP-Aux-HostMonad.html#HMonad",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Aux HostMonad",
          "module": "Network.TCP.Aux.HostMonad",
          "name": "HMonad",
          "normalized": "HMonad(Host a-\u003e(b,Host a))",
          "package": "tcp",
          "partial": "HMonad",
          "signature": "HMonad(Host t-\u003e(a,Host t))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Aux-HostMonad.html#v:HMonad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Aux.HostMonad",
          "name": "bindHMonad",
          "package": "tcp",
          "signature": "HMonad t a -\u003e (a -\u003e HMonad t b) -\u003e HMonad t b",
          "source": "src/Network-TCP-Aux-HostMonad.html#bindHMonad",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Aux HostMonad",
          "module": "Network.TCP.Aux.HostMonad",
          "name": "bindHMonad",
          "normalized": "HMonad a b-\u003e(b-\u003eHMonad a c)-\u003eHMonad a c",
          "package": "tcp",
          "partial": "HMonad",
          "signature": "HMonad t a-\u003e(a-\u003eHMonad t b)-\u003eHMonad t b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Aux-HostMonad.html#v:bindHMonad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Aux.HostMonad",
          "name": "delete_sock",
          "package": "tcp",
          "signature": "SocketID -\u003e HMonad t ()",
          "source": "src/Network-TCP-Aux-HostMonad.html#delete_sock",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Aux HostMonad",
          "module": "Network.TCP.Aux.HostMonad",
          "name": "delete_sock",
          "normalized": "SocketID-\u003eHMonad a()",
          "package": "tcp",
          "signature": "SocketID-\u003eHMonad t()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Aux-HostMonad.html#v:delete_sock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Aux.HostMonad",
          "name": "get_host",
          "package": "tcp",
          "signature": "HMonad t (Host t)",
          "source": "src/Network-TCP-Aux-HostMonad.html#get_host",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Aux HostMonad",
          "module": "Network.TCP.Aux.HostMonad",
          "name": "get_host",
          "package": "tcp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Aux-HostMonad.html#v:get_host"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Aux.HostMonad",
          "name": "has_sock",
          "package": "tcp",
          "signature": "SocketID -\u003e HMonad t Bool",
          "source": "src/Network-TCP-Aux-HostMonad.html#has_sock",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Aux HostMonad",
          "module": "Network.TCP.Aux.HostMonad",
          "name": "has_sock",
          "normalized": "SocketID-\u003eHMonad a Bool",
          "package": "tcp",
          "signature": "SocketID-\u003eHMonad t Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Aux-HostMonad.html#v:has_sock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Aux.HostMonad",
          "name": "insert_sock",
          "package": "tcp",
          "signature": "SocketID -\u003e TCPSocket t -\u003e HMonad t ()",
          "source": "src/Network-TCP-Aux-HostMonad.html#insert_sock",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Aux HostMonad",
          "module": "Network.TCP.Aux.HostMonad",
          "name": "insert_sock",
          "normalized": "SocketID-\u003eTCPSocket a-\u003eHMonad a()",
          "package": "tcp",
          "signature": "SocketID-\u003eTCPSocket t-\u003eHMonad t()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Aux-HostMonad.html#v:insert_sock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Aux.HostMonad",
          "name": "runHMonad",
          "package": "tcp",
          "signature": "HMonad t a -\u003e Host t -\u003e Host t",
          "source": "src/Network-TCP-Aux-HostMonad.html#runHMonad",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Aux HostMonad",
          "module": "Network.TCP.Aux.HostMonad",
          "name": "runHMonad",
          "normalized": "HMonad a b-\u003eHost a-\u003eHost a",
          "package": "tcp",
          "partial": "HMonad",
          "signature": "HMonad t a-\u003eHost t-\u003eHost t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Aux-HostMonad.html#v:runHMonad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Aux.HostMonad",
          "name": "runHMonad_",
          "package": "tcp",
          "signature": "HMonad t a -\u003e Host t -\u003e (Host t, a)",
          "source": "src/Network-TCP-Aux-HostMonad.html#runHMonad_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Aux HostMonad",
          "module": "Network.TCP.Aux.HostMonad",
          "name": "runHMonad_",
          "normalized": "HMonad a b-\u003eHost a-\u003e(Host a,b)",
          "package": "tcp",
          "partial": "HMonad",
          "signature": "HMonad t a-\u003eHost t-\u003e(Host t,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Aux-HostMonad.html#v:runHMonad_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Aux.Misc",
          "name": "Misc",
          "package": "tcp",
          "source": "src/Network-TCP-Aux-Misc.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Network TCP Aux Misc",
          "module": "Network.TCP.Aux.Misc",
          "name": "Misc",
          "package": "tcp",
          "partial": "Misc",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Aux-Misc.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Aux.Misc",
          "name": "accept_incoming_q0",
          "package": "tcp",
          "signature": "SocketListen -\u003e Bool",
          "source": "src/Network-TCP-Aux-Misc.html#accept_incoming_q0",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Aux Misc",
          "module": "Network.TCP.Aux.Misc",
          "name": "accept_incoming_q0",
          "normalized": "SocketListen-\u003eBool",
          "package": "tcp",
          "signature": "SocketListen-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Aux-Misc.html#v:accept_incoming_q0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Aux.Misc",
          "name": "bound_ports",
          "package": "tcp",
          "signature": "Map SocketID (TCPSocket threadt) -\u003e [Port]",
          "source": "src/Network-TCP-Aux-Misc.html#bound_ports",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Aux Misc",
          "module": "Network.TCP.Aux.Misc",
          "name": "bound_ports",
          "normalized": "Map SocketID(TCPSocket a)-\u003e[Port]",
          "package": "tcp",
          "signature": "Map SocketID(TCPSocket threadt)-\u003e[Port]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Aux-Misc.html#v:bound_ports"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Aux.Misc",
          "name": "calculate_bsd_rcv_wnd",
          "package": "tcp",
          "signature": "TCPSocket t -\u003e Int",
          "source": "src/Network-TCP-Aux-Misc.html#calculate_bsd_rcv_wnd",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Aux Misc",
          "module": "Network.TCP.Aux.Misc",
          "name": "calculate_bsd_rcv_wnd",
          "normalized": "TCPSocket a-\u003eInt",
          "package": "tcp",
          "signature": "TCPSocket t-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Aux-Misc.html#v:calculate_bsd_rcv_wnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Aux.Misc",
          "name": "computed_rto",
          "package": "tcp",
          "signature": "[Int] -\u003e Int -\u003e Rttinf -\u003e Time",
          "source": "src/Network-TCP-Aux-Misc.html#computed_rto",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Aux Misc",
          "module": "Network.TCP.Aux.Misc",
          "name": "computed_rto",
          "normalized": "[Int]-\u003eInt-\u003eRttinf-\u003eTime",
          "package": "tcp",
          "signature": "[Int]-\u003eInt-\u003eRttinf-\u003eTime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Aux-Misc.html#v:computed_rto"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Aux.Misc",
          "name": "debug",
          "package": "tcp",
          "signature": "String -\u003e m a",
          "source": "src/Network-TCP-Aux-Misc.html#debug",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Aux Misc",
          "module": "Network.TCP.Aux.Misc",
          "name": "debug",
          "normalized": "String-\u003ea b",
          "package": "tcp",
          "signature": "String-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Aux-Misc.html#v:debug"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Aux.Misc",
          "name": "do_tcp_options",
          "package": "tcp",
          "signature": "Time -\u003e Bool -\u003e TimeWindow Timestamp -\u003e Timestamp -\u003e Maybe (Timestamp, Timestamp)",
          "source": "src/Network-TCP-Aux-Misc.html#do_tcp_options",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Aux Misc",
          "module": "Network.TCP.Aux.Misc",
          "name": "do_tcp_options",
          "normalized": "Time-\u003eBool-\u003eTimeWindow Timestamp-\u003eTimestamp-\u003eMaybe(Timestamp,Timestamp)",
          "package": "tcp",
          "signature": "Time-\u003eBool-\u003eTimeWindow Timestamp-\u003eTimestamp-\u003eMaybe(Timestamp,Timestamp)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Aux-Misc.html#v:do_tcp_options"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Aux.Misc",
          "name": "empty_sid",
          "package": "tcp",
          "signature": "SocketID",
          "source": "src/Network-TCP-Aux-Misc.html#empty_sid",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Aux Misc",
          "module": "Network.TCP.Aux.Misc",
          "name": "empty_sid",
          "package": "tcp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Aux-Misc.html#v:empty_sid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Aux.Misc",
          "name": "mode_of",
          "package": "tcp",
          "signature": "Maybe (Timed (RexmtMode, Int)) -\u003e Maybe RexmtMode",
          "source": "src/Network-TCP-Aux-Misc.html#mode_of",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Aux Misc",
          "module": "Network.TCP.Aux.Misc",
          "name": "mode_of",
          "normalized": "Maybe(Timed(RexmtMode,Int))-\u003eMaybe RexmtMode",
          "package": "tcp",
          "signature": "Maybe(Timed(RexmtMode,Int))-\u003eMaybe RexmtMode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Aux-Misc.html#v:mode_of"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Aux.Misc",
          "name": "next_smaller",
          "package": "tcp",
          "signature": "[Int] -\u003e Int -\u003e Int",
          "source": "src/Network-TCP-Aux-Misc.html#next_smaller",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Aux Misc",
          "module": "Network.TCP.Aux.Misc",
          "name": "next_smaller",
          "normalized": "[Int]-\u003eInt-\u003eInt",
          "package": "tcp",
          "signature": "[Int]-\u003eInt-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Aux-Misc.html#v:next_smaller"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Aux.Misc",
          "name": "shift_of",
          "package": "tcp",
          "signature": "Maybe (Timed (RexmtMode, Int)) -\u003e Int",
          "source": "src/Network-TCP-Aux-Misc.html#shift_of",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Aux Misc",
          "module": "Network.TCP.Aux.Misc",
          "name": "shift_of",
          "normalized": "Maybe(Timed(RexmtMode,Int))-\u003eInt",
          "package": "tcp",
          "signature": "Maybe(Timed(RexmtMode,Int))-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Aux-Misc.html#v:shift_of"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Aux.Misc",
          "name": "tcp_reass",
          "package": "tcp",
          "signature": "SeqForeign -\u003e [TCPReassSegment] -\u003e (BufferChain, SeqForeign, Bool, [TCPReassSegment])",
          "source": "src/Network-TCP-Aux-Misc.html#tcp_reass",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Aux Misc",
          "module": "Network.TCP.Aux.Misc",
          "name": "tcp_reass",
          "normalized": "SeqForeign-\u003e[TCPReassSegment]-\u003e(BufferChain,SeqForeign,Bool,[TCPReassSegment])",
          "package": "tcp",
          "signature": "SeqForeign-\u003e[TCPReassSegment]-\u003e(BufferChain,SeqForeign,Bool,[TCPReassSegment])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Aux-Misc.html#v:tcp_reass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Aux.Misc",
          "name": "tcp_reass_prune",
          "package": "tcp",
          "signature": "SeqForeign -\u003e [TCPReassSegment] -\u003e [TCPReassSegment]",
          "source": "src/Network-TCP-Aux-Misc.html#tcp_reass_prune",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Aux Misc",
          "module": "Network.TCP.Aux.Misc",
          "name": "tcp_reass_prune",
          "normalized": "SeqForeign-\u003e[TCPReassSegment]-\u003e[TCPReassSegment]",
          "package": "tcp",
          "signature": "SeqForeign-\u003e[TCPReassSegment]-\u003e[TCPReassSegment]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Aux-Misc.html#v:tcp_reass_prune"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Aux.Misc",
          "name": "update_rtt",
          "package": "tcp",
          "signature": "Time -\u003e Rttinf -\u003e Rttinf",
          "source": "src/Network-TCP-Aux-Misc.html#update_rtt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Aux Misc",
          "module": "Network.TCP.Aux.Misc",
          "name": "update_rtt",
          "normalized": "Time-\u003eRttinf-\u003eRttinf",
          "package": "tcp",
          "signature": "Time-\u003eRttinf-\u003eRttinf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Aux-Misc.html#v:update_rtt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Aux.Output",
          "name": "Output",
          "package": "tcp",
          "source": "src/Network-TCP-Aux-Output.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Network TCP Aux Output",
          "module": "Network.TCP.Aux.Output",
          "name": "Output",
          "package": "tcp",
          "partial": "Output",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Aux-Output.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Aux.Output",
          "name": "alloc_local_port",
          "package": "tcp",
          "signature": "HMonad t (Maybe Port)",
          "source": "src/Network-TCP-Aux-Output.html#alloc_local_port",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Aux Output",
          "module": "Network.TCP.Aux.Output",
          "name": "alloc_local_port",
          "package": "tcp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Aux-Output.html#v:alloc_local_port"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Aux.Output",
          "name": "make_syn_segment",
          "package": "tcp",
          "signature": "Time -\u003e TCPSocket t -\u003e Timestamp -\u003e TCPSegment",
          "source": "src/Network-TCP-Aux-Output.html#make_syn_segment",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Aux Output",
          "module": "Network.TCP.Aux.Output",
          "name": "make_syn_segment",
          "normalized": "Time-\u003eTCPSocket a-\u003eTimestamp-\u003eTCPSegment",
          "package": "tcp",
          "signature": "Time-\u003eTCPSocket t-\u003eTimestamp-\u003eTCPSegment",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Aux-Output.html#v:make_syn_segment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.TCP.Aux.Output\",\"Network.TCP.LTS.Out\"]",
          "name": "tcp_close",
          "package": "tcp",
          "signature": "SocketID -\u003e HMonad t ()",
          "source": "src/Network-TCP-Aux-Output.html#tcp_close",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/tcp/docs/Network-TCP-Aux-Output.html#v:tcp_close\",\"http://hackage.haskell.org/package/tcp/docs/Network-TCP-LTS-Out.html#v:tcp_close\"]"
        },
        "index": {
          "hierarchy": "Network TCP Aux Output",
          "module": "Network.TCP.Aux.Output",
          "name": "tcp_close",
          "normalized": "SocketID-\u003eHMonad a()",
          "package": "tcp",
          "signature": "SocketID-\u003eHMonad t()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Aux-Output.html#v:tcp_close"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.TCP.Aux.Output\",\"Network.TCP.LTS.Out\"]",
          "name": "tcp_drop_and_close",
          "package": "tcp",
          "signature": "SocketID -\u003e HMonad t ()",
          "source": "src/Network-TCP-Aux-Output.html#tcp_drop_and_close",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/tcp/docs/Network-TCP-Aux-Output.html#v:tcp_drop_and_close\",\"http://hackage.haskell.org/package/tcp/docs/Network-TCP-LTS-Out.html#v:tcp_drop_and_close\"]"
        },
        "index": {
          "hierarchy": "Network TCP Aux Output",
          "module": "Network.TCP.Aux.Output",
          "name": "tcp_drop_and_close",
          "normalized": "SocketID-\u003eHMonad a()",
          "package": "tcp",
          "signature": "SocketID-\u003eHMonad t()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Aux-Output.html#v:tcp_drop_and_close"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Aux.Param",
          "name": "Param",
          "package": "tcp",
          "source": "src/Network-TCP-Aux-Param.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Network TCP Aux Param",
          "module": "Network.TCP.Aux.Param",
          "name": "Param",
          "package": "tcp",
          "partial": "Param",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Aux-Param.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Aux.Param",
          "name": "backlog_fudge",
          "package": "tcp",
          "signature": "Int -\u003e Int",
          "source": "src/Network-TCP-Aux-Param.html#backlog_fudge",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Aux Param",
          "module": "Network.TCP.Aux.Param",
          "name": "backlog_fudge",
          "normalized": "Int-\u003eInt",
          "package": "tcp",
          "signature": "Int-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Aux-Param.html#v:backlog_fudge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Aux.SockMonad",
          "name": "SockMonad",
          "package": "tcp",
          "source": "src/Network-TCP-Aux-SockMonad.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Network TCP Aux SockMonad",
          "module": "Network.TCP.Aux.SockMonad",
          "name": "SockMonad",
          "package": "tcp",
          "partial": "Sock Monad",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Aux-SockMonad.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Aux.SockMonad",
          "name": "HState",
          "package": "tcp",
          "source": "src/Network-TCP-Aux-SockMonad.html#HState",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network TCP Aux SockMonad",
          "module": "Network.TCP.Aux.SockMonad",
          "name": "HState",
          "package": "tcp",
          "partial": "HState",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Aux-SockMonad.html#t:HState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Aux.SockMonad",
          "name": "SMonad",
          "package": "tcp",
          "source": "src/Network-TCP-Aux-SockMonad.html#SMonad",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Network TCP Aux SockMonad",
          "module": "Network.TCP.Aux.SockMonad",
          "name": "SMonad",
          "package": "tcp",
          "partial": "SMonad",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Aux-SockMonad.html#t:SMonad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Aux.SockMonad",
          "name": "HState",
          "package": "tcp",
          "signature": "HState",
          "source": "src/Network-TCP-Aux-SockMonad.html#HState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Aux SockMonad",
          "module": "Network.TCP.Aux.SockMonad",
          "name": "HState",
          "package": "tcp",
          "partial": "HState",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Aux-SockMonad.html#v:HState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Aux.SockMonad",
          "name": "SMonad",
          "package": "tcp",
          "signature": "SMonad (HState t -\u003e (a, HState t))",
          "source": "src/Network-TCP-Aux-SockMonad.html#SMonad",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Aux SockMonad",
          "module": "Network.TCP.Aux.SockMonad",
          "name": "SMonad",
          "normalized": "SMonad(HState a-\u003e(b,HState a))",
          "package": "tcp",
          "partial": "SMonad",
          "signature": "SMonad(HState t-\u003e(a,HState t))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Aux-SockMonad.html#v:SMonad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Aux.SockMonad",
          "name": "bindSMonad",
          "package": "tcp",
          "signature": "SMonad t a -\u003e (a -\u003e SMonad t b) -\u003e SMonad t b",
          "source": "src/Network-TCP-Aux-SockMonad.html#bindSMonad",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Aux SockMonad",
          "module": "Network.TCP.Aux.SockMonad",
          "name": "bindSMonad",
          "normalized": "SMonad a b-\u003e(b-\u003eSMonad a c)-\u003eSMonad a c",
          "package": "tcp",
          "partial": "SMonad",
          "signature": "SMonad t a-\u003e(a-\u003eSMonad t b)-\u003eSMonad t b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Aux-SockMonad.html#v:bindSMonad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Aux.SockMonad",
          "name": "get_host_",
          "package": "tcp",
          "signature": "SMonad t (Host t)",
          "source": "src/Network-TCP-Aux-SockMonad.html#get_host_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Aux SockMonad",
          "module": "Network.TCP.Aux.SockMonad",
          "name": "get_host_",
          "package": "tcp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Aux-SockMonad.html#v:get_host_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Aux.SockMonad",
          "name": "hs_host",
          "package": "tcp",
          "signature": "(Host t)",
          "source": "src/Network-TCP-Aux-SockMonad.html#HState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Aux SockMonad",
          "module": "Network.TCP.Aux.SockMonad",
          "name": "hs_host",
          "package": "tcp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Aux-SockMonad.html#v:hs_host"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Aux.SockMonad",
          "name": "hs_sock",
          "package": "tcp",
          "signature": "(TCPSocket t)",
          "source": "src/Network-TCP-Aux-SockMonad.html#HState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Aux SockMonad",
          "module": "Network.TCP.Aux.SockMonad",
          "name": "hs_sock",
          "package": "tcp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Aux-SockMonad.html#v:hs_sock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Aux.SockMonad",
          "name": "runSMonad",
          "package": "tcp",
          "signature": "SocketID -\u003e SMonad t a -\u003e HMonad t a",
          "source": "src/Network-TCP-Aux-SockMonad.html#runSMonad",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Aux SockMonad",
          "module": "Network.TCP.Aux.SockMonad",
          "name": "runSMonad",
          "normalized": "SocketID-\u003eSMonad a b-\u003eHMonad a b",
          "package": "tcp",
          "partial": "SMonad",
          "signature": "SocketID-\u003eSMonad t a-\u003eHMonad t a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Aux-SockMonad.html#v:runSMonad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.LTS.In",
          "name": "In",
          "package": "tcp",
          "source": "src/Network-TCP-LTS-In.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Network TCP LTS In",
          "module": "Network.TCP.LTS.In",
          "name": "In",
          "package": "tcp",
          "partial": "In",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-LTS-In.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.LTS.In",
          "name": "tcp_deliver_in_packet",
          "package": "tcp",
          "signature": "TCPSegment -\u003e HMonad threadt ()",
          "source": "src/Network-TCP-LTS-In.html#tcp_deliver_in_packet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP LTS In",
          "module": "Network.TCP.LTS.In",
          "name": "tcp_deliver_in_packet",
          "normalized": "TCPSegment-\u003eHMonad a()",
          "package": "tcp",
          "signature": "TCPSegment-\u003eHMonad threadt()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-LTS-In.html#v:tcp_deliver_in_packet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.LTS.InActive",
          "name": "InActive",
          "package": "tcp",
          "source": "src/Network-TCP-LTS-InActive.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Network TCP LTS InActive",
          "module": "Network.TCP.LTS.InActive",
          "name": "InActive",
          "package": "tcp",
          "partial": "In Active",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-LTS-InActive.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.LTS.InData",
          "name": "InData",
          "package": "tcp",
          "source": "src/Network-TCP-LTS-InData.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Network TCP LTS InData",
          "module": "Network.TCP.LTS.InData",
          "name": "InData",
          "package": "tcp",
          "partial": "In Data",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-LTS-InData.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.LTS.InMisc",
          "name": "InMisc",
          "package": "tcp",
          "source": "src/Network-TCP-LTS-InMisc.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Network TCP LTS InMisc",
          "module": "Network.TCP.LTS.InMisc",
          "name": "InMisc",
          "package": "tcp",
          "partial": "In Misc",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-LTS-InMisc.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.LTS.InPassive",
          "name": "InPassive",
          "package": "tcp",
          "source": "src/Network-TCP-LTS-InPassive.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Network TCP LTS InPassive",
          "module": "Network.TCP.LTS.InPassive",
          "name": "InPassive",
          "package": "tcp",
          "partial": "In Passive",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-LTS-InPassive.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.LTS.Out",
          "name": "Out",
          "package": "tcp",
          "source": "src/Network-TCP-LTS-Out.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Network TCP LTS Out",
          "module": "Network.TCP.LTS.Out",
          "name": "Out",
          "package": "tcp",
          "partial": "Out",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-LTS-Out.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.LTS.Out",
          "name": "tcp_output",
          "package": "tcp",
          "signature": "Bool -\u003e SMonad t ()",
          "source": "src/Network-TCP-LTS-Out.html#tcp_output",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP LTS Out",
          "module": "Network.TCP.LTS.Out",
          "name": "tcp_output",
          "normalized": "Bool-\u003eSMonad a()",
          "package": "tcp",
          "signature": "Bool-\u003eSMonad t()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-LTS-Out.html#v:tcp_output"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.LTS.Out",
          "name": "tcp_output_all",
          "package": "tcp",
          "signature": "SMonad t ()",
          "source": "src/Network-TCP-LTS-Out.html#tcp_output_all",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP LTS Out",
          "module": "Network.TCP.LTS.Out",
          "name": "tcp_output_all",
          "normalized": "SMonad a()",
          "package": "tcp",
          "signature": "SMonad t()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-LTS-Out.html#v:tcp_output_all"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.LTS.Time",
          "name": "Time",
          "package": "tcp",
          "source": "src/Network-TCP-LTS-Time.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Network TCP LTS Time",
          "module": "Network.TCP.LTS.Time",
          "name": "Time",
          "package": "tcp",
          "partial": "Time",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-LTS-Time.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.LTS.Time",
          "name": "tcp_update_timers",
          "package": "tcp",
          "signature": "HMonad t ()",
          "source": "src/Network-TCP-LTS-Time.html#tcp_update_timers",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP LTS Time",
          "module": "Network.TCP.LTS.Time",
          "name": "tcp_update_timers",
          "normalized": "HMonad a()",
          "package": "tcp",
          "signature": "HMonad t()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-LTS-Time.html#v:tcp_update_timers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.LTS.User",
          "name": "User",
          "package": "tcp",
          "source": "src/Network-TCP-LTS-User.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Network TCP LTS User",
          "module": "Network.TCP.LTS.User",
          "name": "User",
          "package": "tcp",
          "partial": "User",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-LTS-User.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.LTS.User",
          "name": "tcp_process_user_request",
          "package": "tcp",
          "signature": "(SockReq, SockRsp -\u003e t) -\u003e HMonad t (Maybe t)",
          "source": "src/Network-TCP-LTS-User.html#tcp_process_user_request",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP LTS User",
          "module": "Network.TCP.LTS.User",
          "name": "tcp_process_user_request",
          "normalized": "(SockReq,SockRsp-\u003ea)-\u003eHMonad a(Maybe a)",
          "package": "tcp",
          "signature": "(SockReq,SockRsp-\u003et)-\u003eHMonad t(Maybe t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-LTS-User.html#v:tcp_process_user_request"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.LTS.User",
          "name": "tcp_wakeup",
          "package": "tcp",
          "signature": "SMonad threadt ()",
          "source": "src/Network-TCP-LTS-User.html#tcp_wakeup",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP LTS User",
          "module": "Network.TCP.LTS.User",
          "name": "tcp_wakeup",
          "normalized": "SMonad a()",
          "package": "tcp",
          "signature": "SMonad threadt()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-LTS-User.html#v:tcp_wakeup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Pure",
          "name": "Pure",
          "package": "tcp",
          "source": "src/Network-TCP-Pure.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Network TCP Pure",
          "module": "Network.TCP.Pure",
          "name": "Pure",
          "package": "tcp",
          "partial": "Pure",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Pure.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Pure",
          "name": "Host",
          "package": "tcp",
          "source": "src/Network-TCP-Type-Socket.html#Host",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network TCP Pure",
          "module": "Network.TCP.Pure",
          "name": "Host",
          "package": "tcp",
          "partial": "Host",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Pure.html#t:Host"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Pure",
          "name": "IPMessage",
          "package": "tcp",
          "source": "src/Network-TCP-Type-Datagram.html#IPMessage",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network TCP Pure",
          "module": "Network.TCP.Pure",
          "name": "IPMessage",
          "package": "tcp",
          "partial": "IPMessage",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Pure.html#t:IPMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Pure",
          "name": "Time",
          "package": "tcp",
          "source": "src/Network-TCP-Type-Base.html#Time",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network TCP Pure",
          "module": "Network.TCP.Pure",
          "name": "Time",
          "package": "tcp",
          "partial": "Time",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Pure.html#t:Time"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Pure",
          "name": "tcp_init_host",
          "package": "tcp",
          "signature": "Time -\u003e [Port] -\u003e Host t",
          "source": "src/Network-TCP-Pure.html#tcp_init_host",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Pure",
          "module": "Network.TCP.Pure",
          "name": "tcp_init_host",
          "normalized": "Time-\u003e[Port]-\u003eHost a",
          "package": "tcp",
          "signature": "Time-\u003e[Port]-\u003eHost t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Pure.html#v:tcp_init_host"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Pure",
          "name": "tcp_packet_in",
          "package": "tcp",
          "signature": "IPMessage -\u003e Host t -\u003e Host t",
          "source": "src/Network-TCP-Pure.html#tcp_packet_in",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Pure",
          "module": "Network.TCP.Pure",
          "name": "tcp_packet_in",
          "normalized": "IPMessage-\u003eHost a-\u003eHost a",
          "package": "tcp",
          "signature": "IPMessage-\u003eHost t-\u003eHost t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Pure.html#v:tcp_packet_in"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Pure",
          "name": "tcp_packet_out",
          "package": "tcp",
          "signature": "Host t -\u003e (Host t, [IPMessage])",
          "source": "src/Network-TCP-Pure.html#tcp_packet_out",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Pure",
          "module": "Network.TCP.Pure",
          "name": "tcp_packet_out",
          "normalized": "Host a-\u003e(Host a,[IPMessage])",
          "package": "tcp",
          "signature": "Host t-\u003e(Host t,[IPMessage])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Pure.html#v:tcp_packet_out"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Pure",
          "name": "tcp_timer",
          "package": "tcp",
          "signature": "Time -\u003e Host t -\u003e Host t",
          "source": "src/Network-TCP-Pure.html#tcp_timer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Pure",
          "module": "Network.TCP.Pure",
          "name": "tcp_timer",
          "normalized": "Time-\u003eHost a-\u003eHost a",
          "package": "tcp",
          "signature": "Time-\u003eHost t-\u003eHost t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Pure.html#v:tcp_timer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Pure",
          "name": "tcp_timer_check",
          "package": "tcp",
          "signature": "Time -\u003e Host t -\u003e IO (Host t)",
          "source": "src/Network-TCP-Pure.html#tcp_timer_check",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Pure",
          "module": "Network.TCP.Pure",
          "name": "tcp_timer_check",
          "normalized": "Time-\u003eHost a-\u003eIO(Host a)",
          "package": "tcp",
          "signature": "Time-\u003eHost t-\u003eIO(Host t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Pure.html#v:tcp_timer_check"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Pure",
          "name": "tcp_user_req",
          "package": "tcp",
          "signature": "(SockReq, SockRsp -\u003e t) -\u003e Host t -\u003e (Host t, Maybe t)",
          "source": "src/Network-TCP-Pure.html#tcp_user_req",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Pure",
          "module": "Network.TCP.Pure",
          "name": "tcp_user_req",
          "normalized": "(SockReq,SockRsp-\u003ea)-\u003eHost a-\u003e(Host a,Maybe a)",
          "package": "tcp",
          "signature": "(SockReq,SockRsp-\u003et)-\u003eHost t-\u003e(Host t,Maybe t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Pure.html#v:tcp_user_req"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Pure",
          "name": "tcp_user_rsp",
          "package": "tcp",
          "signature": "Host t -\u003e (Host t, [t])",
          "source": "src/Network-TCP-Pure.html#tcp_user_rsp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Pure",
          "module": "Network.TCP.Pure",
          "name": "tcp_user_rsp",
          "normalized": "Host a-\u003e(Host a,[a])",
          "package": "tcp",
          "signature": "Host t-\u003e(Host t,[t])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Pure.html#v:tcp_user_rsp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Base",
          "name": "Base",
          "package": "tcp",
          "source": "src/Network-TCP-Type-Base.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Network TCP Type Base",
          "module": "Network.TCP.Type.Base",
          "name": "Base",
          "package": "tcp",
          "partial": "Base",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Base.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Base",
          "name": "Buffer",
          "package": "tcp",
          "source": "src/Network-TCP-Type-Base.html#Buffer",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network TCP Type Base",
          "module": "Network.TCP.Type.Base",
          "name": "Buffer",
          "package": "tcp",
          "partial": "Buffer",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Base.html#t:Buffer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Base",
          "name": "BufferChain",
          "package": "tcp",
          "source": "src/Network-TCP-Type-Base.html#BufferChain",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network TCP Type Base",
          "module": "Network.TCP.Type.Base",
          "name": "BufferChain",
          "package": "tcp",
          "partial": "Buffer Chain",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Base.html#t:BufferChain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Base",
          "name": "IPAddr",
          "package": "tcp",
          "source": "src/Network-TCP-Type-Base.html#IPAddr",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Network TCP Type Base",
          "module": "Network.TCP.Type.Base",
          "name": "IPAddr",
          "package": "tcp",
          "partial": "IPAddr",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Base.html#t:IPAddr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Base",
          "name": "Port",
          "package": "tcp",
          "source": "src/Network-TCP-Type-Base.html#Port",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network TCP Type Base",
          "module": "Network.TCP.Type.Base",
          "name": "Port",
          "package": "tcp",
          "partial": "Port",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Base.html#t:Port"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Base",
          "name": "Seq32",
          "package": "tcp",
          "source": "src/Network-TCP-Type-Base.html#Seq32",
          "type": "class"
        },
        "index": {
          "hierarchy": "Network TCP Type Base",
          "module": "Network.TCP.Type.Base",
          "name": "Seq32",
          "package": "tcp",
          "partial": "Seq",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Base.html#t:Seq32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Base",
          "name": "SeqForeign",
          "package": "tcp",
          "source": "src/Network-TCP-Type-Base.html#SeqForeign",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Network TCP Type Base",
          "module": "Network.TCP.Type.Base",
          "name": "SeqForeign",
          "package": "tcp",
          "partial": "Seq Foreign",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Base.html#t:SeqForeign"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Base",
          "name": "SeqLocal",
          "package": "tcp",
          "source": "src/Network-TCP-Type-Base.html#SeqLocal",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Network TCP Type Base",
          "module": "Network.TCP.Type.Base",
          "name": "SeqLocal",
          "package": "tcp",
          "partial": "Seq Local",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Base.html#t:SeqLocal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Base",
          "name": "SocketID",
          "package": "tcp",
          "source": "src/Network-TCP-Type-Base.html#SocketID",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Network TCP Type Base",
          "module": "Network.TCP.Type.Base",
          "name": "SocketID",
          "package": "tcp",
          "partial": "Socket ID",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Base.html#t:SocketID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Base",
          "name": "TCPAddr",
          "package": "tcp",
          "source": "src/Network-TCP-Type-Base.html#TCPAddr",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Network TCP Type Base",
          "module": "Network.TCP.Type.Base",
          "name": "TCPAddr",
          "package": "tcp",
          "partial": "TCPAddr",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Base.html#t:TCPAddr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Base",
          "name": "Time",
          "package": "tcp",
          "source": "src/Network-TCP-Type-Base.html#Time",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network TCP Type Base",
          "module": "Network.TCP.Type.Base",
          "name": "Time",
          "package": "tcp",
          "partial": "Time",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Base.html#t:Time"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Base",
          "name": "Timestamp",
          "package": "tcp",
          "source": "src/Network-TCP-Type-Base.html#Timestamp",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Network TCP Type Base",
          "module": "Network.TCP.Type.Base",
          "name": "Timestamp",
          "package": "tcp",
          "partial": "Timestamp",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Base.html#t:Timestamp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.TCP.Type.Base\",\"Network.TCP.Type.Syscall\"]",
          "name": "Buffer",
          "package": "tcp",
          "signature": "Buffer",
          "source": "src/Network-TCP-Type-Base.html#Buffer",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Base.html#v:Buffer\",\"http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Syscall.html#v:Buffer\"]"
        },
        "index": {
          "hierarchy": "Network TCP Type Base",
          "module": "Network.TCP.Type.Base",
          "name": "Buffer",
          "package": "tcp",
          "partial": "Buffer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Base.html#v:Buffer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Base",
          "name": "BufferChain",
          "package": "tcp",
          "signature": "BufferChain",
          "source": "src/Network-TCP-Type-Base.html#BufferChain",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Base",
          "module": "Network.TCP.Type.Base",
          "name": "BufferChain",
          "package": "tcp",
          "partial": "Buffer Chain",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Base.html#v:BufferChain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Base",
          "name": "IPAddr",
          "package": "tcp",
          "signature": "IPAddr Word32",
          "source": "src/Network-TCP-Type-Base.html#IPAddr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Base",
          "module": "Network.TCP.Type.Base",
          "name": "IPAddr",
          "package": "tcp",
          "partial": "IPAddr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Base.html#v:IPAddr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Base",
          "name": "SeqForeign",
          "package": "tcp",
          "signature": "SeqForeign Word32",
          "source": "src/Network-TCP-Type-Base.html#SeqForeign",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Base",
          "module": "Network.TCP.Type.Base",
          "name": "SeqForeign",
          "package": "tcp",
          "partial": "Seq Foreign",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Base.html#v:SeqForeign"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Base",
          "name": "SeqLocal",
          "package": "tcp",
          "signature": "SeqLocal Word32",
          "source": "src/Network-TCP-Type-Base.html#SeqLocal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Base",
          "module": "Network.TCP.Type.Base",
          "name": "SeqLocal",
          "package": "tcp",
          "partial": "Seq Local",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Base.html#v:SeqLocal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Base",
          "name": "SocketID",
          "package": "tcp",
          "signature": "SocketID (Port, TCPAddr)",
          "source": "src/Network-TCP-Type-Base.html#SocketID",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Base",
          "module": "Network.TCP.Type.Base",
          "name": "SocketID",
          "normalized": "SocketID(Port,TCPAddr)",
          "package": "tcp",
          "partial": "Socket ID",
          "signature": "SocketID(Port,TCPAddr)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Base.html#v:SocketID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Base",
          "name": "TCPAddr",
          "package": "tcp",
          "signature": "TCPAddr (IPAddr, Port)",
          "source": "src/Network-TCP-Type-Base.html#TCPAddr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Base",
          "module": "Network.TCP.Type.Base",
          "name": "TCPAddr",
          "normalized": "TCPAddr(IPAddr,Port)",
          "package": "tcp",
          "partial": "TCPAddr",
          "signature": "TCPAddr(IPAddr,Port)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Base.html#v:TCPAddr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Base",
          "name": "Timestamp",
          "package": "tcp",
          "signature": "Timestamp Word32",
          "source": "src/Network-TCP-Type-Base.html#Timestamp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Base",
          "module": "Network.TCP.Type.Base",
          "name": "Timestamp",
          "package": "tcp",
          "partial": "Timestamp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Base.html#v:Timestamp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.TCP.Type.Base\",\"Network.TCP.Type.Syscall\"]",
          "name": "buf_len",
          "package": "tcp",
          "signature": "Int",
          "source": "src/Network-TCP-Type-Base.html#Buffer",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Base.html#v:buf_len\",\"http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Syscall.html#v:buf_len\"]"
        },
        "index": {
          "hierarchy": "Network TCP Type Base",
          "module": "Network.TCP.Type.Base",
          "name": "buf_len",
          "package": "tcp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Base.html#v:buf_len"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.TCP.Type.Base\",\"Network.TCP.Type.Syscall\"]",
          "name": "buf_offset",
          "package": "tcp",
          "signature": "Int",
          "source": "src/Network-TCP-Type-Base.html#Buffer",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Base.html#v:buf_offset\",\"http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Syscall.html#v:buf_offset\"]"
        },
        "index": {
          "hierarchy": "Network TCP Type Base",
          "module": "Network.TCP.Type.Base",
          "name": "buf_offset",
          "package": "tcp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Base.html#v:buf_offset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.TCP.Type.Base\",\"Network.TCP.Type.Syscall\"]",
          "name": "buf_ptr",
          "package": "tcp",
          "signature": "(ForeignPtr CChar)",
          "source": "src/Network-TCP-Type-Base.html#Buffer",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Base.html#v:buf_ptr\",\"http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Syscall.html#v:buf_ptr\"]"
        },
        "index": {
          "hierarchy": "Network TCP Type Base",
          "module": "Network.TCP.Type.Base",
          "name": "buf_ptr",
          "package": "tcp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Base.html#v:buf_ptr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.TCP.Type.Base\",\"Network.TCP.Type.Syscall\"]",
          "name": "buf_size",
          "package": "tcp",
          "signature": "Int",
          "source": "src/Network-TCP-Type-Base.html#Buffer",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Base.html#v:buf_size\",\"http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Syscall.html#v:buf_size\"]"
        },
        "index": {
          "hierarchy": "Network TCP Type Base",
          "module": "Network.TCP.Type.Base",
          "name": "buf_size",
          "package": "tcp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Base.html#v:buf_size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Base",
          "name": "bufc_length",
          "package": "tcp",
          "signature": "Int",
          "source": "src/Network-TCP-Type-Base.html#BufferChain",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Base",
          "module": "Network.TCP.Type.Base",
          "name": "bufc_length",
          "package": "tcp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Base.html#v:bufc_length"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Base",
          "name": "bufc_list",
          "package": "tcp",
          "signature": "[Buffer]",
          "source": "src/Network-TCP-Type-Base.html#BufferChain",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Base",
          "module": "Network.TCP.Type.Base",
          "name": "bufc_list",
          "normalized": "[Buffer]",
          "package": "tcp",
          "signature": "[Buffer]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Base.html#v:bufc_list"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Base",
          "name": "buffer_empty",
          "package": "tcp",
          "signature": "Buffer",
          "source": "src/Network-TCP-Type-Base.html#buffer_empty",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Base",
          "module": "Network.TCP.Type.Base",
          "name": "buffer_empty",
          "package": "tcp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Base.html#v:buffer_empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Base",
          "name": "buffer_merge",
          "package": "tcp",
          "signature": "Buffer -\u003e Buffer -\u003e [Buffer]",
          "source": "src/Network-TCP-Type-Base.html#buffer_merge",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Base",
          "module": "Network.TCP.Type.Base",
          "name": "buffer_merge",
          "normalized": "Buffer-\u003eBuffer-\u003e[Buffer]",
          "package": "tcp",
          "signature": "Buffer-\u003eBuffer-\u003e[Buffer]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Base.html#v:buffer_merge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Base",
          "name": "buffer_ok",
          "package": "tcp",
          "signature": "Buffer -\u003e Bool",
          "source": "src/Network-TCP-Type-Base.html#buffer_ok",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Base",
          "module": "Network.TCP.Type.Base",
          "name": "buffer_ok",
          "normalized": "Buffer-\u003eBool",
          "package": "tcp",
          "signature": "Buffer-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Base.html#v:buffer_ok"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Base",
          "name": "buffer_split",
          "package": "tcp",
          "signature": "Int -\u003e Buffer -\u003e (Buffer, Buffer)",
          "source": "src/Network-TCP-Type-Base.html#buffer_split",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Base",
          "module": "Network.TCP.Type.Base",
          "name": "buffer_split",
          "normalized": "Int-\u003eBuffer-\u003e(Buffer,Buffer)",
          "package": "tcp",
          "signature": "Int-\u003eBuffer-\u003e(Buffer,Buffer)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Base.html#v:buffer_split"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Base",
          "name": "buffer_to_string",
          "package": "tcp",
          "signature": "Buffer -\u003e IO String",
          "source": "src/Network-TCP-Type-Base.html#buffer_to_string",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Base",
          "module": "Network.TCP.Type.Base",
          "name": "buffer_to_string",
          "normalized": "Buffer-\u003eIO String",
          "package": "tcp",
          "signature": "Buffer-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Base.html#v:buffer_to_string"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Base",
          "name": "bufferchain_collapse",
          "package": "tcp",
          "signature": "BufferChain -\u003e IO Buffer",
          "source": "src/Network-TCP-Type-Base.html#bufferchain_collapse",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Base",
          "module": "Network.TCP.Type.Base",
          "name": "bufferchain_collapse",
          "normalized": "BufferChain-\u003eIO Buffer",
          "package": "tcp",
          "signature": "BufferChain-\u003eIO Buffer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Base.html#v:bufferchain_collapse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Base",
          "name": "bufferchain_drop",
          "package": "tcp",
          "signature": "Int -\u003e BufferChain -\u003e BufferChain",
          "source": "src/Network-TCP-Type-Base.html#bufferchain_drop",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Base",
          "module": "Network.TCP.Type.Base",
          "name": "bufferchain_drop",
          "normalized": "Int-\u003eBufferChain-\u003eBufferChain",
          "package": "tcp",
          "signature": "Int-\u003eBufferChain-\u003eBufferChain",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Base.html#v:bufferchain_drop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Base",
          "name": "bufferchain_head",
          "package": "tcp",
          "signature": "BufferChain -\u003e Buffer",
          "source": "src/Network-TCP-Type-Base.html#bufferchain_head",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Base",
          "module": "Network.TCP.Type.Base",
          "name": "bufferchain_head",
          "normalized": "BufferChain-\u003eBuffer",
          "package": "tcp",
          "signature": "BufferChain-\u003eBuffer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Base.html#v:bufferchain_head"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Base",
          "name": "bufferchain_ok",
          "package": "tcp",
          "signature": "BufferChain -\u003e Bool",
          "source": "src/Network-TCP-Type-Base.html#bufferchain_ok",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Base",
          "module": "Network.TCP.Type.Base",
          "name": "bufferchain_ok",
          "normalized": "BufferChain-\u003eBool",
          "package": "tcp",
          "signature": "BufferChain-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Base.html#v:bufferchain_ok"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Base",
          "name": "bufferchain_split_at",
          "package": "tcp",
          "signature": "Int -\u003e BufferChain -\u003e (BufferChain, BufferChain)",
          "source": "src/Network-TCP-Type-Base.html#bufferchain_split_at",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Base",
          "module": "Network.TCP.Type.Base",
          "name": "bufferchain_split_at",
          "normalized": "Int-\u003eBufferChain-\u003e(BufferChain,BufferChain)",
          "package": "tcp",
          "signature": "Int-\u003eBufferChain-\u003e(BufferChain,BufferChain)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Base.html#v:bufferchain_split_at"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Base",
          "name": "bufferchain_tail",
          "package": "tcp",
          "signature": "BufferChain -\u003e BufferChain",
          "source": "src/Network-TCP-Type-Base.html#bufferchain_tail",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Base",
          "module": "Network.TCP.Type.Base",
          "name": "bufferchain_tail",
          "normalized": "BufferChain-\u003eBufferChain",
          "package": "tcp",
          "signature": "BufferChain-\u003eBufferChain",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Base.html#v:bufferchain_tail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Base",
          "name": "bufferchain_take",
          "package": "tcp",
          "signature": "Int -\u003e BufferChain -\u003e BufferChain",
          "source": "src/Network-TCP-Type-Base.html#bufferchain_take",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Base",
          "module": "Network.TCP.Type.Base",
          "name": "bufferchain_take",
          "normalized": "Int-\u003eBufferChain-\u003eBufferChain",
          "package": "tcp",
          "signature": "Int-\u003eBufferChain-\u003eBufferChain",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Base.html#v:bufferchain_take"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Base",
          "name": "get_ip",
          "package": "tcp",
          "signature": "TCPAddr -\u003e IPAddr",
          "source": "src/Network-TCP-Type-Base.html#get_ip",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Base",
          "module": "Network.TCP.Type.Base",
          "name": "get_ip",
          "normalized": "TCPAddr-\u003eIPAddr",
          "package": "tcp",
          "signature": "TCPAddr-\u003eIPAddr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Base.html#v:get_ip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Base",
          "name": "get_local_port",
          "package": "tcp",
          "signature": "SocketID -\u003e Port",
          "source": "src/Network-TCP-Type-Base.html#get_local_port",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Base",
          "module": "Network.TCP.Type.Base",
          "name": "get_local_port",
          "normalized": "SocketID-\u003ePort",
          "package": "tcp",
          "signature": "SocketID-\u003ePort",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Base.html#v:get_local_port"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Base",
          "name": "get_port",
          "package": "tcp",
          "signature": "TCPAddr -\u003e Port",
          "source": "src/Network-TCP-Type-Base.html#get_port",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Base",
          "module": "Network.TCP.Type.Base",
          "name": "get_port",
          "normalized": "TCPAddr-\u003ePort",
          "package": "tcp",
          "signature": "TCPAddr-\u003ePort",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Base.html#v:get_port"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Base",
          "name": "get_remote_addr",
          "package": "tcp",
          "signature": "SocketID -\u003e TCPAddr",
          "source": "src/Network-TCP-Type-Base.html#get_remote_addr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Base",
          "module": "Network.TCP.Type.Base",
          "name": "get_remote_addr",
          "normalized": "SocketID-\u003eTCPAddr",
          "package": "tcp",
          "signature": "SocketID-\u003eTCPAddr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Base.html#v:get_remote_addr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Base",
          "name": "new_buffer",
          "package": "tcp",
          "signature": "Int -\u003e IO Buffer",
          "source": "src/Network-TCP-Type-Base.html#new_buffer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Base",
          "module": "Network.TCP.Type.Base",
          "name": "new_buffer",
          "normalized": "Int-\u003eIO Buffer",
          "package": "tcp",
          "signature": "Int-\u003eIO Buffer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Base.html#v:new_buffer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Base",
          "name": "seconds_to_time",
          "package": "tcp",
          "signature": "Float -\u003e Time",
          "source": "src/Network-TCP-Type-Base.html#seconds_to_time",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Base",
          "module": "Network.TCP.Type.Base",
          "name": "seconds_to_time",
          "normalized": "Float-\u003eTime",
          "package": "tcp",
          "signature": "Float-\u003eTime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Base.html#v:seconds_to_time"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Base",
          "name": "seq_diff",
          "package": "tcp",
          "signature": "a -\u003e a -\u003e n",
          "source": "src/Network-TCP-Type-Base.html#seq_diff",
          "type": "method"
        },
        "index": {
          "hierarchy": "Network TCP Type Base",
          "module": "Network.TCP.Type.Base",
          "name": "seq_diff",
          "normalized": "a-\u003ea-\u003eb",
          "package": "tcp",
          "signature": "a-\u003ea-\u003en",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Base.html#v:seq_diff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Base",
          "name": "seq_geq",
          "package": "tcp",
          "signature": "a -\u003e a -\u003e Bool",
          "source": "src/Network-TCP-Type-Base.html#seq_geq",
          "type": "method"
        },
        "index": {
          "hierarchy": "Network TCP Type Base",
          "module": "Network.TCP.Type.Base",
          "name": "seq_geq",
          "normalized": "a-\u003ea-\u003eBool",
          "package": "tcp",
          "signature": "a-\u003ea-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Base.html#v:seq_geq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Base",
          "name": "seq_gt",
          "package": "tcp",
          "signature": "a -\u003e a -\u003e Bool",
          "source": "src/Network-TCP-Type-Base.html#seq_gt",
          "type": "method"
        },
        "index": {
          "hierarchy": "Network TCP Type Base",
          "module": "Network.TCP.Type.Base",
          "name": "seq_gt",
          "normalized": "a-\u003ea-\u003eBool",
          "package": "tcp",
          "signature": "a-\u003ea-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Base.html#v:seq_gt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Base",
          "name": "seq_leq",
          "package": "tcp",
          "signature": "a -\u003e a -\u003e Bool",
          "source": "src/Network-TCP-Type-Base.html#seq_leq",
          "type": "method"
        },
        "index": {
          "hierarchy": "Network TCP Type Base",
          "module": "Network.TCP.Type.Base",
          "name": "seq_leq",
          "normalized": "a-\u003ea-\u003eBool",
          "package": "tcp",
          "signature": "a-\u003ea-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Base.html#v:seq_leq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Base",
          "name": "seq_lt",
          "package": "tcp",
          "signature": "a -\u003e a -\u003e Bool",
          "source": "src/Network-TCP-Type-Base.html#seq_lt",
          "type": "method"
        },
        "index": {
          "hierarchy": "Network TCP Type Base",
          "module": "Network.TCP.Type.Base",
          "name": "seq_lt",
          "normalized": "a-\u003ea-\u003eBool",
          "package": "tcp",
          "signature": "a-\u003ea-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Base.html#v:seq_lt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Base",
          "name": "seq_minus",
          "package": "tcp",
          "signature": "a -\u003e n -\u003e a",
          "source": "src/Network-TCP-Type-Base.html#seq_minus",
          "type": "method"
        },
        "index": {
          "hierarchy": "Network TCP Type Base",
          "module": "Network.TCP.Type.Base",
          "name": "seq_minus",
          "normalized": "a-\u003eb-\u003ea",
          "package": "tcp",
          "signature": "a-\u003en-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Base.html#v:seq_minus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Base",
          "name": "seq_plus",
          "package": "tcp",
          "signature": "a -\u003e n -\u003e a",
          "source": "src/Network-TCP-Type-Base.html#seq_plus",
          "type": "method"
        },
        "index": {
          "hierarchy": "Network TCP Type Base",
          "module": "Network.TCP.Type.Base",
          "name": "seq_plus",
          "normalized": "a-\u003eb-\u003ea",
          "package": "tcp",
          "signature": "a-\u003en-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Base.html#v:seq_plus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Base",
          "name": "seq_val",
          "package": "tcp",
          "signature": "a -\u003e Word32",
          "source": "src/Network-TCP-Type-Base.html#seq_val",
          "type": "method"
        },
        "index": {
          "hierarchy": "Network TCP Type Base",
          "module": "Network.TCP.Type.Base",
          "name": "seq_val",
          "normalized": "a-\u003eWord",
          "package": "tcp",
          "signature": "a-\u003eWord",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Base.html#v:seq_val"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Base",
          "name": "string_to_buffer",
          "package": "tcp",
          "signature": "String -\u003e IO Buffer",
          "source": "src/Network-TCP-Type-Base.html#string_to_buffer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Base",
          "module": "Network.TCP.Type.Base",
          "name": "string_to_buffer",
          "normalized": "String-\u003eIO Buffer",
          "package": "tcp",
          "signature": "String-\u003eIO Buffer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Base.html#v:string_to_buffer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Datagram",
          "name": "Datagram",
          "package": "tcp",
          "source": "src/Network-TCP-Type-Datagram.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Network TCP Type Datagram",
          "module": "Network.TCP.Type.Datagram",
          "name": "Datagram",
          "package": "tcp",
          "partial": "Datagram",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Datagram.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Datagram",
          "name": "ICMPDatagram",
          "package": "tcp",
          "source": "src/Network-TCP-Type-Datagram.html#ICMPDatagram",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network TCP Type Datagram",
          "module": "Network.TCP.Type.Datagram",
          "name": "ICMPDatagram",
          "package": "tcp",
          "partial": "ICMPDatagram",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Datagram.html#t:ICMPDatagram"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Datagram",
          "name": "ICMPType",
          "package": "tcp",
          "source": "src/Network-TCP-Type-Datagram.html#ICMPType",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network TCP Type Datagram",
          "module": "Network.TCP.Type.Datagram",
          "name": "ICMPType",
          "package": "tcp",
          "partial": "ICMPType",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Datagram.html#t:ICMPType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Datagram",
          "name": "IPMessage",
          "package": "tcp",
          "source": "src/Network-TCP-Type-Datagram.html#IPMessage",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network TCP Type Datagram",
          "module": "Network.TCP.Type.Datagram",
          "name": "IPMessage",
          "package": "tcp",
          "partial": "IPMessage",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Datagram.html#t:IPMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Datagram",
          "name": "Protocol",
          "package": "tcp",
          "source": "src/Network-TCP-Type-Datagram.html#Protocol",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network TCP Type Datagram",
          "module": "Network.TCP.Type.Datagram",
          "name": "Protocol",
          "package": "tcp",
          "partial": "Protocol",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Datagram.html#t:Protocol"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Datagram",
          "name": "TCPSegment",
          "package": "tcp",
          "source": "src/Network-TCP-Type-Datagram.html#TCPSegment",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network TCP Type Datagram",
          "module": "Network.TCP.Type.Datagram",
          "name": "TCPSegment",
          "package": "tcp",
          "partial": "TCPSegment",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Datagram.html#t:TCPSegment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Datagram",
          "name": "UDPDatagram",
          "package": "tcp",
          "source": "src/Network-TCP-Type-Datagram.html#UDPDatagram",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network TCP Type Datagram",
          "module": "Network.TCP.Type.Datagram",
          "name": "UDPDatagram",
          "package": "tcp",
          "partial": "UDPDatagram",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Datagram.html#t:UDPDatagram"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Datagram",
          "name": "ICMPDatagram",
          "package": "tcp",
          "signature": "ICMPDatagram",
          "source": "src/Network-TCP-Type-Datagram.html#ICMPDatagram",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Datagram",
          "module": "Network.TCP.Type.Datagram",
          "name": "ICMPDatagram",
          "package": "tcp",
          "partial": "ICMPDatagram",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Datagram.html#v:ICMPDatagram"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Datagram",
          "name": "ICMPMessage",
          "package": "tcp",
          "signature": "ICMPMessage !ICMPDatagram",
          "source": "src/Network-TCP-Type-Datagram.html#IPMessage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Datagram",
          "module": "Network.TCP.Type.Datagram",
          "name": "ICMPMessage",
          "package": "tcp",
          "partial": "ICMPMessage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Datagram.html#v:ICMPMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Datagram",
          "name": "ICMP_PARAMPROB",
          "package": "tcp",
          "signature": "ICMP_PARAMPROB Int",
          "source": "src/Network-TCP-Type-Datagram.html#ICMPType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Datagram",
          "module": "Network.TCP.Type.Datagram",
          "name": "ICMP_PARAMPROB",
          "package": "tcp",
          "partial": "ICMP PARAMPROB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Datagram.html#v:ICMP_PARAMPROB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Datagram",
          "name": "ICMP_REDIRECT",
          "package": "tcp",
          "signature": "ICMP_REDIRECT Int",
          "source": "src/Network-TCP-Type-Datagram.html#ICMPType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Datagram",
          "module": "Network.TCP.Type.Datagram",
          "name": "ICMP_REDIRECT",
          "package": "tcp",
          "partial": "ICMP REDIRECT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Datagram.html#v:ICMP_REDIRECT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Datagram",
          "name": "ICMP_SOURCE_QUENCE",
          "package": "tcp",
          "signature": "ICMP_SOURCE_QUENCE Int",
          "source": "src/Network-TCP-Type-Datagram.html#ICMPType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Datagram",
          "module": "Network.TCP.Type.Datagram",
          "name": "ICMP_SOURCE_QUENCE",
          "package": "tcp",
          "partial": "ICMP SOURCE QUENCE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Datagram.html#v:ICMP_SOURCE_QUENCE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Datagram",
          "name": "ICMP_TIME_EXCEEDED",
          "package": "tcp",
          "signature": "ICMP_TIME_EXCEEDED Int",
          "source": "src/Network-TCP-Type-Datagram.html#ICMPType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Datagram",
          "module": "Network.TCP.Type.Datagram",
          "name": "ICMP_TIME_EXCEEDED",
          "package": "tcp",
          "partial": "ICMP TIME EXCEEDED",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Datagram.html#v:ICMP_TIME_EXCEEDED"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Datagram",
          "name": "ICMP_UNREACH",
          "package": "tcp",
          "signature": "ICMP_UNREACH Int",
          "source": "src/Network-TCP-Type-Datagram.html#ICMPType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Datagram",
          "module": "Network.TCP.Type.Datagram",
          "name": "ICMP_UNREACH",
          "package": "tcp",
          "partial": "ICMP UNREACH",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Datagram.html#v:ICMP_UNREACH"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Datagram",
          "name": "PROTO_TCP",
          "package": "tcp",
          "signature": "PROTO_TCP",
          "source": "src/Network-TCP-Type-Datagram.html#Protocol",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Datagram",
          "module": "Network.TCP.Type.Datagram",
          "name": "PROTO_TCP",
          "package": "tcp",
          "partial": "PROTO TCP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Datagram.html#v:PROTO_TCP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Datagram",
          "name": "PROTO_UDP",
          "package": "tcp",
          "signature": "PROTO_UDP",
          "source": "src/Network-TCP-Type-Datagram.html#Protocol",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Datagram",
          "module": "Network.TCP.Type.Datagram",
          "name": "PROTO_UDP",
          "package": "tcp",
          "partial": "PROTO UDP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Datagram.html#v:PROTO_UDP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Datagram",
          "name": "TCPMessage",
          "package": "tcp",
          "signature": "TCPMessage !TCPSegment",
          "source": "src/Network-TCP-Type-Datagram.html#IPMessage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Datagram",
          "module": "Network.TCP.Type.Datagram",
          "name": "TCPMessage",
          "package": "tcp",
          "partial": "TCPMessage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Datagram.html#v:TCPMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Datagram",
          "name": "TCPSegment",
          "package": "tcp",
          "signature": "TCPSegment",
          "source": "src/Network-TCP-Type-Datagram.html#TCPSegment",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Datagram",
          "module": "Network.TCP.Type.Datagram",
          "name": "TCPSegment",
          "package": "tcp",
          "partial": "TCPSegment",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Datagram.html#v:TCPSegment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Datagram",
          "name": "UDPDatagram",
          "package": "tcp",
          "signature": "UDPDatagram",
          "source": "src/Network-TCP-Type-Datagram.html#UDPDatagram",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Datagram",
          "module": "Network.TCP.Type.Datagram",
          "name": "UDPDatagram",
          "package": "tcp",
          "partial": "UDPDatagram",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Datagram.html#v:UDPDatagram"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Datagram",
          "name": "UDPMessage",
          "package": "tcp",
          "signature": "UDPMessage !UDPDatagram",
          "source": "src/Network-TCP-Type-Datagram.html#IPMessage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Datagram",
          "module": "Network.TCP.Type.Datagram",
          "name": "UDPMessage",
          "package": "tcp",
          "partial": "UDPMessage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Datagram.html#v:UDPMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Datagram",
          "name": "icmp_dst",
          "package": "tcp",
          "signature": "Maybe TCPAddr",
          "source": "src/Network-TCP-Type-Datagram.html#ICMPDatagram",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Datagram",
          "module": "Network.TCP.Type.Datagram",
          "name": "icmp_dst",
          "package": "tcp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Datagram.html#v:icmp_dst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Datagram",
          "name": "icmp_proto",
          "package": "tcp",
          "signature": "Protocol",
          "source": "src/Network-TCP-Type-Datagram.html#ICMPDatagram",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Datagram",
          "module": "Network.TCP.Type.Datagram",
          "name": "icmp_proto",
          "package": "tcp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Datagram.html#v:icmp_proto"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Datagram",
          "name": "icmp_recv",
          "package": "tcp",
          "signature": "IPAddr",
          "source": "src/Network-TCP-Type-Datagram.html#ICMPDatagram",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Datagram",
          "module": "Network.TCP.Type.Datagram",
          "name": "icmp_recv",
          "package": "tcp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Datagram.html#v:icmp_recv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Datagram",
          "name": "icmp_send",
          "package": "tcp",
          "signature": "IPAddr",
          "source": "src/Network-TCP-Type-Datagram.html#ICMPDatagram",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Datagram",
          "module": "Network.TCP.Type.Datagram",
          "name": "icmp_send",
          "package": "tcp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Datagram.html#v:icmp_send"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Datagram",
          "name": "icmp_seq",
          "package": "tcp",
          "signature": "Maybe SeqLocal",
          "source": "src/Network-TCP-Type-Datagram.html#ICMPDatagram",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Datagram",
          "module": "Network.TCP.Type.Datagram",
          "name": "icmp_seq",
          "package": "tcp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Datagram.html#v:icmp_seq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Datagram",
          "name": "icmp_src",
          "package": "tcp",
          "signature": "Maybe TCPAddr",
          "source": "src/Network-TCP-Type-Datagram.html#ICMPDatagram",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Datagram",
          "module": "Network.TCP.Type.Datagram",
          "name": "icmp_src",
          "package": "tcp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Datagram.html#v:icmp_src"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Datagram",
          "name": "icmp_t",
          "package": "tcp",
          "signature": "ICMPType",
          "source": "src/Network-TCP-Type-Datagram.html#ICMPDatagram",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Datagram",
          "module": "Network.TCP.Type.Datagram",
          "name": "icmp_t",
          "package": "tcp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Datagram.html#v:icmp_t"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Datagram",
          "name": "tcp_ACK",
          "package": "tcp",
          "signature": "Bool",
          "source": "src/Network-TCP-Type-Datagram.html#TCPSegment",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Datagram",
          "module": "Network.TCP.Type.Datagram",
          "name": "tcp_ACK",
          "package": "tcp",
          "partial": "ACK",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Datagram.html#v:tcp_ACK"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Datagram",
          "name": "tcp_FIN",
          "package": "tcp",
          "signature": "Bool",
          "source": "src/Network-TCP-Type-Datagram.html#TCPSegment",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Datagram",
          "module": "Network.TCP.Type.Datagram",
          "name": "tcp_FIN",
          "package": "tcp",
          "partial": "FIN",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Datagram.html#v:tcp_FIN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Datagram",
          "name": "tcp_PSH",
          "package": "tcp",
          "signature": "Bool",
          "source": "src/Network-TCP-Type-Datagram.html#TCPSegment",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Datagram",
          "module": "Network.TCP.Type.Datagram",
          "name": "tcp_PSH",
          "package": "tcp",
          "partial": "PSH",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Datagram.html#v:tcp_PSH"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Datagram",
          "name": "tcp_RST",
          "package": "tcp",
          "signature": "Bool",
          "source": "src/Network-TCP-Type-Datagram.html#TCPSegment",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Datagram",
          "module": "Network.TCP.Type.Datagram",
          "name": "tcp_RST",
          "package": "tcp",
          "partial": "RST",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Datagram.html#v:tcp_RST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Datagram",
          "name": "tcp_SYN",
          "package": "tcp",
          "signature": "Bool",
          "source": "src/Network-TCP-Type-Datagram.html#TCPSegment",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Datagram",
          "module": "Network.TCP.Type.Datagram",
          "name": "tcp_SYN",
          "package": "tcp",
          "partial": "SYN",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Datagram.html#v:tcp_SYN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Datagram",
          "name": "tcp_URG",
          "package": "tcp",
          "signature": "Bool",
          "source": "src/Network-TCP-Type-Datagram.html#TCPSegment",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Datagram",
          "module": "Network.TCP.Type.Datagram",
          "name": "tcp_URG",
          "package": "tcp",
          "partial": "URG",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Datagram.html#v:tcp_URG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Datagram",
          "name": "tcp_ack",
          "package": "tcp",
          "signature": "SeqForeign",
          "source": "src/Network-TCP-Type-Datagram.html#TCPSegment",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Datagram",
          "module": "Network.TCP.Type.Datagram",
          "name": "tcp_ack",
          "package": "tcp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Datagram.html#v:tcp_ack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Datagram",
          "name": "tcp_data",
          "package": "tcp",
          "signature": "BufferChain",
          "source": "src/Network-TCP-Type-Datagram.html#TCPSegment",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Datagram",
          "module": "Network.TCP.Type.Datagram",
          "name": "tcp_data",
          "package": "tcp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Datagram.html#v:tcp_data"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Datagram",
          "name": "tcp_dst",
          "package": "tcp",
          "signature": "TCPAddr",
          "source": "src/Network-TCP-Type-Datagram.html#TCPSegment",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Datagram",
          "module": "Network.TCP.Type.Datagram",
          "name": "tcp_dst",
          "package": "tcp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Datagram.html#v:tcp_dst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Datagram",
          "name": "tcp_mss",
          "package": "tcp",
          "signature": "(Maybe Int)",
          "source": "src/Network-TCP-Type-Datagram.html#TCPSegment",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Datagram",
          "module": "Network.TCP.Type.Datagram",
          "name": "tcp_mss",
          "package": "tcp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Datagram.html#v:tcp_mss"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Datagram",
          "name": "tcp_seq",
          "package": "tcp",
          "signature": "SeqLocal",
          "source": "src/Network-TCP-Type-Datagram.html#TCPSegment",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Datagram",
          "module": "Network.TCP.Type.Datagram",
          "name": "tcp_seq",
          "package": "tcp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Datagram.html#v:tcp_seq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Datagram",
          "name": "tcp_src",
          "package": "tcp",
          "signature": "TCPAddr",
          "source": "src/Network-TCP-Type-Datagram.html#TCPSegment",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Datagram",
          "module": "Network.TCP.Type.Datagram",
          "name": "tcp_src",
          "package": "tcp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Datagram.html#v:tcp_src"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Datagram",
          "name": "tcp_ts",
          "package": "tcp",
          "signature": "(Maybe (Timestamp, Timestamp))",
          "source": "src/Network-TCP-Type-Datagram.html#TCPSegment",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Datagram",
          "module": "Network.TCP.Type.Datagram",
          "name": "tcp_ts",
          "normalized": "(Maybe(Timestamp,Timestamp))",
          "package": "tcp",
          "signature": "(Maybe(Timestamp,Timestamp))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Datagram.html#v:tcp_ts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Datagram",
          "name": "tcp_urp",
          "package": "tcp",
          "signature": "Int",
          "source": "src/Network-TCP-Type-Datagram.html#TCPSegment",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Datagram",
          "module": "Network.TCP.Type.Datagram",
          "name": "tcp_urp",
          "package": "tcp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Datagram.html#v:tcp_urp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Datagram",
          "name": "tcp_win",
          "package": "tcp",
          "signature": "Int",
          "source": "src/Network-TCP-Type-Datagram.html#TCPSegment",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Datagram",
          "module": "Network.TCP.Type.Datagram",
          "name": "tcp_win",
          "package": "tcp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Datagram.html#v:tcp_win"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Datagram",
          "name": "tcp_ws",
          "package": "tcp",
          "signature": "(Maybe Int)",
          "source": "src/Network-TCP-Type-Datagram.html#TCPSegment",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Datagram",
          "module": "Network.TCP.Type.Datagram",
          "name": "tcp_ws",
          "package": "tcp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Datagram.html#v:tcp_ws"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Datagram",
          "name": "udp_data",
          "package": "tcp",
          "signature": "[Char]",
          "source": "src/Network-TCP-Type-Datagram.html#UDPDatagram",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Datagram",
          "module": "Network.TCP.Type.Datagram",
          "name": "udp_data",
          "normalized": "[Char]",
          "package": "tcp",
          "signature": "[Char]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Datagram.html#v:udp_data"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Datagram",
          "name": "udp_dst",
          "package": "tcp",
          "signature": "TCPAddr",
          "source": "src/Network-TCP-Type-Datagram.html#UDPDatagram",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Datagram",
          "module": "Network.TCP.Type.Datagram",
          "name": "udp_dst",
          "package": "tcp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Datagram.html#v:udp_dst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Datagram",
          "name": "udp_src",
          "package": "tcp",
          "signature": "TCPAddr",
          "source": "src/Network-TCP-Type-Datagram.html#UDPDatagram",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Datagram",
          "module": "Network.TCP.Type.Datagram",
          "name": "udp_src",
          "package": "tcp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Datagram.html#v:udp_src"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Socket",
          "name": "Socket",
          "package": "tcp",
          "source": "src/Network-TCP-Type-Socket.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Network TCP Type Socket",
          "module": "Network.TCP.Type.Socket",
          "name": "Socket",
          "package": "tcp",
          "partial": "Socket",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Socket.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Socket",
          "name": "Host",
          "package": "tcp",
          "source": "src/Network-TCP-Type-Socket.html#Host",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network TCP Type Socket",
          "module": "Network.TCP.Type.Socket",
          "name": "Host",
          "package": "tcp",
          "partial": "Host",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Socket.html#t:Host"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Socket",
          "name": "IOBC",
          "package": "tcp",
          "source": "src/Network-TCP-Type-Socket.html#IOBC",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network TCP Type Socket",
          "module": "Network.TCP.Type.Socket",
          "name": "IOBC",
          "package": "tcp",
          "partial": "IOBC",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Socket.html#t:IOBC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Socket",
          "name": "RexmtMode",
          "package": "tcp",
          "source": "src/Network-TCP-Type-Socket.html#RexmtMode",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network TCP Type Socket",
          "module": "Network.TCP.Type.Socket",
          "name": "RexmtMode",
          "package": "tcp",
          "partial": "Rexmt Mode",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Socket.html#t:RexmtMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Socket",
          "name": "Rttinf",
          "package": "tcp",
          "source": "src/Network-TCP-Type-Socket.html#Rttinf",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network TCP Type Socket",
          "module": "Network.TCP.Type.Socket",
          "name": "Rttinf",
          "package": "tcp",
          "partial": "Rttinf",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Socket.html#t:Rttinf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Socket",
          "name": "SocketListen",
          "package": "tcp",
          "source": "src/Network-TCP-Type-Socket.html#SocketListen",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network TCP Type Socket",
          "module": "Network.TCP.Type.Socket",
          "name": "SocketListen",
          "package": "tcp",
          "partial": "Socket Listen",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Socket.html#t:SocketListen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Socket",
          "name": "TCBMisc",
          "package": "tcp",
          "source": "src/Network-TCP-Type-Socket.html#TCBMisc",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network TCP Type Socket",
          "module": "Network.TCP.Type.Socket",
          "name": "TCBMisc",
          "package": "tcp",
          "partial": "TCBMisc",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Socket.html#t:TCBMisc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Socket",
          "name": "TCBReceiving",
          "package": "tcp",
          "source": "src/Network-TCP-Type-Socket.html#TCBReceiving",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network TCP Type Socket",
          "module": "Network.TCP.Type.Socket",
          "name": "TCBReceiving",
          "package": "tcp",
          "partial": "TCBReceiving",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Socket.html#t:TCBReceiving"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Socket",
          "name": "TCBSending",
          "package": "tcp",
          "source": "src/Network-TCP-Type-Socket.html#TCBSending",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network TCP Type Socket",
          "module": "Network.TCP.Type.Socket",
          "name": "TCBSending",
          "package": "tcp",
          "partial": "TCBSending",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Socket.html#t:TCBSending"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Socket",
          "name": "TCBTiming",
          "package": "tcp",
          "source": "src/Network-TCP-Type-Socket.html#TCBTiming",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network TCP Type Socket",
          "module": "Network.TCP.Type.Socket",
          "name": "TCBTiming",
          "package": "tcp",
          "partial": "TCBTiming",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Socket.html#t:TCBTiming"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Socket",
          "name": "TCPReassSegment",
          "package": "tcp",
          "source": "src/Network-TCP-Type-Socket.html#TCPReassSegment",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network TCP Type Socket",
          "module": "Network.TCP.Type.Socket",
          "name": "TCPReassSegment",
          "package": "tcp",
          "partial": "TCPReass Segment",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Socket.html#t:TCPReassSegment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Socket",
          "name": "TCPSocket",
          "package": "tcp",
          "source": "src/Network-TCP-Type-Socket.html#TCPSocket",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network TCP Type Socket",
          "module": "Network.TCP.Type.Socket",
          "name": "TCPSocket",
          "package": "tcp",
          "partial": "TCPSocket",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Socket.html#t:TCPSocket"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Socket",
          "name": "TCPState",
          "package": "tcp",
          "source": "src/Network-TCP-Type-Socket.html#TCPState",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network TCP Type Socket",
          "module": "Network.TCP.Type.Socket",
          "name": "TCPState",
          "package": "tcp",
          "partial": "TCPState",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Socket.html#t:TCPState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Socket",
          "name": "CLOSED",
          "package": "tcp",
          "signature": "CLOSED",
          "source": "src/Network-TCP-Type-Socket.html#TCPState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Socket",
          "module": "Network.TCP.Type.Socket",
          "name": "CLOSED",
          "package": "tcp",
          "partial": "CLOSED",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Socket.html#v:CLOSED"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Socket",
          "name": "CLOSE_WAIT",
          "package": "tcp",
          "signature": "CLOSE_WAIT",
          "source": "src/Network-TCP-Type-Socket.html#TCPState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Socket",
          "module": "Network.TCP.Type.Socket",
          "name": "CLOSE_WAIT",
          "package": "tcp",
          "partial": "CLOSE WAIT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Socket.html#v:CLOSE_WAIT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Socket",
          "name": "CLOSING",
          "package": "tcp",
          "signature": "CLOSING",
          "source": "src/Network-TCP-Type-Socket.html#TCPState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Socket",
          "module": "Network.TCP.Type.Socket",
          "name": "CLOSING",
          "package": "tcp",
          "partial": "CLOSING",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Socket.html#v:CLOSING"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Socket",
          "name": "ESTABLISHED",
          "package": "tcp",
          "signature": "ESTABLISHED",
          "source": "src/Network-TCP-Type-Socket.html#TCPState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Socket",
          "module": "Network.TCP.Type.Socket",
          "name": "ESTABLISHED",
          "package": "tcp",
          "partial": "ESTABLISHED",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Socket.html#v:ESTABLISHED"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Socket",
          "name": "FIN_WAIT_1",
          "package": "tcp",
          "signature": "FIN_WAIT_1",
          "source": "src/Network-TCP-Type-Socket.html#TCPState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Socket",
          "module": "Network.TCP.Type.Socket",
          "name": "FIN_WAIT_1",
          "package": "tcp",
          "partial": "FIN WAIT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Socket.html#v:FIN_WAIT_1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Socket",
          "name": "FIN_WAIT_2",
          "package": "tcp",
          "signature": "FIN_WAIT_2",
          "source": "src/Network-TCP-Type-Socket.html#TCPState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Socket",
          "module": "Network.TCP.Type.Socket",
          "name": "FIN_WAIT_2",
          "package": "tcp",
          "partial": "FIN WAIT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Socket.html#v:FIN_WAIT_2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Socket",
          "name": "HAD_OOBDATA",
          "package": "tcp",
          "signature": "HAD_OOBDATA",
          "source": "src/Network-TCP-Type-Socket.html#IOBC",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Socket",
          "module": "Network.TCP.Type.Socket",
          "name": "HAD_OOBDATA",
          "package": "tcp",
          "partial": "HAD OOBDATA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Socket.html#v:HAD_OOBDATA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Socket",
          "name": "Host",
          "package": "tcp",
          "signature": "Host",
          "source": "src/Network-TCP-Type-Socket.html#Host",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Socket",
          "module": "Network.TCP.Type.Socket",
          "name": "Host",
          "package": "tcp",
          "partial": "Host",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Socket.html#v:Host"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Socket",
          "name": "LAST_ACK",
          "package": "tcp",
          "signature": "LAST_ACK",
          "source": "src/Network-TCP-Type-Socket.html#TCPState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Socket",
          "module": "Network.TCP.Type.Socket",
          "name": "LAST_ACK",
          "package": "tcp",
          "partial": "LAST ACK",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Socket.html#v:LAST_ACK"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Socket",
          "name": "LISTEN",
          "package": "tcp",
          "signature": "LISTEN",
          "source": "src/Network-TCP-Type-Socket.html#TCPState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Socket",
          "module": "Network.TCP.Type.Socket",
          "name": "LISTEN",
          "package": "tcp",
          "partial": "LISTEN",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Socket.html#v:LISTEN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Socket",
          "name": "NO_OOBDATA",
          "package": "tcp",
          "signature": "NO_OOBDATA",
          "source": "src/Network-TCP-Type-Socket.html#IOBC",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Socket",
          "module": "Network.TCP.Type.Socket",
          "name": "NO_OOBDATA",
          "package": "tcp",
          "partial": "NO OOBDATA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Socket.html#v:NO_OOBDATA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Socket",
          "name": "OOBDATA",
          "package": "tcp",
          "signature": "OOBDATA Buffer",
          "source": "src/Network-TCP-Type-Socket.html#IOBC",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Socket",
          "module": "Network.TCP.Type.Socket",
          "name": "OOBDATA",
          "package": "tcp",
          "partial": "OOBDATA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Socket.html#v:OOBDATA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Socket",
          "name": "Persist",
          "package": "tcp",
          "signature": "Persist",
          "source": "src/Network-TCP-Type-Socket.html#RexmtMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Socket",
          "module": "Network.TCP.Type.Socket",
          "name": "Persist",
          "package": "tcp",
          "partial": "Persist",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Socket.html#v:Persist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Socket",
          "name": "Rexmt",
          "package": "tcp",
          "signature": "Rexmt",
          "source": "src/Network-TCP-Type-Socket.html#RexmtMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Socket",
          "module": "Network.TCP.Type.Socket",
          "name": "Rexmt",
          "package": "tcp",
          "partial": "Rexmt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Socket.html#v:Rexmt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Socket",
          "name": "RexmtSyn",
          "package": "tcp",
          "signature": "RexmtSyn",
          "source": "src/Network-TCP-Type-Socket.html#RexmtMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Socket",
          "module": "Network.TCP.Type.Socket",
          "name": "RexmtSyn",
          "package": "tcp",
          "partial": "Rexmt Syn",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Socket.html#v:RexmtSyn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Socket",
          "name": "Rttinf",
          "package": "tcp",
          "signature": "Rttinf",
          "source": "src/Network-TCP-Type-Socket.html#Rttinf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Socket",
          "module": "Network.TCP.Type.Socket",
          "name": "Rttinf",
          "package": "tcp",
          "partial": "Rttinf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Socket.html#v:Rttinf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Socket",
          "name": "SYN_RECEIVED",
          "package": "tcp",
          "signature": "SYN_RECEIVED",
          "source": "src/Network-TCP-Type-Socket.html#TCPState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Socket",
          "module": "Network.TCP.Type.Socket",
          "name": "SYN_RECEIVED",
          "package": "tcp",
          "partial": "SYN RECEIVED",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Socket.html#v:SYN_RECEIVED"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Socket",
          "name": "SYN_SENT",
          "package": "tcp",
          "signature": "SYN_SENT",
          "source": "src/Network-TCP-Type-Socket.html#TCPState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Socket",
          "module": "Network.TCP.Type.Socket",
          "name": "SYN_SENT",
          "package": "tcp",
          "partial": "SYN SENT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Socket.html#v:SYN_SENT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Socket",
          "name": "SocketListen",
          "package": "tcp",
          "signature": "SocketListen",
          "source": "src/Network-TCP-Type-Socket.html#SocketListen",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Socket",
          "module": "Network.TCP.Type.Socket",
          "name": "SocketListen",
          "package": "tcp",
          "partial": "Socket Listen",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Socket.html#v:SocketListen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Socket",
          "name": "TCBMisc",
          "package": "tcp",
          "signature": "TCBMisc",
          "source": "src/Network-TCP-Type-Socket.html#TCBMisc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Socket",
          "module": "Network.TCP.Type.Socket",
          "name": "TCBMisc",
          "package": "tcp",
          "partial": "TCBMisc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Socket.html#v:TCBMisc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Socket",
          "name": "TCBReceiving",
          "package": "tcp",
          "signature": "TCBReceiving",
          "source": "src/Network-TCP-Type-Socket.html#TCBReceiving",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Socket",
          "module": "Network.TCP.Type.Socket",
          "name": "TCBReceiving",
          "package": "tcp",
          "partial": "TCBReceiving",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Socket.html#v:TCBReceiving"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Socket",
          "name": "TCBSending",
          "package": "tcp",
          "signature": "TCBSending",
          "source": "src/Network-TCP-Type-Socket.html#TCBSending",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Socket",
          "module": "Network.TCP.Type.Socket",
          "name": "TCBSending",
          "package": "tcp",
          "partial": "TCBSending",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Socket.html#v:TCBSending"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Socket",
          "name": "TCBTiming",
          "package": "tcp",
          "signature": "TCBTiming",
          "source": "src/Network-TCP-Type-Socket.html#TCBTiming",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Socket",
          "module": "Network.TCP.Type.Socket",
          "name": "TCBTiming",
          "package": "tcp",
          "partial": "TCBTiming",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Socket.html#v:TCBTiming"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Socket",
          "name": "TCPReassSegment",
          "package": "tcp",
          "signature": "TCPReassSegment",
          "source": "src/Network-TCP-Type-Socket.html#TCPReassSegment",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Socket",
          "module": "Network.TCP.Type.Socket",
          "name": "TCPReassSegment",
          "package": "tcp",
          "partial": "TCPReass Segment",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Socket.html#v:TCPReassSegment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Socket",
          "name": "TCPSocket",
          "package": "tcp",
          "signature": "TCPSocket",
          "source": "src/Network-TCP-Type-Socket.html#TCPSocket",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Socket",
          "module": "Network.TCP.Type.Socket",
          "name": "TCPSocket",
          "package": "tcp",
          "partial": "TCPSocket",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Socket.html#v:TCPSocket"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Socket",
          "name": "TIME_WAIT",
          "package": "tcp",
          "signature": "TIME_WAIT",
          "source": "src/Network-TCP-Type-Socket.html#TCPState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Socket",
          "module": "Network.TCP.Type.Socket",
          "name": "TIME_WAIT",
          "package": "tcp",
          "partial": "TIME WAIT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Socket.html#v:TIME_WAIT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Socket",
          "name": "bsd_cantconnect",
          "package": "tcp",
          "signature": "Bool",
          "source": "src/Network-TCP-Type-Socket.html#TCBMisc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Socket",
          "module": "Network.TCP.Type.Socket",
          "name": "bsd_cantconnect",
          "package": "tcp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Socket.html#v:bsd_cantconnect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Socket",
          "name": "cantrcvmore",
          "package": "tcp",
          "signature": "Bool",
          "source": "src/Network-TCP-Type-Socket.html#TCBMisc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Socket",
          "module": "Network.TCP.Type.Socket",
          "name": "cantrcvmore",
          "package": "tcp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Socket.html#v:cantrcvmore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Socket",
          "name": "cantsndmore",
          "package": "tcp",
          "signature": "Bool",
          "source": "src/Network-TCP-Type-Socket.html#TCBMisc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Socket",
          "module": "Network.TCP.Type.Socket",
          "name": "cantsndmore",
          "package": "tcp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Socket.html#v:cantsndmore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Socket",
          "name": "cb",
          "package": "tcp",
          "signature": "TCBMisc",
          "source": "src/Network-TCP-Type-Socket.html#TCPSocket",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Socket",
          "module": "Network.TCP.Type.Socket",
          "name": "cb",
          "package": "tcp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Socket.html#v:cb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Socket",
          "name": "cb_rcv",
          "package": "tcp",
          "signature": "TCBReceiving",
          "source": "src/Network-TCP-Type-Socket.html#TCPSocket",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Socket",
          "module": "Network.TCP.Type.Socket",
          "name": "cb_rcv",
          "package": "tcp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Socket.html#v:cb_rcv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Socket",
          "name": "cb_snd",
          "package": "tcp",
          "signature": "TCBSending",
          "source": "src/Network-TCP-Type-Socket.html#TCPSocket",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Socket",
          "module": "Network.TCP.Type.Socket",
          "name": "cb_snd",
          "package": "tcp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Socket.html#v:cb_snd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Socket",
          "name": "cb_time",
          "package": "tcp",
          "signature": "TCBTiming",
          "source": "src/Network-TCP-Type-Socket.html#TCPSocket",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Socket",
          "module": "Network.TCP.Type.Socket",
          "name": "cb_time",
          "package": "tcp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Socket.html#v:cb_time"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Socket",
          "name": "clock",
          "package": "tcp",
          "signature": "Time",
          "source": "src/Network-TCP-Type-Socket.html#Host",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Socket",
          "module": "Network.TCP.Type.Socket",
          "name": "clock",
          "package": "tcp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Socket.html#v:clock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Socket",
          "name": "iobc",
          "package": "tcp",
          "signature": "IOBC",
          "source": "src/Network-TCP-Type-Socket.html#TCBMisc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Socket",
          "module": "Network.TCP.Type.Socket",
          "name": "iobc",
          "package": "tcp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Socket.html#v:iobc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Socket",
          "name": "irs",
          "package": "tcp",
          "signature": "SeqForeign",
          "source": "src/Network-TCP-Type-Socket.html#TCBMisc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Socket",
          "module": "Network.TCP.Type.Socket",
          "name": "irs",
          "package": "tcp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Socket.html#v:irs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Socket",
          "name": "iss",
          "package": "tcp",
          "signature": "SeqLocal",
          "source": "src/Network-TCP-Type-Socket.html#TCBMisc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Socket",
          "module": "Network.TCP.Type.Socket",
          "name": "iss",
          "package": "tcp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Socket.html#v:iss"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Socket",
          "name": "last_ack_sent",
          "package": "tcp",
          "signature": "SeqForeign",
          "source": "src/Network-TCP-Type-Socket.html#TCBReceiving",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Socket",
          "module": "Network.TCP.Type.Socket",
          "name": "last_ack_sent",
          "package": "tcp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Socket.html#v:last_ack_sent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Socket",
          "name": "lis_q",
          "package": "tcp",
          "signature": "[SocketID]",
          "source": "src/Network-TCP-Type-Socket.html#SocketListen",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Socket",
          "module": "Network.TCP.Type.Socket",
          "name": "lis_q",
          "normalized": "[SocketID]",
          "package": "tcp",
          "signature": "[SocketID]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Socket.html#v:lis_q"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Socket",
          "name": "lis_q0",
          "package": "tcp",
          "signature": "[SocketID]",
          "source": "src/Network-TCP-Type-Socket.html#SocketListen",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Socket",
          "module": "Network.TCP.Type.Socket",
          "name": "lis_q0",
          "normalized": "[SocketID]",
          "package": "tcp",
          "signature": "[SocketID]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Socket.html#v:lis_q0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Socket",
          "name": "lis_qlimit",
          "package": "tcp",
          "signature": "Int",
          "source": "src/Network-TCP-Type-Socket.html#SocketListen",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Socket",
          "module": "Network.TCP.Type.Socket",
          "name": "lis_qlimit",
          "package": "tcp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Socket.html#v:lis_qlimit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Socket",
          "name": "local_addr",
          "package": "tcp",
          "signature": "TCPAddr",
          "source": "src/Network-TCP-Type-Socket.html#TCBMisc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Socket",
          "module": "Network.TCP.Type.Socket",
          "name": "local_addr",
          "package": "tcp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Socket.html#v:local_addr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Socket",
          "name": "local_ports",
          "package": "tcp",
          "signature": "[Port]",
          "source": "src/Network-TCP-Type-Socket.html#Host",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Socket",
          "module": "Network.TCP.Type.Socket",
          "name": "local_ports",
          "normalized": "[Port]",
          "package": "tcp",
          "signature": "[Port]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Socket.html#v:local_ports"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Socket",
          "name": "next_timers",
          "package": "tcp",
          "signature": "(Time, Time)",
          "source": "src/Network-TCP-Type-Socket.html#Host",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Socket",
          "module": "Network.TCP.Type.Socket",
          "name": "next_timers",
          "normalized": "(Time,Time)",
          "package": "tcp",
          "signature": "(Time,Time)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Socket.html#v:next_timers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Socket",
          "name": "output_queue",
          "package": "tcp",
          "signature": "[IPMessage]",
          "source": "src/Network-TCP-Type-Socket.html#Host",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Socket",
          "module": "Network.TCP.Type.Socket",
          "name": "output_queue",
          "normalized": "[IPMessage]",
          "package": "tcp",
          "signature": "[IPMessage]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Socket.html#v:output_queue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Socket",
          "name": "parent_id",
          "package": "tcp",
          "signature": "SocketID",
          "source": "src/Network-TCP-Type-Socket.html#TCBMisc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Socket",
          "module": "Network.TCP.Type.Socket",
          "name": "parent_id",
          "package": "tcp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Socket.html#v:parent_id"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Socket",
          "name": "rcv_adv",
          "package": "tcp",
          "signature": "SeqForeign",
          "source": "src/Network-TCP-Type-Socket.html#TCBReceiving",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Socket",
          "module": "Network.TCP.Type.Socket",
          "name": "rcv_adv",
          "package": "tcp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Socket.html#v:rcv_adv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Socket",
          "name": "rcv_nxt",
          "package": "tcp",
          "signature": "SeqForeign",
          "source": "src/Network-TCP-Type-Socket.html#TCBReceiving",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Socket",
          "module": "Network.TCP.Type.Socket",
          "name": "rcv_nxt",
          "package": "tcp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Socket.html#v:rcv_nxt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Socket",
          "name": "rcv_scale",
          "package": "tcp",
          "signature": "Int",
          "source": "src/Network-TCP-Type-Socket.html#TCBMisc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Socket",
          "module": "Network.TCP.Type.Socket",
          "name": "rcv_scale",
          "package": "tcp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Socket.html#v:rcv_scale"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Socket",
          "name": "rcv_up",
          "package": "tcp",
          "signature": "SeqForeign",
          "source": "src/Network-TCP-Type-Socket.html#TCBMisc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Socket",
          "module": "Network.TCP.Type.Socket",
          "name": "rcv_up",
          "package": "tcp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Socket.html#v:rcv_up"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Socket",
          "name": "rcv_wnd",
          "package": "tcp",
          "signature": "Int",
          "source": "src/Network-TCP-Type-Socket.html#TCBReceiving",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Socket",
          "module": "Network.TCP.Type.Socket",
          "name": "rcv_wnd",
          "package": "tcp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Socket.html#v:rcv_wnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Socket",
          "name": "rcvq",
          "package": "tcp",
          "signature": "BufferChain",
          "source": "src/Network-TCP-Type-Socket.html#TCBReceiving",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Socket",
          "module": "Network.TCP.Type.Socket",
          "name": "rcvq",
          "package": "tcp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Socket.html#v:rcvq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Socket",
          "name": "rcvurp",
          "package": "tcp",
          "signature": "(Maybe Int)",
          "source": "src/Network-TCP-Type-Socket.html#TCBMisc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Socket",
          "module": "Network.TCP.Type.Socket",
          "name": "rcvurp",
          "package": "tcp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Socket.html#v:rcvurp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Socket",
          "name": "ready_list",
          "package": "tcp",
          "signature": "[threadt]",
          "source": "src/Network-TCP-Type-Socket.html#Host",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Socket",
          "module": "Network.TCP.Type.Socket",
          "name": "ready_list",
          "normalized": "[a]",
          "package": "tcp",
          "signature": "[threadt]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Socket.html#v:ready_list"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Socket",
          "name": "remote_addr",
          "package": "tcp",
          "signature": "TCPAddr",
          "source": "src/Network-TCP-Type-Socket.html#TCBMisc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Socket",
          "module": "Network.TCP.Type.Socket",
          "name": "remote_addr",
          "package": "tcp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Socket.html#v:remote_addr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Socket",
          "name": "request_r_scale",
          "package": "tcp",
          "signature": "(Maybe Int)",
          "source": "src/Network-TCP-Type-Socket.html#TCBMisc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Socket",
          "module": "Network.TCP.Type.Socket",
          "name": "request_r_scale",
          "package": "tcp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Socket.html#v:request_r_scale"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Socket",
          "name": "self_id",
          "package": "tcp",
          "signature": "SocketID",
          "source": "src/Network-TCP-Type-Socket.html#TCBMisc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Socket",
          "module": "Network.TCP.Type.Socket",
          "name": "self_id",
          "package": "tcp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Socket.html#v:self_id"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Socket",
          "name": "snd_cwnd",
          "package": "tcp",
          "signature": "Int",
          "source": "src/Network-TCP-Type-Socket.html#TCBSending",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Socket",
          "module": "Network.TCP.Type.Socket",
          "name": "snd_cwnd",
          "package": "tcp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Socket.html#v:snd_cwnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Socket",
          "name": "snd_cwnd_prev",
          "package": "tcp",
          "signature": "Int",
          "source": "src/Network-TCP-Type-Socket.html#TCBMisc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Socket",
          "module": "Network.TCP.Type.Socket",
          "name": "snd_cwnd_prev",
          "package": "tcp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Socket.html#v:snd_cwnd_prev"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Socket",
          "name": "snd_max",
          "package": "tcp",
          "signature": "SeqLocal",
          "source": "src/Network-TCP-Type-Socket.html#TCBSending",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Socket",
          "module": "Network.TCP.Type.Socket",
          "name": "snd_max",
          "package": "tcp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Socket.html#v:snd_max"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Socket",
          "name": "snd_nxt",
          "package": "tcp",
          "signature": "SeqLocal",
          "source": "src/Network-TCP-Type-Socket.html#TCBSending",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Socket",
          "module": "Network.TCP.Type.Socket",
          "name": "snd_nxt",
          "package": "tcp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Socket.html#v:snd_nxt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Socket",
          "name": "snd_recover",
          "package": "tcp",
          "signature": "SeqLocal",
          "source": "src/Network-TCP-Type-Socket.html#TCBMisc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Socket",
          "module": "Network.TCP.Type.Socket",
          "name": "snd_recover",
          "package": "tcp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Socket.html#v:snd_recover"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Socket",
          "name": "snd_scale",
          "package": "tcp",
          "signature": "Int",
          "source": "src/Network-TCP-Type-Socket.html#TCBMisc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Socket",
          "module": "Network.TCP.Type.Socket",
          "name": "snd_scale",
          "package": "tcp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Socket.html#v:snd_scale"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Socket",
          "name": "snd_ssthresh",
          "package": "tcp",
          "signature": "Int",
          "source": "src/Network-TCP-Type-Socket.html#TCBMisc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Socket",
          "module": "Network.TCP.Type.Socket",
          "name": "snd_ssthresh",
          "package": "tcp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Socket.html#v:snd_ssthresh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Socket",
          "name": "snd_ssthresh_prev",
          "package": "tcp",
          "signature": "Int",
          "source": "src/Network-TCP-Type-Socket.html#TCBMisc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Socket",
          "module": "Network.TCP.Type.Socket",
          "name": "snd_ssthresh_prev",
          "package": "tcp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Socket.html#v:snd_ssthresh_prev"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Socket",
          "name": "snd_una",
          "package": "tcp",
          "signature": "SeqLocal",
          "source": "src/Network-TCP-Type-Socket.html#TCBSending",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Socket",
          "module": "Network.TCP.Type.Socket",
          "name": "snd_una",
          "package": "tcp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Socket.html#v:snd_una"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Socket",
          "name": "snd_wl1",
          "package": "tcp",
          "signature": "SeqForeign",
          "source": "src/Network-TCP-Type-Socket.html#TCBSending",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Socket",
          "module": "Network.TCP.Type.Socket",
          "name": "snd_wl1",
          "package": "tcp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Socket.html#v:snd_wl1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Socket",
          "name": "snd_wl2",
          "package": "tcp",
          "signature": "SeqLocal",
          "source": "src/Network-TCP-Type-Socket.html#TCBSending",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Socket",
          "module": "Network.TCP.Type.Socket",
          "name": "snd_wl2",
          "package": "tcp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Socket.html#v:snd_wl2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Socket",
          "name": "snd_wnd",
          "package": "tcp",
          "signature": "Int",
          "source": "src/Network-TCP-Type-Socket.html#TCBSending",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Socket",
          "module": "Network.TCP.Type.Socket",
          "name": "snd_wnd",
          "package": "tcp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Socket.html#v:snd_wnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Socket",
          "name": "sndq",
          "package": "tcp",
          "signature": "BufferChain",
          "source": "src/Network-TCP-Type-Socket.html#TCBSending",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Socket",
          "module": "Network.TCP.Type.Socket",
          "name": "sndq",
          "package": "tcp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Socket.html#v:sndq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Socket",
          "name": "sndurp",
          "package": "tcp",
          "signature": "(Maybe Int)",
          "source": "src/Network-TCP-Type-Socket.html#TCBMisc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Socket",
          "module": "Network.TCP.Type.Socket",
          "name": "sndurp",
          "package": "tcp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Socket.html#v:sndurp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Socket",
          "name": "sock_listen",
          "package": "tcp",
          "signature": "SocketListen",
          "source": "src/Network-TCP-Type-Socket.html#TCPSocket",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Socket",
          "module": "Network.TCP.Type.Socket",
          "name": "sock_listen",
          "package": "tcp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Socket.html#v:sock_listen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Socket",
          "name": "sock_map",
          "package": "tcp",
          "signature": "(Map SocketID (TCPSocket threadt))",
          "source": "src/Network-TCP-Type-Socket.html#Host",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Socket",
          "module": "Network.TCP.Type.Socket",
          "name": "sock_map",
          "package": "tcp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Socket.html#v:sock_map"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Socket",
          "name": "st",
          "package": "tcp",
          "signature": "TCPState",
          "source": "src/Network-TCP-Type-Socket.html#TCPSocket",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Socket",
          "module": "Network.TCP.Type.Socket",
          "name": "st",
          "package": "tcp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Socket.html#v:st"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Socket",
          "name": "t_advmss",
          "package": "tcp",
          "signature": "(Maybe Int)",
          "source": "src/Network-TCP-Type-Socket.html#TCBMisc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Socket",
          "module": "Network.TCP.Type.Socket",
          "name": "t_advmss",
          "package": "tcp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Socket.html#v:t_advmss"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Socket",
          "name": "t_badrxtwin",
          "package": "tcp",
          "signature": "(TimeWindow ())",
          "source": "src/Network-TCP-Type-Socket.html#TCBTiming",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Socket",
          "module": "Network.TCP.Type.Socket",
          "name": "t_badrxtwin",
          "normalized": "(TimeWindow())",
          "package": "tcp",
          "signature": "(TimeWindow())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Socket.html#v:t_badrxtwin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Socket",
          "name": "t_dupacks",
          "package": "tcp",
          "signature": "Int",
          "source": "src/Network-TCP-Type-Socket.html#TCBSending",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Socket",
          "module": "Network.TCP.Type.Socket",
          "name": "t_dupacks",
          "package": "tcp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Socket.html#v:t_dupacks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Socket",
          "name": "t_idletime",
          "package": "tcp",
          "signature": "Time",
          "source": "src/Network-TCP-Type-Socket.html#TCBTiming",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Socket",
          "module": "Network.TCP.Type.Socket",
          "name": "t_idletime",
          "package": "tcp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Socket.html#v:t_idletime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Socket",
          "name": "t_lastrtt",
          "package": "tcp",
          "signature": "Time",
          "source": "src/Network-TCP-Type-Socket.html#Rttinf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Socket",
          "module": "Network.TCP.Type.Socket",
          "name": "t_lastrtt",
          "package": "tcp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Socket.html#v:t_lastrtt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Socket",
          "name": "t_lastshift",
          "package": "tcp",
          "signature": "Int",
          "source": "src/Network-TCP-Type-Socket.html#Rttinf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Socket",
          "module": "Network.TCP.Type.Socket",
          "name": "t_lastshift",
          "package": "tcp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Socket.html#v:t_lastshift"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Socket",
          "name": "t_maxseg",
          "package": "tcp",
          "signature": "Int",
          "source": "src/Network-TCP-Type-Socket.html#TCBMisc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Socket",
          "module": "Network.TCP.Type.Socket",
          "name": "t_maxseg",
          "package": "tcp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Socket.html#v:t_maxseg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Socket",
          "name": "t_rttinf",
          "package": "tcp",
          "signature": "Rttinf",
          "source": "src/Network-TCP-Type-Socket.html#TCBSending",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Socket",
          "module": "Network.TCP.Type.Socket",
          "name": "t_rttinf",
          "package": "tcp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Socket.html#v:t_rttinf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Socket",
          "name": "t_rttmin",
          "package": "tcp",
          "signature": "Time",
          "source": "src/Network-TCP-Type-Socket.html#Rttinf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Socket",
          "module": "Network.TCP.Type.Socket",
          "name": "t_rttmin",
          "package": "tcp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Socket.html#v:t_rttmin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Socket",
          "name": "t_rttseg",
          "package": "tcp",
          "signature": "(Maybe (Timestamp, SeqLocal))",
          "source": "src/Network-TCP-Type-Socket.html#TCBSending",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Socket",
          "module": "Network.TCP.Type.Socket",
          "name": "t_rttseg",
          "normalized": "(Maybe(Timestamp,SeqLocal))",
          "package": "tcp",
          "signature": "(Maybe(Timestamp,SeqLocal))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Socket.html#v:t_rttseg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Socket",
          "name": "t_rttupdated",
          "package": "tcp",
          "signature": "Int",
          "source": "src/Network-TCP-Type-Socket.html#Rttinf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Socket",
          "module": "Network.TCP.Type.Socket",
          "name": "t_rttupdated",
          "package": "tcp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Socket.html#v:t_rttupdated"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Socket",
          "name": "t_rttvar",
          "package": "tcp",
          "signature": "Time",
          "source": "src/Network-TCP-Type-Socket.html#Rttinf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Socket",
          "module": "Network.TCP.Type.Socket",
          "name": "t_rttvar",
          "package": "tcp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Socket.html#v:t_rttvar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Socket",
          "name": "t_segq",
          "package": "tcp",
          "signature": "[TCPReassSegment]",
          "source": "src/Network-TCP-Type-Socket.html#TCBReceiving",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Socket",
          "module": "Network.TCP.Type.Socket",
          "name": "t_segq",
          "normalized": "[TCPReassSegment]",
          "package": "tcp",
          "signature": "[TCPReassSegment]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Socket.html#v:t_segq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Socket",
          "name": "t_srtt",
          "package": "tcp",
          "signature": "Time",
          "source": "src/Network-TCP-Type-Socket.html#Rttinf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Socket",
          "module": "Network.TCP.Type.Socket",
          "name": "t_srtt",
          "package": "tcp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Socket.html#v:t_srtt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Socket",
          "name": "t_wassyn",
          "package": "tcp",
          "signature": "Bool",
          "source": "src/Network-TCP-Type-Socket.html#Rttinf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Socket",
          "module": "Network.TCP.Type.Socket",
          "name": "t_wassyn",
          "package": "tcp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Socket.html#v:t_wassyn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Socket",
          "name": "tf_doing_tstmp",
          "package": "tcp",
          "signature": "Bool",
          "source": "src/Network-TCP-Type-Socket.html#TCBMisc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Socket",
          "module": "Network.TCP.Type.Socket",
          "name": "tf_doing_tstmp",
          "package": "tcp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Socket.html#v:tf_doing_tstmp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Socket",
          "name": "tf_doing_ws",
          "package": "tcp",
          "signature": "Bool",
          "source": "src/Network-TCP-Type-Socket.html#TCBMisc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Socket",
          "module": "Network.TCP.Type.Socket",
          "name": "tf_doing_ws",
          "package": "tcp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Socket.html#v:tf_doing_ws"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Socket",
          "name": "tf_needfin",
          "package": "tcp",
          "signature": "Bool",
          "source": "src/Network-TCP-Type-Socket.html#TCBMisc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Socket",
          "module": "Network.TCP.Type.Socket",
          "name": "tf_needfin",
          "package": "tcp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Socket.html#v:tf_needfin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Socket",
          "name": "tf_req_tstmp",
          "package": "tcp",
          "signature": "Bool",
          "source": "src/Network-TCP-Type-Socket.html#TCBMisc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Socket",
          "module": "Network.TCP.Type.Socket",
          "name": "tf_req_tstmp",
          "package": "tcp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Socket.html#v:tf_req_tstmp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Socket",
          "name": "tf_rxwin0sent",
          "package": "tcp",
          "signature": "Bool",
          "source": "src/Network-TCP-Type-Socket.html#TCBReceiving",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Socket",
          "module": "Network.TCP.Type.Socket",
          "name": "tf_rxwin0sent",
          "package": "tcp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Socket.html#v:tf_rxwin0sent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Socket",
          "name": "tf_shouldacknow",
          "package": "tcp",
          "signature": "Bool",
          "source": "src/Network-TCP-Type-Socket.html#TCBReceiving",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Socket",
          "module": "Network.TCP.Type.Socket",
          "name": "tf_shouldacknow",
          "package": "tcp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Socket.html#v:tf_shouldacknow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Socket",
          "name": "tf_srtt_valid",
          "package": "tcp",
          "signature": "Bool",
          "source": "src/Network-TCP-Type-Socket.html#Rttinf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Socket",
          "module": "Network.TCP.Type.Socket",
          "name": "tf_srtt_valid",
          "package": "tcp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Socket.html#v:tf_srtt_valid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Socket",
          "name": "ticks",
          "package": "tcp",
          "signature": "Timestamp",
          "source": "src/Network-TCP-Type-Socket.html#Host",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Socket",
          "module": "Network.TCP.Type.Socket",
          "name": "ticks",
          "package": "tcp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Socket.html#v:ticks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Socket",
          "name": "trs_FIN",
          "package": "tcp",
          "signature": "Bool",
          "source": "src/Network-TCP-Type-Socket.html#TCPReassSegment",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Socket",
          "module": "Network.TCP.Type.Socket",
          "name": "trs_FIN",
          "package": "tcp",
          "partial": "FIN",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Socket.html#v:trs_FIN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Socket",
          "name": "trs_data",
          "package": "tcp",
          "signature": "BufferChain",
          "source": "src/Network-TCP-Type-Socket.html#TCPReassSegment",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Socket",
          "module": "Network.TCP.Type.Socket",
          "name": "trs_data",
          "package": "tcp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Socket.html#v:trs_data"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Socket",
          "name": "trs_seq",
          "package": "tcp",
          "signature": "SeqForeign",
          "source": "src/Network-TCP-Type-Socket.html#TCPReassSegment",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Socket",
          "module": "Network.TCP.Type.Socket",
          "name": "trs_seq",
          "package": "tcp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Socket.html#v:trs_seq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Socket",
          "name": "ts_recent",
          "package": "tcp",
          "signature": "(TimeWindow Timestamp)",
          "source": "src/Network-TCP-Type-Socket.html#TCBTiming",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Socket",
          "module": "Network.TCP.Type.Socket",
          "name": "ts_recent",
          "package": "tcp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Socket.html#v:ts_recent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Socket",
          "name": "tt_2msl",
          "package": "tcp",
          "signature": "(Maybe Time)",
          "source": "src/Network-TCP-Type-Socket.html#TCBTiming",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Socket",
          "module": "Network.TCP.Type.Socket",
          "name": "tt_2msl",
          "package": "tcp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Socket.html#v:tt_2msl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Socket",
          "name": "tt_conn_est",
          "package": "tcp",
          "signature": "(Maybe Time)",
          "source": "src/Network-TCP-Type-Socket.html#TCBTiming",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Socket",
          "module": "Network.TCP.Type.Socket",
          "name": "tt_conn_est",
          "package": "tcp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Socket.html#v:tt_conn_est"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Socket",
          "name": "tt_delack",
          "package": "tcp",
          "signature": "Bool",
          "source": "src/Network-TCP-Type-Socket.html#TCBReceiving",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Socket",
          "module": "Network.TCP.Type.Socket",
          "name": "tt_delack",
          "package": "tcp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Socket.html#v:tt_delack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Socket",
          "name": "tt_fin_wait_2",
          "package": "tcp",
          "signature": "(Maybe Time)",
          "source": "src/Network-TCP-Type-Socket.html#TCBTiming",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Socket",
          "module": "Network.TCP.Type.Socket",
          "name": "tt_fin_wait_2",
          "package": "tcp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Socket.html#v:tt_fin_wait_2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Socket",
          "name": "tt_keep",
          "package": "tcp",
          "signature": "(Maybe Time)",
          "source": "src/Network-TCP-Type-Socket.html#TCBTiming",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Socket",
          "module": "Network.TCP.Type.Socket",
          "name": "tt_keep",
          "package": "tcp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Socket.html#v:tt_keep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Socket",
          "name": "tt_rexmt",
          "package": "tcp",
          "signature": "(Maybe (Timed (RexmtMode, Int)))",
          "source": "src/Network-TCP-Type-Socket.html#TCBSending",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Socket",
          "module": "Network.TCP.Type.Socket",
          "name": "tt_rexmt",
          "normalized": "(Maybe(Timed(RexmtMode,Int)))",
          "package": "tcp",
          "signature": "(Maybe(Timed(RexmtMode,Int)))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Socket.html#v:tt_rexmt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Socket",
          "name": "waiting_list",
          "package": "tcp",
          "signature": "[(SockReq, SockRsp -\u003e threadt)]",
          "source": "src/Network-TCP-Type-Socket.html#TCPSocket",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Socket",
          "module": "Network.TCP.Type.Socket",
          "name": "waiting_list",
          "normalized": "[(SockReq,SockRsp-\u003ea)]",
          "package": "tcp",
          "signature": "[(SockReq,SockRsp-\u003ethreadt)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Socket.html#v:waiting_list"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Syscall",
          "name": "Syscall",
          "package": "tcp",
          "source": "src/Network-TCP-Type-Syscall.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Network TCP Type Syscall",
          "module": "Network.TCP.Type.Syscall",
          "name": "Syscall",
          "package": "tcp",
          "partial": "Syscall",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Syscall.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Syscall",
          "name": "Buffer",
          "package": "tcp",
          "source": "src/Network-TCP-Type-Base.html#Buffer",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network TCP Type Syscall",
          "module": "Network.TCP.Type.Syscall",
          "name": "Buffer",
          "package": "tcp",
          "partial": "Buffer",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Syscall.html#t:Buffer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Syscall",
          "name": "SockReq",
          "package": "tcp",
          "source": "src/Network-TCP-Type-Syscall.html#SockReq",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network TCP Type Syscall",
          "module": "Network.TCP.Type.Syscall",
          "name": "SockReq",
          "package": "tcp",
          "partial": "Sock Req",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Syscall.html#t:SockReq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Syscall",
          "name": "SockRsp",
          "package": "tcp",
          "source": "src/Network-TCP-Type-Syscall.html#SockRsp",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network TCP Type Syscall",
          "module": "Network.TCP.Type.Syscall",
          "name": "SockRsp",
          "package": "tcp",
          "partial": "Sock Rsp",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Syscall.html#t:SockRsp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Syscall",
          "name": "SocketID",
          "package": "tcp",
          "source": "src/Network-TCP-Type-Base.html#SocketID",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network TCP Type Syscall",
          "module": "Network.TCP.Type.Syscall",
          "name": "SocketID",
          "package": "tcp",
          "partial": "Socket ID",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Syscall.html#t:SocketID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Syscall",
          "name": "TCPAddr",
          "package": "tcp",
          "source": "src/Network-TCP-Type-Base.html#TCPAddr",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network TCP Type Syscall",
          "module": "Network.TCP.Type.Syscall",
          "name": "TCPAddr",
          "package": "tcp",
          "partial": "TCPAddr",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Syscall.html#t:TCPAddr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Syscall",
          "name": "SockAccept",
          "package": "tcp",
          "signature": "SockAccept !SocketID",
          "source": "src/Network-TCP-Type-Syscall.html#SockReq",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Syscall",
          "module": "Network.TCP.Type.Syscall",
          "name": "SockAccept",
          "package": "tcp",
          "partial": "Sock Accept",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Syscall.html#v:SockAccept"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Syscall",
          "name": "SockClose",
          "package": "tcp",
          "signature": "SockClose !SocketID",
          "source": "src/Network-TCP-Type-Syscall.html#SockReq",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Syscall",
          "module": "Network.TCP.Type.Syscall",
          "name": "SockClose",
          "package": "tcp",
          "partial": "Sock Close",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Syscall.html#v:SockClose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Syscall",
          "name": "SockConnect",
          "package": "tcp",
          "signature": "SockConnect !IPAddr !TCPAddr",
          "source": "src/Network-TCP-Type-Syscall.html#SockReq",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Syscall",
          "module": "Network.TCP.Type.Syscall",
          "name": "SockConnect",
          "package": "tcp",
          "partial": "Sock Connect",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Syscall.html#v:SockConnect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Syscall",
          "name": "SockData",
          "package": "tcp",
          "signature": "SockData !Buffer",
          "source": "src/Network-TCP-Type-Syscall.html#SockRsp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Syscall",
          "module": "Network.TCP.Type.Syscall",
          "name": "SockData",
          "package": "tcp",
          "partial": "Sock Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Syscall.html#v:SockData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Syscall",
          "name": "SockError",
          "package": "tcp",
          "signature": "SockError !String",
          "source": "src/Network-TCP-Type-Syscall.html#SockRsp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Syscall",
          "module": "Network.TCP.Type.Syscall",
          "name": "SockError",
          "package": "tcp",
          "partial": "Sock Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Syscall.html#v:SockError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Syscall",
          "name": "SockListen",
          "package": "tcp",
          "signature": "SockListen !Port",
          "source": "src/Network-TCP-Type-Syscall.html#SockReq",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Syscall",
          "module": "Network.TCP.Type.Syscall",
          "name": "SockListen",
          "package": "tcp",
          "partial": "Sock Listen",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Syscall.html#v:SockListen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Syscall",
          "name": "SockNew",
          "package": "tcp",
          "signature": "SockNew !SocketID",
          "source": "src/Network-TCP-Type-Syscall.html#SockRsp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Syscall",
          "module": "Network.TCP.Type.Syscall",
          "name": "SockNew",
          "package": "tcp",
          "partial": "Sock New",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Syscall.html#v:SockNew"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Syscall",
          "name": "SockOK",
          "package": "tcp",
          "signature": "SockOK",
          "source": "src/Network-TCP-Type-Syscall.html#SockRsp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Syscall",
          "module": "Network.TCP.Type.Syscall",
          "name": "SockOK",
          "package": "tcp",
          "partial": "Sock OK",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Syscall.html#v:SockOK"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Syscall",
          "name": "SockRecv",
          "package": "tcp",
          "signature": "SockRecv !SocketID",
          "source": "src/Network-TCP-Type-Syscall.html#SockReq",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Syscall",
          "module": "Network.TCP.Type.Syscall",
          "name": "SockRecv",
          "package": "tcp",
          "partial": "Sock Recv",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Syscall.html#v:SockRecv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Syscall",
          "name": "SockSend",
          "package": "tcp",
          "signature": "SockSend !SocketID !Buffer",
          "source": "src/Network-TCP-Type-Syscall.html#SockReq",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Syscall",
          "module": "Network.TCP.Type.Syscall",
          "name": "SockSend",
          "package": "tcp",
          "partial": "Sock Send",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Syscall.html#v:SockSend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Timer",
          "name": "Timer",
          "package": "tcp",
          "source": "src/Network-TCP-Type-Timer.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Network TCP Type Timer",
          "module": "Network.TCP.Type.Timer",
          "name": "Timer",
          "package": "tcp",
          "partial": "Timer",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Timer.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Timer",
          "name": "TimeWindow",
          "package": "tcp",
          "source": "src/Network-TCP-Type-Timer.html#TimeWindow",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network TCP Type Timer",
          "module": "Network.TCP.Type.Timer",
          "name": "TimeWindow",
          "package": "tcp",
          "partial": "Time Window",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Timer.html#t:TimeWindow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Timer",
          "name": "Timed",
          "package": "tcp",
          "source": "src/Network-TCP-Type-Timer.html#Timed",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network TCP Type Timer",
          "module": "Network.TCP.Type.Timer",
          "name": "Timed",
          "package": "tcp",
          "partial": "Timed",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Timer.html#t:Timed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Timer",
          "name": "Timed",
          "package": "tcp",
          "signature": "Timed",
          "source": "src/Network-TCP-Type-Timer.html#Timed",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Timer",
          "module": "Network.TCP.Type.Timer",
          "name": "Timed",
          "package": "tcp",
          "partial": "Timed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Timer.html#v:Timed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Timer",
          "name": "maybe_timed_expires",
          "package": "tcp",
          "signature": "Time -\u003e Maybe (Timed a) -\u003e Bool",
          "source": "src/Network-TCP-Type-Timer.html#maybe_timed_expires",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Timer",
          "module": "Network.TCP.Type.Timer",
          "name": "maybe_timed_expires",
          "normalized": "Time-\u003eMaybe(Timed a)-\u003eBool",
          "package": "tcp",
          "signature": "Time-\u003eMaybe(Timed a)-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Timer.html#v:maybe_timed_expires"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Timer",
          "name": "maybe_timer_expires",
          "package": "tcp",
          "signature": "Time -\u003e Maybe Time -\u003e Bool",
          "source": "src/Network-TCP-Type-Timer.html#maybe_timer_expires",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Timer",
          "module": "Network.TCP.Type.Timer",
          "name": "maybe_timer_expires",
          "normalized": "Time-\u003eMaybe Time-\u003eBool",
          "package": "tcp",
          "signature": "Time-\u003eMaybe Time-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Timer.html#v:maybe_timer_expires"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Timer",
          "name": "timed_exp",
          "package": "tcp",
          "signature": "Time",
          "source": "src/Network-TCP-Type-Timer.html#Timed",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Timer",
          "module": "Network.TCP.Type.Timer",
          "name": "timed_exp",
          "package": "tcp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Timer.html#v:timed_exp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Timer",
          "name": "timed_expires",
          "package": "tcp",
          "signature": "Time -\u003e Timed a -\u003e Bool",
          "source": "src/Network-TCP-Type-Timer.html#timed_expires",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Timer",
          "module": "Network.TCP.Type.Timer",
          "name": "timed_expires",
          "normalized": "Time-\u003eTimed a-\u003eBool",
          "package": "tcp",
          "signature": "Time-\u003eTimed a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Timer.html#v:timed_expires"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Timer",
          "name": "timed_val",
          "package": "tcp",
          "signature": "a",
          "source": "src/Network-TCP-Type-Timer.html#Timed",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Timer",
          "module": "Network.TCP.Type.Timer",
          "name": "timed_val",
          "package": "tcp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Timer.html#v:timed_val"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Timer",
          "name": "timer_expires",
          "package": "tcp",
          "signature": "Time -\u003e Time -\u003e Bool",
          "source": "src/Network-TCP-Type-Timer.html#timer_expires",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Timer",
          "module": "Network.TCP.Type.Timer",
          "name": "timer_expires",
          "normalized": "Time-\u003eTime-\u003eBool",
          "package": "tcp",
          "signature": "Time-\u003eTime-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Timer.html#v:timer_expires"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Timer",
          "name": "timewindow_open",
          "package": "tcp",
          "signature": "Time -\u003e TimeWindow a -\u003e Bool",
          "source": "src/Network-TCP-Type-Timer.html#timewindow_open",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Timer",
          "module": "Network.TCP.Type.Timer",
          "name": "timewindow_open",
          "normalized": "Time-\u003eTimeWindow a-\u003eBool",
          "package": "tcp",
          "signature": "Time-\u003eTimeWindow a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Timer.html#v:timewindow_open"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCP.Type.Timer",
          "name": "timewindow_val",
          "package": "tcp",
          "signature": "Time -\u003e TimeWindow a -\u003e Maybe a",
          "source": "src/Network-TCP-Type-Timer.html#timewindow_val",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCP Type Timer",
          "module": "Network.TCP.Type.Timer",
          "name": "timewindow_val",
          "normalized": "Time-\u003eTimeWindow a-\u003eMaybe a",
          "package": "tcp",
          "signature": "Time-\u003eTimeWindow a-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tcp/docs/Network-TCP-Type-Timer.html#v:timewindow_val"
      }
    }
  ]
]