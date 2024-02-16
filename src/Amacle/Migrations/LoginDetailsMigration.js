
const Blueprint = require("../schema/Blueprint");
const DB = require("../schema/DB");
const Migrations = require("../schema/Migration");

/**
 * Migration class represents a migration for creating the LoginDetails table.
 * @extends Migrations
 */
class LoginDetailsMigration extends Migrations {
    /**
     * Initializes the migration by creating the LoginDetails table using a Blueprint.
     * @override
     * @returns {void}
     */
    initialize() {
        // Create a new table in the database using a Blueprint
        DB.create((table = new Blueprint()) => {
            // Define the structure of the 'LoginDetails' table
            table.name("LoginDetails");
            table.id("id");
            // Write your code here
            table.char("password",150)
            table.char("email",150).notnull().unique()
            table.timestamps("created_at")
            table.timestamps("updated_at")
            // Execute the SQL query to create the table
            table.create();
        });
    }
    
    /**
     * Placeholder for additional actions after the migration.
     * @override
     * @returns {void}
     */
    action() { 
        // You can add specific actions or modifications here
        DB.dropIfExists("LoginDetails")
       // DB.Alter.addColumn('LoginDetails','email','char(150) Unique ');
    }
}

module.exports = LoginDetailsMigration;


