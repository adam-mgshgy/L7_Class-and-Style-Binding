const app = Vue.createApp({
  data() {
    return {
      cart: 0,
      product: "Socks",
      brand: "Vue Mastery",
      image: "./assets/images/socks_blue.jpg",
      inStock: false,
      details: ["50% cotton", "30% wool", "20% polyester"],

      disabledMax: false,
      disabledMin: false,

      counter: 0
      
    };
  },
  methods: {
    addToCart() {
      this.cart += 1;
    },
    updateImage(variantImage) {
      this.image = variantImage;
    },
    Plus() {
      if (this.counter + 1 > 4) {
        this.disabledMax = true;
      }
      else{
        this.disabledMin = false;

      }
      this.counter += 1;
    },
    Minus() {
      if (this.counter - 1 < 1) {
       this.disabledMin = true;
      }
      else{
        this.disabledMax = false;

      }
      this.counter -= 1;
    },
  },
});
