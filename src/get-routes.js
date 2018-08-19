function getRoutes(app) {
    const api = [];
    pathToRouteRec(app._router.stack);
    return api;

    function pathToRouteRec(layers, o = "") {
        layers.forEach(layer => {
            let p = o;
            
            if (layer.route) {
                p += layer.route.path;
                let m = layer.route.stack[0].method;
                let n = layer.route.stack[0].name;

                api.push(`${m} ${p} ${n}`);

            } else if (layer.handle.stack && layer.regexp.fast_path) {
                pathToRouteRec(layer.handle.stack, p);

            } else if (layer.handle.stack && layer.regexp.toString() !== "/^\\/?(?=\\/|$)/i") {
                const l = "/^\\";
                const r = "/?(?=\\/|$)/i";
                const allBS = /\\/g;

                pathToRouteRec(layer.handle.stack, 
                    p + layer.regexp.toString()
                                .replace(l, "")
                                .replace(r, "")
                                .replace(allBS, ""));

            }
        });
    }
}

// TODO: sort routes by path, then method
// TODO: formatted output to console
module.exports = {
    getRoutes
}