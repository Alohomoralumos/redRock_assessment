async function hot() {
    let res = await fetch('http://124.223.99.4:8090/homepage/hotShowing',{
        method:'GET',
        mode:'cors'
    });
    let ret = await res.json();
    console.log(ret);
}
hot();