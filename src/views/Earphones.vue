<template>
  <div class="headphones">
    <Navbar />
    <div v-for="item in info" v-bind:key="item.id">
      <div v-if="item.category==='earphones'">
    <div class="title flex">EARPHONES</div>
    <div class="content flex flex-column">
      <section class="headphone flex">
        <div class="headphone-left">
        <img
            class="img-headphone"
            :src="item.image.desktop"
            alt="headphone"
          />
        </div>

        <div class="headphone-right flex flex-column">
          <div class="new-orange">new product</div>
          <div class="name">{{ item.name }}</div>
          <div class="text">
            {{ item.description }}
          </div>

          <div>
            <router-link
              :to="{
                path: '/product/' + item.id
              }"
            >
              <button class="btn-orange">SEE PRODUCT</button>
            </router-link>
          </div>
        </div>

      </section>
    </div>
    </div>
    </div>
  <Products />
  <Guy />
  <Footer />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import Guy from "../components/Guy.vue";
import Products from "../components/Products.vue";
import axios from 'axios';


export default {
  name: "Headphones",
  components: { Navbar, Footer, Guy, Products },

  data(){
    return {
      info:{}
      } 
  },
  
  mounted(){
    axios.get('data.json')
    .then((resp) => {
      this.info = resp.data
      console.log(resp.data)
    })
  },

  // methods: {
  //   getImagePath(filename) {
  //     return require(filename);
  //   }
  // }
 
}
</script>


<style lang="scss" scoped>
.headphones {
  background: #0e0e0e;
  height: 336px;
  margin: 0 auto;
  .title {
    height: 240px;
    color: #ffffff;
    font-style: normal;
    font-weight: bold;
    font-size: 40px;
    line-height: 44px;
    letter-spacing: 1.42857px;
    text-transform: uppercase;
    align-items: center;
    justify-content: center;
    margin-top: 60px;
  }
  .content {
    width: 1110px;
    margin: 0 auto;
    @media only screen and (max-width: 768px) {
      width: 689px;
    }
    .headphone {
      margin-top: 110px;
      flex-direction: row;
      @media only screen and (max-width: 768px) {
        flex-direction: column;
      }
      .headphone-left {
        flex-basis: 50%;
        .img-headphone {
          border-radius: 8px;
          width: 555px;
          height: 560px;
          @media only screen and (max-width: 768px) {
            width: 689px;
            height: 352px;
            object-fit: cover;
          }
        }
      }
      .headphone-right {
        gap: 32px;
        flex-basis: 50%;
        width: 555px;
        padding-left: 125px;
        justify-content: center;
        align-items: flex-start;
        @media only screen and (max-width: 768px) {
          width: 572px;
          height: 302px;
          justify-content: center;
          align-items: center;
          text-align: center;
        }
        .new-orange {
          @media only screen and (max-width: 768px) {
            margin-top: 52px;
          }
        }
      }
      .headphone-right-mark-I {
        gap: 32px;
        flex-basis: 50%;
        width: 555px;
        padding-right: 125px;
        padding-left: 0;
        justify-content: center;
        align-items: flex-start;
        @media only screen and (max-width: 768px) {
          align-items: center;
          padding: 0 98px;
          width: 572px;
          margin: 0 auto;
          text-align: center;
        }
      }
    }
    .mark-I {
      flex-direction: column-reverse;
    }
  }
}
</style>