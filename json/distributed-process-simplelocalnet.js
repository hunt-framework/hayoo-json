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
        "word": "distributed-process-simplelocalnet"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMulticast utilities\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Distributed.Process.Backend.SimpleLocalnet.Internal.Multicast",
          "name": "Multicast",
          "package": "distributed-process-simplelocalnet",
          "source": "src/Control-Distributed-Process-Backend-SimpleLocalnet-Internal-Multicast.html",
          "type": "module"
        },
        "index": {
          "description": "Multicast utilities",
          "hierarchy": "Control Distributed Process Backend SimpleLocalnet Internal Multicast",
          "module": "Control.Distributed.Process.Backend.SimpleLocalnet.Internal.Multicast",
          "name": "Multicast",
          "package": "distributed-process-simplelocalnet",
          "partial": "Multicast",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process-simplelocalnet/docs/Control-Distributed-Process-Backend-SimpleLocalnet-Internal-Multicast.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a hostname and a port number, initialize the multicast system.\n\u003c/p\u003e\u003cp\u003eNote: it is important that you never send messages larger than the maximum\n message size; if you do, all subsequent communication will probably fail.\n\u003c/p\u003e\u003cp\u003eReturns a reader and a writer.\n\u003c/p\u003e\u003cp\u003eNOTE: By rights the two functions should be \u003ca\u003elocally\u003c/a\u003e polymorphic in \u003ccode\u003ea\u003c/code\u003e,\n but this requires impredicative types.\n\u003c/p\u003e",
          "module": "Control.Distributed.Process.Backend.SimpleLocalnet.Internal.Multicast",
          "name": "initMulticast",
          "package": "distributed-process-simplelocalnet",
          "signature": "HostName-\u003e PortNumber-\u003e Int-\u003e IO (IO (a, SockAddr), a -\u003e IO ())",
          "type": "function"
        },
        "index": {
          "description": "Given hostname and port number initialize the multicast system Note it is important that you never send messages larger than the maximum message size if you do all subsequent communication will probably fail Returns reader and writer NOTE By rights the two functions should be locally polymorphic in but this requires impredicative types",
          "hierarchy": "Control Distributed Process Backend SimpleLocalnet Internal Multicast",
          "module": "Control.Distributed.Process.Backend.SimpleLocalnet.Internal.Multicast",
          "name": "initMulticast",
          "normalized": "HostName-\u003ePortNumber-\u003eInt-\u003eIO(IO(a,SockAddr),a-\u003eIO())",
          "package": "distributed-process-simplelocalnet",
          "partial": "Multicast",
          "signature": "HostName-\u003ePortNumber-\u003eInt-\u003eIO(IO(a,SockAddr),a-\u003eIO())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process-simplelocalnet/docs/Control-Distributed-Process-Backend-SimpleLocalnet-Internal-Multicast.html#v:initMulticast"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSimple backend based on the TCP transport which offers node discovery\n based on UDP multicast. This is a zero-configuration backend designed to\n get you going with Cloud Haskell quickly without imposing any structure\n on your application.\n\u003c/p\u003e\u003cp\u003eTo simplify getting started we provide special support for \u003cem\u003emaster\u003c/em\u003e and\n \u003cem\u003eslave\u003c/em\u003e nodes (see \u003ccode\u003e\u003ca\u003estartSlave\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003estartMaster\u003c/a\u003e\u003c/code\u003e). Use of these functions\n is completely optional; you can use the local backend without making use\n of the predefined master and slave nodes.\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003eMinimal example\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cpre\u003e import System.Environment (getArgs)\n import Control.Distributed.Process\n import Control.Distributed.Process.Node (initRemoteTable)\n import Control.Distributed.Process.Backend.SimpleLocalnet\n\n master :: Backend -\u003e [NodeId] -\u003e Process ()\n master backend slaves = do\n   -- Do something interesting with the slaves\n   liftIO . putStrLn $ \"Slaves: \" ++ show slaves\n   -- Terminate the slaves when the master terminates (this is optional)\n   terminateAllSlaves backend\n\n main :: IO ()\n main = do\n   args \u003c- getArgs\n\n   case args of\n     [\"master\", host, port] -\u003e do\n       backend \u003c- initializeBackend host port initRemoteTable\n       startMaster backend (master backend)\n     [\"slave\", host, port] -\u003e do\n       backend \u003c- initializeBackend host port initRemoteTable\n       startSlave backend\n\u003c/pre\u003e\u003cdl\u003e\u003cdt\u003eCompiling and Running\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cp\u003eSave to \u003ccode\u003eexample.hs\u003c/code\u003e and compile using\n\u003c/p\u003e\u003cpre\u003e ghc -threaded example.hs\n\u003c/pre\u003e\u003cp\u003eFire up some slave nodes (for the example, we run them on a single machine):\n\u003c/p\u003e\u003cpre\u003e ./example slave localhost 8080 &\n ./example slave localhost 8081 &\n ./example slave localhost 8082 &\n ./example slave localhost 8083 &\n\u003c/pre\u003e\u003cp\u003eAnd start the master node:\n\u003c/p\u003e\u003cpre\u003e ./example master localhost 8084\n\u003c/pre\u003e\u003cp\u003ewhich should then output:\n\u003c/p\u003e\u003cpre\u003e Slaves: [nid://localhost:8083:0,nid://localhost:8082:0,nid://localhost:8081:0,nid://localhost:8080:0]\n\u003c/pre\u003e\u003cp\u003eat which point the slaves should exit.\n\u003c/p\u003e\u003cp\u003eTo run the example on multiple machines, you could run\n\u003c/p\u003e\u003cpre\u003e ./example slave 198.51.100.1 8080 &\n ./example slave 198.51.100.2 8080 &\n ./example slave 198.51.100.3 8080 &\n ./example slave 198.51.100.4 8080 &\n\u003c/pre\u003e\u003cp\u003eon four different machines (with IP addresses 198.51.100.1..4), and run the\n master on a fifth node (or on any of the four machines that run the slave\n nodes).\n\u003c/p\u003e\u003cp\u003eIt is important that every node has a unique (hostname, port number) pair,\n and that the hostname you use to initialize the node can be resolved by\n peer nodes. In other words, if you start a node and pass hostname \u003ccode\u003elocalhost\u003c/code\u003e\n then peer nodes won't be able to reach it because \u003ccode\u003elocalhost\u003c/code\u003e will resolve\n to a different IP address for them.\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003eTroubleshooting\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cp\u003eIf you try the above example and the master process cannot find any slaves,\n then it might be that your firewall settings do not allow for UDP multicast\n (in particular, the default iptables on some Linux distributions might not\n allow it).\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Distributed.Process.Backend.SimpleLocalnet",
          "name": "SimpleLocalnet",
          "package": "distributed-process-simplelocalnet",
          "source": "src/Control-Distributed-Process-Backend-SimpleLocalnet.html",
          "type": "module"
        },
        "index": {
          "description": "Simple backend based on the TCP transport which offers node discovery based on UDP multicast This is zero-configuration backend designed to get you going with Cloud Haskell quickly without imposing any structure on your application To simplify getting started we provide special support for master and slave nodes see startSlave and startMaster Use of these functions is completely optional you can use the local backend without making use of the predefined master and slave nodes Minimal example import System.Environment getArgs import Control.Distributed.Process import Control.Distributed.Process.Node initRemoteTable import Control.Distributed.Process.Backend.SimpleLocalnet master Backend NodeId Process master backend slaves do Do something interesting with the slaves liftIO putStrLn Slaves show slaves Terminate the slaves when the master terminates this is optional terminateAllSlaves backend main IO main do args getArgs case args of master host port do backend initializeBackend host port initRemoteTable startMaster backend master backend slave host port do backend initializeBackend host port initRemoteTable startSlave backend Compiling and Running Save to example.hs and compile using ghc threaded example.hs Fire up some slave nodes for the example we run them on single machine example slave localhost example slave localhost example slave localhost example slave localhost And start the master node example master localhost which should then output Slaves nid localhost nid localhost nid localhost nid localhost at which point the slaves should exit To run the example on multiple machines you could run example slave example slave example slave example slave on four different machines with IP addresses and run the master on fifth node or on any of the four machines that run the slave nodes It is important that every node has unique hostname port number pair and that the hostname you use to initialize the node can be resolved by peer nodes In other words if you start node and pass hostname localhost then peer nodes won be able to reach it because localhost will resolve to different IP address for them Troubleshooting If you try the above example and the master process cannot find any slaves then it might be that your firewall settings do not allow for UDP multicast in particular the default iptables on some Linux distributions might not allow it",
          "hierarchy": "Control Distributed Process Backend SimpleLocalnet",
          "module": "Control.Distributed.Process.Backend.SimpleLocalnet",
          "name": "SimpleLocalnet",
          "package": "distributed-process-simplelocalnet",
          "partial": "Simple Localnet",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process-simplelocalnet/docs/Control-Distributed-Process-Backend-SimpleLocalnet.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLocal backend\n\u003c/p\u003e",
          "module": "Control.Distributed.Process.Backend.SimpleLocalnet",
          "name": "Backend",
          "package": "distributed-process-simplelocalnet",
          "source": "src/Control-Distributed-Process-Backend-SimpleLocalnet.html#Backend",
          "type": "data"
        },
        "index": {
          "description": "Local backend",
          "hierarchy": "Control Distributed Process Backend SimpleLocalnet",
          "module": "Control.Distributed.Process.Backend.SimpleLocalnet",
          "name": "Backend",
          "package": "distributed-process-simplelocalnet",
          "partial": "Backend",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process-simplelocalnet/docs/Control-Distributed-Process-Backend-SimpleLocalnet.html#t:Backend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Distributed.Process.Backend.SimpleLocalnet",
          "name": "Backend",
          "package": "distributed-process-simplelocalnet",
          "signature": "Backend",
          "source": "src/Control-Distributed-Process-Backend-SimpleLocalnet.html#Backend",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Distributed Process Backend SimpleLocalnet",
          "module": "Control.Distributed.Process.Backend.SimpleLocalnet",
          "name": "Backend",
          "package": "distributed-process-simplelocalnet",
          "partial": "Backend",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process-simplelocalnet/docs/Control-Distributed-Process-Backend-SimpleLocalnet.html#v:Backend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003efindPeers t\u003c/code\u003e broadcasts a \u003cem\u003ewho's there?\u003c/em\u003e message on the local\n network, waits \u003ccode\u003et\u003c/code\u003e msec, and then collects and returns the answers.\n You can use this to dynamically discover peer nodes.\n\u003c/p\u003e",
          "module": "Control.Distributed.Process.Backend.SimpleLocalnet",
          "name": "findPeers",
          "package": "distributed-process-simplelocalnet",
          "signature": "Int -\u003e IO [NodeId]",
          "source": "src/Control-Distributed-Process-Backend-SimpleLocalnet.html#Backend",
          "type": "function"
        },
        "index": {
          "description": "findPeers broadcasts who there message on the local network waits msec and then collects and returns the answers You can use this to dynamically discover peer nodes",
          "hierarchy": "Control Distributed Process Backend SimpleLocalnet",
          "module": "Control.Distributed.Process.Backend.SimpleLocalnet",
          "name": "findPeers",
          "normalized": "Int-\u003eIO[NodeId]",
          "package": "distributed-process-simplelocalnet",
          "partial": "Peers",
          "signature": "Int-\u003eIO[NodeId]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process-simplelocalnet/docs/Control-Distributed-Process-Backend-SimpleLocalnet.html#v:findPeers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind slave nodes\n\u003c/p\u003e",
          "module": "Control.Distributed.Process.Backend.SimpleLocalnet",
          "name": "findSlaves",
          "package": "distributed-process-simplelocalnet",
          "signature": "Backend -\u003e Process [ProcessId]",
          "source": "src/Control-Distributed-Process-Backend-SimpleLocalnet.html#findSlaves",
          "type": "function"
        },
        "index": {
          "description": "Find slave nodes",
          "hierarchy": "Control Distributed Process Backend SimpleLocalnet",
          "module": "Control.Distributed.Process.Backend.SimpleLocalnet",
          "name": "findSlaves",
          "normalized": "Backend-\u003eProcess[ProcessId]",
          "package": "distributed-process-simplelocalnet",
          "partial": "Slaves",
          "signature": "Backend-\u003eProcess[ProcessId]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process-simplelocalnet/docs/Control-Distributed-Process-Backend-SimpleLocalnet.html#v:findSlaves"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInitialize the backend\n\u003c/p\u003e",
          "module": "Control.Distributed.Process.Backend.SimpleLocalnet",
          "name": "initializeBackend",
          "package": "distributed-process-simplelocalnet",
          "signature": "HostName -\u003e ServiceName -\u003e RemoteTable -\u003e IO Backend",
          "source": "src/Control-Distributed-Process-Backend-SimpleLocalnet.html#initializeBackend",
          "type": "function"
        },
        "index": {
          "description": "Initialize the backend",
          "hierarchy": "Control Distributed Process Backend SimpleLocalnet",
          "module": "Control.Distributed.Process.Backend.SimpleLocalnet",
          "name": "initializeBackend",
          "normalized": "HostName-\u003eServiceName-\u003eRemoteTable-\u003eIO Backend",
          "package": "distributed-process-simplelocalnet",
          "partial": "Backend",
          "signature": "HostName-\u003eServiceName-\u003eRemoteTable-\u003eIO Backend",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process-simplelocalnet/docs/Control-Distributed-Process-Backend-SimpleLocalnet.html#v:initializeBackend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new local node\n\u003c/p\u003e",
          "module": "Control.Distributed.Process.Backend.SimpleLocalnet",
          "name": "newLocalNode",
          "package": "distributed-process-simplelocalnet",
          "signature": "IO LocalNode",
          "source": "src/Control-Distributed-Process-Backend-SimpleLocalnet.html#Backend",
          "type": "function"
        },
        "index": {
          "description": "Create new local node",
          "hierarchy": "Control Distributed Process Backend SimpleLocalnet",
          "module": "Control.Distributed.Process.Backend.SimpleLocalnet",
          "name": "newLocalNode",
          "package": "distributed-process-simplelocalnet",
          "partial": "Local Node",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process-simplelocalnet/docs/Control-Distributed-Process-Backend-SimpleLocalnet.html#v:newLocalNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake sure that all log messages are printed by the logger on the\n current node\n\u003c/p\u003e",
          "module": "Control.Distributed.Process.Backend.SimpleLocalnet",
          "name": "redirectLogsHere",
          "package": "distributed-process-simplelocalnet",
          "signature": "[ProcessId] -\u003e Process ()",
          "source": "src/Control-Distributed-Process-Backend-SimpleLocalnet.html#Backend",
          "type": "function"
        },
        "index": {
          "description": "Make sure that all log messages are printed by the logger on the current node",
          "hierarchy": "Control Distributed Process Backend SimpleLocalnet",
          "module": "Control.Distributed.Process.Backend.SimpleLocalnet",
          "name": "redirectLogsHere",
          "normalized": "[ProcessId]-\u003eProcess()",
          "package": "distributed-process-simplelocalnet",
          "partial": "Logs Here",
          "signature": "[ProcessId]-\u003eProcess()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process-simplelocalnet/docs/Control-Distributed-Process-Backend-SimpleLocalnet.html#v:redirectLogsHere"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003estartMaster\u003c/a\u003e\u003c/code\u003e finds all slaves \u003cem\u003ecurrently\u003c/em\u003e available on the local network,\n redirects all log messages to itself, and then calls the specified process,\n passing the list of slaves nodes.\n\u003c/p\u003e\u003cp\u003eTerminates when the specified process terminates. If you want to terminate\n the slaves when the master terminates, you should manually call\n \u003ccode\u003e\u003ca\u003eterminateAllSlaves\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIf you start more slave nodes after having started the master node, you can\n discover them with later calls to \u003ccode\u003e\u003ca\u003efindSlaves\u003c/a\u003e\u003c/code\u003e, but be aware that you will\n need to call \u003ccode\u003eredirectLogHere\u003c/code\u003e to redirect their logs to the master node.\n\u003c/p\u003e\u003cp\u003eNote that you can use functionality of \u003ca\u003eSimpleLocalnet\u003c/a\u003e directly (through\n \u003ccode\u003e\u003ca\u003eBackend\u003c/a\u003e\u003c/code\u003e), instead of using 'startMaster'/'startSlave', if the master/slave\n distinction does not suit your application.\n\u003c/p\u003e",
          "module": "Control.Distributed.Process.Backend.SimpleLocalnet",
          "name": "startMaster",
          "package": "distributed-process-simplelocalnet",
          "signature": "Backend -\u003e ([NodeId] -\u003e Process ()) -\u003e IO ()",
          "source": "src/Control-Distributed-Process-Backend-SimpleLocalnet.html#startMaster",
          "type": "function"
        },
        "index": {
          "description": "startMaster finds all slaves currently available on the local network redirects all log messages to itself and then calls the specified process passing the list of slaves nodes Terminates when the specified process terminates If you want to terminate the slaves when the master terminates you should manually call terminateAllSlaves If you start more slave nodes after having started the master node you can discover them with later calls to findSlaves but be aware that you will need to call redirectLogHere to redirect their logs to the master node Note that you can use functionality of SimpleLocalnet directly through Backend instead of using startMaster startSlave if the master slave distinction does not suit your application",
          "hierarchy": "Control Distributed Process Backend SimpleLocalnet",
          "module": "Control.Distributed.Process.Backend.SimpleLocalnet",
          "name": "startMaster",
          "normalized": "Backend-\u003e([NodeId]-\u003eProcess())-\u003eIO()",
          "package": "distributed-process-simplelocalnet",
          "partial": "Master",
          "signature": "Backend-\u003e([NodeId]-\u003eProcess())-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process-simplelocalnet/docs/Control-Distributed-Process-Backend-SimpleLocalnet.html#v:startMaster"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalling \u003ccode\u003eslave\u003c/code\u003e sets up a new local node and then waits. You start\n processes on the slave by calling \u003ccode\u003espawn\u003c/code\u003e from other nodes.\n\u003c/p\u003e\u003cp\u003eThis function does not return. The only way to exit the slave is to CTRL-C\n the process or call terminateSlave from another node.\n\u003c/p\u003e",
          "module": "Control.Distributed.Process.Backend.SimpleLocalnet",
          "name": "startSlave",
          "package": "distributed-process-simplelocalnet",
          "signature": "Backend -\u003e IO ()",
          "source": "src/Control-Distributed-Process-Backend-SimpleLocalnet.html#startSlave",
          "type": "function"
        },
        "index": {
          "description": "Calling slave sets up new local node and then waits You start processes on the slave by calling spawn from other nodes This function does not return The only way to exit the slave is to CTRL-C the process or call terminateSlave from another node",
          "hierarchy": "Control Distributed Process Backend SimpleLocalnet",
          "module": "Control.Distributed.Process.Backend.SimpleLocalnet",
          "name": "startSlave",
          "normalized": "Backend-\u003eIO()",
          "package": "distributed-process-simplelocalnet",
          "partial": "Slave",
          "signature": "Backend-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process-simplelocalnet/docs/Control-Distributed-Process-Backend-SimpleLocalnet.html#v:startSlave"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTerminate all slaves\n\u003c/p\u003e",
          "module": "Control.Distributed.Process.Backend.SimpleLocalnet",
          "name": "terminateAllSlaves",
          "package": "distributed-process-simplelocalnet",
          "signature": "Backend -\u003e Process ()",
          "source": "src/Control-Distributed-Process-Backend-SimpleLocalnet.html#terminateAllSlaves",
          "type": "function"
        },
        "index": {
          "description": "Terminate all slaves",
          "hierarchy": "Control Distributed Process Backend SimpleLocalnet",
          "module": "Control.Distributed.Process.Backend.SimpleLocalnet",
          "name": "terminateAllSlaves",
          "normalized": "Backend-\u003eProcess()",
          "package": "distributed-process-simplelocalnet",
          "partial": "All Slaves",
          "signature": "Backend-\u003eProcess()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process-simplelocalnet/docs/Control-Distributed-Process-Backend-SimpleLocalnet.html#v:terminateAllSlaves"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTerminate the slave at the given node ID\n\u003c/p\u003e",
          "module": "Control.Distributed.Process.Backend.SimpleLocalnet",
          "name": "terminateSlave",
          "package": "distributed-process-simplelocalnet",
          "signature": "NodeId -\u003e Process ()",
          "source": "src/Control-Distributed-Process-Backend-SimpleLocalnet.html#terminateSlave",
          "type": "function"
        },
        "index": {
          "description": "Terminate the slave at the given node ID",
          "hierarchy": "Control Distributed Process Backend SimpleLocalnet",
          "module": "Control.Distributed.Process.Backend.SimpleLocalnet",
          "name": "terminateSlave",
          "normalized": "NodeId-\u003eProcess()",
          "package": "distributed-process-simplelocalnet",
          "partial": "Slave",
          "signature": "NodeId-\u003eProcess()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process-simplelocalnet/docs/Control-Distributed-Process-Backend-SimpleLocalnet.html#v:terminateSlave"
      }
    }
  ]
]