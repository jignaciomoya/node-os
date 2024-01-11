import os from 'node:os';

const systemInfo = {
  Name: os.hostname(),
  Type: os.type(),
  Version: os.release(),
  Architecture: os.arch(),
  CPUs: os.cpus().length,
  MemoriaTotal: Math.round(os.totalmem() / (1024 * 1024)) + ' MB',
  MemoriaLibre: Math.round(os.freemem() / (1024 * 1024)) + ' MB',
};

export default systemInfo;