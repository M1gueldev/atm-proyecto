<script lang="ts">
    export let data
</script>
<h1 class="text-2xl">
    Deposito
</h1>

<form class="flex flex-col gap-4 my-4"  method="POST" action="?/deposito">
    <label>
        Monto
        <input type="number" id="amount" name="amount" class="input input-bordered w-full max-w-xs">
    </label>

    <input type="submit" value="Guardar" class="btn btn-primary mr-auto">
</form>