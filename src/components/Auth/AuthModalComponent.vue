<template>
  <div class="auth-modal">
    <div class="auth-modal__overlay" @click="auth.close()"></div>
    <div class="auth-modal__panel">
      <div class="auth-modal__image">
        <img src="/gallery/2.jpg" alt="" />
      </div>
      <div class="auth-modal__content">
        <router-link class="auth-modal__logo" to="/" @click="auth.close()">3legant<span class="color-n4">.</span></router-link>
        <button class="btn btn__icon auth-modal__close" type="button" @click="auth.close()">
          <img src="/icons/close.svg" alt="close" />
        </button>

        <form class="auth-modal__form" v-if="auth.mode === 'signin'" @submit.prevent="submit">
          <h1>Sign In</h1>
          <p class="auth-modal__switch">
            Don't have an account yet?
            <button type="button" @click="auth.switchTo('signup')">Sign Up</button>
          </p>

          <label class="field field-wide">
            <span class="field__label">Your username or email address</span>
            <input type="text" v-model="signIn.login" required />
          </label>
          <label class="field field-wide password-field">
            <span class="field__label">Password</span>
            <input :type="showPassword ? 'text' : 'password'" v-model="signIn.password" required />
            <button class="password-field__toggle" type="button" @click="showPassword = !showPassword">
              <img :src="showPassword ? '/icons/eye-off.svg' : '/icons/eye.svg'" alt="" />
            </button>
          </label>

          <div class="auth-modal__row">
            <label class="checkbox-row">
              <input type="checkbox" v-model="signIn.remember" />
              Remember me
            </label>
            <button class="auth-modal__link" type="button">Forgot password?</button>
          </div>

          <button class="btn btn__primary" type="submit">Sign In</button>
        </form>

        <form class="auth-modal__form" v-else @submit.prevent="submit">
          <h1>Sign up</h1>
          <p class="auth-modal__switch">
            Already have an account?
            <button type="button" @click="auth.switchTo('signin')">Sign in</button>
          </p>

          <label class="field field-wide">
            <span class="field__label">Your name</span>
            <input type="text" v-model="signUp.name" required />
          </label>
          <label class="field field-wide">
            <span class="field__label">Username</span>
            <input type="text" v-model="signUp.username" required />
          </label>
          <label class="field field-wide">
            <span class="field__label">Email address</span>
            <input type="email" v-model="signUp.email" required />
          </label>
          <label class="field field-wide password-field">
            <span class="field__label">Password</span>
            <input :type="showPassword ? 'text' : 'password'" v-model="signUp.password" required />
            <button class="password-field__toggle" type="button" @click="showPassword = !showPassword">
              <img :src="showPassword ? '/icons/eye-off.svg' : '/icons/eye.svg'" alt="" />
            </button>
          </label>

          <label class="checkbox-row">
            <input type="checkbox" v-model="signUp.agree" required />
            I agree with <strong>Privacy Policy</strong> and <strong>Terms of Use</strong>
          </label>

          <button class="btn btn__primary" type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthModalStore } from '@/store/modules/authModal.js'

const auth = useAuthModalStore();
const router = useRouter();
const showPassword = ref(false);

const signIn = reactive({ login: '', password: '', remember: false });
const signUp = reactive({ name: '', username: '', email: '', password: '', agree: false });

// Demo only: no backend, submitting either form just closes the modal
// and drops the visitor on My Account as if the sign-in had succeeded.
const submit = () => {
  auth.close();
  router.push('/account');
};
</script>
