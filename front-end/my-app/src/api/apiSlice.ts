import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({ baseUrl: "https://localhost:7008/" }),
    endpoints: (builder) => ({
        login : builder.query({
            query: ({username, password}) => ({
                url: `Login?username=${username}&password${password}`,
                method: "POST",
            })
        }),
        register : builder.query({
            query: ({username, password}) => ({
                url: `Register?username=${username}&password${password}`,
                method: "POST",
            })
        }),
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
        getAllCocPlayers: builder.query({
            query: (id) => ({
                url: `${encodeURIComponent(id)}/GetCocPlayers`,
                method: "GET",
            }),
        }),
        getAllCrPlayers: builder.query({
            query: (id) => ({
                url: `${encodeURIComponent(id)}/GetCrPlayers`,
                method: "GET",
            }),
        }),
        getAllBsPlayers: builder.query({
            query: (id) => ({
                url: `${encodeURIComponent(id)}/GetBsPlayers`,
                method: "GET",
            }),
        }),
        getCocPlayer: builder.query({
            query: ({id, tag}) => ({
                url: `${encodeURIComponent(id)}/GetCocPlayers/${encodeURIComponent(tag)}`,
                method: "GET",
            }),
        }),
        getCrPlayer: builder.query({
            query: ({id, tag}) => ({
                url: `${encodeURIComponent(id)}/GetCrPlayers/${encodeURIComponent(tag)}`,
                method: "GET",
            }),
        }),
        getBsPlayer: builder.query({
            query: ({id, tag}) => ({
                url: `${encodeURIComponent(id)}/GetBsPlayers/${encodeURIComponent(tag)}`,
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
        addCocPlayerTag2: builder.query({
            query: ({id, tag, token}) => ({
                url: `${encodeURIComponent(id)}/AddCocPlayerTag2/${encodeURIComponent(tag)}?token=${encodeURIComponent(token)}`,
                method: "PUT",
            }),
        }),
        addCrPlayerTag2: builder.query({
            query: ({id, tag, token}) => ({
                url: `${encodeURIComponent(id)}/AddCrPlayerTag2/${encodeURIComponent(tag)}?token=${encodeURIComponent(token)}`,
                method: "PUT",
            }),
        }),
        addBsPlayerTag2: builder.query({
            query: ({id, tag, token}) => ({
                url: `${encodeURIComponent(id)}/AddBsPlayerTag2/${encodeURIComponent(tag)}?token=${encodeURIComponent(token)}`,
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
        getBsBrawlerInfo: builder.query({
            query: (id) => ({
                url: `https://api.brawlapi.com/v1/brawlers/${encodeURIComponent(id)}`,
                method: "GET"
            })
        }),
    }),
});

export const { useLoginQuery, useRegisterQuery, useCocPlayerQuery, useCrPlayerQuery, useBsPlayerQuery,
    useGetAllCocPlayersQuery, useGetAllCrPlayersQuery, useGetAllBsPlayersQuery,  
    useGetCocPlayerQuery, useGetCrPlayerQuery, useGetBsPlayerQuery,  
    useAddCocPlayerTagQuery, useAddCrPlayerTagQuery, useAddBsPlayerTagQuery, 
    useAddCocPlayerTag2Query, useAddCrPlayerTag2Query, useAddBsPlayerTag2Query, 
    useRemoveCocPlayerTagQuery, useRemoveCrPlayerTagQuery, useRemoveBsPlayerTagQuery, useGetBsBrawlerInfoQuery } = api;
