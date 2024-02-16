# Amacle Framework

Amacle is a framework built with Node.js and React, inspired by Laravel, designed to facilitate web application development. It provides a set of features and commands to streamline common tasks during development.

## Features

### Migration
- `create:migration [name]`: Create a new migration file.
- `migrate [name]`: Run a specific migration.
- `migrate:action [name]`: Run a specific migration action.
- `migrate:all`: Run all pending migrations.

### Model
- `create:model [name]`: Create a new database model.

### Controller
- `create:controller [name]`: Create a new API controller.

### Middleware
- `create:middleware [name]`: Create a new API middleware.

### Scheduler
- `create:scheduler [name]`: Create a new schedule for running tasks at specified intervals.

## Instructions

1. **Installation**: Clone the repository and install dependencies using `npm install`.
2. **Usage**: Run `node amacle [command] [options]` to execute any of the available commands listed above.

## Migration
- To create a new migration file: `node amacle create:migration [name]`.
- To run a specific migration: `node amacle migrate [name]`.
- To run a specific migration action: `node amacle migrate:action [name]`.
- To run all pending migrations: `node amacle migrate:all`.

## Model
- To create a new database model: `node amacle create:model [name]`.

## Controller
- To create a new API controller: `node amacle create:controller [name]`.

## Middleware
- To create a new API middleware: `node amacle create:middleware [name]`.

## Scheduler
- To create a new schedule for a task: `node amacle create:scheduler [name]`. Follow the prompts to input the cron schedule.

### Cron Schedule Format
- The schedule for a job is defined by five fields, each representing a unit of time.
- Fields, in order: minute, hour, day of the month, month, day of the week.
- Example formats are provided for guidance when creating a schedule.

## Note
- Ensure Node.js and npm are installed on your system before using the framework.
- For any issues or feature requests, please refer to the repository's issue tracker.

Happy coding with Amacle! 🚀
