<template>
  <main class="container">
    <div class="account-page">
      <h1>My Account</h1>
      <div class="account-page__body">
        <AccountSidebarComponent />
        <div class="account-page__panel">
          <h2>Orders History</h2>
          <table class="orders-table">
            <thead>
              <tr>
                <th>Number ID</th>
                <th>Dates</th>
                <th>Status</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="order in demoOrders" :key="order.id">
                <td>{{ order.id }}</td>
                <td>{{ order.date }}</td>
                <td>{{ order.status }}</td>
                <td>${{ order.total.toFixed(2) }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </main>
</template>
<script setup>
import { demoOrders } from '@/data/demo.js'
import AccountSidebarComponent from '@/components/Account/AccountSidebarComponent.vue'
</script>
