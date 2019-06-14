import * as net from 'net';
import portisoccupied from '../lib';

describe('Check if a port is occupied', () => {

  it('Port 3000 is free', async () => {
    const data = await portisoccupied(3000);
    expect(data).toBe(3000);
  });

  it('Port 3000 is occupied', async () => {
    const server = net.createServer().listen(3000);
    const data = await portisoccupied(3000);
    server.close();
    expect(data).toBe(3001);
  })
});