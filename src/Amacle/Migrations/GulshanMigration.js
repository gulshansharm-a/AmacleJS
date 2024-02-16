
const Blueprint = require("../schema/Blueprint");
const DB = require("../schema/DB");
const Migrations = require("../schema/Migration");

/**
 * Migration class represents a migration for creating the Gulshan table.
 * @extends Migrations
 */
class GulshanMigration extends Migrations {
    /**
     * Initializes the migration by creating the Gulshan table using a Blueprint.
     * @override
     * @returns {void}
     */
    initialize() {
        // Create a new table in the database using a Blueprint
        DB.create((table = new Blueprint()) => {
            // Define the structure of the 'Gulshan' table
            table.name("Gulshan");
            table.id("id");
            table.char("name",150).notnull();
            
            // Write your code here
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
        DB.Alter.addColumn("youtablename","newcal","char(100)")
    }
}

module.exports = GulshanMigration;


