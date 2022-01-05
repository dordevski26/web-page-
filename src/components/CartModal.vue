<template>
  <div ref="modalWrap" class="modal-wrap">
    <form class="modal-content">
      <div class="cart flex flex-column">
        <div class="cart-detail flex flex-row">
          <div class="item-count">Cart({{ this.cartInfo?.length }})</div>
          <div class="grey" id="remove-all" @click="removeAll">Remove all</div>
        </div>

        <div v-for="item in cartInfo" v-bind:key="item?.name">
          <section class="content-details flex flex-row">
            <div>
              <img class="img" :src="item?.image" alt="img" />
            </div>
            <div class="info flex flex-row">
              <div class="title-price flex flex-column">
                <div>
                  <h6>{{ item?.name }}</h6>
                </div>
                <div class="price-small">$ {{ item?.price }}</div>
              </div>
              <div  class="count">x{{ item?.count }}</div>
            </div>
          </section>
        </div>
        <div class="detail flex flex-row">
          <div class="grey">Total</div>
          <div class="price" v-if="!totalPrice">$ 0</div>
          <div class="price" v-else>$ {{ totalPrice }}</div>
        </div>

        <router-link class="link" :to="{ name: 'CheckOut' }"
          ><button class="btn-orange btn">Checkout</button></router-link
        >
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "CartModal",

  data() {
    return {
      cartInfo: {},
      totalPrice: 0,
    };
  },

  mounted() {
    let stringInfo = localStorage.getItem("wantedProducts");
    this.cartInfo = JSON.parse(stringInfo);
    if (this.cartInfo) {
      this.cartInfo.forEach((element) => {
        this.totalPrice += element.price * element.count;
      });
    }

    console.log(this.cartInfo);
  },

  methods: {
    removeAll() {
      localStorage.clear();
      this.cartInfo = {};
      this.totalPrice = 0;
    },
  },
};
</script>

<style lang="scss" scoped>
.modal-wrap {
  position: fixed;
  top: 96px;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
  .modal-content {
    position: relative;
    z-index: 5;
    max-width: 100vw;
    width: 100%;
    height: 1200px;
    background-color: transparent;
    .cart {
      padding: 32px 33px;
      position: absolute;
      top: 128px;
      right: 165px;
      border-radius: 8px;
      background: #ffffff;
      width: 377px;
      //height: 488px;
      z-index: 10;
      &-detail {
        justify-content: space-between;
        margin-bottom: 31px;
        
        .item-count {
          font-style: normal;
          font-weight: bold;
          font-size: 18px;
          line-height: 25px;
          letter-spacing: 1.28571px;
          text-transform: uppercase;
          color: #000000;
        }
        .grey {
          font-style: normal;
          font-weight: 500;
          font-size: 15px;
          line-height: 25px;
          text-decoration-line: underline;
          mix-blend-mode: normal;
          color: #000000;
          opacity: 0.5;
          cursor: pointer;
        }
      }
      // Content Details //
      .content-details {
        margin-bottom: 24px;
        .img {
          width: 64px;
          height: 64px;
          border-radius: 8px;
        }
        .info {
          align-items: center;
          
          .title-price {
            justify-content: flex-start;
            margin-left: 16px;
          }
          
          .count {
            font-weight: bold;
            opacity: 0.5;
            margin-left: 114px;
            
          
          }
        }
      }
      // Total //
      .detail {
        justify-content: space-between;
        width: 313px;
        height: 25px;
        margin-bottom: 24px;
        .grey {
          font-style: normal;
          font-weight: bold;
          font-size: 15px;
          line-height: 25px;
          color: #000000;
          mix-blend-mode: normal;
          opacity: 0.5;
          text-transform: uppercase;
        }
        .price {
          span {
            text-transform: uppercase;
            color: #d87d4a;
          }
        }
      }
      .btn {
        width: 313px;
        cursor: pointer;
      }
    }
  }
}

</style>