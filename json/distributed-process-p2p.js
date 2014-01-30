[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process-p2p/docs/Control-Distributed-Backend-P2P.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePeer-to-peer node discovery backend for Cloud Haskell based on the TCP\n transport. Provided with a known node address it discovers and maintains\n the knowledge of it's peers.\n\u003c/p\u003e\u003cpre\u003e import qualified Control.Distributed.Backend.P2P as P2P\n import           Control.Monad.Trans (liftIO)\n import           Control.Concurrent (threadDelay)\n\n main = P2P.bootstrap \"myhostname\" \"9001\" [P2P.makeNodeId \"seedhost:9000\"] $ do\n     liftIO $ threadDelay 1000000 -- give dispatcher a second to discover other nodes\n     P2P.nsendPeers \"myService\" (\"some\", \"message\")\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Control.Distributed.Backend.P2P",
        "fct-package": "distributed-process-p2p",
        "fct-signature": "module",
        "fct-source": "src/Control-Distributed-Backend-P2P.html",
        "fct-type": "module",
        "title": "P2P"
      },
      "index": {
        "description": "Peer-to-peer node discovery backend for Cloud Haskell based on the TCP transport Provided with known node address it discovers and maintains the knowledge of it peers import qualified Control.Distributed.Backend.P2P as P2P import Control.Monad.Trans liftIO import Control.Concurrent threadDelay main P2P.bootstrap myhostname P2P.makeNodeId seedhost do liftIO threadDelay give dispatcher second to discover other nodes P2P.nsendPeers myService some message",
        "hierarchy": "Control Distributed Backend P2P",
        "module": "Control.Distributed.Backend.P2P",
        "name": "P2P",
        "normalized": "",
        "package": "distributed-process-p2p",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process-p2p/docs/Control-Distributed-Backend-P2P.html#v:bootstrap",
      "description": {
        "fct-descr": "\u003cp\u003eStart a controller service process and aquire connections to a swarm.\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Backend.P2P",
        "fct-package": "distributed-process-p2p",
        "fct-signature": "HostName -\u003e ServiceName -\u003e [NodeId] -\u003e RemoteTable -\u003e Process () -\u003e IO ()",
        "fct-source": "src/Control-Distributed-Backend-P2P.html#bootstrap",
        "fct-type": "function",
        "title": "bootstrap"
      },
      "index": {
        "description": "Start controller service process and aquire connections to swarm",
        "hierarchy": "Control Distributed Backend P2P",
        "module": "Control.Distributed.Backend.P2P",
        "name": "bootstrap",
        "normalized": "HostName-\u003eServiceName-\u003e[NodeId]-\u003eRemoteTable-\u003eProcess()-\u003eIO()",
        "package": "distributed-process-p2p",
        "partial": "",
        "signature": "HostName-\u003eServiceName-\u003e[NodeId]-\u003eRemoteTable-\u003eProcess()-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process-p2p/docs/Control-Distributed-Backend-P2P.html#v:getCapable",
      "description": {
        "fct-descr": "\u003cp\u003ePoll a network for a list of specific service providers.\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Backend.P2P",
        "fct-package": "distributed-process-p2p",
        "fct-signature": "String -\u003e Process [ProcessId]",
        "fct-source": "src/Control-Distributed-Backend-P2P.html#getCapable",
        "fct-type": "function",
        "title": "getCapable"
      },
      "index": {
        "description": "Poll network for list of specific service providers",
        "hierarchy": "Control Distributed Backend P2P",
        "module": "Control.Distributed.Backend.P2P",
        "name": "getCapable",
        "normalized": "String-\u003eProcess[ProcessId]",
        "package": "distributed-process-p2p",
        "partial": "Capable",
        "signature": "String-\u003eProcess[ProcessId]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process-p2p/docs/Control-Distributed-Backend-P2P.html#v:getPeers",
      "description": {
        "fct-descr": "\u003cp\u003eGet a list of currently available peer nodes.\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Backend.P2P",
        "fct-package": "distributed-process-p2p",
        "fct-signature": "Process [NodeId]",
        "fct-source": "src/Control-Distributed-Backend-P2P.html#getPeers",
        "fct-type": "function",
        "title": "getPeers"
      },
      "index": {
        "description": "Get list of currently available peer nodes",
        "hierarchy": "Control Distributed Backend P2P",
        "module": "Control.Distributed.Backend.P2P",
        "name": "getPeers",
        "normalized": "Process[NodeId]",
        "package": "distributed-process-p2p",
        "partial": "Peers",
        "signature": "Process[NodeId]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process-p2p/docs/Control-Distributed-Backend-P2P.html#v:makeNodeId",
      "description": {
        "fct-descr": "\u003cp\u003eMake a NodeId from \u003ca\u003ehost:port\u003c/a\u003e string.\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Backend.P2P",
        "fct-package": "distributed-process-p2p",
        "fct-signature": "String -\u003e NodeId",
        "fct-source": "src/Control-Distributed-Backend-P2P.html#makeNodeId",
        "fct-type": "function",
        "title": "makeNodeId"
      },
      "index": {
        "description": "Make NodeId from host port string",
        "hierarchy": "Control Distributed Backend P2P",
        "module": "Control.Distributed.Backend.P2P",
        "name": "makeNodeId",
        "normalized": "String-\u003eNodeId",
        "package": "distributed-process-p2p",
        "partial": "Node Id",
        "signature": "String-\u003eNodeId"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process-p2p/docs/Control-Distributed-Backend-P2P.html#v:nsendCapable",
      "description": {
        "fct-descr": "\u003cp\u003eBroadcast a message to a service of on nodes currently running it.\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Backend.P2P",
        "fct-package": "distributed-process-p2p",
        "fct-signature": "String -\u003e a -\u003e Process ()",
        "fct-source": "src/Control-Distributed-Backend-P2P.html#nsendCapable",
        "fct-type": "function",
        "title": "nsendCapable"
      },
      "index": {
        "description": "Broadcast message to service of on nodes currently running it",
        "hierarchy": "Control Distributed Backend P2P",
        "module": "Control.Distributed.Backend.P2P",
        "name": "nsendCapable",
        "normalized": "String-\u003ea-\u003eProcess()",
        "package": "distributed-process-p2p",
        "partial": "Capable",
        "signature": "String-\u003ea-\u003eProcess()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process-p2p/docs/Control-Distributed-Backend-P2P.html#v:nsendPeers",
      "description": {
        "fct-descr": "\u003cp\u003eBroadcast a message to a specific service on all peers.\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Backend.P2P",
        "fct-package": "distributed-process-p2p",
        "fct-signature": "String -\u003e a -\u003e Process ()",
        "fct-source": "src/Control-Distributed-Backend-P2P.html#nsendPeers",
        "fct-type": "function",
        "title": "nsendPeers"
      },
      "index": {
        "description": "Broadcast message to specific service on all peers",
        "hierarchy": "Control Distributed Backend P2P",
        "module": "Control.Distributed.Backend.P2P",
        "name": "nsendPeers",
        "normalized": "String-\u003ea-\u003eProcess()",
        "package": "distributed-process-p2p",
        "partial": "Peers",
        "signature": "String-\u003ea-\u003eProcess()"
      }
    }
  }
]