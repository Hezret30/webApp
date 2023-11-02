CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    balance INTEGER NOT NULL CHECK(balance >= 0)
);
