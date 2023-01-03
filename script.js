//1.https://docs.google.com/document/d/1cNDeT0CKJwqXYDeSIlmJVhx_t4AFvR_0Ypa1cp2rhJk/edit?usp=sharing
let obj1={
  name:"Person 1",
  age:"5"
}
let obj2={
    age:"5",
name:"Person 1"
}
console.log(_.isEqual(obj1, obj2));

Output:
true

//2.https://docs.google.com/document/d/1cNDeT0CKJwqXYDeSIlmJVhx_t4AFvR_0Ypa1cp2rhJk/edit?usp=sharing
let xhr=new XMLHttpRequest();
xhr.open("GET","https://restcountries.com/v3.1/all")
xhr.onload=function(){
  let jsonobj=JSON.parse(this.response);
  for(let i=0;i<jsonobj.length;i++){
    console.log(jsonobj[i].flag)
  }
//3 https://docs.google.com/document/d/1cNDeT0CKJwqXYDeSIlmJVhx_t4AFvR_0Ypa1cp2rhJk/edit?usp=sharing
for(let i=0;jsonobj.length;i++){
  console.log(jsonobj[i].name);
  console.log(jsonobj[i].region);
  console.log(jsonobj[i].subregion);
  console.log(jsonobj[i].population);
}
}
xhr.send();

