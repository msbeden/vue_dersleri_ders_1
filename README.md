# Vue Giriş Dersi

Bu bölümde vue'nun yüklenmesi, bootstrap kütüphanesinin dahil edilmesi ve localde tablo üzerinde basit crud işlemlerini anlatılır.


# Gerekli programlar

 - NPM

## Visual Code vue eklentileri

 - **Auto Close Tag**,	Jun Han
 - **vue**, jcbuisson
 - **Vue VSCode Snippets**, sarah.drasner
 - **Vue VS Code Extension Pack**, sarah.drasner

## Vue ve gerekli kütüphanelerin kurulumu
NPM yüklendikten sonra konsol açılır aşağıdaki kodlar girilerek tüm kütüphaneler indirilir. Vue, bootstrap ve bootstrap-vue kurulur.

    npm install vue bootstrap bootstrap-vue

## Projenin açılması
İlk satırdaki komut ile **vue_ders_1** adında bir vue kurulumu yapılır. Vue 2 kullandık, daha stabil olduğu için.

    vue create vue_ders_1
    cd vue_ders_1

## Proje içinde gerekli ayarların yapılması
Bootstrap kütüphanesini projemizin kök dosyası olan **vue_ders_1\src\main.js** içerisinde çağıralım.

    import  Vue  from  'vue'
    import { BootstrapVue, IconsPlugin } from  'bootstrap-vue'
    import  App  from  './App.vue'
    
    import  'bootstrap/dist/css/bootstrap.css'
    import  'bootstrap-vue/dist/bootstrap-vue.css'
    
    Vue.config.productionTip = false
    Vue.use(BootstrapVue)
    Vue.use(IconsPlugin)
    new  Vue({
	    render:  h  =>  h(App),
	}).$mount('#app')

## Projenin çalıştırılması
Projeyi çalıştırmak için **vue_ders_1** klasörüne girdiğimizde aşağıdaki komutu kullanırız.

    npm run serve
