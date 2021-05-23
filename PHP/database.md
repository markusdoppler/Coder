---
title: Databases
---

# Databases

<section>

## JSON

```php
// Read JSON
$jsonData = file_get_contents("movies.json");

$jsonObject = json_decode($jsonData);       // PHP object
$jsonArray = json_decode($jsonData, TRUE); // PHP array

// alter data
array_push($jsonArray, 'new');
array_push($jsonObject, 'new');

// Save JSON to file
$json = json_encode($jsonObject)."\n";
file_put_contents($jsonFile, $json);
```

</section>

---

<section>

## XML

add new entry to XML file
```php
if (file_exists("substantiva.xml")) {
  // fopen($substantiva);

  $xmlString = file_get_contents("substantiva.xml");
  
  if (isset($_POST['word']) && isset($_POST['translation'])) {
    $newXML = "<word><name>" . $_POST['word'] . "</name><trans>" . $_POST['translation'] . "</trans></word>";
    
    file_put_contents("substantiva.xml", $xmlString . $newXML);
  }

  // fclose($substantiva);
} else {
  // echo "Redirect and show error message.";
}
```

</section>

---

<section>

## PDO – PHP Data Object

```php
$pdo = new PDO('movies.db');
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$pdo->exec("CREATE TABLE IF NOT EXISTS $tableName(id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, name VARCHAR(128) NOT NULL);");

$statement = $pdo->query("SELECT * FROM $tableName");
$rows = $statement->fetchAll(PDO::FETCH_ASSOC);
```

```php
try {
  
  // PDO statements here

} catch(PDOException $e) {
  // Remove or change message in production code
  echo $e->getMessage();
}
```

</section>

---

<section>

## SQLite

### via PDO

Simple Query
```php
  $pdo = new PDO('sqlite:movies.db');

  // print rows
  $statement = $pdo->query("SELECT * FROM movies");
  $movies = $statement->fetchAll(PDO::FETCH_ASSOC);
  foreach ($movies as $row => $movie) {
    echo $movie['title']
  }
```

Aggregate Function
```php
  $statement = $pdo->query("SELECT COUNT(*) FROM movies");
  $numberOfMovies = $statement->fetchColumn();
  print_r($numberOfMovies);
```

Prepared Statements: Placeholder
```php
  try {
    $statement = $pdo->prepare("SELECT * FROM movies WHERE id=:movieID");
    $statement->bindValue(':movieID', 5, PDO::PARAM_INT);
    $sucess = $statement->execute();
    $records = $statement->fetch();

    if (!$records) {
      echo "Nothing found";
      exit();
    }

  } catch (PDOException $e) {
    print $e->getMessage()
    die();
  }
```

* `PDO::PARAM_INT`
* `PDO::PARAM_STR`


### via SQLite3

```php
$db = new SQLite3("ingredients.db"); 

// Query
$data = $db->query('INSERT INTO ingredients(ingredient, amount) VALUES ("salt", "1g")'); 

// Fetch Array
$result->columnName($i); 
$data = $result->fetchArray(SQLITE3_ASSOC); 
```

</section>

---

<section>

## MySQL

### via PDO

**Create the connection**

```php
$servername = "www.my-server.com";
$username = "username";
$password = "password";
$dbname = "databasename";

$pdo = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

// close the connection
$pdo = null;
```

```php
$statement = $pdo->query('INSERT INTO names(name, age) VALUES("Tim", 19);');
$statement->fetch();
```

```php
$statement = $pdo->query('SELECT * FROM ingredients;');
$data = $statement->fetchAll();
```


**Multiple queries at once**
```php
// a sample array of data
$data = [
    ['col1' => 'foo1', 'col2' => 'bar1'],
    ['col1' => 'foo2', 'col2' => 'bar2'],
];
// prepare the SQL query once
$stmt = $pdo->prepare("INSERT INTO table SET col1 = ?, col2 = ?");

$pdo->beginTransaction();
// loop over the data array
foreach ($data as $row) {
    $stmt->execute([$row['col1'], $row['col2']]);
}
$pdo->commit();
```

Note: whether it is a single query or multiple different queries, the principle remains the same: just wrap all queries in a transaction and use prepared statements.


### via MySQLi extension

```php
$conn = new mysqli($servername, $username, $password);

$conn->close();
```

</section>
