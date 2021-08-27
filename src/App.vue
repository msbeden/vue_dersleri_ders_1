<template>
  <div id="app">
    <ProductAdd @add:product="addProduct"/>
    <ProductList @update:product="updateProduct" @delete:product="deleteProduct" :products="products"/>
  </div>
</template>

<script>
import ProductList from "./components/ProductList.vue";
import ProductAdd from "./components/ProductAdd.vue";

export default {
  name: "App",
  components: {
    ProductList, ProductAdd,
  },
  data() {
    return {
      products:[
        {id:1, categoryId:1, productName:'Laptop', quantityPerUnit:'Acer Laptop', unitPrice:5000, unitsInStock:2},
        {id:2, categoryId:1, productName:'Laptop', quantityPerUnit:'Asus Laptop', unitPrice:6000, unitsInStock:3},
        {id:3, categoryId:1, productName:'Laptop', quantityPerUnit:'Dell Laptop', unitPrice:5500, unitsInStock:4},
      ]
    }
  },
  methods: {
    addProduct(product) {
      const newProduct = {...product}
      this.products = [...this.products, newProduct]
    },
    updateProduct() {

    },
    deleteProduct(product) {
      this.products = this.products.filter(
        productToFilter => productToFilter.id !== product.id
      )
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
