'use client'
import { useMutation } from "@tanstack/react-query"
import { ApiClient } from "../ApiClient"
import { z } from "zod"
import { LoginSchema } from "../../validation-schema/login.schema"
import { ErrorResponse } from "@/types/response"
import { useLocalstorage } from "@/lib/helpers"
import { toast } from "@/hooks/use-toast"

type PayloadType = z.infer<typeof LoginSchema>

export const useSignIn = () => {
    const { getData, setData } = useLocalstorage()
    return useMutation<any, ErrorResponse, PayloadType>({
        mutationFn: async (payload: PayloadType) => {
            return await ApiClient.post('/auth/login', payload).then(res => res.data)
        },
        onSuccess(data, variables, context) {
            toast({ title: 'success login' })
        },
    })
}