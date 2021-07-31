let path=require("path");
let fs=require("fs");
let input=process.argv.slice(2);
let r=[];
let y=[];

for(let i=0;i<input.length;i++){
    let p=input[i].charAt(0);
    if(p=="-")
    {
        r.push(input[i]);
    }
    else
    {
        y.push(input[i]);
    }
} 
for(let i=0;i<y.length;i++)
{
    let ans=fs.existsSync(y[i]);
    if(ans==false)
    {
        console.log("😬 not match");
        return;
    }
}
let content="";
for(let i=0;i<y.length;i++)
{
    content=content+fs.readFileSync(y[i])+"\n";
}
let bool = false;
for(let i=0;i<r.length;i++)
{
    if(r[i]=='-s')
    {
        let ans=sopertion();
        console.log(ans);
    }
    else if(r[i]=="-n"&&bool==false)
    {
        let nans=nopertion();
        console.log(nans);
        bool=true;
    }
    else if(r[i]=="-b"&& bool==false)
    {
        let bans=bopertion();
        console.log(bans);
        bool=true;
    }
}
function sopertion()
{
    let contentarr=content.split("\n");
    let sans=' ';
   
    for(let i=0;i<contentarr.length;i++)
    {
        if(contentarr[i]!="")
        {
            
            sans+=contentarr[i]+"\n\n";

        }
        
    }
    return sans;
}
function nopertion()
{   let nans=' ';
    let contentarr=content.split("\n");
    for(let i=0;i<contentarr.length;i++)
    {
        nans+=i+1+" "+contentarr[i]+"\n";
    }
    return nans;
}
function bopertion()
{   let bans=' ';
    let contentarr=content.split("\n");
    for(let i=0;i<contentarr.length;i++)
    {   if(contentarr[i]!=''){
        bans+=i+1+" "+contentarr[i]+"\n\n";
         }
    }
    return bans;
}