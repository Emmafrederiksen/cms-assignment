# CMS Assignment – Emma Øhlers Frederiksen

Dette projekt er lavet som en del af CMS-opgaven og indeholder arbejde med:

- WordPress (custom theme + plugin)
- Headless CMS (React + WordPress REST API)
- Docker (containeriseret WordPress)
- Umbraco (.NET CMS)

---

## Projektstruktur

```text
cms-assignment/
├── Umbraco/
│   ├── umbraco-sql/
│   └── how-to.md
│
├── WordPress/
│   ├── headless-wp-react/
│   │   ├── node_modules/
│   │   ├── public/
│   │   ├── src/
│   │   ├── .env
│   │   ├── .gitignore
│   │   ├── eslint.config.js
│   │   ├── index.html
│   │   ├── package-lock.json
│   │   ├── package.json
│   │   ├── README.md
│   │   └── vite.config.js
│   │
│   ├── plugin/
│   │   └── emma-plugin/
│   │       └── emma.php
│   │
│   ├── theme/
│   │   └── emma-theme/
│   │       ├── footer.php
│   │       ├── functions.php
│   │       ├── header.php
│   │       ├── index.php
│   │       └── style.css
│   │
│   └── wp-docker-app/
│       ├── wp-content/
│       ├── .env
│       └── docker-compose.yml
│
├── .gitignore
└── README.md
```

---

## WordPress

Der er udviklet et custom theme samt et plugin.

### Theme
- Custom theme: `emma-theme`
- Indeholder templates (header, footer, index)
- Registrerer custom post type: **Cakes**

### Plugin
- Custom plugin: `emma-plugin`
- Viser en besked i footer
- Demonstrerer brug af hooks (`wp_footer`)

---

## Custom Post Type

Der er oprettet en custom post type kaldet: cake

Den bruges til at oprette produkter (cakes), som vises både i WordPress og i headless løsning.

---

## Headless WordPress (React)

Der er udviklet en React-applikation, som henter data fra WordPress via REST API: `/wp-json/wp/v2/cake`

Funktionalitet:
- Viser cakes
- Tilføj til kurv
- Ændre antal
- Simpel cart løsning

---

## Docker (WordPress)

WordPress er sat op i Docker med:

- WordPress container
- Database (MariaDB)
- phpMyAdmin

### Start projektet: 

`docker compose up -d`

### Adgang:

- WordPress: http://localhost:8001
- phpMyAdmin: http://localhost:8081

---

## Umbraco

Der er oprettet et Umbraco projekt med:

- .NET
- SQL database via Docker
- Container setup

Se mere i: `Umbraco/how-to.md`

---

## Refleksion

I denne opgave har jeg arbejdet med forskellige CMS-systemer og tilgange.

WordPress var hurtigt at komme i gang med og nemt at arbejde i, især med custom post types og plugins.

Headless WordPress gav en bedre forståelse for, hvordan data kan bruges i en frontend applikation via API.
Data hentes dynamisk fra WordPress og renderes i React.

Docker gjorde det muligt at arbejde med et isoleret miljø, hvilket gør projekter nemmere at dele og opsætte.

Umbraco var mere komplekst at arbejde med, men gav en god forståelse for struktur og backend-opsætning.

---

## Sammenligning

| Teknologi        | Fordele                        | Ulemper                      |
|------------------|--------------------------------|------------------------------|
| WordPress        | Nem at bruge, hurtig opsætning | Mindre fleksibelt            |
| Headless WP      | Fleksibel frontend             | Mere kompleks opsætning      |
| Docker           | Ens miljø, nem deling          | Kræver opsætning             |
| Umbraco          | Meget fleksibel                | Sværere at komme i gang      |

---

## Konklusion

Opgaven har givet indsigt i forskellige måder at arbejde med CMS på.

WordPress egner sig godt til hurtige løsninger, mens headless og Umbraco giver mere fleksibilitet til større og mere avancerede projekter.

---

## Skrevet af:

Emma Øhlers Frederiksen


