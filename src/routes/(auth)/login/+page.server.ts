import { fail, redirect } from '@sveltejs/kit'
import type { Action, Actions, PageServerLoad } from './$types'
import prisma from "$lib/prisma";


export const load: PageServerLoad = async ({locals}) => {
  if (locals.user) {
    throw redirect(302, '/balance')
  }
}

const login: Action = async ({ cookies, request }) => {
  const data = await request.formData()
  const username = data.get('name')
  const password = data.get('pass')

  console.log('User Creds: ', {username, password})

  if (
    typeof username !== 'string' ||
    typeof password !== 'string' ||
    !username ||
    !password
  ) {
    return fail(400, { invalid: true })
  }

  const user = await prisma.user.findUnique({ where: { name: username } })

  console.log('User get: ', user)

  if (!user) {
    return fail(400, { credentials: true })
  }

  if (password != user.pass) {
    return fail(400, { credentials: true })
  }

  cookies.set('session', user.id.toString(), {
    // send cookie for every page
    path: '/',
    // server side only cookie so you can't use `document.cookie`
    httpOnly: true,
    // only requests from same site can send cookies
    // https://developer.mozilla.org/en-US/docs/Glossary/CSRF
    sameSite: 'strict',
    // only sent over HTTPS in production
    // secure: process.env.NODE_ENV === 'production',
    // set cookie to expire after a month
    secure: true,
    maxAge: 60 * 60 * 24 * 30,
  })

  // redirect the user
  throw redirect(302, '/balance')
}

export const actions: Actions = { login }
