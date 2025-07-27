export interface Pet {
    id: string,
    name: string,
    type: PetType,
    breed: string,
    age: number,
    description?: string,
    imageUrl?: string,
    sex: "male" | "female",
    adopted: boolean,
}
export type PetType = "dog" | "cat" | "bird" | "fish" | "reptile" | "other";