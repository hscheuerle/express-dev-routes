# express-dev-routes
my development toolkit for express applications

```
((app: Express)._router.stack): [Layer]

[Layer: {
    handle: func,
    // name of the function, Express.Router is 'router'
    // app.method is 'bound dispatch'
    name: string,
    params: '',
    path: '',
    keys: [],
    regexp: object,

    // if (app.get || app.post || app.put || app.delete) {}
    route: Route { path: '/', stack: [Array], methods: [Object] }
}]

```