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
        "word": "metricsd-client"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Metricsd.Client",
          "name": "Client",
          "package": "metricsd-client",
          "source": "src/Network-Metricsd-Client.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Network Metricsd Client",
          "module": "Network.Metricsd.Client",
          "name": "Client",
          "package": "metricsd-client",
          "partial": "Client",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/metricsd-client/docs/Network-Metricsd-Client.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Metricsd.Client",
          "name": "MetricsdClientHandle",
          "package": "metricsd-client",
          "source": "src/Network-Metricsd-Client.html#MetricsdClientHandle",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Metricsd Client",
          "module": "Network.Metricsd.Client",
          "name": "MetricsdClientHandle",
          "package": "metricsd-client",
          "partial": "Metricsd Client Handle",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/metricsd-client/docs/Network-Metricsd-Client.html#t:MetricsdClientHandle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInitialize metricsd client with default hostname and port (127.0.0.1:8125).\n\u003c/p\u003e",
          "module": "Network.Metricsd.Client",
          "name": "initMetricsdClient",
          "package": "metricsd-client",
          "signature": "IO MetricsdClientHandle",
          "source": "src/Network-Metricsd-Client.html#initMetricsdClient",
          "type": "function"
        },
        "index": {
          "description": "Initialize metricsd client with default hostname and port",
          "hierarchy": "Network Metricsd Client",
          "module": "Network.Metricsd.Client",
          "name": "initMetricsdClient",
          "package": "metricsd-client",
          "partial": "Metricsd Client",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/metricsd-client/docs/Network-Metricsd-Client.html#v:initMetricsdClient"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInitialize metricsd client with the given hostname and port.\n\u003c/p\u003e",
          "module": "Network.Metricsd.Client",
          "name": "initMetricsdClient'",
          "package": "metricsd-client",
          "signature": "String -\u003e PortNumber -\u003e IO MetricsdClientHandle",
          "source": "src/Network-Metricsd-Client.html#initMetricsdClient%27",
          "type": "function"
        },
        "index": {
          "description": "Initialize metricsd client with the given hostname and port",
          "hierarchy": "Network Metricsd Client",
          "module": "Network.Metricsd.Client",
          "name": "initMetricsdClient'",
          "normalized": "String-\u003ePortNumber-\u003eIO MetricsdClientHandle",
          "package": "metricsd-client",
          "partial": "Metricsd Client'",
          "signature": "String-\u003ePortNumber-\u003eIO MetricsdClientHandle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/metricsd-client/docs/Network-Metricsd-Client.html#v:initMetricsdClient-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Metricsd.Client",
          "name": "sendCounter",
          "package": "metricsd-client",
          "signature": "MetricsdClientHandle -\u003e String -\u003e Integer -\u003e IO ()",
          "source": "src/Network-Metricsd-Client.html#sendCounter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Metricsd Client",
          "module": "Network.Metricsd.Client",
          "name": "sendCounter",
          "normalized": "MetricsdClientHandle-\u003eString-\u003eInteger-\u003eIO()",
          "package": "metricsd-client",
          "partial": "Counter",
          "signature": "MetricsdClientHandle-\u003eString-\u003eInteger-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/metricsd-client/docs/Network-Metricsd-Client.html#v:sendCounter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Metricsd.Client",
          "name": "sendGauge",
          "package": "metricsd-client",
          "signature": "MetricsdClientHandle -\u003e String -\u003e Integer -\u003e IO ()",
          "source": "src/Network-Metricsd-Client.html#sendGauge",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Metricsd Client",
          "module": "Network.Metricsd.Client",
          "name": "sendGauge",
          "normalized": "MetricsdClientHandle-\u003eString-\u003eInteger-\u003eIO()",
          "package": "metricsd-client",
          "partial": "Gauge",
          "signature": "MetricsdClientHandle-\u003eString-\u003eInteger-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/metricsd-client/docs/Network-Metricsd-Client.html#v:sendGauge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Metricsd.Client",
          "name": "sendHistogram",
          "package": "metricsd-client",
          "signature": "MetricsdClientHandle -\u003e String -\u003e Integer -\u003e IO ()",
          "source": "src/Network-Metricsd-Client.html#sendHistogram",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Metricsd Client",
          "module": "Network.Metricsd.Client",
          "name": "sendHistogram",
          "normalized": "MetricsdClientHandle-\u003eString-\u003eInteger-\u003eIO()",
          "package": "metricsd-client",
          "partial": "Histogram",
          "signature": "MetricsdClientHandle-\u003eString-\u003eInteger-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/metricsd-client/docs/Network-Metricsd-Client.html#v:sendHistogram"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Metricsd.Client",
          "name": "sendMeter",
          "package": "metricsd-client",
          "signature": "MetricsdClientHandle -\u003e String -\u003e IO ()",
          "source": "src/Network-Metricsd-Client.html#sendMeter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Metricsd Client",
          "module": "Network.Metricsd.Client",
          "name": "sendMeter",
          "normalized": "MetricsdClientHandle-\u003eString-\u003eIO()",
          "package": "metricsd-client",
          "partial": "Meter",
          "signature": "MetricsdClientHandle-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/metricsd-client/docs/Network-Metricsd-Client.html#v:sendMeter"
      }
    }
  ]
]