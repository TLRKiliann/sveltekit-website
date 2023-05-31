<script lang="ts">
  import type { ActionData } from './$types';
  import { page } from '$app/stores';
  //import '@fontsource-variable/crimson-pro';

  //export let form: ActionData;

  const redirectTo = $page.url.searchParams.get('redirectTo') || '/';
</script>

<form method='post' action='?/logout&redirectTo={redirectTo}'>
	<h1>Page Svelte Logout</h1>

      <!--div class="div--input">

        <input 
          type="text" 
          name="username"
          placeholder="Username"
          value={form?.username ?? ''} 
          class="input--tag"
        />
        <input type="password" name="password" placeholder="Password" class="input--tag" />

      </div-->

	<button type="submit">Logout</button>
</form>

<style>
	h1 {
		margin-top: 100px;
	}
</style>