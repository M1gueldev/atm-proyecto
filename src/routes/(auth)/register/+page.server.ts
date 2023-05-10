import { fail, redirect } from '@sveltejs/kit'
import type { Action, Actions, PageServerLoad } from '../../../../.svelte-kit/types/src/routes'
import prisma from "../../../lib/prisma";

export const load: PageServerLoad = async () => {
  // todo
}

const register: Action = async ({ request }) => {
  const data = await request.formData()
  const username = data.get('name')
  const password = data.get('pass')

  if (
    typeof username !== 'string' ||
    typeof password !== 'string' ||
    !username ||
    !password
  ) {
    return fail(400, { invalid: true })
  }

  const user = await prisma.user.findUnique({
    where: { name: username },
  })

  if (user) {
    return fail(400, { user: true })
  }

  await prisma.user.create({
    data: {
      name: username,
      pass: password
    },
  })

  throw redirect(303, '/login')
}

export const actions: Actions = { register }
