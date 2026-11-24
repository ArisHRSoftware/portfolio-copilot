# QStash Cron Schedules — Vercel Hobby Safe

Budget: 4h/month Fluid Active CPU. These schedules use ~2.5h (37% buffer).

Configure at: https://console.upstash.com → QStash → Schedules

## Active Schedules

| Cron | Endpoint | Schedule | Monthly CPU |
|------|----------|----------|-------------|
| edgar-poll | POST /api/cron/edgar-poll | `0 10,14,18,22 * * 1-5` | 2.2h |
| insider-alerts | POST /api/cron/insider-alerts | `0 18,2 * * 1-5` | 0.1h |
| daily-digest | POST /api/cron/daily-digest | `0 11 * * 1-5` | 0.05h |
| weekly-digest | POST /api/cron/weekly-digest | `0 12 * * 6` | <0.01h |
| generate-newsletter | POST /api/cron/generate-newsletter | `30 10 * * 1-5` | 0.07h |
| generate-blog | POST /api/cron/generate-blog | `0 6 * * 1` | 0.02h |
| reset-api-usage | POST /api/cron/reset-api-usage | `0 0 * * *` | <0.01h |
| archive-cleanup | POST /api/cron/archive-cleanup | `0 0 * * *` | 0.02h |
| approval-reminders | POST /api/cron/approval-reminders | `0 12 * * 3` | <0.01h |
| integrity-check | POST /api/cron/integrity-check | `0 3 * * 0` | 0.02h |

## Paused Schedules (do NOT enable)

| Cron | Reason |
|------|--------|
| revalidate-hubs | Disabled in code. Hub pages use 24h ISR timers. |
| social-digest | Twitter API keys not configured. Wastes cold starts. |

## Notes

- All times are UTC. ET = UTC-5 (winter) / UTC-4 (summer).
- edgar-poll: 4x/day weekdays only (6am, 10am, 2pm, 6pm ET). SEC publishes during market hours.
- insider-alerts: 2x/day weekdays (2pm, 10pm ET). Form 4s only on trading days.
- heartbeat: Runs via Vercel native cron (vercel.json), not QStash. Essentially free.
- welcome-sequence: Triggered per-subscriber via QStash delay, not a schedule.

## Deployment

Site is on Vercel (new account: ambitionadvisorcareers-4480). QStash URLs must use `https://brefyr.com/api/cron/X`.

Verify these env vars are set in Vercel:
- NEXT_PUBLIC_SITE_URL=https://brefyr.com
- RESEND_FROM_EMAIL=noreply@brefyr.com
- QSTASH_TOKEN, QSTASH_CURRENT_SIGNING_KEY, QSTASH_NEXT_SIGNING_KEY
- Confirm edgar-poll schedule is NOT hourly (must be 4x/day max)
