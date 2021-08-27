<template>
    <div id="addForm">
        <form @submit.prevent="handleAdd">
            <div class="form-group">
                <label for="id">Id</label>
                <input v-model="product.id" type="text" class="form-control" id="id">
            </div>
            <div class="form-group">
                <label for="categoryId">Kategori</label>
                <input v-model="product.categoryId" type="text" class="form-control" id="categoryId">
            </div>
            <div class="form-group">
                <label for="productName">Ürün adı</label>
                <input v-model="product.productName" type="text" class="form-control" id="productName">
            </div>
            <div class="form-group">
                <label for="quantityPerUnit">Açıklama</label>
                <input v-model="product.quantityPerUnit" type="text" class="form-control" id="quantityPerUnit">
            </div>
            <div class="form-group">
                <label for="unitPrice">Birim fiyatı</label>
                <input v-model="product.unitPrice" type="text" class="form-control" id="unitPrice">
            </div>
            <div class="form-group">
                <label for="unitsInStock">	Stok adedi</label>
                <input v-model="product.unitsInStock" type="text" class="form-control" id="unitsInStock">
            </div>
            <button type="submit" class="btn btn-sm btn-success">Ekle</button>
        </form>
    </div>
</template>

<script>
export default {
    name:'ProductAdd',
    data() {
        return {
            product:{id:null, categoryId:null, productName:null, quantityPerUnit:null, unitPrice:null, unitsInStock:null}
        }
    },
    methods: {
        handleAdd() {
            this.$emit("add:product", this.product)
        }
    }
}
</script>

<style scoped>
#addForm {
    margin: 100px;
}
</style>