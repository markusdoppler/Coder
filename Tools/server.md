---
title: Server
---

# Server

<section>

## Apache

Restart Apache Server
```bash
systemctl restart apache2
```


### SSL

```
ssl/
   certs
   csrs
   keys
   ssl.db
   ssl.db.cache
```

</section>

---

<section>

## Options

### Webservers
* Python
* Node.js
* Java
* PHP
* Perl FCGI


### Template Engines

* Node.js: Handlebars
* Python: Django
* PHP: Twig
* Perl: Template Toolkit


</section>

---

<section>

## Nginx



</section>

---

<section>

## HT-Access

```
<IfModule mod_rewrite.c>
   <IfModule mod_negotiation.c>
      Options -MultiViews -Indexes
   </IfModule>
   
   RewriteEngine On
   
   # Handle Authorization Header
   RewriteCond %{HTTP:Authorization} .
   RewriteRule .* - [E=HTTP_AUTHORIZATION:%{HTTP:Authorization}]
   
   # Redirect Trailing Slashes If Not a Folder
   RewriteCond %{REQUEST_FILENAME} !-d
   RewriteCond %{REQUEST_URI} (.+)/$
   RewriteRule ^ %1 [L,R=301]
   
   # Handle Front Controller
   RewriteCond %{REQUEST_FILENAME} !-d
   RewriteCond %{REQUEST_FILENAME} !-f
   RewriteRule ^ index.php [L]
   
   # Disable index view
   Options -Indexes
   
   # Hide a specific file
   <Files .env>
      Order allow,deny
      Deny from all
   </Files>
</IfModule>
```


### Access password
```bash
htpasswd -B /etc/nginx/.htpasswd-intern access-username
```


</section>
