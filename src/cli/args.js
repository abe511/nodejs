const parseArgs = () => {
    let pair = "";
    const res = [];
    for(let arg of process.argv) {
        if(pair) {
            res.push(`${pair.slice(2)} is ${arg}`);
            pair = "";
        }
        if(arg.startsWith("--"))
            pair = arg;
    }
    console.log(res.join(", "));
};

parseArgs();