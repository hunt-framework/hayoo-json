[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nettle-netkit/docs/Nettle-Netkit-LabUtil.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides facilities for easily creating Netkit (\u003ca\u003ehttp://wiki.netkit.org/index.php/Main_Page\u003c/a\u003e) labs  \n to experiment with OpenFlow switches and controllers. \n This module provides a notation for describing simple \n OpenFlow-based network topologies, and provides a command\n that generates a NetKit lab that can be used to simulate the\n network.\n\u003c/p\u003e\u003cp\u003eTo use this module, describe the configuration of your test network, including\n hosts, switches and their interconnectivity using the functions in this module (see the example below), \n and then run one of the \u003ccode\u003emakeLab\u003c/code\u003e commands to generate the Netkit files needed to run the lab.\n You can then move into the directory containing the Netkit lab and start the lab using Netkit commands \n (e.g. \u003ccode\u003elstart\u003c/code\u003e).\n The generated lab will include hosts and switches, but not a controller. \n The lab will setup a TAP interface with subnet 10.0.0.0/8 from the switch virtual machines to the host on which you started the lab, \n and the switches will attempt to contact a controller with IP address 10.0.0.1 over that TAP interface, at the server port mentioned in the lab.\n You can then control the switches by starting a controller on the host at the specified port. See the example below for more details.\n\u003c/p\u003e\u003cp\u003eThe generated lab is designed to work with a customized netkit file system that \n has OpenFlow software in a particular location. Instructions for obtaining this file\n system are here \u003ca\u003ehttp://haskell.cs.yale.edu/?page_id=383\u003c/a\u003e; see the last instruction in the section on Installing on Your Own Machine. \n The generator (i.e. \u003ccode\u003emakeLab\u003c/code\u003e) must know the location of this file in order to generate the Netkit lab files. \n The default options assume the files are in the user's \u003ccode\u003e~/.nettle\u003c/code\u003e directory, but they can be placed in other locations as well. \n If they are in another location, then the Lab options must be set appropriately. \n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Nettle.Netkit.LabUtil",
        "fct-package": "nettle-netkit",
        "fct-signature": "module",
        "fct-source": "src/Nettle-Netkit-LabUtil.html",
        "fct-type": "module",
        "title": "LabUtil"
      },
      "index": {
        "description": "This module provides facilities for easily creating Netkit http wiki.netkit.org index.php Main Page labs to experiment with OpenFlow switches and controllers This module provides notation for describing simple OpenFlow-based network topologies and provides command that generates NetKit lab that can be used to simulate the network To use this module describe the configuration of your test network including hosts switches and their interconnectivity using the functions in this module see the example below and then run one of the makeLab commands to generate the Netkit files needed to run the lab You can then move into the directory containing the Netkit lab and start the lab using Netkit commands e.g lstart The generated lab will include hosts and switches but not controller The lab will setup TAP interface with subnet from the switch virtual machines to the host on which you started the lab and the switches will attempt to contact controller with IP address over that TAP interface at the server port mentioned in the lab You can then control the switches by starting controller on the host at the specified port See the example below for more details The generated lab is designed to work with customized netkit file system that has OpenFlow software in particular location Instructions for obtaining this file system are here http haskell.cs.yale.edu page id see the last instruction in the section on Installing on Your Own Machine The generator i.e makeLab must know the location of this file in order to generate the Netkit lab files The default options assume the files are in the user nettle directory but they can be placed in other locations as well If they are in another location then the Lab options must be set appropriately",
        "hierarchy": "Nettle Netkit LabUtil",
        "module": "Nettle.Netkit.LabUtil",
        "name": "LabUtil",
        "normalized": "",
        "package": "nettle-netkit",
        "partial": "Lab Util",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nettle-netkit/docs/Nettle-Netkit-LabUtil.html#t:ControllerTCPPort",
      "description": {
        "fct-module": "Nettle.Netkit.LabUtil",
        "fct-package": "nettle-netkit",
        "fct-signature": "type",
        "fct-source": "src/Nettle-Netkit-LabUtil.html#ControllerTCPPort",
        "fct-type": "type",
        "title": "ControllerTCPPort"
      },
      "index": {
        "description": "",
        "hierarchy": "Nettle Netkit LabUtil",
        "module": "Nettle.Netkit.LabUtil",
        "name": "ControllerTCPPort",
        "normalized": "",
        "package": "nettle-netkit",
        "partial": "Controller TCPPort",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nettle-netkit/docs/Nettle-Netkit-LabUtil.html#t:Host",
      "description": {
        "fct-module": "Nettle.Netkit.LabUtil",
        "fct-package": "nettle-netkit",
        "fct-signature": "data",
        "fct-source": "src/Nettle-Netkit-LabUtil.html#Host",
        "fct-type": "data",
        "title": "Host"
      },
      "index": {
        "description": "",
        "hierarchy": "Nettle Netkit LabUtil",
        "module": "Nettle.Netkit.LabUtil",
        "name": "Host",
        "normalized": "",
        "package": "nettle-netkit",
        "partial": "Host",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nettle-netkit/docs/Nettle-Netkit-LabUtil.html#t:Interface",
      "description": {
        "fct-module": "Nettle.Netkit.LabUtil",
        "fct-package": "nettle-netkit",
        "fct-signature": "data",
        "fct-source": "src/Nettle-Netkit-LabUtil.html#Interface",
        "fct-type": "data",
        "title": "Interface"
      },
      "index": {
        "description": "",
        "hierarchy": "Nettle Netkit LabUtil",
        "module": "Nettle.Netkit.LabUtil",
        "name": "Interface",
        "normalized": "",
        "package": "nettle-netkit",
        "partial": "Interface",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nettle-netkit/docs/Nettle-Netkit-LabUtil.html#t:LabConfig",
      "description": {
        "fct-module": "Nettle.Netkit.LabUtil",
        "fct-package": "nettle-netkit",
        "fct-signature": "data",
        "fct-source": "src/Nettle-Netkit-LabUtil.html#LabConfig",
        "fct-type": "data",
        "title": "LabConfig"
      },
      "index": {
        "description": "",
        "hierarchy": "Nettle Netkit LabUtil",
        "module": "Nettle.Netkit.LabUtil",
        "name": "LabConfig",
        "normalized": "",
        "package": "nettle-netkit",
        "partial": "Lab Config",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nettle-netkit/docs/Nettle-Netkit-LabUtil.html#t:OpenFlowVersion",
      "description": {
        "fct-descr": "\u003cp\u003eAn enumerated data type representing OpenFlow versions supported by \n this module.\n\u003c/p\u003e",
        "fct-module": "Nettle.Netkit.LabUtil",
        "fct-package": "nettle-netkit",
        "fct-signature": "data",
        "fct-source": "src/Nettle-Netkit-LabUtil.html#OpenFlowVersion",
        "fct-type": "data",
        "title": "OpenFlowVersion"
      },
      "index": {
        "description": "An enumerated data type representing OpenFlow versions supported by this module",
        "hierarchy": "Nettle Netkit LabUtil",
        "module": "Nettle.Netkit.LabUtil",
        "name": "OpenFlowVersion",
        "normalized": "",
        "package": "nettle-netkit",
        "partial": "Open Flow Version",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nettle-netkit/docs/Nettle-Netkit-LabUtil.html#t:Options",
      "description": {
        "fct-descr": "\u003cp\u003eA datatype for specifying lab options, including the paths to the kernel and filesystem\n used by netkit machines, as well as the OpenFlow version of the reference switch software.\n\u003c/p\u003e",
        "fct-module": "Nettle.Netkit.LabUtil",
        "fct-package": "nettle-netkit",
        "fct-signature": "data",
        "fct-source": "src/Nettle-Netkit-LabUtil.html#Options",
        "fct-type": "data",
        "title": "Options"
      },
      "index": {
        "description": "datatype for specifying lab options including the paths to the kernel and filesystem used by netkit machines as well as the OpenFlow version of the reference switch software",
        "hierarchy": "Nettle Netkit LabUtil",
        "module": "Nettle.Netkit.LabUtil",
        "name": "Options",
        "normalized": "",
        "package": "nettle-netkit",
        "partial": "Options",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nettle-netkit/docs/Nettle-Netkit-LabUtil.html#t:Port",
      "description": {
        "fct-module": "Nettle.Netkit.LabUtil",
        "fct-package": "nettle-netkit",
        "fct-signature": "newtype",
        "fct-source": "src/Nettle-Netkit-LabUtil.html#Port",
        "fct-type": "newtype",
        "title": "Port"
      },
      "index": {
        "description": "",
        "hierarchy": "Nettle Netkit LabUtil",
        "module": "Nettle.Netkit.LabUtil",
        "name": "Port",
        "normalized": "",
        "package": "nettle-netkit",
        "partial": "Port",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nettle-netkit/docs/Nettle-Netkit-LabUtil.html#t:Switch",
      "description": {
        "fct-module": "Nettle.Netkit.LabUtil",
        "fct-package": "nettle-netkit",
        "fct-signature": "newtype",
        "fct-source": "src/Nettle-Netkit-LabUtil.html#Switch",
        "fct-type": "newtype",
        "title": "Switch"
      },
      "index": {
        "description": "",
        "hierarchy": "Nettle Netkit LabUtil",
        "module": "Nettle.Netkit.LabUtil",
        "name": "Switch",
        "normalized": "",
        "package": "nettle-netkit",
        "partial": "Switch",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nettle-netkit/docs/Nettle-Netkit-LabUtil.html#t:SwitchPort",
      "description": {
        "fct-module": "Nettle.Netkit.LabUtil",
        "fct-package": "nettle-netkit",
        "fct-signature": "type",
        "fct-source": "src/Nettle-Netkit-LabUtil.html#SwitchPort",
        "fct-type": "type",
        "title": "SwitchPort"
      },
      "index": {
        "description": "",
        "hierarchy": "Nettle Netkit LabUtil",
        "module": "Nettle.Netkit.LabUtil",
        "name": "SwitchPort",
        "normalized": "",
        "package": "nettle-netkit",
        "partial": "Switch Port",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nettle-netkit/docs/Nettle-Netkit-LabUtil.html#v:-35-",
      "description": {
        "fct-descr": "\u003cp\u003eDenotes a SwitchPort, i.e. a port on a switch.\n\u003c/p\u003e",
        "fct-module": "Nettle.Netkit.LabUtil",
        "fct-package": "nettle-netkit",
        "fct-signature": "Switch -\u003e Port -\u003e SwitchPort",
        "fct-source": "src/Nettle-Netkit-LabUtil.html#%23",
        "fct-type": "function",
        "title": "(#)"
      },
      "index": {
        "description": "Denotes SwitchPort i.e port on switch",
        "hierarchy": "Nettle Netkit LabUtil",
        "module": "Nettle.Netkit.LabUtil",
        "name": "(#) #",
        "normalized": "Switch-\u003ePort-\u003eSwitchPort",
        "package": "nettle-netkit",
        "partial": "",
        "signature": "Switch-\u003ePort-\u003eSwitchPort"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nettle-netkit/docs/Nettle-Netkit-LabUtil.html#v:-60--45--45--62-",
      "description": {
        "fct-descr": "\u003cp\u003eDenotes a link (switch-to-switch) connection.          \n\u003c/p\u003e",
        "fct-module": "Nettle.Netkit.LabUtil",
        "fct-package": "nettle-netkit",
        "fct-signature": "SwitchPort -\u003e SwitchPort -\u003e (SwitchPort, SwitchPort)",
        "fct-source": "src/Nettle-Netkit-LabUtil.html#%3C--%3E",
        "fct-type": "function",
        "title": "(\u003c--\u003e)"
      },
      "index": {
        "description": "Denotes link switch-to-switch connection",
        "hierarchy": "Nettle Netkit LabUtil",
        "module": "Nettle.Netkit.LabUtil",
        "name": "(\u003c--\u003e) \u003c--\u003e",
        "normalized": "SwitchPort-\u003eSwitchPort-\u003e(SwitchPort,SwitchPort)",
        "package": "nettle-netkit",
        "partial": "",
        "signature": "SwitchPort-\u003eSwitchPort-\u003e(SwitchPort,SwitchPort)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nettle-netkit/docs/Nettle-Netkit-LabUtil.html#v:-64--64-",
      "description": {
        "fct-descr": "\u003cp\u003eDenotes where a host is attached to the network of switches.\n\u003c/p\u003e",
        "fct-module": "Nettle.Netkit.LabUtil",
        "fct-package": "nettle-netkit",
        "fct-signature": "(Host, Interface) -\u003e SwitchPort -\u003e ((Host, Interface), SwitchPort)",
        "fct-source": "src/Nettle-Netkit-LabUtil.html#%40%40",
        "fct-type": "function",
        "title": "(@@)"
      },
      "index": {
        "description": "Denotes where host is attached to the network of switches",
        "hierarchy": "Nettle Netkit LabUtil",
        "module": "Nettle.Netkit.LabUtil",
        "name": "(@@) @@",
        "normalized": "(Host,Interface)-\u003eSwitchPort-\u003e((Host,Interface),SwitchPort)",
        "package": "nettle-netkit",
        "partial": "",
        "signature": "(Host,Interface)-\u003eSwitchPort-\u003e((Host,Interface),SwitchPort)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nettle-netkit/docs/Nettle-Netkit-LabUtil.html#v:Host",
      "description": {
        "fct-module": "Nettle.Netkit.LabUtil",
        "fct-package": "nettle-netkit",
        "fct-signature": "Host",
        "fct-source": "src/Nettle-Netkit-LabUtil.html#Host",
        "fct-type": "function",
        "title": "Host"
      },
      "index": {
        "description": "",
        "hierarchy": "Nettle Netkit LabUtil",
        "module": "Nettle.Netkit.LabUtil",
        "name": "Host",
        "normalized": "",
        "package": "nettle-netkit",
        "partial": "Host",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nettle-netkit/docs/Nettle-Netkit-LabUtil.html#v:Interface",
      "description": {
        "fct-module": "Nettle.Netkit.LabUtil",
        "fct-package": "nettle-netkit",
        "fct-signature": "Interface",
        "fct-source": "src/Nettle-Netkit-LabUtil.html#Interface",
        "fct-type": "function",
        "title": "Interface"
      },
      "index": {
        "description": "",
        "hierarchy": "Nettle Netkit LabUtil",
        "module": "Nettle.Netkit.LabUtil",
        "name": "Interface",
        "normalized": "",
        "package": "nettle-netkit",
        "partial": "Interface",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nettle-netkit/docs/Nettle-Netkit-LabUtil.html#v:LabConfig",
      "description": {
        "fct-module": "Nettle.Netkit.LabUtil",
        "fct-package": "nettle-netkit",
        "fct-signature": "LabConfig",
        "fct-source": "src/Nettle-Netkit-LabUtil.html#LabConfig",
        "fct-type": "function",
        "title": "LabConfig"
      },
      "index": {
        "description": "",
        "hierarchy": "Nettle Netkit LabUtil",
        "module": "Nettle.Netkit.LabUtil",
        "name": "LabConfig",
        "normalized": "",
        "package": "nettle-netkit",
        "partial": "Lab Config",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nettle-netkit/docs/Nettle-Netkit-LabUtil.html#v:Options",
      "description": {
        "fct-module": "Nettle.Netkit.LabUtil",
        "fct-package": "nettle-netkit",
        "fct-signature": "Options",
        "fct-source": "src/Nettle-Netkit-LabUtil.html#Options",
        "fct-type": "function",
        "title": "Options"
      },
      "index": {
        "description": "",
        "hierarchy": "Nettle Netkit LabUtil",
        "module": "Nettle.Netkit.LabUtil",
        "name": "Options",
        "normalized": "",
        "package": "nettle-netkit",
        "partial": "Options",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nettle-netkit/docs/Nettle-Netkit-LabUtil.html#v:Port",
      "description": {
        "fct-module": "Nettle.Netkit.LabUtil",
        "fct-package": "nettle-netkit",
        "fct-signature": "Port PortID",
        "fct-source": "src/Nettle-Netkit-LabUtil.html#Port",
        "fct-type": "function",
        "title": "Port"
      },
      "index": {
        "description": "",
        "hierarchy": "Nettle Netkit LabUtil",
        "module": "Nettle.Netkit.LabUtil",
        "name": "Port",
        "normalized": "",
        "package": "nettle-netkit",
        "partial": "Port",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nettle-netkit/docs/Nettle-Netkit-LabUtil.html#v:Switch",
      "description": {
        "fct-module": "Nettle.Netkit.LabUtil",
        "fct-package": "nettle-netkit",
        "fct-signature": "Switch SwitchID",
        "fct-source": "src/Nettle-Netkit-LabUtil.html#Switch",
        "fct-type": "function",
        "title": "Switch"
      },
      "index": {
        "description": "",
        "hierarchy": "Nettle Netkit LabUtil",
        "module": "Nettle.Netkit.LabUtil",
        "name": "Switch",
        "normalized": "",
        "package": "nettle-netkit",
        "partial": "Switch",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nettle-netkit/docs/Nettle-Netkit-LabUtil.html#v:Ver0_9_0",
      "description": {
        "fct-module": "Nettle.Netkit.LabUtil",
        "fct-package": "nettle-netkit",
        "fct-signature": "Ver0_9_0",
        "fct-source": "src/Nettle-Netkit-LabUtil.html#OpenFlowVersion",
        "fct-type": "function",
        "title": "Ver0_9_0"
      },
      "index": {
        "description": "",
        "hierarchy": "Nettle Netkit LabUtil",
        "module": "Nettle.Netkit.LabUtil",
        "name": "Ver0_9_0",
        "normalized": "",
        "package": "nettle-netkit",
        "partial": "Ver",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nettle-netkit/docs/Nettle-Netkit-LabUtil.html#v:Ver1_0_0",
      "description": {
        "fct-module": "Nettle.Netkit.LabUtil",
        "fct-package": "nettle-netkit",
        "fct-signature": "Ver1_0_0",
        "fct-source": "src/Nettle-Netkit-LabUtil.html#OpenFlowVersion",
        "fct-type": "function",
        "title": "Ver1_0_0"
      },
      "index": {
        "description": "",
        "hierarchy": "Nettle Netkit LabUtil",
        "module": "Nettle.Netkit.LabUtil",
        "name": "Ver1_0_0",
        "normalized": "",
        "package": "nettle-netkit",
        "partial": "Ver",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nettle-netkit/docs/Nettle-Netkit-LabUtil.html#v:controllerServerPort",
      "description": {
        "fct-descr": "\u003cp\u003eThe TCP port number at which the controller will listen for switch connections\n\u003c/p\u003e",
        "fct-module": "Nettle.Netkit.LabUtil",
        "fct-package": "nettle-netkit",
        "fct-signature": "ControllerTCPPort",
        "fct-source": "src/Nettle-Netkit-LabUtil.html#LabConfig",
        "fct-type": "function",
        "title": "controllerServerPort"
      },
      "index": {
        "description": "The TCP port number at which the controller will listen for switch connections",
        "hierarchy": "Nettle Netkit LabUtil",
        "module": "Nettle.Netkit.LabUtil",
        "name": "controllerServerPort",
        "normalized": "",
        "package": "nettle-netkit",
        "partial": "Server Port",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nettle-netkit/docs/Nettle-Netkit-LabUtil.html#v:getDefaultOptions",
      "description": {
        "fct-module": "Nettle.Netkit.LabUtil",
        "fct-package": "nettle-netkit",
        "fct-signature": "OpenFlowVersion -\u003e IO Options",
        "fct-source": "src/Nettle-Netkit-LabUtil.html#getDefaultOptions",
        "fct-type": "function",
        "title": "getDefaultOptions"
      },
      "index": {
        "description": "",
        "hierarchy": "Nettle Netkit LabUtil",
        "module": "Nettle.Netkit.LabUtil",
        "name": "getDefaultOptions",
        "normalized": "OpenFlowVersion-\u003eIO Options",
        "package": "nettle-netkit",
        "partial": "Default Options",
        "signature": "OpenFlowVersion-\u003eIO Options"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nettle-netkit/docs/Nettle-Netkit-LabUtil.html#v:host",
      "description": {
        "fct-module": "Nettle.Netkit.LabUtil",
        "fct-package": "nettle-netkit",
        "fct-signature": "Int -\u003e Host",
        "fct-source": "src/Nettle-Netkit-LabUtil.html#host",
        "fct-type": "function",
        "title": "host"
      },
      "index": {
        "description": "",
        "hierarchy": "Nettle Netkit LabUtil",
        "module": "Nettle.Netkit.LabUtil",
        "name": "host",
        "normalized": "Int-\u003eHost",
        "package": "nettle-netkit",
        "partial": "",
        "signature": "Int-\u003eHost"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nettle-netkit/docs/Nettle-Netkit-LabUtil.html#v:hostID",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Nettle.Netkit.LabUtil",
        "fct-package": "nettle-netkit",
        "fct-signature": "Int",
        "fct-source": "src/Nettle-Netkit-LabUtil.html#Host",
        "fct-type": "function",
        "title": "hostID"
      },
      "index": {
        "description": "",
        "hierarchy": "Nettle Netkit LabUtil",
        "module": "Nettle.Netkit.LabUtil",
        "name": "hostID",
        "normalized": "",
        "package": "nettle-netkit",
        "partial": "ID",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nettle-netkit/docs/Nettle-Netkit-LabUtil.html#v:hosts",
      "description": {
        "fct-descr": "\u003cp\u003eA description of where the host interfaces are attached to switches in the network\n\u003c/p\u003e",
        "fct-module": "Nettle.Netkit.LabUtil",
        "fct-package": "nettle-netkit",
        "fct-signature": "[((Host, Interface), SwitchPort)]",
        "fct-source": "src/Nettle-Netkit-LabUtil.html#LabConfig",
        "fct-type": "function",
        "title": "hosts"
      },
      "index": {
        "description": "description of where the host interfaces are attached to switches in the network",
        "hierarchy": "Nettle Netkit LabUtil",
        "module": "Nettle.Netkit.LabUtil",
        "name": "hosts",
        "normalized": "[((Host,Interface),SwitchPort)]",
        "package": "nettle-netkit",
        "partial": "",
        "signature": "[((Host,Interface),SwitchPort)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nettle-netkit/docs/Nettle-Netkit-LabUtil.html#v:interfaceID",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Nettle.Netkit.LabUtil",
        "fct-package": "nettle-netkit",
        "fct-signature": "Int",
        "fct-source": "src/Nettle-Netkit-LabUtil.html#Interface",
        "fct-type": "function",
        "title": "interfaceID"
      },
      "index": {
        "description": "",
        "hierarchy": "Nettle Netkit LabUtil",
        "module": "Nettle.Netkit.LabUtil",
        "name": "interfaceID",
        "normalized": "",
        "package": "nettle-netkit",
        "partial": "ID",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nettle-netkit/docs/Nettle-Netkit-LabUtil.html#v:interfaceIPAddress",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Nettle.Netkit.LabUtil",
        "fct-package": "nettle-netkit",
        "fct-signature": "IPAddress",
        "fct-source": "src/Nettle-Netkit-LabUtil.html#Interface",
        "fct-type": "function",
        "title": "interfaceIPAddress"
      },
      "index": {
        "description": "",
        "hierarchy": "Nettle Netkit LabUtil",
        "module": "Nettle.Netkit.LabUtil",
        "name": "interfaceIPAddress",
        "normalized": "",
        "package": "nettle-netkit",
        "partial": "IPAddress",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nettle-netkit/docs/Nettle-Netkit-LabUtil.html#v:links",
      "description": {
        "fct-descr": "\u003cp\u003eA description of how switches are connected\n\u003c/p\u003e",
        "fct-module": "Nettle.Netkit.LabUtil",
        "fct-package": "nettle-netkit",
        "fct-signature": "[(SwitchPort, SwitchPort)]",
        "fct-source": "src/Nettle-Netkit-LabUtil.html#LabConfig",
        "fct-type": "function",
        "title": "links"
      },
      "index": {
        "description": "description of how switches are connected",
        "hierarchy": "Nettle Netkit LabUtil",
        "module": "Nettle.Netkit.LabUtil",
        "name": "links",
        "normalized": "[(SwitchPort,SwitchPort)]",
        "package": "nettle-netkit",
        "partial": "",
        "signature": "[(SwitchPort,SwitchPort)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nettle-netkit/docs/Nettle-Netkit-LabUtil.html#v:makeLab",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003emakeLabWithDefaults path options lab\u003c/code\u003e is a command that writes the files and\n directories needed to run a Netkit lab that implements the description provided by \u003ccode\u003elab\u003c/code\u003e. \n It writes the files to directory \u003ccode\u003epath\u003c/code\u003e, and the options are specified by \u003ccode\u003eoptions\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Nettle.Netkit.LabUtil",
        "fct-package": "nettle-netkit",
        "fct-signature": "FilePath -\u003e Options -\u003e LabConfig -\u003e IO ()",
        "fct-source": "src/Nettle-Netkit-LabUtil.html#makeLab",
        "fct-type": "function",
        "title": "makeLab"
      },
      "index": {
        "description": "makeLabWithDefaults path options lab is command that writes the files and directories needed to run Netkit lab that implements the description provided by lab It writes the files to directory path and the options are specified by options",
        "hierarchy": "Nettle Netkit LabUtil",
        "module": "Nettle.Netkit.LabUtil",
        "name": "makeLab",
        "normalized": "FilePath-\u003eOptions-\u003eLabConfig-\u003eIO()",
        "package": "nettle-netkit",
        "partial": "Lab",
        "signature": "FilePath-\u003eOptions-\u003eLabConfig-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nettle-netkit/docs/Nettle-Netkit-LabUtil.html#v:makeLabWithDefaults",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003emakeLabWithDefaults path version lab\u003c/code\u003e is a command that writes the files and\n directories needed to run a Netkit lab that implements the description provided by \u003ccode\u003elab\u003c/code\u003e. \n It writes the files to directory \u003ccode\u003epath\u003c/code\u003e, and the switches will run the OpenFlow reference\n switch software for OpenFlow version \u003ccode\u003eversion\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Nettle.Netkit.LabUtil",
        "fct-package": "nettle-netkit",
        "fct-signature": "FilePath -\u003e OpenFlowVersion -\u003e LabConfig -\u003e IO ()",
        "fct-source": "src/Nettle-Netkit-LabUtil.html#makeLabWithDefaults",
        "fct-type": "function",
        "title": "makeLabWithDefaults"
      },
      "index": {
        "description": "makeLabWithDefaults path version lab is command that writes the files and directories needed to run Netkit lab that implements the description provided by lab It writes the files to directory path and the switches will run the OpenFlow reference switch software for OpenFlow version version",
        "hierarchy": "Nettle Netkit LabUtil",
        "module": "Nettle.Netkit.LabUtil",
        "name": "makeLabWithDefaults",
        "normalized": "FilePath-\u003eOpenFlowVersion-\u003eLabConfig-\u003eIO()",
        "package": "nettle-netkit",
        "partial": "Lab With Defaults",
        "signature": "FilePath-\u003eOpenFlowVersion-\u003eLabConfig-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nettle-netkit/docs/Nettle-Netkit-LabUtil.html#v:openFlowVersion",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Nettle.Netkit.LabUtil",
        "fct-package": "nettle-netkit",
        "fct-signature": "OpenFlowVersion",
        "fct-source": "src/Nettle-Netkit-LabUtil.html#Options",
        "fct-type": "function",
        "title": "openFlowVersion"
      },
      "index": {
        "description": "",
        "hierarchy": "Nettle Netkit LabUtil",
        "module": "Nettle.Netkit.LabUtil",
        "name": "openFlowVersion",
        "normalized": "",
        "package": "nettle-netkit",
        "partial": "Flow Version",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nettle-netkit/docs/Nettle-Netkit-LabUtil.html#v:pathToFileSystem",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Nettle.Netkit.LabUtil",
        "fct-package": "nettle-netkit",
        "fct-signature": "Maybe String",
        "fct-source": "src/Nettle-Netkit-LabUtil.html#Options",
        "fct-type": "function",
        "title": "pathToFileSystem"
      },
      "index": {
        "description": "",
        "hierarchy": "Nettle Netkit LabUtil",
        "module": "Nettle.Netkit.LabUtil",
        "name": "pathToFileSystem",
        "normalized": "",
        "package": "nettle-netkit",
        "partial": "To File System",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nettle-netkit/docs/Nettle-Netkit-LabUtil.html#v:pathToKernel",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Nettle.Netkit.LabUtil",
        "fct-package": "nettle-netkit",
        "fct-signature": "Maybe String",
        "fct-source": "src/Nettle-Netkit-LabUtil.html#Options",
        "fct-type": "function",
        "title": "pathToKernel"
      },
      "index": {
        "description": "",
        "hierarchy": "Nettle Netkit LabUtil",
        "module": "Nettle.Netkit.LabUtil",
        "name": "pathToKernel",
        "normalized": "",
        "package": "nettle-netkit",
        "partial": "To Kernel",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nettle-netkit/docs/Nettle-Netkit-LabUtil.html#v:port",
      "description": {
        "fct-module": "Nettle.Netkit.LabUtil",
        "fct-package": "nettle-netkit",
        "fct-signature": "PortID -\u003e Port",
        "fct-source": "src/Nettle-Netkit-LabUtil.html#port",
        "fct-type": "function",
        "title": "port"
      },
      "index": {
        "description": "",
        "hierarchy": "Nettle Netkit LabUtil",
        "module": "Nettle.Netkit.LabUtil",
        "name": "port",
        "normalized": "PortID-\u003ePort",
        "package": "nettle-netkit",
        "partial": "",
        "signature": "PortID-\u003ePort"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nettle-netkit/docs/Nettle-Netkit-LabUtil.html#v:switch",
      "description": {
        "fct-module": "Nettle.Netkit.LabUtil",
        "fct-package": "nettle-netkit",
        "fct-signature": "SwitchID -\u003e Switch",
        "fct-source": "src/Nettle-Netkit-LabUtil.html#switch",
        "fct-type": "function",
        "title": "switch"
      },
      "index": {
        "description": "",
        "hierarchy": "Nettle Netkit LabUtil",
        "module": "Nettle.Netkit.LabUtil",
        "name": "switch",
        "normalized": "SwitchID-\u003eSwitch",
        "package": "nettle-netkit",
        "partial": "",
        "signature": "SwitchID-\u003eSwitch"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nettle-netkit/docs/Nettle-Netkit-LabUtil.html#v:switches",
      "description": {
        "fct-descr": "\u003cp\u003eSwitches for this lab\n\u003c/p\u003e",
        "fct-module": "Nettle.Netkit.LabUtil",
        "fct-package": "nettle-netkit",
        "fct-signature": "[Switch]",
        "fct-source": "src/Nettle-Netkit-LabUtil.html#LabConfig",
        "fct-type": "function",
        "title": "switches"
      },
      "index": {
        "description": "Switches for this lab",
        "hierarchy": "Nettle Netkit LabUtil",
        "module": "Nettle.Netkit.LabUtil",
        "name": "switches",
        "normalized": "[Switch]",
        "package": "nettle-netkit",
        "partial": "",
        "signature": "[Switch]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nettle-netkit/docs/Nettle-Netkit-UnionFind.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA simple, purely functional implementation of union-find. \n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Nettle.Netkit.UnionFind",
        "fct-package": "nettle-netkit",
        "fct-signature": "module",
        "fct-source": "src/Nettle-Netkit-UnionFind.html",
        "fct-type": "module",
        "title": "UnionFind"
      },
      "index": {
        "description": "simple purely functional implementation of union-find",
        "hierarchy": "Nettle Netkit UnionFind",
        "module": "Nettle.Netkit.UnionFind",
        "name": "UnionFind",
        "normalized": "",
        "package": "nettle-netkit",
        "partial": "Union Find",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nettle-netkit/docs/Nettle-Netkit-UnionFind.html#t:Partition",
      "description": {
        "fct-module": "Nettle.Netkit.UnionFind",
        "fct-package": "nettle-netkit",
        "fct-signature": "type",
        "fct-source": "src/Nettle-Netkit-UnionFind.html#Partition",
        "fct-type": "type",
        "title": "Partition"
      },
      "index": {
        "description": "",
        "hierarchy": "Nettle Netkit UnionFind",
        "module": "Nettle.Netkit.UnionFind",
        "name": "Partition",
        "normalized": "",
        "package": "nettle-netkit",
        "partial": "Partition",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nettle-netkit/docs/Nettle-Netkit-UnionFind.html#v:discretePartition",
      "description": {
        "fct-module": "Nettle.Netkit.UnionFind",
        "fct-package": "nettle-netkit",
        "fct-signature": "[a] -\u003e Partition a",
        "fct-source": "src/Nettle-Netkit-UnionFind.html#discretePartition",
        "fct-type": "function",
        "title": "discretePartition"
      },
      "index": {
        "description": "",
        "hierarchy": "Nettle Netkit UnionFind",
        "module": "Nettle.Netkit.UnionFind",
        "name": "discretePartition",
        "normalized": "[a]-\u003ePartition a",
        "package": "nettle-netkit",
        "partial": "Partition",
        "signature": "[a]-\u003ePartition a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nettle-netkit/docs/Nettle-Netkit-UnionFind.html#v:finestPartition",
      "description": {
        "fct-module": "Nettle.Netkit.UnionFind",
        "fct-package": "nettle-netkit",
        "fct-signature": "[(a, a)] -\u003e Partition a",
        "fct-source": "src/Nettle-Netkit-UnionFind.html#finestPartition",
        "fct-type": "function",
        "title": "finestPartition"
      },
      "index": {
        "description": "",
        "hierarchy": "Nettle Netkit UnionFind",
        "module": "Nettle.Netkit.UnionFind",
        "name": "finestPartition",
        "normalized": "[(a,a)]-\u003ePartition a",
        "package": "nettle-netkit",
        "partial": "Partition",
        "signature": "[(a,a)]-\u003ePartition a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nettle-netkit/docs/Nettle-Netkit-UnionFind.html#v:unionParts",
      "description": {
        "fct-module": "Nettle.Netkit.UnionFind",
        "fct-package": "nettle-netkit",
        "fct-signature": "a -\u003e a -\u003e Partition a -\u003e Partition a",
        "fct-source": "src/Nettle-Netkit-UnionFind.html#unionParts",
        "fct-type": "function",
        "title": "unionParts"
      },
      "index": {
        "description": "",
        "hierarchy": "Nettle Netkit UnionFind",
        "module": "Nettle.Netkit.UnionFind",
        "name": "unionParts",
        "normalized": "a-\u003ea-\u003ePartition a-\u003ePartition a",
        "package": "nettle-netkit",
        "partial": "Parts",
        "signature": "a-\u003ea-\u003ePartition a-\u003ePartition a"
      }
    }
  }
]