<template>
  <div ref="modalWrapThankYou" class="modal-checkout-wrap" v-if="isVisible">
    <div class="modal-checkout-content">
      <div class="checkout flex flex-column">
        <div class="orange flex flex-row">
          <div class="white">&#10003;</div>
        </div>
        <div>
          <h3>
            Thank you<br />
            for your order
          </h3>
        </div>
        <div>
          <p class="grey">You will recieve an email confirmation shortly.</p>
        </div>

        <!-- show less version -->

        <div class="payment-detail flex flex-row" v-if="showLess">
          <div class="left">
            <div class="content flex flex-column">
              <div class="border flex flex-row">
                <div>
                  <div>{{ this.cartInfo[0]?.name }}</div>
                  <div class="item">${{ this.cartInfo[0]?.price }}</div>
                </div>
                <div class="item">x{{ this.cartInfo[0]?.count }}</div>
              </div>
              <div class="item" @click="toggleShow"><p>and {{ this.cartInfo?.length - 1}} other item(s)</p></div>
            </div>
          </div>
          <div class="right flex flex-column">
            <div class="grand">grand total</div>
            <div>${{ grandTotal }}</div>
          </div>
        </div>
        <div>
          <router-link
            @click="toggleModal"
            class="link"
            :to="{ name: 'Home' }"
          >
            <button class="btn-orange btn">Back to Home</button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CheckOutModal",
  data() {
    return {
      isVisible: true,
      cartInfo: {},
      totalPrice: 0,
      grandTotal: 0,
      showLess: true,
      showMore: false
    }
  },
  methods: {
    toggleModal(){
      this.isVisible = !this.isVisible
      }
    },
  mounted() {

      let stringInfo = localStorage.getItem('wantedProducts')
      this.cartInfo = JSON.parse(stringInfo)
      if(this.cartInfo) {
        this.cartInfo.forEach(element => {
        this.totalPrice += element.price * element.count
        this.grandTotal = this.totalPrice + 50
        
      });
      }
      
      console.log(this.cartInfo)
  },
  computed: {
    total: function() {
      return this.cartInfo.price * this.cartInfo.count + 50
    }
  }

}
</script>

<style lang="scss" scoped>
.modal-checkout-wrap {
  position: fixed;
  top: 96px;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
  .modal-checkout-content {
    position: relative;
    z-index: 5;
    max-width: 100vw;
    width: 100%;
    height: 1200px;
    background-color: transparent;
    .checkout {
      padding: 48px 48px;
      position: absolute;
      top: 120px;
      left: 50%;
      transform: translate(-50%, 10%);
      margin: 0 auto;
      border-radius: 8px;
      background: #ffffff;
      width: 540px;
      height: 581px;
      z-index: 10;
      gap: 24px;
      .orange {
        width: 64px;
        height: 64px;
        border-radius: 50%;
        background-color: #d87d4a;
        z-index: 10;
        justify-content: center;
        align-items: center;
      }
      .white {
        color: #ffffff;
        transform: scale(200%);
      }
      .grey {
        margin-top: -20px;
        color: #000000;
        opacity: 0.5;
      }
      .payment-detail {
        width: 444px;
        height: 140px;
        z-index: 10;
        border-radius: 8px;
        background-color: transparent;
        font-weight: bold;
        .left {
          width: 246px;
          background: #f1f1f1;
          color: #000000;
          border-radius: 8px 0 0 8px;
          .content {
            padding: 24px;
            .border {
              color: #000000;
              border-bottom: 1px solid grey;
              margin-bottom: 12px;
              justify-content: space-between;
              align-items: center;
            }
            .item {
              color: #000000;
              opacity: 0.5;
              margin-bottom: 8px;
              p {
                text-align: center;
              }
            }
          }
        }
        .right {
          width: 198px;
          background-color: #000000;
          color: #ffffff;
          border-radius: 0 8px 8px 0;
          align-items: flex-start;
          justify-content: center;
          padding-left: 32px;
          font-size: 18px;
          .grand {
            font-style: normal;
            font-weight: 500;
            line-height: 25px;
            margin-bottom: 8px;
            text-transform: uppercase;
            color: #ffffff;
            mix-blend-mode: normal;
            opacity: 0.5;
          }
        }
      }
      .btn {
        width: 444px;
        height: 48px;
      }
    }
  }
}
</style>