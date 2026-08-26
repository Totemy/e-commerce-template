<template>
  <main class="container">
    <div class="account-page">
      <h1>My Account</h1>
      <div class="account-page__body">
        <AccountSidebarComponent />
        <div class="account-page__panel">
          <h2>Address</h2>
          <div class="address-cards">
            <div class="address-card">
              <div class="address-card__head">
                <h4>Billing Address</h4>
                <button class="address-card__edit" type="button">
                  <img src="/icons/edit.svg" alt="" />
                  Edit
                </button>
              </div>
              <p>{{ demoUser.billingAddress.name }}</p>
              <p>{{ demoUser.billingAddress.phone }}</p>
              <p>{{ demoUser.billingAddress.address }}</p>
            </div>
            <div class="address-card">
              <div class="address-card__head">
                <h4>Shipping Address</h4>
                <button class="address-card__edit" type="button">
                  <img src="/icons/edit.svg" alt="" />
                  Edit
                </button>
              </div>
              <p>{{ demoUser.shippingAddress.name }}</p>
              <p>{{ demoUser.shippingAddress.phone }}</p>
              <p>{{ demoUser.shippingAddress.address }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script setup>
import { demoUser } from '@/data/demo.js'
import AccountSidebarComponent from '@/components/Account/AccountSidebarComponent.vue'
</script>
