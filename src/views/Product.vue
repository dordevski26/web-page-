  <template>
    <div class="products">
      <Navbar />
     
      <div class="back" @click="goBack">Go Back</div>
      
          <div class="content flex flex-column">
            <section class="product flex flex-row">
              <div class="product-left">
                <img class="img-product" src= "" alt="product" />
              </div>
              <div class="product-right flex flex-column">
                <div class="new-orange">new product</div>
                <div class="name">{{ wantedProduct.name }}</div>
                <div class="text">
                  {{ wantedProduct.description }}
                </div>
                <div class="price">$ {{ wantedProduct.price }}</div>
                <div class="counter flex flex-row">
                  <form class="buttons flex flex-row">
                    <div class="value-button flex flex-column" id="decrease" @click="decreaseCount">
                      -
                    </div>
                    <input class="input" type="number" id="number"  v-model="count"/>
                    <div class="value-button flex flex-column" id="increase" @click="increaseCount">
                      +
                    </div>
                  </form>
                  <button class="btn-orange" @click="addToCart">Add to Cart</button>
                </div>
              </div>
              <div></div>
            </section>

            <section class="features flex flex-row">
              <div class="features-left flex flex-column">
                <div class="title">Features</div>
                <div class="text">
                  {{ wantedProduct.features }}
                </div>
              </div>
               
              <div class="features-right flex flex-column" >
                <div class="title">in the box</div>
                <div class="description">
                  <ul class="flex flex-column">
                    <li class="flex" v-for="gear in wantedProduct.includes" v-bind:key="gear.item">
                      <span>{{ gear.quantity }}x</span>
                      <p>{{ gear.item }}</p>
                    </li>
                  </ul>
                </div>
              </div>
              
            </section>
            <section class="imgs flex flex-row">
              <div class="left flex flex-column">
                <div>
                  <img class="img-left" src= ""  alt="photo-left-1" />
                </div>
                <div>
                  <img class="img-left" src= "" alt="photo-left-2" />
                </div>
              </div>
              <div class="right">
                <img class="img-right" src= "" alt="photo-right" />
              </div>
            </section>

              <!-- YOU MAY ASLO LIKE -->

      <div>
    <div class="mayLikeTitle">You may also like</div>
    <div class="youmaylike flex flex-row">
      <div class="item flex flex-column" v-for="single in wantedProduct.others" v-bind:key="single.slug">
        <div>
          <img
            class="img"
            :src= single.image.desktop
            alt="mark I"
          />
        </div>
        <h4>{{ single.name }}</h4>
        <!-- da bi ovaj button radio trebam koristiti slug umjesto id-a za routanje u cijelom projektu -->
        <button class="btn-orange">SEE product</button>
        
      </div>
      
    </div>
  </div>


         <Products />
         <Guy />
            
          </div>
         <Footer />

    </div>
   
   
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Products from "../components/Products.vue";
import Footer from "../components/Footer.vue";
import Guy from "../components/Guy.vue";
import axios from "axios";
import { computed } from '@vue/reactivity';


export default {
  name: "Product",
  components: { Navbar, Guy, Footer, Products },

  data() {
    return {
      info: [],
      wantedProduct: {},
      count: 1 ,
     
    };
    
  },

  methods: {
    goBack() {
      return this.$router.go(-1);
    },
    addToCart() {
      var currentItems = [];
      if(localStorage.getItem("wantedProducts")){
        currentItems = JSON.parse(localStorage.getItem("wantedProducts"));
      }
      var wantedProducts = [...currentItems, { name: this.wantedProduct.name, price: this.wantedProduct.price, count: this.count, image: this.wantedProduct.image.desktop }]
      localStorage.setItem("wantedProducts", JSON.stringify(wantedProducts));
       
    },
    increaseCount(){
      this.count++
    },
    decreaseCount(){
      this.count--
    }
  },

  mounted() {
    var context = this;
    axios.get('http://localhost:8080/data.json')
    .then((resp) => {
      
      context.info = resp.data;
     
   
      console.log(resp.data)
      
      console.log(this.$route.params.id)
      console.log(this.filteredInfo)
      
      
    }); 
  },
    computed: {
      
      filteredInfo: function(){
        for(let i = 0; i < this.info.length; i++ ) {
          
          if(this.info[i].id == this.$route.params.id) {
            this.wantedProduct = this.info[i];
            
            console.log(this.wantedProduct);
          }
          
        } 
      }
    }
    
  
};
</script>

