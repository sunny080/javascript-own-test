async function test (){ 
const data = await fetch("https://jsonplaceholder.typicode.com/photos")
const res = await data.json()
  return res;  
}
test().then((data) => {
    let eme =  data.map(function(img , index){
        return { key:index, img:thumbnailUrl};
    })

    console.log(eme)
}).catch((err) => {
    console.log(err)
})


