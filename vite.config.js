import {defineconfig} from "vite";

export default defineconfig ({
    base: "./",
    build: {
        minify: "terser",
    },
});