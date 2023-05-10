<script lang="ts">
  import type { ActionData } from '../../../../.svelte-kit/types/src/routes'

  export let form: ActionData
</script>

<h1 class="text-2xl">Registro de Usuario</h1>

<form action="?/register" method="POST" class="flex flex-col gap-4 ">
  <div>
    <label for="username">Usuario</label>
    <input id="name" name="username" type="text" required class="input input-bordered w-full max-w-xs" />
  </div>

  <div>
    <label for="password">Contraseña</label>
    <input id="pass" name="password" type="password" required  class="input input-bordered w-full max-w-xs"/>
  </div>

  {#if form?.user}
    <p class="error">Username is taken.</p>
  {/if}

  <button type="submit" class="btn btn-primary mr-auto">Registrar</button>
</form>