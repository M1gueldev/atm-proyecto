<script lang="ts">
    import {page} from '$app/stores'
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
            <th></th>
        </tr>
        </thead>
        <tbody>
        <!-- row 1 -->
        {#each $page.data.user.Account  as acc, i}
        <tr>
            <th>{i+1}</th>
            <td>{acc.id + 10000000000}</td>
            <td>Bs. {acc.balance}</td>
            <td>
                <a href="retiro/{acc.id}" class="btn btn-outline">
                    Retiro
                </a>
            </td>
            <td>
                <a  href="transferencia/{acc.id}" class="btn btn-outline">
                    Transferencia
                </a>
            </td>
            <td>
                <a href="deposito/{acc.id}" class="btn btn-outline">
                    Deposito
                </a>
            </td>
        </tr>
            {/each}
        </tbody>
    </table>
</div>
<br/>
<form action="/logout" method="POST">
    <button class="btn btn-primary" type="submit">Cerrar Sesion</button>
</form>