export {};

declare global {
    interface Window {
        lineup: Array<URL>; //FIXME lineup is an array of panel(s) (and not URL)
    }
}
