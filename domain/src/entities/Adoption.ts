export interface Adoption {
    id: string,
    userId: string,
    petId: string,
    date: Date,
    approved: boolean,
    comments?: string,
}