<template>
  <div id="listProduct">
      <h3>Product List</h3>
      <p v-if="products.length == 0">Ürün listesi boş</p>
      <table v-else class="table">
          <thead>
            <tr>
                <th>Id</th>
                <th>Ürün adı</th>
                <th>Kategori</th>
                <th>Açıklama</th>
                <th>Birim fiyatı</th>
                <th>Stok adedi</th>
                <th>İşlemler</th>
            </tr>
          </thead>
          <tbody>
              <tr v-for="product in products" :key="product.id">
                <td v-if="updatedId === product.id"><input v-model="product.id" type="text" class="form-control" id="id"></td>
                <td v-else>{{ product.id }}</td>
                <td v-if="updatedId === product.id"><input v-model="product.productName" type="text" class="form-control" id="productName"></td>
                <td v-else>{{ product.productName }}</td>
                <td v-if="updatedId === product.id"><input v-model="product.categoryId" type="text" class="form-control" id="categoryId"></td>
                <td v-else>{{ product.categoryId }}</td>
                <td v-if="updatedId === product.id"><input v-model="product.quantityPerUnit" type="text" class="form-control" id="quantityPerUnit"></td>
                <td v-else>{{ product.quantityPerUnit }}</td>
                <td v-if="updatedId === product.id"><input v-model="product.unitPrice" type="text" class="form-control" id="unitPrice"></td>
                <td v-else>{{ product.unitPrice }}</td>
                <td v-if="updatedId === product.id"><input v-model="product.unitsInStock" type="text" class="form-control" id="unitsInStock"></td>
                <td v-else>{{ product.unitsInStock }}</td>
                <td v-if="updatedId !== product.id">
                    <button class="btn btn-sm btn-primary" @click="handleUpdate(product)">Güncelle</button>
                    <button class="btn btn-sm btn-warning" @click="handleDelete(product)">Sil</button>
                </td>
                <td v-else>
                    <button class="btn btn-sm btn-success" @click="handleSave(product)">Kaydet</button>
                    <button class="btn btn-sm btn-danger" @click="updatedId=null">İptal</button>
                </td>
              </tr>
          </tbody>
      </table>
  </div>
</template>

<script>
export default {
    name:'ProductList',
    data() {
        return {
            updatedId: null
        }
    },
    props: {
        products: Array
    },
    methods: {
        handleUpdate(product) {
            this.updatedId = product.id
        },
        handleSave(product) {
            this.$emit("update:product", product)
            this.updatedId = null
        },
        handleDelete(product) {
            this.$emit("delete:product", product)
        },
    }
};
</script>

<style scoped>
#listProduct {
    margin: 100px;
}
</style>