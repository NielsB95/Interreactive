window.addEventListener("load", function () {
    let modules = document.querySelectorAll("[module]");
    var interreactive = new Interreactive(modules);
    interreactive.Render();
});

const Mapping = {
    Renderer: "../Renderer.js",
    Module: "../Module.js"
}

class Interreactive {
    constructor(modules) {
        this.Modules = modules;

        Util.FetchModule("Renderer", Mapping.Renderer);
        Util.FetchModule("Module", Mapping.Module);
    }

    Render() {
        for(let module of this.Modules){
            let moduleName = module.getAttribute("module");
            console.log(moduleName);
            console.log(module);
        }
    }
}