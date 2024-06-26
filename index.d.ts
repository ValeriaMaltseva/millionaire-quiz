/// <reference types="next-plugin-svgr/types/svg" />
/// <reference types="next-plugin-svgr/types/svgFileLoader" />

declare module '*.svg' {
    import React = require('react');

    export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
    const src: string;
    export default src;
}
