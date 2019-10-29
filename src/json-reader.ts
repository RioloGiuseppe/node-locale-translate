import { readFileSync } from 'fs'
export type TranslateFunction = (t: string) => Promise<string>;
export type LocalObject = { [id: string]: any }
export class JsonReader {
    private _fname: string = "";
    private _locale: LocalObject = {};
    private _trFun: TranslateFunction;
    constructor(path: string, encode: string, _trFun: TranslateFunction) {
        let f = readFileSync(path, encode)
        this._trFun = _trFun;
        this._locale = JSON.parse(f);
    }

    public async translate() {
        return await this._recursion({}, this._locale, this._trFun);
    };

    private async _recursion(out: LocalObject, inp: LocalObject, tr_fun: TranslateFunction): Promise<LocalObject> {

        for (let p of Object.keys(inp)) {
            if (typeof inp[p] !== "string") {
                out[p] = {};
                await this._recursion(out[p], inp[p], tr_fun);
            }
            else {
                out[p] = await tr_fun(inp[p]);
            }

        }
        return out;
    }
}