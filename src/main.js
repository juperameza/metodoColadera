let vector= new Array(1000).fill(true);
for(let i=2;i<=1000;i++){
    if(vector[i]){
    for(let j=2;j*i<=1000;j++){
        vector[i*j]=false;
        
    }}
}

for (let i = 0; i <= 1000; i++) {
    if(vector[i]){
        console.log(i);
    }
   
    
}
