<script lang="ts">
  import type { PageData } from './$types';
  export let data: PageData;
  const title: string = data.title;
</script>

<slot />