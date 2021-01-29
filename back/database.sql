CREATE DATABASE daofab;

CREATE TABLE parent(
    parentID INTEGER UNIQUE NOT NULL,
    sender VARCHAR NOT NULL,
    receiver VARCHAR NOT NULL,
    totalAmount INTEGER NOT NULL
);

CREATE TABLE child (
    childID INTEGER UNIQUE NOT NULL,
    parentID INTEGER NOT NULL REFERENCES parent(parentID),
    paidAmount INTEGER NOT NULL
);