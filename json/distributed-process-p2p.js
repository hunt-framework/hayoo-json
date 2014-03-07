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
        "word": "distributed-process-p2p"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePeer-to-peer node discovery backend for Cloud Haskell based on the TCP\n transport. Provided with a known node address it discovers and maintains\n the knowledge of it's peers.\n\u003c/p\u003e\u003cpre\u003e import qualified Control.Distributed.Backend.P2P as P2P\n import           Control.Monad.Trans (liftIO)\n import           Control.Concurrent (threadDelay)\n\n main = P2P.bootstrap \"myhostname\" \"9001\" [P2P.makeNodeId \"seedhost:9000\"] $ do\n     liftIO $ threadDelay 1000000 -- give dispatcher a second to discover other nodes\n     P2P.nsendPeers \"myService\" (\"some\", \"message\")\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Control.Distributed.Backend.P2P",
          "name": "P2P",
          "package": "distributed-process-p2p",
          "source": "src/Control-Distributed-Backend-P2P.html",
          "type": "module"
        },
        "index": {
          "description": "Peer-to-peer node discovery backend for Cloud Haskell based on the TCP transport Provided with known node address it discovers and maintains the knowledge of it peers import qualified Control.Distributed.Backend.P2P as P2P import Control.Monad.Trans liftIO import Control.Concurrent threadDelay main P2P.bootstrap myhostname P2P.makeNodeId seedhost do liftIO threadDelay give dispatcher second to discover other nodes P2P.nsendPeers myService some message",
          "hierarchy": "Control Distributed Backend P2P",
          "module": "Control.Distributed.Backend.P2P",
          "name": "P2P",
          "package": "distributed-process-p2p",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process-p2p/docs/Control-Distributed-Backend-P2P.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStart a controller service process and aquire connections to a swarm.\n\u003c/p\u003e",
          "module": "Control.Distributed.Backend.P2P",
          "name": "bootstrap",
          "package": "distributed-process-p2p",
          "signature": "HostName -\u003e ServiceName -\u003e [NodeId] -\u003e RemoteTable -\u003e Process () -\u003e IO ()",
          "source": "src/Control-Distributed-Backend-P2P.html#bootstrap",
          "type": "function"
        },
        "index": {
          "description": "Start controller service process and aquire connections to swarm",
          "hierarchy": "Control Distributed Backend P2P",
          "module": "Control.Distributed.Backend.P2P",
          "name": "bootstrap",
          "normalized": "HostName-\u003eServiceName-\u003e[NodeId]-\u003eRemoteTable-\u003eProcess()-\u003eIO()",
          "package": "distributed-process-p2p",
          "signature": "HostName-\u003eServiceName-\u003e[NodeId]-\u003eRemoteTable-\u003eProcess()-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process-p2p/docs/Control-Distributed-Backend-P2P.html#v:bootstrap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePoll a network for a list of specific service providers.\n\u003c/p\u003e",
          "module": "Control.Distributed.Backend.P2P",
          "name": "getCapable",
          "package": "distributed-process-p2p",
          "signature": "String -\u003e Process [ProcessId]",
          "source": "src/Control-Distributed-Backend-P2P.html#getCapable",
          "type": "function"
        },
        "index": {
          "description": "Poll network for list of specific service providers",
          "hierarchy": "Control Distributed Backend P2P",
          "module": "Control.Distributed.Backend.P2P",
          "name": "getCapable",
          "normalized": "String-\u003eProcess[ProcessId]",
          "package": "distributed-process-p2p",
          "partial": "Capable",
          "signature": "String-\u003eProcess[ProcessId]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process-p2p/docs/Control-Distributed-Backend-P2P.html#v:getCapable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a list of currently available peer nodes.\n\u003c/p\u003e",
          "module": "Control.Distributed.Backend.P2P",
          "name": "getPeers",
          "package": "distributed-process-p2p",
          "signature": "Process [NodeId]",
          "source": "src/Control-Distributed-Backend-P2P.html#getPeers",
          "type": "function"
        },
        "index": {
          "description": "Get list of currently available peer nodes",
          "hierarchy": "Control Distributed Backend P2P",
          "module": "Control.Distributed.Backend.P2P",
          "name": "getPeers",
          "normalized": "Process[NodeId]",
          "package": "distributed-process-p2p",
          "partial": "Peers",
          "signature": "Process[NodeId]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process-p2p/docs/Control-Distributed-Backend-P2P.html#v:getPeers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a NodeId from \u003ca\u003ehost:port\u003c/a\u003e string.\n\u003c/p\u003e",
          "module": "Control.Distributed.Backend.P2P",
          "name": "makeNodeId",
          "package": "distributed-process-p2p",
          "signature": "String -\u003e NodeId",
          "source": "src/Control-Distributed-Backend-P2P.html#makeNodeId",
          "type": "function"
        },
        "index": {
          "description": "Make NodeId from host port string",
          "hierarchy": "Control Distributed Backend P2P",
          "module": "Control.Distributed.Backend.P2P",
          "name": "makeNodeId",
          "normalized": "String-\u003eNodeId",
          "package": "distributed-process-p2p",
          "partial": "Node Id",
          "signature": "String-\u003eNodeId",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process-p2p/docs/Control-Distributed-Backend-P2P.html#v:makeNodeId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBroadcast a message to a service of on nodes currently running it.\n\u003c/p\u003e",
          "module": "Control.Distributed.Backend.P2P",
          "name": "nsendCapable",
          "package": "distributed-process-p2p",
          "signature": "String -\u003e a -\u003e Process ()",
          "source": "src/Control-Distributed-Backend-P2P.html#nsendCapable",
          "type": "function"
        },
        "index": {
          "description": "Broadcast message to service of on nodes currently running it",
          "hierarchy": "Control Distributed Backend P2P",
          "module": "Control.Distributed.Backend.P2P",
          "name": "nsendCapable",
          "normalized": "String-\u003ea-\u003eProcess()",
          "package": "distributed-process-p2p",
          "partial": "Capable",
          "signature": "String-\u003ea-\u003eProcess()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process-p2p/docs/Control-Distributed-Backend-P2P.html#v:nsendCapable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBroadcast a message to a specific service on all peers.\n\u003c/p\u003e",
          "module": "Control.Distributed.Backend.P2P",
          "name": "nsendPeers",
          "package": "distributed-process-p2p",
          "signature": "String -\u003e a -\u003e Process ()",
          "source": "src/Control-Distributed-Backend-P2P.html#nsendPeers",
          "type": "function"
        },
        "index": {
          "description": "Broadcast message to specific service on all peers",
          "hierarchy": "Control Distributed Backend P2P",
          "module": "Control.Distributed.Backend.P2P",
          "name": "nsendPeers",
          "normalized": "String-\u003ea-\u003eProcess()",
          "package": "distributed-process-p2p",
          "partial": "Peers",
          "signature": "String-\u003ea-\u003eProcess()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process-p2p/docs/Control-Distributed-Backend-P2P.html#v:nsendPeers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA P2P controller service process.\n\u003c/p\u003e",
          "module": "Control.Distributed.Backend.P2P",
          "name": "peerController",
          "package": "distributed-process-p2p",
          "signature": "[NodeId] -\u003e Process ()",
          "source": "src/Control-Distributed-Backend-P2P.html#peerController",
          "type": "function"
        },
        "index": {
          "description": "P2P controller service process",
          "hierarchy": "Control Distributed Backend P2P",
          "module": "Control.Distributed.Backend.P2P",
          "name": "peerController",
          "normalized": "[NodeId]-\u003eProcess()",
          "package": "distributed-process-p2p",
          "partial": "Controller",
          "signature": "[NodeId]-\u003eProcess()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process-p2p/docs/Control-Distributed-Backend-P2P.html#v:peerController"
      }
    }
  ]
]