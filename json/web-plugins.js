[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/web-plugins/docs/Web-Plugins-Core.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003ccode\u003eweb-plugins\u003c/code\u003e is a very general purpose plugin system for web applications.\n\u003c/p\u003e\u003cp\u003eIt provides facilities for loading multiple plugins and a single\ntheme. In the future, the \u003ccode\u003eweb-plugins-dynamic\u003c/code\u003e library will allow\nplugins and themes to be loaded and unloaded at runtime.\n\u003c/p\u003e\u003cp\u003eA key aspect of \u003ccode\u003eweb-plugins\u003c/code\u003e is that all plugins for a particular system\nhave the same type signature. This is what makes it possible to load\nnew plugins at runtime.\n\u003c/p\u003e\u003cp\u003eThis plugin system is not tied to any particular web server framework\nor template engine.\n\u003c/p\u003e\u003cp\u003eThere are four steps to using \u003ccode\u003eweb-plugins\u003c/code\u003e:\n\u003c/p\u003e\u003col\u003e\u003cli\u003e initialize the plugins system\n\u003c/li\u003e\u003cli\u003e initialize the individual plugins\n\u003c/li\u003e\u003cli\u003e set the theme\n\u003c/li\u003e\u003cli\u003e route incoming requests to the correct plugin\n\u003c/li\u003e\u003c/ol\u003e\u003cp\u003eTo use \u003ccode\u003eweb-plugins\u003c/code\u003e, you first initialize a \u003ccode\u003e\u003ca\u003ePlugins\u003c/a\u003e\u003c/code\u003e handle.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ePlugins\u003c/a\u003e\u003c/code\u003e handle is heavily parameterized:\n\u003c/p\u003e\u003cpre\u003e newtype Plugins theme m hook config st = ...\n\u003c/pre\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003etheme\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e is (not suprisingly) the type for you theme.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003em\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e is the monad that your plugin handlers will run in. (e.g., \u003ccode\u003eServerPart\u003c/code\u003e)\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003ehook\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e is additional actions that should be called after the plugins have been initialized\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003econfig\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e provides read-only configuration information\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003est\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e provides mutable state that is shared between all plugins. (There is a separate mechanism for plugin-local state.)\n\u003c/dd\u003e\u003c/dl\u003e\u003cp\u003eThe plugin system is typically started by using \u003ccode\u003e\u003ca\u003ewithPlugins\u003c/a\u003e\u003c/code\u003e. Though,\nif needed, you can call \u003ccode\u003e\u003ca\u003einitPlugins\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003edestroyPlugins\u003c/a\u003e\u003c/code\u003e instead.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ePlugin\u003c/a\u003e\u003c/code\u003e record is used to create a plugin:\n\u003c/p\u003e\u003cpre\u003e\ndata Plugin url theme n hook config st = Plugin\n    { pluginName         :: PluginName\n    , pluginInit         :: Plugins theme n hook config st -\u003e IO (Maybe Text)\n    , pluginDepends      :: [PluginName]   -- ^ plugins which much be initialized before this one can be\n    , pluginToPathInfo   :: url -\u003e Text\n    , pluginPostHook     :: hook\n    }\n\u003c/pre\u003e\u003cp\u003eYou will note that it has the same type parameters as \u003ccode\u003e\u003ca\u003ePlugins\u003c/a\u003e\u003c/code\u003e plus an additional \u003ccode\u003eurl\u003c/code\u003e parameter.\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003epluginName\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e is a simple \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e value which should uniquely identify the plugin.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003epluginInit\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e will be called automatically when the plugin is loaded.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003epluginDepends\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e is a list of plugins which must be loaded before this plugin can be initialized.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003epluginToPathInfo\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e is the function that is used to convert the \u003ccode\u003eurl\u003c/code\u003e type to an actual URL.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003epluginPostHook\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e is the hook that you want called after the system has been initialized.\n\u003c/dd\u003e\u003c/dl\u003e\u003cp\u003eA \u003ccode\u003e\u003ca\u003ePlugin\u003c/a\u003e\u003c/code\u003e is initialized using the \u003ccode\u003e\u003ca\u003einitPlugin\u003c/a\u003e\u003c/code\u003e function (which calls the \u003ccode\u003e\u003ca\u003epluginInit\u003c/a\u003e\u003c/code\u003e field among other things).\n\u003c/p\u003e\u003cpre\u003e\n-- | initialize a plugin\ninitPlugin :: (Typeable url) =\u003e\n              Plugins theme n hook config st    -- ^ \u003ccode\u003e\u003ca\u003ePlugins\u003c/a\u003e\u003c/code\u003e handle\n           -\u003e Text                              -- ^ base URI to prepend to generated URLs\n           -\u003e Plugin url theme n hook config st -- ^ \u003ccode\u003e\u003ca\u003ePlugin\u003c/a\u003e\u003c/code\u003e to initialize\n           -\u003e IO (Maybe Text)                   -- ^ possible error message\n\u003c/pre\u003e\u003cp\u003eA lot of the magic happens in the \u003ccode\u003e\u003ca\u003epluginInit\u003c/a\u003e\u003c/code\u003e function in the\n\u003ccode\u003e\u003ca\u003ePlugin\u003c/a\u003e\u003c/code\u003e record. Let's look at a simple example. We will use the\nfollowing type aliases to parameterize the \u003ccode\u003e\u003ca\u003ePlugins\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ePlugin\u003c/a\u003e\u003c/code\u003e\ntype:\n\u003c/p\u003e\u003cpre\u003e\ntype ExamplePlugins    = Plugins    Theme (ServerPart Response) (IO ()) () ()\ntype ExamplePlugin url = Plugin url Theme (ServerPart Response) (IO ()) () ()\n\u003c/pre\u003e\u003cp\u003eHere is the initialization function for \u003ccode\u003emyPlugin\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e\nmyInit :: ExamplePlugins -\u003e IO (Maybe Text)\nmyInit plugins =\n    do (Just clckShowFn) \u003c- getPluginRouteFn plugins (pluginName clckPlugin)\n       (Just myShowFn)   \u003c- getPluginRouteFn plugins (pluginName myPlugin)\n       acid \u003c- liftIO $ openLocalState MyState\n       addCleanup plugins OnNormal  (putStrLn \u003ca\u003emyPlugin: normal shutdown\u003c/a\u003e  \u003e\u003e createCheckpointAndClose acid)\n       addCleanup plugins OnFailure (putStrLn \u003ca\u003emyPlugin: failure shutdown\u003c/a\u003e \u003e\u003e closeAcidState acid)\n       addHandler plugins (pluginName myPlugin) (myPluginHandler acid clckShowFn myShowFn)\n       putStrLn \u003ca\u003emyInit completed.\u003c/a\u003e\n       return Nothing\n\u003c/pre\u003e\u003cp\u003eThere are a few things to note here:\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003egetPluginRouteFn\u003c/a\u003e\u003c/code\u003e is used to retrieve the the URL route showing\nfunction for various plugins. In this case, the plugin needs to\ngenerate routes for itself and also routes in the \u003ccode\u003eclckPlugin\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNext it opens up an \u003ccode\u003eAcidState\u003c/code\u003e. It then registers two different\ncleanup functions. The \u003ccode\u003e\u003ca\u003eOnNormal\u003c/a\u003e\u003c/code\u003e cleanup will only be called if the\nsystem is shutdown normally. The \u003ccode\u003e\u003ca\u003eOnFailure\u003c/a\u003e\u003c/code\u003e will be called if the\nsystem is shutdown due to some error condition. If we wanted to\nperform the same shutdown procedure regardless of termination cause,\nwe could use the \u003ccode\u003e\u003ca\u003eAlways\u003c/a\u003e\u003c/code\u003e condition instead.\n\u003c/p\u003e\u003cp\u003ethe \u003ccode\u003e\u003ca\u003eaddHandler\u003c/a\u003e\u003c/code\u003e then registers the function which route requests for\nthis plugin:\n\u003c/p\u003e\u003cpre\u003e\naddHandler :: MonadIO m =\u003e\n              Plugins theme n hook config st\n            -\u003e PluginName -- plugin name / prefix\n            -\u003e (Plugins theme n hook config st -\u003e [Text] -\u003e n)\n            -\u003e m ()\n\u003c/pre\u003e\u003cp\u003eEach plugin should be registered using a unique prefix. When\nthe handler is called it will be passed the \u003ccode\u003e\u003ca\u003ePlugins\u003c/a\u003e\u003c/code\u003e handle and a\nlist of \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e values. In practice, the list \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e values is\ntypically the unconsumed path segments from the URL.\n\u003c/p\u003e\u003cp\u003eSetting the theme is done by calling the \u003ccode\u003e\u003ca\u003esetTheme\u003c/a\u003e\u003c/code\u003e function:\n\u003c/p\u003e\u003cpre\u003e\n-- | set the current \u003ccode\u003etheme\u003c/code\u003e\nsetTheme :: (MonadIO m) =\u003e\n            Plugins theme n hook config st\n         -\u003e Maybe theme\n         -\u003e m ()\n\u003c/pre\u003e\u003cp\u003eSetting the theme to \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e will unload the theme but not load a new one.\n\u003c/p\u003e\u003cp\u003eIncoming requests are routed to the various plugins via the \u003ccode\u003e\u003ca\u003eserve\u003c/a\u003e\u003c/code\u003e function:\n\u003c/p\u003e\u003cpre\u003e\n-- | serve requests using the \u003ccode\u003e\u003ca\u003ePlugins\u003c/a\u003e\u003c/code\u003e handle\nserve :: Plugins theme n hook config st -- ^ \u003ccode\u003e\u003ca\u003ePlugins\u003c/a\u003e\u003c/code\u003e handle\n      -\u003e PluginName -- ^ name of the plugin to handle this request\n      -\u003e [Text]     -- ^ unconsume path segments to pass to handler\n      -\u003e IO (Either String n)\n\u003c/pre\u003e\u003cp\u003eThe expected usage is that you are going to have request with a url such as:\n\u003c/p\u003e\u003cpre\u003e /my/extra/path/segments\n\u003c/pre\u003e\u003cp\u003eThe code will treat the first path segment as the plugin to be called and pass in the remaining segments as the \u003ccode\u003e[Text]\u003c/code\u003e arguments:\n\u003c/p\u003e\u003cpre\u003e serve plugins \"my\" [\"extra\",\"path\",\"segments\"]\n\u003c/pre\u003e\u003cp\u003ethe \u003ccode\u003e\u003ca\u003eserve\u003c/a\u003e\u003c/code\u003e function itself knows nothing about the web -- it is\nframework agnostic. Here is a simple \u003ccode\u003emain\u003c/code\u003e function that shows how to\ntie everything together:\n\u003c/p\u003e\u003cpre\u003e main :: IO ()\n main =\n   withPlugins () () $ \\plugins -\u003e\n     do initPlugin plugins \"\" clckPlugin\n        initPlugin plugins \"\" myPlugin\n        setTheme plugins (Just theme)\n        hooks \u003c- getPostHooks plugins\n        sequence_ hooks\n        simpleHTTP nullConf $ path $ \\p -\u003e do\n          ps \u003c- fmap rqPaths askRq\n          r \u003c- liftIO $ serve plugins p (map Text.pack ps)\n          case r of\n            (Left e) -\u003e internalServerError $ toResponse e\n            (Right sp) -\u003e sp\n\u003c/pre\u003e\u003cp\u003eIn this example, we do not use the \u003ccode\u003econfig\u003c/code\u003e or \u003ccode\u003est\u003c/code\u003e parameters so we just set them to \u003ccode\u003e()\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote that we are responsible for calling the hooks after we have initialized all the plugins.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Web.Plugins.Core",
        "fct-package": "web-plugins",
        "fct-signature": "module",
        "fct-source": "src/Web-Plugins-Core.html",
        "fct-type": "module",
        "title": "Core"
      },
      "index": {
        "description": "web-plugins is very general purpose plugin system for web applications It provides facilities for loading multiple plugins and single theme In the future the web-plugins-dynamic library will allow plugins and themes to be loaded and unloaded at runtime key aspect of web-plugins is that all plugins for particular system have the same type signature This is what makes it possible to load new plugins at runtime This plugin system is not tied to any particular web server framework or template engine There are four steps to using web-plugins initialize the plugins system initialize the individual plugins set the theme route incoming requests to the correct plugin To use web-plugins you first initialize Plugins handle The Plugins handle is heavily parameterized newtype Plugins theme hook config st theme is not suprisingly the type for you theme is the monad that your plugin handlers will run in e.g ServerPart hook is additional actions that should be called after the plugins have been initialized config provides read-only configuration information st provides mutable state that is shared between all plugins There is separate mechanism for plugin-local state The plugin system is typically started by using withPlugins Though if needed you can call initPlugins and destroyPlugins instead The Plugin record is used to create plugin data Plugin url theme hook config st Plugin pluginName PluginName pluginInit Plugins theme hook config st IO Maybe Text pluginDepends PluginName plugins which much be initialized before this one can be pluginToPathInfo url Text pluginPostHook hook You will note that it has the same type parameters as Plugins plus an additional url parameter pluginName is simple Text value which should uniquely identify the plugin pluginInit will be called automatically when the plugin is loaded pluginDepends is list of plugins which must be loaded before this plugin can be initialized pluginToPathInfo is the function that is used to convert the url type to an actual URL pluginPostHook is the hook that you want called after the system has been initialized Plugin is initialized using the initPlugin function which calls the pluginInit field among other things initialize plugin initPlugin Typeable url Plugins theme hook config st Plugins handle Text base URI to prepend to generated URLs Plugin url theme hook config st Plugin to initialize IO Maybe Text possible error message lot of the magic happens in the pluginInit function in the Plugin record Let look at simple example We will use the following type aliases to parameterize the Plugins and Plugin type type ExamplePlugins Plugins Theme ServerPart Response IO type ExamplePlugin url Plugin url Theme ServerPart Response IO Here is the initialization function for myPlugin myInit ExamplePlugins IO Maybe Text myInit plugins do Just clckShowFn getPluginRouteFn plugins pluginName clckPlugin Just myShowFn getPluginRouteFn plugins pluginName myPlugin acid liftIO openLocalState MyState addCleanup plugins OnNormal putStrLn myPlugin normal shutdown createCheckpointAndClose acid addCleanup plugins OnFailure putStrLn myPlugin failure shutdown closeAcidState acid addHandler plugins pluginName myPlugin myPluginHandler acid clckShowFn myShowFn putStrLn myInit completed return Nothing There are few things to note here getPluginRouteFn is used to retrieve the the URL route showing function for various plugins In this case the plugin needs to generate routes for itself and also routes in the clckPlugin Next it opens up an AcidState It then registers two different cleanup functions The OnNormal cleanup will only be called if the system is shutdown normally The OnFailure will be called if the system is shutdown due to some error condition If we wanted to perform the same shutdown procedure regardless of termination cause we could use the Always condition instead the addHandler then registers the function which route requests for this plugin addHandler MonadIO Plugins theme hook config st PluginName plugin name prefix Plugins theme hook config st Text Each plugin should be registered using unique prefix When the handler is called it will be passed the Plugins handle and list of Text values In practice the list Text values is typically the unconsumed path segments from the URL Setting the theme is done by calling the setTheme function set the current theme setTheme MonadIO Plugins theme hook config st Maybe theme Setting the theme to Nothing will unload the theme but not load new one Incoming requests are routed to the various plugins via the serve function serve requests using the Plugins handle serve Plugins theme hook config st Plugins handle PluginName name of the plugin to handle this request Text unconsume path segments to pass to handler IO Either String The expected usage is that you are going to have request with url such as my extra path segments The code will treat the first path segment as the plugin to be called and pass in the remaining segments as the Text arguments serve plugins my extra path segments the serve function itself knows nothing about the web it is framework agnostic Here is simple main function that shows how to tie everything together main IO main withPlugins plugins do initPlugin plugins clckPlugin initPlugin plugins myPlugin setTheme plugins Just theme hooks getPostHooks plugins sequence hooks simpleHTTP nullConf path do ps fmap rqPaths askRq liftIO serve plugins map Text.pack ps case of Left internalServerError toResponse Right sp sp In this example we do not use the config or st parameters so we just set them to Note that we are responsible for calling the hooks after we have initialized all the plugins",
        "hierarchy": "Web Plugins Core",
        "module": "Web.Plugins.Core",
        "name": "Core",
        "normalized": "",
        "package": "web-plugins",
        "partial": "Core",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/web-plugins/docs/Web-Plugins-Core.html#t:Cleanup",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eCleanup\u003c/a\u003e\u003c/code\u003e is an \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e action to run when the server shuts\n down. The server can either shutdown normally or due to a\n failure. The \u003ccode\u003e\u003ca\u003eWhen\u003c/a\u003e\u003c/code\u003e parameter indicates when an action should run.\n\u003c/p\u003e",
        "fct-module": "Web.Plugins.Core",
        "fct-package": "web-plugins",
        "fct-signature": "data",
        "fct-source": "src/Web-Plugins-Core.html#Cleanup",
        "fct-type": "data",
        "title": "Cleanup"
      },
      "index": {
        "description": "Cleanup is an IO action to run when the server shuts down The server can either shutdown normally or due to failure The When parameter indicates when an action should run",
        "hierarchy": "Web Plugins Core",
        "module": "Web.Plugins.Core",
        "name": "Cleanup",
        "normalized": "",
        "package": "web-plugins",
        "partial": "Cleanup",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/web-plugins/docs/Web-Plugins-Core.html#t:Plugin",
      "description": {
        "fct-descr": "\u003cp\u003eNOTE: it is possible to set the URL type incorrectly here and not get a type error. How can we fix that ?\n\u003c/p\u003e",
        "fct-module": "Web.Plugins.Core",
        "fct-package": "web-plugins",
        "fct-signature": "data",
        "fct-source": "src/Web-Plugins-Core.html#Plugin",
        "fct-type": "data",
        "title": "Plugin"
      },
      "index": {
        "description": "NOTE it is possible to set the URL type incorrectly here and not get type error How can we fix that",
        "hierarchy": "Web Plugins Core",
        "module": "Web.Plugins.Core",
        "name": "Plugin",
        "normalized": "",
        "package": "web-plugins",
        "partial": "Plugin",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/web-plugins/docs/Web-Plugins-Core.html#t:PluginName",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ePluginName\u003c/a\u003e\u003c/code\u003e should uniquely identify a plugin -- though we\n currently have no way to enforce that.\n\u003c/p\u003e",
        "fct-module": "Web.Plugins.Core",
        "fct-package": "web-plugins",
        "fct-signature": "type",
        "fct-source": "src/Web-Plugins-Core.html#PluginName",
        "fct-type": "type",
        "title": "PluginName"
      },
      "index": {
        "description": "The PluginName should uniquely identify plugin though we currently have no way to enforce that",
        "hierarchy": "Web Plugins Core",
        "module": "Web.Plugins.Core",
        "name": "PluginName",
        "normalized": "",
        "package": "web-plugins",
        "partial": "Plugin Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/web-plugins/docs/Web-Plugins-Core.html#t:Plugins",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ePlugins\u003c/a\u003e\u003c/code\u003e type is the handle to the plugins system. Generally\n you will have exactly one \u003ccode\u003e\u003ca\u003ePlugins\u003c/a\u003e\u003c/code\u003e value in your app.\n\u003c/p\u003e\u003cp\u003esee also \u003ccode\u003e\u003ca\u003ewithPlugins\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Web.Plugins.Core",
        "fct-package": "web-plugins",
        "fct-signature": "newtype",
        "fct-source": "src/Web-Plugins-Core.html#Plugins",
        "fct-type": "newtype",
        "title": "Plugins"
      },
      "index": {
        "description": "The Plugins type is the handle to the plugins system Generally you will have exactly one Plugins value in your app see also withPlugins",
        "hierarchy": "Web Plugins Core",
        "module": "Web.Plugins.Core",
        "name": "Plugins",
        "normalized": "",
        "package": "web-plugins",
        "partial": "Plugins",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/web-plugins/docs/Web-Plugins-Core.html#t:PluginsState",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ePluginsState\u003c/a\u003e\u003c/code\u003e record holds all the record keeping\n information needed for loading, unloading, and invoking plugins. In\n theory you should not be modifying or inspecting this structure\n directly -- only calling the helper functions that modify or read\n it.\n\u003c/p\u003e",
        "fct-module": "Web.Plugins.Core",
        "fct-package": "web-plugins",
        "fct-signature": "data",
        "fct-source": "src/Web-Plugins-Core.html#PluginsState",
        "fct-type": "data",
        "title": "PluginsState"
      },
      "index": {
        "description": "The PluginsState record holds all the record keeping information needed for loading unloading and invoking plugins In theory you should not be modifying or inspecting this structure directly only calling the helper functions that modify or read it",
        "hierarchy": "Web Plugins Core",
        "module": "Web.Plugins.Core",
        "name": "PluginsState",
        "normalized": "",
        "package": "web-plugins",
        "partial": "Plugins State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/web-plugins/docs/Web-Plugins-Core.html#t:When",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eWhen\u003c/a\u003e\u003c/code\u003e indicates when a clean up action should be run\n\u003c/p\u003e",
        "fct-module": "Web.Plugins.Core",
        "fct-package": "web-plugins",
        "fct-signature": "data",
        "fct-source": "src/Web-Plugins-Core.html#When",
        "fct-type": "data",
        "title": "When"
      },
      "index": {
        "description": "When indicates when clean up action should be run",
        "hierarchy": "Web Plugins Core",
        "module": "Web.Plugins.Core",
        "name": "When",
        "normalized": "",
        "package": "web-plugins",
        "partial": "When",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/web-plugins/docs/Web-Plugins-Core.html#v:Always",
      "description": {
        "fct-descr": "\u003cp\u003ealways run this action when \u003ccode\u003e\u003ca\u003edestroyPlugins\u003c/a\u003e\u003c/code\u003e is called\n\u003c/p\u003e",
        "fct-module": "Web.Plugins.Core",
        "fct-package": "web-plugins",
        "fct-signature": "Always",
        "fct-source": "src/Web-Plugins-Core.html#When",
        "fct-type": "function",
        "title": "Always"
      },
      "index": {
        "description": "always run this action when destroyPlugins is called",
        "hierarchy": "Web Plugins Core",
        "module": "Web.Plugins.Core",
        "name": "Always",
        "normalized": "",
        "package": "web-plugins",
        "partial": "Always",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/web-plugins/docs/Web-Plugins-Core.html#v:Cleanup",
      "description": {
        "fct-module": "Web.Plugins.Core",
        "fct-package": "web-plugins",
        "fct-signature": "Cleanup When (IO ())",
        "fct-source": "src/Web-Plugins-Core.html#Cleanup",
        "fct-type": "function",
        "title": "Cleanup"
      },
      "index": {
        "description": "",
        "hierarchy": "Web Plugins Core",
        "module": "Web.Plugins.Core",
        "name": "Cleanup",
        "normalized": "Cleanup When(IO())",
        "package": "web-plugins",
        "partial": "Cleanup",
        "signature": "Cleanup When(IO())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/web-plugins/docs/Web-Plugins-Core.html#v:OnFailure",
      "description": {
        "fct-descr": "\u003cp\u003eonly run this action if \u003ccode\u003e\u003ca\u003edestroyPlugins\u003c/a\u003e\u003c/code\u003e is called with a failure present\n\u003c/p\u003e",
        "fct-module": "Web.Plugins.Core",
        "fct-package": "web-plugins",
        "fct-signature": "OnFailure",
        "fct-source": "src/Web-Plugins-Core.html#When",
        "fct-type": "function",
        "title": "OnFailure"
      },
      "index": {
        "description": "only run this action if destroyPlugins is called with failure present",
        "hierarchy": "Web Plugins Core",
        "module": "Web.Plugins.Core",
        "name": "OnFailure",
        "normalized": "",
        "package": "web-plugins",
        "partial": "On Failure",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/web-plugins/docs/Web-Plugins-Core.html#v:OnNormal",
      "description": {
        "fct-descr": "\u003cp\u003eonly run this action when \u003ccode\u003e\u003ca\u003edestroyPlugins\u003c/a\u003e\u003c/code\u003e is called with a normal shutdown\n\u003c/p\u003e",
        "fct-module": "Web.Plugins.Core",
        "fct-package": "web-plugins",
        "fct-signature": "OnNormal",
        "fct-source": "src/Web-Plugins-Core.html#When",
        "fct-type": "function",
        "title": "OnNormal"
      },
      "index": {
        "description": "only run this action when destroyPlugins is called with normal shutdown",
        "hierarchy": "Web Plugins Core",
        "module": "Web.Plugins.Core",
        "name": "OnNormal",
        "normalized": "",
        "package": "web-plugins",
        "partial": "On Normal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/web-plugins/docs/Web-Plugins-Core.html#v:Plugin",
      "description": {
        "fct-module": "Web.Plugins.Core",
        "fct-package": "web-plugins",
        "fct-signature": "Plugin",
        "fct-source": "src/Web-Plugins-Core.html#Plugin",
        "fct-type": "function",
        "title": "Plugin"
      },
      "index": {
        "description": "",
        "hierarchy": "Web Plugins Core",
        "module": "Web.Plugins.Core",
        "name": "Plugin",
        "normalized": "",
        "package": "web-plugins",
        "partial": "Plugin",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/web-plugins/docs/Web-Plugins-Core.html#v:Plugins",
      "description": {
        "fct-module": "Web.Plugins.Core",
        "fct-package": "web-plugins",
        "fct-signature": "Plugins",
        "fct-source": "src/Web-Plugins-Core.html#Plugins",
        "fct-type": "function",
        "title": "Plugins"
      },
      "index": {
        "description": "",
        "hierarchy": "Web Plugins Core",
        "module": "Web.Plugins.Core",
        "name": "Plugins",
        "normalized": "",
        "package": "web-plugins",
        "partial": "Plugins",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/web-plugins/docs/Web-Plugins-Core.html#v:PluginsState",
      "description": {
        "fct-module": "Web.Plugins.Core",
        "fct-package": "web-plugins",
        "fct-signature": "PluginsState",
        "fct-source": "src/Web-Plugins-Core.html#PluginsState",
        "fct-type": "function",
        "title": "PluginsState"
      },
      "index": {
        "description": "",
        "hierarchy": "Web Plugins Core",
        "module": "Web.Plugins.Core",
        "name": "PluginsState",
        "normalized": "",
        "package": "web-plugins",
        "partial": "Plugins State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/web-plugins/docs/Web-Plugins-Core.html#v:addCleanup",
      "description": {
        "fct-descr": "\u003cp\u003eadd a new cleanup action to the top of the stack\n\u003c/p\u003e",
        "fct-module": "Web.Plugins.Core",
        "fct-package": "web-plugins",
        "fct-signature": "Plugins theme n hook config st -\u003e When -\u003e IO () -\u003e m ()",
        "fct-source": "src/Web-Plugins-Core.html#addCleanup",
        "fct-type": "function",
        "title": "addCleanup"
      },
      "index": {
        "description": "add new cleanup action to the top of the stack",
        "hierarchy": "Web Plugins Core",
        "module": "Web.Plugins.Core",
        "name": "addCleanup",
        "normalized": "Plugins a b c d e-\u003eWhen-\u003eIO()-\u003ef()",
        "package": "web-plugins",
        "partial": "Cleanup",
        "signature": "Plugins theme n hook config st-\u003eWhen-\u003eIO()-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/web-plugins/docs/Web-Plugins-Core.html#v:addHandler",
      "description": {
        "fct-descr": "\u003cp\u003eadd a new route handler\n\u003c/p\u003e",
        "fct-module": "Web.Plugins.Core",
        "fct-package": "web-plugins",
        "fct-signature": "Plugins theme n hook config st-\u003e PluginName-\u003e (Plugins theme n hook config st -\u003e [Text] -\u003e n)-\u003e m ()",
        "fct-type": "function",
        "title": "addHandler"
      },
      "index": {
        "description": "add new route handler",
        "hierarchy": "Web Plugins Core",
        "module": "Web.Plugins.Core",
        "name": "addHandler",
        "normalized": "Plugins a b c d e-\u003ePluginName-\u003e(Plugins a b c d e-\u003e[Text]-\u003eb)-\u003ef()",
        "package": "web-plugins",
        "partial": "Handler",
        "signature": "Plugins theme n hook config st-\u003ePluginName-\u003e(Plugins theme n hook config st-\u003e[Text]-\u003en)-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/web-plugins/docs/Web-Plugins-Core.html#v:addPluginRouteFn",
      "description": {
        "fct-descr": "\u003cp\u003eadd the routing function for a plugin\n\u003c/p\u003e\u003cp\u003esee also: \u003ccode\u003e\u003ca\u003egetPluginRouteFn\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Web.Plugins.Core",
        "fct-package": "web-plugins",
        "fct-signature": "Plugins theme n hook config st -\u003e PluginName -\u003e (url -\u003e [(Text, Maybe Text)] -\u003e Text) -\u003e m ()",
        "fct-source": "src/Web-Plugins-Core.html#addPluginRouteFn",
        "fct-type": "function",
        "title": "addPluginRouteFn"
      },
      "index": {
        "description": "add the routing function for plugin see also getPluginRouteFn",
        "hierarchy": "Web Plugins Core",
        "module": "Web.Plugins.Core",
        "name": "addPluginRouteFn",
        "normalized": "Plugins a b c d e-\u003ePluginName-\u003e(f-\u003e[(Text,Maybe Text)]-\u003eText)-\u003eg()",
        "package": "web-plugins",
        "partial": "Plugin Route Fn",
        "signature": "Plugins theme n hook config st-\u003ePluginName-\u003e(url-\u003e[(Text,Maybe Text)]-\u003eText)-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/web-plugins/docs/Web-Plugins-Core.html#v:addPluginState",
      "description": {
        "fct-descr": "\u003cp\u003eadd a new plugin-local state\n\u003c/p\u003e",
        "fct-module": "Web.Plugins.Core",
        "fct-package": "web-plugins",
        "fct-signature": "Plugins theme n hook config st -\u003e PluginName -\u003e state -\u003e m ()",
        "fct-source": "src/Web-Plugins-Core.html#addPluginState",
        "fct-type": "function",
        "title": "addPluginState"
      },
      "index": {
        "description": "add new plugin-local state",
        "hierarchy": "Web Plugins Core",
        "module": "Web.Plugins.Core",
        "name": "addPluginState",
        "normalized": "Plugins a b c d e-\u003ePluginName-\u003ef-\u003eg()",
        "package": "web-plugins",
        "partial": "Plugin State",
        "signature": "Plugins theme n hook config st-\u003ePluginName-\u003estate-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/web-plugins/docs/Web-Plugins-Core.html#v:addPostHook",
      "description": {
        "fct-descr": "\u003cp\u003eadd a new post initialization hook\n\u003c/p\u003e",
        "fct-module": "Web.Plugins.Core",
        "fct-package": "web-plugins",
        "fct-signature": "Plugins theme n hook config st -\u003e hook -\u003e m ()",
        "fct-source": "src/Web-Plugins-Core.html#addPostHook",
        "fct-type": "function",
        "title": "addPostHook"
      },
      "index": {
        "description": "add new post initialization hook",
        "hierarchy": "Web Plugins Core",
        "module": "Web.Plugins.Core",
        "name": "addPostHook",
        "normalized": "Plugins a b c d e-\u003ec-\u003ef()",
        "package": "web-plugins",
        "partial": "Post Hook",
        "signature": "Plugins theme n hook config st-\u003ehook-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/web-plugins/docs/Web-Plugins-Core.html#v:destroyPlugins",
      "description": {
        "fct-descr": "\u003cp\u003eshutdown the plugins system\n\u003c/p\u003e\u003cp\u003esee also \u003ccode\u003e\u003ca\u003ewithPlugins\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Web.Plugins.Core",
        "fct-package": "web-plugins",
        "fct-signature": "When-\u003e Plugins theme m hook config st-\u003e IO ()",
        "fct-type": "function",
        "title": "destroyPlugins"
      },
      "index": {
        "description": "shutdown the plugins system see also withPlugins",
        "hierarchy": "Web Plugins Core",
        "module": "Web.Plugins.Core",
        "name": "destroyPlugins",
        "normalized": "When-\u003ePlugins a b c d e-\u003eIO()",
        "package": "web-plugins",
        "partial": "Plugins",
        "signature": "When-\u003ePlugins theme m hook config st-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/web-plugins/docs/Web-Plugins-Core.html#v:getConfig",
      "description": {
        "fct-descr": "\u003cp\u003eget the \u003ccode\u003econfig\u003c/code\u003e value from the \u003ccode\u003e\u003ca\u003ePlugins\u003c/a\u003e\u003c/code\u003e type\n\u003c/p\u003e",
        "fct-module": "Web.Plugins.Core",
        "fct-package": "web-plugins",
        "fct-signature": "Plugins theme n hook config st -\u003e m config",
        "fct-source": "src/Web-Plugins-Core.html#getConfig",
        "fct-type": "function",
        "title": "getConfig"
      },
      "index": {
        "description": "get the config value from the Plugins type",
        "hierarchy": "Web Plugins Core",
        "module": "Web.Plugins.Core",
        "name": "getConfig",
        "normalized": "Plugins a b c d e-\u003ef d",
        "package": "web-plugins",
        "partial": "Config",
        "signature": "Plugins theme n hook config st-\u003em config"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/web-plugins/docs/Web-Plugins-Core.html#v:getPluginRouteFn",
      "description": {
        "fct-descr": "\u003cp\u003eget the plugin routing function for the named plugin\n\u003c/p\u003e\u003cp\u003esee also: \u003ccode\u003e\u003ca\u003eaddPluginRouteFn\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Web.Plugins.Core",
        "fct-package": "web-plugins",
        "fct-signature": "Plugins theme n hook config st-\u003e PluginName-\u003e m (Maybe (url -\u003e [(Text, Maybe Text)] -\u003e Text))",
        "fct-type": "function",
        "title": "getPluginRouteFn"
      },
      "index": {
        "description": "get the plugin routing function for the named plugin see also addPluginRouteFn",
        "hierarchy": "Web Plugins Core",
        "module": "Web.Plugins.Core",
        "name": "getPluginRouteFn",
        "normalized": "Plugins a b c d e-\u003ePluginName-\u003ef(Maybe(g-\u003e[(Text,Maybe Text)]-\u003eText))",
        "package": "web-plugins",
        "partial": "Plugin Route Fn",
        "signature": "Plugins theme n hook config st-\u003ePluginName-\u003em(Maybe(url-\u003e[(Text,Maybe Text)]-\u003eText))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/web-plugins/docs/Web-Plugins-Core.html#v:getPluginState",
      "description": {
        "fct-descr": "\u003cp\u003eGet the state for a particular plugin\n\u003c/p\u003e\u003cp\u003eper-plugin state is optional. This will return \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the\n plugin did not register any local state.\n\u003c/p\u003e",
        "fct-module": "Web.Plugins.Core",
        "fct-package": "web-plugins",
        "fct-signature": "Plugins theme n hook config st -\u003e Text -\u003e m (Maybe state)",
        "fct-source": "src/Web-Plugins-Core.html#getPluginState",
        "fct-type": "function",
        "title": "getPluginState"
      },
      "index": {
        "description": "Get the state for particular plugin per-plugin state is optional This will return Nothing if the plugin did not register any local state",
        "hierarchy": "Web Plugins Core",
        "module": "Web.Plugins.Core",
        "name": "getPluginState",
        "normalized": "Plugins a b c d e-\u003eText-\u003ef(Maybe g)",
        "package": "web-plugins",
        "partial": "Plugin State",
        "signature": "Plugins theme n hook config st-\u003eText-\u003em(Maybe state)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/web-plugins/docs/Web-Plugins-Core.html#v:getPluginsSt",
      "description": {
        "fct-descr": "\u003cp\u003eget the current \u003ccode\u003est\u003c/code\u003e value from \u003ccode\u003e\u003ca\u003ePlugins\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Web.Plugins.Core",
        "fct-package": "web-plugins",
        "fct-signature": "Plugins theme n hook config st -\u003e m st",
        "fct-source": "src/Web-Plugins-Core.html#getPluginsSt",
        "fct-type": "function",
        "title": "getPluginsSt"
      },
      "index": {
        "description": "get the current st value from Plugins",
        "hierarchy": "Web Plugins Core",
        "module": "Web.Plugins.Core",
        "name": "getPluginsSt",
        "normalized": "Plugins a b c d e-\u003ef e",
        "package": "web-plugins",
        "partial": "Plugins St",
        "signature": "Plugins theme n hook config st-\u003em st"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/web-plugins/docs/Web-Plugins-Core.html#v:getPostHooks",
      "description": {
        "fct-descr": "\u003cp\u003eget all the post initialization hooks\n\u003c/p\u003e",
        "fct-module": "Web.Plugins.Core",
        "fct-package": "web-plugins",
        "fct-signature": "Plugins theme n hook config st -\u003e m [hook]",
        "fct-source": "src/Web-Plugins-Core.html#getPostHooks",
        "fct-type": "function",
        "title": "getPostHooks"
      },
      "index": {
        "description": "get all the post initialization hooks",
        "hierarchy": "Web Plugins Core",
        "module": "Web.Plugins.Core",
        "name": "getPostHooks",
        "normalized": "Plugins a b c d e-\u003ef[c]",
        "package": "web-plugins",
        "partial": "Post Hooks",
        "signature": "Plugins theme n hook config st-\u003em[hook]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/web-plugins/docs/Web-Plugins-Core.html#v:getTheme",
      "description": {
        "fct-descr": "\u003cp\u003eget the current \u003ccode\u003etheme\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Web.Plugins.Core",
        "fct-package": "web-plugins",
        "fct-signature": "Plugins theme n hook config st -\u003e m (Maybe theme)",
        "fct-source": "src/Web-Plugins-Core.html#getTheme",
        "fct-type": "function",
        "title": "getTheme"
      },
      "index": {
        "description": "get the current theme",
        "hierarchy": "Web Plugins Core",
        "module": "Web.Plugins.Core",
        "name": "getTheme",
        "normalized": "Plugins a b c d e-\u003ef(Maybe a)",
        "package": "web-plugins",
        "partial": "Theme",
        "signature": "Plugins theme n hook config st-\u003em(Maybe theme)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/web-plugins/docs/Web-Plugins-Core.html#v:initPlugin",
      "description": {
        "fct-descr": "\u003cp\u003einitialize a plugin\n\u003c/p\u003e",
        "fct-module": "Web.Plugins.Core",
        "fct-package": "web-plugins",
        "fct-signature": "Plugins theme n hook config st-\u003e Text-\u003e Plugin url theme n hook config st-\u003e IO (Maybe Text)",
        "fct-type": "function",
        "title": "initPlugin"
      },
      "index": {
        "description": "initialize plugin",
        "hierarchy": "Web Plugins Core",
        "module": "Web.Plugins.Core",
        "name": "initPlugin",
        "normalized": "Plugins a b c d e-\u003eText-\u003ePlugin f a b c d e-\u003eIO(Maybe Text)",
        "package": "web-plugins",
        "partial": "Plugin",
        "signature": "Plugins theme n hook config st-\u003eText-\u003ePlugin url theme n hook config st-\u003eIO(Maybe Text)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/web-plugins/docs/Web-Plugins-Core.html#v:initPlugins",
      "description": {
        "fct-descr": "\u003cp\u003einitialize the plugins system\n\u003c/p\u003e\u003cp\u003esee also \u003ccode\u003e\u003ca\u003ewithPlugins\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Web.Plugins.Core",
        "fct-package": "web-plugins",
        "fct-signature": "config-\u003e st-\u003e IO (Plugins theme n hook config st)",
        "fct-type": "function",
        "title": "initPlugins"
      },
      "index": {
        "description": "initialize the plugins system see also withPlugins",
        "hierarchy": "Web Plugins Core",
        "module": "Web.Plugins.Core",
        "name": "initPlugins",
        "normalized": "a-\u003eb-\u003eIO(Plugins c d e a b)",
        "package": "web-plugins",
        "partial": "Plugins",
        "signature": "config-\u003est-\u003eIO(Plugins theme n hook config st)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/web-plugins/docs/Web-Plugins-Core.html#v:modifyPluginsSt",
      "description": {
        "fct-descr": "\u003cp\u003emodify the current st value from \u003ccode\u003e\u003ca\u003ePlugins\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Web.Plugins.Core",
        "fct-package": "web-plugins",
        "fct-signature": "Plugins theme n hook config st -\u003e (st -\u003e st) -\u003e m ()",
        "fct-source": "src/Web-Plugins-Core.html#modifyPluginsSt",
        "fct-type": "function",
        "title": "modifyPluginsSt"
      },
      "index": {
        "description": "modify the current st value from Plugins",
        "hierarchy": "Web Plugins Core",
        "module": "Web.Plugins.Core",
        "name": "modifyPluginsSt",
        "normalized": "Plugins a b c d e-\u003e(e-\u003ee)-\u003ef()",
        "package": "web-plugins",
        "partial": "Plugins St",
        "signature": "Plugins theme n hook config st-\u003e(st-\u003est)-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/web-plugins/docs/Web-Plugins-Core.html#v:pluginDepends",
      "description": {
        "fct-descr": "\u003cp\u003eplugins which much be initialized before this one can be\n\u003c/p\u003e",
        "fct-module": "Web.Plugins.Core",
        "fct-package": "web-plugins",
        "fct-signature": "[PluginName]",
        "fct-source": "src/Web-Plugins-Core.html#Plugin",
        "fct-type": "function",
        "title": "pluginDepends"
      },
      "index": {
        "description": "plugins which much be initialized before this one can be",
        "hierarchy": "Web Plugins Core",
        "module": "Web.Plugins.Core",
        "name": "pluginDepends",
        "normalized": "[PluginName]",
        "package": "web-plugins",
        "partial": "Depends",
        "signature": "[PluginName]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/web-plugins/docs/Web-Plugins-Core.html#v:pluginInit",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Web.Plugins.Core",
        "fct-package": "web-plugins",
        "fct-signature": "Plugins theme n hook config st -\u003e IO (Maybe Text)",
        "fct-source": "src/Web-Plugins-Core.html#Plugin",
        "fct-type": "function",
        "title": "pluginInit"
      },
      "index": {
        "description": "",
        "hierarchy": "Web Plugins Core",
        "module": "Web.Plugins.Core",
        "name": "pluginInit",
        "normalized": "Plugins a b c d e-\u003eIO(Maybe Text)",
        "package": "web-plugins",
        "partial": "Init",
        "signature": "Plugins theme n hook config st-\u003eIO(Maybe Text)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/web-plugins/docs/Web-Plugins-Core.html#v:pluginName",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Web.Plugins.Core",
        "fct-package": "web-plugins",
        "fct-signature": "PluginName",
        "fct-source": "src/Web-Plugins-Core.html#Plugin",
        "fct-type": "function",
        "title": "pluginName"
      },
      "index": {
        "description": "",
        "hierarchy": "Web Plugins Core",
        "module": "Web.Plugins.Core",
        "name": "pluginName",
        "normalized": "",
        "package": "web-plugins",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/web-plugins/docs/Web-Plugins-Core.html#v:pluginPostHook",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Web.Plugins.Core",
        "fct-package": "web-plugins",
        "fct-signature": "hook",
        "fct-source": "src/Web-Plugins-Core.html#Plugin",
        "fct-type": "function",
        "title": "pluginPostHook"
      },
      "index": {
        "description": "",
        "hierarchy": "Web Plugins Core",
        "module": "Web.Plugins.Core",
        "name": "pluginPostHook",
        "normalized": "",
        "package": "web-plugins",
        "partial": "Post Hook",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/web-plugins/docs/Web-Plugins-Core.html#v:pluginToPathInfo",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Web.Plugins.Core",
        "fct-package": "web-plugins",
        "fct-signature": "url -\u003e Text",
        "fct-source": "src/Web-Plugins-Core.html#Plugin",
        "fct-type": "function",
        "title": "pluginToPathInfo"
      },
      "index": {
        "description": "",
        "hierarchy": "Web Plugins Core",
        "module": "Web.Plugins.Core",
        "name": "pluginToPathInfo",
        "normalized": "a-\u003eText",
        "package": "web-plugins",
        "partial": "To Path Info",
        "signature": "url-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/web-plugins/docs/Web-Plugins-Core.html#v:pluginsConfig",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Web.Plugins.Core",
        "fct-package": "web-plugins",
        "fct-signature": "config",
        "fct-source": "src/Web-Plugins-Core.html#PluginsState",
        "fct-type": "function",
        "title": "pluginsConfig"
      },
      "index": {
        "description": "",
        "hierarchy": "Web Plugins Core",
        "module": "Web.Plugins.Core",
        "name": "pluginsConfig",
        "normalized": "",
        "package": "web-plugins",
        "partial": "Config",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/web-plugins/docs/Web-Plugins-Core.html#v:pluginsHandler",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Web.Plugins.Core",
        "fct-package": "web-plugins",
        "fct-signature": "Map PluginName (Plugins theme n hook config st -\u003e [Text] -\u003e n)",
        "fct-source": "src/Web-Plugins-Core.html#PluginsState",
        "fct-type": "function",
        "title": "pluginsHandler"
      },
      "index": {
        "description": "",
        "hierarchy": "Web Plugins Core",
        "module": "Web.Plugins.Core",
        "name": "pluginsHandler",
        "normalized": "Map PluginName(Plugins a b c d e-\u003e[Text]-\u003eb)",
        "package": "web-plugins",
        "partial": "Handler",
        "signature": "Map PluginName(Plugins theme n hook config st-\u003e[Text]-\u003en)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/web-plugins/docs/Web-Plugins-Core.html#v:pluginsOnShutdown",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Web.Plugins.Core",
        "fct-package": "web-plugins",
        "fct-signature": "[Cleanup]",
        "fct-source": "src/Web-Plugins-Core.html#PluginsState",
        "fct-type": "function",
        "title": "pluginsOnShutdown"
      },
      "index": {
        "description": "",
        "hierarchy": "Web Plugins Core",
        "module": "Web.Plugins.Core",
        "name": "pluginsOnShutdown",
        "normalized": "[Cleanup]",
        "package": "web-plugins",
        "partial": "On Shutdown",
        "signature": "[Cleanup]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/web-plugins/docs/Web-Plugins-Core.html#v:pluginsPluginState",
      "description": {
        "fct-descr": "\u003cp\u003eper-plugin state\n\u003c/p\u003e",
        "fct-module": "Web.Plugins.Core",
        "fct-package": "web-plugins",
        "fct-signature": "Map PluginName (TVar Dynamic)",
        "fct-source": "src/Web-Plugins-Core.html#PluginsState",
        "fct-type": "function",
        "title": "pluginsPluginState"
      },
      "index": {
        "description": "per-plugin state",
        "hierarchy": "Web Plugins Core",
        "module": "Web.Plugins.Core",
        "name": "pluginsPluginState",
        "normalized": "",
        "package": "web-plugins",
        "partial": "Plugin State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/web-plugins/docs/Web-Plugins-Core.html#v:pluginsPostHooks",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Web.Plugins.Core",
        "fct-package": "web-plugins",
        "fct-signature": "[hook]",
        "fct-source": "src/Web-Plugins-Core.html#PluginsState",
        "fct-type": "function",
        "title": "pluginsPostHooks"
      },
      "index": {
        "description": "",
        "hierarchy": "Web Plugins Core",
        "module": "Web.Plugins.Core",
        "name": "pluginsPostHooks",
        "normalized": "[a]",
        "package": "web-plugins",
        "partial": "Post Hooks",
        "signature": "[hook]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/web-plugins/docs/Web-Plugins-Core.html#v:pluginsRouteFn",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Web.Plugins.Core",
        "fct-package": "web-plugins",
        "fct-signature": "Map PluginName Dynamic",
        "fct-source": "src/Web-Plugins-Core.html#PluginsState",
        "fct-type": "function",
        "title": "pluginsRouteFn"
      },
      "index": {
        "description": "",
        "hierarchy": "Web Plugins Core",
        "module": "Web.Plugins.Core",
        "name": "pluginsRouteFn",
        "normalized": "",
        "package": "web-plugins",
        "partial": "Route Fn",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/web-plugins/docs/Web-Plugins-Core.html#v:pluginsState",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Web.Plugins.Core",
        "fct-package": "web-plugins",
        "fct-signature": "st",
        "fct-source": "src/Web-Plugins-Core.html#PluginsState",
        "fct-type": "function",
        "title": "pluginsState"
      },
      "index": {
        "description": "",
        "hierarchy": "Web Plugins Core",
        "module": "Web.Plugins.Core",
        "name": "pluginsState",
        "normalized": "",
        "package": "web-plugins",
        "partial": "State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/web-plugins/docs/Web-Plugins-Core.html#v:pluginsTheme",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Web.Plugins.Core",
        "fct-package": "web-plugins",
        "fct-signature": "Maybe theme",
        "fct-source": "src/Web-Plugins-Core.html#PluginsState",
        "fct-type": "function",
        "title": "pluginsTheme"
      },
      "index": {
        "description": "",
        "hierarchy": "Web Plugins Core",
        "module": "Web.Plugins.Core",
        "name": "pluginsTheme",
        "normalized": "",
        "package": "web-plugins",
        "partial": "Theme",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/web-plugins/docs/Web-Plugins-Core.html#v:ptv",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Web.Plugins.Core",
        "fct-package": "web-plugins",
        "fct-signature": "TVar (PluginsState theme m hook config st)",
        "fct-source": "src/Web-Plugins-Core.html#Plugins",
        "fct-type": "function",
        "title": "ptv"
      },
      "index": {
        "description": "",
        "hierarchy": "Web Plugins Core",
        "module": "Web.Plugins.Core",
        "name": "ptv",
        "normalized": "",
        "package": "web-plugins",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/web-plugins/docs/Web-Plugins-Core.html#v:putPluginsSt",
      "description": {
        "fct-descr": "\u003cp\u003eput the current st value from \u003ccode\u003e\u003ca\u003ePlugins\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Web.Plugins.Core",
        "fct-package": "web-plugins",
        "fct-signature": "Plugins theme n hook config st -\u003e st -\u003e m ()",
        "fct-source": "src/Web-Plugins-Core.html#putPluginsSt",
        "fct-type": "function",
        "title": "putPluginsSt"
      },
      "index": {
        "description": "put the current st value from Plugins",
        "hierarchy": "Web Plugins Core",
        "module": "Web.Plugins.Core",
        "name": "putPluginsSt",
        "normalized": "Plugins a b c d e-\u003ee-\u003ef()",
        "package": "web-plugins",
        "partial": "Plugins St",
        "signature": "Plugins theme n hook config st-\u003est-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/web-plugins/docs/Web-Plugins-Core.html#v:serve",
      "description": {
        "fct-descr": "\u003cp\u003eserve requests using the \u003ccode\u003e\u003ca\u003ePlugins\u003c/a\u003e\u003c/code\u003e handle\n\u003c/p\u003e",
        "fct-module": "Web.Plugins.Core",
        "fct-package": "web-plugins",
        "fct-signature": "Plugins theme n hook config st-\u003e PluginName-\u003e [Text]-\u003e IO (Either String n)",
        "fct-type": "function",
        "title": "serve"
      },
      "index": {
        "description": "serve requests using the Plugins handle",
        "hierarchy": "Web Plugins Core",
        "module": "Web.Plugins.Core",
        "name": "serve",
        "normalized": "Plugins a b c d e-\u003ePluginName-\u003e[Text]-\u003eIO(Either String b)",
        "package": "web-plugins",
        "partial": "",
        "signature": "Plugins theme n hook config st-\u003ePluginName-\u003e[Text]-\u003eIO(Either String n)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/web-plugins/docs/Web-Plugins-Core.html#v:setTheme",
      "description": {
        "fct-descr": "\u003cp\u003eset the current \u003ccode\u003etheme\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Web.Plugins.Core",
        "fct-package": "web-plugins",
        "fct-signature": "Plugins theme n hook config st -\u003e Maybe theme -\u003e m ()",
        "fct-source": "src/Web-Plugins-Core.html#setTheme",
        "fct-type": "function",
        "title": "setTheme"
      },
      "index": {
        "description": "set the current theme",
        "hierarchy": "Web Plugins Core",
        "module": "Web.Plugins.Core",
        "name": "setTheme",
        "normalized": "Plugins a b c d e-\u003eMaybe a-\u003ef()",
        "package": "web-plugins",
        "partial": "Theme",
        "signature": "Plugins theme n hook config st-\u003eMaybe theme-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/web-plugins/docs/Web-Plugins-Core.html#v:withPlugins",
      "description": {
        "fct-descr": "\u003cp\u003ea bracketed combination of \u003ccode\u003e\u003ca\u003einitPlugins\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003edestroyPlugins\u003c/a\u003e\u003c/code\u003e. Takes care of passing the correct termination condition.\n\u003c/p\u003e",
        "fct-module": "Web.Plugins.Core",
        "fct-package": "web-plugins",
        "fct-signature": "config-\u003e st-\u003e (Plugins theme m hook config st -\u003e IO a)-\u003e IO a",
        "fct-type": "function",
        "title": "withPlugins"
      },
      "index": {
        "description": "bracketed combination of initPlugins and destroyPlugins Takes care of passing the correct termination condition",
        "hierarchy": "Web Plugins Core",
        "module": "Web.Plugins.Core",
        "name": "withPlugins",
        "normalized": "a-\u003eb-\u003e(Plugins c d e a b-\u003eIO f)-\u003eIO f",
        "package": "web-plugins",
        "partial": "Plugins",
        "signature": "config-\u003est-\u003e(Plugins theme m hook config st-\u003eIO a)-\u003eIO a"
      }
    }
  }
]