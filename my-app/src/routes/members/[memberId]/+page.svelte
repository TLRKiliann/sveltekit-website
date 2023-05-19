<script>
	export let data;
	const member = data.member;
</script>

<div id={member.id}>
	<h2>{member.name}</h2>
	<h2>{member.age}</h2>
	<h2>{member.status}</h2>
</div>