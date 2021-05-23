---
title: Forms, Headers and Requests
---

# Forms, Headers and Requests

<section>

## HTTP Headers

* [HTTP Headers (code.tutsplus.com)](https://code.tutsplus.com/tutorials/http-headers-for-dummies--net-8039)

```php
header("Cache-Control: no-cache, must-revalidate");
```

### GET Request

Filter query string: `mypage.php?id=2&name=Helena`
```php
$name = filter_input(INPUT_GET, 'name');
```

### POST Request

Filter request body
```php
$name = filter_input(INPUT_POST, 'name');
```

</section>

---


<section>

## Form Handling

Has the form been submitted yet? i. e. is it the first time opening the webpage?
```php
if (!isset($_POST["submit"])) {

}
```

Get parameters from GET or POST request
```php
$id = filter_input(INPUT_GET, 'id');
$id = filter_input(INPUT_POST, 'name');
```

### GET

`$_GET` – an associative array of variables passed to the current script via the URL parameters
```html
<a href="/product/show.php?productID=123">Show</a> 
```

```php
echo $_GET['productID'];
```

`index.html`
```html
<form action="search.php" method="GET" >
  <input type="text" name="textField" />
  <input type="submit" />
</form> 
```

`show.php`
```php
<?php
echo $_GET['textField'];
?>
```

### POST

`$_POST` – an associative array of variables passed to the current script via request body
`index.html`
```html
<form action="login.php" method="POST" >
  <input type="text" name="username" />
  <input type="password" name="password" />
  <input type="submit" />
</form> 
```

`show.php`
```php
<?php
  echo "Hello" . $_POST['username'];
?>
```

### FILES

`$_FILES` – an associative array of items uploaded to the current script via the HTTP POST method
`index.html`
```html
<form enctype="multipart/form-data" action="upload.php" method="POST" >
  <input type="file" name="picture" />
  <input type="submit" />
</form> 
```

`show.php`
```php
<?php
  $path = "users_img" . $_FILES['picture']['name'];
  move_uploaded_file($_FILES['picture']['tmp_name'], $path);
?>
```

Variables `$_FILES`: 
```php
$_FILES['userfile']['name'] // File's original name
$_FILES['userfile']['type'] // File's type
$_FILES['userfile']['size'] // File's length
$_FILES['userfile']['tmp_name'] // File's temporary name
$_FILES['userfile']['error'] // Error code
```

### Example 
```html
<form>
	<span>form text </span>
	<input type="text" name="myformvar" size="30" value="phpfile.php"  />
	<input type="Submit" value="Go" />
</form>
```
```php
isset($_GET['myformvar']))
```

```php
if (isset($_GET['match']) && !fnmatch('*'.$_GET['match'].'*', $filename)) continue;
```

```html
<form>
  <h3>filter</h3>
  <input type="text" name="match" size="30" value="<?php if (isset($_GET['match'])) print htmlspecialchars($_GET['match']);  ?>" />
  <input type="Submit" value="Go" />
</form>
```

### SERVER

Go back to this page after submitting the form
<form action="<?php echo htmlentities($_SERVER['PHP_SELF']); ?>" method="post">
</form>

</section>