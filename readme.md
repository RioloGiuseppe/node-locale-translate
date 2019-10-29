# Translator for json locale files

Simple node application to translate json file used in i18n for web and mobile apps.

### Json sample

Part of eglish json used for i18n

```json
{
    "common": {
        "close": "Close",
        "ok": "Ok"
    },
    "checkout": {
        "title": "Checkout",
        "dishList": "Order summary",
        "payments": "Payments"
    },
    "ingredientDetail": {
        "relatedRecipes": "Related recipes",
        "nutfact": {
            "energy": "Calories",
            "title": "Nutritional Facts",
            "carbs": "Carbohydrate",
            "sugar": "Sugars",
            "fat": "Fats",
            "satfat": "Saturated fats",
            "transfat": "Insaturated fats",
            "protein": "Proteins",
            "sodium": "Sodium",
            "fiber": "Fiber"
        }
    }
}
```

### Usage

Sample of usage to translate in japanese and korean


```sh 
node index --in en --out ja,ko
```

Japanese output

```json
{
    "common": {
        "close": "閉じる",
        "ok": "OK"
    },
    "checkout": {
        "title": "チェックアウト",
        "dishList": "注文の概要",
        "payments": "お支払い"
    },
    "ingredientDetail": {
        "relatedRecipes": "関連レシピ",
        "nutfact": {
            "energy": "カロリー",
            "title": "栄養成分",
            "carbs": "炭水化物",
            "sugar": "砂糖",
            "fat": "脂肪",
            "satfat": "飽和脂肪",
            "transfat": "不飽和脂肪",
            "protein": "たんぱく質",
            "sodium": "ナトリウム",
            "fiber": "ファイバ"
        }
    }
}
```

### Options

```sh 
> node build/index -h 

  Usage: index [options] [command]

  Commands:
    help     Display help
    version  Display version

  Options:
    -f, --folder [value]      Select the locale folder (defaults to "locale")
    -G, --google-key [value]  Google apis project key (defaults to "<key>")
    -g, --google-prj [value]  Google apis project id (defaults to "<project-id>")
    -h, --help                Output usage information
    -i, --in [value]          The source language (defaults to "en")
    -o, --out                 The output languages csv
    -s, --spacing <n>         Select the spacing indent for out json (defaults to 4)
    -v, --version             Output the version number

```

### Goolge APIs configuration

Plase set your google apis config in src/api-key.ts