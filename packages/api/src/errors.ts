import { ApolloError } from "apollo-server";
import { getReasonPhrase } from "http-status-codes";

type ErrorCode =
    | 100
    | 101
    | 102
    | 200
    | 201
    | 202
    | 203
    | 204
    | 205
    | 206
    | 207
    | 300
    | 301
    | 302
    | 303
    | 304
    | 307
    | 308
    | 400
    | 401
    | 402
    | 403
    | 404
    | 405
    | 406
    | 407
    | 408
    | 409
    | 410
    | 411
    | 412
    | 413
    | 414
    | 415
    | 416
    | 417
    | 418
    | 419
    | 420
    | 422
    | 423
    | 424
    | 428
    | 429
    | 431
    | 451
    | 500
    | 501
    | 502
    | 503
    | 504
    | 505
    | 507
    | 511;

export const PshError = (code: ErrorCode, message?: string): ApolloError => {
    return new ApolloError(
        message || `${code} ${getReasonPhrase(code)}`,
        code.toString()
    );
};
