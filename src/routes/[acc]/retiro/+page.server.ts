import type {Actions} from './$types'
import prisma from "$lib/prisma";
import {redirect} from "@sveltejs/kit";

export const actions = {
    retiro: async ({cookies, request, params}) => {
        const accID = params.acc
        const amount = (await request.formData()).get('amount')
        await prisma.account.update({
            where: {
                id: Number(accID)
            },
            data: {
                balance: {
                    decrement: Number(amount)
                }
            }
        })
        console.log('Retirado: ', accID, ',valor de: ', amount)
        throw redirect(302, '/balance')
    }
} satisfies Actions