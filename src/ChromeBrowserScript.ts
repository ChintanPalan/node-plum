import Runtime from "./apis/Runtime/Chrome";
import {hasExt} from "./helpers";

if(window && hasExt(window)){
    window.ext = { Runtime };
}