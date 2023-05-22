<script>
	export let data;
	console.log(data)
</script>

<div class="main--div">
	<h1>Profile</h1>
</div>

<div>
	<p>{data.profile.name}</p>
	<p>{data.profile.lastname}</p>
	<p>{data.profile.phone}</p>
</div>

<style>
	.main--div {
		margin-top: 20px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 50px 10px;
		color: #242424;
	}
</style>