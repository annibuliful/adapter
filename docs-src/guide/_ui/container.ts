import { Adapter } from '@devcapsule/adapter/src/adapter';
import { css } from '@devcapsule/adapter/src/style';

class Container extends Adapter {
    static css = css`
        all: unset;
        display: block;
        box-sizing: border-box;
        margin-bottom: 25dvh;
        max-width: 80ch;
        width: 90%;
        transition: margin-left 0.3s ease-in-out;
    `;

    constructor() {
        super();
        const el_sidebar = document.querySelector('el-sidebar') as HTMLElement;
        setTimeout(() => {
            this.css = this.defaultStyle();
        }, 0);
        el_sidebar.addEventListener('hide', () => {
            this.addStyle(css`
                margin: unset;
            `);
        });
        el_sidebar.addEventListener('show', () => {
            this.css = this.defaultStyle();
        });
    }

    defaultStyle(): string {
        const el_sidebar = document.querySelector('el-sidebar') as HTMLElement;
        return css`
            @media screen and (min-width: 1200px) {
                width: 68%;
                margin-left: calc(${getComputedStyle(el_sidebar).width});
            }
        `;
    }
};

export { Container };