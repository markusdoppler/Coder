---
title: SQL
---

# SQL

<section>

## Resources

* SQL = Structured Query language
* Query language to work with a database management system (DBMS)

Resources:
* [SQL Tutorial](https://youtu.be/HXV3zeQKqGY?t=7886)
* [MySQL](https://code.tutsplus.com/tutorials/top-20-mysql-best-practices--net-7855)

### MySQL
* every query ends with a semicolon `;`!


### SQLite3
* lightweight database to use e.g. in iOS apps

</section>

---

<section>

## SQL Comment

```sql
-- my comment
```

</section>

---

<section>

## Create a table

```sql
CREATE TABLE tableName(parameter <TYPE>, ...)

CREATE TABLE posts_database(
    id INT NOT NULL AUTO_INCREMENT,
    PRIMARY KEY(id),
    text VARCHAR(140)
);

CREATE TABLE student(
    student_id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL,
    major VARCHAR(40) DEFAULT 'TBA',
    PRIMARY KEY(student_id)
);

CREATE TABLE IF NOT EXISTS tableName(
  id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  ingredient VARCHAR(128) NOT NULL,
  category VARCHAR(256)
);
```


* `INTEGER`
* `DECIMAL`
* `DECIMAL(t,a)` (`t` total precision, `a` digits after comma)
* `VARCHAR(140)`
* `BLOB`
* `DATE` (YYYY-MM-DD)
* `TIMESTAMP` (YYYY-MM-DD HH:MM:SS)

Constraints
* `id INT PRIMARY KEY`
* `keyVariable INT NOT NULL AUTO_INCREMENT, PRIMARY KEY(keyVariable)`
* `UNIQUE`
* `NOT NULL`
* `DEFAULT 'TBA'`

</section>

---

<section>

## Describe table structure

MySQL
```sql
DESCRIBE myTable
```

SQLite3
```bash
.schema
```

</section>

---

<section>

## Delete a table


```sql
DROP TABLE myTable
```

</section>

---

<section>

## Alter table columns

add column
```sql
ALTER TABLE student ADD gpa DECIMAL(3,2)
ALTER TABLE user ADD email TEXT;
```

delete column
```sql
ALTER TABLE student DROP COLUMN gpa
```

</section>

---

<section>

## Insert into table

```sql
INSERT INTO tableName(<arguments>) VALUES (<valuesForArguments>)

INSERT INTO posts VALUES(1, 'blablabla', 4.7)

INSERT INTO posts(text) VALUES('blablabla')

INSERT INTO posts(name, age) VALUES('Marta', 23)
```

</section>

---

<section>

## Selecting from table

select all columns and rows of a database
```sql
SELECT * FROM database
```

select columns
```sql
SELECT column1 AS ‘column 1’, column2 AS ‘column 2’ FROM database
```

selecting rows
```sql
SELECT * FROM database WHERE someValue = ''
```

count all coumns
```sql
SELECT COUNT(*) FROM database
SELECT COUNT(DISTINCT name) FROM database
```

minimum
```sql
SELECT MIN(score) FROM database
```

// ...

```sql
SELECT column1, COUNT(column2) FROM database GROUP BY cloumn1 
```


```sql
SELECT student.id, student.name
FROM student
```

order

```sql
SELECT *
FROM student
ORDER BY student_id ASC -- ascending (default)

SELECT *
FROM student
ORDER BY major, name -- order first by major, then by name
```

limited number of entries

```sql
SELECT *
FROM student
ORDER BY student_id DESC
LIMIT 2
```

filtering

```sql
SELECT *
FROM database
WHERE field = 'Biology' OR name = 'Kate'
```

operators

```sql
>, <, >=, <=, <> (not equal to), =, AND, OR
```

in

```sql
SELECT *
FROM database
WHERE name IN ('Claire', 'Kate', 'Mike')
```

</section>

---

<section>

## Update table data

```sql
UPDATE student
SET major = 'Bio'
WHERE major = 'Biology'
```

```sql
UPDATE student
SET field = 'ok'
WHERE id > 13
```

</section>

---

<section>

## Delete table rows

```sql
DELETE FROM student
WHERE student_id = 5
```

</section>