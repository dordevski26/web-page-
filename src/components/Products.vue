<template>
  <div class="categories flex flex-row">
    <div class="item flex flex-column">
      <div>
        <img
          class="img"
          src="../assets/shared/desktop/image-category-thumbnail-headphones.png"
          alt="headphones"
        />
      </div>
      <div>
        <h4>headphones</h4>
      </div>
      <div>
        <router-link class="link" :to="{  path: '/headphones' }">
        <button class="btn-shop">
          shop
          <svg width="8" height="12" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M1.322 1l5 5-5 5"
              stroke="#D87D4A"
              stroke-width="2"
              fill="none"
              fill-rule="evenodd"
            />
          </svg>
        </button>
        </router-link>
      </div>
    </div>
    <div class="item flex flex-column">
      <div>
        <img
          class="img"
          src="../assets/shared/desktop/image-category-thumbnail-speakers.png"
          alt="speakers"
        />
      </div>
      <div>
        <h4>speakers</h4>
      </div>
      <div>
        <router-link class="link" :to="{  path: '/speakers' }">
        <button class="btn-shop">
          shop
          <svg width="8" height="12" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M1.322 1l5 5-5 5"
              stroke="#D87D4A"
              stroke-width="2"
              fill="none"
              fill-rule="evenodd"
            />
          </svg>
        </button>
        </router-link>
      </div>
    </div>
    <div class="item flex flex-column">
      <div>
        <img
          class="img"
          src="../assets/shared/desktop/image-category-thumbnail-earphones.png"
          alt="earphones"
        />
      </div>
      <div>
        <h4>earphones</h4>
      </div>
      <div>
        <router-link class="link" :to="{  path: '/earphones' }">
        <button class="btn-shop">
          shop
          <svg width="8" height="12" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M1.322 1l5 5-5 5"
              stroke="#D87D4A"
              stroke-width="2"
              fill="none"
              fill-rule="evenodd"
            />
          </svg>
        </button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.categories {
  width: 1110px;
  height: 284px;
  background-color: #ffffff;
  margin: 110px auto;
  gap: 30px;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 768px) {
    width: 768px;
    gap: 0px;
    margin-bottom: 0;
  }
}
.item {
  background: #f1f1f1;
  border-radius: 8px;
  width: 350px;
  height: 204px;
  position: relative;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin: 0 auto;
  cursor: pointer;
  @media only screen and (max-width: 768px) {
    width: 223px;
    height: 165px;
  }
  .img {
    width: 180px;
    height: 160px;
    position: absolute;
    top: -50px;
    right: 80px;
    @media only screen and (max-width: 768px) {
      width: 100px;
      height: 106px;
      right: 65px;
    }
  }
}
</style>