<template>
<Navbar /> 
  <div class="home">
   <div class="sub-nav">
    <div class="sub-nav-details flex flex-row">
      <div class="left flex flex-column">
      <div class="new-product">new product</div>
      <div class="name">XX99 mark II headphones</div>
      <div class="description">
        Experience natural, lifelike audio adn exceptional build quality made for the passionate music enthusiast.
      </div>
      <div>
        <router-link class="link" :to="{  path: '/product/4' }">
          <button class="btn-orange">See Product</button>
        </router-link>
        </div>
      </div>
      <div class="right">
        <img src="../assets/home/desktop/image-hero.jpg"/>
      </div>
      </div>
  </div>
  </div>

  <Products />

   <section class="speaker flex">
      <div class="speaker-left">
        <img
          class="img-speaker"
          src="../assets/home/desktop/image-speaker-zx9.png"
          alt="speaker"
        />
      </div>
      <div class="speaker-right flex flex-column">
        <div class="name">ZX9 Speaker</div>
        <div class="text">
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </div>
        <div>
          <router-link class="link" :to="{  path: '/product/6' }"><button class="btn-black">SEE product</button></router-link>
          
        </div>
      </div>
      <div></div>
    </section>
    <section class="speaker-2 flex">
      <div class="speaker-2-content flex flex-column">
        <div class="name">ZX7 speaker</div>
        <div>
          <router-link class="link" :to="{  path: '/product/5' }"><button class="btn-white">SEE product</button></router-link>
        </div>
      </div>
    </section>
    <section class="speaker-3 flex flex row">
      <div class="speaker-3-left">
        <img
          class="img"
          src="../assets/home/desktop/image-earphones-yx1.jpg"
          alt="earphones"
        />
      </div>
      <div class="speaker-3-right flex flex-column">
        <div class="name">YX1 earphones</div>
        <div>
          <router-link class="link" :to="{  path: '/product/1' }"><button class="btn-white">SEE product</button></router-link>
        </div>
      </div>
    </section>

  <Guy />
  <Footer />
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import Guy from "../components/Guy.vue";
import Products from "../components/Products.vue";



export default {
  name: 'Home',
  components: { Navbar, Footer, Guy, Products },

  
  
}
</script>

<style lang="scss" scoped>
  .home {
  background-color: #0e0e0e;
  height: 729px;
  margin: 0 auto;
  z-index: 1;
 
  

  .sub-nav {
    width: 1440px;
    color: #ffffff;
    z-index: 2;
    margin: 0 auto;
    margin-top: 0;
    margin-bottom: 180px;

    .sub-nav-details {
      z-index: 2;
      @media only screen and (max-width: 768px) {
        position: relative;
        width: 379px;
        margin-left: 194px;
        background-image:url(../assets/home/mobile/image-header.jpg)
      }
      .left {
        flex-basis: 50%;
        gap: 24px;
        justify-content: center;
        width: 398px;
        @media only screen and (max-width: 768px) {
          flex-basis: 100%;
          z-index: 3;
          text-align: center;
          margin-top: 216px;
        }
        .new-product {
          text-transform: uppercase;
          opacity: 0.5;
          font-size: 14px;
          line-height: 19px;
          letter-spacing: 10px;
        }
        .name {
          text-transform: uppercase;
          font-weight: bold;
          font-size: 56px;
        }
        .description {
          font-style: normal;
          font-weight: 500;
          font-size: 15px;
          opacity: 0.5;
        }
        .link {
          text-decoration: none;
          color: #ffffff;
        }
      }
    }
    .right {
      flex-basis: 50%;
      @media only screen and (max-width: 768px) {
        flex-basis: 100%;
        position: absolute;
        top: 100px;
        left: -100px;
        z-index: 2;
        transform: scale(130%);
      }
    }
  }
    
}
.speaker {
    flex-direction: row;
    background: #d87d4a;
    border-radius: 8px;
    width: 1110px;
    height: 560px;
    margin: 0 auto;
    color: #ffffff;
    overflow: hidden;
    background-image: url(../assets/home/desktop/pattern-circles.svg);
    background-repeat: no-repeat;
    background-position-x: -90%;
    @media only screen and (max-width: 768px) {
      width: 768px;
      margin: 0 40px;
      width: 689px;
      height: 720px;
      flex-direction: column;
      background-position-x: 45%;
      background-position-y: 100%;
    }
    .speaker-left {
      flex-basis: 50%;
      position: relative;
      .img-speaker {
        position: absolute;
        bottom: -10px;
        left: 120px;
        width: 370px;
        height: 453px;
        @media only screen and (max-width: 768px) {
          width: 200px;
          height: 240px;
          transform: translate(50%, 50%);
          top: 0;
          left: 150px;
        }
      }
    }
    .speaker-right {
      flex-basis: 50%;
      justify-content: center;
      padding: 0 95px;
      gap: 24px;
      @media only screen and (max-width: 768px) {
        align-items: center;
        width: 370px;
        padding: 0;
        margin: 0 auto;
        text-align: center;
      }
      .name {
        text-transform: uppercase;
        font-weight: bold;
        font-size: 56px;
      }
      .text {
        font-style: normal;
        font-weight: 500;
        font-size: 15px;
        opacity: 0.5;
      }
    }
  }
  .speaker-2 {
    background-color: #979797;
    border-radius: 8px;
    width: 1110px;
    height: 320px;
    margin: 48px auto;
    overflow: hidden;
    background-image: url(../assets/home/desktop/image-speaker-zx7.jpg);
    background-repeat: no-repeat;
    background-position-x: -90%;
    align-items: center;
    @media only screen and (max-width: 768px) {
      width: 689px;
      height: 320px;
      margin: 48px 40px;
      background-position-x: 40%;
    }
    .speaker-2-content {
      align-items: flex-start;
      margin-left: 95px;
      gap: 32px;
      .name {
        font-weight: bold;
        font-size: 28px;
        line-height: 38px;
        letter-spacing: 2px;
        text-transform: uppercase;
      }
    }
  }
  .speaker-3 {
    width: 1110px;
    height: 320px;
    margin: 0 auto;
    gap: 30px;
    @media only screen and (max-width: 768px) {
      width: 689px;
      height: 320px;
      margin: 48px 40px;
    }
    .speaker-3-left {
      border-radius: 8px;
      @media only screen and (max-width: 768px) {
        width: 339px;
        height: 320px;
      }
      .img {
        border-radius: 8px;
        @media only screen and (max-width: 768px) {
          width: 339px;
          height: 320px;
        }
      }
    }
    .speaker-3-right {
      background: #f1f1f1;
      border-radius: 8px;
      flex-basis: 50%;
      padding-left: 95px;
      justify-content: center;
      gap: 32px;
      @media only screen and (max-width: 768px) {
        width: 339px;
        height: 320px;
        justify-content: center;
        align-items: flex-start;
        padding-left: 35px;
      }
      .name {
        font-weight: bold;
        font-size: 28px;
        line-height: 38px;
        letter-spacing: 2px;
        text-transform: uppercase;
      }
    }
  }
</style>