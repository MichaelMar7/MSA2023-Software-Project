import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { User } from "../models/User";

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
        getCocPlayer: builder.query({
            query: ({id, tag}) => ({
                url: `${encodeURIComponent(id)}/GetCocPlayer?tag=${encodeURIComponent(tag)}`,
                method: "GET",
            }),
        }),
        getCrPlayer: builder.query({
            query: ({id, tag}) => ({
                url: `${encodeURIComponent(id)}/GetCrPlayer?tag=${encodeURIComponent(tag)}`,
                method: "GET",
            }),
        }),
        getBsPlayer: builder.query({
            query: ({id, tag}) => ({
                url: `${encodeURIComponent(id)}/GetBsPlayer?tag=${encodeURIComponent(tag)}`,
                method: "GET",
            }),
        }),
        addCocPlayerTag: builder.query({
            query: ({id, tag}) => ({
                url: `${encodeURIComponent(id)}/AddCocPlayerTag?tag=${encodeURIComponent(tag)}`,
                method: "PUT",
            }),
        }),
        addCrPlayerTag: builder.query({
            query: ({id, tag}) => ({
                url: `${encodeURIComponent(id)}/AddCrPlayerTag?tag=${encodeURIComponent(tag)}`,
                method: "PUT",
            }),
        }),
        addBsPlayerTag: builder.query({
            query: ({id, tag}) => ({
                url: `${encodeURIComponent(id)}/AddBsPlayerTag?tag=${encodeURIComponent(tag)}`,
                method: "PUT",
            }),
        }),
        removeCocPlayerTag: builder.query({
            query: ({id, tag}) => ({
                url: `${encodeURIComponent(id)}/RemoveCocPlayerTag?tag=${encodeURIComponent(tag)}`,
                method: "DELETE",
            }),
        }),
        removeCrPlayerTag: builder.query({
            query: ({id, tag}) => ({
                url: `${encodeURIComponent(id)}/RemoveCrPlayerTag?tag=${encodeURIComponent(tag)}`,
                method: "DELETE",
            }),
        }),
        removeBsPlayerTag: builder.query({
            query: ({id, tag}) => ({
                url: `${encodeURIComponent(id)}/RemoveBsPlayerTag?tag=${encodeURIComponent(tag)}`,
                method: "DELETE",
            }),
        }),
    }),
});

export const { useCocPlayerQuery, useCrPlayerQuery, useBsPlayerQuery,
    useGetCocPlayerQuery, useGetCrPlayerQuery, useGetBsPlayerQuery,  
    useAddCocPlayerTagQuery, useAddCrPlayerTagQuery, useAddBsPlayerTagQuery, 
    useRemoveCocPlayerTagQuery, useRemoveCrPlayerTagQuery, useRemoveBsPlayerTagQuery } = api;
