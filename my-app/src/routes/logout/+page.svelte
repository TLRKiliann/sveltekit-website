<script>
  import { goto } from '$app/navigation';

  const handleTime = () => {
    const timer = setTimeout(() => {
      goto('/')
    }, 5000)
    return () => clearTimeout(timer);
  }
  handleTime();

  console.log("ok ?")
</script>

<h1 class="class-logout">
  Logout ok, see you next time !
</h1>

<style>
  .class-logout {
    width: 40%;
    margin: 30% auto;
  }
</style>