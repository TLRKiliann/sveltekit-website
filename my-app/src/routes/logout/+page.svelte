<script lang="ts">
  import '@fontsource-variable/crimson-pro';

  const handleTime = () => {
    const timer = setTimeout(() => {
      console.log("logout");
    }, 3000)
    return () => clearTimeout(timer);
  }
  handleTime();

</script>

<h1 class="class-logout">
  Logout ok, see you next time !
</h1>

<style>
  .class-logout {
    width: auto;
    margin: 30% auto;
    text-align: center;
    font-family: 'Crimson Pro Variable', serif;
  }
</style>