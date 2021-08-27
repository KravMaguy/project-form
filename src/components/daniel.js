// import { useEffect, useState } from "react";
//import axios from "axios";
// const  = () => {
//     return (<div>hi</div>  );
// }

// export default ;

const url1 = "https://httpbin.org/get?foo=1";
// fetch(url1)
//   .then((res) => {
//     return res.json();
//   })
//   .then((res) => {
//     const args = res.args.foo;
//     const number = Number(args) + 1;
//     return fetch(`https://httpbin.org/get?foo=${number}`);
//   })
//   .then((res) => res.json())
//   .then((res) => console.log("final res: ", res));


const callapi=async()=>{
    const url1 = "https://httpbin.org/get?foo=1";
    const res=await fetch(url1)
    const body=await res.json()
    const args = body.args.foo;
    const number = Number(args) + 1;
    const res2= await fetch(`https://httpbin.org/get?foo=${number}`)
    const body2= await res2.json()
    console.log('final body: ', body2) 
    return 23  
}

await callapi()