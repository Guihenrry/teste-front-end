<template>
  <section>
    <AlertNotification :active="alertActive" :mensage="alertMensage" />
    <BaseError v-if="error" />
    <transition mode="out-in">
      <div v-if="videos && videos.length" class="list">
        <VideoListItem v-for="(video, index) in videos" :key="index" :video="video" />
      </div>
      <VideoListNoResult v-else-if="videos" />
    </transition>
    <BaseLoading v-if="loading" />
  </section>
</template>

<script>
import { api } from "@/services.js";
import VideoListItem from "@/components/VideoListItem.vue";
import VideoListNoResult from "@/components/VideoListNoResult.vue";

export default {
  name: "VideoList",
  components: {
    VideoListItem,
    VideoListNoResult
  },
  data() {
    return {
      videos: null,
      nextPageToken: "",
      maxResults: 6,
      loading: false,
      error: false,
      alertActive: false,
      alertMensage: ""
    };
  },
  computed: {
    searchQuery() {
      return this.$route.query.search_query;
    }
  },
  watch: {
    searchQuery() {
      this.getVideos();
    }
  },
  created() {
    this.getVideos();
    this.getNextPageOnScroll();
  },
  methods: {
    alert(mensage) {
      this.alertMensage = mensage;
      this.alertActive = true;
      setTimeout(() => {
        this.alertActive = false;
      }, 5000);
    },
    getVideos() {
      this.videos = null;
      api
        .get(
          `/search?part=id,snippet&maxResults=${this.maxResults}&type=video&q=${this.searchQuery}`
        )
        .then(response => {
          this.videos = response.data.items;
          this.nextPageToken = response.data.nextPageToken;
        })
        .catch(() => {
          this.error = true;
          this.alert(
            "Erro ao estabelecer conexão com o servidor. tente novamente mais tarde"
          );
        });
    },
    isBottomOfWindow() {
      return (
        document.documentElement.scrollTop + window.innerHeight ===
        document.documentElement.offsetHeight
      );
    },
    getNextPageOnScroll() {
      window.onscroll = () => {
        const bottomOfWindow = this.isBottomOfWindow();

        if (bottomOfWindow && this.nextPageToken) {
          this.loading = true;
          api
            .get(
              `/search?part=id,snippet&maxResults=${this.maxResults}&type=video&q=${this.searchQuery}&pageToken=${this.nextPageToken}`
            )
            .then(response => {
              this.loading = false;
              this.videos = this.videos.concat(response.data.items);
              this.nextPageToken = response.data.nextPageToken;
            })
            .catch(() => {
              this.alert(
                "Erro ao estabelecer conexão com o servidor. tente novamente mais tarde"
              );
            });
        }
      };
    }
  }
};
</script>

<style scoped>
.list {
  margin: 170px auto 60px auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  max-width: 1020px;
  grid-gap: 30px;
}

@media screen and (max-width: 1050px) {
  .list {
    max-width: 670px;
    grid-template-columns: 1fr 1fr;
  }
}
@media screen and (max-width: 700px) {
  .list {
    margin-top: 110px;
    max-width: 300px;
    grid-template-columns: 1fr;
  }
}
</style>