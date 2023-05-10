import type {Actions} from './$types'
import prisma from "$lib/prisma";
import {fail, redirect} from "@sveltejs/kit";

export const actions = {
    transferencia: async ({cookies, request, params}) => {
        const form = await request.formData()
        const amt = form.get('amount')
        const src = form.get('src')
        const dst = form.get('dst')

        const dest = await prisma.account.findUnique({
            where: {
                id: Number(dst)
            }
        })

        if (!dest) {
            throw fail(400, {dst: true})
        }

        await prisma.account.update({
            where: {
                id: Number(src)
            },
            data: {
                balance: {
                    decrement: Number(amt)
                }
            }
        })
        await prisma.account.update({
            where: {
                id: Number(dst)
            },
            data: {
                balance: {
                    increment: Number(amt)
                }
            }
        })
        throw redirect(302, '/balance')
    }
} satisfies Actions