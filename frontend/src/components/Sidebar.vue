

<script setup>
import { ref } from 'vue'
// import logoURL from '../assets/logo.png'
const is_expanded = ref(localStorage.getItem("is_expanded") === "true");
const ToggleMenu = () => {
    console.log(is_expanded.value)
	is_expanded.value = !is_expanded.value
	localStorage.setItem("is_expanded", is_expanded.value)
    console.log(localStorage.setItem("is_expanded", is_expanded.value));
}


</script>


<template> 
    <div class="set-sidebar-container">
	<aside :class="`${is_expanded ? 'is-expanded' : ''}`">
		<div class="menu-toggle-wrap">
			<button class="menu-toggle" @click="ToggleMenu">
				<span class="material-icons" >
                    <div class="h-menu"></div>
                    <div class="h-menu"></div>
                    <div class="h-menu"></div>
                </span>
			</button>
            <button id='close'>close</button>
		</div>

		<h3>Menu</h3>
		<div class="menu">
			<router-link to="/" class="button">
		 
				<span class="text">Home</span>
			</router-link>
			<router-link to="/about" class="button">
	 
				<span class="text">About</span>
			</router-link>
			<router-link to="/team" class="button">
		 
				<span class="text">Team</span>
			</router-link>
			<router-link to="/contact" class="button">
	 
				<span class="text">Contact</span>
			</router-link>
		</div>

		<div class="flex"></div>
	</aside>
</div>

</template>

<style lang="scss" scoped>

.h-menu{
  width: 30px;
  height: 5px;
  background-color: rgb(255, 255, 255);
  margin: 3px 0;
}

#close {
	overflow: hidden;
	position: relative;
	border: none;
	padding: 0;
	width: 2em; height: 2em;
	border-radius: 50%;
	background: transparent;
	color: #1da1f2;
	font: inherit;
	text-indent: 100%;
	cursor: pointer;
	
	&:focus {
		outline: solid 0 transparent;
		box-shadow: 0 0 0 2px #8ed0f9
	}
	
	&:hover {
		background: rgba(29, 161, 142, .1)
	}
	
	&:before, &:after {
		position: absolute;
		top: 15%; left: calc(50% - .0625em);
		width: .125em; height: 70%;
		border-radius: .125em;
		transform: rotate(45deg);
		background: currentcolor;
		content: ''
	}
	
	&:after { transform: rotate(-45deg); }
}
.menu-toggle{
    background: none;
    border:none;
}

aside {
	display: flex;
	flex-direction: column;
	background-color: var(--dark);
	color: var(--light);
	width: calc(2rem + 32px);
	overflow: hidden;
	min-height: 100vh;
	padding: 2rem;
	transition: 0.2s ease-in-out;
	.flex {
		flex: 1 1 0%;
	}
 
 
	h3, .button .text {
		opacity: 0;
		transition: opacity 0.3s ease-in-out;
	}
	h3 {
		color: var(--grey);
		font-size: 0.875rem;
		margin-bottom: 0.5rem;
		text-transform: uppercase;
	}
	.menu {
		margin: 0 -1rem;
		.button {
			display: flex;
			align-items: center;
			text-decoration: none;
			transition: 0.2s ease-in-out;
			padding: 0.5rem 1rem;
 
			.text {
				color: var(--light);
				transition: 0.2s ease-in-out;
			}
			&:hover {
				background-color: var(--dark-alt);
	 
			}
			&.router-link-exact-active {
				background-color: var(--dark-alt);
				border-right: 5px solid var(--primary);
			}
		}
	}
 
	&.is-expanded {
        position: fixed;
		width: 20%;
        background-color: #1a649e;
        z-index: 99;
 
		h3, .button .text {
			opacity: 1;
		}
		.button {
			.material-icons {
				margin-right: 1rem;
			}
		}
		.footer {
			opacity: 0;
		}
	}
	@media (max-width: 1024px) {
		position: absolute;
		z-index: 99;
	}
}
</style>