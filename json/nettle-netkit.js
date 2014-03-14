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
        "word": "nettle-netkit"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides facilities for easily creating Netkit (\u003ca\u003ehttp://wiki.netkit.org/index.php/Main_Page\u003c/a\u003e) labs  \n to experiment with OpenFlow switches and controllers. \n This module provides a notation for describing simple \n OpenFlow-based network topologies, and provides a command\n that generates a NetKit lab that can be used to simulate the\n network.\n\u003c/p\u003e\u003cp\u003eTo use this module, describe the configuration of your test network, including\n hosts, switches and their interconnectivity using the functions in this module (see the example below), \n and then run one of the \u003ccode\u003emakeLab\u003c/code\u003e commands to generate the Netkit files needed to run the lab.\n You can then move into the directory containing the Netkit lab and start the lab using Netkit commands \n (e.g. \u003ccode\u003elstart\u003c/code\u003e).\n The generated lab will include hosts and switches, but not a controller. \n The lab will setup a TAP interface with subnet 10.0.0.0/8 from the switch virtual machines to the host on which you started the lab, \n and the switches will attempt to contact a controller with IP address 10.0.0.1 over that TAP interface, at the server port mentioned in the lab.\n You can then control the switches by starting a controller on the host at the specified port. See the example below for more details.\n\u003c/p\u003e\u003cp\u003eThe generated lab is designed to work with a customized netkit file system that \n has OpenFlow software in a particular location. Instructions for obtaining this file\n system are here \u003ca\u003ehttp://haskell.cs.yale.edu/?page_id=383\u003c/a\u003e; see the last instruction in the section on Installing on Your Own Machine. \n The generator (i.e. \u003ccode\u003emakeLab\u003c/code\u003e) must know the location of this file in order to generate the Netkit lab files. \n The default options assume the files are in the user's \u003ccode\u003e~/.nettle\u003c/code\u003e directory, but they can be placed in other locations as well. \n If they are in another location, then the Lab options must be set appropriately. \n\u003c/p\u003e\u003c/div\u003e",
          "module": "Nettle.Netkit.LabUtil",
          "name": "LabUtil",
          "package": "nettle-netkit",
          "source": "src/Nettle-Netkit-LabUtil.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides facilities for easily creating Netkit http wiki.netkit.org index.php Main Page labs to experiment with OpenFlow switches and controllers This module provides notation for describing simple OpenFlow-based network topologies and provides command that generates NetKit lab that can be used to simulate the network To use this module describe the configuration of your test network including hosts switches and their interconnectivity using the functions in this module see the example below and then run one of the makeLab commands to generate the Netkit files needed to run the lab You can then move into the directory containing the Netkit lab and start the lab using Netkit commands e.g lstart The generated lab will include hosts and switches but not controller The lab will setup TAP interface with subnet from the switch virtual machines to the host on which you started the lab and the switches will attempt to contact controller with IP address over that TAP interface at the server port mentioned in the lab You can then control the switches by starting controller on the host at the specified port See the example below for more details The generated lab is designed to work with customized netkit file system that has OpenFlow software in particular location Instructions for obtaining this file system are here http haskell.cs.yale.edu page id see the last instruction in the section on Installing on Your Own Machine The generator i.e makeLab must know the location of this file in order to generate the Netkit lab files The default options assume the files are in the user nettle directory but they can be placed in other locations as well If they are in another location then the Lab options must be set appropriately",
          "hierarchy": "Nettle Netkit LabUtil",
          "module": "Nettle.Netkit.LabUtil",
          "name": "LabUtil",
          "package": "nettle-netkit",
          "partial": "Lab Util",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/nettle-netkit/docs/Nettle-Netkit-LabUtil.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nettle.Netkit.LabUtil",
          "name": "ControllerTCPPort",
          "package": "nettle-netkit",
          "source": "src/Nettle-Netkit-LabUtil.html#ControllerTCPPort",
          "type": "type"
        },
        "index": {
          "hierarchy": "Nettle Netkit LabUtil",
          "module": "Nettle.Netkit.LabUtil",
          "name": "ControllerTCPPort",
          "package": "nettle-netkit",
          "partial": "Controller TCPPort",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/nettle-netkit/docs/Nettle-Netkit-LabUtil.html#t:ControllerTCPPort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nettle.Netkit.LabUtil",
          "name": "Host",
          "package": "nettle-netkit",
          "source": "src/Nettle-Netkit-LabUtil.html#Host",
          "type": "data"
        },
        "index": {
          "hierarchy": "Nettle Netkit LabUtil",
          "module": "Nettle.Netkit.LabUtil",
          "name": "Host",
          "package": "nettle-netkit",
          "partial": "Host",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/nettle-netkit/docs/Nettle-Netkit-LabUtil.html#t:Host"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nettle.Netkit.LabUtil",
          "name": "Interface",
          "package": "nettle-netkit",
          "source": "src/Nettle-Netkit-LabUtil.html#Interface",
          "type": "data"
        },
        "index": {
          "hierarchy": "Nettle Netkit LabUtil",
          "module": "Nettle.Netkit.LabUtil",
          "name": "Interface",
          "package": "nettle-netkit",
          "partial": "Interface",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/nettle-netkit/docs/Nettle-Netkit-LabUtil.html#t:Interface"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nettle.Netkit.LabUtil",
          "name": "LabConfig",
          "package": "nettle-netkit",
          "source": "src/Nettle-Netkit-LabUtil.html#LabConfig",
          "type": "data"
        },
        "index": {
          "hierarchy": "Nettle Netkit LabUtil",
          "module": "Nettle.Netkit.LabUtil",
          "name": "LabConfig",
          "package": "nettle-netkit",
          "partial": "Lab Config",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/nettle-netkit/docs/Nettle-Netkit-LabUtil.html#t:LabConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn enumerated data type representing OpenFlow versions supported by \n this module.\n\u003c/p\u003e",
          "module": "Nettle.Netkit.LabUtil",
          "name": "OpenFlowVersion",
          "package": "nettle-netkit",
          "source": "src/Nettle-Netkit-LabUtil.html#OpenFlowVersion",
          "type": "data"
        },
        "index": {
          "description": "An enumerated data type representing OpenFlow versions supported by this module",
          "hierarchy": "Nettle Netkit LabUtil",
          "module": "Nettle.Netkit.LabUtil",
          "name": "OpenFlowVersion",
          "package": "nettle-netkit",
          "partial": "Open Flow Version",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/nettle-netkit/docs/Nettle-Netkit-LabUtil.html#t:OpenFlowVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA datatype for specifying lab options, including the paths to the kernel and filesystem\n used by netkit machines, as well as the OpenFlow version of the reference switch software.\n\u003c/p\u003e",
          "module": "Nettle.Netkit.LabUtil",
          "name": "Options",
          "package": "nettle-netkit",
          "source": "src/Nettle-Netkit-LabUtil.html#Options",
          "type": "data"
        },
        "index": {
          "description": "datatype for specifying lab options including the paths to the kernel and filesystem used by netkit machines as well as the OpenFlow version of the reference switch software",
          "hierarchy": "Nettle Netkit LabUtil",
          "module": "Nettle.Netkit.LabUtil",
          "name": "Options",
          "package": "nettle-netkit",
          "partial": "Options",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/nettle-netkit/docs/Nettle-Netkit-LabUtil.html#t:Options"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nettle.Netkit.LabUtil",
          "name": "Port",
          "package": "nettle-netkit",
          "source": "src/Nettle-Netkit-LabUtil.html#Port",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Nettle Netkit LabUtil",
          "module": "Nettle.Netkit.LabUtil",
          "name": "Port",
          "package": "nettle-netkit",
          "partial": "Port",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/nettle-netkit/docs/Nettle-Netkit-LabUtil.html#t:Port"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nettle.Netkit.LabUtil",
          "name": "Switch",
          "package": "nettle-netkit",
          "source": "src/Nettle-Netkit-LabUtil.html#Switch",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Nettle Netkit LabUtil",
          "module": "Nettle.Netkit.LabUtil",
          "name": "Switch",
          "package": "nettle-netkit",
          "partial": "Switch",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/nettle-netkit/docs/Nettle-Netkit-LabUtil.html#t:Switch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nettle.Netkit.LabUtil",
          "name": "SwitchPort",
          "package": "nettle-netkit",
          "source": "src/Nettle-Netkit-LabUtil.html#SwitchPort",
          "type": "type"
        },
        "index": {
          "hierarchy": "Nettle Netkit LabUtil",
          "module": "Nettle.Netkit.LabUtil",
          "name": "SwitchPort",
          "package": "nettle-netkit",
          "partial": "Switch Port",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/nettle-netkit/docs/Nettle-Netkit-LabUtil.html#t:SwitchPort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDenotes a SwitchPort, i.e. a port on a switch.\n\u003c/p\u003e",
          "module": "Nettle.Netkit.LabUtil",
          "name": "(#)",
          "package": "nettle-netkit",
          "signature": "Switch -\u003e Port -\u003e SwitchPort",
          "source": "src/Nettle-Netkit-LabUtil.html#%23",
          "type": "function"
        },
        "index": {
          "description": "Denotes SwitchPort i.e port on switch",
          "hierarchy": "Nettle Netkit LabUtil",
          "module": "Nettle.Netkit.LabUtil",
          "name": "(#) #",
          "normalized": "Switch-\u003ePort-\u003eSwitchPort",
          "package": "nettle-netkit",
          "signature": "Switch-\u003ePort-\u003eSwitchPort",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nettle-netkit/docs/Nettle-Netkit-LabUtil.html#v:-35-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDenotes a link (switch-to-switch) connection.          \n\u003c/p\u003e",
          "module": "Nettle.Netkit.LabUtil",
          "name": "(\u003c--\u003e)",
          "package": "nettle-netkit",
          "signature": "SwitchPort -\u003e SwitchPort -\u003e (SwitchPort, SwitchPort)",
          "source": "src/Nettle-Netkit-LabUtil.html#%3C--%3E",
          "type": "function"
        },
        "index": {
          "description": "Denotes link switch-to-switch connection",
          "hierarchy": "Nettle Netkit LabUtil",
          "module": "Nettle.Netkit.LabUtil",
          "name": "(\u003c--\u003e) \u003c--\u003e",
          "normalized": "SwitchPort-\u003eSwitchPort-\u003e(SwitchPort,SwitchPort)",
          "package": "nettle-netkit",
          "signature": "SwitchPort-\u003eSwitchPort-\u003e(SwitchPort,SwitchPort)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nettle-netkit/docs/Nettle-Netkit-LabUtil.html#v:-60--45--45--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDenotes where a host is attached to the network of switches.\n\u003c/p\u003e",
          "module": "Nettle.Netkit.LabUtil",
          "name": "(@@)",
          "package": "nettle-netkit",
          "signature": "(Host, Interface) -\u003e SwitchPort -\u003e ((Host, Interface), SwitchPort)",
          "source": "src/Nettle-Netkit-LabUtil.html#%40%40",
          "type": "function"
        },
        "index": {
          "description": "Denotes where host is attached to the network of switches",
          "hierarchy": "Nettle Netkit LabUtil",
          "module": "Nettle.Netkit.LabUtil",
          "name": "(@@) @@",
          "normalized": "(Host,Interface)-\u003eSwitchPort-\u003e((Host,Interface),SwitchPort)",
          "package": "nettle-netkit",
          "signature": "(Host,Interface)-\u003eSwitchPort-\u003e((Host,Interface),SwitchPort)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nettle-netkit/docs/Nettle-Netkit-LabUtil.html#v:-64--64-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nettle.Netkit.LabUtil",
          "name": "Host",
          "package": "nettle-netkit",
          "signature": "Host",
          "source": "src/Nettle-Netkit-LabUtil.html#Host",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nettle Netkit LabUtil",
          "module": "Nettle.Netkit.LabUtil",
          "name": "Host",
          "package": "nettle-netkit",
          "partial": "Host",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nettle-netkit/docs/Nettle-Netkit-LabUtil.html#v:Host"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nettle.Netkit.LabUtil",
          "name": "Interface",
          "package": "nettle-netkit",
          "signature": "Interface",
          "source": "src/Nettle-Netkit-LabUtil.html#Interface",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nettle Netkit LabUtil",
          "module": "Nettle.Netkit.LabUtil",
          "name": "Interface",
          "package": "nettle-netkit",
          "partial": "Interface",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nettle-netkit/docs/Nettle-Netkit-LabUtil.html#v:Interface"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nettle.Netkit.LabUtil",
          "name": "LabConfig",
          "package": "nettle-netkit",
          "signature": "LabConfig",
          "source": "src/Nettle-Netkit-LabUtil.html#LabConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nettle Netkit LabUtil",
          "module": "Nettle.Netkit.LabUtil",
          "name": "LabConfig",
          "package": "nettle-netkit",
          "partial": "Lab Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nettle-netkit/docs/Nettle-Netkit-LabUtil.html#v:LabConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nettle.Netkit.LabUtil",
          "name": "Options",
          "package": "nettle-netkit",
          "signature": "Options",
          "source": "src/Nettle-Netkit-LabUtil.html#Options",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nettle Netkit LabUtil",
          "module": "Nettle.Netkit.LabUtil",
          "name": "Options",
          "package": "nettle-netkit",
          "partial": "Options",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nettle-netkit/docs/Nettle-Netkit-LabUtil.html#v:Options"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nettle.Netkit.LabUtil",
          "name": "Port",
          "package": "nettle-netkit",
          "signature": "Port PortID",
          "source": "src/Nettle-Netkit-LabUtil.html#Port",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nettle Netkit LabUtil",
          "module": "Nettle.Netkit.LabUtil",
          "name": "Port",
          "package": "nettle-netkit",
          "partial": "Port",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nettle-netkit/docs/Nettle-Netkit-LabUtil.html#v:Port"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nettle.Netkit.LabUtil",
          "name": "Switch",
          "package": "nettle-netkit",
          "signature": "Switch SwitchID",
          "source": "src/Nettle-Netkit-LabUtil.html#Switch",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nettle Netkit LabUtil",
          "module": "Nettle.Netkit.LabUtil",
          "name": "Switch",
          "package": "nettle-netkit",
          "partial": "Switch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nettle-netkit/docs/Nettle-Netkit-LabUtil.html#v:Switch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nettle.Netkit.LabUtil",
          "name": "Ver0_9_0",
          "package": "nettle-netkit",
          "signature": "Ver0_9_0",
          "source": "src/Nettle-Netkit-LabUtil.html#OpenFlowVersion",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nettle Netkit LabUtil",
          "module": "Nettle.Netkit.LabUtil",
          "name": "Ver0_9_0",
          "package": "nettle-netkit",
          "partial": "Ver",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nettle-netkit/docs/Nettle-Netkit-LabUtil.html#v:Ver0_9_0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nettle.Netkit.LabUtil",
          "name": "Ver1_0_0",
          "package": "nettle-netkit",
          "signature": "Ver1_0_0",
          "source": "src/Nettle-Netkit-LabUtil.html#OpenFlowVersion",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nettle Netkit LabUtil",
          "module": "Nettle.Netkit.LabUtil",
          "name": "Ver1_0_0",
          "package": "nettle-netkit",
          "partial": "Ver",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nettle-netkit/docs/Nettle-Netkit-LabUtil.html#v:Ver1_0_0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe TCP port number at which the controller will listen for switch connections\n\u003c/p\u003e",
          "module": "Nettle.Netkit.LabUtil",
          "name": "controllerServerPort",
          "package": "nettle-netkit",
          "signature": "ControllerTCPPort",
          "source": "src/Nettle-Netkit-LabUtil.html#LabConfig",
          "type": "function"
        },
        "index": {
          "description": "The TCP port number at which the controller will listen for switch connections",
          "hierarchy": "Nettle Netkit LabUtil",
          "module": "Nettle.Netkit.LabUtil",
          "name": "controllerServerPort",
          "package": "nettle-netkit",
          "partial": "Server Port",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nettle-netkit/docs/Nettle-Netkit-LabUtil.html#v:controllerServerPort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nettle.Netkit.LabUtil",
          "name": "getDefaultOptions",
          "package": "nettle-netkit",
          "signature": "OpenFlowVersion -\u003e IO Options",
          "source": "src/Nettle-Netkit-LabUtil.html#getDefaultOptions",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nettle Netkit LabUtil",
          "module": "Nettle.Netkit.LabUtil",
          "name": "getDefaultOptions",
          "normalized": "OpenFlowVersion-\u003eIO Options",
          "package": "nettle-netkit",
          "partial": "Default Options",
          "signature": "OpenFlowVersion-\u003eIO Options",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nettle-netkit/docs/Nettle-Netkit-LabUtil.html#v:getDefaultOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nettle.Netkit.LabUtil",
          "name": "host",
          "package": "nettle-netkit",
          "signature": "Int -\u003e Host",
          "source": "src/Nettle-Netkit-LabUtil.html#host",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nettle Netkit LabUtil",
          "module": "Nettle.Netkit.LabUtil",
          "name": "host",
          "normalized": "Int-\u003eHost",
          "package": "nettle-netkit",
          "signature": "Int-\u003eHost",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nettle-netkit/docs/Nettle-Netkit-LabUtil.html#v:host"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nettle.Netkit.LabUtil",
          "name": "hostID",
          "package": "nettle-netkit",
          "signature": "Int",
          "source": "src/Nettle-Netkit-LabUtil.html#Host",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nettle Netkit LabUtil",
          "module": "Nettle.Netkit.LabUtil",
          "name": "hostID",
          "package": "nettle-netkit",
          "partial": "ID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nettle-netkit/docs/Nettle-Netkit-LabUtil.html#v:hostID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA description of where the host interfaces are attached to switches in the network\n\u003c/p\u003e",
          "module": "Nettle.Netkit.LabUtil",
          "name": "hosts",
          "package": "nettle-netkit",
          "signature": "[((Host, Interface), SwitchPort)]",
          "source": "src/Nettle-Netkit-LabUtil.html#LabConfig",
          "type": "function"
        },
        "index": {
          "description": "description of where the host interfaces are attached to switches in the network",
          "hierarchy": "Nettle Netkit LabUtil",
          "module": "Nettle.Netkit.LabUtil",
          "name": "hosts",
          "normalized": "[((Host,Interface),SwitchPort)]",
          "package": "nettle-netkit",
          "signature": "[((Host,Interface),SwitchPort)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nettle-netkit/docs/Nettle-Netkit-LabUtil.html#v:hosts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nettle.Netkit.LabUtil",
          "name": "interfaceID",
          "package": "nettle-netkit",
          "signature": "Int",
          "source": "src/Nettle-Netkit-LabUtil.html#Interface",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nettle Netkit LabUtil",
          "module": "Nettle.Netkit.LabUtil",
          "name": "interfaceID",
          "package": "nettle-netkit",
          "partial": "ID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nettle-netkit/docs/Nettle-Netkit-LabUtil.html#v:interfaceID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nettle.Netkit.LabUtil",
          "name": "interfaceIPAddress",
          "package": "nettle-netkit",
          "signature": "IPAddress",
          "source": "src/Nettle-Netkit-LabUtil.html#Interface",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nettle Netkit LabUtil",
          "module": "Nettle.Netkit.LabUtil",
          "name": "interfaceIPAddress",
          "package": "nettle-netkit",
          "partial": "IPAddress",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nettle-netkit/docs/Nettle-Netkit-LabUtil.html#v:interfaceIPAddress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA description of how switches are connected\n\u003c/p\u003e",
          "module": "Nettle.Netkit.LabUtil",
          "name": "links",
          "package": "nettle-netkit",
          "signature": "[(SwitchPort, SwitchPort)]",
          "source": "src/Nettle-Netkit-LabUtil.html#LabConfig",
          "type": "function"
        },
        "index": {
          "description": "description of how switches are connected",
          "hierarchy": "Nettle Netkit LabUtil",
          "module": "Nettle.Netkit.LabUtil",
          "name": "links",
          "normalized": "[(SwitchPort,SwitchPort)]",
          "package": "nettle-netkit",
          "signature": "[(SwitchPort,SwitchPort)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nettle-netkit/docs/Nettle-Netkit-LabUtil.html#v:links"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003emakeLabWithDefaults path options lab\u003c/code\u003e is a command that writes the files and\n directories needed to run a Netkit lab that implements the description provided by \u003ccode\u003elab\u003c/code\u003e. \n It writes the files to directory \u003ccode\u003epath\u003c/code\u003e, and the options are specified by \u003ccode\u003eoptions\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Nettle.Netkit.LabUtil",
          "name": "makeLab",
          "package": "nettle-netkit",
          "signature": "FilePath -\u003e Options -\u003e LabConfig -\u003e IO ()",
          "source": "src/Nettle-Netkit-LabUtil.html#makeLab",
          "type": "function"
        },
        "index": {
          "description": "makeLabWithDefaults path options lab is command that writes the files and directories needed to run Netkit lab that implements the description provided by lab It writes the files to directory path and the options are specified by options",
          "hierarchy": "Nettle Netkit LabUtil",
          "module": "Nettle.Netkit.LabUtil",
          "name": "makeLab",
          "normalized": "FilePath-\u003eOptions-\u003eLabConfig-\u003eIO()",
          "package": "nettle-netkit",
          "partial": "Lab",
          "signature": "FilePath-\u003eOptions-\u003eLabConfig-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nettle-netkit/docs/Nettle-Netkit-LabUtil.html#v:makeLab"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003emakeLabWithDefaults path version lab\u003c/code\u003e is a command that writes the files and\n directories needed to run a Netkit lab that implements the description provided by \u003ccode\u003elab\u003c/code\u003e. \n It writes the files to directory \u003ccode\u003epath\u003c/code\u003e, and the switches will run the OpenFlow reference\n switch software for OpenFlow version \u003ccode\u003eversion\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Nettle.Netkit.LabUtil",
          "name": "makeLabWithDefaults",
          "package": "nettle-netkit",
          "signature": "FilePath -\u003e OpenFlowVersion -\u003e LabConfig -\u003e IO ()",
          "source": "src/Nettle-Netkit-LabUtil.html#makeLabWithDefaults",
          "type": "function"
        },
        "index": {
          "description": "makeLabWithDefaults path version lab is command that writes the files and directories needed to run Netkit lab that implements the description provided by lab It writes the files to directory path and the switches will run the OpenFlow reference switch software for OpenFlow version version",
          "hierarchy": "Nettle Netkit LabUtil",
          "module": "Nettle.Netkit.LabUtil",
          "name": "makeLabWithDefaults",
          "normalized": "FilePath-\u003eOpenFlowVersion-\u003eLabConfig-\u003eIO()",
          "package": "nettle-netkit",
          "partial": "Lab With Defaults",
          "signature": "FilePath-\u003eOpenFlowVersion-\u003eLabConfig-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nettle-netkit/docs/Nettle-Netkit-LabUtil.html#v:makeLabWithDefaults"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nettle.Netkit.LabUtil",
          "name": "openFlowVersion",
          "package": "nettle-netkit",
          "signature": "OpenFlowVersion",
          "source": "src/Nettle-Netkit-LabUtil.html#Options",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nettle Netkit LabUtil",
          "module": "Nettle.Netkit.LabUtil",
          "name": "openFlowVersion",
          "package": "nettle-netkit",
          "partial": "Flow Version",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nettle-netkit/docs/Nettle-Netkit-LabUtil.html#v:openFlowVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nettle.Netkit.LabUtil",
          "name": "pathToFileSystem",
          "package": "nettle-netkit",
          "signature": "Maybe String",
          "source": "src/Nettle-Netkit-LabUtil.html#Options",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nettle Netkit LabUtil",
          "module": "Nettle.Netkit.LabUtil",
          "name": "pathToFileSystem",
          "package": "nettle-netkit",
          "partial": "To File System",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nettle-netkit/docs/Nettle-Netkit-LabUtil.html#v:pathToFileSystem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nettle.Netkit.LabUtil",
          "name": "pathToKernel",
          "package": "nettle-netkit",
          "signature": "Maybe String",
          "source": "src/Nettle-Netkit-LabUtil.html#Options",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nettle Netkit LabUtil",
          "module": "Nettle.Netkit.LabUtil",
          "name": "pathToKernel",
          "package": "nettle-netkit",
          "partial": "To Kernel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nettle-netkit/docs/Nettle-Netkit-LabUtil.html#v:pathToKernel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nettle.Netkit.LabUtil",
          "name": "port",
          "package": "nettle-netkit",
          "signature": "PortID -\u003e Port",
          "source": "src/Nettle-Netkit-LabUtil.html#port",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nettle Netkit LabUtil",
          "module": "Nettle.Netkit.LabUtil",
          "name": "port",
          "normalized": "PortID-\u003ePort",
          "package": "nettle-netkit",
          "signature": "PortID-\u003ePort",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nettle-netkit/docs/Nettle-Netkit-LabUtil.html#v:port"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nettle.Netkit.LabUtil",
          "name": "switch",
          "package": "nettle-netkit",
          "signature": "SwitchID -\u003e Switch",
          "source": "src/Nettle-Netkit-LabUtil.html#switch",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nettle Netkit LabUtil",
          "module": "Nettle.Netkit.LabUtil",
          "name": "switch",
          "normalized": "SwitchID-\u003eSwitch",
          "package": "nettle-netkit",
          "signature": "SwitchID-\u003eSwitch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nettle-netkit/docs/Nettle-Netkit-LabUtil.html#v:switch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSwitches for this lab\n\u003c/p\u003e",
          "module": "Nettle.Netkit.LabUtil",
          "name": "switches",
          "package": "nettle-netkit",
          "signature": "[Switch]",
          "source": "src/Nettle-Netkit-LabUtil.html#LabConfig",
          "type": "function"
        },
        "index": {
          "description": "Switches for this lab",
          "hierarchy": "Nettle Netkit LabUtil",
          "module": "Nettle.Netkit.LabUtil",
          "name": "switches",
          "normalized": "[Switch]",
          "package": "nettle-netkit",
          "signature": "[Switch]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nettle-netkit/docs/Nettle-Netkit-LabUtil.html#v:switches"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA simple, purely functional implementation of union-find. \n\u003c/p\u003e\u003c/div\u003e",
          "module": "Nettle.Netkit.UnionFind",
          "name": "UnionFind",
          "package": "nettle-netkit",
          "source": "src/Nettle-Netkit-UnionFind.html",
          "type": "module"
        },
        "index": {
          "description": "simple purely functional implementation of union-find",
          "hierarchy": "Nettle Netkit UnionFind",
          "module": "Nettle.Netkit.UnionFind",
          "name": "UnionFind",
          "package": "nettle-netkit",
          "partial": "Union Find",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/nettle-netkit/docs/Nettle-Netkit-UnionFind.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nettle.Netkit.UnionFind",
          "name": "Partition",
          "package": "nettle-netkit",
          "source": "src/Nettle-Netkit-UnionFind.html#Partition",
          "type": "type"
        },
        "index": {
          "hierarchy": "Nettle Netkit UnionFind",
          "module": "Nettle.Netkit.UnionFind",
          "name": "Partition",
          "package": "nettle-netkit",
          "partial": "Partition",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/nettle-netkit/docs/Nettle-Netkit-UnionFind.html#t:Partition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nettle.Netkit.UnionFind",
          "name": "discretePartition",
          "package": "nettle-netkit",
          "signature": "[a] -\u003e Partition a",
          "source": "src/Nettle-Netkit-UnionFind.html#discretePartition",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nettle Netkit UnionFind",
          "module": "Nettle.Netkit.UnionFind",
          "name": "discretePartition",
          "normalized": "[a]-\u003ePartition a",
          "package": "nettle-netkit",
          "partial": "Partition",
          "signature": "[a]-\u003ePartition a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nettle-netkit/docs/Nettle-Netkit-UnionFind.html#v:discretePartition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nettle.Netkit.UnionFind",
          "name": "finestPartition",
          "package": "nettle-netkit",
          "signature": "[(a, a)] -\u003e Partition a",
          "source": "src/Nettle-Netkit-UnionFind.html#finestPartition",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nettle Netkit UnionFind",
          "module": "Nettle.Netkit.UnionFind",
          "name": "finestPartition",
          "normalized": "[(a,a)]-\u003ePartition a",
          "package": "nettle-netkit",
          "partial": "Partition",
          "signature": "[(a,a)]-\u003ePartition a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nettle-netkit/docs/Nettle-Netkit-UnionFind.html#v:finestPartition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nettle.Netkit.UnionFind",
          "name": "unionParts",
          "package": "nettle-netkit",
          "signature": "a -\u003e a -\u003e Partition a -\u003e Partition a",
          "source": "src/Nettle-Netkit-UnionFind.html#unionParts",
          "type": "function"
        },
        "index": {
          "hierarchy": "Nettle Netkit UnionFind",
          "module": "Nettle.Netkit.UnionFind",
          "name": "unionParts",
          "normalized": "a-\u003ea-\u003ePartition a-\u003ePartition a",
          "package": "nettle-netkit",
          "partial": "Parts",
          "signature": "a-\u003ea-\u003ePartition a-\u003ePartition a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nettle-netkit/docs/Nettle-Netkit-UnionFind.html#v:unionParts"
      }
    }
  ]
]