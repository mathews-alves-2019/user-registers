export interface EntityRepository {
    execute: (entity: any) => any
}

export interface UpdateEntityRepository {
    execute: (entity: any, userId: string) => any
}
