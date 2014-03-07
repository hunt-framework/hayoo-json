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
        "word": "aivika"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTested with: GHC 7.6.3\n\u003c/p\u003e\u003cp\u003eThis module introduces basic entities for the agent-based modeling.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Simulation.Aivika.Agent",
          "name": "Agent",
          "package": "aivika",
          "source": "src/Simulation-Aivika-Agent.html",
          "type": "module"
        },
        "index": {
          "description": "Tested with GHC This module introduces basic entities for the agent-based modeling",
          "hierarchy": "Simulation Aivika Agent",
          "module": "Simulation.Aivika.Agent",
          "name": "Agent",
          "package": "aivika",
          "partial": "Agent",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Agent.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents an agent.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Agent",
          "name": "Agent",
          "package": "aivika",
          "source": "src/Simulation-Aivika-Agent.html#Agent",
          "type": "data"
        },
        "index": {
          "description": "Represents an agent",
          "hierarchy": "Simulation Aivika Agent",
          "module": "Simulation.Aivika.Agent",
          "name": "Agent",
          "package": "aivika",
          "partial": "Agent",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Agent.html#t:Agent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents the agent state.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Agent",
          "name": "AgentState",
          "package": "aivika",
          "source": "src/Simulation-Aivika-Agent.html#AgentState",
          "type": "data"
        },
        "index": {
          "description": "Represents the agent state",
          "hierarchy": "Simulation Aivika Agent",
          "module": "Simulation.Aivika.Agent",
          "name": "AgentState",
          "package": "aivika",
          "partial": "Agent State",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Agent.html#t:AgentState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd to the state a timeout handler that will be actuated \n in the specified time period, while the state remains active.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Agent",
          "name": "addTimeout",
          "package": "aivika",
          "signature": "AgentState -\u003e Double -\u003e Event () -\u003e Event ()",
          "source": "src/Simulation-Aivika-Agent.html#addTimeout",
          "type": "function"
        },
        "index": {
          "description": "Add to the state timeout handler that will be actuated in the specified time period while the state remains active",
          "hierarchy": "Simulation Aivika Agent",
          "module": "Simulation.Aivika.Agent",
          "name": "addTimeout",
          "normalized": "AgentState-\u003eDouble-\u003eEvent()-\u003eEvent()",
          "package": "aivika",
          "partial": "Timeout",
          "signature": "AgentState-\u003eDouble-\u003eEvent()-\u003eEvent()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Agent.html#v:addTimeout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd to the state a timer handler that will be actuated\n in the specified time period and then repeated again many times,\n while the state remains active.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Agent",
          "name": "addTimer",
          "package": "aivika",
          "signature": "AgentState -\u003e Event Double -\u003e Event () -\u003e Event ()",
          "source": "src/Simulation-Aivika-Agent.html#addTimer",
          "type": "function"
        },
        "index": {
          "description": "Add to the state timer handler that will be actuated in the specified time period and then repeated again many times while the state remains active",
          "hierarchy": "Simulation Aivika Agent",
          "module": "Simulation.Aivika.Agent",
          "name": "addTimer",
          "normalized": "AgentState-\u003eEvent Double-\u003eEvent()-\u003eEvent()",
          "package": "aivika",
          "partial": "Timer",
          "signature": "AgentState-\u003eEvent Double-\u003eEvent()-\u003eEvent()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Agent.html#v:addTimer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an agent.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Agent",
          "name": "newAgent",
          "package": "aivika",
          "signature": "Simulation Agent",
          "source": "src/Simulation-Aivika-Agent.html#newAgent",
          "type": "function"
        },
        "index": {
          "description": "Create an agent",
          "hierarchy": "Simulation Aivika Agent",
          "module": "Simulation.Aivika.Agent",
          "name": "newAgent",
          "package": "aivika",
          "partial": "Agent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Agent.html#v:newAgent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new state.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Agent",
          "name": "newState",
          "package": "aivika",
          "signature": "Agent -\u003e Simulation AgentState",
          "source": "src/Simulation-Aivika-Agent.html#newState",
          "type": "function"
        },
        "index": {
          "description": "Create new state",
          "hierarchy": "Simulation Aivika Agent",
          "module": "Simulation.Aivika.Agent",
          "name": "newState",
          "normalized": "Agent-\u003eSimulation AgentState",
          "package": "aivika",
          "partial": "State",
          "signature": "Agent-\u003eSimulation AgentState",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Agent.html#v:newState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a child state.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Agent",
          "name": "newSubstate",
          "package": "aivika",
          "signature": "AgentState -\u003e Simulation AgentState",
          "source": "src/Simulation-Aivika-Agent.html#newSubstate",
          "type": "function"
        },
        "index": {
          "description": "Create child state",
          "hierarchy": "Simulation Aivika Agent",
          "module": "Simulation.Aivika.Agent",
          "name": "newSubstate",
          "normalized": "AgentState-\u003eSimulation AgentState",
          "package": "aivika",
          "partial": "Substate",
          "signature": "AgentState-\u003eSimulation AgentState",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Agent.html#v:newSubstate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSelect the state. The activation and selection are repeated while\n there is the transition state defined by \u003ccode\u003e\u003ca\u003esetStateTransition\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Agent",
          "name": "selectState",
          "package": "aivika",
          "signature": "AgentState -\u003e Event ()",
          "source": "src/Simulation-Aivika-Agent.html#selectState",
          "type": "function"
        },
        "index": {
          "description": "Select the state The activation and selection are repeated while there is the transition state defined by setStateTransition",
          "hierarchy": "Simulation Aivika Agent",
          "module": "Simulation.Aivika.Agent",
          "name": "selectState",
          "normalized": "AgentState-\u003eEvent()",
          "package": "aivika",
          "partial": "State",
          "signature": "AgentState-\u003eEvent()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Agent.html#v:selectState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the selected active state.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Agent",
          "name": "selectedState",
          "package": "aivika",
          "signature": "Agent -\u003e Event (Maybe AgentState)",
          "source": "src/Simulation-Aivika-Agent.html#selectedState",
          "type": "function"
        },
        "index": {
          "description": "Return the selected active state",
          "hierarchy": "Simulation Aivika Agent",
          "module": "Simulation.Aivika.Agent",
          "name": "selectedState",
          "normalized": "Agent-\u003eEvent(Maybe AgentState)",
          "package": "aivika",
          "partial": "State",
          "signature": "Agent-\u003eEvent(Maybe AgentState)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Agent.html#v:selectedState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn a signal that notifies about every change of the selected state.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Agent",
          "name": "selectedStateChanged",
          "package": "aivika",
          "signature": "Agent -\u003e Signal (Maybe AgentState)",
          "source": "src/Simulation-Aivika-Agent.html#selectedStateChanged",
          "type": "function"
        },
        "index": {
          "description": "Return signal that notifies about every change of the selected state",
          "hierarchy": "Simulation Aivika Agent",
          "module": "Simulation.Aivika.Agent",
          "name": "selectedStateChanged",
          "normalized": "Agent-\u003eSignal(Maybe AgentState)",
          "package": "aivika",
          "partial": "State Changed",
          "signature": "Agent-\u003eSignal(Maybe AgentState)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Agent.html#v:selectedStateChanged"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn a signal that notifies about every change of the selected state.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Agent",
          "name": "selectedStateChanged_",
          "package": "aivika",
          "signature": "Agent -\u003e Signal ()",
          "source": "src/Simulation-Aivika-Agent.html#selectedStateChanged_",
          "type": "function"
        },
        "index": {
          "description": "Return signal that notifies about every change of the selected state",
          "hierarchy": "Simulation Aivika Agent",
          "module": "Simulation.Aivika.Agent",
          "name": "selectedStateChanged_",
          "normalized": "Agent-\u003eSignal()",
          "package": "aivika",
          "partial": "State Changed",
          "signature": "Agent-\u003eSignal()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Agent.html#v:selectedStateChanged_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the activation computation for the specified state.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Agent",
          "name": "setStateActivation",
          "package": "aivika",
          "signature": "AgentState -\u003e Event () -\u003e Simulation ()",
          "source": "src/Simulation-Aivika-Agent.html#setStateActivation",
          "type": "function"
        },
        "index": {
          "description": "Set the activation computation for the specified state",
          "hierarchy": "Simulation Aivika Agent",
          "module": "Simulation.Aivika.Agent",
          "name": "setStateActivation",
          "normalized": "AgentState-\u003eEvent()-\u003eSimulation()",
          "package": "aivika",
          "partial": "State Activation",
          "signature": "AgentState-\u003eEvent()-\u003eSimulation()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Agent.html#v:setStateActivation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the deactivation computation for the specified state.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Agent",
          "name": "setStateDeactivation",
          "package": "aivika",
          "signature": "AgentState -\u003e Event () -\u003e Simulation ()",
          "source": "src/Simulation-Aivika-Agent.html#setStateDeactivation",
          "type": "function"
        },
        "index": {
          "description": "Set the deactivation computation for the specified state",
          "hierarchy": "Simulation Aivika Agent",
          "module": "Simulation.Aivika.Agent",
          "name": "setStateDeactivation",
          "normalized": "AgentState-\u003eEvent()-\u003eSimulation()",
          "package": "aivika",
          "partial": "State Deactivation",
          "signature": "AgentState-\u003eEvent()-\u003eSimulation()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Agent.html#v:setStateDeactivation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the transition state which will be next and which is used only\n when selecting the state directly with help of \u003ccode\u003e\u003ca\u003eselectState\u003c/a\u003e\u003c/code\u003e.\n If the state was activated intermediately, when selecting\n another state, then this computation is not used.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Agent",
          "name": "setStateTransition",
          "package": "aivika",
          "signature": "AgentState -\u003e Event (Maybe AgentState) -\u003e Simulation ()",
          "source": "src/Simulation-Aivika-Agent.html#setStateTransition",
          "type": "function"
        },
        "index": {
          "description": "Set the transition state which will be next and which is used only when selecting the state directly with help of selectState If the state was activated intermediately when selecting another state then this computation is not used",
          "hierarchy": "Simulation Aivika Agent",
          "module": "Simulation.Aivika.Agent",
          "name": "setStateTransition",
          "normalized": "AgentState-\u003eEvent(Maybe AgentState)-\u003eSimulation()",
          "package": "aivika",
          "partial": "State Transition",
          "signature": "AgentState-\u003eEvent(Maybe AgentState)-\u003eSimulation()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Agent.html#v:setStateTransition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the corresponded agent.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Agent",
          "name": "stateAgent",
          "package": "aivika",
          "signature": "AgentState -\u003e Agent",
          "source": "src/Simulation-Aivika-Agent.html#stateAgent",
          "type": "function"
        },
        "index": {
          "description": "Return the corresponded agent",
          "hierarchy": "Simulation Aivika Agent",
          "module": "Simulation.Aivika.Agent",
          "name": "stateAgent",
          "normalized": "AgentState-\u003eAgent",
          "package": "aivika",
          "partial": "Agent",
          "signature": "AgentState-\u003eAgent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Agent.html#v:stateAgent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the parent state or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Agent",
          "name": "stateParent",
          "package": "aivika",
          "signature": "AgentState -\u003e Maybe AgentState",
          "source": "src/Simulation-Aivika-Agent.html#stateParent",
          "type": "function"
        },
        "index": {
          "description": "Return the parent state or Nothing",
          "hierarchy": "Simulation Aivika Agent",
          "module": "Simulation.Aivika.Agent",
          "name": "stateParent",
          "normalized": "AgentState-\u003eMaybe AgentState",
          "package": "aivika",
          "partial": "Parent",
          "signature": "AgentState-\u003eMaybe AgentState",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Agent.html#v:stateParent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTested with: GHC 7.6.3\n\u003c/p\u003e\u003cp\u003eThis module defines the types and functions for working with\n the external events that usually arrive from outside the model.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Simulation.Aivika.Arrival",
          "name": "Arrival",
          "package": "aivika",
          "source": "src/Simulation-Aivika-Arrival.html",
          "type": "module"
        },
        "index": {
          "description": "Tested with GHC This module defines the types and functions for working with the external events that usually arrive from outside the model",
          "hierarchy": "Simulation Aivika Arrival",
          "module": "Simulation.Aivika.Arrival",
          "name": "Arrival",
          "package": "aivika",
          "partial": "Arrival",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Arrival.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIt defines when an external event has arrived, usually generated by\n some random \u003ccode\u003e\u003ca\u003eStream\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSuch events should arrive one by one without time lag in the following sense\n that the model should start awaiting the next event exactly in that time\n when the previous event has arrived. It usually happens automatically when\n using a \u003ccode\u003e\u003ca\u003equeueProcessor\u003c/a\u003e\u003c/code\u003e with an ability to lost the arrived event if the queue\n is full.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Arrival",
          "name": "Arrival",
          "package": "aivika",
          "source": "src/Simulation-Aivika-Arrival.html#Arrival",
          "type": "data"
        },
        "index": {
          "description": "It defines when an external event has arrived usually generated by some random Stream Such events should arrive one by one without time lag in the following sense that the model should start awaiting the next event exactly in that time when the previous event has arrived It usually happens automatically when using queueProcessor with an ability to lost the arrived event if the queue is full",
          "hierarchy": "Simulation Aivika Arrival",
          "module": "Simulation.Aivika.Arrival",
          "name": "Arrival",
          "package": "aivika",
          "partial": "Arrival",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Arrival.html#t:Arrival"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAccumulates the statistics about that how long the arrived events are processed.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Arrival",
          "name": "ArrivalTimer",
          "package": "aivika",
          "source": "src/Simulation-Aivika-Arrival.html#ArrivalTimer",
          "type": "data"
        },
        "index": {
          "description": "Accumulates the statistics about that how long the arrived events are processed",
          "hierarchy": "Simulation Aivika Arrival",
          "module": "Simulation.Aivika.Arrival",
          "name": "ArrivalTimer",
          "package": "aivika",
          "partial": "Arrival Timer",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Arrival.html#t:ArrivalTimer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Simulation.Aivika.Arrival",
          "name": "Arrival",
          "package": "aivika",
          "signature": "Arrival",
          "source": "src/Simulation-Aivika-Arrival.html#Arrival",
          "type": "function"
        },
        "index": {
          "hierarchy": "Simulation Aivika Arrival",
          "module": "Simulation.Aivika.Arrival",
          "name": "Arrival",
          "package": "aivika",
          "partial": "Arrival",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Arrival.html#v:Arrival"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe delay time which has passed from the time of\n arriving the previous event\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Arrival",
          "name": "arrivalDelay",
          "package": "aivika",
          "signature": "Double",
          "source": "src/Simulation-Aivika-Arrival.html#Arrival",
          "type": "function"
        },
        "index": {
          "description": "the delay time which has passed from the time of arriving the previous event",
          "hierarchy": "Simulation Aivika Arrival",
          "module": "Simulation.Aivika.Arrival",
          "name": "arrivalDelay",
          "package": "aivika",
          "partial": "Delay",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Arrival.html#v:arrivalDelay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the statistics about that how long the arrived events were processed.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Arrival",
          "name": "arrivalProcessingTime",
          "package": "aivika",
          "signature": "ArrivalTimer -\u003e Event (SamplingStats Double)",
          "source": "src/Simulation-Aivika-Arrival.html#arrivalProcessingTime",
          "type": "function"
        },
        "index": {
          "description": "Return the statistics about that how long the arrived events were processed",
          "hierarchy": "Simulation Aivika Arrival",
          "module": "Simulation.Aivika.Arrival",
          "name": "arrivalProcessingTime",
          "normalized": "ArrivalTimer-\u003eEvent(SamplingStats Double)",
          "package": "aivika",
          "partial": "Processing Time",
          "signature": "ArrivalTimer-\u003eEvent(SamplingStats Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Arrival.html#v:arrivalProcessingTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe simulation time at which the event has arrived\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Arrival",
          "name": "arrivalTime",
          "package": "aivika",
          "signature": "Double",
          "source": "src/Simulation-Aivika-Arrival.html#Arrival",
          "type": "function"
        },
        "index": {
          "description": "the simulation time at which the event has arrived",
          "hierarchy": "Simulation Aivika Arrival",
          "module": "Simulation.Aivika.Arrival",
          "name": "arrivalTime",
          "package": "aivika",
          "partial": "Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Arrival.html#v:arrivalTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn a processor that actually measures how much time has passed from\n the time of arriving the events.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Arrival",
          "name": "arrivalTimerProcessor",
          "package": "aivika",
          "signature": "ArrivalTimer -\u003e Processor Arrival Arrival",
          "source": "src/Simulation-Aivika-Arrival.html#arrivalTimerProcessor",
          "type": "function"
        },
        "index": {
          "description": "Return processor that actually measures how much time has passed from the time of arriving the events",
          "hierarchy": "Simulation Aivika Arrival",
          "module": "Simulation.Aivika.Arrival",
          "name": "arrivalTimerProcessor",
          "normalized": "ArrivalTimer-\u003eProcessor Arrival Arrival",
          "package": "aivika",
          "partial": "Timer Processor",
          "signature": "ArrivalTimer-\u003eProcessor Arrival Arrival",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Arrival.html#v:arrivalTimerProcessor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new timer that measures how long the arrived events are processed.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Arrival",
          "name": "newArrivalTimer",
          "package": "aivika",
          "signature": "Simulation ArrivalTimer",
          "source": "src/Simulation-Aivika-Arrival.html#newArrivalTimer",
          "type": "function"
        },
        "index": {
          "description": "Create new timer that measures how long the arrived events are processed",
          "hierarchy": "Simulation Aivika Arrival",
          "module": "Simulation.Aivika.Arrival",
          "name": "newArrivalTimer",
          "package": "aivika",
          "partial": "Arrival Timer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Arrival.html#v:newArrivalTimer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTested with: GHC 7.6.3\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eCont\u003c/a\u003e\u003c/code\u003e monad is a variation of the standard Cont monad \n and F# async workflow, where the result of applying \n the continuations is the \u003ccode\u003e\u003ca\u003eEvent\u003c/a\u003e\u003c/code\u003e computation.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Simulation.Aivika.Cont",
          "name": "Cont",
          "package": "aivika",
          "source": "src/Simulation-Aivika-Cont.html",
          "type": "module"
        },
        "index": {
          "description": "Tested with GHC The Cont monad is variation of the standard Cont monad and async workflow where the result of applying the continuations is the Event computation",
          "hierarchy": "Simulation Aivika Cont",
          "module": "Simulation.Aivika.Cont",
          "name": "Cont",
          "package": "aivika",
          "partial": "Cont",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Cont.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eCont\u003c/a\u003e\u003c/code\u003e type is similar to the standard Cont monad \n and F# async workflow but only the result of applying\n the continuations return the \u003ccode\u003e\u003ca\u003eEvent\u003c/a\u003e\u003c/code\u003e computation.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Cont",
          "name": "Cont",
          "package": "aivika",
          "source": "src/Simulation-Aivika-Internal-Cont.html#Cont",
          "type": "data"
        },
        "index": {
          "description": "The Cont type is similar to the standard Cont monad and async workflow but only the result of applying the continuations return the Event computation",
          "hierarchy": "Simulation Aivika Cont",
          "module": "Simulation.Aivika.Cont",
          "name": "Cont",
          "package": "aivika",
          "partial": "Cont",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Cont.html#t:Cont"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIt defines how the parent and child computations should be cancelled.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Cont",
          "name": "ContCancellation",
          "package": "aivika",
          "source": "src/Simulation-Aivika-Internal-Cont.html#ContCancellation",
          "type": "data"
        },
        "index": {
          "description": "It defines how the parent and child computations should be cancelled",
          "hierarchy": "Simulation Aivika Cont",
          "module": "Simulation.Aivika.Cont",
          "name": "ContCancellation",
          "package": "aivika",
          "partial": "Cont Cancellation",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Cont.html#t:ContCancellation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCancel the child if its parent is cancelled.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Cont",
          "name": "CancelChildAfterParent",
          "package": "aivika",
          "signature": "CancelChildAfterParent",
          "source": "src/Simulation-Aivika-Internal-Cont.html#ContCancellation",
          "type": "function"
        },
        "index": {
          "description": "Cancel the child if its parent is cancelled",
          "hierarchy": "Simulation Aivika Cont",
          "module": "Simulation.Aivika.Cont",
          "name": "CancelChildAfterParent",
          "package": "aivika",
          "partial": "Cancel Child After Parent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Cont.html#v:CancelChildAfterParent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCancel the computations in isolation.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Cont",
          "name": "CancelInIsolation",
          "package": "aivika",
          "signature": "CancelInIsolation",
          "source": "src/Simulation-Aivika-Internal-Cont.html#ContCancellation",
          "type": "function"
        },
        "index": {
          "description": "Cancel the computations in isolation",
          "hierarchy": "Simulation Aivika Cont",
          "module": "Simulation.Aivika.Cont",
          "name": "CancelInIsolation",
          "package": "aivika",
          "partial": "Cancel In Isolation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Cont.html#v:CancelInIsolation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCancel the parent if its child is cancelled.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Cont",
          "name": "CancelParentAfterChild",
          "package": "aivika",
          "signature": "CancelParentAfterChild",
          "source": "src/Simulation-Aivika-Internal-Cont.html#ContCancellation",
          "type": "function"
        },
        "index": {
          "description": "Cancel the parent if its child is cancelled",
          "hierarchy": "Simulation Aivika Cont",
          "module": "Simulation.Aivika.Cont",
          "name": "CancelParentAfterChild",
          "package": "aivika",
          "partial": "Cancel Parent After Child",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Cont.html#v:CancelParentAfterChild"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCancel the both computations together.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Cont",
          "name": "CancelTogether",
          "package": "aivika",
          "signature": "CancelTogether",
          "source": "src/Simulation-Aivika-Internal-Cont.html#ContCancellation",
          "type": "function"
        },
        "index": {
          "description": "Cancel the both computations together",
          "hierarchy": "Simulation Aivika Cont",
          "module": "Simulation.Aivika.Cont",
          "name": "CancelTogether",
          "package": "aivika",
          "partial": "Cancel Together",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Cont.html#v:CancelTogether"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTested with: GHC 7.6.3\n\u003c/p\u003e\u003cp\u003eAn imperative double-linked list.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Simulation.Aivika.DoubleLinkedList",
          "name": "DoubleLinkedList",
          "package": "aivika",
          "source": "src/Simulation-Aivika-DoubleLinkedList.html",
          "type": "module"
        },
        "index": {
          "description": "Tested with GHC An imperative double-linked list",
          "hierarchy": "Simulation Aivika DoubleLinkedList",
          "module": "Simulation.Aivika.DoubleLinkedList",
          "name": "DoubleLinkedList",
          "package": "aivika",
          "partial": "Double Linked List",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-DoubleLinkedList.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eDoubleLinkedList\u003c/a\u003e\u003c/code\u003e type represents an imperative double-linked list.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.DoubleLinkedList",
          "name": "DoubleLinkedList",
          "package": "aivika",
          "source": "src/Simulation-Aivika-DoubleLinkedList.html#DoubleLinkedList",
          "type": "data"
        },
        "index": {
          "description": "The DoubleLinkedList type represents an imperative double-linked list",
          "hierarchy": "Simulation Aivika DoubleLinkedList",
          "module": "Simulation.Aivika.DoubleLinkedList",
          "name": "DoubleLinkedList",
          "package": "aivika",
          "partial": "Double Linked List",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-DoubleLinkedList.html#t:DoubleLinkedList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd a new element to the end.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.DoubleLinkedList",
          "name": "listAddLast",
          "package": "aivika",
          "signature": "DoubleLinkedList a -\u003e a -\u003e IO ()",
          "source": "src/Simulation-Aivika-DoubleLinkedList.html#listAddLast",
          "type": "function"
        },
        "index": {
          "description": "Add new element to the end",
          "hierarchy": "Simulation Aivika DoubleLinkedList",
          "module": "Simulation.Aivika.DoubleLinkedList",
          "name": "listAddLast",
          "normalized": "DoubleLinkedList a-\u003ea-\u003eIO()",
          "package": "aivika",
          "partial": "Add Last",
          "signature": "DoubleLinkedList a-\u003ea-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-DoubleLinkedList.html#v:listAddLast"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the number of elements in the list.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.DoubleLinkedList",
          "name": "listCount",
          "package": "aivika",
          "signature": "DoubleLinkedList a -\u003e IO Int",
          "source": "src/Simulation-Aivika-DoubleLinkedList.html#listCount",
          "type": "function"
        },
        "index": {
          "description": "Return the number of elements in the list",
          "hierarchy": "Simulation Aivika DoubleLinkedList",
          "module": "Simulation.Aivika.DoubleLinkedList",
          "name": "listCount",
          "normalized": "DoubleLinkedList a-\u003eIO Int",
          "package": "aivika",
          "partial": "Count",
          "signature": "DoubleLinkedList a-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-DoubleLinkedList.html#v:listCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the first element.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.DoubleLinkedList",
          "name": "listFirst",
          "package": "aivika",
          "signature": "DoubleLinkedList a -\u003e IO a",
          "source": "src/Simulation-Aivika-DoubleLinkedList.html#listFirst",
          "type": "function"
        },
        "index": {
          "description": "Return the first element",
          "hierarchy": "Simulation Aivika DoubleLinkedList",
          "module": "Simulation.Aivika.DoubleLinkedList",
          "name": "listFirst",
          "normalized": "DoubleLinkedList a-\u003eIO a",
          "package": "aivika",
          "partial": "First",
          "signature": "DoubleLinkedList a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-DoubleLinkedList.html#v:listFirst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInsert a new element in the beginning.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.DoubleLinkedList",
          "name": "listInsertFirst",
          "package": "aivika",
          "signature": "DoubleLinkedList a -\u003e a -\u003e IO ()",
          "source": "src/Simulation-Aivika-DoubleLinkedList.html#listInsertFirst",
          "type": "function"
        },
        "index": {
          "description": "Insert new element in the beginning",
          "hierarchy": "Simulation Aivika DoubleLinkedList",
          "module": "Simulation.Aivika.DoubleLinkedList",
          "name": "listInsertFirst",
          "normalized": "DoubleLinkedList a-\u003ea-\u003eIO()",
          "package": "aivika",
          "partial": "Insert First",
          "signature": "DoubleLinkedList a-\u003ea-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-DoubleLinkedList.html#v:listInsertFirst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the last element.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.DoubleLinkedList",
          "name": "listLast",
          "package": "aivika",
          "signature": "DoubleLinkedList a -\u003e IO a",
          "source": "src/Simulation-Aivika-DoubleLinkedList.html#listLast",
          "type": "function"
        },
        "index": {
          "description": "Return the last element",
          "hierarchy": "Simulation Aivika DoubleLinkedList",
          "module": "Simulation.Aivika.DoubleLinkedList",
          "name": "listLast",
          "normalized": "DoubleLinkedList a-\u003eIO a",
          "package": "aivika",
          "partial": "Last",
          "signature": "DoubleLinkedList a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-DoubleLinkedList.html#v:listLast"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest whether the list is empty.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.DoubleLinkedList",
          "name": "listNull",
          "package": "aivika",
          "signature": "DoubleLinkedList a -\u003e IO Bool",
          "source": "src/Simulation-Aivika-DoubleLinkedList.html#listNull",
          "type": "function"
        },
        "index": {
          "description": "Test whether the list is empty",
          "hierarchy": "Simulation Aivika DoubleLinkedList",
          "module": "Simulation.Aivika.DoubleLinkedList",
          "name": "listNull",
          "normalized": "DoubleLinkedList a-\u003eIO Bool",
          "package": "aivika",
          "partial": "Null",
          "signature": "DoubleLinkedList a-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-DoubleLinkedList.html#v:listNull"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove the first element.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.DoubleLinkedList",
          "name": "listRemoveFirst",
          "package": "aivika",
          "signature": "DoubleLinkedList a -\u003e IO ()",
          "source": "src/Simulation-Aivika-DoubleLinkedList.html#listRemoveFirst",
          "type": "function"
        },
        "index": {
          "description": "Remove the first element",
          "hierarchy": "Simulation Aivika DoubleLinkedList",
          "module": "Simulation.Aivika.DoubleLinkedList",
          "name": "listRemoveFirst",
          "normalized": "DoubleLinkedList a-\u003eIO()",
          "package": "aivika",
          "partial": "Remove First",
          "signature": "DoubleLinkedList a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-DoubleLinkedList.html#v:listRemoveFirst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove the last element.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.DoubleLinkedList",
          "name": "listRemoveLast",
          "package": "aivika",
          "signature": "DoubleLinkedList a -\u003e IO ()",
          "source": "src/Simulation-Aivika-DoubleLinkedList.html#listRemoveLast",
          "type": "function"
        },
        "index": {
          "description": "Remove the last element",
          "hierarchy": "Simulation Aivika DoubleLinkedList",
          "module": "Simulation.Aivika.DoubleLinkedList",
          "name": "listRemoveLast",
          "normalized": "DoubleLinkedList a-\u003eIO()",
          "package": "aivika",
          "partial": "Remove Last",
          "signature": "DoubleLinkedList a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-DoubleLinkedList.html#v:listRemoveLast"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new list.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.DoubleLinkedList",
          "name": "newList",
          "package": "aivika",
          "signature": "IO (DoubleLinkedList a)",
          "source": "src/Simulation-Aivika-DoubleLinkedList.html#newList",
          "type": "function"
        },
        "index": {
          "description": "Create new list",
          "hierarchy": "Simulation Aivika DoubleLinkedList",
          "module": "Simulation.Aivika.DoubleLinkedList",
          "name": "newList",
          "package": "aivika",
          "partial": "List",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-DoubleLinkedList.html#v:newList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTested with: GHC 7.6.3\n\u003c/p\u003e\u003cp\u003eThis module defines the fold functions that allows traversing the values of\n any \u003ccode\u003e\u003ca\u003eDynamics\u003c/a\u003e\u003c/code\u003e computation in the integration time points.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Simulation.Aivika.Dynamics.Fold",
          "name": "Fold",
          "package": "aivika",
          "source": "src/Simulation-Aivika-Dynamics-Fold.html",
          "type": "module"
        },
        "index": {
          "description": "Tested with GHC This module defines the fold functions that allows traversing the values of any Dynamics computation in the integration time points",
          "hierarchy": "Simulation Aivika Dynamics Fold",
          "module": "Simulation.Aivika.Dynamics.Fold",
          "name": "Fold",
          "package": "aivika",
          "partial": "Fold",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Dynamics-Fold.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike the standard \u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e function but applied to values in \n the integration time points. The accumulator values are transformed\n according to the first argument, which should be either function\n \u003ccode\u003e\u003ca\u003ememo0Dynamics\u003c/a\u003e\u003c/code\u003e or its unboxed version.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Dynamics.Fold",
          "name": "foldDynamics",
          "package": "aivika",
          "signature": "(Dynamics a -\u003e Simulation (Dynamics a)) -\u003e (a -\u003e b -\u003e a) -\u003e a -\u003e Dynamics b -\u003e Simulation (Dynamics a)",
          "source": "src/Simulation-Aivika-Dynamics-Fold.html#foldDynamics",
          "type": "function"
        },
        "index": {
          "description": "Like the standard foldl function but applied to values in the integration time points The accumulator values are transformed according to the first argument which should be either function memo0Dynamics or its unboxed version",
          "hierarchy": "Simulation Aivika Dynamics Fold",
          "module": "Simulation.Aivika.Dynamics.Fold",
          "name": "foldDynamics",
          "normalized": "(Dynamics a-\u003eSimulation(Dynamics a))-\u003e(a-\u003eb-\u003ea)-\u003ea-\u003eDynamics b-\u003eSimulation(Dynamics a)",
          "package": "aivika",
          "partial": "Dynamics",
          "signature": "(Dynamics a-\u003eSimulation(Dynamics a))-\u003e(a-\u003eb-\u003ea)-\u003ea-\u003eDynamics b-\u003eSimulation(Dynamics a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Dynamics-Fold.html#v:foldDynamics"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike the standard \u003ccode\u003e\u003ca\u003efoldl1\u003c/a\u003e\u003c/code\u003e function but applied to values in \n the integration time points. The accumulator values are transformed\n according to the first argument, which should be either function \n \u003ccode\u003e\u003ca\u003ememo0Dynamics\u003c/a\u003e\u003c/code\u003e or its unboxed version.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Dynamics.Fold",
          "name": "foldDynamics1",
          "package": "aivika",
          "signature": "(Dynamics a -\u003e Simulation (Dynamics a)) -\u003e (a -\u003e a -\u003e a) -\u003e Dynamics a -\u003e Simulation (Dynamics a)",
          "source": "src/Simulation-Aivika-Dynamics-Fold.html#foldDynamics1",
          "type": "function"
        },
        "index": {
          "description": "Like the standard foldl1 function but applied to values in the integration time points The accumulator values are transformed according to the first argument which should be either function memo0Dynamics or its unboxed version",
          "hierarchy": "Simulation Aivika Dynamics Fold",
          "module": "Simulation.Aivika.Dynamics.Fold",
          "name": "foldDynamics1",
          "normalized": "(Dynamics a-\u003eSimulation(Dynamics a))-\u003e(a-\u003ea-\u003ea)-\u003eDynamics a-\u003eSimulation(Dynamics a)",
          "package": "aivika",
          "partial": "Dynamics",
          "signature": "(Dynamics a-\u003eSimulation(Dynamics a))-\u003e(a-\u003ea-\u003ea)-\u003eDynamics a-\u003eSimulation(Dynamics a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Dynamics-Fold.html#v:foldDynamics1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTested with: GHC 7.6.3\n\u003c/p\u003e\u003cp\u003eThis module defines interpolation functions.\n These functions complement the memoization.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Simulation.Aivika.Dynamics.Interpolate",
          "name": "Interpolate",
          "package": "aivika",
          "source": "src/Simulation-Aivika-Dynamics-Interpolate.html",
          "type": "module"
        },
        "index": {
          "description": "Tested with GHC This module defines interpolation functions These functions complement the memoization",
          "hierarchy": "Simulation Aivika Dynamics Interpolate",
          "module": "Simulation.Aivika.Dynamics.Interpolate",
          "name": "Interpolate",
          "package": "aivika",
          "partial": "Interpolate",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Dynamics-Interpolate.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDiscretize the computation in the integration time points.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Dynamics.Interpolate",
          "name": "discreteDynamics",
          "package": "aivika",
          "signature": "Dynamics a -\u003e Dynamics a",
          "source": "src/Simulation-Aivika-Dynamics-Interpolate.html#discreteDynamics",
          "type": "function"
        },
        "index": {
          "description": "Discretize the computation in the integration time points",
          "hierarchy": "Simulation Aivika Dynamics Interpolate",
          "module": "Simulation.Aivika.Dynamics.Interpolate",
          "name": "discreteDynamics",
          "normalized": "Dynamics a-\u003eDynamics a",
          "package": "aivika",
          "partial": "Dynamics",
          "signature": "Dynamics a-\u003eDynamics a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Dynamics-Interpolate.html#v:discreteDynamics"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInterpolate the computation based on the integration time points only.\n Unlike the \u003ccode\u003e\u003ca\u003ediscreteDynamics\u003c/a\u003e\u003c/code\u003e function it knows about the intermediate \n time points that are used in the Runge-Kutta method.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Dynamics.Interpolate",
          "name": "interpolateDynamics",
          "package": "aivika",
          "signature": "Dynamics a -\u003e Dynamics a",
          "source": "src/Simulation-Aivika-Dynamics-Interpolate.html#interpolateDynamics",
          "type": "function"
        },
        "index": {
          "description": "Interpolate the computation based on the integration time points only Unlike the discreteDynamics function it knows about the intermediate time points that are used in the Runge-Kutta method",
          "hierarchy": "Simulation Aivika Dynamics Interpolate",
          "module": "Simulation.Aivika.Dynamics.Interpolate",
          "name": "interpolateDynamics",
          "normalized": "Dynamics a-\u003eDynamics a",
          "package": "aivika",
          "partial": "Dynamics",
          "signature": "Dynamics a-\u003eDynamics a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Dynamics-Interpolate.html#v:interpolateDynamics"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTested with: GHC 7.6.3\n\u003c/p\u003e\u003cp\u003eThis module defines the unboxed memo functions. The memoization creates such \u003ccode\u003e\u003ca\u003eDynamics\u003c/a\u003e\u003c/code\u003e\n computations, which values are cached in the integration time points. Then\n these values are interpolated in all other time points.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Simulation.Aivika.Dynamics.Memo.Unboxed",
          "name": "Unboxed",
          "package": "aivika",
          "source": "src/Simulation-Aivika-Dynamics-Memo-Unboxed.html",
          "type": "module"
        },
        "index": {
          "description": "Tested with GHC This module defines the unboxed memo functions The memoization creates such Dynamics computations which values are cached in the integration time points Then these values are interpolated in all other time points",
          "hierarchy": "Simulation Aivika Dynamics Memo Unboxed",
          "module": "Simulation.Aivika.Dynamics.Memo.Unboxed",
          "name": "Unboxed",
          "package": "aivika",
          "partial": "Unboxed",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Dynamics-Memo-Unboxed.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMemoize and order the computation in the integration time points using \n the \u003ccode\u003e\u003ca\u003ediscreteDynamics\u003c/a\u003e\u003c/code\u003e interpolation. It consumes less memory than the \u003ccode\u003e\u003ca\u003ememoDynamics\u003c/a\u003e\u003c/code\u003e\n function but it is not aware of the Runge-Kutta method. There is a subtle\n difference when we request for values in the intermediate time points\n that are used by this method to integrate. In general case you should \n prefer the \u003ccode\u003e\u003ca\u003ememo0Dynamics\u003c/a\u003e\u003c/code\u003e function above \u003ccode\u003e\u003ca\u003ememoDynamics\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Dynamics.Memo.Unboxed",
          "name": "memo0Dynamics",
          "package": "aivika",
          "signature": "Dynamics e -\u003e Simulation (Dynamics e)",
          "source": "src/Simulation-Aivika-Dynamics-Memo-Unboxed.html#memo0Dynamics",
          "type": "function"
        },
        "index": {
          "description": "Memoize and order the computation in the integration time points using the discreteDynamics interpolation It consumes less memory than the memoDynamics function but it is not aware of the Runge-Kutta method There is subtle difference when we request for values in the intermediate time points that are used by this method to integrate In general case you should prefer the memo0Dynamics function above memoDynamics",
          "hierarchy": "Simulation Aivika Dynamics Memo Unboxed",
          "module": "Simulation.Aivika.Dynamics.Memo.Unboxed",
          "name": "memo0Dynamics",
          "normalized": "Dynamics a-\u003eSimulation(Dynamics a)",
          "package": "aivika",
          "partial": "Dynamics",
          "signature": "Dynamics e-\u003eSimulation(Dynamics e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Dynamics-Memo-Unboxed.html#v:memo0Dynamics"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMemoize and order the computation in the integration time points using \n the interpolation that knows of the Runge-Kutta method. The values are\n calculated sequentially starting from \u003ccode\u003e\u003ca\u003estarttime\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Dynamics.Memo.Unboxed",
          "name": "memoDynamics",
          "package": "aivika",
          "signature": "Dynamics e -\u003e Simulation (Dynamics e)",
          "source": "src/Simulation-Aivika-Dynamics-Memo-Unboxed.html#memoDynamics",
          "type": "function"
        },
        "index": {
          "description": "Memoize and order the computation in the integration time points using the interpolation that knows of the Runge-Kutta method The values are calculated sequentially starting from starttime",
          "hierarchy": "Simulation Aivika Dynamics Memo Unboxed",
          "module": "Simulation.Aivika.Dynamics.Memo.Unboxed",
          "name": "memoDynamics",
          "normalized": "Dynamics a-\u003eSimulation(Dynamics a)",
          "package": "aivika",
          "partial": "Dynamics",
          "signature": "Dynamics e-\u003eSimulation(Dynamics e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Dynamics-Memo-Unboxed.html#v:memoDynamics"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTested with: GHC 7.6.3\n\u003c/p\u003e\u003cp\u003eThis module defines memo functions. The memoization creates such \u003ccode\u003e\u003ca\u003eDynamics\u003c/a\u003e\u003c/code\u003e\n computations, which values are cached in the integration time points. Then\n these values are interpolated in all other time points.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Simulation.Aivika.Dynamics.Memo",
          "name": "Memo",
          "package": "aivika",
          "source": "src/Simulation-Aivika-Dynamics-Memo.html",
          "type": "module"
        },
        "index": {
          "description": "Tested with GHC This module defines memo functions The memoization creates such Dynamics computations which values are cached in the integration time points Then these values are interpolated in all other time points",
          "hierarchy": "Simulation Aivika Dynamics Memo",
          "module": "Simulation.Aivika.Dynamics.Memo",
          "name": "Memo",
          "package": "aivika",
          "partial": "Memo",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Dynamics-Memo.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIterate sequentially the dynamic process with side effects in \n the integration time points. It is equivalent to a call of the\n \u003ccode\u003e\u003ca\u003ememo0Dynamics\u003c/a\u003e\u003c/code\u003e function but significantly more efficient, for the array \n is not created.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Dynamics.Memo",
          "name": "iterateDynamics",
          "package": "aivika",
          "signature": "Dynamics () -\u003e Simulation (Dynamics ())",
          "source": "src/Simulation-Aivika-Dynamics-Memo.html#iterateDynamics",
          "type": "function"
        },
        "index": {
          "description": "Iterate sequentially the dynamic process with side effects in the integration time points It is equivalent to call of the memo0Dynamics function but significantly more efficient for the array is not created",
          "hierarchy": "Simulation Aivika Dynamics Memo",
          "module": "Simulation.Aivika.Dynamics.Memo",
          "name": "iterateDynamics",
          "normalized": "Dynamics()-\u003eSimulation(Dynamics())",
          "package": "aivika",
          "partial": "Dynamics",
          "signature": "Dynamics()-\u003eSimulation(Dynamics())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Dynamics-Memo.html#v:iterateDynamics"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMemoize and order the computation in the integration time points using \n the \u003ccode\u003e\u003ca\u003ediscreteDynamics\u003c/a\u003e\u003c/code\u003e interpolation. It consumes less memory than the \u003ccode\u003e\u003ca\u003ememoDynamics\u003c/a\u003e\u003c/code\u003e\n function but it is not aware of the Runge-Kutta method. There is a subtle\n difference when we request for values in the intermediate time points\n that are used by this method to integrate. In general case you should \n prefer the \u003ccode\u003e\u003ca\u003ememo0Dynamics\u003c/a\u003e\u003c/code\u003e function above \u003ccode\u003e\u003ca\u003ememoDynamics\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Dynamics.Memo",
          "name": "memo0Dynamics",
          "package": "aivika",
          "signature": "Dynamics e -\u003e Simulation (Dynamics e)",
          "source": "src/Simulation-Aivika-Dynamics-Memo.html#memo0Dynamics",
          "type": "function"
        },
        "index": {
          "description": "Memoize and order the computation in the integration time points using the discreteDynamics interpolation It consumes less memory than the memoDynamics function but it is not aware of the Runge-Kutta method There is subtle difference when we request for values in the intermediate time points that are used by this method to integrate In general case you should prefer the memo0Dynamics function above memoDynamics",
          "hierarchy": "Simulation Aivika Dynamics Memo",
          "module": "Simulation.Aivika.Dynamics.Memo",
          "name": "memo0Dynamics",
          "normalized": "Dynamics a-\u003eSimulation(Dynamics a)",
          "package": "aivika",
          "partial": "Dynamics",
          "signature": "Dynamics e-\u003eSimulation(Dynamics e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Dynamics-Memo.html#v:memo0Dynamics"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMemoize and order the computation in the integration time points using \n the interpolation that knows of the Runge-Kutta method. The values are\n calculated sequentially starting from \u003ccode\u003e\u003ca\u003estarttime\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Dynamics.Memo",
          "name": "memoDynamics",
          "package": "aivika",
          "signature": "Dynamics e -\u003e Simulation (Dynamics e)",
          "source": "src/Simulation-Aivika-Dynamics-Memo.html#memoDynamics",
          "type": "function"
        },
        "index": {
          "description": "Memoize and order the computation in the integration time points using the interpolation that knows of the Runge-Kutta method The values are calculated sequentially starting from starttime",
          "hierarchy": "Simulation Aivika Dynamics Memo",
          "module": "Simulation.Aivika.Dynamics.Memo",
          "name": "memoDynamics",
          "normalized": "Dynamics a-\u003eSimulation(Dynamics a)",
          "package": "aivika",
          "partial": "Dynamics",
          "signature": "Dynamics e-\u003eSimulation(Dynamics e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Dynamics-Memo.html#v:memoDynamics"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTested with: GHC 7.6.3\n\u003c/p\u003e\u003cp\u003eThis module defines the random functions that always return the same values\n in the integration time points within a single simulation run. The values\n for another simulation run will be regenerated anew.\n\u003c/p\u003e\u003cp\u003eFor example, the computations returned by these functions can be used in\n the equations of System Dynamics.\n\u003c/p\u003e\u003cp\u003eAlso it is worth noting that the values are generated in a strong order starting\n from \u003ccode\u003e\u003ca\u003estarttime\u003c/a\u003e\u003c/code\u003e with step \u003ccode\u003e\u003ca\u003edt\u003c/a\u003e\u003c/code\u003e. This is how the \u003ccode\u003e\u003ca\u003ememo0Dynamics\u003c/a\u003e\u003c/code\u003e function\n actually works.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Simulation.Aivika.Dynamics.Random",
          "name": "Random",
          "package": "aivika",
          "source": "src/Simulation-Aivika-Dynamics-Random.html",
          "type": "module"
        },
        "index": {
          "description": "Tested with GHC This module defines the random functions that always return the same values in the integration time points within single simulation run The values for another simulation run will be regenerated anew For example the computations returned by these functions can be used in the equations of System Dynamics Also it is worth noting that the values are generated in strong order starting from starttime with step dt This is how the memo0Dynamics function actually works",
          "hierarchy": "Simulation Aivika Dynamics Random",
          "module": "Simulation.Aivika.Dynamics.Random",
          "name": "Random",
          "package": "aivika",
          "partial": "Random",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Dynamics-Random.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputation that generates binomial random numbers with the specified\n probability and trials but memoizes them in the integration time points.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Dynamics.Random",
          "name": "memoRandomBinomialDynamics",
          "package": "aivika",
          "signature": "Dynamics Double-\u003e Dynamics Int-\u003e Simulation (Dynamics Int)",
          "type": "function"
        },
        "index": {
          "description": "Computation that generates binomial random numbers with the specified probability and trials but memoizes them in the integration time points",
          "hierarchy": "Simulation Aivika Dynamics Random",
          "module": "Simulation.Aivika.Dynamics.Random",
          "name": "memoRandomBinomialDynamics",
          "normalized": "Dynamics Double-\u003eDynamics Int-\u003eSimulation(Dynamics Int)",
          "package": "aivika",
          "partial": "Random Binomial Dynamics",
          "signature": "Dynamics Double-\u003eDynamics Int-\u003eSimulation(Dynamics Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Dynamics-Random.html#v:memoRandomBinomialDynamics"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputation that generates the Erlang random numbers with the specified scale\n (the reciprocal of the rate) and integer shape but memoizes them in the integration\n time points.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Dynamics.Random",
          "name": "memoRandomErlangDynamics",
          "package": "aivika",
          "signature": "Dynamics Double-\u003e Dynamics Int-\u003e Simulation (Dynamics Double)",
          "type": "function"
        },
        "index": {
          "description": "Computation that generates the Erlang random numbers with the specified scale the reciprocal of the rate and integer shape but memoizes them in the integration time points",
          "hierarchy": "Simulation Aivika Dynamics Random",
          "module": "Simulation.Aivika.Dynamics.Random",
          "name": "memoRandomErlangDynamics",
          "normalized": "Dynamics Double-\u003eDynamics Int-\u003eSimulation(Dynamics Double)",
          "package": "aivika",
          "partial": "Random Erlang Dynamics",
          "signature": "Dynamics Double-\u003eDynamics Int-\u003eSimulation(Dynamics Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Dynamics-Random.html#v:memoRandomErlangDynamics"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputation that generates exponential random numbers with the specified mean\n (the reciprocal of the rate) and memoizes them in the integration time points.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Dynamics.Random",
          "name": "memoRandomExponentialDynamics",
          "package": "aivika",
          "signature": "Dynamics Double-\u003e Simulation (Dynamics Double)",
          "type": "function"
        },
        "index": {
          "description": "Computation that generates exponential random numbers with the specified mean the reciprocal of the rate and memoizes them in the integration time points",
          "hierarchy": "Simulation Aivika Dynamics Random",
          "module": "Simulation.Aivika.Dynamics.Random",
          "name": "memoRandomExponentialDynamics",
          "normalized": "Dynamics Double-\u003eSimulation(Dynamics Double)",
          "package": "aivika",
          "partial": "Random Exponential Dynamics",
          "signature": "Dynamics Double-\u003eSimulation(Dynamics Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Dynamics-Random.html#v:memoRandomExponentialDynamics"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputation that generates random numbers distributed normally and\n memoizes them in the integration time points.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Dynamics.Random",
          "name": "memoRandomNormalDynamics",
          "package": "aivika",
          "signature": "Dynamics Double-\u003e Dynamics Double-\u003e Simulation (Dynamics Double)",
          "type": "function"
        },
        "index": {
          "description": "Computation that generates random numbers distributed normally and memoizes them in the integration time points",
          "hierarchy": "Simulation Aivika Dynamics Random",
          "module": "Simulation.Aivika.Dynamics.Random",
          "name": "memoRandomNormalDynamics",
          "normalized": "Dynamics Double-\u003eDynamics Double-\u003eSimulation(Dynamics Double)",
          "package": "aivika",
          "partial": "Random Normal Dynamics",
          "signature": "Dynamics Double-\u003eDynamics Double-\u003eSimulation(Dynamics Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Dynamics-Random.html#v:memoRandomNormalDynamics"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputation that generats the Poisson random numbers with the specified mean\n and memoizes them in the integration time points.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Dynamics.Random",
          "name": "memoRandomPoissonDynamics",
          "package": "aivika",
          "signature": "Dynamics Double-\u003e Simulation (Dynamics Int)",
          "type": "function"
        },
        "index": {
          "description": "Computation that generats the Poisson random numbers with the specified mean and memoizes them in the integration time points",
          "hierarchy": "Simulation Aivika Dynamics Random",
          "module": "Simulation.Aivika.Dynamics.Random",
          "name": "memoRandomPoissonDynamics",
          "normalized": "Dynamics Double-\u003eSimulation(Dynamics Int)",
          "package": "aivika",
          "partial": "Random Poisson Dynamics",
          "signature": "Dynamics Double-\u003eSimulation(Dynamics Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Dynamics-Random.html#v:memoRandomPoissonDynamics"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputation that generates random numbers distributed uniformly and\n memoizes them in the integration time points.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Dynamics.Random",
          "name": "memoRandomUniformDynamics",
          "package": "aivika",
          "signature": "Dynamics Double-\u003e Dynamics Double-\u003e Simulation (Dynamics Double)",
          "type": "function"
        },
        "index": {
          "description": "Computation that generates random numbers distributed uniformly and memoizes them in the integration time points",
          "hierarchy": "Simulation Aivika Dynamics Random",
          "module": "Simulation.Aivika.Dynamics.Random",
          "name": "memoRandomUniformDynamics",
          "normalized": "Dynamics Double-\u003eDynamics Double-\u003eSimulation(Dynamics Double)",
          "package": "aivika",
          "partial": "Random Uniform Dynamics",
          "signature": "Dynamics Double-\u003eDynamics Double-\u003eSimulation(Dynamics Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Dynamics-Random.html#v:memoRandomUniformDynamics"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTested with: GHC 7.6.3\n\u003c/p\u003e\u003cp\u003eThe module defines the \u003ccode\u003e\u003ca\u003eDynamics\u003c/a\u003e\u003c/code\u003e monad representing a time varying polymorphic function. \n\u003c/p\u003e\u003c/div\u003e",
          "module": "Simulation.Aivika.Dynamics",
          "name": "Dynamics",
          "package": "aivika",
          "source": "src/Simulation-Aivika-Dynamics.html",
          "type": "module"
        },
        "index": {
          "description": "Tested with GHC The module defines the Dynamics monad representing time varying polymorphic function",
          "hierarchy": "Simulation Aivika Dynamics",
          "module": "Simulation.Aivika.Dynamics",
          "name": "Dynamics",
          "package": "aivika",
          "partial": "Dynamics",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Dynamics.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA value in the \u003ccode\u003e\u003ca\u003eDynamics\u003c/a\u003e\u003c/code\u003e monad represents a polymorphic time varying function.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Dynamics",
          "name": "Dynamics",
          "package": "aivika",
          "source": "src/Simulation-Aivika-Internal-Dynamics.html#Dynamics",
          "type": "data"
        },
        "index": {
          "description": "value in the Dynamics monad represents polymorphic time varying function",
          "hierarchy": "Simulation Aivika Dynamics",
          "module": "Simulation.Aivika.Dynamics",
          "name": "Dynamics",
          "package": "aivika",
          "partial": "Dynamics",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Dynamics.html#t:Dynamics"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type class to lift the \u003ccode\u003e\u003ca\u003eDynamics\u003c/a\u003e\u003c/code\u003e computations to other computations.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Dynamics",
          "name": "DynamicsLift",
          "package": "aivika",
          "source": "src/Simulation-Aivika-Internal-Dynamics.html#DynamicsLift",
          "type": "class"
        },
        "index": {
          "description": "type class to lift the Dynamics computations to other computations",
          "hierarchy": "Simulation Aivika Dynamics",
          "module": "Simulation.Aivika.Dynamics",
          "name": "DynamicsLift",
          "package": "aivika",
          "partial": "Dynamics Lift",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Dynamics.html#t:DynamicsLift"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eException handling within \u003ccode\u003e\u003ca\u003eDynamics\u003c/a\u003e\u003c/code\u003e computations.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Dynamics",
          "name": "catchDynamics",
          "package": "aivika",
          "signature": "Dynamics a -\u003e (IOException -\u003e Dynamics a) -\u003e Dynamics a",
          "source": "src/Simulation-Aivika-Internal-Dynamics.html#catchDynamics",
          "type": "function"
        },
        "index": {
          "description": "Exception handling within Dynamics computations",
          "hierarchy": "Simulation Aivika Dynamics",
          "module": "Simulation.Aivika.Dynamics",
          "name": "catchDynamics",
          "normalized": "Dynamics a-\u003e(IOException-\u003eDynamics a)-\u003eDynamics a",
          "package": "aivika",
          "partial": "Dynamics",
          "signature": "Dynamics a-\u003e(IOException-\u003eDynamics a)-\u003eDynamics a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Dynamics.html#v:catchDynamics"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA computation with finalization part like the \u003ccode\u003e\u003ca\u003efinally\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Dynamics",
          "name": "finallyDynamics",
          "package": "aivika",
          "signature": "Dynamics a -\u003e Dynamics b -\u003e Dynamics a",
          "source": "src/Simulation-Aivika-Internal-Dynamics.html#finallyDynamics",
          "type": "function"
        },
        "index": {
          "description": "computation with finalization part like the finally function",
          "hierarchy": "Simulation Aivika Dynamics",
          "module": "Simulation.Aivika.Dynamics",
          "name": "finallyDynamics",
          "normalized": "Dynamics a-\u003eDynamics b-\u003eDynamics a",
          "package": "aivika",
          "partial": "Dynamics",
          "signature": "Dynamics a-\u003eDynamics b-\u003eDynamics a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Dynamics.html#v:finallyDynamics"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the integration iteration closest to the current simulation time.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Dynamics",
          "name": "integIteration",
          "package": "aivika",
          "signature": "Dynamics Int",
          "source": "src/Simulation-Aivika-Internal-Dynamics.html#integIteration",
          "type": "function"
        },
        "index": {
          "description": "Return the integration iteration closest to the current simulation time",
          "hierarchy": "Simulation Aivika Dynamics",
          "module": "Simulation.Aivika.Dynamics",
          "name": "integIteration",
          "package": "aivika",
          "partial": "Iteration",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Dynamics.html#v:integIteration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the integration phase for the current simulation time.\n It is \u003ccode\u003e(-1)\u003c/code\u003e for non-integration time points.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Dynamics",
          "name": "integPhase",
          "package": "aivika",
          "signature": "Dynamics Int",
          "source": "src/Simulation-Aivika-Internal-Dynamics.html#integPhase",
          "type": "function"
        },
        "index": {
          "description": "Return the integration phase for the current simulation time It is for non-integration time points",
          "hierarchy": "Simulation Aivika Dynamics",
          "module": "Simulation.Aivika.Dynamics",
          "name": "integPhase",
          "package": "aivika",
          "partial": "Phase",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Dynamics.html#v:integPhase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhether the current time is an integration time.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Dynamics",
          "name": "isTimeInteg",
          "package": "aivika",
          "signature": "Dynamics Bool",
          "source": "src/Simulation-Aivika-Internal-Dynamics.html#isTimeInteg",
          "type": "function"
        },
        "index": {
          "description": "Whether the current time is an integration time",
          "hierarchy": "Simulation Aivika Dynamics",
          "module": "Simulation.Aivika.Dynamics",
          "name": "isTimeInteg",
          "package": "aivika",
          "partial": "Time Integ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Dynamics.html#v:isTimeInteg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift the specified \u003ccode\u003e\u003ca\u003eDynamics\u003c/a\u003e\u003c/code\u003e computation to another computation.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Dynamics",
          "name": "liftDynamics",
          "package": "aivika",
          "signature": "Dynamics a -\u003e m a",
          "source": "src/Simulation-Aivika-Internal-Dynamics.html#liftDynamics",
          "type": "method"
        },
        "index": {
          "description": "Lift the specified Dynamics computation to another computation",
          "hierarchy": "Simulation Aivika Dynamics",
          "module": "Simulation.Aivika.Dynamics",
          "name": "liftDynamics",
          "normalized": "Dynamics a-\u003eb a",
          "package": "aivika",
          "partial": "Dynamics",
          "signature": "Dynamics a-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Dynamics.html#v:liftDynamics"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun the \u003ccode\u003e\u003ca\u003eDynamics\u003c/a\u003e\u003c/code\u003e computation in all integration time points.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Dynamics",
          "name": "runDynamicsInIntegTimes",
          "package": "aivika",
          "signature": "Dynamics a -\u003e Simulation [IO a]",
          "source": "src/Simulation-Aivika-Internal-Dynamics.html#runDynamicsInIntegTimes",
          "type": "function"
        },
        "index": {
          "description": "Run the Dynamics computation in all integration time points",
          "hierarchy": "Simulation Aivika Dynamics",
          "module": "Simulation.Aivika.Dynamics",
          "name": "runDynamicsInIntegTimes",
          "normalized": "Dynamics a-\u003eSimulation[IO a]",
          "package": "aivika",
          "partial": "Dynamics In Integ Times",
          "signature": "Dynamics a-\u003eSimulation[IO a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Dynamics.html#v:runDynamicsInIntegTimes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun the \u003ccode\u003e\u003ca\u003eDynamics\u003c/a\u003e\u003c/code\u003e computation in the initial time point.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Dynamics",
          "name": "runDynamicsInStartTime",
          "package": "aivika",
          "signature": "Dynamics a -\u003e Simulation a",
          "source": "src/Simulation-Aivika-Internal-Dynamics.html#runDynamicsInStartTime",
          "type": "function"
        },
        "index": {
          "description": "Run the Dynamics computation in the initial time point",
          "hierarchy": "Simulation Aivika Dynamics",
          "module": "Simulation.Aivika.Dynamics",
          "name": "runDynamicsInStartTime",
          "normalized": "Dynamics a-\u003eSimulation a",
          "package": "aivika",
          "partial": "Dynamics In Start Time",
          "signature": "Dynamics a-\u003eSimulation a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Dynamics.html#v:runDynamicsInStartTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun the \u003ccode\u003e\u003ca\u003eDynamics\u003c/a\u003e\u003c/code\u003e computation in the final time point.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Dynamics",
          "name": "runDynamicsInStopTime",
          "package": "aivika",
          "signature": "Dynamics a -\u003e Simulation a",
          "source": "src/Simulation-Aivika-Internal-Dynamics.html#runDynamicsInStopTime",
          "type": "function"
        },
        "index": {
          "description": "Run the Dynamics computation in the final time point",
          "hierarchy": "Simulation Aivika Dynamics",
          "module": "Simulation.Aivika.Dynamics",
          "name": "runDynamicsInStopTime",
          "normalized": "Dynamics a-\u003eSimulation a",
          "package": "aivika",
          "partial": "Dynamics In Stop Time",
          "signature": "Dynamics a-\u003eSimulation a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Dynamics.html#v:runDynamicsInStopTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun the \u003ccode\u003e\u003ca\u003eDynamics\u003c/a\u003e\u003c/code\u003e computation in the specified time point.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Dynamics",
          "name": "runDynamicsInTime",
          "package": "aivika",
          "signature": "Double -\u003e Dynamics a -\u003e Simulation a",
          "source": "src/Simulation-Aivika-Internal-Dynamics.html#runDynamicsInTime",
          "type": "function"
        },
        "index": {
          "description": "Run the Dynamics computation in the specified time point",
          "hierarchy": "Simulation Aivika Dynamics",
          "module": "Simulation.Aivika.Dynamics",
          "name": "runDynamicsInTime",
          "normalized": "Double-\u003eDynamics a-\u003eSimulation a",
          "package": "aivika",
          "partial": "Dynamics In Time",
          "signature": "Double-\u003eDynamics a-\u003eSimulation a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Dynamics.html#v:runDynamicsInTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun the \u003ccode\u003e\u003ca\u003eDynamics\u003c/a\u003e\u003c/code\u003e computation in the specified time points.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Dynamics",
          "name": "runDynamicsInTimes",
          "package": "aivika",
          "signature": "[Double] -\u003e Dynamics a -\u003e Simulation [IO a]",
          "source": "src/Simulation-Aivika-Internal-Dynamics.html#runDynamicsInTimes",
          "type": "function"
        },
        "index": {
          "description": "Run the Dynamics computation in the specified time points",
          "hierarchy": "Simulation Aivika Dynamics",
          "module": "Simulation.Aivika.Dynamics",
          "name": "runDynamicsInTimes",
          "normalized": "[Double]-\u003eDynamics a-\u003eSimulation[IO a]",
          "package": "aivika",
          "partial": "Dynamics In Times",
          "signature": "[Double]-\u003eDynamics a-\u003eSimulation[IO a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Dynamics.html#v:runDynamicsInTimes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike the standard \u003ccode\u003e\u003ca\u003ethrow\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Dynamics",
          "name": "throwDynamics",
          "package": "aivika",
          "signature": "IOException -\u003e Dynamics a",
          "source": "src/Simulation-Aivika-Internal-Dynamics.html#throwDynamics",
          "type": "function"
        },
        "index": {
          "description": "Like the standard throw function",
          "hierarchy": "Simulation Aivika Dynamics",
          "module": "Simulation.Aivika.Dynamics",
          "name": "throwDynamics",
          "normalized": "IOException-\u003eDynamics a",
          "package": "aivika",
          "partial": "Dynamics",
          "signature": "IOException-\u003eDynamics a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Dynamics.html#v:throwDynamics"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputation that returns the current simulation time.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Dynamics",
          "name": "time",
          "package": "aivika",
          "signature": "Dynamics Double",
          "source": "src/Simulation-Aivika-Internal-Dynamics.html#time",
          "type": "function"
        },
        "index": {
          "description": "Computation that returns the current simulation time",
          "hierarchy": "Simulation Aivika Dynamics",
          "module": "Simulation.Aivika.Dynamics",
          "name": "time",
          "package": "aivika",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Dynamics.html#v:time"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTested with: GHC 7.6.3\n\u003c/p\u003e\u003cp\u003eThe module defines the \u003ccode\u003e\u003ca\u003eEvent\u003c/a\u003e\u003c/code\u003e monad which is very similar to the \u003ccode\u003eDynamics\u003c/code\u003e\n monad but only now the computation is strongly synchronized with the event queue.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Simulation.Aivika.Event",
          "name": "Event",
          "package": "aivika",
          "source": "src/Simulation-Aivika-Event.html",
          "type": "module"
        },
        "index": {
          "description": "Tested with GHC The module defines the Event monad which is very similar to the Dynamics monad but only now the computation is strongly synchronized with the event queue",
          "hierarchy": "Simulation Aivika Event",
          "module": "Simulation.Aivika.Event",
          "name": "Event",
          "package": "aivika",
          "partial": "Event",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Event.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA value in the \u003ccode\u003e\u003ca\u003eEvent\u003c/a\u003e\u003c/code\u003e monad represents a polymorphic time varying function\n which is strongly synchronized with the event queue.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Event",
          "name": "Event",
          "package": "aivika",
          "source": "src/Simulation-Aivika-Internal-Event.html#Event",
          "type": "data"
        },
        "index": {
          "description": "value in the Event monad represents polymorphic time varying function which is strongly synchronized with the event queue",
          "hierarchy": "Simulation Aivika Event",
          "module": "Simulation.Aivika.Event",
          "name": "Event",
          "package": "aivika",
          "partial": "Event",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Event.html#t:Event"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIt allows cancelling the event.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Event",
          "name": "EventCancellation",
          "package": "aivika",
          "source": "src/Simulation-Aivika-Internal-Event.html#EventCancellation",
          "type": "data"
        },
        "index": {
          "description": "It allows cancelling the event",
          "hierarchy": "Simulation Aivika Event",
          "module": "Simulation.Aivika.Event",
          "name": "EventCancellation",
          "package": "aivika",
          "partial": "Event Cancellation",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Event.html#t:EventCancellation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type class to lift the \u003ccode\u003e\u003ca\u003eEvent\u003c/a\u003e\u003c/code\u003e computation to other computations.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Event",
          "name": "EventLift",
          "package": "aivika",
          "source": "src/Simulation-Aivika-Internal-Event.html#EventLift",
          "type": "class"
        },
        "index": {
          "description": "type class to lift the Event computation to other computations",
          "hierarchy": "Simulation Aivika Event",
          "module": "Simulation.Aivika.Event",
          "name": "EventLift",
          "package": "aivika",
          "partial": "Event Lift",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Event.html#t:EventLift"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefines how the events are processed.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Event",
          "name": "EventProcessing",
          "package": "aivika",
          "source": "src/Simulation-Aivika-Internal-Event.html#EventProcessing",
          "type": "data"
        },
        "index": {
          "description": "Defines how the events are processed",
          "hierarchy": "Simulation Aivika Event",
          "module": "Simulation.Aivika.Event",
          "name": "EventProcessing",
          "package": "aivika",
          "partial": "Event Processing",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Event.html#t:EventProcessing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eeither process all earlier and then current events,\n or raise an error if the current simulation time is less\n than the actual time of the event queue (safe within\n the \u003ccode\u003e\u003ca\u003eEvent\u003c/a\u003e\u003c/code\u003e computation as this is protected by the type system)\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Event",
          "name": "CurrentEvents",
          "package": "aivika",
          "signature": "CurrentEvents",
          "source": "src/Simulation-Aivika-Internal-Event.html#EventProcessing",
          "type": "function"
        },
        "index": {
          "description": "either process all earlier and then current events or raise an error if the current simulation time is less than the actual time of the event queue safe within the Event computation as this is protected by the type system",
          "hierarchy": "Simulation Aivika Event",
          "module": "Simulation.Aivika.Event",
          "name": "CurrentEvents",
          "package": "aivika",
          "partial": "Current Events",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Event.html#v:CurrentEvents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eeither process all earlier and then current events,\n or do nothing if the current simulation time is less\n than the actual time of the event queue\n (do not use unless the documentation states the opposite)\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Event",
          "name": "CurrentEventsOrFromPast",
          "package": "aivika",
          "signature": "CurrentEventsOrFromPast",
          "source": "src/Simulation-Aivika-Internal-Event.html#EventProcessing",
          "type": "function"
        },
        "index": {
          "description": "either process all earlier and then current events or do nothing if the current simulation time is less than the actual time of the event queue do not use unless the documentation states the opposite",
          "hierarchy": "Simulation Aivika Event",
          "module": "Simulation.Aivika.Event",
          "name": "CurrentEventsOrFromPast",
          "package": "aivika",
          "partial": "Current Events Or From Past",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Event.html#v:CurrentEventsOrFromPast"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eeither process all earlier events not affecting\n the events at the current simulation time,\n or raise an error if the current simulation time is less\n than the actual time of the event queue (safe within\n the \u003ccode\u003e\u003ca\u003eEvent\u003c/a\u003e\u003c/code\u003e computation as this is protected by the type system)\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Event",
          "name": "EarlierEvents",
          "package": "aivika",
          "signature": "EarlierEvents",
          "source": "src/Simulation-Aivika-Internal-Event.html#EventProcessing",
          "type": "function"
        },
        "index": {
          "description": "either process all earlier events not affecting the events at the current simulation time or raise an error if the current simulation time is less than the actual time of the event queue safe within the Event computation as this is protected by the type system",
          "hierarchy": "Simulation Aivika Event",
          "module": "Simulation.Aivika.Event",
          "name": "EarlierEvents",
          "package": "aivika",
          "partial": "Earlier Events",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Event.html#v:EarlierEvents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eeither process all earlier events,\n or do nothing if the current simulation time is less\n than the actual time of the event queue\n (do not use unless the documentation states the opposite)\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Event",
          "name": "EarlierEventsOrFromPast",
          "package": "aivika",
          "signature": "EarlierEventsOrFromPast",
          "source": "src/Simulation-Aivika-Internal-Event.html#EventProcessing",
          "type": "function"
        },
        "index": {
          "description": "either process all earlier events or do nothing if the current simulation time is less than the actual time of the event queue do not use unless the documentation states the opposite",
          "hierarchy": "Simulation Aivika Event",
          "module": "Simulation.Aivika.Event",
          "name": "EarlierEventsOrFromPast",
          "package": "aivika",
          "partial": "Earlier Events Or From Past",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Event.html#v:EarlierEventsOrFromPast"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCancel the event.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Event",
          "name": "cancelEvent",
          "package": "aivika",
          "signature": "EventCancellation -\u003e Event ()",
          "source": "src/Simulation-Aivika-Internal-Event.html#cancelEvent",
          "type": "function"
        },
        "index": {
          "description": "Cancel the event",
          "hierarchy": "Simulation Aivika Event",
          "module": "Simulation.Aivika.Event",
          "name": "cancelEvent",
          "normalized": "EventCancellation-\u003eEvent()",
          "package": "aivika",
          "partial": "Event",
          "signature": "EventCancellation-\u003eEvent()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Event.html#v:cancelEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eException handling within \u003ccode\u003e\u003ca\u003eEvent\u003c/a\u003e\u003c/code\u003e computations.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Event",
          "name": "catchEvent",
          "package": "aivika",
          "signature": "Event a -\u003e (IOException -\u003e Event a) -\u003e Event a",
          "source": "src/Simulation-Aivika-Internal-Event.html#catchEvent",
          "type": "function"
        },
        "index": {
          "description": "Exception handling within Event computations",
          "hierarchy": "Simulation Aivika Event",
          "module": "Simulation.Aivika.Event",
          "name": "catchEvent",
          "normalized": "Event a-\u003e(IOException-\u003eEvent a)-\u003eEvent a",
          "package": "aivika",
          "partial": "Event",
          "signature": "Event a-\u003e(IOException-\u003eEvent a)-\u003eEvent a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Event.html#v:catchEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnqueue the event which must be actuated at the specified time.\n\u003c/p\u003e\u003cp\u003eThe events are processed when calling the \u003ccode\u003e\u003ca\u003erunEvent\u003c/a\u003e\u003c/code\u003e function. So,\n if you want to insist on their immediate execution then you can apply\n something like\n\u003c/p\u003e\u003cpre\u003e\n   liftDynamics $ runEvent IncludingCurrentEvents $ return ()\n\u003c/pre\u003e\u003cp\u003ealthough this is generally not good idea.  \n\u003c/p\u003e",
          "module": "Simulation.Aivika.Event",
          "name": "enqueueEvent",
          "package": "aivika",
          "signature": "Double -\u003e Event () -\u003e Event ()",
          "source": "src/Simulation-Aivika-Internal-Event.html#enqueueEvent",
          "type": "function"
        },
        "index": {
          "description": "Enqueue the event which must be actuated at the specified time The events are processed when calling the runEvent function So if you want to insist on their immediate execution then you can apply something like liftDynamics runEvent IncludingCurrentEvents return although this is generally not good idea",
          "hierarchy": "Simulation Aivika Event",
          "module": "Simulation.Aivika.Event",
          "name": "enqueueEvent",
          "normalized": "Double-\u003eEvent()-\u003eEvent()",
          "package": "aivika",
          "partial": "Event",
          "signature": "Double-\u003eEvent()-\u003eEvent()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Event.html#v:enqueueEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnqueue the event with an ability to cancel it.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Event",
          "name": "enqueueEventWithCancellation",
          "package": "aivika",
          "signature": "Double -\u003e Event () -\u003e Event EventCancellation",
          "source": "src/Simulation-Aivika-Internal-Event.html#enqueueEventWithCancellation",
          "type": "function"
        },
        "index": {
          "description": "Enqueue the event with an ability to cancel it",
          "hierarchy": "Simulation Aivika Event",
          "module": "Simulation.Aivika.Event",
          "name": "enqueueEventWithCancellation",
          "normalized": "Double-\u003eEvent()-\u003eEvent EventCancellation",
          "package": "aivika",
          "partial": "Event With Cancellation",
          "signature": "Double-\u003eEvent()-\u003eEvent EventCancellation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Event.html#v:enqueueEventWithCancellation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eActuate the event handler in the integration time points.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Event",
          "name": "enqueueEventWithIntegTimes",
          "package": "aivika",
          "signature": "Event () -\u003e Event ()",
          "source": "src/Simulation-Aivika-Internal-Event.html#enqueueEventWithIntegTimes",
          "type": "function"
        },
        "index": {
          "description": "Actuate the event handler in the integration time points",
          "hierarchy": "Simulation Aivika Event",
          "module": "Simulation.Aivika.Event",
          "name": "enqueueEventWithIntegTimes",
          "normalized": "Event()-\u003eEvent()",
          "package": "aivika",
          "partial": "Event With Integ Times",
          "signature": "Event()-\u003eEvent()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Event.html#v:enqueueEventWithIntegTimes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eActuate the event handler in the specified time points.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Event",
          "name": "enqueueEventWithTimes",
          "package": "aivika",
          "signature": "[Double] -\u003e Event () -\u003e Event ()",
          "source": "src/Simulation-Aivika-Internal-Event.html#enqueueEventWithTimes",
          "type": "function"
        },
        "index": {
          "description": "Actuate the event handler in the specified time points",
          "hierarchy": "Simulation Aivika Event",
          "module": "Simulation.Aivika.Event",
          "name": "enqueueEventWithTimes",
          "normalized": "[Double]-\u003eEvent()-\u003eEvent()",
          "package": "aivika",
          "partial": "Event With Times",
          "signature": "[Double]-\u003eEvent()-\u003eEvent()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Event.html#v:enqueueEventWithTimes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest whether the event was cancelled.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Event",
          "name": "eventCancelled",
          "package": "aivika",
          "signature": "EventCancellation -\u003e Event Bool",
          "source": "src/Simulation-Aivika-Internal-Event.html#eventCancelled",
          "type": "function"
        },
        "index": {
          "description": "Test whether the event was cancelled",
          "hierarchy": "Simulation Aivika Event",
          "module": "Simulation.Aivika.Event",
          "name": "eventCancelled",
          "normalized": "EventCancellation-\u003eEvent Bool",
          "package": "aivika",
          "partial": "Cancelled",
          "signature": "EventCancellation-\u003eEvent Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Event.html#v:eventCancelled"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest whether the event was processed and finished.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Event",
          "name": "eventFinished",
          "package": "aivika",
          "signature": "EventCancellation -\u003e Event Bool",
          "source": "src/Simulation-Aivika-Internal-Event.html#eventFinished",
          "type": "function"
        },
        "index": {
          "description": "Test whether the event was processed and finished",
          "hierarchy": "Simulation Aivika Event",
          "module": "Simulation.Aivika.Event",
          "name": "eventFinished",
          "normalized": "EventCancellation-\u003eEvent Bool",
          "package": "aivika",
          "partial": "Finished",
          "signature": "EventCancellation-\u003eEvent Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Event.html#v:eventFinished"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the number of pending events that should\n be yet actuated.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Event",
          "name": "eventQueueCount",
          "package": "aivika",
          "signature": "Event Int",
          "source": "src/Simulation-Aivika-Internal-Event.html#eventQueueCount",
          "type": "function"
        },
        "index": {
          "description": "Return the number of pending events that should be yet actuated",
          "hierarchy": "Simulation Aivika Event",
          "module": "Simulation.Aivika.Event",
          "name": "eventQueueCount",
          "package": "aivika",
          "partial": "Queue Count",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Event.html#v:eventQueueCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA computation with finalization part like the \u003ccode\u003e\u003ca\u003efinally\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Event",
          "name": "finallyEvent",
          "package": "aivika",
          "signature": "Event a -\u003e Event b -\u003e Event a",
          "source": "src/Simulation-Aivika-Internal-Event.html#finallyEvent",
          "type": "function"
        },
        "index": {
          "description": "computation with finalization part like the finally function",
          "hierarchy": "Simulation Aivika Event",
          "module": "Simulation.Aivika.Event",
          "name": "finallyEvent",
          "normalized": "Event a-\u003eEvent b-\u003eEvent a",
          "package": "aivika",
          "partial": "Event",
          "signature": "Event a-\u003eEvent b-\u003eEvent a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Event.html#v:finallyEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift the specified \u003ccode\u003e\u003ca\u003eEvent\u003c/a\u003e\u003c/code\u003e computation to another computation.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Event",
          "name": "liftEvent",
          "package": "aivika",
          "signature": "Event a -\u003e m a",
          "source": "src/Simulation-Aivika-Internal-Event.html#liftEvent",
          "type": "method"
        },
        "index": {
          "description": "Lift the specified Event computation to another computation",
          "hierarchy": "Simulation Aivika Event",
          "module": "Simulation.Aivika.Event",
          "name": "liftEvent",
          "normalized": "Event a-\u003eb a",
          "package": "aivika",
          "partial": "Event",
          "signature": "Event a-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Event.html#v:liftEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMemoize the \u003ccode\u003e\u003ca\u003eEvent\u003c/a\u003e\u003c/code\u003e computation, always returning the same value\n within a simulation run.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Event",
          "name": "memoEvent",
          "package": "aivika",
          "signature": "Event a -\u003e Simulation (Event a)",
          "source": "src/Simulation-Aivika-Internal-Event.html#memoEvent",
          "type": "function"
        },
        "index": {
          "description": "Memoize the Event computation always returning the same value within simulation run",
          "hierarchy": "Simulation Aivika Event",
          "module": "Simulation.Aivika.Event",
          "name": "memoEvent",
          "normalized": "Event a-\u003eSimulation(Event a)",
          "package": "aivika",
          "partial": "Event",
          "signature": "Event a-\u003eSimulation(Event a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Event.html#v:memoEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun the \u003ccode\u003e\u003ca\u003eEvent\u003c/a\u003e\u003c/code\u003e computation in the current simulation time\n within the \u003ccode\u003e\u003ca\u003eDynamics\u003c/a\u003e\u003c/code\u003e computation involving all pending\n \u003ccode\u003e\u003ca\u003eCurrentEvents\u003c/a\u003e\u003c/code\u003e in the processing too.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Event",
          "name": "runEvent",
          "package": "aivika",
          "signature": "Event a -\u003e Dynamics a",
          "source": "src/Simulation-Aivika-Internal-Event.html#runEvent",
          "type": "function"
        },
        "index": {
          "description": "Run the Event computation in the current simulation time within the Dynamics computation involving all pending CurrentEvents in the processing too",
          "hierarchy": "Simulation Aivika Event",
          "module": "Simulation.Aivika.Event",
          "name": "runEvent",
          "normalized": "Event a-\u003eDynamics a",
          "package": "aivika",
          "partial": "Event",
          "signature": "Event a-\u003eDynamics a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Event.html#v:runEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun the \u003ccode\u003e\u003ca\u003eEvent\u003c/a\u003e\u003c/code\u003e computation in the start time involving all\n pending \u003ccode\u003e\u003ca\u003eCurrentEvents\u003c/a\u003e\u003c/code\u003e in the processing too.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Event",
          "name": "runEventInStartTime",
          "package": "aivika",
          "signature": "Event a -\u003e Simulation a",
          "source": "src/Simulation-Aivika-Internal-Event.html#runEventInStartTime",
          "type": "function"
        },
        "index": {
          "description": "Run the Event computation in the start time involving all pending CurrentEvents in the processing too",
          "hierarchy": "Simulation Aivika Event",
          "module": "Simulation.Aivika.Event",
          "name": "runEventInStartTime",
          "normalized": "Event a-\u003eSimulation a",
          "package": "aivika",
          "partial": "Event In Start Time",
          "signature": "Event a-\u003eSimulation a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Event.html#v:runEventInStartTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun the \u003ccode\u003e\u003ca\u003eEvent\u003c/a\u003e\u003c/code\u003e computation in the stop time involving all\n pending \u003ccode\u003e\u003ca\u003eCurrentEvents\u003c/a\u003e\u003c/code\u003e in the processing too.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Event",
          "name": "runEventInStopTime",
          "package": "aivika",
          "signature": "Event a -\u003e Simulation a",
          "source": "src/Simulation-Aivika-Internal-Event.html#runEventInStopTime",
          "type": "function"
        },
        "index": {
          "description": "Run the Event computation in the stop time involving all pending CurrentEvents in the processing too",
          "hierarchy": "Simulation Aivika Event",
          "module": "Simulation.Aivika.Event",
          "name": "runEventInStopTime",
          "normalized": "Event a-\u003eSimulation a",
          "package": "aivika",
          "partial": "Event In Stop Time",
          "signature": "Event a-\u003eSimulation a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Event.html#v:runEventInStopTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun the \u003ccode\u003e\u003ca\u003eEvent\u003c/a\u003e\u003c/code\u003e computation in the current simulation time\n within the \u003ccode\u003e\u003ca\u003eDynamics\u003c/a\u003e\u003c/code\u003e computation specifying what pending events \n should be involved in the processing.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Event",
          "name": "runEventWith",
          "package": "aivika",
          "signature": "EventProcessing -\u003e Event a -\u003e Dynamics a",
          "source": "src/Simulation-Aivika-Internal-Event.html#runEventWith",
          "type": "function"
        },
        "index": {
          "description": "Run the Event computation in the current simulation time within the Dynamics computation specifying what pending events should be involved in the processing",
          "hierarchy": "Simulation Aivika Event",
          "module": "Simulation.Aivika.Event",
          "name": "runEventWith",
          "normalized": "EventProcessing-\u003eEvent a-\u003eDynamics a",
          "package": "aivika",
          "partial": "Event With",
          "signature": "EventProcessing-\u003eEvent a-\u003eDynamics a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Event.html#v:runEventWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike the standard \u003ccode\u003e\u003ca\u003ethrow\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Event",
          "name": "throwEvent",
          "package": "aivika",
          "signature": "IOException -\u003e Event a",
          "source": "src/Simulation-Aivika-Internal-Event.html#throwEvent",
          "type": "function"
        },
        "index": {
          "description": "Like the standard throw function",
          "hierarchy": "Simulation Aivika Event",
          "module": "Simulation.Aivika.Event",
          "name": "throwEvent",
          "normalized": "IOException-\u003eEvent a",
          "package": "aivika",
          "partial": "Event",
          "signature": "IOException-\u003eEvent a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Event.html#v:throwEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTested with: GHC 7.6.3\n\u003c/p\u003e\u003cp\u003eBelow is defined a type class of the random number generator.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Simulation.Aivika.Generator",
          "name": "Generator",
          "package": "aivika",
          "source": "src/Simulation-Aivika-Generator.html",
          "type": "module"
        },
        "index": {
          "description": "Tested with GHC Below is defined type class of the random number generator",
          "hierarchy": "Simulation Aivika Generator",
          "module": "Simulation.Aivika.Generator",
          "name": "Generator",
          "package": "aivika",
          "partial": "Generator",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Generator.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefines a random number generator.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Generator",
          "name": "Generator",
          "package": "aivika",
          "source": "src/Simulation-Aivika-Generator.html#Generator",
          "type": "data"
        },
        "index": {
          "description": "Defines random number generator",
          "hierarchy": "Simulation Aivika Generator",
          "module": "Simulation.Aivika.Generator",
          "name": "Generator",
          "package": "aivika",
          "partial": "Generator",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Generator.html#t:Generator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefines a type of the random number generator.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Generator",
          "name": "GeneratorType",
          "package": "aivika",
          "source": "src/Simulation-Aivika-Generator.html#GeneratorType",
          "type": "data"
        },
        "index": {
          "description": "Defines type of the random number generator",
          "hierarchy": "Simulation Aivika Generator",
          "module": "Simulation.Aivika.Generator",
          "name": "GeneratorType",
          "package": "aivika",
          "partial": "Generator Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Generator.html#t:GeneratorType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe custom random number generator.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Generator",
          "name": "CustomGenerator",
          "package": "aivika",
          "signature": "CustomGenerator (IO Generator)",
          "source": "src/Simulation-Aivika-Generator.html#GeneratorType",
          "type": "function"
        },
        "index": {
          "description": "The custom random number generator",
          "hierarchy": "Simulation Aivika Generator",
          "module": "Simulation.Aivika.Generator",
          "name": "CustomGenerator",
          "package": "aivika",
          "partial": "Custom Generator",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Generator.html#v:CustomGenerator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Simulation.Aivika.Generator",
          "name": "Generator",
          "package": "aivika",
          "signature": "Generator",
          "source": "src/Simulation-Aivika-Generator.html#Generator",
          "type": "function"
        },
        "index": {
          "hierarchy": "Simulation Aivika Generator",
          "module": "Simulation.Aivika.Generator",
          "name": "Generator",
          "package": "aivika",
          "partial": "Generator",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Generator.html#v:Generator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe simple random number generator.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Generator",
          "name": "SimpleGenerator",
          "package": "aivika",
          "signature": "SimpleGenerator",
          "source": "src/Simulation-Aivika-Generator.html#GeneratorType",
          "type": "function"
        },
        "index": {
          "description": "The simple random number generator",
          "hierarchy": "Simulation Aivika Generator",
          "module": "Simulation.Aivika.Generator",
          "name": "SimpleGenerator",
          "package": "aivika",
          "partial": "Simple Generator",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Generator.html#v:SimpleGenerator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe simple random number generator with the specified seed.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Generator",
          "name": "SimpleGeneratorWithSeed",
          "package": "aivika",
          "signature": "SimpleGeneratorWithSeed Int",
          "source": "src/Simulation-Aivika-Generator.html#GeneratorType",
          "type": "function"
        },
        "index": {
          "description": "The simple random number generator with the specified seed",
          "hierarchy": "Simulation Aivika Generator",
          "module": "Simulation.Aivika.Generator",
          "name": "SimpleGeneratorWithSeed",
          "package": "aivika",
          "partial": "Simple Generator With Seed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Generator.html#v:SimpleGeneratorWithSeed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate the binomial random number\n with the specified probability and number of trials.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Generator",
          "name": "generatorBinomial",
          "package": "aivika",
          "signature": "Double -\u003e Int -\u003e IO Int",
          "source": "src/Simulation-Aivika-Generator.html#Generator",
          "type": "function"
        },
        "index": {
          "description": "Generate the binomial random number with the specified probability and number of trials",
          "hierarchy": "Simulation Aivika Generator",
          "module": "Simulation.Aivika.Generator",
          "name": "generatorBinomial",
          "normalized": "Double-\u003eInt-\u003eIO Int",
          "package": "aivika",
          "partial": "Binomial",
          "signature": "Double-\u003eInt-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Generator.html#v:generatorBinomial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate the Erlang random number\n with the specified scale (the reciprocal of the rate) and integer shape.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Generator",
          "name": "generatorErlang",
          "package": "aivika",
          "signature": "Double -\u003e Int -\u003e IO Double",
          "source": "src/Simulation-Aivika-Generator.html#Generator",
          "type": "function"
        },
        "index": {
          "description": "Generate the Erlang random number with the specified scale the reciprocal of the rate and integer shape",
          "hierarchy": "Simulation Aivika Generator",
          "module": "Simulation.Aivika.Generator",
          "name": "generatorErlang",
          "normalized": "Double-\u003eInt-\u003eIO Double",
          "package": "aivika",
          "partial": "Erlang",
          "signature": "Double-\u003eInt-\u003eIO Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Generator.html#v:generatorErlang"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate the random number distributed exponentially\n with the specified mean (the reciprocal of the rate).\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Generator",
          "name": "generatorExponential",
          "package": "aivika",
          "signature": "Double -\u003e IO Double",
          "source": "src/Simulation-Aivika-Generator.html#Generator",
          "type": "function"
        },
        "index": {
          "description": "Generate the random number distributed exponentially with the specified mean the reciprocal of the rate",
          "hierarchy": "Simulation Aivika Generator",
          "module": "Simulation.Aivika.Generator",
          "name": "generatorExponential",
          "normalized": "Double-\u003eIO Double",
          "package": "aivika",
          "partial": "Exponential",
          "signature": "Double-\u003eIO Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Generator.html#v:generatorExponential"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate the normal random number\n with the specified mean and deviation.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Generator",
          "name": "generatorNormal",
          "package": "aivika",
          "signature": "Double -\u003e Double -\u003e IO Double",
          "source": "src/Simulation-Aivika-Generator.html#Generator",
          "type": "function"
        },
        "index": {
          "description": "Generate the normal random number with the specified mean and deviation",
          "hierarchy": "Simulation Aivika Generator",
          "module": "Simulation.Aivika.Generator",
          "name": "generatorNormal",
          "normalized": "Double-\u003eDouble-\u003eIO Double",
          "package": "aivika",
          "partial": "Normal",
          "signature": "Double-\u003eDouble-\u003eIO Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Generator.html#v:generatorNormal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate the Poisson random number\n with the specified mean.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Generator",
          "name": "generatorPoisson",
          "package": "aivika",
          "signature": "Double -\u003e IO Int",
          "source": "src/Simulation-Aivika-Generator.html#Generator",
          "type": "function"
        },
        "index": {
          "description": "Generate the Poisson random number with the specified mean",
          "hierarchy": "Simulation Aivika Generator",
          "module": "Simulation.Aivika.Generator",
          "name": "generatorPoisson",
          "normalized": "Double-\u003eIO Int",
          "package": "aivika",
          "partial": "Poisson",
          "signature": "Double-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Generator.html#v:generatorPoisson"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate an uniform random number\n with the specified minimum and maximum.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Generator",
          "name": "generatorUniform",
          "package": "aivika",
          "signature": "Double -\u003e Double -\u003e IO Double",
          "source": "src/Simulation-Aivika-Generator.html#Generator",
          "type": "function"
        },
        "index": {
          "description": "Generate an uniform random number with the specified minimum and maximum",
          "hierarchy": "Simulation Aivika Generator",
          "module": "Simulation.Aivika.Generator",
          "name": "generatorUniform",
          "normalized": "Double-\u003eDouble-\u003eIO Double",
          "package": "aivika",
          "partial": "Uniform",
          "signature": "Double-\u003eDouble-\u003eIO Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Generator.html#v:generatorUniform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new random number generator by the specified type.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Generator",
          "name": "newGenerator",
          "package": "aivika",
          "signature": "GeneratorType -\u003e IO Generator",
          "source": "src/Simulation-Aivika-Generator.html#newGenerator",
          "type": "function"
        },
        "index": {
          "description": "Create new random number generator by the specified type",
          "hierarchy": "Simulation Aivika Generator",
          "module": "Simulation.Aivika.Generator",
          "name": "newGenerator",
          "normalized": "GeneratorType-\u003eIO Generator",
          "package": "aivika",
          "partial": "Generator",
          "signature": "GeneratorType-\u003eIO Generator",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Generator.html#v:newGenerator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new random generator by the specified standard generator.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Generator",
          "name": "newRandomGenerator",
          "package": "aivika",
          "signature": "g -\u003e IO Generator",
          "source": "src/Simulation-Aivika-Generator.html#newRandomGenerator",
          "type": "function"
        },
        "index": {
          "description": "Create new random generator by the specified standard generator",
          "hierarchy": "Simulation Aivika Generator",
          "module": "Simulation.Aivika.Generator",
          "name": "newRandomGenerator",
          "normalized": "a-\u003eIO Generator",
          "package": "aivika",
          "partial": "Random Generator",
          "signature": "g-\u003eIO Generator",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Generator.html#v:newRandomGenerator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTested with: GHC 7.6.3\n\u003c/p\u003e\u003cp\u003eThis module defines the random parameters of simulation experiments.\n\u003c/p\u003e\u003cp\u003eTo create a parameter that would return the same value within the simulation run,\n you should memoize the computation with help of \u003ccode\u003e\u003ca\u003ememoParameter\u003c/a\u003e\u003c/code\u003e, which is important\n for the Monte-Carlo simulation.\n\u003c/p\u003e\u003cp\u003eTo create a random function that would return the same values in the integration\n time points within the simulation run, you should either lift the computation to\n the \u003ccode\u003e\u003ca\u003eDynamics\u003c/a\u003e\u003c/code\u003e computation and then memoize it too but using the \u003ccode\u003e\u003ca\u003ememo0Dynamics\u003c/a\u003e\u003c/code\u003e\n function for that computation, or just take the predefined function that does\n namely this.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Simulation.Aivika.Parameter.Random",
          "name": "Random",
          "package": "aivika",
          "source": "src/Simulation-Aivika-Parameter-Random.html",
          "type": "module"
        },
        "index": {
          "description": "Tested with GHC This module defines the random parameters of simulation experiments To create parameter that would return the same value within the simulation run you should memoize the computation with help of memoParameter which is important for the Monte-Carlo simulation To create random function that would return the same values in the integration time points within the simulation run you should either lift the computation to the Dynamics computation and then memoize it too but using the memo0Dynamics function for that computation or just take the predefined function that does namely this",
          "hierarchy": "Simulation Aivika Parameter Random",
          "module": "Simulation.Aivika.Parameter.Random",
          "name": "Random",
          "package": "aivika",
          "partial": "Random",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Parameter-Random.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputation that returns a new binomial random number with the specified\n probability and trials.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Parameter.Random",
          "name": "randomBinomial",
          "package": "aivika",
          "signature": "Double-\u003e Int-\u003e Parameter Int",
          "type": "function"
        },
        "index": {
          "description": "Computation that returns new binomial random number with the specified probability and trials",
          "hierarchy": "Simulation Aivika Parameter Random",
          "module": "Simulation.Aivika.Parameter.Random",
          "name": "randomBinomial",
          "normalized": "Double-\u003eInt-\u003eParameter Int",
          "package": "aivika",
          "partial": "Binomial",
          "signature": "Double-\u003eInt-\u003eParameter Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Parameter-Random.html#v:randomBinomial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputation that returns a new Erlang random number with the specified scale\n (the reciprocal of the rate) and integer shape.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Parameter.Random",
          "name": "randomErlang",
          "package": "aivika",
          "signature": "Double-\u003e Int-\u003e Parameter Double",
          "type": "function"
        },
        "index": {
          "description": "Computation that returns new Erlang random number with the specified scale the reciprocal of the rate and integer shape",
          "hierarchy": "Simulation Aivika Parameter Random",
          "module": "Simulation.Aivika.Parameter.Random",
          "name": "randomErlang",
          "normalized": "Double-\u003eInt-\u003eParameter Double",
          "package": "aivika",
          "partial": "Erlang",
          "signature": "Double-\u003eInt-\u003eParameter Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Parameter-Random.html#v:randomErlang"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputation that returns a new exponential random number with the specified mean\n (the reciprocal of the rate).\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Parameter.Random",
          "name": "randomExponential",
          "package": "aivika",
          "signature": "Double-\u003e Parameter Double",
          "type": "function"
        },
        "index": {
          "description": "Computation that returns new exponential random number with the specified mean the reciprocal of the rate",
          "hierarchy": "Simulation Aivika Parameter Random",
          "module": "Simulation.Aivika.Parameter.Random",
          "name": "randomExponential",
          "normalized": "Double-\u003eParameter Double",
          "package": "aivika",
          "partial": "Exponential",
          "signature": "Double-\u003eParameter Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Parameter-Random.html#v:randomExponential"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputation that returns \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e in case of success.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Parameter.Random",
          "name": "randomFalse",
          "package": "aivika",
          "signature": "Double-\u003e Parameter Bool",
          "type": "function"
        },
        "index": {
          "description": "Computation that returns False in case of success",
          "hierarchy": "Simulation Aivika Parameter Random",
          "module": "Simulation.Aivika.Parameter.Random",
          "name": "randomFalse",
          "normalized": "Double-\u003eParameter Bool",
          "package": "aivika",
          "partial": "False",
          "signature": "Double-\u003eParameter Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Parameter-Random.html#v:randomFalse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputation that generates a new random number distributed normally.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Parameter.Random",
          "name": "randomNormal",
          "package": "aivika",
          "signature": "Double-\u003e Double-\u003e Parameter Double",
          "type": "function"
        },
        "index": {
          "description": "Computation that generates new random number distributed normally",
          "hierarchy": "Simulation Aivika Parameter Random",
          "module": "Simulation.Aivika.Parameter.Random",
          "name": "randomNormal",
          "normalized": "Double-\u003eDouble-\u003eParameter Double",
          "package": "aivika",
          "partial": "Normal",
          "signature": "Double-\u003eDouble-\u003eParameter Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Parameter-Random.html#v:randomNormal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputation that returns a new Poisson random number with the specified mean.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Parameter.Random",
          "name": "randomPoisson",
          "package": "aivika",
          "signature": "Double-\u003e Parameter Int",
          "type": "function"
        },
        "index": {
          "description": "Computation that returns new Poisson random number with the specified mean",
          "hierarchy": "Simulation Aivika Parameter Random",
          "module": "Simulation.Aivika.Parameter.Random",
          "name": "randomPoisson",
          "normalized": "Double-\u003eParameter Int",
          "package": "aivika",
          "partial": "Poisson",
          "signature": "Double-\u003eParameter Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Parameter-Random.html#v:randomPoisson"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputation that returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e in case of success.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Parameter.Random",
          "name": "randomTrue",
          "package": "aivika",
          "signature": "Double-\u003e Parameter Bool",
          "type": "function"
        },
        "index": {
          "description": "Computation that returns True in case of success",
          "hierarchy": "Simulation Aivika Parameter Random",
          "module": "Simulation.Aivika.Parameter.Random",
          "name": "randomTrue",
          "normalized": "Double-\u003eParameter Bool",
          "package": "aivika",
          "partial": "True",
          "signature": "Double-\u003eParameter Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Parameter-Random.html#v:randomTrue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputation that generates a new random number distributed uniformly.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Parameter.Random",
          "name": "randomUniform",
          "package": "aivika",
          "signature": "Double-\u003e Double-\u003e Parameter Double",
          "type": "function"
        },
        "index": {
          "description": "Computation that generates new random number distributed uniformly",
          "hierarchy": "Simulation Aivika Parameter Random",
          "module": "Simulation.Aivika.Parameter.Random",
          "name": "randomUniform",
          "normalized": "Double-\u003eDouble-\u003eParameter Double",
          "package": "aivika",
          "partial": "Uniform",
          "signature": "Double-\u003eDouble-\u003eParameter Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Parameter-Random.html#v:randomUniform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTested with: GHC 7.6.3\n\u003c/p\u003e\u003cp\u003eThe module defines the \u003ccode\u003e\u003ca\u003eParameter\u003c/a\u003e\u003c/code\u003e monad that allows representing the model\n parameters. For example, they can be used when running the Monte-Carlo simulation.\n\u003c/p\u003e\u003cp\u003eIn general, this monad is very useful for representing a computation which is external\n relative to the model itself.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Simulation.Aivika.Parameter",
          "name": "Parameter",
          "package": "aivika",
          "source": "src/Simulation-Aivika-Parameter.html",
          "type": "module"
        },
        "index": {
          "description": "Tested with GHC The module defines the Parameter monad that allows representing the model parameters For example they can be used when running the Monte-Carlo simulation In general this monad is very useful for representing computation which is external relative to the model itself",
          "hierarchy": "Simulation Aivika Parameter",
          "module": "Simulation.Aivika.Parameter",
          "name": "Parameter",
          "package": "aivika",
          "partial": "Parameter",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Parameter.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eParameter\u003c/a\u003e\u003c/code\u003e monad that allows specifying the model parameters.\n For example, they can be used when running the Monte-Carlo simulation.\n\u003c/p\u003e\u003cp\u003eIn general, this monad is very useful for representing a computation which is external\n relative to the model itself.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Parameter",
          "name": "Parameter",
          "package": "aivika",
          "source": "src/Simulation-Aivika-Internal-Parameter.html#Parameter",
          "type": "data"
        },
        "index": {
          "description": "The Parameter monad that allows specifying the model parameters For example they can be used when running the Monte-Carlo simulation In general this monad is very useful for representing computation which is external relative to the model itself",
          "hierarchy": "Simulation Aivika Parameter",
          "module": "Simulation.Aivika.Parameter",
          "name": "Parameter",
          "package": "aivika",
          "partial": "Parameter",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Parameter.html#t:Parameter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type class to lift the parameters to other computations.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Parameter",
          "name": "ParameterLift",
          "package": "aivika",
          "source": "src/Simulation-Aivika-Internal-Parameter.html#ParameterLift",
          "type": "class"
        },
        "index": {
          "description": "type class to lift the parameters to other computations",
          "hierarchy": "Simulation Aivika Parameter",
          "module": "Simulation.Aivika.Parameter",
          "name": "ParameterLift",
          "package": "aivika",
          "partial": "Parameter Lift",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Parameter.html#t:ParameterLift"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eException handling within \u003ccode\u003e\u003ca\u003eParameter\u003c/a\u003e\u003c/code\u003e computations.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Parameter",
          "name": "catchParameter",
          "package": "aivika",
          "signature": "Parameter a -\u003e (IOException -\u003e Parameter a) -\u003e Parameter a",
          "source": "src/Simulation-Aivika-Internal-Parameter.html#catchParameter",
          "type": "function"
        },
        "index": {
          "description": "Exception handling within Parameter computations",
          "hierarchy": "Simulation Aivika Parameter",
          "module": "Simulation.Aivika.Parameter",
          "name": "catchParameter",
          "normalized": "Parameter a-\u003e(IOException-\u003eParameter a)-\u003eParameter a",
          "package": "aivika",
          "partial": "Parameter",
          "signature": "Parameter a-\u003e(IOException-\u003eParameter a)-\u003eParameter a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Parameter.html#v:catchParameter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputation that returns the integration time step.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Parameter",
          "name": "dt",
          "package": "aivika",
          "signature": "Parameter Double",
          "source": "src/Simulation-Aivika-Internal-Parameter.html#dt",
          "type": "function"
        },
        "index": {
          "description": "Computation that returns the integration time step",
          "hierarchy": "Simulation Aivika Parameter",
          "module": "Simulation.Aivika.Parameter",
          "name": "dt",
          "package": "aivika",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Parameter.html#v:dt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA computation with finalization part like the \u003ccode\u003e\u003ca\u003efinally\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Parameter",
          "name": "finallyParameter",
          "package": "aivika",
          "signature": "Parameter a -\u003e Parameter b -\u003e Parameter a",
          "source": "src/Simulation-Aivika-Internal-Parameter.html#finallyParameter",
          "type": "function"
        },
        "index": {
          "description": "computation with finalization part like the finally function",
          "hierarchy": "Simulation Aivika Parameter",
          "module": "Simulation.Aivika.Parameter",
          "name": "finallyParameter",
          "normalized": "Parameter a-\u003eParameter b-\u003eParameter a",
          "package": "aivika",
          "partial": "Parameter",
          "signature": "Parameter a-\u003eParameter b-\u003eParameter a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Parameter.html#v:finallyParameter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the random number generator for the simulation run.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Parameter",
          "name": "generatorParameter",
          "package": "aivika",
          "signature": "Parameter Generator",
          "source": "src/Simulation-Aivika-Internal-Parameter.html#generatorParameter",
          "type": "function"
        },
        "index": {
          "description": "Return the random number generator for the simulation run",
          "hierarchy": "Simulation Aivika Parameter",
          "module": "Simulation.Aivika.Parameter",
          "name": "generatorParameter",
          "package": "aivika",
          "partial": "Parameter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Parameter.html#v:generatorParameter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift the specified \u003ccode\u003e\u003ca\u003eParameter\u003c/a\u003e\u003c/code\u003e computation to another computation.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Parameter",
          "name": "liftParameter",
          "package": "aivika",
          "signature": "Parameter a -\u003e m a",
          "source": "src/Simulation-Aivika-Internal-Parameter.html#liftParameter",
          "type": "method"
        },
        "index": {
          "description": "Lift the specified Parameter computation to another computation",
          "hierarchy": "Simulation Aivika Parameter",
          "module": "Simulation.Aivika.Parameter",
          "name": "liftParameter",
          "normalized": "Parameter a-\u003eb a",
          "package": "aivika",
          "partial": "Parameter",
          "signature": "Parameter a-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Parameter.html#v:liftParameter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMemoize the \u003ccode\u003e\u003ca\u003eParameter\u003c/a\u003e\u003c/code\u003e computation, always returning the same value\n within a simulation run. However, the value will be recalculated for other\n simulation runs. Also it is thread-safe when different simulation runs\n are executed in parallel on physically different operating system threads.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Parameter",
          "name": "memoParameter",
          "package": "aivika",
          "signature": "Parameter a -\u003e IO (Parameter a)",
          "source": "src/Simulation-Aivika-Internal-Parameter.html#memoParameter",
          "type": "function"
        },
        "index": {
          "description": "Memoize the Parameter computation always returning the same value within simulation run However the value will be recalculated for other simulation runs Also it is thread-safe when different simulation runs are executed in parallel on physically different operating system threads",
          "hierarchy": "Simulation Aivika Parameter",
          "module": "Simulation.Aivika.Parameter",
          "name": "memoParameter",
          "normalized": "Parameter a-\u003eIO(Parameter a)",
          "package": "aivika",
          "partial": "Parameter",
          "signature": "Parameter a-\u003eIO(Parameter a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Parameter.html#v:memoParameter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun the parameter using the specified specs.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Parameter",
          "name": "runParameter",
          "package": "aivika",
          "signature": "Parameter a -\u003e Specs -\u003e IO a",
          "source": "src/Simulation-Aivika-Internal-Parameter.html#runParameter",
          "type": "function"
        },
        "index": {
          "description": "Run the parameter using the specified specs",
          "hierarchy": "Simulation Aivika Parameter",
          "module": "Simulation.Aivika.Parameter",
          "name": "runParameter",
          "normalized": "Parameter a-\u003eSpecs-\u003eIO a",
          "package": "aivika",
          "partial": "Parameter",
          "signature": "Parameter a-\u003eSpecs-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Parameter.html#v:runParameter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun the given number of parameters using the specified specs, \n   where each parameter is distinguished by its index \u003ccode\u003eparameterIndex\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Parameter",
          "name": "runParameters",
          "package": "aivika",
          "signature": "Parameter a -\u003e Specs -\u003e Int -\u003e [IO a]",
          "source": "src/Simulation-Aivika-Internal-Parameter.html#runParameters",
          "type": "function"
        },
        "index": {
          "description": "Run the given number of parameters using the specified specs where each parameter is distinguished by its index parameterIndex",
          "hierarchy": "Simulation Aivika Parameter",
          "module": "Simulation.Aivika.Parameter",
          "name": "runParameters",
          "normalized": "Parameter a-\u003eSpecs-\u003eInt-\u003e[IO a]",
          "package": "aivika",
          "partial": "Parameters",
          "signature": "Parameter a-\u003eSpecs-\u003eInt-\u003e[IO a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Parameter.html#v:runParameters"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the number of simulations currently run.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Parameter",
          "name": "simulationCount",
          "package": "aivika",
          "signature": "Parameter Int",
          "source": "src/Simulation-Aivika-Internal-Parameter.html#simulationCount",
          "type": "function"
        },
        "index": {
          "description": "Return the number of simulations currently run",
          "hierarchy": "Simulation Aivika Parameter",
          "module": "Simulation.Aivika.Parameter",
          "name": "simulationCount",
          "package": "aivika",
          "partial": "Count",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Parameter.html#v:simulationCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the run index for the current simulation.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Parameter",
          "name": "simulationIndex",
          "package": "aivika",
          "signature": "Parameter Int",
          "source": "src/Simulation-Aivika-Internal-Parameter.html#simulationIndex",
          "type": "function"
        },
        "index": {
          "description": "Return the run index for the current simulation",
          "hierarchy": "Simulation Aivika Parameter",
          "module": "Simulation.Aivika.Parameter",
          "name": "simulationIndex",
          "package": "aivika",
          "partial": "Index",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Parameter.html#v:simulationIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the simulation specs.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Parameter",
          "name": "simulationSpecs",
          "package": "aivika",
          "signature": "Parameter Specs",
          "source": "src/Simulation-Aivika-Internal-Parameter.html#simulationSpecs",
          "type": "function"
        },
        "index": {
          "description": "Return the simulation specs",
          "hierarchy": "Simulation Aivika Parameter",
          "module": "Simulation.Aivika.Parameter",
          "name": "simulationSpecs",
          "package": "aivika",
          "partial": "Specs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Parameter.html#v:simulationSpecs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputation that returns the start simulation time.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Parameter",
          "name": "starttime",
          "package": "aivika",
          "signature": "Parameter Double",
          "source": "src/Simulation-Aivika-Internal-Parameter.html#starttime",
          "type": "function"
        },
        "index": {
          "description": "Computation that returns the start simulation time",
          "hierarchy": "Simulation Aivika Parameter",
          "module": "Simulation.Aivika.Parameter",
          "name": "starttime",
          "package": "aivika",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Parameter.html#v:starttime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputation that returns the final simulation time.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Parameter",
          "name": "stoptime",
          "package": "aivika",
          "signature": "Parameter Double",
          "source": "src/Simulation-Aivika-Internal-Parameter.html#stoptime",
          "type": "function"
        },
        "index": {
          "description": "Computation that returns the final simulation time",
          "hierarchy": "Simulation Aivika Parameter",
          "module": "Simulation.Aivika.Parameter",
          "name": "stoptime",
          "package": "aivika",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Parameter.html#v:stoptime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn a parameter which value is taken consequently from the specified table\n based on the run index of the current simulation starting from zero. After all\n values from the table are used, it takes again the first value of the table,\n then the second one and so on.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Parameter",
          "name": "tableParameter",
          "package": "aivika",
          "signature": "Array Int a -\u003e Parameter a",
          "source": "src/Simulation-Aivika-Internal-Parameter.html#tableParameter",
          "type": "function"
        },
        "index": {
          "description": "Return parameter which value is taken consequently from the specified table based on the run index of the current simulation starting from zero After all values from the table are used it takes again the first value of the table then the second one and so on",
          "hierarchy": "Simulation Aivika Parameter",
          "module": "Simulation.Aivika.Parameter",
          "name": "tableParameter",
          "normalized": "Array Int a-\u003eParameter a",
          "package": "aivika",
          "partial": "Parameter",
          "signature": "Array Int a-\u003eParameter a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Parameter.html#v:tableParameter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike the standard \u003ccode\u003e\u003ca\u003ethrow\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Parameter",
          "name": "throwParameter",
          "package": "aivika",
          "signature": "IOException -\u003e Parameter a",
          "source": "src/Simulation-Aivika-Internal-Parameter.html#throwParameter",
          "type": "function"
        },
        "index": {
          "description": "Like the standard throw function",
          "hierarchy": "Simulation Aivika Parameter",
          "module": "Simulation.Aivika.Parameter",
          "name": "throwParameter",
          "normalized": "IOException-\u003eParameter a",
          "package": "aivika",
          "partial": "Parameter",
          "signature": "IOException-\u003eParameter a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Parameter.html#v:throwParameter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTested with: GHC 7.6.3\n\u003c/p\u003e\u003cp\u003eAn imperative heap-based priority queue.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Simulation.Aivika.PriorityQueue",
          "name": "PriorityQueue",
          "package": "aivika",
          "source": "src/Simulation-Aivika-PriorityQueue.html",
          "type": "module"
        },
        "index": {
          "description": "Tested with GHC An imperative heap-based priority queue",
          "hierarchy": "Simulation Aivika PriorityQueue",
          "module": "Simulation.Aivika.PriorityQueue",
          "name": "PriorityQueue",
          "package": "aivika",
          "partial": "Priority Queue",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-PriorityQueue.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ePriorityQueue\u003c/a\u003e\u003c/code\u003e type represents an imperative heap-based \n priority queue.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.PriorityQueue",
          "name": "PriorityQueue",
          "package": "aivika",
          "source": "src/Simulation-Aivika-PriorityQueue.html#PriorityQueue",
          "type": "data"
        },
        "index": {
          "description": "The PriorityQueue type represents an imperative heap-based priority queue",
          "hierarchy": "Simulation Aivika PriorityQueue",
          "module": "Simulation.Aivika.PriorityQueue",
          "name": "PriorityQueue",
          "package": "aivika",
          "partial": "Priority Queue",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-PriorityQueue.html#t:PriorityQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDequeue the element with the minimal priority.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.PriorityQueue",
          "name": "dequeue",
          "package": "aivika",
          "signature": "PriorityQueue a -\u003e IO ()",
          "source": "src/Simulation-Aivika-PriorityQueue.html#dequeue",
          "type": "function"
        },
        "index": {
          "description": "Dequeue the element with the minimal priority",
          "hierarchy": "Simulation Aivika PriorityQueue",
          "module": "Simulation.Aivika.PriorityQueue",
          "name": "dequeue",
          "normalized": "PriorityQueue a-\u003eIO()",
          "package": "aivika",
          "signature": "PriorityQueue a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-PriorityQueue.html#v:dequeue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnqueue a new element with the specified priority.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.PriorityQueue",
          "name": "enqueue",
          "package": "aivika",
          "signature": "PriorityQueue a -\u003e Double -\u003e a -\u003e IO ()",
          "source": "src/Simulation-Aivika-PriorityQueue.html#enqueue",
          "type": "function"
        },
        "index": {
          "description": "Enqueue new element with the specified priority",
          "hierarchy": "Simulation Aivika PriorityQueue",
          "module": "Simulation.Aivika.PriorityQueue",
          "name": "enqueue",
          "normalized": "PriorityQueue a-\u003eDouble-\u003ea-\u003eIO()",
          "package": "aivika",
          "signature": "PriorityQueue a-\u003eDouble-\u003ea-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-PriorityQueue.html#v:enqueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new priority queue.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.PriorityQueue",
          "name": "newQueue",
          "package": "aivika",
          "signature": "IO (PriorityQueue a)",
          "source": "src/Simulation-Aivika-PriorityQueue.html#newQueue",
          "type": "function"
        },
        "index": {
          "description": "Create new priority queue",
          "hierarchy": "Simulation Aivika PriorityQueue",
          "module": "Simulation.Aivika.PriorityQueue",
          "name": "newQueue",
          "package": "aivika",
          "partial": "Queue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-PriorityQueue.html#v:newQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the number of elements in the priority queue.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.PriorityQueue",
          "name": "queueCount",
          "package": "aivika",
          "signature": "PriorityQueue a -\u003e IO Int",
          "source": "src/Simulation-Aivika-PriorityQueue.html#queueCount",
          "type": "function"
        },
        "index": {
          "description": "Return the number of elements in the priority queue",
          "hierarchy": "Simulation Aivika PriorityQueue",
          "module": "Simulation.Aivika.PriorityQueue",
          "name": "queueCount",
          "normalized": "PriorityQueue a-\u003eIO Int",
          "package": "aivika",
          "partial": "Count",
          "signature": "PriorityQueue a-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-PriorityQueue.html#v:queueCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the element with the minimal priority.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.PriorityQueue",
          "name": "queueFront",
          "package": "aivika",
          "signature": "PriorityQueue a -\u003e IO (Double, a)",
          "source": "src/Simulation-Aivika-PriorityQueue.html#queueFront",
          "type": "function"
        },
        "index": {
          "description": "Return the element with the minimal priority",
          "hierarchy": "Simulation Aivika PriorityQueue",
          "module": "Simulation.Aivika.PriorityQueue",
          "name": "queueFront",
          "normalized": "PriorityQueue a-\u003eIO(Double,a)",
          "package": "aivika",
          "partial": "Front",
          "signature": "PriorityQueue a-\u003eIO(Double,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-PriorityQueue.html#v:queueFront"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest whether the priority queue is empty.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.PriorityQueue",
          "name": "queueNull",
          "package": "aivika",
          "signature": "PriorityQueue a -\u003e IO Bool",
          "source": "src/Simulation-Aivika-PriorityQueue.html#queueNull",
          "type": "function"
        },
        "index": {
          "description": "Test whether the priority queue is empty",
          "hierarchy": "Simulation Aivika PriorityQueue",
          "module": "Simulation.Aivika.PriorityQueue",
          "name": "queueNull",
          "normalized": "PriorityQueue a-\u003eIO Bool",
          "package": "aivika",
          "partial": "Null",
          "signature": "PriorityQueue a-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-PriorityQueue.html#v:queueNull"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTested with: GHC 7.6.3\n\u003c/p\u003e\u003cp\u003eA value in the \u003ccode\u003e\u003ca\u003eProcess\u003c/a\u003e\u003c/code\u003e monad represents a discontinuous process that \n can suspend in any simulation time point and then resume later in the same \n or another time point. \n\u003c/p\u003e\u003cp\u003eThe process of this type can involve the \u003ccode\u003eEvent\u003c/code\u003e, \u003ccode\u003eDynamics\u003c/code\u003e and \u003ccode\u003eSimulation\u003c/code\u003e\n computations. Moreover, a value in the \u003ccode\u003eProcess\u003c/code\u003e monad can be run within\n the \u003ccode\u003eEvent\u003c/code\u003e computation.\n\u003c/p\u003e\u003cp\u003eA value of the \u003ccode\u003e\u003ca\u003eProcessId\u003c/a\u003e\u003c/code\u003e type is just an identifier of such a process.\n\u003c/p\u003e\u003cp\u003eThe characteristic property of the \u003ccode\u003eProcess\u003c/code\u003e type is function \u003ccode\u003e\u003ca\u003eholdProcess\u003c/a\u003e\u003c/code\u003e\n that suspends the current process for the specified time interval.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Simulation.Aivika.Process",
          "name": "Process",
          "package": "aivika",
          "source": "src/Simulation-Aivika-Process.html",
          "type": "module"
        },
        "index": {
          "description": "Tested with GHC value in the Process monad represents discontinuous process that can suspend in any simulation time point and then resume later in the same or another time point The process of this type can involve the Event Dynamics and Simulation computations Moreover value in the Process monad can be run within the Event computation value of the ProcessId type is just an identifier of such process The characteristic property of the Process type is function holdProcess that suspends the current process for the specified time interval",
          "hierarchy": "Simulation Aivika Process",
          "module": "Simulation.Aivika.Process",
          "name": "Process",
          "package": "aivika",
          "partial": "Process",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Process.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecifies a discontinuous process that can suspend at any time\n and then resume later.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Process",
          "name": "Process",
          "package": "aivika",
          "source": "src/Simulation-Aivika-Internal-Process.html#Process",
          "type": "data"
        },
        "index": {
          "description": "Specifies discontinuous process that can suspend at any time and then resume later",
          "hierarchy": "Simulation Aivika Process",
          "module": "Simulation.Aivika.Process",
          "name": "Process",
          "package": "aivika",
          "partial": "Process",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Process.html#t:Process"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents a process identifier.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Process",
          "name": "ProcessId",
          "package": "aivika",
          "source": "src/Simulation-Aivika-Internal-Process.html#ProcessId",
          "type": "data"
        },
        "index": {
          "description": "Represents process identifier",
          "hierarchy": "Simulation Aivika Process",
          "module": "Simulation.Aivika.Process",
          "name": "ProcessId",
          "package": "aivika",
          "partial": "Process Id",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Process.html#t:ProcessId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type class to lift the \u003ccode\u003e\u003ca\u003eProcess\u003c/a\u003e\u003c/code\u003e computation to other computations.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Process",
          "name": "ProcessLift",
          "package": "aivika",
          "source": "src/Simulation-Aivika-Internal-Process.html#ProcessLift",
          "type": "class"
        },
        "index": {
          "description": "type class to lift the Process computation to other computations",
          "hierarchy": "Simulation Aivika Process",
          "module": "Simulation.Aivika.Process",
          "name": "ProcessLift",
          "package": "aivika",
          "partial": "Process Lift",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Process.html#t:ProcessLift"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe process cancels itself.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Process",
          "name": "cancelProcess",
          "package": "aivika",
          "signature": "Process a",
          "source": "src/Simulation-Aivika-Internal-Process.html#cancelProcess",
          "type": "function"
        },
        "index": {
          "description": "The process cancels itself",
          "hierarchy": "Simulation Aivika Process",
          "module": "Simulation.Aivika.Process",
          "name": "cancelProcess",
          "package": "aivika",
          "partial": "Process",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Process.html#v:cancelProcess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCancel a process with the specified identifier, interrupting it if needed.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Process",
          "name": "cancelProcessWithId",
          "package": "aivika",
          "signature": "ProcessId -\u003e Event ()",
          "source": "src/Simulation-Aivika-Internal-Process.html#cancelProcessWithId",
          "type": "function"
        },
        "index": {
          "description": "Cancel process with the specified identifier interrupting it if needed",
          "hierarchy": "Simulation Aivika Process",
          "module": "Simulation.Aivika.Process",
          "name": "cancelProcessWithId",
          "normalized": "ProcessId-\u003eEvent()",
          "package": "aivika",
          "partial": "Process With Id",
          "signature": "ProcessId-\u003eEvent()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Process.html#v:cancelProcessWithId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eException handling within \u003ccode\u003e\u003ca\u003eProcess\u003c/a\u003e\u003c/code\u003e computations.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Process",
          "name": "catchProcess",
          "package": "aivika",
          "signature": "Process a -\u003e (IOException -\u003e Process a) -\u003e Process a",
          "source": "src/Simulation-Aivika-Internal-Process.html#catchProcess",
          "type": "function"
        },
        "index": {
          "description": "Exception handling within Process computations",
          "hierarchy": "Simulation Aivika Process",
          "module": "Simulation.Aivika.Process",
          "name": "catchProcess",
          "normalized": "Process a-\u003e(IOException-\u003eProcess a)-\u003eProcess a",
          "package": "aivika",
          "partial": "Process",
          "signature": "Process a-\u003e(IOException-\u003eProcess a)-\u003eProcess a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Process.html#v:catchProcess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnqueue the process that will be then started at the specified time\n from the event queue.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Process",
          "name": "enqueueProcess",
          "package": "aivika",
          "signature": "Double -\u003e Process () -\u003e Event ()",
          "source": "src/Simulation-Aivika-Internal-Process.html#enqueueProcess",
          "type": "function"
        },
        "index": {
          "description": "Enqueue the process that will be then started at the specified time from the event queue",
          "hierarchy": "Simulation Aivika Process",
          "module": "Simulation.Aivika.Process",
          "name": "enqueueProcess",
          "normalized": "Double-\u003eProcess()-\u003eEvent()",
          "package": "aivika",
          "partial": "Process",
          "signature": "Double-\u003eProcess()-\u003eEvent()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Process.html#v:enqueueProcess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnqueue the process that will be then started at the specified time\n from the event queue.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Process",
          "name": "enqueueProcessUsingId",
          "package": "aivika",
          "signature": "Double -\u003e ProcessId -\u003e Process () -\u003e Event ()",
          "source": "src/Simulation-Aivika-Internal-Process.html#enqueueProcessUsingId",
          "type": "function"
        },
        "index": {
          "description": "Enqueue the process that will be then started at the specified time from the event queue",
          "hierarchy": "Simulation Aivika Process",
          "module": "Simulation.Aivika.Process",
          "name": "enqueueProcessUsingId",
          "normalized": "Double-\u003eProcessId-\u003eProcess()-\u003eEvent()",
          "package": "aivika",
          "partial": "Process Using Id",
          "signature": "Double-\u003eProcessId-\u003eProcess()-\u003eEvent()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Process.html#v:enqueueProcessUsingId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA computation with finalization part.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Process",
          "name": "finallyProcess",
          "package": "aivika",
          "signature": "Process a -\u003e Process b -\u003e Process a",
          "source": "src/Simulation-Aivika-Internal-Process.html#finallyProcess",
          "type": "function"
        },
        "index": {
          "description": "computation with finalization part",
          "hierarchy": "Simulation Aivika Process",
          "module": "Simulation.Aivika.Process",
          "name": "finallyProcess",
          "normalized": "Process a-\u003eProcess b-\u003eProcess a",
          "package": "aivika",
          "partial": "Process",
          "signature": "Process a-\u003eProcess b-\u003eProcess a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Process.html#v:finallyProcess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHold the process for the specified time period.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Process",
          "name": "holdProcess",
          "package": "aivika",
          "signature": "Double -\u003e Process ()",
          "source": "src/Simulation-Aivika-Internal-Process.html#holdProcess",
          "type": "function"
        },
        "index": {
          "description": "Hold the process for the specified time period",
          "hierarchy": "Simulation Aivika Process",
          "module": "Simulation.Aivika.Process",
          "name": "holdProcess",
          "normalized": "Double-\u003eProcess()",
          "package": "aivika",
          "partial": "Process",
          "signature": "Double-\u003eProcess()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Process.html#v:holdProcess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInterrupt a process with the specified identifier if the process\n is held by computation \u003ccode\u003e\u003ca\u003eholdProcess\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Process",
          "name": "interruptProcess",
          "package": "aivika",
          "signature": "ProcessId -\u003e Event ()",
          "source": "src/Simulation-Aivika-Internal-Process.html#interruptProcess",
          "type": "function"
        },
        "index": {
          "description": "Interrupt process with the specified identifier if the process is held by computation holdProcess",
          "hierarchy": "Simulation Aivika Process",
          "module": "Simulation.Aivika.Process",
          "name": "interruptProcess",
          "normalized": "ProcessId-\u003eEvent()",
          "package": "aivika",
          "partial": "Process",
          "signature": "ProcessId-\u003eEvent()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Process.html#v:interruptProcess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift the specified \u003ccode\u003e\u003ca\u003eProcess\u003c/a\u003e\u003c/code\u003e computation to another computation.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Process",
          "name": "liftProcess",
          "package": "aivika",
          "signature": "Process a -\u003e m a",
          "source": "src/Simulation-Aivika-Internal-Process.html#liftProcess",
          "type": "method"
        },
        "index": {
          "description": "Lift the specified Process computation to another computation",
          "hierarchy": "Simulation Aivika Process",
          "module": "Simulation.Aivika.Process",
          "name": "liftProcess",
          "normalized": "Process a-\u003eb a",
          "package": "aivika",
          "partial": "Process",
          "signature": "Process a-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Process.html#v:liftProcess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMemoize the process so that it would always return the same value\n within the simulation run.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Process",
          "name": "memoProcess",
          "package": "aivika",
          "signature": "Process a -\u003e Simulation (Process a)",
          "source": "src/Simulation-Aivika-Internal-Process.html#memoProcess",
          "type": "function"
        },
        "index": {
          "description": "Memoize the process so that it would always return the same value within the simulation run",
          "hierarchy": "Simulation Aivika Process",
          "module": "Simulation.Aivika.Process",
          "name": "memoProcess",
          "normalized": "Process a-\u003eSimulation(Process a)",
          "package": "aivika",
          "partial": "Process",
          "signature": "Process a-\u003eSimulation(Process a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Process.html#v:memoProcess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new process identifier.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Process",
          "name": "newProcessId",
          "package": "aivika",
          "signature": "Simulation ProcessId",
          "source": "src/Simulation-Aivika-Internal-Process.html#newProcessId",
          "type": "function"
        },
        "index": {
          "description": "Create new process identifier",
          "hierarchy": "Simulation Aivika Process",
          "module": "Simulation.Aivika.Process",
          "name": "newProcessId",
          "package": "aivika",
          "partial": "Process Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Process.html#v:newProcessId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePassivate the process.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Process",
          "name": "passivateProcess",
          "package": "aivika",
          "signature": "Process ()",
          "source": "src/Simulation-Aivika-Internal-Process.html#passivateProcess",
          "type": "function"
        },
        "index": {
          "description": "Passivate the process",
          "hierarchy": "Simulation Aivika Process",
          "module": "Simulation.Aivika.Process",
          "name": "passivateProcess",
          "normalized": "Process()",
          "package": "aivika",
          "partial": "Process",
          "signature": "Process()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Process.html#v:passivateProcess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAwait the signal.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Process",
          "name": "processAwait",
          "package": "aivika",
          "signature": "Signal a -\u003e Process a",
          "source": "src/Simulation-Aivika-Internal-Process.html#processAwait",
          "type": "function"
        },
        "index": {
          "description": "Await the signal",
          "hierarchy": "Simulation Aivika Process",
          "module": "Simulation.Aivika.Process",
          "name": "processAwait",
          "normalized": "Signal a-\u003eProcess a",
          "package": "aivika",
          "partial": "Await",
          "signature": "Signal a-\u003eProcess a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Process.html#v:processAwait"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest whether the process with the specified identifier was cancelled.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Process",
          "name": "processCancelled",
          "package": "aivika",
          "signature": "ProcessId -\u003e Event Bool",
          "source": "src/Simulation-Aivika-Internal-Process.html#processCancelled",
          "type": "function"
        },
        "index": {
          "description": "Test whether the process with the specified identifier was cancelled",
          "hierarchy": "Simulation Aivika Process",
          "module": "Simulation.Aivika.Process",
          "name": "processCancelled",
          "normalized": "ProcessId-\u003eEvent Bool",
          "package": "aivika",
          "partial": "Cancelled",
          "signature": "ProcessId-\u003eEvent Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Process.html#v:processCancelled"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the current process identifier.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Process",
          "name": "processId",
          "package": "aivika",
          "signature": "Process ProcessId",
          "source": "src/Simulation-Aivika-Internal-Process.html#processId",
          "type": "function"
        },
        "index": {
          "description": "Return the current process identifier",
          "hierarchy": "Simulation Aivika Process",
          "module": "Simulation.Aivika.Process",
          "name": "processId",
          "package": "aivika",
          "partial": "Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Process.html#v:processId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest whether the process with the specified identifier was interrupted.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Process",
          "name": "processInterrupted",
          "package": "aivika",
          "signature": "ProcessId -\u003e Event Bool",
          "source": "src/Simulation-Aivika-Internal-Process.html#processInterrupted",
          "type": "function"
        },
        "index": {
          "description": "Test whether the process with the specified identifier was interrupted",
          "hierarchy": "Simulation Aivika Process",
          "module": "Simulation.Aivika.Process",
          "name": "processInterrupted",
          "normalized": "ProcessId-\u003eEvent Bool",
          "package": "aivika",
          "partial": "Interrupted",
          "signature": "ProcessId-\u003eEvent Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Process.html#v:processInterrupted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute the specified computations in parallel within\n the current computation and return their results. The cancellation\n of any of the nested computations affects the current computation.\n The exception raised in any of the nested computations is propogated\n to the current computation as well.\n\u003c/p\u003e\u003cp\u003eHere word \u003ccode\u003eparallel\u003c/code\u003e literally means that the computations are\n actually executed on a single operating system thread but\n they are processed simultaneously by the event queue.\n\u003c/p\u003e\u003cp\u003eNew \u003ccode\u003e\u003ca\u003eProcessId\u003c/a\u003e\u003c/code\u003e identifiers will be assigned to the started processes.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Process",
          "name": "processParallel",
          "package": "aivika",
          "signature": "[Process a] -\u003e Process [a]",
          "source": "src/Simulation-Aivika-Internal-Process.html#processParallel",
          "type": "function"
        },
        "index": {
          "description": "Execute the specified computations in parallel within the current computation and return their results The cancellation of any of the nested computations affects the current computation The exception raised in any of the nested computations is propogated to the current computation as well Here word parallel literally means that the computations are actually executed on single operating system thread but they are processed simultaneously by the event queue New ProcessId identifiers will be assigned to the started processes",
          "hierarchy": "Simulation Aivika Process",
          "module": "Simulation.Aivika.Process",
          "name": "processParallel",
          "normalized": "[Process a]-\u003eProcess[a]",
          "package": "aivika",
          "partial": "Parallel",
          "signature": "[Process a]-\u003eProcess[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Process.html#v:processParallel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eprocessParallel\u003c/a\u003e\u003c/code\u003e but allows specifying the process identifiers.\n It will be more efficient than as you would specify the process identifiers\n with help of the \u003ccode\u003e\u003ca\u003eprocessUsingId\u003c/a\u003e\u003c/code\u003e combinator and then would call \u003ccode\u003e\u003ca\u003eprocessParallel\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Process",
          "name": "processParallelUsingIds",
          "package": "aivika",
          "signature": "[(ProcessId, Process a)] -\u003e Process [a]",
          "source": "src/Simulation-Aivika-Internal-Process.html#processParallelUsingIds",
          "type": "function"
        },
        "index": {
          "description": "Like processParallel but allows specifying the process identifiers It will be more efficient than as you would specify the process identifiers with help of the processUsingId combinator and then would call processParallel",
          "hierarchy": "Simulation Aivika Process",
          "module": "Simulation.Aivika.Process",
          "name": "processParallelUsingIds",
          "normalized": "[(ProcessId,Process a)]-\u003eProcess[a]",
          "package": "aivika",
          "partial": "Parallel Using Ids",
          "signature": "[(ProcessId,Process a)]-\u003eProcess[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Process.html#v:processParallelUsingIds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eprocessParallelUsingIds\u003c/a\u003e\u003c/code\u003e but ignores the result.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Process",
          "name": "processParallelUsingIds_",
          "package": "aivika",
          "signature": "[(ProcessId, Process a)] -\u003e Process ()",
          "source": "src/Simulation-Aivika-Internal-Process.html#processParallelUsingIds_",
          "type": "function"
        },
        "index": {
          "description": "Like processParallelUsingIds but ignores the result",
          "hierarchy": "Simulation Aivika Process",
          "module": "Simulation.Aivika.Process",
          "name": "processParallelUsingIds_",
          "normalized": "[(ProcessId,Process a)]-\u003eProcess()",
          "package": "aivika",
          "partial": "Parallel Using Ids",
          "signature": "[(ProcessId,Process a)]-\u003eProcess()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Process.html#v:processParallelUsingIds_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eprocessParallel\u003c/a\u003e\u003c/code\u003e but ignores the result.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Process",
          "name": "processParallel_",
          "package": "aivika",
          "signature": "[Process a] -\u003e Process ()",
          "source": "src/Simulation-Aivika-Internal-Process.html#processParallel_",
          "type": "function"
        },
        "index": {
          "description": "Like processParallel but ignores the result",
          "hierarchy": "Simulation Aivika Process",
          "module": "Simulation.Aivika.Process",
          "name": "processParallel_",
          "normalized": "[Process a]-\u003eProcess()",
          "package": "aivika",
          "partial": "Parallel",
          "signature": "[Process a]-\u003eProcess()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Process.html#v:processParallel_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest whether the process with the specified identifier is passivated.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Process",
          "name": "processPassive",
          "package": "aivika",
          "signature": "ProcessId -\u003e Event Bool",
          "source": "src/Simulation-Aivika-Internal-Process.html#processPassive",
          "type": "function"
        },
        "index": {
          "description": "Test whether the process with the specified identifier is passivated",
          "hierarchy": "Simulation Aivika Process",
          "module": "Simulation.Aivika.Process",
          "name": "processPassive",
          "normalized": "ProcessId-\u003eEvent Bool",
          "package": "aivika",
          "partial": "Passive",
          "signature": "ProcessId-\u003eEvent Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Process.html#v:processPassive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAllow calling the process with the specified identifier.\n It creates a nested process when canceling any of two, or raising an\n \u003ccode\u003eIO\u003c/code\u003e exception in any of the both, affects the \u003ccode\u003e\u003ca\u003eProcess\u003c/a\u003e\u003c/code\u003e computation.\n\u003c/p\u003e\u003cp\u003eAt the same time, the interruption has no such effect as it requires\n explicit specifying the \u003ccode\u003e\u003ca\u003eProcessId\u003c/a\u003e\u003c/code\u003e identifier of the nested process itself,\n that is the nested process cannot be interrupted using only the parent\n process identifier.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Process",
          "name": "processUsingId",
          "package": "aivika",
          "signature": "ProcessId -\u003e Process a -\u003e Process a",
          "source": "src/Simulation-Aivika-Internal-Process.html#processUsingId",
          "type": "function"
        },
        "index": {
          "description": "Allow calling the process with the specified identifier It creates nested process when canceling any of two or raising an IO exception in any of the both affects the Process computation At the same time the interruption has no such effect as it requires explicit specifying the ProcessId identifier of the nested process itself that is the nested process cannot be interrupted using only the parent process identifier",
          "hierarchy": "Simulation Aivika Process",
          "module": "Simulation.Aivika.Process",
          "name": "processUsingId",
          "normalized": "ProcessId-\u003eProcess a-\u003eProcess a",
          "package": "aivika",
          "partial": "Using Id",
          "signature": "ProcessId-\u003eProcess a-\u003eProcess a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Process.html#v:processUsingId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReactivate a process with the specified identifier.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Process",
          "name": "reactivateProcess",
          "package": "aivika",
          "signature": "ProcessId -\u003e Event ()",
          "source": "src/Simulation-Aivika-Internal-Process.html#reactivateProcess",
          "type": "function"
        },
        "index": {
          "description": "Reactivate process with the specified identifier",
          "hierarchy": "Simulation Aivika Process",
          "module": "Simulation.Aivika.Process",
          "name": "reactivateProcess",
          "normalized": "ProcessId-\u003eEvent()",
          "package": "aivika",
          "partial": "Process",
          "signature": "ProcessId-\u003eEvent()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Process.html#v:reactivateProcess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun immediately the process. A new \u003ccode\u003e\u003ca\u003eProcessId\u003c/a\u003e\u003c/code\u003e identifier will be\n assigned to the process.\n\u003c/p\u003e\u003cp\u003eTo run the process at the specified time, you can use\n the \u003ccode\u003e\u003ca\u003eenqueueProcess\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Process",
          "name": "runProcess",
          "package": "aivika",
          "signature": "Process () -\u003e Event ()",
          "source": "src/Simulation-Aivika-Internal-Process.html#runProcess",
          "type": "function"
        },
        "index": {
          "description": "Run immediately the process new ProcessId identifier will be assigned to the process To run the process at the specified time you can use the enqueueProcess function",
          "hierarchy": "Simulation Aivika Process",
          "module": "Simulation.Aivika.Process",
          "name": "runProcess",
          "normalized": "Process()-\u003eEvent()",
          "package": "aivika",
          "partial": "Process",
          "signature": "Process()-\u003eEvent()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Process.html#v:runProcess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun the process in the start time immediately involving all pending\n \u003ccode\u003e\u003ca\u003eCurrentEvents\u003c/a\u003e\u003c/code\u003e in the computation too.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Process",
          "name": "runProcessInStartTime",
          "package": "aivika",
          "signature": "Process () -\u003e Simulation ()",
          "source": "src/Simulation-Aivika-Internal-Process.html#runProcessInStartTime",
          "type": "function"
        },
        "index": {
          "description": "Run the process in the start time immediately involving all pending CurrentEvents in the computation too",
          "hierarchy": "Simulation Aivika Process",
          "module": "Simulation.Aivika.Process",
          "name": "runProcessInStartTime",
          "normalized": "Process()-\u003eSimulation()",
          "package": "aivika",
          "partial": "Process In Start Time",
          "signature": "Process()-\u003eSimulation()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Process.html#v:runProcessInStartTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun the process in the start time immediately using the specified identifier\n and involving all pending \u003ccode\u003e\u003ca\u003eCurrentEvents\u003c/a\u003e\u003c/code\u003e in the computation too.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Process",
          "name": "runProcessInStartTimeUsingId",
          "package": "aivika",
          "signature": "ProcessId -\u003e Process () -\u003e Simulation ()",
          "source": "src/Simulation-Aivika-Internal-Process.html#runProcessInStartTimeUsingId",
          "type": "function"
        },
        "index": {
          "description": "Run the process in the start time immediately using the specified identifier and involving all pending CurrentEvents in the computation too",
          "hierarchy": "Simulation Aivika Process",
          "module": "Simulation.Aivika.Process",
          "name": "runProcessInStartTimeUsingId",
          "normalized": "ProcessId-\u003eProcess()-\u003eSimulation()",
          "package": "aivika",
          "partial": "Process In Start Time Using Id",
          "signature": "ProcessId-\u003eProcess()-\u003eSimulation()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Process.html#v:runProcessInStartTimeUsingId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun the process in the final simulation time immediately involving all\n pending \u003ccode\u003e\u003ca\u003eCurrentEvents\u003c/a\u003e\u003c/code\u003e in the computation too.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Process",
          "name": "runProcessInStopTime",
          "package": "aivika",
          "signature": "Process () -\u003e Simulation ()",
          "source": "src/Simulation-Aivika-Internal-Process.html#runProcessInStopTime",
          "type": "function"
        },
        "index": {
          "description": "Run the process in the final simulation time immediately involving all pending CurrentEvents in the computation too",
          "hierarchy": "Simulation Aivika Process",
          "module": "Simulation.Aivika.Process",
          "name": "runProcessInStopTime",
          "normalized": "Process()-\u003eSimulation()",
          "package": "aivika",
          "partial": "Process In Stop Time",
          "signature": "Process()-\u003eSimulation()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Process.html#v:runProcessInStopTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun the process in the final simulation time immediately using \n the specified identifier and involving all pending \u003ccode\u003e\u003ca\u003eCurrentEvents\u003c/a\u003e\u003c/code\u003e\n in the computation too.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Process",
          "name": "runProcessInStopTimeUsingId",
          "package": "aivika",
          "signature": "ProcessId -\u003e Process () -\u003e Simulation ()",
          "source": "src/Simulation-Aivika-Internal-Process.html#runProcessInStopTimeUsingId",
          "type": "function"
        },
        "index": {
          "description": "Run the process in the final simulation time immediately using the specified identifier and involving all pending CurrentEvents in the computation too",
          "hierarchy": "Simulation Aivika Process",
          "module": "Simulation.Aivika.Process",
          "name": "runProcessInStopTimeUsingId",
          "normalized": "ProcessId-\u003eProcess()-\u003eSimulation()",
          "package": "aivika",
          "partial": "Process In Stop Time Using Id",
          "signature": "ProcessId-\u003eProcess()-\u003eSimulation()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Process.html#v:runProcessInStopTimeUsingId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun immediately the process with the specified identifier.\n It will be more efficient than as you would specify the process identifier\n with help of the \u003ccode\u003e\u003ca\u003eprocessUsingId\u003c/a\u003e\u003c/code\u003e combinator and then would call \u003ccode\u003e\u003ca\u003erunProcess\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eTo run the process at the specified time, you can use\n the \u003ccode\u003e\u003ca\u003eenqueueProcessUsingId\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Process",
          "name": "runProcessUsingId",
          "package": "aivika",
          "signature": "ProcessId -\u003e Process () -\u003e Event ()",
          "source": "src/Simulation-Aivika-Internal-Process.html#runProcessUsingId",
          "type": "function"
        },
        "index": {
          "description": "Run immediately the process with the specified identifier It will be more efficient than as you would specify the process identifier with help of the processUsingId combinator and then would call runProcess To run the process at the specified time you can use the enqueueProcessUsingId function",
          "hierarchy": "Simulation Aivika Process",
          "module": "Simulation.Aivika.Process",
          "name": "runProcessUsingId",
          "normalized": "ProcessId-\u003eProcess()-\u003eEvent()",
          "package": "aivika",
          "partial": "Process Using Id",
          "signature": "ProcessId-\u003eProcess()-\u003eEvent()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Process.html#v:runProcessUsingId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpawn the child process specifying how the child and parent processes\n should be cancelled in case of need.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Process",
          "name": "spawnProcess",
          "package": "aivika",
          "signature": "ContCancellation -\u003e Process () -\u003e Process ()",
          "source": "src/Simulation-Aivika-Internal-Process.html#spawnProcess",
          "type": "function"
        },
        "index": {
          "description": "Spawn the child process specifying how the child and parent processes should be cancelled in case of need",
          "hierarchy": "Simulation Aivika Process",
          "module": "Simulation.Aivika.Process",
          "name": "spawnProcess",
          "normalized": "ContCancellation-\u003eProcess()-\u003eProcess()",
          "package": "aivika",
          "partial": "Process",
          "signature": "ContCancellation-\u003eProcess()-\u003eProcess()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Process.html#v:spawnProcess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpawn the child process specifying how the child and parent processes\n should be cancelled in case of need.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Process",
          "name": "spawnProcessUsingId",
          "package": "aivika",
          "signature": "ContCancellation -\u003e ProcessId -\u003e Process () -\u003e Process ()",
          "source": "src/Simulation-Aivika-Internal-Process.html#spawnProcessUsingId",
          "type": "function"
        },
        "index": {
          "description": "Spawn the child process specifying how the child and parent processes should be cancelled in case of need",
          "hierarchy": "Simulation Aivika Process",
          "module": "Simulation.Aivika.Process",
          "name": "spawnProcessUsingId",
          "normalized": "ContCancellation-\u003eProcessId-\u003eProcess()-\u003eProcess()",
          "package": "aivika",
          "partial": "Process Using Id",
          "signature": "ContCancellation-\u003eProcessId-\u003eProcess()-\u003eProcess()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Process.html#v:spawnProcessUsingId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThrow the exception with the further exception handling.\n By some reasons, the standard \u003ccode\u003e\u003ca\u003ethrow\u003c/a\u003e\u003c/code\u003e function per se is not handled \n properly within \u003ccode\u003e\u003ca\u003eProcess\u003c/a\u003e\u003c/code\u003e computations, although it will be still \n handled if it will be hidden under the \u003ccode\u003e\u003ca\u003eliftIO\u003c/a\u003e\u003c/code\u003e function. The problem \n arises namely with the \u003ccode\u003ethrow\u003c/code\u003e function, not \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e computations.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Process",
          "name": "throwProcess",
          "package": "aivika",
          "signature": "IOException -\u003e Process a",
          "source": "src/Simulation-Aivika-Internal-Process.html#throwProcess",
          "type": "function"
        },
        "index": {
          "description": "Throw the exception with the further exception handling By some reasons the standard throw function per se is not handled properly within Process computations although it will be still handled if it will be hidden under the liftIO function The problem arises namely with the throw function not IO computations",
          "hierarchy": "Simulation Aivika Process",
          "module": "Simulation.Aivika.Process",
          "name": "throwProcess",
          "normalized": "IOException-\u003eProcess a",
          "package": "aivika",
          "partial": "Process",
          "signature": "IOException-\u003eProcess a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Process.html#v:throwProcess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTry to run the child process within the specified timeout.\n If the process will finish successfully within this time interval then\n the result wrapped in \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e will be returned; otherwise, the child process\n will be cancelled and \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e will be returned.\n\u003c/p\u003e\u003cp\u003eIf an exception is raised in the child process then it is propagated to\n the parent computation as well.\n\u003c/p\u003e\u003cp\u003eA cancellation of the child process doesn't lead to cancelling the parent process.\n Then \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e is returned within the computation.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Process",
          "name": "timeoutProcess",
          "package": "aivika",
          "signature": "Double -\u003e Process a -\u003e Process (Maybe a)",
          "source": "src/Simulation-Aivika-Internal-Process.html#timeoutProcess",
          "type": "function"
        },
        "index": {
          "description": "Try to run the child process within the specified timeout If the process will finish successfully within this time interval then the result wrapped in Just will be returned otherwise the child process will be cancelled and Nothing will be returned If an exception is raised in the child process then it is propagated to the parent computation as well cancellation of the child process doesn lead to cancelling the parent process Then Nothing is returned within the computation",
          "hierarchy": "Simulation Aivika Process",
          "module": "Simulation.Aivika.Process",
          "name": "timeoutProcess",
          "normalized": "Double-\u003eProcess a-\u003eProcess(Maybe a)",
          "package": "aivika",
          "partial": "Process",
          "signature": "Double-\u003eProcess a-\u003eProcess(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Process.html#v:timeoutProcess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTry to run the child process with the given identifier within the specified timeout.\n If the process will finish successfully within this time interval then\n the result wrapped in \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e will be returned; otherwise, the child process\n will be cancelled and \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e will be returned.\n\u003c/p\u003e\u003cp\u003eIf an exception is raised in the child process then it is propagated to\n the parent computation as well.\n\u003c/p\u003e\u003cp\u003eA cancellation of the child process doesn't lead to cancelling the parent process.\n Then \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e is returned within the computation.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Process",
          "name": "timeoutProcessUsingId",
          "package": "aivika",
          "signature": "Double -\u003e ProcessId -\u003e Process a -\u003e Process (Maybe a)",
          "source": "src/Simulation-Aivika-Internal-Process.html#timeoutProcessUsingId",
          "type": "function"
        },
        "index": {
          "description": "Try to run the child process with the given identifier within the specified timeout If the process will finish successfully within this time interval then the result wrapped in Just will be returned otherwise the child process will be cancelled and Nothing will be returned If an exception is raised in the child process then it is propagated to the parent computation as well cancellation of the child process doesn lead to cancelling the parent process Then Nothing is returned within the computation",
          "hierarchy": "Simulation Aivika Process",
          "module": "Simulation.Aivika.Process",
          "name": "timeoutProcessUsingId",
          "normalized": "Double-\u003eProcessId-\u003eProcess a-\u003eProcess(Maybe a)",
          "package": "aivika",
          "partial": "Process Using Id",
          "signature": "Double-\u003eProcessId-\u003eProcess a-\u003eProcess(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Process.html#v:timeoutProcessUsingId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnzip the process using memoization so that the both returned\n processes could be applied independently, although they will refer\n to the same pair of values.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Process",
          "name": "unzipProcess",
          "package": "aivika",
          "signature": "Process (a, b) -\u003e Simulation (Process a, Process b)",
          "source": "src/Simulation-Aivika-Internal-Process.html#unzipProcess",
          "type": "function"
        },
        "index": {
          "description": "Unzip the process using memoization so that the both returned processes could be applied independently although they will refer to the same pair of values",
          "hierarchy": "Simulation Aivika Process",
          "module": "Simulation.Aivika.Process",
          "name": "unzipProcess",
          "normalized": "Process(a,b)-\u003eSimulation(Process a,Process b)",
          "package": "aivika",
          "partial": "Process",
          "signature": "Process(a,b)-\u003eSimulation(Process a,Process b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Process.html#v:unzipProcess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eZip three parallel processes waiting for their results.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Process",
          "name": "zip3ProcessParallel",
          "package": "aivika",
          "signature": "Process a -\u003e Process b -\u003e Process c -\u003e Process (a, b, c)",
          "source": "src/Simulation-Aivika-Internal-Process.html#zip3ProcessParallel",
          "type": "function"
        },
        "index": {
          "description": "Zip three parallel processes waiting for their results",
          "hierarchy": "Simulation Aivika Process",
          "module": "Simulation.Aivika.Process",
          "name": "zip3ProcessParallel",
          "normalized": "Process a-\u003eProcess b-\u003eProcess c-\u003eProcess(a,b,c)",
          "package": "aivika",
          "partial": "Process Parallel",
          "signature": "Process a-\u003eProcess b-\u003eProcess c-\u003eProcess(a,b,c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Process.html#v:zip3ProcessParallel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eZip two parallel processes waiting for the both.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Process",
          "name": "zipProcessParallel",
          "package": "aivika",
          "signature": "Process a -\u003e Process b -\u003e Process (a, b)",
          "source": "src/Simulation-Aivika-Internal-Process.html#zipProcessParallel",
          "type": "function"
        },
        "index": {
          "description": "Zip two parallel processes waiting for the both",
          "hierarchy": "Simulation Aivika Process",
          "module": "Simulation.Aivika.Process",
          "name": "zipProcessParallel",
          "normalized": "Process a-\u003eProcess b-\u003eProcess(a,b)",
          "package": "aivika",
          "partial": "Process Parallel",
          "signature": "Process a-\u003eProcess b-\u003eProcess(a,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Process.html#v:zipProcessParallel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTested with: GHC 7.6.3\n\u003c/p\u003e\u003cp\u003eThe module defines the Round-Robbin processor.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Simulation.Aivika.Processor.RoundRobbin",
          "name": "RoundRobbin",
          "package": "aivika",
          "source": "src/Simulation-Aivika-Processor-RoundRobbin.html",
          "type": "module"
        },
        "index": {
          "description": "Tested with GHC The module defines the Round-Robbin processor",
          "hierarchy": "Simulation Aivika Processor RoundRobbin",
          "module": "Simulation.Aivika.Processor.RoundRobbin",
          "name": "RoundRobbin",
          "package": "aivika",
          "partial": "Round Robbin",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Processor-RoundRobbin.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents the Round-Robbin processor that tries to perform the task within\n the specified timeout. If the task times out, then it is canceled and returned\n to the processor again; otherwise, the successful result is redirected to output.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Processor.RoundRobbin",
          "name": "roundRobbinProcessor",
          "package": "aivika",
          "signature": "Processor (Process Double, Process a) a",
          "source": "src/Simulation-Aivika-Processor-RoundRobbin.html#roundRobbinProcessor",
          "type": "function"
        },
        "index": {
          "description": "Represents the Round-Robbin processor that tries to perform the task within the specified timeout If the task times out then it is canceled and returned to the processor again otherwise the successful result is redirected to output",
          "hierarchy": "Simulation Aivika Processor RoundRobbin",
          "module": "Simulation.Aivika.Processor.RoundRobbin",
          "name": "roundRobbinProcessor",
          "normalized": "Processor(Process Double,Process a)a",
          "package": "aivika",
          "partial": "Robbin Processor",
          "signature": "Processor(Process Double,Process a)a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Processor-RoundRobbin.html#v:roundRobbinProcessor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eroundRobbinProcessor\u003c/a\u003e\u003c/code\u003e but allows specifying the process identifiers which\n must be unique for every new attemp to perform the task even if the task is the same.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Processor.RoundRobbin",
          "name": "roundRobbinProcessorUsingIds",
          "package": "aivika",
          "signature": "Processor (Process (Double, ProcessId), Process a) a",
          "source": "src/Simulation-Aivika-Processor-RoundRobbin.html#roundRobbinProcessorUsingIds",
          "type": "function"
        },
        "index": {
          "description": "Like roundRobbinProcessor but allows specifying the process identifiers which must be unique for every new attemp to perform the task even if the task is the same",
          "hierarchy": "Simulation Aivika Processor RoundRobbin",
          "module": "Simulation.Aivika.Processor.RoundRobbin",
          "name": "roundRobbinProcessorUsingIds",
          "normalized": "Processor(Process(Double,ProcessId),Process a)a",
          "package": "aivika",
          "partial": "Robbin Processor Using Ids",
          "signature": "Processor(Process(Double,ProcessId),Process a)a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Processor-RoundRobbin.html#v:roundRobbinProcessorUsingIds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTested with: GHC 7.6.3\n\u003c/p\u003e\u003cp\u003eThe processor of simulation data.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Simulation.Aivika.Processor",
          "name": "Processor",
          "package": "aivika",
          "source": "src/Simulation-Aivika-Processor.html",
          "type": "module"
        },
        "index": {
          "description": "Tested with GHC The processor of simulation data",
          "hierarchy": "Simulation Aivika Processor",
          "module": "Simulation.Aivika.Processor",
          "name": "Processor",
          "package": "aivika",
          "partial": "Processor",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Processor.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents a processor of simulation data.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Processor",
          "name": "Processor",
          "package": "aivika",
          "source": "src/Simulation-Aivika-Processor.html#Processor",
          "type": "newtype"
        },
        "index": {
          "description": "Represents processor of simulation data",
          "hierarchy": "Simulation Aivika Processor",
          "module": "Simulation.Aivika.Processor",
          "name": "Processor",
          "package": "aivika",
          "partial": "Processor",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Processor.html#t:Processor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Simulation.Aivika.Processor",
          "name": "Processor",
          "package": "aivika",
          "signature": "Processor",
          "source": "src/Simulation-Aivika-Processor.html#Processor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Simulation Aivika Processor",
          "module": "Simulation.Aivika.Processor",
          "name": "Processor",
          "package": "aivika",
          "partial": "Processor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Processor.html#v:Processor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a buffer processor, where the process from the first argument\n consumes the input stream but the stream passed in as the second argument\n and produced usually by some other process is returned as an output.\n This kind of processor is very useful for modeling the queues.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Processor",
          "name": "bufferProcessor",
          "package": "aivika",
          "signature": "(Stream a -\u003e Process ())-\u003e Stream b-\u003e Processor a b",
          "type": "function"
        },
        "index": {
          "description": "Create buffer processor where the process from the first argument consumes the input stream but the stream passed in as the second argument and produced usually by some other process is returned as an output This kind of processor is very useful for modeling the queues",
          "hierarchy": "Simulation Aivika Processor",
          "module": "Simulation.Aivika.Processor",
          "name": "bufferProcessor",
          "normalized": "(Stream a-\u003eProcess())-\u003eStream b-\u003eProcessor a b",
          "package": "aivika",
          "partial": "Processor",
          "signature": "(Stream a-\u003eProcess())-\u003eStream b-\u003eProcessor a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Processor.html#v:bufferProcessor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ebufferProcessor\u003c/a\u003e\u003c/code\u003e but allows creating a loop when some items\n can be processed repeatedly. It is very useful for modeling the processors \n with queues and loop-backs.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Processor",
          "name": "bufferProcessorLoop",
          "package": "aivika",
          "signature": "(Stream a -\u003e Stream c -\u003e Process ())-\u003e Stream d-\u003e Processor d (Either e b)-\u003e Processor e c-\u003e Processor a b",
          "type": "function"
        },
        "index": {
          "description": "Like bufferProcessor but allows creating loop when some items can be processed repeatedly It is very useful for modeling the processors with queues and loop-backs",
          "hierarchy": "Simulation Aivika Processor",
          "module": "Simulation.Aivika.Processor",
          "name": "bufferProcessorLoop",
          "normalized": "(Stream a-\u003eStream b-\u003eProcess())-\u003eStream c-\u003eProcessor c(Either d e)-\u003eProcessor d b-\u003eProcessor a e",
          "package": "aivika",
          "partial": "Processor Loop",
          "signature": "(Stream a-\u003eStream c-\u003eProcess())-\u003eStream d-\u003eProcessor d(Either e b)-\u003eProcessor e c-\u003eProcessor a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Processor.html#v:bufferProcessorLoop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is a prefetch processor that requests for one more data item from \n the input in advance while the latest item is not yet fully processed in \n the chain of streams, usually by other processors.\n\u003c/p\u003e\u003cp\u003eYou can think of this as the prefetched processor could place its latest \n data item in some temporary space for later use, which is very useful \n for modeling a sequence of separate and independent work places.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Processor",
          "name": "prefetchProcessor",
          "package": "aivika",
          "signature": "Processor a a",
          "source": "src/Simulation-Aivika-Processor.html#prefetchProcessor",
          "type": "function"
        },
        "index": {
          "description": "This is prefetch processor that requests for one more data item from the input in advance while the latest item is not yet fully processed in the chain of streams usually by other processors You can think of this as the prefetched processor could place its latest data item in some temporary space for later use which is very useful for modeling sequence of separate and independent work places",
          "hierarchy": "Simulation Aivika Processor",
          "module": "Simulation.Aivika.Processor",
          "name": "prefetchProcessor",
          "package": "aivika",
          "partial": "Processor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Processor.html#v:prefetchProcessor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLaunches the processors in parallel consuming the same input stream and producing\n a combined output stream. This version applies the \u003ccode\u003e\u003ca\u003eFCFS\u003c/a\u003e\u003c/code\u003e strategy both for input\n and output, which suits the most part of uses cases.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Processor",
          "name": "processorParallel",
          "package": "aivika",
          "signature": "[Processor a b] -\u003e Processor a b",
          "source": "src/Simulation-Aivika-Processor.html#processorParallel",
          "type": "function"
        },
        "index": {
          "description": "Launches the processors in parallel consuming the same input stream and producing combined output stream This version applies the FCFS strategy both for input and output which suits the most part of uses cases",
          "hierarchy": "Simulation Aivika Processor",
          "module": "Simulation.Aivika.Processor",
          "name": "processorParallel",
          "normalized": "[Processor a b]-\u003eProcessor a b",
          "package": "aivika",
          "partial": "Parallel",
          "signature": "[Processor a b]-\u003eProcessor a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Processor.html#v:processorParallel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLaunches the specified processors in parallel using priorities for consuming\n the input and combining the output.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Processor",
          "name": "processorPrioritisingInputOutputParallel",
          "package": "aivika",
          "signature": "si-\u003e so-\u003e [(Stream pi, Processor a (po, b))]-\u003e Processor a b",
          "type": "function"
        },
        "index": {
          "description": "Launches the specified processors in parallel using priorities for consuming the input and combining the output",
          "hierarchy": "Simulation Aivika Processor",
          "module": "Simulation.Aivika.Processor",
          "name": "processorPrioritisingInputOutputParallel",
          "normalized": "a-\u003eb-\u003e[(Stream c,Processor d(e,f))]-\u003eProcessor d f",
          "package": "aivika",
          "partial": "Prioritising Input Output Parallel",
          "signature": "si-\u003eso-\u003e[(Stream pi,Processor a(po,b))]-\u003eProcessor a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Processor.html#v:processorPrioritisingInputOutputParallel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLaunches the specified processors in parallel using priorities for consuming the intput.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Processor",
          "name": "processorPrioritisingInputParallel",
          "package": "aivika",
          "signature": "si-\u003e so-\u003e [(Stream pi, Processor a b)]-\u003e Processor a b",
          "type": "function"
        },
        "index": {
          "description": "Launches the specified processors in parallel using priorities for consuming the intput",
          "hierarchy": "Simulation Aivika Processor",
          "module": "Simulation.Aivika.Processor",
          "name": "processorPrioritisingInputParallel",
          "normalized": "a-\u003eb-\u003e[(Stream c,Processor d e)]-\u003eProcessor d e",
          "package": "aivika",
          "partial": "Prioritising Input Parallel",
          "signature": "si-\u003eso-\u003e[(Stream pi,Processor a b)]-\u003eProcessor a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Processor.html#v:processorPrioritisingInputParallel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLaunches the specified processors in parallel using priorities for combining the output.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Processor",
          "name": "processorPrioritisingOutputParallel",
          "package": "aivika",
          "signature": "si-\u003e so-\u003e [Processor a (po, b)]-\u003e Processor a b",
          "type": "function"
        },
        "index": {
          "description": "Launches the specified processors in parallel using priorities for combining the output",
          "hierarchy": "Simulation Aivika Processor",
          "module": "Simulation.Aivika.Processor",
          "name": "processorPrioritisingOutputParallel",
          "normalized": "a-\u003eb-\u003e[Processor c(d,e)]-\u003eProcessor c e",
          "package": "aivika",
          "partial": "Prioritising Output Parallel",
          "signature": "si-\u003eso-\u003e[Processor a(po,b)]-\u003eProcessor a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Processor.html#v:processorPrioritisingOutputParallel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLaunches the specified processors in parallel consuming the same input\n stream and producing a combined output stream.\n\u003c/p\u003e\u003cp\u003eIf you don't know what the enqueue strategies to apply, then\n you will probably need \u003ccode\u003e\u003ca\u003eFCFS\u003c/a\u003e\u003c/code\u003e for the both parameters, or\n function \u003ccode\u003e\u003ca\u003eprocessorParallel\u003c/a\u003e\u003c/code\u003e that does namely this.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Processor",
          "name": "processorQueuedParallel",
          "package": "aivika",
          "signature": "si-\u003e so-\u003e [Processor a b]-\u003e Processor a b",
          "type": "function"
        },
        "index": {
          "description": "Launches the specified processors in parallel consuming the same input stream and producing combined output stream If you don know what the enqueue strategies to apply then you will probably need FCFS for the both parameters or function processorParallel that does namely this",
          "hierarchy": "Simulation Aivika Processor",
          "module": "Simulation.Aivika.Processor",
          "name": "processorQueuedParallel",
          "normalized": "a-\u003eb-\u003e[Processor c d]-\u003eProcessor c d",
          "package": "aivika",
          "partial": "Queued Parallel",
          "signature": "si-\u003eso-\u003e[Processor a b]-\u003eProcessor a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Processor.html#v:processorQueuedParallel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a processor that will use the specified process identifier.\n It can be useful to refer to the underlying \u003ccode\u003e\u003ca\u003eProcess\u003c/a\u003e\u003c/code\u003e computation which\n can be passivated, interrupted, canceled and so on. See also the\n \u003ccode\u003e\u003ca\u003eprocessUsingId\u003c/a\u003e\u003c/code\u003e function for more details.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Processor",
          "name": "processorUsingId",
          "package": "aivika",
          "signature": "ProcessId -\u003e Processor a b -\u003e Processor a b",
          "source": "src/Simulation-Aivika-Processor.html#processorUsingId",
          "type": "function"
        },
        "index": {
          "description": "Create processor that will use the specified process identifier It can be useful to refer to the underlying Process computation which can be passivated interrupted canceled and so on See also the processUsingId function for more details",
          "hierarchy": "Simulation Aivika Processor",
          "module": "Simulation.Aivika.Processor",
          "name": "processorUsingId",
          "normalized": "ProcessId-\u003eProcessor a b-\u003eProcessor a b",
          "package": "aivika",
          "partial": "Using Id",
          "signature": "ProcessId-\u003eProcessor a b-\u003eProcessor a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Processor.html#v:processorUsingId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn a processor with help of which we can model the queue.\n\u003c/p\u003e\u003cp\u003eAlthough the function doesn't refer to the queue directly, its main use case\n is namely a processing of the queue. The first argument should be the enqueueing\n operation, while the second argument should be the opposite dequeueing operation.\n\u003c/p\u003e\u003cp\u003eThe reason is as follows. There are many possible combinations how the queues\n can be modeled. There is no sense to enumerate all them creating a separate function\n for each case. We can just use combinators to define exactly what we need.\n\u003c/p\u003e\u003cp\u003eSo, the queue can lose the input items if the queue is full, or the input process\n can suspend while the queue is full, or we can use priorities for enqueueing,\n storing and dequeueing the items in different combinations. There are so many use\n cases!\n\u003c/p\u003e\u003cp\u003eThere is a hope that this function along with other similar functions from this\n module is sufficient to cover the most important cases. Even if it is not sufficient\n then you can use a more generic function \u003ccode\u003e\u003ca\u003ebufferProcessor\u003c/a\u003e\u003c/code\u003e which this function is\n based on. In case of need, you can even write your own function from scratch. It is\n quite easy actually.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Processor",
          "name": "queueProcessor",
          "package": "aivika",
          "signature": "(a -\u003e Process ())-\u003e Process b-\u003e Processor a b",
          "type": "function"
        },
        "index": {
          "description": "Return processor with help of which we can model the queue Although the function doesn refer to the queue directly its main use case is namely processing of the queue The first argument should be the enqueueing operation while the second argument should be the opposite dequeueing operation The reason is as follows There are many possible combinations how the queues can be modeled There is no sense to enumerate all them creating separate function for each case We can just use combinators to define exactly what we need So the queue can lose the input items if the queue is full or the input process can suspend while the queue is full or we can use priorities for enqueueing storing and dequeueing the items in different combinations There are so many use cases There is hope that this function along with other similar functions from this module is sufficient to cover the most important cases Even if it is not sufficient then you can use more generic function bufferProcessor which this function is based on In case of need you can even write your own function from scratch It is quite easy actually",
          "hierarchy": "Simulation Aivika Processor",
          "module": "Simulation.Aivika.Processor",
          "name": "queueProcessor",
          "normalized": "(a-\u003eProcess())-\u003eProcess b-\u003eProcessor a b",
          "package": "aivika",
          "partial": "Processor",
          "signature": "(a-\u003eProcess())-\u003eProcess b-\u003eProcessor a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Processor.html#v:queueProcessor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003equeueProcessor\u003c/a\u003e\u003c/code\u003e creates a queue processor but with a loop when some items \n can be processed and then added to the queue again. Also it allows specifying \n how two input streams of data can be merged.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Processor",
          "name": "queueProcessorLoopMerging",
          "package": "aivika",
          "signature": "(Stream a -\u003e Stream d -\u003e Stream e)-\u003e (e -\u003e Process ())-\u003e Process c-\u003e Processor c (Either f b)-\u003e Processor f d-\u003e Processor a b",
          "type": "function"
        },
        "index": {
          "description": "Like queueProcessor creates queue processor but with loop when some items can be processed and then added to the queue again Also it allows specifying how two input streams of data can be merged",
          "hierarchy": "Simulation Aivika Processor",
          "module": "Simulation.Aivika.Processor",
          "name": "queueProcessorLoopMerging",
          "normalized": "(Stream a-\u003eStream b-\u003eStream c)-\u003e(c-\u003eProcess())-\u003eProcess d-\u003eProcessor d(Either e f)-\u003eProcessor e b-\u003eProcessor a f",
          "package": "aivika",
          "partial": "Processor Loop Merging",
          "signature": "(Stream a-\u003eStream d-\u003eStream e)-\u003e(e-\u003eProcess())-\u003eProcess c-\u003eProcessor c(Either f b)-\u003eProcessor f d-\u003eProcessor a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Processor.html#v:queueProcessorLoopMerging"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003equeueProcessorLoopMerging\u003c/a\u003e\u003c/code\u003e creates a queue processor with a loop when\n some items can be processed and then added to the queue again. Only it runs two \n simultaneous processes to enqueue the input streams of data: one stream that come \n from the external source and another stream of data returned by the loop.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Processor",
          "name": "queueProcessorLoopParallel",
          "package": "aivika",
          "signature": "(a -\u003e Process ())-\u003e Process c-\u003e Processor c (Either e b)-\u003e Processor e a-\u003e Processor a b",
          "type": "function"
        },
        "index": {
          "description": "Like queueProcessorLoopMerging creates queue processor with loop when some items can be processed and then added to the queue again Only it runs two simultaneous processes to enqueue the input streams of data one stream that come from the external source and another stream of data returned by the loop",
          "hierarchy": "Simulation Aivika Processor",
          "module": "Simulation.Aivika.Processor",
          "name": "queueProcessorLoopParallel",
          "normalized": "(a-\u003eProcess())-\u003eProcess b-\u003eProcessor b(Either c d)-\u003eProcessor c a-\u003eProcessor a d",
          "package": "aivika",
          "partial": "Processor Loop Parallel",
          "signature": "(a-\u003eProcess())-\u003eProcess c-\u003eProcessor c(Either e b)-\u003eProcessor e a-\u003eProcessor a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Processor.html#v:queueProcessorLoopParallel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003equeueProcessorLoopMerging\u003c/a\u003e\u003c/code\u003e creates a queue processor with a loop when\n some items can be processed and then added to the queue again. Only it sequentially \n merges two input streams of data: one stream that come from the external source and \n another stream of data returned by the loop. The first stream has a priority over \n the second one.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Processor",
          "name": "queueProcessorLoopSeq",
          "package": "aivika",
          "signature": "(a -\u003e Process ())-\u003e Process c-\u003e Processor c (Either e b)-\u003e Processor e a-\u003e Processor a b",
          "type": "function"
        },
        "index": {
          "description": "Like queueProcessorLoopMerging creates queue processor with loop when some items can be processed and then added to the queue again Only it sequentially merges two input streams of data one stream that come from the external source and another stream of data returned by the loop The first stream has priority over the second one",
          "hierarchy": "Simulation Aivika Processor",
          "module": "Simulation.Aivika.Processor",
          "name": "queueProcessorLoopSeq",
          "normalized": "(a-\u003eProcess())-\u003eProcess b-\u003eProcessor b(Either c d)-\u003eProcessor c a-\u003eProcessor a d",
          "package": "aivika",
          "partial": "Processor Loop Seq",
          "signature": "(a-\u003eProcess())-\u003eProcess c-\u003eProcessor c(Either e b)-\u003eProcessor e a-\u003eProcessor a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Processor.html#v:queueProcessorLoopSeq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun the processor.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Processor",
          "name": "runProcessor",
          "package": "aivika",
          "signature": "Stream a -\u003e Stream b",
          "source": "src/Simulation-Aivika-Processor.html#Processor",
          "type": "function"
        },
        "index": {
          "description": "Run the processor",
          "hierarchy": "Simulation Aivika Processor",
          "module": "Simulation.Aivika.Processor",
          "name": "runProcessor",
          "normalized": "Stream a-\u003eStream b",
          "package": "aivika",
          "partial": "Processor",
          "signature": "Stream a-\u003eStream b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Processor.html#v:runProcessor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a simple processor by the specified handling function\n that runs the discontinuous process for each input value to get the output.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Processor",
          "name": "simpleProcessor",
          "package": "aivika",
          "signature": "(a -\u003e Process b) -\u003e Processor a b",
          "source": "src/Simulation-Aivika-Processor.html#simpleProcessor",
          "type": "function"
        },
        "index": {
          "description": "Create simple processor by the specified handling function that runs the discontinuous process for each input value to get the output",
          "hierarchy": "Simulation Aivika Processor",
          "module": "Simulation.Aivika.Processor",
          "name": "simpleProcessor",
          "normalized": "(a-\u003eProcess b)-\u003eProcessor a b",
          "package": "aivika",
          "partial": "Processor",
          "signature": "(a-\u003eProcess b)-\u003eProcessor a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Processor.html#v:simpleProcessor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003esimpleProcessor\u003c/a\u003e\u003c/code\u003e but allows creating a processor that has a state\n which is passed in to every new iteration.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Processor",
          "name": "statefulProcessor",
          "package": "aivika",
          "signature": "s -\u003e ((s, a) -\u003e Process (s, b)) -\u003e Processor a b",
          "source": "src/Simulation-Aivika-Processor.html#statefulProcessor",
          "type": "function"
        },
        "index": {
          "description": "Like simpleProcessor but allows creating processor that has state which is passed in to every new iteration",
          "hierarchy": "Simulation Aivika Processor",
          "module": "Simulation.Aivika.Processor",
          "name": "statefulProcessor",
          "normalized": "a-\u003e((a,b)-\u003eProcess(a,c))-\u003eProcessor b c",
          "package": "aivika",
          "partial": "Processor",
          "signature": "s-\u003e((s,a)-\u003eProcess(s,b))-\u003eProcessor a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Processor.html#v:statefulProcessor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTested with: GHC 7.6.3\n\u003c/p\u003e\u003cp\u003eThis module defines an infinite queue that can use the specified strategies.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Simulation.Aivika.Queue.Infinite",
          "name": "Infinite",
          "package": "aivika",
          "source": "src/Simulation-Aivika-Queue-Infinite.html",
          "type": "module"
        },
        "index": {
          "description": "Tested with GHC This module defines an infinite queue that can use the specified strategies",
          "hierarchy": "Simulation Aivika Queue Infinite",
          "module": "Simulation.Aivika.Queue.Infinite",
          "name": "Infinite",
          "package": "aivika",
          "partial": "Infinite",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Queue-Infinite.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type synonym for the ordinary FIFO queue also known as the FCFS\n (First Come - First Serviced) queue.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Queue.Infinite",
          "name": "FCFSQueue",
          "package": "aivika",
          "source": "src/Simulation-Aivika-Queue-Infinite.html#FCFSQueue",
          "type": "type"
        },
        "index": {
          "description": "type synonym for the ordinary FIFO queue also known as the FCFS First Come First Serviced queue",
          "hierarchy": "Simulation Aivika Queue Infinite",
          "module": "Simulation.Aivika.Queue.Infinite",
          "name": "FCFSQueue",
          "package": "aivika",
          "partial": "FCFSQueue",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Queue-Infinite.html#t:FCFSQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type synonym for the ordinary LIFO queue also known as the LCFS\n (Last Come - First Serviced) queue.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Queue.Infinite",
          "name": "LCFSQueue",
          "package": "aivika",
          "source": "src/Simulation-Aivika-Queue-Infinite.html#LCFSQueue",
          "type": "type"
        },
        "index": {
          "description": "type synonym for the ordinary LIFO queue also known as the LCFS Last Come First Serviced queue",
          "hierarchy": "Simulation Aivika Queue Infinite",
          "module": "Simulation.Aivika.Queue.Infinite",
          "name": "LCFSQueue",
          "package": "aivika",
          "partial": "LCFSQueue",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Queue-Infinite.html#t:LCFSQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type synonym for the queue with static priorities applied when\n storing the elements in the queue.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Queue.Infinite",
          "name": "PriorityQueue",
          "package": "aivika",
          "source": "src/Simulation-Aivika-Queue-Infinite.html#PriorityQueue",
          "type": "type"
        },
        "index": {
          "description": "type synonym for the queue with static priorities applied when storing the elements in the queue",
          "hierarchy": "Simulation Aivika Queue Infinite",
          "module": "Simulation.Aivika.Queue.Infinite",
          "name": "PriorityQueue",
          "package": "aivika",
          "partial": "Priority Queue",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Queue-Infinite.html#t:PriorityQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents an infinite queue using the specified strategies for\n internal storing (in memory), \u003ccode\u003esm\u003c/code\u003e, and dequeueing (output), \u003ccode\u003eso\u003c/code\u003e, where \u003ccode\u003ea\u003c/code\u003e denotes\n the type of items stored in the queue. Types \u003ccode\u003eqm\u003c/code\u003e and \u003ccode\u003eqo\u003c/code\u003e are\n determined automatically and you should not care about them - they\n are dependent types.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Queue.Infinite",
          "name": "Queue",
          "package": "aivika",
          "source": "src/Simulation-Aivika-Queue-Infinite.html#Queue",
          "type": "data"
        },
        "index": {
          "description": "Represents an infinite queue using the specified strategies for internal storing in memory sm and dequeueing output so where denotes the type of items stored in the queue Types qm and qo are determined automatically and you should not care about them they are dependent types",
          "hierarchy": "Simulation Aivika Queue Infinite",
          "module": "Simulation.Aivika.Queue.Infinite",
          "name": "Queue",
          "package": "aivika",
          "partial": "Queue",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Queue-Infinite.html#t:Queue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type synonym for the SIRO (Serviced in Random Order) queue.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Queue.Infinite",
          "name": "SIROQueue",
          "package": "aivika",
          "source": "src/Simulation-Aivika-Queue-Infinite.html#SIROQueue",
          "type": "type"
        },
        "index": {
          "description": "type synonym for the SIRO Serviced in Random Order queue",
          "hierarchy": "Simulation Aivika Queue Infinite",
          "module": "Simulation.Aivika.Queue.Infinite",
          "name": "SIROQueue",
          "package": "aivika",
          "partial": "SIROQueue",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Queue-Infinite.html#t:SIROQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDequeue suspending the process if the queue is empty.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Queue.Infinite",
          "name": "dequeue",
          "package": "aivika",
          "signature": "Queue sm qm so qo a-\u003e Process a",
          "type": "function"
        },
        "index": {
          "description": "Dequeue suspending the process if the queue is empty",
          "hierarchy": "Simulation Aivika Queue Infinite",
          "module": "Simulation.Aivika.Queue.Infinite",
          "name": "dequeue",
          "normalized": "Queue a b c d e-\u003eProcess e",
          "package": "aivika",
          "signature": "Queue sm qm so qo a-\u003eProcess a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Queue-Infinite.html#v:dequeue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the total number of requests for dequeueing the items,\n not taking into account the failed attempts to dequeue immediately\n without suspension.\n\u003c/p\u003e\u003cp\u003eSee also \u003ccode\u003e\u003ca\u003edequeueCountChanged\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003edequeueCountChanged_\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Queue.Infinite",
          "name": "dequeueCount",
          "package": "aivika",
          "signature": "Queue sm qm so qo a -\u003e Event Int",
          "source": "src/Simulation-Aivika-Queue-Infinite.html#dequeueCount",
          "type": "function"
        },
        "index": {
          "description": "Return the total number of requests for dequeueing the items not taking into account the failed attempts to dequeue immediately without suspension See also dequeueCountChanged and dequeueCountChanged",
          "hierarchy": "Simulation Aivika Queue Infinite",
          "module": "Simulation.Aivika.Queue.Infinite",
          "name": "dequeueCount",
          "normalized": "Queue a b c d e-\u003eEvent Int",
          "package": "aivika",
          "partial": "Count",
          "signature": "Queue sm qm so qo a-\u003eEvent Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Queue-Infinite.html#v:dequeueCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSignal when the \u003ccode\u003e\u003ca\u003edequeueCount\u003c/a\u003e\u003c/code\u003e property value has changed.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Queue.Infinite",
          "name": "dequeueCountChanged",
          "package": "aivika",
          "signature": "Queue sm qm so qo a -\u003e Signal Int",
          "source": "src/Simulation-Aivika-Queue-Infinite.html#dequeueCountChanged",
          "type": "function"
        },
        "index": {
          "description": "Signal when the dequeueCount property value has changed",
          "hierarchy": "Simulation Aivika Queue Infinite",
          "module": "Simulation.Aivika.Queue.Infinite",
          "name": "dequeueCountChanged",
          "normalized": "Queue a b c d e-\u003eSignal Int",
          "package": "aivika",
          "partial": "Count Changed",
          "signature": "Queue sm qm so qo a-\u003eSignal Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Queue-Infinite.html#v:dequeueCountChanged"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSignal when the \u003ccode\u003e\u003ca\u003edequeueCount\u003c/a\u003e\u003c/code\u003e property value has changed.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Queue.Infinite",
          "name": "dequeueCountChanged_",
          "package": "aivika",
          "signature": "Queue sm qm so qo a -\u003e Signal ()",
          "source": "src/Simulation-Aivika-Queue-Infinite.html#dequeueCountChanged_",
          "type": "function"
        },
        "index": {
          "description": "Signal when the dequeueCount property value has changed",
          "hierarchy": "Simulation Aivika Queue Infinite",
          "module": "Simulation.Aivika.Queue.Infinite",
          "name": "dequeueCountChanged_",
          "normalized": "Queue a b c d e-\u003eSignal()",
          "package": "aivika",
          "partial": "Count Changed",
          "signature": "Queue sm qm so qo a-\u003eSignal()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Queue-Infinite.html#v:dequeueCountChanged_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the total number of output items that were actually dequeued.\n\u003c/p\u003e\u003cp\u003eSee also \u003ccode\u003e\u003ca\u003edequeueExtractCountChanged\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003edequeueExtractCountChanged_\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Queue.Infinite",
          "name": "dequeueExtractCount",
          "package": "aivika",
          "signature": "Queue sm qm so qo a -\u003e Event Int",
          "source": "src/Simulation-Aivika-Queue-Infinite.html#dequeueExtractCount",
          "type": "function"
        },
        "index": {
          "description": "Return the total number of output items that were actually dequeued See also dequeueExtractCountChanged and dequeueExtractCountChanged",
          "hierarchy": "Simulation Aivika Queue Infinite",
          "module": "Simulation.Aivika.Queue.Infinite",
          "name": "dequeueExtractCount",
          "normalized": "Queue a b c d e-\u003eEvent Int",
          "package": "aivika",
          "partial": "Extract Count",
          "signature": "Queue sm qm so qo a-\u003eEvent Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Queue-Infinite.html#v:dequeueExtractCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSignal when the \u003ccode\u003e\u003ca\u003edequeueExtractCount\u003c/a\u003e\u003c/code\u003e property value has changed.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Queue.Infinite",
          "name": "dequeueExtractCountChanged",
          "package": "aivika",
          "signature": "Queue sm qm so qo a -\u003e Signal Int",
          "source": "src/Simulation-Aivika-Queue-Infinite.html#dequeueExtractCountChanged",
          "type": "function"
        },
        "index": {
          "description": "Signal when the dequeueExtractCount property value has changed",
          "hierarchy": "Simulation Aivika Queue Infinite",
          "module": "Simulation.Aivika.Queue.Infinite",
          "name": "dequeueExtractCountChanged",
          "normalized": "Queue a b c d e-\u003eSignal Int",
          "package": "aivika",
          "partial": "Extract Count Changed",
          "signature": "Queue sm qm so qo a-\u003eSignal Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Queue-Infinite.html#v:dequeueExtractCountChanged"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSignal when the \u003ccode\u003e\u003ca\u003edequeueExtractCount\u003c/a\u003e\u003c/code\u003e property value has changed.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Queue.Infinite",
          "name": "dequeueExtractCountChanged_",
          "package": "aivika",
          "signature": "Queue sm qm so qo a -\u003e Signal ()",
          "source": "src/Simulation-Aivika-Queue-Infinite.html#dequeueExtractCountChanged_",
          "type": "function"
        },
        "index": {
          "description": "Signal when the dequeueExtractCount property value has changed",
          "hierarchy": "Simulation Aivika Queue Infinite",
          "module": "Simulation.Aivika.Queue.Infinite",
          "name": "dequeueExtractCountChanged_",
          "normalized": "Queue a b c d e-\u003eSignal()",
          "package": "aivika",
          "partial": "Extract Count Changed",
          "signature": "Queue sm qm so qo a-\u003eSignal()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Queue-Infinite.html#v:dequeueExtractCountChanged_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the rate of the output items that were dequeued: how many items\n per time.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Queue.Infinite",
          "name": "dequeueExtractRate",
          "package": "aivika",
          "signature": "Queue sm qm so qo a -\u003e Event Double",
          "source": "src/Simulation-Aivika-Queue-Infinite.html#dequeueExtractRate",
          "type": "function"
        },
        "index": {
          "description": "Return the rate of the output items that were dequeued how many items per time",
          "hierarchy": "Simulation Aivika Queue Infinite",
          "module": "Simulation.Aivika.Queue.Infinite",
          "name": "dequeueExtractRate",
          "normalized": "Queue a b c d e-\u003eEvent Double",
          "package": "aivika",
          "partial": "Extract Rate",
          "signature": "Queue sm qm so qo a-\u003eEvent Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Queue-Infinite.html#v:dequeueExtractRate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn a signal that notifies when the item was extracted from the internal\n storage of the queue and prepared for immediate receiving by the dequeuing process.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Queue.Infinite",
          "name": "dequeueExtracted",
          "package": "aivika",
          "signature": "Queue sm qm so qo a -\u003e Signal a",
          "source": "src/Simulation-Aivika-Queue-Infinite.html#dequeueExtracted",
          "type": "function"
        },
        "index": {
          "description": "Return signal that notifies when the item was extracted from the internal storage of the queue and prepared for immediate receiving by the dequeuing process",
          "hierarchy": "Simulation Aivika Queue Infinite",
          "module": "Simulation.Aivika.Queue.Infinite",
          "name": "dequeueExtracted",
          "normalized": "Queue a b c d e-\u003eSignal e",
          "package": "aivika",
          "partial": "Extracted",
          "signature": "Queue sm qm so qo a-\u003eSignal a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Queue-Infinite.html#v:dequeueExtracted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the rate of the requests for dequeueing the items: how many requests\n per time. It does not include the failed attempts to dequeue immediately\n without suspension.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Queue.Infinite",
          "name": "dequeueRate",
          "package": "aivika",
          "signature": "Queue sm qm so qo a -\u003e Event Double",
          "source": "src/Simulation-Aivika-Queue-Infinite.html#dequeueRate",
          "type": "function"
        },
        "index": {
          "description": "Return the rate of the requests for dequeueing the items how many requests per time It does not include the failed attempts to dequeue immediately without suspension",
          "hierarchy": "Simulation Aivika Queue Infinite",
          "module": "Simulation.Aivika.Queue.Infinite",
          "name": "dequeueRate",
          "normalized": "Queue a b c d e-\u003eEvent Double",
          "package": "aivika",
          "partial": "Rate",
          "signature": "Queue sm qm so qo a-\u003eEvent Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Queue-Infinite.html#v:dequeueRate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn a signal that notifies when the dequeuing operation was requested.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Queue.Infinite",
          "name": "dequeueRequested",
          "package": "aivika",
          "signature": "Queue sm qm so qo a -\u003e Signal ()",
          "source": "src/Simulation-Aivika-Queue-Infinite.html#dequeueRequested",
          "type": "function"
        },
        "index": {
          "description": "Return signal that notifies when the dequeuing operation was requested",
          "hierarchy": "Simulation Aivika Queue Infinite",
          "module": "Simulation.Aivika.Queue.Infinite",
          "name": "dequeueRequested",
          "normalized": "Queue a b c d e-\u003eSignal()",
          "package": "aivika",
          "partial": "Requested",
          "signature": "Queue sm qm so qo a-\u003eSignal()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Queue-Infinite.html#v:dequeueRequested"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe strategy applied to the dequeueing (output) processes.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Queue.Infinite",
          "name": "dequeueStrategy",
          "package": "aivika",
          "signature": "Queue sm qm so qo a -\u003e so",
          "source": "src/Simulation-Aivika-Queue-Infinite.html#dequeueStrategy",
          "type": "function"
        },
        "index": {
          "description": "The strategy applied to the dequeueing output processes",
          "hierarchy": "Simulation Aivika Queue Infinite",
          "module": "Simulation.Aivika.Queue.Infinite",
          "name": "dequeueStrategy",
          "normalized": "Queue a b c d e-\u003ec",
          "package": "aivika",
          "partial": "Strategy",
          "signature": "Queue sm qm so qo a-\u003eso",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Queue-Infinite.html#v:dequeueStrategy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the dequeue wait time from the time at which the item was requested\n for dequeueing to the time at which it was actually dequeued.\n\u003c/p\u003e\u003cp\u003eSee also \u003ccode\u003e\u003ca\u003edequeueWaitTimeChanged\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003edequeueWaitTimeChanged_\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Queue.Infinite",
          "name": "dequeueWaitTime",
          "package": "aivika",
          "signature": "Queue sm qm so qo a -\u003e Event (SamplingStats Double)",
          "source": "src/Simulation-Aivika-Queue-Infinite.html#dequeueWaitTime",
          "type": "function"
        },
        "index": {
          "description": "Return the dequeue wait time from the time at which the item was requested for dequeueing to the time at which it was actually dequeued See also dequeueWaitTimeChanged and dequeueWaitTimeChanged",
          "hierarchy": "Simulation Aivika Queue Infinite",
          "module": "Simulation.Aivika.Queue.Infinite",
          "name": "dequeueWaitTime",
          "normalized": "Queue a b c d e-\u003eEvent(SamplingStats Double)",
          "package": "aivika",
          "partial": "Wait Time",
          "signature": "Queue sm qm so qo a-\u003eEvent(SamplingStats Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Queue-Infinite.html#v:dequeueWaitTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSignal when the \u003ccode\u003e\u003ca\u003edequeueWaitTime\u003c/a\u003e\u003c/code\u003e property value has changed.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Queue.Infinite",
          "name": "dequeueWaitTimeChanged",
          "package": "aivika",
          "signature": "Queue sm qm so qo a -\u003e Signal (SamplingStats Double)",
          "source": "src/Simulation-Aivika-Queue-Infinite.html#dequeueWaitTimeChanged",
          "type": "function"
        },
        "index": {
          "description": "Signal when the dequeueWaitTime property value has changed",
          "hierarchy": "Simulation Aivika Queue Infinite",
          "module": "Simulation.Aivika.Queue.Infinite",
          "name": "dequeueWaitTimeChanged",
          "normalized": "Queue a b c d e-\u003eSignal(SamplingStats Double)",
          "package": "aivika",
          "partial": "Wait Time Changed",
          "signature": "Queue sm qm so qo a-\u003eSignal(SamplingStats Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Queue-Infinite.html#v:dequeueWaitTimeChanged"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSignal when the \u003ccode\u003e\u003ca\u003edequeueWaitTime\u003c/a\u003e\u003c/code\u003e property value has changed.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Queue.Infinite",
          "name": "dequeueWaitTimeChanged_",
          "package": "aivika",
          "signature": "Queue sm qm so qo a -\u003e Signal ()",
          "source": "src/Simulation-Aivika-Queue-Infinite.html#dequeueWaitTimeChanged_",
          "type": "function"
        },
        "index": {
          "description": "Signal when the dequeueWaitTime property value has changed",
          "hierarchy": "Simulation Aivika Queue Infinite",
          "module": "Simulation.Aivika.Queue.Infinite",
          "name": "dequeueWaitTimeChanged_",
          "normalized": "Queue a b c d e-\u003eSignal()",
          "package": "aivika",
          "partial": "Wait Time Changed",
          "signature": "Queue sm qm so qo a-\u003eSignal()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Queue-Infinite.html#v:dequeueWaitTimeChanged_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDequeue with the output priority suspending the process if the queue is empty.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Queue.Infinite",
          "name": "dequeueWithOutputPriority",
          "package": "aivika",
          "signature": "Queue sm qm so qo a-\u003e po-\u003e Process a",
          "type": "function"
        },
        "index": {
          "description": "Dequeue with the output priority suspending the process if the queue is empty",
          "hierarchy": "Simulation Aivika Queue Infinite",
          "module": "Simulation.Aivika.Queue.Infinite",
          "name": "dequeueWithOutputPriority",
          "normalized": "Queue a b c d e-\u003ef-\u003eProcess e",
          "package": "aivika",
          "partial": "With Output Priority",
          "signature": "Queue sm qm so qo a-\u003epo-\u003eProcess a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Queue-Infinite.html#v:dequeueWithOutputPriority"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnqueue the item.  \n\u003c/p\u003e",
          "module": "Simulation.Aivika.Queue.Infinite",
          "name": "enqueue",
          "package": "aivika",
          "signature": "Queue sm qm so qo a-\u003e a-\u003e Event ()",
          "type": "function"
        },
        "index": {
          "description": "Enqueue the item",
          "hierarchy": "Simulation Aivika Queue Infinite",
          "module": "Simulation.Aivika.Queue.Infinite",
          "name": "enqueue",
          "normalized": "Queue a b c d e-\u003ee-\u003eEvent()",
          "package": "aivika",
          "signature": "Queue sm qm so qo a-\u003ea-\u003eEvent()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Queue-Infinite.html#v:enqueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the total number of input items that were stored.\n\u003c/p\u003e\u003cp\u003eSee also \u003ccode\u003e\u003ca\u003eenqueueStoreCountChanged\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eenqueueStoreCountChanged_\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Queue.Infinite",
          "name": "enqueueStoreCount",
          "package": "aivika",
          "signature": "Queue sm qm so qo a -\u003e Event Int",
          "source": "src/Simulation-Aivika-Queue-Infinite.html#enqueueStoreCount",
          "type": "function"
        },
        "index": {
          "description": "Return the total number of input items that were stored See also enqueueStoreCountChanged and enqueueStoreCountChanged",
          "hierarchy": "Simulation Aivika Queue Infinite",
          "module": "Simulation.Aivika.Queue.Infinite",
          "name": "enqueueStoreCount",
          "normalized": "Queue a b c d e-\u003eEvent Int",
          "package": "aivika",
          "partial": "Store Count",
          "signature": "Queue sm qm so qo a-\u003eEvent Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Queue-Infinite.html#v:enqueueStoreCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSignal when the \u003ccode\u003e\u003ca\u003eenqueueStoreCount\u003c/a\u003e\u003c/code\u003e property value has changed.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Queue.Infinite",
          "name": "enqueueStoreCountChanged",
          "package": "aivika",
          "signature": "Queue sm qm so qo a -\u003e Signal Int",
          "source": "src/Simulation-Aivika-Queue-Infinite.html#enqueueStoreCountChanged",
          "type": "function"
        },
        "index": {
          "description": "Signal when the enqueueStoreCount property value has changed",
          "hierarchy": "Simulation Aivika Queue Infinite",
          "module": "Simulation.Aivika.Queue.Infinite",
          "name": "enqueueStoreCountChanged",
          "normalized": "Queue a b c d e-\u003eSignal Int",
          "package": "aivika",
          "partial": "Store Count Changed",
          "signature": "Queue sm qm so qo a-\u003eSignal Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Queue-Infinite.html#v:enqueueStoreCountChanged"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSignal when the \u003ccode\u003e\u003ca\u003eenqueueStoreCount\u003c/a\u003e\u003c/code\u003e property value has changed.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Queue.Infinite",
          "name": "enqueueStoreCountChanged_",
          "package": "aivika",
          "signature": "Queue sm qm so qo a -\u003e Signal ()",
          "source": "src/Simulation-Aivika-Queue-Infinite.html#enqueueStoreCountChanged_",
          "type": "function"
        },
        "index": {
          "description": "Signal when the enqueueStoreCount property value has changed",
          "hierarchy": "Simulation Aivika Queue Infinite",
          "module": "Simulation.Aivika.Queue.Infinite",
          "name": "enqueueStoreCountChanged_",
          "normalized": "Queue a b c d e-\u003eSignal()",
          "package": "aivika",
          "partial": "Store Count Changed",
          "signature": "Queue sm qm so qo a-\u003eSignal()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Queue-Infinite.html#v:enqueueStoreCountChanged_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the rate of the items that were stored: how many items\n per time.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Queue.Infinite",
          "name": "enqueueStoreRate",
          "package": "aivika",
          "signature": "Queue sm qm so qo a -\u003e Event Double",
          "source": "src/Simulation-Aivika-Queue-Infinite.html#enqueueStoreRate",
          "type": "function"
        },
        "index": {
          "description": "Return the rate of the items that were stored how many items per time",
          "hierarchy": "Simulation Aivika Queue Infinite",
          "module": "Simulation.Aivika.Queue.Infinite",
          "name": "enqueueStoreRate",
          "normalized": "Queue a b c d e-\u003eEvent Double",
          "package": "aivika",
          "partial": "Store Rate",
          "signature": "Queue sm qm so qo a-\u003eEvent Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Queue-Infinite.html#v:enqueueStoreRate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn a signal that notifies when the enqueued item\n is stored in the internal memory of the queue.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Queue.Infinite",
          "name": "enqueueStored",
          "package": "aivika",
          "signature": "Queue sm qm so qo a -\u003e Signal a",
          "source": "src/Simulation-Aivika-Queue-Infinite.html#enqueueStored",
          "type": "function"
        },
        "index": {
          "description": "Return signal that notifies when the enqueued item is stored in the internal memory of the queue",
          "hierarchy": "Simulation Aivika Queue Infinite",
          "module": "Simulation.Aivika.Queue.Infinite",
          "name": "enqueueStored",
          "normalized": "Queue a b c d e-\u003eSignal e",
          "package": "aivika",
          "partial": "Stored",
          "signature": "Queue sm qm so qo a-\u003eSignal a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Queue-Infinite.html#v:enqueueStored"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe strategy applied when storing (in memory) items in the queue.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Queue.Infinite",
          "name": "enqueueStoringStrategy",
          "package": "aivika",
          "signature": "Queue sm qm so qo a -\u003e sm",
          "source": "src/Simulation-Aivika-Queue-Infinite.html#enqueueStoringStrategy",
          "type": "function"
        },
        "index": {
          "description": "The strategy applied when storing in memory items in the queue",
          "hierarchy": "Simulation Aivika Queue Infinite",
          "module": "Simulation.Aivika.Queue.Infinite",
          "name": "enqueueStoringStrategy",
          "normalized": "Queue a b c d e-\u003ea",
          "package": "aivika",
          "partial": "Storing Strategy",
          "signature": "Queue sm qm so qo a-\u003esm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Queue-Infinite.html#v:enqueueStoringStrategy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnqueue with the storing priority the item.  \n\u003c/p\u003e",
          "module": "Simulation.Aivika.Queue.Infinite",
          "name": "enqueueWithStoringPriority",
          "package": "aivika",
          "signature": "Queue sm qm so qo a-\u003e pm-\u003e a-\u003e Event ()",
          "type": "function"
        },
        "index": {
          "description": "Enqueue with the storing priority the item",
          "hierarchy": "Simulation Aivika Queue Infinite",
          "module": "Simulation.Aivika.Queue.Infinite",
          "name": "enqueueWithStoringPriority",
          "normalized": "Queue a b c d e-\u003ef-\u003ee-\u003eEvent()",
          "package": "aivika",
          "partial": "With Storing Priority",
          "signature": "Queue sm qm so qo a-\u003epm-\u003ea-\u003eEvent()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Queue-Infinite.html#v:enqueueWithStoringPriority"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new infinite FCFS queue.  \n\u003c/p\u003e",
          "module": "Simulation.Aivika.Queue.Infinite",
          "name": "newFCFSQueue",
          "package": "aivika",
          "signature": "Simulation (FCFSQueue a)",
          "source": "src/Simulation-Aivika-Queue-Infinite.html#newFCFSQueue",
          "type": "function"
        },
        "index": {
          "description": "Create new infinite FCFS queue",
          "hierarchy": "Simulation Aivika Queue Infinite",
          "module": "Simulation.Aivika.Queue.Infinite",
          "name": "newFCFSQueue",
          "package": "aivika",
          "partial": "FCFSQueue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Queue-Infinite.html#v:newFCFSQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new infinite LCFS queue.  \n\u003c/p\u003e",
          "module": "Simulation.Aivika.Queue.Infinite",
          "name": "newLCFSQueue",
          "package": "aivika",
          "signature": "Simulation (LCFSQueue a)",
          "source": "src/Simulation-Aivika-Queue-Infinite.html#newLCFSQueue",
          "type": "function"
        },
        "index": {
          "description": "Create new infinite LCFS queue",
          "hierarchy": "Simulation Aivika Queue Infinite",
          "module": "Simulation.Aivika.Queue.Infinite",
          "name": "newLCFSQueue",
          "package": "aivika",
          "partial": "LCFSQueue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Queue-Infinite.html#v:newLCFSQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new infinite priority queue.  \n\u003c/p\u003e",
          "module": "Simulation.Aivika.Queue.Infinite",
          "name": "newPriorityQueue",
          "package": "aivika",
          "signature": "Simulation (PriorityQueue a)",
          "source": "src/Simulation-Aivika-Queue-Infinite.html#newPriorityQueue",
          "type": "function"
        },
        "index": {
          "description": "Create new infinite priority queue",
          "hierarchy": "Simulation Aivika Queue Infinite",
          "module": "Simulation.Aivika.Queue.Infinite",
          "name": "newPriorityQueue",
          "package": "aivika",
          "partial": "Priority Queue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Queue-Infinite.html#v:newPriorityQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new infinite queue with the specified strategies.  \n\u003c/p\u003e",
          "module": "Simulation.Aivika.Queue.Infinite",
          "name": "newQueue",
          "package": "aivika",
          "signature": "sm-\u003e so-\u003e Simulation (Queue sm qm so qo a)",
          "type": "function"
        },
        "index": {
          "description": "Create new infinite queue with the specified strategies",
          "hierarchy": "Simulation Aivika Queue Infinite",
          "module": "Simulation.Aivika.Queue.Infinite",
          "name": "newQueue",
          "normalized": "a-\u003eb-\u003eSimulation(Queue a c b d e)",
          "package": "aivika",
          "partial": "Queue",
          "signature": "sm-\u003eso-\u003eSimulation(Queue sm qm so qo a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Queue-Infinite.html#v:newQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new infinite SIRO queue.  \n\u003c/p\u003e",
          "module": "Simulation.Aivika.Queue.Infinite",
          "name": "newSIROQueue",
          "package": "aivika",
          "signature": "Simulation (SIROQueue a)",
          "source": "src/Simulation-Aivika-Queue-Infinite.html#newSIROQueue",
          "type": "function"
        },
        "index": {
          "description": "Create new infinite SIRO queue",
          "hierarchy": "Simulation Aivika Queue Infinite",
          "module": "Simulation.Aivika.Queue.Infinite",
          "name": "newSIROQueue",
          "package": "aivika",
          "partial": "SIROQueue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Queue-Infinite.html#v:newSIROQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSignal whenever any property of the queue changes.\n\u003c/p\u003e\u003cp\u003eThe property must have the corresponded signal. There are also characteristics\n similar to the properties but that have no signals. As a rule, such characteristics\n already depend on the simulation time and therefore they may change at any\n time point.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Queue.Infinite",
          "name": "queueChanged_",
          "package": "aivika",
          "signature": "Queue sm qm so qo a -\u003e Signal ()",
          "source": "src/Simulation-Aivika-Queue-Infinite.html#queueChanged_",
          "type": "function"
        },
        "index": {
          "description": "Signal whenever any property of the queue changes The property must have the corresponded signal There are also characteristics similar to the properties but that have no signals As rule such characteristics already depend on the simulation time and therefore they may change at any time point",
          "hierarchy": "Simulation Aivika Queue Infinite",
          "module": "Simulation.Aivika.Queue.Infinite",
          "name": "queueChanged_",
          "normalized": "Queue a b c d e-\u003eSignal()",
          "package": "aivika",
          "partial": "Changed",
          "signature": "Queue sm qm so qo a-\u003eSignal()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Queue-Infinite.html#v:queueChanged_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the queue size.\n\u003c/p\u003e\u003cp\u003eSee also \u003ccode\u003e\u003ca\u003equeueCountChanged\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003equeueCountChanged_\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Queue.Infinite",
          "name": "queueCount",
          "package": "aivika",
          "signature": "Queue sm qm so qo a -\u003e Event Int",
          "source": "src/Simulation-Aivika-Queue-Infinite.html#queueCount",
          "type": "function"
        },
        "index": {
          "description": "Return the queue size See also queueCountChanged and queueCountChanged",
          "hierarchy": "Simulation Aivika Queue Infinite",
          "module": "Simulation.Aivika.Queue.Infinite",
          "name": "queueCount",
          "normalized": "Queue a b c d e-\u003eEvent Int",
          "package": "aivika",
          "partial": "Count",
          "signature": "Queue sm qm so qo a-\u003eEvent Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Queue-Infinite.html#v:queueCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSignal when the \u003ccode\u003e\u003ca\u003equeueCount\u003c/a\u003e\u003c/code\u003e property value has changed.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Queue.Infinite",
          "name": "queueCountChanged",
          "package": "aivika",
          "signature": "Queue sm qm so qo a -\u003e Signal Int",
          "source": "src/Simulation-Aivika-Queue-Infinite.html#queueCountChanged",
          "type": "function"
        },
        "index": {
          "description": "Signal when the queueCount property value has changed",
          "hierarchy": "Simulation Aivika Queue Infinite",
          "module": "Simulation.Aivika.Queue.Infinite",
          "name": "queueCountChanged",
          "normalized": "Queue a b c d e-\u003eSignal Int",
          "package": "aivika",
          "partial": "Count Changed",
          "signature": "Queue sm qm so qo a-\u003eSignal Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Queue-Infinite.html#v:queueCountChanged"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSignal when the \u003ccode\u003e\u003ca\u003equeueCount\u003c/a\u003e\u003c/code\u003e property value has changed.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Queue.Infinite",
          "name": "queueCountChanged_",
          "package": "aivika",
          "signature": "Queue sm qm so qo a -\u003e Signal ()",
          "source": "src/Simulation-Aivika-Queue-Infinite.html#queueCountChanged_",
          "type": "function"
        },
        "index": {
          "description": "Signal when the queueCount property value has changed",
          "hierarchy": "Simulation Aivika Queue Infinite",
          "module": "Simulation.Aivika.Queue.Infinite",
          "name": "queueCountChanged_",
          "normalized": "Queue a b c d e-\u003eSignal()",
          "package": "aivika",
          "partial": "Count Changed",
          "signature": "Queue sm qm so qo a-\u003eSignal()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Queue-Infinite.html#v:queueCountChanged_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest whether the queue is empty.\n\u003c/p\u003e\u003cp\u003eSee also \u003ccode\u003e\u003ca\u003equeueNullChanged\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003equeueNullChanged_\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Queue.Infinite",
          "name": "queueNull",
          "package": "aivika",
          "signature": "Queue sm qm so qo a -\u003e Event Bool",
          "source": "src/Simulation-Aivika-Queue-Infinite.html#queueNull",
          "type": "function"
        },
        "index": {
          "description": "Test whether the queue is empty See also queueNullChanged and queueNullChanged",
          "hierarchy": "Simulation Aivika Queue Infinite",
          "module": "Simulation.Aivika.Queue.Infinite",
          "name": "queueNull",
          "normalized": "Queue a b c d e-\u003eEvent Bool",
          "package": "aivika",
          "partial": "Null",
          "signature": "Queue sm qm so qo a-\u003eEvent Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Queue-Infinite.html#v:queueNull"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSignal when the \u003ccode\u003e\u003ca\u003equeueNull\u003c/a\u003e\u003c/code\u003e property value has changed.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Queue.Infinite",
          "name": "queueNullChanged",
          "package": "aivika",
          "signature": "Queue sm qm so qo a -\u003e Signal Bool",
          "source": "src/Simulation-Aivika-Queue-Infinite.html#queueNullChanged",
          "type": "function"
        },
        "index": {
          "description": "Signal when the queueNull property value has changed",
          "hierarchy": "Simulation Aivika Queue Infinite",
          "module": "Simulation.Aivika.Queue.Infinite",
          "name": "queueNullChanged",
          "normalized": "Queue a b c d e-\u003eSignal Bool",
          "package": "aivika",
          "partial": "Null Changed",
          "signature": "Queue sm qm so qo a-\u003eSignal Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Queue-Infinite.html#v:queueNullChanged"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSignal when the \u003ccode\u003e\u003ca\u003equeueNull\u003c/a\u003e\u003c/code\u003e property value has changed.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Queue.Infinite",
          "name": "queueNullChanged_",
          "package": "aivika",
          "signature": "Queue sm qm so qo a -\u003e Signal ()",
          "source": "src/Simulation-Aivika-Queue-Infinite.html#queueNullChanged_",
          "type": "function"
        },
        "index": {
          "description": "Signal when the queueNull property value has changed",
          "hierarchy": "Simulation Aivika Queue Infinite",
          "module": "Simulation.Aivika.Queue.Infinite",
          "name": "queueNullChanged_",
          "normalized": "Queue a b c d e-\u003eSignal()",
          "package": "aivika",
          "partial": "Null Changed",
          "signature": "Queue sm qm so qo a-\u003eSignal()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Queue-Infinite.html#v:queueNullChanged_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the summary for the queue with desciption of its\n properties and activities using the specified indent.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Queue.Infinite",
          "name": "queueSummary",
          "package": "aivika",
          "signature": "Queue sm qm so qo a -\u003e Int -\u003e Event ShowS",
          "source": "src/Simulation-Aivika-Queue-Infinite.html#queueSummary",
          "type": "function"
        },
        "index": {
          "description": "Return the summary for the queue with desciption of its properties and activities using the specified indent",
          "hierarchy": "Simulation Aivika Queue Infinite",
          "module": "Simulation.Aivika.Queue.Infinite",
          "name": "queueSummary",
          "normalized": "Queue a b c d e-\u003eInt-\u003eEvent ShowS",
          "package": "aivika",
          "partial": "Summary",
          "signature": "Queue sm qm so qo a-\u003eInt-\u003eEvent ShowS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Queue-Infinite.html#v:queueSummary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the wait time from the time at which the item was stored in the queue to\n the time at which it was dequeued.\n\u003c/p\u003e\u003cp\u003eSee also \u003ccode\u003e\u003ca\u003equeueWaitTimeChanged\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003equeueWaitTimeChanged_\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Queue.Infinite",
          "name": "queueWaitTime",
          "package": "aivika",
          "signature": "Queue sm qm so qo a -\u003e Event (SamplingStats Double)",
          "source": "src/Simulation-Aivika-Queue-Infinite.html#queueWaitTime",
          "type": "function"
        },
        "index": {
          "description": "Return the wait time from the time at which the item was stored in the queue to the time at which it was dequeued See also queueWaitTimeChanged and queueWaitTimeChanged",
          "hierarchy": "Simulation Aivika Queue Infinite",
          "module": "Simulation.Aivika.Queue.Infinite",
          "name": "queueWaitTime",
          "normalized": "Queue a b c d e-\u003eEvent(SamplingStats Double)",
          "package": "aivika",
          "partial": "Wait Time",
          "signature": "Queue sm qm so qo a-\u003eEvent(SamplingStats Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Queue-Infinite.html#v:queueWaitTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSignal when the \u003ccode\u003e\u003ca\u003equeueWaitTime\u003c/a\u003e\u003c/code\u003e property value has changed.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Queue.Infinite",
          "name": "queueWaitTimeChanged",
          "package": "aivika",
          "signature": "Queue sm qm so qo a -\u003e Signal (SamplingStats Double)",
          "source": "src/Simulation-Aivika-Queue-Infinite.html#queueWaitTimeChanged",
          "type": "function"
        },
        "index": {
          "description": "Signal when the queueWaitTime property value has changed",
          "hierarchy": "Simulation Aivika Queue Infinite",
          "module": "Simulation.Aivika.Queue.Infinite",
          "name": "queueWaitTimeChanged",
          "normalized": "Queue a b c d e-\u003eSignal(SamplingStats Double)",
          "package": "aivika",
          "partial": "Wait Time Changed",
          "signature": "Queue sm qm so qo a-\u003eSignal(SamplingStats Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Queue-Infinite.html#v:queueWaitTimeChanged"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSignal when the \u003ccode\u003e\u003ca\u003equeueWaitTime\u003c/a\u003e\u003c/code\u003e property value has changed.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Queue.Infinite",
          "name": "queueWaitTimeChanged_",
          "package": "aivika",
          "signature": "Queue sm qm so qo a -\u003e Signal ()",
          "source": "src/Simulation-Aivika-Queue-Infinite.html#queueWaitTimeChanged_",
          "type": "function"
        },
        "index": {
          "description": "Signal when the queueWaitTime property value has changed",
          "hierarchy": "Simulation Aivika Queue Infinite",
          "module": "Simulation.Aivika.Queue.Infinite",
          "name": "queueWaitTimeChanged_",
          "normalized": "Queue a b c d e-\u003eSignal()",
          "package": "aivika",
          "partial": "Wait Time Changed",
          "signature": "Queue sm qm so qo a-\u003eSignal()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Queue-Infinite.html#v:queueWaitTimeChanged_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTry to dequeue immediately.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Queue.Infinite",
          "name": "tryDequeue",
          "package": "aivika",
          "signature": "Queue sm qm so qo a-\u003e Event (Maybe a)",
          "type": "function"
        },
        "index": {
          "description": "Try to dequeue immediately",
          "hierarchy": "Simulation Aivika Queue Infinite",
          "module": "Simulation.Aivika.Queue.Infinite",
          "name": "tryDequeue",
          "normalized": "Queue a b c d e-\u003eEvent(Maybe e)",
          "package": "aivika",
          "partial": "Dequeue",
          "signature": "Queue sm qm so qo a-\u003eEvent(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Queue-Infinite.html#v:tryDequeue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTested with: GHC 7.6.3\n\u003c/p\u003e\u003cp\u003eThis module defines a queue that can use the specified strategies. So, having only\n the \u003ccode\u003e\u003ca\u003eFCFS\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eLCFS\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eSIRO\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eStaticPriorities\u003c/a\u003e\u003c/code\u003e strategies, you can build\n 4 x 4 x 4 = 64 different types of the queue, each of them will have its own\n behaviour.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Simulation.Aivika.Queue",
          "name": "Queue",
          "package": "aivika",
          "source": "src/Simulation-Aivika-Queue.html",
          "type": "module"
        },
        "index": {
          "description": "Tested with GHC This module defines queue that can use the specified strategies So having only the FCFS LCFS SIRO and StaticPriorities strategies you can build different types of the queue each of them will have its own behaviour",
          "hierarchy": "Simulation Aivika Queue",
          "module": "Simulation.Aivika.Queue",
          "name": "Queue",
          "package": "aivika",
          "partial": "Queue",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Queue.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type synonym for the ordinary FIFO queue also known as the FCFS\n (First Come - First Serviced) queue.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Queue",
          "name": "FCFSQueue",
          "package": "aivika",
          "source": "src/Simulation-Aivika-Queue.html#FCFSQueue",
          "type": "type"
        },
        "index": {
          "description": "type synonym for the ordinary FIFO queue also known as the FCFS First Come First Serviced queue",
          "hierarchy": "Simulation Aivika Queue",
          "module": "Simulation.Aivika.Queue",
          "name": "FCFSQueue",
          "package": "aivika",
          "partial": "FCFSQueue",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Queue.html#t:FCFSQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type synonym for the ordinary LIFO queue also known as the LCFS\n (Last Come - First Serviced) queue.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Queue",
          "name": "LCFSQueue",
          "package": "aivika",
          "source": "src/Simulation-Aivika-Queue.html#LCFSQueue",
          "type": "type"
        },
        "index": {
          "description": "type synonym for the ordinary LIFO queue also known as the LCFS Last Come First Serviced queue",
          "hierarchy": "Simulation Aivika Queue",
          "module": "Simulation.Aivika.Queue",
          "name": "LCFSQueue",
          "package": "aivika",
          "partial": "LCFSQueue",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Queue.html#t:LCFSQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type synonym for the queue with static priorities applied when\n storing the elements in the queue.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Queue",
          "name": "PriorityQueue",
          "package": "aivika",
          "source": "src/Simulation-Aivika-Queue.html#PriorityQueue",
          "type": "type"
        },
        "index": {
          "description": "type synonym for the queue with static priorities applied when storing the elements in the queue",
          "hierarchy": "Simulation Aivika Queue",
          "module": "Simulation.Aivika.Queue",
          "name": "PriorityQueue",
          "package": "aivika",
          "partial": "Priority Queue",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Queue.html#t:PriorityQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents a queue using the specified strategies for enqueueing (input), \u003ccode\u003esi\u003c/code\u003e,\n internal storing (in memory), \u003ccode\u003esm\u003c/code\u003e, and dequeueing (output), \u003ccode\u003eso\u003c/code\u003e, where \u003ccode\u003ea\u003c/code\u003e denotes\n the type of items stored in the queue. Types \u003ccode\u003eqi\u003c/code\u003e, \u003ccode\u003eqm\u003c/code\u003e and \u003ccode\u003eqo\u003c/code\u003e are\n determined automatically and you should not care about them - they\n are dependent types.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Queue",
          "name": "Queue",
          "package": "aivika",
          "source": "src/Simulation-Aivika-Queue.html#Queue",
          "type": "data"
        },
        "index": {
          "description": "Represents queue using the specified strategies for enqueueing input si internal storing in memory sm and dequeueing output so where denotes the type of items stored in the queue Types qi qm and qo are determined automatically and you should not care about them they are dependent types",
          "hierarchy": "Simulation Aivika Queue",
          "module": "Simulation.Aivika.Queue",
          "name": "Queue",
          "package": "aivika",
          "partial": "Queue",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Queue.html#t:Queue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type synonym for the SIRO (Serviced in Random Order) queue.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Queue",
          "name": "SIROQueue",
          "package": "aivika",
          "source": "src/Simulation-Aivika-Queue.html#SIROQueue",
          "type": "type"
        },
        "index": {
          "description": "type synonym for the SIRO Serviced in Random Order queue",
          "hierarchy": "Simulation Aivika Queue",
          "module": "Simulation.Aivika.Queue",
          "name": "SIROQueue",
          "package": "aivika",
          "partial": "SIROQueue",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Queue.html#t:SIROQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDequeue suspending the process if the queue is empty.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Queue",
          "name": "dequeue",
          "package": "aivika",
          "signature": "Queue si qi sm qm so qo a-\u003e Process a",
          "type": "function"
        },
        "index": {
          "description": "Dequeue suspending the process if the queue is empty",
          "hierarchy": "Simulation Aivika Queue",
          "module": "Simulation.Aivika.Queue",
          "name": "dequeue",
          "normalized": "Queue a b c d e f g-\u003eProcess g",
          "package": "aivika",
          "signature": "Queue si qi sm qm so qo a-\u003eProcess a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Queue.html#v:dequeue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the total number of requests for dequeueing the items,\n not taking into account the failed attempts to dequeue immediately\n without suspension.\n\u003c/p\u003e\u003cp\u003eSee also \u003ccode\u003e\u003ca\u003edequeueCountChanged\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003edequeueCountChanged_\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Queue",
          "name": "dequeueCount",
          "package": "aivika",
          "signature": "Queue si qi sm qm so qo a -\u003e Event Int",
          "source": "src/Simulation-Aivika-Queue.html#dequeueCount",
          "type": "function"
        },
        "index": {
          "description": "Return the total number of requests for dequeueing the items not taking into account the failed attempts to dequeue immediately without suspension See also dequeueCountChanged and dequeueCountChanged",
          "hierarchy": "Simulation Aivika Queue",
          "module": "Simulation.Aivika.Queue",
          "name": "dequeueCount",
          "normalized": "Queue a b c d e f g-\u003eEvent Int",
          "package": "aivika",
          "partial": "Count",
          "signature": "Queue si qi sm qm so qo a-\u003eEvent Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Queue.html#v:dequeueCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSignal when the \u003ccode\u003e\u003ca\u003edequeueCount\u003c/a\u003e\u003c/code\u003e property value has changed.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Queue",
          "name": "dequeueCountChanged",
          "package": "aivika",
          "signature": "Queue si qi sm qm so qo a -\u003e Signal Int",
          "source": "src/Simulation-Aivika-Queue.html#dequeueCountChanged",
          "type": "function"
        },
        "index": {
          "description": "Signal when the dequeueCount property value has changed",
          "hierarchy": "Simulation Aivika Queue",
          "module": "Simulation.Aivika.Queue",
          "name": "dequeueCountChanged",
          "normalized": "Queue a b c d e f g-\u003eSignal Int",
          "package": "aivika",
          "partial": "Count Changed",
          "signature": "Queue si qi sm qm so qo a-\u003eSignal Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Queue.html#v:dequeueCountChanged"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSignal when the \u003ccode\u003e\u003ca\u003edequeueCount\u003c/a\u003e\u003c/code\u003e property value has changed.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Queue",
          "name": "dequeueCountChanged_",
          "package": "aivika",
          "signature": "Queue si qi sm qm so qo a -\u003e Signal ()",
          "source": "src/Simulation-Aivika-Queue.html#dequeueCountChanged_",
          "type": "function"
        },
        "index": {
          "description": "Signal when the dequeueCount property value has changed",
          "hierarchy": "Simulation Aivika Queue",
          "module": "Simulation.Aivika.Queue",
          "name": "dequeueCountChanged_",
          "normalized": "Queue a b c d e f g-\u003eSignal()",
          "package": "aivika",
          "partial": "Count Changed",
          "signature": "Queue si qi sm qm so qo a-\u003eSignal()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Queue.html#v:dequeueCountChanged_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the total number of output items that were actually dequeued.\n\u003c/p\u003e\u003cp\u003eSee also \u003ccode\u003e\u003ca\u003edequeueExtractCountChanged\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003edequeueExtractCountChanged_\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Queue",
          "name": "dequeueExtractCount",
          "package": "aivika",
          "signature": "Queue si qi sm qm so qo a -\u003e Event Int",
          "source": "src/Simulation-Aivika-Queue.html#dequeueExtractCount",
          "type": "function"
        },
        "index": {
          "description": "Return the total number of output items that were actually dequeued See also dequeueExtractCountChanged and dequeueExtractCountChanged",
          "hierarchy": "Simulation Aivika Queue",
          "module": "Simulation.Aivika.Queue",
          "name": "dequeueExtractCount",
          "normalized": "Queue a b c d e f g-\u003eEvent Int",
          "package": "aivika",
          "partial": "Extract Count",
          "signature": "Queue si qi sm qm so qo a-\u003eEvent Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Queue.html#v:dequeueExtractCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSignal when the \u003ccode\u003e\u003ca\u003edequeueExtractCount\u003c/a\u003e\u003c/code\u003e property value has changed.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Queue",
          "name": "dequeueExtractCountChanged",
          "package": "aivika",
          "signature": "Queue si qi sm qm so qo a -\u003e Signal Int",
          "source": "src/Simulation-Aivika-Queue.html#dequeueExtractCountChanged",
          "type": "function"
        },
        "index": {
          "description": "Signal when the dequeueExtractCount property value has changed",
          "hierarchy": "Simulation Aivika Queue",
          "module": "Simulation.Aivika.Queue",
          "name": "dequeueExtractCountChanged",
          "normalized": "Queue a b c d e f g-\u003eSignal Int",
          "package": "aivika",
          "partial": "Extract Count Changed",
          "signature": "Queue si qi sm qm so qo a-\u003eSignal Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Queue.html#v:dequeueExtractCountChanged"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSignal when the \u003ccode\u003e\u003ca\u003edequeueExtractCount\u003c/a\u003e\u003c/code\u003e property value has changed.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Queue",
          "name": "dequeueExtractCountChanged_",
          "package": "aivika",
          "signature": "Queue si qi sm qm so qo a -\u003e Signal ()",
          "source": "src/Simulation-Aivika-Queue.html#dequeueExtractCountChanged_",
          "type": "function"
        },
        "index": {
          "description": "Signal when the dequeueExtractCount property value has changed",
          "hierarchy": "Simulation Aivika Queue",
          "module": "Simulation.Aivika.Queue",
          "name": "dequeueExtractCountChanged_",
          "normalized": "Queue a b c d e f g-\u003eSignal()",
          "package": "aivika",
          "partial": "Extract Count Changed",
          "signature": "Queue si qi sm qm so qo a-\u003eSignal()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Queue.html#v:dequeueExtractCountChanged_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the rate of the output items that were actually dequeued: how many items\n per time.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Queue",
          "name": "dequeueExtractRate",
          "package": "aivika",
          "signature": "Queue si qi sm qm so qo a -\u003e Event Double",
          "source": "src/Simulation-Aivika-Queue.html#dequeueExtractRate",
          "type": "function"
        },
        "index": {
          "description": "Return the rate of the output items that were actually dequeued how many items per time",
          "hierarchy": "Simulation Aivika Queue",
          "module": "Simulation.Aivika.Queue",
          "name": "dequeueExtractRate",
          "normalized": "Queue a b c d e f g-\u003eEvent Double",
          "package": "aivika",
          "partial": "Extract Rate",
          "signature": "Queue si qi sm qm so qo a-\u003eEvent Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Queue.html#v:dequeueExtractRate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn a signal that notifies when the item was extracted from the internal\n storage of the queue and prepared for immediate receiving by the dequeuing process.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Queue",
          "name": "dequeueExtracted",
          "package": "aivika",
          "signature": "Queue si qi sm qm so qo a -\u003e Signal a",
          "source": "src/Simulation-Aivika-Queue.html#dequeueExtracted",
          "type": "function"
        },
        "index": {
          "description": "Return signal that notifies when the item was extracted from the internal storage of the queue and prepared for immediate receiving by the dequeuing process",
          "hierarchy": "Simulation Aivika Queue",
          "module": "Simulation.Aivika.Queue",
          "name": "dequeueExtracted",
          "normalized": "Queue a b c d e f g-\u003eSignal g",
          "package": "aivika",
          "partial": "Extracted",
          "signature": "Queue si qi sm qm so qo a-\u003eSignal a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Queue.html#v:dequeueExtracted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the rate of the requests for dequeueing the items: how many requests\n per time. It does not include the failed attempts to dequeue immediately\n without suspension.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Queue",
          "name": "dequeueRate",
          "package": "aivika",
          "signature": "Queue si qi sm qm so qo a -\u003e Event Double",
          "source": "src/Simulation-Aivika-Queue.html#dequeueRate",
          "type": "function"
        },
        "index": {
          "description": "Return the rate of the requests for dequeueing the items how many requests per time It does not include the failed attempts to dequeue immediately without suspension",
          "hierarchy": "Simulation Aivika Queue",
          "module": "Simulation.Aivika.Queue",
          "name": "dequeueRate",
          "normalized": "Queue a b c d e f g-\u003eEvent Double",
          "package": "aivika",
          "partial": "Rate",
          "signature": "Queue si qi sm qm so qo a-\u003eEvent Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Queue.html#v:dequeueRate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn a signal that notifies when the dequeuing operation was requested.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Queue",
          "name": "dequeueRequested",
          "package": "aivika",
          "signature": "Queue si qi sm qm so qo a -\u003e Signal ()",
          "source": "src/Simulation-Aivika-Queue.html#dequeueRequested",
          "type": "function"
        },
        "index": {
          "description": "Return signal that notifies when the dequeuing operation was requested",
          "hierarchy": "Simulation Aivika Queue",
          "module": "Simulation.Aivika.Queue",
          "name": "dequeueRequested",
          "normalized": "Queue a b c d e f g-\u003eSignal()",
          "package": "aivika",
          "partial": "Requested",
          "signature": "Queue si qi sm qm so qo a-\u003eSignal()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Queue.html#v:dequeueRequested"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe strategy applied to the dequeueing (output) processes when the queue is empty.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Queue",
          "name": "dequeueStrategy",
          "package": "aivika",
          "signature": "Queue si qi sm qm so qo a -\u003e so",
          "source": "src/Simulation-Aivika-Queue.html#dequeueStrategy",
          "type": "function"
        },
        "index": {
          "description": "The strategy applied to the dequeueing output processes when the queue is empty",
          "hierarchy": "Simulation Aivika Queue",
          "module": "Simulation.Aivika.Queue",
          "name": "dequeueStrategy",
          "normalized": "Queue a b c d e f g-\u003ee",
          "package": "aivika",
          "partial": "Strategy",
          "signature": "Queue si qi sm qm so qo a-\u003eso",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Queue.html#v:dequeueStrategy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the dequeue wait time from the time at which the item was requested\n for dequeueing to the time at which it was actually dequeued.\n\u003c/p\u003e\u003cp\u003eSee also \u003ccode\u003e\u003ca\u003edequeueWaitTimeChanged\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003edequeueWaitTimeChanged_\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Queue",
          "name": "dequeueWaitTime",
          "package": "aivika",
          "signature": "Queue si qi sm qm so qo a -\u003e Event (SamplingStats Double)",
          "source": "src/Simulation-Aivika-Queue.html#dequeueWaitTime",
          "type": "function"
        },
        "index": {
          "description": "Return the dequeue wait time from the time at which the item was requested for dequeueing to the time at which it was actually dequeued See also dequeueWaitTimeChanged and dequeueWaitTimeChanged",
          "hierarchy": "Simulation Aivika Queue",
          "module": "Simulation.Aivika.Queue",
          "name": "dequeueWaitTime",
          "normalized": "Queue a b c d e f g-\u003eEvent(SamplingStats Double)",
          "package": "aivika",
          "partial": "Wait Time",
          "signature": "Queue si qi sm qm so qo a-\u003eEvent(SamplingStats Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Queue.html#v:dequeueWaitTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSignal when the \u003ccode\u003e\u003ca\u003edequeueWaitTime\u003c/a\u003e\u003c/code\u003e property value has changed.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Queue",
          "name": "dequeueWaitTimeChanged",
          "package": "aivika",
          "signature": "Queue si qi sm qm so qo a -\u003e Signal (SamplingStats Double)",
          "source": "src/Simulation-Aivika-Queue.html#dequeueWaitTimeChanged",
          "type": "function"
        },
        "index": {
          "description": "Signal when the dequeueWaitTime property value has changed",
          "hierarchy": "Simulation Aivika Queue",
          "module": "Simulation.Aivika.Queue",
          "name": "dequeueWaitTimeChanged",
          "normalized": "Queue a b c d e f g-\u003eSignal(SamplingStats Double)",
          "package": "aivika",
          "partial": "Wait Time Changed",
          "signature": "Queue si qi sm qm so qo a-\u003eSignal(SamplingStats Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Queue.html#v:dequeueWaitTimeChanged"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSignal when the \u003ccode\u003e\u003ca\u003edequeueWaitTime\u003c/a\u003e\u003c/code\u003e property value has changed.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Queue",
          "name": "dequeueWaitTimeChanged_",
          "package": "aivika",
          "signature": "Queue si qi sm qm so qo a -\u003e Signal ()",
          "source": "src/Simulation-Aivika-Queue.html#dequeueWaitTimeChanged_",
          "type": "function"
        },
        "index": {
          "description": "Signal when the dequeueWaitTime property value has changed",
          "hierarchy": "Simulation Aivika Queue",
          "module": "Simulation.Aivika.Queue",
          "name": "dequeueWaitTimeChanged_",
          "normalized": "Queue a b c d e f g-\u003eSignal()",
          "package": "aivika",
          "partial": "Wait Time Changed",
          "signature": "Queue si qi sm qm so qo a-\u003eSignal()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Queue.html#v:dequeueWaitTimeChanged_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDequeue with the output priority suspending the process if the queue is empty.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Queue",
          "name": "dequeueWithOutputPriority",
          "package": "aivika",
          "signature": "Queue si qi sm qm so qo a-\u003e po-\u003e Process a",
          "type": "function"
        },
        "index": {
          "description": "Dequeue with the output priority suspending the process if the queue is empty",
          "hierarchy": "Simulation Aivika Queue",
          "module": "Simulation.Aivika.Queue",
          "name": "dequeueWithOutputPriority",
          "normalized": "Queue a b c d e f g-\u003eh-\u003eProcess g",
          "package": "aivika",
          "partial": "With Output Priority",
          "signature": "Queue si qi sm qm so qo a-\u003epo-\u003eProcess a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Queue.html#v:dequeueWithOutputPriority"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnqueue the item suspending the process if the queue is full.  \n\u003c/p\u003e",
          "module": "Simulation.Aivika.Queue",
          "name": "enqueue",
          "package": "aivika",
          "signature": "Queue si qi sm qm so qo a-\u003e a-\u003e Process ()",
          "type": "function"
        },
        "index": {
          "description": "Enqueue the item suspending the process if the queue is full",
          "hierarchy": "Simulation Aivika Queue",
          "module": "Simulation.Aivika.Queue",
          "name": "enqueue",
          "normalized": "Queue a b c d e f g-\u003eg-\u003eProcess()",
          "package": "aivika",
          "signature": "Queue si qi sm qm so qo a-\u003ea-\u003eProcess()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Queue.html#v:enqueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the total number of input items that were enqueued.\n\u003c/p\u003e\u003cp\u003eSee also \u003ccode\u003e\u003ca\u003eenqueueCountChanged\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eenqueueCountChanged_\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Queue",
          "name": "enqueueCount",
          "package": "aivika",
          "signature": "Queue si qi sm qm so qo a -\u003e Event Int",
          "source": "src/Simulation-Aivika-Queue.html#enqueueCount",
          "type": "function"
        },
        "index": {
          "description": "Return the total number of input items that were enqueued See also enqueueCountChanged and enqueueCountChanged",
          "hierarchy": "Simulation Aivika Queue",
          "module": "Simulation.Aivika.Queue",
          "name": "enqueueCount",
          "normalized": "Queue a b c d e f g-\u003eEvent Int",
          "package": "aivika",
          "partial": "Count",
          "signature": "Queue si qi sm qm so qo a-\u003eEvent Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Queue.html#v:enqueueCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSignal when the \u003ccode\u003e\u003ca\u003eenqueueCount\u003c/a\u003e\u003c/code\u003e property value has changed.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Queue",
          "name": "enqueueCountChanged",
          "package": "aivika",
          "signature": "Queue si qi sm qm so qo a -\u003e Signal Int",
          "source": "src/Simulation-Aivika-Queue.html#enqueueCountChanged",
          "type": "function"
        },
        "index": {
          "description": "Signal when the enqueueCount property value has changed",
          "hierarchy": "Simulation Aivika Queue",
          "module": "Simulation.Aivika.Queue",
          "name": "enqueueCountChanged",
          "normalized": "Queue a b c d e f g-\u003eSignal Int",
          "package": "aivika",
          "partial": "Count Changed",
          "signature": "Queue si qi sm qm so qo a-\u003eSignal Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Queue.html#v:enqueueCountChanged"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSignal when the \u003ccode\u003e\u003ca\u003eenqueueCount\u003c/a\u003e\u003c/code\u003e property value has changed.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Queue",
          "name": "enqueueCountChanged_",
          "package": "aivika",
          "signature": "Queue si qi sm qm so qo a -\u003e Signal ()",
          "source": "src/Simulation-Aivika-Queue.html#enqueueCountChanged_",
          "type": "function"
        },
        "index": {
          "description": "Signal when the enqueueCount property value has changed",
          "hierarchy": "Simulation Aivika Queue",
          "module": "Simulation.Aivika.Queue",
          "name": "enqueueCountChanged_",
          "normalized": "Queue a b c d e f g-\u003eSignal()",
          "package": "aivika",
          "partial": "Count Changed",
          "signature": "Queue si qi sm qm so qo a-\u003eSignal()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Queue.html#v:enqueueCountChanged_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn a signal that notifies when the enqueuing operation is initiated.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Queue",
          "name": "enqueueInitiated",
          "package": "aivika",
          "signature": "Queue si qi sm qm so qo a -\u003e Signal a",
          "source": "src/Simulation-Aivika-Queue.html#enqueueInitiated",
          "type": "function"
        },
        "index": {
          "description": "Return signal that notifies when the enqueuing operation is initiated",
          "hierarchy": "Simulation Aivika Queue",
          "module": "Simulation.Aivika.Queue",
          "name": "enqueueInitiated",
          "normalized": "Queue a b c d e f g-\u003eSignal g",
          "package": "aivika",
          "partial": "Initiated",
          "signature": "Queue si qi sm qm so qo a-\u003eSignal a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Queue.html#v:enqueueInitiated"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn a signal which notifies that the item was lost when \n attempting to add it to the full queue with help of\n \u003ccode\u003e\u003ca\u003eenqueueOrLost\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eenqueueOrLost_\u003c/a\u003e\u003c/code\u003e or similar functions that imply\n that the element can be lost. All their names are ending with \u003ccode\u003eOrLost\u003c/code\u003e\n or \u003ccode\u003eOrLost_\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIn other cases the enqueued items are not lost but the corresponded process\n can suspend until the internal queue storage is freed. Although there is one\n exception from this rule. If the process trying to enqueue a new element was\n suspended but then canceled through \u003ccode\u003e\u003ca\u003ecancelProcess\u003c/a\u003e\u003c/code\u003e from the outside then\n the item will not be added.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Queue",
          "name": "enqueueLost",
          "package": "aivika",
          "signature": "Queue si qi sm qm so qo a -\u003e Signal a",
          "source": "src/Simulation-Aivika-Queue.html#enqueueLost",
          "type": "function"
        },
        "index": {
          "description": "Return signal which notifies that the item was lost when attempting to add it to the full queue with help of enqueueOrLost enqueueOrLost or similar functions that imply that the element can be lost All their names are ending with OrLost or OrLost In other cases the enqueued items are not lost but the corresponded process can suspend until the internal queue storage is freed Although there is one exception from this rule If the process trying to enqueue new element was suspended but then canceled through cancelProcess from the outside then the item will not be added",
          "hierarchy": "Simulation Aivika Queue",
          "module": "Simulation.Aivika.Queue",
          "name": "enqueueLost",
          "normalized": "Queue a b c d e f g-\u003eSignal g",
          "package": "aivika",
          "partial": "Lost",
          "signature": "Queue si qi sm qm so qo a-\u003eSignal a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Queue.html#v:enqueueLost"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the number of lost items.\n\u003c/p\u003e\u003cp\u003eSee also \u003ccode\u003e\u003ca\u003eenqueueLostCountChanged\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eenqueueLostCountChanged_\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Queue",
          "name": "enqueueLostCount",
          "package": "aivika",
          "signature": "Queue si qi sm qm so qo a -\u003e Event Int",
          "source": "src/Simulation-Aivika-Queue.html#enqueueLostCount",
          "type": "function"
        },
        "index": {
          "description": "Return the number of lost items See also enqueueLostCountChanged and enqueueLostCountChanged",
          "hierarchy": "Simulation Aivika Queue",
          "module": "Simulation.Aivika.Queue",
          "name": "enqueueLostCount",
          "normalized": "Queue a b c d e f g-\u003eEvent Int",
          "package": "aivika",
          "partial": "Lost Count",
          "signature": "Queue si qi sm qm so qo a-\u003eEvent Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Queue.html#v:enqueueLostCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSignal when the \u003ccode\u003e\u003ca\u003eenqueueLostCount\u003c/a\u003e\u003c/code\u003e property value has changed.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Queue",
          "name": "enqueueLostCountChanged",
          "package": "aivika",
          "signature": "Queue si qi sm qm so qo a -\u003e Signal Int",
          "source": "src/Simulation-Aivika-Queue.html#enqueueLostCountChanged",
          "type": "function"
        },
        "index": {
          "description": "Signal when the enqueueLostCount property value has changed",
          "hierarchy": "Simulation Aivika Queue",
          "module": "Simulation.Aivika.Queue",
          "name": "enqueueLostCountChanged",
          "normalized": "Queue a b c d e f g-\u003eSignal Int",
          "package": "aivika",
          "partial": "Lost Count Changed",
          "signature": "Queue si qi sm qm so qo a-\u003eSignal Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Queue.html#v:enqueueLostCountChanged"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSignal when the \u003ccode\u003e\u003ca\u003eenqueueLostCount\u003c/a\u003e\u003c/code\u003e property value has changed.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Queue",
          "name": "enqueueLostCountChanged_",
          "package": "aivika",
          "signature": "Queue si qi sm qm so qo a -\u003e Signal ()",
          "source": "src/Simulation-Aivika-Queue.html#enqueueLostCountChanged_",
          "type": "function"
        },
        "index": {
          "description": "Signal when the enqueueLostCount property value has changed",
          "hierarchy": "Simulation Aivika Queue",
          "module": "Simulation.Aivika.Queue",
          "name": "enqueueLostCountChanged_",
          "normalized": "Queue a b c d e f g-\u003eSignal()",
          "package": "aivika",
          "partial": "Lost Count Changed",
          "signature": "Queue si qi sm qm so qo a-\u003eSignal()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Queue.html#v:enqueueLostCountChanged_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTry to enqueue the item. If the queue is full then the item will be lost\n and \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e will be returned.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Queue",
          "name": "enqueueOrLost",
          "package": "aivika",
          "signature": "Queue si qi sm qm so qo a-\u003e a-\u003e Event Bool",
          "type": "function"
        },
        "index": {
          "description": "Try to enqueue the item If the queue is full then the item will be lost and False will be returned",
          "hierarchy": "Simulation Aivika Queue",
          "module": "Simulation.Aivika.Queue",
          "name": "enqueueOrLost",
          "normalized": "Queue a b c d e f g-\u003eg-\u003eEvent Bool",
          "package": "aivika",
          "partial": "Or Lost",
          "signature": "Queue si qi sm qm so qo a-\u003ea-\u003eEvent Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Queue.html#v:enqueueOrLost"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTry to enqueue the item. If the queue is full then the item will be lost.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Queue",
          "name": "enqueueOrLost_",
          "package": "aivika",
          "signature": "Queue si qi sm qm so qo a-\u003e a-\u003e Event ()",
          "type": "function"
        },
        "index": {
          "description": "Try to enqueue the item If the queue is full then the item will be lost",
          "hierarchy": "Simulation Aivika Queue",
          "module": "Simulation.Aivika.Queue",
          "name": "enqueueOrLost_",
          "normalized": "Queue a b c d e f g-\u003eg-\u003eEvent()",
          "package": "aivika",
          "partial": "Or Lost",
          "signature": "Queue si qi sm qm so qo a-\u003ea-\u003eEvent()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Queue.html#v:enqueueOrLost_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the rate of the input items that were enqueued: how many items\n per time.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Queue",
          "name": "enqueueRate",
          "package": "aivika",
          "signature": "Queue si qi sm qm so qo a -\u003e Event Double",
          "source": "src/Simulation-Aivika-Queue.html#enqueueRate",
          "type": "function"
        },
        "index": {
          "description": "Return the rate of the input items that were enqueued how many items per time",
          "hierarchy": "Simulation Aivika Queue",
          "module": "Simulation.Aivika.Queue",
          "name": "enqueueRate",
          "normalized": "Queue a b c d e f g-\u003eEvent Double",
          "package": "aivika",
          "partial": "Rate",
          "signature": "Queue si qi sm qm so qo a-\u003eEvent Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Queue.html#v:enqueueRate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the total number of input items that were stored.\n\u003c/p\u003e\u003cp\u003eSee also \u003ccode\u003e\u003ca\u003eenqueueStoreCountChanged\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eenqueueStoreCountChanged_\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Queue",
          "name": "enqueueStoreCount",
          "package": "aivika",
          "signature": "Queue si qi sm qm so qo a -\u003e Event Int",
          "source": "src/Simulation-Aivika-Queue.html#enqueueStoreCount",
          "type": "function"
        },
        "index": {
          "description": "Return the total number of input items that were stored See also enqueueStoreCountChanged and enqueueStoreCountChanged",
          "hierarchy": "Simulation Aivika Queue",
          "module": "Simulation.Aivika.Queue",
          "name": "enqueueStoreCount",
          "normalized": "Queue a b c d e f g-\u003eEvent Int",
          "package": "aivika",
          "partial": "Store Count",
          "signature": "Queue si qi sm qm so qo a-\u003eEvent Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Queue.html#v:enqueueStoreCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSignal when the \u003ccode\u003e\u003ca\u003eenqueueStoreCount\u003c/a\u003e\u003c/code\u003e property value has changed.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Queue",
          "name": "enqueueStoreCountChanged",
          "package": "aivika",
          "signature": "Queue si qi sm qm so qo a -\u003e Signal Int",
          "source": "src/Simulation-Aivika-Queue.html#enqueueStoreCountChanged",
          "type": "function"
        },
        "index": {
          "description": "Signal when the enqueueStoreCount property value has changed",
          "hierarchy": "Simulation Aivika Queue",
          "module": "Simulation.Aivika.Queue",
          "name": "enqueueStoreCountChanged",
          "normalized": "Queue a b c d e f g-\u003eSignal Int",
          "package": "aivika",
          "partial": "Store Count Changed",
          "signature": "Queue si qi sm qm so qo a-\u003eSignal Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Queue.html#v:enqueueStoreCountChanged"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSignal when the \u003ccode\u003e\u003ca\u003eenqueueStoreCount\u003c/a\u003e\u003c/code\u003e property value has changed.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Queue",
          "name": "enqueueStoreCountChanged_",
          "package": "aivika",
          "signature": "Queue si qi sm qm so qo a -\u003e Signal ()",
          "source": "src/Simulation-Aivika-Queue.html#enqueueStoreCountChanged_",
          "type": "function"
        },
        "index": {
          "description": "Signal when the enqueueStoreCount property value has changed",
          "hierarchy": "Simulation Aivika Queue",
          "module": "Simulation.Aivika.Queue",
          "name": "enqueueStoreCountChanged_",
          "normalized": "Queue a b c d e f g-\u003eSignal()",
          "package": "aivika",
          "partial": "Store Count Changed",
          "signature": "Queue si qi sm qm so qo a-\u003eSignal()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Queue.html#v:enqueueStoreCountChanged_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the rate of the items that were stored: how many items\n per time.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Queue",
          "name": "enqueueStoreRate",
          "package": "aivika",
          "signature": "Queue si qi sm qm so qo a -\u003e Event Double",
          "source": "src/Simulation-Aivika-Queue.html#enqueueStoreRate",
          "type": "function"
        },
        "index": {
          "description": "Return the rate of the items that were stored how many items per time",
          "hierarchy": "Simulation Aivika Queue",
          "module": "Simulation.Aivika.Queue",
          "name": "enqueueStoreRate",
          "normalized": "Queue a b c d e f g-\u003eEvent Double",
          "package": "aivika",
          "partial": "Store Rate",
          "signature": "Queue si qi sm qm so qo a-\u003eEvent Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Queue.html#v:enqueueStoreRate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn a signal that notifies when the enqueuing operation is completed\n and the item is stored in the internal memory of the queue.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Queue",
          "name": "enqueueStored",
          "package": "aivika",
          "signature": "Queue si qi sm qm so qo a -\u003e Signal a",
          "source": "src/Simulation-Aivika-Queue.html#enqueueStored",
          "type": "function"
        },
        "index": {
          "description": "Return signal that notifies when the enqueuing operation is completed and the item is stored in the internal memory of the queue",
          "hierarchy": "Simulation Aivika Queue",
          "module": "Simulation.Aivika.Queue",
          "name": "enqueueStored",
          "normalized": "Queue a b c d e f g-\u003eSignal g",
          "package": "aivika",
          "partial": "Stored",
          "signature": "Queue si qi sm qm so qo a-\u003eSignal a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Queue.html#v:enqueueStored"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe strategy applied when storing (in memory) items in the queue.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Queue",
          "name": "enqueueStoringStrategy",
          "package": "aivika",
          "signature": "Queue si qi sm qm so qo a -\u003e sm",
          "source": "src/Simulation-Aivika-Queue.html#enqueueStoringStrategy",
          "type": "function"
        },
        "index": {
          "description": "The strategy applied when storing in memory items in the queue",
          "hierarchy": "Simulation Aivika Queue",
          "module": "Simulation.Aivika.Queue",
          "name": "enqueueStoringStrategy",
          "normalized": "Queue a b c d e f g-\u003ec",
          "package": "aivika",
          "partial": "Storing Strategy",
          "signature": "Queue si qi sm qm so qo a-\u003esm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Queue.html#v:enqueueStoringStrategy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe strategy applied to the enqueueing (input) processes when the queue is full.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Queue",
          "name": "enqueueStrategy",
          "package": "aivika",
          "signature": "Queue si qi sm qm so qo a -\u003e si",
          "source": "src/Simulation-Aivika-Queue.html#enqueueStrategy",
          "type": "function"
        },
        "index": {
          "description": "The strategy applied to the enqueueing input processes when the queue is full",
          "hierarchy": "Simulation Aivika Queue",
          "module": "Simulation.Aivika.Queue",
          "name": "enqueueStrategy",
          "normalized": "Queue a b c d e f g-\u003ea",
          "package": "aivika",
          "partial": "Strategy",
          "signature": "Queue si qi sm qm so qo a-\u003esi",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Queue.html#v:enqueueStrategy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the enqueue wait time from the time at which the enqueueing operation\n was initiated to the time at which the item was stored in the queue.\n\u003c/p\u003e\u003cp\u003eSee also \u003ccode\u003e\u003ca\u003eenqueueWaitTimeChanged\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eenqueueWaitTimeChanged_\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Queue",
          "name": "enqueueWaitTime",
          "package": "aivika",
          "signature": "Queue si qi sm qm so qo a -\u003e Event (SamplingStats Double)",
          "source": "src/Simulation-Aivika-Queue.html#enqueueWaitTime",
          "type": "function"
        },
        "index": {
          "description": "Return the enqueue wait time from the time at which the enqueueing operation was initiated to the time at which the item was stored in the queue See also enqueueWaitTimeChanged and enqueueWaitTimeChanged",
          "hierarchy": "Simulation Aivika Queue",
          "module": "Simulation.Aivika.Queue",
          "name": "enqueueWaitTime",
          "normalized": "Queue a b c d e f g-\u003eEvent(SamplingStats Double)",
          "package": "aivika",
          "partial": "Wait Time",
          "signature": "Queue si qi sm qm so qo a-\u003eEvent(SamplingStats Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Queue.html#v:enqueueWaitTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSignal when the \u003ccode\u003e\u003ca\u003eenqueueWaitTime\u003c/a\u003e\u003c/code\u003e property value has changed.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Queue",
          "name": "enqueueWaitTimeChanged",
          "package": "aivika",
          "signature": "Queue si qi sm qm so qo a -\u003e Signal (SamplingStats Double)",
          "source": "src/Simulation-Aivika-Queue.html#enqueueWaitTimeChanged",
          "type": "function"
        },
        "index": {
          "description": "Signal when the enqueueWaitTime property value has changed",
          "hierarchy": "Simulation Aivika Queue",
          "module": "Simulation.Aivika.Queue",
          "name": "enqueueWaitTimeChanged",
          "normalized": "Queue a b c d e f g-\u003eSignal(SamplingStats Double)",
          "package": "aivika",
          "partial": "Wait Time Changed",
          "signature": "Queue si qi sm qm so qo a-\u003eSignal(SamplingStats Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Queue.html#v:enqueueWaitTimeChanged"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSignal when the \u003ccode\u003e\u003ca\u003eenqueueWaitTime\u003c/a\u003e\u003c/code\u003e property value has changed.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Queue",
          "name": "enqueueWaitTimeChanged_",
          "package": "aivika",
          "signature": "Queue si qi sm qm so qo a -\u003e Signal ()",
          "source": "src/Simulation-Aivika-Queue.html#enqueueWaitTimeChanged_",
          "type": "function"
        },
        "index": {
          "description": "Signal when the enqueueWaitTime property value has changed",
          "hierarchy": "Simulation Aivika Queue",
          "module": "Simulation.Aivika.Queue",
          "name": "enqueueWaitTimeChanged_",
          "normalized": "Queue a b c d e f g-\u003eSignal()",
          "package": "aivika",
          "partial": "Wait Time Changed",
          "signature": "Queue si qi sm qm so qo a-\u003eSignal()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Queue.html#v:enqueueWaitTimeChanged_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnqueue with the input priority the item suspending the process if the queue is full.  \n\u003c/p\u003e",
          "module": "Simulation.Aivika.Queue",
          "name": "enqueueWithInputPriority",
          "package": "aivika",
          "signature": "Queue si qi sm qm so qo a-\u003e pi-\u003e a-\u003e Process ()",
          "type": "function"
        },
        "index": {
          "description": "Enqueue with the input priority the item suspending the process if the queue is full",
          "hierarchy": "Simulation Aivika Queue",
          "module": "Simulation.Aivika.Queue",
          "name": "enqueueWithInputPriority",
          "normalized": "Queue a b c d e f g-\u003eh-\u003eg-\u003eProcess()",
          "package": "aivika",
          "partial": "With Input Priority",
          "signature": "Queue si qi sm qm so qo a-\u003epi-\u003ea-\u003eProcess()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Queue.html#v:enqueueWithInputPriority"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnqueue with the input and storing priorities the item suspending the process if the queue is full.  \n\u003c/p\u003e",
          "module": "Simulation.Aivika.Queue",
          "name": "enqueueWithInputStoringPriorities",
          "package": "aivika",
          "signature": "Queue si qi sm qm so qo a-\u003e pi-\u003e pm-\u003e a-\u003e Process ()",
          "type": "function"
        },
        "index": {
          "description": "Enqueue with the input and storing priorities the item suspending the process if the queue is full",
          "hierarchy": "Simulation Aivika Queue",
          "module": "Simulation.Aivika.Queue",
          "name": "enqueueWithInputStoringPriorities",
          "normalized": "Queue a b c d e f g-\u003eh-\u003ei-\u003eg-\u003eProcess()",
          "package": "aivika",
          "partial": "With Input Storing Priorities",
          "signature": "Queue si qi sm qm so qo a-\u003epi-\u003epm-\u003ea-\u003eProcess()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Queue.html#v:enqueueWithInputStoringPriorities"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnqueue with the storing priority the item suspending the process if the queue is full.  \n\u003c/p\u003e",
          "module": "Simulation.Aivika.Queue",
          "name": "enqueueWithStoringPriority",
          "package": "aivika",
          "signature": "Queue si qi sm qm so qo a-\u003e pm-\u003e a-\u003e Process ()",
          "type": "function"
        },
        "index": {
          "description": "Enqueue with the storing priority the item suspending the process if the queue is full",
          "hierarchy": "Simulation Aivika Queue",
          "module": "Simulation.Aivika.Queue",
          "name": "enqueueWithStoringPriority",
          "normalized": "Queue a b c d e f g-\u003eh-\u003eg-\u003eProcess()",
          "package": "aivika",
          "partial": "With Storing Priority",
          "signature": "Queue si qi sm qm so qo a-\u003epm-\u003ea-\u003eProcess()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Queue.html#v:enqueueWithStoringPriority"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTry to enqueue with the storing priority the item. If the queue is full\n then the item will be lost and \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e will be returned.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Queue",
          "name": "enqueueWithStoringPriorityOrLost",
          "package": "aivika",
          "signature": "Queue si qi sm qm so qo a-\u003e pm-\u003e a-\u003e Event Bool",
          "type": "function"
        },
        "index": {
          "description": "Try to enqueue with the storing priority the item If the queue is full then the item will be lost and False will be returned",
          "hierarchy": "Simulation Aivika Queue",
          "module": "Simulation.Aivika.Queue",
          "name": "enqueueWithStoringPriorityOrLost",
          "normalized": "Queue a b c d e f g-\u003eh-\u003eg-\u003eEvent Bool",
          "package": "aivika",
          "partial": "With Storing Priority Or Lost",
          "signature": "Queue si qi sm qm so qo a-\u003epm-\u003ea-\u003eEvent Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Queue.html#v:enqueueWithStoringPriorityOrLost"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTry to enqueue with the storing priority the item. If the queue is full\n then the item will be lost.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Queue",
          "name": "enqueueWithStoringPriorityOrLost_",
          "package": "aivika",
          "signature": "Queue si qi sm qm so qo a-\u003e pm-\u003e a-\u003e Event ()",
          "type": "function"
        },
        "index": {
          "description": "Try to enqueue with the storing priority the item If the queue is full then the item will be lost",
          "hierarchy": "Simulation Aivika Queue",
          "module": "Simulation.Aivika.Queue",
          "name": "enqueueWithStoringPriorityOrLost_",
          "normalized": "Queue a b c d e f g-\u003eh-\u003eg-\u003eEvent()",
          "package": "aivika",
          "partial": "With Storing Priority Or Lost",
          "signature": "Queue si qi sm qm so qo a-\u003epm-\u003ea-\u003eEvent()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Queue.html#v:enqueueWithStoringPriorityOrLost_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new FCFS queue with the specified capacity.  \n\u003c/p\u003e",
          "module": "Simulation.Aivika.Queue",
          "name": "newFCFSQueue",
          "package": "aivika",
          "signature": "Int -\u003e Simulation (FCFSQueue a)",
          "source": "src/Simulation-Aivika-Queue.html#newFCFSQueue",
          "type": "function"
        },
        "index": {
          "description": "Create new FCFS queue with the specified capacity",
          "hierarchy": "Simulation Aivika Queue",
          "module": "Simulation.Aivika.Queue",
          "name": "newFCFSQueue",
          "normalized": "Int-\u003eSimulation(FCFSQueue a)",
          "package": "aivika",
          "partial": "FCFSQueue",
          "signature": "Int-\u003eSimulation(FCFSQueue a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Queue.html#v:newFCFSQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new LCFS queue with the specified capacity.  \n\u003c/p\u003e",
          "module": "Simulation.Aivika.Queue",
          "name": "newLCFSQueue",
          "package": "aivika",
          "signature": "Int -\u003e Simulation (LCFSQueue a)",
          "source": "src/Simulation-Aivika-Queue.html#newLCFSQueue",
          "type": "function"
        },
        "index": {
          "description": "Create new LCFS queue with the specified capacity",
          "hierarchy": "Simulation Aivika Queue",
          "module": "Simulation.Aivika.Queue",
          "name": "newLCFSQueue",
          "normalized": "Int-\u003eSimulation(LCFSQueue a)",
          "package": "aivika",
          "partial": "LCFSQueue",
          "signature": "Int-\u003eSimulation(LCFSQueue a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Queue.html#v:newLCFSQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new priority queue with the specified capacity.  \n\u003c/p\u003e",
          "module": "Simulation.Aivika.Queue",
          "name": "newPriorityQueue",
          "package": "aivika",
          "signature": "Int -\u003e Simulation (PriorityQueue a)",
          "source": "src/Simulation-Aivika-Queue.html#newPriorityQueue",
          "type": "function"
        },
        "index": {
          "description": "Create new priority queue with the specified capacity",
          "hierarchy": "Simulation Aivika Queue",
          "module": "Simulation.Aivika.Queue",
          "name": "newPriorityQueue",
          "normalized": "Int-\u003eSimulation(PriorityQueue a)",
          "package": "aivika",
          "partial": "Priority Queue",
          "signature": "Int-\u003eSimulation(PriorityQueue a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Queue.html#v:newPriorityQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new queue with the specified strategies and capacity.  \n\u003c/p\u003e",
          "module": "Simulation.Aivika.Queue",
          "name": "newQueue",
          "package": "aivika",
          "signature": "si-\u003e sm-\u003e so-\u003e Int-\u003e Simulation (Queue si qi sm qm so qo a)",
          "type": "function"
        },
        "index": {
          "description": "Create new queue with the specified strategies and capacity",
          "hierarchy": "Simulation Aivika Queue",
          "module": "Simulation.Aivika.Queue",
          "name": "newQueue",
          "normalized": "a-\u003eb-\u003ec-\u003eInt-\u003eSimulation(Queue a d b e c f g)",
          "package": "aivika",
          "partial": "Queue",
          "signature": "si-\u003esm-\u003eso-\u003eInt-\u003eSimulation(Queue si qi sm qm so qo a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Queue.html#v:newQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new SIRO queue with the specified capacity.  \n\u003c/p\u003e",
          "module": "Simulation.Aivika.Queue",
          "name": "newSIROQueue",
          "package": "aivika",
          "signature": "Int -\u003e Simulation (SIROQueue a)",
          "source": "src/Simulation-Aivika-Queue.html#newSIROQueue",
          "type": "function"
        },
        "index": {
          "description": "Create new SIRO queue with the specified capacity",
          "hierarchy": "Simulation Aivika Queue",
          "module": "Simulation.Aivika.Queue",
          "name": "newSIROQueue",
          "normalized": "Int-\u003eSimulation(SIROQueue a)",
          "package": "aivika",
          "partial": "SIROQueue",
          "signature": "Int-\u003eSimulation(SIROQueue a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Queue.html#v:newSIROQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSignal whenever any property of the queue changes.\n\u003c/p\u003e\u003cp\u003eThe property must have the corresponded signal. There are also characteristics\n similar to the properties but that have no signals. As a rule, such characteristics\n already depend on the simulation time and therefore they may change at any\n time point.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Queue",
          "name": "queueChanged_",
          "package": "aivika",
          "signature": "Queue si qi sm qm so qo a -\u003e Signal ()",
          "source": "src/Simulation-Aivika-Queue.html#queueChanged_",
          "type": "function"
        },
        "index": {
          "description": "Signal whenever any property of the queue changes The property must have the corresponded signal There are also characteristics similar to the properties but that have no signals As rule such characteristics already depend on the simulation time and therefore they may change at any time point",
          "hierarchy": "Simulation Aivika Queue",
          "module": "Simulation.Aivika.Queue",
          "name": "queueChanged_",
          "normalized": "Queue a b c d e f g-\u003eSignal()",
          "package": "aivika",
          "partial": "Changed",
          "signature": "Queue si qi sm qm so qo a-\u003eSignal()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Queue.html#v:queueChanged_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the queue size.\n\u003c/p\u003e\u003cp\u003eSee also \u003ccode\u003e\u003ca\u003equeueCountChanged\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003equeueCountChanged_\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Queue",
          "name": "queueCount",
          "package": "aivika",
          "signature": "Queue si qi sm qm so qo a -\u003e Event Int",
          "source": "src/Simulation-Aivika-Queue.html#queueCount",
          "type": "function"
        },
        "index": {
          "description": "Return the queue size See also queueCountChanged and queueCountChanged",
          "hierarchy": "Simulation Aivika Queue",
          "module": "Simulation.Aivika.Queue",
          "name": "queueCount",
          "normalized": "Queue a b c d e f g-\u003eEvent Int",
          "package": "aivika",
          "partial": "Count",
          "signature": "Queue si qi sm qm so qo a-\u003eEvent Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Queue.html#v:queueCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSignal when the \u003ccode\u003e\u003ca\u003equeueCount\u003c/a\u003e\u003c/code\u003e property value has changed.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Queue",
          "name": "queueCountChanged",
          "package": "aivika",
          "signature": "Queue si qi sm qm so qo a -\u003e Signal Int",
          "source": "src/Simulation-Aivika-Queue.html#queueCountChanged",
          "type": "function"
        },
        "index": {
          "description": "Signal when the queueCount property value has changed",
          "hierarchy": "Simulation Aivika Queue",
          "module": "Simulation.Aivika.Queue",
          "name": "queueCountChanged",
          "normalized": "Queue a b c d e f g-\u003eSignal Int",
          "package": "aivika",
          "partial": "Count Changed",
          "signature": "Queue si qi sm qm so qo a-\u003eSignal Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Queue.html#v:queueCountChanged"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSignal when the \u003ccode\u003e\u003ca\u003equeueCount\u003c/a\u003e\u003c/code\u003e property value has changed.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Queue",
          "name": "queueCountChanged_",
          "package": "aivika",
          "signature": "Queue si qi sm qm so qo a -\u003e Signal ()",
          "source": "src/Simulation-Aivika-Queue.html#queueCountChanged_",
          "type": "function"
        },
        "index": {
          "description": "Signal when the queueCount property value has changed",
          "hierarchy": "Simulation Aivika Queue",
          "module": "Simulation.Aivika.Queue",
          "name": "queueCountChanged_",
          "normalized": "Queue a b c d e f g-\u003eSignal()",
          "package": "aivika",
          "partial": "Count Changed",
          "signature": "Queue si qi sm qm so qo a-\u003eSignal()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Queue.html#v:queueCountChanged_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest whether the queue is full.\n\u003c/p\u003e\u003cp\u003eSee also \u003ccode\u003e\u003ca\u003equeueFullChanged\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003equeueFullChanged_\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Queue",
          "name": "queueFull",
          "package": "aivika",
          "signature": "Queue si qi sm qm so qo a -\u003e Event Bool",
          "source": "src/Simulation-Aivika-Queue.html#queueFull",
          "type": "function"
        },
        "index": {
          "description": "Test whether the queue is full See also queueFullChanged and queueFullChanged",
          "hierarchy": "Simulation Aivika Queue",
          "module": "Simulation.Aivika.Queue",
          "name": "queueFull",
          "normalized": "Queue a b c d e f g-\u003eEvent Bool",
          "package": "aivika",
          "partial": "Full",
          "signature": "Queue si qi sm qm so qo a-\u003eEvent Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Queue.html#v:queueFull"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSignal when the \u003ccode\u003e\u003ca\u003equeueFull\u003c/a\u003e\u003c/code\u003e property value has changed.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Queue",
          "name": "queueFullChanged",
          "package": "aivika",
          "signature": "Queue si qi sm qm so qo a -\u003e Signal Bool",
          "source": "src/Simulation-Aivika-Queue.html#queueFullChanged",
          "type": "function"
        },
        "index": {
          "description": "Signal when the queueFull property value has changed",
          "hierarchy": "Simulation Aivika Queue",
          "module": "Simulation.Aivika.Queue",
          "name": "queueFullChanged",
          "normalized": "Queue a b c d e f g-\u003eSignal Bool",
          "package": "aivika",
          "partial": "Full Changed",
          "signature": "Queue si qi sm qm so qo a-\u003eSignal Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Queue.html#v:queueFullChanged"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSignal when the \u003ccode\u003e\u003ca\u003equeueFull\u003c/a\u003e\u003c/code\u003e property value has changed.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Queue",
          "name": "queueFullChanged_",
          "package": "aivika",
          "signature": "Queue si qi sm qm so qo a -\u003e Signal ()",
          "source": "src/Simulation-Aivika-Queue.html#queueFullChanged_",
          "type": "function"
        },
        "index": {
          "description": "Signal when the queueFull property value has changed",
          "hierarchy": "Simulation Aivika Queue",
          "module": "Simulation.Aivika.Queue",
          "name": "queueFullChanged_",
          "normalized": "Queue a b c d e f g-\u003eSignal()",
          "package": "aivika",
          "partial": "Full Changed",
          "signature": "Queue si qi sm qm so qo a-\u003eSignal()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Queue.html#v:queueFullChanged_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the load factor: the queue size divided by its maximum size.\n\u003c/p\u003e\u003cp\u003eSee also \u003ccode\u003e\u003ca\u003equeueLoadFactorChanged\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003equeueLoadFactorChanged_\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Queue",
          "name": "queueLoadFactor",
          "package": "aivika",
          "signature": "Queue si qi sm qm so qo a -\u003e Event Double",
          "source": "src/Simulation-Aivika-Queue.html#queueLoadFactor",
          "type": "function"
        },
        "index": {
          "description": "Return the load factor the queue size divided by its maximum size See also queueLoadFactorChanged and queueLoadFactorChanged",
          "hierarchy": "Simulation Aivika Queue",
          "module": "Simulation.Aivika.Queue",
          "name": "queueLoadFactor",
          "normalized": "Queue a b c d e f g-\u003eEvent Double",
          "package": "aivika",
          "partial": "Load Factor",
          "signature": "Queue si qi sm qm so qo a-\u003eEvent Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Queue.html#v:queueLoadFactor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSignal when the \u003ccode\u003e\u003ca\u003equeueLoadFactor\u003c/a\u003e\u003c/code\u003e property value has changed.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Queue",
          "name": "queueLoadFactorChanged",
          "package": "aivika",
          "signature": "Queue si qi sm qm so qo a -\u003e Signal Double",
          "source": "src/Simulation-Aivika-Queue.html#queueLoadFactorChanged",
          "type": "function"
        },
        "index": {
          "description": "Signal when the queueLoadFactor property value has changed",
          "hierarchy": "Simulation Aivika Queue",
          "module": "Simulation.Aivika.Queue",
          "name": "queueLoadFactorChanged",
          "normalized": "Queue a b c d e f g-\u003eSignal Double",
          "package": "aivika",
          "partial": "Load Factor Changed",
          "signature": "Queue si qi sm qm so qo a-\u003eSignal Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Queue.html#v:queueLoadFactorChanged"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSignal when the \u003ccode\u003e\u003ca\u003equeueLoadFactor\u003c/a\u003e\u003c/code\u003e property value has changed.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Queue",
          "name": "queueLoadFactorChanged_",
          "package": "aivika",
          "signature": "Queue si qi sm qm so qo a -\u003e Signal ()",
          "source": "src/Simulation-Aivika-Queue.html#queueLoadFactorChanged_",
          "type": "function"
        },
        "index": {
          "description": "Signal when the queueLoadFactor property value has changed",
          "hierarchy": "Simulation Aivika Queue",
          "module": "Simulation.Aivika.Queue",
          "name": "queueLoadFactorChanged_",
          "normalized": "Queue a b c d e f g-\u003eSignal()",
          "package": "aivika",
          "partial": "Load Factor Changed",
          "signature": "Queue si qi sm qm so qo a-\u003eSignal()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Queue.html#v:queueLoadFactorChanged_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe queue capacity.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Queue",
          "name": "queueMaxCount",
          "package": "aivika",
          "signature": "Queue si qi sm qm so qo a -\u003e Int",
          "source": "src/Simulation-Aivika-Queue.html#queueMaxCount",
          "type": "function"
        },
        "index": {
          "description": "The queue capacity",
          "hierarchy": "Simulation Aivika Queue",
          "module": "Simulation.Aivika.Queue",
          "name": "queueMaxCount",
          "normalized": "Queue a b c d e f g-\u003eInt",
          "package": "aivika",
          "partial": "Max Count",
          "signature": "Queue si qi sm qm so qo a-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Queue.html#v:queueMaxCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest whether the queue is empty.\n\u003c/p\u003e\u003cp\u003eSee also \u003ccode\u003e\u003ca\u003equeueNullChanged\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003equeueNullChanged_\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Queue",
          "name": "queueNull",
          "package": "aivika",
          "signature": "Queue si qi sm qm so qo a -\u003e Event Bool",
          "source": "src/Simulation-Aivika-Queue.html#queueNull",
          "type": "function"
        },
        "index": {
          "description": "Test whether the queue is empty See also queueNullChanged and queueNullChanged",
          "hierarchy": "Simulation Aivika Queue",
          "module": "Simulation.Aivika.Queue",
          "name": "queueNull",
          "normalized": "Queue a b c d e f g-\u003eEvent Bool",
          "package": "aivika",
          "partial": "Null",
          "signature": "Queue si qi sm qm so qo a-\u003eEvent Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Queue.html#v:queueNull"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSignal when the \u003ccode\u003e\u003ca\u003equeueNull\u003c/a\u003e\u003c/code\u003e property value has changed.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Queue",
          "name": "queueNullChanged",
          "package": "aivika",
          "signature": "Queue si qi sm qm so qo a -\u003e Signal Bool",
          "source": "src/Simulation-Aivika-Queue.html#queueNullChanged",
          "type": "function"
        },
        "index": {
          "description": "Signal when the queueNull property value has changed",
          "hierarchy": "Simulation Aivika Queue",
          "module": "Simulation.Aivika.Queue",
          "name": "queueNullChanged",
          "normalized": "Queue a b c d e f g-\u003eSignal Bool",
          "package": "aivika",
          "partial": "Null Changed",
          "signature": "Queue si qi sm qm so qo a-\u003eSignal Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Queue.html#v:queueNullChanged"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSignal when the \u003ccode\u003e\u003ca\u003equeueNull\u003c/a\u003e\u003c/code\u003e property value has changed.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Queue",
          "name": "queueNullChanged_",
          "package": "aivika",
          "signature": "Queue si qi sm qm so qo a -\u003e Signal ()",
          "source": "src/Simulation-Aivika-Queue.html#queueNullChanged_",
          "type": "function"
        },
        "index": {
          "description": "Signal when the queueNull property value has changed",
          "hierarchy": "Simulation Aivika Queue",
          "module": "Simulation.Aivika.Queue",
          "name": "queueNullChanged_",
          "normalized": "Queue a b c d e f g-\u003eSignal()",
          "package": "aivika",
          "partial": "Null Changed",
          "signature": "Queue si qi sm qm so qo a-\u003eSignal()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Queue.html#v:queueNullChanged_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the summary for the queue with desciption of its\n properties and activities using the specified indent.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Queue",
          "name": "queueSummary",
          "package": "aivika",
          "signature": "Queue si qi sm qm so qo a -\u003e Int -\u003e Event ShowS",
          "source": "src/Simulation-Aivika-Queue.html#queueSummary",
          "type": "function"
        },
        "index": {
          "description": "Return the summary for the queue with desciption of its properties and activities using the specified indent",
          "hierarchy": "Simulation Aivika Queue",
          "module": "Simulation.Aivika.Queue",
          "name": "queueSummary",
          "normalized": "Queue a b c d e f g-\u003eInt-\u003eEvent ShowS",
          "package": "aivika",
          "partial": "Summary",
          "signature": "Queue si qi sm qm so qo a-\u003eInt-\u003eEvent ShowS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Queue.html#v:queueSummary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the total wait time from the time at which the enqueueing operation\n was initiated to the time at which the item was dequeued.\n\u003c/p\u003e\u003cp\u003eIn some sense, \u003ccode\u003equeueTotalWaitTime == queueInputWaitTime + queueWaitTime\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSee also \u003ccode\u003e\u003ca\u003equeueTotalWaitTimeChanged\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003equeueTotalWaitTimeChanged_\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Queue",
          "name": "queueTotalWaitTime",
          "package": "aivika",
          "signature": "Queue si qi sm qm so qo a -\u003e Event (SamplingStats Double)",
          "source": "src/Simulation-Aivika-Queue.html#queueTotalWaitTime",
          "type": "function"
        },
        "index": {
          "description": "Return the total wait time from the time at which the enqueueing operation was initiated to the time at which the item was dequeued In some sense queueTotalWaitTime queueInputWaitTime queueWaitTime See also queueTotalWaitTimeChanged and queueTotalWaitTimeChanged",
          "hierarchy": "Simulation Aivika Queue",
          "module": "Simulation.Aivika.Queue",
          "name": "queueTotalWaitTime",
          "normalized": "Queue a b c d e f g-\u003eEvent(SamplingStats Double)",
          "package": "aivika",
          "partial": "Total Wait Time",
          "signature": "Queue si qi sm qm so qo a-\u003eEvent(SamplingStats Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Queue.html#v:queueTotalWaitTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSignal when the \u003ccode\u003e\u003ca\u003equeueTotalWaitTime\u003c/a\u003e\u003c/code\u003e property value has changed.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Queue",
          "name": "queueTotalWaitTimeChanged",
          "package": "aivika",
          "signature": "Queue si qi sm qm so qo a -\u003e Signal (SamplingStats Double)",
          "source": "src/Simulation-Aivika-Queue.html#queueTotalWaitTimeChanged",
          "type": "function"
        },
        "index": {
          "description": "Signal when the queueTotalWaitTime property value has changed",
          "hierarchy": "Simulation Aivika Queue",
          "module": "Simulation.Aivika.Queue",
          "name": "queueTotalWaitTimeChanged",
          "normalized": "Queue a b c d e f g-\u003eSignal(SamplingStats Double)",
          "package": "aivika",
          "partial": "Total Wait Time Changed",
          "signature": "Queue si qi sm qm so qo a-\u003eSignal(SamplingStats Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Queue.html#v:queueTotalWaitTimeChanged"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSignal when the \u003ccode\u003e\u003ca\u003equeueTotalWaitTime\u003c/a\u003e\u003c/code\u003e property value has changed.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Queue",
          "name": "queueTotalWaitTimeChanged_",
          "package": "aivika",
          "signature": "Queue si qi sm qm so qo a -\u003e Signal ()",
          "source": "src/Simulation-Aivika-Queue.html#queueTotalWaitTimeChanged_",
          "type": "function"
        },
        "index": {
          "description": "Signal when the queueTotalWaitTime property value has changed",
          "hierarchy": "Simulation Aivika Queue",
          "module": "Simulation.Aivika.Queue",
          "name": "queueTotalWaitTimeChanged_",
          "normalized": "Queue a b c d e f g-\u003eSignal()",
          "package": "aivika",
          "partial": "Total Wait Time Changed",
          "signature": "Queue si qi sm qm so qo a-\u003eSignal()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Queue.html#v:queueTotalWaitTimeChanged_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the wait time from the time at which the item was stored in the queue to\n the time at which it was dequeued.\n\u003c/p\u003e\u003cp\u003eSee also \u003ccode\u003e\u003ca\u003equeueWaitTimeChanged\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003equeueWaitTimeChanged_\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Queue",
          "name": "queueWaitTime",
          "package": "aivika",
          "signature": "Queue si qi sm qm so qo a -\u003e Event (SamplingStats Double)",
          "source": "src/Simulation-Aivika-Queue.html#queueWaitTime",
          "type": "function"
        },
        "index": {
          "description": "Return the wait time from the time at which the item was stored in the queue to the time at which it was dequeued See also queueWaitTimeChanged and queueWaitTimeChanged",
          "hierarchy": "Simulation Aivika Queue",
          "module": "Simulation.Aivika.Queue",
          "name": "queueWaitTime",
          "normalized": "Queue a b c d e f g-\u003eEvent(SamplingStats Double)",
          "package": "aivika",
          "partial": "Wait Time",
          "signature": "Queue si qi sm qm so qo a-\u003eEvent(SamplingStats Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Queue.html#v:queueWaitTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSignal when the \u003ccode\u003e\u003ca\u003equeueWaitTime\u003c/a\u003e\u003c/code\u003e property value has changed.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Queue",
          "name": "queueWaitTimeChanged",
          "package": "aivika",
          "signature": "Queue si qi sm qm so qo a -\u003e Signal (SamplingStats Double)",
          "source": "src/Simulation-Aivika-Queue.html#queueWaitTimeChanged",
          "type": "function"
        },
        "index": {
          "description": "Signal when the queueWaitTime property value has changed",
          "hierarchy": "Simulation Aivika Queue",
          "module": "Simulation.Aivika.Queue",
          "name": "queueWaitTimeChanged",
          "normalized": "Queue a b c d e f g-\u003eSignal(SamplingStats Double)",
          "package": "aivika",
          "partial": "Wait Time Changed",
          "signature": "Queue si qi sm qm so qo a-\u003eSignal(SamplingStats Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Queue.html#v:queueWaitTimeChanged"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSignal when the \u003ccode\u003e\u003ca\u003equeueWaitTime\u003c/a\u003e\u003c/code\u003e property value has changed.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Queue",
          "name": "queueWaitTimeChanged_",
          "package": "aivika",
          "signature": "Queue si qi sm qm so qo a -\u003e Signal ()",
          "source": "src/Simulation-Aivika-Queue.html#queueWaitTimeChanged_",
          "type": "function"
        },
        "index": {
          "description": "Signal when the queueWaitTime property value has changed",
          "hierarchy": "Simulation Aivika Queue",
          "module": "Simulation.Aivika.Queue",
          "name": "queueWaitTimeChanged_",
          "normalized": "Queue a b c d e f g-\u003eSignal()",
          "package": "aivika",
          "partial": "Wait Time Changed",
          "signature": "Queue si qi sm qm so qo a-\u003eSignal()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Queue.html#v:queueWaitTimeChanged_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTry to dequeue immediately.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Queue",
          "name": "tryDequeue",
          "package": "aivika",
          "signature": "Queue si qi sm qm so qo a-\u003e Event (Maybe a)",
          "type": "function"
        },
        "index": {
          "description": "Try to dequeue immediately",
          "hierarchy": "Simulation Aivika Queue",
          "module": "Simulation.Aivika.Queue",
          "name": "tryDequeue",
          "normalized": "Queue a b c d e f g-\u003eEvent(Maybe g)",
          "package": "aivika",
          "partial": "Dequeue",
          "signature": "Queue si qi sm qm so qo a-\u003eEvent(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Queue.html#v:tryDequeue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTry to enqueue the item. Return \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e in the monad if the queue is full.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Queue",
          "name": "tryEnqueue",
          "package": "aivika",
          "signature": "Queue si qi sm qm so qo a-\u003e a-\u003e Event Bool",
          "type": "function"
        },
        "index": {
          "description": "Try to enqueue the item Return False in the monad if the queue is full",
          "hierarchy": "Simulation Aivika Queue",
          "module": "Simulation.Aivika.Queue",
          "name": "tryEnqueue",
          "normalized": "Queue a b c d e f g-\u003eg-\u003eEvent Bool",
          "package": "aivika",
          "partial": "Enqueue",
          "signature": "Queue si qi sm qm so qo a-\u003ea-\u003eEvent Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Queue.html#v:tryEnqueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTry to enqueue with the storing priority the item. Return \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e in\n the monad if the queue is full.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Queue",
          "name": "tryEnqueueWithStoringPriority",
          "package": "aivika",
          "signature": "Queue si qi sm qm so qo a-\u003e pm-\u003e a-\u003e Event Bool",
          "type": "function"
        },
        "index": {
          "description": "Try to enqueue with the storing priority the item Return False in the monad if the queue is full",
          "hierarchy": "Simulation Aivika Queue",
          "module": "Simulation.Aivika.Queue",
          "name": "tryEnqueueWithStoringPriority",
          "normalized": "Queue a b c d e f g-\u003eh-\u003eg-\u003eEvent Bool",
          "package": "aivika",
          "partial": "Enqueue With Storing Priority",
          "signature": "Queue si qi sm qm so qo a-\u003epm-\u003ea-\u003eEvent Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Queue.html#v:tryEnqueueWithStoringPriority"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWait while the queue is full.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Queue",
          "name": "waitWhileFullQueue",
          "package": "aivika",
          "signature": "Queue si qi sm qm so qo a -\u003e Process ()",
          "source": "src/Simulation-Aivika-Queue.html#waitWhileFullQueue",
          "type": "function"
        },
        "index": {
          "description": "Wait while the queue is full",
          "hierarchy": "Simulation Aivika Queue",
          "module": "Simulation.Aivika.Queue",
          "name": "waitWhileFullQueue",
          "normalized": "Queue a b c d e f g-\u003eProcess()",
          "package": "aivika",
          "partial": "While Full Queue",
          "signature": "Queue si qi sm qm so qo a-\u003eProcess()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Queue.html#v:waitWhileFullQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTested with: GHC 7.6.3\n\u003c/p\u003e\u003cp\u003eThis module defines the queue strategies.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Simulation.Aivika.QueueStrategy",
          "name": "QueueStrategy",
          "package": "aivika",
          "source": "src/Simulation-Aivika-QueueStrategy.html",
          "type": "module"
        },
        "index": {
          "description": "Tested with GHC This module defines the queue strategies",
          "hierarchy": "Simulation Aivika QueueStrategy",
          "module": "Simulation.Aivika.QueueStrategy",
          "name": "QueueStrategy",
          "package": "aivika",
          "partial": "Queue Strategy",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-QueueStrategy.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefines a strategy with support of the dequeuing operation.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.QueueStrategy",
          "name": "DequeueStrategy",
          "package": "aivika",
          "source": "src/Simulation-Aivika-QueueStrategy.html#DequeueStrategy",
          "type": "class"
        },
        "index": {
          "description": "Defines strategy with support of the dequeuing operation",
          "hierarchy": "Simulation Aivika QueueStrategy",
          "module": "Simulation.Aivika.QueueStrategy",
          "name": "DequeueStrategy",
          "package": "aivika",
          "partial": "Dequeue Strategy",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-QueueStrategy.html#t:DequeueStrategy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIt defines a strategy when we can enqueue a single element.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.QueueStrategy",
          "name": "EnqueueStrategy",
          "package": "aivika",
          "source": "src/Simulation-Aivika-QueueStrategy.html#EnqueueStrategy",
          "type": "class"
        },
        "index": {
          "description": "It defines strategy when we can enqueue single element",
          "hierarchy": "Simulation Aivika QueueStrategy",
          "module": "Simulation.Aivika.QueueStrategy",
          "name": "EnqueueStrategy",
          "package": "aivika",
          "partial": "Enqueue Strategy",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-QueueStrategy.html#t:EnqueueStrategy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStrategy: First Come - First Served (FCFS).\n\u003c/p\u003e",
          "module": "Simulation.Aivika.QueueStrategy",
          "name": "FCFS",
          "package": "aivika",
          "source": "src/Simulation-Aivika-QueueStrategy.html#FCFS",
          "type": "data"
        },
        "index": {
          "description": "Strategy First Come First Served FCFS",
          "hierarchy": "Simulation Aivika QueueStrategy",
          "module": "Simulation.Aivika.QueueStrategy",
          "name": "FCFS",
          "package": "aivika",
          "partial": "FCFS",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-QueueStrategy.html#t:FCFS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStrategy: Last Come - First Served (LCFS)\n\u003c/p\u003e",
          "module": "Simulation.Aivika.QueueStrategy",
          "name": "LCFS",
          "package": "aivika",
          "source": "src/Simulation-Aivika-QueueStrategy.html#LCFS",
          "type": "data"
        },
        "index": {
          "description": "Strategy Last Come First Served LCFS",
          "hierarchy": "Simulation Aivika QueueStrategy",
          "module": "Simulation.Aivika.QueueStrategy",
          "name": "LCFS",
          "package": "aivika",
          "partial": "LCFS",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-QueueStrategy.html#t:LCFS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIt defines a strategy when we can enqueue an element with the specified priority.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.QueueStrategy",
          "name": "PriorityQueueStrategy",
          "package": "aivika",
          "source": "src/Simulation-Aivika-QueueStrategy.html#PriorityQueueStrategy",
          "type": "class"
        },
        "index": {
          "description": "It defines strategy when we can enqueue an element with the specified priority",
          "hierarchy": "Simulation Aivika QueueStrategy",
          "module": "Simulation.Aivika.QueueStrategy",
          "name": "PriorityQueueStrategy",
          "package": "aivika",
          "partial": "Priority Queue Strategy",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-QueueStrategy.html#t:PriorityQueueStrategy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefines the basic queue strategy.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.QueueStrategy",
          "name": "QueueStrategy",
          "package": "aivika",
          "source": "src/Simulation-Aivika-QueueStrategy.html#QueueStrategy",
          "type": "class"
        },
        "index": {
          "description": "Defines the basic queue strategy",
          "hierarchy": "Simulation Aivika QueueStrategy",
          "module": "Simulation.Aivika.QueueStrategy",
          "name": "QueueStrategy",
          "package": "aivika",
          "partial": "Queue Strategy",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-QueueStrategy.html#t:QueueStrategy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStrategy: Service in Random Order (SIRO).\n\u003c/p\u003e",
          "module": "Simulation.Aivika.QueueStrategy",
          "name": "SIRO",
          "package": "aivika",
          "source": "src/Simulation-Aivika-QueueStrategy.html#SIRO",
          "type": "data"
        },
        "index": {
          "description": "Strategy Service in Random Order SIRO",
          "hierarchy": "Simulation Aivika QueueStrategy",
          "module": "Simulation.Aivika.QueueStrategy",
          "name": "SIRO",
          "package": "aivika",
          "partial": "SIRO",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-QueueStrategy.html#t:SIRO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStrategy: Static Priorities. It uses the priority queue.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.QueueStrategy",
          "name": "StaticPriorities",
          "package": "aivika",
          "source": "src/Simulation-Aivika-QueueStrategy.html#StaticPriorities",
          "type": "data"
        },
        "index": {
          "description": "Strategy Static Priorities It uses the priority queue",
          "hierarchy": "Simulation Aivika QueueStrategy",
          "module": "Simulation.Aivika.QueueStrategy",
          "name": "StaticPriorities",
          "package": "aivika",
          "partial": "Static Priorities",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-QueueStrategy.html#t:StaticPriorities"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Simulation.Aivika.QueueStrategy",
          "name": "FCFS",
          "package": "aivika",
          "signature": "FCFS",
          "source": "src/Simulation-Aivika-QueueStrategy.html#FCFS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Simulation Aivika QueueStrategy",
          "module": "Simulation.Aivika.QueueStrategy",
          "name": "FCFS",
          "package": "aivika",
          "partial": "FCFS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-QueueStrategy.html#v:FCFS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Simulation.Aivika.QueueStrategy",
          "name": "LCFS",
          "package": "aivika",
          "signature": "LCFS",
          "source": "src/Simulation-Aivika-QueueStrategy.html#LCFS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Simulation Aivika QueueStrategy",
          "module": "Simulation.Aivika.QueueStrategy",
          "name": "LCFS",
          "package": "aivika",
          "partial": "LCFS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-QueueStrategy.html#v:LCFS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Simulation.Aivika.QueueStrategy",
          "name": "SIRO",
          "package": "aivika",
          "signature": "SIRO",
          "source": "src/Simulation-Aivika-QueueStrategy.html#SIRO",
          "type": "function"
        },
        "index": {
          "hierarchy": "Simulation Aivika QueueStrategy",
          "module": "Simulation.Aivika.QueueStrategy",
          "name": "SIRO",
          "package": "aivika",
          "partial": "SIRO",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-QueueStrategy.html#v:SIRO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Simulation.Aivika.QueueStrategy",
          "name": "StaticPriorities",
          "package": "aivika",
          "signature": "StaticPriorities",
          "source": "src/Simulation-Aivika-QueueStrategy.html#StaticPriorities",
          "type": "function"
        },
        "index": {
          "hierarchy": "Simulation Aivika QueueStrategy",
          "module": "Simulation.Aivika.QueueStrategy",
          "name": "StaticPriorities",
          "package": "aivika",
          "partial": "Static Priorities",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-QueueStrategy.html#v:StaticPriorities"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new queue by the specified strategy.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.QueueStrategy",
          "name": "newStrategyQueue",
          "package": "aivika",
          "signature": "newStrategyQueue",
          "source": "src/Simulation-Aivika-QueueStrategy.html#newStrategyQueue",
          "type": "method"
        },
        "index": {
          "description": "Create new queue by the specified strategy",
          "hierarchy": "Simulation Aivika QueueStrategy",
          "module": "Simulation.Aivika.QueueStrategy",
          "name": "newStrategyQueue",
          "package": "aivika",
          "partial": "Strategy Queue",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-QueueStrategy.html#v:newStrategyQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDequeue the front element and return it.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.QueueStrategy",
          "name": "strategyDequeue",
          "package": "aivika",
          "signature": "strategyDequeue",
          "source": "src/Simulation-Aivika-QueueStrategy.html#strategyDequeue",
          "type": "method"
        },
        "index": {
          "description": "Dequeue the front element and return it",
          "hierarchy": "Simulation Aivika QueueStrategy",
          "module": "Simulation.Aivika.QueueStrategy",
          "name": "strategyDequeue",
          "package": "aivika",
          "partial": "Dequeue",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-QueueStrategy.html#v:strategyDequeue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnqueue an element.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.QueueStrategy",
          "name": "strategyEnqueue",
          "package": "aivika",
          "signature": "strategyEnqueue",
          "source": "src/Simulation-Aivika-QueueStrategy.html#strategyEnqueue",
          "type": "method"
        },
        "index": {
          "description": "Enqueue an element",
          "hierarchy": "Simulation Aivika QueueStrategy",
          "module": "Simulation.Aivika.QueueStrategy",
          "name": "strategyEnqueue",
          "package": "aivika",
          "partial": "Enqueue",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-QueueStrategy.html#v:strategyEnqueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnqueue an element with the specified priority.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.QueueStrategy",
          "name": "strategyEnqueueWithPriority",
          "package": "aivika",
          "signature": "strategyEnqueueWithPriority",
          "source": "src/Simulation-Aivika-QueueStrategy.html#strategyEnqueueWithPriority",
          "type": "method"
        },
        "index": {
          "description": "Enqueue an element with the specified priority",
          "hierarchy": "Simulation Aivika QueueStrategy",
          "module": "Simulation.Aivika.QueueStrategy",
          "name": "strategyEnqueueWithPriority",
          "package": "aivika",
          "partial": "Enqueue With Priority",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-QueueStrategy.html#v:strategyEnqueueWithPriority"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest whether the queue is empty.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.QueueStrategy",
          "name": "strategyQueueNull",
          "package": "aivika",
          "signature": "strategyQueueNull",
          "source": "src/Simulation-Aivika-QueueStrategy.html#strategyQueueNull",
          "type": "method"
        },
        "index": {
          "description": "Test whether the queue is empty",
          "hierarchy": "Simulation Aivika QueueStrategy",
          "module": "Simulation.Aivika.QueueStrategy",
          "name": "strategyQueueNull",
          "package": "aivika",
          "partial": "Queue Null",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-QueueStrategy.html#v:strategyQueueNull"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTested with: GHC 7.6.3\n\u003c/p\u003e\u003cp\u003eThis module defines an updatable reference that depends on the event queue.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Simulation.Aivika.Ref",
          "name": "Ref",
          "package": "aivika",
          "source": "src/Simulation-Aivika-Ref.html",
          "type": "module"
        },
        "index": {
          "description": "Tested with GHC This module defines an updatable reference that depends on the event queue",
          "hierarchy": "Simulation Aivika Ref",
          "module": "Simulation.Aivika.Ref",
          "name": "Ref",
          "package": "aivika",
          "partial": "Ref",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Ref.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eRef\u003c/a\u003e\u003c/code\u003e type represents a mutable variable similar to the \u003ccode\u003e\u003ca\u003eIORef\u003c/a\u003e\u003c/code\u003e variable \n but only dependent on the event queue, which allows synchronizing the reference\n with the model explicitly through the \u003ccode\u003e\u003ca\u003eEvent\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Ref",
          "name": "Ref",
          "package": "aivika",
          "source": "src/Simulation-Aivika-Ref.html#Ref",
          "type": "data"
        },
        "index": {
          "description": "The Ref type represents mutable variable similar to the IORef variable but only dependent on the event queue which allows synchronizing the reference with the model explicitly through the Event monad",
          "hierarchy": "Simulation Aivika Ref",
          "module": "Simulation.Aivika.Ref",
          "name": "Ref",
          "package": "aivika",
          "partial": "Ref",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Ref.html#t:Ref"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMutate the contents of the reference.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Ref",
          "name": "modifyRef",
          "package": "aivika",
          "signature": "Ref a -\u003e (a -\u003e a) -\u003e Event ()",
          "source": "src/Simulation-Aivika-Ref.html#modifyRef",
          "type": "function"
        },
        "index": {
          "description": "Mutate the contents of the reference",
          "hierarchy": "Simulation Aivika Ref",
          "module": "Simulation.Aivika.Ref",
          "name": "modifyRef",
          "normalized": "Ref a-\u003e(a-\u003ea)-\u003eEvent()",
          "package": "aivika",
          "partial": "Ref",
          "signature": "Ref a-\u003e(a-\u003ea)-\u003eEvent()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Ref.html#v:modifyRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new reference.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Ref",
          "name": "newRef",
          "package": "aivika",
          "signature": "a -\u003e Simulation (Ref a)",
          "source": "src/Simulation-Aivika-Ref.html#newRef",
          "type": "function"
        },
        "index": {
          "description": "Create new reference",
          "hierarchy": "Simulation Aivika Ref",
          "module": "Simulation.Aivika.Ref",
          "name": "newRef",
          "normalized": "a-\u003eSimulation(Ref a)",
          "package": "aivika",
          "partial": "Ref",
          "signature": "a-\u003eSimulation(Ref a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Ref.html#v:newRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead the value of a reference.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Ref",
          "name": "readRef",
          "package": "aivika",
          "signature": "Ref a -\u003e Event a",
          "source": "src/Simulation-Aivika-Ref.html#readRef",
          "type": "function"
        },
        "index": {
          "description": "Read the value of reference",
          "hierarchy": "Simulation Aivika Ref",
          "module": "Simulation.Aivika.Ref",
          "name": "readRef",
          "normalized": "Ref a-\u003eEvent a",
          "package": "aivika",
          "partial": "Ref",
          "signature": "Ref a-\u003eEvent a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Ref.html#v:readRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn a signal that notifies about every change of the reference state.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Ref",
          "name": "refChanged",
          "package": "aivika",
          "signature": "Ref a -\u003e Signal a",
          "source": "src/Simulation-Aivika-Ref.html#refChanged",
          "type": "function"
        },
        "index": {
          "description": "Return signal that notifies about every change of the reference state",
          "hierarchy": "Simulation Aivika Ref",
          "module": "Simulation.Aivika.Ref",
          "name": "refChanged",
          "normalized": "Ref a-\u003eSignal a",
          "package": "aivika",
          "partial": "Changed",
          "signature": "Ref a-\u003eSignal a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Ref.html#v:refChanged"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn a signal that notifies about every change of the reference state.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Ref",
          "name": "refChanged_",
          "package": "aivika",
          "signature": "Ref a -\u003e Signal ()",
          "source": "src/Simulation-Aivika-Ref.html#refChanged_",
          "type": "function"
        },
        "index": {
          "description": "Return signal that notifies about every change of the reference state",
          "hierarchy": "Simulation Aivika Ref",
          "module": "Simulation.Aivika.Ref",
          "name": "refChanged_",
          "normalized": "Ref a-\u003eSignal()",
          "package": "aivika",
          "partial": "Changed",
          "signature": "Ref a-\u003eSignal()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Ref.html#v:refChanged_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a new value into the reference.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Ref",
          "name": "writeRef",
          "package": "aivika",
          "signature": "Ref a -\u003e a -\u003e Event ()",
          "source": "src/Simulation-Aivika-Ref.html#writeRef",
          "type": "function"
        },
        "index": {
          "description": "Write new value into the reference",
          "hierarchy": "Simulation Aivika Ref",
          "module": "Simulation.Aivika.Ref",
          "name": "writeRef",
          "normalized": "Ref a-\u003ea-\u003eEvent()",
          "package": "aivika",
          "partial": "Ref",
          "signature": "Ref a-\u003ea-\u003eEvent()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Ref.html#v:writeRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTested with: GHC 7.6.3\n\u003c/p\u003e\u003cp\u003eThis module defines the resource which can be acquired and \n then released by the discontinuous process \u003ccode\u003e\u003ca\u003eProcess\u003c/a\u003e\u003c/code\u003e.\n The resource can be either limited by the upper bound\n (run-time check), or it can have no upper bound. The latter\n is useful for modeling the infinite queue, for example.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Simulation.Aivika.Resource",
          "name": "Resource",
          "package": "aivika",
          "source": "src/Simulation-Aivika-Resource.html",
          "type": "module"
        },
        "index": {
          "description": "Tested with GHC This module defines the resource which can be acquired and then released by the discontinuous process Process The resource can be either limited by the upper bound run-time check or it can have no upper bound The latter is useful for modeling the infinite queue for example",
          "hierarchy": "Simulation Aivika Resource",
          "module": "Simulation.Aivika.Resource",
          "name": "Resource",
          "package": "aivika",
          "partial": "Resource",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Resource.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe ordinary FCFS (First Come - First Serviced) resource.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Resource",
          "name": "FCFSResource",
          "package": "aivika",
          "source": "src/Simulation-Aivika-Resource.html#FCFSResource",
          "type": "type"
        },
        "index": {
          "description": "The ordinary FCFS First Come First Serviced resource",
          "hierarchy": "Simulation Aivika Resource",
          "module": "Simulation.Aivika.Resource",
          "name": "FCFSResource",
          "package": "aivika",
          "partial": "FCFSResource",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Resource.html#t:FCFSResource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe ordinary LCFS (Last Come - First Serviced) resource.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Resource",
          "name": "LCFSResource",
          "package": "aivika",
          "source": "src/Simulation-Aivika-Resource.html#LCFSResource",
          "type": "type"
        },
        "index": {
          "description": "The ordinary LCFS Last Come First Serviced resource",
          "hierarchy": "Simulation Aivika Resource",
          "module": "Simulation.Aivika.Resource",
          "name": "LCFSResource",
          "package": "aivika",
          "partial": "LCFSResource",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Resource.html#t:LCFSResource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe resource with static priorities.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Resource",
          "name": "PriorityResource",
          "package": "aivika",
          "source": "src/Simulation-Aivika-Resource.html#PriorityResource",
          "type": "type"
        },
        "index": {
          "description": "The resource with static priorities",
          "hierarchy": "Simulation Aivika Resource",
          "module": "Simulation.Aivika.Resource",
          "name": "PriorityResource",
          "package": "aivika",
          "partial": "Priority Resource",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Resource.html#t:PriorityResource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents the resource with strategy \u003ccode\u003es\u003c/code\u003e applied for queuing the requests.\n The \u003ccode\u003eq\u003c/code\u003e type is dependent and it is usually derived automatically.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Resource",
          "name": "Resource",
          "package": "aivika",
          "source": "src/Simulation-Aivika-Resource.html#Resource",
          "type": "data"
        },
        "index": {
          "description": "Represents the resource with strategy applied for queuing the requests The type is dependent and it is usually derived automatically",
          "hierarchy": "Simulation Aivika Resource",
          "module": "Simulation.Aivika.Resource",
          "name": "Resource",
          "package": "aivika",
          "partial": "Resource",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Resource.html#t:Resource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe SIRO (Serviced in Random Order) resource.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Resource",
          "name": "SIROResource",
          "package": "aivika",
          "source": "src/Simulation-Aivika-Resource.html#SIROResource",
          "type": "type"
        },
        "index": {
          "description": "The SIRO Serviced in Random Order resource",
          "hierarchy": "Simulation Aivika Resource",
          "module": "Simulation.Aivika.Resource",
          "name": "SIROResource",
          "package": "aivika",
          "partial": "SIROResource",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Resource.html#t:SIROResource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new FCFS resource with the specified initial count which value becomes\n the upper bound as well.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Resource",
          "name": "newFCFSResource",
          "package": "aivika",
          "signature": "Int-\u003e Simulation FCFSResource",
          "type": "function"
        },
        "index": {
          "description": "Create new FCFS resource with the specified initial count which value becomes the upper bound as well",
          "hierarchy": "Simulation Aivika Resource",
          "module": "Simulation.Aivika.Resource",
          "name": "newFCFSResource",
          "normalized": "Int-\u003eSimulation FCFSResource",
          "package": "aivika",
          "partial": "FCFSResource",
          "signature": "Int-\u003eSimulation FCFSResource",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Resource.html#v:newFCFSResource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new FCFS resource with the specified initial and maximum counts,\n where \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e means that the resource has no upper bound.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Resource",
          "name": "newFCFSResourceWithMaxCount",
          "package": "aivika",
          "signature": "Int-\u003e Maybe Int-\u003e Simulation FCFSResource",
          "type": "function"
        },
        "index": {
          "description": "Create new FCFS resource with the specified initial and maximum counts where Nothing means that the resource has no upper bound",
          "hierarchy": "Simulation Aivika Resource",
          "module": "Simulation.Aivika.Resource",
          "name": "newFCFSResourceWithMaxCount",
          "normalized": "Int-\u003eMaybe Int-\u003eSimulation FCFSResource",
          "package": "aivika",
          "partial": "FCFSResource With Max Count",
          "signature": "Int-\u003eMaybe Int-\u003eSimulation FCFSResource",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Resource.html#v:newFCFSResourceWithMaxCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new LCFS resource with the specified initial count which value becomes\n the upper bound as well.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Resource",
          "name": "newLCFSResource",
          "package": "aivika",
          "signature": "Int-\u003e Simulation LCFSResource",
          "type": "function"
        },
        "index": {
          "description": "Create new LCFS resource with the specified initial count which value becomes the upper bound as well",
          "hierarchy": "Simulation Aivika Resource",
          "module": "Simulation.Aivika.Resource",
          "name": "newLCFSResource",
          "normalized": "Int-\u003eSimulation LCFSResource",
          "package": "aivika",
          "partial": "LCFSResource",
          "signature": "Int-\u003eSimulation LCFSResource",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Resource.html#v:newLCFSResource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new LCFS resource with the specified initial and maximum counts,\n where \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e means that the resource has no upper bound.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Resource",
          "name": "newLCFSResourceWithMaxCount",
          "package": "aivika",
          "signature": "Int-\u003e Maybe Int-\u003e Simulation LCFSResource",
          "type": "function"
        },
        "index": {
          "description": "Create new LCFS resource with the specified initial and maximum counts where Nothing means that the resource has no upper bound",
          "hierarchy": "Simulation Aivika Resource",
          "module": "Simulation.Aivika.Resource",
          "name": "newLCFSResourceWithMaxCount",
          "normalized": "Int-\u003eMaybe Int-\u003eSimulation LCFSResource",
          "package": "aivika",
          "partial": "LCFSResource With Max Count",
          "signature": "Int-\u003eMaybe Int-\u003eSimulation LCFSResource",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Resource.html#v:newLCFSResourceWithMaxCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new priority resource with the specified initial count which value becomes\n the upper bound as well.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Resource",
          "name": "newPriorityResource",
          "package": "aivika",
          "signature": "Int-\u003e Simulation PriorityResource",
          "type": "function"
        },
        "index": {
          "description": "Create new priority resource with the specified initial count which value becomes the upper bound as well",
          "hierarchy": "Simulation Aivika Resource",
          "module": "Simulation.Aivika.Resource",
          "name": "newPriorityResource",
          "normalized": "Int-\u003eSimulation PriorityResource",
          "package": "aivika",
          "partial": "Priority Resource",
          "signature": "Int-\u003eSimulation PriorityResource",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Resource.html#v:newPriorityResource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new priority resource with the specified initial and maximum counts,\n where \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e means that the resource has no upper bound.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Resource",
          "name": "newPriorityResourceWithMaxCount",
          "package": "aivika",
          "signature": "Int-\u003e Maybe Int-\u003e Simulation PriorityResource",
          "type": "function"
        },
        "index": {
          "description": "Create new priority resource with the specified initial and maximum counts where Nothing means that the resource has no upper bound",
          "hierarchy": "Simulation Aivika Resource",
          "module": "Simulation.Aivika.Resource",
          "name": "newPriorityResourceWithMaxCount",
          "normalized": "Int-\u003eMaybe Int-\u003eSimulation PriorityResource",
          "package": "aivika",
          "partial": "Priority Resource With Max Count",
          "signature": "Int-\u003eMaybe Int-\u003eSimulation PriorityResource",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Resource.html#v:newPriorityResourceWithMaxCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new resource with the specified queue strategy and initial count.\n The last value becomes the upper bound as well.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Resource",
          "name": "newResource",
          "package": "aivika",
          "signature": "s-\u003e Int-\u003e Simulation (Resource s q)",
          "type": "function"
        },
        "index": {
          "description": "Create new resource with the specified queue strategy and initial count The last value becomes the upper bound as well",
          "hierarchy": "Simulation Aivika Resource",
          "module": "Simulation.Aivika.Resource",
          "name": "newResource",
          "normalized": "a-\u003eInt-\u003eSimulation(Resource a b)",
          "package": "aivika",
          "partial": "Resource",
          "signature": "s-\u003eInt-\u003eSimulation(Resource s q)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Resource.html#v:newResource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new resource with the specified queue strategy, initial and maximum counts,\n where \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e means that the resource has no upper bound.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Resource",
          "name": "newResourceWithMaxCount",
          "package": "aivika",
          "signature": "s-\u003e Int-\u003e Maybe Int-\u003e Simulation (Resource s q)",
          "type": "function"
        },
        "index": {
          "description": "Create new resource with the specified queue strategy initial and maximum counts where Nothing means that the resource has no upper bound",
          "hierarchy": "Simulation Aivika Resource",
          "module": "Simulation.Aivika.Resource",
          "name": "newResourceWithMaxCount",
          "normalized": "a-\u003eInt-\u003eMaybe Int-\u003eSimulation(Resource a b)",
          "package": "aivika",
          "partial": "Resource With Max Count",
          "signature": "s-\u003eInt-\u003eMaybe Int-\u003eSimulation(Resource s q)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Resource.html#v:newResourceWithMaxCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new SIRO resource with the specified initial count which value becomes\n the upper bound as well.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Resource",
          "name": "newSIROResource",
          "package": "aivika",
          "signature": "Int-\u003e Simulation SIROResource",
          "type": "function"
        },
        "index": {
          "description": "Create new SIRO resource with the specified initial count which value becomes the upper bound as well",
          "hierarchy": "Simulation Aivika Resource",
          "module": "Simulation.Aivika.Resource",
          "name": "newSIROResource",
          "normalized": "Int-\u003eSimulation SIROResource",
          "package": "aivika",
          "partial": "SIROResource",
          "signature": "Int-\u003eSimulation SIROResource",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Resource.html#v:newSIROResource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new SIRO resource with the specified initial and maximum counts,\n where \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e means that the resource has no upper bound.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Resource",
          "name": "newSIROResourceWithMaxCount",
          "package": "aivika",
          "signature": "Int-\u003e Maybe Int-\u003e Simulation SIROResource",
          "type": "function"
        },
        "index": {
          "description": "Create new SIRO resource with the specified initial and maximum counts where Nothing means that the resource has no upper bound",
          "hierarchy": "Simulation Aivika Resource",
          "module": "Simulation.Aivika.Resource",
          "name": "newSIROResourceWithMaxCount",
          "normalized": "Int-\u003eMaybe Int-\u003eSimulation SIROResource",
          "package": "aivika",
          "partial": "SIROResource With Max Count",
          "signature": "Int-\u003eMaybe Int-\u003eSimulation SIROResource",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Resource.html#v:newSIROResourceWithMaxCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRelease the resource increasing its count and resuming one of the\n previously suspended processes as possible.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Resource",
          "name": "releaseResource",
          "package": "aivika",
          "signature": "Resource s q-\u003e Process ()",
          "type": "function"
        },
        "index": {
          "description": "Release the resource increasing its count and resuming one of the previously suspended processes as possible",
          "hierarchy": "Simulation Aivika Resource",
          "module": "Simulation.Aivika.Resource",
          "name": "releaseResource",
          "normalized": "Resource a b-\u003eProcess()",
          "package": "aivika",
          "partial": "Resource",
          "signature": "Resource s q-\u003eProcess()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Resource.html#v:releaseResource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRelease the resource increasing its count and resuming one of the\n previously suspended processes as possible.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Resource",
          "name": "releaseResourceWithinEvent",
          "package": "aivika",
          "signature": "Resource s q-\u003e Event ()",
          "type": "function"
        },
        "index": {
          "description": "Release the resource increasing its count and resuming one of the previously suspended processes as possible",
          "hierarchy": "Simulation Aivika Resource",
          "module": "Simulation.Aivika.Resource",
          "name": "releaseResourceWithinEvent",
          "normalized": "Resource a b-\u003eEvent()",
          "package": "aivika",
          "partial": "Resource Within Event",
          "signature": "Resource s q-\u003eEvent()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Resource.html#v:releaseResourceWithinEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRequest for the resource decreasing its count in case of success,\n otherwise suspending the discontinuous process until some other \n process releases the resource.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Resource",
          "name": "requestResource",
          "package": "aivika",
          "signature": "Resource s q-\u003e Process ()",
          "type": "function"
        },
        "index": {
          "description": "Request for the resource decreasing its count in case of success otherwise suspending the discontinuous process until some other process releases the resource",
          "hierarchy": "Simulation Aivika Resource",
          "module": "Simulation.Aivika.Resource",
          "name": "requestResource",
          "normalized": "Resource a b-\u003eProcess()",
          "package": "aivika",
          "partial": "Resource",
          "signature": "Resource s q-\u003eProcess()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Resource.html#v:requestResource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRequest with the priority for the resource decreasing its count\n in case of success, otherwise suspending the discontinuous process\n until some other process releases the resource.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Resource",
          "name": "requestResourceWithPriority",
          "package": "aivika",
          "signature": "Resource s q-\u003e p-\u003e Process ()",
          "type": "function"
        },
        "index": {
          "description": "Request with the priority for the resource decreasing its count in case of success otherwise suspending the discontinuous process until some other process releases the resource",
          "hierarchy": "Simulation Aivika Resource",
          "module": "Simulation.Aivika.Resource",
          "name": "requestResourceWithPriority",
          "normalized": "Resource a b-\u003ec-\u003eProcess()",
          "package": "aivika",
          "partial": "Resource With Priority",
          "signature": "Resource s q-\u003ep-\u003eProcess()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Resource.html#v:requestResourceWithPriority"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the current count of the resource.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Resource",
          "name": "resourceCount",
          "package": "aivika",
          "signature": "Resource s q -\u003e Event Int",
          "source": "src/Simulation-Aivika-Resource.html#resourceCount",
          "type": "function"
        },
        "index": {
          "description": "Return the current count of the resource",
          "hierarchy": "Simulation Aivika Resource",
          "module": "Simulation.Aivika.Resource",
          "name": "resourceCount",
          "normalized": "Resource a b-\u003eEvent Int",
          "package": "aivika",
          "partial": "Count",
          "signature": "Resource s q-\u003eEvent Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Resource.html#v:resourceCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the maximum count of the resource, where \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e\n means that the resource has no upper bound.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Resource",
          "name": "resourceMaxCount",
          "package": "aivika",
          "signature": "Resource s q -\u003e Maybe Int",
          "source": "src/Simulation-Aivika-Resource.html#resourceMaxCount",
          "type": "function"
        },
        "index": {
          "description": "Return the maximum count of the resource where Nothing means that the resource has no upper bound",
          "hierarchy": "Simulation Aivika Resource",
          "module": "Simulation.Aivika.Resource",
          "name": "resourceMaxCount",
          "normalized": "Resource a b-\u003eMaybe Int",
          "package": "aivika",
          "partial": "Max Count",
          "signature": "Resource s q-\u003eMaybe Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Resource.html#v:resourceMaxCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the strategy applied for queuing the requests.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Resource",
          "name": "resourceStrategy",
          "package": "aivika",
          "signature": "Resource s q -\u003e s",
          "source": "src/Simulation-Aivika-Resource.html#resourceStrategy",
          "type": "function"
        },
        "index": {
          "description": "Return the strategy applied for queuing the requests",
          "hierarchy": "Simulation Aivika Resource",
          "module": "Simulation.Aivika.Resource",
          "name": "resourceStrategy",
          "normalized": "Resource a b-\u003ea",
          "package": "aivika",
          "partial": "Strategy",
          "signature": "Resource s q-\u003es",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Resource.html#v:resourceStrategy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTry to request for the resource decreasing its count in case of success\n and returning \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e in the \u003ccode\u003e\u003ca\u003eEvent\u003c/a\u003e\u003c/code\u003e monad; otherwise, returning \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Resource",
          "name": "tryRequestResourceWithinEvent",
          "package": "aivika",
          "signature": "Resource s q-\u003e Event Bool",
          "type": "function"
        },
        "index": {
          "description": "Try to request for the resource decreasing its count in case of success and returning True in the Event monad otherwise returning False",
          "hierarchy": "Simulation Aivika Resource",
          "module": "Simulation.Aivika.Resource",
          "name": "tryRequestResourceWithinEvent",
          "normalized": "Resource a b-\u003eEvent Bool",
          "package": "aivika",
          "partial": "Request Resource Within Event",
          "signature": "Resource s q-\u003eEvent Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Resource.html#v:tryRequestResourceWithinEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAcquire the resource, perform some action and safely release the resource               \n in the end, even if the \u003ccode\u003e\u003ca\u003eIOException\u003c/a\u003e\u003c/code\u003e was raised within the action. \n\u003c/p\u003e",
          "module": "Simulation.Aivika.Resource",
          "name": "usingResource",
          "package": "aivika",
          "signature": "Resource s q-\u003e Process a-\u003e Process a",
          "type": "function"
        },
        "index": {
          "description": "Acquire the resource perform some action and safely release the resource in the end even if the IOException was raised within the action",
          "hierarchy": "Simulation Aivika Resource",
          "module": "Simulation.Aivika.Resource",
          "name": "usingResource",
          "normalized": "Resource a b-\u003eProcess c-\u003eProcess c",
          "package": "aivika",
          "partial": "Resource",
          "signature": "Resource s q-\u003eProcess a-\u003eProcess a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Resource.html#v:usingResource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAcquire the resource with the specified priority, perform some action and\n safely release the resource in the end, even if the \u003ccode\u003e\u003ca\u003eIOException\u003c/a\u003e\u003c/code\u003e was raised\n within the action.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Resource",
          "name": "usingResourceWithPriority",
          "package": "aivika",
          "signature": "Resource s q-\u003e p-\u003e Process a-\u003e Process a",
          "type": "function"
        },
        "index": {
          "description": "Acquire the resource with the specified priority perform some action and safely release the resource in the end even if the IOException was raised within the action",
          "hierarchy": "Simulation Aivika Resource",
          "module": "Simulation.Aivika.Resource",
          "name": "usingResourceWithPriority",
          "normalized": "Resource a b-\u003ec-\u003eProcess d-\u003eProcess d",
          "package": "aivika",
          "partial": "Resource With Priority",
          "signature": "Resource s q-\u003ep-\u003eProcess a-\u003eProcess a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Resource.html#v:usingResourceWithPriority"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTested with: GHC 7.6.3\n\u003c/p\u003e\u003cp\u003eIt models the server that prodives a service.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Simulation.Aivika.Server",
          "name": "Server",
          "package": "aivika",
          "source": "src/Simulation-Aivika-Server.html",
          "type": "module"
        },
        "index": {
          "description": "Tested with GHC It models the server that prodives service",
          "hierarchy": "Simulation Aivika Server",
          "module": "Simulation.Aivika.Server",
          "name": "Server",
          "package": "aivika",
          "partial": "Server",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Server.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIt models a server that takes \u003ccode\u003ea\u003c/code\u003e and provides \u003ccode\u003eb\u003c/code\u003e having state \u003ccode\u003es\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Server",
          "name": "Server",
          "package": "aivika",
          "source": "src/Simulation-Aivika-Server.html#Server",
          "type": "data"
        },
        "index": {
          "description": "It models server that takes and provides having state",
          "hierarchy": "Simulation Aivika Server",
          "module": "Simulation.Aivika.Server",
          "name": "Server",
          "package": "aivika",
          "partial": "Server",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Server.html#t:Server"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new server that can provide output \u003ccode\u003eb\u003c/code\u003e by input \u003ccode\u003ea\u003c/code\u003e.\n Also it returns the corresponded processor that being applied\n updates the server state.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Server",
          "name": "newServer",
          "package": "aivika",
          "signature": "(a -\u003e Process b)-\u003e Simulation (Server () a b)",
          "type": "function"
        },
        "index": {
          "description": "Create new server that can provide output by input Also it returns the corresponded processor that being applied updates the server state",
          "hierarchy": "Simulation Aivika Server",
          "module": "Simulation.Aivika.Server",
          "name": "newServer",
          "normalized": "(a-\u003eProcess b)-\u003eSimulation(Server()a b)",
          "package": "aivika",
          "partial": "Server",
          "signature": "(a-\u003eProcess b)-\u003eSimulation(Server()a b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Server.html#v:newServer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new server that can provide output \u003ccode\u003eb\u003c/code\u003e by input \u003ccode\u003ea\u003c/code\u003e\n starting from state \u003ccode\u003es\u003c/code\u003e. Also it returns the corresponded processor\n that being applied updates the server state.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Server",
          "name": "newServerWithState",
          "package": "aivika",
          "signature": "s-\u003e ((s, a) -\u003e Process (s, b))-\u003e Simulation (Server s a b)",
          "type": "function"
        },
        "index": {
          "description": "Create new server that can provide output by input starting from state Also it returns the corresponded processor that being applied updates the server state",
          "hierarchy": "Simulation Aivika Server",
          "module": "Simulation.Aivika.Server",
          "name": "newServerWithState",
          "normalized": "a-\u003e((a,b)-\u003eProcess(a,c))-\u003eSimulation(Server a b c)",
          "package": "aivika",
          "partial": "Server With State",
          "signature": "s-\u003e((s,a)-\u003eProcess(s,b))-\u003eSimulation(Server s a b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Server.html#v:newServerWithState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSignal whenever any property of the server changes.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Server",
          "name": "serverChanged_",
          "package": "aivika",
          "signature": "Server s a b -\u003e Signal ()",
          "source": "src/Simulation-Aivika-Server.html#serverChanged_",
          "type": "function"
        },
        "index": {
          "description": "Signal whenever any property of the server changes",
          "hierarchy": "Simulation Aivika Server",
          "module": "Simulation.Aivika.Server",
          "name": "serverChanged_",
          "normalized": "Server a b c-\u003eSignal()",
          "package": "aivika",
          "partial": "Changed",
          "signature": "Server s a b-\u003eSignal()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Server.html#v:serverChanged_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe initial state of the server.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Server",
          "name": "serverInitState",
          "package": "aivika",
          "signature": "Server s a b -\u003e s",
          "source": "src/Simulation-Aivika-Server.html#serverInitState",
          "type": "function"
        },
        "index": {
          "description": "The initial state of the server",
          "hierarchy": "Simulation Aivika Server",
          "module": "Simulation.Aivika.Server",
          "name": "serverInitState",
          "normalized": "Server a b c-\u003ea",
          "package": "aivika",
          "partial": "Init State",
          "signature": "Server s a b-\u003es",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Server.html#v:serverInitState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRaised when the server receives a new input task.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Server",
          "name": "serverInputReceived",
          "package": "aivika",
          "signature": "Server s a b -\u003e Signal a",
          "source": "src/Simulation-Aivika-Server.html#serverInputReceived",
          "type": "function"
        },
        "index": {
          "description": "Raised when the server receives new input task",
          "hierarchy": "Simulation Aivika Server",
          "module": "Simulation.Aivika.Server",
          "name": "serverInputReceived",
          "normalized": "Server a b c-\u003eSignal b",
          "package": "aivika",
          "partial": "Input Received",
          "signature": "Server s a b-\u003eSignal a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Server.html#v:serverInputReceived"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIt returns the factor changing from 0 to 1, which estimates how often\n the server was awaiting for the next input task.\n\u003c/p\u003e\u003cp\u003eThis factor is calculated as\n\u003c/p\u003e\u003cpre\u003e\n   totalInputWaitTime / (totalInputWaitTime + totalProcessingTime + totalOutputWaitTime)\n\u003c/pre\u003e\u003cp\u003eAs before in this module, the value returned changes discretely and\n it is usually delayed relative to the current simulation time.\n\u003c/p\u003e\u003cp\u003eSee also \u003ccode\u003e\u003ca\u003eserverInputWaitFactorChanged\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eserverInputWaitFactorChanged_\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Server",
          "name": "serverInputWaitFactor",
          "package": "aivika",
          "signature": "Server s a b -\u003e Event Double",
          "source": "src/Simulation-Aivika-Server.html#serverInputWaitFactor",
          "type": "function"
        },
        "index": {
          "description": "It returns the factor changing from to which estimates how often the server was awaiting for the next input task This factor is calculated as totalInputWaitTime totalInputWaitTime totalProcessingTime totalOutputWaitTime As before in this module the value returned changes discretely and it is usually delayed relative to the current simulation time See also serverInputWaitFactorChanged and serverInputWaitFactorChanged",
          "hierarchy": "Simulation Aivika Server",
          "module": "Simulation.Aivika.Server",
          "name": "serverInputWaitFactor",
          "normalized": "Server a b c-\u003eEvent Double",
          "package": "aivika",
          "partial": "Input Wait Factor",
          "signature": "Server s a b-\u003eEvent Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Server.html#v:serverInputWaitFactor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSignal when the \u003ccode\u003e\u003ca\u003eserverInputWaitFactor\u003c/a\u003e\u003c/code\u003e property value has changed.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Server",
          "name": "serverInputWaitFactorChanged",
          "package": "aivika",
          "signature": "Server s a b -\u003e Signal Double",
          "source": "src/Simulation-Aivika-Server.html#serverInputWaitFactorChanged",
          "type": "function"
        },
        "index": {
          "description": "Signal when the serverInputWaitFactor property value has changed",
          "hierarchy": "Simulation Aivika Server",
          "module": "Simulation.Aivika.Server",
          "name": "serverInputWaitFactorChanged",
          "normalized": "Server a b c-\u003eSignal Double",
          "package": "aivika",
          "partial": "Input Wait Factor Changed",
          "signature": "Server s a b-\u003eSignal Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Server.html#v:serverInputWaitFactorChanged"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSignal when the \u003ccode\u003e\u003ca\u003eserverInputWaitFactor\u003c/a\u003e\u003c/code\u003e property value has changed.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Server",
          "name": "serverInputWaitFactorChanged_",
          "package": "aivika",
          "signature": "Server s a b -\u003e Signal ()",
          "source": "src/Simulation-Aivika-Server.html#serverInputWaitFactorChanged_",
          "type": "function"
        },
        "index": {
          "description": "Signal when the serverInputWaitFactor property value has changed",
          "hierarchy": "Simulation Aivika Server",
          "module": "Simulation.Aivika.Server",
          "name": "serverInputWaitFactorChanged_",
          "normalized": "Server a b c-\u003eSignal()",
          "package": "aivika",
          "partial": "Input Wait Factor Changed",
          "signature": "Server s a b-\u003eSignal()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Server.html#v:serverInputWaitFactorChanged_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the statistics of the time when the server was locked while awaiting the input.\n\u003c/p\u003e\u003cp\u003eThe value returned changes discretely and it is usually delayed relative\n to the current simulation time.\n\u003c/p\u003e\u003cp\u003eSee also \u003ccode\u003e\u003ca\u003eserverInputWaitTimeChanged\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eserverInputWaitTimeChanged_\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Server",
          "name": "serverInputWaitTime",
          "package": "aivika",
          "signature": "Server s a b -\u003e Event (SamplingStats Double)",
          "source": "src/Simulation-Aivika-Server.html#serverInputWaitTime",
          "type": "function"
        },
        "index": {
          "description": "Return the statistics of the time when the server was locked while awaiting the input The value returned changes discretely and it is usually delayed relative to the current simulation time See also serverInputWaitTimeChanged and serverInputWaitTimeChanged",
          "hierarchy": "Simulation Aivika Server",
          "module": "Simulation.Aivika.Server",
          "name": "serverInputWaitTime",
          "normalized": "Server a b c-\u003eEvent(SamplingStats Double)",
          "package": "aivika",
          "partial": "Input Wait Time",
          "signature": "Server s a b-\u003eEvent(SamplingStats Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Server.html#v:serverInputWaitTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSignal when the \u003ccode\u003e\u003ca\u003eserverInputWaitTime\u003c/a\u003e\u003c/code\u003e property value has changed.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Server",
          "name": "serverInputWaitTimeChanged",
          "package": "aivika",
          "signature": "Server s a b -\u003e Signal (SamplingStats Double)",
          "source": "src/Simulation-Aivika-Server.html#serverInputWaitTimeChanged",
          "type": "function"
        },
        "index": {
          "description": "Signal when the serverInputWaitTime property value has changed",
          "hierarchy": "Simulation Aivika Server",
          "module": "Simulation.Aivika.Server",
          "name": "serverInputWaitTimeChanged",
          "normalized": "Server a b c-\u003eSignal(SamplingStats Double)",
          "package": "aivika",
          "partial": "Input Wait Time Changed",
          "signature": "Server s a b-\u003eSignal(SamplingStats Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Server.html#v:serverInputWaitTimeChanged"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSignal when the \u003ccode\u003e\u003ca\u003eserverInputWaitTime\u003c/a\u003e\u003c/code\u003e property value has changed.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Server",
          "name": "serverInputWaitTimeChanged_",
          "package": "aivika",
          "signature": "Server s a b -\u003e Signal ()",
          "source": "src/Simulation-Aivika-Server.html#serverInputWaitTimeChanged_",
          "type": "function"
        },
        "index": {
          "description": "Signal when the serverInputWaitTime property value has changed",
          "hierarchy": "Simulation Aivika Server",
          "module": "Simulation.Aivika.Server",
          "name": "serverInputWaitTimeChanged_",
          "normalized": "Server a b c-\u003eSignal()",
          "package": "aivika",
          "partial": "Input Wait Time Changed",
          "signature": "Server s a b-\u003eSignal()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Server.html#v:serverInputWaitTimeChanged_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRaised when the server has just delivered the output.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Server",
          "name": "serverOutputProvided",
          "package": "aivika",
          "signature": "Server s a b -\u003e Signal (a, b)",
          "source": "src/Simulation-Aivika-Server.html#serverOutputProvided",
          "type": "function"
        },
        "index": {
          "description": "Raised when the server has just delivered the output",
          "hierarchy": "Simulation Aivika Server",
          "module": "Simulation.Aivika.Server",
          "name": "serverOutputProvided",
          "normalized": "Server a b c-\u003eSignal(b,c)",
          "package": "aivika",
          "partial": "Output Provided",
          "signature": "Server s a b-\u003eSignal(a,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Server.html#v:serverOutputProvided"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIt returns the factor changing from 0 to 1, which estimates how often\n the server was locked trying to deliver the output after the task is finished.\n\u003c/p\u003e\u003cp\u003eThis factor is calculated as\n\u003c/p\u003e\u003cpre\u003e\n   totalOutputWaitTime / (totalInputWaitTime + totalProcessingTime + totalOutputWaitTime)\n\u003c/pre\u003e\u003cp\u003eAs before in this module, the value returned changes discretely and\n it is usually delayed relative to the current simulation time.\n\u003c/p\u003e\u003cp\u003eSee also \u003ccode\u003e\u003ca\u003eserverOutputWaitFactorChanged\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eserverOutputWaitFactorChanged_\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Server",
          "name": "serverOutputWaitFactor",
          "package": "aivika",
          "signature": "Server s a b -\u003e Event Double",
          "source": "src/Simulation-Aivika-Server.html#serverOutputWaitFactor",
          "type": "function"
        },
        "index": {
          "description": "It returns the factor changing from to which estimates how often the server was locked trying to deliver the output after the task is finished This factor is calculated as totalOutputWaitTime totalInputWaitTime totalProcessingTime totalOutputWaitTime As before in this module the value returned changes discretely and it is usually delayed relative to the current simulation time See also serverOutputWaitFactorChanged and serverOutputWaitFactorChanged",
          "hierarchy": "Simulation Aivika Server",
          "module": "Simulation.Aivika.Server",
          "name": "serverOutputWaitFactor",
          "normalized": "Server a b c-\u003eEvent Double",
          "package": "aivika",
          "partial": "Output Wait Factor",
          "signature": "Server s a b-\u003eEvent Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Server.html#v:serverOutputWaitFactor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSignal when the \u003ccode\u003e\u003ca\u003eserverOutputWaitFactor\u003c/a\u003e\u003c/code\u003e property value has changed.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Server",
          "name": "serverOutputWaitFactorChanged",
          "package": "aivika",
          "signature": "Server s a b -\u003e Signal Double",
          "source": "src/Simulation-Aivika-Server.html#serverOutputWaitFactorChanged",
          "type": "function"
        },
        "index": {
          "description": "Signal when the serverOutputWaitFactor property value has changed",
          "hierarchy": "Simulation Aivika Server",
          "module": "Simulation.Aivika.Server",
          "name": "serverOutputWaitFactorChanged",
          "normalized": "Server a b c-\u003eSignal Double",
          "package": "aivika",
          "partial": "Output Wait Factor Changed",
          "signature": "Server s a b-\u003eSignal Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Server.html#v:serverOutputWaitFactorChanged"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSignal when the \u003ccode\u003e\u003ca\u003eserverOutputWaitFactor\u003c/a\u003e\u003c/code\u003e property value has changed.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Server",
          "name": "serverOutputWaitFactorChanged_",
          "package": "aivika",
          "signature": "Server s a b -\u003e Signal ()",
          "source": "src/Simulation-Aivika-Server.html#serverOutputWaitFactorChanged_",
          "type": "function"
        },
        "index": {
          "description": "Signal when the serverOutputWaitFactor property value has changed",
          "hierarchy": "Simulation Aivika Server",
          "module": "Simulation.Aivika.Server",
          "name": "serverOutputWaitFactorChanged_",
          "normalized": "Server a b c-\u003eSignal()",
          "package": "aivika",
          "partial": "Output Wait Factor Changed",
          "signature": "Server s a b-\u003eSignal()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Server.html#v:serverOutputWaitFactorChanged_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the statistics of the time when the server was locked while trying\n to deliver the output. \n\u003c/p\u003e\u003cp\u003eThe value returned changes discretely and it is usually delayed relative\n to the current simulation time.\n\u003c/p\u003e\u003cp\u003eSee also \u003ccode\u003e\u003ca\u003eserverOutputWaitTimeChanged\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eserverOutputWaitTimeChanged_\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Server",
          "name": "serverOutputWaitTime",
          "package": "aivika",
          "signature": "Server s a b -\u003e Event (SamplingStats Double)",
          "source": "src/Simulation-Aivika-Server.html#serverOutputWaitTime",
          "type": "function"
        },
        "index": {
          "description": "Return the statistics of the time when the server was locked while trying to deliver the output The value returned changes discretely and it is usually delayed relative to the current simulation time See also serverOutputWaitTimeChanged and serverOutputWaitTimeChanged",
          "hierarchy": "Simulation Aivika Server",
          "module": "Simulation.Aivika.Server",
          "name": "serverOutputWaitTime",
          "normalized": "Server a b c-\u003eEvent(SamplingStats Double)",
          "package": "aivika",
          "partial": "Output Wait Time",
          "signature": "Server s a b-\u003eEvent(SamplingStats Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Server.html#v:serverOutputWaitTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSignal when the \u003ccode\u003e\u003ca\u003eserverOutputWaitTime\u003c/a\u003e\u003c/code\u003e property value has changed.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Server",
          "name": "serverOutputWaitTimeChanged",
          "package": "aivika",
          "signature": "Server s a b -\u003e Signal (SamplingStats Double)",
          "source": "src/Simulation-Aivika-Server.html#serverOutputWaitTimeChanged",
          "type": "function"
        },
        "index": {
          "description": "Signal when the serverOutputWaitTime property value has changed",
          "hierarchy": "Simulation Aivika Server",
          "module": "Simulation.Aivika.Server",
          "name": "serverOutputWaitTimeChanged",
          "normalized": "Server a b c-\u003eSignal(SamplingStats Double)",
          "package": "aivika",
          "partial": "Output Wait Time Changed",
          "signature": "Server s a b-\u003eSignal(SamplingStats Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Server.html#v:serverOutputWaitTimeChanged"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSignal when the \u003ccode\u003e\u003ca\u003eserverOutputWaitTime\u003c/a\u003e\u003c/code\u003e property value has changed.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Server",
          "name": "serverOutputWaitTimeChanged_",
          "package": "aivika",
          "signature": "Server s a b -\u003e Signal ()",
          "source": "src/Simulation-Aivika-Server.html#serverOutputWaitTimeChanged_",
          "type": "function"
        },
        "index": {
          "description": "Signal when the serverOutputWaitTime property value has changed",
          "hierarchy": "Simulation Aivika Server",
          "module": "Simulation.Aivika.Server",
          "name": "serverOutputWaitTimeChanged_",
          "normalized": "Server a b c-\u003eSignal()",
          "package": "aivika",
          "partial": "Output Wait Time Changed",
          "signature": "Server s a b-\u003eSignal()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Server.html#v:serverOutputWaitTimeChanged_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIt returns the factor changing from 0 to 1, which estimates how often\n the server was busy with direct processing its tasks.\n\u003c/p\u003e\u003cp\u003eThis factor is calculated as\n\u003c/p\u003e\u003cpre\u003e\n   totalProcessingTime / (totalInputWaitTime + totalProcessingTime + totalOutputWaitTime)\n\u003c/pre\u003e\u003cp\u003eAs before in this module, the value returned changes discretely and\n it is usually delayed relative to the current simulation time.\n\u003c/p\u003e\u003cp\u003eSee also \u003ccode\u003e\u003ca\u003eserverProcessingFactorChanged\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eserverProcessingFactorChanged_\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Server",
          "name": "serverProcessingFactor",
          "package": "aivika",
          "signature": "Server s a b -\u003e Event Double",
          "source": "src/Simulation-Aivika-Server.html#serverProcessingFactor",
          "type": "function"
        },
        "index": {
          "description": "It returns the factor changing from to which estimates how often the server was busy with direct processing its tasks This factor is calculated as totalProcessingTime totalInputWaitTime totalProcessingTime totalOutputWaitTime As before in this module the value returned changes discretely and it is usually delayed relative to the current simulation time See also serverProcessingFactorChanged and serverProcessingFactorChanged",
          "hierarchy": "Simulation Aivika Server",
          "module": "Simulation.Aivika.Server",
          "name": "serverProcessingFactor",
          "normalized": "Server a b c-\u003eEvent Double",
          "package": "aivika",
          "partial": "Processing Factor",
          "signature": "Server s a b-\u003eEvent Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Server.html#v:serverProcessingFactor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSignal when the \u003ccode\u003e\u003ca\u003eserverProcessingFactor\u003c/a\u003e\u003c/code\u003e property value has changed.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Server",
          "name": "serverProcessingFactorChanged",
          "package": "aivika",
          "signature": "Server s a b -\u003e Signal Double",
          "source": "src/Simulation-Aivika-Server.html#serverProcessingFactorChanged",
          "type": "function"
        },
        "index": {
          "description": "Signal when the serverProcessingFactor property value has changed",
          "hierarchy": "Simulation Aivika Server",
          "module": "Simulation.Aivika.Server",
          "name": "serverProcessingFactorChanged",
          "normalized": "Server a b c-\u003eSignal Double",
          "package": "aivika",
          "partial": "Processing Factor Changed",
          "signature": "Server s a b-\u003eSignal Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Server.html#v:serverProcessingFactorChanged"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSignal when the \u003ccode\u003e\u003ca\u003eserverProcessingFactor\u003c/a\u003e\u003c/code\u003e property value has changed.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Server",
          "name": "serverProcessingFactorChanged_",
          "package": "aivika",
          "signature": "Server s a b -\u003e Signal ()",
          "source": "src/Simulation-Aivika-Server.html#serverProcessingFactorChanged_",
          "type": "function"
        },
        "index": {
          "description": "Signal when the serverProcessingFactor property value has changed",
          "hierarchy": "Simulation Aivika Server",
          "module": "Simulation.Aivika.Server",
          "name": "serverProcessingFactorChanged_",
          "normalized": "Server a b c-\u003eSignal()",
          "package": "aivika",
          "partial": "Processing Factor Changed",
          "signature": "Server s a b-\u003eSignal()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Server.html#v:serverProcessingFactorChanged_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the statistics of the time spent by the server while processing the tasks.\n\u003c/p\u003e\u003cp\u003eThe value returned changes discretely and it is usually delayed relative\n to the current simulation time.\n\u003c/p\u003e\u003cp\u003eSee also \u003ccode\u003e\u003ca\u003eserverProcessingTimeChanged\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eserverProcessingTimeChanged_\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Server",
          "name": "serverProcessingTime",
          "package": "aivika",
          "signature": "Server s a b -\u003e Event (SamplingStats Double)",
          "source": "src/Simulation-Aivika-Server.html#serverProcessingTime",
          "type": "function"
        },
        "index": {
          "description": "Return the statistics of the time spent by the server while processing the tasks The value returned changes discretely and it is usually delayed relative to the current simulation time See also serverProcessingTimeChanged and serverProcessingTimeChanged",
          "hierarchy": "Simulation Aivika Server",
          "module": "Simulation.Aivika.Server",
          "name": "serverProcessingTime",
          "normalized": "Server a b c-\u003eEvent(SamplingStats Double)",
          "package": "aivika",
          "partial": "Processing Time",
          "signature": "Server s a b-\u003eEvent(SamplingStats Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Server.html#v:serverProcessingTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSignal when the \u003ccode\u003e\u003ca\u003eserverProcessingTime\u003c/a\u003e\u003c/code\u003e property value has changed.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Server",
          "name": "serverProcessingTimeChanged",
          "package": "aivika",
          "signature": "Server s a b -\u003e Signal (SamplingStats Double)",
          "source": "src/Simulation-Aivika-Server.html#serverProcessingTimeChanged",
          "type": "function"
        },
        "index": {
          "description": "Signal when the serverProcessingTime property value has changed",
          "hierarchy": "Simulation Aivika Server",
          "module": "Simulation.Aivika.Server",
          "name": "serverProcessingTimeChanged",
          "normalized": "Server a b c-\u003eSignal(SamplingStats Double)",
          "package": "aivika",
          "partial": "Processing Time Changed",
          "signature": "Server s a b-\u003eSignal(SamplingStats Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Server.html#v:serverProcessingTimeChanged"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSignal when the \u003ccode\u003e\u003ca\u003eserverProcessingTime\u003c/a\u003e\u003c/code\u003e property value has changed.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Server",
          "name": "serverProcessingTimeChanged_",
          "package": "aivika",
          "signature": "Server s a b -\u003e Signal ()",
          "source": "src/Simulation-Aivika-Server.html#serverProcessingTimeChanged_",
          "type": "function"
        },
        "index": {
          "description": "Signal when the serverProcessingTime property value has changed",
          "hierarchy": "Simulation Aivika Server",
          "module": "Simulation.Aivika.Server",
          "name": "serverProcessingTimeChanged_",
          "normalized": "Server a b c-\u003eSignal()",
          "package": "aivika",
          "partial": "Processing Time Changed",
          "signature": "Server s a b-\u003eSignal()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Server.html#v:serverProcessingTimeChanged_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn a processor for the specified server.\n\u003c/p\u003e\u003cp\u003eThe processor updates the internal state of the server. The usual case is when \n the processor is applied only once in a chain of data processing. Otherwise; \n every time the processor is used, the state of the server changes. Sometimes \n it can be indeed useful if you want to aggregate the statistics for different \n servers simultaneously, but it would be more preferable to avoid this.\n\u003c/p\u003e\u003cp\u003eIf you connect different server processors returned by this function in a chain \n with help of \u003ccode\u003e\u003ca\u003e\u003e\u003e\u003e\u003c/a\u003e\u003c/code\u003e or other category combinator then this chain will act as one \n whole, where the first server will take a new task only after the last server \n finishes its current task and requests for the next one from the previous processor \n in the chain. This is not always that thing you might need.\n\u003c/p\u003e\u003cp\u003eTo model a sequence of the server processors working independently, you\n should separate them with help of the \u003ccode\u003e\u003ca\u003eprefetchProcessor\u003c/a\u003e\u003c/code\u003e that plays a role\n of a small one-place buffer in that case.\n\u003c/p\u003e\u003cp\u003eThe queue processors usually have the prefetching capabilities per se, where\n the items are already stored in the queue. Therefore, the server processor\n should not be prefetched if it is connected directly with the queue processor.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Server",
          "name": "serverProcessor",
          "package": "aivika",
          "signature": "Server s a b -\u003e Processor a b",
          "source": "src/Simulation-Aivika-Server.html#serverProcessor",
          "type": "function"
        },
        "index": {
          "description": "Return processor for the specified server The processor updates the internal state of the server The usual case is when the processor is applied only once in chain of data processing Otherwise every time the processor is used the state of the server changes Sometimes it can be indeed useful if you want to aggregate the statistics for different servers simultaneously but it would be more preferable to avoid this If you connect different server processors returned by this function in chain with help of or other category combinator then this chain will act as one whole where the first server will take new task only after the last server finishes its current task and requests for the next one from the previous processor in the chain This is not always that thing you might need To model sequence of the server processors working independently you should separate them with help of the prefetchProcessor that plays role of small one-place buffer in that case The queue processors usually have the prefetching capabilities per se where the items are already stored in the queue Therefore the server processor should not be prefetched if it is connected directly with the queue processor",
          "hierarchy": "Simulation Aivika Server",
          "module": "Simulation.Aivika.Server",
          "name": "serverProcessor",
          "normalized": "Server a b c-\u003eProcessor b c",
          "package": "aivika",
          "partial": "Processor",
          "signature": "Server s a b-\u003eProcessor a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Server.html#v:serverProcessor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the current state of the server.\n\u003c/p\u003e\u003cp\u003eSee also \u003ccode\u003e\u003ca\u003eserverStateChanged\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eserverStateChanged_\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Server",
          "name": "serverState",
          "package": "aivika",
          "signature": "Server s a b -\u003e Event s",
          "source": "src/Simulation-Aivika-Server.html#serverState",
          "type": "function"
        },
        "index": {
          "description": "Return the current state of the server See also serverStateChanged and serverStateChanged",
          "hierarchy": "Simulation Aivika Server",
          "module": "Simulation.Aivika.Server",
          "name": "serverState",
          "normalized": "Server a b c-\u003eEvent a",
          "package": "aivika",
          "partial": "State",
          "signature": "Server s a b-\u003eEvent s",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Server.html#v:serverState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSignal when the \u003ccode\u003e\u003ca\u003eserverState\u003c/a\u003e\u003c/code\u003e property value has changed.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Server",
          "name": "serverStateChanged",
          "package": "aivika",
          "signature": "Server s a b -\u003e Signal s",
          "source": "src/Simulation-Aivika-Server.html#serverStateChanged",
          "type": "function"
        },
        "index": {
          "description": "Signal when the serverState property value has changed",
          "hierarchy": "Simulation Aivika Server",
          "module": "Simulation.Aivika.Server",
          "name": "serverStateChanged",
          "normalized": "Server a b c-\u003eSignal a",
          "package": "aivika",
          "partial": "State Changed",
          "signature": "Server s a b-\u003eSignal s",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Server.html#v:serverStateChanged"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSignal when the \u003ccode\u003e\u003ca\u003eserverState\u003c/a\u003e\u003c/code\u003e property value has changed.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Server",
          "name": "serverStateChanged_",
          "package": "aivika",
          "signature": "Server s a b -\u003e Signal ()",
          "source": "src/Simulation-Aivika-Server.html#serverStateChanged_",
          "type": "function"
        },
        "index": {
          "description": "Signal when the serverState property value has changed",
          "hierarchy": "Simulation Aivika Server",
          "module": "Simulation.Aivika.Server",
          "name": "serverStateChanged_",
          "normalized": "Server a b c-\u003eSignal()",
          "package": "aivika",
          "partial": "State Changed",
          "signature": "Server s a b-\u003eSignal()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Server.html#v:serverStateChanged_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the summary for the server with desciption of its\n properties and activities using the specified indent.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Server",
          "name": "serverSummary",
          "package": "aivika",
          "signature": "Server s a b -\u003e Int -\u003e Event ShowS",
          "source": "src/Simulation-Aivika-Server.html#serverSummary",
          "type": "function"
        },
        "index": {
          "description": "Return the summary for the server with desciption of its properties and activities using the specified indent",
          "hierarchy": "Simulation Aivika Server",
          "module": "Simulation.Aivika.Server",
          "name": "serverSummary",
          "normalized": "Server a b c-\u003eInt-\u003eEvent ShowS",
          "package": "aivika",
          "partial": "Summary",
          "signature": "Server s a b-\u003eInt-\u003eEvent ShowS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Server.html#v:serverSummary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRaised when the server has just processed the task.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Server",
          "name": "serverTaskProcessed",
          "package": "aivika",
          "signature": "Server s a b -\u003e Signal (a, b)",
          "source": "src/Simulation-Aivika-Server.html#serverTaskProcessed",
          "type": "function"
        },
        "index": {
          "description": "Raised when the server has just processed the task",
          "hierarchy": "Simulation Aivika Server",
          "module": "Simulation.Aivika.Server",
          "name": "serverTaskProcessed",
          "normalized": "Server a b c-\u003eSignal(b,c)",
          "package": "aivika",
          "partial": "Task Processed",
          "signature": "Server s a b-\u003eSignal(a,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Server.html#v:serverTaskProcessed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the counted total time when the server was locked while awaiting the input.\n\u003c/p\u003e\u003cp\u003eThe value returned changes discretely and it is usually delayed relative\n to the current simulation time.\n\u003c/p\u003e\u003cp\u003eSee also \u003ccode\u003e\u003ca\u003eserverTotalInputWaitTimeChanged\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eserverTotalInputWaitTimeChanged_\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Server",
          "name": "serverTotalInputWaitTime",
          "package": "aivika",
          "signature": "Server s a b -\u003e Event Double",
          "source": "src/Simulation-Aivika-Server.html#serverTotalInputWaitTime",
          "type": "function"
        },
        "index": {
          "description": "Return the counted total time when the server was locked while awaiting the input The value returned changes discretely and it is usually delayed relative to the current simulation time See also serverTotalInputWaitTimeChanged and serverTotalInputWaitTimeChanged",
          "hierarchy": "Simulation Aivika Server",
          "module": "Simulation.Aivika.Server",
          "name": "serverTotalInputWaitTime",
          "normalized": "Server a b c-\u003eEvent Double",
          "package": "aivika",
          "partial": "Total Input Wait Time",
          "signature": "Server s a b-\u003eEvent Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Server.html#v:serverTotalInputWaitTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSignal when the \u003ccode\u003e\u003ca\u003eserverTotalInputWaitTime\u003c/a\u003e\u003c/code\u003e property value has changed.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Server",
          "name": "serverTotalInputWaitTimeChanged",
          "package": "aivika",
          "signature": "Server s a b -\u003e Signal Double",
          "source": "src/Simulation-Aivika-Server.html#serverTotalInputWaitTimeChanged",
          "type": "function"
        },
        "index": {
          "description": "Signal when the serverTotalInputWaitTime property value has changed",
          "hierarchy": "Simulation Aivika Server",
          "module": "Simulation.Aivika.Server",
          "name": "serverTotalInputWaitTimeChanged",
          "normalized": "Server a b c-\u003eSignal Double",
          "package": "aivika",
          "partial": "Total Input Wait Time Changed",
          "signature": "Server s a b-\u003eSignal Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Server.html#v:serverTotalInputWaitTimeChanged"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSignal when the \u003ccode\u003e\u003ca\u003eserverTotalInputWaitTime\u003c/a\u003e\u003c/code\u003e property value has changed.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Server",
          "name": "serverTotalInputWaitTimeChanged_",
          "package": "aivika",
          "signature": "Server s a b -\u003e Signal ()",
          "source": "src/Simulation-Aivika-Server.html#serverTotalInputWaitTimeChanged_",
          "type": "function"
        },
        "index": {
          "description": "Signal when the serverTotalInputWaitTime property value has changed",
          "hierarchy": "Simulation Aivika Server",
          "module": "Simulation.Aivika.Server",
          "name": "serverTotalInputWaitTimeChanged_",
          "normalized": "Server a b c-\u003eSignal()",
          "package": "aivika",
          "partial": "Total Input Wait Time Changed",
          "signature": "Server s a b-\u003eSignal()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Server.html#v:serverTotalInputWaitTimeChanged_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the counted total time when the server was locked while trying\n to deliver the output.\n\u003c/p\u003e\u003cp\u003eThe value returned changes discretely and it is usually delayed relative\n to the current simulation time.\n\u003c/p\u003e\u003cp\u003eSee also \u003ccode\u003e\u003ca\u003eserverTotalOutputWaitTimeChanged\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eserverTotalOutputWaitTimeChanged_\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Server",
          "name": "serverTotalOutputWaitTime",
          "package": "aivika",
          "signature": "Server s a b -\u003e Event Double",
          "source": "src/Simulation-Aivika-Server.html#serverTotalOutputWaitTime",
          "type": "function"
        },
        "index": {
          "description": "Return the counted total time when the server was locked while trying to deliver the output The value returned changes discretely and it is usually delayed relative to the current simulation time See also serverTotalOutputWaitTimeChanged and serverTotalOutputWaitTimeChanged",
          "hierarchy": "Simulation Aivika Server",
          "module": "Simulation.Aivika.Server",
          "name": "serverTotalOutputWaitTime",
          "normalized": "Server a b c-\u003eEvent Double",
          "package": "aivika",
          "partial": "Total Output Wait Time",
          "signature": "Server s a b-\u003eEvent Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Server.html#v:serverTotalOutputWaitTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSignal when the \u003ccode\u003e\u003ca\u003eserverTotalOutputWaitTime\u003c/a\u003e\u003c/code\u003e property value has changed.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Server",
          "name": "serverTotalOutputWaitTimeChanged",
          "package": "aivika",
          "signature": "Server s a b -\u003e Signal Double",
          "source": "src/Simulation-Aivika-Server.html#serverTotalOutputWaitTimeChanged",
          "type": "function"
        },
        "index": {
          "description": "Signal when the serverTotalOutputWaitTime property value has changed",
          "hierarchy": "Simulation Aivika Server",
          "module": "Simulation.Aivika.Server",
          "name": "serverTotalOutputWaitTimeChanged",
          "normalized": "Server a b c-\u003eSignal Double",
          "package": "aivika",
          "partial": "Total Output Wait Time Changed",
          "signature": "Server s a b-\u003eSignal Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Server.html#v:serverTotalOutputWaitTimeChanged"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSignal when the \u003ccode\u003e\u003ca\u003eserverTotalOutputWaitTime\u003c/a\u003e\u003c/code\u003e property value has changed.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Server",
          "name": "serverTotalOutputWaitTimeChanged_",
          "package": "aivika",
          "signature": "Server s a b -\u003e Signal ()",
          "source": "src/Simulation-Aivika-Server.html#serverTotalOutputWaitTimeChanged_",
          "type": "function"
        },
        "index": {
          "description": "Signal when the serverTotalOutputWaitTime property value has changed",
          "hierarchy": "Simulation Aivika Server",
          "module": "Simulation.Aivika.Server",
          "name": "serverTotalOutputWaitTimeChanged_",
          "normalized": "Server a b c-\u003eSignal()",
          "package": "aivika",
          "partial": "Total Output Wait Time Changed",
          "signature": "Server s a b-\u003eSignal()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Server.html#v:serverTotalOutputWaitTimeChanged_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the counted total time spent by the server while processing the tasks.\n\u003c/p\u003e\u003cp\u003eThe value returned changes discretely and it is usually delayed relative\n to the current simulation time.\n\u003c/p\u003e\u003cp\u003eSee also \u003ccode\u003e\u003ca\u003eserverTotalProcessingTimeChanged\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eserverTotalProcessingTimeChanged_\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Server",
          "name": "serverTotalProcessingTime",
          "package": "aivika",
          "signature": "Server s a b -\u003e Event Double",
          "source": "src/Simulation-Aivika-Server.html#serverTotalProcessingTime",
          "type": "function"
        },
        "index": {
          "description": "Return the counted total time spent by the server while processing the tasks The value returned changes discretely and it is usually delayed relative to the current simulation time See also serverTotalProcessingTimeChanged and serverTotalProcessingTimeChanged",
          "hierarchy": "Simulation Aivika Server",
          "module": "Simulation.Aivika.Server",
          "name": "serverTotalProcessingTime",
          "normalized": "Server a b c-\u003eEvent Double",
          "package": "aivika",
          "partial": "Total Processing Time",
          "signature": "Server s a b-\u003eEvent Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Server.html#v:serverTotalProcessingTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSignal when the \u003ccode\u003e\u003ca\u003eserverTotalProcessingTime\u003c/a\u003e\u003c/code\u003e property value has changed.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Server",
          "name": "serverTotalProcessingTimeChanged",
          "package": "aivika",
          "signature": "Server s a b -\u003e Signal Double",
          "source": "src/Simulation-Aivika-Server.html#serverTotalProcessingTimeChanged",
          "type": "function"
        },
        "index": {
          "description": "Signal when the serverTotalProcessingTime property value has changed",
          "hierarchy": "Simulation Aivika Server",
          "module": "Simulation.Aivika.Server",
          "name": "serverTotalProcessingTimeChanged",
          "normalized": "Server a b c-\u003eSignal Double",
          "package": "aivika",
          "partial": "Total Processing Time Changed",
          "signature": "Server s a b-\u003eSignal Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Server.html#v:serverTotalProcessingTimeChanged"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSignal when the \u003ccode\u003e\u003ca\u003eserverTotalProcessingTime\u003c/a\u003e\u003c/code\u003e property value has changed.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Server",
          "name": "serverTotalProcessingTimeChanged_",
          "package": "aivika",
          "signature": "Server s a b -\u003e Signal ()",
          "source": "src/Simulation-Aivika-Server.html#serverTotalProcessingTimeChanged_",
          "type": "function"
        },
        "index": {
          "description": "Signal when the serverTotalProcessingTime property value has changed",
          "hierarchy": "Simulation Aivika Server",
          "module": "Simulation.Aivika.Server",
          "name": "serverTotalProcessingTimeChanged_",
          "normalized": "Server a b c-\u003eSignal()",
          "package": "aivika",
          "partial": "Total Processing Time Changed",
          "signature": "Server s a b-\u003eSignal()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Server.html#v:serverTotalProcessingTimeChanged_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTested with: GHC 7.6.3\n\u003c/p\u003e\u003cp\u003eThis module defines the signal which we can subscribe handlers to. \n These handlers can be disposed. The signal is triggered in the \n current time point actuating the corresponded computations from \n the handlers. \n\u003c/p\u003e\u003c/div\u003e",
          "module": "Simulation.Aivika.Signal",
          "name": "Signal",
          "package": "aivika",
          "source": "src/Simulation-Aivika-Signal.html",
          "type": "module"
        },
        "index": {
          "description": "Tested with GHC This module defines the signal which we can subscribe handlers to These handlers can be disposed The signal is triggered in the current time point actuating the corresponded computations from the handlers",
          "hierarchy": "Simulation Aivika Signal",
          "module": "Simulation.Aivika.Signal",
          "name": "Signal",
          "package": "aivika",
          "partial": "Signal",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Signal.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe signal that can have disposable handlers.  \n\u003c/p\u003e",
          "module": "Simulation.Aivika.Signal",
          "name": "Signal",
          "package": "aivika",
          "source": "src/Simulation-Aivika-Internal-Signal.html#Signal",
          "type": "data"
        },
        "index": {
          "description": "The signal that can have disposable handlers",
          "hierarchy": "Simulation Aivika Signal",
          "module": "Simulation.Aivika.Signal",
          "name": "Signal",
          "package": "aivika",
          "partial": "Signal",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Signal.html#t:Signal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents the history of the signal values.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Signal",
          "name": "SignalHistory",
          "package": "aivika",
          "source": "src/Simulation-Aivika-Internal-Signal.html#SignalHistory",
          "type": "data"
        },
        "index": {
          "description": "Represents the history of the signal values",
          "hierarchy": "Simulation Aivika Signal",
          "module": "Simulation.Aivika.Signal",
          "name": "SignalHistory",
          "package": "aivika",
          "partial": "Signal History",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Signal.html#t:SignalHistory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe signal source that can publish its signal.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Signal",
          "name": "SignalSource",
          "package": "aivika",
          "source": "src/Simulation-Aivika-Internal-Signal.html#SignalSource",
          "type": "data"
        },
        "index": {
          "description": "The signal source that can publish its signal",
          "hierarchy": "Simulation Aivika Signal",
          "module": "Simulation.Aivika.Signal",
          "name": "SignalSource",
          "package": "aivika",
          "partial": "Signal Source",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Signal.html#t:SignalSource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDescribes a computation that also signals when changing its value.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Signal",
          "name": "Signalable",
          "package": "aivika",
          "source": "src/Simulation-Aivika-Internal-Signal.html#Signalable",
          "type": "data"
        },
        "index": {
          "description": "Describes computation that also signals when changing its value",
          "hierarchy": "Simulation Aivika Signal",
          "module": "Simulation.Aivika.Signal",
          "name": "Signalable",
          "package": "aivika",
          "partial": "Signalable",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Signal.html#t:Signalable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Simulation.Aivika.Signal",
          "name": "Signal",
          "package": "aivika",
          "signature": "Signal",
          "source": "src/Simulation-Aivika-Internal-Signal.html#Signal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Simulation Aivika Signal",
          "module": "Simulation.Aivika.Signal",
          "name": "Signal",
          "package": "aivika",
          "partial": "Signal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Signal.html#v:Signal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Simulation.Aivika.Signal",
          "name": "Signalable",
          "package": "aivika",
          "signature": "Signalable",
          "source": "src/Simulation-Aivika-Internal-Signal.html#Signalable",
          "type": "function"
        },
        "index": {
          "hierarchy": "Simulation Aivika Signal",
          "module": "Simulation.Aivika.Signal",
          "name": "Signalable",
          "package": "aivika",
          "partial": "Signalable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Signal.html#v:Signalable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransform the signal.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Signal",
          "name": "apSignal",
          "package": "aivika",
          "signature": "Event (a -\u003e b) -\u003e Signal a -\u003e Signal b",
          "source": "src/Simulation-Aivika-Internal-Signal.html#apSignal",
          "type": "function"
        },
        "index": {
          "description": "Transform the signal",
          "hierarchy": "Simulation Aivika Signal",
          "module": "Simulation.Aivika.Signal",
          "name": "apSignal",
          "normalized": "Event(a-\u003eb)-\u003eSignal a-\u003eSignal b",
          "package": "aivika",
          "partial": "Signal",
          "signature": "Event(a-\u003eb)-\u003eSignal a-\u003eSignal b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Signal.html#v:apSignal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn associative operation.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Signal",
          "name": "appendSignalable",
          "package": "aivika",
          "signature": "Signalable a -\u003e Signalable a -\u003e Signalable a",
          "source": "src/Simulation-Aivika-Internal-Signal.html#appendSignalable",
          "type": "function"
        },
        "index": {
          "description": "An associative operation",
          "hierarchy": "Simulation Aivika Signal",
          "module": "Simulation.Aivika.Signal",
          "name": "appendSignalable",
          "normalized": "Signalable a-\u003eSignalable a-\u003eSignalable a",
          "package": "aivika",
          "partial": "Signalable",
          "signature": "Signalable a-\u003eSignalable a-\u003eSignalable a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Signal.html#v:appendSignalable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn empty signal which is never triggered.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Signal",
          "name": "emptySignal",
          "package": "aivika",
          "signature": "Signal a",
          "source": "src/Simulation-Aivika-Internal-Signal.html#emptySignal",
          "type": "function"
        },
        "index": {
          "description": "An empty signal which is never triggered",
          "hierarchy": "Simulation Aivika Signal",
          "module": "Simulation.Aivika.Signal",
          "name": "emptySignal",
          "package": "aivika",
          "partial": "Signal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Signal.html#v:emptySignal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn an identity.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Signal",
          "name": "emptySignalable",
          "package": "aivika",
          "signature": "Signalable a",
          "source": "src/Simulation-Aivika-Internal-Signal.html#emptySignalable",
          "type": "function"
        },
        "index": {
          "description": "Return an identity",
          "hierarchy": "Simulation Aivika Signal",
          "module": "Simulation.Aivika.Signal",
          "name": "emptySignalable",
          "package": "aivika",
          "partial": "Signalable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Signal.html#v:emptySignalable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFilter only those signal values that satisfy to \n the specified predicate.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Signal",
          "name": "filterSignal",
          "package": "aivika",
          "signature": "(a -\u003e Bool) -\u003e Signal a -\u003e Signal a",
          "source": "src/Simulation-Aivika-Internal-Signal.html#filterSignal",
          "type": "function"
        },
        "index": {
          "description": "Filter only those signal values that satisfy to the specified predicate",
          "hierarchy": "Simulation Aivika Signal",
          "module": "Simulation.Aivika.Signal",
          "name": "filterSignal",
          "normalized": "(a-\u003eBool)-\u003eSignal a-\u003eSignal a",
          "package": "aivika",
          "partial": "Signal",
          "signature": "(a-\u003eBool)-\u003eSignal a-\u003eSignal a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Signal.html#v:filterSignal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFilter only those signal values that satisfy to \n the specified predicate.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Signal",
          "name": "filterSignalM",
          "package": "aivika",
          "signature": "(a -\u003e Event Bool) -\u003e Signal a -\u003e Signal a",
          "source": "src/Simulation-Aivika-Internal-Signal.html#filterSignalM",
          "type": "function"
        },
        "index": {
          "description": "Filter only those signal values that satisfy to the specified predicate",
          "hierarchy": "Simulation Aivika Signal",
          "module": "Simulation.Aivika.Signal",
          "name": "filterSignalM",
          "normalized": "(a-\u003eEvent Bool)-\u003eSignal a-\u003eSignal a",
          "package": "aivika",
          "partial": "Signal",
          "signature": "(a-\u003eEvent Bool)-\u003eSignal a-\u003eSignal a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Signal.html#v:filterSignalM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSubscribe the handler to the specified \n signal and return a nested computation \n that, being applied, unsubscribes the \n handler from this signal.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Signal",
          "name": "handleSignal",
          "package": "aivika",
          "signature": "(a -\u003e Event ()) -\u003e Event (Event ())",
          "source": "src/Simulation-Aivika-Internal-Signal.html#Signal",
          "type": "function"
        },
        "index": {
          "description": "Subscribe the handler to the specified signal and return nested computation that being applied unsubscribes the handler from this signal",
          "hierarchy": "Simulation Aivika Signal",
          "module": "Simulation.Aivika.Signal",
          "name": "handleSignal",
          "normalized": "(a-\u003eEvent())-\u003eEvent(Event())",
          "package": "aivika",
          "partial": "Signal",
          "signature": "(a-\u003eEvent())-\u003eEvent(Event())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Signal.html#v:handleSignal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSubscribe the handler to the specified signal.\n To subscribe the disposable handlers, use function \u003ccode\u003e\u003ca\u003ehandleSignal\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Signal",
          "name": "handleSignal_",
          "package": "aivika",
          "signature": "Signal a -\u003e (a -\u003e Event ()) -\u003e Event ()",
          "source": "src/Simulation-Aivika-Internal-Signal.html#handleSignal_",
          "type": "function"
        },
        "index": {
          "description": "Subscribe the handler to the specified signal To subscribe the disposable handlers use function handleSignal",
          "hierarchy": "Simulation Aivika Signal",
          "module": "Simulation.Aivika.Signal",
          "name": "handleSignal_",
          "normalized": "Signal a-\u003e(a-\u003eEvent())-\u003eEvent()",
          "package": "aivika",
          "partial": "Signal",
          "signature": "Signal a-\u003e(a-\u003eEvent())-\u003eEvent()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Signal.html#v:handleSignal_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap the signal according the specified function.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Signal",
          "name": "mapSignal",
          "package": "aivika",
          "signature": "(a -\u003e b) -\u003e Signal a -\u003e Signal b",
          "source": "src/Simulation-Aivika-Internal-Signal.html#mapSignal",
          "type": "function"
        },
        "index": {
          "description": "Map the signal according the specified function",
          "hierarchy": "Simulation Aivika Signal",
          "module": "Simulation.Aivika.Signal",
          "name": "mapSignal",
          "normalized": "(a-\u003eb)-\u003eSignal a-\u003eSignal b",
          "package": "aivika",
          "partial": "Signal",
          "signature": "(a-\u003eb)-\u003eSignal a-\u003eSignal b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Signal.html#v:mapSignal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompose the signal.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Signal",
          "name": "mapSignalM",
          "package": "aivika",
          "signature": "(a -\u003e Event b) -\u003e Signal a -\u003e Signal b",
          "source": "src/Simulation-Aivika-Internal-Signal.html#mapSignalM",
          "type": "function"
        },
        "index": {
          "description": "Compose the signal",
          "hierarchy": "Simulation Aivika Signal",
          "module": "Simulation.Aivika.Signal",
          "name": "mapSignalM",
          "normalized": "(a-\u003eEvent b)-\u003eSignal a-\u003eSignal b",
          "package": "aivika",
          "partial": "Signal",
          "signature": "(a-\u003eEvent b)-\u003eSignal a-\u003eSignal b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Signal.html#v:mapSignalM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMerge two signals.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Signal",
          "name": "merge2Signals",
          "package": "aivika",
          "signature": "Signal a -\u003e Signal a -\u003e Signal a",
          "source": "src/Simulation-Aivika-Internal-Signal.html#merge2Signals",
          "type": "function"
        },
        "index": {
          "description": "Merge two signals",
          "hierarchy": "Simulation Aivika Signal",
          "module": "Simulation.Aivika.Signal",
          "name": "merge2Signals",
          "normalized": "Signal a-\u003eSignal a-\u003eSignal a",
          "package": "aivika",
          "partial": "Signals",
          "signature": "Signal a-\u003eSignal a-\u003eSignal a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Signal.html#v:merge2Signals"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMerge three signals.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Signal",
          "name": "merge3Signals",
          "package": "aivika",
          "signature": "Signal a -\u003e Signal a -\u003e Signal a -\u003e Signal a",
          "source": "src/Simulation-Aivika-Internal-Signal.html#merge3Signals",
          "type": "function"
        },
        "index": {
          "description": "Merge three signals",
          "hierarchy": "Simulation Aivika Signal",
          "module": "Simulation.Aivika.Signal",
          "name": "merge3Signals",
          "normalized": "Signal a-\u003eSignal a-\u003eSignal a-\u003eSignal a",
          "package": "aivika",
          "partial": "Signals",
          "signature": "Signal a-\u003eSignal a-\u003eSignal a-\u003eSignal a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Signal.html#v:merge3Signals"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMerge four signals.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Signal",
          "name": "merge4Signals",
          "package": "aivika",
          "signature": "Signal a -\u003e Signal a -\u003e Signal a -\u003e Signal a -\u003e Signal a",
          "source": "src/Simulation-Aivika-Internal-Signal.html#merge4Signals",
          "type": "function"
        },
        "index": {
          "description": "Merge four signals",
          "hierarchy": "Simulation Aivika Signal",
          "module": "Simulation.Aivika.Signal",
          "name": "merge4Signals",
          "normalized": "Signal a-\u003eSignal a-\u003eSignal a-\u003eSignal a-\u003eSignal a",
          "package": "aivika",
          "partial": "Signals",
          "signature": "Signal a-\u003eSignal a-\u003eSignal a-\u003eSignal a-\u003eSignal a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Signal.html#v:merge4Signals"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMerge five signals.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Signal",
          "name": "merge5Signals",
          "package": "aivika",
          "signature": "Signal a -\u003e Signal a -\u003e Signal a -\u003e Signal a -\u003e Signal a -\u003e Signal a",
          "source": "src/Simulation-Aivika-Internal-Signal.html#merge5Signals",
          "type": "function"
        },
        "index": {
          "description": "Merge five signals",
          "hierarchy": "Simulation Aivika Signal",
          "module": "Simulation.Aivika.Signal",
          "name": "merge5Signals",
          "normalized": "Signal a-\u003eSignal a-\u003eSignal a-\u003eSignal a-\u003eSignal a-\u003eSignal a",
          "package": "aivika",
          "partial": "Signals",
          "signature": "Signal a-\u003eSignal a-\u003eSignal a-\u003eSignal a-\u003eSignal a-\u003eSignal a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Signal.html#v:merge5Signals"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a history of the signal values.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Signal",
          "name": "newSignalHistory",
          "package": "aivika",
          "signature": "Signal a -\u003e Event (SignalHistory a)",
          "source": "src/Simulation-Aivika-Internal-Signal.html#newSignalHistory",
          "type": "function"
        },
        "index": {
          "description": "Create history of the signal values",
          "hierarchy": "Simulation Aivika Signal",
          "module": "Simulation.Aivika.Signal",
          "name": "newSignalHistory",
          "normalized": "Signal a-\u003eEvent(SignalHistory a)",
          "package": "aivika",
          "partial": "Signal History",
          "signature": "Signal a-\u003eEvent(SignalHistory a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Signal.html#v:newSignalHistory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a history of the signal values starting with\n the optional initial value.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Signal",
          "name": "newSignalHistoryStartingWith",
          "package": "aivika",
          "signature": "Maybe a -\u003e Signal a -\u003e Event (SignalHistory a)",
          "source": "src/Simulation-Aivika-Internal-Signal.html#newSignalHistoryStartingWith",
          "type": "function"
        },
        "index": {
          "description": "Create history of the signal values starting with the optional initial value",
          "hierarchy": "Simulation Aivika Signal",
          "module": "Simulation.Aivika.Signal",
          "name": "newSignalHistoryStartingWith",
          "normalized": "Maybe a-\u003eSignal a-\u003eEvent(SignalHistory a)",
          "package": "aivika",
          "partial": "Signal History Starting With",
          "signature": "Maybe a-\u003eSignal a-\u003eEvent(SignalHistory a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Signal.html#v:newSignalHistoryStartingWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn a signal that is triggered in the integration time points.\n It should be called with help of \u003ccode\u003e\u003ca\u003erunEventInStartTime\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Signal",
          "name": "newSignalInIntegTimes",
          "package": "aivika",
          "signature": "Event (Signal Double)",
          "source": "src/Simulation-Aivika-Internal-Signal.html#newSignalInIntegTimes",
          "type": "function"
        },
        "index": {
          "description": "Return signal that is triggered in the integration time points It should be called with help of runEventInStartTime",
          "hierarchy": "Simulation Aivika Signal",
          "module": "Simulation.Aivika.Signal",
          "name": "newSignalInIntegTimes",
          "package": "aivika",
          "partial": "Signal In Integ Times",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Signal.html#v:newSignalInIntegTimes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn a signal that is triggered in the start time.\n It should be called with help of \u003ccode\u003e\u003ca\u003erunEventInStartTime\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Signal",
          "name": "newSignalInStartTime",
          "package": "aivika",
          "signature": "Event (Signal Double)",
          "source": "src/Simulation-Aivika-Internal-Signal.html#newSignalInStartTime",
          "type": "function"
        },
        "index": {
          "description": "Return signal that is triggered in the start time It should be called with help of runEventInStartTime",
          "hierarchy": "Simulation Aivika Signal",
          "module": "Simulation.Aivika.Signal",
          "name": "newSignalInStartTime",
          "package": "aivika",
          "partial": "Signal In Start Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Signal.html#v:newSignalInStartTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn a signal that is triggered in the final time.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Signal",
          "name": "newSignalInStopTime",
          "package": "aivika",
          "signature": "Event (Signal Double)",
          "source": "src/Simulation-Aivika-Internal-Signal.html#newSignalInStopTime",
          "type": "function"
        },
        "index": {
          "description": "Return signal that is triggered in the final time",
          "hierarchy": "Simulation Aivika Signal",
          "module": "Simulation.Aivika.Signal",
          "name": "newSignalInStopTime",
          "package": "aivika",
          "partial": "Signal In Stop Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Signal.html#v:newSignalInStopTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn a signal that is triggered in the specified time points.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Signal",
          "name": "newSignalInTimes",
          "package": "aivika",
          "signature": "[Double] -\u003e Event (Signal Double)",
          "source": "src/Simulation-Aivika-Internal-Signal.html#newSignalInTimes",
          "type": "function"
        },
        "index": {
          "description": "Return signal that is triggered in the specified time points",
          "hierarchy": "Simulation Aivika Signal",
          "module": "Simulation.Aivika.Signal",
          "name": "newSignalInTimes",
          "normalized": "[Double]-\u003eEvent(Signal Double)",
          "package": "aivika",
          "partial": "Signal In Times",
          "signature": "[Double]-\u003eEvent(Signal Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Signal.html#v:newSignalInTimes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new signal source.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Signal",
          "name": "newSignalSource",
          "package": "aivika",
          "signature": "Simulation (SignalSource a)",
          "source": "src/Simulation-Aivika-Internal-Signal.html#newSignalSource",
          "type": "function"
        },
        "index": {
          "description": "Create new signal source",
          "hierarchy": "Simulation Aivika Signal",
          "module": "Simulation.Aivika.Signal",
          "name": "newSignalSource",
          "package": "aivika",
          "partial": "Signal Source",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Signal.html#v:newSignalSource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePublish the signal.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Signal",
          "name": "publishSignal",
          "package": "aivika",
          "signature": "SignalSource a -\u003e Signal a",
          "source": "src/Simulation-Aivika-Internal-Signal.html#publishSignal",
          "type": "function"
        },
        "index": {
          "description": "Publish the signal",
          "hierarchy": "Simulation Aivika Signal",
          "module": "Simulation.Aivika.Signal",
          "name": "publishSignal",
          "normalized": "SignalSource a-\u003eSignal a",
          "package": "aivika",
          "partial": "Signal",
          "signature": "SignalSource a-\u003eSignal a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Signal.html#v:publishSignal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead the history of signal values.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Signal",
          "name": "readSignalHistory",
          "package": "aivika",
          "signature": "SignalHistory a -\u003e Event (Array Int Double, Array Int a)",
          "source": "src/Simulation-Aivika-Internal-Signal.html#readSignalHistory",
          "type": "function"
        },
        "index": {
          "description": "Read the history of signal values",
          "hierarchy": "Simulation Aivika Signal",
          "module": "Simulation.Aivika.Signal",
          "name": "readSignalHistory",
          "normalized": "SignalHistory a-\u003eEvent(Array Int Double,Array Int a)",
          "package": "aivika",
          "partial": "Signal History",
          "signature": "SignalHistory a-\u003eEvent(Array Int Double,Array Int a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Signal.html#v:readSignalHistory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn a computation of the value.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Signal",
          "name": "readSignalable",
          "package": "aivika",
          "signature": "Event a",
          "source": "src/Simulation-Aivika-Internal-Signal.html#Signalable",
          "type": "function"
        },
        "index": {
          "description": "Return computation of the value",
          "hierarchy": "Simulation Aivika Signal",
          "module": "Simulation.Aivika.Signal",
          "name": "readSignalable",
          "package": "aivika",
          "partial": "Signalable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Signal.html#v:readSignalable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe signal for which the history is created.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Signal",
          "name": "signalHistorySignal",
          "package": "aivika",
          "signature": "SignalHistory a -\u003e Signal a",
          "source": "src/Simulation-Aivika-Internal-Signal.html#signalHistorySignal",
          "type": "function"
        },
        "index": {
          "description": "The signal for which the history is created",
          "hierarchy": "Simulation Aivika Signal",
          "module": "Simulation.Aivika.Signal",
          "name": "signalHistorySignal",
          "normalized": "SignalHistory a-\u003eSignal a",
          "package": "aivika",
          "partial": "History Signal",
          "signature": "SignalHistory a-\u003eSignal a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Signal.html#v:signalHistorySignal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn a signal notifying that the value has changed.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Signal",
          "name": "signalableChanged",
          "package": "aivika",
          "signature": "Signalable a -\u003e Signal a",
          "source": "src/Simulation-Aivika-Internal-Signal.html#signalableChanged",
          "type": "function"
        },
        "index": {
          "description": "Return signal notifying that the value has changed",
          "hierarchy": "Simulation Aivika Signal",
          "module": "Simulation.Aivika.Signal",
          "name": "signalableChanged",
          "normalized": "Signalable a-\u003eSignal a",
          "package": "aivika",
          "partial": "Changed",
          "signature": "Signalable a-\u003eSignal a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Signal.html#v:signalableChanged"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn a signal notifying that the value has changed\n but without providing the information about the changed value.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Signal",
          "name": "signalableChanged_",
          "package": "aivika",
          "signature": "Signal ()",
          "source": "src/Simulation-Aivika-Internal-Signal.html#Signalable",
          "type": "function"
        },
        "index": {
          "description": "Return signal notifying that the value has changed but without providing the information about the changed value",
          "hierarchy": "Simulation Aivika Signal",
          "module": "Simulation.Aivika.Signal",
          "name": "signalableChanged_",
          "normalized": "Signal()",
          "package": "aivika",
          "partial": "Changed",
          "signature": "Signal()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Signal.html#v:signalableChanged_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrigger the signal actuating \n all its handlers at the current \n simulation time point.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Signal",
          "name": "triggerSignal",
          "package": "aivika",
          "signature": "SignalSource a -\u003e a -\u003e Event ()",
          "source": "src/Simulation-Aivika-Internal-Signal.html#triggerSignal",
          "type": "function"
        },
        "index": {
          "description": "Trigger the signal actuating all its handlers at the current simulation time point",
          "hierarchy": "Simulation Aivika Signal",
          "module": "Simulation.Aivika.Signal",
          "name": "triggerSignal",
          "normalized": "SignalSource a-\u003ea-\u003eEvent()",
          "package": "aivika",
          "partial": "Signal",
          "signature": "SignalSource a-\u003ea-\u003eEvent()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Signal.html#v:triggerSignal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTested with: GHC 7.6.3\n\u003c/p\u003e\u003cp\u003eThe module defines the \u003ccode\u003e\u003ca\u003eSimulation\u003c/a\u003e\u003c/code\u003e monad that represents a simulation run.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Simulation.Aivika.Simulation",
          "name": "Simulation",
          "package": "aivika",
          "source": "src/Simulation-Aivika-Simulation.html",
          "type": "module"
        },
        "index": {
          "description": "Tested with GHC The module defines the Simulation monad that represents simulation run",
          "hierarchy": "Simulation Aivika Simulation",
          "module": "Simulation.Aivika.Simulation",
          "name": "Simulation",
          "package": "aivika",
          "partial": "Simulation",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Simulation.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA value in the \u003ccode\u003e\u003ca\u003eSimulation\u003c/a\u003e\u003c/code\u003e monad represents a computation\n within the simulation run.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Simulation",
          "name": "Simulation",
          "package": "aivika",
          "source": "src/Simulation-Aivika-Internal-Simulation.html#Simulation",
          "type": "data"
        },
        "index": {
          "description": "value in the Simulation monad represents computation within the simulation run",
          "hierarchy": "Simulation Aivika Simulation",
          "module": "Simulation.Aivika.Simulation",
          "name": "Simulation",
          "package": "aivika",
          "partial": "Simulation",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Simulation.html#t:Simulation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type class to lift the simulation computations to other computations.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Simulation",
          "name": "SimulationLift",
          "package": "aivika",
          "source": "src/Simulation-Aivika-Internal-Simulation.html#SimulationLift",
          "type": "class"
        },
        "index": {
          "description": "type class to lift the simulation computations to other computations",
          "hierarchy": "Simulation Aivika Simulation",
          "module": "Simulation.Aivika.Simulation",
          "name": "SimulationLift",
          "package": "aivika",
          "partial": "Simulation Lift",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Simulation.html#t:SimulationLift"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eException handling within \u003ccode\u003e\u003ca\u003eSimulation\u003c/a\u003e\u003c/code\u003e computations.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Simulation",
          "name": "catchSimulation",
          "package": "aivika",
          "signature": "Simulation a -\u003e (IOException -\u003e Simulation a) -\u003e Simulation a",
          "source": "src/Simulation-Aivika-Internal-Simulation.html#catchSimulation",
          "type": "function"
        },
        "index": {
          "description": "Exception handling within Simulation computations",
          "hierarchy": "Simulation Aivika Simulation",
          "module": "Simulation.Aivika.Simulation",
          "name": "catchSimulation",
          "normalized": "Simulation a-\u003e(IOException-\u003eSimulation a)-\u003eSimulation a",
          "package": "aivika",
          "partial": "Simulation",
          "signature": "Simulation a-\u003e(IOException-\u003eSimulation a)-\u003eSimulation a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Simulation.html#v:catchSimulation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA computation with finalization part like the \u003ccode\u003e\u003ca\u003efinally\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Simulation",
          "name": "finallySimulation",
          "package": "aivika",
          "signature": "Simulation a -\u003e Simulation b -\u003e Simulation a",
          "source": "src/Simulation-Aivika-Internal-Simulation.html#finallySimulation",
          "type": "function"
        },
        "index": {
          "description": "computation with finalization part like the finally function",
          "hierarchy": "Simulation Aivika Simulation",
          "module": "Simulation.Aivika.Simulation",
          "name": "finallySimulation",
          "normalized": "Simulation a-\u003eSimulation b-\u003eSimulation a",
          "package": "aivika",
          "partial": "Simulation",
          "signature": "Simulation a-\u003eSimulation b-\u003eSimulation a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Simulation.html#v:finallySimulation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift the specified \u003ccode\u003e\u003ca\u003eSimulation\u003c/a\u003e\u003c/code\u003e computation to another computation.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Simulation",
          "name": "liftSimulation",
          "package": "aivika",
          "signature": "Simulation a -\u003e m a",
          "source": "src/Simulation-Aivika-Internal-Simulation.html#liftSimulation",
          "type": "method"
        },
        "index": {
          "description": "Lift the specified Simulation computation to another computation",
          "hierarchy": "Simulation Aivika Simulation",
          "module": "Simulation.Aivika.Simulation",
          "name": "liftSimulation",
          "normalized": "Simulation a-\u003eb a",
          "package": "aivika",
          "partial": "Simulation",
          "signature": "Simulation a-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Simulation.html#v:liftSimulation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMemoize the \u003ccode\u003e\u003ca\u003eSimulation\u003c/a\u003e\u003c/code\u003e computation, always returning the same value\n within a simulation run.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Simulation",
          "name": "memoSimulation",
          "package": "aivika",
          "signature": "Simulation a -\u003e Simulation (Simulation a)",
          "source": "src/Simulation-Aivika-Internal-Simulation.html#memoSimulation",
          "type": "function"
        },
        "index": {
          "description": "Memoize the Simulation computation always returning the same value within simulation run",
          "hierarchy": "Simulation Aivika Simulation",
          "module": "Simulation.Aivika.Simulation",
          "name": "memoSimulation",
          "normalized": "Simulation a-\u003eSimulation(Simulation a)",
          "package": "aivika",
          "partial": "Simulation",
          "signature": "Simulation a-\u003eSimulation(Simulation a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Simulation.html#v:memoSimulation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun the simulation using the specified specs.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Simulation",
          "name": "runSimulation",
          "package": "aivika",
          "signature": "Simulation a -\u003e Specs -\u003e IO a",
          "source": "src/Simulation-Aivika-Internal-Simulation.html#runSimulation",
          "type": "function"
        },
        "index": {
          "description": "Run the simulation using the specified specs",
          "hierarchy": "Simulation Aivika Simulation",
          "module": "Simulation.Aivika.Simulation",
          "name": "runSimulation",
          "normalized": "Simulation a-\u003eSpecs-\u003eIO a",
          "package": "aivika",
          "partial": "Simulation",
          "signature": "Simulation a-\u003eSpecs-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Simulation.html#v:runSimulation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun the given number of simulations using the specified specs, \n   where each simulation is distinguished by its index \u003ccode\u003e\u003ca\u003esimulationIndex\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Simulation",
          "name": "runSimulations",
          "package": "aivika",
          "signature": "Simulation a -\u003e Specs -\u003e Int -\u003e [IO a]",
          "source": "src/Simulation-Aivika-Internal-Simulation.html#runSimulations",
          "type": "function"
        },
        "index": {
          "description": "Run the given number of simulations using the specified specs where each simulation is distinguished by its index simulationIndex",
          "hierarchy": "Simulation Aivika Simulation",
          "module": "Simulation.Aivika.Simulation",
          "name": "runSimulations",
          "normalized": "Simulation a-\u003eSpecs-\u003eInt-\u003e[IO a]",
          "package": "aivika",
          "partial": "Simulations",
          "signature": "Simulation a-\u003eSpecs-\u003eInt-\u003e[IO a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Simulation.html#v:runSimulations"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike the standard \u003ccode\u003e\u003ca\u003ethrow\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Simulation",
          "name": "throwSimulation",
          "package": "aivika",
          "signature": "IOException -\u003e Simulation a",
          "source": "src/Simulation-Aivika-Internal-Simulation.html#throwSimulation",
          "type": "function"
        },
        "index": {
          "description": "Like the standard throw function",
          "hierarchy": "Simulation Aivika Simulation",
          "module": "Simulation.Aivika.Simulation",
          "name": "throwSimulation",
          "normalized": "IOException-\u003eSimulation a",
          "package": "aivika",
          "partial": "Simulation",
          "signature": "IOException-\u003eSimulation a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Simulation.html#v:throwSimulation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTested with: GHC 7.6.3\n\u003c/p\u003e\u003cp\u003eIt defines the simulation specs and functions for this data type.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Simulation.Aivika.Specs",
          "name": "Specs",
          "package": "aivika",
          "source": "src/Simulation-Aivika-Specs.html",
          "type": "module"
        },
        "index": {
          "description": "Tested with GHC It defines the simulation specs and functions for this data type",
          "hierarchy": "Simulation Aivika Specs",
          "module": "Simulation.Aivika.Specs",
          "name": "Specs",
          "package": "aivika",
          "partial": "Specs",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Specs.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIt defines the integration method.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Specs",
          "name": "Method",
          "package": "aivika",
          "source": "src/Simulation-Aivika-Internal-Specs.html#Method",
          "type": "data"
        },
        "index": {
          "description": "It defines the integration method",
          "hierarchy": "Simulation Aivika Specs",
          "module": "Simulation.Aivika.Specs",
          "name": "Method",
          "package": "aivika",
          "partial": "Method",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Specs.html#t:Method"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIt defines the simulation specs.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Specs",
          "name": "Specs",
          "package": "aivika",
          "source": "src/Simulation-Aivika-Internal-Specs.html#Specs",
          "type": "data"
        },
        "index": {
          "description": "It defines the simulation specs",
          "hierarchy": "Simulation Aivika Specs",
          "module": "Simulation.Aivika.Specs",
          "name": "Specs",
          "package": "aivika",
          "partial": "Specs",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Specs.html#t:Specs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEuler's method\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Specs",
          "name": "Euler",
          "package": "aivika",
          "signature": "Euler",
          "source": "src/Simulation-Aivika-Internal-Specs.html#Method",
          "type": "function"
        },
        "index": {
          "description": "Euler method",
          "hierarchy": "Simulation Aivika Specs",
          "module": "Simulation.Aivika.Specs",
          "name": "Euler",
          "package": "aivika",
          "partial": "Euler",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Specs.html#v:Euler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe 2nd order Runge-Kutta method\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Specs",
          "name": "RungeKutta2",
          "package": "aivika",
          "signature": "RungeKutta2",
          "source": "src/Simulation-Aivika-Internal-Specs.html#Method",
          "type": "function"
        },
        "index": {
          "description": "the nd order Runge-Kutta method",
          "hierarchy": "Simulation Aivika Specs",
          "module": "Simulation.Aivika.Specs",
          "name": "RungeKutta2",
          "package": "aivika",
          "partial": "Runge Kutta",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Specs.html#v:RungeKutta2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe 4th order Runge-Kutta method\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Specs",
          "name": "RungeKutta4",
          "package": "aivika",
          "signature": "RungeKutta4",
          "source": "src/Simulation-Aivika-Internal-Specs.html#Method",
          "type": "function"
        },
        "index": {
          "description": "the th order Runge-Kutta method",
          "hierarchy": "Simulation Aivika Specs",
          "module": "Simulation.Aivika.Specs",
          "name": "RungeKutta4",
          "package": "aivika",
          "partial": "Runge Kutta",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Specs.html#v:RungeKutta4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Simulation.Aivika.Specs",
          "name": "Specs",
          "package": "aivika",
          "signature": "Specs",
          "source": "src/Simulation-Aivika-Internal-Specs.html#Specs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Simulation Aivika Specs",
          "module": "Simulation.Aivika.Specs",
          "name": "Specs",
          "package": "aivika",
          "partial": "Specs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Specs.html#v:Specs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a simulation time for the integration point specified by \n the specs, iteration and phase.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Specs",
          "name": "basicTime",
          "package": "aivika",
          "signature": "Specs -\u003e Int -\u003e Int -\u003e Double",
          "source": "src/Simulation-Aivika-Internal-Specs.html#basicTime",
          "type": "function"
        },
        "index": {
          "description": "Returns simulation time for the integration point specified by the specs iteration and phase",
          "hierarchy": "Simulation Aivika Specs",
          "module": "Simulation.Aivika.Specs",
          "name": "basicTime",
          "normalized": "Specs-\u003eInt-\u003eInt-\u003eDouble",
          "package": "aivika",
          "partial": "Time",
          "signature": "Specs-\u003eInt-\u003eInt-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Specs.html#v:basicTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the first and last integration iterations.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Specs",
          "name": "integIterationBnds",
          "package": "aivika",
          "signature": "Specs -\u003e (Int, Int)",
          "source": "src/Simulation-Aivika-Internal-Specs.html#integIterationBnds",
          "type": "function"
        },
        "index": {
          "description": "Returns the first and last integration iterations",
          "hierarchy": "Simulation Aivika Specs",
          "module": "Simulation.Aivika.Specs",
          "name": "integIterationBnds",
          "normalized": "Specs-\u003e(Int,Int)",
          "package": "aivika",
          "partial": "Iteration Bnds",
          "signature": "Specs-\u003e(Int,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Specs.html#v:integIterationBnds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the last integration iteration.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Specs",
          "name": "integIterationHiBnd",
          "package": "aivika",
          "signature": "Specs -\u003e Int",
          "source": "src/Simulation-Aivika-Internal-Specs.html#integIterationHiBnd",
          "type": "function"
        },
        "index": {
          "description": "Returns the last integration iteration",
          "hierarchy": "Simulation Aivika Specs",
          "module": "Simulation.Aivika.Specs",
          "name": "integIterationHiBnd",
          "normalized": "Specs-\u003eInt",
          "package": "aivika",
          "partial": "Iteration Hi Bnd",
          "signature": "Specs-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Specs.html#v:integIterationHiBnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the first integration iteration, i.e. zero.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Specs",
          "name": "integIterationLoBnd",
          "package": "aivika",
          "signature": "Specs -\u003e Int",
          "source": "src/Simulation-Aivika-Internal-Specs.html#integIterationLoBnd",
          "type": "function"
        },
        "index": {
          "description": "Returns the first integration iteration i.e zero",
          "hierarchy": "Simulation Aivika Specs",
          "module": "Simulation.Aivika.Specs",
          "name": "integIterationLoBnd",
          "normalized": "Specs-\u003eInt",
          "package": "aivika",
          "partial": "Iteration Lo Bnd",
          "signature": "Specs-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Specs.html#v:integIterationLoBnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the first and last integration phases.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Specs",
          "name": "integPhaseBnds",
          "package": "aivika",
          "signature": "Specs -\u003e (Int, Int)",
          "source": "src/Simulation-Aivika-Internal-Specs.html#integPhaseBnds",
          "type": "function"
        },
        "index": {
          "description": "Returns the first and last integration phases",
          "hierarchy": "Simulation Aivika Specs",
          "module": "Simulation.Aivika.Specs",
          "name": "integPhaseBnds",
          "normalized": "Specs-\u003e(Int,Int)",
          "package": "aivika",
          "partial": "Phase Bnds",
          "signature": "Specs-\u003e(Int,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Specs.html#v:integPhaseBnds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the last integration phase, 0 for Euler's method, 1 for RK2 and 3 for RK4.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Specs",
          "name": "integPhaseHiBnd",
          "package": "aivika",
          "signature": "Specs -\u003e Int",
          "source": "src/Simulation-Aivika-Internal-Specs.html#integPhaseHiBnd",
          "type": "function"
        },
        "index": {
          "description": "Returns the last integration phase for Euler method for RK2 and for RK4",
          "hierarchy": "Simulation Aivika Specs",
          "module": "Simulation.Aivika.Specs",
          "name": "integPhaseHiBnd",
          "normalized": "Specs-\u003eInt",
          "package": "aivika",
          "partial": "Phase Hi Bnd",
          "signature": "Specs-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Specs.html#v:integPhaseHiBnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the first integration phase, i.e. zero.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Specs",
          "name": "integPhaseLoBnd",
          "package": "aivika",
          "signature": "Specs -\u003e Int",
          "source": "src/Simulation-Aivika-Internal-Specs.html#integPhaseLoBnd",
          "type": "function"
        },
        "index": {
          "description": "Returns the first integration phase i.e zero",
          "hierarchy": "Simulation Aivika Specs",
          "module": "Simulation.Aivika.Specs",
          "name": "integPhaseLoBnd",
          "normalized": "Specs-\u003eInt",
          "package": "aivika",
          "partial": "Phase Lo Bnd",
          "signature": "Specs-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Specs.html#v:integPhaseLoBnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the integration time values.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Specs",
          "name": "integTimes",
          "package": "aivika",
          "signature": "Specs -\u003e [Double]",
          "source": "src/Simulation-Aivika-Internal-Specs.html#integTimes",
          "type": "function"
        },
        "index": {
          "description": "Return the integration time values",
          "hierarchy": "Simulation Aivika Specs",
          "module": "Simulation.Aivika.Specs",
          "name": "integTimes",
          "normalized": "Specs-\u003e[Double]",
          "package": "aivika",
          "partial": "Times",
          "signature": "Specs-\u003e[Double]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Specs.html#v:integTimes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe integration time step\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Specs",
          "name": "spcDT",
          "package": "aivika",
          "signature": "Double",
          "source": "src/Simulation-Aivika-Internal-Specs.html#Specs",
          "type": "function"
        },
        "index": {
          "description": "the integration time step",
          "hierarchy": "Simulation Aivika Specs",
          "module": "Simulation.Aivika.Specs",
          "name": "spcDT",
          "package": "aivika",
          "partial": "DT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Specs.html#v:spcDT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe type of the random number generator\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Specs",
          "name": "spcGeneratorType",
          "package": "aivika",
          "signature": "GeneratorType",
          "source": "src/Simulation-Aivika-Internal-Specs.html#Specs",
          "type": "function"
        },
        "index": {
          "description": "the type of the random number generator",
          "hierarchy": "Simulation Aivika Specs",
          "module": "Simulation.Aivika.Specs",
          "name": "spcGeneratorType",
          "package": "aivika",
          "partial": "Generator Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Specs.html#v:spcGeneratorType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe integration method\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Specs",
          "name": "spcMethod",
          "package": "aivika",
          "signature": "Method",
          "source": "src/Simulation-Aivika-Internal-Specs.html#Specs",
          "type": "function"
        },
        "index": {
          "description": "the integration method",
          "hierarchy": "Simulation Aivika Specs",
          "module": "Simulation.Aivika.Specs",
          "name": "spcMethod",
          "package": "aivika",
          "partial": "Method",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Specs.html#v:spcMethod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe start time\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Specs",
          "name": "spcStartTime",
          "package": "aivika",
          "signature": "Double",
          "source": "src/Simulation-Aivika-Internal-Specs.html#Specs",
          "type": "function"
        },
        "index": {
          "description": "the start time",
          "hierarchy": "Simulation Aivika Specs",
          "module": "Simulation.Aivika.Specs",
          "name": "spcStartTime",
          "package": "aivika",
          "partial": "Start Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Specs.html#v:spcStartTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe stop time\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Specs",
          "name": "spcStopTime",
          "package": "aivika",
          "signature": "Double",
          "source": "src/Simulation-Aivika-Internal-Specs.html#Specs",
          "type": "function"
        },
        "index": {
          "description": "the stop time",
          "hierarchy": "Simulation Aivika Specs",
          "module": "Simulation.Aivika.Specs",
          "name": "spcStopTime",
          "package": "aivika",
          "partial": "Stop Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Specs.html#v:spcStopTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTested with: GHC 7.6.3\n\u003c/p\u003e\u003cp\u003eThis small utility module allows accumulating the timing statistics based on \u003ccode\u003e\u003ca\u003eSignalable\u003c/a\u003e\u003c/code\u003e data\n such as the queue size or the number of lost items in the queue.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Simulation.Aivika.Statistics.Accumulator",
          "name": "Accumulator",
          "package": "aivika",
          "source": "src/Simulation-Aivika-Statistics-Accumulator.html",
          "type": "module"
        },
        "index": {
          "description": "Tested with GHC This small utility module allows accumulating the timing statistics based on Signalable data such as the queue size or the number of lost items in the queue",
          "hierarchy": "Simulation Aivika Statistics Accumulator",
          "module": "Simulation.Aivika.Statistics.Accumulator",
          "name": "Accumulator",
          "package": "aivika",
          "partial": "Accumulator",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Statistics-Accumulator.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents an accumulator for the timing statistics.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Statistics.Accumulator",
          "name": "TimingStatsAccumulator",
          "package": "aivika",
          "source": "src/Simulation-Aivika-Statistics-Accumulator.html#TimingStatsAccumulator",
          "type": "data"
        },
        "index": {
          "description": "Represents an accumulator for the timing statistics",
          "hierarchy": "Simulation Aivika Statistics Accumulator",
          "module": "Simulation.Aivika.Statistics.Accumulator",
          "name": "TimingStatsAccumulator",
          "package": "aivika",
          "partial": "Timing Stats Accumulator",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Statistics-Accumulator.html#t:TimingStatsAccumulator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStart gathering the timing statistics from the current simulation time. \n\u003c/p\u003e",
          "module": "Simulation.Aivika.Statistics.Accumulator",
          "name": "newTimingStatsAccumulator",
          "package": "aivika",
          "signature": "Signalable a -\u003e Event (TimingStatsAccumulator a)",
          "source": "src/Simulation-Aivika-Statistics-Accumulator.html#newTimingStatsAccumulator",
          "type": "function"
        },
        "index": {
          "description": "Start gathering the timing statistics from the current simulation time",
          "hierarchy": "Simulation Aivika Statistics Accumulator",
          "module": "Simulation.Aivika.Statistics.Accumulator",
          "name": "newTimingStatsAccumulator",
          "normalized": "Signalable a-\u003eEvent(TimingStatsAccumulator a)",
          "package": "aivika",
          "partial": "Timing Stats Accumulator",
          "signature": "Signalable a-\u003eEvent(TimingStatsAccumulator a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Statistics-Accumulator.html#v:newTimingStatsAccumulator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the accumulated statistics.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Statistics.Accumulator",
          "name": "timingStatsAccumulated",
          "package": "aivika",
          "signature": "TimingStatsAccumulator a -\u003e Event (TimingStats a)",
          "source": "src/Simulation-Aivika-Statistics-Accumulator.html#timingStatsAccumulated",
          "type": "function"
        },
        "index": {
          "description": "Return the accumulated statistics",
          "hierarchy": "Simulation Aivika Statistics Accumulator",
          "module": "Simulation.Aivika.Statistics.Accumulator",
          "name": "timingStatsAccumulated",
          "normalized": "TimingStatsAccumulator a-\u003eEvent(TimingStats a)",
          "package": "aivika",
          "partial": "Stats Accumulated",
          "signature": "TimingStatsAccumulator a-\u003eEvent(TimingStats a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Statistics-Accumulator.html#v:timingStatsAccumulated"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTested with: GHC 7.6.3\n\u003c/p\u003e\u003cp\u003eRepresents statistics.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Simulation.Aivika.Statistics",
          "name": "Statistics",
          "package": "aivika",
          "source": "src/Simulation-Aivika-Statistics.html",
          "type": "module"
        },
        "index": {
          "description": "Tested with GHC Represents statistics",
          "hierarchy": "Simulation Aivika Statistics",
          "module": "Simulation.Aivika.Statistics",
          "name": "Statistics",
          "package": "aivika",
          "partial": "Statistics",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Statistics.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecifies data type from which values we can gather the statistics.           \n\u003c/p\u003e",
          "module": "Simulation.Aivika.Statistics",
          "name": "SamplingData",
          "package": "aivika",
          "source": "src/Simulation-Aivika-Statistics.html#SamplingData",
          "type": "class"
        },
        "index": {
          "description": "Specifies data type from which values we can gather the statistics",
          "hierarchy": "Simulation Aivika Statistics",
          "module": "Simulation.Aivika.Statistics",
          "name": "SamplingData",
          "package": "aivika",
          "partial": "Sampling Data",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Statistics.html#t:SamplingData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDescribes when the statistics consists of only samples \n not bound to the simulation time.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Statistics",
          "name": "SamplingStats",
          "package": "aivika",
          "source": "src/Simulation-Aivika-Statistics.html#SamplingStats",
          "type": "data"
        },
        "index": {
          "description": "Describes when the statistics consists of only samples not bound to the simulation time",
          "hierarchy": "Simulation Aivika Statistics",
          "module": "Simulation.Aivika.Statistics",
          "name": "SamplingStats",
          "package": "aivika",
          "partial": "Sampling Stats",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Statistics.html#t:SamplingStats"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefines the data type from which values we can gather the timing statistics.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Statistics",
          "name": "TimingData",
          "package": "aivika",
          "source": "src/Simulation-Aivika-Statistics.html#TimingData",
          "type": "class"
        },
        "index": {
          "description": "Defines the data type from which values we can gather the timing statistics",
          "hierarchy": "Simulation Aivika Statistics",
          "module": "Simulation.Aivika.Statistics",
          "name": "TimingData",
          "package": "aivika",
          "partial": "Timing Data",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Statistics.html#t:TimingData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is the timing statistics where data are bound to the time.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Statistics",
          "name": "TimingStats",
          "package": "aivika",
          "source": "src/Simulation-Aivika-Statistics.html#TimingStats",
          "type": "data"
        },
        "index": {
          "description": "This is the timing statistics where data are bound to the time",
          "hierarchy": "Simulation Aivika Statistics",
          "module": "Simulation.Aivika.Statistics",
          "name": "TimingStats",
          "package": "aivika",
          "partial": "Timing Stats",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Statistics.html#t:TimingStats"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Simulation.Aivika.Statistics",
          "name": "SamplingStats",
          "package": "aivika",
          "signature": "SamplingStats",
          "source": "src/Simulation-Aivika-Statistics.html#SamplingStats",
          "type": "function"
        },
        "index": {
          "hierarchy": "Simulation Aivika Statistics",
          "module": "Simulation.Aivika.Statistics",
          "name": "SamplingStats",
          "package": "aivika",
          "partial": "Sampling Stats",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Statistics.html#v:SamplingStats"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Simulation.Aivika.Statistics",
          "name": "TimingStats",
          "package": "aivika",
          "signature": "TimingStats",
          "source": "src/Simulation-Aivika-Statistics.html#TimingStats",
          "type": "function"
        },
        "index": {
          "hierarchy": "Simulation Aivika Statistics",
          "module": "Simulation.Aivika.Statistics",
          "name": "TimingStats",
          "package": "aivika",
          "partial": "Timing Stats",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Statistics.html#v:TimingStats"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd a new sample to the statistics.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Statistics",
          "name": "addSamplingStats",
          "package": "aivika",
          "signature": "a -\u003e SamplingStats a -\u003e SamplingStats a",
          "source": "src/Simulation-Aivika-Statistics.html#addSamplingStats",
          "type": "method"
        },
        "index": {
          "description": "Add new sample to the statistics",
          "hierarchy": "Simulation Aivika Statistics",
          "module": "Simulation.Aivika.Statistics",
          "name": "addSamplingStats",
          "normalized": "a-\u003eSamplingStats a-\u003eSamplingStats a",
          "package": "aivika",
          "partial": "Sampling Stats",
          "signature": "a-\u003eSamplingStats a-\u003eSamplingStats a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Statistics.html#v:addSamplingStats"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd a sample with the specified time to the statistics.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Statistics",
          "name": "addTimingStats",
          "package": "aivika",
          "signature": "Double -\u003e a -\u003e TimingStats a -\u003e TimingStats a",
          "source": "src/Simulation-Aivika-Statistics.html#addTimingStats",
          "type": "method"
        },
        "index": {
          "description": "Add sample with the specified time to the statistics",
          "hierarchy": "Simulation Aivika Statistics",
          "module": "Simulation.Aivika.Statistics",
          "name": "addTimingStats",
          "normalized": "Double-\u003ea-\u003eTimingStats a-\u003eTimingStats a",
          "package": "aivika",
          "partial": "Timing Stats",
          "signature": "Double-\u003ea-\u003eTimingStats a-\u003eTimingStats a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Statistics.html#v:addTimingStats"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombine two statistics.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Statistics",
          "name": "combineSamplingStats",
          "package": "aivika",
          "signature": "SamplingStats a -\u003e SamplingStats a -\u003e SamplingStats a",
          "source": "src/Simulation-Aivika-Statistics.html#combineSamplingStats",
          "type": "method"
        },
        "index": {
          "description": "Combine two statistics",
          "hierarchy": "Simulation Aivika Statistics",
          "module": "Simulation.Aivika.Statistics",
          "name": "combineSamplingStats",
          "normalized": "SamplingStats a-\u003eSamplingStats a-\u003eSamplingStats a",
          "package": "aivika",
          "partial": "Sampling Stats",
          "signature": "SamplingStats a-\u003eSamplingStats a-\u003eSamplingStats a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Statistics.html#v:combineSamplingStats"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn empty statistics that has no samples.           \n\u003c/p\u003e",
          "module": "Simulation.Aivika.Statistics",
          "name": "emptySamplingStats",
          "package": "aivika",
          "signature": "SamplingStats a",
          "source": "src/Simulation-Aivika-Statistics.html#emptySamplingStats",
          "type": "method"
        },
        "index": {
          "description": "An empty statistics that has no samples",
          "hierarchy": "Simulation Aivika Statistics",
          "module": "Simulation.Aivika.Statistics",
          "name": "emptySamplingStats",
          "package": "aivika",
          "partial": "Sampling Stats",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Statistics.html#v:emptySamplingStats"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn empty statistics that has no samples.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Statistics",
          "name": "emptyTimingStats",
          "package": "aivika",
          "signature": "TimingStats a",
          "source": "src/Simulation-Aivika-Statistics.html#emptyTimingStats",
          "type": "method"
        },
        "index": {
          "description": "An empty statistics that has no samples",
          "hierarchy": "Simulation Aivika Statistics",
          "module": "Simulation.Aivika.Statistics",
          "name": "emptyTimingStats",
          "package": "aivika",
          "partial": "Timing Stats",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Statistics.html#v:emptyTimingStats"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert the statistics from integer to double values.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Statistics",
          "name": "fromIntSamplingStats",
          "package": "aivika",
          "signature": "SamplingStats Int -\u003e SamplingStats Double",
          "source": "src/Simulation-Aivika-Statistics.html#fromIntSamplingStats",
          "type": "function"
        },
        "index": {
          "description": "Convert the statistics from integer to double values",
          "hierarchy": "Simulation Aivika Statistics",
          "module": "Simulation.Aivika.Statistics",
          "name": "fromIntSamplingStats",
          "normalized": "SamplingStats Int-\u003eSamplingStats Double",
          "package": "aivika",
          "partial": "Int Sampling Stats",
          "signature": "SamplingStats Int-\u003eSamplingStats Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Statistics.html#v:fromIntSamplingStats"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert the statistics from integer to double values.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Statistics",
          "name": "fromIntTimingStats",
          "package": "aivika",
          "signature": "TimingStats Int -\u003e TimingStats Double",
          "source": "src/Simulation-Aivika-Statistics.html#fromIntTimingStats",
          "type": "function"
        },
        "index": {
          "description": "Convert the statistics from integer to double values",
          "hierarchy": "Simulation Aivika Statistics",
          "module": "Simulation.Aivika.Statistics",
          "name": "fromIntTimingStats",
          "normalized": "TimingStats Int-\u003eTimingStats Double",
          "package": "aivika",
          "partial": "Int Timing Stats",
          "signature": "TimingStats Int-\u003eTimingStats Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Statistics.html#v:fromIntTimingStats"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate the statistics by the specified list of data.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Statistics",
          "name": "listSamplingStats",
          "package": "aivika",
          "signature": "[a] -\u003e SamplingStats a",
          "source": "src/Simulation-Aivika-Statistics.html#listSamplingStats",
          "type": "function"
        },
        "index": {
          "description": "Create the statistics by the specified list of data",
          "hierarchy": "Simulation Aivika Statistics",
          "module": "Simulation.Aivika.Statistics",
          "name": "listSamplingStats",
          "normalized": "[a]-\u003eSamplingStats a",
          "package": "aivika",
          "partial": "Sampling Stats",
          "signature": "[a]-\u003eSamplingStats a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Statistics.html#v:listSamplingStats"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the statistics by a single sample.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Statistics",
          "name": "returnSamplingStats",
          "package": "aivika",
          "signature": "a -\u003e SamplingStats a",
          "source": "src/Simulation-Aivika-Statistics.html#returnSamplingStats",
          "type": "function"
        },
        "index": {
          "description": "Return the statistics by single sample",
          "hierarchy": "Simulation Aivika Statistics",
          "module": "Simulation.Aivika.Statistics",
          "name": "returnSamplingStats",
          "normalized": "a-\u003eSamplingStats a",
          "package": "aivika",
          "partial": "Sampling Stats",
          "signature": "a-\u003eSamplingStats a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Statistics.html#v:returnSamplingStats"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the statistics by single timing data.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Statistics",
          "name": "returnTimingStats",
          "package": "aivika",
          "signature": "Double -\u003e a -\u003e TimingStats a",
          "source": "src/Simulation-Aivika-Statistics.html#returnTimingStats",
          "type": "function"
        },
        "index": {
          "description": "Return the statistics by single timing data",
          "hierarchy": "Simulation Aivika Statistics",
          "module": "Simulation.Aivika.Statistics",
          "name": "returnTimingStats",
          "normalized": "Double-\u003ea-\u003eTimingStats a",
          "package": "aivika",
          "partial": "Timing Stats",
          "signature": "Double-\u003ea-\u003eTimingStats a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Statistics.html#v:returnTimingStats"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe total number of samples.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Statistics",
          "name": "samplingStatsCount",
          "package": "aivika",
          "signature": "Int",
          "source": "src/Simulation-Aivika-Statistics.html#SamplingStats",
          "type": "function"
        },
        "index": {
          "description": "The total number of samples",
          "hierarchy": "Simulation Aivika Statistics",
          "module": "Simulation.Aivika.Statistics",
          "name": "samplingStatsCount",
          "package": "aivika",
          "partial": "Stats Count",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Statistics.html#v:samplingStatsCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the deviation.          \n\u003c/p\u003e",
          "module": "Simulation.Aivika.Statistics",
          "name": "samplingStatsDeviation",
          "package": "aivika",
          "signature": "SamplingStats a -\u003e Double",
          "source": "src/Simulation-Aivika-Statistics.html#samplingStatsDeviation",
          "type": "function"
        },
        "index": {
          "description": "Return the deviation",
          "hierarchy": "Simulation Aivika Statistics",
          "module": "Simulation.Aivika.Statistics",
          "name": "samplingStatsDeviation",
          "normalized": "SamplingStats a-\u003eDouble",
          "package": "aivika",
          "partial": "Stats Deviation",
          "signature": "SamplingStats a-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Statistics.html#v:samplingStatsDeviation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe maximum value among the samples.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Statistics",
          "name": "samplingStatsMax",
          "package": "aivika",
          "signature": "a",
          "source": "src/Simulation-Aivika-Statistics.html#SamplingStats",
          "type": "function"
        },
        "index": {
          "description": "The maximum value among the samples",
          "hierarchy": "Simulation Aivika Statistics",
          "module": "Simulation.Aivika.Statistics",
          "name": "samplingStatsMax",
          "package": "aivika",
          "partial": "Stats Max",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Statistics.html#v:samplingStatsMax"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe average value.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Statistics",
          "name": "samplingStatsMean",
          "package": "aivika",
          "signature": "Double",
          "source": "src/Simulation-Aivika-Statistics.html#SamplingStats",
          "type": "function"
        },
        "index": {
          "description": "The average value",
          "hierarchy": "Simulation Aivika Statistics",
          "module": "Simulation.Aivika.Statistics",
          "name": "samplingStatsMean",
          "package": "aivika",
          "partial": "Stats Mean",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Statistics.html#v:samplingStatsMean"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe average square value.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Statistics",
          "name": "samplingStatsMean2",
          "package": "aivika",
          "signature": "Double",
          "source": "src/Simulation-Aivika-Statistics.html#SamplingStats",
          "type": "function"
        },
        "index": {
          "description": "The average square value",
          "hierarchy": "Simulation Aivika Statistics",
          "module": "Simulation.Aivika.Statistics",
          "name": "samplingStatsMean2",
          "package": "aivika",
          "partial": "Stats Mean",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Statistics.html#v:samplingStatsMean2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe minimum value among the samples.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Statistics",
          "name": "samplingStatsMin",
          "package": "aivika",
          "signature": "a",
          "source": "src/Simulation-Aivika-Statistics.html#SamplingStats",
          "type": "function"
        },
        "index": {
          "description": "The minimum value among the samples",
          "hierarchy": "Simulation Aivika Statistics",
          "module": "Simulation.Aivika.Statistics",
          "name": "samplingStatsMin",
          "package": "aivika",
          "partial": "Stats Min",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Statistics.html#v:samplingStatsMin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShow the summary of the statistics using the specified indent.       \n\u003c/p\u003e",
          "module": "Simulation.Aivika.Statistics",
          "name": "samplingStatsSummary",
          "package": "aivika",
          "signature": "SamplingStats a -\u003e Int -\u003e ShowS",
          "source": "src/Simulation-Aivika-Statistics.html#samplingStatsSummary",
          "type": "function"
        },
        "index": {
          "description": "Show the summary of the statistics using the specified indent",
          "hierarchy": "Simulation Aivika Statistics",
          "module": "Simulation.Aivika.Statistics",
          "name": "samplingStatsSummary",
          "normalized": "SamplingStats a-\u003eInt-\u003eShowS",
          "package": "aivika",
          "partial": "Stats Summary",
          "signature": "SamplingStats a-\u003eInt-\u003eShowS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Statistics.html#v:samplingStatsSummary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the variance.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Statistics",
          "name": "samplingStatsVariance",
          "package": "aivika",
          "signature": "SamplingStats a -\u003e Double",
          "source": "src/Simulation-Aivika-Statistics.html#samplingStatsVariance",
          "type": "function"
        },
        "index": {
          "description": "Return the variance",
          "hierarchy": "Simulation Aivika Statistics",
          "module": "Simulation.Aivika.Statistics",
          "name": "samplingStatsVariance",
          "normalized": "SamplingStats a-\u003eDouble",
          "package": "aivika",
          "partial": "Stats Variance",
          "signature": "SamplingStats a-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Statistics.html#v:samplingStatsVariance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the number of samples.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Statistics",
          "name": "timingStatsCount",
          "package": "aivika",
          "signature": "Int",
          "source": "src/Simulation-Aivika-Statistics.html#TimingStats",
          "type": "function"
        },
        "index": {
          "description": "Return the number of samples",
          "hierarchy": "Simulation Aivika Statistics",
          "module": "Simulation.Aivika.Statistics",
          "name": "timingStatsCount",
          "package": "aivika",
          "partial": "Stats Count",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Statistics.html#v:timingStatsCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the deviation.              \n\u003c/p\u003e",
          "module": "Simulation.Aivika.Statistics",
          "name": "timingStatsDeviation",
          "package": "aivika",
          "signature": "TimingStats a -\u003e Double",
          "source": "src/Simulation-Aivika-Statistics.html#timingStatsDeviation",
          "type": "function"
        },
        "index": {
          "description": "Return the deviation",
          "hierarchy": "Simulation Aivika Statistics",
          "module": "Simulation.Aivika.Statistics",
          "name": "timingStatsDeviation",
          "normalized": "TimingStats a-\u003eDouble",
          "package": "aivika",
          "partial": "Stats Deviation",
          "signature": "TimingStats a-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Statistics.html#v:timingStatsDeviation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the last time of sampling.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Statistics",
          "name": "timingStatsLastTime",
          "package": "aivika",
          "signature": "Double",
          "source": "src/Simulation-Aivika-Statistics.html#TimingStats",
          "type": "function"
        },
        "index": {
          "description": "Return the last time of sampling",
          "hierarchy": "Simulation Aivika Statistics",
          "module": "Simulation.Aivika.Statistics",
          "name": "timingStatsLastTime",
          "package": "aivika",
          "partial": "Stats Last Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Statistics.html#v:timingStatsLastTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the maximum value.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Statistics",
          "name": "timingStatsMax",
          "package": "aivika",
          "signature": "a",
          "source": "src/Simulation-Aivika-Statistics.html#TimingStats",
          "type": "function"
        },
        "index": {
          "description": "Return the maximum value",
          "hierarchy": "Simulation Aivika Statistics",
          "module": "Simulation.Aivika.Statistics",
          "name": "timingStatsMax",
          "package": "aivika",
          "partial": "Stats Max",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Statistics.html#v:timingStatsMax"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the time at which the maximum is attained.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Statistics",
          "name": "timingStatsMaxTime",
          "package": "aivika",
          "signature": "Double",
          "source": "src/Simulation-Aivika-Statistics.html#TimingStats",
          "type": "function"
        },
        "index": {
          "description": "Return the time at which the maximum is attained",
          "hierarchy": "Simulation Aivika Statistics",
          "module": "Simulation.Aivika.Statistics",
          "name": "timingStatsMaxTime",
          "package": "aivika",
          "partial": "Stats Max Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Statistics.html#v:timingStatsMaxTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the average value.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Statistics",
          "name": "timingStatsMean",
          "package": "aivika",
          "signature": "TimingStats a -\u003e Double",
          "source": "src/Simulation-Aivika-Statistics.html#timingStatsMean",
          "type": "method"
        },
        "index": {
          "description": "Return the average value",
          "hierarchy": "Simulation Aivika Statistics",
          "module": "Simulation.Aivika.Statistics",
          "name": "timingStatsMean",
          "normalized": "TimingStats a-\u003eDouble",
          "package": "aivika",
          "partial": "Stats Mean",
          "signature": "TimingStats a-\u003eDouble",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Statistics.html#v:timingStatsMean"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the minimum value.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Statistics",
          "name": "timingStatsMin",
          "package": "aivika",
          "signature": "a",
          "source": "src/Simulation-Aivika-Statistics.html#TimingStats",
          "type": "function"
        },
        "index": {
          "description": "Return the minimum value",
          "hierarchy": "Simulation Aivika Statistics",
          "module": "Simulation.Aivika.Statistics",
          "name": "timingStatsMin",
          "package": "aivika",
          "partial": "Stats Min",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Statistics.html#v:timingStatsMin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the time at which the minimum is attained.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Statistics",
          "name": "timingStatsMinTime",
          "package": "aivika",
          "signature": "Double",
          "source": "src/Simulation-Aivika-Statistics.html#TimingStats",
          "type": "function"
        },
        "index": {
          "description": "Return the time at which the minimum is attained",
          "hierarchy": "Simulation Aivika Statistics",
          "module": "Simulation.Aivika.Statistics",
          "name": "timingStatsMinTime",
          "package": "aivika",
          "partial": "Stats Min Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Statistics.html#v:timingStatsMinTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the start time of sampling.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Statistics",
          "name": "timingStatsStartTime",
          "package": "aivika",
          "signature": "Double",
          "source": "src/Simulation-Aivika-Statistics.html#TimingStats",
          "type": "function"
        },
        "index": {
          "description": "Return the start time of sampling",
          "hierarchy": "Simulation Aivika Statistics",
          "module": "Simulation.Aivika.Statistics",
          "name": "timingStatsStartTime",
          "package": "aivika",
          "partial": "Stats Start Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Statistics.html#v:timingStatsStartTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the sum of values.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Statistics",
          "name": "timingStatsSum",
          "package": "aivika",
          "signature": "Double",
          "source": "src/Simulation-Aivika-Statistics.html#TimingStats",
          "type": "function"
        },
        "index": {
          "description": "Return the sum of values",
          "hierarchy": "Simulation Aivika Statistics",
          "module": "Simulation.Aivika.Statistics",
          "name": "timingStatsSum",
          "package": "aivika",
          "partial": "Stats Sum",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Statistics.html#v:timingStatsSum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the sum of square values.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Statistics",
          "name": "timingStatsSum2",
          "package": "aivika",
          "signature": "Double",
          "source": "src/Simulation-Aivika-Statistics.html#TimingStats",
          "type": "function"
        },
        "index": {
          "description": "Return the sum of square values",
          "hierarchy": "Simulation Aivika Statistics",
          "module": "Simulation.Aivika.Statistics",
          "name": "timingStatsSum2",
          "package": "aivika",
          "partial": "Stats Sum",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Statistics.html#v:timingStatsSum2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShow the summary of the statistics using the specified indent.       \n\u003c/p\u003e",
          "module": "Simulation.Aivika.Statistics",
          "name": "timingStatsSummary",
          "package": "aivika",
          "signature": "TimingStats a -\u003e Int -\u003e ShowS",
          "source": "src/Simulation-Aivika-Statistics.html#timingStatsSummary",
          "type": "function"
        },
        "index": {
          "description": "Show the summary of the statistics using the specified indent",
          "hierarchy": "Simulation Aivika Statistics",
          "module": "Simulation.Aivika.Statistics",
          "name": "timingStatsSummary",
          "normalized": "TimingStats a-\u003eInt-\u003eShowS",
          "package": "aivika",
          "partial": "Stats Summary",
          "signature": "TimingStats a-\u003eInt-\u003eShowS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Statistics.html#v:timingStatsSummary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the variance.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Statistics",
          "name": "timingStatsVariance",
          "package": "aivika",
          "signature": "TimingStats a -\u003e Double",
          "source": "src/Simulation-Aivika-Statistics.html#timingStatsVariance",
          "type": "method"
        },
        "index": {
          "description": "Return the variance",
          "hierarchy": "Simulation Aivika Statistics",
          "module": "Simulation.Aivika.Statistics",
          "name": "timingStatsVariance",
          "normalized": "TimingStats a-\u003eDouble",
          "package": "aivika",
          "partial": "Stats Variance",
          "signature": "TimingStats a-\u003eDouble",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Statistics.html#v:timingStatsVariance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTested with: GHC 7.6.3\n\u003c/p\u003e\u003cp\u003eThis module defines random streams of events, which are useful\n for describing the input of the model.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Simulation.Aivika.Stream.Random",
          "name": "Random",
          "package": "aivika",
          "source": "src/Simulation-Aivika-Stream-Random.html",
          "type": "module"
        },
        "index": {
          "description": "Tested with GHC This module defines random streams of events which are useful for describing the input of the model",
          "hierarchy": "Simulation Aivika Stream Random",
          "module": "Simulation.Aivika.Stream.Random",
          "name": "Random",
          "package": "aivika",
          "partial": "Random",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Stream-Random.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn a new stream with delays having the binomial distribution with the specified\n probability and trials.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Stream.Random",
          "name": "randomBinomialStream",
          "package": "aivika",
          "signature": "Double-\u003e Int-\u003e Stream Arrival",
          "type": "function"
        },
        "index": {
          "description": "Return new stream with delays having the binomial distribution with the specified probability and trials",
          "hierarchy": "Simulation Aivika Stream Random",
          "module": "Simulation.Aivika.Stream.Random",
          "name": "randomBinomialStream",
          "normalized": "Double-\u003eInt-\u003eStream Arrival",
          "package": "aivika",
          "partial": "Binomial Stream",
          "signature": "Double-\u003eInt-\u003eStream Arrival",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Stream-Random.html#v:randomBinomialStream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn a new stream with delays having the Erlang distribution with the specified\n scale (the reciprocal of the rate) and shape parameters.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Stream.Random",
          "name": "randomErlangStream",
          "package": "aivika",
          "signature": "Double-\u003e Int-\u003e Stream Arrival",
          "type": "function"
        },
        "index": {
          "description": "Return new stream with delays having the Erlang distribution with the specified scale the reciprocal of the rate and shape parameters",
          "hierarchy": "Simulation Aivika Stream Random",
          "module": "Simulation.Aivika.Stream.Random",
          "name": "randomErlangStream",
          "normalized": "Double-\u003eInt-\u003eStream Arrival",
          "package": "aivika",
          "partial": "Erlang Stream",
          "signature": "Double-\u003eInt-\u003eStream Arrival",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Stream-Random.html#v:randomErlangStream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn a new stream with delays distibuted exponentially with the specified mean\n (the reciprocal of the rate).\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Stream.Random",
          "name": "randomExponentialStream",
          "package": "aivika",
          "signature": "Double-\u003e Stream Arrival",
          "type": "function"
        },
        "index": {
          "description": "Return new stream with delays distibuted exponentially with the specified mean the reciprocal of the rate",
          "hierarchy": "Simulation Aivika Stream Random",
          "module": "Simulation.Aivika.Stream.Random",
          "name": "randomExponentialStream",
          "normalized": "Double-\u003eStream Arrival",
          "package": "aivika",
          "partial": "Exponential Stream",
          "signature": "Double-\u003eStream Arrival",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Stream-Random.html#v:randomExponentialStream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new stream with delays distributed normally.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Stream.Random",
          "name": "randomNormalStream",
          "package": "aivika",
          "signature": "Double-\u003e Double-\u003e Stream Arrival",
          "type": "function"
        },
        "index": {
          "description": "Create new stream with delays distributed normally",
          "hierarchy": "Simulation Aivika Stream Random",
          "module": "Simulation.Aivika.Stream.Random",
          "name": "randomNormalStream",
          "normalized": "Double-\u003eDouble-\u003eStream Arrival",
          "package": "aivika",
          "partial": "Normal Stream",
          "signature": "Double-\u003eDouble-\u003eStream Arrival",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Stream-Random.html#v:randomNormalStream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn a new stream with delays having the Poisson distribution with\n the specified mean.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Stream.Random",
          "name": "randomPoissonStream",
          "package": "aivika",
          "signature": "Double-\u003e Stream Arrival",
          "type": "function"
        },
        "index": {
          "description": "Return new stream with delays having the Poisson distribution with the specified mean",
          "hierarchy": "Simulation Aivika Stream Random",
          "module": "Simulation.Aivika.Stream.Random",
          "name": "randomPoissonStream",
          "normalized": "Double-\u003eStream Arrival",
          "package": "aivika",
          "partial": "Poisson Stream",
          "signature": "Double-\u003eStream Arrival",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Stream-Random.html#v:randomPoissonStream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn a sream of random events that arrive with the specified delay.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Stream.Random",
          "name": "randomStream",
          "package": "aivika",
          "signature": "Parameter Double -\u003e Stream Arrival",
          "source": "src/Simulation-Aivika-Stream-Random.html#randomStream",
          "type": "function"
        },
        "index": {
          "description": "Return sream of random events that arrive with the specified delay",
          "hierarchy": "Simulation Aivika Stream Random",
          "module": "Simulation.Aivika.Stream.Random",
          "name": "randomStream",
          "normalized": "Parameter Double-\u003eStream Arrival",
          "package": "aivika",
          "partial": "Stream",
          "signature": "Parameter Double-\u003eStream Arrival",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Stream-Random.html#v:randomStream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new stream with delays distributed uniformly.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Stream.Random",
          "name": "randomUniformStream",
          "package": "aivika",
          "signature": "Double-\u003e Double-\u003e Stream Arrival",
          "type": "function"
        },
        "index": {
          "description": "Create new stream with delays distributed uniformly",
          "hierarchy": "Simulation Aivika Stream Random",
          "module": "Simulation.Aivika.Stream.Random",
          "name": "randomUniformStream",
          "normalized": "Double-\u003eDouble-\u003eStream Arrival",
          "package": "aivika",
          "partial": "Uniform Stream",
          "signature": "Double-\u003eDouble-\u003eStream Arrival",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Stream-Random.html#v:randomUniformStream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTested with: GHC 7.6.3\n\u003c/p\u003e\u003cp\u003eThe infinite stream of data in time.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Simulation.Aivika.Stream",
          "name": "Stream",
          "package": "aivika",
          "source": "src/Simulation-Aivika-Stream.html",
          "type": "module"
        },
        "index": {
          "description": "Tested with GHC The infinite stream of data in time",
          "hierarchy": "Simulation Aivika Stream",
          "module": "Simulation.Aivika.Stream",
          "name": "Stream",
          "package": "aivika",
          "partial": "Stream",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Stream.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents an infinite stream of data in time,\n some kind of the cons cell.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Stream",
          "name": "Stream",
          "package": "aivika",
          "source": "src/Simulation-Aivika-Stream.html#Stream",
          "type": "newtype"
        },
        "index": {
          "description": "Represents an infinite stream of data in time some kind of the cons cell",
          "hierarchy": "Simulation Aivika Stream",
          "module": "Simulation.Aivika.Stream",
          "name": "Stream",
          "package": "aivika",
          "partial": "Stream",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Stream.html#t:Stream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Simulation.Aivika.Stream",
          "name": "Cons",
          "package": "aivika",
          "signature": "Cons",
          "source": "src/Simulation-Aivika-Stream.html#Stream",
          "type": "function"
        },
        "index": {
          "hierarchy": "Simulation Aivika Stream",
          "module": "Simulation.Aivika.Stream",
          "name": "Cons",
          "package": "aivika",
          "partial": "Cons",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Stream.html#v:Cons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransform the stream getting the transformation function after data have come.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Stream",
          "name": "apStreamDataFirst",
          "package": "aivika",
          "signature": "Process (a -\u003e b) -\u003e Stream a -\u003e Stream b",
          "source": "src/Simulation-Aivika-Stream.html#apStreamDataFirst",
          "type": "function"
        },
        "index": {
          "description": "Transform the stream getting the transformation function after data have come",
          "hierarchy": "Simulation Aivika Stream",
          "module": "Simulation.Aivika.Stream",
          "name": "apStreamDataFirst",
          "normalized": "Process(a-\u003eb)-\u003eStream a-\u003eStream b",
          "package": "aivika",
          "partial": "Stream Data First",
          "signature": "Process(a-\u003eb)-\u003eStream a-\u003eStream b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Stream.html#v:apStreamDataFirst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransform the stream getting the transformation function before requesting for data.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Stream",
          "name": "apStreamDataLater",
          "package": "aivika",
          "signature": "Process (a -\u003e b) -\u003e Stream a -\u003e Stream b",
          "source": "src/Simulation-Aivika-Stream.html#apStreamDataLater",
          "type": "function"
        },
        "index": {
          "description": "Transform the stream getting the transformation function before requesting for data",
          "hierarchy": "Simulation Aivika Stream",
          "module": "Simulation.Aivika.Stream",
          "name": "apStreamDataLater",
          "normalized": "Process(a-\u003eb)-\u003eStream a-\u003eStream b",
          "package": "aivika",
          "partial": "Stream Data Later",
          "signature": "Process(a-\u003eb)-\u003eStream a-\u003eStream b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Stream.html#v:apStreamDataLater"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransform the stream trying to get the transformation function as soon as possible\n at the same time when requesting for the next portion of data.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Stream",
          "name": "apStreamParallel",
          "package": "aivika",
          "signature": "Process (a -\u003e b) -\u003e Stream a -\u003e Stream b",
          "source": "src/Simulation-Aivika-Stream.html#apStreamParallel",
          "type": "function"
        },
        "index": {
          "description": "Transform the stream trying to get the transformation function as soon as possible at the same time when requesting for the next portion of data",
          "hierarchy": "Simulation Aivika Stream",
          "module": "Simulation.Aivika.Stream",
          "name": "apStreamParallel",
          "normalized": "Process(a-\u003eb)-\u003eStream a-\u003eStream b",
          "package": "aivika",
          "partial": "Stream Parallel",
          "signature": "Process(a-\u003eb)-\u003eStream a-\u003eStream b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Stream.html#v:apStreamParallel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConcatenate the input priority streams producing one output stream.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Stream",
          "name": "concatPriorityStreams",
          "package": "aivika",
          "signature": "s-\u003e [Stream (p, a)]-\u003e Stream a",
          "type": "function"
        },
        "index": {
          "description": "Concatenate the input priority streams producing one output stream",
          "hierarchy": "Simulation Aivika Stream",
          "module": "Simulation.Aivika.Stream",
          "name": "concatPriorityStreams",
          "normalized": "a-\u003e[Stream(b,c)]-\u003eStream c",
          "package": "aivika",
          "partial": "Priority Streams",
          "signature": "s-\u003e[Stream(p,a)]-\u003eStream a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Stream.html#v:concatPriorityStreams"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConcatenate the input streams producing one output stream.\n\u003c/p\u003e\u003cp\u003eIf you don't know what the strategy to apply, then you probably\n need the \u003ccode\u003e\u003ca\u003eFCFS\u003c/a\u003e\u003c/code\u003e strategy, or function \u003ccode\u003e\u003ca\u003econcatStreams\u003c/a\u003e\u003c/code\u003e that\n does namely this.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Stream",
          "name": "concatQueuedStreams",
          "package": "aivika",
          "signature": "s-\u003e [Stream a]-\u003e Stream a",
          "type": "function"
        },
        "index": {
          "description": "Concatenate the input streams producing one output stream If you don know what the strategy to apply then you probably need the FCFS strategy or function concatStreams that does namely this",
          "hierarchy": "Simulation Aivika Stream",
          "module": "Simulation.Aivika.Stream",
          "name": "concatQueuedStreams",
          "normalized": "a-\u003e[Stream b]-\u003eStream b",
          "package": "aivika",
          "partial": "Queued Streams",
          "signature": "s-\u003e[Stream a]-\u003eStream a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Stream.html#v:concatQueuedStreams"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConcatenate the input streams applying the \u003ccode\u003e\u003ca\u003eFCFS\u003c/a\u003e\u003c/code\u003e strategy and\n producing one output stream.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Stream",
          "name": "concatStreams",
          "package": "aivika",
          "signature": "[Stream a] -\u003e Stream a",
          "source": "src/Simulation-Aivika-Stream.html#concatStreams",
          "type": "function"
        },
        "index": {
          "description": "Concatenate the input streams applying the FCFS strategy and producing one output stream",
          "hierarchy": "Simulation Aivika Stream",
          "module": "Simulation.Aivika.Stream",
          "name": "concatStreams",
          "normalized": "[Stream a]-\u003eStream a",
          "package": "aivika",
          "partial": "Streams",
          "signature": "[Stream a]-\u003eStream a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Stream.html#v:concatStreams"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConsume the stream. It returns a process that infinitely reads data\n from the stream and then redirects them to the provided function.\n It is useful for modeling the process of enqueueing data in the queue\n from the input stream.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Stream",
          "name": "consumeStream",
          "package": "aivika",
          "signature": "(a -\u003e Process ()) -\u003e Stream a -\u003e Process ()",
          "source": "src/Simulation-Aivika-Stream.html#consumeStream",
          "type": "function"
        },
        "index": {
          "description": "Consume the stream It returns process that infinitely reads data from the stream and then redirects them to the provided function It is useful for modeling the process of enqueueing data in the queue from the input stream",
          "hierarchy": "Simulation Aivika Stream",
          "module": "Simulation.Aivika.Stream",
          "name": "consumeStream",
          "normalized": "(a-\u003eProcess())-\u003eStream a-\u003eProcess()",
          "package": "aivika",
          "partial": "Stream",
          "signature": "(a-\u003eProcess())-\u003eStream a-\u003eProcess()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Stream.html#v:consumeStream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn empty stream that never returns data.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Stream",
          "name": "emptyStream",
          "package": "aivika",
          "signature": "Stream a",
          "source": "src/Simulation-Aivika-Stream.html#emptyStream",
          "type": "function"
        },
        "index": {
          "description": "An empty stream that never returns data",
          "hierarchy": "Simulation Aivika Stream",
          "module": "Simulation.Aivika.Stream",
          "name": "emptyStream",
          "package": "aivika",
          "partial": "Stream",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Stream.html#v:emptyStream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFilter only those data values that satisfy to the specified predicate.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Stream",
          "name": "filterStream",
          "package": "aivika",
          "signature": "(a -\u003e Bool) -\u003e Stream a -\u003e Stream a",
          "source": "src/Simulation-Aivika-Stream.html#filterStream",
          "type": "function"
        },
        "index": {
          "description": "Filter only those data values that satisfy to the specified predicate",
          "hierarchy": "Simulation Aivika Stream",
          "module": "Simulation.Aivika.Stream",
          "name": "filterStream",
          "normalized": "(a-\u003eBool)-\u003eStream a-\u003eStream a",
          "package": "aivika",
          "partial": "Stream",
          "signature": "(a-\u003eBool)-\u003eStream a-\u003eStream a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Stream.html#v:filterStream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFilter only those data values that satisfy to the specified predicate.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Stream",
          "name": "filterStreamM",
          "package": "aivika",
          "signature": "(a -\u003e Process Bool) -\u003e Stream a -\u003e Stream a",
          "source": "src/Simulation-Aivika-Stream.html#filterStreamM",
          "type": "function"
        },
        "index": {
          "description": "Filter only those data values that satisfy to the specified predicate",
          "hierarchy": "Simulation Aivika Stream",
          "module": "Simulation.Aivika.Stream",
          "name": "filterStreamM",
          "normalized": "(a-\u003eProcess Bool)-\u003eStream a-\u003eStream a",
          "package": "aivika",
          "partial": "Stream",
          "signature": "(a-\u003eProcess Bool)-\u003eStream a-\u003eStream a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Stream.html#v:filterStreamM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe stream of \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e values.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Stream",
          "name": "leftStream",
          "package": "aivika",
          "signature": "Stream (Either a b) -\u003e Stream a",
          "source": "src/Simulation-Aivika-Stream.html#leftStream",
          "type": "function"
        },
        "index": {
          "description": "The stream of Left values",
          "hierarchy": "Simulation Aivika Stream",
          "module": "Simulation.Aivika.Stream",
          "name": "leftStream",
          "normalized": "Stream(Either a b)-\u003eStream a",
          "package": "aivika",
          "partial": "Stream",
          "signature": "Stream(Either a b)-\u003eStream a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Stream.html#v:leftStream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap the stream according the specified function.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Stream",
          "name": "mapStream",
          "package": "aivika",
          "signature": "(a -\u003e b) -\u003e Stream a -\u003e Stream b",
          "source": "src/Simulation-Aivika-Stream.html#mapStream",
          "type": "function"
        },
        "index": {
          "description": "Map the stream according the specified function",
          "hierarchy": "Simulation Aivika Stream",
          "module": "Simulation.Aivika.Stream",
          "name": "mapStream",
          "normalized": "(a-\u003eb)-\u003eStream a-\u003eStream b",
          "package": "aivika",
          "partial": "Stream",
          "signature": "(a-\u003eb)-\u003eStream a-\u003eStream b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Stream.html#v:mapStream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompose the stream.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Stream",
          "name": "mapStreamM",
          "package": "aivika",
          "signature": "(a -\u003e Process b) -\u003e Stream a -\u003e Stream b",
          "source": "src/Simulation-Aivika-Stream.html#mapStreamM",
          "type": "function"
        },
        "index": {
          "description": "Compose the stream",
          "hierarchy": "Simulation Aivika Stream",
          "module": "Simulation.Aivika.Stream",
          "name": "mapStreamM",
          "normalized": "(a-\u003eProcess b)-\u003eStream a-\u003eStream b",
          "package": "aivika",
          "partial": "Stream",
          "signature": "(a-\u003eProcess b)-\u003eStream a-\u003eStream b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Stream.html#v:mapStreamM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMemoize the stream so that it would always return the same data\n within the simulation run.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Stream",
          "name": "memoStream",
          "package": "aivika",
          "signature": "Stream a -\u003e Simulation (Stream a)",
          "source": "src/Simulation-Aivika-Stream.html#memoStream",
          "type": "function"
        },
        "index": {
          "description": "Memoize the stream so that it would always return the same data within the simulation run",
          "hierarchy": "Simulation Aivika Stream",
          "module": "Simulation.Aivika.Stream",
          "name": "memoStream",
          "normalized": "Stream a-\u003eSimulation(Stream a)",
          "package": "aivika",
          "partial": "Stream",
          "signature": "Stream a-\u003eSimulation(Stream a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Stream.html#v:memoStream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMerge two priority streams.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Stream",
          "name": "mergePriorityStreams",
          "package": "aivika",
          "signature": "s-\u003e Stream (p, a)-\u003e Stream (p, a)-\u003e Stream a",
          "type": "function"
        },
        "index": {
          "description": "Merge two priority streams",
          "hierarchy": "Simulation Aivika Stream",
          "module": "Simulation.Aivika.Stream",
          "name": "mergePriorityStreams",
          "normalized": "a-\u003eStream(b,c)-\u003eStream(b,c)-\u003eStream c",
          "package": "aivika",
          "partial": "Priority Streams",
          "signature": "s-\u003eStream(p,a)-\u003eStream(p,a)-\u003eStream a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Stream.html#v:mergePriorityStreams"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMerge two streams.\n\u003c/p\u003e\u003cp\u003eIf you don't know what the strategy to apply, then you probably\n need the \u003ccode\u003e\u003ca\u003eFCFS\u003c/a\u003e\u003c/code\u003e strategy, or function \u003ccode\u003e\u003ca\u003emergeStreams\u003c/a\u003e\u003c/code\u003e that\n does namely this.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Stream",
          "name": "mergeQueuedStreams",
          "package": "aivika",
          "signature": "s-\u003e Stream a-\u003e Stream a-\u003e Stream a",
          "type": "function"
        },
        "index": {
          "description": "Merge two streams If you don know what the strategy to apply then you probably need the FCFS strategy or function mergeStreams that does namely this",
          "hierarchy": "Simulation Aivika Stream",
          "module": "Simulation.Aivika.Stream",
          "name": "mergeQueuedStreams",
          "normalized": "a-\u003eStream b-\u003eStream b-\u003eStream b",
          "package": "aivika",
          "partial": "Queued Streams",
          "signature": "s-\u003eStream a-\u003eStream a-\u003eStream a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Stream.html#v:mergeQueuedStreams"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMerge two streams applying the \u003ccode\u003e\u003ca\u003eFCFS\u003c/a\u003e\u003c/code\u003e strategy for enqueuing the input data.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Stream",
          "name": "mergeStreams",
          "package": "aivika",
          "signature": "Stream a -\u003e Stream a -\u003e Stream a",
          "source": "src/Simulation-Aivika-Stream.html#mergeStreams",
          "type": "function"
        },
        "index": {
          "description": "Merge two streams applying the FCFS strategy for enqueuing the input data",
          "hierarchy": "Simulation Aivika Stream",
          "module": "Simulation.Aivika.Stream",
          "name": "mergeStreams",
          "normalized": "Stream a-\u003eStream a-\u003eStream a",
          "package": "aivika",
          "partial": "Streams",
          "signature": "Stream a-\u003eStream a-\u003eStream a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Stream.html#v:mergeStreams"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePartition the stream of \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e values into two streams.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Stream",
          "name": "partitionEitherStream",
          "package": "aivika",
          "signature": "Stream (Either a b) -\u003e Simulation (Stream a, Stream b)",
          "source": "src/Simulation-Aivika-Stream.html#partitionEitherStream",
          "type": "function"
        },
        "index": {
          "description": "Partition the stream of Either values into two streams",
          "hierarchy": "Simulation Aivika Stream",
          "module": "Simulation.Aivika.Stream",
          "name": "partitionEitherStream",
          "normalized": "Stream(Either a b)-\u003eSimulation(Stream a,Stream b)",
          "package": "aivika",
          "partial": "Either Stream",
          "signature": "Stream(Either a b)-\u003eSimulation(Stream a,Stream b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Stream.html#v:partitionEitherStream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrefetch the input stream requesting for one more data item in advance \n while the last received item is not yet fully processed in the chain of \n streams, usually by the processors.\n\u003c/p\u003e\u003cp\u003eYou can think of this as the prefetched stream could place its latest \n data item in some temporary space for later use, which is very useful \n for modeling a sequence of separate and independent work places.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Stream",
          "name": "prefetchStream",
          "package": "aivika",
          "signature": "Stream a -\u003e Stream a",
          "source": "src/Simulation-Aivika-Stream.html#prefetchStream",
          "type": "function"
        },
        "index": {
          "description": "Prefetch the input stream requesting for one more data item in advance while the last received item is not yet fully processed in the chain of streams usually by the processors You can think of this as the prefetched stream could place its latest data item in some temporary space for later use which is very useful for modeling sequence of separate and independent work places",
          "hierarchy": "Simulation Aivika Stream",
          "module": "Simulation.Aivika.Stream",
          "name": "prefetchStream",
          "normalized": "Stream a-\u003eStream a",
          "package": "aivika",
          "partial": "Stream",
          "signature": "Stream a-\u003eStream a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Stream.html#v:prefetchStream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn a stream of values generated by the specified process.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Stream",
          "name": "repeatProcess",
          "package": "aivika",
          "signature": "Process a -\u003e Stream a",
          "source": "src/Simulation-Aivika-Stream.html#repeatProcess",
          "type": "function"
        },
        "index": {
          "description": "Return stream of values generated by the specified process",
          "hierarchy": "Simulation Aivika Stream",
          "module": "Simulation.Aivika.Stream",
          "name": "repeatProcess",
          "normalized": "Process a-\u003eStream a",
          "package": "aivika",
          "partial": "Process",
          "signature": "Process a-\u003eStream a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Stream.html#v:repeatProcess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReplace the \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e values.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Stream",
          "name": "replaceLeftStream",
          "package": "aivika",
          "signature": "Stream (Either a b) -\u003e Stream c -\u003e Stream (Either c b)",
          "source": "src/Simulation-Aivika-Stream.html#replaceLeftStream",
          "type": "function"
        },
        "index": {
          "description": "Replace the Left values",
          "hierarchy": "Simulation Aivika Stream",
          "module": "Simulation.Aivika.Stream",
          "name": "replaceLeftStream",
          "normalized": "Stream(Either a b)-\u003eStream c-\u003eStream(Either c b)",
          "package": "aivika",
          "partial": "Left Stream",
          "signature": "Stream(Either a b)-\u003eStream c-\u003eStream(Either c b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Stream.html#v:replaceLeftStream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReplace the \u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e values.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Stream",
          "name": "replaceRightStream",
          "package": "aivika",
          "signature": "Stream (Either a b) -\u003e Stream c -\u003e Stream (Either a c)",
          "source": "src/Simulation-Aivika-Stream.html#replaceRightStream",
          "type": "function"
        },
        "index": {
          "description": "Replace the Right values",
          "hierarchy": "Simulation Aivika Stream",
          "module": "Simulation.Aivika.Stream",
          "name": "replaceRightStream",
          "normalized": "Stream(Either a b)-\u003eStream c-\u003eStream(Either a c)",
          "package": "aivika",
          "partial": "Right Stream",
          "signature": "Stream(Either a b)-\u003eStream c-\u003eStream(Either a c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Stream.html#v:replaceRightStream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe stream of \u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e values.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Stream",
          "name": "rightStream",
          "package": "aivika",
          "signature": "Stream (Either a b) -\u003e Stream b",
          "source": "src/Simulation-Aivika-Stream.html#rightStream",
          "type": "function"
        },
        "index": {
          "description": "The stream of Right values",
          "hierarchy": "Simulation Aivika Stream",
          "module": "Simulation.Aivika.Stream",
          "name": "rightStream",
          "normalized": "Stream(Either a b)-\u003eStream b",
          "package": "aivika",
          "partial": "Stream",
          "signature": "Stream(Either a b)-\u003eStream b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Stream.html#v:rightStream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun the stream.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Stream",
          "name": "runStream",
          "package": "aivika",
          "signature": "Process (a, Stream a)",
          "source": "src/Simulation-Aivika-Stream.html#Stream",
          "type": "function"
        },
        "index": {
          "description": "Run the stream",
          "hierarchy": "Simulation Aivika Stream",
          "module": "Simulation.Aivika.Stream",
          "name": "runStream",
          "normalized": "Process(a,Stream a)",
          "package": "aivika",
          "partial": "Stream",
          "signature": "Process(a,Stream a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Stream.html#v:runStream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSink the stream. It returns a process that infinitely reads data\n from the stream. The resulting computation can be a moving force\n to simulate the whole system of the interconnected streams and\n processors.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Stream",
          "name": "sinkStream",
          "package": "aivika",
          "signature": "Stream a -\u003e Process ()",
          "source": "src/Simulation-Aivika-Stream.html#sinkStream",
          "type": "function"
        },
        "index": {
          "description": "Sink the stream It returns process that infinitely reads data from the stream The resulting computation can be moving force to simulate the whole system of the interconnected streams and processors",
          "hierarchy": "Simulation Aivika Stream",
          "module": "Simulation.Aivika.Stream",
          "name": "sinkStream",
          "normalized": "Stream a-\u003eProcess()",
          "package": "aivika",
          "partial": "Stream",
          "signature": "Stream a-\u003eProcess()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Stream.html#v:sinkStream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplit the input stream into the specified number of output streams\n after applying the \u003ccode\u003e\u003ca\u003eFCFS\u003c/a\u003e\u003c/code\u003e strategy for enqueuing the output requests.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Stream",
          "name": "splitStream",
          "package": "aivika",
          "signature": "Int -\u003e Stream a -\u003e Simulation [Stream a]",
          "source": "src/Simulation-Aivika-Stream.html#splitStream",
          "type": "function"
        },
        "index": {
          "description": "Split the input stream into the specified number of output streams after applying the FCFS strategy for enqueuing the output requests",
          "hierarchy": "Simulation Aivika Stream",
          "module": "Simulation.Aivika.Stream",
          "name": "splitStream",
          "normalized": "Int-\u003eStream a-\u003eSimulation[Stream a]",
          "package": "aivika",
          "partial": "Stream",
          "signature": "Int-\u003eStream a-\u003eSimulation[Stream a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Stream.html#v:splitStream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplit the input stream into a list of output streams\n using the specified priorities.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Stream",
          "name": "splitStreamPrioritising",
          "package": "aivika",
          "signature": "s-\u003e [Stream p]-\u003e Stream a-\u003e Simulation [Stream a]",
          "type": "function"
        },
        "index": {
          "description": "Split the input stream into list of output streams using the specified priorities",
          "hierarchy": "Simulation Aivika Stream",
          "module": "Simulation.Aivika.Stream",
          "name": "splitStreamPrioritising",
          "normalized": "a-\u003e[Stream b]-\u003eStream c-\u003eSimulation[Stream c]",
          "package": "aivika",
          "partial": "Stream Prioritising",
          "signature": "s-\u003e[Stream p]-\u003eStream a-\u003eSimulation[Stream a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Stream.html#v:splitStreamPrioritising"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplit the input stream into the specified number of output streams.\n\u003c/p\u003e\u003cp\u003eIf you don't know what the strategy to apply, then you probably\n need the \u003ccode\u003e\u003ca\u003eFCFS\u003c/a\u003e\u003c/code\u003e strategy, or function \u003ccode\u003e\u003ca\u003esplitStream\u003c/a\u003e\u003c/code\u003e that\n does namely this.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Stream",
          "name": "splitStreamQueuing",
          "package": "aivika",
          "signature": "s-\u003e Int-\u003e Stream a-\u003e Simulation [Stream a]",
          "type": "function"
        },
        "index": {
          "description": "Split the input stream into the specified number of output streams If you don know what the strategy to apply then you probably need the FCFS strategy or function splitStream that does namely this",
          "hierarchy": "Simulation Aivika Stream",
          "module": "Simulation.Aivika.Stream",
          "name": "splitStreamQueuing",
          "normalized": "a-\u003eInt-\u003eStream b-\u003eSimulation[Stream b]",
          "package": "aivika",
          "partial": "Stream Queuing",
          "signature": "s-\u003eInt-\u003eStream a-\u003eSimulation[Stream a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Stream.html#v:splitStreamQueuing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTo form each new portion of data for the output stream,\n read data from the input streams in parallel.\n\u003c/p\u003e\u003cp\u003eThis is a generalization of \u003ccode\u003e\u003ca\u003ezipStreamParallel\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Stream",
          "name": "streamParallel",
          "package": "aivika",
          "signature": "[Stream a] -\u003e Stream [a]",
          "source": "src/Simulation-Aivika-Stream.html#streamParallel",
          "type": "function"
        },
        "index": {
          "description": "To form each new portion of data for the output stream read data from the input streams in parallel This is generalization of zipStreamParallel",
          "hierarchy": "Simulation Aivika Stream",
          "module": "Simulation.Aivika.Stream",
          "name": "streamParallel",
          "normalized": "[Stream a]-\u003eStream[a]",
          "package": "aivika",
          "partial": "Parallel",
          "signature": "[Stream a]-\u003eStream[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Stream.html#v:streamParallel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTo form each new portion of data for the output stream,\n read data sequentially from the input streams.\n\u003c/p\u003e\u003cp\u003eThis is a generalization of \u003ccode\u003e\u003ca\u003ezipStreamSeq\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Stream",
          "name": "streamSeq",
          "package": "aivika",
          "signature": "[Stream a] -\u003e Stream [a]",
          "source": "src/Simulation-Aivika-Stream.html#streamSeq",
          "type": "function"
        },
        "index": {
          "description": "To form each new portion of data for the output stream read data sequentially from the input streams This is generalization of zipStreamSeq",
          "hierarchy": "Simulation Aivika Stream",
          "module": "Simulation.Aivika.Stream",
          "name": "streamSeq",
          "normalized": "[Stream a]-\u003eStream[a]",
          "package": "aivika",
          "partial": "Seq",
          "signature": "[Stream a]-\u003eStream[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Stream.html#v:streamSeq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a stream that will use the specified process identifier.\n It can be useful to refer to the underlying \u003ccode\u003e\u003ca\u003eProcess\u003c/a\u003e\u003c/code\u003e computation which\n can be passivated, interrupted, canceled and so on. See also the\n \u003ccode\u003e\u003ca\u003eprocessUsingId\u003c/a\u003e\u003c/code\u003e function for more details.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Stream",
          "name": "streamUsingId",
          "package": "aivika",
          "signature": "ProcessId -\u003e Stream a -\u003e Stream a",
          "source": "src/Simulation-Aivika-Stream.html#streamUsingId",
          "type": "function"
        },
        "index": {
          "description": "Create stream that will use the specified process identifier It can be useful to refer to the underlying Process computation which can be passivated interrupted canceled and so on See also the processUsingId function for more details",
          "hierarchy": "Simulation Aivika Stream",
          "module": "Simulation.Aivika.Stream",
          "name": "streamUsingId",
          "normalized": "ProcessId-\u003eStream a-\u003eStream a",
          "package": "aivika",
          "partial": "Using Id",
          "signature": "ProcessId-\u003eStream a-\u003eStream a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Stream.html#v:streamUsingId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnzip the stream.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Stream",
          "name": "unzipStream",
          "package": "aivika",
          "signature": "Stream (a, b) -\u003e Simulation (Stream a, Stream b)",
          "source": "src/Simulation-Aivika-Stream.html#unzipStream",
          "type": "function"
        },
        "index": {
          "description": "Unzip the stream",
          "hierarchy": "Simulation Aivika Stream",
          "module": "Simulation.Aivika.Stream",
          "name": "unzipStream",
          "normalized": "Stream(a,b)-\u003eSimulation(Stream a,Stream b)",
          "package": "aivika",
          "partial": "Stream",
          "signature": "Stream(a,b)-\u003eSimulation(Stream a,Stream b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Stream.html#v:unzipStream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eZip three streams trying to get data as soon as possible,\n launching the sub-processes in parallel.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Stream",
          "name": "zip3StreamParallel",
          "package": "aivika",
          "signature": "Stream a -\u003e Stream b -\u003e Stream c -\u003e Stream (a, b, c)",
          "source": "src/Simulation-Aivika-Stream.html#zip3StreamParallel",
          "type": "function"
        },
        "index": {
          "description": "Zip three streams trying to get data as soon as possible launching the sub-processes in parallel",
          "hierarchy": "Simulation Aivika Stream",
          "module": "Simulation.Aivika.Stream",
          "name": "zip3StreamParallel",
          "normalized": "Stream a-\u003eStream b-\u003eStream c-\u003eStream(a,b,c)",
          "package": "aivika",
          "partial": "Stream Parallel",
          "signature": "Stream a-\u003eStream b-\u003eStream c-\u003eStream(a,b,c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Stream.html#v:zip3StreamParallel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eZip three streams trying to get data sequentially.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Stream",
          "name": "zip3StreamSeq",
          "package": "aivika",
          "signature": "Stream a -\u003e Stream b -\u003e Stream c -\u003e Stream (a, b, c)",
          "source": "src/Simulation-Aivika-Stream.html#zip3StreamSeq",
          "type": "function"
        },
        "index": {
          "description": "Zip three streams trying to get data sequentially",
          "hierarchy": "Simulation Aivika Stream",
          "module": "Simulation.Aivika.Stream",
          "name": "zip3StreamSeq",
          "normalized": "Stream a-\u003eStream b-\u003eStream c-\u003eStream(a,b,c)",
          "package": "aivika",
          "partial": "Stream Seq",
          "signature": "Stream a-\u003eStream b-\u003eStream c-\u003eStream(a,b,c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Stream.html#v:zip3StreamSeq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eZip two streams trying to get data as soon as possible,\n launching the sub-processes in parallel.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Stream",
          "name": "zipStreamParallel",
          "package": "aivika",
          "signature": "Stream a -\u003e Stream b -\u003e Stream (a, b)",
          "source": "src/Simulation-Aivika-Stream.html#zipStreamParallel",
          "type": "function"
        },
        "index": {
          "description": "Zip two streams trying to get data as soon as possible launching the sub-processes in parallel",
          "hierarchy": "Simulation Aivika Stream",
          "module": "Simulation.Aivika.Stream",
          "name": "zipStreamParallel",
          "normalized": "Stream a-\u003eStream b-\u003eStream(a,b)",
          "package": "aivika",
          "partial": "Stream Parallel",
          "signature": "Stream a-\u003eStream b-\u003eStream(a,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Stream.html#v:zipStreamParallel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eZip two streams trying to get data sequentially.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Stream",
          "name": "zipStreamSeq",
          "package": "aivika",
          "signature": "Stream a -\u003e Stream b -\u003e Stream (a, b)",
          "source": "src/Simulation-Aivika-Stream.html#zipStreamSeq",
          "type": "function"
        },
        "index": {
          "description": "Zip two streams trying to get data sequentially",
          "hierarchy": "Simulation Aivika Stream",
          "module": "Simulation.Aivika.Stream",
          "name": "zipStreamSeq",
          "normalized": "Stream a-\u003eStream b-\u003eStream(a,b)",
          "package": "aivika",
          "partial": "Stream Seq",
          "signature": "Stream a-\u003eStream b-\u003eStream(a,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Stream.html#v:zipStreamSeq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTested with: GHC 7.6.3\n\u003c/p\u003e\u003cp\u003eThis module defines integrals and other functions of System Dynamics.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Simulation.Aivika.SystemDynamics",
          "name": "SystemDynamics",
          "package": "aivika",
          "source": "src/Simulation-Aivika-SystemDynamics.html",
          "type": "module"
        },
        "index": {
          "description": "Tested with GHC This module defines integrals and other functions of System Dynamics",
          "hierarchy": "Simulation Aivika SystemDynamics",
          "module": "Simulation.Aivika.SystemDynamics",
          "name": "SystemDynamics",
          "package": "aivika",
          "partial": "System Dynamics",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-SystemDynamics.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompare for inequality.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.SystemDynamics",
          "name": "(./=.)",
          "package": "aivika",
          "signature": "Dynamics a -\u003e Dynamics a -\u003e Dynamics Bool",
          "source": "src/Simulation-Aivika-SystemDynamics.html#.%2F%3D.",
          "type": "function"
        },
        "index": {
          "description": "Compare for inequality",
          "hierarchy": "Simulation Aivika SystemDynamics",
          "module": "Simulation.Aivika.SystemDynamics",
          "name": "(./=.) ./=.",
          "normalized": "Dynamics a-\u003eDynamics a-\u003eDynamics Bool",
          "package": "aivika",
          "signature": "Dynamics a-\u003eDynamics a-\u003eDynamics Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-SystemDynamics.html#v:.-47--61-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompare for ordering.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.SystemDynamics",
          "name": "(.\u003c=.)",
          "package": "aivika",
          "signature": "Dynamics a -\u003e Dynamics a -\u003e Dynamics Bool",
          "source": "src/Simulation-Aivika-SystemDynamics.html#.%3C%3D.",
          "type": "function"
        },
        "index": {
          "description": "Compare for ordering",
          "hierarchy": "Simulation Aivika SystemDynamics",
          "module": "Simulation.Aivika.SystemDynamics",
          "name": "(.\u003c=.) .\u003c=.",
          "normalized": "Dynamics a-\u003eDynamics a-\u003eDynamics Bool",
          "package": "aivika",
          "signature": "Dynamics a-\u003eDynamics a-\u003eDynamics Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-SystemDynamics.html#v:.-60--61-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompare for ordering.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.SystemDynamics",
          "name": "(.\u003c.)",
          "package": "aivika",
          "signature": "Dynamics a -\u003e Dynamics a -\u003e Dynamics Bool",
          "source": "src/Simulation-Aivika-SystemDynamics.html#.%3C.",
          "type": "function"
        },
        "index": {
          "description": "Compare for ordering",
          "hierarchy": "Simulation Aivika SystemDynamics",
          "module": "Simulation.Aivika.SystemDynamics",
          "name": "(.\u003c.) .\u003c.",
          "normalized": "Dynamics a-\u003eDynamics a-\u003eDynamics Bool",
          "package": "aivika",
          "signature": "Dynamics a-\u003eDynamics a-\u003eDynamics Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-SystemDynamics.html#v:.-60-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompare for equality.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.SystemDynamics",
          "name": "(.==.)",
          "package": "aivika",
          "signature": "Dynamics a -\u003e Dynamics a -\u003e Dynamics Bool",
          "source": "src/Simulation-Aivika-SystemDynamics.html#.%3D%3D.",
          "type": "function"
        },
        "index": {
          "description": "Compare for equality",
          "hierarchy": "Simulation Aivika SystemDynamics",
          "module": "Simulation.Aivika.SystemDynamics",
          "name": "(.==.) .==.",
          "normalized": "Dynamics a-\u003eDynamics a-\u003eDynamics Bool",
          "package": "aivika",
          "signature": "Dynamics a-\u003eDynamics a-\u003eDynamics Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-SystemDynamics.html#v:.-61--61-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompare for ordering.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.SystemDynamics",
          "name": "(.\u003e=.)",
          "package": "aivika",
          "signature": "Dynamics a -\u003e Dynamics a -\u003e Dynamics Bool",
          "source": "src/Simulation-Aivika-SystemDynamics.html#.%3E%3D.",
          "type": "function"
        },
        "index": {
          "description": "Compare for ordering",
          "hierarchy": "Simulation Aivika SystemDynamics",
          "module": "Simulation.Aivika.SystemDynamics",
          "name": "(.\u003e=.) .\u003e=.",
          "normalized": "Dynamics a-\u003eDynamics a-\u003eDynamics Bool",
          "package": "aivika",
          "signature": "Dynamics a-\u003eDynamics a-\u003eDynamics Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-SystemDynamics.html#v:.-62--61-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompare for ordering.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.SystemDynamics",
          "name": "(.\u003e.)",
          "package": "aivika",
          "signature": "Dynamics a -\u003e Dynamics a -\u003e Dynamics Bool",
          "source": "src/Simulation-Aivika-SystemDynamics.html#.%3E.",
          "type": "function"
        },
        "index": {
          "description": "Compare for ordering",
          "hierarchy": "Simulation Aivika SystemDynamics",
          "module": "Simulation.Aivika.SystemDynamics",
          "name": "(.\u003e.) .\u003e.",
          "normalized": "Dynamics a-\u003eDynamics a-\u003eDynamics Bool",
          "package": "aivika",
          "signature": "Dynamics a-\u003eDynamics a-\u003eDynamics Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-SystemDynamics.html#v:.-62-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the delayed value using the specified lag time.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.SystemDynamics",
          "name": "delay",
          "package": "aivika",
          "signature": "Dynamics a-\u003e Dynamics Double-\u003e Dynamics a",
          "type": "function"
        },
        "index": {
          "description": "Return the delayed value using the specified lag time",
          "hierarchy": "Simulation Aivika SystemDynamics",
          "module": "Simulation.Aivika.SystemDynamics",
          "name": "delay",
          "normalized": "Dynamics a-\u003eDynamics Double-\u003eDynamics a",
          "package": "aivika",
          "signature": "Dynamics a-\u003eDynamics Double-\u003eDynamics a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-SystemDynamics.html#v:delay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the first order exponential delay.\n\u003c/p\u003e\u003cp\u003eThis is a simplified version of the \u003ccode\u003e\u003ca\u003edelay1I\u003c/a\u003e\u003c/code\u003e function\n without specifying the initial value.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.SystemDynamics",
          "name": "delay1",
          "package": "aivika",
          "signature": "Dynamics Double-\u003e Dynamics Double-\u003e Simulation (Dynamics Double)",
          "type": "function"
        },
        "index": {
          "description": "Return the first order exponential delay This is simplified version of the delay1I function without specifying the initial value",
          "hierarchy": "Simulation Aivika SystemDynamics",
          "module": "Simulation.Aivika.SystemDynamics",
          "name": "delay1",
          "normalized": "Dynamics Double-\u003eDynamics Double-\u003eSimulation(Dynamics Double)",
          "package": "aivika",
          "signature": "Dynamics Double-\u003eDynamics Double-\u003eSimulation(Dynamics Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-SystemDynamics.html#v:delay1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the first order exponential delay.\n\u003c/p\u003e\u003cp\u003eTo create a loopback, you should use the recursive do-notation\n with help of which the function itself is defined:\n\u003c/p\u003e\u003cpre\u003e\n delay1I x t i =\n   mdo y \u003c- integ (x - y / t) (i * t)\n       return $ y / t\n\u003c/pre\u003e",
          "module": "Simulation.Aivika.SystemDynamics",
          "name": "delay1I",
          "package": "aivika",
          "signature": "Dynamics Double-\u003e Dynamics Double-\u003e Dynamics Double-\u003e Simulation (Dynamics Double)",
          "type": "function"
        },
        "index": {
          "description": "Return the first order exponential delay To create loopback you should use the recursive do-notation with help of which the function itself is defined delay1I mdo integ return",
          "hierarchy": "Simulation Aivika SystemDynamics",
          "module": "Simulation.Aivika.SystemDynamics",
          "name": "delay1I",
          "normalized": "Dynamics Double-\u003eDynamics Double-\u003eDynamics Double-\u003eSimulation(Dynamics Double)",
          "package": "aivika",
          "signature": "Dynamics Double-\u003eDynamics Double-\u003eDynamics Double-\u003eSimulation(Dynamics Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-SystemDynamics.html#v:delay1I"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the third order exponential delay.\n\u003c/p\u003e\u003cp\u003eThis is a simplified version of the \u003ccode\u003e\u003ca\u003edelay3I\u003c/a\u003e\u003c/code\u003e function\n without specifying the initial value.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.SystemDynamics",
          "name": "delay3",
          "package": "aivika",
          "signature": "Dynamics Double-\u003e Dynamics Double-\u003e Simulation (Dynamics Double)",
          "type": "function"
        },
        "index": {
          "description": "Return the third order exponential delay This is simplified version of the delay3I function without specifying the initial value",
          "hierarchy": "Simulation Aivika SystemDynamics",
          "module": "Simulation.Aivika.SystemDynamics",
          "name": "delay3",
          "normalized": "Dynamics Double-\u003eDynamics Double-\u003eSimulation(Dynamics Double)",
          "package": "aivika",
          "signature": "Dynamics Double-\u003eDynamics Double-\u003eSimulation(Dynamics Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-SystemDynamics.html#v:delay3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the third order exponential delay.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.SystemDynamics",
          "name": "delay3I",
          "package": "aivika",
          "signature": "Dynamics Double-\u003e Dynamics Double-\u003e Dynamics Double-\u003e Simulation (Dynamics Double)",
          "type": "function"
        },
        "index": {
          "description": "Return the third order exponential delay",
          "hierarchy": "Simulation Aivika SystemDynamics",
          "module": "Simulation.Aivika.SystemDynamics",
          "name": "delay3I",
          "normalized": "Dynamics Double-\u003eDynamics Double-\u003eDynamics Double-\u003eSimulation(Dynamics Double)",
          "package": "aivika",
          "signature": "Dynamics Double-\u003eDynamics Double-\u003eDynamics Double-\u003eSimulation(Dynamics Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-SystemDynamics.html#v:delay3I"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the delayed value using the specified lag time and initial value.\n Because of the latter, it allows creating a loop back.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.SystemDynamics",
          "name": "delayI",
          "package": "aivika",
          "signature": "Dynamics a-\u003e Dynamics Double-\u003e Dynamics a-\u003e Simulation (Dynamics a)",
          "type": "function"
        },
        "index": {
          "description": "Return the delayed value using the specified lag time and initial value Because of the latter it allows creating loop back",
          "hierarchy": "Simulation Aivika SystemDynamics",
          "module": "Simulation.Aivika.SystemDynamics",
          "name": "delayI",
          "normalized": "Dynamics a-\u003eDynamics Double-\u003eDynamics a-\u003eSimulation(Dynamics a)",
          "package": "aivika",
          "signature": "Dynamics a-\u003eDynamics Double-\u003eDynamics a-\u003eSimulation(Dynamics a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-SystemDynamics.html#v:delayI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the n'th order exponential delay.\n\u003c/p\u003e\u003cp\u003eThis is a simplified version of the \u003ccode\u003e\u003ca\u003edelayNI\u003c/a\u003e\u003c/code\u003e function\n without specifying the initial value.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.SystemDynamics",
          "name": "delayN",
          "package": "aivika",
          "signature": "Dynamics Double-\u003e Dynamics Double-\u003e Int-\u003e Simulation (Dynamics Double)",
          "type": "function"
        },
        "index": {
          "description": "Return the th order exponential delay This is simplified version of the delayNI function without specifying the initial value",
          "hierarchy": "Simulation Aivika SystemDynamics",
          "module": "Simulation.Aivika.SystemDynamics",
          "name": "delayN",
          "normalized": "Dynamics Double-\u003eDynamics Double-\u003eInt-\u003eSimulation(Dynamics Double)",
          "package": "aivika",
          "signature": "Dynamics Double-\u003eDynamics Double-\u003eInt-\u003eSimulation(Dynamics Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-SystemDynamics.html#v:delayN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the n'th order exponential delay.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.SystemDynamics",
          "name": "delayNI",
          "package": "aivika",
          "signature": "Dynamics Double-\u003e Dynamics Double-\u003e Int-\u003e Dynamics Double-\u003e Simulation (Dynamics Double)",
          "type": "function"
        },
        "index": {
          "description": "Return the th order exponential delay",
          "hierarchy": "Simulation Aivika SystemDynamics",
          "module": "Simulation.Aivika.SystemDynamics",
          "name": "delayNI",
          "normalized": "Dynamics Double-\u003eDynamics Double-\u003eInt-\u003eDynamics Double-\u003eSimulation(Dynamics Double)",
          "package": "aivika",
          "partial": "NI",
          "signature": "Dynamics Double-\u003eDynamics Double-\u003eInt-\u003eDynamics Double-\u003eSimulation(Dynamics Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-SystemDynamics.html#v:delayNI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetun the sum for the difference equation.\n It is like an integral returned by the \u003ccode\u003e\u003ca\u003einteg\u003c/a\u003e\u003c/code\u003e function, only now\n the difference is used instead of derivative.\n\u003c/p\u003e\u003cp\u003eAs usual, to create a loopback, you should use the recursive do-notation.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.SystemDynamics",
          "name": "diffsum",
          "package": "aivika",
          "signature": "Dynamics a-\u003e Dynamics a-\u003e Simulation (Dynamics a)",
          "type": "function"
        },
        "index": {
          "description": "Retun the sum for the difference equation It is like an integral returned by the integ function only now the difference is used instead of derivative As usual to create loopback you should use the recursive do-notation",
          "hierarchy": "Simulation Aivika SystemDynamics",
          "module": "Simulation.Aivika.SystemDynamics",
          "name": "diffsum",
          "normalized": "Dynamics a-\u003eDynamics a-\u003eSimulation(Dynamics a)",
          "package": "aivika",
          "signature": "Dynamics a-\u003eDynamics a-\u003eSimulation(Dynamics a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-SystemDynamics.html#v:diffsum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the forecast.\n\u003c/p\u003e\u003cp\u003eThe function has the following definition:\n\u003c/p\u003e\u003cpre\u003e\n forecast x at hz =\n   do y \u003c- smooth x at\n      return $ x * (1.0 + (x / y - 1.0) / at * hz)\n\u003c/pre\u003e",
          "module": "Simulation.Aivika.SystemDynamics",
          "name": "forecast",
          "package": "aivika",
          "signature": "Dynamics Double-\u003e Dynamics Double-\u003e Dynamics Double-\u003e Simulation (Dynamics Double)",
          "type": "function"
        },
        "index": {
          "description": "Return the forecast The function has the following definition forecast at hz do smooth at return at hz",
          "hierarchy": "Simulation Aivika SystemDynamics",
          "module": "Simulation.Aivika.SystemDynamics",
          "name": "forecast",
          "normalized": "Dynamics Double-\u003eDynamics Double-\u003eDynamics Double-\u003eSimulation(Dynamics Double)",
          "package": "aivika",
          "signature": "Dynamics Double-\u003eDynamics Double-\u003eDynamics Double-\u003eSimulation(Dynamics Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-SystemDynamics.html#v:forecast"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eImplement the if-then-else operator.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.SystemDynamics",
          "name": "ifDynamics",
          "package": "aivika",
          "signature": "Dynamics Bool -\u003e Dynamics a -\u003e Dynamics a -\u003e Dynamics a",
          "source": "src/Simulation-Aivika-SystemDynamics.html#ifDynamics",
          "type": "function"
        },
        "index": {
          "description": "Implement the if-then-else operator",
          "hierarchy": "Simulation Aivika SystemDynamics",
          "module": "Simulation.Aivika.SystemDynamics",
          "name": "ifDynamics",
          "normalized": "Dynamics Bool-\u003eDynamics a-\u003eDynamics a-\u003eDynamics a",
          "package": "aivika",
          "partial": "Dynamics",
          "signature": "Dynamics Bool-\u003eDynamics a-\u003eDynamics a-\u003eDynamics a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-SystemDynamics.html#v:ifDynamics"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn an integral with the specified derivative and initial value.\n\u003c/p\u003e\u003cp\u003eTo create a loopback, you should use the recursive do-notation.\n It allows defining the differential equations unordered as\n in mathematics:\n\u003c/p\u003e\u003cpre\u003e\n model :: Simulation [Double]\n model = \n   mdo a \u003c- integ (- ka * a) 100\n       b \u003c- integ (ka * a - kb * b) 0\n       c \u003c- integ (kb * b) 0\n       let ka = 1\n           kb = 1\n       runDynamicsInStopTime $ sequence [a, b, c]\n\u003c/pre\u003e",
          "module": "Simulation.Aivika.SystemDynamics",
          "name": "integ",
          "package": "aivika",
          "signature": "Dynamics Double-\u003e Dynamics Double-\u003e Simulation (Dynamics Double)",
          "type": "function"
        },
        "index": {
          "description": "Return an integral with the specified derivative and initial value To create loopback you should use the recursive do-notation It allows defining the differential equations unordered as in mathematics model Simulation Double model mdo integ ka integ ka kb integ kb let ka kb runDynamicsInStopTime sequence",
          "hierarchy": "Simulation Aivika SystemDynamics",
          "module": "Simulation.Aivika.SystemDynamics",
          "name": "integ",
          "normalized": "Dynamics Double-\u003eDynamics Double-\u003eSimulation(Dynamics Double)",
          "package": "aivika",
          "signature": "Dynamics Double-\u003eDynamics Double-\u003eSimulation(Dynamics Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-SystemDynamics.html#v:integ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLookup \u003ccode\u003ex\u003c/code\u003e in a table of pairs \u003ccode\u003e(x, y)\u003c/code\u003e using linear interpolation.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.SystemDynamics",
          "name": "lookupDynamics",
          "package": "aivika",
          "signature": "Dynamics Double -\u003e Array Int (Double, Double) -\u003e Dynamics Double",
          "source": "src/Simulation-Aivika-SystemDynamics.html#lookupDynamics",
          "type": "function"
        },
        "index": {
          "description": "Lookup in table of pairs using linear interpolation",
          "hierarchy": "Simulation Aivika SystemDynamics",
          "module": "Simulation.Aivika.SystemDynamics",
          "name": "lookupDynamics",
          "normalized": "Dynamics Double-\u003eArray Int(Double,Double)-\u003eDynamics Double",
          "package": "aivika",
          "partial": "Dynamics",
          "signature": "Dynamics Double-\u003eArray Int(Double,Double)-\u003eDynamics Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-SystemDynamics.html#v:lookupDynamics"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLookup \u003ccode\u003ex\u003c/code\u003e in a table of pairs \u003ccode\u003e(x, y)\u003c/code\u003e using stepwise function.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.SystemDynamics",
          "name": "lookupStepwiseDynamics",
          "package": "aivika",
          "signature": "Dynamics Double -\u003e Array Int (Double, Double) -\u003e Dynamics Double",
          "source": "src/Simulation-Aivika-SystemDynamics.html#lookupStepwiseDynamics",
          "type": "function"
        },
        "index": {
          "description": "Lookup in table of pairs using stepwise function",
          "hierarchy": "Simulation Aivika SystemDynamics",
          "module": "Simulation.Aivika.SystemDynamics",
          "name": "lookupStepwiseDynamics",
          "normalized": "Dynamics Double-\u003eArray Int(Double,Double)-\u003eDynamics Double",
          "package": "aivika",
          "partial": "Stepwise Dynamics",
          "signature": "Dynamics Double-\u003eArray Int(Double,Double)-\u003eDynamics Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-SystemDynamics.html#v:lookupStepwiseDynamics"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the maximum.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.SystemDynamics",
          "name": "maxDynamics",
          "package": "aivika",
          "signature": "Dynamics a -\u003e Dynamics a -\u003e Dynamics a",
          "source": "src/Simulation-Aivika-SystemDynamics.html#maxDynamics",
          "type": "function"
        },
        "index": {
          "description": "Return the maximum",
          "hierarchy": "Simulation Aivika SystemDynamics",
          "module": "Simulation.Aivika.SystemDynamics",
          "name": "maxDynamics",
          "normalized": "Dynamics a-\u003eDynamics a-\u003eDynamics a",
          "package": "aivika",
          "partial": "Dynamics",
          "signature": "Dynamics a-\u003eDynamics a-\u003eDynamics a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-SystemDynamics.html#v:maxDynamics"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the minimum.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.SystemDynamics",
          "name": "minDynamics",
          "package": "aivika",
          "signature": "Dynamics a -\u003e Dynamics a -\u003e Dynamics a",
          "source": "src/Simulation-Aivika-SystemDynamics.html#minDynamics",
          "type": "function"
        },
        "index": {
          "description": "Return the minimum",
          "hierarchy": "Simulation Aivika SystemDynamics",
          "module": "Simulation.Aivika.SystemDynamics",
          "name": "minDynamics",
          "normalized": "Dynamics a-\u003eDynamics a-\u003eDynamics a",
          "package": "aivika",
          "partial": "Dynamics",
          "signature": "Dynamics a-\u003eDynamics a-\u003eDynamics a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-SystemDynamics.html#v:minDynamics"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the Net Present Value (NPV) of the stream computed using the specified\n discount rate, the initial value and some factor (usually 1).\n\u003c/p\u003e\u003cp\u003eIt is defined in the following way:\n\u003c/p\u003e\u003cpre\u003e\n npv stream rate init factor =\n   mdo let dt' = liftParameter dt\n       df \u003c- integ (- df * rate) 1\n       accum \u003c- integ (stream * df) init\n       return $ (accum + dt' * stream * df) * factor\n\u003c/pre\u003e",
          "module": "Simulation.Aivika.SystemDynamics",
          "name": "npv",
          "package": "aivika",
          "signature": "Dynamics Double-\u003e Dynamics Double-\u003e Dynamics Double-\u003e Dynamics Double-\u003e Simulation (Dynamics Double)",
          "type": "function"
        },
        "index": {
          "description": "Return the Net Present Value NPV of the stream computed using the specified discount rate the initial value and some factor usually It is defined in the following way npv stream rate init factor mdo let dt liftParameter dt df integ df rate accum integ stream df init return accum dt stream df factor",
          "hierarchy": "Simulation Aivika SystemDynamics",
          "module": "Simulation.Aivika.SystemDynamics",
          "name": "npv",
          "normalized": "Dynamics Double-\u003eDynamics Double-\u003eDynamics Double-\u003eDynamics Double-\u003eSimulation(Dynamics Double)",
          "package": "aivika",
          "signature": "Dynamics Double-\u003eDynamics Double-\u003eDynamics Double-\u003eDynamics Double-\u003eSimulation(Dynamics Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-SystemDynamics.html#v:npv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the Net Present Value End of period (NPVE) of the stream computed\n using the specified discount rate, the initial value and some factor.\n\u003c/p\u003e\u003cp\u003eIt is defined in the following way:\n\u003c/p\u003e\u003cpre\u003e\n npve stream rate init factor =\n   mdo let dt' = liftParameter dt\n       df \u003c- integ (- df * rate / (1 + rate * dt')) (1 / (1 + rate * dt'))\n       accum \u003c- integ (stream * df) init\n       return $ (accum + dt' * stream * df) * factor\n\u003c/pre\u003e",
          "module": "Simulation.Aivika.SystemDynamics",
          "name": "npve",
          "package": "aivika",
          "signature": "Dynamics Double-\u003e Dynamics Double-\u003e Dynamics Double-\u003e Dynamics Double-\u003e Simulation (Dynamics Double)",
          "type": "function"
        },
        "index": {
          "description": "Return the Net Present Value End of period NPVE of the stream computed using the specified discount rate the initial value and some factor It is defined in the following way npve stream rate init factor mdo let dt liftParameter dt df integ df rate rate dt rate dt accum integ stream df init return accum dt stream df factor",
          "hierarchy": "Simulation Aivika SystemDynamics",
          "module": "Simulation.Aivika.SystemDynamics",
          "name": "npve",
          "normalized": "Dynamics Double-\u003eDynamics Double-\u003eDynamics Double-\u003eDynamics Double-\u003eSimulation(Dynamics Double)",
          "package": "aivika",
          "signature": "Dynamics Double-\u003eDynamics Double-\u003eDynamics Double-\u003eDynamics Double-\u003eSimulation(Dynamics Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-SystemDynamics.html#v:npve"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputation that returns 1, starting at the time start, and lasting for the interval\n width; 0 is returned at all other times.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.SystemDynamics",
          "name": "pulse",
          "package": "aivika",
          "signature": "Dynamics Double-\u003e Dynamics Double-\u003e Dynamics Double",
          "type": "function"
        },
        "index": {
          "description": "Computation that returns starting at the time start and lasting for the interval width is returned at all other times",
          "hierarchy": "Simulation Aivika SystemDynamics",
          "module": "Simulation.Aivika.SystemDynamics",
          "name": "pulse",
          "normalized": "Dynamics Double-\u003eDynamics Double-\u003eDynamics Double",
          "package": "aivika",
          "signature": "Dynamics Double-\u003eDynamics Double-\u003eDynamics Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-SystemDynamics.html#v:pulse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputation that returns 1, starting at the time start, and lasting for the interval\n width and then repeats this pattern with the specified period; 0 is returned at all\n other times.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.SystemDynamics",
          "name": "pulseP",
          "package": "aivika",
          "signature": "Dynamics Double-\u003e Dynamics Double-\u003e Dynamics Double-\u003e Dynamics Double",
          "type": "function"
        },
        "index": {
          "description": "Computation that returns starting at the time start and lasting for the interval width and then repeats this pattern with the specified period is returned at all other times",
          "hierarchy": "Simulation Aivika SystemDynamics",
          "module": "Simulation.Aivika.SystemDynamics",
          "name": "pulseP",
          "normalized": "Dynamics Double-\u003eDynamics Double-\u003eDynamics Double-\u003eDynamics Double",
          "package": "aivika",
          "signature": "Dynamics Double-\u003eDynamics Double-\u003eDynamics Double-\u003eDynamics Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-SystemDynamics.html#v:pulseP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputation that returns 0 until the specified time start and then\n slopes upward until the end time and then holds constant.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.SystemDynamics",
          "name": "ramp",
          "package": "aivika",
          "signature": "Dynamics Double-\u003e Dynamics Double-\u003e Dynamics Double-\u003e Dynamics Double",
          "type": "function"
        },
        "index": {
          "description": "Computation that returns until the specified time start and then slopes upward until the end time and then holds constant",
          "hierarchy": "Simulation Aivika SystemDynamics",
          "module": "Simulation.Aivika.SystemDynamics",
          "name": "ramp",
          "normalized": "Dynamics Double-\u003eDynamics Double-\u003eDynamics Double-\u003eDynamics Double",
          "package": "aivika",
          "signature": "Dynamics Double-\u003eDynamics Double-\u003eDynamics Double-\u003eDynamics Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-SystemDynamics.html#v:ramp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the first order exponential smooth.\n\u003c/p\u003e\u003cp\u003eThis is a simplified version of the \u003ccode\u003e\u003ca\u003esmoothI\u003c/a\u003e\u003c/code\u003e function\n without specifing the initial value.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.SystemDynamics",
          "name": "smooth",
          "package": "aivika",
          "signature": "Dynamics Double-\u003e Dynamics Double-\u003e Simulation (Dynamics Double)",
          "type": "function"
        },
        "index": {
          "description": "Return the first order exponential smooth This is simplified version of the smoothI function without specifing the initial value",
          "hierarchy": "Simulation Aivika SystemDynamics",
          "module": "Simulation.Aivika.SystemDynamics",
          "name": "smooth",
          "normalized": "Dynamics Double-\u003eDynamics Double-\u003eSimulation(Dynamics Double)",
          "package": "aivika",
          "signature": "Dynamics Double-\u003eDynamics Double-\u003eSimulation(Dynamics Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-SystemDynamics.html#v:smooth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the third order exponential smooth.\n\u003c/p\u003e\u003cp\u003eThis is a simplified version of the \u003ccode\u003e\u003ca\u003esmooth3I\u003c/a\u003e\u003c/code\u003e function\n without specifying the initial value.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.SystemDynamics",
          "name": "smooth3",
          "package": "aivika",
          "signature": "Dynamics Double-\u003e Dynamics Double-\u003e Simulation (Dynamics Double)",
          "type": "function"
        },
        "index": {
          "description": "Return the third order exponential smooth This is simplified version of the smooth3I function without specifying the initial value",
          "hierarchy": "Simulation Aivika SystemDynamics",
          "module": "Simulation.Aivika.SystemDynamics",
          "name": "smooth3",
          "normalized": "Dynamics Double-\u003eDynamics Double-\u003eSimulation(Dynamics Double)",
          "package": "aivika",
          "signature": "Dynamics Double-\u003eDynamics Double-\u003eSimulation(Dynamics Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-SystemDynamics.html#v:smooth3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the third order exponential smooth.\n\u003c/p\u003e\u003cp\u003eTo create a loopback, you should use the recursive do-notation\n with help of which the function itself is defined:\n\u003c/p\u003e\u003cpre\u003e\n smooth3I x t i =\n   mdo y  \u003c- integ ((s2 - y) / t') i\n       s2 \u003c- integ ((s1 - s2) / t') i\n       s1 \u003c- integ ((x - s1) / t') i\n       let t' = t / 3.0\n       return y\n\u003c/pre\u003e",
          "module": "Simulation.Aivika.SystemDynamics",
          "name": "smooth3I",
          "package": "aivika",
          "signature": "Dynamics Double-\u003e Dynamics Double-\u003e Dynamics Double-\u003e Simulation (Dynamics Double)",
          "type": "function"
        },
        "index": {
          "description": "Return the third order exponential smooth To create loopback you should use the recursive do-notation with help of which the function itself is defined smooth3I mdo integ s2 s2 integ s1 s2 s1 integ s1 let return",
          "hierarchy": "Simulation Aivika SystemDynamics",
          "module": "Simulation.Aivika.SystemDynamics",
          "name": "smooth3I",
          "normalized": "Dynamics Double-\u003eDynamics Double-\u003eDynamics Double-\u003eSimulation(Dynamics Double)",
          "package": "aivika",
          "signature": "Dynamics Double-\u003eDynamics Double-\u003eDynamics Double-\u003eSimulation(Dynamics Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-SystemDynamics.html#v:smooth3I"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the first order exponential smooth.\n\u003c/p\u003e\u003cp\u003eTo create a loopback, you should use the recursive do-notation\n with help of which the function itself is defined:\n\u003c/p\u003e\u003cpre\u003e\n smoothI x t i =\n   mdo y \u003c- integ ((x - y) / t) i\n       return y\n\u003c/pre\u003e",
          "module": "Simulation.Aivika.SystemDynamics",
          "name": "smoothI",
          "package": "aivika",
          "signature": "Dynamics Double-\u003e Dynamics Double-\u003e Dynamics Double-\u003e Simulation (Dynamics Double)",
          "type": "function"
        },
        "index": {
          "description": "Return the first order exponential smooth To create loopback you should use the recursive do-notation with help of which the function itself is defined smoothI mdo integ return",
          "hierarchy": "Simulation Aivika SystemDynamics",
          "module": "Simulation.Aivika.SystemDynamics",
          "name": "smoothI",
          "normalized": "Dynamics Double-\u003eDynamics Double-\u003eDynamics Double-\u003eSimulation(Dynamics Double)",
          "package": "aivika",
          "signature": "Dynamics Double-\u003eDynamics Double-\u003eDynamics Double-\u003eSimulation(Dynamics Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-SystemDynamics.html#v:smoothI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the n'th order exponential smooth.\n\u003c/p\u003e\u003cp\u003eThis is a simplified version of the \u003ccode\u003e\u003ca\u003esmoothNI\u003c/a\u003e\u003c/code\u003e function\n without specifying the initial value.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.SystemDynamics",
          "name": "smoothN",
          "package": "aivika",
          "signature": "Dynamics Double-\u003e Dynamics Double-\u003e Int-\u003e Simulation (Dynamics Double)",
          "type": "function"
        },
        "index": {
          "description": "Return the th order exponential smooth This is simplified version of the smoothNI function without specifying the initial value",
          "hierarchy": "Simulation Aivika SystemDynamics",
          "module": "Simulation.Aivika.SystemDynamics",
          "name": "smoothN",
          "normalized": "Dynamics Double-\u003eDynamics Double-\u003eInt-\u003eSimulation(Dynamics Double)",
          "package": "aivika",
          "signature": "Dynamics Double-\u003eDynamics Double-\u003eInt-\u003eSimulation(Dynamics Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-SystemDynamics.html#v:smoothN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the n'th order exponential smooth.\n\u003c/p\u003e\u003cp\u003eThe result is not discrete in that sense that it may change within the integration time\n interval depending on the integration method used. Probably, you should apply\n the \u003ccode\u003e\u003ca\u003ediscreteDynamics\u003c/a\u003e\u003c/code\u003e function to the result if you want to achieve an effect when\n the value is not changed within the time interval, which is used sometimes.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.SystemDynamics",
          "name": "smoothNI",
          "package": "aivika",
          "signature": "Dynamics Double-\u003e Dynamics Double-\u003e Int-\u003e Dynamics Double-\u003e Simulation (Dynamics Double)",
          "type": "function"
        },
        "index": {
          "description": "Return the th order exponential smooth The result is not discrete in that sense that it may change within the integration time interval depending on the integration method used Probably you should apply the discreteDynamics function to the result if you want to achieve an effect when the value is not changed within the time interval which is used sometimes",
          "hierarchy": "Simulation Aivika SystemDynamics",
          "module": "Simulation.Aivika.SystemDynamics",
          "name": "smoothNI",
          "normalized": "Dynamics Double-\u003eDynamics Double-\u003eInt-\u003eDynamics Double-\u003eSimulation(Dynamics Double)",
          "package": "aivika",
          "partial": "NI",
          "signature": "Dynamics Double-\u003eDynamics Double-\u003eInt-\u003eDynamics Double-\u003eSimulation(Dynamics Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-SystemDynamics.html#v:smoothNI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputation that returns 0 until the step time and then returns the specified height.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.SystemDynamics",
          "name": "step",
          "package": "aivika",
          "signature": "Dynamics Double-\u003e Dynamics Double-\u003e Dynamics Double",
          "type": "function"
        },
        "index": {
          "description": "Computation that returns until the step time and then returns the specified height",
          "hierarchy": "Simulation Aivika SystemDynamics",
          "module": "Simulation.Aivika.SystemDynamics",
          "name": "step",
          "normalized": "Dynamics Double-\u003eDynamics Double-\u003eDynamics Double",
          "package": "aivika",
          "signature": "Dynamics Double-\u003eDynamics Double-\u003eDynamics Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-SystemDynamics.html#v:step"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the trend.\n\u003c/p\u003e\u003cp\u003eThe function has the following definition:\n\u003c/p\u003e\u003cpre\u003e\n trend x at i =\n   do y \u003c- smoothI x at (x / (1.0 + i * at))\n      return $ (x / y - 1.0) / at\n\u003c/pre\u003e",
          "module": "Simulation.Aivika.SystemDynamics",
          "name": "trend",
          "package": "aivika",
          "signature": "Dynamics Double-\u003e Dynamics Double-\u003e Dynamics Double-\u003e Simulation (Dynamics Double)",
          "type": "function"
        },
        "index": {
          "description": "Return the trend The function has the following definition trend at do smoothI at at return at",
          "hierarchy": "Simulation Aivika SystemDynamics",
          "module": "Simulation.Aivika.SystemDynamics",
          "name": "trend",
          "normalized": "Dynamics Double-\u003eDynamics Double-\u003eDynamics Double-\u003eSimulation(Dynamics Double)",
          "package": "aivika",
          "signature": "Dynamics Double-\u003eDynamics Double-\u003eDynamics Double-\u003eSimulation(Dynamics Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-SystemDynamics.html#v:trend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTested with: GHC 7.6.3\n\u003c/p\u003e\u003cp\u003eIt defines the table functions.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Simulation.Aivika.Table",
          "name": "Table",
          "package": "aivika",
          "source": "src/Simulation-Aivika-Table.html",
          "type": "module"
        },
        "index": {
          "description": "Tested with GHC It defines the table functions",
          "hierarchy": "Simulation Aivika Table",
          "module": "Simulation.Aivika.Table",
          "name": "Table",
          "package": "aivika",
          "partial": "Table",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Table.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLookup \u003ccode\u003ex\u003c/code\u003e in a table of pairs \u003ccode\u003e(x, y)\u003c/code\u003e using linear interpolation.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Table",
          "name": "tableLookup",
          "package": "aivika",
          "signature": "Double -\u003e Array Int (Double, Double) -\u003e Double",
          "source": "src/Simulation-Aivika-Table.html#tableLookup",
          "type": "function"
        },
        "index": {
          "description": "Lookup in table of pairs using linear interpolation",
          "hierarchy": "Simulation Aivika Table",
          "module": "Simulation.Aivika.Table",
          "name": "tableLookup",
          "normalized": "Double-\u003eArray Int(Double,Double)-\u003eDouble",
          "package": "aivika",
          "partial": "Lookup",
          "signature": "Double-\u003eArray Int(Double,Double)-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Table.html#v:tableLookup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLookup \u003ccode\u003ex\u003c/code\u003e in a table of pairs \u003ccode\u003e(x, y)\u003c/code\u003e using stepwise function.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Table",
          "name": "tableLookupStepwise",
          "package": "aivika",
          "signature": "Double -\u003e Array Int (Double, Double) -\u003e Double",
          "source": "src/Simulation-Aivika-Table.html#tableLookupStepwise",
          "type": "function"
        },
        "index": {
          "description": "Lookup in table of pairs using stepwise function",
          "hierarchy": "Simulation Aivika Table",
          "module": "Simulation.Aivika.Table",
          "name": "tableLookupStepwise",
          "normalized": "Double-\u003eArray Int(Double,Double)-\u003eDouble",
          "package": "aivika",
          "partial": "Lookup Stepwise",
          "signature": "Double-\u003eArray Int(Double,Double)-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Table.html#v:tableLookupStepwise"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTested with: GHC 7.6.3\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eTask\u003c/a\u003e\u003c/code\u003e value represents a process that was already started in background.\n We can check the completion of the task, receive notifications about changing\n its state and even suspend an outer process awaiting the final result of the task.\n It complements the \u003ccode\u003e\u003ca\u003eProcess\u003c/a\u003e\u003c/code\u003e monad as it allows immediately continuing the main\n computation without suspension.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Simulation.Aivika.Task",
          "name": "Task",
          "package": "aivika",
          "source": "src/Simulation-Aivika-Task.html",
          "type": "module"
        },
        "index": {
          "description": "Tested with GHC The Task value represents process that was already started in background We can check the completion of the task receive notifications about changing its state and even suspend an outer process awaiting the final result of the task It complements the Process monad as it allows immediately continuing the main computation without suspension",
          "hierarchy": "Simulation Aivika Task",
          "module": "Simulation.Aivika.Task",
          "name": "Task",
          "package": "aivika",
          "partial": "Task",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Task.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe task represents a process that was already started in background.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Task",
          "name": "Task",
          "package": "aivika",
          "source": "src/Simulation-Aivika-Task.html#Task",
          "type": "data"
        },
        "index": {
          "description": "The task represents process that was already started in background",
          "hierarchy": "Simulation Aivika Task",
          "module": "Simulation.Aivika.Task",
          "name": "Task",
          "package": "aivika",
          "partial": "Task",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Task.html#t:Task"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents the result of the task.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Task",
          "name": "TaskResult",
          "package": "aivika",
          "source": "src/Simulation-Aivika-Task.html#TaskResult",
          "type": "data"
        },
        "index": {
          "description": "Represents the result of the task",
          "hierarchy": "Simulation Aivika Task",
          "module": "Simulation.Aivika.Task",
          "name": "TaskResult",
          "package": "aivika",
          "partial": "Task Result",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Task.html#t:TaskResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe task was cancelled\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Task",
          "name": "TaskCancelled",
          "package": "aivika",
          "signature": "TaskCancelled",
          "source": "src/Simulation-Aivika-Task.html#TaskResult",
          "type": "function"
        },
        "index": {
          "description": "the task was cancelled",
          "hierarchy": "Simulation Aivika Task",
          "module": "Simulation.Aivika.Task",
          "name": "TaskCancelled",
          "package": "aivika",
          "partial": "Task Cancelled",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Task.html#v:TaskCancelled"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe task was successfully completed and\n it returned the specified result\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Task",
          "name": "TaskCompleted",
          "package": "aivika",
          "signature": "TaskCompleted a",
          "source": "src/Simulation-Aivika-Task.html#TaskResult",
          "type": "function"
        },
        "index": {
          "description": "the task was successfully completed and it returned the specified result",
          "hierarchy": "Simulation Aivika Task",
          "module": "Simulation.Aivika.Task",
          "name": "TaskCompleted",
          "package": "aivika",
          "partial": "Task Completed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Task.html#v:TaskCompleted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe specified exception was raised when performing the task.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Task",
          "name": "TaskError",
          "package": "aivika",
          "signature": "TaskError IOException",
          "source": "src/Simulation-Aivika-Task.html#TaskResult",
          "type": "function"
        },
        "index": {
          "description": "the specified exception was raised when performing the task",
          "hierarchy": "Simulation Aivika Task",
          "module": "Simulation.Aivika.Task",
          "name": "TaskError",
          "package": "aivika",
          "partial": "Task Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Task.html#v:TaskError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCancel the task.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Task",
          "name": "cancelTask",
          "package": "aivika",
          "signature": "Task a -\u003e Event ()",
          "source": "src/Simulation-Aivika-Task.html#cancelTask",
          "type": "function"
        },
        "index": {
          "description": "Cancel the task",
          "hierarchy": "Simulation Aivika Task",
          "module": "Simulation.Aivika.Task",
          "name": "cancelTask",
          "normalized": "Task a-\u003eEvent()",
          "package": "aivika",
          "partial": "Task",
          "signature": "Task a-\u003eEvent()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Task.html#v:cancelTask"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnqueue the process that will be started at the specified time from the event queue.\n It returns the corresponded task immediately.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Task",
          "name": "enqueueTask",
          "package": "aivika",
          "signature": "Double -\u003e Process a -\u003e Event (Task a)",
          "source": "src/Simulation-Aivika-Task.html#enqueueTask",
          "type": "function"
        },
        "index": {
          "description": "Enqueue the process that will be started at the specified time from the event queue It returns the corresponded task immediately",
          "hierarchy": "Simulation Aivika Task",
          "module": "Simulation.Aivika.Task",
          "name": "enqueueTask",
          "normalized": "Double-\u003eProcess a-\u003eEvent(Task a)",
          "package": "aivika",
          "partial": "Task",
          "signature": "Double-\u003eProcess a-\u003eEvent(Task a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Task.html#v:enqueueTask"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnqueue the process that will be started at the specified time with the given\n identifier from the event queue. It returns the corresponded task immediately.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Task",
          "name": "enqueueTaskUsingId",
          "package": "aivika",
          "signature": "Double -\u003e ProcessId -\u003e Process a -\u003e Event (Task a)",
          "source": "src/Simulation-Aivika-Task.html#enqueueTaskUsingId",
          "type": "function"
        },
        "index": {
          "description": "Enqueue the process that will be started at the specified time with the given identifier from the event queue It returns the corresponded task immediately",
          "hierarchy": "Simulation Aivika Task",
          "module": "Simulation.Aivika.Task",
          "name": "enqueueTaskUsingId",
          "normalized": "Double-\u003eProcessId-\u003eProcess a-\u003eEvent(Task a)",
          "package": "aivika",
          "partial": "Task Using Id",
          "signature": "Double-\u003eProcessId-\u003eProcess a-\u003eEvent(Task a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Task.html#v:enqueueTaskUsingId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun the process in background and return the corresponded task immediately.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Task",
          "name": "runTask",
          "package": "aivika",
          "signature": "Process a -\u003e Event (Task a)",
          "source": "src/Simulation-Aivika-Task.html#runTask",
          "type": "function"
        },
        "index": {
          "description": "Run the process in background and return the corresponded task immediately",
          "hierarchy": "Simulation Aivika Task",
          "module": "Simulation.Aivika.Task",
          "name": "runTask",
          "normalized": "Process a-\u003eEvent(Task a)",
          "package": "aivika",
          "partial": "Task",
          "signature": "Process a-\u003eEvent(Task a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Task.html#v:runTask"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun the process with the specified identifier in background and\n return the corresponded task immediately.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Task",
          "name": "runTaskUsingId",
          "package": "aivika",
          "signature": "ProcessId -\u003e Process a -\u003e Event (Task a)",
          "source": "src/Simulation-Aivika-Task.html#runTaskUsingId",
          "type": "function"
        },
        "index": {
          "description": "Run the process with the specified identifier in background and return the corresponded task immediately",
          "hierarchy": "Simulation Aivika Task",
          "module": "Simulation.Aivika.Task",
          "name": "runTaskUsingId",
          "normalized": "ProcessId-\u003eProcess a-\u003eEvent(Task a)",
          "package": "aivika",
          "partial": "Task Using Id",
          "signature": "ProcessId-\u003eProcess a-\u003eEvent(Task a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Task.html#v:runTaskUsingId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a child process in background and return immediately the corresponded task.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Task",
          "name": "spawnTask",
          "package": "aivika",
          "signature": "ContCancellation -\u003e Process a -\u003e Process (Task a)",
          "source": "src/Simulation-Aivika-Task.html#spawnTask",
          "type": "function"
        },
        "index": {
          "description": "Run child process in background and return immediately the corresponded task",
          "hierarchy": "Simulation Aivika Task",
          "module": "Simulation.Aivika.Task",
          "name": "spawnTask",
          "normalized": "ContCancellation-\u003eProcess a-\u003eProcess(Task a)",
          "package": "aivika",
          "partial": "Task",
          "signature": "ContCancellation-\u003eProcess a-\u003eProcess(Task a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Task.html#v:spawnTask"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun using the specified identifier a child process in background and return\n immediately the corresponded task.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Task",
          "name": "spawnTaskUsingId",
          "package": "aivika",
          "signature": "ContCancellation -\u003e ProcessId -\u003e Process a -\u003e Process (Task a)",
          "source": "src/Simulation-Aivika-Task.html#spawnTaskUsingId",
          "type": "function"
        },
        "index": {
          "description": "Run using the specified identifier child process in background and return immediately the corresponded task",
          "hierarchy": "Simulation Aivika Task",
          "module": "Simulation.Aivika.Task",
          "name": "spawnTaskUsingId",
          "normalized": "ContCancellation-\u003eProcessId-\u003eProcess a-\u003eProcess(Task a)",
          "package": "aivika",
          "partial": "Task Using Id",
          "signature": "ContCancellation-\u003eProcessId-\u003eProcess a-\u003eProcess(Task a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Task.html#v:spawnTaskUsingId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest whether the task was cancelled.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Task",
          "name": "taskCancelled",
          "package": "aivika",
          "signature": "Task a -\u003e Event Bool",
          "source": "src/Simulation-Aivika-Task.html#taskCancelled",
          "type": "function"
        },
        "index": {
          "description": "Test whether the task was cancelled",
          "hierarchy": "Simulation Aivika Task",
          "module": "Simulation.Aivika.Task",
          "name": "taskCancelled",
          "normalized": "Task a-\u003eEvent Bool",
          "package": "aivika",
          "partial": "Cancelled",
          "signature": "Task a-\u003eEvent Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Task.html#v:taskCancelled"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn an identifier for the process that was launched\n in background for this task.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Task",
          "name": "taskId",
          "package": "aivika",
          "signature": "Task a -\u003e ProcessId",
          "source": "src/Simulation-Aivika-Task.html#taskId",
          "type": "function"
        },
        "index": {
          "description": "Return an identifier for the process that was launched in background for this task",
          "hierarchy": "Simulation Aivika Task",
          "module": "Simulation.Aivika.Task",
          "name": "taskId",
          "normalized": "Task a-\u003eProcessId",
          "package": "aivika",
          "partial": "Id",
          "signature": "Task a-\u003eProcessId",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Task.html#v:taskId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn an outer process that behaves like the task itself except for one thing:\n if the outer process is cancelled then it is not enough to cancel the task. \n\u003c/p\u003e",
          "module": "Simulation.Aivika.Task",
          "name": "taskProcess",
          "package": "aivika",
          "signature": "Task a -\u003e Process a",
          "source": "src/Simulation-Aivika-Task.html#taskProcess",
          "type": "function"
        },
        "index": {
          "description": "Return an outer process that behaves like the task itself except for one thing if the outer process is cancelled then it is not enough to cancel the task",
          "hierarchy": "Simulation Aivika Task",
          "module": "Simulation.Aivika.Task",
          "name": "taskProcess",
          "normalized": "Task a-\u003eProcess a",
          "package": "aivika",
          "partial": "Process",
          "signature": "Task a-\u003eProcess a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Task.html#v:taskProcess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the task result suspending the outer process if required.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Task",
          "name": "taskResult",
          "package": "aivika",
          "signature": "Task a -\u003e Process (TaskResult a)",
          "source": "src/Simulation-Aivika-Task.html#taskResult",
          "type": "function"
        },
        "index": {
          "description": "Return the task result suspending the outer process if required",
          "hierarchy": "Simulation Aivika Task",
          "module": "Simulation.Aivika.Task",
          "name": "taskResult",
          "normalized": "Task a-\u003eProcess(TaskResult a)",
          "package": "aivika",
          "partial": "Result",
          "signature": "Task a-\u003eProcess(TaskResult a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Task.html#v:taskResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn a signal that notifies about receiving\n the result of the task.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Task",
          "name": "taskResultReceived",
          "package": "aivika",
          "signature": "Task a -\u003e Signal (TaskResult a)",
          "source": "src/Simulation-Aivika-Task.html#taskResultReceived",
          "type": "function"
        },
        "index": {
          "description": "Return signal that notifies about receiving the result of the task",
          "hierarchy": "Simulation Aivika Task",
          "module": "Simulation.Aivika.Task",
          "name": "taskResultReceived",
          "normalized": "Task a-\u003eSignal(TaskResult a)",
          "package": "aivika",
          "partial": "Result Received",
          "signature": "Task a-\u003eSignal(TaskResult a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Task.html#v:taskResultReceived"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTry to get the task result immediately without suspension.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Task",
          "name": "tryGetTaskResult",
          "package": "aivika",
          "signature": "Task a -\u003e Event (Maybe (TaskResult a))",
          "source": "src/Simulation-Aivika-Task.html#tryGetTaskResult",
          "type": "function"
        },
        "index": {
          "description": "Try to get the task result immediately without suspension",
          "hierarchy": "Simulation Aivika Task",
          "module": "Simulation.Aivika.Task",
          "name": "tryGetTaskResult",
          "normalized": "Task a-\u003eEvent(Maybe(TaskResult a))",
          "package": "aivika",
          "partial": "Get Task Result",
          "signature": "Task a-\u003eEvent(Maybe(TaskResult a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Task.html#v:tryGetTaskResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTested with: GHC 7.6.3\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eUnboxed\u003c/a\u003e\u003c/code\u003e class allows creating unboxed arrays in monad \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Simulation.Aivika.Unboxed",
          "name": "Unboxed",
          "package": "aivika",
          "source": "src/Simulation-Aivika-Unboxed.html",
          "type": "module"
        },
        "index": {
          "description": "Tested with GHC The Unboxed class allows creating unboxed arrays in monad IO",
          "hierarchy": "Simulation Aivika Unboxed",
          "module": "Simulation.Aivika.Unboxed",
          "name": "Unboxed",
          "package": "aivika",
          "partial": "Unboxed",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Unboxed.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type which values can be contained in an unboxed array.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Unboxed",
          "name": "Unboxed",
          "package": "aivika",
          "source": "src/Simulation-Aivika-Unboxed.html#Unboxed",
          "type": "class"
        },
        "index": {
          "description": "The type which values can be contained in an unboxed array",
          "hierarchy": "Simulation Aivika Unboxed",
          "module": "Simulation.Aivika.Unboxed",
          "name": "Unboxed",
          "package": "aivika",
          "partial": "Unboxed",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Unboxed.html#t:Unboxed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an unboxed array with default values.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Unboxed",
          "name": "newUnboxedArray_",
          "package": "aivika",
          "signature": "(i, i) -\u003e IO (IOUArray i e)",
          "source": "src/Simulation-Aivika-Unboxed.html#newUnboxedArray_",
          "type": "method"
        },
        "index": {
          "description": "Create an unboxed array with default values",
          "hierarchy": "Simulation Aivika Unboxed",
          "module": "Simulation.Aivika.Unboxed",
          "name": "newUnboxedArray_",
          "normalized": "(a,a)-\u003eIO(IOUArray a b)",
          "package": "aivika",
          "partial": "Unboxed Array",
          "signature": "(i,i)-\u003eIO(IOUArray i e)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Unboxed.html#v:newUnboxedArray_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTested with: GHC 7.6.3\n\u003c/p\u003e\u003cp\u003eThis module defines an unboxed variable that is bound up with the event queue and \n that keeps the history of changes storing the values in an unboxed array, which\n allows using the variable in differential and difference equations under\n some conditions.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Simulation.Aivika.Var.Unboxed",
          "name": "Unboxed",
          "package": "aivika",
          "source": "src/Simulation-Aivika-Var-Unboxed.html",
          "type": "module"
        },
        "index": {
          "description": "Tested with GHC This module defines an unboxed variable that is bound up with the event queue and that keeps the history of changes storing the values in an unboxed array which allows using the variable in differential and difference equations under some conditions",
          "hierarchy": "Simulation Aivika Var Unboxed",
          "module": "Simulation.Aivika.Var.Unboxed",
          "name": "Unboxed",
          "package": "aivika",
          "partial": "Unboxed",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Var-Unboxed.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike the \u003ccode\u003eRef\u003c/code\u003e reference but keeps the history of changes in \n different time points. The \u003ccode\u003e\u003ca\u003eVar\u003c/a\u003e\u003c/code\u003e variable is usually safe in the hybrid \n simulation, for example, when it can be used in the differential or\n difference equations unless you update the variable twice in the\n same integration time point. Only this variable is much slower than\n the reference.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Var.Unboxed",
          "name": "Var",
          "package": "aivika",
          "source": "src/Simulation-Aivika-Var-Unboxed.html#Var",
          "type": "data"
        },
        "index": {
          "description": "Like the Ref reference but keeps the history of changes in different time points The Var variable is usually safe in the hybrid simulation for example when it can be used in the differential or difference equations unless you update the variable twice in the same integration time point Only this variable is much slower than the reference",
          "hierarchy": "Simulation Aivika Var Unboxed",
          "module": "Simulation.Aivika.Var.Unboxed",
          "name": "Var",
          "package": "aivika",
          "partial": "Var",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Var-Unboxed.html#t:Var"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFreeze the variable and return in arrays the time points and corresponded \n values when the variable had changed in different time points: (1) the last\n actual value per each time point is provided and (2) the time points are\n sorted in ascending order.\n\u003c/p\u003e\u003cp\u003eIf you need to get all changes including those ones that correspond to the same\n simulation time points then you can use the \u003ccode\u003e\u003ca\u003enewSignalHistory\u003c/a\u003e\u003c/code\u003e function passing\n in the \u003ccode\u003e\u003ca\u003evarChanged\u003c/a\u003e\u003c/code\u003e signal to it and then call function \u003ccode\u003e\u003ca\u003ereadSignalHistory\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Var.Unboxed",
          "name": "freezeVar",
          "package": "aivika",
          "signature": "Var a -\u003e Event (Array Int Double, Array Int a)",
          "source": "src/Simulation-Aivika-Var-Unboxed.html#freezeVar",
          "type": "function"
        },
        "index": {
          "description": "Freeze the variable and return in arrays the time points and corresponded values when the variable had changed in different time points the last actual value per each time point is provided and the time points are sorted in ascending order If you need to get all changes including those ones that correspond to the same simulation time points then you can use the newSignalHistory function passing in the varChanged signal to it and then call function readSignalHistory",
          "hierarchy": "Simulation Aivika Var Unboxed",
          "module": "Simulation.Aivika.Var.Unboxed",
          "name": "freezeVar",
          "normalized": "Var a-\u003eEvent(Array Int Double,Array Int a)",
          "package": "aivika",
          "partial": "Var",
          "signature": "Var a-\u003eEvent(Array Int Double,Array Int a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Var-Unboxed.html#v:freezeVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMutate the contents of the variable.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Var.Unboxed",
          "name": "modifyVar",
          "package": "aivika",
          "signature": "Var a -\u003e (a -\u003e a) -\u003e Event ()",
          "source": "src/Simulation-Aivika-Var-Unboxed.html#modifyVar",
          "type": "function"
        },
        "index": {
          "description": "Mutate the contents of the variable",
          "hierarchy": "Simulation Aivika Var Unboxed",
          "module": "Simulation.Aivika.Var.Unboxed",
          "name": "modifyVar",
          "normalized": "Var a-\u003e(a-\u003ea)-\u003eEvent()",
          "package": "aivika",
          "partial": "Var",
          "signature": "Var a-\u003e(a-\u003ea)-\u003eEvent()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Var-Unboxed.html#v:modifyVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new variable.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Var.Unboxed",
          "name": "newVar",
          "package": "aivika",
          "signature": "a -\u003e Simulation (Var a)",
          "source": "src/Simulation-Aivika-Var-Unboxed.html#newVar",
          "type": "function"
        },
        "index": {
          "description": "Create new variable",
          "hierarchy": "Simulation Aivika Var Unboxed",
          "module": "Simulation.Aivika.Var.Unboxed",
          "name": "newVar",
          "normalized": "a-\u003eSimulation(Var a)",
          "package": "aivika",
          "partial": "Var",
          "signature": "a-\u003eSimulation(Var a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Var-Unboxed.html#v:newVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead the value of a variable.\n\u003c/p\u003e\u003cp\u003eIt is safe to run the resulting computation with help of the \u003ccode\u003e\u003ca\u003erunEventWith\u003c/a\u003e\u003c/code\u003e\n function using modes \u003ccode\u003e\u003ca\u003eCurrentEventsOrFromPast\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eEarlierEventsOrFromPast\u003c/a\u003e\u003c/code\u003e, \n which is necessary if you are going to use the variable in the differential \n or difference equations. Only it is preferrable if the variable is not updated twice\n in the same integration time point; otherwise, different values can be returned\n for the same point.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Var.Unboxed",
          "name": "readVar",
          "package": "aivika",
          "signature": "Var a -\u003e Event a",
          "source": "src/Simulation-Aivika-Var-Unboxed.html#readVar",
          "type": "function"
        },
        "index": {
          "description": "Read the value of variable It is safe to run the resulting computation with help of the runEventWith function using modes CurrentEventsOrFromPast and EarlierEventsOrFromPast which is necessary if you are going to use the variable in the differential or difference equations Only it is preferrable if the variable is not updated twice in the same integration time point otherwise different values can be returned for the same point",
          "hierarchy": "Simulation Aivika Var Unboxed",
          "module": "Simulation.Aivika.Var.Unboxed",
          "name": "readVar",
          "normalized": "Var a-\u003eEvent a",
          "package": "aivika",
          "partial": "Var",
          "signature": "Var a-\u003eEvent a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Var-Unboxed.html#v:readVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn a signal that notifies about every change of the variable state.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Var.Unboxed",
          "name": "varChanged",
          "package": "aivika",
          "signature": "Var a -\u003e Signal a",
          "source": "src/Simulation-Aivika-Var-Unboxed.html#varChanged",
          "type": "function"
        },
        "index": {
          "description": "Return signal that notifies about every change of the variable state",
          "hierarchy": "Simulation Aivika Var Unboxed",
          "module": "Simulation.Aivika.Var.Unboxed",
          "name": "varChanged",
          "normalized": "Var a-\u003eSignal a",
          "package": "aivika",
          "partial": "Changed",
          "signature": "Var a-\u003eSignal a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Var-Unboxed.html#v:varChanged"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn a signal that notifies about every change of the variable state.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Var.Unboxed",
          "name": "varChanged_",
          "package": "aivika",
          "signature": "Var a -\u003e Signal ()",
          "source": "src/Simulation-Aivika-Var-Unboxed.html#varChanged_",
          "type": "function"
        },
        "index": {
          "description": "Return signal that notifies about every change of the variable state",
          "hierarchy": "Simulation Aivika Var Unboxed",
          "module": "Simulation.Aivika.Var.Unboxed",
          "name": "varChanged_",
          "normalized": "Var a-\u003eSignal()",
          "package": "aivika",
          "partial": "Changed",
          "signature": "Var a-\u003eSignal()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Var-Unboxed.html#v:varChanged_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a new value into the variable.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Var.Unboxed",
          "name": "writeVar",
          "package": "aivika",
          "signature": "Var a -\u003e a -\u003e Event ()",
          "source": "src/Simulation-Aivika-Var-Unboxed.html#writeVar",
          "type": "function"
        },
        "index": {
          "description": "Write new value into the variable",
          "hierarchy": "Simulation Aivika Var Unboxed",
          "module": "Simulation.Aivika.Var.Unboxed",
          "name": "writeVar",
          "normalized": "Var a-\u003ea-\u003eEvent()",
          "package": "aivika",
          "partial": "Var",
          "signature": "Var a-\u003ea-\u003eEvent()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Var-Unboxed.html#v:writeVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTested with: GHC 7.6.3\n\u003c/p\u003e\u003cp\u003eThis module defines a variable that is bound up with the event queue and \n that keeps the history of changes storing the values in an array, which\n allows using the variable in differential and difference equations under\n some conditions.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Simulation.Aivika.Var",
          "name": "Var",
          "package": "aivika",
          "source": "src/Simulation-Aivika-Var.html",
          "type": "module"
        },
        "index": {
          "description": "Tested with GHC This module defines variable that is bound up with the event queue and that keeps the history of changes storing the values in an array which allows using the variable in differential and difference equations under some conditions",
          "hierarchy": "Simulation Aivika Var",
          "module": "Simulation.Aivika.Var",
          "name": "Var",
          "package": "aivika",
          "partial": "Var",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Var.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike the \u003ccode\u003eRef\u003c/code\u003e reference but keeps the history of changes in \n different time points. The \u003ccode\u003e\u003ca\u003eVar\u003c/a\u003e\u003c/code\u003e variable is usually safe in the hybrid \n simulation, for example, when it can be used in the differential or\n difference equations unless you update the variable twice in the\n same integration time point. Only this variable is much slower than\n the reference.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Var",
          "name": "Var",
          "package": "aivika",
          "source": "src/Simulation-Aivika-Var.html#Var",
          "type": "data"
        },
        "index": {
          "description": "Like the Ref reference but keeps the history of changes in different time points The Var variable is usually safe in the hybrid simulation for example when it can be used in the differential or difference equations unless you update the variable twice in the same integration time point Only this variable is much slower than the reference",
          "hierarchy": "Simulation Aivika Var",
          "module": "Simulation.Aivika.Var",
          "name": "Var",
          "package": "aivika",
          "partial": "Var",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Var.html#t:Var"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFreeze the variable and return in arrays the time points and corresponded \n values when the variable had changed in different time points: (1) the last\n actual value per each time point is provided and (2) the time points are\n sorted in ascending order.\n\u003c/p\u003e\u003cp\u003eIf you need to get all changes including those ones that correspond to the same\n simulation time points then you can use the \u003ccode\u003e\u003ca\u003enewSignalHistory\u003c/a\u003e\u003c/code\u003e function passing\n in the \u003ccode\u003e\u003ca\u003evarChanged\u003c/a\u003e\u003c/code\u003e signal to it and then call function \u003ccode\u003e\u003ca\u003ereadSignalHistory\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Var",
          "name": "freezeVar",
          "package": "aivika",
          "signature": "Var a -\u003e Event (Array Int Double, Array Int a)",
          "source": "src/Simulation-Aivika-Var.html#freezeVar",
          "type": "function"
        },
        "index": {
          "description": "Freeze the variable and return in arrays the time points and corresponded values when the variable had changed in different time points the last actual value per each time point is provided and the time points are sorted in ascending order If you need to get all changes including those ones that correspond to the same simulation time points then you can use the newSignalHistory function passing in the varChanged signal to it and then call function readSignalHistory",
          "hierarchy": "Simulation Aivika Var",
          "module": "Simulation.Aivika.Var",
          "name": "freezeVar",
          "normalized": "Var a-\u003eEvent(Array Int Double,Array Int a)",
          "package": "aivika",
          "partial": "Var",
          "signature": "Var a-\u003eEvent(Array Int Double,Array Int a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Var.html#v:freezeVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMutate the contents of the variable.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Var",
          "name": "modifyVar",
          "package": "aivika",
          "signature": "Var a -\u003e (a -\u003e a) -\u003e Event ()",
          "source": "src/Simulation-Aivika-Var.html#modifyVar",
          "type": "function"
        },
        "index": {
          "description": "Mutate the contents of the variable",
          "hierarchy": "Simulation Aivika Var",
          "module": "Simulation.Aivika.Var",
          "name": "modifyVar",
          "normalized": "Var a-\u003e(a-\u003ea)-\u003eEvent()",
          "package": "aivika",
          "partial": "Var",
          "signature": "Var a-\u003e(a-\u003ea)-\u003eEvent()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Var.html#v:modifyVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new variable.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Var",
          "name": "newVar",
          "package": "aivika",
          "signature": "a -\u003e Simulation (Var a)",
          "source": "src/Simulation-Aivika-Var.html#newVar",
          "type": "function"
        },
        "index": {
          "description": "Create new variable",
          "hierarchy": "Simulation Aivika Var",
          "module": "Simulation.Aivika.Var",
          "name": "newVar",
          "normalized": "a-\u003eSimulation(Var a)",
          "package": "aivika",
          "partial": "Var",
          "signature": "a-\u003eSimulation(Var a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Var.html#v:newVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead the value of a variable.\n\u003c/p\u003e\u003cp\u003eIt is safe to run the resulting computation with help of the \u003ccode\u003e\u003ca\u003erunEventWith\u003c/a\u003e\u003c/code\u003e\n function using modes \u003ccode\u003e\u003ca\u003eCurrentEventsOrFromPast\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eEarlierEventsOrFromPast\u003c/a\u003e\u003c/code\u003e, \n which is necessary if you are going to use the variable in the differential \n or difference equations. Only it is preferrable if the variable is not updated twice\n in the same integration time point; otherwise, different values can be returned\n for the same point.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Var",
          "name": "readVar",
          "package": "aivika",
          "signature": "Var a -\u003e Event a",
          "source": "src/Simulation-Aivika-Var.html#readVar",
          "type": "function"
        },
        "index": {
          "description": "Read the value of variable It is safe to run the resulting computation with help of the runEventWith function using modes CurrentEventsOrFromPast and EarlierEventsOrFromPast which is necessary if you are going to use the variable in the differential or difference equations Only it is preferrable if the variable is not updated twice in the same integration time point otherwise different values can be returned for the same point",
          "hierarchy": "Simulation Aivika Var",
          "module": "Simulation.Aivika.Var",
          "name": "readVar",
          "normalized": "Var a-\u003eEvent a",
          "package": "aivika",
          "partial": "Var",
          "signature": "Var a-\u003eEvent a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Var.html#v:readVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn a signal that notifies about every change of the variable state.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Var",
          "name": "varChanged",
          "package": "aivika",
          "signature": "Var a -\u003e Signal a",
          "source": "src/Simulation-Aivika-Var.html#varChanged",
          "type": "function"
        },
        "index": {
          "description": "Return signal that notifies about every change of the variable state",
          "hierarchy": "Simulation Aivika Var",
          "module": "Simulation.Aivika.Var",
          "name": "varChanged",
          "normalized": "Var a-\u003eSignal a",
          "package": "aivika",
          "partial": "Changed",
          "signature": "Var a-\u003eSignal a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Var.html#v:varChanged"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn a signal that notifies about every change of the variable state.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Var",
          "name": "varChanged_",
          "package": "aivika",
          "signature": "Var a -\u003e Signal ()",
          "source": "src/Simulation-Aivika-Var.html#varChanged_",
          "type": "function"
        },
        "index": {
          "description": "Return signal that notifies about every change of the variable state",
          "hierarchy": "Simulation Aivika Var",
          "module": "Simulation.Aivika.Var",
          "name": "varChanged_",
          "normalized": "Var a-\u003eSignal()",
          "package": "aivika",
          "partial": "Changed",
          "signature": "Var a-\u003eSignal()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Var.html#v:varChanged_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a new value into the variable.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Var",
          "name": "writeVar",
          "package": "aivika",
          "signature": "Var a -\u003e a -\u003e Event ()",
          "source": "src/Simulation-Aivika-Var.html#writeVar",
          "type": "function"
        },
        "index": {
          "description": "Write new value into the variable",
          "hierarchy": "Simulation Aivika Var",
          "module": "Simulation.Aivika.Var",
          "name": "writeVar",
          "normalized": "Var a-\u003ea-\u003eEvent()",
          "package": "aivika",
          "partial": "Var",
          "signature": "Var a-\u003ea-\u003eEvent()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Var.html#v:writeVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTested with: GHC 7.6.3\n\u003c/p\u003e\u003cp\u003eAn imperative unboxed vector.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Simulation.Aivika.Vector.Unboxed",
          "name": "Unboxed",
          "package": "aivika",
          "source": "src/Simulation-Aivika-Vector-Unboxed.html",
          "type": "module"
        },
        "index": {
          "description": "Tested with GHC An imperative unboxed vector",
          "hierarchy": "Simulation Aivika Vector Unboxed",
          "module": "Simulation.Aivika.Vector.Unboxed",
          "name": "Unboxed",
          "package": "aivika",
          "partial": "Unboxed",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Vector-Unboxed.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents an unboxed resizable vector.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Vector.Unboxed",
          "name": "Vector",
          "package": "aivika",
          "source": "src/Simulation-Aivika-Vector-Unboxed.html#Vector",
          "type": "data"
        },
        "index": {
          "description": "Represents an unboxed resizable vector",
          "hierarchy": "Simulation Aivika Vector Unboxed",
          "module": "Simulation.Aivika.Vector.Unboxed",
          "name": "Vector",
          "package": "aivika",
          "partial": "Vector",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Vector-Unboxed.html#t:Vector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd the specified element to the end of the vector.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Vector.Unboxed",
          "name": "appendVector",
          "package": "aivika",
          "signature": "Vector a -\u003e a -\u003e IO ()",
          "source": "src/Simulation-Aivika-Vector-Unboxed.html#appendVector",
          "type": "function"
        },
        "index": {
          "description": "Add the specified element to the end of the vector",
          "hierarchy": "Simulation Aivika Vector Unboxed",
          "module": "Simulation.Aivika.Vector.Unboxed",
          "name": "appendVector",
          "normalized": "Vector a-\u003ea-\u003eIO()",
          "package": "aivika",
          "partial": "Vector",
          "signature": "Vector a-\u003ea-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Vector-Unboxed.html#v:appendVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCopy the vector.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Vector.Unboxed",
          "name": "copyVector",
          "package": "aivika",
          "signature": "Vector a -\u003e IO (Vector a)",
          "source": "src/Simulation-Aivika-Vector-Unboxed.html#copyVector",
          "type": "function"
        },
        "index": {
          "description": "Copy the vector",
          "hierarchy": "Simulation Aivika Vector Unboxed",
          "module": "Simulation.Aivika.Vector.Unboxed",
          "name": "copyVector",
          "normalized": "Vector a-\u003eIO(Vector a)",
          "package": "aivika",
          "partial": "Vector",
          "signature": "Vector a-\u003eIO(Vector a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Vector-Unboxed.html#v:copyVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the elements of the vector in an immutable array.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Vector.Unboxed",
          "name": "freezeVector",
          "package": "aivika",
          "signature": "Vector a -\u003e IO (Array Int a)",
          "source": "src/Simulation-Aivika-Vector-Unboxed.html#freezeVector",
          "type": "function"
        },
        "index": {
          "description": "Return the elements of the vector in an immutable array",
          "hierarchy": "Simulation Aivika Vector Unboxed",
          "module": "Simulation.Aivika.Vector.Unboxed",
          "name": "freezeVector",
          "normalized": "Vector a-\u003eIO(Array Int a)",
          "package": "aivika",
          "partial": "Vector",
          "signature": "Vector a-\u003eIO(Array Int a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Vector-Unboxed.html#v:freezeVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new vector.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Vector.Unboxed",
          "name": "newVector",
          "package": "aivika",
          "signature": "IO (Vector a)",
          "source": "src/Simulation-Aivika-Vector-Unboxed.html#newVector",
          "type": "function"
        },
        "index": {
          "description": "Create new vector",
          "hierarchy": "Simulation Aivika Vector Unboxed",
          "module": "Simulation.Aivika.Vector.Unboxed",
          "name": "newVector",
          "package": "aivika",
          "partial": "Vector",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Vector-Unboxed.html#v:newVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a value from the vector, where indices are started from 0.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Vector.Unboxed",
          "name": "readVector",
          "package": "aivika",
          "signature": "Vector a -\u003e Int -\u003e IO a",
          "source": "src/Simulation-Aivika-Vector-Unboxed.html#readVector",
          "type": "function"
        },
        "index": {
          "description": "Read value from the vector where indices are started from",
          "hierarchy": "Simulation Aivika Vector Unboxed",
          "module": "Simulation.Aivika.Vector.Unboxed",
          "name": "readVector",
          "normalized": "Vector a-\u003eInt-\u003eIO a",
          "package": "aivika",
          "partial": "Vector",
          "signature": "Vector a-\u003eInt-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Vector-Unboxed.html#v:readVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the index of the specified element using binary search; otherwise, \n a negated insertion index minus one: 0 -\u003e -0 - 1, ..., i -\u003e -i - 1, ....\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Vector.Unboxed",
          "name": "vectorBinarySearch",
          "package": "aivika",
          "signature": "Vector a -\u003e a -\u003e IO Int",
          "source": "src/Simulation-Aivika-Vector-Unboxed.html#vectorBinarySearch",
          "type": "function"
        },
        "index": {
          "description": "Return the index of the specified element using binary search otherwise negated insertion index minus one",
          "hierarchy": "Simulation Aivika Vector Unboxed",
          "module": "Simulation.Aivika.Vector.Unboxed",
          "name": "vectorBinarySearch",
          "normalized": "Vector a-\u003ea-\u003eIO Int",
          "package": "aivika",
          "partial": "Binary Search",
          "signature": "Vector a-\u003ea-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Vector-Unboxed.html#v:vectorBinarySearch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the element count.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Vector.Unboxed",
          "name": "vectorCount",
          "package": "aivika",
          "signature": "Vector a -\u003e IO Int",
          "source": "src/Simulation-Aivika-Vector-Unboxed.html#vectorCount",
          "type": "function"
        },
        "index": {
          "description": "Return the element count",
          "hierarchy": "Simulation Aivika Vector Unboxed",
          "module": "Simulation.Aivika.Vector.Unboxed",
          "name": "vectorCount",
          "normalized": "Vector a-\u003eIO Int",
          "package": "aivika",
          "partial": "Count",
          "signature": "Vector a-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Vector-Unboxed.html#v:vectorCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelete the element at the specified index.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Vector.Unboxed",
          "name": "vectorDeleteAt",
          "package": "aivika",
          "signature": "Vector a -\u003e Int -\u003e IO ()",
          "source": "src/Simulation-Aivika-Vector-Unboxed.html#vectorDeleteAt",
          "type": "function"
        },
        "index": {
          "description": "Delete the element at the specified index",
          "hierarchy": "Simulation Aivika Vector Unboxed",
          "module": "Simulation.Aivika.Vector.Unboxed",
          "name": "vectorDeleteAt",
          "normalized": "Vector a-\u003eInt-\u003eIO()",
          "package": "aivika",
          "partial": "Delete At",
          "signature": "Vector a-\u003eInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Vector-Unboxed.html#v:vectorDeleteAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the index of the item or -1.     \n\u003c/p\u003e",
          "module": "Simulation.Aivika.Vector.Unboxed",
          "name": "vectorIndex",
          "package": "aivika",
          "signature": "Vector a -\u003e a -\u003e IO Int",
          "source": "src/Simulation-Aivika-Vector-Unboxed.html#vectorIndex",
          "type": "function"
        },
        "index": {
          "description": "Return the index of the item or",
          "hierarchy": "Simulation Aivika Vector Unboxed",
          "module": "Simulation.Aivika.Vector.Unboxed",
          "name": "vectorIndex",
          "normalized": "Vector a-\u003ea-\u003eIO Int",
          "package": "aivika",
          "partial": "Index",
          "signature": "Vector a-\u003ea-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Vector-Unboxed.html#v:vectorIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInsert the element in the vector at the specified index.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Vector.Unboxed",
          "name": "vectorInsert",
          "package": "aivika",
          "signature": "Vector a -\u003e Int -\u003e a -\u003e IO ()",
          "source": "src/Simulation-Aivika-Vector-Unboxed.html#vectorInsert",
          "type": "function"
        },
        "index": {
          "description": "Insert the element in the vector at the specified index",
          "hierarchy": "Simulation Aivika Vector Unboxed",
          "module": "Simulation.Aivika.Vector.Unboxed",
          "name": "vectorInsert",
          "normalized": "Vector a-\u003eInt-\u003ea-\u003eIO()",
          "package": "aivika",
          "partial": "Insert",
          "signature": "Vector a-\u003eInt-\u003ea-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Vector-Unboxed.html#v:vectorInsert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet an array item at the specified index which is started from 0.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Vector.Unboxed",
          "name": "writeVector",
          "package": "aivika",
          "signature": "Vector a -\u003e Int -\u003e a -\u003e IO ()",
          "source": "src/Simulation-Aivika-Vector-Unboxed.html#writeVector",
          "type": "function"
        },
        "index": {
          "description": "Set an array item at the specified index which is started from",
          "hierarchy": "Simulation Aivika Vector Unboxed",
          "module": "Simulation.Aivika.Vector.Unboxed",
          "name": "writeVector",
          "normalized": "Vector a-\u003eInt-\u003ea-\u003eIO()",
          "package": "aivika",
          "partial": "Vector",
          "signature": "Vector a-\u003eInt-\u003ea-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Vector-Unboxed.html#v:writeVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTested with: GHC 7.6.3\n\u003c/p\u003e\u003cp\u003eAn imperative vector.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Simulation.Aivika.Vector",
          "name": "Vector",
          "package": "aivika",
          "source": "src/Simulation-Aivika-Vector.html",
          "type": "module"
        },
        "index": {
          "description": "Tested with GHC An imperative vector",
          "hierarchy": "Simulation Aivika Vector",
          "module": "Simulation.Aivika.Vector",
          "name": "Vector",
          "package": "aivika",
          "partial": "Vector",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Vector.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents a resizable vector.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Vector",
          "name": "Vector",
          "package": "aivika",
          "source": "src/Simulation-Aivika-Vector.html#Vector",
          "type": "data"
        },
        "index": {
          "description": "Represents resizable vector",
          "hierarchy": "Simulation Aivika Vector",
          "module": "Simulation.Aivika.Vector",
          "name": "Vector",
          "package": "aivika",
          "partial": "Vector",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Vector.html#t:Vector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd the specified element to the end of the vector.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Vector",
          "name": "appendVector",
          "package": "aivika",
          "signature": "Vector a -\u003e a -\u003e IO ()",
          "source": "src/Simulation-Aivika-Vector.html#appendVector",
          "type": "function"
        },
        "index": {
          "description": "Add the specified element to the end of the vector",
          "hierarchy": "Simulation Aivika Vector",
          "module": "Simulation.Aivika.Vector",
          "name": "appendVector",
          "normalized": "Vector a-\u003ea-\u003eIO()",
          "package": "aivika",
          "partial": "Vector",
          "signature": "Vector a-\u003ea-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Vector.html#v:appendVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCopy the vector.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Vector",
          "name": "copyVector",
          "package": "aivika",
          "signature": "Vector a -\u003e IO (Vector a)",
          "source": "src/Simulation-Aivika-Vector.html#copyVector",
          "type": "function"
        },
        "index": {
          "description": "Copy the vector",
          "hierarchy": "Simulation Aivika Vector",
          "module": "Simulation.Aivika.Vector",
          "name": "copyVector",
          "normalized": "Vector a-\u003eIO(Vector a)",
          "package": "aivika",
          "partial": "Vector",
          "signature": "Vector a-\u003eIO(Vector a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Vector.html#v:copyVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the elements of the vector in an immutable array.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Vector",
          "name": "freezeVector",
          "package": "aivika",
          "signature": "Vector a -\u003e IO (Array Int a)",
          "source": "src/Simulation-Aivika-Vector.html#freezeVector",
          "type": "function"
        },
        "index": {
          "description": "Return the elements of the vector in an immutable array",
          "hierarchy": "Simulation Aivika Vector",
          "module": "Simulation.Aivika.Vector",
          "name": "freezeVector",
          "normalized": "Vector a-\u003eIO(Array Int a)",
          "package": "aivika",
          "partial": "Vector",
          "signature": "Vector a-\u003eIO(Array Int a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Vector.html#v:freezeVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new vector.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Vector",
          "name": "newVector",
          "package": "aivika",
          "signature": "IO (Vector a)",
          "source": "src/Simulation-Aivika-Vector.html#newVector",
          "type": "function"
        },
        "index": {
          "description": "Create new vector",
          "hierarchy": "Simulation Aivika Vector",
          "module": "Simulation.Aivika.Vector",
          "name": "newVector",
          "package": "aivika",
          "partial": "Vector",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Vector.html#v:newVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a value from the vector, where indices are started from 0.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Vector",
          "name": "readVector",
          "package": "aivika",
          "signature": "Vector a -\u003e Int -\u003e IO a",
          "source": "src/Simulation-Aivika-Vector.html#readVector",
          "type": "function"
        },
        "index": {
          "description": "Read value from the vector where indices are started from",
          "hierarchy": "Simulation Aivika Vector",
          "module": "Simulation.Aivika.Vector",
          "name": "readVector",
          "normalized": "Vector a-\u003eInt-\u003eIO a",
          "package": "aivika",
          "partial": "Vector",
          "signature": "Vector a-\u003eInt-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Vector.html#v:readVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the index of the specified element using binary search; otherwise, \n a negated insertion index minus one: 0 -\u003e -0 - 1, ..., i -\u003e -i - 1, ....\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Vector",
          "name": "vectorBinarySearch",
          "package": "aivika",
          "signature": "Vector a -\u003e a -\u003e IO Int",
          "source": "src/Simulation-Aivika-Vector.html#vectorBinarySearch",
          "type": "function"
        },
        "index": {
          "description": "Return the index of the specified element using binary search otherwise negated insertion index minus one",
          "hierarchy": "Simulation Aivika Vector",
          "module": "Simulation.Aivika.Vector",
          "name": "vectorBinarySearch",
          "normalized": "Vector a-\u003ea-\u003eIO Int",
          "package": "aivika",
          "partial": "Binary Search",
          "signature": "Vector a-\u003ea-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Vector.html#v:vectorBinarySearch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the element count.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Vector",
          "name": "vectorCount",
          "package": "aivika",
          "signature": "Vector a -\u003e IO Int",
          "source": "src/Simulation-Aivika-Vector.html#vectorCount",
          "type": "function"
        },
        "index": {
          "description": "Return the element count",
          "hierarchy": "Simulation Aivika Vector",
          "module": "Simulation.Aivika.Vector",
          "name": "vectorCount",
          "normalized": "Vector a-\u003eIO Int",
          "package": "aivika",
          "partial": "Count",
          "signature": "Vector a-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Vector.html#v:vectorCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelete the element at the specified index.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Vector",
          "name": "vectorDeleteAt",
          "package": "aivika",
          "signature": "Vector a -\u003e Int -\u003e IO ()",
          "source": "src/Simulation-Aivika-Vector.html#vectorDeleteAt",
          "type": "function"
        },
        "index": {
          "description": "Delete the element at the specified index",
          "hierarchy": "Simulation Aivika Vector",
          "module": "Simulation.Aivika.Vector",
          "name": "vectorDeleteAt",
          "normalized": "Vector a-\u003eInt-\u003eIO()",
          "package": "aivika",
          "partial": "Delete At",
          "signature": "Vector a-\u003eInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Vector.html#v:vectorDeleteAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the index of the item or -1.     \n\u003c/p\u003e",
          "module": "Simulation.Aivika.Vector",
          "name": "vectorIndex",
          "package": "aivika",
          "signature": "Vector a -\u003e a -\u003e IO Int",
          "source": "src/Simulation-Aivika-Vector.html#vectorIndex",
          "type": "function"
        },
        "index": {
          "description": "Return the index of the item or",
          "hierarchy": "Simulation Aivika Vector",
          "module": "Simulation.Aivika.Vector",
          "name": "vectorIndex",
          "normalized": "Vector a-\u003ea-\u003eIO Int",
          "package": "aivika",
          "partial": "Index",
          "signature": "Vector a-\u003ea-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Vector.html#v:vectorIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInsert the element in the vector at the specified index.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Vector",
          "name": "vectorInsert",
          "package": "aivika",
          "signature": "Vector a -\u003e Int -\u003e a -\u003e IO ()",
          "source": "src/Simulation-Aivika-Vector.html#vectorInsert",
          "type": "function"
        },
        "index": {
          "description": "Insert the element in the vector at the specified index",
          "hierarchy": "Simulation Aivika Vector",
          "module": "Simulation.Aivika.Vector",
          "name": "vectorInsert",
          "normalized": "Vector a-\u003eInt-\u003ea-\u003eIO()",
          "package": "aivika",
          "partial": "Insert",
          "signature": "Vector a-\u003eInt-\u003ea-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Vector.html#v:vectorInsert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet an array item at the specified index which is started from 0.\n\u003c/p\u003e",
          "module": "Simulation.Aivika.Vector",
          "name": "writeVector",
          "package": "aivika",
          "signature": "Vector a -\u003e Int -\u003e a -\u003e IO ()",
          "source": "src/Simulation-Aivika-Vector.html#writeVector",
          "type": "function"
        },
        "index": {
          "description": "Set an array item at the specified index which is started from",
          "hierarchy": "Simulation Aivika Vector",
          "module": "Simulation.Aivika.Vector",
          "name": "writeVector",
          "normalized": "Vector a-\u003eInt-\u003ea-\u003eIO()",
          "package": "aivika",
          "partial": "Vector",
          "signature": "Vector a-\u003eInt-\u003ea-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika-Vector.html#v:writeVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTested with: GHC 7.6.3\n\u003c/p\u003e\u003cp\u003eThis module re-exports the most part of the library functionality.\n But there are modules that must be imported explicitly.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Simulation.Aivika",
          "name": "Aivika",
          "package": "aivika",
          "source": "src/Simulation-Aivika.html",
          "type": "module"
        },
        "index": {
          "description": "Tested with GHC This module re-exports the most part of the library functionality But there are modules that must be imported explicitly",
          "hierarchy": "Simulation Aivika",
          "module": "Simulation.Aivika",
          "name": "Aivika",
          "package": "aivika",
          "partial": "Aivika",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/aivika/docs/Simulation-Aivika.html#"
      }
    }
  ]
]