import { Pot } from "../domain/monzo/pot";

export function mapPot(src: Pot): Pot {
    const pot = new Pot();
    console.dir(Object.keys(pot), { depth: null });
    Object.keys(pot).forEach((value: string, index: number): void => {
        console.log(value);
    })
    return new Pot();
}