import { Translate } from '@google-cloud/translate'

export class GoogleTranslate {
    private _translate: Translate = null;

    constructor(key: any) {
        this._translate = new Translate(key);
    }
    public translate(text: string, from: string, to: string): Promise<string> {
        return new Promise<string>((resolve, reject) => {
            this._translate.translate(text, {
                from, to
            })
                .then(o => resolve(o[0]))
                .catch(e => reject(e));
        });
    }
}