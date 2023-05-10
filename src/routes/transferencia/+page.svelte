<script lang="ts">
    import {page} from '$app/stores'

    const format = (num) => {
        var r = "" + num;
        while (r.length < 10) {
            r = "0" + r;
        }
        return r
    }
</script>
<h1 class="text-2xl">
    Transeferencia de Fondos
</h1>

<form method="post" action="?/transferencia" class="flex flex-col gap-4 my-4">
    <label for="src">
        Cuenta de Origen
        <select name="src" id="src" class="select select-bordered w-full max-w-xs">
            {#each $page.data.user.Account as ac}
                <option>{format(ac.id)}</option>
            {/each}
        </select>

    </label>
    <label for="dst">
        Cuenta de Destino
        <input name="dst" id="dst" type="text" placeholder="Destino" class="input input-bordered w-full max-w-xs"/>
    </label>
    <label for="amount">
        Monto
        <input id="amount" name="amount" type="text" placeholder="Monto" class="input input-bordered w-full max-w-xs"/>
    </label>

    <input class="btn-primary btn mr-auto" type="submit" value="Transferir">

</form>