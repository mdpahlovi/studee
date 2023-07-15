export interface IPublisher {
    name: string;
    email: string;
}

export interface IReview {
    user: string;
    comment: string;
}

export interface IBook {
    _id?: string;
    title: string;
    cover: string;
    author: string[];
    genre: string;
    publicationYear: number;
    publisher: IPublisher;
    reviews: IReview[];
    rating: number;
    price: number;
    synopsis: string;
}

export interface IApiResponse<T> {
    success: boolean;
    statusCode: number;
    message?: string | null;
    data?: T | null;
}

export interface IBookInput {
    title: string;
    cover: string;
    author1: string;
    author2: string;
    genre: string;
    publicationYear: number;
    publisherName: string;
    rating: number;
    price: number;
    synopsis: string;
}

export interface IAuthInput {
    email: string;
    password: string;
}