<style lang="scss" scoped>
.products {
  background: #0e0e0e;
  height: 95px;
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
  }
  .back {
    width: 1110px;
    margin: 0 auto;
    margin-top: 128px;
    cursor: pointer;
  }
  .back:hover {
    color: #d87d4a;
    font-weight: bold;
  }
  .content {
    width: 1110px;
    margin: 0 auto;
    margin-top: -54px;
    .product {
      margin-top: 110px;
      .product-left {
        flex-basis: 50%;
        .img-product {
          border-radius: 8px;
          width: 555px;
          height: 560px;
        }
      }
      .product-right {
        gap: 32px;
        flex-basis: 50%;
        width: 555px;
        padding-left: 125px;
        justify-content: center;
        align-items: flex-start;
        .counter {
          gap: 16px;
          .buttons {
            .number {
              width: 40px;
            }
            .input {
              outline: none;
              border: none;
              background-image: none;
              background-color: transparent;
              -webkit-box-shadow: none;
              -moz-box-shadow: none;
              box-shadow: none;
              width: 40px;
              background-color: #f1f1f1;
              text-align: center;
              font-weight: bold;
            }
            .input:hover {
              cursor: pointer;
            }
           
            .value-button {
              width: 40px;
              height: 48px;
              background-color: #f1f1f1;
              justify-content: center;
              align-items: center;
              font-weight: bold;
            }
            .value-button:hover {
              color: #d87d4a;
              cursor: pointer;
            }
          }
        }
      }
      .product-right-mark-I {
        gap: 32px;
        flex-basis: 50%;
        width: 555px;
        padding-right: 125px;
        padding-left: 0;
        justify-content: center;
        align-items: flex-start;
      }
    }
    .imgs {
      margin-top: 110px;
      gap: 30px;
      .left {
        gap: 30px;
      }
      .img-left {
        gap: 30px;
        width: 445px;
        height: 280px;
        border-radius: 8px;
      }
      .img-right {
        width: 635px;
        height: 592px;
        border-radius: 8px;
      }
    }
    .features {
      height: 318px;
      margin-top: 110px;
      .features-left {
        flex-basis: 50%;
        gap: 32px;
        .title {
          font-style: normal;
          font-weight: bold;
          font-size: 32px;
          color: #000000;
          
          letter-spacing: 1.14286px;
          text-transform: uppercase;
        }
      }
      .features-right {
        flex-basis: 50%;
        padding-left: 125px;
        height: 225px;
        .title {
          font-style: normal;
          font-weight: bold;
          font-size: 32px;
          color: #000000;
          
          letter-spacing: 1.14286px;
          text-transform: uppercase;
        }
        ul {
          list-style: none;
          gap: 8px;
          li {
            span {
              color: #d87d4a;
              font-weight: bold;
              padding-right: 24px;
            }
            p {
              opacity: 0.5;
            }
          }
        }
      }
    }
  }
}
.mayLikeTitle {
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 36px;
  text-align: center;
  letter-spacing: 1.14286px;
  text-transform: uppercase;
  margin-bottom: 64px;
  margin-top: 110px;
}
.youmaylike {
  width: 1110px;
  gap: 30px;
  justify-content: space-between;
  .item {
    gap: 40px;
    justify-content: center;
    align-items: center;
    .img {
      width: 350px;
      height: 318px;
      border-radius: 8px;
    }
  }
}
</style>