var relativeSortArray = function(dizi1, dizi2) {
    let h = {};
    for(let i=0;i<dizi2.length;++i)  h[dizi2[i]]=i;
    for(const i of dizi1)    if(!(i in h))    h[i]=1000+i;
    dizi1.sort((a,b)=>h[a]-h[b]);
    return dizi1;
  };
  