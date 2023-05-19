<script lang="ts">
	import { goto } from '$app/navigation';
	export let data;
	const member: Member[] = data.member;
</script>

<div class="main--div">
	<div>
		<h2>{member.name}</h2>
		<h2>{member.age}</h2>
		<h2>{member.status}</h2>
	</div>
	<div>
		<button on:click={() => goto('/')}>Back to Home</button>
	</div>
</div>

<style>
	.main--div {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 50px 10px;
		color: #242424;
	}
	button {
		padding: 7px 10px;
	}
</style>