class Module {
    constructor() {
        this.Template = "";
        this.Model = {}
    }

    Render() {
        return Renderer.Render(this.Template, this.Model);
    }
}