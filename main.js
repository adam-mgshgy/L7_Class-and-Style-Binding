const app = Vue.createApp({
  data() {
    return {
      cart: 0,
      product: "Socks",
      brand: "Vue Mastery",
      image: "./assets/images/socks_blue.jpg",
      inStock: false,
      details: ["50% cotton", "30% wool", "20% polyester"],

      color: "",

      buttons: [
        { id: 1, color: "red", text:"Piros" },
        { id: 2, color: "blue", text:"Kék" },
        { id: 3, color: "yellow", text:"Sárga" },

      ],
    };
  },
  methods: {
    addToCart() {
      this.cart += 1;
    },
    updateImage(variantImage) {
      this.image = variantImage;
    },
    colorChange(button){
      this.color = button.color;
    }
  },
});
