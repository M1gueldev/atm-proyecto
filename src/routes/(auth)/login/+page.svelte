<script lang="ts">
	import { applyAction, enhance } from '$app/forms'

	export let form
</script>
<h1 class="mx-auto text-2xl">
    Inicio de Sesion
</h1>
<form class="flex justify-center flex-col gap-4"
    action="?/login" method="POST" use:enhance>
    <div class="form-control w-full max-w-xs">
        <label class="label" for="name">
            <span class="label-text">Nombre de Usuario</span>
        </label>
        <input id="name" name="name" type="text" placeholder="Nombre de usuario" class="input input-bordered w-full max-w-xs"/>
    </div>
    <div class="form-control w-full max-w-xs">
        <label class="label" for="pass">
            <span class="label-text">Contraseña</span>
        </label>
        <input id="pass" name="pass" type="password" placeholder="Contraseña" class="input input-bordered w-full max-w-xs"/>
    </div>

  {#if form?.invalid}
    <p class="error">Usuario y contraseña invalidos.</p>
  {/if}

  {#if form?.credentials}
    <p class="error">Usuario o contraseña incorrecta.</p>
  {/if}
    <input type="submit" value="Iniciar Sesion" class="btn btn-primary mr-auto">
</form>