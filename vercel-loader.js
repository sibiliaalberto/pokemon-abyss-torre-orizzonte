(async()=>{const r=await Promise.all([1,2,3,4].map(i=>fetch(`/vercel-chunk-${i}.js`).then(r=>r.text())));new Function(r.join('\n'))()})().catch(e=>{console.error('Abyss bootstrap failed',e)})
