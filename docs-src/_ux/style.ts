import { bgColor, fontFluid, Button } from "gadjet/src/gadjet";
import { palette } from "./color";

const css = String.raw;

Button.define('button');

const style = new CSSStyleSheet();
document.adoptedStyleSheets.push(style);

style.replaceSync(css`
html {
    line-height: 1.75;
    font-family: sans;
    ${fontFluid({
        fontSizeMin: 14,
        fontSizeMax: 20,
        vwMin: 300,
        vwMax: 1200
    })}
}

body {
    padding-bottom: 10rem;
}

code {
    padding: 0.1rem 0.5rem;
    ${bgColor(palette.light)}
    border-radius: 0.25em;
    font-family: monospace;
    font-size: 0.8em;
}

p, h1, h2, h3, h4, ul, li {
    max-width: 40rem;
    margin: auto;
}

.width-100 {
    width: 100%;
}

.text-width {
    width: 100%;
    max-width: 40rem;
}

.container {
    display: block;
    max-width: 1000px;
    min-width: 300px;
    width: 90%;
    margin: auto;

    & h2 {
        line-height: 2;
        text-align: center;
        margin: auto;
        margin-top: 3rem;
        margin-bottom: 2rem;
        font-size: 1.5rem;
    }
    & h3 {
        text-decoration: underline;
        margin: auto;
        margin-top: 2rem;
        margin-bottom: 1rem;
        font-size: 1.25rem;
    }
    & h4 {
        font-size: 1rem;
        margin-top: 1rem;
        margin-bottom: 0.5rem;
    }
}

.flex {
    display: flex;
    flex-wrap: wrap;
}
`);