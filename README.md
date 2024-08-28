# Cafe Brew Application

The Cafe Brew Application is a Java-based application designed to streamline the operations of a cafe. It offers functionalities for managing products, categories, bills, user authentication, and a dashboard to monitor various aspects of the cafe's operations.

## Features
1. **User Authentication:** Secure login and registration for users.
2. **Product Management:** Add, update, and delete products.
3. **Category Management:** Organize products into categories.
4. **Billing System:** Generate and manage bills.
5. **Dashboard:** View the cafe's performance statistics and reports.

## Technologies Used
- Node Js
- Next Js
- REST APIs
- Spring Boot
- JPA
- MySQL
- Maven

## Setup Instructions

### Prerequisites:
- Java 11 or higher
- MySQL
- Maven
- Postman
<!-- 
### Clone the repository:
git clone https://github.com/phoenixA380/cafe-brew.git -->


### Configure the database:
1. Create a MySQL database named `cafe`.
2. Update the `application.properties` file with your database credentials.
properties
spring.datasource.url=jdbc:mysql://localhost:3306/cafe
spring.datasource.username=yourusername
spring.datasource.password=yourpassword

### Set up a new Next.js project

npx create-next-app@latest cafe-management --typescript


### Install additional dependencies

npm install @radix-ui/react-icons lucide-react @radix-ui/react-label @radix-ui/react-slot @radix-ui/react-separator @radix-ui/react-dropdown-menu class-variance-authority clsx tailwind-merge


### Build the project:

npm run build


### Run the application:

npm run dev



### Build the project:

mvn clean install


### Run the application:

mvn spring-boot:run


### Set up UI components

Create a `components/ui` folder and add the following files:

1. `components/ui/button.tsx`
2. `components/ui/card.tsx`
3. `components/ui/input.tsx`
4. `components/ui/label.tsx`
5. `components/ui/table.tsx`
6. `components/ui/separator.tsx`
7. `components/ui/dropdown-menu.tsx`


## Access the application
1. **Register/Login:** Use Postman to send POST requests for account creation or login.
2. **Dashboard:** Send GET requests to view the overall statistics and reports.
3. **Manage Products:** Send POST, PUT, or DELETE requests to add, update, or delete products.
4. **Manage Categories:** Send POST, PUT, or DELETE requests to add, update, or delete categories.
5. **Billing:** Send POST requests to generate new bills and GET requests to view past transactions.

## API Endpoints
- **User Registration:** `POST /api/user/register`
- **User Login:** `POST /api/user/login`
- **Get Dashboard Stats:** `GET /api/dashboard/stats`
- **Add Product:** `POST /api/product`
- **Update Product:** `PUT /api/product/{id}`
- **Delete Product:** `DELETE /api/product/{id}`
- **Add Category:** `POST /api/category`
- **Update Category:** `PUT /api/category/{id}`
- **Delete Category:** `DELETE /api/category/{id}`
- **Generate Bill:** `POST /api/bill`
- **Get All Bills:** `GET /api/bill`
<!-- 
## Contact Information
**Email:** sanjusanjeev2014@gmail.com  
**GitHub:** [PhoenixA380](https://github.com/phoenixA380) -->
