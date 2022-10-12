const winston = require('winston');

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: { service: 'user-service' },
    transports: [
    //
    // - Write all logs with importance level of `error` or less to `error.log`
    // - Write all logs with importance level of `info` or less to `combined.log`
        new winston.transports.Console(),
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
        new winston.transports.File({ filename: 'combined.log' }),
    ],
});

const dobleNumero = (valor) => {
    if(typeof valor === "number"){
        return valor*2
    }else{
        throw "Error: Introduce un número"
    }
};

try{
    let valor = "44a";
    let dobleValor = dobleNumero(valor);
    console.log(dobleValor);
}catch(e){
    logger.error(`${e}`);
}finally{
    console.log("Esto siempre se ejecuta");
}

