import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({ baseUrl: "https://localhost:7008/" }),
    endpoints: (builder) => ({
        cocPlayer: builder.query({
            query: (tag) => ({
                url: `CocPlayer/${encodeURIComponent(tag)}`,
                method: "GET",
            }),
        }),
        crPlayer: builder.query({
            query: (tag) => ({
                url: `CrPlayer/${encodeURIComponent(tag)}`,
                method: "GET",
            }),
        }),
        bsPlayer: builder.query({
            query: (tag) => ({
                url: `BsPlayer/${encodeURIComponent(tag)}`,
                method: "GET",
            }),
        }),
        getAllCocPlayer: builder.query({
            query: (id) => ({
                url: `${encodeURIComponent(id)}/GetCocPlayers`,
                method: "GET",
            }),
        }),
        getAllCrPlayer: builder.query({
            query: (id) => ({
                url: `${encodeURIComponent(id)}/GetCrPlayers`,
                method: "GET",
            }),
        }),
        getAllBsPlayer: builder.query({
            query: (id) => ({
                url: `${encodeURIComponent(id)}/GetBsPlayers`,
                method: "GET",
            }),
        }),
        getCocPlayer: builder.query({
            query: ({id, tag}) => ({
                url: `${encodeURIComponent(id)}/GetCocPlayer/${encodeURIComponent(tag)}`,
                method: "GET",
            }),
        }),
        getCrPlayer: builder.query({
            query: ({id, tag}) => ({
                url: `${encodeURIComponent(id)}/GetCrPlayer/${encodeURIComponent(tag)}`,
                method: "GET",
            }),
        }),
        getBsPlayer: builder.query({
            query: ({id, tag}) => ({
                url: `${encodeURIComponent(id)}/GetBsPlayer/${encodeURIComponent(tag)}`,
                method: "GET",
            }),
        }),
        addCocPlayerTag: builder.query({
            query: ({id, tag}) => ({
                url: `${encodeURIComponent(id)}/AddCocPlayerTag/${encodeURIComponent(tag)}`,
                method: "PUT",
            }),
        }),
        addCrPlayerTag: builder.query({
            query: ({id, tag}) => ({
                url: `${encodeURIComponent(id)}/AddCrPlayerTag/${encodeURIComponent(tag)}`,
                method: "PUT",
            }),
        }),
        addBsPlayerTag: builder.query({
            query: ({id, tag}) => ({
                url: `${encodeURIComponent(id)}/AddBsPlayerTag/${encodeURIComponent(tag)}`,
                method: "PUT",
            }),
        }),
        removeCocPlayerTag: builder.query({
            query: ({id, tag}) => ({
                url: `${encodeURIComponent(id)}/RemoveCocPlayerTag/${encodeURIComponent(tag)}`,
                method: "DELETE",
            }),
        }),
        removeCrPlayerTag: builder.query({
            query: ({id, tag}) => ({
                url: `${encodeURIComponent(id)}/RemoveCrPlayerTag/${encodeURIComponent(tag)}`,
                method: "DELETE",
            }),
        }),
        removeBsPlayerTag: builder.query({
            query: ({id, tag}) => ({
                url: `${encodeURIComponent(id)}/RemoveBsPlayerTag/${encodeURIComponent(tag)}`,
                method: "DELETE",
            }),
        }),
    }),
});

export const { useCocPlayerQuery, useCrPlayerQuery, useBsPlayerQuery,
    useGetCocPlayerQuery, useGetCrPlayerQuery, useGetBsPlayerQuery,  
    useAddCocPlayerTagQuery, useAddCrPlayerTagQuery, useAddBsPlayerTagQuery, 
    useRemoveCocPlayerTagQuery, useRemoveCrPlayerTagQuery, useRemoveBsPlayerTagQuery } = api;
