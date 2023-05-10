import type {PageServerLoad} from './$types'
import {redirect} from "@sveltejs/kit";

export const load: PageServerLoad = async ({ locals }) => {
  // redirect user if logged in
  if (locals.user) {
    throw redirect(302, '/balance')
  } else {
    throw redirect(302, '/login')
  }
}

