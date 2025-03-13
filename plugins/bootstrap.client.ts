import { defineNuxtPlugin } from "#app";
import "bootstrap/dist/css/bootstrap.min.css";
import * as bootstrap from "bootstrap";

export default defineNuxtPlugin((nuxtApp) => {
  // Make bootstrap available globally
  nuxtApp.provide('bootstrap', bootstrap)
   // Also attach to window for direct access
  window.bootstrap = bootstrap;
});