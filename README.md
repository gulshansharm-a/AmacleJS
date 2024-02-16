diff --git a/README.md b/README.md
--- README.md
+++ README.md
@@ -12,8 +12,136 @@
 
 ### Model
 - `create:model [name]`: Create a new database model.
 
+
+# Model Class Documentation
+
+The `Model` class provides a powerful interface for constructing and executing SQL queries in Node.js applications. It facilitates various operations such as select, insert, update, delete, and more, with support for complex query building.
+
+## Features
+
+- Fluent interface for constructing SQL queries
+- Support for select, insert, update, delete operations
+- Method chaining for easy query building
+- Parameterized queries to prevent SQL injection attacks
+- Transaction management with start, commit, and rollback methods
+- Pagination support with skip and take methods
+- Join operations with innerJoin method
+- Aggregation functions such as sum, avg, count, min, max, and distinct
+- Grouping and ordering of query results
+- Subqueries support for complex query requirements
+
+## Methods
+
+### select(...fields)
+
+Specifies the fields to be selected in the query.
+
+### from(table)
+
+Specifies the table to select from.
+
+### where(field, operator, value="")
+
+Adds a condition to the query to filter records based on specific criteria.
+
+### orWhere(field, operator, value)
+
+Adds an additional condition with the logical operator 'OR'.
+
+### innerJoin(table, condition)
+
+Specifies an inner join operation with the specified table and condition.
+
+### startTransaction()
+
+Starts a database transaction.
+
+### commit()
+
+Commits the current transaction.
+
+### rollback()
+
+Rolls back the current transaction in case of an error.
+
+### executeInTransaction(callback)
+
+Executes a callback function within a transaction, automatically handling commit or rollback based on the callback's result.
+
+### skip(offset)
+
+Specifies the number of records to skip in the query result.
+
+### take(count)
+
+Specifies the maximum number of records to return in the query result.
+
+### paginate(page, itemsPerPage)
+
+Calculates the offset and limit for pagination based on the page number and items per page.
+
+### delete()
+
+Constructs and executes a DELETE query based on the specified conditions.
+
+### sum(field), avg(field), count(field), min(field), max(field)
+
+Specifies an aggregation function for the query results.
+
+### orderBy(field), orderByDesc(field)
+
+Specifies the ordering of the query results based on the specified field, with an option for descending order.
+
+### groupBy(field)
+
+Groups the query results based on the specified field.
+
+### insert(data)
+
+Constructs and executes an INSERT query to insert data into the table.
+
+### update(updates)
+
+Constructs and executes an UPDATE query to update records in the table based on the specified updates and conditions.
+
+### find(fields), first(), firstOrFail(id), findOrFail(id)
+
+Constructs and executes a SELECT query to retrieve records based on the specified conditions or id.
+
+### subquery(field, callback)
+
+Constructs a subquery to be used as a condition in the main query, based on the provided callback function.
+
+### getQB()
+
+Retrieves the generated SQL query or query builder object.
+
+## Usage
+
+1. **Instantiate Model**: Create an instance of the `Model` class.
+
+2. **Build Query**: Use method chaining to construct the query by specifying select fields, where clauses, joins, aggregations, etc.
+
+3. **Execute Query**: Call the appropriate method (`get`) to execute the query and retrieve the result.
+
+4. **Handle Result**: Process the query result as needed for your application logic.
+
+## Example
+
+```javascript
+const Test = require('./Model/Test');
+
+// Create an instance of QueryBuilder
+const test = new Test();
+
+// Build a select query
+test.select("*").from("users").where("status", "=", "active").get().then(result=>{
+console.log(result);
+});
+
+
 ### Controller
 - `create:controller [name]`: Create a new API controller.
 
 ### Middleware
