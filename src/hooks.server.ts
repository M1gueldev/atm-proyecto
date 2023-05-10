import type {Handle} from '@sveltejs/kit'
import prisma from "./lib/prisma";

export const handle: Handle = async ({event, resolve}) => {
    // get cookies from browser
    const session = event.cookies.get('session')

    if (!session) {
        // if there is no session load page as normal
        return resolve(event);
    }

    // find the user based on the session
    const user = await prisma.user.findUnique({
        where: {
            id: Number(session)
        },
        include: {
            Account: true
        }
    })

    const accounts = await prisma.account.findMany({
        where: {
            id: {not: Number(session)}
        }
    })


    // if `user` exists set `events.local`
    if (user) {
        event.locals = {
            ...event.locals,
            user: user,
            accounts: accounts
        }
    }

    // load page as normal
    return resolve(event);
}
