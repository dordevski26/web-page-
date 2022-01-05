<template>
  <div class="checkout">
    <Navbar />
    <CheckOutModal v-if="showModal"/>
    <div class="back" @click="goBack()">Go back</div>
    <div class="content flex flex-row">
      <form class="form">
        <div class="billing">
          <h3>Checkout</h3>
          <h5>Billing Details</h5>
          <div class="billing-details flex flex-row">
            <div class="flex flex-column">
              <label for="">Name</label>
              <input class="right" type="text" />
            </div>
            <div class="flex flex-column">
              <label for="">Email Address</label>
              <input type="email" />
            </div>
            <div class="flex flex-column">
              <label for="">Phone Number</label>
              <input type="text" />
            </div>
          </div>
        </div>
        <div class="shipping">
          <h5>Shipping Details</h5>
          <div class="shipping-details flex flex-column">
            <div class="flex flex-column">
              <label for="">Address</label>
              <input class="long" type="text" />
            </div>
            <div class="flex flex-row">
              <div class="flex flex-column">
                <label for="">ZIP Code</label>
                <input class="right" type="text" />
              </div>
              <div class="flex flex-column">
                <label for="">City</label>
                <input type="text" />
              </div>
            </div>

            <div class="flex flex-column">
              <label for="">Country</label>
              <input type="text" />
            </div>
          </div>
        </div>
        <div class="payment">
          <h5>Payment Details</h5>
          <div class="payment-details flex flex-row">
            <div class="left flex flex-column">
              <div class="left-pay">
                <label class="bottom">Payment Method</label>
              </div>
              <div class="flex flex-column">
                <label>e-money Number</label>
                <input class="right" type="text" />
              </div>
            </div>

            <div class="right flex flex-column">
              <div class="right-details flex flex-column">
                <input type="text" />
                <input id="emoney" class="checkbox" type="radio" value="emoney" checked />
                <label for="emoney"></label>
                <p class="placeholder">e-Money</p>
              </div>
              <div class="right-details flex flex-column">
                <input type="text" />
                <input id="cash" class="checkbox" type="radio" value="cash" />
                <label for="cash"></label>
                <p class="placeholder">Cash on Delivery</p>
              </div>
              <div class="flex flex-column">
                <label for="">e-money PIN</label>
                <input type="text" />
              </div>
            </div>
          </div>
        </div>
      </form>
      <div class="pay flex flex-column">
        <div class="content">
          <div>
            <h4 class="bottom">Summary</h4>
          </div>
          
          <section class="content-details flex flex-row" v-for="item in cartInfo" v-bind:key="item?.name">
            <div>
              <img
                class="img"
                :src="item?.image"
                alt="img"
              />
            </div>
            <div class="info flex flex-row">
              <div class="title-price flex flex-column">
                <div>
                  <h6>{{ item?.name }}</h6>
                </div>
                <div class="price-small">${{ item?.price }}</div>
              </div>
              <div class="count">x{{ item?.count }}</div>
            </div>
          </section>
          

          
          <div class="detail flex flex-row">
            <div class="grey">Total</div>
            <div class="price" v-if="!totalPrice">$ 0</div>
            <div class="price" v-else>${{ totalPrice }}</div>
          </div>
          <div class="detail flex flex-row">
            <div class="grey">Shipping</div>
            <div class="price">$50</div>
          </div>
          <div class="detail flex flex-row bottom">
            <div class="grey">VAT (Included)</div>
            <div class="price" v-if="!vat">$ 0</div>
            <div class="price" v-else>${{ vat }}</div>
          </div>
          <div class="detail flex flex-row bottom">
            <div class="grey">Grand total</div>
            <div class="price" v-if="!grandTotal">$ 0</div>
            <div class="price" v-else><span>${{ grandTotal }}</span></div>
          </div>
          <button type="submit" class="btn-orange btn" @click="toggleShowModal">
            Continue & pay
          </button>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import CheckOutModal from "../components/CheckOutModal.vue"


export default {
  name: "Checkout",
  components: { Navbar, Footer, CheckOutModal },
  data() {
    return {
      cartInfo: {},
      totalPrice: 0,
      vat: 0,
      grandTotal: 0,
      showModal: false
    }
  },
  methods: {
    goBack() {
      return this.$router.go(-1);
    },
    toggleShowModal(){
      this.showModal = !this.showModal
      },
    
  },
  mounted() {

      let stringInfo = localStorage.getItem('wantedProducts')
      this.cartInfo = JSON.parse(stringInfo)
      if(this.cartInfo) {
        this.cartInfo.forEach(element => {
        this.totalPrice += element.price * element.count
        this.grandTotal = this.totalPrice + 50
        this.vat = this.totalPrice / 5
      });
      }
      
      console.log(this.cartInfo)
    
  }
 
};
</script>

<style lang="scss" scoped>
.checkout {
  .back {
    width: 1110px;
    margin: 0 auto;
    margin-top: 128px;
    margin-bottom: 38px;
    cursor: pointer;
  }
  .back:hover {
    color: #d87d4a;
    font-weight: bold;
  }
  .content {
    width: 1110px;
    margin: 0 auto;
    gap: 30px;
    margin-bottom: 110px;
    .form {
      width: 730px;
      height: 1126px;
      background-color: #ffffff;
      border-radius: 8px;
      padding: 54px 48px;
      .billing {
        .billing-details {
          flex-wrap: wrap;
          input {
            cursor: pointer;
          }
        }
      }
      .shipping {
        .shipping-details {
          flex-wrap: wrap;
          input {
            cursor: pointer;
          }
        }
      }
      .payment {
        margin-top: 61px;
        .left {
          justify-content: space-between;
        }
        .right {
          .right-details {
            position: relative;
            input {
              cursor: pointer;
            }
            .placeholder {
              position: absolute;
              top: 18px;
              left: 60px;
              font-weight: bold;
            }
            input[type="radio"] {
              display: none;
            }
            label {
              position: relative;
              position: absolute;
              top: 20px;
              left: 12px;
              cursor: pointer;
              font-weight: bold;
            }
            label:nth-last-child(1) {
              padding-right: 0;
            }
            label::before {
              content: "";
              border: 2px solid grey;
              display: inline-block;
              width: 20px;
              height: 20px;
              margin: -8px 20px;
              margin-left: 10px;
              border-radius: 50%;
            }
            label::after {
              content: "";
              display: inline-block;
              position: absolute;
              width: 10px;
              height: 10px;
              background: rgba(216, 125, 74, 0);
              left: 17px;
              top: 12px;
              margin: -8px 20px;
              margin-left: 0;
              border-radius: 50%;
              transition: all 0.4s;
            }
            input[type="radio"]:checked + label::after {
              background: rgba(216, 125, 74, 1);
            }
          }
        }
      }
    }
    .pay {
      width: 350px;
      height: 612px;
      background-color: #ffffff;
      border-radius: 8px;
      .content {
        padding: 32px 33px;
        .bottom {
          margin-bottom: 31px;
        }
        &-details {
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
              justify-content: flex-end;
             
            }
          }
        }
        .detail {
          justify-content: space-between;
          width: 284px;
          height: 25px;
          margin-bottom: 8px;
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
        .bottom {
          margin-bottom: 24px;
        }
        .btn {
          width: 284px;
        }
      }
    }
  }
}
</style>