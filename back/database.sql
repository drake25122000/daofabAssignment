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

select * from parent P NATURAL JOIN (select parentid, SUM(paidAmount) as totalPaidAmount from child GROUP BY parentid) as C;

select C.childid, P.sender, P.receiver, P.totalAmount, C.paidAmount from child C, parent P where C.parentid = P.parentid;