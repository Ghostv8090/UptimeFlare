import { MaintenanceConfig, PageConfig, WorkerConfig } from './types/config'

const pageConfig: PageConfig = {
  title: '我的站点监测',
  links: [
    { link: 'https://nodewarden.421212.xyz/', label: 'Nodewarden', highlight: true },
  ],
}

const workerConfig: WorkerConfig = {
  kvWriteCooldownMinutes: 3,
  monitors: [
    {
      id: 'nodewarden',
      name: 'Nodewarden',
      method: 'GET',
      target: 'https://nodewarden.421212.xyz/',
      statusPageLink: 'https://nodewarden.421212.xyz/',
      expectedCodes: [200],
      timeout: 10000,
    },
    {
      id: 'ys-music',
      name: '我的网站',
      method: 'GET',
      target: 'https://www.ys-music.net',
      statusPageLink: 'https://www.ys-music.net',
      expectedCodes: [200],
      timeout: 10000,
    },
    {
      id: 'cloudflare-server-monitor',
      name: 'Cloudflare Server Monitor',
      method: 'GET',
      target: 'https://cftz.421212.xyz',
      statusPageLink: 'https://cftz.421212.xyz',
      expectedCodes: [200],
      timeout: 10000,
    },
    {
      id: 'lyrics-database',
      name: '我的歌词数据库',
      method: 'GET',
      target: 'https://ddns.421212.xyz:9002/',
      statusPageLink: 'https://ddns.421212.xyz:9002/',
      expectedCodes: [200],
      timeout: 10000,
    },
  ],
}

const maintenances: MaintenanceConfig[] = []

export { maintenances, pageConfig, workerConfig }
