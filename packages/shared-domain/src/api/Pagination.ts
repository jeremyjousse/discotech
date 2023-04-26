export class PaginationQuery {
	constructor(readonly pageNumber: number, readonly pageSize: number) {}
}

export type PaginationResponse = {
	filteredItems: number
	totalItems: number
	pageNumber: number
	pageSize: number
}

export type Sort = {
	by: string
	direction: string // TODO asc/desc
}
