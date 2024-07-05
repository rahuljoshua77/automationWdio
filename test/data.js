// data.js

const validCredentials = {
    username: 'standard_user',
    password: 'secret_sauce'
};

const invalidCredentials = {
    username: 'standard_user',
    password: 'secretss_sauce'
};

const errorMessage = 'Epic sadface: Username and password do not match any user in this service';

export { validCredentials, invalidCredentials, errorMessage };