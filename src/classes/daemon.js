import { Character } from "./character";
export class Daemon extends Character{
    constructor(name) {
        super(name, 'Daemon')
        this.attack = 10;
        this.defence = 40;
    }
}