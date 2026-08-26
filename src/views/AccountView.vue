<template>
  <main class="container">
    <div class="account-page">
      <h1>My Account</h1>
      <div class="account-page__body">
        <AccountSidebarComponent />
        <form class="account-page__panel" @submit.prevent="save">
          <h2>Account Details</h2>
          <div class="form-card__grid">
            <label class="field">
              <span class="field__label">First name <span class="field__req">*</span></span>
              <input type="text" v-model="form.firstName" placeholder="First name" required />
            </label>
            <label class="field">
              <span class="field__label">Last name <span class="field__req">*</span></span>
              <input type="text" v-model="form.lastName" placeholder="Last name" required />
            </label>
            <label class="field field-wide">
              <span class="field__label">Display name <span class="field__req">*</span></span>
              <input type="text" v-model="form.displayName" placeholder="Display name" required />
              <span class="account-page__hint">This will be how your name will be displayed in the account section and in reviews</span>
            </label>
            <label class="field field-wide">
              <span class="field__label">Email <span class="field__req">*</span></span>
              <input type="email" v-model="form.email" placeholder="Email" required />
            </label>
          </div>

          <h2>Password</h2>
          <div class="form-card__grid">
            <label class="field field-wide password-field">
              <span class="field__label">Old password</span>
              <input :type="showOld ? 'text' : 'password'" v-model="form.oldPassword" placeholder="Old password" />
              <button class="password-field__toggle" type="button" @click="showOld = !showOld">
                <img :src="showOld ? '/icons/eye-off.svg' : '/icons/eye.svg'" alt="" />
              </button>
            </label>
            <label class="field field-wide password-field">
              <span class="field__label">New password</span>
              <input :type="showNew ? 'text' : 'password'" v-model="form.newPassword" placeholder="New password" />
              <button class="password-field__toggle" type="button" @click="showNew = !showNew">
                <img :src="showNew ? '/icons/eye-off.svg' : '/icons/eye.svg'" alt="" />
              </button>
            </label>
            <label class="field field-wide password-field">
              <span class="field__label">Repeat new password</span>
              <input :type="showRepeat ? 'text' : 'password'" v-model="form.repeatPassword" placeholder="Repeat new password" />
              <button class="password-field__toggle" type="button" @click="showRepeat = !showRepeat">
                <img :src="showRepeat ? '/icons/eye-off.svg' : '/icons/eye.svg'" alt="" />
              </button>
            </label>
          </div>

          <button class="btn btn__primary account-page__save" type="submit">
            {{ saved ? 'Saved' : 'Save changes' }}
          </button>
        </form>
      </div>
    </div>
  </main>
</template>
<script setup>
import { reactive, ref } from 'vue'
import { demoUser } from '@/data/demo.js'
import AccountSidebarComponent from '@/components/Account/AccountSidebarComponent.vue'

const form = reactive({
  firstName: demoUser.firstName,
  lastName: demoUser.lastName,
  displayName: demoUser.displayName,
  email: demoUser.email,
  oldPassword: '',
  newPassword: '',
  repeatPassword: ''
});

const showOld = ref(false);
const showNew = ref(false);
const showRepeat = ref(false);
const saved = ref(false);

// Demo form: nothing is persisted, submit only confirms locally.
const save = () => {
  saved.value = true;
};
</script>
