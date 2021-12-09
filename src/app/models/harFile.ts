import { Path } from "./path";

export class HarFile {

    constructor(
        public path: Path,
        public name: string,
        public content: string
    ) { }
}