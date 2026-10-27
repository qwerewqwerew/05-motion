const puppeteer=require('puppeteer-core');const path=require('path');const {pathToFileURL}=require('url');
(async()=>{const fs=require('fs'),os=require('os'),cp=require('child_process');
const ud=fs.mkdtempSync(os.tmpdir()+'/ed-');
const proc=cp.spawn('C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',['--headless=new','--disable-gpu','--no-sandbox','--remote-debugging-port=9333','--user-data-dir='+ud,'--allow-file-access-from-files','about:blank'],{stdio:'ignore'});
let b;for(let i=0;i<50;i++){try{b=await puppeteer.connect({browserURL:'http://127.0.0.1:9333'});break}catch(e){await new Promise(r=>setTimeout(r,300))}}
if(!b)throw new Error('connect failed');
const p=await b.newPage();await p.setViewport({width:1920,height:1080,deviceScaleFactor:1});
await p.goto(pathToFileURL(path.join(__dirname,'video.html')).href);await p.evaluate(()=>document.fonts.ready);
await p.evaluate(async()=>{await Promise.all([...document.images].map(i=>i.decode().catch(()=>{})))});
const only=process.argv[2]?process.argv[2].split(',').map(Number):[...Array(150).keys()];
for(const f of only){await p.evaluate(f=>setFrame(f),f);await p.evaluate(()=>new Promise(r=>requestAnimationFrame(()=>requestAnimationFrame(r))));
await p.screenshot({path:path.join(__dirname,'../frames',`f${String(f).padStart(3,'0')}.png`)});}
await b.close();proc.kill();})();
