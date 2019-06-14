import * as net from 'net';

export default defaultPort => {
  const checkPort = port => {
    return new Promise((resolve => {
      if (port - defaultPort >= 1000) return resolve(-1);
      const socket = new net.Socket();
      const onError = () => {
        socket.destroy();
        resolve(port);
      };
  
      socket.setTimeout(1000);
      socket.once('error', onError);
      socket.once('timeout', onError);
      socket.connect(port, () => {
        socket.end();
        resolve(checkPort(port + 1));
      });
    }));
  }
  return checkPort(defaultPort);
};