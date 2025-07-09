let a=5;
let s="5";
let c=(a==s);
console.log(a===s);

const obj={
    n:'pen',
    a:6,
};

console.log(obj["a"]);

let ck=prompt("Enput a Number:");
if(ck%5==0)console.log("Yes: ", ck);
else console.log("No");

for(let i=1; i<=5; i++) console.log("print 5 times");


let str="RijwanKabir";
for(let i of str) console.log(i);
  
for(let i in obj) console.log(i," ",obj[i]);

let st=`cost of ${obj.n} is: ${obj.a}`;
console.log(st);

console.log(str.length,str.toUpperCase(),str.toLowerCase());

let str1="          Kabir     ";
console.log(str1.trim());
console.log(str.slice(1,4));
console.log(str.concat(str1));
console.log("abc"+123);
console.log(str.replaceAll("R","r"));
console.log(str.charAt(0));

let it=[12,13,14,15,20];
for(let idx of it) console.log(idx);

let arr=["potato","chips","Beef"];
console.log(arr);
arr.push("kichu");
console.log(arr);
arr.pop("kichu");
console.log(arr);
console.log(arr.toString());

let cks=arr.toString();
console.log(cks, cks.length, cks[16]);

let fd=["polao","Biriyani"];
let arrconcat=cks.concat(fd);
console.log(arrconcat);
//unshift--(first)>push(end)
//shift--(delete from first)>pop(delete from end)

fd.unshift("Khassi");
console.log(fd);
let shift=fd.shift();
console.log("Deleted:",shift);
console.log(fd);

let array=[1,2,3,4,5,6];
console.log(array);
//replace----->> splice change original array
array.splice(2,3,101,102,103);
//-->indx,no of element to delete,no of element to replace
console.log(array);
//delete
array.splice(2,1);
console.log(array);
//add
array.splice(2,0,32);
console.log(array);

function sum(a,b){
    s=a+b;
    return s;
}
let sm=sum(3,4);
console.log(sm);

const arrowSum=(a,b)=>{
    console.log(a+b);
};
let arrayMul=(a,b)=>{
    return a*b;
};
arrayMul=5;
console.log(arrayMul);

const printHello=()=>{
    console.log("HELO");
};

array.forEach(function print(val){
    console.log(val);
});

array.forEach((val)=>{
    console.log(val);
});

fd.forEach((val,idx,fd)=>{
    console.log(val.toUpperCase(),idx,fd);
});

let newarr = array.map((val)=>{
    return val**2;
});
console.log(newarr);
console.log(array);

let even=array.filter((val)=>{
    return val%2==0;
});

console.log(even);

const sumres=array.reduce((res,cur)=>{
    return res+cur;
});
console.log(sumres);

const maxval=array.reduce((res,cur)=>{
    return res>cur?res:cur;
});
console.log(maxval);

let n=prompt("Enter Number of the array:");
let arr2=[];
for(let i=0; i<n; i++)
    arr2[i]=i+1;

let fact=arr2.reduce((res,cur)=>{
    return res*cur;
});
console.log("Facrotial is:",fact);


let Name=["Md","Rijwan","Kabir"];
[fname, ,lname]=Name;
console.log(fname," ",lname);