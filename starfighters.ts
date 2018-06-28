import { spacecraft, containership } from "./base-ships";

export class millennionfalcon extends  spacecraft  implements containership{
    cargo: number;

    constructor(){
        super ("coisa")
        this.cargo = 1;
    }

    jump()
    {


    }

}