import { Adapter, css } from '@devcapsule/adapter';


const cssStyleSheet = new CSSStyleSheet();
cssStyleSheet.replaceSync(css`
button {
    background-color: blue;
    color: white;
    padding: 0.5rem;
    cursor: pointer;
}
a {
    color: red;
    text-decoration: underline;
}
`);
document.adoptedStyleSheets.push(cssStyleSheet);


class FilterButton extends Adapter {
    static css = css`
        all: revert;
        display: inline-flex;
        flex-wrap: wrap;
        box-sizing: border-box;
        border: 1px solid #ccc;
        padding: 1rem;

        & button { all: revert };
    `;
}

FilterButton.define('el-filter-button');
