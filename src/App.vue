<template>
	<div class="app">
		<DropMenu :isDrop="isDropMenu" :toggleDrop="toggleDropMenu" />
		<div class="overlay" @click="toggleDropMenu" :style="{ display: isDropMenu ? 'block' : 'none' }"></div>
		<div class="app-wrapper">
			<AppSidebar :toggleDrop="toggleDropSidebar" :isDrop="isDropSidebar" />
			<div class="app-content" :class="{ 'w100': !isDropSidebar && setWidth() > 768 }">
				<main>
					<div class="page" :class="{'pb': $route.name !== 'menu'}">
						<router-view />
					</div>
					<AppFooter v-if="$route.name !== 'menu' && $route.name !== 'scene'"/>
				</main>
			</div>

		</div>
	</div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { IS_DROP_SIDE_BAR } from '@/utils/constants'
import AppSidebar from '@/components/AppSidebar.vue'
import DropMenu from '@/components/Drop.menu.vue'
import AppFooter from './components/AppFooter.vue';
import {mapMutations} from 'vuex'

export default {
	name: 'App',
	setup() {
		const isDropMenu = ref(false)
		const isDropSidebar = ref(localStorage.getItem(IS_DROP_SIDE_BAR) === 'true')

		const toggleDropMenu = () => isDropMenu.value = !isDropMenu.value
		const toggleDropSidebar = () => {
			isDropSidebar.value = !isDropSidebar.value
			localStorage.setItem(IS_DROP_SIDE_BAR, isDropSidebar.value.toString())
		};

		const setWidth = () => document.documentElement.clientWidth

		onMounted(() => {

			if (localStorage.getItem(IS_DROP_SIDE_BAR) === null) {
				localStorage.setItem(IS_DROP_SIDE_BAR, 'true')
				isDropSidebar.value = true

				if (setWidth() <= 768) {
					setTimeout(() => {
						isDropSidebar.value = false
					}, 3500)
				}
			}

		})

		return { isDropSidebar, toggleDropSidebar, isDropMenu, toggleDropMenu, setWidth }
	},

	components: {
		AppSidebar,
		DropMenu,
		AppFooter
	},
}
</script>

<style>
@import url(./assets/css/styles.css);
@import url(./assets/css/new-styles.css);
@import url(@/assets/css/media.css);
@import url(@/assets/css/new-media.css);
</style>
