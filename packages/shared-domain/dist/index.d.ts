type PaginationQuery = {
    pageNumber: number;
    pageSize: number;
};
type PaginationResponse = {
    filteredItems: number;
    totalItems: number;
    pageNumber: number;
    pageSize: number;
};
type Sort = {
    by: string;
    direction: string;
};

export { PaginationQuery, PaginationResponse, Sort };
