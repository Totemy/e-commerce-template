<template>
  <main class="container">
    <section class="contact-page">
      <div class="contact-page__intro">
        <h1>We believe in sustainable decor. We're passionate about life at home.</h1>
        <p>Our features timeless furniture, with natural fabrics, curved lines, plenty of mirrors and classic design, which can be incorporated into any decor project. The pieces enchant for their sobriety, to last for generations, faithful to the shapes of each period, with a touch of the present.</p>
      </div>

      <div class="contact-page__about">
        <div class="contact-page__about-img">
          <img src="/gallery/1.jpg" alt="3legant interior" />
        </div>
        <div class="contact-page__about-text">
          <h2>About Us</h2>
          <p>3legant is a gift &amp; decorations store based in HCMC, Vietnam. Est since 2019.</p>
          <p>Our customer service is always prepared to support you 24/7</p>
          <router-link class="btn btn__primary-home" to="/shop">Shop Now</router-link>
        </div>
      </div>

      <h2 class="contact-page__heading">Contact Us</h2>
      <div class="contact-page__cards">
        <div class="contact-page__card">
          <img src="/icons/home.svg" alt="" />
          <h4>Address</h4>
          <p>234 Hai Trieu, Ho Chi Minh City, Viet Nam</p>
        </div>
        <div class="contact-page__card">
          <img src="/icons/call.svg" alt="" />
          <h4>Contact Us</h4>
          <p>+84 234 567 890</p>
        </div>
        <div class="contact-page__card">
          <img src="/icons/mail.svg" alt="" />
          <h4>Email</h4>
          <p>hello@3legant.com</p>
        </div>
      </div>

      <div class="contact-page__form-row">
        <form class="contact-form" @submit.prevent="submit">
          <label class="field field-wide">
            <span class="field__label">Full Name</span>
            <input type="text" v-model="form.name" placeholder="Your Name" required />
          </label>
          <label class="field field-wide">
            <span class="field__label">Email Address</span>
            <input type="email" v-model="form.email" placeholder="Your Email" required />
          </label>
          <label class="field field-wide">
            <span class="field__label">Message</span>
            <textarea rows="5" v-model="form.message" placeholder="Your message" required></textarea>
          </label>
          <button class="btn btn__primary contact-form__submit" type="submit">
            {{ sent ? 'Message Sent' : 'Send Message' }}
          </button>
        </form>
        <div class="contact-map">
          <img src="/icons/pin.svg" alt="" />
          <span>234 Hai Trieu, Ho Chi Minh City</span>
        </div>
      </div>
    </section>

    <OpportunitiesView />
  </main>
</template>
<script setup>
import { reactive, ref } from 'vue'
import OpportunitiesView from '@/components/Home/OpportunitiesView.vue'

const form = reactive({ name: '', email: '', message: '' });
const sent = ref(false);

// Demo form: nothing is sent, submit just confirms locally.
const submit = () => {
  sent.value = true;
  form.name = '';
  form.email = '';
  form.message = '';
};
</script>
