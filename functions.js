export default function affiche(a,b,callback){
    console.log(callback(a,b))
}
affiche(3,5,(a,b)=>a+b)

function div(a,b,callback){
    if (b!=0)
    {
        return callback(null,a/b);
    }
    else
return callback("division par 0");
}
div(5,3,(err,res)=>{
    if(err)
        console.error("erreur:",err);
    else
        console.log("resultat:",res);
})

var tab=[1,3,6,8,9];
var element=5

function verifier(tab,element,callback)
{
    if(tab.includes(element))
   return callback(null,"mawjoud")
    else
   return callback("n'est pas mawjoud")
}

verifier(tab,element,(err,res)=>{
    if(err)
    console.error("Error",err)
    else
    console.log("resultat",res)

})
