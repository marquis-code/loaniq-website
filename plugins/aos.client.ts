import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the CSS file to apply default styles

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('app:mounted', () => {
    AOS.init({
      // You can put your AOS configurations here
      duration: 1200, // values from 0 to 3000, with step 50ms
      once: false,     // whether animation should happen only once - while scrolling down
    });
  });
});