abstract class Runtime{
    protected runtime: any;

    constructor(){
        this.setRuntime();
    }

    public abstract onInstall(callback: () => void): void;

    setRuntime(){
        this.runtime = false; //Set as false by default
    }
}

export default Runtime;