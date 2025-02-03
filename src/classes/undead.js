import { Character } from "./character";
export class Undead extends Character{
    constructor(name) {
        super(name, 'Undead')
        this.attack = 25;
        this.defence = 25;
    }
}