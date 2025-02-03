import { Character } from "./character";
export class Bowman extends Character{
    constructor(name) {
        super(name, 'Bowman')
        this.attack = 25;
        this.defence = 25;
    }
}