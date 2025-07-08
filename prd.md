# 🧾 Product Requirements Document (PRD)

---

### 🏷 Product Name: **NeetoHook**

> A unified webhook inspection, transformation, and delivery reliability platform for developers and teams.

## 2. Branding & Identity

**Tagline:** One hook to inspect them all — forever free.

**Brand Colors:**
• Primary: #17bf45
• Accent: #61e546
• Secondary Accent: Lime #84CC16
• Background: Gray-50 #F9FAFB
• Text Primary: Gray-900 #111827
• Text Secondary: Gray-600 #4B5563
• Border: Gray-200 #E5E7EB
• Error: Red-500 #EF4444
• Success: Green-500 #10B981

**Logo Idea:** A stylized “hook” forming the letter "N", minimalist and developer-friendly.

8.1 Tech Stack
• **Backend:** Ruby on Rails (API-only mode) — Fast backend setup, ActiveJob for retries, ActionCable for live updates.• **Frontend:** React (with Vite) — Component-driven architecture, Tailwind CSS for styling.• **Communication:** JSON API over REST, WebSockets for live logs.• **Bundler:** Vite.js (preferred for Rails 7+ React setups).
---

## 1. 🧭 Purpose

**NeetoHook** aims to simplify the process of testing, inspecting, forwarding, mocking, and reliably delivering webhooks. It is a developer-first platform that combines live inspection, customizable behavior, local tunneling, and serverless transformations—all from one dashboard.

---

## 2. 🔧 Problem Statement

Modern applications rely heavily on webhooks for real-time communication. However:

- Developers often struggle to test and debug webhooks, especially on local environments.
- Existing tools are either too simple (no forwarding/logic) or too complex (requires infra setup).
- Handling retries, delivery guarantees, and transformations is often manual and error-prone.

---

## 3. 🎯 Goals & Objectives

| Goal                                | Metric                                      |
| ----------------------------------- | ------------------------------------------- |
| Easy webhook testing for developers | Time-to-setup < 30 seconds                  |
| Reliable delivery with retries      | 99.99% delivery guarantee                   |
| On-the-fly transformations          | Transform or mock any payload via UI/script |
| Local development support           | Tunnel setup < 1 min                        |
| Workflow automation                 | 500+ prebuilt integrations                  |

---

## 4. 👥 Target Users

- Backend/API Developers
- QA Engineers & Test Automation Engineers
- DevOps/Platform Engineers
- SaaS Integration teams
- Internal tools and test teams

---

## 5. 🔑 Features

### 📦 Core

- ✅ **Unique URL** to collect incoming HTTP requests
- ✅ **Live inspection** of headers, body, IP, method, etc.
- ✅ **Retention settings** (7 days, 30 days, forever for Pro)
- ✅ **Webhook History & Search**

### 🔁 Forwarding & Replaying

- ✅ **Forward to one or more destinations**
- ✅ **Conditional forwarding logic (e.g., based on headers)**
- ✅ **Manual or automated replay of failed/successful webhooks**

### 🧠 Custom Logic

- ✅ **WebhookScript editor** (JavaScript-like) to:

  - Validate/transform payloads
  - Modify headers
  - Return mocked responses

- ✅ **Visual editor** for no-code users

### 🌐 Local Tunnels

- ✅ **Expose local servers using tunnel (via built-in CLI like Ngrok)**
- ✅ **HTTPS URL generation**
- ✅ **Traffic logs even when offline**

### 🧪 Mocking

- ✅ Custom mock API endpoints (GET, POST, PUT, etc.)
- ✅ Define response body, status code, headers, and delay

### 📤 Email & DNS Testing

- ✅ **Temporary email addresses**
- ✅ **DNS endpoint testing** (e.g., for webhook callbacks on DNS changes)

### 🛡️ Reliability

- ✅ Automatic retry with exponential backoff
- ✅ Webhook queue with audit log
- ✅ Configurable retry policies per endpoint

### 🔒 Security

- ✅ API key-based access
- ✅ IP whitelisting
- ✅ Encrypted payload storage
- ✅ Audit logs & permission-based teams

### 📈 Integrations

- Slack, Discord, Microsoft Teams
- Google Sheets, Airtable, Zapier
- S3, Dropbox, Kafka, RabbitMQ
- GitHub, Stripe, Shopify

---

## 6. 🧭 User Flows

### Flow 1: Quick Test Webhook

1. User visits NeetoHook, gets a URL
2. Sends a `POST` to the URL
3. Sees request in live dashboard
4. Optionally forwards payload to production/staging

### Flow 2: Transform + Forward

1. Define transformation rules (e.g., rename keys)
2. Forward payload to internal service
3. If 500 error, retry 3 times

### Flow 3: Localhost Debugging

1. Start tunnel CLI: `NeetoHook tunnel --port 4000`
2. Get HTTPS public URL
3. Point webhook to it
4. Receive real-time data in local dev environment

---

## 7. 📦 Scope

### In Scope

- Webhook inspection, forwarding, and transformation
- Local dev tunneling
- User dashboard with history
- CLI and REST API
- Basic team management

### Out of Scope (for MVP)

- Full no-code automation builder (like Zapier)
- SDKs in all languages (provide JS/Python first)

---

## 8. 🧱 Dependencies

- Node.js backend with Express + WebSocket
- React frontend with Tailwind
- PostgreSQL + Redis
- Secure tunnel agent (based on Go)
- Serverless functions runtime (e.g., via Deno/VM2)
