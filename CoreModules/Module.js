class Module {
    constructor() {
        this.Template = null;
        this.Model = null;
    }

    async Render() {
        if(!this.Template)
            return "No template";
        let template = await FileManager.GetTemplate(this.Template);
        return Renderer.Render(template, this.Model);
    }
}