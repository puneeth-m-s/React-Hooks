async function readfile3() {
    let p1 = new Promise((resolve, reject) => { //resolve{}
        setTimeout(() => resolve("done"),2000);  });


    let p2 = await p1;  //p1.then()
    console.log("from p1:", p2);
    
    let p3 = await p2;
    console.log("from p3:", p3);
}

readfile3();