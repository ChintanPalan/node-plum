import Runtime from "./Runtime";

class ChromeRuntime extends Runtime {
    constructor(){
        super();
        this.setRuntime();
    }

    setRuntime(){
        this.runtime = chrome && chrome.runtime;
    }

    public onInstall(callback: () => void) {
        if(typeof callback !== "function"){
            throw new Error("Callback to installation script must be a function.");
        }
        if(this.runtime && this.runtime.onInstalled && typeof this.runtime.onInstalled.addListener === "function"){
            this.runtime.onInstalled.addListener(function(){
                callback();
            });
        }else{
            console.log("Something went wrong")
        }
    }
}

export default ChromeRuntime;