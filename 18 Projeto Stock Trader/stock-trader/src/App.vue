<template>
	<v-app>
		<header-app></header-app>
		<v-content>
			<v-container>
				<router-view></router-view>
			</v-container>
		</v-content>
	</v-app>
</template>

<script>
import headerApp from './components/Header'

export default {
	components: {
		headerApp
	}
}
</script>

<style>

</style>

