import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { PlayerTag } from "../models/PlayerTag";
import { PlayerTagToken } from "../models/PlayerTagToken";

export const api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({ baseUrl: "https://localhost:7008/" }),
    endpoints: (builder) => ({
        login : builder.mutation({
            query: (usercred) => ({
                url: `Login`,
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: usercred,
                credentials: "include",
            })
        }),
        register : builder.mutation({
            query: (usercred) => ({
                url: `Register`,
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: usercred,
                credentials: "include",
            })
        }),
        logout : builder.mutation({
            query: () => ({
                url: `Logout`,
                method: "POST",
                headers: {"Content-Type": "application/json"},
                credentials: "include",
            })
        }),
        user: builder.query({
            query: (user) => ({
                url: `User`,
                method: "GET",
            }),
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
        addCocPlayerTag: builder.mutation({
            query: ({id, tag}) => ({
                url: `${encodeURIComponent(id)}/AddCocPlayerTag/${encodeURIComponent(tag)}`,
                method: "PUT",
            }),
        }),
        addCrPlayerTag: builder.mutation({
            query: ({id, tag}) => ({
                url: `${encodeURIComponent(id)}/AddCrPlayerTag/${encodeURIComponent(tag)}`,
                method: "PUT",
            }),
        }),
        addBsPlayerTag: builder.mutation({
            query: ({id, tag}) => ({
                url: `${encodeURIComponent(id)}/AddBsPlayerTag/${encodeURIComponent(tag)}`,
                method: "PUT",
            }),
        }),
        addCocPlayerTag2: builder.mutation({
            query: (playerTag: PlayerTagToken) => ({
                url: `${encodeURIComponent(playerTag.userId)}/AddCocPlayerTag2/${encodeURIComponent(playerTag.tag)}?token=${encodeURIComponent(playerTag.token)}`,
                method: "PUT",
            }),
        }),
        addCrPlayerTag2: builder.mutation({
            query: ({id, tag, token}) => ({
                url: `${encodeURIComponent(id)}/AddCrPlayerTag2/${encodeURIComponent(tag)}?token=${encodeURIComponent(token)}`,
                method: "PUT",
            }),
        }),
        addBsPlayerTag2: builder.mutation({
            query: ({id, tag, token}) => ({
                url: `${encodeURIComponent(id)}/AddBsPlayerTag2/${encodeURIComponent(tag)}?token=${encodeURIComponent(token)}`,
                method: "PUT",
            }),
        }),
        removeCocPlayerTag: builder.mutation({
            query: (playerTag: PlayerTag) => ({
                url: `${encodeURIComponent(playerTag.userId)}/RemoveCocPlayerTag/${encodeURIComponent(playerTag.tag)}`,
                method: "DELETE",
            }),
        }),
        removeCrPlayerTag: builder.mutation({
            query: (playerTag: PlayerTag) => ({
                url: `${encodeURIComponent(playerTag.userId)}/RemoveCrPlayerTag/${encodeURIComponent(playerTag.tag)}`,
                method: "DELETE",
            }),
        }),
        removeBsPlayerTag: builder.mutation({
            query: (playerTag: PlayerTag) => ({
                url: `${encodeURIComponent(playerTag.userId)}/RemoveBsPlayerTag/${encodeURIComponent(playerTag.tag)}`,
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

export const { useLoginMutation, useRegisterMutation, useLogoutMutation, useUserQuery,
    useCocPlayerQuery, useCrPlayerQuery, useBsPlayerQuery,
    useGetAllCocPlayersQuery, useGetAllCrPlayersQuery, useGetAllBsPlayersQuery,  
    useGetCocPlayerQuery, useGetCrPlayerQuery, useGetBsPlayerQuery,  
    useAddCocPlayerTagMutation, useAddCrPlayerTagMutation, useAddBsPlayerTagMutation, 
    useAddCocPlayerTag2Mutation, useAddCrPlayerTag2Mutation, useAddBsPlayerTag2Mutation, 
    useRemoveCocPlayerTagMutation, useRemoveCrPlayerTagMutation, useRemoveBsPlayerTagMutation, useGetBsBrawlerInfoQuery } = api;
