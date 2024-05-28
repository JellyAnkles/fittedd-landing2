export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","favicon1.png","images/headshots/diana.png","images/headshots/kiara.png","images/headshots/Octavia.png","images/hero/hero1.png","images/icons/accuracy.png","images/icons/appdevelopment.png","images/icons/consulting.png","images/icons/digitalmarketing.png","images/icons/innovation.png","images/icons/pants.png","images/icons/satisfaction.png","images/icons/savings.png","images/icons/shoes.png","images/icons/skirt.png","images/icons/socialmedia.png","images/icons/streamline.png","images/icons/tailor.png","images/icons/tshirt.png","images/icons/videoediting.png","images/icons/webdevelopment.png","images/logo/google.svg","images/logo/microsoft.svg","images/logo/netflix.svg","images/logo/spotify.svg","robots.txt"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.DHN_fXty.js","app":"_app/immutable/entry/app.DQ3_KwH5.js","imports":["_app/immutable/entry/start.DHN_fXty.js","_app/immutable/chunks/entry.D2EvaCit.js","_app/immutable/chunks/scheduler.W2pu3yam.js","_app/immutable/entry/app.DQ3_KwH5.js","_app/immutable/chunks/scheduler.W2pu3yam.js","_app/immutable/chunks/index.DauscOUA.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
