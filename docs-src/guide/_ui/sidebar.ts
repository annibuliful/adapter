import { css } from '@devcapsule/adapter';
import Color from 'color';

import { aspectRatio, bgColor } from '../../_ux/style';
import { buttonStyle } from '../../_ux/ui/button';
import { color } from '../../_ux/designToken';
import { Sidebar as _Sidebar } from '../../_ux/ui/sidebar';


const sideBarStyle = css`
    height: 110dvh;
    ${bgColor(color.dark)}

    filter: drop-shadow(2px 2px 4px ${Color(color.dark)
        .alpha(0.8).string()});

    &.show {
        filter: drop-shadow(2px 2px 4px ${Color(color.dark)
        .alpha(0.8).string()});
        [el="toggle"] {
            span { transform: rotate(180deg) }
        };
    }
    
    &.hide {
        filter: none;
        [el="toggle"] {
            span { transform: rotate(0deg) }
        };
    }

    el-button[el="toggle"] {
        ${buttonStyle('blue')}
        display: flex;
        justify-content: center;
        align-items: stretch;
        position: fixed;
        top: 70dvh;
        right: 0;
        width: 3em;
        transform: translateX(100%);
        opacity: 0.7;
        &:hover { opacity: 1 };
        ${aspectRatio('1')}
        button {
            width: 100%;
            border-top-left-radius:0 ;
            border-bottom-left-radius: 0;
        }
        span {
            line-height: 1;
            font-size: 1.5em;
            transition: transform 0.4s ease;
            transform: rotate(0deg);
        }
    }
`;

class Sidebar extends _Sidebar {
    static css = css`
        ${Sidebar.style()}
        ${sideBarStyle}
    `;

    constructor() {
        super();
        this.querySelector('[el="toggle"]')?.addEventListener('click', () => {  
            this.toggle();
        });

        let mql = window.matchMedia('screen and (max-width: 1200px)');
        setTimeout(() => {
            this.onMediaQueryChange(mql);
            mql.addEventListener('change', () => {
                this.onMediaQueryChange(mql);
            });
        }, 750);
    }

    onMediaQueryChange(mql: MediaQueryList) {
        mql.matches ? this.hide() : this.show();
    }

    show() {
        super.show();
        this.dispatchEvent(new CustomEvent('show'));
    }

    hide() {
        super.hide();
        this.dispatchEvent(new CustomEvent('hide'));
    }
}

export { Sidebar };