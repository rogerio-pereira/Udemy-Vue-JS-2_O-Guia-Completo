<template>
	<v-app>
		<app-menu />

		<app-toolbar />

		<v-content>
			<app-carousel />
		</v-content>

		<app-footer />
	</v-app>
</template>

<script>
import Footer from '@/components/template/Footer.vue'; // 		@/ é o caminho global a partir de src
import Carousel from '../components/widgets/Carousel.vue'; // 	./ ou ../ é o caminho local a partir do arquivo
import Toolbar from '../components/template/Toolbar.vue';
import Menu from '../components/template/Menu.vue';

export default {
	components: {
		'app-footer': Footer,
		'app-carousel': Carousel,
		'app-toolbar': Toolbar,
		'app-menu': Menu,
	},
	data() {
		return {
			
		}
	}
}
</script>
