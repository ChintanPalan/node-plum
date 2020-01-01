const hasChrome = (obj: any): obj is { chrome: string } => !!obj && typeof obj === "object" && "chrome" in obj;
const hasRuntime = (obj: any): obj is { runtime: string } => !!obj && typeof obj === "object" && "runtime" in obj;
const hasExt = (obj: any): obj is { ext: any } => true;

export {
    hasChrome,
    hasRuntime,
    hasExt,
}