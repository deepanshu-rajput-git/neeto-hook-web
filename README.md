# NeetoWebhooks

NeetoWebhooks is a webhook testing and debugging tool. It provides a unique URL to which you can send webhooks, and it will display the requests in real-time. It also allows you to create transformation rules to modify the webhook payload before it is processed.

## Setup and Running the Application

### Prerequisites

* Ruby 3.3.5
* Node.js >= 18
* PostgreSQL

### Backend (Rails)

1.  **Install dependencies:**
    ```bash
    bundle install
    ```

2.  **Create and setup the database:**
    ```bash
    rails db:create
    rails db:migrate
    rails db:seed
    ```

### Frontend (React)

1.  **Navigate to the frontend directory:**
    ```bash
    cd frontend
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Navigate back to the root directory:**
    ```bash
    cd ..
    ```

### Running the Application

To run both the backend and frontend servers, use the following command:

```bash
./bin/dev
```

The application will be available at `http://localhost:3000`.

## API Endpoints

### Webhook Inboxes

*   `GET /api/hooks`: List all webhook inboxes.
*   `POST /api/hooks`: Create a new webhook inbox.
*   `GET /api/hooks/:uuid`: Show a specific webhook inbox.

### Webhook Requests

*   `GET /api/webhook_inboxes/:webhook_inbox_uuid/webhook_requests`: List all webhook requests for an inbox.
*   `GET /api/webhook_inboxes/:webhook_inbox_uuid/webhook_requests/:id`: Show a specific webhook request.
*   `POST /api/hooks/:uuid`: Create a new webhook request. This is the endpoint you will use to send webhooks to.

### Transformation Rules

*   `GET /api/webhook_inboxes/:webhook_inbox_uuid/transformation_rules`: List all transformation rules for an inbox.
*   `POST /api/webhook_inboxes/:webhook_inbox_uuid/transformation_rules`: Create a new transformation rule for an inbox.
*   `GET /api/transformation_rules/:id`: Show a specific transformation rule.
*   `PUT /api/transformation_rules/:id`: Update a specific transformation rule.
*   `DELETE /api/transformation_rules/:id`: Delete a specific transformation rule.

### Dashboard

*   `GET /api/dashboard/stats`: Get statistics for the dashboard.

## Running Tests

To run the test suite, use the following command:

```bash
rails test
```