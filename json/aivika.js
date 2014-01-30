[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Agent.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTested with: GHC 7.6.3\n\u003c/p\u003e\u003cp\u003eThis module introduces basic entities for the agent-based modeling.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Simulation.Aivika.Agent",
        "fct-package": "aivika",
        "fct-signature": "module",
        "fct-source": "src/Simulation-Aivika-Agent.html",
        "fct-type": "module",
        "title": "Agent"
      },
      "index": {
        "description": "Tested with GHC This module introduces basic entities for the agent-based modeling",
        "hierarchy": "Simulation Aivika Agent",
        "module": "Simulation.Aivika.Agent",
        "name": "Agent",
        "normalized": "",
        "package": "aivika",
        "partial": "Agent",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Agent.html#t:Agent",
      "description": {
        "fct-descr": "\u003cp\u003eRepresents an agent.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Agent",
        "fct-package": "aivika",
        "fct-signature": "data",
        "fct-source": "src/Simulation-Aivika-Agent.html#Agent",
        "fct-type": "data",
        "title": "Agent"
      },
      "index": {
        "description": "Represents an agent",
        "hierarchy": "Simulation Aivika Agent",
        "module": "Simulation.Aivika.Agent",
        "name": "Agent",
        "normalized": "",
        "package": "aivika",
        "partial": "Agent",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Agent.html#t:AgentState",
      "description": {
        "fct-descr": "\u003cp\u003eRepresents the agent state.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Agent",
        "fct-package": "aivika",
        "fct-signature": "data",
        "fct-source": "src/Simulation-Aivika-Agent.html#AgentState",
        "fct-type": "data",
        "title": "AgentState"
      },
      "index": {
        "description": "Represents the agent state",
        "hierarchy": "Simulation Aivika Agent",
        "module": "Simulation.Aivika.Agent",
        "name": "AgentState",
        "normalized": "",
        "package": "aivika",
        "partial": "Agent State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Agent.html#v:activateState",
      "description": {
        "fct-descr": "\u003cp\u003eSelect the next downmost active state. The activation is repeated while\n there is the transition state defined by \u003ccode\u003e\u003ca\u003esetStateTransition\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Agent",
        "fct-package": "aivika",
        "fct-signature": "AgentState -\u003e Event ()",
        "fct-source": "src/Simulation-Aivika-Agent.html#activateState",
        "fct-type": "function",
        "title": "activateState"
      },
      "index": {
        "description": "Select the next downmost active state The activation is repeated while there is the transition state defined by setStateTransition",
        "hierarchy": "Simulation Aivika Agent",
        "module": "Simulation.Aivika.Agent",
        "name": "activateState",
        "normalized": "AgentState-\u003eEvent()",
        "package": "aivika",
        "partial": "State",
        "signature": "AgentState-\u003eEvent()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Agent.html#v:addTimeout",
      "description": {
        "fct-descr": "\u003cp\u003eAdd to the state a timeout handler that will be actuated \n in the specified time period, while the state remains active.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Agent",
        "fct-package": "aivika",
        "fct-signature": "AgentState -\u003e Double -\u003e Event () -\u003e Event ()",
        "fct-source": "src/Simulation-Aivika-Agent.html#addTimeout",
        "fct-type": "function",
        "title": "addTimeout"
      },
      "index": {
        "description": "Add to the state timeout handler that will be actuated in the specified time period while the state remains active",
        "hierarchy": "Simulation Aivika Agent",
        "module": "Simulation.Aivika.Agent",
        "name": "addTimeout",
        "normalized": "AgentState-\u003eDouble-\u003eEvent()-\u003eEvent()",
        "package": "aivika",
        "partial": "Timeout",
        "signature": "AgentState-\u003eDouble-\u003eEvent()-\u003eEvent()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Agent.html#v:addTimer",
      "description": {
        "fct-descr": "\u003cp\u003eAdd to the state a timer handler that will be actuated\n in the specified time period and then repeated again many times,\n while the state remains active.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Agent",
        "fct-package": "aivika",
        "fct-signature": "AgentState -\u003e Event Double -\u003e Event () -\u003e Event ()",
        "fct-source": "src/Simulation-Aivika-Agent.html#addTimer",
        "fct-type": "function",
        "title": "addTimer"
      },
      "index": {
        "description": "Add to the state timer handler that will be actuated in the specified time period and then repeated again many times while the state remains active",
        "hierarchy": "Simulation Aivika Agent",
        "module": "Simulation.Aivika.Agent",
        "name": "addTimer",
        "normalized": "AgentState-\u003eEvent Double-\u003eEvent()-\u003eEvent()",
        "package": "aivika",
        "partial": "Timer",
        "signature": "AgentState-\u003eEvent Double-\u003eEvent()-\u003eEvent()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Agent.html#v:agentState",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the selected downmost active state.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Agent",
        "fct-package": "aivika",
        "fct-signature": "Agent -\u003e Event (Maybe AgentState)",
        "fct-source": "src/Simulation-Aivika-Agent.html#agentState",
        "fct-type": "function",
        "title": "agentState"
      },
      "index": {
        "description": "Return the selected downmost active state",
        "hierarchy": "Simulation Aivika Agent",
        "module": "Simulation.Aivika.Agent",
        "name": "agentState",
        "normalized": "Agent-\u003eEvent(Maybe AgentState)",
        "package": "aivika",
        "partial": "State",
        "signature": "Agent-\u003eEvent(Maybe AgentState)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Agent.html#v:agentStateChanged",
      "description": {
        "fct-descr": "\u003cp\u003eReturn a signal that notifies about every change of the state.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Agent",
        "fct-package": "aivika",
        "fct-signature": "Agent -\u003e Signal (Maybe AgentState)",
        "fct-source": "src/Simulation-Aivika-Agent.html#agentStateChanged",
        "fct-type": "function",
        "title": "agentStateChanged"
      },
      "index": {
        "description": "Return signal that notifies about every change of the state",
        "hierarchy": "Simulation Aivika Agent",
        "module": "Simulation.Aivika.Agent",
        "name": "agentStateChanged",
        "normalized": "Agent-\u003eSignal(Maybe AgentState)",
        "package": "aivika",
        "partial": "State Changed",
        "signature": "Agent-\u003eSignal(Maybe AgentState)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Agent.html#v:agentStateChanged_",
      "description": {
        "fct-descr": "\u003cp\u003eReturn a signal that notifies about every change of the state.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Agent",
        "fct-package": "aivika",
        "fct-signature": "Agent -\u003e Signal ()",
        "fct-source": "src/Simulation-Aivika-Agent.html#agentStateChanged_",
        "fct-type": "function",
        "title": "agentStateChanged_"
      },
      "index": {
        "description": "Return signal that notifies about every change of the state",
        "hierarchy": "Simulation Aivika Agent",
        "module": "Simulation.Aivika.Agent",
        "name": "agentStateChanged_",
        "normalized": "Agent-\u003eSignal()",
        "package": "aivika",
        "partial": "State Changed",
        "signature": "Agent-\u003eSignal()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Agent.html#v:newAgent",
      "description": {
        "fct-descr": "\u003cp\u003eCreate an agent.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Agent",
        "fct-package": "aivika",
        "fct-signature": "Simulation Agent",
        "fct-source": "src/Simulation-Aivika-Agent.html#newAgent",
        "fct-type": "function",
        "title": "newAgent"
      },
      "index": {
        "description": "Create an agent",
        "hierarchy": "Simulation Aivika Agent",
        "module": "Simulation.Aivika.Agent",
        "name": "newAgent",
        "normalized": "",
        "package": "aivika",
        "partial": "Agent",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Agent.html#v:newState",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new state.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Agent",
        "fct-package": "aivika",
        "fct-signature": "Agent -\u003e Simulation AgentState",
        "fct-source": "src/Simulation-Aivika-Agent.html#newState",
        "fct-type": "function",
        "title": "newState"
      },
      "index": {
        "description": "Create new state",
        "hierarchy": "Simulation Aivika Agent",
        "module": "Simulation.Aivika.Agent",
        "name": "newState",
        "normalized": "Agent-\u003eSimulation AgentState",
        "package": "aivika",
        "partial": "State",
        "signature": "Agent-\u003eSimulation AgentState"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Agent.html#v:newSubstate",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a child state.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Agent",
        "fct-package": "aivika",
        "fct-signature": "AgentState -\u003e Simulation AgentState",
        "fct-source": "src/Simulation-Aivika-Agent.html#newSubstate",
        "fct-type": "function",
        "title": "newSubstate"
      },
      "index": {
        "description": "Create child state",
        "hierarchy": "Simulation Aivika Agent",
        "module": "Simulation.Aivika.Agent",
        "name": "newSubstate",
        "normalized": "AgentState-\u003eSimulation AgentState",
        "package": "aivika",
        "partial": "Substate",
        "signature": "AgentState-\u003eSimulation AgentState"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Agent.html#v:setStateActivation",
      "description": {
        "fct-descr": "\u003cp\u003eSet the activation computation for the specified state.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Agent",
        "fct-package": "aivika",
        "fct-signature": "AgentState -\u003e Event () -\u003e Simulation ()",
        "fct-source": "src/Simulation-Aivika-Agent.html#setStateActivation",
        "fct-type": "function",
        "title": "setStateActivation"
      },
      "index": {
        "description": "Set the activation computation for the specified state",
        "hierarchy": "Simulation Aivika Agent",
        "module": "Simulation.Aivika.Agent",
        "name": "setStateActivation",
        "normalized": "AgentState-\u003eEvent()-\u003eSimulation()",
        "package": "aivika",
        "partial": "State Activation",
        "signature": "AgentState-\u003eEvent()-\u003eSimulation()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Agent.html#v:setStateDeactivation",
      "description": {
        "fct-descr": "\u003cp\u003eSet the deactivation computation for the specified state.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Agent",
        "fct-package": "aivika",
        "fct-signature": "AgentState -\u003e Event () -\u003e Simulation ()",
        "fct-source": "src/Simulation-Aivika-Agent.html#setStateDeactivation",
        "fct-type": "function",
        "title": "setStateDeactivation"
      },
      "index": {
        "description": "Set the deactivation computation for the specified state",
        "hierarchy": "Simulation Aivika Agent",
        "module": "Simulation.Aivika.Agent",
        "name": "setStateDeactivation",
        "normalized": "AgentState-\u003eEvent()-\u003eSimulation()",
        "package": "aivika",
        "partial": "State Deactivation",
        "signature": "AgentState-\u003eEvent()-\u003eSimulation()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Agent.html#v:setStateTransition",
      "description": {
        "fct-descr": "\u003cp\u003eSet the transition state which will be next and which is used only\n when activating the state directly with help of \u003ccode\u003e\u003ca\u003eactivateState\u003c/a\u003e\u003c/code\u003e.\n If the state was activated intermediately, when activating directly\n another state, then this computation is not used.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Agent",
        "fct-package": "aivika",
        "fct-signature": "AgentState -\u003e Event (Maybe AgentState) -\u003e Simulation ()",
        "fct-source": "src/Simulation-Aivika-Agent.html#setStateTransition",
        "fct-type": "function",
        "title": "setStateTransition"
      },
      "index": {
        "description": "Set the transition state which will be next and which is used only when activating the state directly with help of activateState If the state was activated intermediately when activating directly another state then this computation is not used",
        "hierarchy": "Simulation Aivika Agent",
        "module": "Simulation.Aivika.Agent",
        "name": "setStateTransition",
        "normalized": "AgentState-\u003eEvent(Maybe AgentState)-\u003eSimulation()",
        "package": "aivika",
        "partial": "State Transition",
        "signature": "AgentState-\u003eEvent(Maybe AgentState)-\u003eSimulation()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Agent.html#v:stateAgent",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the corresponded agent.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Agent",
        "fct-package": "aivika",
        "fct-signature": "AgentState -\u003e Agent",
        "fct-source": "src/Simulation-Aivika-Agent.html#stateAgent",
        "fct-type": "function",
        "title": "stateAgent"
      },
      "index": {
        "description": "Return the corresponded agent",
        "hierarchy": "Simulation Aivika Agent",
        "module": "Simulation.Aivika.Agent",
        "name": "stateAgent",
        "normalized": "AgentState-\u003eAgent",
        "package": "aivika",
        "partial": "Agent",
        "signature": "AgentState-\u003eAgent"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Agent.html#v:stateParent",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the parent state or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Agent",
        "fct-package": "aivika",
        "fct-signature": "AgentState -\u003e Maybe AgentState",
        "fct-source": "src/Simulation-Aivika-Agent.html#stateParent",
        "fct-type": "function",
        "title": "stateParent"
      },
      "index": {
        "description": "Return the parent state or Nothing",
        "hierarchy": "Simulation Aivika Agent",
        "module": "Simulation.Aivika.Agent",
        "name": "stateParent",
        "normalized": "AgentState-\u003eMaybe AgentState",
        "package": "aivika",
        "partial": "Parent",
        "signature": "AgentState-\u003eMaybe AgentState"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Cont.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTested with: GHC 7.6.3\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eCont\u003c/a\u003e\u003c/code\u003e monad is a variation of the standard Cont monad \n and F# async workflow, where the result of applying \n the continuations is the \u003ccode\u003e\u003ca\u003eEvent\u003c/a\u003e\u003c/code\u003e computation.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Simulation.Aivika.Cont",
        "fct-package": "aivika",
        "fct-signature": "module",
        "fct-source": "src/Simulation-Aivika-Cont.html",
        "fct-type": "module",
        "title": "Cont"
      },
      "index": {
        "description": "Tested with GHC The Cont monad is variation of the standard Cont monad and async workflow where the result of applying the continuations is the Event computation",
        "hierarchy": "Simulation Aivika Cont",
        "module": "Simulation.Aivika.Cont",
        "name": "Cont",
        "normalized": "",
        "package": "aivika",
        "partial": "Cont",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Cont.html#t:Cont",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eCont\u003c/a\u003e\u003c/code\u003e type is similar to the standard Cont monad \n and F# async workflow but only the result of applying\n the continuations return the \u003ccode\u003e\u003ca\u003eEvent\u003c/a\u003e\u003c/code\u003e computation.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Cont",
        "fct-package": "aivika",
        "fct-signature": "data",
        "fct-source": "src/Simulation-Aivika-Internal-Cont.html#Cont",
        "fct-type": "data",
        "title": "Cont"
      },
      "index": {
        "description": "The Cont type is similar to the standard Cont monad and async workflow but only the result of applying the continuations return the Event computation",
        "hierarchy": "Simulation Aivika Cont",
        "module": "Simulation.Aivika.Cont",
        "name": "Cont",
        "normalized": "",
        "package": "aivika",
        "partial": "Cont",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-DoubleLinkedList.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTested with: GHC 7.6.3\n\u003c/p\u003e\u003cp\u003eAn imperative double-linked list.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Simulation.Aivika.DoubleLinkedList",
        "fct-package": "aivika",
        "fct-signature": "module",
        "fct-source": "src/Simulation-Aivika-DoubleLinkedList.html",
        "fct-type": "module",
        "title": "DoubleLinkedList"
      },
      "index": {
        "description": "Tested with GHC An imperative double-linked list",
        "hierarchy": "Simulation Aivika DoubleLinkedList",
        "module": "Simulation.Aivika.DoubleLinkedList",
        "name": "DoubleLinkedList",
        "normalized": "",
        "package": "aivika",
        "partial": "Double Linked List",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-DoubleLinkedList.html#t:DoubleLinkedList",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eDoubleLinkedList\u003c/a\u003e\u003c/code\u003e type represents an imperative double-linked list.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.DoubleLinkedList",
        "fct-package": "aivika",
        "fct-signature": "data",
        "fct-source": "src/Simulation-Aivika-DoubleLinkedList.html#DoubleLinkedList",
        "fct-type": "data",
        "title": "DoubleLinkedList"
      },
      "index": {
        "description": "The DoubleLinkedList type represents an imperative double-linked list",
        "hierarchy": "Simulation Aivika DoubleLinkedList",
        "module": "Simulation.Aivika.DoubleLinkedList",
        "name": "DoubleLinkedList",
        "normalized": "",
        "package": "aivika",
        "partial": "Double Linked List",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-DoubleLinkedList.html#v:listAddLast",
      "description": {
        "fct-descr": "\u003cp\u003eAdd a new element to the end.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.DoubleLinkedList",
        "fct-package": "aivika",
        "fct-signature": "DoubleLinkedList a -\u003e a -\u003e IO ()",
        "fct-source": "src/Simulation-Aivika-DoubleLinkedList.html#listAddLast",
        "fct-type": "function",
        "title": "listAddLast"
      },
      "index": {
        "description": "Add new element to the end",
        "hierarchy": "Simulation Aivika DoubleLinkedList",
        "module": "Simulation.Aivika.DoubleLinkedList",
        "name": "listAddLast",
        "normalized": "DoubleLinkedList a-\u003ea-\u003eIO()",
        "package": "aivika",
        "partial": "Add Last",
        "signature": "DoubleLinkedList a-\u003ea-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-DoubleLinkedList.html#v:listCount",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the number of elements in the list.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.DoubleLinkedList",
        "fct-package": "aivika",
        "fct-signature": "DoubleLinkedList a -\u003e IO Int",
        "fct-source": "src/Simulation-Aivika-DoubleLinkedList.html#listCount",
        "fct-type": "function",
        "title": "listCount"
      },
      "index": {
        "description": "Return the number of elements in the list",
        "hierarchy": "Simulation Aivika DoubleLinkedList",
        "module": "Simulation.Aivika.DoubleLinkedList",
        "name": "listCount",
        "normalized": "DoubleLinkedList a-\u003eIO Int",
        "package": "aivika",
        "partial": "Count",
        "signature": "DoubleLinkedList a-\u003eIO Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-DoubleLinkedList.html#v:listFirst",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the first element.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.DoubleLinkedList",
        "fct-package": "aivika",
        "fct-signature": "DoubleLinkedList a -\u003e IO a",
        "fct-source": "src/Simulation-Aivika-DoubleLinkedList.html#listFirst",
        "fct-type": "function",
        "title": "listFirst"
      },
      "index": {
        "description": "Return the first element",
        "hierarchy": "Simulation Aivika DoubleLinkedList",
        "module": "Simulation.Aivika.DoubleLinkedList",
        "name": "listFirst",
        "normalized": "DoubleLinkedList a-\u003eIO a",
        "package": "aivika",
        "partial": "First",
        "signature": "DoubleLinkedList a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-DoubleLinkedList.html#v:listInsertFirst",
      "description": {
        "fct-descr": "\u003cp\u003eInsert a new element in the beginning.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.DoubleLinkedList",
        "fct-package": "aivika",
        "fct-signature": "DoubleLinkedList a -\u003e a -\u003e IO ()",
        "fct-source": "src/Simulation-Aivika-DoubleLinkedList.html#listInsertFirst",
        "fct-type": "function",
        "title": "listInsertFirst"
      },
      "index": {
        "description": "Insert new element in the beginning",
        "hierarchy": "Simulation Aivika DoubleLinkedList",
        "module": "Simulation.Aivika.DoubleLinkedList",
        "name": "listInsertFirst",
        "normalized": "DoubleLinkedList a-\u003ea-\u003eIO()",
        "package": "aivika",
        "partial": "Insert First",
        "signature": "DoubleLinkedList a-\u003ea-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-DoubleLinkedList.html#v:listLast",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the last element.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.DoubleLinkedList",
        "fct-package": "aivika",
        "fct-signature": "DoubleLinkedList a -\u003e IO a",
        "fct-source": "src/Simulation-Aivika-DoubleLinkedList.html#listLast",
        "fct-type": "function",
        "title": "listLast"
      },
      "index": {
        "description": "Return the last element",
        "hierarchy": "Simulation Aivika DoubleLinkedList",
        "module": "Simulation.Aivika.DoubleLinkedList",
        "name": "listLast",
        "normalized": "DoubleLinkedList a-\u003eIO a",
        "package": "aivika",
        "partial": "Last",
        "signature": "DoubleLinkedList a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-DoubleLinkedList.html#v:listNull",
      "description": {
        "fct-descr": "\u003cp\u003eTest whether the list is empty.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.DoubleLinkedList",
        "fct-package": "aivika",
        "fct-signature": "DoubleLinkedList a -\u003e IO Bool",
        "fct-source": "src/Simulation-Aivika-DoubleLinkedList.html#listNull",
        "fct-type": "function",
        "title": "listNull"
      },
      "index": {
        "description": "Test whether the list is empty",
        "hierarchy": "Simulation Aivika DoubleLinkedList",
        "module": "Simulation.Aivika.DoubleLinkedList",
        "name": "listNull",
        "normalized": "DoubleLinkedList a-\u003eIO Bool",
        "package": "aivika",
        "partial": "Null",
        "signature": "DoubleLinkedList a-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-DoubleLinkedList.html#v:listRemoveFirst",
      "description": {
        "fct-descr": "\u003cp\u003eRemove the first element.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.DoubleLinkedList",
        "fct-package": "aivika",
        "fct-signature": "DoubleLinkedList a -\u003e IO ()",
        "fct-source": "src/Simulation-Aivika-DoubleLinkedList.html#listRemoveFirst",
        "fct-type": "function",
        "title": "listRemoveFirst"
      },
      "index": {
        "description": "Remove the first element",
        "hierarchy": "Simulation Aivika DoubleLinkedList",
        "module": "Simulation.Aivika.DoubleLinkedList",
        "name": "listRemoveFirst",
        "normalized": "DoubleLinkedList a-\u003eIO()",
        "package": "aivika",
        "partial": "Remove First",
        "signature": "DoubleLinkedList a-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-DoubleLinkedList.html#v:listRemoveLast",
      "description": {
        "fct-descr": "\u003cp\u003eRemove the last element.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.DoubleLinkedList",
        "fct-package": "aivika",
        "fct-signature": "DoubleLinkedList a -\u003e IO ()",
        "fct-source": "src/Simulation-Aivika-DoubleLinkedList.html#listRemoveLast",
        "fct-type": "function",
        "title": "listRemoveLast"
      },
      "index": {
        "description": "Remove the last element",
        "hierarchy": "Simulation Aivika DoubleLinkedList",
        "module": "Simulation.Aivika.DoubleLinkedList",
        "name": "listRemoveLast",
        "normalized": "DoubleLinkedList a-\u003eIO()",
        "package": "aivika",
        "partial": "Remove Last",
        "signature": "DoubleLinkedList a-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-DoubleLinkedList.html#v:newList",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new list.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.DoubleLinkedList",
        "fct-package": "aivika",
        "fct-signature": "IO (DoubleLinkedList a)",
        "fct-source": "src/Simulation-Aivika-DoubleLinkedList.html#newList",
        "fct-type": "function",
        "title": "newList"
      },
      "index": {
        "description": "Create new list",
        "hierarchy": "Simulation Aivika DoubleLinkedList",
        "module": "Simulation.Aivika.DoubleLinkedList",
        "name": "newList",
        "normalized": "",
        "package": "aivika",
        "partial": "List",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Dynamics-Fold.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTested with: GHC 7.6.3\n\u003c/p\u003e\u003cp\u003eThis module defines the fold functions that allows traversing the values of\n any \u003ccode\u003e\u003ca\u003eDynamics\u003c/a\u003e\u003c/code\u003e computation in the integration time points.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Simulation.Aivika.Dynamics.Fold",
        "fct-package": "aivika",
        "fct-signature": "module",
        "fct-source": "src/Simulation-Aivika-Dynamics-Fold.html",
        "fct-type": "module",
        "title": "Fold"
      },
      "index": {
        "description": "Tested with GHC This module defines the fold functions that allows traversing the values of any Dynamics computation in the integration time points",
        "hierarchy": "Simulation Aivika Dynamics Fold",
        "module": "Simulation.Aivika.Dynamics.Fold",
        "name": "Fold",
        "normalized": "",
        "package": "aivika",
        "partial": "Fold",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Dynamics-Fold.html#v:foldDynamics",
      "description": {
        "fct-descr": "\u003cp\u003eLike the standard \u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e function but applied to values in \n the integration time points. The accumulator values are transformed\n according to the first argument, which should be either function\n \u003ccode\u003e\u003ca\u003ememo0Dynamics\u003c/a\u003e\u003c/code\u003e or its unboxed version.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Dynamics.Fold",
        "fct-package": "aivika",
        "fct-signature": "(Dynamics a -\u003e Simulation (Dynamics a)) -\u003e (a -\u003e b -\u003e a) -\u003e a -\u003e Dynamics b -\u003e Simulation (Dynamics a)",
        "fct-source": "src/Simulation-Aivika-Dynamics-Fold.html#foldDynamics",
        "fct-type": "function",
        "title": "foldDynamics"
      },
      "index": {
        "description": "Like the standard foldl function but applied to values in the integration time points The accumulator values are transformed according to the first argument which should be either function memo0Dynamics or its unboxed version",
        "hierarchy": "Simulation Aivika Dynamics Fold",
        "module": "Simulation.Aivika.Dynamics.Fold",
        "name": "foldDynamics",
        "normalized": "(Dynamics a-\u003eSimulation(Dynamics a))-\u003e(a-\u003eb-\u003ea)-\u003ea-\u003eDynamics b-\u003eSimulation(Dynamics a)",
        "package": "aivika",
        "partial": "Dynamics",
        "signature": "(Dynamics a-\u003eSimulation(Dynamics a))-\u003e(a-\u003eb-\u003ea)-\u003ea-\u003eDynamics b-\u003eSimulation(Dynamics a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Dynamics-Fold.html#v:foldDynamics1",
      "description": {
        "fct-descr": "\u003cp\u003eLike the standard \u003ccode\u003e\u003ca\u003efoldl1\u003c/a\u003e\u003c/code\u003e function but applied to values in \n the integration time points. The accumulator values are transformed\n according to the first argument, which should be either function \n \u003ccode\u003e\u003ca\u003ememo0Dynamics\u003c/a\u003e\u003c/code\u003e or its unboxed version.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Dynamics.Fold",
        "fct-package": "aivika",
        "fct-signature": "(Dynamics a -\u003e Simulation (Dynamics a)) -\u003e (a -\u003e a -\u003e a) -\u003e Dynamics a -\u003e Simulation (Dynamics a)",
        "fct-source": "src/Simulation-Aivika-Dynamics-Fold.html#foldDynamics1",
        "fct-type": "function",
        "title": "foldDynamics1"
      },
      "index": {
        "description": "Like the standard foldl1 function but applied to values in the integration time points The accumulator values are transformed according to the first argument which should be either function memo0Dynamics or its unboxed version",
        "hierarchy": "Simulation Aivika Dynamics Fold",
        "module": "Simulation.Aivika.Dynamics.Fold",
        "name": "foldDynamics1",
        "normalized": "(Dynamics a-\u003eSimulation(Dynamics a))-\u003e(a-\u003ea-\u003ea)-\u003eDynamics a-\u003eSimulation(Dynamics a)",
        "package": "aivika",
        "partial": "Dynamics",
        "signature": "(Dynamics a-\u003eSimulation(Dynamics a))-\u003e(a-\u003ea-\u003ea)-\u003eDynamics a-\u003eSimulation(Dynamics a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Dynamics-Interpolate.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTested with: GHC 7.6.3\n\u003c/p\u003e\u003cp\u003eThis module defines interpolation functions.\n These functions complement the memoization, possibly except for \n the \u003ccode\u003e\u003ca\u003einitDynamics\u003c/a\u003e\u003c/code\u003e function which is useful to get an initial \n value of any dynamic process.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Simulation.Aivika.Dynamics.Interpolate",
        "fct-package": "aivika",
        "fct-signature": "module",
        "fct-source": "src/Simulation-Aivika-Dynamics-Interpolate.html",
        "fct-type": "module",
        "title": "Interpolate"
      },
      "index": {
        "description": "Tested with GHC This module defines interpolation functions These functions complement the memoization possibly except for the initDynamics function which is useful to get an initial value of any dynamic process",
        "hierarchy": "Simulation Aivika Dynamics Interpolate",
        "module": "Simulation.Aivika.Dynamics.Interpolate",
        "name": "Interpolate",
        "normalized": "",
        "package": "aivika",
        "partial": "Interpolate",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Dynamics-Interpolate.html#v:discreteDynamics",
      "description": {
        "fct-descr": "\u003cp\u003eDiscretize the computation in the integration time points.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Dynamics.Interpolate",
        "fct-package": "aivika",
        "fct-signature": "Dynamics a -\u003e Dynamics a",
        "fct-source": "src/Simulation-Aivika-Dynamics-Interpolate.html#discreteDynamics",
        "fct-type": "function",
        "title": "discreteDynamics"
      },
      "index": {
        "description": "Discretize the computation in the integration time points",
        "hierarchy": "Simulation Aivika Dynamics Interpolate",
        "module": "Simulation.Aivika.Dynamics.Interpolate",
        "name": "discreteDynamics",
        "normalized": "Dynamics a-\u003eDynamics a",
        "package": "aivika",
        "partial": "Dynamics",
        "signature": "Dynamics a-\u003eDynamics a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Dynamics-Interpolate.html#v:initDynamics",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the initial value.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Dynamics.Interpolate",
        "fct-package": "aivika",
        "fct-signature": "Dynamics a -\u003e Dynamics a",
        "fct-source": "src/Simulation-Aivika-Dynamics-Interpolate.html#initDynamics",
        "fct-type": "function",
        "title": "initDynamics"
      },
      "index": {
        "description": "Return the initial value",
        "hierarchy": "Simulation Aivika Dynamics Interpolate",
        "module": "Simulation.Aivika.Dynamics.Interpolate",
        "name": "initDynamics",
        "normalized": "Dynamics a-\u003eDynamics a",
        "package": "aivika",
        "partial": "Dynamics",
        "signature": "Dynamics a-\u003eDynamics a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Dynamics-Interpolate.html#v:interpolateDynamics",
      "description": {
        "fct-descr": "\u003cp\u003eInterpolate the computation based on the integration time points only.\n Unlike the \u003ccode\u003e\u003ca\u003ediscreteDynamics\u003c/a\u003e\u003c/code\u003e function it knows about the intermediate \n time points that are used in the Runge-Kutta method.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Dynamics.Interpolate",
        "fct-package": "aivika",
        "fct-signature": "Dynamics a -\u003e Dynamics a",
        "fct-source": "src/Simulation-Aivika-Dynamics-Interpolate.html#interpolateDynamics",
        "fct-type": "function",
        "title": "interpolateDynamics"
      },
      "index": {
        "description": "Interpolate the computation based on the integration time points only Unlike the discreteDynamics function it knows about the intermediate time points that are used in the Runge-Kutta method",
        "hierarchy": "Simulation Aivika Dynamics Interpolate",
        "module": "Simulation.Aivika.Dynamics.Interpolate",
        "name": "interpolateDynamics",
        "normalized": "Dynamics a-\u003eDynamics a",
        "package": "aivika",
        "partial": "Dynamics",
        "signature": "Dynamics a-\u003eDynamics a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Dynamics-Memo-Unboxed.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTested with: GHC 7.6.3\n\u003c/p\u003e\u003cp\u003eThis module defines the unboxed memo functions. The memoization creates such \u003ccode\u003e\u003ca\u003eDynamics\u003c/a\u003e\u003c/code\u003e\n computations, which values are cached in the integration time points. Then\n these values are interpolated in all other time points.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Simulation.Aivika.Dynamics.Memo.Unboxed",
        "fct-package": "aivika",
        "fct-signature": "module",
        "fct-source": "src/Simulation-Aivika-Dynamics-Memo-Unboxed.html",
        "fct-type": "module",
        "title": "Unboxed"
      },
      "index": {
        "description": "Tested with GHC This module defines the unboxed memo functions The memoization creates such Dynamics computations which values are cached in the integration time points Then these values are interpolated in all other time points",
        "hierarchy": "Simulation Aivika Dynamics Memo Unboxed",
        "module": "Simulation.Aivika.Dynamics.Memo.Unboxed",
        "name": "Unboxed",
        "normalized": "",
        "package": "aivika",
        "partial": "Unboxed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Dynamics-Memo-Unboxed.html#v:memo0Dynamics",
      "description": {
        "fct-descr": "\u003cp\u003eMemoize and order the computation in the integration time points using \n the \u003ccode\u003e\u003ca\u003ediscreteDynamics\u003c/a\u003e\u003c/code\u003e interpolation. It consumes less memory than the \u003ccode\u003e\u003ca\u003ememoDynamics\u003c/a\u003e\u003c/code\u003e\n function but it is not aware of the Runge-Kutta method. There is a subtle\n difference when we request for values in the intermediate time points\n that are used by this method to integrate. In general case you should \n prefer the \u003ccode\u003e\u003ca\u003ememo0Dynamics\u003c/a\u003e\u003c/code\u003e function above \u003ccode\u003e\u003ca\u003ememoDynamics\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Dynamics.Memo.Unboxed",
        "fct-package": "aivika",
        "fct-signature": "Dynamics e -\u003e Simulation (Dynamics e)",
        "fct-source": "src/Simulation-Aivika-Dynamics-Memo-Unboxed.html#memo0Dynamics",
        "fct-type": "function",
        "title": "memo0Dynamics"
      },
      "index": {
        "description": "Memoize and order the computation in the integration time points using the discreteDynamics interpolation It consumes less memory than the memoDynamics function but it is not aware of the Runge-Kutta method There is subtle difference when we request for values in the intermediate time points that are used by this method to integrate In general case you should prefer the memo0Dynamics function above memoDynamics",
        "hierarchy": "Simulation Aivika Dynamics Memo Unboxed",
        "module": "Simulation.Aivika.Dynamics.Memo.Unboxed",
        "name": "memo0Dynamics",
        "normalized": "Dynamics a-\u003eSimulation(Dynamics a)",
        "package": "aivika",
        "partial": "Dynamics",
        "signature": "Dynamics e-\u003eSimulation(Dynamics e)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Dynamics-Memo-Unboxed.html#v:memoDynamics",
      "description": {
        "fct-descr": "\u003cp\u003eMemoize and order the computation in the integration time points using \n the interpolation that knows of the Runge-Kutta method.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Dynamics.Memo.Unboxed",
        "fct-package": "aivika",
        "fct-signature": "Dynamics e -\u003e Simulation (Dynamics e)",
        "fct-source": "src/Simulation-Aivika-Dynamics-Memo-Unboxed.html#memoDynamics",
        "fct-type": "function",
        "title": "memoDynamics"
      },
      "index": {
        "description": "Memoize and order the computation in the integration time points using the interpolation that knows of the Runge-Kutta method",
        "hierarchy": "Simulation Aivika Dynamics Memo Unboxed",
        "module": "Simulation.Aivika.Dynamics.Memo.Unboxed",
        "name": "memoDynamics",
        "normalized": "Dynamics a-\u003eSimulation(Dynamics a)",
        "package": "aivika",
        "partial": "Dynamics",
        "signature": "Dynamics e-\u003eSimulation(Dynamics e)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Dynamics-Memo.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTested with: GHC 7.6.3\n\u003c/p\u003e\u003cp\u003eThis module defines memo functions. The memoization creates such \u003ccode\u003e\u003ca\u003eDynamics\u003c/a\u003e\u003c/code\u003e\n computations, which values are cached in the integration time points. Then\n these values are interpolated in all other time points.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Simulation.Aivika.Dynamics.Memo",
        "fct-package": "aivika",
        "fct-signature": "module",
        "fct-source": "src/Simulation-Aivika-Dynamics-Memo.html",
        "fct-type": "module",
        "title": "Memo"
      },
      "index": {
        "description": "Tested with GHC This module defines memo functions The memoization creates such Dynamics computations which values are cached in the integration time points Then these values are interpolated in all other time points",
        "hierarchy": "Simulation Aivika Dynamics Memo",
        "module": "Simulation.Aivika.Dynamics.Memo",
        "name": "Memo",
        "normalized": "",
        "package": "aivika",
        "partial": "Memo",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Dynamics-Memo.html#v:iterateDynamics",
      "description": {
        "fct-descr": "\u003cp\u003eIterate sequentially the dynamic process with side effects in \n the integration time points. It is equivalent to a call of the\n \u003ccode\u003e\u003ca\u003ememo0Dynamics\u003c/a\u003e\u003c/code\u003e function but significantly more efficient, for the array \n is not created.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Dynamics.Memo",
        "fct-package": "aivika",
        "fct-signature": "Dynamics () -\u003e Simulation (Dynamics ())",
        "fct-source": "src/Simulation-Aivika-Dynamics-Memo.html#iterateDynamics",
        "fct-type": "function",
        "title": "iterateDynamics"
      },
      "index": {
        "description": "Iterate sequentially the dynamic process with side effects in the integration time points It is equivalent to call of the memo0Dynamics function but significantly more efficient for the array is not created",
        "hierarchy": "Simulation Aivika Dynamics Memo",
        "module": "Simulation.Aivika.Dynamics.Memo",
        "name": "iterateDynamics",
        "normalized": "Dynamics()-\u003eSimulation(Dynamics())",
        "package": "aivika",
        "partial": "Dynamics",
        "signature": "Dynamics()-\u003eSimulation(Dynamics())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Dynamics-Memo.html#v:memo0Dynamics",
      "description": {
        "fct-descr": "\u003cp\u003eMemoize and order the computation in the integration time points using \n the \u003ccode\u003e\u003ca\u003ediscreteDynamics\u003c/a\u003e\u003c/code\u003e interpolation. It consumes less memory than the \u003ccode\u003e\u003ca\u003ememoDynamics\u003c/a\u003e\u003c/code\u003e\n function but it is not aware of the Runge-Kutta method. There is a subtle\n difference when we request for values in the intermediate time points\n that are used by this method to integrate. In general case you should \n prefer the \u003ccode\u003e\u003ca\u003ememo0Dynamics\u003c/a\u003e\u003c/code\u003e function above \u003ccode\u003e\u003ca\u003ememoDynamics\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Dynamics.Memo",
        "fct-package": "aivika",
        "fct-signature": "Dynamics e -\u003e Simulation (Dynamics e)",
        "fct-source": "src/Simulation-Aivika-Dynamics-Memo.html#memo0Dynamics",
        "fct-type": "function",
        "title": "memo0Dynamics"
      },
      "index": {
        "description": "Memoize and order the computation in the integration time points using the discreteDynamics interpolation It consumes less memory than the memoDynamics function but it is not aware of the Runge-Kutta method There is subtle difference when we request for values in the intermediate time points that are used by this method to integrate In general case you should prefer the memo0Dynamics function above memoDynamics",
        "hierarchy": "Simulation Aivika Dynamics Memo",
        "module": "Simulation.Aivika.Dynamics.Memo",
        "name": "memo0Dynamics",
        "normalized": "Dynamics a-\u003eSimulation(Dynamics a)",
        "package": "aivika",
        "partial": "Dynamics",
        "signature": "Dynamics e-\u003eSimulation(Dynamics e)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Dynamics-Memo.html#v:memoDynamics",
      "description": {
        "fct-descr": "\u003cp\u003eMemoize and order the computation in the integration time points using \n the interpolation that knows of the Runge-Kutta method.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Dynamics.Memo",
        "fct-package": "aivika",
        "fct-signature": "Dynamics e -\u003e Simulation (Dynamics e)",
        "fct-source": "src/Simulation-Aivika-Dynamics-Memo.html#memoDynamics",
        "fct-type": "function",
        "title": "memoDynamics"
      },
      "index": {
        "description": "Memoize and order the computation in the integration time points using the interpolation that knows of the Runge-Kutta method",
        "hierarchy": "Simulation Aivika Dynamics Memo",
        "module": "Simulation.Aivika.Dynamics.Memo",
        "name": "memoDynamics",
        "normalized": "Dynamics a-\u003eSimulation(Dynamics a)",
        "package": "aivika",
        "partial": "Dynamics",
        "signature": "Dynamics e-\u003eSimulation(Dynamics e)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Dynamics-Random.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTested with: GHC 7.6.3\n\u003c/p\u003e\u003cp\u003eBelow are defined random functions that return the \u003ccode\u003e\u003ca\u003eDynamics\u003c/a\u003e\u003c/code\u003e computations. \n The values are initially defined in the integration time points and then\n they are passed in to the \u003ccode\u003e\u003ca\u003ememo0Dynamics\u003c/a\u003e\u003c/code\u003e function to memoize and then interpolate.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Simulation.Aivika.Dynamics.Random",
        "fct-package": "aivika",
        "fct-signature": "module",
        "fct-source": "src/Simulation-Aivika-Dynamics-Random.html",
        "fct-type": "module",
        "title": "Random"
      },
      "index": {
        "description": "Tested with GHC Below are defined random functions that return the Dynamics computations The values are initially defined in the integration time points and then they are passed in to the memo0Dynamics function to memoize and then interpolate",
        "hierarchy": "Simulation Aivika Dynamics Random",
        "module": "Simulation.Aivika.Dynamics.Random",
        "name": "Random",
        "normalized": "",
        "package": "aivika",
        "partial": "Random",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Dynamics-Random.html#v:newNormalDynamics",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the normal random numbers in the integration time points.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Dynamics.Random",
        "fct-package": "aivika",
        "fct-signature": "Dynamics Double-\u003e Dynamics Double-\u003e Simulation (Dynamics Double)",
        "fct-type": "function",
        "title": "newNormalDynamics"
      },
      "index": {
        "description": "Return the normal random numbers in the integration time points",
        "hierarchy": "Simulation Aivika Dynamics Random",
        "module": "Simulation.Aivika.Dynamics.Random",
        "name": "newNormalDynamics",
        "normalized": "Dynamics Double-\u003eDynamics Double-\u003eSimulation(Dynamics Double)",
        "package": "aivika",
        "partial": "Normal Dynamics",
        "signature": "Dynamics Double-\u003eDynamics Double-\u003eSimulation(Dynamics Double)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Dynamics-Random.html#v:newRandomDynamics",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the uniform random numbers in the integration time points.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Dynamics.Random",
        "fct-package": "aivika",
        "fct-signature": "Dynamics Double-\u003e Dynamics Double-\u003e Simulation (Dynamics Double)",
        "fct-type": "function",
        "title": "newRandomDynamics"
      },
      "index": {
        "description": "Return the uniform random numbers in the integration time points",
        "hierarchy": "Simulation Aivika Dynamics Random",
        "module": "Simulation.Aivika.Dynamics.Random",
        "name": "newRandomDynamics",
        "normalized": "Dynamics Double-\u003eDynamics Double-\u003eSimulation(Dynamics Double)",
        "package": "aivika",
        "partial": "Random Dynamics",
        "signature": "Dynamics Double-\u003eDynamics Double-\u003eSimulation(Dynamics Double)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Dynamics.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTested with: GHC 7.6.3\n\u003c/p\u003e\u003cp\u003eThe module defines the \u003ccode\u003e\u003ca\u003eDynamics\u003c/a\u003e\u003c/code\u003e monad representing a time varying polymorphic function. \n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Simulation.Aivika.Dynamics",
        "fct-package": "aivika",
        "fct-signature": "module",
        "fct-source": "src/Simulation-Aivika-Dynamics.html",
        "fct-type": "module",
        "title": "Dynamics"
      },
      "index": {
        "description": "Tested with GHC The module defines the Dynamics monad representing time varying polymorphic function",
        "hierarchy": "Simulation Aivika Dynamics",
        "module": "Simulation.Aivika.Dynamics",
        "name": "Dynamics",
        "normalized": "",
        "package": "aivika",
        "partial": "Dynamics",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Dynamics.html#t:Dynamics",
      "description": {
        "fct-descr": "\u003cp\u003eA value in the \u003ccode\u003e\u003ca\u003eDynamics\u003c/a\u003e\u003c/code\u003e monad represents a polymorphic time varying function.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Dynamics",
        "fct-package": "aivika",
        "fct-signature": "data",
        "fct-source": "src/Simulation-Aivika-Internal-Dynamics.html#Dynamics",
        "fct-type": "data",
        "title": "Dynamics"
      },
      "index": {
        "description": "value in the Dynamics monad represents polymorphic time varying function",
        "hierarchy": "Simulation Aivika Dynamics",
        "module": "Simulation.Aivika.Dynamics",
        "name": "Dynamics",
        "normalized": "",
        "package": "aivika",
        "partial": "Dynamics",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Dynamics.html#t:DynamicsLift",
      "description": {
        "fct-descr": "\u003cp\u003eA type class to lift the \u003ccode\u003e\u003ca\u003eDynamics\u003c/a\u003e\u003c/code\u003e computations to other monads.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Dynamics",
        "fct-package": "aivika",
        "fct-signature": "class",
        "fct-source": "src/Simulation-Aivika-Internal-Dynamics.html#DynamicsLift",
        "fct-type": "class",
        "title": "DynamicsLift"
      },
      "index": {
        "description": "type class to lift the Dynamics computations to other monads",
        "hierarchy": "Simulation Aivika Dynamics",
        "module": "Simulation.Aivika.Dynamics",
        "name": "DynamicsLift",
        "normalized": "",
        "package": "aivika",
        "partial": "Dynamics Lift",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Dynamics.html#v:catchDynamics",
      "description": {
        "fct-descr": "\u003cp\u003eException handling within \u003ccode\u003e\u003ca\u003eDynamics\u003c/a\u003e\u003c/code\u003e computations.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Dynamics",
        "fct-package": "aivika",
        "fct-signature": "Dynamics a -\u003e (IOException -\u003e Dynamics a) -\u003e Dynamics a",
        "fct-source": "src/Simulation-Aivika-Internal-Dynamics.html#catchDynamics",
        "fct-type": "function",
        "title": "catchDynamics"
      },
      "index": {
        "description": "Exception handling within Dynamics computations",
        "hierarchy": "Simulation Aivika Dynamics",
        "module": "Simulation.Aivika.Dynamics",
        "name": "catchDynamics",
        "normalized": "Dynamics a-\u003e(IOException-\u003eDynamics a)-\u003eDynamics a",
        "package": "aivika",
        "partial": "Dynamics",
        "signature": "Dynamics a-\u003e(IOException-\u003eDynamics a)-\u003eDynamics a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Dynamics.html#v:dt",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the integration time step.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Dynamics",
        "fct-package": "aivika",
        "fct-signature": "Dynamics Double",
        "fct-source": "src/Simulation-Aivika-Internal-Dynamics.html#dt",
        "fct-type": "function",
        "title": "dt"
      },
      "index": {
        "description": "Return the integration time step",
        "hierarchy": "Simulation Aivika Dynamics",
        "module": "Simulation.Aivika.Dynamics",
        "name": "dt",
        "normalized": "",
        "package": "aivika",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Dynamics.html#v:finallyDynamics",
      "description": {
        "fct-descr": "\u003cp\u003eA computation with finalization part like the \u003ccode\u003e\u003ca\u003efinally\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Dynamics",
        "fct-package": "aivika",
        "fct-signature": "Dynamics a -\u003e Dynamics b -\u003e Dynamics a",
        "fct-source": "src/Simulation-Aivika-Internal-Dynamics.html#finallyDynamics",
        "fct-type": "function",
        "title": "finallyDynamics"
      },
      "index": {
        "description": "computation with finalization part like the finally function",
        "hierarchy": "Simulation Aivika Dynamics",
        "module": "Simulation.Aivika.Dynamics",
        "name": "finallyDynamics",
        "normalized": "Dynamics a-\u003eDynamics b-\u003eDynamics a",
        "package": "aivika",
        "partial": "Dynamics",
        "signature": "Dynamics a-\u003eDynamics b-\u003eDynamics a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Dynamics.html#v:integIteration",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the integration iteration closest to the current simulation time.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Dynamics",
        "fct-package": "aivika",
        "fct-signature": "Dynamics Int",
        "fct-source": "src/Simulation-Aivika-Internal-Dynamics.html#integIteration",
        "fct-type": "function",
        "title": "integIteration"
      },
      "index": {
        "description": "Return the integration iteration closest to the current simulation time",
        "hierarchy": "Simulation Aivika Dynamics",
        "module": "Simulation.Aivika.Dynamics",
        "name": "integIteration",
        "normalized": "",
        "package": "aivika",
        "partial": "Iteration",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Dynamics.html#v:integPhase",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the integration phase for the current simulation time.\n It is \u003ccode\u003e(-1)\u003c/code\u003e for non-integration time points.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Dynamics",
        "fct-package": "aivika",
        "fct-signature": "Dynamics Int",
        "fct-source": "src/Simulation-Aivika-Internal-Dynamics.html#integPhase",
        "fct-type": "function",
        "title": "integPhase"
      },
      "index": {
        "description": "Return the integration phase for the current simulation time It is for non-integration time points",
        "hierarchy": "Simulation Aivika Dynamics",
        "module": "Simulation.Aivika.Dynamics",
        "name": "integPhase",
        "normalized": "",
        "package": "aivika",
        "partial": "Phase",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Dynamics.html#v:isTimeInteg",
      "description": {
        "fct-descr": "\u003cp\u003eWhether the current time is an integration time.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Dynamics",
        "fct-package": "aivika",
        "fct-signature": "Dynamics Bool",
        "fct-source": "src/Simulation-Aivika-Internal-Dynamics.html#isTimeInteg",
        "fct-type": "function",
        "title": "isTimeInteg"
      },
      "index": {
        "description": "Whether the current time is an integration time",
        "hierarchy": "Simulation Aivika Dynamics",
        "module": "Simulation.Aivika.Dynamics",
        "name": "isTimeInteg",
        "normalized": "",
        "package": "aivika",
        "partial": "Time Integ",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Dynamics.html#v:liftDynamics",
      "description": {
        "fct-descr": "\u003cp\u003eLift the specified \u003ccode\u003e\u003ca\u003eDynamics\u003c/a\u003e\u003c/code\u003e computation to another monad.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Dynamics",
        "fct-package": "aivika",
        "fct-signature": "Dynamics a -\u003e m a",
        "fct-source": "src/Simulation-Aivika-Internal-Dynamics.html#liftDynamics",
        "fct-type": "method",
        "title": "liftDynamics"
      },
      "index": {
        "description": "Lift the specified Dynamics computation to another monad",
        "hierarchy": "Simulation Aivika Dynamics",
        "module": "Simulation.Aivika.Dynamics",
        "name": "liftDynamics",
        "normalized": "Dynamics a-\u003eb a",
        "package": "aivika",
        "partial": "Dynamics",
        "signature": "Dynamics a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Dynamics.html#v:runDynamicsInIntegTimes",
      "description": {
        "fct-descr": "\u003cp\u003eRun the \u003ccode\u003e\u003ca\u003eDynamics\u003c/a\u003e\u003c/code\u003e computation in all integration time points.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Dynamics",
        "fct-package": "aivika",
        "fct-signature": "Dynamics a -\u003e Simulation [IO a]",
        "fct-source": "src/Simulation-Aivika-Internal-Dynamics.html#runDynamicsInIntegTimes",
        "fct-type": "function",
        "title": "runDynamicsInIntegTimes"
      },
      "index": {
        "description": "Run the Dynamics computation in all integration time points",
        "hierarchy": "Simulation Aivika Dynamics",
        "module": "Simulation.Aivika.Dynamics",
        "name": "runDynamicsInIntegTimes",
        "normalized": "Dynamics a-\u003eSimulation[IO a]",
        "package": "aivika",
        "partial": "Dynamics In Integ Times",
        "signature": "Dynamics a-\u003eSimulation[IO a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Dynamics.html#v:runDynamicsInStartTime",
      "description": {
        "fct-descr": "\u003cp\u003eRun the \u003ccode\u003e\u003ca\u003eDynamics\u003c/a\u003e\u003c/code\u003e computation in the initial time point.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Dynamics",
        "fct-package": "aivika",
        "fct-signature": "Dynamics a -\u003e Simulation a",
        "fct-source": "src/Simulation-Aivika-Internal-Dynamics.html#runDynamicsInStartTime",
        "fct-type": "function",
        "title": "runDynamicsInStartTime"
      },
      "index": {
        "description": "Run the Dynamics computation in the initial time point",
        "hierarchy": "Simulation Aivika Dynamics",
        "module": "Simulation.Aivika.Dynamics",
        "name": "runDynamicsInStartTime",
        "normalized": "Dynamics a-\u003eSimulation a",
        "package": "aivika",
        "partial": "Dynamics In Start Time",
        "signature": "Dynamics a-\u003eSimulation a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Dynamics.html#v:runDynamicsInStopTime",
      "description": {
        "fct-descr": "\u003cp\u003eRun the \u003ccode\u003e\u003ca\u003eDynamics\u003c/a\u003e\u003c/code\u003e computation in the final time point.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Dynamics",
        "fct-package": "aivika",
        "fct-signature": "Dynamics a -\u003e Simulation a",
        "fct-source": "src/Simulation-Aivika-Internal-Dynamics.html#runDynamicsInStopTime",
        "fct-type": "function",
        "title": "runDynamicsInStopTime"
      },
      "index": {
        "description": "Run the Dynamics computation in the final time point",
        "hierarchy": "Simulation Aivika Dynamics",
        "module": "Simulation.Aivika.Dynamics",
        "name": "runDynamicsInStopTime",
        "normalized": "Dynamics a-\u003eSimulation a",
        "package": "aivika",
        "partial": "Dynamics In Stop Time",
        "signature": "Dynamics a-\u003eSimulation a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Dynamics.html#v:runDynamicsInTime",
      "description": {
        "fct-descr": "\u003cp\u003eRun the \u003ccode\u003e\u003ca\u003eDynamics\u003c/a\u003e\u003c/code\u003e computation in the specified time point.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Dynamics",
        "fct-package": "aivika",
        "fct-signature": "Double -\u003e Dynamics a -\u003e Simulation a",
        "fct-source": "src/Simulation-Aivika-Internal-Dynamics.html#runDynamicsInTime",
        "fct-type": "function",
        "title": "runDynamicsInTime"
      },
      "index": {
        "description": "Run the Dynamics computation in the specified time point",
        "hierarchy": "Simulation Aivika Dynamics",
        "module": "Simulation.Aivika.Dynamics",
        "name": "runDynamicsInTime",
        "normalized": "Double-\u003eDynamics a-\u003eSimulation a",
        "package": "aivika",
        "partial": "Dynamics In Time",
        "signature": "Double-\u003eDynamics a-\u003eSimulation a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Dynamics.html#v:runDynamicsInTimes",
      "description": {
        "fct-descr": "\u003cp\u003eRun the \u003ccode\u003e\u003ca\u003eDynamics\u003c/a\u003e\u003c/code\u003e computation in the specified time points.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Dynamics",
        "fct-package": "aivika",
        "fct-signature": "[Double] -\u003e Dynamics a -\u003e Simulation [IO a]",
        "fct-source": "src/Simulation-Aivika-Internal-Dynamics.html#runDynamicsInTimes",
        "fct-type": "function",
        "title": "runDynamicsInTimes"
      },
      "index": {
        "description": "Run the Dynamics computation in the specified time points",
        "hierarchy": "Simulation Aivika Dynamics",
        "module": "Simulation.Aivika.Dynamics",
        "name": "runDynamicsInTimes",
        "normalized": "[Double]-\u003eDynamics a-\u003eSimulation[IO a]",
        "package": "aivika",
        "partial": "Dynamics In Times",
        "signature": "[Double]-\u003eDynamics a-\u003eSimulation[IO a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Dynamics.html#v:starttime",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the start simulation time.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Dynamics",
        "fct-package": "aivika",
        "fct-signature": "Dynamics Double",
        "fct-source": "src/Simulation-Aivika-Internal-Dynamics.html#starttime",
        "fct-type": "function",
        "title": "starttime"
      },
      "index": {
        "description": "Return the start simulation time",
        "hierarchy": "Simulation Aivika Dynamics",
        "module": "Simulation.Aivika.Dynamics",
        "name": "starttime",
        "normalized": "",
        "package": "aivika",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Dynamics.html#v:stoptime",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the stop simulation time.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Dynamics",
        "fct-package": "aivika",
        "fct-signature": "Dynamics Double",
        "fct-source": "src/Simulation-Aivika-Internal-Dynamics.html#stoptime",
        "fct-type": "function",
        "title": "stoptime"
      },
      "index": {
        "description": "Return the stop simulation time",
        "hierarchy": "Simulation Aivika Dynamics",
        "module": "Simulation.Aivika.Dynamics",
        "name": "stoptime",
        "normalized": "",
        "package": "aivika",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Dynamics.html#v:throwDynamics",
      "description": {
        "fct-descr": "\u003cp\u003eLike the standard \u003ccode\u003e\u003ca\u003ethrow\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Dynamics",
        "fct-package": "aivika",
        "fct-signature": "IOException -\u003e Dynamics a",
        "fct-source": "src/Simulation-Aivika-Internal-Dynamics.html#throwDynamics",
        "fct-type": "function",
        "title": "throwDynamics"
      },
      "index": {
        "description": "Like the standard throw function",
        "hierarchy": "Simulation Aivika Dynamics",
        "module": "Simulation.Aivika.Dynamics",
        "name": "throwDynamics",
        "normalized": "IOException-\u003eDynamics a",
        "package": "aivika",
        "partial": "Dynamics",
        "signature": "IOException-\u003eDynamics a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Dynamics.html#v:time",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the current simulation time.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Dynamics",
        "fct-package": "aivika",
        "fct-signature": "Dynamics Double",
        "fct-source": "src/Simulation-Aivika-Internal-Dynamics.html#time",
        "fct-type": "function",
        "title": "time"
      },
      "index": {
        "description": "Return the current simulation time",
        "hierarchy": "Simulation Aivika Dynamics",
        "module": "Simulation.Aivika.Dynamics",
        "name": "time",
        "normalized": "",
        "package": "aivika",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Event.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTested with: GHC 7.6.3\n\u003c/p\u003e\u003cp\u003eThe module defines the \u003ccode\u003e\u003ca\u003eEvent\u003c/a\u003e\u003c/code\u003e monad which is very similar to the \u003ccode\u003eDynamics\u003c/code\u003e\n monad but only now the computation is strongly synchronized with the event queue.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Simulation.Aivika.Event",
        "fct-package": "aivika",
        "fct-signature": "module",
        "fct-source": "src/Simulation-Aivika-Event.html",
        "fct-type": "module",
        "title": "Event"
      },
      "index": {
        "description": "Tested with GHC The module defines the Event monad which is very similar to the Dynamics monad but only now the computation is strongly synchronized with the event queue",
        "hierarchy": "Simulation Aivika Event",
        "module": "Simulation.Aivika.Event",
        "name": "Event",
        "normalized": "",
        "package": "aivika",
        "partial": "Event",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Event.html#t:Event",
      "description": {
        "fct-descr": "\u003cp\u003eA value in the \u003ccode\u003e\u003ca\u003eEvent\u003c/a\u003e\u003c/code\u003e monad represents a polymorphic time varying function\n which is strongly synchronized with the event queue.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Event",
        "fct-package": "aivika",
        "fct-signature": "data",
        "fct-source": "src/Simulation-Aivika-Internal-Event.html#Event",
        "fct-type": "data",
        "title": "Event"
      },
      "index": {
        "description": "value in the Event monad represents polymorphic time varying function which is strongly synchronized with the event queue",
        "hierarchy": "Simulation Aivika Event",
        "module": "Simulation.Aivika.Event",
        "name": "Event",
        "normalized": "",
        "package": "aivika",
        "partial": "Event",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Event.html#t:EventCancellation",
      "description": {
        "fct-descr": "\u003cp\u003eIt allows cancelling the event.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Event",
        "fct-package": "aivika",
        "fct-signature": "data",
        "fct-source": "src/Simulation-Aivika-Internal-Event.html#EventCancellation",
        "fct-type": "data",
        "title": "EventCancellation"
      },
      "index": {
        "description": "It allows cancelling the event",
        "hierarchy": "Simulation Aivika Event",
        "module": "Simulation.Aivika.Event",
        "name": "EventCancellation",
        "normalized": "",
        "package": "aivika",
        "partial": "Event Cancellation",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Event.html#t:EventLift",
      "description": {
        "fct-descr": "\u003cp\u003eA type class to lift the \u003ccode\u003e\u003ca\u003eEvent\u003c/a\u003e\u003c/code\u003e computation to other monads.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Event",
        "fct-package": "aivika",
        "fct-signature": "class",
        "fct-source": "src/Simulation-Aivika-Internal-Event.html#EventLift",
        "fct-type": "class",
        "title": "EventLift"
      },
      "index": {
        "description": "type class to lift the Event computation to other monads",
        "hierarchy": "Simulation Aivika Event",
        "module": "Simulation.Aivika.Event",
        "name": "EventLift",
        "normalized": "",
        "package": "aivika",
        "partial": "Event Lift",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Event.html#t:EventProcessing",
      "description": {
        "fct-descr": "\u003cp\u003eDefines how the events are processed.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Event",
        "fct-package": "aivika",
        "fct-signature": "data",
        "fct-source": "src/Simulation-Aivika-Internal-Event.html#EventProcessing",
        "fct-type": "data",
        "title": "EventProcessing"
      },
      "index": {
        "description": "Defines how the events are processed",
        "hierarchy": "Simulation Aivika Event",
        "module": "Simulation.Aivika.Event",
        "name": "EventProcessing",
        "normalized": "",
        "package": "aivika",
        "partial": "Event Processing",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Event.html#v:EventCancellation",
      "description": {
        "fct-module": "Simulation.Aivika.Event",
        "fct-package": "aivika",
        "fct-signature": "EventCancellation",
        "fct-source": "src/Simulation-Aivika-Internal-Event.html#EventCancellation",
        "fct-type": "function",
        "title": "EventCancellation"
      },
      "index": {
        "description": "",
        "hierarchy": "Simulation Aivika Event",
        "module": "Simulation.Aivika.Event",
        "name": "EventCancellation",
        "normalized": "",
        "package": "aivika",
        "partial": "Event Cancellation",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Event.html#v:IncludingCurrentEvents",
      "description": {
        "fct-descr": "\u003cp\u003eeither process all earlier and then current events,\n or raise an error if the current simulation time is less\n than the actual time of the event queue\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Event",
        "fct-package": "aivika",
        "fct-signature": "IncludingCurrentEvents",
        "fct-source": "src/Simulation-Aivika-Internal-Event.html#EventProcessing",
        "fct-type": "function",
        "title": "IncludingCurrentEvents"
      },
      "index": {
        "description": "either process all earlier and then current events or raise an error if the current simulation time is less than the actual time of the event queue",
        "hierarchy": "Simulation Aivika Event",
        "module": "Simulation.Aivika.Event",
        "name": "IncludingCurrentEvents",
        "normalized": "",
        "package": "aivika",
        "partial": "Including Current Events",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Event.html#v:IncludingCurrentEventsOrFromPast",
      "description": {
        "fct-descr": "\u003cp\u003eeither process all earlier and then current events,\n or do nothing if the current simulation time is less\n than the actual time of the event queue\n (do not use unless the documentation states the opposite)\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Event",
        "fct-package": "aivika",
        "fct-signature": "IncludingCurrentEventsOrFromPast",
        "fct-source": "src/Simulation-Aivika-Internal-Event.html#EventProcessing",
        "fct-type": "function",
        "title": "IncludingCurrentEventsOrFromPast"
      },
      "index": {
        "description": "either process all earlier and then current events or do nothing if the current simulation time is less than the actual time of the event queue do not use unless the documentation states the opposite",
        "hierarchy": "Simulation Aivika Event",
        "module": "Simulation.Aivika.Event",
        "name": "IncludingCurrentEventsOrFromPast",
        "normalized": "",
        "package": "aivika",
        "partial": "Including Current Events Or From Past",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Event.html#v:IncludingEarlierEvents",
      "description": {
        "fct-descr": "\u003cp\u003eeither process all earlier events not affecting\n the events at the current simulation time,\n or raise an error if the current simulation time is less\n than the actual time of the event queue\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Event",
        "fct-package": "aivika",
        "fct-signature": "IncludingEarlierEvents",
        "fct-source": "src/Simulation-Aivika-Internal-Event.html#EventProcessing",
        "fct-type": "function",
        "title": "IncludingEarlierEvents"
      },
      "index": {
        "description": "either process all earlier events not affecting the events at the current simulation time or raise an error if the current simulation time is less than the actual time of the event queue",
        "hierarchy": "Simulation Aivika Event",
        "module": "Simulation.Aivika.Event",
        "name": "IncludingEarlierEvents",
        "normalized": "",
        "package": "aivika",
        "partial": "Including Earlier Events",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Event.html#v:IncludingEarlierEventsOrFromPast",
      "description": {
        "fct-descr": "\u003cp\u003eeither process all earlier events,\n or do nothing if the current simulation time is less\n than the actual time of the event queue\n (do not use unless the documentation states the opposite)\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Event",
        "fct-package": "aivika",
        "fct-signature": "IncludingEarlierEventsOrFromPast",
        "fct-source": "src/Simulation-Aivika-Internal-Event.html#EventProcessing",
        "fct-type": "function",
        "title": "IncludingEarlierEventsOrFromPast"
      },
      "index": {
        "description": "either process all earlier events or do nothing if the current simulation time is less than the actual time of the event queue do not use unless the documentation states the opposite",
        "hierarchy": "Simulation Aivika Event",
        "module": "Simulation.Aivika.Event",
        "name": "IncludingEarlierEventsOrFromPast",
        "normalized": "",
        "package": "aivika",
        "partial": "Including Earlier Events Or From Past",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Event.html#v:cancelEvent",
      "description": {
        "fct-descr": "\u003cp\u003eCancel the event.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Event",
        "fct-package": "aivika",
        "fct-signature": "Event ()",
        "fct-source": "src/Simulation-Aivika-Internal-Event.html#EventCancellation",
        "fct-type": "function",
        "title": "cancelEvent"
      },
      "index": {
        "description": "Cancel the event",
        "hierarchy": "Simulation Aivika Event",
        "module": "Simulation.Aivika.Event",
        "name": "cancelEvent",
        "normalized": "Event()",
        "package": "aivika",
        "partial": "Event",
        "signature": "Event()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Event.html#v:catchEvent",
      "description": {
        "fct-descr": "\u003cp\u003eException handling within \u003ccode\u003e\u003ca\u003eEvent\u003c/a\u003e\u003c/code\u003e computations.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Event",
        "fct-package": "aivika",
        "fct-signature": "Event a -\u003e (IOException -\u003e Event a) -\u003e Event a",
        "fct-source": "src/Simulation-Aivika-Internal-Event.html#catchEvent",
        "fct-type": "function",
        "title": "catchEvent"
      },
      "index": {
        "description": "Exception handling within Event computations",
        "hierarchy": "Simulation Aivika Event",
        "module": "Simulation.Aivika.Event",
        "name": "catchEvent",
        "normalized": "Event a-\u003e(IOException-\u003eEvent a)-\u003eEvent a",
        "package": "aivika",
        "partial": "Event",
        "signature": "Event a-\u003e(IOException-\u003eEvent a)-\u003eEvent a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Event.html#v:enqueueEvent",
      "description": {
        "fct-descr": "\u003cp\u003eEnqueue the event which must be actuated at the specified time.\n\u003c/p\u003e\u003cp\u003eThe events are processed when calling the \u003ccode\u003e\u003ca\u003erunEvent\u003c/a\u003e\u003c/code\u003e function. So,\n if you want to insist on their immediate execution then you can apply\n something like\n\u003c/p\u003e\u003cpre\u003e\n   liftDynamics $ runEvent IncludingCurrentEvents $ return ()\n\u003c/pre\u003e\u003cp\u003ealthough this is generally not good idea.  \n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Event",
        "fct-package": "aivika",
        "fct-signature": "Double -\u003e Event () -\u003e Event ()",
        "fct-source": "src/Simulation-Aivika-Internal-Event.html#enqueueEvent",
        "fct-type": "function",
        "title": "enqueueEvent"
      },
      "index": {
        "description": "Enqueue the event which must be actuated at the specified time The events are processed when calling the runEvent function So if you want to insist on their immediate execution then you can apply something like liftDynamics runEvent IncludingCurrentEvents return although this is generally not good idea",
        "hierarchy": "Simulation Aivika Event",
        "module": "Simulation.Aivika.Event",
        "name": "enqueueEvent",
        "normalized": "Double-\u003eEvent()-\u003eEvent()",
        "package": "aivika",
        "partial": "Event",
        "signature": "Double-\u003eEvent()-\u003eEvent()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Event.html#v:enqueueEventWithCancellation",
      "description": {
        "fct-descr": "\u003cp\u003eEnqueue the event with an ability to cancel it.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Event",
        "fct-package": "aivika",
        "fct-signature": "Double -\u003e Event () -\u003e Event EventCancellation",
        "fct-source": "src/Simulation-Aivika-Internal-Event.html#enqueueEventWithCancellation",
        "fct-type": "function",
        "title": "enqueueEventWithCancellation"
      },
      "index": {
        "description": "Enqueue the event with an ability to cancel it",
        "hierarchy": "Simulation Aivika Event",
        "module": "Simulation.Aivika.Event",
        "name": "enqueueEventWithCancellation",
        "normalized": "Double-\u003eEvent()-\u003eEvent EventCancellation",
        "package": "aivika",
        "partial": "Event With Cancellation",
        "signature": "Double-\u003eEvent()-\u003eEvent EventCancellation"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Event.html#v:enqueueEventWithCurrentTime",
      "description": {
        "fct-descr": "\u003cp\u003eActuate the event handler in the current time but \n through the event queue, which allows continuing the \n current tasks and then calling the handler after the \n tasks are finished. The simulation time will be the same.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Event",
        "fct-package": "aivika",
        "fct-signature": "Event () -\u003e Event ()",
        "fct-source": "src/Simulation-Aivika-Internal-Event.html#enqueueEventWithCurrentTime",
        "fct-type": "function",
        "title": "enqueueEventWithCurrentTime"
      },
      "index": {
        "description": "Actuate the event handler in the current time but through the event queue which allows continuing the current tasks and then calling the handler after the tasks are finished The simulation time will be the same",
        "hierarchy": "Simulation Aivika Event",
        "module": "Simulation.Aivika.Event",
        "name": "enqueueEventWithCurrentTime",
        "normalized": "Event()-\u003eEvent()",
        "package": "aivika",
        "partial": "Event With Current Time",
        "signature": "Event()-\u003eEvent()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Event.html#v:enqueueEventWithIntegTimes",
      "description": {
        "fct-descr": "\u003cp\u003eActuate the event handler in the integration time points.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Event",
        "fct-package": "aivika",
        "fct-signature": "Event () -\u003e Event ()",
        "fct-source": "src/Simulation-Aivika-Internal-Event.html#enqueueEventWithIntegTimes",
        "fct-type": "function",
        "title": "enqueueEventWithIntegTimes"
      },
      "index": {
        "description": "Actuate the event handler in the integration time points",
        "hierarchy": "Simulation Aivika Event",
        "module": "Simulation.Aivika.Event",
        "name": "enqueueEventWithIntegTimes",
        "normalized": "Event()-\u003eEvent()",
        "package": "aivika",
        "partial": "Event With Integ Times",
        "signature": "Event()-\u003eEvent()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Event.html#v:enqueueEventWithStartTime",
      "description": {
        "fct-descr": "\u003cp\u003eActuate the event handler in the start time.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Event",
        "fct-package": "aivika",
        "fct-signature": "Event () -\u003e Event ()",
        "fct-source": "src/Simulation-Aivika-Internal-Event.html#enqueueEventWithStartTime",
        "fct-type": "function",
        "title": "enqueueEventWithStartTime"
      },
      "index": {
        "description": "Actuate the event handler in the start time",
        "hierarchy": "Simulation Aivika Event",
        "module": "Simulation.Aivika.Event",
        "name": "enqueueEventWithStartTime",
        "normalized": "Event()-\u003eEvent()",
        "package": "aivika",
        "partial": "Event With Start Time",
        "signature": "Event()-\u003eEvent()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Event.html#v:enqueueEventWithStopTime",
      "description": {
        "fct-descr": "\u003cp\u003eActuate the event handler in the stop time.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Event",
        "fct-package": "aivika",
        "fct-signature": "Event () -\u003e Event ()",
        "fct-source": "src/Simulation-Aivika-Internal-Event.html#enqueueEventWithStopTime",
        "fct-type": "function",
        "title": "enqueueEventWithStopTime"
      },
      "index": {
        "description": "Actuate the event handler in the stop time",
        "hierarchy": "Simulation Aivika Event",
        "module": "Simulation.Aivika.Event",
        "name": "enqueueEventWithStopTime",
        "normalized": "Event()-\u003eEvent()",
        "package": "aivika",
        "partial": "Event With Stop Time",
        "signature": "Event()-\u003eEvent()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Event.html#v:enqueueEventWithTimes",
      "description": {
        "fct-descr": "\u003cp\u003eActuate the event handler in the specified time points.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Event",
        "fct-package": "aivika",
        "fct-signature": "[Double] -\u003e Event () -\u003e Event ()",
        "fct-source": "src/Simulation-Aivika-Internal-Event.html#enqueueEventWithTimes",
        "fct-type": "function",
        "title": "enqueueEventWithTimes"
      },
      "index": {
        "description": "Actuate the event handler in the specified time points",
        "hierarchy": "Simulation Aivika Event",
        "module": "Simulation.Aivika.Event",
        "name": "enqueueEventWithTimes",
        "normalized": "[Double]-\u003eEvent()-\u003eEvent()",
        "package": "aivika",
        "partial": "Event With Times",
        "signature": "[Double]-\u003eEvent()-\u003eEvent()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Event.html#v:eventCanceled",
      "description": {
        "fct-descr": "\u003cp\u003eTest whether the event was canceled.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Event",
        "fct-package": "aivika",
        "fct-signature": "Event Bool",
        "fct-source": "src/Simulation-Aivika-Internal-Event.html#EventCancellation",
        "fct-type": "function",
        "title": "eventCanceled"
      },
      "index": {
        "description": "Test whether the event was canceled",
        "hierarchy": "Simulation Aivika Event",
        "module": "Simulation.Aivika.Event",
        "name": "eventCanceled",
        "normalized": "",
        "package": "aivika",
        "partial": "Canceled",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Event.html#v:eventFinished",
      "description": {
        "fct-descr": "\u003cp\u003eTest whether the event was processed and finished.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Event",
        "fct-package": "aivika",
        "fct-signature": "Event Bool",
        "fct-source": "src/Simulation-Aivika-Internal-Event.html#EventCancellation",
        "fct-type": "function",
        "title": "eventFinished"
      },
      "index": {
        "description": "Test whether the event was processed and finished",
        "hierarchy": "Simulation Aivika Event",
        "module": "Simulation.Aivika.Event",
        "name": "eventFinished",
        "normalized": "",
        "package": "aivika",
        "partial": "Finished",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Event.html#v:eventQueueCount",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the number of pending events that should\n be yet actuated.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Event",
        "fct-package": "aivika",
        "fct-signature": "Event Int",
        "fct-source": "src/Simulation-Aivika-Internal-Event.html#eventQueueCount",
        "fct-type": "function",
        "title": "eventQueueCount"
      },
      "index": {
        "description": "Return the number of pending events that should be yet actuated",
        "hierarchy": "Simulation Aivika Event",
        "module": "Simulation.Aivika.Event",
        "name": "eventQueueCount",
        "normalized": "",
        "package": "aivika",
        "partial": "Queue Count",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Event.html#v:finallyEvent",
      "description": {
        "fct-descr": "\u003cp\u003eA computation with finalization part like the \u003ccode\u003e\u003ca\u003efinally\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Event",
        "fct-package": "aivika",
        "fct-signature": "Event a -\u003e Event b -\u003e Event a",
        "fct-source": "src/Simulation-Aivika-Internal-Event.html#finallyEvent",
        "fct-type": "function",
        "title": "finallyEvent"
      },
      "index": {
        "description": "computation with finalization part like the finally function",
        "hierarchy": "Simulation Aivika Event",
        "module": "Simulation.Aivika.Event",
        "name": "finallyEvent",
        "normalized": "Event a-\u003eEvent b-\u003eEvent a",
        "package": "aivika",
        "partial": "Event",
        "signature": "Event a-\u003eEvent b-\u003eEvent a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Event.html#v:liftEvent",
      "description": {
        "fct-descr": "\u003cp\u003eLift the specified \u003ccode\u003e\u003ca\u003eEvent\u003c/a\u003e\u003c/code\u003e computation to another monad.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Event",
        "fct-package": "aivika",
        "fct-signature": "Event a -\u003e m a",
        "fct-source": "src/Simulation-Aivika-Internal-Event.html#liftEvent",
        "fct-type": "method",
        "title": "liftEvent"
      },
      "index": {
        "description": "Lift the specified Event computation to another monad",
        "hierarchy": "Simulation Aivika Event",
        "module": "Simulation.Aivika.Event",
        "name": "liftEvent",
        "normalized": "Event a-\u003eb a",
        "package": "aivika",
        "partial": "Event",
        "signature": "Event a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Event.html#v:runEvent",
      "description": {
        "fct-descr": "\u003cp\u003eRun the \u003ccode\u003e\u003ca\u003eEvent\u003c/a\u003e\u003c/code\u003e computation in the current simulation time\n within the \u003ccode\u003e\u003ca\u003eDynamics\u003c/a\u003e\u003c/code\u003e computation.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Event",
        "fct-package": "aivika",
        "fct-signature": "EventProcessing -\u003e Event a -\u003e Dynamics a",
        "fct-source": "src/Simulation-Aivika-Internal-Event.html#runEvent",
        "fct-type": "function",
        "title": "runEvent"
      },
      "index": {
        "description": "Run the Event computation in the current simulation time within the Dynamics computation",
        "hierarchy": "Simulation Aivika Event",
        "module": "Simulation.Aivika.Event",
        "name": "runEvent",
        "normalized": "EventProcessing-\u003eEvent a-\u003eDynamics a",
        "package": "aivika",
        "partial": "Event",
        "signature": "EventProcessing-\u003eEvent a-\u003eDynamics a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Event.html#v:runEventInStartTime",
      "description": {
        "fct-descr": "\u003cp\u003eRun the \u003ccode\u003e\u003ca\u003eEvent\u003c/a\u003e\u003c/code\u003e computation in the start time.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Event",
        "fct-package": "aivika",
        "fct-signature": "EventProcessing -\u003e Event a -\u003e Simulation a",
        "fct-source": "src/Simulation-Aivika-Internal-Event.html#runEventInStartTime",
        "fct-type": "function",
        "title": "runEventInStartTime"
      },
      "index": {
        "description": "Run the Event computation in the start time",
        "hierarchy": "Simulation Aivika Event",
        "module": "Simulation.Aivika.Event",
        "name": "runEventInStartTime",
        "normalized": "EventProcessing-\u003eEvent a-\u003eSimulation a",
        "package": "aivika",
        "partial": "Event In Start Time",
        "signature": "EventProcessing-\u003eEvent a-\u003eSimulation a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Event.html#v:runEventInStopTime",
      "description": {
        "fct-descr": "\u003cp\u003eRun the \u003ccode\u003e\u003ca\u003eEvent\u003c/a\u003e\u003c/code\u003e computation in the stop time.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Event",
        "fct-package": "aivika",
        "fct-signature": "EventProcessing -\u003e Event a -\u003e Simulation a",
        "fct-source": "src/Simulation-Aivika-Internal-Event.html#runEventInStopTime",
        "fct-type": "function",
        "title": "runEventInStopTime"
      },
      "index": {
        "description": "Run the Event computation in the stop time",
        "hierarchy": "Simulation Aivika Event",
        "module": "Simulation.Aivika.Event",
        "name": "runEventInStopTime",
        "normalized": "EventProcessing-\u003eEvent a-\u003eSimulation a",
        "package": "aivika",
        "partial": "Event In Stop Time",
        "signature": "EventProcessing-\u003eEvent a-\u003eSimulation a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Event.html#v:throwEvent",
      "description": {
        "fct-descr": "\u003cp\u003eLike the standard \u003ccode\u003e\u003ca\u003ethrow\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Event",
        "fct-package": "aivika",
        "fct-signature": "IOException -\u003e Event a",
        "fct-source": "src/Simulation-Aivika-Internal-Event.html#throwEvent",
        "fct-type": "function",
        "title": "throwEvent"
      },
      "index": {
        "description": "Like the standard throw function",
        "hierarchy": "Simulation Aivika Event",
        "module": "Simulation.Aivika.Event",
        "name": "throwEvent",
        "normalized": "IOException-\u003eEvent a",
        "package": "aivika",
        "partial": "Event",
        "signature": "IOException-\u003eEvent a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Parameter-Random.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTested with: GHC 7.6.3\n\u003c/p\u003e\u003cp\u003eThis module defines the random parameters of simulation experiments.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Simulation.Aivika.Parameter.Random",
        "fct-package": "aivika",
        "fct-signature": "module",
        "fct-source": "src/Simulation-Aivika-Parameter-Random.html",
        "fct-type": "module",
        "title": "Random"
      },
      "index": {
        "description": "Tested with GHC This module defines the random parameters of simulation experiments",
        "hierarchy": "Simulation Aivika Parameter Random",
        "module": "Simulation.Aivika.Parameter.Random",
        "name": "Random",
        "normalized": "",
        "package": "aivika",
        "partial": "Random",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Parameter-Random.html#v:newNormalParameter",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new random parameter distributed normally.\n The value doesn't change within the simulation run but\n then the value is recalculated for each new run.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Parameter.Random",
        "fct-package": "aivika",
        "fct-signature": "Simulation Double-\u003e Simulation Double-\u003e IO (Simulation Double)",
        "fct-type": "function",
        "title": "newNormalParameter"
      },
      "index": {
        "description": "Create new random parameter distributed normally The value doesn change within the simulation run but then the value is recalculated for each new run",
        "hierarchy": "Simulation Aivika Parameter Random",
        "module": "Simulation.Aivika.Parameter.Random",
        "name": "newNormalParameter",
        "normalized": "Simulation Double-\u003eSimulation Double-\u003eIO(Simulation Double)",
        "package": "aivika",
        "partial": "Normal Parameter",
        "signature": "Simulation Double-\u003eSimulation Double-\u003eIO(Simulation Double)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Parameter-Random.html#v:newRandomParameter",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new random parameter distributed uniformly.\n The value doesn't change within the simulation run but\n then the value is recalculated for each new run.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Parameter.Random",
        "fct-package": "aivika",
        "fct-signature": "Simulation Double-\u003e Simulation Double-\u003e IO (Simulation Double)",
        "fct-type": "function",
        "title": "newRandomParameter"
      },
      "index": {
        "description": "Create new random parameter distributed uniformly The value doesn change within the simulation run but then the value is recalculated for each new run",
        "hierarchy": "Simulation Aivika Parameter Random",
        "module": "Simulation.Aivika.Parameter.Random",
        "name": "newRandomParameter",
        "normalized": "Simulation Double-\u003eSimulation Double-\u003eIO(Simulation Double)",
        "package": "aivika",
        "partial": "Random Parameter",
        "signature": "Simulation Double-\u003eSimulation Double-\u003eIO(Simulation Double)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Parameter.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTested with: GHC 7.6.3\n\u003c/p\u003e\u003cp\u003eThis module defines the parameters of simulation experiments.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Simulation.Aivika.Parameter",
        "fct-package": "aivika",
        "fct-signature": "module",
        "fct-source": "src/Simulation-Aivika-Parameter.html",
        "fct-type": "module",
        "title": "Parameter"
      },
      "index": {
        "description": "Tested with GHC This module defines the parameters of simulation experiments",
        "hierarchy": "Simulation Aivika Parameter",
        "module": "Simulation.Aivika.Parameter",
        "name": "Parameter",
        "normalized": "",
        "package": "aivika",
        "partial": "Parameter",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Parameter.html#v:newIndexedParameter",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a thread-safe parameter that returns always the same value within the simulation run, \n where the value depends on the number of this run starting from zero.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Parameter",
        "fct-package": "aivika",
        "fct-signature": "(Int -\u003e IO a) -\u003e IO (Simulation a)",
        "fct-source": "src/Simulation-Aivika-Parameter.html#newIndexedParameter",
        "fct-type": "function",
        "title": "newIndexedParameter"
      },
      "index": {
        "description": "Create thread-safe parameter that returns always the same value within the simulation run where the value depends on the number of this run starting from zero",
        "hierarchy": "Simulation Aivika Parameter",
        "module": "Simulation.Aivika.Parameter",
        "name": "newIndexedParameter",
        "normalized": "(Int-\u003eIO a)-\u003eIO(Simulation a)",
        "package": "aivika",
        "partial": "Indexed Parameter",
        "signature": "(Int-\u003eIO a)-\u003eIO(Simulation a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Parameter.html#v:newParameter",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a thread-safe parameter that returns always the same value within the simulation run, \n where the value is recalculated for each new run.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Parameter",
        "fct-package": "aivika",
        "fct-signature": "IO a -\u003e IO (Simulation a)",
        "fct-source": "src/Simulation-Aivika-Parameter.html#newParameter",
        "fct-type": "function",
        "title": "newParameter"
      },
      "index": {
        "description": "Create thread-safe parameter that returns always the same value within the simulation run where the value is recalculated for each new run",
        "hierarchy": "Simulation Aivika Parameter",
        "module": "Simulation.Aivika.Parameter",
        "name": "newParameter",
        "normalized": "IO a-\u003eIO(Simulation a)",
        "package": "aivika",
        "partial": "Parameter",
        "signature": "IO a-\u003eIO(Simulation a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Parameter.html#v:newTableParameter",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a thread-safe parameter that returns always the same value within the simulation run,\n where the value is taken consequently from the specified table based on the number of the \n current run starting from zero. After all values from the table are used, it takes the first \n value of the table, then the second one and so on.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Parameter",
        "fct-package": "aivika",
        "fct-signature": "Array Int a -\u003e IO (Simulation a)",
        "fct-source": "src/Simulation-Aivika-Parameter.html#newTableParameter",
        "fct-type": "function",
        "title": "newTableParameter"
      },
      "index": {
        "description": "Create thread-safe parameter that returns always the same value within the simulation run where the value is taken consequently from the specified table based on the number of the current run starting from zero After all values from the table are used it takes the first value of the table then the second one and so on",
        "hierarchy": "Simulation Aivika Parameter",
        "module": "Simulation.Aivika.Parameter",
        "name": "newTableParameter",
        "normalized": "Array Int a-\u003eIO(Simulation a)",
        "package": "aivika",
        "partial": "Table Parameter",
        "signature": "Array Int a-\u003eIO(Simulation a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-PriorityQueue.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTested with: GHC 7.6.3\n\u003c/p\u003e\u003cp\u003eAn imperative heap-based priority queue.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Simulation.Aivika.PriorityQueue",
        "fct-package": "aivika",
        "fct-signature": "module",
        "fct-source": "src/Simulation-Aivika-PriorityQueue.html",
        "fct-type": "module",
        "title": "PriorityQueue"
      },
      "index": {
        "description": "Tested with GHC An imperative heap-based priority queue",
        "hierarchy": "Simulation Aivika PriorityQueue",
        "module": "Simulation.Aivika.PriorityQueue",
        "name": "PriorityQueue",
        "normalized": "",
        "package": "aivika",
        "partial": "Priority Queue",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-PriorityQueue.html#t:PriorityQueue",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ePriorityQueue\u003c/a\u003e\u003c/code\u003e type represents an imperative heap-based \n priority queue.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.PriorityQueue",
        "fct-package": "aivika",
        "fct-signature": "data",
        "fct-source": "src/Simulation-Aivika-PriorityQueue.html#PriorityQueue",
        "fct-type": "data",
        "title": "PriorityQueue"
      },
      "index": {
        "description": "The PriorityQueue type represents an imperative heap-based priority queue",
        "hierarchy": "Simulation Aivika PriorityQueue",
        "module": "Simulation.Aivika.PriorityQueue",
        "name": "PriorityQueue",
        "normalized": "",
        "package": "aivika",
        "partial": "Priority Queue",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-PriorityQueue.html#v:dequeue",
      "description": {
        "fct-descr": "\u003cp\u003eDequeue the element with the minimal priority.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.PriorityQueue",
        "fct-package": "aivika",
        "fct-signature": "PriorityQueue a -\u003e IO ()",
        "fct-source": "src/Simulation-Aivika-PriorityQueue.html#dequeue",
        "fct-type": "function",
        "title": "dequeue"
      },
      "index": {
        "description": "Dequeue the element with the minimal priority",
        "hierarchy": "Simulation Aivika PriorityQueue",
        "module": "Simulation.Aivika.PriorityQueue",
        "name": "dequeue",
        "normalized": "PriorityQueue a-\u003eIO()",
        "package": "aivika",
        "partial": "",
        "signature": "PriorityQueue a-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-PriorityQueue.html#v:enqueue",
      "description": {
        "fct-descr": "\u003cp\u003eEnqueue a new element with the specified priority.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.PriorityQueue",
        "fct-package": "aivika",
        "fct-signature": "PriorityQueue a -\u003e Double -\u003e a -\u003e IO ()",
        "fct-source": "src/Simulation-Aivika-PriorityQueue.html#enqueue",
        "fct-type": "function",
        "title": "enqueue"
      },
      "index": {
        "description": "Enqueue new element with the specified priority",
        "hierarchy": "Simulation Aivika PriorityQueue",
        "module": "Simulation.Aivika.PriorityQueue",
        "name": "enqueue",
        "normalized": "PriorityQueue a-\u003eDouble-\u003ea-\u003eIO()",
        "package": "aivika",
        "partial": "",
        "signature": "PriorityQueue a-\u003eDouble-\u003ea-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-PriorityQueue.html#v:newQueue",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new priority queue.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.PriorityQueue",
        "fct-package": "aivika",
        "fct-signature": "IO (PriorityQueue a)",
        "fct-source": "src/Simulation-Aivika-PriorityQueue.html#newQueue",
        "fct-type": "function",
        "title": "newQueue"
      },
      "index": {
        "description": "Create new priority queue",
        "hierarchy": "Simulation Aivika PriorityQueue",
        "module": "Simulation.Aivika.PriorityQueue",
        "name": "newQueue",
        "normalized": "",
        "package": "aivika",
        "partial": "Queue",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-PriorityQueue.html#v:queueCount",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the number of elements in the priority queue.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.PriorityQueue",
        "fct-package": "aivika",
        "fct-signature": "PriorityQueue a -\u003e IO Int",
        "fct-source": "src/Simulation-Aivika-PriorityQueue.html#queueCount",
        "fct-type": "function",
        "title": "queueCount"
      },
      "index": {
        "description": "Return the number of elements in the priority queue",
        "hierarchy": "Simulation Aivika PriorityQueue",
        "module": "Simulation.Aivika.PriorityQueue",
        "name": "queueCount",
        "normalized": "PriorityQueue a-\u003eIO Int",
        "package": "aivika",
        "partial": "Count",
        "signature": "PriorityQueue a-\u003eIO Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-PriorityQueue.html#v:queueFront",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the element with the minimal priority.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.PriorityQueue",
        "fct-package": "aivika",
        "fct-signature": "PriorityQueue a -\u003e IO (Double, a)",
        "fct-source": "src/Simulation-Aivika-PriorityQueue.html#queueFront",
        "fct-type": "function",
        "title": "queueFront"
      },
      "index": {
        "description": "Return the element with the minimal priority",
        "hierarchy": "Simulation Aivika PriorityQueue",
        "module": "Simulation.Aivika.PriorityQueue",
        "name": "queueFront",
        "normalized": "PriorityQueue a-\u003eIO(Double,a)",
        "package": "aivika",
        "partial": "Front",
        "signature": "PriorityQueue a-\u003eIO(Double,a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-PriorityQueue.html#v:queueNull",
      "description": {
        "fct-descr": "\u003cp\u003eTest whether the priority queue is empty.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.PriorityQueue",
        "fct-package": "aivika",
        "fct-signature": "PriorityQueue a -\u003e IO Bool",
        "fct-source": "src/Simulation-Aivika-PriorityQueue.html#queueNull",
        "fct-type": "function",
        "title": "queueNull"
      },
      "index": {
        "description": "Test whether the priority queue is empty",
        "hierarchy": "Simulation Aivika PriorityQueue",
        "module": "Simulation.Aivika.PriorityQueue",
        "name": "queueNull",
        "normalized": "PriorityQueue a-\u003eIO Bool",
        "package": "aivika",
        "partial": "Null",
        "signature": "PriorityQueue a-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Process.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTested with: GHC 7.6.3\n\u003c/p\u003e\u003cp\u003eA value in the \u003ccode\u003e\u003ca\u003eProcess\u003c/a\u003e\u003c/code\u003e monad represents a discontinuous process that \n can suspend in any simulation time point and then resume later in the same \n or another time point. \n\u003c/p\u003e\u003cp\u003eThe process of this type can involve the \u003ccode\u003e\u003ca\u003eEvent\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eDynamics\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eSimulation\u003c/a\u003e\u003c/code\u003e\n computations. Moreover, a value in the \u003ccode\u003eProcess\u003c/code\u003e monad can be run within\n the \u003ccode\u003eEvent\u003c/code\u003e computation.\n\u003c/p\u003e\u003cp\u003eA value of the \u003ccode\u003e\u003ca\u003eProcessId\u003c/a\u003e\u003c/code\u003e type is just an identifier of such a process.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Simulation.Aivika.Process",
        "fct-package": "aivika",
        "fct-signature": "module",
        "fct-source": "src/Simulation-Aivika-Process.html",
        "fct-type": "module",
        "title": "Process"
      },
      "index": {
        "description": "Tested with GHC value in the Process monad represents discontinuous process that can suspend in any simulation time point and then resume later in the same or another time point The process of this type can involve the Event Dynamics and Simulation computations Moreover value in the Process monad can be run within the Event computation value of the ProcessId type is just an identifier of such process",
        "hierarchy": "Simulation Aivika Process",
        "module": "Simulation.Aivika.Process",
        "name": "Process",
        "normalized": "",
        "package": "aivika",
        "partial": "Process",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Process.html#t:Process",
      "description": {
        "fct-descr": "\u003cp\u003eSpecifies a discontinuous process that can suspend at any time\n and then resume later.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Process",
        "fct-package": "aivika",
        "fct-signature": "data",
        "fct-source": "src/Simulation-Aivika-Internal-Process.html#Process",
        "fct-type": "data",
        "title": "Process"
      },
      "index": {
        "description": "Specifies discontinuous process that can suspend at any time and then resume later",
        "hierarchy": "Simulation Aivika Process",
        "module": "Simulation.Aivika.Process",
        "name": "Process",
        "normalized": "",
        "package": "aivika",
        "partial": "Process",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Process.html#t:ProcessId",
      "description": {
        "fct-descr": "\u003cp\u003eRepresents a process identifier.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Process",
        "fct-package": "aivika",
        "fct-signature": "data",
        "fct-source": "src/Simulation-Aivika-Internal-Process.html#ProcessId",
        "fct-type": "data",
        "title": "ProcessId"
      },
      "index": {
        "description": "Represents process identifier",
        "hierarchy": "Simulation Aivika Process",
        "module": "Simulation.Aivika.Process",
        "name": "ProcessId",
        "normalized": "",
        "package": "aivika",
        "partial": "Process Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Process.html#v:cancelProcess",
      "description": {
        "fct-descr": "\u003cp\u003eCancel a process with the specified identifier.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Process",
        "fct-package": "aivika",
        "fct-signature": "ProcessId -\u003e Event ()",
        "fct-source": "src/Simulation-Aivika-Internal-Process.html#cancelProcess",
        "fct-type": "function",
        "title": "cancelProcess"
      },
      "index": {
        "description": "Cancel process with the specified identifier",
        "hierarchy": "Simulation Aivika Process",
        "module": "Simulation.Aivika.Process",
        "name": "cancelProcess",
        "normalized": "ProcessId-\u003eEvent()",
        "package": "aivika",
        "partial": "Process",
        "signature": "ProcessId-\u003eEvent()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Process.html#v:catchProcess",
      "description": {
        "fct-descr": "\u003cp\u003eException handling within \u003ccode\u003e\u003ca\u003eProcess\u003c/a\u003e\u003c/code\u003e computations.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Process",
        "fct-package": "aivika",
        "fct-signature": "Process a -\u003e (IOException -\u003e Process a) -\u003e Process a",
        "fct-source": "src/Simulation-Aivika-Internal-Process.html#catchProcess",
        "fct-type": "function",
        "title": "catchProcess"
      },
      "index": {
        "description": "Exception handling within Process computations",
        "hierarchy": "Simulation Aivika Process",
        "module": "Simulation.Aivika.Process",
        "name": "catchProcess",
        "normalized": "Process a-\u003e(IOException-\u003eProcess a)-\u003eProcess a",
        "package": "aivika",
        "partial": "Process",
        "signature": "Process a-\u003e(IOException-\u003eProcess a)-\u003eProcess a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Process.html#v:enqueueProcess",
      "description": {
        "fct-descr": "\u003cp\u003eEnqueue the process that will be then started at the specified time\n from the event queue.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Process",
        "fct-package": "aivika",
        "fct-signature": "Double -\u003e ProcessId -\u003e Process () -\u003e Event ()",
        "fct-source": "src/Simulation-Aivika-Internal-Process.html#enqueueProcess",
        "fct-type": "function",
        "title": "enqueueProcess"
      },
      "index": {
        "description": "Enqueue the process that will be then started at the specified time from the event queue",
        "hierarchy": "Simulation Aivika Process",
        "module": "Simulation.Aivika.Process",
        "name": "enqueueProcess",
        "normalized": "Double-\u003eProcessId-\u003eProcess()-\u003eEvent()",
        "package": "aivika",
        "partial": "Process",
        "signature": "Double-\u003eProcessId-\u003eProcess()-\u003eEvent()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Process.html#v:enqueueProcessWithStartTime",
      "description": {
        "fct-descr": "\u003cp\u003eEnqueue the process that will be then started in the start time\n from the event queue.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Process",
        "fct-package": "aivika",
        "fct-signature": "ProcessId -\u003e Process () -\u003e Event ()",
        "fct-source": "src/Simulation-Aivika-Internal-Process.html#enqueueProcessWithStartTime",
        "fct-type": "function",
        "title": "enqueueProcessWithStartTime"
      },
      "index": {
        "description": "Enqueue the process that will be then started in the start time from the event queue",
        "hierarchy": "Simulation Aivika Process",
        "module": "Simulation.Aivika.Process",
        "name": "enqueueProcessWithStartTime",
        "normalized": "ProcessId-\u003eProcess()-\u003eEvent()",
        "package": "aivika",
        "partial": "Process With Start Time",
        "signature": "ProcessId-\u003eProcess()-\u003eEvent()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Process.html#v:enqueueProcessWithStopTime",
      "description": {
        "fct-descr": "\u003cp\u003eEnqueue the process that will be then started in the stop time\n from the event queue.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Process",
        "fct-package": "aivika",
        "fct-signature": "ProcessId -\u003e Process () -\u003e Event ()",
        "fct-source": "src/Simulation-Aivika-Internal-Process.html#enqueueProcessWithStopTime",
        "fct-type": "function",
        "title": "enqueueProcessWithStopTime"
      },
      "index": {
        "description": "Enqueue the process that will be then started in the stop time from the event queue",
        "hierarchy": "Simulation Aivika Process",
        "module": "Simulation.Aivika.Process",
        "name": "enqueueProcessWithStopTime",
        "normalized": "ProcessId-\u003eProcess()-\u003eEvent()",
        "package": "aivika",
        "partial": "Process With Stop Time",
        "signature": "ProcessId-\u003eProcess()-\u003eEvent()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Process.html#v:finallyProcess",
      "description": {
        "fct-descr": "\u003cp\u003eA computation with finalization part.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Process",
        "fct-package": "aivika",
        "fct-signature": "Process a -\u003e Process b -\u003e Process a",
        "fct-source": "src/Simulation-Aivika-Internal-Process.html#finallyProcess",
        "fct-type": "function",
        "title": "finallyProcess"
      },
      "index": {
        "description": "computation with finalization part",
        "hierarchy": "Simulation Aivika Process",
        "module": "Simulation.Aivika.Process",
        "name": "finallyProcess",
        "normalized": "Process a-\u003eProcess b-\u003eProcess a",
        "package": "aivika",
        "partial": "Process",
        "signature": "Process a-\u003eProcess b-\u003eProcess a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Process.html#v:holdProcess",
      "description": {
        "fct-descr": "\u003cp\u003eHold the process for the specified time period.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Process",
        "fct-package": "aivika",
        "fct-signature": "Double -\u003e Process ()",
        "fct-source": "src/Simulation-Aivika-Internal-Process.html#holdProcess",
        "fct-type": "function",
        "title": "holdProcess"
      },
      "index": {
        "description": "Hold the process for the specified time period",
        "hierarchy": "Simulation Aivika Process",
        "module": "Simulation.Aivika.Process",
        "name": "holdProcess",
        "normalized": "Double-\u003eProcess()",
        "package": "aivika",
        "partial": "Process",
        "signature": "Double-\u003eProcess()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Process.html#v:interruptProcess",
      "description": {
        "fct-descr": "\u003cp\u003eInterrupt a process with the specified identifier if the process\n is held by computation \u003ccode\u003e\u003ca\u003eholdProcess\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Process",
        "fct-package": "aivika",
        "fct-signature": "ProcessId -\u003e Event ()",
        "fct-source": "src/Simulation-Aivika-Internal-Process.html#interruptProcess",
        "fct-type": "function",
        "title": "interruptProcess"
      },
      "index": {
        "description": "Interrupt process with the specified identifier if the process is held by computation holdProcess",
        "hierarchy": "Simulation Aivika Process",
        "module": "Simulation.Aivika.Process",
        "name": "interruptProcess",
        "normalized": "ProcessId-\u003eEvent()",
        "package": "aivika",
        "partial": "Process",
        "signature": "ProcessId-\u003eEvent()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Process.html#v:newProcessId",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new process identifier without exception handling.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Process",
        "fct-package": "aivika",
        "fct-signature": "Simulation ProcessId",
        "fct-source": "src/Simulation-Aivika-Internal-Process.html#newProcessId",
        "fct-type": "function",
        "title": "newProcessId"
      },
      "index": {
        "description": "Create new process identifier without exception handling",
        "hierarchy": "Simulation Aivika Process",
        "module": "Simulation.Aivika.Process",
        "name": "newProcessId",
        "normalized": "",
        "package": "aivika",
        "partial": "Process Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Process.html#v:newProcessIdWithCatch",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new process identifier with capabilities of catching \n the \u003ccode\u003e\u003ca\u003eIOError\u003c/a\u003e\u003c/code\u003e exceptions and finalizing the computation. \n The corresponded process will be slower than that one\n which identifier is created with help of \u003ccode\u003e\u003ca\u003enewProcessId\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Process",
        "fct-package": "aivika",
        "fct-signature": "Simulation ProcessId",
        "fct-source": "src/Simulation-Aivika-Internal-Process.html#newProcessIdWithCatch",
        "fct-type": "function",
        "title": "newProcessIdWithCatch"
      },
      "index": {
        "description": "Create new process identifier with capabilities of catching the IOError exceptions and finalizing the computation The corresponded process will be slower than that one which identifier is created with help of newProcessId",
        "hierarchy": "Simulation Aivika Process",
        "module": "Simulation.Aivika.Process",
        "name": "newProcessIdWithCatch",
        "normalized": "",
        "package": "aivika",
        "partial": "Process Id With Catch",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Process.html#v:passivateProcess",
      "description": {
        "fct-descr": "\u003cp\u003ePassivate the process.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Process",
        "fct-package": "aivika",
        "fct-signature": "Process ()",
        "fct-source": "src/Simulation-Aivika-Internal-Process.html#passivateProcess",
        "fct-type": "function",
        "title": "passivateProcess"
      },
      "index": {
        "description": "Passivate the process",
        "hierarchy": "Simulation Aivika Process",
        "module": "Simulation.Aivika.Process",
        "name": "passivateProcess",
        "normalized": "Process()",
        "package": "aivika",
        "partial": "Process",
        "signature": "Process()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Process.html#v:processCanceled",
      "description": {
        "fct-descr": "\u003cp\u003eTest whether the process with the specified identifier was canceled.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Process",
        "fct-package": "aivika",
        "fct-signature": "ProcessId -\u003e Event Bool",
        "fct-source": "src/Simulation-Aivika-Internal-Process.html#processCanceled",
        "fct-type": "function",
        "title": "processCanceled"
      },
      "index": {
        "description": "Test whether the process with the specified identifier was canceled",
        "hierarchy": "Simulation Aivika Process",
        "module": "Simulation.Aivika.Process",
        "name": "processCanceled",
        "normalized": "ProcessId-\u003eEvent Bool",
        "package": "aivika",
        "partial": "Canceled",
        "signature": "ProcessId-\u003eEvent Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Process.html#v:processId",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the current process identifier.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Process",
        "fct-package": "aivika",
        "fct-signature": "Process ProcessId",
        "fct-source": "src/Simulation-Aivika-Internal-Process.html#processId",
        "fct-type": "function",
        "title": "processId"
      },
      "index": {
        "description": "Return the current process identifier",
        "hierarchy": "Simulation Aivika Process",
        "module": "Simulation.Aivika.Process",
        "name": "processId",
        "normalized": "",
        "package": "aivika",
        "partial": "Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Process.html#v:processInterrupted",
      "description": {
        "fct-descr": "\u003cp\u003eTest whether the process with the specified identifier was interrupted.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Process",
        "fct-package": "aivika",
        "fct-signature": "ProcessId -\u003e Event Bool",
        "fct-source": "src/Simulation-Aivika-Internal-Process.html#processInterrupted",
        "fct-type": "function",
        "title": "processInterrupted"
      },
      "index": {
        "description": "Test whether the process with the specified identifier was interrupted",
        "hierarchy": "Simulation Aivika Process",
        "module": "Simulation.Aivika.Process",
        "name": "processInterrupted",
        "normalized": "ProcessId-\u003eEvent Bool",
        "package": "aivika",
        "partial": "Interrupted",
        "signature": "ProcessId-\u003eEvent Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Process.html#v:processPassive",
      "description": {
        "fct-descr": "\u003cp\u003eTest whether the process with the specified identifier is passivated.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Process",
        "fct-package": "aivika",
        "fct-signature": "ProcessId -\u003e Event Bool",
        "fct-source": "src/Simulation-Aivika-Internal-Process.html#processPassive",
        "fct-type": "function",
        "title": "processPassive"
      },
      "index": {
        "description": "Test whether the process with the specified identifier is passivated",
        "hierarchy": "Simulation Aivika Process",
        "module": "Simulation.Aivika.Process",
        "name": "processPassive",
        "normalized": "ProcessId-\u003eEvent Bool",
        "package": "aivika",
        "partial": "Passive",
        "signature": "ProcessId-\u003eEvent Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Process.html#v:reactivateProcess",
      "description": {
        "fct-descr": "\u003cp\u003eReactivate a process with the specified identifier.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Process",
        "fct-package": "aivika",
        "fct-signature": "ProcessId -\u003e Event ()",
        "fct-source": "src/Simulation-Aivika-Internal-Process.html#reactivateProcess",
        "fct-type": "function",
        "title": "reactivateProcess"
      },
      "index": {
        "description": "Reactivate process with the specified identifier",
        "hierarchy": "Simulation Aivika Process",
        "module": "Simulation.Aivika.Process",
        "name": "reactivateProcess",
        "normalized": "ProcessId-\u003eEvent()",
        "package": "aivika",
        "partial": "Process",
        "signature": "ProcessId-\u003eEvent()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Process.html#v:runProcess",
      "description": {
        "fct-descr": "\u003cp\u003eStart immediately the process with the specified identifier.\n\u003c/p\u003e\u003cp\u003eTo run the process at the specified time, you can use\n the \u003ccode\u003e\u003ca\u003eenqueueProcess\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Process",
        "fct-package": "aivika",
        "fct-signature": "ProcessId -\u003e Process () -\u003e Event ()",
        "fct-source": "src/Simulation-Aivika-Internal-Process.html#runProcess",
        "fct-type": "function",
        "title": "runProcess"
      },
      "index": {
        "description": "Start immediately the process with the specified identifier To run the process at the specified time you can use the enqueueProcess function",
        "hierarchy": "Simulation Aivika Process",
        "module": "Simulation.Aivika.Process",
        "name": "runProcess",
        "normalized": "ProcessId-\u003eProcess()-\u003eEvent()",
        "package": "aivika",
        "partial": "Process",
        "signature": "ProcessId-\u003eProcess()-\u003eEvent()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Process.html#v:runProcessInStartTime",
      "description": {
        "fct-descr": "\u003cp\u003eStart the process in the start time immediately.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Process",
        "fct-package": "aivika",
        "fct-signature": "EventProcessing -\u003e ProcessId -\u003e Process () -\u003e Simulation ()",
        "fct-source": "src/Simulation-Aivika-Internal-Process.html#runProcessInStartTime",
        "fct-type": "function",
        "title": "runProcessInStartTime"
      },
      "index": {
        "description": "Start the process in the start time immediately",
        "hierarchy": "Simulation Aivika Process",
        "module": "Simulation.Aivika.Process",
        "name": "runProcessInStartTime",
        "normalized": "EventProcessing-\u003eProcessId-\u003eProcess()-\u003eSimulation()",
        "package": "aivika",
        "partial": "Process In Start Time",
        "signature": "EventProcessing-\u003eProcessId-\u003eProcess()-\u003eSimulation()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Process.html#v:runProcessInStopTime",
      "description": {
        "fct-descr": "\u003cp\u003eStart the process in the stop time immediately.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Process",
        "fct-package": "aivika",
        "fct-signature": "EventProcessing -\u003e ProcessId -\u003e Process () -\u003e Simulation ()",
        "fct-source": "src/Simulation-Aivika-Internal-Process.html#runProcessInStopTime",
        "fct-type": "function",
        "title": "runProcessInStopTime"
      },
      "index": {
        "description": "Start the process in the stop time immediately",
        "hierarchy": "Simulation Aivika Process",
        "module": "Simulation.Aivika.Process",
        "name": "runProcessInStopTime",
        "normalized": "EventProcessing-\u003eProcessId-\u003eProcess()-\u003eSimulation()",
        "package": "aivika",
        "partial": "Process In Stop Time",
        "signature": "EventProcessing-\u003eProcessId-\u003eProcess()-\u003eSimulation()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Process.html#v:throwProcess",
      "description": {
        "fct-descr": "\u003cp\u003eThrow the exception with the further exception handling.\n By some reasons, the standard \u003ccode\u003e\u003ca\u003ethrow\u003c/a\u003e\u003c/code\u003e function per se is not handled \n properly within \u003ccode\u003e\u003ca\u003eProcess\u003c/a\u003e\u003c/code\u003e computations, although it will be still \n handled if it will be hidden under the \u003ccode\u003e\u003ca\u003eliftIO\u003c/a\u003e\u003c/code\u003e function. The problem \n arises namely with the \u003ccode\u003ethrow\u003c/code\u003e function, not \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e computations.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Process",
        "fct-package": "aivika",
        "fct-signature": "IOException -\u003e Process a",
        "fct-source": "src/Simulation-Aivika-Internal-Process.html#throwProcess",
        "fct-type": "function",
        "title": "throwProcess"
      },
      "index": {
        "description": "Throw the exception with the further exception handling By some reasons the standard throw function per se is not handled properly within Process computations although it will be still handled if it will be hidden under the liftIO function The problem arises namely with the throw function not IO computations",
        "hierarchy": "Simulation Aivika Process",
        "module": "Simulation.Aivika.Process",
        "name": "throwProcess",
        "normalized": "IOException-\u003eProcess a",
        "package": "aivika",
        "partial": "Process",
        "signature": "IOException-\u003eProcess a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Queue.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTested with: GHC 7.6.3\n\u003c/p\u003e\u003cp\u003eThis module defines a queue that can use the specified strategies. So, having only\n the \u003ccode\u003e\u003ca\u003eFCFS\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eLCFS\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eSIRO\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eStaticPriorities\u003c/a\u003e\u003c/code\u003e strategies, you can build\n 4 x 3 x 4 = 48 different types of the queue, each of them will have its own\n behavior (below \u003ccode\u003eStaticPriorities\u003c/code\u003e can be used for input and output only).\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Simulation.Aivika.Queue",
        "fct-package": "aivika",
        "fct-signature": "module",
        "fct-source": "src/Simulation-Aivika-Queue.html",
        "fct-type": "module",
        "title": "Queue"
      },
      "index": {
        "description": "Tested with GHC This module defines queue that can use the specified strategies So having only the FCFS LCFS SIRO and StaticPriorities strategies you can build different types of the queue each of them will have its own behavior below StaticPriorities can be used for input and output only",
        "hierarchy": "Simulation Aivika Queue",
        "module": "Simulation.Aivika.Queue",
        "name": "Queue",
        "normalized": "",
        "package": "aivika",
        "partial": "Queue",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Queue.html#t:Queue",
      "description": {
        "fct-descr": "\u003cp\u003eRepresents the queue using the specified strategies for input \u003ccode\u003esi\u003c/code\u003e,\n internal storing (in memory) \u003ccode\u003esm\u003c/code\u003e and output \u003ccode\u003eso\u003c/code\u003e, where \u003ccode\u003ea\u003c/code\u003e denotes\n the type of items stored in the queue. Types \u003ccode\u003eqi\u003c/code\u003e, \u003ccode\u003eqm\u003c/code\u003e and \u003ccode\u003eqo\u003c/code\u003e are\n determined automatically and you should not care about them - they\n are dependent types.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Queue",
        "fct-package": "aivika",
        "fct-signature": "data",
        "fct-source": "src/Simulation-Aivika-Queue.html#Queue",
        "fct-type": "data",
        "title": "Queue"
      },
      "index": {
        "description": "Represents the queue using the specified strategies for input si internal storing in memory sm and output so where denotes the type of items stored in the queue Types qi qm and qo are determined automatically and you should not care about them they are dependent types",
        "hierarchy": "Simulation Aivika Queue",
        "module": "Simulation.Aivika.Queue",
        "name": "Queue",
        "normalized": "",
        "package": "aivika",
        "partial": "Queue",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Queue.html#v:dequeue",
      "description": {
        "fct-descr": "\u003cp\u003eDequeue suspending the process if the queue is empty.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Queue",
        "fct-package": "aivika",
        "fct-signature": "Queue si qi sm qm so qo a-\u003e Process a",
        "fct-type": "function",
        "title": "dequeue"
      },
      "index": {
        "description": "Dequeue suspending the process if the queue is empty",
        "hierarchy": "Simulation Aivika Queue",
        "module": "Simulation.Aivika.Queue",
        "name": "dequeue",
        "normalized": "Queue a b c d e f g-\u003eProcess g",
        "package": "aivika",
        "partial": "",
        "signature": "Queue si qi sm qm so qo a-\u003eProcess a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Queue.html#v:dequeueWithDynamicPriority",
      "description": {
        "fct-descr": "\u003cp\u003eDequeue with the dynamic priority suspending the process if the queue is empty.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Queue",
        "fct-package": "aivika",
        "fct-signature": "Queue si qi sm qm so qo a-\u003e Event Double-\u003e Process a",
        "fct-type": "function",
        "title": "dequeueWithDynamicPriority"
      },
      "index": {
        "description": "Dequeue with the dynamic priority suspending the process if the queue is empty",
        "hierarchy": "Simulation Aivika Queue",
        "module": "Simulation.Aivika.Queue",
        "name": "dequeueWithDynamicPriority",
        "normalized": "Queue a b c d e f g-\u003eEvent Double-\u003eProcess g",
        "package": "aivika",
        "partial": "With Dynamic Priority",
        "signature": "Queue si qi sm qm so qo a-\u003eEvent Double-\u003eProcess a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Queue.html#v:dequeueWithPriority",
      "description": {
        "fct-descr": "\u003cp\u003eDequeue with the priority suspending the process if the queue is empty.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Queue",
        "fct-package": "aivika",
        "fct-signature": "Queue si qi sm qm so qo a-\u003e Double-\u003e Process a",
        "fct-type": "function",
        "title": "dequeueWithPriority"
      },
      "index": {
        "description": "Dequeue with the priority suspending the process if the queue is empty",
        "hierarchy": "Simulation Aivika Queue",
        "module": "Simulation.Aivika.Queue",
        "name": "dequeueWithPriority",
        "normalized": "Queue a b c d e f g-\u003eDouble-\u003eProcess g",
        "package": "aivika",
        "partial": "With Priority",
        "signature": "Queue si qi sm qm so qo a-\u003eDouble-\u003eProcess a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Queue.html#v:dequeued",
      "description": {
        "fct-descr": "\u003cp\u003eReturn a signal that notifies when any item is dequeued.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Queue",
        "fct-package": "aivika",
        "fct-signature": "Queue si qi sm qm so qo a -\u003e Signal a",
        "fct-source": "src/Simulation-Aivika-Queue.html#dequeued",
        "fct-type": "function",
        "title": "dequeued"
      },
      "index": {
        "description": "Return signal that notifies when any item is dequeued",
        "hierarchy": "Simulation Aivika Queue",
        "module": "Simulation.Aivika.Queue",
        "name": "dequeued",
        "normalized": "Queue a b c d e f g-\u003eSignal g",
        "package": "aivika",
        "partial": "",
        "signature": "Queue si qi sm qm so qo a-\u003eSignal a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Queue.html#v:enqueue",
      "description": {
        "fct-descr": "\u003cp\u003eEnqueue the item suspending the process if the queue is full.  \n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Queue",
        "fct-package": "aivika",
        "fct-signature": "Queue si qi sm qm so qo a-\u003e a-\u003e Process ()",
        "fct-type": "function",
        "title": "enqueue"
      },
      "index": {
        "description": "Enqueue the item suspending the process if the queue is full",
        "hierarchy": "Simulation Aivika Queue",
        "module": "Simulation.Aivika.Queue",
        "name": "enqueue",
        "normalized": "Queue a b c d e f g-\u003eg-\u003eProcess()",
        "package": "aivika",
        "partial": "",
        "signature": "Queue si qi sm qm so qo a-\u003ea-\u003eProcess()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Queue.html#v:enqueueOrLost",
      "description": {
        "fct-descr": "\u003cp\u003eTry to enqueue the item. If the queue is full then the item will be lost\n and \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e will be returned.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Queue",
        "fct-package": "aivika",
        "fct-signature": "Queue si qi sm qm so qo a-\u003e a-\u003e Event Bool",
        "fct-type": "function",
        "title": "enqueueOrLost"
      },
      "index": {
        "description": "Try to enqueue the item If the queue is full then the item will be lost and False will be returned",
        "hierarchy": "Simulation Aivika Queue",
        "module": "Simulation.Aivika.Queue",
        "name": "enqueueOrLost",
        "normalized": "Queue a b c d e f g-\u003eg-\u003eEvent Bool",
        "package": "aivika",
        "partial": "Or Lost",
        "signature": "Queue si qi sm qm so qo a-\u003ea-\u003eEvent Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Queue.html#v:enqueueOrLost_",
      "description": {
        "fct-descr": "\u003cp\u003eTry to enqueue the item. If the queue is full then the item will be lost.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Queue",
        "fct-package": "aivika",
        "fct-signature": "Queue si qi sm qm so qo a-\u003e a-\u003e Event ()",
        "fct-type": "function",
        "title": "enqueueOrLost_"
      },
      "index": {
        "description": "Try to enqueue the item If the queue is full then the item will be lost",
        "hierarchy": "Simulation Aivika Queue",
        "module": "Simulation.Aivika.Queue",
        "name": "enqueueOrLost_",
        "normalized": "Queue a b c d e f g-\u003eg-\u003eEvent()",
        "package": "aivika",
        "partial": "Or Lost",
        "signature": "Queue si qi sm qm so qo a-\u003ea-\u003eEvent()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Queue.html#v:enqueueWithDynamicPriority",
      "description": {
        "fct-descr": "\u003cp\u003eEnqueue with the dynamic priority the item suspending the process if the queue is full.  \n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Queue",
        "fct-package": "aivika",
        "fct-signature": "Queue si qi sm qm so qo a-\u003e Event Double-\u003e a-\u003e Process ()",
        "fct-type": "function",
        "title": "enqueueWithDynamicPriority"
      },
      "index": {
        "description": "Enqueue with the dynamic priority the item suspending the process if the queue is full",
        "hierarchy": "Simulation Aivika Queue",
        "module": "Simulation.Aivika.Queue",
        "name": "enqueueWithDynamicPriority",
        "normalized": "Queue a b c d e f g-\u003eEvent Double-\u003eg-\u003eProcess()",
        "package": "aivika",
        "partial": "With Dynamic Priority",
        "signature": "Queue si qi sm qm so qo a-\u003eEvent Double-\u003ea-\u003eProcess()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Queue.html#v:enqueueWithPriority",
      "description": {
        "fct-descr": "\u003cp\u003eEnqueue with the priority the item suspending the process if the queue is full.  \n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Queue",
        "fct-package": "aivika",
        "fct-signature": "Queue si qi sm qm so qo a-\u003e Double-\u003e a-\u003e Process ()",
        "fct-type": "function",
        "title": "enqueueWithPriority"
      },
      "index": {
        "description": "Enqueue with the priority the item suspending the process if the queue is full",
        "hierarchy": "Simulation Aivika Queue",
        "module": "Simulation.Aivika.Queue",
        "name": "enqueueWithPriority",
        "normalized": "Queue a b c d e f g-\u003eDouble-\u003eg-\u003eProcess()",
        "package": "aivika",
        "partial": "With Priority",
        "signature": "Queue si qi sm qm so qo a-\u003eDouble-\u003ea-\u003eProcess()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Queue.html#v:enqueued",
      "description": {
        "fct-descr": "\u003cp\u003eReturn a signal that notifies when any item is enqueued.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Queue",
        "fct-package": "aivika",
        "fct-signature": "Queue si qi sm qm so qo a -\u003e Signal a",
        "fct-source": "src/Simulation-Aivika-Queue.html#enqueued",
        "fct-type": "function",
        "title": "enqueued"
      },
      "index": {
        "description": "Return signal that notifies when any item is enqueued",
        "hierarchy": "Simulation Aivika Queue",
        "module": "Simulation.Aivika.Queue",
        "name": "enqueued",
        "normalized": "Queue a b c d e f g-\u003eSignal g",
        "package": "aivika",
        "partial": "",
        "signature": "Queue si qi sm qm so qo a-\u003eSignal a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Queue.html#v:enqueuedButLost",
      "description": {
        "fct-descr": "\u003cp\u003eReturn a signal which notifies that the item was lost when \n attempting to add it to the full queue with help of\n \u003ccode\u003e\u003ca\u003eenqueueOrLost\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eenqueueOrLost_\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Queue",
        "fct-package": "aivika",
        "fct-signature": "Queue si qi sm qm so qo a -\u003e Signal a",
        "fct-source": "src/Simulation-Aivika-Queue.html#enqueuedButLost",
        "fct-type": "function",
        "title": "enqueuedButLost"
      },
      "index": {
        "description": "Return signal which notifies that the item was lost when attempting to add it to the full queue with help of enqueueOrLost or enqueueOrLost",
        "hierarchy": "Simulation Aivika Queue",
        "module": "Simulation.Aivika.Queue",
        "name": "enqueuedButLost",
        "normalized": "Queue a b c d e f g-\u003eSignal g",
        "package": "aivika",
        "partial": "But Lost",
        "signature": "Queue si qi sm qm so qo a-\u003eSignal a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Queue.html#v:newQueue",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new queue with the specified strategies and maximum available number of items.  \n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Queue",
        "fct-package": "aivika",
        "fct-signature": "si-\u003e sm-\u003e so-\u003e Int-\u003e Simulation (Queue si qi sm qm so qo a)",
        "fct-type": "function",
        "title": "newQueue"
      },
      "index": {
        "description": "Create new queue with the specified strategies and maximum available number of items",
        "hierarchy": "Simulation Aivika Queue",
        "module": "Simulation.Aivika.Queue",
        "name": "newQueue",
        "normalized": "a-\u003eb-\u003ec-\u003eInt-\u003eSimulation(Queue a d b e c f g)",
        "package": "aivika",
        "partial": "Queue",
        "signature": "si-\u003esm-\u003eso-\u003eInt-\u003eSimulation(Queue si qi sm qm so qo a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Queue.html#v:queueCount",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the queue size.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Queue",
        "fct-package": "aivika",
        "fct-signature": "Queue si qi sm qm so qo a -\u003e Event Int",
        "fct-source": "src/Simulation-Aivika-Queue.html#queueCount",
        "fct-type": "function",
        "title": "queueCount"
      },
      "index": {
        "description": "Return the queue size",
        "hierarchy": "Simulation Aivika Queue",
        "module": "Simulation.Aivika.Queue",
        "name": "queueCount",
        "normalized": "Queue a b c d e f g-\u003eEvent Int",
        "package": "aivika",
        "partial": "Count",
        "signature": "Queue si qi sm qm so qo a-\u003eEvent Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Queue.html#v:queueFull",
      "description": {
        "fct-descr": "\u003cp\u003eTest whether the queue is full.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Queue",
        "fct-package": "aivika",
        "fct-signature": "Queue si qi sm qm so qo a -\u003e Event Bool",
        "fct-source": "src/Simulation-Aivika-Queue.html#queueFull",
        "fct-type": "function",
        "title": "queueFull"
      },
      "index": {
        "description": "Test whether the queue is full",
        "hierarchy": "Simulation Aivika Queue",
        "module": "Simulation.Aivika.Queue",
        "name": "queueFull",
        "normalized": "Queue a b c d e f g-\u003eEvent Bool",
        "package": "aivika",
        "partial": "Full",
        "signature": "Queue si qi sm qm so qo a-\u003eEvent Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Queue.html#v:queueLostCount",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the number of lost items.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Queue",
        "fct-package": "aivika",
        "fct-signature": "Queue si qi sm qm so qo a -\u003e Event Int",
        "fct-source": "src/Simulation-Aivika-Queue.html#queueLostCount",
        "fct-type": "function",
        "title": "queueLostCount"
      },
      "index": {
        "description": "Return the number of lost items",
        "hierarchy": "Simulation Aivika Queue",
        "module": "Simulation.Aivika.Queue",
        "name": "queueLostCount",
        "normalized": "Queue a b c d e f g-\u003eEvent Int",
        "package": "aivika",
        "partial": "Lost Count",
        "signature": "Queue si qi sm qm so qo a-\u003eEvent Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Queue.html#v:queueMaxCount",
      "description": {
        "fct-descr": "\u003cp\u003eThe maximum available number of items.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Queue",
        "fct-package": "aivika",
        "fct-signature": "Queue si qi sm qm so qo a -\u003e Int",
        "fct-source": "src/Simulation-Aivika-Queue.html#queueMaxCount",
        "fct-type": "function",
        "title": "queueMaxCount"
      },
      "index": {
        "description": "The maximum available number of items",
        "hierarchy": "Simulation Aivika Queue",
        "module": "Simulation.Aivika.Queue",
        "name": "queueMaxCount",
        "normalized": "Queue a b c d e f g-\u003eInt",
        "package": "aivika",
        "partial": "Max Count",
        "signature": "Queue si qi sm qm so qo a-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Queue.html#v:queueNull",
      "description": {
        "fct-descr": "\u003cp\u003eTest whether the queue is empty.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Queue",
        "fct-package": "aivika",
        "fct-signature": "Queue si qi sm qm so qo a -\u003e Event Bool",
        "fct-source": "src/Simulation-Aivika-Queue.html#queueNull",
        "fct-type": "function",
        "title": "queueNull"
      },
      "index": {
        "description": "Test whether the queue is empty",
        "hierarchy": "Simulation Aivika Queue",
        "module": "Simulation.Aivika.Queue",
        "name": "queueNull",
        "normalized": "Queue a b c d e f g-\u003eEvent Bool",
        "package": "aivika",
        "partial": "Null",
        "signature": "Queue si qi sm qm so qo a-\u003eEvent Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Queue.html#v:tryDequeue",
      "description": {
        "fct-descr": "\u003cp\u003eTry to dequeue from the queue immediately.  \n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Queue",
        "fct-package": "aivika",
        "fct-signature": "Queue si qi sm qm so qo a-\u003e Event (Maybe a)",
        "fct-type": "function",
        "title": "tryDequeue"
      },
      "index": {
        "description": "Try to dequeue from the queue immediately",
        "hierarchy": "Simulation Aivika Queue",
        "module": "Simulation.Aivika.Queue",
        "name": "tryDequeue",
        "normalized": "Queue a b c d e f g-\u003eEvent(Maybe g)",
        "package": "aivika",
        "partial": "Dequeue",
        "signature": "Queue si qi sm qm so qo a-\u003eEvent(Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Queue.html#v:tryEnqueue",
      "description": {
        "fct-descr": "\u003cp\u003eTry to enqueue the item. Return \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e in the monad if the queue is full.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Queue",
        "fct-package": "aivika",
        "fct-signature": "Queue si qi sm qm so qo a-\u003e a-\u003e Event Bool",
        "fct-type": "function",
        "title": "tryEnqueue"
      },
      "index": {
        "description": "Try to enqueue the item Return False in the monad if the queue is full",
        "hierarchy": "Simulation Aivika Queue",
        "module": "Simulation.Aivika.Queue",
        "name": "tryEnqueue",
        "normalized": "Queue a b c d e f g-\u003eg-\u003eEvent Bool",
        "package": "aivika",
        "partial": "Enqueue",
        "signature": "Queue si qi sm qm so qo a-\u003ea-\u003eEvent Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-QueueStrategy.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTested with: GHC 7.6.3\n\u003c/p\u003e\u003cp\u003eThis module defines the queue strategies.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Simulation.Aivika.QueueStrategy",
        "fct-package": "aivika",
        "fct-signature": "module",
        "fct-source": "src/Simulation-Aivika-QueueStrategy.html",
        "fct-type": "module",
        "title": "QueueStrategy"
      },
      "index": {
        "description": "Tested with GHC This module defines the queue strategies",
        "hierarchy": "Simulation Aivika QueueStrategy",
        "module": "Simulation.Aivika.QueueStrategy",
        "name": "QueueStrategy",
        "normalized": "",
        "package": "aivika",
        "partial": "Queue Strategy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-QueueStrategy.html#t:DequeueStrategy",
      "description": {
        "fct-descr": "\u003cp\u003eDefines a strategy with support of the dequeuing operation.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.QueueStrategy",
        "fct-package": "aivika",
        "fct-signature": "class",
        "fct-source": "src/Simulation-Aivika-QueueStrategy.html#DequeueStrategy",
        "fct-type": "class",
        "title": "DequeueStrategy"
      },
      "index": {
        "description": "Defines strategy with support of the dequeuing operation",
        "hierarchy": "Simulation Aivika QueueStrategy",
        "module": "Simulation.Aivika.QueueStrategy",
        "name": "DequeueStrategy",
        "normalized": "",
        "package": "aivika",
        "partial": "Dequeue Strategy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-QueueStrategy.html#t:DynamicPriorityQueueStrategy",
      "description": {
        "fct-descr": "\u003cp\u003eIt defines a strategy when we can enqueue an element with the dynamic priority.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.QueueStrategy",
        "fct-package": "aivika",
        "fct-signature": "class",
        "fct-source": "src/Simulation-Aivika-QueueStrategy.html#DynamicPriorityQueueStrategy",
        "fct-type": "class",
        "title": "DynamicPriorityQueueStrategy"
      },
      "index": {
        "description": "It defines strategy when we can enqueue an element with the dynamic priority",
        "hierarchy": "Simulation Aivika QueueStrategy",
        "module": "Simulation.Aivika.QueueStrategy",
        "name": "DynamicPriorityQueueStrategy",
        "normalized": "",
        "package": "aivika",
        "partial": "Dynamic Priority Queue Strategy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-QueueStrategy.html#t:EnqueueStrategy",
      "description": {
        "fct-descr": "\u003cp\u003eIt defines a strategy when we can enqueue a single element.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.QueueStrategy",
        "fct-package": "aivika",
        "fct-signature": "class",
        "fct-source": "src/Simulation-Aivika-QueueStrategy.html#EnqueueStrategy",
        "fct-type": "class",
        "title": "EnqueueStrategy"
      },
      "index": {
        "description": "It defines strategy when we can enqueue single element",
        "hierarchy": "Simulation Aivika QueueStrategy",
        "module": "Simulation.Aivika.QueueStrategy",
        "name": "EnqueueStrategy",
        "normalized": "",
        "package": "aivika",
        "partial": "Enqueue Strategy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-QueueStrategy.html#t:FCFS",
      "description": {
        "fct-descr": "\u003cp\u003eStrategy: First Come - First Served (FCFS).\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.QueueStrategy",
        "fct-package": "aivika",
        "fct-signature": "data",
        "fct-source": "src/Simulation-Aivika-QueueStrategy.html#FCFS",
        "fct-type": "data",
        "title": "FCFS"
      },
      "index": {
        "description": "Strategy First Come First Served FCFS",
        "hierarchy": "Simulation Aivika QueueStrategy",
        "module": "Simulation.Aivika.QueueStrategy",
        "name": "FCFS",
        "normalized": "",
        "package": "aivika",
        "partial": "FCFS",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-QueueStrategy.html#t:LCFS",
      "description": {
        "fct-descr": "\u003cp\u003eStrategy: Last Come - First Served (LCFS)\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.QueueStrategy",
        "fct-package": "aivika",
        "fct-signature": "data",
        "fct-source": "src/Simulation-Aivika-QueueStrategy.html#LCFS",
        "fct-type": "data",
        "title": "LCFS"
      },
      "index": {
        "description": "Strategy Last Come First Served LCFS",
        "hierarchy": "Simulation Aivika QueueStrategy",
        "module": "Simulation.Aivika.QueueStrategy",
        "name": "LCFS",
        "normalized": "",
        "package": "aivika",
        "partial": "LCFS",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-QueueStrategy.html#t:PriorityQueueStrategy",
      "description": {
        "fct-descr": "\u003cp\u003eIt defines a strategy when we can enqueue an element with the specified priority.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.QueueStrategy",
        "fct-package": "aivika",
        "fct-signature": "class",
        "fct-source": "src/Simulation-Aivika-QueueStrategy.html#PriorityQueueStrategy",
        "fct-type": "class",
        "title": "PriorityQueueStrategy"
      },
      "index": {
        "description": "It defines strategy when we can enqueue an element with the specified priority",
        "hierarchy": "Simulation Aivika QueueStrategy",
        "module": "Simulation.Aivika.QueueStrategy",
        "name": "PriorityQueueStrategy",
        "normalized": "",
        "package": "aivika",
        "partial": "Priority Queue Strategy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-QueueStrategy.html#t:QueueStrategy",
      "description": {
        "fct-descr": "\u003cp\u003eDefines the basic queue strategy.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.QueueStrategy",
        "fct-package": "aivika",
        "fct-signature": "class",
        "fct-source": "src/Simulation-Aivika-QueueStrategy.html#QueueStrategy",
        "fct-type": "class",
        "title": "QueueStrategy"
      },
      "index": {
        "description": "Defines the basic queue strategy",
        "hierarchy": "Simulation Aivika QueueStrategy",
        "module": "Simulation.Aivika.QueueStrategy",
        "name": "QueueStrategy",
        "normalized": "",
        "package": "aivika",
        "partial": "Queue Strategy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-QueueStrategy.html#t:SIRO",
      "description": {
        "fct-descr": "\u003cp\u003eStrategy: Service in Random Order (SIRO).\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.QueueStrategy",
        "fct-package": "aivika",
        "fct-signature": "data",
        "fct-source": "src/Simulation-Aivika-QueueStrategy.html#SIRO",
        "fct-type": "data",
        "title": "SIRO"
      },
      "index": {
        "description": "Strategy Service in Random Order SIRO",
        "hierarchy": "Simulation Aivika QueueStrategy",
        "module": "Simulation.Aivika.QueueStrategy",
        "name": "SIRO",
        "normalized": "",
        "package": "aivika",
        "partial": "SIRO",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-QueueStrategy.html#t:StaticPriorities",
      "description": {
        "fct-descr": "\u003cp\u003eStrategy: Static Priorities. It uses the priority queue.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.QueueStrategy",
        "fct-package": "aivika",
        "fct-signature": "data",
        "fct-source": "src/Simulation-Aivika-QueueStrategy.html#StaticPriorities",
        "fct-type": "data",
        "title": "StaticPriorities"
      },
      "index": {
        "description": "Strategy Static Priorities It uses the priority queue",
        "hierarchy": "Simulation Aivika QueueStrategy",
        "module": "Simulation.Aivika.QueueStrategy",
        "name": "StaticPriorities",
        "normalized": "",
        "package": "aivika",
        "partial": "Static Priorities",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-QueueStrategy.html#v:FCFS",
      "description": {
        "fct-module": "Simulation.Aivika.QueueStrategy",
        "fct-package": "aivika",
        "fct-signature": "FCFS",
        "fct-source": "src/Simulation-Aivika-QueueStrategy.html#FCFS",
        "fct-type": "function",
        "title": "FCFS"
      },
      "index": {
        "description": "",
        "hierarchy": "Simulation Aivika QueueStrategy",
        "module": "Simulation.Aivika.QueueStrategy",
        "name": "FCFS",
        "normalized": "",
        "package": "aivika",
        "partial": "FCFS",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-QueueStrategy.html#v:LCFS",
      "description": {
        "fct-module": "Simulation.Aivika.QueueStrategy",
        "fct-package": "aivika",
        "fct-signature": "LCFS",
        "fct-source": "src/Simulation-Aivika-QueueStrategy.html#LCFS",
        "fct-type": "function",
        "title": "LCFS"
      },
      "index": {
        "description": "",
        "hierarchy": "Simulation Aivika QueueStrategy",
        "module": "Simulation.Aivika.QueueStrategy",
        "name": "LCFS",
        "normalized": "",
        "package": "aivika",
        "partial": "LCFS",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-QueueStrategy.html#v:SIRO",
      "description": {
        "fct-module": "Simulation.Aivika.QueueStrategy",
        "fct-package": "aivika",
        "fct-signature": "SIRO",
        "fct-source": "src/Simulation-Aivika-QueueStrategy.html#SIRO",
        "fct-type": "function",
        "title": "SIRO"
      },
      "index": {
        "description": "",
        "hierarchy": "Simulation Aivika QueueStrategy",
        "module": "Simulation.Aivika.QueueStrategy",
        "name": "SIRO",
        "normalized": "",
        "package": "aivika",
        "partial": "SIRO",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-QueueStrategy.html#v:StaticPriorities",
      "description": {
        "fct-module": "Simulation.Aivika.QueueStrategy",
        "fct-package": "aivika",
        "fct-signature": "StaticPriorities",
        "fct-source": "src/Simulation-Aivika-QueueStrategy.html#StaticPriorities",
        "fct-type": "function",
        "title": "StaticPriorities"
      },
      "index": {
        "description": "",
        "hierarchy": "Simulation Aivika QueueStrategy",
        "module": "Simulation.Aivika.QueueStrategy",
        "name": "StaticPriorities",
        "normalized": "",
        "package": "aivika",
        "partial": "Static Priorities",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-QueueStrategy.html#v:newStrategyQueue",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new queue by the specified strategy.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.QueueStrategy",
        "fct-package": "aivika",
        "fct-signature": "s -\u003e Simulation (q i)",
        "fct-source": "src/Simulation-Aivika-QueueStrategy.html#newStrategyQueue",
        "fct-type": "method",
        "title": "newStrategyQueue"
      },
      "index": {
        "description": "Create new queue by the specified strategy",
        "hierarchy": "Simulation Aivika QueueStrategy",
        "module": "Simulation.Aivika.QueueStrategy",
        "name": "newStrategyQueue",
        "normalized": "a-\u003eSimulation(b c)",
        "package": "aivika",
        "partial": "Strategy Queue",
        "signature": "s-\u003eSimulation(q i)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-QueueStrategy.html#v:strategyDequeue",
      "description": {
        "fct-descr": "\u003cp\u003eDequeue the front element and return it.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.QueueStrategy",
        "fct-package": "aivika",
        "fct-signature": "s -\u003e q i -\u003e Event i",
        "fct-source": "src/Simulation-Aivika-QueueStrategy.html#strategyDequeue",
        "fct-type": "method",
        "title": "strategyDequeue"
      },
      "index": {
        "description": "Dequeue the front element and return it",
        "hierarchy": "Simulation Aivika QueueStrategy",
        "module": "Simulation.Aivika.QueueStrategy",
        "name": "strategyDequeue",
        "normalized": "a-\u003eb c-\u003eEvent c",
        "package": "aivika",
        "partial": "Dequeue",
        "signature": "s-\u003eq i-\u003eEvent i"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-QueueStrategy.html#v:strategyEnqueue",
      "description": {
        "fct-descr": "\u003cp\u003eEnqueue an element.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.QueueStrategy",
        "fct-package": "aivika",
        "fct-signature": "s -\u003e q i -\u003e i -\u003e Event ()",
        "fct-source": "src/Simulation-Aivika-QueueStrategy.html#strategyEnqueue",
        "fct-type": "method",
        "title": "strategyEnqueue"
      },
      "index": {
        "description": "Enqueue an element",
        "hierarchy": "Simulation Aivika QueueStrategy",
        "module": "Simulation.Aivika.QueueStrategy",
        "name": "strategyEnqueue",
        "normalized": "a-\u003eb c-\u003ec-\u003eEvent()",
        "package": "aivika",
        "partial": "Enqueue",
        "signature": "s-\u003eq i-\u003ei-\u003eEvent()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-QueueStrategy.html#v:strategyEnqueueWithDynamicPriority",
      "description": {
        "fct-descr": "\u003cp\u003eEnqueue an element with the specified priority.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.QueueStrategy",
        "fct-package": "aivika",
        "fct-signature": "s -\u003e q i -\u003e Event Double -\u003e i -\u003e Event ()",
        "fct-source": "src/Simulation-Aivika-QueueStrategy.html#strategyEnqueueWithDynamicPriority",
        "fct-type": "method",
        "title": "strategyEnqueueWithDynamicPriority"
      },
      "index": {
        "description": "Enqueue an element with the specified priority",
        "hierarchy": "Simulation Aivika QueueStrategy",
        "module": "Simulation.Aivika.QueueStrategy",
        "name": "strategyEnqueueWithDynamicPriority",
        "normalized": "a-\u003eb c-\u003eEvent Double-\u003ec-\u003eEvent()",
        "package": "aivika",
        "partial": "Enqueue With Dynamic Priority",
        "signature": "s-\u003eq i-\u003eEvent Double-\u003ei-\u003eEvent()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-QueueStrategy.html#v:strategyEnqueueWithPriority",
      "description": {
        "fct-descr": "\u003cp\u003eEnqueue an element with the specified priority.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.QueueStrategy",
        "fct-package": "aivika",
        "fct-signature": "s -\u003e q i -\u003e Double -\u003e i -\u003e Event ()",
        "fct-source": "src/Simulation-Aivika-QueueStrategy.html#strategyEnqueueWithPriority",
        "fct-type": "method",
        "title": "strategyEnqueueWithPriority"
      },
      "index": {
        "description": "Enqueue an element with the specified priority",
        "hierarchy": "Simulation Aivika QueueStrategy",
        "module": "Simulation.Aivika.QueueStrategy",
        "name": "strategyEnqueueWithPriority",
        "normalized": "a-\u003eb c-\u003eDouble-\u003ec-\u003eEvent()",
        "package": "aivika",
        "partial": "Enqueue With Priority",
        "signature": "s-\u003eq i-\u003eDouble-\u003ei-\u003eEvent()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-QueueStrategy.html#v:strategyQueueNull",
      "description": {
        "fct-descr": "\u003cp\u003eTest whether the queue is empty.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.QueueStrategy",
        "fct-package": "aivika",
        "fct-signature": "s -\u003e q i -\u003e Event Bool",
        "fct-source": "src/Simulation-Aivika-QueueStrategy.html#strategyQueueNull",
        "fct-type": "method",
        "title": "strategyQueueNull"
      },
      "index": {
        "description": "Test whether the queue is empty",
        "hierarchy": "Simulation Aivika QueueStrategy",
        "module": "Simulation.Aivika.QueueStrategy",
        "name": "strategyQueueNull",
        "normalized": "a-\u003eb c-\u003eEvent Bool",
        "package": "aivika",
        "partial": "Queue Null",
        "signature": "s-\u003eq i-\u003eEvent Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Random.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTested with: GHC 7.6.3\n\u003c/p\u003e\u003cp\u003eBelow are defined some random functions.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Simulation.Aivika.Random",
        "fct-package": "aivika",
        "fct-signature": "module",
        "fct-source": "src/Simulation-Aivika-Random.html",
        "fct-type": "module",
        "title": "Random"
      },
      "index": {
        "description": "Tested with GHC Below are defined some random functions",
        "hierarchy": "Simulation Aivika Random",
        "module": "Simulation.Aivika.Random",
        "name": "Random",
        "normalized": "",
        "package": "aivika",
        "partial": "Random",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Random.html#v:newNormalGen",
      "description": {
        "fct-descr": "\u003cp\u003eCreatea a normal random number generator with mean 0 and variance 1.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Random",
        "fct-package": "aivika",
        "fct-signature": "IO (IO Double)",
        "fct-source": "src/Simulation-Aivika-Random.html#newNormalGen",
        "fct-type": "function",
        "title": "newNormalGen"
      },
      "index": {
        "description": "Createa normal random number generator with mean and variance",
        "hierarchy": "Simulation Aivika Random",
        "module": "Simulation.Aivika.Random",
        "name": "newNormalGen",
        "normalized": "",
        "package": "aivika",
        "partial": "Normal Gen",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Ref.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTested with: GHC 7.6.3\n\u003c/p\u003e\u003cp\u003eThis module defines an updatable reference that depends on the event queue.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Simulation.Aivika.Ref",
        "fct-package": "aivika",
        "fct-signature": "module",
        "fct-source": "src/Simulation-Aivika-Ref.html",
        "fct-type": "module",
        "title": "Ref"
      },
      "index": {
        "description": "Tested with GHC This module defines an updatable reference that depends on the event queue",
        "hierarchy": "Simulation Aivika Ref",
        "module": "Simulation.Aivika.Ref",
        "name": "Ref",
        "normalized": "",
        "package": "aivika",
        "partial": "Ref",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Ref.html#t:Ref",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eRef\u003c/a\u003e\u003c/code\u003e type represents a mutable variable similar to the \u003ccode\u003e\u003ca\u003eIORef\u003c/a\u003e\u003c/code\u003e variable \n but only dependent on the event queue, which allows synchronizing the reference\n with the model explicitly through the \u003ccode\u003e\u003ca\u003eEvent\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Ref",
        "fct-package": "aivika",
        "fct-signature": "data",
        "fct-source": "src/Simulation-Aivika-Ref.html#Ref",
        "fct-type": "data",
        "title": "Ref"
      },
      "index": {
        "description": "The Ref type represents mutable variable similar to the IORef variable but only dependent on the event queue which allows synchronizing the reference with the model explicitly through the Event monad",
        "hierarchy": "Simulation Aivika Ref",
        "module": "Simulation.Aivika.Ref",
        "name": "Ref",
        "normalized": "",
        "package": "aivika",
        "partial": "Ref",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Ref.html#v:modifyRef",
      "description": {
        "fct-descr": "\u003cp\u003eMutate the contents of the reference.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Ref",
        "fct-package": "aivika",
        "fct-signature": "Ref a -\u003e (a -\u003e a) -\u003e Event ()",
        "fct-source": "src/Simulation-Aivika-Ref.html#modifyRef",
        "fct-type": "function",
        "title": "modifyRef"
      },
      "index": {
        "description": "Mutate the contents of the reference",
        "hierarchy": "Simulation Aivika Ref",
        "module": "Simulation.Aivika.Ref",
        "name": "modifyRef",
        "normalized": "Ref a-\u003e(a-\u003ea)-\u003eEvent()",
        "package": "aivika",
        "partial": "Ref",
        "signature": "Ref a-\u003e(a-\u003ea)-\u003eEvent()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Ref.html#v:newRef",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new reference.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Ref",
        "fct-package": "aivika",
        "fct-signature": "a -\u003e Simulation (Ref a)",
        "fct-source": "src/Simulation-Aivika-Ref.html#newRef",
        "fct-type": "function",
        "title": "newRef"
      },
      "index": {
        "description": "Create new reference",
        "hierarchy": "Simulation Aivika Ref",
        "module": "Simulation.Aivika.Ref",
        "name": "newRef",
        "normalized": "a-\u003eSimulation(Ref a)",
        "package": "aivika",
        "partial": "Ref",
        "signature": "a-\u003eSimulation(Ref a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Ref.html#v:readRef",
      "description": {
        "fct-descr": "\u003cp\u003eRead the value of a reference.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Ref",
        "fct-package": "aivika",
        "fct-signature": "Ref a -\u003e Event a",
        "fct-source": "src/Simulation-Aivika-Ref.html#readRef",
        "fct-type": "function",
        "title": "readRef"
      },
      "index": {
        "description": "Read the value of reference",
        "hierarchy": "Simulation Aivika Ref",
        "module": "Simulation.Aivika.Ref",
        "name": "readRef",
        "normalized": "Ref a-\u003eEvent a",
        "package": "aivika",
        "partial": "Ref",
        "signature": "Ref a-\u003eEvent a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Ref.html#v:refChanged",
      "description": {
        "fct-descr": "\u003cp\u003eReturn a signal that notifies about every change of the reference state.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Ref",
        "fct-package": "aivika",
        "fct-signature": "Ref a -\u003e Signal a",
        "fct-source": "src/Simulation-Aivika-Ref.html#refChanged",
        "fct-type": "function",
        "title": "refChanged"
      },
      "index": {
        "description": "Return signal that notifies about every change of the reference state",
        "hierarchy": "Simulation Aivika Ref",
        "module": "Simulation.Aivika.Ref",
        "name": "refChanged",
        "normalized": "Ref a-\u003eSignal a",
        "package": "aivika",
        "partial": "Changed",
        "signature": "Ref a-\u003eSignal a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Ref.html#v:refChanged_",
      "description": {
        "fct-descr": "\u003cp\u003eReturn a signal that notifies about every change of the reference state.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Ref",
        "fct-package": "aivika",
        "fct-signature": "Ref a -\u003e Signal ()",
        "fct-source": "src/Simulation-Aivika-Ref.html#refChanged_",
        "fct-type": "function",
        "title": "refChanged_"
      },
      "index": {
        "description": "Return signal that notifies about every change of the reference state",
        "hierarchy": "Simulation Aivika Ref",
        "module": "Simulation.Aivika.Ref",
        "name": "refChanged_",
        "normalized": "Ref a-\u003eSignal()",
        "package": "aivika",
        "partial": "Changed",
        "signature": "Ref a-\u003eSignal()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Ref.html#v:writeRef",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a new value into the reference.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Ref",
        "fct-package": "aivika",
        "fct-signature": "Ref a -\u003e a -\u003e Event ()",
        "fct-source": "src/Simulation-Aivika-Ref.html#writeRef",
        "fct-type": "function",
        "title": "writeRef"
      },
      "index": {
        "description": "Write new value into the reference",
        "hierarchy": "Simulation Aivika Ref",
        "module": "Simulation.Aivika.Ref",
        "name": "writeRef",
        "normalized": "Ref a-\u003ea-\u003eEvent()",
        "package": "aivika",
        "partial": "Ref",
        "signature": "Ref a-\u003ea-\u003eEvent()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Resource.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTested with: GHC 7.6.3\n\u003c/p\u003e\u003cp\u003eThis module defines a limited resource which can be acquired and \n then released by the discontinuous process \u003ccode\u003e\u003ca\u003eProcess\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Simulation.Aivika.Resource",
        "fct-package": "aivika",
        "fct-signature": "module",
        "fct-source": "src/Simulation-Aivika-Resource.html",
        "fct-type": "module",
        "title": "Resource"
      },
      "index": {
        "description": "Tested with GHC This module defines limited resource which can be acquired and then released by the discontinuous process Process",
        "hierarchy": "Simulation Aivika Resource",
        "module": "Simulation.Aivika.Resource",
        "name": "Resource",
        "normalized": "",
        "package": "aivika",
        "partial": "Resource",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Resource.html#t:Resource",
      "description": {
        "fct-descr": "\u003cp\u003eRepresents a limited resource.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Resource",
        "fct-package": "aivika",
        "fct-signature": "data",
        "fct-source": "src/Simulation-Aivika-Resource.html#Resource",
        "fct-type": "data",
        "title": "Resource"
      },
      "index": {
        "description": "Represents limited resource",
        "hierarchy": "Simulation Aivika Resource",
        "module": "Simulation.Aivika.Resource",
        "name": "Resource",
        "normalized": "",
        "package": "aivika",
        "partial": "Resource",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Resource.html#v:newResource",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new resource with the specified queue strategy and maximum count.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Resource",
        "fct-package": "aivika",
        "fct-signature": "s-\u003e Int-\u003e Simulation (Resource s q)",
        "fct-type": "function",
        "title": "newResource"
      },
      "index": {
        "description": "Create new resource with the specified queue strategy and maximum count",
        "hierarchy": "Simulation Aivika Resource",
        "module": "Simulation.Aivika.Resource",
        "name": "newResource",
        "normalized": "a-\u003eInt-\u003eSimulation(Resource a b)",
        "package": "aivika",
        "partial": "Resource",
        "signature": "s-\u003eInt-\u003eSimulation(Resource s q)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Resource.html#v:newResourceWithCount",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new resource with the specified queue strategy, maximum and initial count.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Resource",
        "fct-package": "aivika",
        "fct-signature": "s-\u003e Int-\u003e Int-\u003e Simulation (Resource s q)",
        "fct-type": "function",
        "title": "newResourceWithCount"
      },
      "index": {
        "description": "Create new resource with the specified queue strategy maximum and initial count",
        "hierarchy": "Simulation Aivika Resource",
        "module": "Simulation.Aivika.Resource",
        "name": "newResourceWithCount",
        "normalized": "a-\u003eInt-\u003eInt-\u003eSimulation(Resource a b)",
        "package": "aivika",
        "partial": "Resource With Count",
        "signature": "s-\u003eInt-\u003eInt-\u003eSimulation(Resource s q)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Resource.html#v:releaseResource",
      "description": {
        "fct-descr": "\u003cp\u003eRelease the resource increasing its count and resuming one of the\n previously suspended processes as possible.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Resource",
        "fct-package": "aivika",
        "fct-signature": "Resource s q-\u003e Process ()",
        "fct-type": "function",
        "title": "releaseResource"
      },
      "index": {
        "description": "Release the resource increasing its count and resuming one of the previously suspended processes as possible",
        "hierarchy": "Simulation Aivika Resource",
        "module": "Simulation.Aivika.Resource",
        "name": "releaseResource",
        "normalized": "Resource a b-\u003eProcess()",
        "package": "aivika",
        "partial": "Resource",
        "signature": "Resource s q-\u003eProcess()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Resource.html#v:releaseResourceWithinEvent",
      "description": {
        "fct-descr": "\u003cp\u003eRelease the resource increasing its count and resuming one of the\n previously suspended processes as possible.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Resource",
        "fct-package": "aivika",
        "fct-signature": "Resource s q-\u003e Event ()",
        "fct-type": "function",
        "title": "releaseResourceWithinEvent"
      },
      "index": {
        "description": "Release the resource increasing its count and resuming one of the previously suspended processes as possible",
        "hierarchy": "Simulation Aivika Resource",
        "module": "Simulation.Aivika.Resource",
        "name": "releaseResourceWithinEvent",
        "normalized": "Resource a b-\u003eEvent()",
        "package": "aivika",
        "partial": "Resource Within Event",
        "signature": "Resource s q-\u003eEvent()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Resource.html#v:requestResource",
      "description": {
        "fct-descr": "\u003cp\u003eRequest for the resource decreasing its count in case of success,\n otherwise suspending the discontinuous process until some other \n process releases the resource.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Resource",
        "fct-package": "aivika",
        "fct-signature": "Resource s q-\u003e Process ()",
        "fct-type": "function",
        "title": "requestResource"
      },
      "index": {
        "description": "Request for the resource decreasing its count in case of success otherwise suspending the discontinuous process until some other process releases the resource",
        "hierarchy": "Simulation Aivika Resource",
        "module": "Simulation.Aivika.Resource",
        "name": "requestResource",
        "normalized": "Resource a b-\u003eProcess()",
        "package": "aivika",
        "partial": "Resource",
        "signature": "Resource s q-\u003eProcess()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Resource.html#v:requestResourceWithDynamicPriority",
      "description": {
        "fct-descr": "\u003cp\u003eRequest with the dynamic priority for the resource decreasing its count\n in case of success, otherwise suspending the discontinuous process\n until some other process releases the resource.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Resource",
        "fct-package": "aivika",
        "fct-signature": "Resource s q-\u003e Event Double-\u003e Process ()",
        "fct-type": "function",
        "title": "requestResourceWithDynamicPriority"
      },
      "index": {
        "description": "Request with the dynamic priority for the resource decreasing its count in case of success otherwise suspending the discontinuous process until some other process releases the resource",
        "hierarchy": "Simulation Aivika Resource",
        "module": "Simulation.Aivika.Resource",
        "name": "requestResourceWithDynamicPriority",
        "normalized": "Resource a b-\u003eEvent Double-\u003eProcess()",
        "package": "aivika",
        "partial": "Resource With Dynamic Priority",
        "signature": "Resource s q-\u003eEvent Double-\u003eProcess()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Resource.html#v:requestResourceWithPriority",
      "description": {
        "fct-descr": "\u003cp\u003eRequest with the priority for the resource decreasing its count\n in case of success, otherwise suspending the discontinuous process\n until some other process releases the resource.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Resource",
        "fct-package": "aivika",
        "fct-signature": "Resource s q-\u003e Double-\u003e Process ()",
        "fct-type": "function",
        "title": "requestResourceWithPriority"
      },
      "index": {
        "description": "Request with the priority for the resource decreasing its count in case of success otherwise suspending the discontinuous process until some other process releases the resource",
        "hierarchy": "Simulation Aivika Resource",
        "module": "Simulation.Aivika.Resource",
        "name": "requestResourceWithPriority",
        "normalized": "Resource a b-\u003eDouble-\u003eProcess()",
        "package": "aivika",
        "partial": "Resource With Priority",
        "signature": "Resource s q-\u003eDouble-\u003eProcess()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Resource.html#v:resourceCount",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the current count of the resource.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Resource",
        "fct-package": "aivika",
        "fct-signature": "Resource s q -\u003e Event Int",
        "fct-source": "src/Simulation-Aivika-Resource.html#resourceCount",
        "fct-type": "function",
        "title": "resourceCount"
      },
      "index": {
        "description": "Return the current count of the resource",
        "hierarchy": "Simulation Aivika Resource",
        "module": "Simulation.Aivika.Resource",
        "name": "resourceCount",
        "normalized": "Resource a b-\u003eEvent Int",
        "package": "aivika",
        "partial": "Count",
        "signature": "Resource s q-\u003eEvent Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Resource.html#v:resourceMaxCount",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the maximum count of the resource.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Resource",
        "fct-package": "aivika",
        "fct-signature": "Resource s q -\u003e Int",
        "fct-source": "src/Simulation-Aivika-Resource.html#resourceMaxCount",
        "fct-type": "function",
        "title": "resourceMaxCount"
      },
      "index": {
        "description": "Return the maximum count of the resource",
        "hierarchy": "Simulation Aivika Resource",
        "module": "Simulation.Aivika.Resource",
        "name": "resourceMaxCount",
        "normalized": "Resource a b-\u003eInt",
        "package": "aivika",
        "partial": "Max Count",
        "signature": "Resource s q-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Resource.html#v:tryRequestResourceWithinEvent",
      "description": {
        "fct-descr": "\u003cp\u003eTry to request for the resource decreasing its count in case of success\n and returning \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e in the \u003ccode\u003e\u003ca\u003eEvent\u003c/a\u003e\u003c/code\u003e monad; otherwise, returning \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Resource",
        "fct-package": "aivika",
        "fct-signature": "Resource s q-\u003e Event Bool",
        "fct-type": "function",
        "title": "tryRequestResourceWithinEvent"
      },
      "index": {
        "description": "Try to request for the resource decreasing its count in case of success and returning True in the Event monad otherwise returning False",
        "hierarchy": "Simulation Aivika Resource",
        "module": "Simulation.Aivika.Resource",
        "name": "tryRequestResourceWithinEvent",
        "normalized": "Resource a b-\u003eEvent Bool",
        "package": "aivika",
        "partial": "Request Resource Within Event",
        "signature": "Resource s q-\u003eEvent Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Resource.html#v:usingResource",
      "description": {
        "fct-descr": "\u003cp\u003eAcquire the resource, perform some action and safely release the resource               \n in the end, even if the \u003ccode\u003eIOException\u003c/code\u003e was raised within the action. \n The process identifier must be created with support of exception \n handling, i.e. with help of function \u003ccode\u003e\u003ca\u003enewProcessIdWithCatch\u003c/a\u003e\u003c/code\u003e. Unfortunately,\n such processes are slower than those that are created with help of\n other function \u003ccode\u003e\u003ca\u003enewProcessId\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Resource",
        "fct-package": "aivika",
        "fct-signature": "Resource s q-\u003e Process a-\u003e Process a",
        "fct-type": "function",
        "title": "usingResource"
      },
      "index": {
        "description": "Acquire the resource perform some action and safely release the resource in the end even if the IOException was raised within the action The process identifier must be created with support of exception handling i.e with help of function newProcessIdWithCatch Unfortunately such processes are slower than those that are created with help of other function newProcessId",
        "hierarchy": "Simulation Aivika Resource",
        "module": "Simulation.Aivika.Resource",
        "name": "usingResource",
        "normalized": "Resource a b-\u003eProcess c-\u003eProcess c",
        "package": "aivika",
        "partial": "Resource",
        "signature": "Resource s q-\u003eProcess a-\u003eProcess a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Resource.html#v:usingResourceWithDynamicPriority",
      "description": {
        "fct-descr": "\u003cp\u003eAcquire the resource with the dynamic priority, perform some action and\n safely release the resource in the end, even if the \u003ccode\u003eIOException\u003c/code\u003e was raised\n within the action. The process identifier must be created with support of exception \n handling, i.e. with help of function \u003ccode\u003e\u003ca\u003enewProcessIdWithCatch\u003c/a\u003e\u003c/code\u003e. Unfortunately,\n such processes are slower than those that are created with help of\n other function \u003ccode\u003e\u003ca\u003enewProcessId\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Resource",
        "fct-package": "aivika",
        "fct-signature": "Resource s q-\u003e Event Double-\u003e Process a-\u003e Process a",
        "fct-type": "function",
        "title": "usingResourceWithDynamicPriority"
      },
      "index": {
        "description": "Acquire the resource with the dynamic priority perform some action and safely release the resource in the end even if the IOException was raised within the action The process identifier must be created with support of exception handling i.e with help of function newProcessIdWithCatch Unfortunately such processes are slower than those that are created with help of other function newProcessId",
        "hierarchy": "Simulation Aivika Resource",
        "module": "Simulation.Aivika.Resource",
        "name": "usingResourceWithDynamicPriority",
        "normalized": "Resource a b-\u003eEvent Double-\u003eProcess c-\u003eProcess c",
        "package": "aivika",
        "partial": "Resource With Dynamic Priority",
        "signature": "Resource s q-\u003eEvent Double-\u003eProcess a-\u003eProcess a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Resource.html#v:usingResourceWithPriority",
      "description": {
        "fct-descr": "\u003cp\u003eAcquire the resource with the specified priority, perform some action and\n safely release the resource in the end, even if the \u003ccode\u003eIOException\u003c/code\u003e was raised\n within the action. The process identifier must be created with support of exception \n handling, i.e. with help of function \u003ccode\u003e\u003ca\u003enewProcessIdWithCatch\u003c/a\u003e\u003c/code\u003e. Unfortunately,\n such processes are slower than those that are created with help of\n other function \u003ccode\u003e\u003ca\u003enewProcessId\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Resource",
        "fct-package": "aivika",
        "fct-signature": "Resource s q-\u003e Double-\u003e Process a-\u003e Process a",
        "fct-type": "function",
        "title": "usingResourceWithPriority"
      },
      "index": {
        "description": "Acquire the resource with the specified priority perform some action and safely release the resource in the end even if the IOException was raised within the action The process identifier must be created with support of exception handling i.e with help of function newProcessIdWithCatch Unfortunately such processes are slower than those that are created with help of other function newProcessId",
        "hierarchy": "Simulation Aivika Resource",
        "module": "Simulation.Aivika.Resource",
        "name": "usingResourceWithPriority",
        "normalized": "Resource a b-\u003eDouble-\u003eProcess c-\u003eProcess c",
        "package": "aivika",
        "partial": "Resource With Priority",
        "signature": "Resource s q-\u003eDouble-\u003eProcess a-\u003eProcess a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Signal.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTested with: GHC 7.6.3\n\u003c/p\u003e\u003cp\u003eThis module defines the signal which we can subscribe handlers to. \n These handlers can be disposed. The signal is triggered in the \n current time point actuating the corresponded computations from \n the handlers. \n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Simulation.Aivika.Signal",
        "fct-package": "aivika",
        "fct-signature": "module",
        "fct-source": "src/Simulation-Aivika-Signal.html",
        "fct-type": "module",
        "title": "Signal"
      },
      "index": {
        "description": "Tested with GHC This module defines the signal which we can subscribe handlers to These handlers can be disposed The signal is triggered in the current time point actuating the corresponded computations from the handlers",
        "hierarchy": "Simulation Aivika Signal",
        "module": "Simulation.Aivika.Signal",
        "name": "Signal",
        "normalized": "",
        "package": "aivika",
        "partial": "Signal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Signal.html#t:Signal",
      "description": {
        "fct-descr": "\u003cp\u003eThe signal that can have disposable handlers.  \n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Signal",
        "fct-package": "aivika",
        "fct-signature": "data",
        "fct-source": "src/Simulation-Aivika-Internal-Signal.html#Signal",
        "fct-type": "data",
        "title": "Signal"
      },
      "index": {
        "description": "The signal that can have disposable handlers",
        "hierarchy": "Simulation Aivika Signal",
        "module": "Simulation.Aivika.Signal",
        "name": "Signal",
        "normalized": "",
        "package": "aivika",
        "partial": "Signal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Signal.html#t:SignalHistory",
      "description": {
        "fct-descr": "\u003cp\u003eRepresents the history of the signal values.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Signal",
        "fct-package": "aivika",
        "fct-signature": "data",
        "fct-source": "src/Simulation-Aivika-Signal.html#SignalHistory",
        "fct-type": "data",
        "title": "SignalHistory"
      },
      "index": {
        "description": "Represents the history of the signal values",
        "hierarchy": "Simulation Aivika Signal",
        "module": "Simulation.Aivika.Signal",
        "name": "SignalHistory",
        "normalized": "",
        "package": "aivika",
        "partial": "Signal History",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Signal.html#t:SignalSource",
      "description": {
        "fct-descr": "\u003cp\u003eThe signal source that can publish its signal.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Signal",
        "fct-package": "aivika",
        "fct-signature": "data",
        "fct-source": "src/Simulation-Aivika-Internal-Signal.html#SignalSource",
        "fct-type": "data",
        "title": "SignalSource"
      },
      "index": {
        "description": "The signal source that can publish its signal",
        "hierarchy": "Simulation Aivika Signal",
        "module": "Simulation.Aivika.Signal",
        "name": "SignalSource",
        "normalized": "",
        "package": "aivika",
        "partial": "Signal Source",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Signal.html#v:Signal",
      "description": {
        "fct-module": "Simulation.Aivika.Signal",
        "fct-package": "aivika",
        "fct-signature": "Signal",
        "fct-source": "src/Simulation-Aivika-Internal-Signal.html#Signal",
        "fct-type": "function",
        "title": "Signal"
      },
      "index": {
        "description": "",
        "hierarchy": "Simulation Aivika Signal",
        "module": "Simulation.Aivika.Signal",
        "name": "Signal",
        "normalized": "",
        "package": "aivika",
        "partial": "Signal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Signal.html#v:apSignal",
      "description": {
        "fct-descr": "\u003cp\u003eTransform the signal.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Signal",
        "fct-package": "aivika",
        "fct-signature": "Event (a -\u003e b) -\u003e Signal a -\u003e Signal b",
        "fct-source": "src/Simulation-Aivika-Internal-Signal.html#apSignal",
        "fct-type": "function",
        "title": "apSignal"
      },
      "index": {
        "description": "Transform the signal",
        "hierarchy": "Simulation Aivika Signal",
        "module": "Simulation.Aivika.Signal",
        "name": "apSignal",
        "normalized": "Event(a-\u003eb)-\u003eSignal a-\u003eSignal b",
        "package": "aivika",
        "partial": "Signal",
        "signature": "Event(a-\u003eb)-\u003eSignal a-\u003eSignal b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Signal.html#v:awaitSignal",
      "description": {
        "fct-descr": "\u003cp\u003eAwait the signal.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Signal",
        "fct-package": "aivika",
        "fct-signature": "Signal a -\u003e Process a",
        "fct-source": "src/Simulation-Aivika-Signal.html#awaitSignal",
        "fct-type": "function",
        "title": "awaitSignal"
      },
      "index": {
        "description": "Await the signal",
        "hierarchy": "Simulation Aivika Signal",
        "module": "Simulation.Aivika.Signal",
        "name": "awaitSignal",
        "normalized": "Signal a-\u003eProcess a",
        "package": "aivika",
        "partial": "Signal",
        "signature": "Signal a-\u003eProcess a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Signal.html#v:emptySignal",
      "description": {
        "fct-descr": "\u003cp\u003eAn empty signal which is never triggered.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Signal",
        "fct-package": "aivika",
        "fct-signature": "Signal a",
        "fct-source": "src/Simulation-Aivika-Internal-Signal.html#emptySignal",
        "fct-type": "function",
        "title": "emptySignal"
      },
      "index": {
        "description": "An empty signal which is never triggered",
        "hierarchy": "Simulation Aivika Signal",
        "module": "Simulation.Aivika.Signal",
        "name": "emptySignal",
        "normalized": "",
        "package": "aivika",
        "partial": "Signal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Signal.html#v:filterSignal",
      "description": {
        "fct-descr": "\u003cp\u003eFilter only those signal values that satisfy to \n the specified predicate.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Signal",
        "fct-package": "aivika",
        "fct-signature": "(a -\u003e Bool) -\u003e Signal a -\u003e Signal a",
        "fct-source": "src/Simulation-Aivika-Internal-Signal.html#filterSignal",
        "fct-type": "function",
        "title": "filterSignal"
      },
      "index": {
        "description": "Filter only those signal values that satisfy to the specified predicate",
        "hierarchy": "Simulation Aivika Signal",
        "module": "Simulation.Aivika.Signal",
        "name": "filterSignal",
        "normalized": "(a-\u003eBool)-\u003eSignal a-\u003eSignal a",
        "package": "aivika",
        "partial": "Signal",
        "signature": "(a-\u003eBool)-\u003eSignal a-\u003eSignal a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Signal.html#v:filterSignalM",
      "description": {
        "fct-descr": "\u003cp\u003eFilter only those signal values that satisfy to \n the specified predicate.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Signal",
        "fct-package": "aivika",
        "fct-signature": "(a -\u003e Event Bool) -\u003e Signal a -\u003e Signal a",
        "fct-source": "src/Simulation-Aivika-Internal-Signal.html#filterSignalM",
        "fct-type": "function",
        "title": "filterSignalM"
      },
      "index": {
        "description": "Filter only those signal values that satisfy to the specified predicate",
        "hierarchy": "Simulation Aivika Signal",
        "module": "Simulation.Aivika.Signal",
        "name": "filterSignalM",
        "normalized": "(a-\u003eEvent Bool)-\u003eSignal a-\u003eSignal a",
        "package": "aivika",
        "partial": "Signal",
        "signature": "(a-\u003eEvent Bool)-\u003eSignal a-\u003eSignal a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Signal.html#v:handleSignal",
      "description": {
        "fct-descr": "\u003cp\u003eSubscribe the handler to the specified \n signal and return a nested computation \n that, being applied, unsubscribes the \n handler from this signal.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Signal",
        "fct-package": "aivika",
        "fct-signature": "(a -\u003e Event ()) -\u003e Event (Event ())",
        "fct-source": "src/Simulation-Aivika-Internal-Signal.html#Signal",
        "fct-type": "function",
        "title": "handleSignal"
      },
      "index": {
        "description": "Subscribe the handler to the specified signal and return nested computation that being applied unsubscribes the handler from this signal",
        "hierarchy": "Simulation Aivika Signal",
        "module": "Simulation.Aivika.Signal",
        "name": "handleSignal",
        "normalized": "(a-\u003eEvent())-\u003eEvent(Event())",
        "package": "aivika",
        "partial": "Signal",
        "signature": "(a-\u003eEvent())-\u003eEvent(Event())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Signal.html#v:handleSignal_",
      "description": {
        "fct-descr": "\u003cp\u003eSubscribe the handler to the specified signal.\n To subscribe the disposable handlers, use function \u003ccode\u003e\u003ca\u003ehandleSignal\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Signal",
        "fct-package": "aivika",
        "fct-signature": "Signal a -\u003e (a -\u003e Event ()) -\u003e Event ()",
        "fct-source": "src/Simulation-Aivika-Internal-Signal.html#handleSignal_",
        "fct-type": "function",
        "title": "handleSignal_"
      },
      "index": {
        "description": "Subscribe the handler to the specified signal To subscribe the disposable handlers use function handleSignal",
        "hierarchy": "Simulation Aivika Signal",
        "module": "Simulation.Aivika.Signal",
        "name": "handleSignal_",
        "normalized": "Signal a-\u003e(a-\u003eEvent())-\u003eEvent()",
        "package": "aivika",
        "partial": "Signal",
        "signature": "Signal a-\u003e(a-\u003eEvent())-\u003eEvent()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Signal.html#v:mapSignal",
      "description": {
        "fct-descr": "\u003cp\u003eMap the signal according the specified function.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Signal",
        "fct-package": "aivika",
        "fct-signature": "(a -\u003e b) -\u003e Signal a -\u003e Signal b",
        "fct-source": "src/Simulation-Aivika-Internal-Signal.html#mapSignal",
        "fct-type": "function",
        "title": "mapSignal"
      },
      "index": {
        "description": "Map the signal according the specified function",
        "hierarchy": "Simulation Aivika Signal",
        "module": "Simulation.Aivika.Signal",
        "name": "mapSignal",
        "normalized": "(a-\u003eb)-\u003eSignal a-\u003eSignal b",
        "package": "aivika",
        "partial": "Signal",
        "signature": "(a-\u003eb)-\u003eSignal a-\u003eSignal b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Signal.html#v:mapSignalM",
      "description": {
        "fct-descr": "\u003cp\u003eCompose the signal.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Signal",
        "fct-package": "aivika",
        "fct-signature": "(a -\u003e Event b) -\u003e Signal a -\u003e Signal b",
        "fct-source": "src/Simulation-Aivika-Internal-Signal.html#mapSignalM",
        "fct-type": "function",
        "title": "mapSignalM"
      },
      "index": {
        "description": "Compose the signal",
        "hierarchy": "Simulation Aivika Signal",
        "module": "Simulation.Aivika.Signal",
        "name": "mapSignalM",
        "normalized": "(a-\u003eEvent b)-\u003eSignal a-\u003eSignal b",
        "package": "aivika",
        "partial": "Signal",
        "signature": "(a-\u003eEvent b)-\u003eSignal a-\u003eSignal b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Signal.html#v:merge2Signals",
      "description": {
        "fct-descr": "\u003cp\u003eMerge two signals.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Signal",
        "fct-package": "aivika",
        "fct-signature": "Signal a -\u003e Signal a -\u003e Signal a",
        "fct-source": "src/Simulation-Aivika-Internal-Signal.html#merge2Signals",
        "fct-type": "function",
        "title": "merge2Signals"
      },
      "index": {
        "description": "Merge two signals",
        "hierarchy": "Simulation Aivika Signal",
        "module": "Simulation.Aivika.Signal",
        "name": "merge2Signals",
        "normalized": "Signal a-\u003eSignal a-\u003eSignal a",
        "package": "aivika",
        "partial": "Signals",
        "signature": "Signal a-\u003eSignal a-\u003eSignal a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Signal.html#v:merge3Signals",
      "description": {
        "fct-descr": "\u003cp\u003eMerge three signals.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Signal",
        "fct-package": "aivika",
        "fct-signature": "Signal a -\u003e Signal a -\u003e Signal a -\u003e Signal a",
        "fct-source": "src/Simulation-Aivika-Internal-Signal.html#merge3Signals",
        "fct-type": "function",
        "title": "merge3Signals"
      },
      "index": {
        "description": "Merge three signals",
        "hierarchy": "Simulation Aivika Signal",
        "module": "Simulation.Aivika.Signal",
        "name": "merge3Signals",
        "normalized": "Signal a-\u003eSignal a-\u003eSignal a-\u003eSignal a",
        "package": "aivika",
        "partial": "Signals",
        "signature": "Signal a-\u003eSignal a-\u003eSignal a-\u003eSignal a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Signal.html#v:merge4Signals",
      "description": {
        "fct-descr": "\u003cp\u003eMerge four signals.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Signal",
        "fct-package": "aivika",
        "fct-signature": "Signal a -\u003e Signal a -\u003e Signal a -\u003e Signal a -\u003e Signal a",
        "fct-source": "src/Simulation-Aivika-Internal-Signal.html#merge4Signals",
        "fct-type": "function",
        "title": "merge4Signals"
      },
      "index": {
        "description": "Merge four signals",
        "hierarchy": "Simulation Aivika Signal",
        "module": "Simulation.Aivika.Signal",
        "name": "merge4Signals",
        "normalized": "Signal a-\u003eSignal a-\u003eSignal a-\u003eSignal a-\u003eSignal a",
        "package": "aivika",
        "partial": "Signals",
        "signature": "Signal a-\u003eSignal a-\u003eSignal a-\u003eSignal a-\u003eSignal a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Signal.html#v:merge5Signals",
      "description": {
        "fct-descr": "\u003cp\u003eMerge five signals.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Signal",
        "fct-package": "aivika",
        "fct-signature": "Signal a -\u003e Signal a -\u003e Signal a -\u003e Signal a -\u003e Signal a -\u003e Signal a",
        "fct-source": "src/Simulation-Aivika-Internal-Signal.html#merge5Signals",
        "fct-type": "function",
        "title": "merge5Signals"
      },
      "index": {
        "description": "Merge five signals",
        "hierarchy": "Simulation Aivika Signal",
        "module": "Simulation.Aivika.Signal",
        "name": "merge5Signals",
        "normalized": "Signal a-\u003eSignal a-\u003eSignal a-\u003eSignal a-\u003eSignal a-\u003eSignal a",
        "package": "aivika",
        "partial": "Signals",
        "signature": "Signal a-\u003eSignal a-\u003eSignal a-\u003eSignal a-\u003eSignal a-\u003eSignal a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Signal.html#v:newSignalHistory",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a history of the signal values.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Signal",
        "fct-package": "aivika",
        "fct-signature": "Signal a -\u003e Event (SignalHistory a)",
        "fct-source": "src/Simulation-Aivika-Signal.html#newSignalHistory",
        "fct-type": "function",
        "title": "newSignalHistory"
      },
      "index": {
        "description": "Create history of the signal values",
        "hierarchy": "Simulation Aivika Signal",
        "module": "Simulation.Aivika.Signal",
        "name": "newSignalHistory",
        "normalized": "Signal a-\u003eEvent(SignalHistory a)",
        "package": "aivika",
        "partial": "Signal History",
        "signature": "Signal a-\u003eEvent(SignalHistory a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Signal.html#v:newSignalInIntegTimes",
      "description": {
        "fct-descr": "\u003cp\u003eReturn a signal that is triggered in the integration time points.\n It should be called with help of \u003ccode\u003e\u003ca\u003erunEventInStartTime\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Signal",
        "fct-package": "aivika",
        "fct-signature": "Event (Signal Double)",
        "fct-source": "src/Simulation-Aivika-Signal.html#newSignalInIntegTimes",
        "fct-type": "function",
        "title": "newSignalInIntegTimes"
      },
      "index": {
        "description": "Return signal that is triggered in the integration time points It should be called with help of runEventInStartTime",
        "hierarchy": "Simulation Aivika Signal",
        "module": "Simulation.Aivika.Signal",
        "name": "newSignalInIntegTimes",
        "normalized": "",
        "package": "aivika",
        "partial": "Signal In Integ Times",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Signal.html#v:newSignalInStartTime",
      "description": {
        "fct-descr": "\u003cp\u003eReturn a signal that is triggered in the start time.\n It should be called with help of \u003ccode\u003e\u003ca\u003erunEventInStartTime\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Signal",
        "fct-package": "aivika",
        "fct-signature": "Event (Signal Double)",
        "fct-source": "src/Simulation-Aivika-Signal.html#newSignalInStartTime",
        "fct-type": "function",
        "title": "newSignalInStartTime"
      },
      "index": {
        "description": "Return signal that is triggered in the start time It should be called with help of runEventInStartTime",
        "hierarchy": "Simulation Aivika Signal",
        "module": "Simulation.Aivika.Signal",
        "name": "newSignalInStartTime",
        "normalized": "",
        "package": "aivika",
        "partial": "Signal In Start Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Signal.html#v:newSignalInStopTime",
      "description": {
        "fct-descr": "\u003cp\u003eReturn a signal that is triggered in the stop time.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Signal",
        "fct-package": "aivika",
        "fct-signature": "Event (Signal Double)",
        "fct-source": "src/Simulation-Aivika-Signal.html#newSignalInStopTime",
        "fct-type": "function",
        "title": "newSignalInStopTime"
      },
      "index": {
        "description": "Return signal that is triggered in the stop time",
        "hierarchy": "Simulation Aivika Signal",
        "module": "Simulation.Aivika.Signal",
        "name": "newSignalInStopTime",
        "normalized": "",
        "package": "aivika",
        "partial": "Signal In Stop Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Signal.html#v:newSignalInTimes",
      "description": {
        "fct-descr": "\u003cp\u003eReturn a signal that is triggered in the specified time points.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Signal",
        "fct-package": "aivika",
        "fct-signature": "[Double] -\u003e Event (Signal Double)",
        "fct-source": "src/Simulation-Aivika-Signal.html#newSignalInTimes",
        "fct-type": "function",
        "title": "newSignalInTimes"
      },
      "index": {
        "description": "Return signal that is triggered in the specified time points",
        "hierarchy": "Simulation Aivika Signal",
        "module": "Simulation.Aivika.Signal",
        "name": "newSignalInTimes",
        "normalized": "[Double]-\u003eEvent(Signal Double)",
        "package": "aivika",
        "partial": "Signal In Times",
        "signature": "[Double]-\u003eEvent(Signal Double)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Signal.html#v:newSignalSource",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new signal source.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Signal",
        "fct-package": "aivika",
        "fct-signature": "Simulation (SignalSource a)",
        "fct-source": "src/Simulation-Aivika-Internal-Signal.html#newSignalSource",
        "fct-type": "function",
        "title": "newSignalSource"
      },
      "index": {
        "description": "Create new signal source",
        "hierarchy": "Simulation Aivika Signal",
        "module": "Simulation.Aivika.Signal",
        "name": "newSignalSource",
        "normalized": "",
        "package": "aivika",
        "partial": "Signal Source",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Signal.html#v:publishSignal",
      "description": {
        "fct-descr": "\u003cp\u003ePublish the signal.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Signal",
        "fct-package": "aivika",
        "fct-signature": "SignalSource a -\u003e Signal a",
        "fct-source": "src/Simulation-Aivika-Internal-Signal.html#publishSignal",
        "fct-type": "function",
        "title": "publishSignal"
      },
      "index": {
        "description": "Publish the signal",
        "hierarchy": "Simulation Aivika Signal",
        "module": "Simulation.Aivika.Signal",
        "name": "publishSignal",
        "normalized": "SignalSource a-\u003eSignal a",
        "package": "aivika",
        "partial": "Signal",
        "signature": "SignalSource a-\u003eSignal a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Signal.html#v:readSignalHistory",
      "description": {
        "fct-descr": "\u003cp\u003eRead the history of signal values.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Signal",
        "fct-package": "aivika",
        "fct-signature": "SignalHistory a -\u003e Event (Array Int Double, Array Int a)",
        "fct-source": "src/Simulation-Aivika-Signal.html#readSignalHistory",
        "fct-type": "function",
        "title": "readSignalHistory"
      },
      "index": {
        "description": "Read the history of signal values",
        "hierarchy": "Simulation Aivika Signal",
        "module": "Simulation.Aivika.Signal",
        "name": "readSignalHistory",
        "normalized": "SignalHistory a-\u003eEvent(Array Int Double,Array Int a)",
        "package": "aivika",
        "partial": "Signal History",
        "signature": "SignalHistory a-\u003eEvent(Array Int Double,Array Int a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Signal.html#v:signalHistorySignal",
      "description": {
        "fct-descr": "\u003cp\u003eThe signal for which the history is created.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Signal",
        "fct-package": "aivika",
        "fct-signature": "SignalHistory a -\u003e Signal a",
        "fct-source": "src/Simulation-Aivika-Signal.html#signalHistorySignal",
        "fct-type": "function",
        "title": "signalHistorySignal"
      },
      "index": {
        "description": "The signal for which the history is created",
        "hierarchy": "Simulation Aivika Signal",
        "module": "Simulation.Aivika.Signal",
        "name": "signalHistorySignal",
        "normalized": "SignalHistory a-\u003eSignal a",
        "package": "aivika",
        "partial": "History Signal",
        "signature": "SignalHistory a-\u003eSignal a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Signal.html#v:triggerSignal",
      "description": {
        "fct-descr": "\u003cp\u003eTrigger the signal actuating \n all its handlers at the current \n simulation time point.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Signal",
        "fct-package": "aivika",
        "fct-signature": "SignalSource a -\u003e a -\u003e Event ()",
        "fct-source": "src/Simulation-Aivika-Internal-Signal.html#triggerSignal",
        "fct-type": "function",
        "title": "triggerSignal"
      },
      "index": {
        "description": "Trigger the signal actuating all its handlers at the current simulation time point",
        "hierarchy": "Simulation Aivika Signal",
        "module": "Simulation.Aivika.Signal",
        "name": "triggerSignal",
        "normalized": "SignalSource a-\u003ea-\u003eEvent()",
        "package": "aivika",
        "partial": "Signal",
        "signature": "SignalSource a-\u003ea-\u003eEvent()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Simulation.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTested with: GHC 7.6.3\n\u003c/p\u003e\u003cp\u003eThe module defines the \u003ccode\u003e\u003ca\u003eSimulation\u003c/a\u003e\u003c/code\u003e monad that represents a simulation run.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Simulation.Aivika.Simulation",
        "fct-package": "aivika",
        "fct-signature": "module",
        "fct-source": "src/Simulation-Aivika-Simulation.html",
        "fct-type": "module",
        "title": "Simulation"
      },
      "index": {
        "description": "Tested with GHC The module defines the Simulation monad that represents simulation run",
        "hierarchy": "Simulation Aivika Simulation",
        "module": "Simulation.Aivika.Simulation",
        "name": "Simulation",
        "normalized": "",
        "package": "aivika",
        "partial": "Simulation",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Simulation.html#t:Simulation",
      "description": {
        "fct-descr": "\u003cp\u003eA value in the \u003ccode\u003e\u003ca\u003eSimulation\u003c/a\u003e\u003c/code\u003e monad represents something that\n doesn't change within the simulation run but may change for\n other runs.\n\u003c/p\u003e\u003cp\u003eThis monad is ideal for representing the external\n parameters for the model, when the Monte-Carlo simulation\n is used. Also this monad is useful for defining some\n actions that should occur only once within the simulation run,\n for example, setting of the integral with help of recursive\n equations.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Simulation",
        "fct-package": "aivika",
        "fct-signature": "data",
        "fct-source": "src/Simulation-Aivika-Internal-Simulation.html#Simulation",
        "fct-type": "data",
        "title": "Simulation"
      },
      "index": {
        "description": "value in the Simulation monad represents something that doesn change within the simulation run but may change for other runs This monad is ideal for representing the external parameters for the model when the Monte-Carlo simulation is used Also this monad is useful for defining some actions that should occur only once within the simulation run for example setting of the integral with help of recursive equations",
        "hierarchy": "Simulation Aivika Simulation",
        "module": "Simulation.Aivika.Simulation",
        "name": "Simulation",
        "normalized": "",
        "package": "aivika",
        "partial": "Simulation",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Simulation.html#t:SimulationLift",
      "description": {
        "fct-descr": "\u003cp\u003eA type class to lift the simulation computations to other monads.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Simulation",
        "fct-package": "aivika",
        "fct-signature": "class",
        "fct-source": "src/Simulation-Aivika-Internal-Simulation.html#SimulationLift",
        "fct-type": "class",
        "title": "SimulationLift"
      },
      "index": {
        "description": "type class to lift the simulation computations to other monads",
        "hierarchy": "Simulation Aivika Simulation",
        "module": "Simulation.Aivika.Simulation",
        "name": "SimulationLift",
        "normalized": "",
        "package": "aivika",
        "partial": "Simulation Lift",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Simulation.html#v:catchSimulation",
      "description": {
        "fct-descr": "\u003cp\u003eException handling within \u003ccode\u003e\u003ca\u003eSimulation\u003c/a\u003e\u003c/code\u003e computations.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Simulation",
        "fct-package": "aivika",
        "fct-signature": "Simulation a -\u003e (IOException -\u003e Simulation a) -\u003e Simulation a",
        "fct-source": "src/Simulation-Aivika-Internal-Simulation.html#catchSimulation",
        "fct-type": "function",
        "title": "catchSimulation"
      },
      "index": {
        "description": "Exception handling within Simulation computations",
        "hierarchy": "Simulation Aivika Simulation",
        "module": "Simulation.Aivika.Simulation",
        "name": "catchSimulation",
        "normalized": "Simulation a-\u003e(IOException-\u003eSimulation a)-\u003eSimulation a",
        "package": "aivika",
        "partial": "Simulation",
        "signature": "Simulation a-\u003e(IOException-\u003eSimulation a)-\u003eSimulation a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Simulation.html#v:finallySimulation",
      "description": {
        "fct-descr": "\u003cp\u003eA computation with finalization part like the \u003ccode\u003e\u003ca\u003efinally\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Simulation",
        "fct-package": "aivika",
        "fct-signature": "Simulation a -\u003e Simulation b -\u003e Simulation a",
        "fct-source": "src/Simulation-Aivika-Internal-Simulation.html#finallySimulation",
        "fct-type": "function",
        "title": "finallySimulation"
      },
      "index": {
        "description": "computation with finalization part like the finally function",
        "hierarchy": "Simulation Aivika Simulation",
        "module": "Simulation.Aivika.Simulation",
        "name": "finallySimulation",
        "normalized": "Simulation a-\u003eSimulation b-\u003eSimulation a",
        "package": "aivika",
        "partial": "Simulation",
        "signature": "Simulation a-\u003eSimulation b-\u003eSimulation a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Simulation.html#v:liftSimulation",
      "description": {
        "fct-descr": "\u003cp\u003eLift the specified \u003ccode\u003e\u003ca\u003eSimulation\u003c/a\u003e\u003c/code\u003e computation to another monad.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Simulation",
        "fct-package": "aivika",
        "fct-signature": "Simulation a -\u003e m a",
        "fct-source": "src/Simulation-Aivika-Internal-Simulation.html#liftSimulation",
        "fct-type": "method",
        "title": "liftSimulation"
      },
      "index": {
        "description": "Lift the specified Simulation computation to another monad",
        "hierarchy": "Simulation Aivika Simulation",
        "module": "Simulation.Aivika.Simulation",
        "name": "liftSimulation",
        "normalized": "Simulation a-\u003eb a",
        "package": "aivika",
        "partial": "Simulation",
        "signature": "Simulation a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Simulation.html#v:runSimulation",
      "description": {
        "fct-descr": "\u003cp\u003eRun the simulation using the specified specs.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Simulation",
        "fct-package": "aivika",
        "fct-signature": "Simulation a -\u003e Specs -\u003e IO a",
        "fct-source": "src/Simulation-Aivika-Internal-Simulation.html#runSimulation",
        "fct-type": "function",
        "title": "runSimulation"
      },
      "index": {
        "description": "Run the simulation using the specified specs",
        "hierarchy": "Simulation Aivika Simulation",
        "module": "Simulation.Aivika.Simulation",
        "name": "runSimulation",
        "normalized": "Simulation a-\u003eSpecs-\u003eIO a",
        "package": "aivika",
        "partial": "Simulation",
        "signature": "Simulation a-\u003eSpecs-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Simulation.html#v:runSimulations",
      "description": {
        "fct-descr": "\u003cp\u003eRun the given number of simulations using the specified specs, \n   where each simulation is distinguished by its index \u003ccode\u003e\u003ca\u003esimulationIndex\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Simulation",
        "fct-package": "aivika",
        "fct-signature": "Simulation a -\u003e Specs -\u003e Int -\u003e [IO a]",
        "fct-source": "src/Simulation-Aivika-Internal-Simulation.html#runSimulations",
        "fct-type": "function",
        "title": "runSimulations"
      },
      "index": {
        "description": "Run the given number of simulations using the specified specs where each simulation is distinguished by its index simulationIndex",
        "hierarchy": "Simulation Aivika Simulation",
        "module": "Simulation.Aivika.Simulation",
        "name": "runSimulations",
        "normalized": "Simulation a-\u003eSpecs-\u003eInt-\u003e[IO a]",
        "package": "aivika",
        "partial": "Simulations",
        "signature": "Simulation a-\u003eSpecs-\u003eInt-\u003e[IO a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Simulation.html#v:simulationCount",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the number of simulations currently run.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Simulation",
        "fct-package": "aivika",
        "fct-signature": "Simulation Int",
        "fct-source": "src/Simulation-Aivika-Internal-Simulation.html#simulationCount",
        "fct-type": "function",
        "title": "simulationCount"
      },
      "index": {
        "description": "Return the number of simulations currently run",
        "hierarchy": "Simulation Aivika Simulation",
        "module": "Simulation.Aivika.Simulation",
        "name": "simulationCount",
        "normalized": "",
        "package": "aivika",
        "partial": "Count",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Simulation.html#v:simulationIndex",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the run index for the current simulation.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Simulation",
        "fct-package": "aivika",
        "fct-signature": "Simulation Int",
        "fct-source": "src/Simulation-Aivika-Internal-Simulation.html#simulationIndex",
        "fct-type": "function",
        "title": "simulationIndex"
      },
      "index": {
        "description": "Return the run index for the current simulation",
        "hierarchy": "Simulation Aivika Simulation",
        "module": "Simulation.Aivika.Simulation",
        "name": "simulationIndex",
        "normalized": "",
        "package": "aivika",
        "partial": "Index",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Simulation.html#v:simulationSpecs",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the simulation specs.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Simulation",
        "fct-package": "aivika",
        "fct-signature": "Simulation Specs",
        "fct-source": "src/Simulation-Aivika-Internal-Simulation.html#simulationSpecs",
        "fct-type": "function",
        "title": "simulationSpecs"
      },
      "index": {
        "description": "Return the simulation specs",
        "hierarchy": "Simulation Aivika Simulation",
        "module": "Simulation.Aivika.Simulation",
        "name": "simulationSpecs",
        "normalized": "",
        "package": "aivika",
        "partial": "Specs",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Simulation.html#v:throwSimulation",
      "description": {
        "fct-descr": "\u003cp\u003eLike the standard \u003ccode\u003e\u003ca\u003ethrow\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Simulation",
        "fct-package": "aivika",
        "fct-signature": "IOException -\u003e Simulation a",
        "fct-source": "src/Simulation-Aivika-Internal-Simulation.html#throwSimulation",
        "fct-type": "function",
        "title": "throwSimulation"
      },
      "index": {
        "description": "Like the standard throw function",
        "hierarchy": "Simulation Aivika Simulation",
        "module": "Simulation.Aivika.Simulation",
        "name": "throwSimulation",
        "normalized": "IOException-\u003eSimulation a",
        "package": "aivika",
        "partial": "Simulation",
        "signature": "IOException-\u003eSimulation a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Specs.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTested with: GHC 7.6.3\n\u003c/p\u003e\u003cp\u003eIt defines the simulation specs and functions for this data type.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Simulation.Aivika.Specs",
        "fct-package": "aivika",
        "fct-signature": "module",
        "fct-source": "src/Simulation-Aivika-Specs.html",
        "fct-type": "module",
        "title": "Specs"
      },
      "index": {
        "description": "Tested with GHC It defines the simulation specs and functions for this data type",
        "hierarchy": "Simulation Aivika Specs",
        "module": "Simulation.Aivika.Specs",
        "name": "Specs",
        "normalized": "",
        "package": "aivika",
        "partial": "Specs",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Specs.html#t:Method",
      "description": {
        "fct-descr": "\u003cp\u003eIt defines the integration method.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Specs",
        "fct-package": "aivika",
        "fct-signature": "data",
        "fct-source": "src/Simulation-Aivika-Internal-Specs.html#Method",
        "fct-type": "data",
        "title": "Method"
      },
      "index": {
        "description": "It defines the integration method",
        "hierarchy": "Simulation Aivika Specs",
        "module": "Simulation.Aivika.Specs",
        "name": "Method",
        "normalized": "",
        "package": "aivika",
        "partial": "Method",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Specs.html#t:Specs",
      "description": {
        "fct-descr": "\u003cp\u003eIt defines the simulation specs.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Specs",
        "fct-package": "aivika",
        "fct-signature": "data",
        "fct-source": "src/Simulation-Aivika-Internal-Specs.html#Specs",
        "fct-type": "data",
        "title": "Specs"
      },
      "index": {
        "description": "It defines the simulation specs",
        "hierarchy": "Simulation Aivika Specs",
        "module": "Simulation.Aivika.Specs",
        "name": "Specs",
        "normalized": "",
        "package": "aivika",
        "partial": "Specs",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Specs.html#v:Euler",
      "description": {
        "fct-descr": "\u003cp\u003eEuler's method\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Specs",
        "fct-package": "aivika",
        "fct-signature": "Euler",
        "fct-source": "src/Simulation-Aivika-Internal-Specs.html#Method",
        "fct-type": "function",
        "title": "Euler"
      },
      "index": {
        "description": "Euler method",
        "hierarchy": "Simulation Aivika Specs",
        "module": "Simulation.Aivika.Specs",
        "name": "Euler",
        "normalized": "",
        "package": "aivika",
        "partial": "Euler",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Specs.html#v:RungeKutta2",
      "description": {
        "fct-descr": "\u003cp\u003ethe 2nd order Runge-Kutta method\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Specs",
        "fct-package": "aivika",
        "fct-signature": "RungeKutta2",
        "fct-source": "src/Simulation-Aivika-Internal-Specs.html#Method",
        "fct-type": "function",
        "title": "RungeKutta2"
      },
      "index": {
        "description": "the nd order Runge-Kutta method",
        "hierarchy": "Simulation Aivika Specs",
        "module": "Simulation.Aivika.Specs",
        "name": "RungeKutta2",
        "normalized": "",
        "package": "aivika",
        "partial": "Runge Kutta",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Specs.html#v:RungeKutta4",
      "description": {
        "fct-descr": "\u003cp\u003ethe 4th order Runge-Kutta method\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Specs",
        "fct-package": "aivika",
        "fct-signature": "RungeKutta4",
        "fct-source": "src/Simulation-Aivika-Internal-Specs.html#Method",
        "fct-type": "function",
        "title": "RungeKutta4"
      },
      "index": {
        "description": "the th order Runge-Kutta method",
        "hierarchy": "Simulation Aivika Specs",
        "module": "Simulation.Aivika.Specs",
        "name": "RungeKutta4",
        "normalized": "",
        "package": "aivika",
        "partial": "Runge Kutta",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Specs.html#v:Specs",
      "description": {
        "fct-module": "Simulation.Aivika.Specs",
        "fct-package": "aivika",
        "fct-signature": "Specs",
        "fct-source": "src/Simulation-Aivika-Internal-Specs.html#Specs",
        "fct-type": "function",
        "title": "Specs"
      },
      "index": {
        "description": "",
        "hierarchy": "Simulation Aivika Specs",
        "module": "Simulation.Aivika.Specs",
        "name": "Specs",
        "normalized": "",
        "package": "aivika",
        "partial": "Specs",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Specs.html#v:basicTime",
      "description": {
        "fct-descr": "\u003cp\u003eReturns a simulation time for the integration point specified by \n the specs, iteration and phase.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Specs",
        "fct-package": "aivika",
        "fct-signature": "Specs -\u003e Int -\u003e Int -\u003e Double",
        "fct-source": "src/Simulation-Aivika-Internal-Specs.html#basicTime",
        "fct-type": "function",
        "title": "basicTime"
      },
      "index": {
        "description": "Returns simulation time for the integration point specified by the specs iteration and phase",
        "hierarchy": "Simulation Aivika Specs",
        "module": "Simulation.Aivika.Specs",
        "name": "basicTime",
        "normalized": "Specs-\u003eInt-\u003eInt-\u003eDouble",
        "package": "aivika",
        "partial": "Time",
        "signature": "Specs-\u003eInt-\u003eInt-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Specs.html#v:integIterationBnds",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the first and last integration iterations.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Specs",
        "fct-package": "aivika",
        "fct-signature": "Specs -\u003e (Int, Int)",
        "fct-source": "src/Simulation-Aivika-Internal-Specs.html#integIterationBnds",
        "fct-type": "function",
        "title": "integIterationBnds"
      },
      "index": {
        "description": "Returns the first and last integration iterations",
        "hierarchy": "Simulation Aivika Specs",
        "module": "Simulation.Aivika.Specs",
        "name": "integIterationBnds",
        "normalized": "Specs-\u003e(Int,Int)",
        "package": "aivika",
        "partial": "Iteration Bnds",
        "signature": "Specs-\u003e(Int,Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Specs.html#v:integIterationHiBnd",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the last integration iteration.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Specs",
        "fct-package": "aivika",
        "fct-signature": "Specs -\u003e Int",
        "fct-source": "src/Simulation-Aivika-Internal-Specs.html#integIterationHiBnd",
        "fct-type": "function",
        "title": "integIterationHiBnd"
      },
      "index": {
        "description": "Returns the last integration iteration",
        "hierarchy": "Simulation Aivika Specs",
        "module": "Simulation.Aivika.Specs",
        "name": "integIterationHiBnd",
        "normalized": "Specs-\u003eInt",
        "package": "aivika",
        "partial": "Iteration Hi Bnd",
        "signature": "Specs-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Specs.html#v:integIterationLoBnd",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the first integration iteration, i.e. zero.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Specs",
        "fct-package": "aivika",
        "fct-signature": "Specs -\u003e Int",
        "fct-source": "src/Simulation-Aivika-Internal-Specs.html#integIterationLoBnd",
        "fct-type": "function",
        "title": "integIterationLoBnd"
      },
      "index": {
        "description": "Returns the first integration iteration i.e zero",
        "hierarchy": "Simulation Aivika Specs",
        "module": "Simulation.Aivika.Specs",
        "name": "integIterationLoBnd",
        "normalized": "Specs-\u003eInt",
        "package": "aivika",
        "partial": "Iteration Lo Bnd",
        "signature": "Specs-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Specs.html#v:integPhaseBnds",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the first and last integration phases.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Specs",
        "fct-package": "aivika",
        "fct-signature": "Specs -\u003e (Int, Int)",
        "fct-source": "src/Simulation-Aivika-Internal-Specs.html#integPhaseBnds",
        "fct-type": "function",
        "title": "integPhaseBnds"
      },
      "index": {
        "description": "Returns the first and last integration phases",
        "hierarchy": "Simulation Aivika Specs",
        "module": "Simulation.Aivika.Specs",
        "name": "integPhaseBnds",
        "normalized": "Specs-\u003e(Int,Int)",
        "package": "aivika",
        "partial": "Phase Bnds",
        "signature": "Specs-\u003e(Int,Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Specs.html#v:integPhaseHiBnd",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the last integration phase, 0 for Euler's method, 1 for RK2 and 3 for RK4.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Specs",
        "fct-package": "aivika",
        "fct-signature": "Specs -\u003e Int",
        "fct-source": "src/Simulation-Aivika-Internal-Specs.html#integPhaseHiBnd",
        "fct-type": "function",
        "title": "integPhaseHiBnd"
      },
      "index": {
        "description": "Returns the last integration phase for Euler method for RK2 and for RK4",
        "hierarchy": "Simulation Aivika Specs",
        "module": "Simulation.Aivika.Specs",
        "name": "integPhaseHiBnd",
        "normalized": "Specs-\u003eInt",
        "package": "aivika",
        "partial": "Phase Hi Bnd",
        "signature": "Specs-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Specs.html#v:integPhaseLoBnd",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the first integration phase, i.e. zero.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Specs",
        "fct-package": "aivika",
        "fct-signature": "Specs -\u003e Int",
        "fct-source": "src/Simulation-Aivika-Internal-Specs.html#integPhaseLoBnd",
        "fct-type": "function",
        "title": "integPhaseLoBnd"
      },
      "index": {
        "description": "Returns the first integration phase i.e zero",
        "hierarchy": "Simulation Aivika Specs",
        "module": "Simulation.Aivika.Specs",
        "name": "integPhaseLoBnd",
        "normalized": "Specs-\u003eInt",
        "package": "aivika",
        "partial": "Phase Lo Bnd",
        "signature": "Specs-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Specs.html#v:integTimes",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the integration time values.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Specs",
        "fct-package": "aivika",
        "fct-signature": "Specs -\u003e [Double]",
        "fct-source": "src/Simulation-Aivika-Internal-Specs.html#integTimes",
        "fct-type": "function",
        "title": "integTimes"
      },
      "index": {
        "description": "Return the integration time values",
        "hierarchy": "Simulation Aivika Specs",
        "module": "Simulation.Aivika.Specs",
        "name": "integTimes",
        "normalized": "Specs-\u003e[Double]",
        "package": "aivika",
        "partial": "Times",
        "signature": "Specs-\u003e[Double]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Specs.html#v:spcDT",
      "description": {
        "fct-descr": "\u003cp\u003ethe integration time step\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Specs",
        "fct-package": "aivika",
        "fct-signature": "Double",
        "fct-source": "src/Simulation-Aivika-Internal-Specs.html#Specs",
        "fct-type": "function",
        "title": "spcDT"
      },
      "index": {
        "description": "the integration time step",
        "hierarchy": "Simulation Aivika Specs",
        "module": "Simulation.Aivika.Specs",
        "name": "spcDT",
        "normalized": "",
        "package": "aivika",
        "partial": "DT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Specs.html#v:spcMethod",
      "description": {
        "fct-descr": "\u003cp\u003ethe integration method\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Specs",
        "fct-package": "aivika",
        "fct-signature": "Method",
        "fct-source": "src/Simulation-Aivika-Internal-Specs.html#Specs",
        "fct-type": "function",
        "title": "spcMethod"
      },
      "index": {
        "description": "the integration method",
        "hierarchy": "Simulation Aivika Specs",
        "module": "Simulation.Aivika.Specs",
        "name": "spcMethod",
        "normalized": "",
        "package": "aivika",
        "partial": "Method",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Specs.html#v:spcStartTime",
      "description": {
        "fct-descr": "\u003cp\u003ethe start time\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Specs",
        "fct-package": "aivika",
        "fct-signature": "Double",
        "fct-source": "src/Simulation-Aivika-Internal-Specs.html#Specs",
        "fct-type": "function",
        "title": "spcStartTime"
      },
      "index": {
        "description": "the start time",
        "hierarchy": "Simulation Aivika Specs",
        "module": "Simulation.Aivika.Specs",
        "name": "spcStartTime",
        "normalized": "",
        "package": "aivika",
        "partial": "Start Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Specs.html#v:spcStopTime",
      "description": {
        "fct-descr": "\u003cp\u003ethe stop time\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Specs",
        "fct-package": "aivika",
        "fct-signature": "Double",
        "fct-source": "src/Simulation-Aivika-Internal-Specs.html#Specs",
        "fct-type": "function",
        "title": "spcStopTime"
      },
      "index": {
        "description": "the stop time",
        "hierarchy": "Simulation Aivika Specs",
        "module": "Simulation.Aivika.Specs",
        "name": "spcStopTime",
        "normalized": "",
        "package": "aivika",
        "partial": "Stop Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Statistics.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTested with: GHC 7.6.3\n\u003c/p\u003e\u003cp\u003eRepresents statistics.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Simulation.Aivika.Statistics",
        "fct-package": "aivika",
        "fct-signature": "module",
        "fct-source": "src/Simulation-Aivika-Statistics.html",
        "fct-type": "module",
        "title": "Statistics"
      },
      "index": {
        "description": "Tested with GHC Represents statistics",
        "hierarchy": "Simulation Aivika Statistics",
        "module": "Simulation.Aivika.Statistics",
        "name": "Statistics",
        "normalized": "",
        "package": "aivika",
        "partial": "Statistics",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Statistics.html#t:SamplingData",
      "description": {
        "fct-descr": "\u003cp\u003eSpecifies data type from which values we can gather the statistics.           \n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Statistics",
        "fct-package": "aivika",
        "fct-signature": "class",
        "fct-source": "src/Simulation-Aivika-Statistics.html#SamplingData",
        "fct-type": "class",
        "title": "SamplingData"
      },
      "index": {
        "description": "Specifies data type from which values we can gather the statistics",
        "hierarchy": "Simulation Aivika Statistics",
        "module": "Simulation.Aivika.Statistics",
        "name": "SamplingData",
        "normalized": "",
        "package": "aivika",
        "partial": "Sampling Data",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Statistics.html#t:SamplingStats",
      "description": {
        "fct-descr": "\u003cp\u003eDescribes when the statistics consists of only samples \n not bound to the simulation time.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Statistics",
        "fct-package": "aivika",
        "fct-signature": "data",
        "fct-source": "src/Simulation-Aivika-Statistics.html#SamplingStats",
        "fct-type": "data",
        "title": "SamplingStats"
      },
      "index": {
        "description": "Describes when the statistics consists of only samples not bound to the simulation time",
        "hierarchy": "Simulation Aivika Statistics",
        "module": "Simulation.Aivika.Statistics",
        "name": "SamplingStats",
        "normalized": "",
        "package": "aivika",
        "partial": "Sampling Stats",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Statistics.html#t:TimingData",
      "description": {
        "fct-descr": "\u003cp\u003eDefines the data type from which values we can gather the timing statistics.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Statistics",
        "fct-package": "aivika",
        "fct-signature": "class",
        "fct-source": "src/Simulation-Aivika-Statistics.html#TimingData",
        "fct-type": "class",
        "title": "TimingData"
      },
      "index": {
        "description": "Defines the data type from which values we can gather the timing statistics",
        "hierarchy": "Simulation Aivika Statistics",
        "module": "Simulation.Aivika.Statistics",
        "name": "TimingData",
        "normalized": "",
        "package": "aivika",
        "partial": "Timing Data",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Statistics.html#t:TimingStats",
      "description": {
        "fct-descr": "\u003cp\u003eThis is the timing statistics where data are bound to the time.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Statistics",
        "fct-package": "aivika",
        "fct-signature": "data",
        "fct-source": "src/Simulation-Aivika-Statistics.html#TimingStats",
        "fct-type": "data",
        "title": "TimingStats"
      },
      "index": {
        "description": "This is the timing statistics where data are bound to the time",
        "hierarchy": "Simulation Aivika Statistics",
        "module": "Simulation.Aivika.Statistics",
        "name": "TimingStats",
        "normalized": "",
        "package": "aivika",
        "partial": "Timing Stats",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Statistics.html#v:SamplingStats",
      "description": {
        "fct-module": "Simulation.Aivika.Statistics",
        "fct-package": "aivika",
        "fct-signature": "SamplingStats",
        "fct-source": "src/Simulation-Aivika-Statistics.html#SamplingStats",
        "fct-type": "function",
        "title": "SamplingStats"
      },
      "index": {
        "description": "",
        "hierarchy": "Simulation Aivika Statistics",
        "module": "Simulation.Aivika.Statistics",
        "name": "SamplingStats",
        "normalized": "",
        "package": "aivika",
        "partial": "Sampling Stats",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Statistics.html#v:TimingStats",
      "description": {
        "fct-module": "Simulation.Aivika.Statistics",
        "fct-package": "aivika",
        "fct-signature": "TimingStats",
        "fct-source": "src/Simulation-Aivika-Statistics.html#TimingStats",
        "fct-type": "function",
        "title": "TimingStats"
      },
      "index": {
        "description": "",
        "hierarchy": "Simulation Aivika Statistics",
        "module": "Simulation.Aivika.Statistics",
        "name": "TimingStats",
        "normalized": "",
        "package": "aivika",
        "partial": "Timing Stats",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Statistics.html#v:addSamplingStats",
      "description": {
        "fct-descr": "\u003cp\u003eAdd a new sample to the statistics.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Statistics",
        "fct-package": "aivika",
        "fct-signature": "a -\u003e SamplingStats a -\u003e SamplingStats a",
        "fct-source": "src/Simulation-Aivika-Statistics.html#addSamplingStats",
        "fct-type": "method",
        "title": "addSamplingStats"
      },
      "index": {
        "description": "Add new sample to the statistics",
        "hierarchy": "Simulation Aivika Statistics",
        "module": "Simulation.Aivika.Statistics",
        "name": "addSamplingStats",
        "normalized": "a-\u003eSamplingStats a-\u003eSamplingStats a",
        "package": "aivika",
        "partial": "Sampling Stats",
        "signature": "a-\u003eSamplingStats a-\u003eSamplingStats a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Statistics.html#v:addTimingStats",
      "description": {
        "fct-descr": "\u003cp\u003eAdd a sample with the specified time to the statistics.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Statistics",
        "fct-package": "aivika",
        "fct-signature": "Double -\u003e a -\u003e TimingStats a -\u003e TimingStats a",
        "fct-source": "src/Simulation-Aivika-Statistics.html#addTimingStats",
        "fct-type": "method",
        "title": "addTimingStats"
      },
      "index": {
        "description": "Add sample with the specified time to the statistics",
        "hierarchy": "Simulation Aivika Statistics",
        "module": "Simulation.Aivika.Statistics",
        "name": "addTimingStats",
        "normalized": "Double-\u003ea-\u003eTimingStats a-\u003eTimingStats a",
        "package": "aivika",
        "partial": "Timing Stats",
        "signature": "Double-\u003ea-\u003eTimingStats a-\u003eTimingStats a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Statistics.html#v:combineSamplingStats",
      "description": {
        "fct-descr": "\u003cp\u003eCombine two statistics.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Statistics",
        "fct-package": "aivika",
        "fct-signature": "SamplingStats a -\u003e SamplingStats a -\u003e SamplingStats a",
        "fct-source": "src/Simulation-Aivika-Statistics.html#combineSamplingStats",
        "fct-type": "method",
        "title": "combineSamplingStats"
      },
      "index": {
        "description": "Combine two statistics",
        "hierarchy": "Simulation Aivika Statistics",
        "module": "Simulation.Aivika.Statistics",
        "name": "combineSamplingStats",
        "normalized": "SamplingStats a-\u003eSamplingStats a-\u003eSamplingStats a",
        "package": "aivika",
        "partial": "Sampling Stats",
        "signature": "SamplingStats a-\u003eSamplingStats a-\u003eSamplingStats a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Statistics.html#v:emptySamplingStats",
      "description": {
        "fct-descr": "\u003cp\u003eAn empty statistics that has no samples.           \n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Statistics",
        "fct-package": "aivika",
        "fct-signature": "SamplingStats a",
        "fct-source": "src/Simulation-Aivika-Statistics.html#emptySamplingStats",
        "fct-type": "method",
        "title": "emptySamplingStats"
      },
      "index": {
        "description": "An empty statistics that has no samples",
        "hierarchy": "Simulation Aivika Statistics",
        "module": "Simulation.Aivika.Statistics",
        "name": "emptySamplingStats",
        "normalized": "",
        "package": "aivika",
        "partial": "Sampling Stats",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Statistics.html#v:emptyTimingStats",
      "description": {
        "fct-descr": "\u003cp\u003eAn empty statistics that has no samples.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Statistics",
        "fct-package": "aivika",
        "fct-signature": "TimingStats a",
        "fct-source": "src/Simulation-Aivika-Statistics.html#emptyTimingStats",
        "fct-type": "method",
        "title": "emptyTimingStats"
      },
      "index": {
        "description": "An empty statistics that has no samples",
        "hierarchy": "Simulation Aivika Statistics",
        "module": "Simulation.Aivika.Statistics",
        "name": "emptyTimingStats",
        "normalized": "",
        "package": "aivika",
        "partial": "Timing Stats",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Statistics.html#v:fromIntSamplingStats",
      "description": {
        "fct-descr": "\u003cp\u003eConvert the statistics from integer to double values.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Statistics",
        "fct-package": "aivika",
        "fct-signature": "SamplingStats Int -\u003e SamplingStats Double",
        "fct-source": "src/Simulation-Aivika-Statistics.html#fromIntSamplingStats",
        "fct-type": "function",
        "title": "fromIntSamplingStats"
      },
      "index": {
        "description": "Convert the statistics from integer to double values",
        "hierarchy": "Simulation Aivika Statistics",
        "module": "Simulation.Aivika.Statistics",
        "name": "fromIntSamplingStats",
        "normalized": "SamplingStats Int-\u003eSamplingStats Double",
        "package": "aivika",
        "partial": "Int Sampling Stats",
        "signature": "SamplingStats Int-\u003eSamplingStats Double"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Statistics.html#v:fromIntTimingStats",
      "description": {
        "fct-descr": "\u003cp\u003eConvert the statistics from integer to double values.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Statistics",
        "fct-package": "aivika",
        "fct-signature": "TimingStats Int -\u003e TimingStats Double",
        "fct-source": "src/Simulation-Aivika-Statistics.html#fromIntTimingStats",
        "fct-type": "function",
        "title": "fromIntTimingStats"
      },
      "index": {
        "description": "Convert the statistics from integer to double values",
        "hierarchy": "Simulation Aivika Statistics",
        "module": "Simulation.Aivika.Statistics",
        "name": "fromIntTimingStats",
        "normalized": "TimingStats Int-\u003eTimingStats Double",
        "package": "aivika",
        "partial": "Int Timing Stats",
        "signature": "TimingStats Int-\u003eTimingStats Double"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Statistics.html#v:listSamplingStats",
      "description": {
        "fct-descr": "\u003cp\u003eCreate the statistics by the specified list of data.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Statistics",
        "fct-package": "aivika",
        "fct-signature": "[a] -\u003e SamplingStats a",
        "fct-source": "src/Simulation-Aivika-Statistics.html#listSamplingStats",
        "fct-type": "function",
        "title": "listSamplingStats"
      },
      "index": {
        "description": "Create the statistics by the specified list of data",
        "hierarchy": "Simulation Aivika Statistics",
        "module": "Simulation.Aivika.Statistics",
        "name": "listSamplingStats",
        "normalized": "[a]-\u003eSamplingStats a",
        "package": "aivika",
        "partial": "Sampling Stats",
        "signature": "[a]-\u003eSamplingStats a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Statistics.html#v:returnSamplingStats",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the statistics by a single sample.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Statistics",
        "fct-package": "aivika",
        "fct-signature": "a -\u003e SamplingStats a",
        "fct-source": "src/Simulation-Aivika-Statistics.html#returnSamplingStats",
        "fct-type": "function",
        "title": "returnSamplingStats"
      },
      "index": {
        "description": "Return the statistics by single sample",
        "hierarchy": "Simulation Aivika Statistics",
        "module": "Simulation.Aivika.Statistics",
        "name": "returnSamplingStats",
        "normalized": "a-\u003eSamplingStats a",
        "package": "aivika",
        "partial": "Sampling Stats",
        "signature": "a-\u003eSamplingStats a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Statistics.html#v:returnTimingStats",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the statistics by single timing data.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Statistics",
        "fct-package": "aivika",
        "fct-signature": "Double -\u003e a -\u003e TimingStats a",
        "fct-source": "src/Simulation-Aivika-Statistics.html#returnTimingStats",
        "fct-type": "function",
        "title": "returnTimingStats"
      },
      "index": {
        "description": "Return the statistics by single timing data",
        "hierarchy": "Simulation Aivika Statistics",
        "module": "Simulation.Aivika.Statistics",
        "name": "returnTimingStats",
        "normalized": "Double-\u003ea-\u003eTimingStats a",
        "package": "aivika",
        "partial": "Timing Stats",
        "signature": "Double-\u003ea-\u003eTimingStats a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Statistics.html#v:samplingStatsCount",
      "description": {
        "fct-descr": "\u003cp\u003eThe total number of samples.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Statistics",
        "fct-package": "aivika",
        "fct-signature": "!Int",
        "fct-source": "src/Simulation-Aivika-Statistics.html#SamplingStats",
        "fct-type": "function",
        "title": "samplingStatsCount"
      },
      "index": {
        "description": "The total number of samples",
        "hierarchy": "Simulation Aivika Statistics",
        "module": "Simulation.Aivika.Statistics",
        "name": "samplingStatsCount",
        "normalized": "",
        "package": "aivika",
        "partial": "Stats Count",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Statistics.html#v:samplingStatsDeviation",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the deviation.          \n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Statistics",
        "fct-package": "aivika",
        "fct-signature": "SamplingStats a -\u003e Double",
        "fct-source": "src/Simulation-Aivika-Statistics.html#samplingStatsDeviation",
        "fct-type": "function",
        "title": "samplingStatsDeviation"
      },
      "index": {
        "description": "Return the deviation",
        "hierarchy": "Simulation Aivika Statistics",
        "module": "Simulation.Aivika.Statistics",
        "name": "samplingStatsDeviation",
        "normalized": "SamplingStats a-\u003eDouble",
        "package": "aivika",
        "partial": "Stats Deviation",
        "signature": "SamplingStats a-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Statistics.html#v:samplingStatsMax",
      "description": {
        "fct-descr": "\u003cp\u003eThe maximum value among the samples.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Statistics",
        "fct-package": "aivika",
        "fct-signature": "!a",
        "fct-source": "src/Simulation-Aivika-Statistics.html#SamplingStats",
        "fct-type": "function",
        "title": "samplingStatsMax"
      },
      "index": {
        "description": "The maximum value among the samples",
        "hierarchy": "Simulation Aivika Statistics",
        "module": "Simulation.Aivika.Statistics",
        "name": "samplingStatsMax",
        "normalized": "",
        "package": "aivika",
        "partial": "Stats Max",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Statistics.html#v:samplingStatsMean",
      "description": {
        "fct-descr": "\u003cp\u003eThe average value.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Statistics",
        "fct-package": "aivika",
        "fct-signature": "!Double",
        "fct-source": "src/Simulation-Aivika-Statistics.html#SamplingStats",
        "fct-type": "function",
        "title": "samplingStatsMean"
      },
      "index": {
        "description": "The average value",
        "hierarchy": "Simulation Aivika Statistics",
        "module": "Simulation.Aivika.Statistics",
        "name": "samplingStatsMean",
        "normalized": "",
        "package": "aivika",
        "partial": "Stats Mean",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Statistics.html#v:samplingStatsMean2",
      "description": {
        "fct-descr": "\u003cp\u003eThe average square value.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Statistics",
        "fct-package": "aivika",
        "fct-signature": "!Double",
        "fct-source": "src/Simulation-Aivika-Statistics.html#SamplingStats",
        "fct-type": "function",
        "title": "samplingStatsMean2"
      },
      "index": {
        "description": "The average square value",
        "hierarchy": "Simulation Aivika Statistics",
        "module": "Simulation.Aivika.Statistics",
        "name": "samplingStatsMean2",
        "normalized": "",
        "package": "aivika",
        "partial": "Stats Mean",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Statistics.html#v:samplingStatsMin",
      "description": {
        "fct-descr": "\u003cp\u003eThe minimum value among the samples.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Statistics",
        "fct-package": "aivika",
        "fct-signature": "!a",
        "fct-source": "src/Simulation-Aivika-Statistics.html#SamplingStats",
        "fct-type": "function",
        "title": "samplingStatsMin"
      },
      "index": {
        "description": "The minimum value among the samples",
        "hierarchy": "Simulation Aivika Statistics",
        "module": "Simulation.Aivika.Statistics",
        "name": "samplingStatsMin",
        "normalized": "",
        "package": "aivika",
        "partial": "Stats Min",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Statistics.html#v:samplingStatsVariance",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the variance.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Statistics",
        "fct-package": "aivika",
        "fct-signature": "SamplingStats a -\u003e Double",
        "fct-source": "src/Simulation-Aivika-Statistics.html#samplingStatsVariance",
        "fct-type": "function",
        "title": "samplingStatsVariance"
      },
      "index": {
        "description": "Return the variance",
        "hierarchy": "Simulation Aivika Statistics",
        "module": "Simulation.Aivika.Statistics",
        "name": "samplingStatsVariance",
        "normalized": "SamplingStats a-\u003eDouble",
        "package": "aivika",
        "partial": "Stats Variance",
        "signature": "SamplingStats a-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Statistics.html#v:showSamplingStats",
      "description": {
        "fct-descr": "\u003cp\u003eShow the summary of the statistics with the specified indent.       \n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Statistics",
        "fct-package": "aivika",
        "fct-signature": "SamplingStats a -\u003e Int -\u003e ShowS",
        "fct-source": "src/Simulation-Aivika-Statistics.html#showSamplingStats",
        "fct-type": "function",
        "title": "showSamplingStats"
      },
      "index": {
        "description": "Show the summary of the statistics with the specified indent",
        "hierarchy": "Simulation Aivika Statistics",
        "module": "Simulation.Aivika.Statistics",
        "name": "showSamplingStats",
        "normalized": "SamplingStats a-\u003eInt-\u003eShowS",
        "package": "aivika",
        "partial": "Sampling Stats",
        "signature": "SamplingStats a-\u003eInt-\u003eShowS"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Statistics.html#v:showTimingStats",
      "description": {
        "fct-descr": "\u003cp\u003eShow the summary of the statistics with the specified indent.       \n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Statistics",
        "fct-package": "aivika",
        "fct-signature": "TimingStats a -\u003e Int -\u003e ShowS",
        "fct-source": "src/Simulation-Aivika-Statistics.html#showTimingStats",
        "fct-type": "function",
        "title": "showTimingStats"
      },
      "index": {
        "description": "Show the summary of the statistics with the specified indent",
        "hierarchy": "Simulation Aivika Statistics",
        "module": "Simulation.Aivika.Statistics",
        "name": "showTimingStats",
        "normalized": "TimingStats a-\u003eInt-\u003eShowS",
        "package": "aivika",
        "partial": "Timing Stats",
        "signature": "TimingStats a-\u003eInt-\u003eShowS"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Statistics.html#v:timingStatsCount",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the number of samples.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Statistics",
        "fct-package": "aivika",
        "fct-signature": "!Int",
        "fct-source": "src/Simulation-Aivika-Statistics.html#TimingStats",
        "fct-type": "function",
        "title": "timingStatsCount"
      },
      "index": {
        "description": "Return the number of samples",
        "hierarchy": "Simulation Aivika Statistics",
        "module": "Simulation.Aivika.Statistics",
        "name": "timingStatsCount",
        "normalized": "",
        "package": "aivika",
        "partial": "Stats Count",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Statistics.html#v:timingStatsDeviation",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the deviation.              \n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Statistics",
        "fct-package": "aivika",
        "fct-signature": "TimingStats a -\u003e Double",
        "fct-source": "src/Simulation-Aivika-Statistics.html#timingStatsDeviation",
        "fct-type": "function",
        "title": "timingStatsDeviation"
      },
      "index": {
        "description": "Return the deviation",
        "hierarchy": "Simulation Aivika Statistics",
        "module": "Simulation.Aivika.Statistics",
        "name": "timingStatsDeviation",
        "normalized": "TimingStats a-\u003eDouble",
        "package": "aivika",
        "partial": "Stats Deviation",
        "signature": "TimingStats a-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Statistics.html#v:timingStatsLastTime",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the last time of sampling.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Statistics",
        "fct-package": "aivika",
        "fct-signature": "!Double",
        "fct-source": "src/Simulation-Aivika-Statistics.html#TimingStats",
        "fct-type": "function",
        "title": "timingStatsLastTime"
      },
      "index": {
        "description": "Return the last time of sampling",
        "hierarchy": "Simulation Aivika Statistics",
        "module": "Simulation.Aivika.Statistics",
        "name": "timingStatsLastTime",
        "normalized": "",
        "package": "aivika",
        "partial": "Stats Last Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Statistics.html#v:timingStatsMax",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the maximum value.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Statistics",
        "fct-package": "aivika",
        "fct-signature": "!a",
        "fct-source": "src/Simulation-Aivika-Statistics.html#TimingStats",
        "fct-type": "function",
        "title": "timingStatsMax"
      },
      "index": {
        "description": "Return the maximum value",
        "hierarchy": "Simulation Aivika Statistics",
        "module": "Simulation.Aivika.Statistics",
        "name": "timingStatsMax",
        "normalized": "",
        "package": "aivika",
        "partial": "Stats Max",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Statistics.html#v:timingStatsMaxTime",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the time at which the maximum is attained.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Statistics",
        "fct-package": "aivika",
        "fct-signature": "!Double",
        "fct-source": "src/Simulation-Aivika-Statistics.html#TimingStats",
        "fct-type": "function",
        "title": "timingStatsMaxTime"
      },
      "index": {
        "description": "Return the time at which the maximum is attained",
        "hierarchy": "Simulation Aivika Statistics",
        "module": "Simulation.Aivika.Statistics",
        "name": "timingStatsMaxTime",
        "normalized": "",
        "package": "aivika",
        "partial": "Stats Max Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Statistics.html#v:timingStatsMean",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the average value.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Statistics",
        "fct-package": "aivika",
        "fct-signature": "TimingStats a -\u003e Double",
        "fct-source": "src/Simulation-Aivika-Statistics.html#timingStatsMean",
        "fct-type": "method",
        "title": "timingStatsMean"
      },
      "index": {
        "description": "Return the average value",
        "hierarchy": "Simulation Aivika Statistics",
        "module": "Simulation.Aivika.Statistics",
        "name": "timingStatsMean",
        "normalized": "TimingStats a-\u003eDouble",
        "package": "aivika",
        "partial": "Stats Mean",
        "signature": "TimingStats a-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Statistics.html#v:timingStatsMin",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the minimum value.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Statistics",
        "fct-package": "aivika",
        "fct-signature": "!a",
        "fct-source": "src/Simulation-Aivika-Statistics.html#TimingStats",
        "fct-type": "function",
        "title": "timingStatsMin"
      },
      "index": {
        "description": "Return the minimum value",
        "hierarchy": "Simulation Aivika Statistics",
        "module": "Simulation.Aivika.Statistics",
        "name": "timingStatsMin",
        "normalized": "",
        "package": "aivika",
        "partial": "Stats Min",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Statistics.html#v:timingStatsMinTime",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the time at which the minimum is attained.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Statistics",
        "fct-package": "aivika",
        "fct-signature": "!Double",
        "fct-source": "src/Simulation-Aivika-Statistics.html#TimingStats",
        "fct-type": "function",
        "title": "timingStatsMinTime"
      },
      "index": {
        "description": "Return the time at which the minimum is attained",
        "hierarchy": "Simulation Aivika Statistics",
        "module": "Simulation.Aivika.Statistics",
        "name": "timingStatsMinTime",
        "normalized": "",
        "package": "aivika",
        "partial": "Stats Min Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Statistics.html#v:timingStatsStartTime",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the start time of sampling.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Statistics",
        "fct-package": "aivika",
        "fct-signature": "!Double",
        "fct-source": "src/Simulation-Aivika-Statistics.html#TimingStats",
        "fct-type": "function",
        "title": "timingStatsStartTime"
      },
      "index": {
        "description": "Return the start time of sampling",
        "hierarchy": "Simulation Aivika Statistics",
        "module": "Simulation.Aivika.Statistics",
        "name": "timingStatsStartTime",
        "normalized": "",
        "package": "aivika",
        "partial": "Stats Start Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Statistics.html#v:timingStatsSum",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the sum of values.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Statistics",
        "fct-package": "aivika",
        "fct-signature": "!Double",
        "fct-source": "src/Simulation-Aivika-Statistics.html#TimingStats",
        "fct-type": "function",
        "title": "timingStatsSum"
      },
      "index": {
        "description": "Return the sum of values",
        "hierarchy": "Simulation Aivika Statistics",
        "module": "Simulation.Aivika.Statistics",
        "name": "timingStatsSum",
        "normalized": "",
        "package": "aivika",
        "partial": "Stats Sum",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Statistics.html#v:timingStatsSum2",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the sum of square values.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Statistics",
        "fct-package": "aivika",
        "fct-signature": "!Double",
        "fct-source": "src/Simulation-Aivika-Statistics.html#TimingStats",
        "fct-type": "function",
        "title": "timingStatsSum2"
      },
      "index": {
        "description": "Return the sum of square values",
        "hierarchy": "Simulation Aivika Statistics",
        "module": "Simulation.Aivika.Statistics",
        "name": "timingStatsSum2",
        "normalized": "",
        "package": "aivika",
        "partial": "Stats Sum",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Statistics.html#v:timingStatsVariance",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the variance.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Statistics",
        "fct-package": "aivika",
        "fct-signature": "TimingStats a -\u003e Double",
        "fct-source": "src/Simulation-Aivika-Statistics.html#timingStatsVariance",
        "fct-type": "method",
        "title": "timingStatsVariance"
      },
      "index": {
        "description": "Return the variance",
        "hierarchy": "Simulation Aivika Statistics",
        "module": "Simulation.Aivika.Statistics",
        "name": "timingStatsVariance",
        "normalized": "TimingStats a-\u003eDouble",
        "package": "aivika",
        "partial": "Stats Variance",
        "signature": "TimingStats a-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-SystemDynamics.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTested with: GHC 7.6.3\n\u003c/p\u003e\u003cp\u003eThis module defines integrals and other functions of System Dynamics.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Simulation.Aivika.SystemDynamics",
        "fct-package": "aivika",
        "fct-signature": "module",
        "fct-source": "src/Simulation-Aivika-SystemDynamics.html",
        "fct-type": "module",
        "title": "SystemDynamics"
      },
      "index": {
        "description": "Tested with GHC This module defines integrals and other functions of System Dynamics",
        "hierarchy": "Simulation Aivika SystemDynamics",
        "module": "Simulation.Aivika.SystemDynamics",
        "name": "SystemDynamics",
        "normalized": "",
        "package": "aivika",
        "partial": "System Dynamics",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-SystemDynamics.html#v:.-47--61-.",
      "description": {
        "fct-descr": "\u003cp\u003eCompare for inequality.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.SystemDynamics",
        "fct-package": "aivika",
        "fct-signature": "Dynamics a -\u003e Dynamics a -\u003e Dynamics Bool",
        "fct-source": "src/Simulation-Aivika-SystemDynamics.html#.%2F%3D.",
        "fct-type": "function",
        "title": "(./=.)"
      },
      "index": {
        "description": "Compare for inequality",
        "hierarchy": "Simulation Aivika SystemDynamics",
        "module": "Simulation.Aivika.SystemDynamics",
        "name": "(./=.) ./=.",
        "normalized": "Dynamics a-\u003eDynamics a-\u003eDynamics Bool",
        "package": "aivika",
        "partial": "",
        "signature": "Dynamics a-\u003eDynamics a-\u003eDynamics Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-SystemDynamics.html#v:.-60--61-.",
      "description": {
        "fct-descr": "\u003cp\u003eCompare for ordering.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.SystemDynamics",
        "fct-package": "aivika",
        "fct-signature": "Dynamics a -\u003e Dynamics a -\u003e Dynamics Bool",
        "fct-source": "src/Simulation-Aivika-SystemDynamics.html#.%3C%3D.",
        "fct-type": "function",
        "title": "(.\u003c=.)"
      },
      "index": {
        "description": "Compare for ordering",
        "hierarchy": "Simulation Aivika SystemDynamics",
        "module": "Simulation.Aivika.SystemDynamics",
        "name": "(.\u003c=.) .\u003c=.",
        "normalized": "Dynamics a-\u003eDynamics a-\u003eDynamics Bool",
        "package": "aivika",
        "partial": "",
        "signature": "Dynamics a-\u003eDynamics a-\u003eDynamics Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-SystemDynamics.html#v:.-60-.",
      "description": {
        "fct-descr": "\u003cp\u003eCompare for ordering.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.SystemDynamics",
        "fct-package": "aivika",
        "fct-signature": "Dynamics a -\u003e Dynamics a -\u003e Dynamics Bool",
        "fct-source": "src/Simulation-Aivika-SystemDynamics.html#.%3C.",
        "fct-type": "function",
        "title": "(.\u003c.)"
      },
      "index": {
        "description": "Compare for ordering",
        "hierarchy": "Simulation Aivika SystemDynamics",
        "module": "Simulation.Aivika.SystemDynamics",
        "name": "(.\u003c.) .\u003c.",
        "normalized": "Dynamics a-\u003eDynamics a-\u003eDynamics Bool",
        "package": "aivika",
        "partial": "",
        "signature": "Dynamics a-\u003eDynamics a-\u003eDynamics Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-SystemDynamics.html#v:.-61--61-.",
      "description": {
        "fct-descr": "\u003cp\u003eCompare for equality.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.SystemDynamics",
        "fct-package": "aivika",
        "fct-signature": "Dynamics a -\u003e Dynamics a -\u003e Dynamics Bool",
        "fct-source": "src/Simulation-Aivika-SystemDynamics.html#.%3D%3D.",
        "fct-type": "function",
        "title": "(.==.)"
      },
      "index": {
        "description": "Compare for equality",
        "hierarchy": "Simulation Aivika SystemDynamics",
        "module": "Simulation.Aivika.SystemDynamics",
        "name": "(.==.) .==.",
        "normalized": "Dynamics a-\u003eDynamics a-\u003eDynamics Bool",
        "package": "aivika",
        "partial": "",
        "signature": "Dynamics a-\u003eDynamics a-\u003eDynamics Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-SystemDynamics.html#v:.-62--61-.",
      "description": {
        "fct-descr": "\u003cp\u003eCompare for ordering.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.SystemDynamics",
        "fct-package": "aivika",
        "fct-signature": "Dynamics a -\u003e Dynamics a -\u003e Dynamics Bool",
        "fct-source": "src/Simulation-Aivika-SystemDynamics.html#.%3E%3D.",
        "fct-type": "function",
        "title": "(.\u003e=.)"
      },
      "index": {
        "description": "Compare for ordering",
        "hierarchy": "Simulation Aivika SystemDynamics",
        "module": "Simulation.Aivika.SystemDynamics",
        "name": "(.\u003e=.) .\u003e=.",
        "normalized": "Dynamics a-\u003eDynamics a-\u003eDynamics Bool",
        "package": "aivika",
        "partial": "",
        "signature": "Dynamics a-\u003eDynamics a-\u003eDynamics Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-SystemDynamics.html#v:.-62-.",
      "description": {
        "fct-descr": "\u003cp\u003eCompare for ordering.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.SystemDynamics",
        "fct-package": "aivika",
        "fct-signature": "Dynamics a -\u003e Dynamics a -\u003e Dynamics Bool",
        "fct-source": "src/Simulation-Aivika-SystemDynamics.html#.%3E.",
        "fct-type": "function",
        "title": "(.\u003e.)"
      },
      "index": {
        "description": "Compare for ordering",
        "hierarchy": "Simulation Aivika SystemDynamics",
        "module": "Simulation.Aivika.SystemDynamics",
        "name": "(.\u003e.) .\u003e.",
        "normalized": "Dynamics a-\u003eDynamics a-\u003eDynamics Bool",
        "package": "aivika",
        "partial": "",
        "signature": "Dynamics a-\u003eDynamics a-\u003eDynamics Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-SystemDynamics.html#v:delay",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the delayed value.\n\u003c/p\u003e\u003cp\u003eIf you want to apply the result recursively in some loopback then you\n should use one of the memoization functions such as \u003ccode\u003e\u003ca\u003ememoDynamics\u003c/a\u003e\u003c/code\u003e\n and \u003ccode\u003e\u003ca\u003ememo0Dynamics\u003c/a\u003e\u003c/code\u003e.    \n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.SystemDynamics",
        "fct-package": "aivika",
        "fct-signature": "Dynamics a-\u003e Dynamics Double-\u003e Dynamics a-\u003e Dynamics a",
        "fct-type": "function",
        "title": "delay"
      },
      "index": {
        "description": "Return the delayed value If you want to apply the result recursively in some loopback then you should use one of the memoization functions such as memoDynamics and memo0Dynamics",
        "hierarchy": "Simulation Aivika SystemDynamics",
        "module": "Simulation.Aivika.SystemDynamics",
        "name": "delay",
        "normalized": "Dynamics a-\u003eDynamics Double-\u003eDynamics a-\u003eDynamics a",
        "package": "aivika",
        "partial": "",
        "signature": "Dynamics a-\u003eDynamics Double-\u003eDynamics a-\u003eDynamics a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-SystemDynamics.html#v:delay1",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the first order exponential delay.\n\u003c/p\u003e\u003cp\u003eThis is a simplified version of the \u003ccode\u003e\u003ca\u003edelay1I\u003c/a\u003e\u003c/code\u003e function\n without specifying the initial value.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.SystemDynamics",
        "fct-package": "aivika",
        "fct-signature": "Dynamics Double-\u003e Dynamics Double-\u003e Simulation (Dynamics Double)",
        "fct-type": "function",
        "title": "delay1"
      },
      "index": {
        "description": "Return the first order exponential delay This is simplified version of the delay1I function without specifying the initial value",
        "hierarchy": "Simulation Aivika SystemDynamics",
        "module": "Simulation.Aivika.SystemDynamics",
        "name": "delay1",
        "normalized": "Dynamics Double-\u003eDynamics Double-\u003eSimulation(Dynamics Double)",
        "package": "aivika",
        "partial": "",
        "signature": "Dynamics Double-\u003eDynamics Double-\u003eSimulation(Dynamics Double)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-SystemDynamics.html#v:delay1I",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the first order exponential delay.\n\u003c/p\u003e\u003cp\u003eTo create a loopback, you should use the recursive do-notation\n with help of which the function itself is defined:\n\u003c/p\u003e\u003cpre\u003e\n delay1I x t i =\n   mdo y \u003c- integ (x - y / t) (i * t)\n       return $ y / t\n\u003c/pre\u003e",
        "fct-module": "Simulation.Aivika.SystemDynamics",
        "fct-package": "aivika",
        "fct-signature": "Dynamics Double-\u003e Dynamics Double-\u003e Dynamics Double-\u003e Simulation (Dynamics Double)",
        "fct-type": "function",
        "title": "delay1I"
      },
      "index": {
        "description": "Return the first order exponential delay To create loopback you should use the recursive do-notation with help of which the function itself is defined delay1I mdo integ return",
        "hierarchy": "Simulation Aivika SystemDynamics",
        "module": "Simulation.Aivika.SystemDynamics",
        "name": "delay1I",
        "normalized": "Dynamics Double-\u003eDynamics Double-\u003eDynamics Double-\u003eSimulation(Dynamics Double)",
        "package": "aivika",
        "partial": "",
        "signature": "Dynamics Double-\u003eDynamics Double-\u003eDynamics Double-\u003eSimulation(Dynamics Double)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-SystemDynamics.html#v:delay3",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the third order exponential delay.\n\u003c/p\u003e\u003cp\u003eThis is a simplified version of the \u003ccode\u003e\u003ca\u003edelay3I\u003c/a\u003e\u003c/code\u003e function\n without specifying the initial value.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.SystemDynamics",
        "fct-package": "aivika",
        "fct-signature": "Dynamics Double-\u003e Dynamics Double-\u003e Simulation (Dynamics Double)",
        "fct-type": "function",
        "title": "delay3"
      },
      "index": {
        "description": "Return the third order exponential delay This is simplified version of the delay3I function without specifying the initial value",
        "hierarchy": "Simulation Aivika SystemDynamics",
        "module": "Simulation.Aivika.SystemDynamics",
        "name": "delay3",
        "normalized": "Dynamics Double-\u003eDynamics Double-\u003eSimulation(Dynamics Double)",
        "package": "aivika",
        "partial": "",
        "signature": "Dynamics Double-\u003eDynamics Double-\u003eSimulation(Dynamics Double)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-SystemDynamics.html#v:delay3I",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the third order exponential delay.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.SystemDynamics",
        "fct-package": "aivika",
        "fct-signature": "Dynamics Double-\u003e Dynamics Double-\u003e Dynamics Double-\u003e Simulation (Dynamics Double)",
        "fct-type": "function",
        "title": "delay3I"
      },
      "index": {
        "description": "Return the third order exponential delay",
        "hierarchy": "Simulation Aivika SystemDynamics",
        "module": "Simulation.Aivika.SystemDynamics",
        "name": "delay3I",
        "normalized": "Dynamics Double-\u003eDynamics Double-\u003eDynamics Double-\u003eSimulation(Dynamics Double)",
        "package": "aivika",
        "partial": "",
        "signature": "Dynamics Double-\u003eDynamics Double-\u003eDynamics Double-\u003eSimulation(Dynamics Double)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-SystemDynamics.html#v:delayN",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the n'th order exponential delay.\n\u003c/p\u003e\u003cp\u003eThis is a simplified version of the \u003ccode\u003e\u003ca\u003edelayNI\u003c/a\u003e\u003c/code\u003e function\n without specifying the initial value.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.SystemDynamics",
        "fct-package": "aivika",
        "fct-signature": "Dynamics Double-\u003e Dynamics Double-\u003e Int-\u003e Simulation (Dynamics Double)",
        "fct-type": "function",
        "title": "delayN"
      },
      "index": {
        "description": "Return the th order exponential delay This is simplified version of the delayNI function without specifying the initial value",
        "hierarchy": "Simulation Aivika SystemDynamics",
        "module": "Simulation.Aivika.SystemDynamics",
        "name": "delayN",
        "normalized": "Dynamics Double-\u003eDynamics Double-\u003eInt-\u003eSimulation(Dynamics Double)",
        "package": "aivika",
        "partial": "",
        "signature": "Dynamics Double-\u003eDynamics Double-\u003eInt-\u003eSimulation(Dynamics Double)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-SystemDynamics.html#v:delayNI",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the n'th order exponential delay.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.SystemDynamics",
        "fct-package": "aivika",
        "fct-signature": "Dynamics Double-\u003e Dynamics Double-\u003e Int-\u003e Dynamics Double-\u003e Simulation (Dynamics Double)",
        "fct-type": "function",
        "title": "delayNI"
      },
      "index": {
        "description": "Return the th order exponential delay",
        "hierarchy": "Simulation Aivika SystemDynamics",
        "module": "Simulation.Aivika.SystemDynamics",
        "name": "delayNI",
        "normalized": "Dynamics Double-\u003eDynamics Double-\u003eInt-\u003eDynamics Double-\u003eSimulation(Dynamics Double)",
        "package": "aivika",
        "partial": "NI",
        "signature": "Dynamics Double-\u003eDynamics Double-\u003eInt-\u003eDynamics Double-\u003eSimulation(Dynamics Double)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-SystemDynamics.html#v:forecast",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the forecast.\n\u003c/p\u003e\u003cp\u003eThe function has the following definition:\n\u003c/p\u003e\u003cpre\u003e\n forecast x at hz =\n   do y \u003c- smooth x at\n      return $ x * (1.0 + (x / y - 1.0) / at * hz)\n\u003c/pre\u003e",
        "fct-module": "Simulation.Aivika.SystemDynamics",
        "fct-package": "aivika",
        "fct-signature": "Dynamics Double-\u003e Dynamics Double-\u003e Dynamics Double-\u003e Simulation (Dynamics Double)",
        "fct-type": "function",
        "title": "forecast"
      },
      "index": {
        "description": "Return the forecast The function has the following definition forecast at hz do smooth at return at hz",
        "hierarchy": "Simulation Aivika SystemDynamics",
        "module": "Simulation.Aivika.SystemDynamics",
        "name": "forecast",
        "normalized": "Dynamics Double-\u003eDynamics Double-\u003eDynamics Double-\u003eSimulation(Dynamics Double)",
        "package": "aivika",
        "partial": "",
        "signature": "Dynamics Double-\u003eDynamics Double-\u003eDynamics Double-\u003eSimulation(Dynamics Double)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-SystemDynamics.html#v:ifDynamics",
      "description": {
        "fct-descr": "\u003cp\u003eImplement the if-then-else operator.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.SystemDynamics",
        "fct-package": "aivika",
        "fct-signature": "Dynamics Bool -\u003e Dynamics a -\u003e Dynamics a -\u003e Dynamics a",
        "fct-source": "src/Simulation-Aivika-SystemDynamics.html#ifDynamics",
        "fct-type": "function",
        "title": "ifDynamics"
      },
      "index": {
        "description": "Implement the if-then-else operator",
        "hierarchy": "Simulation Aivika SystemDynamics",
        "module": "Simulation.Aivika.SystemDynamics",
        "name": "ifDynamics",
        "normalized": "Dynamics Bool-\u003eDynamics a-\u003eDynamics a-\u003eDynamics a",
        "package": "aivika",
        "partial": "Dynamics",
        "signature": "Dynamics Bool-\u003eDynamics a-\u003eDynamics a-\u003eDynamics a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-SystemDynamics.html#v:integ",
      "description": {
        "fct-descr": "\u003cp\u003eReturn an integral with the specified derivative and initial value.\n\u003c/p\u003e\u003cp\u003eTo create a loopback, you should use the recursive do-notation.\n It allows defining the differential equations unordered as\n in mathematics:\n\u003c/p\u003e\u003cpre\u003e\n model :: Simulation [Double]\n model = \n   mdo a \u003c- integ (- ka * a) 100\n       b \u003c- integ (ka * a - kb * b) 0\n       c \u003c- integ (kb * b) 0\n       let ka = 1\n           kb = 1\n       runDynamicsInStopTime $ sequence [a, b, c]\n\u003c/pre\u003e",
        "fct-module": "Simulation.Aivika.SystemDynamics",
        "fct-package": "aivika",
        "fct-signature": "Dynamics Double-\u003e Dynamics Double-\u003e Simulation (Dynamics Double)",
        "fct-type": "function",
        "title": "integ"
      },
      "index": {
        "description": "Return an integral with the specified derivative and initial value To create loopback you should use the recursive do-notation It allows defining the differential equations unordered as in mathematics model Simulation Double model mdo integ ka integ ka kb integ kb let ka kb runDynamicsInStopTime sequence",
        "hierarchy": "Simulation Aivika SystemDynamics",
        "module": "Simulation.Aivika.SystemDynamics",
        "name": "integ",
        "normalized": "Dynamics Double-\u003eDynamics Double-\u003eSimulation(Dynamics Double)",
        "package": "aivika",
        "partial": "",
        "signature": "Dynamics Double-\u003eDynamics Double-\u003eSimulation(Dynamics Double)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-SystemDynamics.html#v:lookupDynamics",
      "description": {
        "fct-descr": "\u003cp\u003eLookup \u003ccode\u003ex\u003c/code\u003e in a table of pairs \u003ccode\u003e(x, y)\u003c/code\u003e using linear interpolation.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.SystemDynamics",
        "fct-package": "aivika",
        "fct-signature": "Dynamics Double -\u003e Array Int (Double, Double) -\u003e Dynamics Double",
        "fct-source": "src/Simulation-Aivika-SystemDynamics.html#lookupDynamics",
        "fct-type": "function",
        "title": "lookupDynamics"
      },
      "index": {
        "description": "Lookup in table of pairs using linear interpolation",
        "hierarchy": "Simulation Aivika SystemDynamics",
        "module": "Simulation.Aivika.SystemDynamics",
        "name": "lookupDynamics",
        "normalized": "Dynamics Double-\u003eArray Int(Double,Double)-\u003eDynamics Double",
        "package": "aivika",
        "partial": "Dynamics",
        "signature": "Dynamics Double-\u003eArray Int(Double,Double)-\u003eDynamics Double"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-SystemDynamics.html#v:lookupStepwiseDynamics",
      "description": {
        "fct-descr": "\u003cp\u003eLookup \u003ccode\u003ex\u003c/code\u003e in a table of pairs \u003ccode\u003e(x, y)\u003c/code\u003e using stepwise function.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.SystemDynamics",
        "fct-package": "aivika",
        "fct-signature": "Dynamics Double -\u003e Array Int (Double, Double) -\u003e Dynamics Double",
        "fct-source": "src/Simulation-Aivika-SystemDynamics.html#lookupStepwiseDynamics",
        "fct-type": "function",
        "title": "lookupStepwiseDynamics"
      },
      "index": {
        "description": "Lookup in table of pairs using stepwise function",
        "hierarchy": "Simulation Aivika SystemDynamics",
        "module": "Simulation.Aivika.SystemDynamics",
        "name": "lookupStepwiseDynamics",
        "normalized": "Dynamics Double-\u003eArray Int(Double,Double)-\u003eDynamics Double",
        "package": "aivika",
        "partial": "Stepwise Dynamics",
        "signature": "Dynamics Double-\u003eArray Int(Double,Double)-\u003eDynamics Double"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-SystemDynamics.html#v:maxDynamics",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the maximum.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.SystemDynamics",
        "fct-package": "aivika",
        "fct-signature": "Dynamics a -\u003e Dynamics a -\u003e Dynamics a",
        "fct-source": "src/Simulation-Aivika-SystemDynamics.html#maxDynamics",
        "fct-type": "function",
        "title": "maxDynamics"
      },
      "index": {
        "description": "Return the maximum",
        "hierarchy": "Simulation Aivika SystemDynamics",
        "module": "Simulation.Aivika.SystemDynamics",
        "name": "maxDynamics",
        "normalized": "Dynamics a-\u003eDynamics a-\u003eDynamics a",
        "package": "aivika",
        "partial": "Dynamics",
        "signature": "Dynamics a-\u003eDynamics a-\u003eDynamics a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-SystemDynamics.html#v:minDynamics",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the minimum.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.SystemDynamics",
        "fct-package": "aivika",
        "fct-signature": "Dynamics a -\u003e Dynamics a -\u003e Dynamics a",
        "fct-source": "src/Simulation-Aivika-SystemDynamics.html#minDynamics",
        "fct-type": "function",
        "title": "minDynamics"
      },
      "index": {
        "description": "Return the minimum",
        "hierarchy": "Simulation Aivika SystemDynamics",
        "module": "Simulation.Aivika.SystemDynamics",
        "name": "minDynamics",
        "normalized": "Dynamics a-\u003eDynamics a-\u003eDynamics a",
        "package": "aivika",
        "partial": "Dynamics",
        "signature": "Dynamics a-\u003eDynamics a-\u003eDynamics a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-SystemDynamics.html#v:npv",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the Net Present Value (NPV) of the stream computed using the specified\n discount rate, the initial value and some factor (usually 1).\n\u003c/p\u003e\u003cp\u003eIt is defined in the following way:\n\u003c/p\u003e\u003cpre\u003e\n npv stream rate init factor =\n   mdo df \u003c- integ (- df * rate) 1\n       accum \u003c- integ (stream * df) init\n       return $ (accum + dt * stream * df) * factor\n\u003c/pre\u003e",
        "fct-module": "Simulation.Aivika.SystemDynamics",
        "fct-package": "aivika",
        "fct-signature": "Dynamics Double-\u003e Dynamics Double-\u003e Dynamics Double-\u003e Dynamics Double-\u003e Simulation (Dynamics Double)",
        "fct-type": "function",
        "title": "npv"
      },
      "index": {
        "description": "Return the Net Present Value NPV of the stream computed using the specified discount rate the initial value and some factor usually It is defined in the following way npv stream rate init factor mdo df integ df rate accum integ stream df init return accum dt stream df factor",
        "hierarchy": "Simulation Aivika SystemDynamics",
        "module": "Simulation.Aivika.SystemDynamics",
        "name": "npv",
        "normalized": "Dynamics Double-\u003eDynamics Double-\u003eDynamics Double-\u003eDynamics Double-\u003eSimulation(Dynamics Double)",
        "package": "aivika",
        "partial": "",
        "signature": "Dynamics Double-\u003eDynamics Double-\u003eDynamics Double-\u003eDynamics Double-\u003eSimulation(Dynamics Double)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-SystemDynamics.html#v:npve",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the Net Present Value End of period (NPVE) of the stream computed\n using the specified discount rate, the initial value and some factor.\n\u003c/p\u003e\u003cp\u003eIt is defined in the following way:\n\u003c/p\u003e\u003cpre\u003e\n npve stream rate init factor =\n   mdo df \u003c- integ (- df * rate / (1 + rate * dt)) (1 / (1 + rate * dt))\n       accum \u003c- integ (stream * df) init\n       return $ (accum + dt * stream * df) * factor\n\u003c/pre\u003e",
        "fct-module": "Simulation.Aivika.SystemDynamics",
        "fct-package": "aivika",
        "fct-signature": "Dynamics Double-\u003e Dynamics Double-\u003e Dynamics Double-\u003e Dynamics Double-\u003e Simulation (Dynamics Double)",
        "fct-type": "function",
        "title": "npve"
      },
      "index": {
        "description": "Return the Net Present Value End of period NPVE of the stream computed using the specified discount rate the initial value and some factor It is defined in the following way npve stream rate init factor mdo df integ df rate rate dt rate dt accum integ stream df init return accum dt stream df factor",
        "hierarchy": "Simulation Aivika SystemDynamics",
        "module": "Simulation.Aivika.SystemDynamics",
        "name": "npve",
        "normalized": "Dynamics Double-\u003eDynamics Double-\u003eDynamics Double-\u003eDynamics Double-\u003eSimulation(Dynamics Double)",
        "package": "aivika",
        "partial": "",
        "signature": "Dynamics Double-\u003eDynamics Double-\u003eDynamics Double-\u003eDynamics Double-\u003eSimulation(Dynamics Double)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-SystemDynamics.html#v:smooth",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the first order exponential smooth.\n\u003c/p\u003e\u003cp\u003eThis is a simplified version of the \u003ccode\u003e\u003ca\u003esmoothI\u003c/a\u003e\u003c/code\u003e function\n without specifing the initial value.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.SystemDynamics",
        "fct-package": "aivika",
        "fct-signature": "Dynamics Double-\u003e Dynamics Double-\u003e Simulation (Dynamics Double)",
        "fct-type": "function",
        "title": "smooth"
      },
      "index": {
        "description": "Return the first order exponential smooth This is simplified version of the smoothI function without specifing the initial value",
        "hierarchy": "Simulation Aivika SystemDynamics",
        "module": "Simulation.Aivika.SystemDynamics",
        "name": "smooth",
        "normalized": "Dynamics Double-\u003eDynamics Double-\u003eSimulation(Dynamics Double)",
        "package": "aivika",
        "partial": "",
        "signature": "Dynamics Double-\u003eDynamics Double-\u003eSimulation(Dynamics Double)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-SystemDynamics.html#v:smooth3",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the third order exponential smooth.\n\u003c/p\u003e\u003cp\u003eThis is a simplified version of the \u003ccode\u003e\u003ca\u003esmooth3I\u003c/a\u003e\u003c/code\u003e function\n without specifying the initial value.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.SystemDynamics",
        "fct-package": "aivika",
        "fct-signature": "Dynamics Double-\u003e Dynamics Double-\u003e Simulation (Dynamics Double)",
        "fct-type": "function",
        "title": "smooth3"
      },
      "index": {
        "description": "Return the third order exponential smooth This is simplified version of the smooth3I function without specifying the initial value",
        "hierarchy": "Simulation Aivika SystemDynamics",
        "module": "Simulation.Aivika.SystemDynamics",
        "name": "smooth3",
        "normalized": "Dynamics Double-\u003eDynamics Double-\u003eSimulation(Dynamics Double)",
        "package": "aivika",
        "partial": "",
        "signature": "Dynamics Double-\u003eDynamics Double-\u003eSimulation(Dynamics Double)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-SystemDynamics.html#v:smooth3I",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the third order exponential smooth.\n\u003c/p\u003e\u003cp\u003eTo create a loopback, you should use the recursive do-notation\n with help of which the function itself is defined:\n\u003c/p\u003e\u003cpre\u003e\n smooth3I x t i =\n   mdo y  \u003c- integ ((s2 - y) / t') i\n       s2 \u003c- integ ((s1 - s2) / t') i\n       s1 \u003c- integ ((x - s1) / t') i\n       let t' = t / 3.0\n       return y\n\u003c/pre\u003e",
        "fct-module": "Simulation.Aivika.SystemDynamics",
        "fct-package": "aivika",
        "fct-signature": "Dynamics Double-\u003e Dynamics Double-\u003e Dynamics Double-\u003e Simulation (Dynamics Double)",
        "fct-type": "function",
        "title": "smooth3I"
      },
      "index": {
        "description": "Return the third order exponential smooth To create loopback you should use the recursive do-notation with help of which the function itself is defined smooth3I mdo integ s2 s2 integ s1 s2 s1 integ s1 let return",
        "hierarchy": "Simulation Aivika SystemDynamics",
        "module": "Simulation.Aivika.SystemDynamics",
        "name": "smooth3I",
        "normalized": "Dynamics Double-\u003eDynamics Double-\u003eDynamics Double-\u003eSimulation(Dynamics Double)",
        "package": "aivika",
        "partial": "",
        "signature": "Dynamics Double-\u003eDynamics Double-\u003eDynamics Double-\u003eSimulation(Dynamics Double)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-SystemDynamics.html#v:smoothI",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the first order exponential smooth.\n\u003c/p\u003e\u003cp\u003eTo create a loopback, you should use the recursive do-notation\n with help of which the function itself is defined:\n\u003c/p\u003e\u003cpre\u003e\n smoothI x t i =\n   mdo y \u003c- integ ((x - y) / t) i\n       return y\n\u003c/pre\u003e",
        "fct-module": "Simulation.Aivika.SystemDynamics",
        "fct-package": "aivika",
        "fct-signature": "Dynamics Double-\u003e Dynamics Double-\u003e Dynamics Double-\u003e Simulation (Dynamics Double)",
        "fct-type": "function",
        "title": "smoothI"
      },
      "index": {
        "description": "Return the first order exponential smooth To create loopback you should use the recursive do-notation with help of which the function itself is defined smoothI mdo integ return",
        "hierarchy": "Simulation Aivika SystemDynamics",
        "module": "Simulation.Aivika.SystemDynamics",
        "name": "smoothI",
        "normalized": "Dynamics Double-\u003eDynamics Double-\u003eDynamics Double-\u003eSimulation(Dynamics Double)",
        "package": "aivika",
        "partial": "",
        "signature": "Dynamics Double-\u003eDynamics Double-\u003eDynamics Double-\u003eSimulation(Dynamics Double)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-SystemDynamics.html#v:smoothN",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the n'th order exponential smooth.\n\u003c/p\u003e\u003cp\u003eThis is a simplified version of the \u003ccode\u003e\u003ca\u003esmoothNI\u003c/a\u003e\u003c/code\u003e function\n without specifying the initial value.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.SystemDynamics",
        "fct-package": "aivika",
        "fct-signature": "Dynamics Double-\u003e Dynamics Double-\u003e Int-\u003e Simulation (Dynamics Double)",
        "fct-type": "function",
        "title": "smoothN"
      },
      "index": {
        "description": "Return the th order exponential smooth This is simplified version of the smoothNI function without specifying the initial value",
        "hierarchy": "Simulation Aivika SystemDynamics",
        "module": "Simulation.Aivika.SystemDynamics",
        "name": "smoothN",
        "normalized": "Dynamics Double-\u003eDynamics Double-\u003eInt-\u003eSimulation(Dynamics Double)",
        "package": "aivika",
        "partial": "",
        "signature": "Dynamics Double-\u003eDynamics Double-\u003eInt-\u003eSimulation(Dynamics Double)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-SystemDynamics.html#v:smoothNI",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the n'th order exponential smooth.\n\u003c/p\u003e\u003cp\u003eThe result is not discrete in that sense that it may change within the integration time\n interval depending on the integration method used. Probably, you should apply\n the \u003ccode\u003e\u003ca\u003ediscreteDynamics\u003c/a\u003e\u003c/code\u003e function to the result if you want to achieve an effect when\n the value is not changed within the time interval, which is used sometimes.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.SystemDynamics",
        "fct-package": "aivika",
        "fct-signature": "Dynamics Double-\u003e Dynamics Double-\u003e Int-\u003e Dynamics Double-\u003e Simulation (Dynamics Double)",
        "fct-type": "function",
        "title": "smoothNI"
      },
      "index": {
        "description": "Return the th order exponential smooth The result is not discrete in that sense that it may change within the integration time interval depending on the integration method used Probably you should apply the discreteDynamics function to the result if you want to achieve an effect when the value is not changed within the time interval which is used sometimes",
        "hierarchy": "Simulation Aivika SystemDynamics",
        "module": "Simulation.Aivika.SystemDynamics",
        "name": "smoothNI",
        "normalized": "Dynamics Double-\u003eDynamics Double-\u003eInt-\u003eDynamics Double-\u003eSimulation(Dynamics Double)",
        "package": "aivika",
        "partial": "NI",
        "signature": "Dynamics Double-\u003eDynamics Double-\u003eInt-\u003eDynamics Double-\u003eSimulation(Dynamics Double)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-SystemDynamics.html#v:sumDynamics",
      "description": {
        "fct-descr": "\u003cp\u003eRetun the sum for the difference equation.\n It is like an integral returned by the \u003ccode\u003e\u003ca\u003einteg\u003c/a\u003e\u003c/code\u003e function, only now\n the difference is used instead of derivative.\n\u003c/p\u003e\u003cp\u003eAs usual, to create a loopback, you should use the recursive do-notation.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.SystemDynamics",
        "fct-package": "aivika",
        "fct-signature": "Dynamics a-\u003e Dynamics a-\u003e Simulation (Dynamics a)",
        "fct-type": "function",
        "title": "sumDynamics"
      },
      "index": {
        "description": "Retun the sum for the difference equation It is like an integral returned by the integ function only now the difference is used instead of derivative As usual to create loopback you should use the recursive do-notation",
        "hierarchy": "Simulation Aivika SystemDynamics",
        "module": "Simulation.Aivika.SystemDynamics",
        "name": "sumDynamics",
        "normalized": "Dynamics a-\u003eDynamics a-\u003eSimulation(Dynamics a)",
        "package": "aivika",
        "partial": "Dynamics",
        "signature": "Dynamics a-\u003eDynamics a-\u003eSimulation(Dynamics a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-SystemDynamics.html#v:trend",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the trend.\n\u003c/p\u003e\u003cp\u003eThe function has the following definition:\n\u003c/p\u003e\u003cpre\u003e\n trend x at i =\n   do y \u003c- smoothI x at (x / (1.0 + i * at))\n      return $ (x / y - 1.0) / at\n\u003c/pre\u003e",
        "fct-module": "Simulation.Aivika.SystemDynamics",
        "fct-package": "aivika",
        "fct-signature": "Dynamics Double-\u003e Dynamics Double-\u003e Dynamics Double-\u003e Simulation (Dynamics Double)",
        "fct-type": "function",
        "title": "trend"
      },
      "index": {
        "description": "Return the trend The function has the following definition trend at do smoothI at at return at",
        "hierarchy": "Simulation Aivika SystemDynamics",
        "module": "Simulation.Aivika.SystemDynamics",
        "name": "trend",
        "normalized": "Dynamics Double-\u003eDynamics Double-\u003eDynamics Double-\u003eSimulation(Dynamics Double)",
        "package": "aivika",
        "partial": "",
        "signature": "Dynamics Double-\u003eDynamics Double-\u003eDynamics Double-\u003eSimulation(Dynamics Double)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Unboxed.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTested with: GHC 7.6.3\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eUnboxed\u003c/a\u003e\u003c/code\u003e class allows creating unboxed arrays in monad \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Simulation.Aivika.Unboxed",
        "fct-package": "aivika",
        "fct-signature": "module",
        "fct-source": "src/Simulation-Aivika-Unboxed.html",
        "fct-type": "module",
        "title": "Unboxed"
      },
      "index": {
        "description": "Tested with GHC The Unboxed class allows creating unboxed arrays in monad IO",
        "hierarchy": "Simulation Aivika Unboxed",
        "module": "Simulation.Aivika.Unboxed",
        "name": "Unboxed",
        "normalized": "",
        "package": "aivika",
        "partial": "Unboxed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Unboxed.html#t:Unboxed",
      "description": {
        "fct-descr": "\u003cp\u003eThe type which values can be contained in an unboxed array.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Unboxed",
        "fct-package": "aivika",
        "fct-signature": "class",
        "fct-source": "src/Simulation-Aivika-Unboxed.html#Unboxed",
        "fct-type": "class",
        "title": "Unboxed"
      },
      "index": {
        "description": "The type which values can be contained in an unboxed array",
        "hierarchy": "Simulation Aivika Unboxed",
        "module": "Simulation.Aivika.Unboxed",
        "name": "Unboxed",
        "normalized": "",
        "package": "aivika",
        "partial": "Unboxed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Unboxed.html#v:newUnboxedArray_",
      "description": {
        "fct-descr": "\u003cp\u003eCreate an unboxed array with default values.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Unboxed",
        "fct-package": "aivika",
        "fct-signature": "(i, i) -\u003e IO (IOUArray i e)",
        "fct-source": "src/Simulation-Aivika-Unboxed.html#newUnboxedArray_",
        "fct-type": "method",
        "title": "newUnboxedArray_"
      },
      "index": {
        "description": "Create an unboxed array with default values",
        "hierarchy": "Simulation Aivika Unboxed",
        "module": "Simulation.Aivika.Unboxed",
        "name": "newUnboxedArray_",
        "normalized": "(a,a)-\u003eIO(IOUArray a b)",
        "package": "aivika",
        "partial": "Unboxed Array",
        "signature": "(i,i)-\u003eIO(IOUArray i e)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Var-Unboxed.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTested with: GHC 7.6.3\n\u003c/p\u003e\u003cp\u003eThis module defines an unboxed variable that is bound up with the event queue and \n that keeps the history of changes storing the values in an unboxed array, which\n allows using the variable in differential and difference equations under\n some conditions.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Simulation.Aivika.Var.Unboxed",
        "fct-package": "aivika",
        "fct-signature": "module",
        "fct-source": "src/Simulation-Aivika-Var-Unboxed.html",
        "fct-type": "module",
        "title": "Unboxed"
      },
      "index": {
        "description": "Tested with GHC This module defines an unboxed variable that is bound up with the event queue and that keeps the history of changes storing the values in an unboxed array which allows using the variable in differential and difference equations under some conditions",
        "hierarchy": "Simulation Aivika Var Unboxed",
        "module": "Simulation.Aivika.Var.Unboxed",
        "name": "Unboxed",
        "normalized": "",
        "package": "aivika",
        "partial": "Unboxed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Var-Unboxed.html#t:Var",
      "description": {
        "fct-descr": "\u003cp\u003eLike the \u003ccode\u003eRef\u003c/code\u003e reference but keeps the history of changes in \n different time points. The \u003ccode\u003e\u003ca\u003eVar\u003c/a\u003e\u003c/code\u003e variable is usually safe in the hybrid \n simulation, for example, when it can be used in the differential or\n difference equations unless you update the variable twice in the\n same integration time point. Only this variable is much slower than\n the reference.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Var.Unboxed",
        "fct-package": "aivika",
        "fct-signature": "data",
        "fct-source": "src/Simulation-Aivika-Var-Unboxed.html#Var",
        "fct-type": "data",
        "title": "Var"
      },
      "index": {
        "description": "Like the Ref reference but keeps the history of changes in different time points The Var variable is usually safe in the hybrid simulation for example when it can be used in the differential or difference equations unless you update the variable twice in the same integration time point Only this variable is much slower than the reference",
        "hierarchy": "Simulation Aivika Var Unboxed",
        "module": "Simulation.Aivika.Var.Unboxed",
        "name": "Var",
        "normalized": "",
        "package": "aivika",
        "partial": "Var",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Var-Unboxed.html#v:freezeVar",
      "description": {
        "fct-descr": "\u003cp\u003eFreeze the variable and return in arrays the time points and corresponded \n values when the variable had changed in different time points: (1) the last\n actual value per each time point is provided and (2) the time points are\n sorted in ascending order.\n\u003c/p\u003e\u003cp\u003eIf you need to get all changes including those ones that correspond to the same\n simulation time points then you can use the \u003ccode\u003e\u003ca\u003enewSignalHistory\u003c/a\u003e\u003c/code\u003e function passing\n in the \u003ccode\u003e\u003ca\u003evarChanged\u003c/a\u003e\u003c/code\u003e signal to it and then call function \u003ccode\u003e\u003ca\u003ereadSignalHistory\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Var.Unboxed",
        "fct-package": "aivika",
        "fct-signature": "Var a -\u003e Event (Array Int Double, Array Int a)",
        "fct-source": "src/Simulation-Aivika-Var-Unboxed.html#freezeVar",
        "fct-type": "function",
        "title": "freezeVar"
      },
      "index": {
        "description": "Freeze the variable and return in arrays the time points and corresponded values when the variable had changed in different time points the last actual value per each time point is provided and the time points are sorted in ascending order If you need to get all changes including those ones that correspond to the same simulation time points then you can use the newSignalHistory function passing in the varChanged signal to it and then call function readSignalHistory",
        "hierarchy": "Simulation Aivika Var Unboxed",
        "module": "Simulation.Aivika.Var.Unboxed",
        "name": "freezeVar",
        "normalized": "Var a-\u003eEvent(Array Int Double,Array Int a)",
        "package": "aivika",
        "partial": "Var",
        "signature": "Var a-\u003eEvent(Array Int Double,Array Int a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Var-Unboxed.html#v:modifyVar",
      "description": {
        "fct-descr": "\u003cp\u003eMutate the contents of the variable.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Var.Unboxed",
        "fct-package": "aivika",
        "fct-signature": "Var a -\u003e (a -\u003e a) -\u003e Event ()",
        "fct-source": "src/Simulation-Aivika-Var-Unboxed.html#modifyVar",
        "fct-type": "function",
        "title": "modifyVar"
      },
      "index": {
        "description": "Mutate the contents of the variable",
        "hierarchy": "Simulation Aivika Var Unboxed",
        "module": "Simulation.Aivika.Var.Unboxed",
        "name": "modifyVar",
        "normalized": "Var a-\u003e(a-\u003ea)-\u003eEvent()",
        "package": "aivika",
        "partial": "Var",
        "signature": "Var a-\u003e(a-\u003ea)-\u003eEvent()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Var-Unboxed.html#v:newVar",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new variable.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Var.Unboxed",
        "fct-package": "aivika",
        "fct-signature": "a -\u003e Simulation (Var a)",
        "fct-source": "src/Simulation-Aivika-Var-Unboxed.html#newVar",
        "fct-type": "function",
        "title": "newVar"
      },
      "index": {
        "description": "Create new variable",
        "hierarchy": "Simulation Aivika Var Unboxed",
        "module": "Simulation.Aivika.Var.Unboxed",
        "name": "newVar",
        "normalized": "a-\u003eSimulation(Var a)",
        "package": "aivika",
        "partial": "Var",
        "signature": "a-\u003eSimulation(Var a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Var-Unboxed.html#v:readVar",
      "description": {
        "fct-descr": "\u003cp\u003eRead the value of a variable.\n\u003c/p\u003e\u003cp\u003eIt is safe to run the resulting computation with help of the \u003ccode\u003e\u003ca\u003erunEvent\u003c/a\u003e\u003c/code\u003e\n function using modes \u003ccode\u003e\u003ca\u003eIncludingCurrentEventsOrFromPast\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003eIncludingEarlierEventsOrFromPast\u003c/a\u003e\u003c/code\u003e, which is necessary if you are going\n to use the variable in the differential or difference equations. Only\n it is preferrable if the variable is not updated twice\n in the same integration time point; otherwise, different values can be returned\n for the same point.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Var.Unboxed",
        "fct-package": "aivika",
        "fct-signature": "Var a -\u003e Event a",
        "fct-source": "src/Simulation-Aivika-Var-Unboxed.html#readVar",
        "fct-type": "function",
        "title": "readVar"
      },
      "index": {
        "description": "Read the value of variable It is safe to run the resulting computation with help of the runEvent function using modes IncludingCurrentEventsOrFromPast and IncludingEarlierEventsOrFromPast which is necessary if you are going to use the variable in the differential or difference equations Only it is preferrable if the variable is not updated twice in the same integration time point otherwise different values can be returned for the same point",
        "hierarchy": "Simulation Aivika Var Unboxed",
        "module": "Simulation.Aivika.Var.Unboxed",
        "name": "readVar",
        "normalized": "Var a-\u003eEvent a",
        "package": "aivika",
        "partial": "Var",
        "signature": "Var a-\u003eEvent a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Var-Unboxed.html#v:varChanged",
      "description": {
        "fct-descr": "\u003cp\u003eReturn a signal that notifies about every change of the variable state.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Var.Unboxed",
        "fct-package": "aivika",
        "fct-signature": "Var a -\u003e Signal a",
        "fct-source": "src/Simulation-Aivika-Var-Unboxed.html#varChanged",
        "fct-type": "function",
        "title": "varChanged"
      },
      "index": {
        "description": "Return signal that notifies about every change of the variable state",
        "hierarchy": "Simulation Aivika Var Unboxed",
        "module": "Simulation.Aivika.Var.Unboxed",
        "name": "varChanged",
        "normalized": "Var a-\u003eSignal a",
        "package": "aivika",
        "partial": "Changed",
        "signature": "Var a-\u003eSignal a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Var-Unboxed.html#v:varChanged_",
      "description": {
        "fct-descr": "\u003cp\u003eReturn a signal that notifies about every change of the variable state.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Var.Unboxed",
        "fct-package": "aivika",
        "fct-signature": "Var a -\u003e Signal ()",
        "fct-source": "src/Simulation-Aivika-Var-Unboxed.html#varChanged_",
        "fct-type": "function",
        "title": "varChanged_"
      },
      "index": {
        "description": "Return signal that notifies about every change of the variable state",
        "hierarchy": "Simulation Aivika Var Unboxed",
        "module": "Simulation.Aivika.Var.Unboxed",
        "name": "varChanged_",
        "normalized": "Var a-\u003eSignal()",
        "package": "aivika",
        "partial": "Changed",
        "signature": "Var a-\u003eSignal()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Var-Unboxed.html#v:writeVar",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a new value into the variable.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Var.Unboxed",
        "fct-package": "aivika",
        "fct-signature": "Var a -\u003e a -\u003e Event ()",
        "fct-source": "src/Simulation-Aivika-Var-Unboxed.html#writeVar",
        "fct-type": "function",
        "title": "writeVar"
      },
      "index": {
        "description": "Write new value into the variable",
        "hierarchy": "Simulation Aivika Var Unboxed",
        "module": "Simulation.Aivika.Var.Unboxed",
        "name": "writeVar",
        "normalized": "Var a-\u003ea-\u003eEvent()",
        "package": "aivika",
        "partial": "Var",
        "signature": "Var a-\u003ea-\u003eEvent()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Var.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTested with: GHC 7.6.3\n\u003c/p\u003e\u003cp\u003eThis module defines a variable that is bound up with the event queue and \n that keeps the history of changes storing the values in an array, which\n allows using the variable in differential and difference equations under\n some conditions.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Simulation.Aivika.Var",
        "fct-package": "aivika",
        "fct-signature": "module",
        "fct-source": "src/Simulation-Aivika-Var.html",
        "fct-type": "module",
        "title": "Var"
      },
      "index": {
        "description": "Tested with GHC This module defines variable that is bound up with the event queue and that keeps the history of changes storing the values in an array which allows using the variable in differential and difference equations under some conditions",
        "hierarchy": "Simulation Aivika Var",
        "module": "Simulation.Aivika.Var",
        "name": "Var",
        "normalized": "",
        "package": "aivika",
        "partial": "Var",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Var.html#t:Var",
      "description": {
        "fct-descr": "\u003cp\u003eLike the \u003ccode\u003eRef\u003c/code\u003e reference but keeps the history of changes in \n different time points. The \u003ccode\u003e\u003ca\u003eVar\u003c/a\u003e\u003c/code\u003e variable is usually safe in the hybrid \n simulation, for example, when it can be used in the differential or\n difference equations unless you update the variable twice in the\n same integration time point. Only this variable is much slower than\n the reference.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Var",
        "fct-package": "aivika",
        "fct-signature": "data",
        "fct-source": "src/Simulation-Aivika-Var.html#Var",
        "fct-type": "data",
        "title": "Var"
      },
      "index": {
        "description": "Like the Ref reference but keeps the history of changes in different time points The Var variable is usually safe in the hybrid simulation for example when it can be used in the differential or difference equations unless you update the variable twice in the same integration time point Only this variable is much slower than the reference",
        "hierarchy": "Simulation Aivika Var",
        "module": "Simulation.Aivika.Var",
        "name": "Var",
        "normalized": "",
        "package": "aivika",
        "partial": "Var",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Var.html#v:freezeVar",
      "description": {
        "fct-descr": "\u003cp\u003eFreeze the variable and return in arrays the time points and corresponded \n values when the variable had changed in different time points: (1) the last\n actual value per each time point is provided and (2) the time points are\n sorted in ascending order.\n\u003c/p\u003e\u003cp\u003eIf you need to get all changes including those ones that correspond to the same\n simulation time points then you can use the \u003ccode\u003e\u003ca\u003enewSignalHistory\u003c/a\u003e\u003c/code\u003e function passing\n in the \u003ccode\u003e\u003ca\u003evarChanged\u003c/a\u003e\u003c/code\u003e signal to it and then call function \u003ccode\u003e\u003ca\u003ereadSignalHistory\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Var",
        "fct-package": "aivika",
        "fct-signature": "Var a -\u003e Event (Array Int Double, Array Int a)",
        "fct-source": "src/Simulation-Aivika-Var.html#freezeVar",
        "fct-type": "function",
        "title": "freezeVar"
      },
      "index": {
        "description": "Freeze the variable and return in arrays the time points and corresponded values when the variable had changed in different time points the last actual value per each time point is provided and the time points are sorted in ascending order If you need to get all changes including those ones that correspond to the same simulation time points then you can use the newSignalHistory function passing in the varChanged signal to it and then call function readSignalHistory",
        "hierarchy": "Simulation Aivika Var",
        "module": "Simulation.Aivika.Var",
        "name": "freezeVar",
        "normalized": "Var a-\u003eEvent(Array Int Double,Array Int a)",
        "package": "aivika",
        "partial": "Var",
        "signature": "Var a-\u003eEvent(Array Int Double,Array Int a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Var.html#v:modifyVar",
      "description": {
        "fct-descr": "\u003cp\u003eMutate the contents of the variable.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Var",
        "fct-package": "aivika",
        "fct-signature": "Var a -\u003e (a -\u003e a) -\u003e Event ()",
        "fct-source": "src/Simulation-Aivika-Var.html#modifyVar",
        "fct-type": "function",
        "title": "modifyVar"
      },
      "index": {
        "description": "Mutate the contents of the variable",
        "hierarchy": "Simulation Aivika Var",
        "module": "Simulation.Aivika.Var",
        "name": "modifyVar",
        "normalized": "Var a-\u003e(a-\u003ea)-\u003eEvent()",
        "package": "aivika",
        "partial": "Var",
        "signature": "Var a-\u003e(a-\u003ea)-\u003eEvent()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Var.html#v:newVar",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new variable.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Var",
        "fct-package": "aivika",
        "fct-signature": "a -\u003e Simulation (Var a)",
        "fct-source": "src/Simulation-Aivika-Var.html#newVar",
        "fct-type": "function",
        "title": "newVar"
      },
      "index": {
        "description": "Create new variable",
        "hierarchy": "Simulation Aivika Var",
        "module": "Simulation.Aivika.Var",
        "name": "newVar",
        "normalized": "a-\u003eSimulation(Var a)",
        "package": "aivika",
        "partial": "Var",
        "signature": "a-\u003eSimulation(Var a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Var.html#v:readVar",
      "description": {
        "fct-descr": "\u003cp\u003eRead the value of a variable.\n\u003c/p\u003e\u003cp\u003eIt is safe to run the resulting computation with help of the \u003ccode\u003e\u003ca\u003erunEvent\u003c/a\u003e\u003c/code\u003e\n function using modes \u003ccode\u003e\u003ca\u003eIncludingCurrentEventsOrFromPast\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003eIncludingEarlierEventsOrFromPast\u003c/a\u003e\u003c/code\u003e, which is necessary if you are going\n to use the variable in the differential or difference equations. Only\n it is preferrable if the variable is not updated twice\n in the same integration time point; otherwise, different values can be returned\n for the same point.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Var",
        "fct-package": "aivika",
        "fct-signature": "Var a -\u003e Event a",
        "fct-source": "src/Simulation-Aivika-Var.html#readVar",
        "fct-type": "function",
        "title": "readVar"
      },
      "index": {
        "description": "Read the value of variable It is safe to run the resulting computation with help of the runEvent function using modes IncludingCurrentEventsOrFromPast and IncludingEarlierEventsOrFromPast which is necessary if you are going to use the variable in the differential or difference equations Only it is preferrable if the variable is not updated twice in the same integration time point otherwise different values can be returned for the same point",
        "hierarchy": "Simulation Aivika Var",
        "module": "Simulation.Aivika.Var",
        "name": "readVar",
        "normalized": "Var a-\u003eEvent a",
        "package": "aivika",
        "partial": "Var",
        "signature": "Var a-\u003eEvent a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Var.html#v:varChanged",
      "description": {
        "fct-descr": "\u003cp\u003eReturn a signal that notifies about every change of the variable state.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Var",
        "fct-package": "aivika",
        "fct-signature": "Var a -\u003e Signal a",
        "fct-source": "src/Simulation-Aivika-Var.html#varChanged",
        "fct-type": "function",
        "title": "varChanged"
      },
      "index": {
        "description": "Return signal that notifies about every change of the variable state",
        "hierarchy": "Simulation Aivika Var",
        "module": "Simulation.Aivika.Var",
        "name": "varChanged",
        "normalized": "Var a-\u003eSignal a",
        "package": "aivika",
        "partial": "Changed",
        "signature": "Var a-\u003eSignal a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Var.html#v:varChanged_",
      "description": {
        "fct-descr": "\u003cp\u003eReturn a signal that notifies about every change of the variable state.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Var",
        "fct-package": "aivika",
        "fct-signature": "Var a -\u003e Signal ()",
        "fct-source": "src/Simulation-Aivika-Var.html#varChanged_",
        "fct-type": "function",
        "title": "varChanged_"
      },
      "index": {
        "description": "Return signal that notifies about every change of the variable state",
        "hierarchy": "Simulation Aivika Var",
        "module": "Simulation.Aivika.Var",
        "name": "varChanged_",
        "normalized": "Var a-\u003eSignal()",
        "package": "aivika",
        "partial": "Changed",
        "signature": "Var a-\u003eSignal()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Var.html#v:writeVar",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a new value into the variable.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Var",
        "fct-package": "aivika",
        "fct-signature": "Var a -\u003e a -\u003e Event ()",
        "fct-source": "src/Simulation-Aivika-Var.html#writeVar",
        "fct-type": "function",
        "title": "writeVar"
      },
      "index": {
        "description": "Write new value into the variable",
        "hierarchy": "Simulation Aivika Var",
        "module": "Simulation.Aivika.Var",
        "name": "writeVar",
        "normalized": "Var a-\u003ea-\u003eEvent()",
        "package": "aivika",
        "partial": "Var",
        "signature": "Var a-\u003ea-\u003eEvent()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Vector-Unboxed.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTested with: GHC 7.6.3\n\u003c/p\u003e\u003cp\u003eAn imperative unboxed vector.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Simulation.Aivika.Vector.Unboxed",
        "fct-package": "aivika",
        "fct-signature": "module",
        "fct-source": "src/Simulation-Aivika-Vector-Unboxed.html",
        "fct-type": "module",
        "title": "Unboxed"
      },
      "index": {
        "description": "Tested with GHC An imperative unboxed vector",
        "hierarchy": "Simulation Aivika Vector Unboxed",
        "module": "Simulation.Aivika.Vector.Unboxed",
        "name": "Unboxed",
        "normalized": "",
        "package": "aivika",
        "partial": "Unboxed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Vector-Unboxed.html#t:Vector",
      "description": {
        "fct-descr": "\u003cp\u003eRepresents an unboxed resizable vector.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Vector.Unboxed",
        "fct-package": "aivika",
        "fct-signature": "data",
        "fct-source": "src/Simulation-Aivika-Vector-Unboxed.html#Vector",
        "fct-type": "data",
        "title": "Vector"
      },
      "index": {
        "description": "Represents an unboxed resizable vector",
        "hierarchy": "Simulation Aivika Vector Unboxed",
        "module": "Simulation.Aivika.Vector.Unboxed",
        "name": "Vector",
        "normalized": "",
        "package": "aivika",
        "partial": "Vector",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Vector-Unboxed.html#v:appendVector",
      "description": {
        "fct-descr": "\u003cp\u003eAdd the specified element to the end of the vector.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Vector.Unboxed",
        "fct-package": "aivika",
        "fct-signature": "Vector a -\u003e a -\u003e IO ()",
        "fct-source": "src/Simulation-Aivika-Vector-Unboxed.html#appendVector",
        "fct-type": "function",
        "title": "appendVector"
      },
      "index": {
        "description": "Add the specified element to the end of the vector",
        "hierarchy": "Simulation Aivika Vector Unboxed",
        "module": "Simulation.Aivika.Vector.Unboxed",
        "name": "appendVector",
        "normalized": "Vector a-\u003ea-\u003eIO()",
        "package": "aivika",
        "partial": "Vector",
        "signature": "Vector a-\u003ea-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Vector-Unboxed.html#v:copyVector",
      "description": {
        "fct-descr": "\u003cp\u003eCopy the vector.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Vector.Unboxed",
        "fct-package": "aivika",
        "fct-signature": "Vector a -\u003e IO (Vector a)",
        "fct-source": "src/Simulation-Aivika-Vector-Unboxed.html#copyVector",
        "fct-type": "function",
        "title": "copyVector"
      },
      "index": {
        "description": "Copy the vector",
        "hierarchy": "Simulation Aivika Vector Unboxed",
        "module": "Simulation.Aivika.Vector.Unboxed",
        "name": "copyVector",
        "normalized": "Vector a-\u003eIO(Vector a)",
        "package": "aivika",
        "partial": "Vector",
        "signature": "Vector a-\u003eIO(Vector a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Vector-Unboxed.html#v:freezeVector",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the elements of the vector in an immutable array.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Vector.Unboxed",
        "fct-package": "aivika",
        "fct-signature": "Vector a -\u003e IO (Array Int a)",
        "fct-source": "src/Simulation-Aivika-Vector-Unboxed.html#freezeVector",
        "fct-type": "function",
        "title": "freezeVector"
      },
      "index": {
        "description": "Return the elements of the vector in an immutable array",
        "hierarchy": "Simulation Aivika Vector Unboxed",
        "module": "Simulation.Aivika.Vector.Unboxed",
        "name": "freezeVector",
        "normalized": "Vector a-\u003eIO(Array Int a)",
        "package": "aivika",
        "partial": "Vector",
        "signature": "Vector a-\u003eIO(Array Int a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Vector-Unboxed.html#v:newVector",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new vector.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Vector.Unboxed",
        "fct-package": "aivika",
        "fct-signature": "IO (Vector a)",
        "fct-source": "src/Simulation-Aivika-Vector-Unboxed.html#newVector",
        "fct-type": "function",
        "title": "newVector"
      },
      "index": {
        "description": "Create new vector",
        "hierarchy": "Simulation Aivika Vector Unboxed",
        "module": "Simulation.Aivika.Vector.Unboxed",
        "name": "newVector",
        "normalized": "",
        "package": "aivika",
        "partial": "Vector",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Vector-Unboxed.html#v:readVector",
      "description": {
        "fct-descr": "\u003cp\u003eRead a value from the vector, where indices are started from 0.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Vector.Unboxed",
        "fct-package": "aivika",
        "fct-signature": "Vector a -\u003e Int -\u003e IO a",
        "fct-source": "src/Simulation-Aivika-Vector-Unboxed.html#readVector",
        "fct-type": "function",
        "title": "readVector"
      },
      "index": {
        "description": "Read value from the vector where indices are started from",
        "hierarchy": "Simulation Aivika Vector Unboxed",
        "module": "Simulation.Aivika.Vector.Unboxed",
        "name": "readVector",
        "normalized": "Vector a-\u003eInt-\u003eIO a",
        "package": "aivika",
        "partial": "Vector",
        "signature": "Vector a-\u003eInt-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Vector-Unboxed.html#v:vectorBinarySearch",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the index of the specified element using binary search; otherwise, \n a negated insertion index minus one: 0 -\u003e -0 - 1, ..., i -\u003e -i - 1, ....\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Vector.Unboxed",
        "fct-package": "aivika",
        "fct-signature": "Vector a -\u003e a -\u003e IO Int",
        "fct-source": "src/Simulation-Aivika-Vector-Unboxed.html#vectorBinarySearch",
        "fct-type": "function",
        "title": "vectorBinarySearch"
      },
      "index": {
        "description": "Return the index of the specified element using binary search otherwise negated insertion index minus one",
        "hierarchy": "Simulation Aivika Vector Unboxed",
        "module": "Simulation.Aivika.Vector.Unboxed",
        "name": "vectorBinarySearch",
        "normalized": "Vector a-\u003ea-\u003eIO Int",
        "package": "aivika",
        "partial": "Binary Search",
        "signature": "Vector a-\u003ea-\u003eIO Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Vector-Unboxed.html#v:vectorCount",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the element count.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Vector.Unboxed",
        "fct-package": "aivika",
        "fct-signature": "Vector a -\u003e IO Int",
        "fct-source": "src/Simulation-Aivika-Vector-Unboxed.html#vectorCount",
        "fct-type": "function",
        "title": "vectorCount"
      },
      "index": {
        "description": "Return the element count",
        "hierarchy": "Simulation Aivika Vector Unboxed",
        "module": "Simulation.Aivika.Vector.Unboxed",
        "name": "vectorCount",
        "normalized": "Vector a-\u003eIO Int",
        "package": "aivika",
        "partial": "Count",
        "signature": "Vector a-\u003eIO Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Vector-Unboxed.html#v:vectorDeleteAt",
      "description": {
        "fct-descr": "\u003cp\u003eDelete the element at the specified index.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Vector.Unboxed",
        "fct-package": "aivika",
        "fct-signature": "Vector a -\u003e Int -\u003e IO ()",
        "fct-source": "src/Simulation-Aivika-Vector-Unboxed.html#vectorDeleteAt",
        "fct-type": "function",
        "title": "vectorDeleteAt"
      },
      "index": {
        "description": "Delete the element at the specified index",
        "hierarchy": "Simulation Aivika Vector Unboxed",
        "module": "Simulation.Aivika.Vector.Unboxed",
        "name": "vectorDeleteAt",
        "normalized": "Vector a-\u003eInt-\u003eIO()",
        "package": "aivika",
        "partial": "Delete At",
        "signature": "Vector a-\u003eInt-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Vector-Unboxed.html#v:vectorIndex",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the index of the item or -1.     \n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Vector.Unboxed",
        "fct-package": "aivika",
        "fct-signature": "Vector a -\u003e a -\u003e IO Int",
        "fct-source": "src/Simulation-Aivika-Vector-Unboxed.html#vectorIndex",
        "fct-type": "function",
        "title": "vectorIndex"
      },
      "index": {
        "description": "Return the index of the item or",
        "hierarchy": "Simulation Aivika Vector Unboxed",
        "module": "Simulation.Aivika.Vector.Unboxed",
        "name": "vectorIndex",
        "normalized": "Vector a-\u003ea-\u003eIO Int",
        "package": "aivika",
        "partial": "Index",
        "signature": "Vector a-\u003ea-\u003eIO Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Vector-Unboxed.html#v:vectorInsert",
      "description": {
        "fct-descr": "\u003cp\u003eInsert the element in the vector at the specified index.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Vector.Unboxed",
        "fct-package": "aivika",
        "fct-signature": "Vector a -\u003e Int -\u003e a -\u003e IO ()",
        "fct-source": "src/Simulation-Aivika-Vector-Unboxed.html#vectorInsert",
        "fct-type": "function",
        "title": "vectorInsert"
      },
      "index": {
        "description": "Insert the element in the vector at the specified index",
        "hierarchy": "Simulation Aivika Vector Unboxed",
        "module": "Simulation.Aivika.Vector.Unboxed",
        "name": "vectorInsert",
        "normalized": "Vector a-\u003eInt-\u003ea-\u003eIO()",
        "package": "aivika",
        "partial": "Insert",
        "signature": "Vector a-\u003eInt-\u003ea-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Vector-Unboxed.html#v:writeVector",
      "description": {
        "fct-descr": "\u003cp\u003eSet an array item at the specified index which is started from 0.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Vector.Unboxed",
        "fct-package": "aivika",
        "fct-signature": "Vector a -\u003e Int -\u003e a -\u003e IO ()",
        "fct-source": "src/Simulation-Aivika-Vector-Unboxed.html#writeVector",
        "fct-type": "function",
        "title": "writeVector"
      },
      "index": {
        "description": "Set an array item at the specified index which is started from",
        "hierarchy": "Simulation Aivika Vector Unboxed",
        "module": "Simulation.Aivika.Vector.Unboxed",
        "name": "writeVector",
        "normalized": "Vector a-\u003eInt-\u003ea-\u003eIO()",
        "package": "aivika",
        "partial": "Vector",
        "signature": "Vector a-\u003eInt-\u003ea-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Vector.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTested with: GHC 7.6.3\n\u003c/p\u003e\u003cp\u003eAn imperative vector.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Simulation.Aivika.Vector",
        "fct-package": "aivika",
        "fct-signature": "module",
        "fct-source": "src/Simulation-Aivika-Vector.html",
        "fct-type": "module",
        "title": "Vector"
      },
      "index": {
        "description": "Tested with GHC An imperative vector",
        "hierarchy": "Simulation Aivika Vector",
        "module": "Simulation.Aivika.Vector",
        "name": "Vector",
        "normalized": "",
        "package": "aivika",
        "partial": "Vector",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Vector.html#t:Vector",
      "description": {
        "fct-descr": "\u003cp\u003eRepresents a resizable vector.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Vector",
        "fct-package": "aivika",
        "fct-signature": "data",
        "fct-source": "src/Simulation-Aivika-Vector.html#Vector",
        "fct-type": "data",
        "title": "Vector"
      },
      "index": {
        "description": "Represents resizable vector",
        "hierarchy": "Simulation Aivika Vector",
        "module": "Simulation.Aivika.Vector",
        "name": "Vector",
        "normalized": "",
        "package": "aivika",
        "partial": "Vector",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Vector.html#v:appendVector",
      "description": {
        "fct-descr": "\u003cp\u003eAdd the specified element to the end of the vector.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Vector",
        "fct-package": "aivika",
        "fct-signature": "Vector a -\u003e a -\u003e IO ()",
        "fct-source": "src/Simulation-Aivika-Vector.html#appendVector",
        "fct-type": "function",
        "title": "appendVector"
      },
      "index": {
        "description": "Add the specified element to the end of the vector",
        "hierarchy": "Simulation Aivika Vector",
        "module": "Simulation.Aivika.Vector",
        "name": "appendVector",
        "normalized": "Vector a-\u003ea-\u003eIO()",
        "package": "aivika",
        "partial": "Vector",
        "signature": "Vector a-\u003ea-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Vector.html#v:copyVector",
      "description": {
        "fct-descr": "\u003cp\u003eCopy the vector.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Vector",
        "fct-package": "aivika",
        "fct-signature": "Vector a -\u003e IO (Vector a)",
        "fct-source": "src/Simulation-Aivika-Vector.html#copyVector",
        "fct-type": "function",
        "title": "copyVector"
      },
      "index": {
        "description": "Copy the vector",
        "hierarchy": "Simulation Aivika Vector",
        "module": "Simulation.Aivika.Vector",
        "name": "copyVector",
        "normalized": "Vector a-\u003eIO(Vector a)",
        "package": "aivika",
        "partial": "Vector",
        "signature": "Vector a-\u003eIO(Vector a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Vector.html#v:freezeVector",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the elements of the vector in an immutable array.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Vector",
        "fct-package": "aivika",
        "fct-signature": "Vector a -\u003e IO (Array Int a)",
        "fct-source": "src/Simulation-Aivika-Vector.html#freezeVector",
        "fct-type": "function",
        "title": "freezeVector"
      },
      "index": {
        "description": "Return the elements of the vector in an immutable array",
        "hierarchy": "Simulation Aivika Vector",
        "module": "Simulation.Aivika.Vector",
        "name": "freezeVector",
        "normalized": "Vector a-\u003eIO(Array Int a)",
        "package": "aivika",
        "partial": "Vector",
        "signature": "Vector a-\u003eIO(Array Int a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Vector.html#v:newVector",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new vector.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Vector",
        "fct-package": "aivika",
        "fct-signature": "IO (Vector a)",
        "fct-source": "src/Simulation-Aivika-Vector.html#newVector",
        "fct-type": "function",
        "title": "newVector"
      },
      "index": {
        "description": "Create new vector",
        "hierarchy": "Simulation Aivika Vector",
        "module": "Simulation.Aivika.Vector",
        "name": "newVector",
        "normalized": "",
        "package": "aivika",
        "partial": "Vector",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Vector.html#v:readVector",
      "description": {
        "fct-descr": "\u003cp\u003eRead a value from the vector, where indices are started from 0.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Vector",
        "fct-package": "aivika",
        "fct-signature": "Vector a -\u003e Int -\u003e IO a",
        "fct-source": "src/Simulation-Aivika-Vector.html#readVector",
        "fct-type": "function",
        "title": "readVector"
      },
      "index": {
        "description": "Read value from the vector where indices are started from",
        "hierarchy": "Simulation Aivika Vector",
        "module": "Simulation.Aivika.Vector",
        "name": "readVector",
        "normalized": "Vector a-\u003eInt-\u003eIO a",
        "package": "aivika",
        "partial": "Vector",
        "signature": "Vector a-\u003eInt-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Vector.html#v:vectorBinarySearch",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the index of the specified element using binary search; otherwise, \n a negated insertion index minus one: 0 -\u003e -0 - 1, ..., i -\u003e -i - 1, ....\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Vector",
        "fct-package": "aivika",
        "fct-signature": "Vector a -\u003e a -\u003e IO Int",
        "fct-source": "src/Simulation-Aivika-Vector.html#vectorBinarySearch",
        "fct-type": "function",
        "title": "vectorBinarySearch"
      },
      "index": {
        "description": "Return the index of the specified element using binary search otherwise negated insertion index minus one",
        "hierarchy": "Simulation Aivika Vector",
        "module": "Simulation.Aivika.Vector",
        "name": "vectorBinarySearch",
        "normalized": "Vector a-\u003ea-\u003eIO Int",
        "package": "aivika",
        "partial": "Binary Search",
        "signature": "Vector a-\u003ea-\u003eIO Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Vector.html#v:vectorCount",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the element count.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Vector",
        "fct-package": "aivika",
        "fct-signature": "Vector a -\u003e IO Int",
        "fct-source": "src/Simulation-Aivika-Vector.html#vectorCount",
        "fct-type": "function",
        "title": "vectorCount"
      },
      "index": {
        "description": "Return the element count",
        "hierarchy": "Simulation Aivika Vector",
        "module": "Simulation.Aivika.Vector",
        "name": "vectorCount",
        "normalized": "Vector a-\u003eIO Int",
        "package": "aivika",
        "partial": "Count",
        "signature": "Vector a-\u003eIO Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Vector.html#v:vectorDeleteAt",
      "description": {
        "fct-descr": "\u003cp\u003eDelete the element at the specified index.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Vector",
        "fct-package": "aivika",
        "fct-signature": "Vector a -\u003e Int -\u003e IO ()",
        "fct-source": "src/Simulation-Aivika-Vector.html#vectorDeleteAt",
        "fct-type": "function",
        "title": "vectorDeleteAt"
      },
      "index": {
        "description": "Delete the element at the specified index",
        "hierarchy": "Simulation Aivika Vector",
        "module": "Simulation.Aivika.Vector",
        "name": "vectorDeleteAt",
        "normalized": "Vector a-\u003eInt-\u003eIO()",
        "package": "aivika",
        "partial": "Delete At",
        "signature": "Vector a-\u003eInt-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Vector.html#v:vectorIndex",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the index of the item or -1.     \n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Vector",
        "fct-package": "aivika",
        "fct-signature": "Vector a -\u003e a -\u003e IO Int",
        "fct-source": "src/Simulation-Aivika-Vector.html#vectorIndex",
        "fct-type": "function",
        "title": "vectorIndex"
      },
      "index": {
        "description": "Return the index of the item or",
        "hierarchy": "Simulation Aivika Vector",
        "module": "Simulation.Aivika.Vector",
        "name": "vectorIndex",
        "normalized": "Vector a-\u003ea-\u003eIO Int",
        "package": "aivika",
        "partial": "Index",
        "signature": "Vector a-\u003ea-\u003eIO Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Vector.html#v:vectorInsert",
      "description": {
        "fct-descr": "\u003cp\u003eInsert the element in the vector at the specified index.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Vector",
        "fct-package": "aivika",
        "fct-signature": "Vector a -\u003e Int -\u003e a -\u003e IO ()",
        "fct-source": "src/Simulation-Aivika-Vector.html#vectorInsert",
        "fct-type": "function",
        "title": "vectorInsert"
      },
      "index": {
        "description": "Insert the element in the vector at the specified index",
        "hierarchy": "Simulation Aivika Vector",
        "module": "Simulation.Aivika.Vector",
        "name": "vectorInsert",
        "normalized": "Vector a-\u003eInt-\u003ea-\u003eIO()",
        "package": "aivika",
        "partial": "Insert",
        "signature": "Vector a-\u003eInt-\u003ea-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Vector.html#v:writeVector",
      "description": {
        "fct-descr": "\u003cp\u003eSet an array item at the specified index which is started from 0.\n\u003c/p\u003e",
        "fct-module": "Simulation.Aivika.Vector",
        "fct-package": "aivika",
        "fct-signature": "Vector a -\u003e Int -\u003e a -\u003e IO ()",
        "fct-source": "src/Simulation-Aivika-Vector.html#writeVector",
        "fct-type": "function",
        "title": "writeVector"
      },
      "index": {
        "description": "Set an array item at the specified index which is started from",
        "hierarchy": "Simulation Aivika Vector",
        "module": "Simulation.Aivika.Vector",
        "name": "writeVector",
        "normalized": "Vector a-\u003eInt-\u003ea-\u003eIO()",
        "package": "aivika",
        "partial": "Vector",
        "signature": "Vector a-\u003eInt-\u003ea-\u003eIO()"
      }
    }
  }
]