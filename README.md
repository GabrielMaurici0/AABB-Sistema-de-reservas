# How to run


To run this file on your computer, you need to install the node dependencies. Using:

    npm install

Next, you will have to create a file named .env, in this file you will place:

    DB_NAME=NAME_OF_DATABASE
    DB_USER=USER_OF_DATABASE
    DB_PASSWORD=PASS_OF_USER
    DB_HOST=LOCALHOST

    SECRET=HASH_CODE
    

If you use MySql Workbench, you will have to run the following commands:

    create database aabb;
    use aabb;
    CREATE USER 'aabb'@'localhost' IDENTIFIED BY 'Abcd&123';
    GRANT ALL PRIVILEGES ON * . * TO 'aabb'@'localhost';

Once this is done, you can type the following command to start the server:

    npm start


Thank you for accessing and good use!
