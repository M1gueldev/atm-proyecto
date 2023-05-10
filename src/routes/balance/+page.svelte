<script lang="ts">
    import {page} from '$app/stores'
    function FormatNumberLength(num, length=10) {
    var r = "" + num;
    while (r.length < length) {
        r = "0" + r;
    }
    return r;
}

</script>
<h1 class="text-2xl">
    Bienvenido {$page.data.user.name}
</h1>
<br/>
<div class="overflow-x-auto">
    <table class="table w-full">
        <!-- head -->
        <thead>
        <tr>
            <th></th>
            <th>Nro Cuenta</th>
            <th>Balance</th>
            <th></th>
            <th></th>
        </tr>
        </thead>
        <tbody>
        <!-- row 1 -->
        {#each $page.data.user.Account as acc, i}
            <tr>
                <th>{i + 1}</th>
                <td>{FormatNumberLength(acc.id)}</td>
                <td>Bs. {acc.balance}</td>
                <td>
                    <a href="{acc.id}/retiro" class="btn btn-outline">
                        Retiro
                    </a>
                </td>
                <td>
                    <a href="{acc.id}/deposito" class="btn btn-outline">
                        Deposito
                    </a>
                </td>
            </tr>
        {/each}
        </tbody>
    </table>
</div>
<br/>
<div class="flex gap-4">
    <a href="transferencia" class="btn btn-outline">
        Transferencia
    </a>
    <form action="/logout" method="POST">
        <button class="btn btn-primary" type="submit">Cerrar Sesion</button>
    </form>
</div>
