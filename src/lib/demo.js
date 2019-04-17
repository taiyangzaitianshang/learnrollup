import { resolve } from "path";
import { rejects } from "assert";

function demo() {
    return new Promise((res, rej) => {
        try {
            setTimeout(()=>{
                const obj1 = {a:1};
                const obj2 = {b:2};
                const result = {...obj1, ...obj2};
                resolve(result);
            }, 1000)
        } catch (err) {
            rejects(err);
        }
    })
}

export default demo;