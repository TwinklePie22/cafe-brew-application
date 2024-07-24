Cafe Brew Application
The Cafe Brew Application is a Java-based application designed to streamline the operations of a cafe. It offers functionalities for managing products, categories, bills, user authentication, and a dashboard to monitor various aspects of the cafe's operations.

Features
1. User Authentication: Secure login and registration for users.
2. Product Management: Add, update, and delete products.
3. Category Management: Organize products into categories.
4. Billing System: Generate and manage bills.
5. Dashboard: View statistics and reports about the cafe's performance.

Technologies Used
1. Java
2. Spring Boot
3. Hibernate
4. JPA
5. MySQL
6. Maven

Setup Instructions

Prerequisites:
1. Java 11 or higher
2. MySQL
3. Maven
4. Postman

Clone the repository:
git clone https://github.com/phoenixA380/cafe-brew.git
cd cafe crew

Configure the database:
Create a MySQL database named cafe.
Update the application.properties file with your database credentials.
spring.datasource.url=jdbc:mysql://localhost:3306/cafe
spring.datasource.username=yourusername
spring.datasource.password=yourpassword

Build the project:
mvn clean install

Run the application:
mvn spring-boot:run

Access the application
1. Register/Login: Use Postman to send POST requests for account creation or login.
2. Dashboard: Send GET requests to view the overall statistics and reports.
3. Manage Products: Send POST, PUT, or DELETE requests to add, update, or delete products.
4. Manage Categories: Send POST, PUT, or DELETE requests to add, update, or delete categories.
5. Billing: Send POST requests to generate new bills and GET requests to view past transactions.

API Endpoints
1. User Registration: POST /api/user/register
2. User Login: POST /api/user/login
3. Get Dashboard Stats: GET /api/dashboard/stats
4. Add Product: POST /api/product
5. Update Product: PUT /api/product/{id}
6. Delete Product: DELETE /api/product/{id}
7. Add Category: POST /api/category
8. Update Category: PUT /api/category/{id}
9. Delete Category: DELETE /api/category/{id}
10. Generate Bill: POST /api/bill
11. Get All Bills: GET /api/bill

Contact Information
Email: sanjusanjeev2014@gmail.com
GitHub: PhoenixA380
