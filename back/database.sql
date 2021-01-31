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

{"id":1,"parentId":1,"paidAmount":10},
{"id":2,"parentId":1,"paidAmount":50},
{"id":3,"parentId":1,"paidAmount":40},
{"id":4,"parentId":2,"paidAmount":100},
{"id":5,"parentId":3,"paidAmount":10},
{"id":6,"parentId":3,"paidAmount":150},
{"id":7,"parentId":3,"paidAmount":100},
{"id":8,"parentId":4,"paidAmount":300},
{"id":9,"parentId":4,"paidAmount":300},
{"id":10,"parentId":4,"paidAmount":300},
{"id":11,"parentId":5,"paidAmount":10},
{"id":12,"parentId":5,"paidAmount":10},
{"id":13,"parentId":5,"paidAmount":10},
{"id":14,"parentId":5,"paidAmount":10},
{"id":15,"parentId":5,"paidAmount":10},
{"id":16,"parentId":6,"paidAmount":125}

INSERT INTO child (childID,parentID,paidAmount) VALUES (1,1,10);
INSERT INTO child (childID,parentID,paidAmount) VALUES (2,1,50);
INSERT INTO child (childID,parentID,paidAmount) VALUES (3,1,40);
INSERT INTO child (childID,parentID,paidAmount) VALUES (4,2,100);
INSERT INTO child (childID,parentID,paidAmount) VALUES (5,3,10);
INSERT INTO child (childID,parentID,paidAmount) VALUES (6,3,150);
INSERT INTO child (childID,parentID,paidAmount) VALUES (7,3,100);
INSERT INTO child (childID,parentID,paidAmount) VALUES (8,4,300);
INSERT INTO child (childID,parentID,paidAmount) VALUES (9,4,300);
INSERT INTO child (childID,parentID,paidAmount) VALUES (10,4,300);
INSERT INTO child (childID,parentID,paidAmount) VALUES (11,5,10);
INSERT INTO child (childID,parentID,paidAmount) VALUES (12,5,10);
INSERT INTO child (childID,parentID,paidAmount) VALUES (13,5,10);
INSERT INTO child (childID,parentID,paidAmount) VALUES (14,5,10);
INSERT INTO child (childID,parentID,paidAmount) VALUES (15,5,10);
INSERT INTO child (childID,parentID,paidAmount) VALUES (16,6,125);