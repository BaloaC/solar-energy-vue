<template>
  <v-container fluid class="py-16" style="background-color: #f4f4f4" v-animate>
    <v-container style="max-width: 1200px">
      <v-row align="end" class="mb-10">
        <v-col cols="12" md="8">
          <div class="d-flex align-center mb-4">
            <span class="text-overline title-bar fade-right-element">
              {{ $t("blog.overline") }}
            </span>
          </div>
          <h2 class="text-h3 font-weight-bold text-dark-blue fade-up-element delay-1">
            {{ $t("blog.title") }}
          </h2>
        </v-col>
        <v-col cols="12" md="4" class="text-center text-md-right fade-up-element delay-2">
          <v-btn
            color="primary"
            rounded="xl"
            size="large"
            class="px-8 font-weight-bold text-uppercase"
            elevation="0"
          >
            {{ $t("blog.button") }}
          </v-btn>
        </v-col>
      </v-row>

      <v-row>
        <v-col
          v-for="(post, i) in blogPosts"
          :key="i"
          cols="12"
          sm="6"
          md="4"
          class="fade-up-element"
          :class="`delay-${i + 1}`"
        >
          <v-card class="blog-card rounded-xl overflow-hidden h-100" elevation="0" variant="flat">
            <v-img :src="post.image" height="250" cover></v-img>

            <v-card-item class="pa-6 text-center">
              <h3 class="text-h5 font-weight-bold text-dark-blue mb-2">
                {{ post.title }}
              </h3>

              <div class="text-caption text-grey-darken-1 font-weight-medium mb-4">
                {{ post.date }} • by {{ post.author }}
              </div>

              <p class="text-body-2 text-grey-darken-1 mb-6">
                {{ post.excerpt }}
              </p>

              <v-btn
                variant="text"
                color="primary"
                class="font-weight-bold"
                rounded="pill"
                :append-icon="mdiChevronRight"
              >
                {{ $t("blog.readMore") }}
              </v-btn>
            </v-card-item>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
import { mdiChevronRight } from "@mdi/js";
import blog1 from "@images/home/heat-pump.webp";
import blog2 from "@images/home/energy-storage.webp";
import blog3 from "@images/home/energy-balance.webp";

export default {
  data() {
    return {
      blogPosts: [
        {
          title: this.$t("blog.posts[0].title"),
          date: this.$t("blog.posts[0].date"),
          author: this.$t("blog.posts[0].author"),
          excerpt: this.$t("blog.posts[0].excerpt"),
          image: blog1,
        },
        {
          title: this.$t("blog.posts[1].title"),
          date: this.$t("blog.posts[1].date"),
          author: this.$t("blog.posts[1].author"),
          excerpt: this.$t("blog.posts[1].excerpt"),
          image: blog2,
        },
        {
          title: this.$t("blog.posts[2].title"),
          date: this.$t("blog.posts[2].date"),
          author: this.$t("blog.posts[2].author"),
          excerpt: this.$t("blog.posts[2].excerpt"),
          image: blog3,
        },
      ],
      mdiChevronRight,
    };
  },
};
</script>

<style scoped>
.blog-card {
  background-color: #f9f9f9 !important;
  transition: transform 0.3s ease;
}

.blog-card:hover {
  transform: translateY(-10px);
}

.v-card-item :deep(.v-card-item__content) {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
