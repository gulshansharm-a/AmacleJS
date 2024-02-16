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

```markdown
# Model Class Documentation

The `Model` class provides a powerful interface for constructing and executing SQL queries in Node.js applications. It facilitates various operations such as select, insert, update, delete, and more, with support for complex query building.

## Features

- Fluent interface for constructing SQL queries
- Support for select, insert, update, delete operations
- Method chaining for easy query building
- Parameterized queries to prevent SQL injection attacks
- Transaction management with start, commit, and rollback methods
- Pagination support with skip and take methods
- Join operations with innerJoin method
- Aggregation functions such as sum, avg, count, min, max, and distinct
- Grouping and ordering of query results
- Subqueries support for complex query requirements

## Methods

### `select(...fields)`

Specifies the fields to be selected in the query.

### `from(table)`

Specifies the table to select from.

### `where(field, operator, value="")`

Adds a condition to the query to filter records based on specific criteria.

### `orWhere(field, operator, value)`

Adds an additional condition with the logical operator 'OR'.

### `innerJoin(table, condition)`

Specifies an inner join operation with the specified table and condition.

### `startTransaction()`

Starts a database transaction.

### `commit()`

Commits the current transaction.

### `rollback()`

Rolls back the current transaction in case of an error.

### `executeInTransaction(callback)`

Executes a callback function within a transaction, automatically handling commit or rollback based on the callback's result.

### `skip(offset)`

Specifies the number of records to skip in the query result.

### `take(count)`

Specifies the maximum number of records to return in the query result.

### `paginate(page, itemsPerPage)`

Calculates the offset and limit for pagination based on the page number and items per page.

### `delete()`

Constructs and executes a DELETE query based on the specified conditions.

### `sum(field), avg(field), count(field), min(field), max(field)`

Specifies an aggregation function for the query results.

### `orderBy(field), orderByDesc(field)`

Specifies the ordering of the query results based on the specified field, with an option for descending order.

### `groupBy(field)`

Groups the query results based on the specified field.

### `insert(data)`

Constructs and executes an INSERT query to insert data into the table.

### `update(updates)`

Constructs and executes an UPDATE query to update records in the table based on the specified updates and conditions.

### `find(fields), first(), firstOrFail(id), findOrFail(id)`

Constructs and executes a SELECT query to retrieve records based on the specified conditions or id.

### `subquery(field, callback)`

Constructs a subquery to be used as a condition in the main query, based on the provided callback function.

### `getQB()`

Retrieves the generated SQL query or query builder object.

## Usage

1. **Instantiate Model**: Create an instance of the `Model` class.
2. **Build Query**: Use method chaining to construct the query by specifying select fields, where clauses, joins, aggregations, etc.
3. **Execute Query**: Call the appropriate method (`get`) to execute the query and retrieve the result.
4. **Handle Result**: Process the query result as needed for your application logic.

## Example

```javascript
const Test = require('./Model/Test');

// Create an instance of QueryBuilder
const test = new Test();

// Build a select query
test.select("*").from("users").where("status", "=", "active").get().then(result=>{
console.log(result);
});
```

## Controller

- `create:controller [name]`: Create a new API controller.

## Middleware

### Creating a Middleware

You can create a new middleware using the following command:

```bash
create:middleware [name]
```

This command will generate a new middleware file with the specified name.

### Using Middleware

To use a middleware in your routes, you can import it and apply it to specific routes or to all routes globally.

```javascript
const middleware = require('./middleware');

// Apply middleware to specific route
app.get('/route', middleware, (req, res) => {
  // Route logic here
});

// Apply middleware to all routes
app.use(middleware);
```

## Note
- Ensure Node.js and npm are installed on your system before using the framework.
- For any issues or feature requests, please refer to the repository's issue tracker.

Happy coding with Amacle! 🚀
