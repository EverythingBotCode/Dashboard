import { BotInfo } from '../types/bot';
import { API_CONFIG } from '../config/api';
import { fetchWithTimeout } from '../utils/api';

const DEFAULT_BOT_INFO: BotInfo = {
  totalUsers: 81000,
  totalServers: 300,
  ping: 26,
  command: 5000,
  channels: 9000,
  nodeVersion: 'v20.19.4',
  uptime: 0
};

export async function getBotInfo(): Promise<BotInfo> {
  try {
    const url = `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.BOT_INFO}`;
    const response = await fetchWithTimeout(url, {
      method: 'GET',
      headers: {
        ...API_CONFIG.DEFAULT_HEADERS,
        'Cache-Control': 'no-cache'
      },
      mode: 'cors'
    }, 3000);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return {
      totalUsers: data.totalUsers ?? DEFAULT_BOT_INFO.totalUsers,
      totalServers: data.totalServers ?? DEFAULT_BOT_INFO.totalServers,
      ping: data.ping ?? DEFAULT_BOT_INFO.ping,
      command: data.command ?? DEFAULT_BOT_INFO.command,
      channels: data.channels ?? DEFAULT_BOT_INFO.channels,
      nodeVersion: data.nodeVersion ?? DEFAULT_BOT_INFO.nodeVersion,
      uptime: data.uptime ?? DEFAULT_BOT_INFO.uptime
    };
  } catch (error) {
    console.warn('Error fetching bot info:', error);
    return DEFAULT_BOT_INFO;
  }
}