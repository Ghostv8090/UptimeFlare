# 通过 GitHub 更新监测页

本仓库使用 `uptime.config.ts` 保存站点标题、链接和监测点。修改该文件并提交到自己的 GitHub fork 后，在 GitHub 的 **Actions → Deploy to Cloudflare → Run workflow** 手动部署。部署工作流会更新现有的 `uptimeflare_worker` Worker 和 `uptimeflare` Pages 项目，继续使用 `uptimeflare_d1` 数据库；不会重新创建数据库或清空历史记录。

首次使用前，在 fork 的 **Settings → Secrets and variables → Actions** 添加 `CLOUDFLARE_API_TOKEN`。如果令牌无法列出账户，再添加 `CLOUDFLARE_ACCOUNT_ID`。令牌需要能更新现有 Worker、Pages 和 D1 绑定。

如需从原作者仓库拉取新版代码，在 **Actions → Upstream Sync → Run workflow** 手动运行同步。同步流程保留本仓库的 `uptime.config.ts`、Cloudflare 绑定配置和两个工作流。同步完成后，先检查变更与兼容性，再手动运行 **Deploy to Cloudflare**。

监测点使用固定 `id` 关联历史记录。保留监测点时不要更改其 `id`；移除监测点仅停止显示和检查，数据库中的已有记录不会因本流程被删除。
