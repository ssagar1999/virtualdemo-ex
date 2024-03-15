function fn(){
    let rct = document.getElementById('rct');
     let dm = document.getElementById('dm')



dm.innerHTML = '<h1>hello world</h1>';



let ne2 = React.createElement('h1', null, 'hello world');
ReactDOM.render(ne2, rct);
}


setInterval(fn, 1000)