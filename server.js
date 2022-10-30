import * as qfil from './qfil.js';

// const files = qfil.getDirectoryPathAndFileNames('./dev');
// console.log(files);

const servers = await qfil.getRecordsFromCsvFile('./data/servers.csv');
console.log(servers);
