<script lang="ts">
  import type { ActionData } from './$types'

  export let form: ActionData
</script>

<h1 class="text-2xl">Registro de Usuario</h1>

<form action="?/register" method="POST" class="flex flex-col gap-4 ">
  <div>
    <label for="name" > Usuario</label>
    <input id="name" name="username" type="text" required class="input input-bordered w-full max-w-xs" />
  </div>

  <div>
    <label for="pass">Contraseña</label>
    <input id="pass" name="password" type="password" required  class="input input-bordered w-full max-w-xs"/>
  </div>

  {#if form?.user}
    <p class="error">Usuario existe.</p>
  {/if}

  <button type="submit" class="btn btn-primary mr-auto">Registrar</button>
</form>