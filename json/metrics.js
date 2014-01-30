[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-HealthCheck.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA simple interface through which simple status dashboards can be built.\n\u003c/p\u003e\u003cpre\u003e import Data.HealthCheck\n import Data.Metrics.Reporter.StdOut\n \n healthCheck1 :: HealthCheck\n healthCheck1 = healthCheck \"benign_warm_fuzzy_thing\" $\n   return $ StatusReport Good Nothing\n \n healthCheck2 :: HealthCheck\n healthCheck2 = healthCheck \"nuclear_missile_launcher\" $\n   return $ StatusReport Ugly $ Just \"out of missiles\"\n \n main :: IO ()\n main = printHealthChecks [ healthCheck1, healthCheck2 ]\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Data.HealthCheck",
        "fct-package": "metrics",
        "fct-signature": "module",
        "fct-source": "src/Data-HealthCheck.html",
        "fct-type": "module",
        "title": "HealthCheck"
      },
      "index": {
        "description": "simple interface through which simple status dashboards can be built import Data.HealthCheck import Data.Metrics.Reporter.StdOut healthCheck1 HealthCheck healthCheck1 healthCheck benign warm fuzzy thing return StatusReport Good Nothing healthCheck2 HealthCheck healthCheck2 healthCheck nuclear missile launcher return StatusReport Ugly Just out of missiles main IO main printHealthChecks healthCheck1 healthCheck2",
        "hierarchy": "Data HealthCheck",
        "module": "Data.HealthCheck",
        "name": "HealthCheck",
        "normalized": "",
        "package": "metrics",
        "partial": "Health Check",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-HealthCheck.html#t:HealthCheck",
      "description": {
        "fct-descr": "\u003cp\u003eA simple discrete health reporter\n\u003c/p\u003e",
        "fct-module": "Data.HealthCheck",
        "fct-package": "metrics",
        "fct-signature": "data",
        "fct-source": "src/Data-HealthCheck.html#HealthCheck",
        "fct-type": "data",
        "title": "HealthCheck"
      },
      "index": {
        "description": "simple discrete health reporter",
        "hierarchy": "Data HealthCheck",
        "module": "Data.HealthCheck",
        "name": "HealthCheck",
        "normalized": "",
        "package": "metrics",
        "partial": "Health Check",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-HealthCheck.html#t:HealthChecks",
      "description": {
        "fct-descr": "\u003cp\u003eClean up type signatures for bundling sets of health checks for reporting\n\u003c/p\u003e",
        "fct-module": "Data.HealthCheck",
        "fct-package": "metrics",
        "fct-signature": "type",
        "fct-source": "src/Data-HealthCheck.html#HealthChecks",
        "fct-type": "type",
        "title": "HealthChecks"
      },
      "index": {
        "description": "Clean up type signatures for bundling sets of health checks for reporting",
        "hierarchy": "Data HealthCheck",
        "module": "Data.HealthCheck",
        "name": "HealthChecks",
        "normalized": "",
        "package": "metrics",
        "partial": "Health Checks",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-HealthCheck.html#t:Status",
      "description": {
        "fct-descr": "\u003cp\u003eProvides a simple status reporting mechanism for checking application health at a glance.\n\u003c/p\u003e",
        "fct-module": "Data.HealthCheck",
        "fct-package": "metrics",
        "fct-signature": "data",
        "fct-source": "src/Data-HealthCheck.html#Status",
        "fct-type": "data",
        "title": "Status"
      },
      "index": {
        "description": "Provides simple status reporting mechanism for checking application health at glance",
        "hierarchy": "Data HealthCheck",
        "module": "Data.HealthCheck",
        "name": "Status",
        "normalized": "",
        "package": "metrics",
        "partial": "Status",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-HealthCheck.html#t:StatusReport",
      "description": {
        "fct-descr": "\u003cp\u003eA report on the current status of a subsystem.\n\u003c/p\u003e",
        "fct-module": "Data.HealthCheck",
        "fct-package": "metrics",
        "fct-signature": "data",
        "fct-source": "src/Data-HealthCheck.html#StatusReport",
        "fct-type": "data",
        "title": "StatusReport"
      },
      "index": {
        "description": "report on the current status of subsystem",
        "hierarchy": "Data HealthCheck",
        "module": "Data.HealthCheck",
        "name": "StatusReport",
        "normalized": "",
        "package": "metrics",
        "partial": "Status Report",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-HealthCheck.html#v:Bad",
      "description": {
        "fct-descr": "\u003cp\u003eSomething is broken.\n\u003c/p\u003e",
        "fct-module": "Data.HealthCheck",
        "fct-package": "metrics",
        "fct-signature": "Bad",
        "fct-source": "src/Data-HealthCheck.html#Status",
        "fct-type": "function",
        "title": "Bad"
      },
      "index": {
        "description": "Something is broken",
        "hierarchy": "Data HealthCheck",
        "module": "Data.HealthCheck",
        "name": "Bad",
        "normalized": "",
        "package": "metrics",
        "partial": "Bad",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-HealthCheck.html#v:Good",
      "description": {
        "fct-descr": "\u003cp\u003eEverything appears to be going well.\n\u003c/p\u003e",
        "fct-module": "Data.HealthCheck",
        "fct-package": "metrics",
        "fct-signature": "Good",
        "fct-source": "src/Data-HealthCheck.html#Status",
        "fct-type": "function",
        "title": "Good"
      },
      "index": {
        "description": "Everything appears to be going well",
        "hierarchy": "Data HealthCheck",
        "module": "Data.HealthCheck",
        "name": "Good",
        "normalized": "",
        "package": "metrics",
        "partial": "Good",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-HealthCheck.html#v:HealthCheck",
      "description": {
        "fct-module": "Data.HealthCheck",
        "fct-package": "metrics",
        "fct-signature": "HealthCheck",
        "fct-source": "src/Data-HealthCheck.html#HealthCheck",
        "fct-type": "function",
        "title": "HealthCheck"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HealthCheck",
        "module": "Data.HealthCheck",
        "name": "HealthCheck",
        "normalized": "",
        "package": "metrics",
        "partial": "Health Check",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-HealthCheck.html#v:StatusReport",
      "description": {
        "fct-module": "Data.HealthCheck",
        "fct-package": "metrics",
        "fct-signature": "StatusReport",
        "fct-source": "src/Data-HealthCheck.html#StatusReport",
        "fct-type": "function",
        "title": "StatusReport"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HealthCheck",
        "module": "Data.HealthCheck",
        "name": "StatusReport",
        "normalized": "",
        "package": "metrics",
        "partial": "Status Report",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-HealthCheck.html#v:Ugly",
      "description": {
        "fct-descr": "\u003cp\u003eThere is some sort of non-critical issue that deserves attention.\n\u003c/p\u003e",
        "fct-module": "Data.HealthCheck",
        "fct-package": "metrics",
        "fct-signature": "Ugly",
        "fct-source": "src/Data-HealthCheck.html#Status",
        "fct-type": "function",
        "title": "Ugly"
      },
      "index": {
        "description": "There is some sort of non-critical issue that deserves attention",
        "hierarchy": "Data HealthCheck",
        "module": "Data.HealthCheck",
        "name": "Ugly",
        "normalized": "",
        "package": "metrics",
        "partial": "Ugly",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-HealthCheck.html#v:Unknown",
      "description": {
        "fct-descr": "\u003cp\u003eThere is no information, either good or bad, at the moment.\n An example of this might be something like a loss of network connectivity to a non-crucial service.\n\u003c/p\u003e",
        "fct-module": "Data.HealthCheck",
        "fct-package": "metrics",
        "fct-signature": "Unknown",
        "fct-source": "src/Data-HealthCheck.html#Status",
        "fct-type": "function",
        "title": "Unknown"
      },
      "index": {
        "description": "There is no information either good or bad at the moment An example of this might be something like loss of network connectivity to non-crucial service",
        "hierarchy": "Data HealthCheck",
        "module": "Data.HealthCheck",
        "name": "Unknown",
        "normalized": "",
        "package": "metrics",
        "partial": "Unknown",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-HealthCheck.html#v:healthCheck",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a health check.\n\u003c/p\u003e",
        "fct-module": "Data.HealthCheck",
        "fct-package": "metrics",
        "fct-signature": "Text -\u003e IO StatusReport -\u003e HealthCheck",
        "fct-source": "src/Data-HealthCheck.html#healthCheck",
        "fct-type": "function",
        "title": "healthCheck"
      },
      "index": {
        "description": "Create health check",
        "hierarchy": "Data HealthCheck",
        "module": "Data.HealthCheck",
        "name": "healthCheck",
        "normalized": "Text-\u003eIO StatusReport-\u003eHealthCheck",
        "package": "metrics",
        "partial": "Check",
        "signature": "Text-\u003eIO StatusReport-\u003eHealthCheck"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-HealthCheck.html#v:healthCheckName",
      "description": {
        "fct-descr": "\u003cp\u003eA unique identifier for the health check\n\u003c/p\u003e",
        "fct-module": "Data.HealthCheck",
        "fct-package": "metrics",
        "fct-signature": "Text",
        "fct-source": "src/Data-HealthCheck.html#HealthCheck",
        "fct-type": "function",
        "title": "healthCheckName"
      },
      "index": {
        "description": "unique identifier for the health check",
        "hierarchy": "Data HealthCheck",
        "module": "Data.HealthCheck",
        "name": "healthCheckName",
        "normalized": "",
        "package": "metrics",
        "partial": "Check Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-HealthCheck.html#v:healthCheckStatusReport",
      "description": {
        "fct-descr": "\u003cp\u003eAn action which determines the current status of the health check\n\u003c/p\u003e",
        "fct-module": "Data.HealthCheck",
        "fct-package": "metrics",
        "fct-signature": "IO StatusReport",
        "fct-source": "src/Data-HealthCheck.html#HealthCheck",
        "fct-type": "function",
        "title": "healthCheckStatusReport"
      },
      "index": {
        "description": "An action which determines the current status of the health check",
        "hierarchy": "Data HealthCheck",
        "module": "Data.HealthCheck",
        "name": "healthCheckStatusReport",
        "normalized": "",
        "package": "metrics",
        "partial": "Check Status Report",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-HealthCheck.html#v:status",
      "description": {
        "fct-descr": "\u003cp\u003eCurrent status\n\u003c/p\u003e",
        "fct-module": "Data.HealthCheck",
        "fct-package": "metrics",
        "fct-signature": "Status",
        "fct-source": "src/Data-HealthCheck.html#StatusReport",
        "fct-type": "function",
        "title": "status"
      },
      "index": {
        "description": "Current status",
        "hierarchy": "Data HealthCheck",
        "module": "Data.HealthCheck",
        "name": "status",
        "normalized": "",
        "package": "metrics",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-HealthCheck.html#v:statusMessage",
      "description": {
        "fct-descr": "\u003cp\u003eAn optional message to display about the current status.\n\u003c/p\u003e",
        "fct-module": "Data.HealthCheck",
        "fct-package": "metrics",
        "fct-signature": "Maybe Text",
        "fct-source": "src/Data-HealthCheck.html#StatusReport",
        "fct-type": "function",
        "title": "statusMessage"
      },
      "index": {
        "description": "An optional message to display about the current status",
        "hierarchy": "Data HealthCheck",
        "module": "Data.HealthCheck",
        "name": "statusMessage",
        "normalized": "",
        "package": "metrics",
        "partial": "Message",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-Counter.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn incrementing and decrementing counter metric\n\u003c/p\u003e\u003cpre\u003e import Data.Metrics.Counter\n\n main :: IO ()\n main = do\n   c \u003c- counter\n   increment c\n   x \u003c- value c\n   print $ x == 1\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Data.Metrics.Counter",
        "fct-package": "metrics",
        "fct-signature": "module",
        "fct-source": "src/Data-Metrics-Counter.html",
        "fct-type": "module",
        "title": "Counter"
      },
      "index": {
        "description": "An incrementing and decrementing counter metric import Data.Metrics.Counter main IO main do counter increment value print",
        "hierarchy": "Data Metrics Counter",
        "module": "Data.Metrics.Counter",
        "name": "Counter",
        "normalized": "",
        "package": "metrics",
        "partial": "Counter",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-Counter.html#t:Counter",
      "description": {
        "fct-descr": "\u003cp\u003eA basic atomic counter.\n\u003c/p\u003e",
        "fct-module": "Data.Metrics.Counter",
        "fct-package": "metrics",
        "fct-signature": "data",
        "fct-source": "src/Data-Metrics-Counter.html#Counter",
        "fct-type": "data",
        "title": "Counter"
      },
      "index": {
        "description": "basic atomic counter",
        "hierarchy": "Data Metrics Counter",
        "module": "Data.Metrics.Counter",
        "name": "Counter",
        "normalized": "",
        "package": "metrics",
        "partial": "Counter",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-Counter.html#v:counter",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new counter.\n\u003c/p\u003e",
        "fct-module": "Data.Metrics.Counter",
        "fct-package": "metrics",
        "fct-signature": "m (Counter m)",
        "fct-source": "src/Data-Metrics-Counter.html#counter",
        "fct-type": "function",
        "title": "counter"
      },
      "index": {
        "description": "Create new counter",
        "hierarchy": "Data Metrics Counter",
        "module": "Data.Metrics.Counter",
        "name": "counter",
        "normalized": "",
        "package": "metrics",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-Counter.html#v:decrement",
      "description": {
        "fct-descr": "\u003cp\u003eDecrease the value of a counter by 1.\n\u003c/p\u003e",
        "fct-module": "Data.Metrics.Counter",
        "fct-package": "metrics",
        "fct-signature": "Counter m -\u003e m ()",
        "fct-source": "src/Data-Metrics-Counter.html#decrement",
        "fct-type": "function",
        "title": "decrement"
      },
      "index": {
        "description": "Decrease the value of counter by",
        "hierarchy": "Data Metrics Counter",
        "module": "Data.Metrics.Counter",
        "name": "decrement",
        "normalized": "Counter a-\u003ea()",
        "package": "metrics",
        "partial": "",
        "signature": "Counter m-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-Counter.html#v:decrement-39-",
      "description": {
        "fct-descr": "\u003cp\u003eSubtract an arbitrary amount from a counter.\n\u003c/p\u003e",
        "fct-module": "Data.Metrics.Counter",
        "fct-package": "metrics",
        "fct-signature": "Counter m -\u003e Int -\u003e m ()",
        "fct-source": "src/Data-Metrics-Counter.html#decrement%27",
        "fct-type": "function",
        "title": "decrement'"
      },
      "index": {
        "description": "Subtract an arbitrary amount from counter",
        "hierarchy": "Data Metrics Counter",
        "module": "Data.Metrics.Counter",
        "name": "decrement'",
        "normalized": "Counter a-\u003eInt-\u003ea()",
        "package": "metrics",
        "partial": "",
        "signature": "Counter m-\u003eInt-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-Counter.html#v:increment",
      "description": {
        "fct-descr": "\u003cp\u003eBump up a counter by 1.\n\u003c/p\u003e",
        "fct-module": "Data.Metrics.Counter",
        "fct-package": "metrics",
        "fct-signature": "Counter m -\u003e m ()",
        "fct-source": "src/Data-Metrics-Counter.html#increment",
        "fct-type": "function",
        "title": "increment"
      },
      "index": {
        "description": "Bump up counter by",
        "hierarchy": "Data Metrics Counter",
        "module": "Data.Metrics.Counter",
        "name": "increment",
        "normalized": "Counter a-\u003ea()",
        "package": "metrics",
        "partial": "",
        "signature": "Counter m-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-Counter.html#v:increment-39-",
      "description": {
        "fct-descr": "\u003cp\u003eAdd an arbitrary amount to a counter.\n\u003c/p\u003e",
        "fct-module": "Data.Metrics.Counter",
        "fct-package": "metrics",
        "fct-signature": "Counter m -\u003e Int -\u003e m ()",
        "fct-source": "src/Data-Metrics-Counter.html#increment%27",
        "fct-type": "function",
        "title": "increment'"
      },
      "index": {
        "description": "Add an arbitrary amount to counter",
        "hierarchy": "Data Metrics Counter",
        "module": "Data.Metrics.Counter",
        "name": "increment'",
        "normalized": "Counter a-\u003eInt-\u003ea()",
        "package": "metrics",
        "partial": "",
        "signature": "Counter m-\u003eInt-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-Gauge.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA module representing a \u003ca\u003eGauge\u003c/a\u003e, which is simply an action that returns the instantaneous measure of a value for charting.\n\u003c/p\u003e\u003cp\u003eThe action that provides the gauge's value may be replaced using \u003ca\u003eset\u003c/a\u003e, or read using \u003ca\u003evalue\u003c/a\u003e.\n\u003c/p\u003e\u003cpre\u003e\n gaugeExample = do\n   g \u003c- gauge $ return 1\n   x \u003c- value g\n   set g $ return 2\n   y \u003c- value g\n   return (x == 1 && y == 2)\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Data.Metrics.Gauge",
        "fct-package": "metrics",
        "fct-signature": "module",
        "fct-source": "src/Data-Metrics-Gauge.html",
        "fct-type": "module",
        "title": "Gauge"
      },
      "index": {
        "description": "module representing Gauge which is simply an action that returns the instantaneous measure of value for charting The action that provides the gauge value may be replaced using set or read using value gaugeExample do gauge return value set return value return",
        "hierarchy": "Data Metrics Gauge",
        "module": "Data.Metrics.Gauge",
        "name": "Gauge",
        "normalized": "",
        "package": "metrics",
        "partial": "Gauge",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-Gauge.html#t:Gauge",
      "description": {
        "fct-descr": "\u003cp\u003eAn instantaneous measure of a value.\n\u003c/p\u003e",
        "fct-module": "Data.Metrics.Gauge",
        "fct-package": "metrics",
        "fct-signature": "data",
        "fct-source": "src/Data-Metrics-Gauge.html#Gauge",
        "fct-type": "data",
        "title": "Gauge"
      },
      "index": {
        "description": "An instantaneous measure of value",
        "hierarchy": "Data Metrics Gauge",
        "module": "Data.Metrics.Gauge",
        "name": "Gauge",
        "normalized": "",
        "package": "metrics",
        "partial": "Gauge",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-Gauge.html#v:gauge",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new gauge from the given action.\n\u003c/p\u003e",
        "fct-module": "Data.Metrics.Gauge",
        "fct-package": "metrics",
        "fct-signature": "m Double -\u003e m (Gauge m)",
        "fct-source": "src/Data-Metrics-Gauge.html#gauge",
        "fct-type": "function",
        "title": "gauge"
      },
      "index": {
        "description": "Create new gauge from the given action",
        "hierarchy": "Data Metrics Gauge",
        "module": "Data.Metrics.Gauge",
        "name": "gauge",
        "normalized": "a Double-\u003ea(Gauge a)",
        "package": "metrics",
        "partial": "",
        "signature": "m Double-\u003em(Gauge m)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-Gauge.html#v:ratio",
      "description": {
        "fct-descr": "\u003cp\u003eCompose multiple actions to create a ratio. Useful for graphing percentage information, e. g.\n\u003c/p\u003e\u003cpre\u003e\n connectionUtilizationRate :: IO (Gauge IO)\n connectionUtilizationRate = gauge $ ratio openConnectionCount $ return connectionPoolSize\n\u003c/pre\u003e",
        "fct-module": "Data.Metrics.Gauge",
        "fct-package": "metrics",
        "fct-signature": "f Double -\u003e f Double -\u003e f Double",
        "fct-source": "src/Data-Metrics-Gauge.html#ratio",
        "fct-type": "function",
        "title": "ratio"
      },
      "index": {
        "description": "Compose multiple actions to create ratio Useful for graphing percentage information connectionUtilizationRate IO Gauge IO connectionUtilizationRate gauge ratio openConnectionCount return connectionPoolSize",
        "hierarchy": "Data Metrics Gauge",
        "module": "Data.Metrics.Gauge",
        "name": "ratio",
        "normalized": "a Double-\u003ea Double-\u003ea Double",
        "package": "metrics",
        "partial": "",
        "signature": "f Double-\u003ef Double-\u003ef Double"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-Histogram-Internal.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe pure interface for histograms.\n This module is typically not as useful as the stateful implementation\n since reservoir updates require retrieving the current time.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Metrics.Histogram.Internal",
        "fct-package": "metrics",
        "fct-signature": "module",
        "fct-source": "src/Data-Metrics-Histogram-Internal.html",
        "fct-type": "module",
        "title": "Internal"
      },
      "index": {
        "description": "The pure interface for histograms This module is typically not as useful as the stateful implementation since reservoir updates require retrieving the current time",
        "hierarchy": "Data Metrics Histogram Internal",
        "module": "Data.Metrics.Histogram.Internal",
        "name": "Internal",
        "normalized": "",
        "package": "metrics",
        "partial": "Internal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-Histogram-Internal.html#t:Histogram",
      "description": {
        "fct-descr": "\u003cp\u003eA pure histogram that maintains a bounded reservoir of samples and basic statistical data about the samples.\n\u003c/p\u003e",
        "fct-module": "Data.Metrics.Histogram.Internal",
        "fct-package": "metrics",
        "fct-signature": "data",
        "fct-source": "src/Data-Metrics-Histogram-Internal.html#Histogram",
        "fct-type": "data",
        "title": "Histogram"
      },
      "index": {
        "description": "pure histogram that maintains bounded reservoir of samples and basic statistical data about the samples",
        "hierarchy": "Data Metrics Histogram Internal",
        "module": "Data.Metrics.Histogram.Internal",
        "name": "Histogram",
        "normalized": "",
        "package": "metrics",
        "partial": "Histogram",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-Histogram-Internal.html#v:clear",
      "description": {
        "fct-descr": "\u003cp\u003eReset all statistics, in addition to the underlying reservoir.\n\u003c/p\u003e",
        "fct-module": "Data.Metrics.Histogram.Internal",
        "fct-package": "metrics",
        "fct-signature": "NominalDiffTime -\u003e Histogram -\u003e Histogram",
        "fct-source": "src/Data-Metrics-Histogram-Internal.html#clear",
        "fct-type": "function",
        "title": "clear"
      },
      "index": {
        "description": "Reset all statistics in addition to the underlying reservoir",
        "hierarchy": "Data Metrics Histogram Internal",
        "module": "Data.Metrics.Histogram.Internal",
        "name": "clear",
        "normalized": "NominalDiffTime-\u003eHistogram-\u003eHistogram",
        "package": "metrics",
        "partial": "",
        "signature": "NominalDiffTime-\u003eHistogram-\u003eHistogram"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-Histogram-Internal.html#v:count",
      "description": {
        "fct-descr": "\u003cp\u003eGet the number of samples that the histogram has been updated with.\n\u003c/p\u003e",
        "fct-module": "Data.Metrics.Histogram.Internal",
        "fct-package": "metrics",
        "fct-signature": "Histogram -\u003e Int",
        "fct-source": "src/Data-Metrics-Histogram-Internal.html#count",
        "fct-type": "function",
        "title": "count"
      },
      "index": {
        "description": "Get the number of samples that the histogram has been updated with",
        "hierarchy": "Data Metrics Histogram Internal",
        "module": "Data.Metrics.Histogram.Internal",
        "name": "count",
        "normalized": "Histogram-\u003eInt",
        "package": "metrics",
        "partial": "",
        "signature": "Histogram-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-Histogram-Internal.html#v:histogram",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a histogram using a custom reservoir.\n\u003c/p\u003e",
        "fct-module": "Data.Metrics.Histogram.Internal",
        "fct-package": "metrics",
        "fct-signature": "Reservoir -\u003e Histogram",
        "fct-source": "src/Data-Metrics-Histogram-Internal.html#histogram",
        "fct-type": "function",
        "title": "histogram"
      },
      "index": {
        "description": "Create histogram using custom reservoir",
        "hierarchy": "Data Metrics Histogram Internal",
        "module": "Data.Metrics.Histogram.Internal",
        "name": "histogram",
        "normalized": "Reservoir-\u003eHistogram",
        "package": "metrics",
        "partial": "",
        "signature": "Reservoir-\u003eHistogram"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-Histogram-Internal.html#v:maxVal",
      "description": {
        "fct-descr": "\u003cp\u003eGet the maximum value of all samples\n\u003c/p\u003e",
        "fct-module": "Data.Metrics.Histogram.Internal",
        "fct-package": "metrics",
        "fct-signature": "Histogram -\u003e Double",
        "fct-source": "src/Data-Metrics-Histogram-Internal.html#maxVal",
        "fct-type": "function",
        "title": "maxVal"
      },
      "index": {
        "description": "Get the maximum value of all samples",
        "hierarchy": "Data Metrics Histogram Internal",
        "module": "Data.Metrics.Histogram.Internal",
        "name": "maxVal",
        "normalized": "Histogram-\u003eDouble",
        "package": "metrics",
        "partial": "Val",
        "signature": "Histogram-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-Histogram-Internal.html#v:mean",
      "description": {
        "fct-descr": "\u003cp\u003eGet the average of all samples since the histogram was created.\n\u003c/p\u003e",
        "fct-module": "Data.Metrics.Histogram.Internal",
        "fct-package": "metrics",
        "fct-signature": "Histogram -\u003e Double",
        "fct-source": "src/Data-Metrics-Histogram-Internal.html#mean",
        "fct-type": "function",
        "title": "mean"
      },
      "index": {
        "description": "Get the average of all samples since the histogram was created",
        "hierarchy": "Data Metrics Histogram Internal",
        "module": "Data.Metrics.Histogram.Internal",
        "name": "mean",
        "normalized": "Histogram-\u003eDouble",
        "package": "metrics",
        "partial": "",
        "signature": "Histogram-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-Histogram-Internal.html#v:minVal",
      "description": {
        "fct-descr": "\u003cp\u003eGet the minimum value of all samples.\n\u003c/p\u003e",
        "fct-module": "Data.Metrics.Histogram.Internal",
        "fct-package": "metrics",
        "fct-signature": "Histogram -\u003e Double",
        "fct-source": "src/Data-Metrics-Histogram-Internal.html#minVal",
        "fct-type": "function",
        "title": "minVal"
      },
      "index": {
        "description": "Get the minimum value of all samples",
        "hierarchy": "Data Metrics Histogram Internal",
        "module": "Data.Metrics.Histogram.Internal",
        "name": "minVal",
        "normalized": "Histogram-\u003eDouble",
        "package": "metrics",
        "partial": "Val",
        "signature": "Histogram-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-Histogram-Internal.html#v:snapshot",
      "description": {
        "fct-descr": "\u003cp\u003eGet a snapshot of the current reservoir's samples.\n\u003c/p\u003e",
        "fct-module": "Data.Metrics.Histogram.Internal",
        "fct-package": "metrics",
        "fct-signature": "Histogram -\u003e Snapshot",
        "fct-source": "src/Data-Metrics-Histogram-Internal.html#snapshot",
        "fct-type": "function",
        "title": "snapshot"
      },
      "index": {
        "description": "Get snapshot of the current reservoir samples",
        "hierarchy": "Data Metrics Histogram Internal",
        "module": "Data.Metrics.Histogram.Internal",
        "name": "snapshot",
        "normalized": "Histogram-\u003eSnapshot",
        "package": "metrics",
        "partial": "",
        "signature": "Histogram-\u003eSnapshot"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-Histogram-Internal.html#v:stddev",
      "description": {
        "fct-descr": "\u003cp\u003eGet the standard deviation of all samples.\n\u003c/p\u003e",
        "fct-module": "Data.Metrics.Histogram.Internal",
        "fct-package": "metrics",
        "fct-signature": "Histogram -\u003e Double",
        "fct-source": "src/Data-Metrics-Histogram-Internal.html#stddev",
        "fct-type": "function",
        "title": "stddev"
      },
      "index": {
        "description": "Get the standard deviation of all samples",
        "hierarchy": "Data Metrics Histogram Internal",
        "module": "Data.Metrics.Histogram.Internal",
        "name": "stddev",
        "normalized": "Histogram-\u003eDouble",
        "package": "metrics",
        "partial": "",
        "signature": "Histogram-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-Histogram-Internal.html#v:update",
      "description": {
        "fct-descr": "\u003cp\u003eUpdate statistics and the reservoir with a new sample.\n\u003c/p\u003e",
        "fct-module": "Data.Metrics.Histogram.Internal",
        "fct-package": "metrics",
        "fct-signature": "Double -\u003e NominalDiffTime -\u003e Histogram -\u003e Histogram",
        "fct-source": "src/Data-Metrics-Histogram-Internal.html#update",
        "fct-type": "function",
        "title": "update"
      },
      "index": {
        "description": "Update statistics and the reservoir with new sample",
        "hierarchy": "Data Metrics Histogram Internal",
        "module": "Data.Metrics.Histogram.Internal",
        "name": "update",
        "normalized": "Double-\u003eNominalDiffTime-\u003eHistogram-\u003eHistogram",
        "package": "metrics",
        "partial": "",
        "signature": "Double-\u003eNominalDiffTime-\u003eHistogram-\u003eHistogram"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-Histogram-Internal.html#v:variance",
      "description": {
        "fct-descr": "\u003cp\u003eGet the variance of all samples.\n\u003c/p\u003e",
        "fct-module": "Data.Metrics.Histogram.Internal",
        "fct-package": "metrics",
        "fct-signature": "Histogram -\u003e Double",
        "fct-source": "src/Data-Metrics-Histogram-Internal.html#variance",
        "fct-type": "function",
        "title": "variance"
      },
      "index": {
        "description": "Get the variance of all samples",
        "hierarchy": "Data Metrics Histogram Internal",
        "module": "Data.Metrics.Histogram.Internal",
        "name": "variance",
        "normalized": "Histogram-\u003eDouble",
        "package": "metrics",
        "partial": "",
        "signature": "Histogram-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-Histogram.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eHistogram metrics allow you to measure not just easy things like the min, mean, max, and standard deviation of values, but also quantiles like the median or 95th percentile.\n\u003c/p\u003e\u003cp\u003eTraditionally, the way the median (or any other quantile) is calculated is to take the entire data set, sort it, and take the value in the middle (or 1% from the end, for the 99th percentile). This works for small data sets, or batch processing systems, but not for high-throughput, low-latency services.\n\u003c/p\u003e\u003cp\u003eThe solution for this is to sample the data as it goes through. By maintaining a small, manageable reservoir which is statistically representative of the data stream as a whole, we can quickly and easily calculate quantiles which are valid approximations of the actual quantiles. This technique is called reservoir sampling.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Metrics.Histogram",
        "fct-package": "metrics",
        "fct-signature": "module",
        "fct-source": "src/Data-Metrics-Histogram.html",
        "fct-type": "module",
        "title": "Histogram"
      },
      "index": {
        "description": "Histogram metrics allow you to measure not just easy things like the min mean max and standard deviation of values but also quantiles like the median or th percentile Traditionally the way the median or any other quantile is calculated is to take the entire data set sort it and take the value in the middle or from the end for the th percentile This works for small data sets or batch processing systems but not for high-throughput low-latency services The solution for this is to sample the data as it goes through By maintaining small manageable reservoir which is statistically representative of the data stream as whole we can quickly and easily calculate quantiles which are valid approximations of the actual quantiles This technique is called reservoir sampling",
        "hierarchy": "Data Metrics Histogram",
        "module": "Data.Metrics.Histogram",
        "name": "Histogram",
        "normalized": "",
        "package": "metrics",
        "partial": "Histogram",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-Histogram.html#t:Histogram",
      "description": {
        "fct-descr": "\u003cp\u003eA measure of the distribution of values in a stream of data.\n\u003c/p\u003e",
        "fct-module": "Data.Metrics.Histogram",
        "fct-package": "metrics",
        "fct-signature": "data",
        "fct-source": "src/Data-Metrics-Histogram.html#Histogram",
        "fct-type": "data",
        "title": "Histogram"
      },
      "index": {
        "description": "measure of the distribution of values in stream of data",
        "hierarchy": "Data Metrics Histogram",
        "module": "Data.Metrics.Histogram",
        "name": "Histogram",
        "normalized": "",
        "package": "metrics",
        "partial": "Histogram",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-Histogram.html#v:exponentiallyDecayingHistogram",
      "description": {
        "fct-descr": "\u003cp\u003eThe recommended histogram type. It provides a fast histogram that\n probabilistically evicts older entries using a weighting system. This\n ensures that snapshots remain relatively fresh.\n\u003c/p\u003e",
        "fct-module": "Data.Metrics.Histogram",
        "fct-package": "metrics",
        "fct-signature": "IO (Histogram IO)",
        "fct-source": "src/Data-Metrics-Histogram.html#exponentiallyDecayingHistogram",
        "fct-type": "function",
        "title": "exponentiallyDecayingHistogram"
      },
      "index": {
        "description": "The recommended histogram type It provides fast histogram that probabilistically evicts older entries using weighting system This ensures that snapshots remain relatively fresh",
        "hierarchy": "Data Metrics Histogram",
        "module": "Data.Metrics.Histogram",
        "name": "exponentiallyDecayingHistogram",
        "normalized": "",
        "package": "metrics",
        "partial": "Decaying Histogram",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-Histogram.html#v:histogram",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a histogram using a custom time data supplier function and a custom reservoir.\n\u003c/p\u003e",
        "fct-module": "Data.Metrics.Histogram",
        "fct-package": "metrics",
        "fct-signature": "m NominalDiffTime -\u003e Reservoir -\u003e m (Histogram m)",
        "fct-source": "src/Data-Metrics-Histogram.html#histogram",
        "fct-type": "function",
        "title": "histogram"
      },
      "index": {
        "description": "Create histogram using custom time data supplier function and custom reservoir",
        "hierarchy": "Data Metrics Histogram",
        "module": "Data.Metrics.Histogram",
        "name": "histogram",
        "normalized": "a NominalDiffTime-\u003eReservoir-\u003ea(Histogram a)",
        "package": "metrics",
        "partial": "",
        "signature": "m NominalDiffTime-\u003eReservoir-\u003em(Histogram m)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-Histogram.html#v:uniformHistogram",
      "description": {
        "fct-descr": "\u003cp\u003eA histogram that gives all entries an equal likelihood of being evicted.\n\u003c/p\u003e\u003cp\u003eProbably not what you want for most time-series data.\n\u003c/p\u003e",
        "fct-module": "Data.Metrics.Histogram",
        "fct-package": "metrics",
        "fct-signature": "Seed -\u003e IO (Histogram IO)",
        "fct-source": "src/Data-Metrics-Histogram.html#uniformHistogram",
        "fct-type": "function",
        "title": "uniformHistogram"
      },
      "index": {
        "description": "histogram that gives all entries an equal likelihood of being evicted Probably not what you want for most time-series data",
        "hierarchy": "Data Metrics Histogram",
        "module": "Data.Metrics.Histogram",
        "name": "uniformHistogram",
        "normalized": "Seed-\u003eIO(Histogram IO)",
        "package": "metrics",
        "partial": "Histogram",
        "signature": "Seed-\u003eIO(Histogram IO)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-Internal.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eInternal helpers that provide strict atomic MutVar access.\n\u003c/p\u003e\u003cp\u003eThese functions allow us to avoid the overhead of MVar as long\n as we can factor the impure sections of code out in such a way\n that the pure metric calculations can be executed without requiring\n access to multiple MutVars at a time.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Metrics.Internal",
        "fct-package": "metrics",
        "fct-signature": "module",
        "fct-source": "src/Data-Metrics-Internal.html",
        "fct-type": "module",
        "title": "Internal"
      },
      "index": {
        "description": "Internal helpers that provide strict atomic MutVar access These functions allow us to avoid the overhead of MVar as long as we can factor the impure sections of code out in such way that the pure metric calculations can be executed without requiring access to multiple MutVars at time",
        "hierarchy": "Data Metrics Internal",
        "module": "Data.Metrics.Internal",
        "name": "Internal",
        "normalized": "",
        "package": "metrics",
        "partial": "Internal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-Internal.html#t:MV",
      "description": {
        "fct-descr": "\u003cp\u003eMutVar (PrimState m) is a little verbose.\n\u003c/p\u003e",
        "fct-module": "Data.Metrics.Internal",
        "fct-package": "metrics",
        "fct-signature": "type",
        "fct-source": "src/Data-Metrics-Internal.html#MV",
        "fct-type": "type",
        "title": "MV"
      },
      "index": {
        "description": "MutVar PrimState is little verbose",
        "hierarchy": "Data Metrics Internal",
        "module": "Data.Metrics.Internal",
        "name": "MV",
        "normalized": "",
        "package": "metrics",
        "partial": "MV",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-Internal.html#v:applyWithRef",
      "description": {
        "fct-descr": "\u003cp\u003eStrictly apply a function on a MutVar while blocking other access to it.\n\u003c/p\u003e\u003cp\u003eI really think this is probably not implemented correctly in terms of being excessively strict.\n\u003c/p\u003e",
        "fct-module": "Data.Metrics.Internal",
        "fct-package": "metrics",
        "fct-signature": "MV m a -\u003e (a -\u003e b) -\u003e m b",
        "fct-source": "src/Data-Metrics-Internal.html#applyWithRef",
        "fct-type": "function",
        "title": "applyWithRef"
      },
      "index": {
        "description": "Strictly apply function on MutVar while blocking other access to it really think this is probably not implemented correctly in terms of being excessively strict",
        "hierarchy": "Data Metrics Internal",
        "module": "Data.Metrics.Internal",
        "name": "applyWithRef",
        "normalized": "MV a b-\u003e(b-\u003ec)-\u003ea c",
        "package": "metrics",
        "partial": "With Ref",
        "signature": "MV m a-\u003e(a-\u003eb)-\u003em b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-Internal.html#v:updateAndApplyToRef",
      "description": {
        "fct-descr": "\u003cp\u003eA function which combines the previous two, updating a value atomically\n and then returning some value calculated with the update in a single step.\n\u003c/p\u003e",
        "fct-module": "Data.Metrics.Internal",
        "fct-package": "metrics",
        "fct-signature": "MV m a -\u003e (a -\u003e a) -\u003e (a -\u003e b) -\u003e m b",
        "fct-source": "src/Data-Metrics-Internal.html#updateAndApplyToRef",
        "fct-type": "function",
        "title": "updateAndApplyToRef"
      },
      "index": {
        "description": "function which combines the previous two updating value atomically and then returning some value calculated with the update in single step",
        "hierarchy": "Data Metrics Internal",
        "module": "Data.Metrics.Internal",
        "name": "updateAndApplyToRef",
        "normalized": "MV a b-\u003e(b-\u003eb)-\u003e(b-\u003ec)-\u003ea c",
        "package": "metrics",
        "partial": "And Apply To Ref",
        "signature": "MV m a-\u003e(a-\u003ea)-\u003e(a-\u003eb)-\u003em b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-Internal.html#v:updateRef",
      "description": {
        "fct-descr": "\u003cp\u003ePerform a strict update on a MutVar. Pretty much identical to the strict variant of atomicModifyIORef.\n\u003c/p\u003e",
        "fct-module": "Data.Metrics.Internal",
        "fct-package": "metrics",
        "fct-signature": "MV m a -\u003e (a -\u003e a) -\u003e m ()",
        "fct-source": "src/Data-Metrics-Internal.html#updateRef",
        "fct-type": "function",
        "title": "updateRef"
      },
      "index": {
        "description": "Perform strict update on MutVar Pretty much identical to the strict variant of atomicModifyIORef",
        "hierarchy": "Data Metrics Internal",
        "module": "Data.Metrics.Internal",
        "name": "updateRef",
        "normalized": "MV a b-\u003e(b-\u003eb)-\u003ea()",
        "package": "metrics",
        "partial": "Ref",
        "signature": "MV m a-\u003e(a-\u003ea)-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-Meter-Internal.html#",
      "description": {
        "fct-module": "Data.Metrics.Meter.Internal",
        "fct-package": "metrics",
        "fct-signature": "module",
        "fct-source": "src/Data-Metrics-Meter-Internal.html",
        "fct-type": "module",
        "title": "Internal"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Metrics Meter Internal",
        "module": "Data.Metrics.Meter.Internal",
        "name": "Internal",
        "normalized": "",
        "package": "metrics",
        "partial": "Internal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-Meter-Internal.html#t:Meter",
      "description": {
        "fct-module": "Data.Metrics.Meter.Internal",
        "fct-package": "metrics",
        "fct-signature": "data",
        "fct-source": "src/Data-Metrics-Meter-Internal.html#Meter",
        "fct-type": "data",
        "title": "Meter"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Metrics Meter Internal",
        "module": "Data.Metrics.Meter.Internal",
        "name": "Meter",
        "normalized": "",
        "package": "metrics",
        "partial": "Meter",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-Meter-Internal.html#v:clear",
      "description": {
        "fct-module": "Data.Metrics.Meter.Internal",
        "fct-package": "metrics",
        "fct-signature": "NominalDiffTime -\u003e Meter -\u003e Meter",
        "fct-source": "src/Data-Metrics-Meter-Internal.html#clear",
        "fct-type": "function",
        "title": "clear"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Metrics Meter Internal",
        "module": "Data.Metrics.Meter.Internal",
        "name": "clear",
        "normalized": "NominalDiffTime-\u003eMeter-\u003eMeter",
        "package": "metrics",
        "partial": "",
        "signature": "NominalDiffTime-\u003eMeter-\u003eMeter"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-Meter-Internal.html#v:count",
      "description": {
        "fct-module": "Data.Metrics.Meter.Internal",
        "fct-package": "metrics",
        "fct-signature": "Lens' c e",
        "fct-source": "src/Data-Metrics-Meter-Internal.html#count",
        "fct-type": "function",
        "title": "count"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Metrics Meter Internal",
        "module": "Data.Metrics.Meter.Internal",
        "name": "count",
        "normalized": "",
        "package": "metrics",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-Meter-Internal.html#v:fifteenMinuteAverage",
      "description": {
        "fct-module": "Data.Metrics.Meter.Internal",
        "fct-package": "metrics",
        "fct-signature": "Meter -\u003e MovingAverage",
        "fct-source": "src/Data-Metrics-Meter-Internal.html#fifteenMinuteAverage",
        "fct-type": "function",
        "title": "fifteenMinuteAverage"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Metrics Meter Internal",
        "module": "Data.Metrics.Meter.Internal",
        "name": "fifteenMinuteAverage",
        "normalized": "Meter-\u003eMovingAverage",
        "package": "metrics",
        "partial": "Minute Average",
        "signature": "Meter-\u003eMovingAverage"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-Meter-Internal.html#v:fiveMinuteAverage",
      "description": {
        "fct-module": "Data.Metrics.Meter.Internal",
        "fct-package": "metrics",
        "fct-signature": "Meter -\u003e MovingAverage",
        "fct-source": "src/Data-Metrics-Meter-Internal.html#fiveMinuteAverage",
        "fct-type": "function",
        "title": "fiveMinuteAverage"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Metrics Meter Internal",
        "module": "Data.Metrics.Meter.Internal",
        "name": "fiveMinuteAverage",
        "normalized": "Meter-\u003eMovingAverage",
        "package": "metrics",
        "partial": "Minute Average",
        "signature": "Meter-\u003eMovingAverage"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-Meter-Internal.html#v:mark",
      "description": {
        "fct-module": "Data.Metrics.Meter.Internal",
        "fct-package": "metrics",
        "fct-signature": "NominalDiffTime -\u003e Int -\u003e Meter -\u003e Meter",
        "fct-source": "src/Data-Metrics-Meter-Internal.html#mark",
        "fct-type": "function",
        "title": "mark"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Metrics Meter Internal",
        "module": "Data.Metrics.Meter.Internal",
        "name": "mark",
        "normalized": "NominalDiffTime-\u003eInt-\u003eMeter-\u003eMeter",
        "package": "metrics",
        "partial": "",
        "signature": "NominalDiffTime-\u003eInt-\u003eMeter-\u003eMeter"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-Meter-Internal.html#v:meanRate",
      "description": {
        "fct-module": "Data.Metrics.Meter.Internal",
        "fct-package": "metrics",
        "fct-signature": "NominalDiffTime -\u003e Meter -\u003e Double",
        "fct-source": "src/Data-Metrics-Meter-Internal.html#meanRate",
        "fct-type": "function",
        "title": "meanRate"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Metrics Meter Internal",
        "module": "Data.Metrics.Meter.Internal",
        "name": "meanRate",
        "normalized": "NominalDiffTime-\u003eMeter-\u003eDouble",
        "package": "metrics",
        "partial": "Rate",
        "signature": "NominalDiffTime-\u003eMeter-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-Meter-Internal.html#v:meterData",
      "description": {
        "fct-module": "Data.Metrics.Meter.Internal",
        "fct-package": "metrics",
        "fct-signature": "(Int -\u003e MovingAverage) -\u003e NominalDiffTime -\u003e Meter",
        "fct-source": "src/Data-Metrics-Meter-Internal.html#meterData",
        "fct-type": "function",
        "title": "meterData"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Metrics Meter Internal",
        "module": "Data.Metrics.Meter.Internal",
        "name": "meterData",
        "normalized": "(Int-\u003eMovingAverage)-\u003eNominalDiffTime-\u003eMeter",
        "package": "metrics",
        "partial": "Data",
        "signature": "(Int-\u003eMovingAverage)-\u003eNominalDiffTime-\u003eMeter"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-Meter-Internal.html#v:oneMinuteAverage",
      "description": {
        "fct-module": "Data.Metrics.Meter.Internal",
        "fct-package": "metrics",
        "fct-signature": "Meter -\u003e MovingAverage",
        "fct-source": "src/Data-Metrics-Meter-Internal.html#oneMinuteAverage",
        "fct-type": "function",
        "title": "oneMinuteAverage"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Metrics Meter Internal",
        "module": "Data.Metrics.Meter.Internal",
        "name": "oneMinuteAverage",
        "normalized": "Meter-\u003eMovingAverage",
        "package": "metrics",
        "partial": "Minute Average",
        "signature": "Meter-\u003eMovingAverage"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-Meter-Internal.html#v:tick",
      "description": {
        "fct-module": "Data.Metrics.Meter.Internal",
        "fct-package": "metrics",
        "fct-signature": "Meter -\u003e Meter",
        "fct-source": "src/Data-Metrics-Meter-Internal.html#tick",
        "fct-type": "function",
        "title": "tick"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Metrics Meter Internal",
        "module": "Data.Metrics.Meter.Internal",
        "name": "tick",
        "normalized": "Meter-\u003eMeter",
        "package": "metrics",
        "partial": "",
        "signature": "Meter-\u003eMeter"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-Meter-Internal.html#v:tickIfNecessary",
      "description": {
        "fct-module": "Data.Metrics.Meter.Internal",
        "fct-package": "metrics",
        "fct-signature": "NominalDiffTime -\u003e Meter -\u003e Meter",
        "fct-source": "src/Data-Metrics-Meter-Internal.html#tickIfNecessary",
        "fct-type": "function",
        "title": "tickIfNecessary"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Metrics Meter Internal",
        "module": "Data.Metrics.Meter.Internal",
        "name": "tickIfNecessary",
        "normalized": "NominalDiffTime-\u003eMeter-\u003eMeter",
        "package": "metrics",
        "partial": "If Necessary",
        "signature": "NominalDiffTime-\u003eMeter-\u003eMeter"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-Meter.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA meter measures the rate at which a set of events occur:\n\u003c/p\u003e\u003cp\u003eMeters measure the rate of the events in a few different ways. The mean rate is the average rate of events. It&#8217;s generally useful for trivia, but as it represents the total rate for your application&#8217;s entire lifetime (e.g., the total number of requests handled, divided by the number of seconds the process has been running), it doesn&#8217;t offer a sense of recency. Luckily, meters also record three different exponentially-weighted moving average rates: the 1-, 5-, and 15-minute moving averages.\n\u003c/p\u003e\u003cp\u003e(Just like the Unix load averages visible in uptime or top.)\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Metrics.Meter",
        "fct-package": "metrics",
        "fct-signature": "module",
        "fct-source": "src/Data-Metrics-Meter.html",
        "fct-type": "module",
        "title": "Meter"
      },
      "index": {
        "description": "meter measures the rate at which set of events occur Meters measure the rate of the events in few different ways The mean rate is the average rate of events It generally useful for trivia but as it represents the total rate for your application entire lifetime e.g the total number of requests handled divided by the number of seconds the process has been running it doesn offer sense of recency Luckily meters also record three different exponentially-weighted moving average rates the and minute moving averages Just like the Unix load averages visible in uptime or top",
        "hierarchy": "Data Metrics Meter",
        "module": "Data.Metrics.Meter",
        "name": "Meter",
        "normalized": "",
        "package": "metrics",
        "partial": "Meter",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-Meter.html#t:Meter",
      "description": {
        "fct-descr": "\u003cp\u003eA measure of the \u003cem\u003erate\u003c/em\u003e at which a set of events occurs.\n\u003c/p\u003e",
        "fct-module": "Data.Metrics.Meter",
        "fct-package": "metrics",
        "fct-signature": "data",
        "fct-source": "src/Data-Metrics-Meter.html#Meter",
        "fct-type": "data",
        "title": "Meter"
      },
      "index": {
        "description": "measure of the rate at which set of events occurs",
        "hierarchy": "Data Metrics Meter",
        "module": "Data.Metrics.Meter",
        "name": "Meter",
        "normalized": "",
        "package": "metrics",
        "partial": "Meter",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-Meter.html#v:mark",
      "description": {
        "fct-descr": "\u003cp\u003eRegister a single occurrence of an event.\n\u003c/p\u003e",
        "fct-module": "Data.Metrics.Meter",
        "fct-package": "metrics",
        "fct-signature": "Meter m -\u003e m ()",
        "fct-source": "src/Data-Metrics-Meter.html#mark",
        "fct-type": "function",
        "title": "mark"
      },
      "index": {
        "description": "Register single occurrence of an event",
        "hierarchy": "Data Metrics Meter",
        "module": "Data.Metrics.Meter",
        "name": "mark",
        "normalized": "Meter a-\u003ea()",
        "package": "metrics",
        "partial": "",
        "signature": "Meter m-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-Meter.html#v:mark-39-",
      "description": {
        "fct-descr": "\u003cp\u003eRegister multiple occurrences of an event.\n\u003c/p\u003e",
        "fct-module": "Data.Metrics.Meter",
        "fct-package": "metrics",
        "fct-signature": "Meter m -\u003e Int -\u003e m ()",
        "fct-source": "src/Data-Metrics-Meter.html#mark%27",
        "fct-type": "function",
        "title": "mark'"
      },
      "index": {
        "description": "Register multiple occurrences of an event",
        "hierarchy": "Data Metrics Meter",
        "module": "Data.Metrics.Meter",
        "name": "mark'",
        "normalized": "Meter a-\u003eInt-\u003ea()",
        "package": "metrics",
        "partial": "",
        "signature": "Meter m-\u003eInt-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-Meter.html#v:meter",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new meter using an exponentially weighted moving average\n\u003c/p\u003e",
        "fct-module": "Data.Metrics.Meter",
        "fct-package": "metrics",
        "fct-signature": "IO (Meter IO)",
        "fct-source": "src/Data-Metrics-Meter.html#meter",
        "fct-type": "function",
        "title": "meter"
      },
      "index": {
        "description": "Create new meter using an exponentially weighted moving average",
        "hierarchy": "Data Metrics Meter",
        "module": "Data.Metrics.Meter",
        "name": "meter",
        "normalized": "",
        "package": "metrics",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-MovingAverage-ExponentiallyWeighted.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn exponentially-weighted moving average.\n\u003c/p\u003e\u003cp\u003esee \u003cem\u003eUNIX Load Average Part 1: How It Works\u003c/em\u003e:\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.teamquest.com/pdfs/whitepaper/ldavg1.pdf\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003esee \u003cem\u003eUNIX Load Average Part 2: Not Your Average Average\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.teamquest.com/pdfs/whitepaper/ldavg2.pdf\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003esee Wikipedia's article on exponential moving averages:\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://en.wikipedia.org/wiki/Moving_average#Exponential_moving_average\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Metrics.MovingAverage.ExponentiallyWeighted",
        "fct-package": "metrics",
        "fct-signature": "module",
        "fct-source": "src/Data-Metrics-MovingAverage-ExponentiallyWeighted.html",
        "fct-type": "module",
        "title": "ExponentiallyWeighted"
      },
      "index": {
        "description": "An exponentially-weighted moving average see UNIX Load Average Part How It Works http www.teamquest.com pdfs whitepaper ldavg1.pdf see UNIX Load Average Part Not Your Average Average http www.teamquest.com pdfs whitepaper ldavg2.pdf see Wikipedia article on exponential moving averages http en.wikipedia.org wiki Moving average Exponential moving average",
        "hierarchy": "Data Metrics MovingAverage ExponentiallyWeighted",
        "module": "Data.Metrics.MovingAverage.ExponentiallyWeighted",
        "name": "ExponentiallyWeighted",
        "normalized": "",
        "package": "metrics",
        "partial": "Exponentially Weighted",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-MovingAverage-ExponentiallyWeighted.html#t:ExponentiallyWeightedMovingAverage",
      "description": {
        "fct-descr": "\u003cp\u003eThe internal representation of the exponentially weighted moving average.\n\u003c/p\u003e\u003cp\u003eThis type encapsulates the state needed for the exponentially weighted \u003ca\u003eMovingAverage\u003c/a\u003e implementation.\n\u003c/p\u003e",
        "fct-module": "Data.Metrics.MovingAverage.ExponentiallyWeighted",
        "fct-package": "metrics",
        "fct-signature": "data",
        "fct-source": "src/Data-Metrics-MovingAverage-ExponentiallyWeighted.html#ExponentiallyWeightedMovingAverage",
        "fct-type": "data",
        "title": "ExponentiallyWeightedMovingAverage"
      },
      "index": {
        "description": "The internal representation of the exponentially weighted moving average This type encapsulates the state needed for the exponentially weighted MovingAverage implementation",
        "hierarchy": "Data Metrics MovingAverage ExponentiallyWeighted",
        "module": "Data.Metrics.MovingAverage.ExponentiallyWeighted",
        "name": "ExponentiallyWeightedMovingAverage",
        "normalized": "",
        "package": "metrics",
        "partial": "Exponentially Weighted Moving Average",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-MovingAverage-ExponentiallyWeighted.html#v:clear",
      "description": {
        "fct-descr": "\u003cp\u003eReset the moving average rate to zero.\n\u003c/p\u003e",
        "fct-module": "Data.Metrics.MovingAverage.ExponentiallyWeighted",
        "fct-package": "metrics",
        "fct-signature": "ExponentiallyWeightedMovingAverage -\u003e ExponentiallyWeightedMovingAverage",
        "fct-source": "src/Data-Metrics-MovingAverage-ExponentiallyWeighted.html#clear",
        "fct-type": "function",
        "title": "clear"
      },
      "index": {
        "description": "Reset the moving average rate to zero",
        "hierarchy": "Data Metrics MovingAverage ExponentiallyWeighted",
        "module": "Data.Metrics.MovingAverage.ExponentiallyWeighted",
        "name": "clear",
        "normalized": "ExponentiallyWeightedMovingAverage-\u003eExponentiallyWeightedMovingAverage",
        "package": "metrics",
        "partial": "",
        "signature": "ExponentiallyWeightedMovingAverage-\u003eExponentiallyWeightedMovingAverage"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-MovingAverage-ExponentiallyWeighted.html#v:empty",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new \u003ca\u003eExpontiallyWeightedMovingAverage\u003c/a\u003e with the given tick interval and averaging window.\n\u003c/p\u003e",
        "fct-module": "Data.Metrics.MovingAverage.ExponentiallyWeighted",
        "fct-package": "metrics",
        "fct-signature": "Double-\u003e Minutes-\u003e ExponentiallyWeightedMovingAverage",
        "fct-type": "function",
        "title": "empty"
      },
      "index": {
        "description": "Create new ExpontiallyWeightedMovingAverage with the given tick interval and averaging window",
        "hierarchy": "Data Metrics MovingAverage ExponentiallyWeighted",
        "module": "Data.Metrics.MovingAverage.ExponentiallyWeighted",
        "name": "empty",
        "normalized": "Double-\u003eMinutes-\u003eExponentiallyWeightedMovingAverage",
        "package": "metrics",
        "partial": "",
        "signature": "Double-\u003eMinutes-\u003eExponentiallyWeightedMovingAverage"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-MovingAverage-ExponentiallyWeighted.html#v:movingAverage",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new \u003ca\u003eMovingAverage\u003c/a\u003e with the given tick interval and averaging window.\n\u003c/p\u003e",
        "fct-module": "Data.Metrics.MovingAverage.ExponentiallyWeighted",
        "fct-package": "metrics",
        "fct-signature": "Double -\u003e Minutes -\u003e MovingAverage",
        "fct-source": "src/Data-Metrics-MovingAverage-ExponentiallyWeighted.html#movingAverage",
        "fct-type": "function",
        "title": "movingAverage"
      },
      "index": {
        "description": "Create new MovingAverage with the given tick interval and averaging window",
        "hierarchy": "Data Metrics MovingAverage ExponentiallyWeighted",
        "module": "Data.Metrics.MovingAverage.ExponentiallyWeighted",
        "name": "movingAverage",
        "normalized": "Double-\u003eMinutes-\u003eMovingAverage",
        "package": "metrics",
        "partial": "Average",
        "signature": "Double-\u003eMinutes-\u003eMovingAverage"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-MovingAverage-ExponentiallyWeighted.html#v:new15MinuteMovingAverage",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new \u003ca\u003eMovingAverage\u003c/a\u003e with 5 second tick intervals for a fifteen-minute window.\n\u003c/p\u003e",
        "fct-module": "Data.Metrics.MovingAverage.ExponentiallyWeighted",
        "fct-package": "metrics",
        "fct-signature": "MovingAverage",
        "fct-source": "src/Data-Metrics-MovingAverage-ExponentiallyWeighted.html#new15MinuteMovingAverage",
        "fct-type": "function",
        "title": "new15MinuteMovingAverage"
      },
      "index": {
        "description": "Create new MovingAverage with second tick intervals for fifteen-minute window",
        "hierarchy": "Data Metrics MovingAverage ExponentiallyWeighted",
        "module": "Data.Metrics.MovingAverage.ExponentiallyWeighted",
        "name": "new15MinuteMovingAverage",
        "normalized": "",
        "package": "metrics",
        "partial": "Minute Moving Average",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-MovingAverage-ExponentiallyWeighted.html#v:new1MinuteMovingAverage",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new \u003ca\u003eMovingAverage\u003c/a\u003e with 5 second tick intervals for a one-minute window.\n\u003c/p\u003e",
        "fct-module": "Data.Metrics.MovingAverage.ExponentiallyWeighted",
        "fct-package": "metrics",
        "fct-signature": "MovingAverage",
        "fct-source": "src/Data-Metrics-MovingAverage-ExponentiallyWeighted.html#new1MinuteMovingAverage",
        "fct-type": "function",
        "title": "new1MinuteMovingAverage"
      },
      "index": {
        "description": "Create new MovingAverage with second tick intervals for one-minute window",
        "hierarchy": "Data Metrics MovingAverage ExponentiallyWeighted",
        "module": "Data.Metrics.MovingAverage.ExponentiallyWeighted",
        "name": "new1MinuteMovingAverage",
        "normalized": "",
        "package": "metrics",
        "partial": "Minute Moving Average",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-MovingAverage-ExponentiallyWeighted.html#v:new5MinuteMovingAverage",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new \u003ca\u003eMovingAverage\u003c/a\u003e with 5 second tick intervals for a five-minute window.\n\u003c/p\u003e",
        "fct-module": "Data.Metrics.MovingAverage.ExponentiallyWeighted",
        "fct-package": "metrics",
        "fct-signature": "MovingAverage",
        "fct-source": "src/Data-Metrics-MovingAverage-ExponentiallyWeighted.html#new5MinuteMovingAverage",
        "fct-type": "function",
        "title": "new5MinuteMovingAverage"
      },
      "index": {
        "description": "Create new MovingAverage with second tick intervals for five-minute window",
        "hierarchy": "Data Metrics MovingAverage ExponentiallyWeighted",
        "module": "Data.Metrics.MovingAverage.ExponentiallyWeighted",
        "name": "new5MinuteMovingAverage",
        "normalized": "",
        "package": "metrics",
        "partial": "Minute Moving Average",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-MovingAverage-ExponentiallyWeighted.html#v:rate",
      "description": {
        "fct-descr": "\u003cp\u003eGet the current rate of the \u003ca\u003eExponentiallyWeightedMovingAverage\u003c/a\u003e for the given window.\n\u003c/p\u003e",
        "fct-module": "Data.Metrics.MovingAverage.ExponentiallyWeighted",
        "fct-package": "metrics",
        "fct-signature": "ExponentiallyWeightedMovingAverage -\u003e Double",
        "fct-source": "src/Data-Metrics-MovingAverage-ExponentiallyWeighted.html#rate",
        "fct-type": "function",
        "title": "rate"
      },
      "index": {
        "description": "Get the current rate of the ExponentiallyWeightedMovingAverage for the given window",
        "hierarchy": "Data Metrics MovingAverage ExponentiallyWeighted",
        "module": "Data.Metrics.MovingAverage.ExponentiallyWeighted",
        "name": "rate",
        "normalized": "ExponentiallyWeightedMovingAverage-\u003eDouble",
        "package": "metrics",
        "partial": "",
        "signature": "ExponentiallyWeightedMovingAverage-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-MovingAverage-ExponentiallyWeighted.html#v:tick",
      "description": {
        "fct-descr": "\u003cp\u003eUpdate the moving average as if the given interval between ticks has passed.\n\u003c/p\u003e",
        "fct-module": "Data.Metrics.MovingAverage.ExponentiallyWeighted",
        "fct-package": "metrics",
        "fct-signature": "ExponentiallyWeightedMovingAverage -\u003e ExponentiallyWeightedMovingAverage",
        "fct-source": "src/Data-Metrics-MovingAverage-ExponentiallyWeighted.html#tick",
        "fct-type": "function",
        "title": "tick"
      },
      "index": {
        "description": "Update the moving average as if the given interval between ticks has passed",
        "hierarchy": "Data Metrics MovingAverage ExponentiallyWeighted",
        "module": "Data.Metrics.MovingAverage.ExponentiallyWeighted",
        "name": "tick",
        "normalized": "ExponentiallyWeightedMovingAverage-\u003eExponentiallyWeightedMovingAverage",
        "package": "metrics",
        "partial": "",
        "signature": "ExponentiallyWeightedMovingAverage-\u003eExponentiallyWeightedMovingAverage"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-MovingAverage-ExponentiallyWeighted.html#v:update",
      "description": {
        "fct-descr": "\u003cp\u003eUpdate the moving average based upon the given value\n\u003c/p\u003e",
        "fct-module": "Data.Metrics.MovingAverage.ExponentiallyWeighted",
        "fct-package": "metrics",
        "fct-signature": "Double -\u003e ExponentiallyWeightedMovingAverage -\u003e ExponentiallyWeightedMovingAverage",
        "fct-source": "src/Data-Metrics-MovingAverage-ExponentiallyWeighted.html#update",
        "fct-type": "function",
        "title": "update"
      },
      "index": {
        "description": "Update the moving average based upon the given value",
        "hierarchy": "Data Metrics MovingAverage ExponentiallyWeighted",
        "module": "Data.Metrics.MovingAverage.ExponentiallyWeighted",
        "name": "update",
        "normalized": "Double-\u003eExponentiallyWeightedMovingAverage-\u003eExponentiallyWeightedMovingAverage",
        "package": "metrics",
        "partial": "",
        "signature": "Double-\u003eExponentiallyWeightedMovingAverage-\u003eExponentiallyWeightedMovingAverage"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-MovingAverage.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA pure moving average module. The interface is agnostic to the scale of time\n that the average is tracking. It is up to the specific moving average module to\n handle that functionality.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Metrics.MovingAverage",
        "fct-package": "metrics",
        "fct-signature": "module",
        "fct-source": "src/Data-Metrics-MovingAverage.html",
        "fct-type": "module",
        "title": "MovingAverage"
      },
      "index": {
        "description": "pure moving average module The interface is agnostic to the scale of time that the average is tracking It is up to the specific moving average module to handle that functionality",
        "hierarchy": "Data Metrics MovingAverage",
        "module": "Data.Metrics.MovingAverage",
        "name": "MovingAverage",
        "normalized": "",
        "package": "metrics",
        "partial": "Moving Average",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-MovingAverage.html#t:MovingAverage",
      "description": {
        "fct-descr": "\u003cp\u003eThis type encapsulates the interface\n of the different moving average implementations in such a way that they\n can be reused without plumbing the types through the other components that\n use moving averages. Most people won't ever need to use record fields of\n this type.\n\u003c/p\u003e",
        "fct-module": "Data.Metrics.MovingAverage",
        "fct-package": "metrics",
        "fct-signature": "data",
        "fct-source": "src/Data-Metrics-MovingAverage.html#MovingAverage",
        "fct-type": "data",
        "title": "MovingAverage"
      },
      "index": {
        "description": "This type encapsulates the interface of the different moving average implementations in such way that they can be reused without plumbing the types through the other components that use moving averages Most people won ever need to use record fields of this type",
        "hierarchy": "Data Metrics MovingAverage",
        "module": "Data.Metrics.MovingAverage",
        "name": "MovingAverage",
        "normalized": "",
        "package": "metrics",
        "partial": "Moving Average",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-MovingAverage.html#v:MovingAverage",
      "description": {
        "fct-module": "Data.Metrics.MovingAverage",
        "fct-package": "metrics",
        "fct-signature": "forall s . MovingAverage",
        "fct-source": "src/Data-Metrics-MovingAverage.html#MovingAverage",
        "fct-type": "function",
        "title": "MovingAverage"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Metrics MovingAverage",
        "module": "Data.Metrics.MovingAverage",
        "name": "MovingAverage",
        "normalized": "",
        "package": "metrics",
        "partial": "Moving Average",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-MovingAverage.html#v:clear",
      "description": {
        "fct-descr": "\u003cp\u003eReset a moving average back to a starting state.\n\u003c/p\u003e",
        "fct-module": "Data.Metrics.MovingAverage",
        "fct-package": "metrics",
        "fct-signature": "MovingAverage -\u003e MovingAverage",
        "fct-source": "src/Data-Metrics-MovingAverage.html#clear",
        "fct-type": "function",
        "title": "clear"
      },
      "index": {
        "description": "Reset moving average back to starting state",
        "hierarchy": "Data Metrics MovingAverage",
        "module": "Data.Metrics.MovingAverage",
        "name": "clear",
        "normalized": "MovingAverage-\u003eMovingAverage",
        "package": "metrics",
        "partial": "",
        "signature": "MovingAverage-\u003eMovingAverage"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-MovingAverage.html#v:movingAverageClear",
      "description": {
        "fct-descr": "\u003cp\u003eclear the internal state of the moving average\n\u003c/p\u003e",
        "fct-module": "Data.Metrics.MovingAverage",
        "fct-package": "metrics",
        "fct-signature": "!(s -\u003e s)",
        "fct-source": "src/Data-Metrics-MovingAverage.html#MovingAverage",
        "fct-type": "function",
        "title": "movingAverageClear"
      },
      "index": {
        "description": "clear the internal state of the moving average",
        "hierarchy": "Data Metrics MovingAverage",
        "module": "Data.Metrics.MovingAverage",
        "name": "movingAverageClear",
        "normalized": "(a-\u003ea)",
        "package": "metrics",
        "partial": "Average Clear",
        "signature": "(s-\u003es)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-MovingAverage.html#v:movingAverageRate",
      "description": {
        "fct-descr": "\u003cp\u003eget the current rate of the moving average.\n\u003c/p\u003e",
        "fct-module": "Data.Metrics.MovingAverage",
        "fct-package": "metrics",
        "fct-signature": "!(s -\u003e Double)",
        "fct-source": "src/Data-Metrics-MovingAverage.html#MovingAverage",
        "fct-type": "function",
        "title": "movingAverageRate"
      },
      "index": {
        "description": "get the current rate of the moving average",
        "hierarchy": "Data Metrics MovingAverage",
        "module": "Data.Metrics.MovingAverage",
        "name": "movingAverageRate",
        "normalized": "(a-\u003eDouble)",
        "package": "metrics",
        "partial": "Average Rate",
        "signature": "(s-\u003eDouble)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-MovingAverage.html#v:movingAverageState",
      "description": {
        "fct-descr": "\u003cp\u003ethe internal implementation state of the moving average\n\u003c/p\u003e",
        "fct-module": "Data.Metrics.MovingAverage",
        "fct-package": "metrics",
        "fct-signature": "!s",
        "fct-source": "src/Data-Metrics-MovingAverage.html#MovingAverage",
        "fct-type": "function",
        "title": "movingAverageState"
      },
      "index": {
        "description": "the internal implementation state of the moving average",
        "hierarchy": "Data Metrics MovingAverage",
        "module": "Data.Metrics.MovingAverage",
        "name": "movingAverageState",
        "normalized": "",
        "package": "metrics",
        "partial": "Average State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-MovingAverage.html#v:movingAverageTick",
      "description": {
        "fct-descr": "\u003cp\u003eperform any modifications of the internal state associated with the passage of a predefined interval of time.\n\u003c/p\u003e",
        "fct-module": "Data.Metrics.MovingAverage",
        "fct-package": "metrics",
        "fct-signature": "!(s -\u003e s)",
        "fct-source": "src/Data-Metrics-MovingAverage.html#MovingAverage",
        "fct-type": "function",
        "title": "movingAverageTick"
      },
      "index": {
        "description": "perform any modifications of the internal state associated with the passage of predefined interval of time",
        "hierarchy": "Data Metrics MovingAverage",
        "module": "Data.Metrics.MovingAverage",
        "name": "movingAverageTick",
        "normalized": "(a-\u003ea)",
        "package": "metrics",
        "partial": "Average Tick",
        "signature": "(s-\u003es)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-MovingAverage.html#v:movingAverageUpdate",
      "description": {
        "fct-descr": "\u003cp\u003eadd a new sample to the moving average\n\u003c/p\u003e",
        "fct-module": "Data.Metrics.MovingAverage",
        "fct-package": "metrics",
        "fct-signature": "!(Double -\u003e s -\u003e s)",
        "fct-source": "src/Data-Metrics-MovingAverage.html#MovingAverage",
        "fct-type": "function",
        "title": "movingAverageUpdate"
      },
      "index": {
        "description": "add new sample to the moving average",
        "hierarchy": "Data Metrics MovingAverage",
        "module": "Data.Metrics.MovingAverage",
        "name": "movingAverageUpdate",
        "normalized": "(Double-\u003ea-\u003ea)",
        "package": "metrics",
        "partial": "Average Update",
        "signature": "(Double-\u003es-\u003es)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-MovingAverage.html#v:rate",
      "description": {
        "fct-descr": "\u003cp\u003eGet the current rate of the moving average.\n\u003c/p\u003e",
        "fct-module": "Data.Metrics.MovingAverage",
        "fct-package": "metrics",
        "fct-signature": "MovingAverage -\u003e Double",
        "fct-source": "src/Data-Metrics-MovingAverage.html#rate",
        "fct-type": "function",
        "title": "rate"
      },
      "index": {
        "description": "Get the current rate of the moving average",
        "hierarchy": "Data Metrics MovingAverage",
        "module": "Data.Metrics.MovingAverage",
        "name": "rate",
        "normalized": "MovingAverage-\u003eDouble",
        "package": "metrics",
        "partial": "",
        "signature": "MovingAverage-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-MovingAverage.html#v:tick",
      "description": {
        "fct-descr": "\u003cp\u003eUpdate the average based upon an interval specified by the\n moving average implementation.\n\u003c/p\u003e",
        "fct-module": "Data.Metrics.MovingAverage",
        "fct-package": "metrics",
        "fct-signature": "MovingAverage -\u003e MovingAverage",
        "fct-source": "src/Data-Metrics-MovingAverage.html#tick",
        "fct-type": "function",
        "title": "tick"
      },
      "index": {
        "description": "Update the average based upon an interval specified by the moving average implementation",
        "hierarchy": "Data Metrics MovingAverage",
        "module": "Data.Metrics.MovingAverage",
        "name": "tick",
        "normalized": "MovingAverage-\u003eMovingAverage",
        "package": "metrics",
        "partial": "",
        "signature": "MovingAverage-\u003eMovingAverage"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-MovingAverage.html#v:update",
      "description": {
        "fct-descr": "\u003cp\u003eUpdate the average with the specified value.\n\u003c/p\u003e",
        "fct-module": "Data.Metrics.MovingAverage",
        "fct-package": "metrics",
        "fct-signature": "Double -\u003e MovingAverage -\u003e MovingAverage",
        "fct-source": "src/Data-Metrics-MovingAverage.html#update",
        "fct-type": "function",
        "title": "update"
      },
      "index": {
        "description": "Update the average with the specified value",
        "hierarchy": "Data Metrics MovingAverage",
        "module": "Data.Metrics.MovingAverage",
        "name": "update",
        "normalized": "Double-\u003eMovingAverage-\u003eMovingAverage",
        "package": "metrics",
        "partial": "",
        "signature": "Double-\u003eMovingAverage-\u003eMovingAverage"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-Registry.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn interface for bundling metrics in a way that they cna be iterated over for reporting or looked up for use by code that shares the registry.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Metrics.Registry",
        "fct-package": "metrics",
        "fct-signature": "module",
        "fct-source": "src/Data-Metrics-Registry.html",
        "fct-type": "module",
        "title": "Registry"
      },
      "index": {
        "description": "An interface for bundling metrics in way that they cna be iterated over for reporting or looked up for use by code that shares the registry",
        "hierarchy": "Data Metrics Registry",
        "module": "Data.Metrics.Registry",
        "name": "Registry",
        "normalized": "",
        "package": "metrics",
        "partial": "Registry",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-Registry.html#t:Metric",
      "description": {
        "fct-descr": "\u003cp\u003eA sum type of all supported metric types that reporters should be able to output.\n\u003c/p\u003e",
        "fct-module": "Data.Metrics.Registry",
        "fct-package": "metrics",
        "fct-signature": "data",
        "fct-source": "src/Data-Metrics-Registry.html#Metric",
        "fct-type": "data",
        "title": "Metric"
      },
      "index": {
        "description": "sum type of all supported metric types that reporters should be able to output",
        "hierarchy": "Data Metrics Registry",
        "module": "Data.Metrics.Registry",
        "name": "Metric",
        "normalized": "",
        "package": "metrics",
        "partial": "Metric",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-Registry.html#t:MetricRegistry",
      "description": {
        "fct-descr": "\u003cp\u003eA container that tracks all metrics registered with it.\n All forms of metrics share the same namespace in the registry.\n Consequently, attempting to replace a metric with one of a different type will fail (return Nothing from a call to \u003ccode\u003e\u003ca\u003eregister\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Data.Metrics.Registry",
        "fct-package": "metrics",
        "fct-signature": "data",
        "fct-source": "src/Data-Metrics-Registry.html#MetricRegistry",
        "fct-type": "data",
        "title": "MetricRegistry"
      },
      "index": {
        "description": "container that tracks all metrics registered with it All forms of metrics share the same namespace in the registry Consequently attempting to replace metric with one of different type will fail return Nothing from call to register",
        "hierarchy": "Data Metrics Registry",
        "module": "Data.Metrics.Registry",
        "name": "MetricRegistry",
        "normalized": "",
        "package": "metrics",
        "partial": "Metric Registry",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-Registry.html#t:Register",
      "description": {
        "fct-descr": "\u003cp\u003eAdd a new metric to a registry or retrieve the existing metric of the same name if one exists.\n\u003c/p\u003e",
        "fct-module": "Data.Metrics.Registry",
        "fct-package": "metrics",
        "fct-signature": "class",
        "fct-source": "src/Data-Metrics-Registry.html#Register",
        "fct-type": "class",
        "title": "Register"
      },
      "index": {
        "description": "Add new metric to registry or retrieve the existing metric of the same name if one exists",
        "hierarchy": "Data Metrics Registry",
        "module": "Data.Metrics.Registry",
        "name": "Register",
        "normalized": "",
        "package": "metrics",
        "partial": "Register",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-Registry.html#v:MetricCounter",
      "description": {
        "fct-module": "Data.Metrics.Registry",
        "fct-package": "metrics",
        "fct-signature": "MetricCounter !(Counter m)",
        "fct-source": "src/Data-Metrics-Registry.html#Metric",
        "fct-type": "function",
        "title": "MetricCounter"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Metrics Registry",
        "module": "Data.Metrics.Registry",
        "name": "MetricCounter",
        "normalized": "",
        "package": "metrics",
        "partial": "Metric Counter",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-Registry.html#v:MetricGauge",
      "description": {
        "fct-module": "Data.Metrics.Registry",
        "fct-package": "metrics",
        "fct-signature": "MetricGauge !(Gauge m)",
        "fct-source": "src/Data-Metrics-Registry.html#Metric",
        "fct-type": "function",
        "title": "MetricGauge"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Metrics Registry",
        "module": "Data.Metrics.Registry",
        "name": "MetricGauge",
        "normalized": "",
        "package": "metrics",
        "partial": "Metric Gauge",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-Registry.html#v:MetricHistogram",
      "description": {
        "fct-module": "Data.Metrics.Registry",
        "fct-package": "metrics",
        "fct-signature": "MetricHistogram !(Histogram m)",
        "fct-source": "src/Data-Metrics-Registry.html#Metric",
        "fct-type": "function",
        "title": "MetricHistogram"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Metrics Registry",
        "module": "Data.Metrics.Registry",
        "name": "MetricHistogram",
        "normalized": "",
        "package": "metrics",
        "partial": "Metric Histogram",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-Registry.html#v:MetricMeter",
      "description": {
        "fct-module": "Data.Metrics.Registry",
        "fct-package": "metrics",
        "fct-signature": "MetricMeter !(Meter m)",
        "fct-source": "src/Data-Metrics-Registry.html#Metric",
        "fct-type": "function",
        "title": "MetricMeter"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Metrics Registry",
        "module": "Data.Metrics.Registry",
        "name": "MetricMeter",
        "normalized": "",
        "package": "metrics",
        "partial": "Metric Meter",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-Registry.html#v:MetricTimer",
      "description": {
        "fct-module": "Data.Metrics.Registry",
        "fct-package": "metrics",
        "fct-signature": "MetricTimer !(Timer m)",
        "fct-source": "src/Data-Metrics-Registry.html#Metric",
        "fct-type": "function",
        "title": "MetricTimer"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Metrics Registry",
        "module": "Data.Metrics.Registry",
        "name": "MetricTimer",
        "normalized": "",
        "package": "metrics",
        "partial": "Metric Timer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-Registry.html#v:register",
      "description": {
        "fct-descr": "\u003cp\u003eIf possible, avoid using \u003ccode\u003e\u003ca\u003eregister\u003c/a\u003e\u003c/code\u003e to frequently retrieve metrics from a global registry. The metric registry is locked any time a lookup is performed, which may cause contention.\n\u003c/p\u003e",
        "fct-module": "Data.Metrics.Registry",
        "fct-package": "metrics",
        "fct-signature": "MetricRegistry IO -\u003e Text -\u003e IO a -\u003e IO (Maybe a)",
        "fct-source": "src/Data-Metrics-Registry.html#register",
        "fct-type": "method",
        "title": "register"
      },
      "index": {
        "description": "If possible avoid using register to frequently retrieve metrics from global registry The metric registry is locked any time lookup is performed which may cause contention",
        "hierarchy": "Data Metrics Registry",
        "module": "Data.Metrics.Registry",
        "name": "register",
        "normalized": "MetricRegistry IO-\u003eText-\u003eIO a-\u003eIO(Maybe a)",
        "package": "metrics",
        "partial": "",
        "signature": "MetricRegistry IO-\u003eText-\u003eIO a-\u003eIO(Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-Reporter-StdOut.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLogging to stdout is primarily intended for development purposes or creating command line status tools.\n\u003c/p\u003e\u003cp\u003eFor more meaningful access to statistics, metrics should be sent to something like Librato or Graphite.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Metrics.Reporter.StdOut",
        "fct-package": "metrics",
        "fct-signature": "module",
        "fct-source": "src/Data-Metrics-Reporter-StdOut.html",
        "fct-type": "module",
        "title": "StdOut"
      },
      "index": {
        "description": "Logging to stdout is primarily intended for development purposes or creating command line status tools For more meaningful access to statistics metrics should be sent to something like Librato or Graphite",
        "hierarchy": "Data Metrics Reporter StdOut",
        "module": "Data.Metrics.Reporter.StdOut",
        "name": "StdOut",
        "normalized": "",
        "package": "metrics",
        "partial": "Std Out",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-Reporter-StdOut.html#v:printHealthCheck",
      "description": {
        "fct-descr": "\u003cp\u003ePretty-print a single HealthCheck to the console using ANSI colors.\n\u003c/p\u003e",
        "fct-module": "Data.Metrics.Reporter.StdOut",
        "fct-package": "metrics",
        "fct-signature": "HealthCheck -\u003e IO ()",
        "fct-source": "src/Data-Metrics-Reporter-StdOut.html#printHealthCheck",
        "fct-type": "function",
        "title": "printHealthCheck"
      },
      "index": {
        "description": "Pretty-print single HealthCheck to the console using ANSI colors",
        "hierarchy": "Data Metrics Reporter StdOut",
        "module": "Data.Metrics.Reporter.StdOut",
        "name": "printHealthCheck",
        "normalized": "HealthCheck-\u003eIO()",
        "package": "metrics",
        "partial": "Health Check",
        "signature": "HealthCheck-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-Reporter-StdOut.html#v:printHealthChecks",
      "description": {
        "fct-descr": "\u003cp\u003ePretty-print a list of HealthChecks to the console using ANSI colors.\n\u003c/p\u003e",
        "fct-module": "Data.Metrics.Reporter.StdOut",
        "fct-package": "metrics",
        "fct-signature": "HealthChecks -\u003e IO ()",
        "fct-source": "src/Data-Metrics-Reporter-StdOut.html#printHealthChecks",
        "fct-type": "function",
        "title": "printHealthChecks"
      },
      "index": {
        "description": "Pretty-print list of HealthChecks to the console using ANSI colors",
        "hierarchy": "Data Metrics Reporter StdOut",
        "module": "Data.Metrics.Reporter.StdOut",
        "name": "printHealthChecks",
        "normalized": "HealthChecks-\u003eIO()",
        "package": "metrics",
        "partial": "Health Checks",
        "signature": "HealthChecks-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-Reservoir-ExponentiallyDecaying.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA histogram with an exponentially decaying reservoir produces quantiles which are representative of (roughly) the last five minutes of data.\n It does so by using a forward-decaying priority reservoir with an exponential weighting towards newer data.\n Unlike the uniform reservoir, an exponentially decaying reservoir represents recent data, allowing you to know very quickly if the distribution of the data has changed.\n Timers use histograms with exponentially decaying reservoirs by default.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Metrics.Reservoir.ExponentiallyDecaying",
        "fct-package": "metrics",
        "fct-signature": "module",
        "fct-source": "src/Data-Metrics-Reservoir-ExponentiallyDecaying.html",
        "fct-type": "module",
        "title": "ExponentiallyDecaying"
      },
      "index": {
        "description": "histogram with an exponentially decaying reservoir produces quantiles which are representative of roughly the last five minutes of data It does so by using forward-decaying priority reservoir with an exponential weighting towards newer data Unlike the uniform reservoir an exponentially decaying reservoir represents recent data allowing you to know very quickly if the distribution of the data has changed Timers use histograms with exponentially decaying reservoirs by default",
        "hierarchy": "Data Metrics Reservoir ExponentiallyDecaying",
        "module": "Data.Metrics.Reservoir.ExponentiallyDecaying",
        "name": "ExponentiallyDecaying",
        "normalized": "",
        "package": "metrics",
        "partial": "Exponentially Decaying",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-Reservoir-ExponentiallyDecaying.html#t:ExponentiallyDecayingReservoir",
      "description": {
        "fct-descr": "\u003cp\u003eA forward-decaying priority reservoir\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://dimacs.rutgers.edu/~graham/pubs/papers/fwddecay.pdf\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Metrics.Reservoir.ExponentiallyDecaying",
        "fct-package": "metrics",
        "fct-signature": "data",
        "fct-source": "src/Data-Metrics-Reservoir-ExponentiallyDecaying.html#ExponentiallyDecayingReservoir",
        "fct-type": "data",
        "title": "ExponentiallyDecayingReservoir"
      },
      "index": {
        "description": "forward-decaying priority reservoir http dimacs.rutgers.edu graham pubs papers fwddecay.pdf",
        "hierarchy": "Data Metrics Reservoir ExponentiallyDecaying",
        "module": "Data.Metrics.Reservoir.ExponentiallyDecaying",
        "name": "ExponentiallyDecayingReservoir",
        "normalized": "",
        "package": "metrics",
        "partial": "Exponentially Decaying Reservoir",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-Reservoir-ExponentiallyDecaying.html#v:clear",
      "description": {
        "fct-descr": "\u003cp\u003eReset the reservoir\n\u003c/p\u003e",
        "fct-module": "Data.Metrics.Reservoir.ExponentiallyDecaying",
        "fct-package": "metrics",
        "fct-signature": "NominalDiffTime -\u003e ExponentiallyDecayingReservoir -\u003e ExponentiallyDecayingReservoir",
        "fct-source": "src/Data-Metrics-Reservoir-ExponentiallyDecaying.html#clear",
        "fct-type": "function",
        "title": "clear"
      },
      "index": {
        "description": "Reset the reservoir",
        "hierarchy": "Data Metrics Reservoir ExponentiallyDecaying",
        "module": "Data.Metrics.Reservoir.ExponentiallyDecaying",
        "name": "clear",
        "normalized": "NominalDiffTime-\u003eExponentiallyDecayingReservoir-\u003eExponentiallyDecayingReservoir",
        "package": "metrics",
        "partial": "",
        "signature": "NominalDiffTime-\u003eExponentiallyDecayingReservoir-\u003eExponentiallyDecayingReservoir"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-Reservoir-ExponentiallyDecaying.html#v:rescale",
      "description": {
        "fct-descr": "\u003cp\u003e\"A common feature of the above techniques&#8212;indeed, the key technique that\n allows us to track the decayed weights efficiently &#8211;&#160;is that they maintain counts and other quantities based on g(ti &#8722; L), and only scale by g(t &#8722; L)\n at query time. But while g(ti &#8722;L)/g(t&#8722;L) is guaranteed to lie between zero\n and one, the intermediate values of g(ti &#8722; L) could become very large. For\n polynomial functions, these values should not grow too large, and should be\n effectively represented in practice by floating point values without loss of\n precision. For exponential functions, these values could grow quite large as\n new values of (ti &#8722; L) become large, and potentially exceed the capacity of\n common floating point types. However, since the values stored by the\n algorithms are linear combinations of g values (scaled sums), they can be\n rescaled relative to a new landmark. That is, by the analysis of exponential\n decay in Section III-A, the choice of L does not affect the final result. We\n can therefore multiply each value based on L by a factor of exp(&#8722;&#945;(L&#8242; &#8722; L)), and obtain the correct value as if we had instead computed relative to a new\n landmark L&#8242; (and then use this new L&#8242; at query time). This can be done with\n a linear pass over whatever data structure is being used.\"\n\u003c/p\u003e",
        "fct-module": "Data.Metrics.Reservoir.ExponentiallyDecaying",
        "fct-package": "metrics",
        "fct-signature": "Word64 -\u003e ExponentiallyDecayingReservoir -\u003e ExponentiallyDecayingReservoir",
        "fct-source": "src/Data-Metrics-Reservoir-ExponentiallyDecaying.html#rescale",
        "fct-type": "function",
        "title": "rescale"
      },
      "index": {
        "description": "common feature of the above techniques indeed the key technique that allows us to track the decayed weights efficiently is that they maintain counts and other quantities based on ti and only scale by at query time But while ti is guaranteed to lie between zero and one the intermediate values of ti could become very large For polynomial functions these values should not grow too large and should be effectively represented in practice by floating point values without loss of precision For exponential functions these values could grow quite large as new values of ti become large and potentially exceed the capacity of common floating point types However since the values stored by the algorithms are linear combinations of values scaled sums they can be rescaled relative to new landmark That is by the analysis of exponential decay in Section III-A the choice of does not affect the final result We can therefore multiply each value based on by factor of exp and obtain the correct value as if we had instead computed relative to new landmark and then use this new at query time This can be done with linear pass over whatever data structure is being used",
        "hierarchy": "Data Metrics Reservoir ExponentiallyDecaying",
        "module": "Data.Metrics.Reservoir.ExponentiallyDecaying",
        "name": "rescale",
        "normalized": "Word-\u003eExponentiallyDecayingReservoir-\u003eExponentiallyDecayingReservoir",
        "package": "metrics",
        "partial": "",
        "signature": "Word-\u003eExponentiallyDecayingReservoir-\u003eExponentiallyDecayingReservoir"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-Reservoir-ExponentiallyDecaying.html#v:reservoir",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a reservoir with a custom alpha factor and reservoir size.\n\u003c/p\u003e",
        "fct-module": "Data.Metrics.Reservoir.ExponentiallyDecaying",
        "fct-package": "metrics",
        "fct-signature": "Double-\u003e Int-\u003e NominalDiffTime-\u003e Seed-\u003e Reservoir",
        "fct-type": "function",
        "title": "reservoir"
      },
      "index": {
        "description": "Create reservoir with custom alpha factor and reservoir size",
        "hierarchy": "Data Metrics Reservoir ExponentiallyDecaying",
        "module": "Data.Metrics.Reservoir.ExponentiallyDecaying",
        "name": "reservoir",
        "normalized": "Double-\u003eInt-\u003eNominalDiffTime-\u003eSeed-\u003eReservoir",
        "package": "metrics",
        "partial": "",
        "signature": "Double-\u003eInt-\u003eNominalDiffTime-\u003eSeed-\u003eReservoir"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-Reservoir-ExponentiallyDecaying.html#v:size",
      "description": {
        "fct-descr": "\u003cp\u003eGet the current size of the reservoir.\n\u003c/p\u003e",
        "fct-module": "Data.Metrics.Reservoir.ExponentiallyDecaying",
        "fct-package": "metrics",
        "fct-signature": "ExponentiallyDecayingReservoir -\u003e Int",
        "fct-source": "src/Data-Metrics-Reservoir-ExponentiallyDecaying.html#size",
        "fct-type": "function",
        "title": "size"
      },
      "index": {
        "description": "Get the current size of the reservoir",
        "hierarchy": "Data Metrics Reservoir ExponentiallyDecaying",
        "module": "Data.Metrics.Reservoir.ExponentiallyDecaying",
        "name": "size",
        "normalized": "ExponentiallyDecayingReservoir-\u003eInt",
        "package": "metrics",
        "partial": "",
        "signature": "ExponentiallyDecayingReservoir-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-Reservoir-ExponentiallyDecaying.html#v:snapshot",
      "description": {
        "fct-descr": "\u003cp\u003eGet a snapshot of the current reservoir\n\u003c/p\u003e",
        "fct-module": "Data.Metrics.Reservoir.ExponentiallyDecaying",
        "fct-package": "metrics",
        "fct-signature": "ExponentiallyDecayingReservoir -\u003e Snapshot",
        "fct-source": "src/Data-Metrics-Reservoir-ExponentiallyDecaying.html#snapshot",
        "fct-type": "function",
        "title": "snapshot"
      },
      "index": {
        "description": "Get snapshot of the current reservoir",
        "hierarchy": "Data Metrics Reservoir ExponentiallyDecaying",
        "module": "Data.Metrics.Reservoir.ExponentiallyDecaying",
        "name": "snapshot",
        "normalized": "ExponentiallyDecayingReservoir-\u003eSnapshot",
        "package": "metrics",
        "partial": "",
        "signature": "ExponentiallyDecayingReservoir-\u003eSnapshot"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-Reservoir-ExponentiallyDecaying.html#v:standardReservoir",
      "description": {
        "fct-descr": "\u003cp\u003eAn exponentially decaying reservoir with an alpha value of 0.015 and a 1028 sample cap.\n\u003c/p\u003e\u003cp\u003eThis offers a 99.9% confidence level with a 5% margin of error assuming a normal distribution,\n and an alpha factor of 0.015, which heavily biases the reservoir to the past 5 minutes of measurements.\n\u003c/p\u003e",
        "fct-module": "Data.Metrics.Reservoir.ExponentiallyDecaying",
        "fct-package": "metrics",
        "fct-signature": "NominalDiffTime -\u003e Seed -\u003e Reservoir",
        "fct-source": "src/Data-Metrics-Reservoir-ExponentiallyDecaying.html#standardReservoir",
        "fct-type": "function",
        "title": "standardReservoir"
      },
      "index": {
        "description": "An exponentially decaying reservoir with an alpha value of and sample cap This offers confidence level with margin of error assuming normal distribution and an alpha factor of which heavily biases the reservoir to the past minutes of measurements",
        "hierarchy": "Data Metrics Reservoir ExponentiallyDecaying",
        "module": "Data.Metrics.Reservoir.ExponentiallyDecaying",
        "name": "standardReservoir",
        "normalized": "NominalDiffTime-\u003eSeed-\u003eReservoir",
        "package": "metrics",
        "partial": "Reservoir",
        "signature": "NominalDiffTime-\u003eSeed-\u003eReservoir"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-Reservoir-ExponentiallyDecaying.html#v:update",
      "description": {
        "fct-descr": "\u003cp\u003eInsert a new sample into the reservoir. This may cause old sample values to be evicted\n based upon the probabilistic weighting given to the key at insertion time.\n\u003c/p\u003e",
        "fct-module": "Data.Metrics.Reservoir.ExponentiallyDecaying",
        "fct-package": "metrics",
        "fct-signature": "Double-\u003e NominalDiffTime-\u003e ExponentiallyDecayingReservoir-\u003e ExponentiallyDecayingReservoir",
        "fct-type": "function",
        "title": "update"
      },
      "index": {
        "description": "Insert new sample into the reservoir This may cause old sample values to be evicted based upon the probabilistic weighting given to the key at insertion time",
        "hierarchy": "Data Metrics Reservoir ExponentiallyDecaying",
        "module": "Data.Metrics.Reservoir.ExponentiallyDecaying",
        "name": "update",
        "normalized": "Double-\u003eNominalDiffTime-\u003eExponentiallyDecayingReservoir-\u003eExponentiallyDecayingReservoir",
        "package": "metrics",
        "partial": "",
        "signature": "Double-\u003eNominalDiffTime-\u003eExponentiallyDecayingReservoir-\u003eExponentiallyDecayingReservoir"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-Reservoir-Uniform.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA histogram with a uniform reservoir produces quantiles which are valid for the entirely of the histogram&#8217;s lifetime.\n It will return a median value, for example, which is the median of all the values the histogram has ever been updated with.\n It does this by using an algorithm called Vitter&#8217;s R), which randomly selects values for the reservoir with linearly-decreasing probability.\n\u003c/p\u003e\u003cp\u003eUse a uniform histogram when you&#8217;re interested in long-term measurements.\n Don&#8217;t use one where you&#8217;d want to know if the distribution of the underlying data stream has changed recently.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Metrics.Reservoir.Uniform",
        "fct-package": "metrics",
        "fct-signature": "module",
        "fct-source": "src/Data-Metrics-Reservoir-Uniform.html",
        "fct-type": "module",
        "title": "Uniform"
      },
      "index": {
        "description": "histogram with uniform reservoir produces quantiles which are valid for the entirely of the histogram lifetime It will return median value for example which is the median of all the values the histogram has ever been updated with It does this by using an algorithm called Vitter which randomly selects values for the reservoir with linearly-decreasing probability Use uniform histogram when you re interested in long-term measurements Don use one where you want to know if the distribution of the underlying data stream has changed recently",
        "hierarchy": "Data Metrics Reservoir Uniform",
        "module": "Data.Metrics.Reservoir.Uniform",
        "name": "Uniform",
        "normalized": "",
        "package": "metrics",
        "partial": "Uniform",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-Reservoir-Uniform.html#t:UniformReservoir",
      "description": {
        "fct-descr": "\u003cp\u003eA reservoir in which all samples are equally likely to be evicted when the reservoir is at full capacity.\n\u003c/p\u003e\u003cp\u003eThis is conceptually simpler than the \u003ca\u003eExponentiallyDecayingReservoir\u003c/a\u003e, but at the expense of providing a less accurate sample.\n\u003c/p\u003e",
        "fct-module": "Data.Metrics.Reservoir.Uniform",
        "fct-package": "metrics",
        "fct-signature": "data",
        "fct-source": "src/Data-Metrics-Reservoir-Uniform.html#UniformReservoir",
        "fct-type": "data",
        "title": "UniformReservoir"
      },
      "index": {
        "description": "reservoir in which all samples are equally likely to be evicted when the reservoir is at full capacity This is conceptually simpler than the ExponentiallyDecayingReservoir but at the expense of providing less accurate sample",
        "hierarchy": "Data Metrics Reservoir Uniform",
        "module": "Data.Metrics.Reservoir.Uniform",
        "name": "UniformReservoir",
        "normalized": "",
        "package": "metrics",
        "partial": "Uniform Reservoir",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-Reservoir-Uniform.html#v:clear",
      "description": {
        "fct-descr": "\u003cp\u003eReset the reservoir to empty.\n\u003c/p\u003e",
        "fct-module": "Data.Metrics.Reservoir.Uniform",
        "fct-package": "metrics",
        "fct-signature": "NominalDiffTime -\u003e UniformReservoir -\u003e UniformReservoir",
        "fct-source": "src/Data-Metrics-Reservoir-Uniform.html#clear",
        "fct-type": "function",
        "title": "clear"
      },
      "index": {
        "description": "Reset the reservoir to empty",
        "hierarchy": "Data Metrics Reservoir Uniform",
        "module": "Data.Metrics.Reservoir.Uniform",
        "name": "clear",
        "normalized": "NominalDiffTime-\u003eUniformReservoir-\u003eUniformReservoir",
        "package": "metrics",
        "partial": "",
        "signature": "NominalDiffTime-\u003eUniformReservoir-\u003eUniformReservoir"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-Reservoir-Uniform.html#v:reservoir",
      "description": {
        "fct-descr": "\u003cp\u003eMake a safe uniform reservoir. This variant provides safe access at the expense of updates costing O(n)\n\u003c/p\u003e",
        "fct-module": "Data.Metrics.Reservoir.Uniform",
        "fct-package": "metrics",
        "fct-signature": "Seed-\u003e Int-\u003e Reservoir",
        "fct-type": "function",
        "title": "reservoir"
      },
      "index": {
        "description": "Make safe uniform reservoir This variant provides safe access at the expense of updates costing",
        "hierarchy": "Data Metrics Reservoir Uniform",
        "module": "Data.Metrics.Reservoir.Uniform",
        "name": "reservoir",
        "normalized": "Seed-\u003eInt-\u003eReservoir",
        "package": "metrics",
        "partial": "",
        "signature": "Seed-\u003eInt-\u003eReservoir"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-Reservoir-Uniform.html#v:size",
      "description": {
        "fct-descr": "\u003cp\u003eGet the current size of the reservoir\n\u003c/p\u003e",
        "fct-module": "Data.Metrics.Reservoir.Uniform",
        "fct-package": "metrics",
        "fct-signature": "UniformReservoir -\u003e Int",
        "fct-source": "src/Data-Metrics-Reservoir-Uniform.html#size",
        "fct-type": "function",
        "title": "size"
      },
      "index": {
        "description": "Get the current size of the reservoir",
        "hierarchy": "Data Metrics Reservoir Uniform",
        "module": "Data.Metrics.Reservoir.Uniform",
        "name": "size",
        "normalized": "UniformReservoir-\u003eInt",
        "package": "metrics",
        "partial": "",
        "signature": "UniformReservoir-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-Reservoir-Uniform.html#v:snapshot",
      "description": {
        "fct-descr": "\u003cp\u003eTake a snapshot of the reservoir by doing an in-place unfreeze.\n\u003c/p\u003e\u003cp\u003eThis should be safe as long as unsafe operations are performed appropriately.\n\u003c/p\u003e",
        "fct-module": "Data.Metrics.Reservoir.Uniform",
        "fct-package": "metrics",
        "fct-signature": "UniformReservoir -\u003e Snapshot",
        "fct-source": "src/Data-Metrics-Reservoir-Uniform.html#snapshot",
        "fct-type": "function",
        "title": "snapshot"
      },
      "index": {
        "description": "Take snapshot of the reservoir by doing an in-place unfreeze This should be safe as long as unsafe operations are performed appropriately",
        "hierarchy": "Data Metrics Reservoir Uniform",
        "module": "Data.Metrics.Reservoir.Uniform",
        "name": "snapshot",
        "normalized": "UniformReservoir-\u003eSnapshot",
        "package": "metrics",
        "partial": "",
        "signature": "UniformReservoir-\u003eSnapshot"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-Reservoir-Uniform.html#v:unsafeClear",
      "description": {
        "fct-descr": "\u003cp\u003eReset the reservoir to empty by performing an in-place modification of the reservoir.\n\u003c/p\u003e",
        "fct-module": "Data.Metrics.Reservoir.Uniform",
        "fct-package": "metrics",
        "fct-signature": "NominalDiffTime -\u003e UniformReservoir -\u003e UniformReservoir",
        "fct-source": "src/Data-Metrics-Reservoir-Uniform.html#unsafeClear",
        "fct-type": "function",
        "title": "unsafeClear"
      },
      "index": {
        "description": "Reset the reservoir to empty by performing an in-place modification of the reservoir",
        "hierarchy": "Data Metrics Reservoir Uniform",
        "module": "Data.Metrics.Reservoir.Uniform",
        "name": "unsafeClear",
        "normalized": "NominalDiffTime-\u003eUniformReservoir-\u003eUniformReservoir",
        "package": "metrics",
        "partial": "Clear",
        "signature": "NominalDiffTime-\u003eUniformReservoir-\u003eUniformReservoir"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-Reservoir-Uniform.html#v:unsafeReservoir",
      "description": {
        "fct-descr": "\u003cp\u003eUsing this variant requires that you ensure that there is no sharing of the reservoir itself.\n\u003c/p\u003e\u003cp\u003eIn other words, there must only be a single point of access (an IORef, etc. that accepts some sort of modification function).\n\u003c/p\u003e\u003cp\u003eIn return, updating the reservoir becomes an O(1) operation and clearing the reservoir avoids extra allocations.\n\u003c/p\u003e",
        "fct-module": "Data.Metrics.Reservoir.Uniform",
        "fct-package": "metrics",
        "fct-signature": "Seed -\u003e Int -\u003e Reservoir",
        "fct-source": "src/Data-Metrics-Reservoir-Uniform.html#unsafeReservoir",
        "fct-type": "function",
        "title": "unsafeReservoir"
      },
      "index": {
        "description": "Using this variant requires that you ensure that there is no sharing of the reservoir itself In other words there must only be single point of access an IORef etc that accepts some sort of modification function In return updating the reservoir becomes an operation and clearing the reservoir avoids extra allocations",
        "hierarchy": "Data Metrics Reservoir Uniform",
        "module": "Data.Metrics.Reservoir.Uniform",
        "name": "unsafeReservoir",
        "normalized": "Seed-\u003eInt-\u003eReservoir",
        "package": "metrics",
        "partial": "Reservoir",
        "signature": "Seed-\u003eInt-\u003eReservoir"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-Reservoir-Uniform.html#v:unsafeUpdate",
      "description": {
        "fct-descr": "\u003cp\u003ePerform an in-place update of the reservoir. O(1)\n\u003c/p\u003e",
        "fct-module": "Data.Metrics.Reservoir.Uniform",
        "fct-package": "metrics",
        "fct-signature": "Double -\u003e NominalDiffTime -\u003e UniformReservoir -\u003e UniformReservoir",
        "fct-source": "src/Data-Metrics-Reservoir-Uniform.html#unsafeUpdate",
        "fct-type": "function",
        "title": "unsafeUpdate"
      },
      "index": {
        "description": "Perform an in-place update of the reservoir",
        "hierarchy": "Data Metrics Reservoir Uniform",
        "module": "Data.Metrics.Reservoir.Uniform",
        "name": "unsafeUpdate",
        "normalized": "Double-\u003eNominalDiffTime-\u003eUniformReservoir-\u003eUniformReservoir",
        "package": "metrics",
        "partial": "Update",
        "signature": "Double-\u003eNominalDiffTime-\u003eUniformReservoir-\u003eUniformReservoir"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-Reservoir-Uniform.html#v:update",
      "description": {
        "fct-descr": "\u003cp\u003ePerform an update of the reservoir by copying the internal vector. O(n)\n\u003c/p\u003e",
        "fct-module": "Data.Metrics.Reservoir.Uniform",
        "fct-package": "metrics",
        "fct-signature": "Double -\u003e NominalDiffTime -\u003e UniformReservoir -\u003e UniformReservoir",
        "fct-source": "src/Data-Metrics-Reservoir-Uniform.html#update",
        "fct-type": "function",
        "title": "update"
      },
      "index": {
        "description": "Perform an update of the reservoir by copying the internal vector",
        "hierarchy": "Data Metrics Reservoir Uniform",
        "module": "Data.Metrics.Reservoir.Uniform",
        "name": "update",
        "normalized": "Double-\u003eNominalDiffTime-\u003eUniformReservoir-\u003eUniformReservoir",
        "package": "metrics",
        "partial": "",
        "signature": "Double-\u003eNominalDiffTime-\u003eUniformReservoir-\u003eUniformReservoir"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-Reservoir.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA reservoir is the internal storage mechanism for a \u003ca\u003eHistogram\u003c/a\u003e.\n It provides a generic way to store histogram values in a way that\n allows us to avoid the need to plumb the implementation type through anything\n that uses a reservoir.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Metrics.Reservoir",
        "fct-package": "metrics",
        "fct-signature": "module",
        "fct-source": "src/Data-Metrics-Reservoir.html",
        "fct-type": "module",
        "title": "Reservoir"
      },
      "index": {
        "description": "reservoir is the internal storage mechanism for Histogram It provides generic way to store histogram values in way that allows us to avoid the need to plumb the implementation type through anything that uses reservoir",
        "hierarchy": "Data Metrics Reservoir",
        "module": "Data.Metrics.Reservoir",
        "name": "Reservoir",
        "normalized": "",
        "package": "metrics",
        "partial": "Reservoir",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-Reservoir.html#t:Reservoir",
      "description": {
        "fct-descr": "\u003cp\u003eEncapsulates the internal state of a reservoir implementation.\n\u003c/p\u003e\u003cp\u003eThe two standard implementations are the ExponentiallyDecayingReservoir and the UniformReservoir.\n\u003c/p\u003e",
        "fct-module": "Data.Metrics.Reservoir",
        "fct-package": "metrics",
        "fct-signature": "data",
        "fct-source": "src/Data-Metrics-Reservoir.html#Reservoir",
        "fct-type": "data",
        "title": "Reservoir"
      },
      "index": {
        "description": "Encapsulates the internal state of reservoir implementation The two standard implementations are the ExponentiallyDecayingReservoir and the UniformReservoir",
        "hierarchy": "Data Metrics Reservoir",
        "module": "Data.Metrics.Reservoir",
        "name": "Reservoir",
        "normalized": "",
        "package": "metrics",
        "partial": "Reservoir",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-Reservoir.html#v:Reservoir",
      "description": {
        "fct-module": "Data.Metrics.Reservoir",
        "fct-package": "metrics",
        "fct-signature": "forall s . Reservoir",
        "fct-source": "src/Data-Metrics-Reservoir.html#Reservoir",
        "fct-type": "function",
        "title": "Reservoir"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Metrics Reservoir",
        "module": "Data.Metrics.Reservoir",
        "name": "Reservoir",
        "normalized": "",
        "package": "metrics",
        "partial": "Reservoir",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-Reservoir.html#v:_reservoirClear",
      "description": {
        "fct-descr": "\u003cp\u003eAn operation that resets a reservoir to its initial state\n\u003c/p\u003e",
        "fct-module": "Data.Metrics.Reservoir",
        "fct-package": "metrics",
        "fct-signature": "!(NominalDiffTime -\u003e s -\u003e s)",
        "fct-source": "src/Data-Metrics-Reservoir.html#Reservoir",
        "fct-type": "function",
        "title": "_reservoirClear"
      },
      "index": {
        "description": "An operation that resets reservoir to its initial state",
        "hierarchy": "Data Metrics Reservoir",
        "module": "Data.Metrics.Reservoir",
        "name": "_reservoirClear",
        "normalized": "(NominalDiffTime-\u003ea-\u003ea)",
        "package": "metrics",
        "partial": "Clear",
        "signature": "(NominalDiffTime-\u003es-\u003es)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-Reservoir.html#v:_reservoirSize",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieve current size of the reservoir.\n This may or may not be constant depending on the specific implementation.\n\u003c/p\u003e",
        "fct-module": "Data.Metrics.Reservoir",
        "fct-package": "metrics",
        "fct-signature": "!(s -\u003e Int)",
        "fct-source": "src/Data-Metrics-Reservoir.html#Reservoir",
        "fct-type": "function",
        "title": "_reservoirSize"
      },
      "index": {
        "description": "Retrieve current size of the reservoir This may or may not be constant depending on the specific implementation",
        "hierarchy": "Data Metrics Reservoir",
        "module": "Data.Metrics.Reservoir",
        "name": "_reservoirSize",
        "normalized": "(a-\u003eInt)",
        "package": "metrics",
        "partial": "Size",
        "signature": "(s-\u003eInt)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-Reservoir.html#v:_reservoirSnapshot",
      "description": {
        "fct-descr": "\u003cp\u003eTake snapshot of the current reservoir.\n\u003c/p\u003e\u003cp\u003eThe number of items in the snapshot should always match the reservoir's size.\n\u003c/p\u003e",
        "fct-module": "Data.Metrics.Reservoir",
        "fct-package": "metrics",
        "fct-signature": "!(s -\u003e Snapshot)",
        "fct-source": "src/Data-Metrics-Reservoir.html#Reservoir",
        "fct-type": "function",
        "title": "_reservoirSnapshot"
      },
      "index": {
        "description": "Take snapshot of the current reservoir The number of items in the snapshot should always match the reservoir size",
        "hierarchy": "Data Metrics Reservoir",
        "module": "Data.Metrics.Reservoir",
        "name": "_reservoirSnapshot",
        "normalized": "(a-\u003eSnapshot)",
        "package": "metrics",
        "partial": "Snapshot",
        "signature": "(s-\u003eSnapshot)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-Reservoir.html#v:_reservoirState",
      "description": {
        "fct-descr": "\u003cp\u003eThe internal state of the reservoir.\n\u003c/p\u003e",
        "fct-module": "Data.Metrics.Reservoir",
        "fct-package": "metrics",
        "fct-signature": "!s",
        "fct-source": "src/Data-Metrics-Reservoir.html#Reservoir",
        "fct-type": "function",
        "title": "_reservoirState"
      },
      "index": {
        "description": "The internal state of the reservoir",
        "hierarchy": "Data Metrics Reservoir",
        "module": "Data.Metrics.Reservoir",
        "name": "_reservoirState",
        "normalized": "",
        "package": "metrics",
        "partial": "State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-Reservoir.html#v:_reservoirUpdate",
      "description": {
        "fct-descr": "\u003cp\u003eAdd a new value to the reservoir, potentially evicting old values in the prcoess.\n\u003c/p\u003e",
        "fct-module": "Data.Metrics.Reservoir",
        "fct-package": "metrics",
        "fct-signature": "!(Double -\u003e NominalDiffTime -\u003e s -\u003e s)",
        "fct-source": "src/Data-Metrics-Reservoir.html#Reservoir",
        "fct-type": "function",
        "title": "_reservoirUpdate"
      },
      "index": {
        "description": "Add new value to the reservoir potentially evicting old values in the prcoess",
        "hierarchy": "Data Metrics Reservoir",
        "module": "Data.Metrics.Reservoir",
        "name": "_reservoirUpdate",
        "normalized": "(Double-\u003eNominalDiffTime-\u003ea-\u003ea)",
        "package": "metrics",
        "partial": "Update",
        "signature": "(Double-\u003eNominalDiffTime-\u003es-\u003es)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-Reservoir.html#v:clear",
      "description": {
        "fct-descr": "\u003cp\u003eReset a reservoir to its initial state.\n\u003c/p\u003e",
        "fct-module": "Data.Metrics.Reservoir",
        "fct-package": "metrics",
        "fct-signature": "NominalDiffTime -\u003e Reservoir -\u003e Reservoir",
        "fct-source": "src/Data-Metrics-Reservoir.html#clear",
        "fct-type": "function",
        "title": "clear"
      },
      "index": {
        "description": "Reset reservoir to its initial state",
        "hierarchy": "Data Metrics Reservoir",
        "module": "Data.Metrics.Reservoir",
        "name": "clear",
        "normalized": "NominalDiffTime-\u003eReservoir-\u003eReservoir",
        "package": "metrics",
        "partial": "",
        "signature": "NominalDiffTime-\u003eReservoir-\u003eReservoir"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-Reservoir.html#v:size",
      "description": {
        "fct-descr": "\u003cp\u003eGet the current number of elements in the reservoir\n\u003c/p\u003e",
        "fct-module": "Data.Metrics.Reservoir",
        "fct-package": "metrics",
        "fct-signature": "Reservoir -\u003e Int",
        "fct-source": "src/Data-Metrics-Reservoir.html#size",
        "fct-type": "function",
        "title": "size"
      },
      "index": {
        "description": "Get the current number of elements in the reservoir",
        "hierarchy": "Data Metrics Reservoir",
        "module": "Data.Metrics.Reservoir",
        "name": "size",
        "normalized": "Reservoir-\u003eInt",
        "package": "metrics",
        "partial": "",
        "signature": "Reservoir-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-Reservoir.html#v:snapshot",
      "description": {
        "fct-descr": "\u003cp\u003eGet a copy of all elements in the reservoir.\n\u003c/p\u003e",
        "fct-module": "Data.Metrics.Reservoir",
        "fct-package": "metrics",
        "fct-signature": "Reservoir -\u003e Snapshot",
        "fct-source": "src/Data-Metrics-Reservoir.html#snapshot",
        "fct-type": "function",
        "title": "snapshot"
      },
      "index": {
        "description": "Get copy of all elements in the reservoir",
        "hierarchy": "Data Metrics Reservoir",
        "module": "Data.Metrics.Reservoir",
        "name": "snapshot",
        "normalized": "Reservoir-\u003eSnapshot",
        "package": "metrics",
        "partial": "",
        "signature": "Reservoir-\u003eSnapshot"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-Reservoir.html#v:update",
      "description": {
        "fct-descr": "\u003cp\u003eUpdate a reservoir with a new value.\n\u003c/p\u003e\u003cp\u003eN.B. for some reservoir types, the latest value is not guaranteed to be retained in the reservoir.\n\u003c/p\u003e",
        "fct-module": "Data.Metrics.Reservoir",
        "fct-package": "metrics",
        "fct-signature": "Double -\u003e NominalDiffTime -\u003e Reservoir -\u003e Reservoir",
        "fct-source": "src/Data-Metrics-Reservoir.html#update",
        "fct-type": "function",
        "title": "update"
      },
      "index": {
        "description": "Update reservoir with new value N.B for some reservoir types the latest value is not guaranteed to be retained in the reservoir",
        "hierarchy": "Data Metrics Reservoir",
        "module": "Data.Metrics.Reservoir",
        "name": "update",
        "normalized": "Double-\u003eNominalDiffTime-\u003eReservoir-\u003eReservoir",
        "package": "metrics",
        "partial": "",
        "signature": "Double-\u003eNominalDiffTime-\u003eReservoir-\u003eReservoir"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-Snapshot.html#",
      "description": {
        "fct-module": "Data.Metrics.Snapshot",
        "fct-package": "metrics",
        "fct-signature": "module",
        "fct-source": "src/Data-Metrics-Snapshot.html",
        "fct-type": "module",
        "title": "Snapshot"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Metrics Snapshot",
        "module": "Data.Metrics.Snapshot",
        "name": "Snapshot",
        "normalized": "",
        "package": "metrics",
        "partial": "Snapshot",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-Snapshot.html#t:Snapshot",
      "description": {
        "fct-descr": "\u003cp\u003eA wrapper around a *sorted* vector intended for calculating quantile statistics.\n\u003c/p\u003e",
        "fct-module": "Data.Metrics.Snapshot",
        "fct-package": "metrics",
        "fct-signature": "newtype",
        "fct-source": "src/Data-Metrics-Snapshot.html#Snapshot",
        "fct-type": "newtype",
        "title": "Snapshot"
      },
      "index": {
        "description": "wrapper around sorted vector intended for calculating quantile statistics",
        "hierarchy": "Data Metrics Snapshot",
        "module": "Data.Metrics.Snapshot",
        "name": "Snapshot",
        "normalized": "",
        "package": "metrics",
        "partial": "Snapshot",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-Snapshot.html#v:Snapshot",
      "description": {
        "fct-module": "Data.Metrics.Snapshot",
        "fct-package": "metrics",
        "fct-signature": "Snapshot",
        "fct-source": "src/Data-Metrics-Snapshot.html#Snapshot",
        "fct-type": "function",
        "title": "Snapshot"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Metrics Snapshot",
        "module": "Data.Metrics.Snapshot",
        "name": "Snapshot",
        "normalized": "",
        "package": "metrics",
        "partial": "Snapshot",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-Snapshot.html#v:fromSnapshot",
      "description": {
        "fct-descr": "\u003cp\u003eA sorted \u003ca\u003eVector\u003c/a\u003e of samples.\n\u003c/p\u003e",
        "fct-module": "Data.Metrics.Snapshot",
        "fct-package": "metrics",
        "fct-signature": "Vector Double",
        "fct-source": "src/Data-Metrics-Snapshot.html#Snapshot",
        "fct-type": "function",
        "title": "fromSnapshot"
      },
      "index": {
        "description": "sorted Vector of samples",
        "hierarchy": "Data Metrics Snapshot",
        "module": "Data.Metrics.Snapshot",
        "name": "fromSnapshot",
        "normalized": "",
        "package": "metrics",
        "partial": "Snapshot",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-Snapshot.html#v:get75thPercentile",
      "description": {
        "fct-descr": "\u003cp\u003eCalculate the 75th percentile of a \u003ca\u003eSnapshot\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Metrics.Snapshot",
        "fct-package": "metrics",
        "fct-signature": "Snapshot -\u003e Double",
        "fct-source": "src/Data-Metrics-Snapshot.html#get75thPercentile",
        "fct-type": "function",
        "title": "get75thPercentile"
      },
      "index": {
        "description": "Calculate the th percentile of Snapshot",
        "hierarchy": "Data Metrics Snapshot",
        "module": "Data.Metrics.Snapshot",
        "name": "get75thPercentile",
        "normalized": "Snapshot-\u003eDouble",
        "package": "metrics",
        "partial": "Percentile",
        "signature": "Snapshot-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-Snapshot.html#v:get95thPercentile",
      "description": {
        "fct-descr": "\u003cp\u003eCalculate the 95th percentile of a \u003ca\u003eSnapshot\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Metrics.Snapshot",
        "fct-package": "metrics",
        "fct-signature": "Snapshot -\u003e Double",
        "fct-source": "src/Data-Metrics-Snapshot.html#get95thPercentile",
        "fct-type": "function",
        "title": "get95thPercentile"
      },
      "index": {
        "description": "Calculate the th percentile of Snapshot",
        "hierarchy": "Data Metrics Snapshot",
        "module": "Data.Metrics.Snapshot",
        "name": "get95thPercentile",
        "normalized": "Snapshot-\u003eDouble",
        "package": "metrics",
        "partial": "Percentile",
        "signature": "Snapshot-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-Snapshot.html#v:get98thPercentile",
      "description": {
        "fct-descr": "\u003cp\u003eCalculate the 98th percentile of a \u003ca\u003eSnapshot\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Metrics.Snapshot",
        "fct-package": "metrics",
        "fct-signature": "Snapshot -\u003e Double",
        "fct-source": "src/Data-Metrics-Snapshot.html#get98thPercentile",
        "fct-type": "function",
        "title": "get98thPercentile"
      },
      "index": {
        "description": "Calculate the th percentile of Snapshot",
        "hierarchy": "Data Metrics Snapshot",
        "module": "Data.Metrics.Snapshot",
        "name": "get98thPercentile",
        "normalized": "Snapshot-\u003eDouble",
        "package": "metrics",
        "partial": "Percentile",
        "signature": "Snapshot-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-Snapshot.html#v:get999thPercentile",
      "description": {
        "fct-descr": "\u003cp\u003eCalculate the 99.9th percentile of a \u003ca\u003eSnapshot\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Metrics.Snapshot",
        "fct-package": "metrics",
        "fct-signature": "Snapshot -\u003e Double",
        "fct-source": "src/Data-Metrics-Snapshot.html#get999thPercentile",
        "fct-type": "function",
        "title": "get999thPercentile"
      },
      "index": {
        "description": "Calculate the th percentile of Snapshot",
        "hierarchy": "Data Metrics Snapshot",
        "module": "Data.Metrics.Snapshot",
        "name": "get999thPercentile",
        "normalized": "Snapshot-\u003eDouble",
        "package": "metrics",
        "partial": "Percentile",
        "signature": "Snapshot-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-Snapshot.html#v:get99thPercentile",
      "description": {
        "fct-descr": "\u003cp\u003eCalculate the 99th percentile of a \u003ca\u003eSnapshot\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Metrics.Snapshot",
        "fct-package": "metrics",
        "fct-signature": "Snapshot -\u003e Double",
        "fct-source": "src/Data-Metrics-Snapshot.html#get99thPercentile",
        "fct-type": "function",
        "title": "get99thPercentile"
      },
      "index": {
        "description": "Calculate the th percentile of Snapshot",
        "hierarchy": "Data Metrics Snapshot",
        "module": "Data.Metrics.Snapshot",
        "name": "get99thPercentile",
        "normalized": "Snapshot-\u003eDouble",
        "package": "metrics",
        "partial": "Percentile",
        "signature": "Snapshot-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-Snapshot.html#v:median",
      "description": {
        "fct-descr": "\u003cp\u003eCalculate the median value of a \u003ca\u003eSnapshot\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Metrics.Snapshot",
        "fct-package": "metrics",
        "fct-signature": "Snapshot -\u003e Double",
        "fct-source": "src/Data-Metrics-Snapshot.html#median",
        "fct-type": "function",
        "title": "median"
      },
      "index": {
        "description": "Calculate the median value of Snapshot",
        "hierarchy": "Data Metrics Snapshot",
        "module": "Data.Metrics.Snapshot",
        "name": "median",
        "normalized": "Snapshot-\u003eDouble",
        "package": "metrics",
        "partial": "",
        "signature": "Snapshot-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-Snapshot.html#v:quantile",
      "description": {
        "fct-descr": "\u003cp\u003eCalculate an arbitrary quantile value for a \u003ca\u003eSnapshot\u003c/a\u003e.\n Values below zero or greater than one will be clamped to the range [0, 1]\n\u003c/p\u003e",
        "fct-module": "Data.Metrics.Snapshot",
        "fct-package": "metrics",
        "fct-signature": "Double -\u003e Snapshot -\u003e Double",
        "fct-source": "src/Data-Metrics-Snapshot.html#quantile",
        "fct-type": "function",
        "title": "quantile"
      },
      "index": {
        "description": "Calculate an arbitrary quantile value for Snapshot Values below zero or greater than one will be clamped to the range",
        "hierarchy": "Data Metrics Snapshot",
        "module": "Data.Metrics.Snapshot",
        "name": "quantile",
        "normalized": "Double-\u003eSnapshot-\u003eDouble",
        "package": "metrics",
        "partial": "",
        "signature": "Double-\u003eSnapshot-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-Snapshot.html#v:size",
      "description": {
        "fct-descr": "\u003cp\u003eGet the number of elements in a \u003ca\u003eSnapshot\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Metrics.Snapshot",
        "fct-package": "metrics",
        "fct-signature": "Snapshot -\u003e Int",
        "fct-source": "src/Data-Metrics-Snapshot.html#size",
        "fct-type": "function",
        "title": "size"
      },
      "index": {
        "description": "Get the number of elements in Snapshot",
        "hierarchy": "Data Metrics Snapshot",
        "module": "Data.Metrics.Snapshot",
        "name": "size",
        "normalized": "Snapshot-\u003eInt",
        "package": "metrics",
        "partial": "",
        "signature": "Snapshot-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-Snapshot.html#v:takeSnapshot",
      "description": {
        "fct-descr": "\u003cp\u003eA utility function for snapshotting data from an unsorted \u003ca\u003eMVector\u003c/a\u003e of samples.\n\u003c/p\u003e\u003cp\u003eNB: this function uses \u003ca\u003eunsafeFreeze\u003c/a\u003e under the hood, so be sure that the vector being\n snapshotted is not used after calling this function.\n\u003c/p\u003e",
        "fct-module": "Data.Metrics.Snapshot",
        "fct-package": "metrics",
        "fct-signature": "MVector (PrimState m) Double -\u003e m Snapshot",
        "fct-source": "src/Data-Metrics-Snapshot.html#takeSnapshot",
        "fct-type": "function",
        "title": "takeSnapshot"
      },
      "index": {
        "description": "utility function for snapshotting data from an unsorted MVector of samples NB this function uses unsafeFreeze under the hood so be sure that the vector being snapshotted is not used after calling this function",
        "hierarchy": "Data Metrics Snapshot",
        "module": "Data.Metrics.Snapshot",
        "name": "takeSnapshot",
        "normalized": "MVector(PrimState a)Double-\u003ea Snapshot",
        "package": "metrics",
        "partial": "Snapshot",
        "signature": "MVector(PrimState m)Double-\u003em Snapshot"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-Timer-Internal.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA timer is essentially just a data type that combines\n a \u003ca\u003eMeter\u003c/a\u003e and a \u003ca\u003eHistogram\u003c/a\u003e to track both the rate at which\n events are triggered as well as timing statistics about the calls.\n\u003c/p\u003e\u003cp\u003eThis module exports the pure internals, relying on the stateful version\n to supply the pure timer with measurements.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Metrics.Timer.Internal",
        "fct-package": "metrics",
        "fct-signature": "module",
        "fct-source": "src/Data-Metrics-Timer-Internal.html",
        "fct-type": "module",
        "title": "Internal"
      },
      "index": {
        "description": "timer is essentially just data type that combines Meter and Histogram to track both the rate at which events are triggered as well as timing statistics about the calls This module exports the pure internals relying on the stateful version to supply the pure timer with measurements",
        "hierarchy": "Data Metrics Timer Internal",
        "module": "Data.Metrics.Timer.Internal",
        "name": "Internal",
        "normalized": "",
        "package": "metrics",
        "partial": "Internal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-Timer-Internal.html#t:HasHistogram",
      "description": {
        "fct-module": "Data.Metrics.Timer.Internal",
        "fct-package": "metrics",
        "fct-signature": "class",
        "fct-source": "src/Data-Metrics-Timer-Internal.html#HasHistogram",
        "fct-type": "class",
        "title": "HasHistogram"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Metrics Timer Internal",
        "module": "Data.Metrics.Timer.Internal",
        "name": "HasHistogram",
        "normalized": "",
        "package": "metrics",
        "partial": "Has Histogram",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-Timer-Internal.html#t:HasMeter",
      "description": {
        "fct-module": "Data.Metrics.Timer.Internal",
        "fct-package": "metrics",
        "fct-signature": "class",
        "fct-source": "src/Data-Metrics-Timer-Internal.html#HasMeter",
        "fct-type": "class",
        "title": "HasMeter"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Metrics Timer Internal",
        "module": "Data.Metrics.Timer.Internal",
        "name": "HasMeter",
        "normalized": "",
        "package": "metrics",
        "partial": "Has Meter",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-Timer-Internal.html#t:Timer",
      "description": {
        "fct-module": "Data.Metrics.Timer.Internal",
        "fct-package": "metrics",
        "fct-signature": "data",
        "fct-source": "src/Data-Metrics-Timer-Internal.html#Timer",
        "fct-type": "data",
        "title": "Timer"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Metrics Timer Internal",
        "module": "Data.Metrics.Timer.Internal",
        "name": "Timer",
        "normalized": "",
        "package": "metrics",
        "partial": "Timer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-Timer-Internal.html#v:Timer",
      "description": {
        "fct-module": "Data.Metrics.Timer.Internal",
        "fct-package": "metrics",
        "fct-signature": "Timer",
        "fct-source": "src/Data-Metrics-Timer-Internal.html#Timer",
        "fct-type": "function",
        "title": "Timer"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Metrics Timer Internal",
        "module": "Data.Metrics.Timer.Internal",
        "name": "Timer",
        "normalized": "",
        "package": "metrics",
        "partial": "Timer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-Timer-Internal.html#v:_timerHistogram",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Metrics.Timer.Internal",
        "fct-package": "metrics",
        "fct-signature": "!Histogram",
        "fct-source": "src/Data-Metrics-Timer-Internal.html#Timer",
        "fct-type": "function",
        "title": "_timerHistogram"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Metrics Timer Internal",
        "module": "Data.Metrics.Timer.Internal",
        "name": "_timerHistogram",
        "normalized": "",
        "package": "metrics",
        "partial": "Histogram",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-Timer-Internal.html#v:_timerHistogramLens",
      "description": {
        "fct-module": "Data.Metrics.Timer.Internal",
        "fct-package": "metrics",
        "fct-signature": "Lens' Timer Histogram",
        "fct-source": "src/Data-Metrics-Timer-Internal.html#_timerHistogramLens",
        "fct-type": "function",
        "title": "_timerHistogramLens"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Metrics Timer Internal",
        "module": "Data.Metrics.Timer.Internal",
        "name": "_timerHistogramLens",
        "normalized": "",
        "package": "metrics",
        "partial": "Histogram Lens",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-Timer-Internal.html#v:_timerMeter",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Metrics.Timer.Internal",
        "fct-package": "metrics",
        "fct-signature": "!Meter",
        "fct-source": "src/Data-Metrics-Timer-Internal.html#Timer",
        "fct-type": "function",
        "title": "_timerMeter"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Metrics Timer Internal",
        "module": "Data.Metrics.Timer.Internal",
        "name": "_timerMeter",
        "normalized": "",
        "package": "metrics",
        "partial": "Meter",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-Timer-Internal.html#v:_timerMeterLens",
      "description": {
        "fct-module": "Data.Metrics.Timer.Internal",
        "fct-package": "metrics",
        "fct-signature": "Lens' Timer Meter",
        "fct-source": "src/Data-Metrics-Timer-Internal.html#_timerMeterLens",
        "fct-type": "function",
        "title": "_timerMeterLens"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Metrics Timer Internal",
        "module": "Data.Metrics.Timer.Internal",
        "name": "_timerMeterLens",
        "normalized": "",
        "package": "metrics",
        "partial": "Meter Lens",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-Timer-Internal.html#v:clear",
      "description": {
        "fct-module": "Data.Metrics.Timer.Internal",
        "fct-package": "metrics",
        "fct-signature": "NominalDiffTime -\u003e Timer -\u003e Timer",
        "fct-source": "src/Data-Metrics-Timer-Internal.html#clear",
        "fct-type": "function",
        "title": "clear"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Metrics Timer Internal",
        "module": "Data.Metrics.Timer.Internal",
        "name": "clear",
        "normalized": "NominalDiffTime-\u003eTimer-\u003eTimer",
        "package": "metrics",
        "partial": "",
        "signature": "NominalDiffTime-\u003eTimer-\u003eTimer"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-Timer-Internal.html#v:count",
      "description": {
        "fct-module": "Data.Metrics.Timer.Internal",
        "fct-package": "metrics",
        "fct-signature": "Timer -\u003e Int",
        "fct-source": "src/Data-Metrics-Timer-Internal.html#count",
        "fct-type": "function",
        "title": "count"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Metrics Timer Internal",
        "module": "Data.Metrics.Timer.Internal",
        "name": "count",
        "normalized": "Timer-\u003eInt",
        "package": "metrics",
        "partial": "",
        "signature": "Timer-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-Timer-Internal.html#v:fifteenMinuteRate",
      "description": {
        "fct-module": "Data.Metrics.Timer.Internal",
        "fct-package": "metrics",
        "fct-signature": "Timer -\u003e Double",
        "fct-source": "src/Data-Metrics-Timer-Internal.html#fifteenMinuteRate",
        "fct-type": "function",
        "title": "fifteenMinuteRate"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Metrics Timer Internal",
        "module": "Data.Metrics.Timer.Internal",
        "name": "fifteenMinuteRate",
        "normalized": "Timer-\u003eDouble",
        "package": "metrics",
        "partial": "Minute Rate",
        "signature": "Timer-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-Timer-Internal.html#v:fiveMinuteRate",
      "description": {
        "fct-module": "Data.Metrics.Timer.Internal",
        "fct-package": "metrics",
        "fct-signature": "Timer -\u003e Double",
        "fct-source": "src/Data-Metrics-Timer-Internal.html#fiveMinuteRate",
        "fct-type": "function",
        "title": "fiveMinuteRate"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Metrics Timer Internal",
        "module": "Data.Metrics.Timer.Internal",
        "name": "fiveMinuteRate",
        "normalized": "Timer-\u003eDouble",
        "package": "metrics",
        "partial": "Minute Rate",
        "signature": "Timer-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-Timer-Internal.html#v:histogram",
      "description": {
        "fct-module": "Data.Metrics.Timer.Internal",
        "fct-package": "metrics",
        "fct-signature": "Lens' c e",
        "fct-source": "src/Data-Metrics-Timer-Internal.html#histogram",
        "fct-type": "method",
        "title": "histogram"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Metrics Timer Internal",
        "module": "Data.Metrics.Timer.Internal",
        "name": "histogram",
        "normalized": "",
        "package": "metrics",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-Timer-Internal.html#v:maxVal",
      "description": {
        "fct-module": "Data.Metrics.Timer.Internal",
        "fct-package": "metrics",
        "fct-signature": "Timer -\u003e Double",
        "fct-source": "src/Data-Metrics-Timer-Internal.html#maxVal",
        "fct-type": "function",
        "title": "maxVal"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Metrics Timer Internal",
        "module": "Data.Metrics.Timer.Internal",
        "name": "maxVal",
        "normalized": "Timer-\u003eDouble",
        "package": "metrics",
        "partial": "Val",
        "signature": "Timer-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-Timer-Internal.html#v:mean",
      "description": {
        "fct-module": "Data.Metrics.Timer.Internal",
        "fct-package": "metrics",
        "fct-signature": "Timer -\u003e Double",
        "fct-source": "src/Data-Metrics-Timer-Internal.html#mean",
        "fct-type": "function",
        "title": "mean"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Metrics Timer Internal",
        "module": "Data.Metrics.Timer.Internal",
        "name": "mean",
        "normalized": "Timer-\u003eDouble",
        "package": "metrics",
        "partial": "",
        "signature": "Timer-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-Timer-Internal.html#v:meanRate",
      "description": {
        "fct-module": "Data.Metrics.Timer.Internal",
        "fct-package": "metrics",
        "fct-signature": "NominalDiffTime -\u003e Timer -\u003e Double",
        "fct-source": "src/Data-Metrics-Timer-Internal.html#meanRate",
        "fct-type": "function",
        "title": "meanRate"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Metrics Timer Internal",
        "module": "Data.Metrics.Timer.Internal",
        "name": "meanRate",
        "normalized": "NominalDiffTime-\u003eTimer-\u003eDouble",
        "package": "metrics",
        "partial": "Rate",
        "signature": "NominalDiffTime-\u003eTimer-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-Timer-Internal.html#v:meter",
      "description": {
        "fct-module": "Data.Metrics.Timer.Internal",
        "fct-package": "metrics",
        "fct-signature": "Lens' c e",
        "fct-source": "src/Data-Metrics-Timer-Internal.html#meter",
        "fct-type": "method",
        "title": "meter"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Metrics Timer Internal",
        "module": "Data.Metrics.Timer.Internal",
        "name": "meter",
        "normalized": "",
        "package": "metrics",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-Timer-Internal.html#v:minVal",
      "description": {
        "fct-module": "Data.Metrics.Timer.Internal",
        "fct-package": "metrics",
        "fct-signature": "Timer -\u003e Double",
        "fct-source": "src/Data-Metrics-Timer-Internal.html#minVal",
        "fct-type": "function",
        "title": "minVal"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Metrics Timer Internal",
        "module": "Data.Metrics.Timer.Internal",
        "name": "minVal",
        "normalized": "Timer-\u003eDouble",
        "package": "metrics",
        "partial": "Val",
        "signature": "Timer-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-Timer-Internal.html#v:oneMinuteRate",
      "description": {
        "fct-module": "Data.Metrics.Timer.Internal",
        "fct-package": "metrics",
        "fct-signature": "Timer -\u003e Double",
        "fct-source": "src/Data-Metrics-Timer-Internal.html#oneMinuteRate",
        "fct-type": "function",
        "title": "oneMinuteRate"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Metrics Timer Internal",
        "module": "Data.Metrics.Timer.Internal",
        "name": "oneMinuteRate",
        "normalized": "Timer-\u003eDouble",
        "package": "metrics",
        "partial": "Minute Rate",
        "signature": "Timer-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-Timer-Internal.html#v:snapshot",
      "description": {
        "fct-module": "Data.Metrics.Timer.Internal",
        "fct-package": "metrics",
        "fct-signature": "Timer -\u003e Snapshot",
        "fct-source": "src/Data-Metrics-Timer-Internal.html#snapshot",
        "fct-type": "function",
        "title": "snapshot"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Metrics Timer Internal",
        "module": "Data.Metrics.Timer.Internal",
        "name": "snapshot",
        "normalized": "Timer-\u003eSnapshot",
        "package": "metrics",
        "partial": "",
        "signature": "Timer-\u003eSnapshot"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-Timer-Internal.html#v:stddev",
      "description": {
        "fct-module": "Data.Metrics.Timer.Internal",
        "fct-package": "metrics",
        "fct-signature": "Timer -\u003e Double",
        "fct-source": "src/Data-Metrics-Timer-Internal.html#stddev",
        "fct-type": "function",
        "title": "stddev"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Metrics Timer Internal",
        "module": "Data.Metrics.Timer.Internal",
        "name": "stddev",
        "normalized": "Timer-\u003eDouble",
        "package": "metrics",
        "partial": "",
        "signature": "Timer-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-Timer-Internal.html#v:tickIfNecessary",
      "description": {
        "fct-module": "Data.Metrics.Timer.Internal",
        "fct-package": "metrics",
        "fct-signature": "NominalDiffTime -\u003e Timer -\u003e Timer",
        "fct-source": "src/Data-Metrics-Timer-Internal.html#tickIfNecessary",
        "fct-type": "function",
        "title": "tickIfNecessary"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Metrics Timer Internal",
        "module": "Data.Metrics.Timer.Internal",
        "name": "tickIfNecessary",
        "normalized": "NominalDiffTime-\u003eTimer-\u003eTimer",
        "package": "metrics",
        "partial": "If Necessary",
        "signature": "NominalDiffTime-\u003eTimer-\u003eTimer"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-Timer-Internal.html#v:update",
      "description": {
        "fct-module": "Data.Metrics.Timer.Internal",
        "fct-package": "metrics",
        "fct-signature": "NominalDiffTime -\u003e Double -\u003e Timer -\u003e Timer",
        "fct-source": "src/Data-Metrics-Timer-Internal.html#update",
        "fct-type": "function",
        "title": "update"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Metrics Timer Internal",
        "module": "Data.Metrics.Timer.Internal",
        "name": "update",
        "normalized": "NominalDiffTime-\u003eDouble-\u003eTimer-\u003eTimer",
        "package": "metrics",
        "partial": "",
        "signature": "NominalDiffTime-\u003eDouble-\u003eTimer-\u003eTimer"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-Timer-Internal.html#v:variance",
      "description": {
        "fct-module": "Data.Metrics.Timer.Internal",
        "fct-package": "metrics",
        "fct-signature": "Timer -\u003e Double",
        "fct-source": "src/Data-Metrics-Timer-Internal.html#variance",
        "fct-type": "function",
        "title": "variance"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Metrics Timer Internal",
        "module": "Data.Metrics.Timer.Internal",
        "name": "variance",
        "normalized": "Timer-\u003eDouble",
        "package": "metrics",
        "partial": "",
        "signature": "Timer-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-Timer.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA timer is basically a histogram of the duration of a type of event and a meter of the rate of its occurrence.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Metrics.Timer",
        "fct-package": "metrics",
        "fct-signature": "module",
        "fct-source": "src/Data-Metrics-Timer.html",
        "fct-type": "module",
        "title": "Timer"
      },
      "index": {
        "description": "timer is basically histogram of the duration of type of event and meter of the rate of its occurrence",
        "hierarchy": "Data Metrics Timer",
        "module": "Data.Metrics.Timer",
        "name": "Timer",
        "normalized": "",
        "package": "metrics",
        "partial": "Timer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-Timer.html#t:Timer",
      "description": {
        "fct-descr": "\u003cp\u003eA measure of time statistics for the duration of an event\n\u003c/p\u003e",
        "fct-module": "Data.Metrics.Timer",
        "fct-package": "metrics",
        "fct-signature": "data",
        "fct-source": "src/Data-Metrics-Timer.html#Timer",
        "fct-type": "data",
        "title": "Timer"
      },
      "index": {
        "description": "measure of time statistics for the duration of an event",
        "hierarchy": "Data Metrics Timer",
        "module": "Data.Metrics.Timer",
        "name": "Timer",
        "normalized": "",
        "package": "metrics",
        "partial": "Timer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-Timer.html#v:mkTimer",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a timer using a custom function for retrieving the current time.\n\u003c/p\u003e\u003cp\u003eThis is mostly exposed for testing purposes: prefer using \u003ca\u003etimer\u003c/a\u003e if possible.\n\u003c/p\u003e",
        "fct-module": "Data.Metrics.Timer",
        "fct-package": "metrics",
        "fct-signature": "m NominalDiffTime -\u003e Seed -\u003e m (Timer m)",
        "fct-source": "src/Data-Metrics-Timer.html#mkTimer",
        "fct-type": "function",
        "title": "mkTimer"
      },
      "index": {
        "description": "Create timer using custom function for retrieving the current time This is mostly exposed for testing purposes prefer using timer if possible",
        "hierarchy": "Data Metrics Timer",
        "module": "Data.Metrics.Timer",
        "name": "mkTimer",
        "normalized": "a NominalDiffTime-\u003eSeed-\u003ea(Timer a)",
        "package": "metrics",
        "partial": "Timer",
        "signature": "m NominalDiffTime-\u003eSeed-\u003em(Timer m)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-Timer.html#v:time",
      "description": {
        "fct-descr": "\u003cp\u003eExecute an action and record statistics about the\n duration of the event and the rate of event occurrence.\n\u003c/p\u003e",
        "fct-module": "Data.Metrics.Timer",
        "fct-package": "metrics",
        "fct-signature": "Timer IO -\u003e IO a -\u003e IO a",
        "fct-source": "src/Data-Metrics-Timer.html#time",
        "fct-type": "function",
        "title": "time"
      },
      "index": {
        "description": "Execute an action and record statistics about the duration of the event and the rate of event occurrence",
        "hierarchy": "Data Metrics Timer",
        "module": "Data.Metrics.Timer",
        "name": "time",
        "normalized": "Timer IO-\u003eIO a-\u003eIO a",
        "package": "metrics",
        "partial": "",
        "signature": "Timer IO-\u003eIO a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-Timer.html#v:timer",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a standard \u003ca\u003eTimer\u003c/a\u003e with an \n exponentially weighted moving average\n and an exponentially decaying histogram\n\u003c/p\u003e",
        "fct-module": "Data.Metrics.Timer",
        "fct-package": "metrics",
        "fct-signature": "IO (Timer IO)",
        "fct-source": "src/Data-Metrics-Timer.html#timer",
        "fct-type": "function",
        "title": "timer"
      },
      "index": {
        "description": "Create standard Timer with an exponentially weighted moving average and an exponentially decaying histogram",
        "hierarchy": "Data Metrics Timer",
        "module": "Data.Metrics.Timer",
        "name": "timer",
        "normalized": "",
        "package": "metrics",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-Types.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe main accessors for common stateful metric implementation data.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Metrics.Types",
        "fct-package": "metrics",
        "fct-signature": "module",
        "fct-source": "src/Data-Metrics-Types.html",
        "fct-type": "module",
        "title": "Types"
      },
      "index": {
        "description": "The main accessors for common stateful metric implementation data",
        "hierarchy": "Data Metrics Types",
        "module": "Data.Metrics.Types",
        "name": "Types",
        "normalized": "",
        "package": "metrics",
        "partial": "Types",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-Types.html#t:Clear",
      "description": {
        "fct-descr": "\u003cp\u003eProvides a way to reset metrics. This might be useful in a development environment\n or to periodically get a clean state for long-running processes.\n\u003c/p\u003e",
        "fct-module": "Data.Metrics.Types",
        "fct-package": "metrics",
        "fct-signature": "class",
        "fct-source": "src/Data-Metrics-Types.html#Clear",
        "fct-type": "class",
        "title": "Clear"
      },
      "index": {
        "description": "Provides way to reset metrics This might be useful in development environment or to periodically get clean state for long-running processes",
        "hierarchy": "Data Metrics Types",
        "module": "Data.Metrics.Types",
        "name": "Clear",
        "normalized": "",
        "package": "metrics",
        "partial": "Clear",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-Types.html#t:Count",
      "description": {
        "fct-descr": "\u003cp\u003eGet the current count for the given metric.\n\u003c/p\u003e",
        "fct-module": "Data.Metrics.Types",
        "fct-package": "metrics",
        "fct-signature": "class",
        "fct-source": "src/Data-Metrics-Types.html#Count",
        "fct-type": "class",
        "title": "Count"
      },
      "index": {
        "description": "Get the current count for the given metric",
        "hierarchy": "Data Metrics Types",
        "module": "Data.Metrics.Types",
        "name": "Count",
        "normalized": "",
        "package": "metrics",
        "partial": "Count",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-Types.html#t:Minutes",
      "description": {
        "fct-descr": "\u003cp\u003eHistogram moving averages are tracked (by default) on minute scale.\n\u003c/p\u003e",
        "fct-module": "Data.Metrics.Types",
        "fct-package": "metrics",
        "fct-signature": "type",
        "fct-source": "src/Data-Metrics-Types.html#Minutes",
        "fct-type": "type",
        "title": "Minutes"
      },
      "index": {
        "description": "Histogram moving averages are tracked by default on minute scale",
        "hierarchy": "Data Metrics Types",
        "module": "Data.Metrics.Types",
        "name": "Minutes",
        "normalized": "",
        "package": "metrics",
        "partial": "Minutes",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-Types.html#t:Rate",
      "description": {
        "fct-descr": "\u003cp\u003eProvides statistics from a histogram that tracks the standard moving average rates.\n\u003c/p\u003e",
        "fct-module": "Data.Metrics.Types",
        "fct-package": "metrics",
        "fct-signature": "class",
        "fct-source": "src/Data-Metrics-Types.html#Rate",
        "fct-type": "class",
        "title": "Rate"
      },
      "index": {
        "description": "Provides statistics from histogram that tracks the standard moving average rates",
        "hierarchy": "Data Metrics Types",
        "module": "Data.Metrics.Types",
        "name": "Rate",
        "normalized": "",
        "package": "metrics",
        "partial": "Rate",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-Types.html#t:Set",
      "description": {
        "fct-descr": "\u003cp\u003eUpdate a metric by performing wholesale replacement of a value.\n\u003c/p\u003e",
        "fct-module": "Data.Metrics.Types",
        "fct-package": "metrics",
        "fct-signature": "class",
        "fct-source": "src/Data-Metrics-Types.html#Set",
        "fct-type": "class",
        "title": "Set"
      },
      "index": {
        "description": "Update metric by performing wholesale replacement of value",
        "hierarchy": "Data Metrics Types",
        "module": "Data.Metrics.Types",
        "name": "Set",
        "normalized": "",
        "package": "metrics",
        "partial": "Set",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-Types.html#t:Statistics",
      "description": {
        "fct-descr": "\u003cp\u003eProvides the main interface for retrieving statistics tabulated by a histogram.\n\u003c/p\u003e",
        "fct-module": "Data.Metrics.Types",
        "fct-package": "metrics",
        "fct-signature": "class",
        "fct-source": "src/Data-Metrics-Types.html#Statistics",
        "fct-type": "class",
        "title": "Statistics"
      },
      "index": {
        "description": "Provides the main interface for retrieving statistics tabulated by histogram",
        "hierarchy": "Data Metrics Types",
        "module": "Data.Metrics.Types",
        "name": "Statistics",
        "normalized": "",
        "package": "metrics",
        "partial": "Statistics",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-Types.html#t:TakeSnapshot",
      "description": {
        "fct-descr": "\u003cp\u003eTake a snapshot (a sorted vector) of samples used for calculating quantile data.\n\u003c/p\u003e",
        "fct-module": "Data.Metrics.Types",
        "fct-package": "metrics",
        "fct-signature": "class",
        "fct-source": "src/Data-Metrics-Types.html#TakeSnapshot",
        "fct-type": "class",
        "title": "TakeSnapshot"
      },
      "index": {
        "description": "Take snapshot sorted vector of samples used for calculating quantile data",
        "hierarchy": "Data Metrics Types",
        "module": "Data.Metrics.Types",
        "name": "TakeSnapshot",
        "normalized": "",
        "package": "metrics",
        "partial": "Take Snapshot",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-Types.html#t:Update",
      "description": {
        "fct-descr": "\u003cp\u003eUpdate statistics tracked by a metric with a new sample.\n\u003c/p\u003e",
        "fct-module": "Data.Metrics.Types",
        "fct-package": "metrics",
        "fct-signature": "class",
        "fct-source": "src/Data-Metrics-Types.html#Update",
        "fct-type": "class",
        "title": "Update"
      },
      "index": {
        "description": "Update statistics tracked by metric with new sample",
        "hierarchy": "Data Metrics Types",
        "module": "Data.Metrics.Types",
        "name": "Update",
        "normalized": "",
        "package": "metrics",
        "partial": "Update",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-Types.html#t:Value",
      "description": {
        "fct-descr": "\u003cp\u003eGets the current value from a simple metric (i.e. a \u003ca\u003eCounter\u003c/a\u003e or a \u003ca\u003eGauge\u003c/a\u003e)\n\u003c/p\u003e",
        "fct-module": "Data.Metrics.Types",
        "fct-package": "metrics",
        "fct-signature": "class",
        "fct-source": "src/Data-Metrics-Types.html#Value",
        "fct-type": "class",
        "title": "Value"
      },
      "index": {
        "description": "Gets the current value from simple metric i.e Counter or Gauge",
        "hierarchy": "Data Metrics Types",
        "module": "Data.Metrics.Types",
        "name": "Value",
        "normalized": "",
        "package": "metrics",
        "partial": "Value",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-Types.html#v:clear",
      "description": {
        "fct-descr": "\u003cp\u003eReset the metric to an \u003ccode\u003eempty\u003c/code\u003e state. In practice, this should be\n equivalent to creating a new metric of the same type in-place.\n\u003c/p\u003e",
        "fct-module": "Data.Metrics.Types",
        "fct-package": "metrics",
        "fct-signature": "a -\u003e m ()",
        "fct-source": "src/Data-Metrics-Types.html#clear",
        "fct-type": "method",
        "title": "clear"
      },
      "index": {
        "description": "Reset the metric to an empty state In practice this should be equivalent to creating new metric of the same type in-place",
        "hierarchy": "Data Metrics Types",
        "module": "Data.Metrics.Types",
        "name": "clear",
        "normalized": "a-\u003eb()",
        "package": "metrics",
        "partial": "",
        "signature": "a-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-Types.html#v:count",
      "description": {
        "fct-descr": "\u003cp\u003eretrieve a count\n\u003c/p\u003e",
        "fct-module": "Data.Metrics.Types",
        "fct-package": "metrics",
        "fct-signature": "a -\u003e m Int",
        "fct-source": "src/Data-Metrics-Types.html#count",
        "fct-type": "method",
        "title": "count"
      },
      "index": {
        "description": "retrieve count",
        "hierarchy": "Data Metrics Types",
        "module": "Data.Metrics.Types",
        "name": "count",
        "normalized": "a-\u003eb Int",
        "package": "metrics",
        "partial": "",
        "signature": "a-\u003em Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-Types.html#v:fifteenMinuteRate",
      "description": {
        "fct-descr": "\u003cp\u003eGet the average rate of occurrence for some sort of event for the past fifteen minutes.\n\u003c/p\u003e",
        "fct-module": "Data.Metrics.Types",
        "fct-package": "metrics",
        "fct-signature": "a -\u003e m Double",
        "fct-source": "src/Data-Metrics-Types.html#fifteenMinuteRate",
        "fct-type": "method",
        "title": "fifteenMinuteRate"
      },
      "index": {
        "description": "Get the average rate of occurrence for some sort of event for the past fifteen minutes",
        "hierarchy": "Data Metrics Types",
        "module": "Data.Metrics.Types",
        "name": "fifteenMinuteRate",
        "normalized": "a-\u003eb Double",
        "package": "metrics",
        "partial": "Minute Rate",
        "signature": "a-\u003em Double"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-Types.html#v:fiveMinuteRate",
      "description": {
        "fct-descr": "\u003cp\u003eGet the average rate of occurrence for some sort of event for the past five minutes.\n\u003c/p\u003e",
        "fct-module": "Data.Metrics.Types",
        "fct-package": "metrics",
        "fct-signature": "a -\u003e m Double",
        "fct-source": "src/Data-Metrics-Types.html#fiveMinuteRate",
        "fct-type": "method",
        "title": "fiveMinuteRate"
      },
      "index": {
        "description": "Get the average rate of occurrence for some sort of event for the past five minutes",
        "hierarchy": "Data Metrics Types",
        "module": "Data.Metrics.Types",
        "name": "fiveMinuteRate",
        "normalized": "a-\u003eb Double",
        "package": "metrics",
        "partial": "Minute Rate",
        "signature": "a-\u003em Double"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-Types.html#v:maxVal",
      "description": {
        "fct-descr": "\u003cp\u003eGets the highest value encountered thus far.\n\u003c/p\u003e",
        "fct-module": "Data.Metrics.Types",
        "fct-package": "metrics",
        "fct-signature": "a -\u003e m Double",
        "fct-source": "src/Data-Metrics-Types.html#maxVal",
        "fct-type": "method",
        "title": "maxVal"
      },
      "index": {
        "description": "Gets the highest value encountered thus far",
        "hierarchy": "Data Metrics Types",
        "module": "Data.Metrics.Types",
        "name": "maxVal",
        "normalized": "a-\u003eb Double",
        "package": "metrics",
        "partial": "Val",
        "signature": "a-\u003em Double"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-Types.html#v:mean",
      "description": {
        "fct-descr": "\u003cp\u003eGets the current average value. This may have slightly different meanings\n depending on the type of \u003ca\u003eMovingAverage\u003c/a\u003e used.\n\u003c/p\u003e",
        "fct-module": "Data.Metrics.Types",
        "fct-package": "metrics",
        "fct-signature": "a -\u003e m Double",
        "fct-source": "src/Data-Metrics-Types.html#mean",
        "fct-type": "method",
        "title": "mean"
      },
      "index": {
        "description": "Gets the current average value This may have slightly different meanings depending on the type of MovingAverage used",
        "hierarchy": "Data Metrics Types",
        "module": "Data.Metrics.Types",
        "name": "mean",
        "normalized": "a-\u003eb Double",
        "package": "metrics",
        "partial": "",
        "signature": "a-\u003em Double"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-Types.html#v:meanRate",
      "description": {
        "fct-descr": "\u003cp\u003eGet the mean rate of occurrence for some sort of event for the entirety of the time that \u003ccode\u003ea\u003c/code\u003e has existed.\n\u003c/p\u003e",
        "fct-module": "Data.Metrics.Types",
        "fct-package": "metrics",
        "fct-signature": "a -\u003e m Double",
        "fct-source": "src/Data-Metrics-Types.html#meanRate",
        "fct-type": "method",
        "title": "meanRate"
      },
      "index": {
        "description": "Get the mean rate of occurrence for some sort of event for the entirety of the time that has existed",
        "hierarchy": "Data Metrics Types",
        "module": "Data.Metrics.Types",
        "name": "meanRate",
        "normalized": "a-\u003eb Double",
        "package": "metrics",
        "partial": "Rate",
        "signature": "a-\u003em Double"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-Types.html#v:minVal",
      "description": {
        "fct-descr": "\u003cp\u003eGets the lowest value encountered thus far.\n\u003c/p\u003e",
        "fct-module": "Data.Metrics.Types",
        "fct-package": "metrics",
        "fct-signature": "a -\u003e m Double",
        "fct-source": "src/Data-Metrics-Types.html#minVal",
        "fct-type": "method",
        "title": "minVal"
      },
      "index": {
        "description": "Gets the lowest value encountered thus far",
        "hierarchy": "Data Metrics Types",
        "module": "Data.Metrics.Types",
        "name": "minVal",
        "normalized": "a-\u003eb Double",
        "package": "metrics",
        "partial": "Val",
        "signature": "a-\u003em Double"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-Types.html#v:oneMinuteRate",
      "description": {
        "fct-descr": "\u003cp\u003eGet the average rate of occurrence for some sort of event for the past minute.\n\u003c/p\u003e",
        "fct-module": "Data.Metrics.Types",
        "fct-package": "metrics",
        "fct-signature": "a -\u003e m Double",
        "fct-source": "src/Data-Metrics-Types.html#oneMinuteRate",
        "fct-type": "method",
        "title": "oneMinuteRate"
      },
      "index": {
        "description": "Get the average rate of occurrence for some sort of event for the past minute",
        "hierarchy": "Data Metrics Types",
        "module": "Data.Metrics.Types",
        "name": "oneMinuteRate",
        "normalized": "a-\u003eb Double",
        "package": "metrics",
        "partial": "Minute Rate",
        "signature": "a-\u003em Double"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-Types.html#v:set",
      "description": {
        "fct-descr": "\u003cp\u003eReplace the current value of a simple metric (i.e. a \u003ca\u003eCounter\u003c/a\u003e or a \u003ca\u003eGauge\u003c/a\u003e)\n\u003c/p\u003e",
        "fct-module": "Data.Metrics.Types",
        "fct-package": "metrics",
        "fct-signature": "a -\u003e v -\u003e m ()",
        "fct-source": "src/Data-Metrics-Types.html#set",
        "fct-type": "method",
        "title": "set"
      },
      "index": {
        "description": "Replace the current value of simple metric i.e Counter or Gauge",
        "hierarchy": "Data Metrics Types",
        "module": "Data.Metrics.Types",
        "name": "set",
        "normalized": "a-\u003eb-\u003ec()",
        "package": "metrics",
        "partial": "",
        "signature": "a-\u003ev-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-Types.html#v:snapshot",
      "description": {
        "fct-descr": "\u003cp\u003eGet a sample of the values currently in a histogram or type that contains a histogram.\n\u003c/p\u003e",
        "fct-module": "Data.Metrics.Types",
        "fct-package": "metrics",
        "fct-signature": "a -\u003e m Snapshot",
        "fct-source": "src/Data-Metrics-Types.html#snapshot",
        "fct-type": "method",
        "title": "snapshot"
      },
      "index": {
        "description": "Get sample of the values currently in histogram or type that contains histogram",
        "hierarchy": "Data Metrics Types",
        "module": "Data.Metrics.Types",
        "name": "snapshot",
        "normalized": "a-\u003eb Snapshot",
        "package": "metrics",
        "partial": "",
        "signature": "a-\u003em Snapshot"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-Types.html#v:stddev",
      "description": {
        "fct-descr": "\u003cp\u003eGets the standard deviation of all values encountered this var.\n\u003c/p\u003e",
        "fct-module": "Data.Metrics.Types",
        "fct-package": "metrics",
        "fct-signature": "a -\u003e m Double",
        "fct-source": "src/Data-Metrics-Types.html#stddev",
        "fct-type": "method",
        "title": "stddev"
      },
      "index": {
        "description": "Gets the standard deviation of all values encountered this var",
        "hierarchy": "Data Metrics Types",
        "module": "Data.Metrics.Types",
        "name": "stddev",
        "normalized": "a-\u003eb Double",
        "package": "metrics",
        "partial": "",
        "signature": "a-\u003em Double"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-Types.html#v:update",
      "description": {
        "fct-descr": "\u003cp\u003eFeed a metric another value.\n\u003c/p\u003e",
        "fct-module": "Data.Metrics.Types",
        "fct-package": "metrics",
        "fct-signature": "a -\u003e v -\u003e m ()",
        "fct-source": "src/Data-Metrics-Types.html#update",
        "fct-type": "method",
        "title": "update"
      },
      "index": {
        "description": "Feed metric another value",
        "hierarchy": "Data Metrics Types",
        "module": "Data.Metrics.Types",
        "name": "update",
        "normalized": "a-\u003eb-\u003ec()",
        "package": "metrics",
        "partial": "",
        "signature": "a-\u003ev-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-Types.html#v:value",
      "description": {
        "fct-module": "Data.Metrics.Types",
        "fct-package": "metrics",
        "fct-signature": "a -\u003e m v",
        "fct-source": "src/Data-Metrics-Types.html#value",
        "fct-type": "method",
        "title": "value"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Metrics Types",
        "module": "Data.Metrics.Types",
        "name": "value",
        "normalized": "a-\u003eb c",
        "package": "metrics",
        "partial": "",
        "signature": "a-\u003em v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics-Types.html#v:variance",
      "description": {
        "fct-descr": "\u003cp\u003eGets the variance of all values encountered this var.\n\u003c/p\u003e",
        "fct-module": "Data.Metrics.Types",
        "fct-package": "metrics",
        "fct-signature": "a -\u003e m Double",
        "fct-source": "src/Data-Metrics-Types.html#variance",
        "fct-type": "method",
        "title": "variance"
      },
      "index": {
        "description": "Gets the variance of all values encountered this var",
        "hierarchy": "Data Metrics Types",
        "module": "Data.Metrics.Types",
        "name": "variance",
        "normalized": "a-\u003eb Double",
        "package": "metrics",
        "partial": "",
        "signature": "a-\u003em Double"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/metrics/docs/Data-Metrics.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA library for tracking arbitrary metrics over time.\n The library largely provides pure and stateful versions of\n the same set of functionality for common metric types.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Metrics",
        "fct-package": "metrics",
        "fct-signature": "module",
        "fct-source": "src/Data-Metrics.html",
        "fct-type": "module",
        "title": "Metrics"
      },
      "index": {
        "description": "library for tracking arbitrary metrics over time The library largely provides pure and stateful versions of the same set of functionality for common metric types",
        "hierarchy": "Data Metrics",
        "module": "Data.Metrics",
        "name": "Metrics",
        "normalized": "",
        "package": "metrics",
        "partial": "Metrics",
        "signature": ""
      }
    }
  }
]