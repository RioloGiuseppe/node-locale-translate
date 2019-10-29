import { JsonReader } from './json-reader'
import { writeFileSync } from 'fs';
import { GoogleTranslate } from './google-translate'
import * as args from 'args'
import key from './api-key'

args
    .option('in', 'The source language', 'en')
    .option('folder', "Select the locale folder", 'locale')
    .option('spacing', "Select the spacing indent for out json", 4)
    .option('out', 'The output languages csv')
    .option('google-prj', 'Google apis project id', key.projectId)
    .option('google-key', 'Google apis project key', key.key)

const flags = args.parse(process.argv)

if (typeof flags.out == "undefined") {
    console.error("Miss output languages")
    process.exit(1);
}

var _googleTranslate = new GoogleTranslate({
    projectId: flags.googlePrj,
    key: flags.googleKey
});

async function translateLocale(input: string, langs: string[]) {
    for (let lang of langs) {
        try {
            console.log(`Translating ${lang}...`);
            let jr = new JsonReader(`${flags.folder}/${input}.json`, 'utf8', (t: string) => _googleTranslate.translate(t, input, lang));
            let data = await jr.translate();
            writeFileSync(`${flags.folder}/${lang}.json`, JSON.stringify(data, null, flags.spacing));
            console.log(`Translating ${lang} completed.`);
        }
        catch (e) {
            console.error(`Fail to translate lang ${lang}. Error ${JSON.stringify(e)}`)
        }
    }
}

translateLocale(flags.in, flags.out.split(',').map(o => o.trim()))
    .then(() => console.log("Completed!"))
    .catch(o => console.error(o))

// node index --in en --out ar,de,es,fr,he,hu,it,ja,ko,ru,zh