function pP(...coords) {
    let perim = 0;
    let n = coords.length / 2;
    
    for(let i = 0; i < n; i++) {
        let x1 = coords[2*i];
        let y1 = coords[2*i + 1];
        let x2 = coords[(2*i + 2) % coords.length];
        let y2 = coords[(2*i + 3) % coords.length];
        
        let dx = x2 - x1;
        let dy = y2 - y1;
        perim += Math.sqrt(dx*dx + dy*dy);
    }
    
    return perim;
}

console.log(pP(0,0, 3,0, 0,4));