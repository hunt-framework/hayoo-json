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
        "word": "azure-service-api"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Azure.ServiceManagement",
          "name": "ServiceManagement",
          "package": "azure-service-api",
          "source": "src/Network-Azure-ServiceManagement.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Network Azure ServiceManagement",
          "module": "Network.Azure.ServiceManagement",
          "name": "ServiceManagement",
          "package": "azure-service-api",
          "partial": "Service Management",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/azure-service-api/docs/Network-Azure-ServiceManagement.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAzure setup \n\u003c/p\u003e\u003cp\u003eThe documentation of \u003ca\u003edistributed-process-azure\u003c/a\u003e explains in detail how\n to obtain the SSL client certificate and the private key for your Azure\n account.\n\u003c/p\u003e\u003cp\u003eSee also \u003ccode\u003e\u003ca\u003eazureSetup\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.Azure.ServiceManagement",
          "name": "AzureSetup",
          "package": "azure-service-api",
          "source": "src/Network-Azure-ServiceManagement.html#AzureSetup",
          "type": "data"
        },
        "index": {
          "description": "Azure setup The documentation of distributed-process-azure explains in detail how to obtain the SSL client certificate and the private key for your Azure account See also azureSetup",
          "hierarchy": "Network Azure ServiceManagement",
          "module": "Network.Azure.ServiceManagement",
          "name": "AzureSetup",
          "package": "azure-service-api",
          "partial": "Azure Setup",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/azure-service-api/docs/Network-Azure-ServiceManagement.html#t:AzureSetup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA cloud service is a bunch of virtual machines that are part of the same\n network (i.e., can talk to each other directly using standard TCP \n connections).\n\u003c/p\u003e",
          "module": "Network.Azure.ServiceManagement",
          "name": "CloudService",
          "package": "azure-service-api",
          "source": "src/Network-Azure-ServiceManagement.html#CloudService",
          "type": "data"
        },
        "index": {
          "description": "cloud service is bunch of virtual machines that are part of the same network i.e can talk to each other directly using standard TCP connections",
          "hierarchy": "Network Azure ServiceManagement",
          "module": "Network.Azure.ServiceManagement",
          "name": "CloudService",
          "package": "azure-service-api",
          "partial": "Cloud Service",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/azure-service-api/docs/Network-Azure-ServiceManagement.html#t:CloudService"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGlobally accessible endpoint for a virtual machine\n\u003c/p\u003e",
          "module": "Network.Azure.ServiceManagement",
          "name": "Endpoint",
          "package": "azure-service-api",
          "source": "src/Network-Azure-ServiceManagement.html#Endpoint",
          "type": "data"
        },
        "index": {
          "description": "Globally accessible endpoint for virtual machine",
          "hierarchy": "Network Azure ServiceManagement",
          "module": "Network.Azure.ServiceManagement",
          "name": "Endpoint",
          "package": "azure-service-api",
          "partial": "Endpoint",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/azure-service-api/docs/Network-Azure-ServiceManagement.html#t:Endpoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVirtual machine\n\u003c/p\u003e",
          "module": "Network.Azure.ServiceManagement",
          "name": "VirtualMachine",
          "package": "azure-service-api",
          "source": "src/Network-Azure-ServiceManagement.html#VirtualMachine",
          "type": "data"
        },
        "index": {
          "description": "Virtual machine",
          "hierarchy": "Network Azure ServiceManagement",
          "module": "Network.Azure.ServiceManagement",
          "name": "VirtualMachine",
          "package": "azure-service-api",
          "partial": "Virtual Machine",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/azure-service-api/docs/Network-Azure-ServiceManagement.html#t:VirtualMachine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Azure.ServiceManagement",
          "name": "AzureSetup",
          "package": "azure-service-api",
          "signature": "AzureSetup",
          "source": "src/Network-Azure-ServiceManagement.html#AzureSetup",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Azure ServiceManagement",
          "module": "Network.Azure.ServiceManagement",
          "name": "AzureSetup",
          "package": "azure-service-api",
          "partial": "Azure Setup",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/azure-service-api/docs/Network-Azure-ServiceManagement.html#v:AzureSetup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInitialize Azure\n\u003c/p\u003e",
          "module": "Network.Azure.ServiceManagement",
          "name": "azureSetup",
          "package": "azure-service-api",
          "signature": "String-\u003e String-\u003e String-\u003e IO AzureSetup",
          "type": "function"
        },
        "index": {
          "description": "Initialize Azure",
          "hierarchy": "Network Azure ServiceManagement",
          "module": "Network.Azure.ServiceManagement",
          "name": "azureSetup",
          "normalized": "String-\u003eString-\u003eString-\u003eIO AzureSetup",
          "package": "azure-service-api",
          "partial": "Setup",
          "signature": "String-\u003eString-\u003eString-\u003eIO AzureSetup",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/azure-service-api/docs/Network-Azure-ServiceManagement.html#v:azureSetup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBase URL (generally \u003ca\u003ehttps://management.core.windows.net\u003c/a\u003e)\n\u003c/p\u003e",
          "module": "Network.Azure.ServiceManagement",
          "name": "baseUrl",
          "package": "azure-service-api",
          "signature": "String",
          "source": "src/Network-Azure-ServiceManagement.html#AzureSetup",
          "type": "function"
        },
        "index": {
          "description": "Base URL generally https management.core.windows.net",
          "hierarchy": "Network Azure ServiceManagement",
          "module": "Network.Azure.ServiceManagement",
          "name": "baseUrl",
          "package": "azure-service-api",
          "partial": "Url",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/azure-service-api/docs/Network-Azure-ServiceManagement.html#v:baseUrl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSSL client certificate\n\u003c/p\u003e",
          "module": "Network.Azure.ServiceManagement",
          "name": "certificate",
          "package": "azure-service-api",
          "signature": "X509",
          "source": "src/Network-Azure-ServiceManagement.html#AzureSetup",
          "type": "function"
        },
        "index": {
          "description": "SSL client certificate",
          "hierarchy": "Network Azure ServiceManagement",
          "module": "Network.Azure.ServiceManagement",
          "name": "certificate",
          "package": "azure-service-api",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/azure-service-api/docs/Network-Azure-ServiceManagement.html#v:certificate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eName of the service.\n\u003c/p\u003e",
          "module": "Network.Azure.ServiceManagement",
          "name": "cloudServiceName",
          "package": "azure-service-api",
          "signature": "CloudService -\u003e String",
          "source": "src/Network-Azure-ServiceManagement.html#cloudServiceName",
          "type": "function"
        },
        "index": {
          "description": "Name of the service",
          "hierarchy": "Network Azure ServiceManagement",
          "module": "Network.Azure.ServiceManagement",
          "name": "cloudServiceName",
          "normalized": "CloudService-\u003eString",
          "package": "azure-service-api",
          "partial": "Service Name",
          "signature": "CloudService-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/azure-service-api/docs/Network-Azure-ServiceManagement.html#v:cloudServiceName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVirtual machines that are part of this cloud service.\n\u003c/p\u003e",
          "module": "Network.Azure.ServiceManagement",
          "name": "cloudServiceVMs",
          "package": "azure-service-api",
          "signature": "CloudService -\u003e [VirtualMachine]",
          "source": "src/Network-Azure-ServiceManagement.html#cloudServiceVMs",
          "type": "function"
        },
        "index": {
          "description": "Virtual machines that are part of this cloud service",
          "hierarchy": "Network Azure ServiceManagement",
          "module": "Network.Azure.ServiceManagement",
          "name": "cloudServiceVMs",
          "normalized": "CloudService-\u003e[VirtualMachine]",
          "package": "azure-service-api",
          "partial": "Service VMs",
          "signature": "CloudService-\u003e[VirtualMachine]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/azure-service-api/docs/Network-Azure-ServiceManagement.html#v:cloudServiceVMs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind available cloud services \n\u003c/p\u003e",
          "module": "Network.Azure.ServiceManagement",
          "name": "cloudServices",
          "package": "azure-service-api",
          "signature": "AzureSetup -\u003e IO [CloudService]",
          "source": "src/Network-Azure-ServiceManagement.html#cloudServices",
          "type": "function"
        },
        "index": {
          "description": "Find available cloud services",
          "hierarchy": "Network Azure ServiceManagement",
          "module": "Network.Azure.ServiceManagement",
          "name": "cloudServices",
          "normalized": "AzureSetup-\u003eIO[CloudService]",
          "package": "azure-service-api",
          "partial": "Services",
          "signature": "AzureSetup-\u003eIO[CloudService]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/azure-service-api/docs/Network-Azure-ServiceManagement.html#v:cloudServices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eName of the endpoint (typical example: \u003ccode\u003eSSH\u003c/code\u003e)\n\u003c/p\u003e",
          "module": "Network.Azure.ServiceManagement",
          "name": "endpointName",
          "package": "azure-service-api",
          "signature": "Endpoint -\u003e String",
          "source": "src/Network-Azure-ServiceManagement.html#endpointName",
          "type": "function"
        },
        "index": {
          "description": "Name of the endpoint typical example SSH",
          "hierarchy": "Network Azure ServiceManagement",
          "module": "Network.Azure.ServiceManagement",
          "name": "endpointName",
          "normalized": "Endpoint-\u003eString",
          "package": "azure-service-api",
          "partial": "Name",
          "signature": "Endpoint-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/azure-service-api/docs/Network-Azure-ServiceManagement.html#v:endpointName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePort number (typical examples are 22 or high numbered ports such as 53749) \n\u003c/p\u003e",
          "module": "Network.Azure.ServiceManagement",
          "name": "endpointPort",
          "package": "azure-service-api",
          "signature": "Endpoint -\u003e String",
          "source": "src/Network-Azure-ServiceManagement.html#endpointPort",
          "type": "function"
        },
        "index": {
          "description": "Port number typical examples are or high numbered ports such as",
          "hierarchy": "Network Azure ServiceManagement",
          "module": "Network.Azure.ServiceManagement",
          "name": "endpointPort",
          "normalized": "Endpoint-\u003eString",
          "package": "azure-service-api",
          "partial": "Port",
          "signature": "Endpoint-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/azure-service-api/docs/Network-Azure-ServiceManagement.html#v:endpointPort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVirtual IP address (that is, globally accessible IP address).\n\u003c/p\u003e\u003cp\u003eThis corresponds to the IP address associated with the Cloud Service\n (i.e., that would be returned by a DNS lookup for \u003ccode\u003ename.cloudapp.net\u003c/code\u003e, \n where \u003ccode\u003ename\u003c/code\u003e is the name of the Cloud Service).\n\u003c/p\u003e",
          "module": "Network.Azure.ServiceManagement",
          "name": "endpointVip",
          "package": "azure-service-api",
          "signature": "Endpoint -\u003e String",
          "source": "src/Network-Azure-ServiceManagement.html#endpointVip",
          "type": "function"
        },
        "index": {
          "description": "Virtual IP address that is globally accessible IP address This corresponds to the IP address associated with the Cloud Service i.e that would be returned by DNS lookup for name.cloudapp.net where name is the name of the Cloud Service",
          "hierarchy": "Network Azure ServiceManagement",
          "module": "Network.Azure.ServiceManagement",
          "name": "endpointVip",
          "normalized": "Endpoint-\u003eString",
          "package": "azure-service-api",
          "partial": "Vip",
          "signature": "Endpoint-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/azure-service-api/docs/Network-Azure-ServiceManagement.html#v:endpointVip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRSA private key\n\u003c/p\u003e",
          "module": "Network.Azure.ServiceManagement",
          "name": "privateKey",
          "package": "azure-service-api",
          "signature": "PrivateKey",
          "source": "src/Network-Azure-ServiceManagement.html#AzureSetup",
          "type": "function"
        },
        "index": {
          "description": "RSA private key",
          "hierarchy": "Network Azure ServiceManagement",
          "module": "Network.Azure.ServiceManagement",
          "name": "privateKey",
          "package": "azure-service-api",
          "partial": "Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/azure-service-api/docs/Network-Azure-ServiceManagement.html#v:privateKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAzure subscription ID\n\u003c/p\u003e",
          "module": "Network.Azure.ServiceManagement",
          "name": "subscriptionId",
          "package": "azure-service-api",
          "signature": "String",
          "source": "src/Network-Azure-ServiceManagement.html#AzureSetup",
          "type": "function"
        },
        "index": {
          "description": "Azure subscription ID",
          "hierarchy": "Network Azure ServiceManagement",
          "module": "Network.Azure.ServiceManagement",
          "name": "subscriptionId",
          "package": "azure-service-api",
          "partial": "Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/azure-service-api/docs/Network-Azure-ServiceManagement.html#v:subscriptionId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGlobally accessible endpoints to the virtual machine\n\u003c/p\u003e",
          "module": "Network.Azure.ServiceManagement",
          "name": "vmInputEndpoints",
          "package": "azure-service-api",
          "signature": "VirtualMachine -\u003e [Endpoint]",
          "source": "src/Network-Azure-ServiceManagement.html#vmInputEndpoints",
          "type": "function"
        },
        "index": {
          "description": "Globally accessible endpoints to the virtual machine",
          "hierarchy": "Network Azure ServiceManagement",
          "module": "Network.Azure.ServiceManagement",
          "name": "vmInputEndpoints",
          "normalized": "VirtualMachine-\u003e[Endpoint]",
          "package": "azure-service-api",
          "partial": "Input Endpoints",
          "signature": "VirtualMachine-\u003e[Endpoint]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/azure-service-api/docs/Network-Azure-ServiceManagement.html#v:vmInputEndpoints"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003cem\u003einternal\u003c/em\u003e IP address of the virtual machine (that is, the \n IP address on the Cloud Service). For the globally accessible IP\n address see \u003ccode\u003e\u003ca\u003evmInputEndpoints\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.Azure.ServiceManagement",
          "name": "vmIpAddress",
          "package": "azure-service-api",
          "signature": "VirtualMachine -\u003e String",
          "source": "src/Network-Azure-ServiceManagement.html#vmIpAddress",
          "type": "function"
        },
        "index": {
          "description": "The internal IP address of the virtual machine that is the IP address on the Cloud Service For the globally accessible IP address see vmInputEndpoints",
          "hierarchy": "Network Azure ServiceManagement",
          "module": "Network.Azure.ServiceManagement",
          "name": "vmIpAddress",
          "normalized": "VirtualMachine-\u003eString",
          "package": "azure-service-api",
          "partial": "Ip Address",
          "signature": "VirtualMachine-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/azure-service-api/docs/Network-Azure-ServiceManagement.html#v:vmIpAddress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eName of the virtual machine.\n\u003c/p\u003e",
          "module": "Network.Azure.ServiceManagement",
          "name": "vmName",
          "package": "azure-service-api",
          "signature": "VirtualMachine -\u003e String",
          "source": "src/Network-Azure-ServiceManagement.html#vmName",
          "type": "function"
        },
        "index": {
          "description": "Name of the virtual machine",
          "hierarchy": "Network Azure ServiceManagement",
          "module": "Network.Azure.ServiceManagement",
          "name": "vmName",
          "normalized": "VirtualMachine-\u003eString",
          "package": "azure-service-api",
          "partial": "Name",
          "signature": "VirtualMachine-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/azure-service-api/docs/Network-Azure-ServiceManagement.html#v:vmName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind the endpoint with name \u003ccode\u003eSSH\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.Azure.ServiceManagement",
          "name": "vmSshEndpoint",
          "package": "azure-service-api",
          "signature": "VirtualMachine -\u003e Maybe Endpoint",
          "source": "src/Network-Azure-ServiceManagement.html#vmSshEndpoint",
          "type": "function"
        },
        "index": {
          "description": "Find the endpoint with name SSH",
          "hierarchy": "Network Azure ServiceManagement",
          "module": "Network.Azure.ServiceManagement",
          "name": "vmSshEndpoint",
          "normalized": "VirtualMachine-\u003eMaybe Endpoint",
          "package": "azure-service-api",
          "partial": "Ssh Endpoint",
          "signature": "VirtualMachine-\u003eMaybe Endpoint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/azure-service-api/docs/Network-Azure-ServiceManagement.html#v:vmSshEndpoint"
      }
    }
  ]
]