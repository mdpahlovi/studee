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
    publicationDate: Date | string;
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
    publicationDate: Date;
    publisherName: string;
    rating: number;
    price: number;
    synopsis: string;
}

export interface IAuthInput {
    email: string;
    password: string;
}

export interface IUserState {
    user: {
        email: string | null;
    };
    isLoading: boolean;
    isError: boolean;
    error: string | null;
}

export interface ICredential {
    email: string;
    password: string;
}

export interface IReadlist {
    _id?: string;
    user: string;
    book: IBook;
    planToRead: boolean;
    isReading: boolean;
    isFinished: boolean;
}

export interface IWishlist {
    book: string;
    quantity?: number;
}
