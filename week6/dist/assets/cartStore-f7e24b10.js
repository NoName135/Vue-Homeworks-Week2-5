import{h as c,l as n,i as l}from"./index-a566e439.js";const g=c("userModalStore",{state:()=>({userProductModal:{},tempProduct:{}}),actions:{createUserProductModalRef(t){this.userProductModal=t},openModal(t){this.userProductModal.modalShow(),this.tempProduct=t},hideModal(){this.userProductModal.modalHide()}},getters:{}}),{VITE_API:s,VITE_PATH:d}={VITE_API:"https://vue3-course-api.hexschool.io/v2/",VITE_PATH:"weekhomeworks",BASE_URL:"/Vue-Homeworks/week6/dist",MODE:"production",DEV:!1,PROD:!0},h=c("cartItems",{state:()=>({isLoading:!1,cart:{}}),actions:{getCart(){const t=`${s}/api/${d}/cart`,{loadings:e}=n();e.isLoading=!0,l.get(t).then(a=>{this.cart=a.data.data,e.isLoading=!1}).catch(a=>{e.isLoading=!1,alert(a.response.data.message)})},addToCart(t,e=1){const{loadings:a}=n();g();const o=`${s}/api/${d}/cart`;a.loadingId=t,a.loadingBtn="addToCart",l.post(o,{data:{product_id:t,qty:e}}).then(r=>{a.loadingId="",a.loadingBtn="",alert("已加入購物車")}).catch(r=>{a.loadingId="",a.loadingBtn="",alert(r.response.data.message)})},deleteCart(t){const{loadings:e}=n(),a=t?`${s}/api/${d}/cart/${t}`:`${s}/api/${d}/carts`;e.loadingCartId=t,l.delete(a).then(o=>{e.loadingCartId="",this.getCart(),alert(t?"已從購物車移除商品":"已清空購物車")}).catch(o=>{e.loadingCartId="",alert(o.response.data.message)})},updateCart(t,e){const{loadings:a}=n(),o=`${s}/api/${d}/cart/${t.id}`,r=this.cart.carts.find(i=>i.id===t.id);r.qty!=e&&(r.qty=e*1,a.loadingCartId=t.id,l.put(o,{data:{product_id:t.product_id,qty:r.qty}}).then(i=>{a.loadingCartId="",this.getCart(),alert("已更新商品數量")}).catch(i=>{a.loadingCartId="",alert(i.response.data.message)}))}},getters:{}});export{h as c,g as m};
