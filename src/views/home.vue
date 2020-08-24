<template>
  <div>
    <v-carousel
      cycle
      height="400"
      hide-delimiter-background
      show-arrows-on-hover
    >
      <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src">
      </v-carousel-item>
    </v-carousel>

    <Description />
    <Link />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Description from '@/views/description.vue';
import Link from '@/views/link.vue';
import Footer from '@/components/footer.vue';

export default {
  name: 'home',
  components: {
    Description,
    Link,
    Footer,
  },
  data() {
    return {
      items: [
        {
          src: require('@/assets/パネル展4.jpg'),
        },
        {
          src: require('@/assets/パネル展5.jpg'),
        },
        {
          src: require('@/assets/パネル展1.jpg'),
        },
        {
          src: require('@/assets/パネル展2.jpg'),
        },
        {
          src: require('@/assets/パネル展3.jpg'),
        },
      ],
      colors: [
        'indigo',
        'warning',
        'pink darken-2',
        'red lighten-1',
        'deep-purple accent-4',
      ],
      slides: ['First', 'Second', 'Third', 'Fourth', 'Fifth'],
    };
  },
};
</script>
<style></style>
