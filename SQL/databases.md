---
title: Databases
---

# Databases

<section>

## SQLite3

* `INTEGER` (instead of `INT` in MySQL)
* `AUTOINCREMENT` (instead of `AUTO_INCREMENT` in MySQL)


```bash
sqlite3 test.db
```

SQLite
```sqlite

.help

.database

.table
.tables

// SQL to recreate tables
.schema

.header on
.headers on
.mode column

.q
.quit


CREATE TABLE employees(
  id INT PRIMARY KEY NOT NULL,
  firstname TEXT NOT NULL,
  lastname TEXT NOT NULL,
  employeenumber INT NOT NULL,
  salary REAL NOT NULL,
  country TEXT NOT NULL
);

DROP TABLE employees;

INSERT INTO employees (id, firstname, lastname, employeenumber, salary, country) VALUES (1, "John", "Smith", 101, 15000, "England");

UPDATE employees SET lastname = "Green";
UPDATE employees SET lastname = "Green" WHERE id = 5;
UPDATE employees SET salary = salary + 500;

DELETE FROM employees WHERE id = 5;

DELETE FROM employees;

SELECT * FROM employees;

SELECT firstname, lastname FROM employees;

SELECT * FROM employees ORDER BY firstname;
SELECT * FROM employees ORDER BY firstname ASC; // ASC = default
SELECT * FROM employees ORDER BY firstname DESC;

SELECT COUNT(*) FROM employees;
SELECT COUNT(id) FROM employees;

SELECT * FROM employees WHERE country = "England";
SELECT * FROM employees WHERE country = "England" AND salary > 15000;

SELECT * FROM employees WHERE firstname LIKE "J%"; // % is a wildcard character, think *
SELECT * FROM employees WHERE country LIKE "%d%";



// aggregate functions
SELECT MIN(salary) FROM employees;
SELECT MAX(salary) FROM employees;
SELECT SUM(salary) FROM employees;



```

</section>

---

<section>

## MySQL?

```
CREATE TABLE students(id INT NOT NULL, firstName VARCHAR(256), score INT, PRIMARY KEY(id));

SELECT * FROM students;

INSERT INTO students VALUES (w, ‚Marc‘, 96);

SELECT * FROM students
```

</section>
