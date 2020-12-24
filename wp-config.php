<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', 'root' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'U8ozO3m5bfsCDQkxd/iBMLh0RHvaAMrlzai2u+LMOfds6+iw13olJ+/tJQhQ0cVfFvtsxfOaBVOCpLtBZj6rnA==');
define('SECURE_AUTH_KEY',  'wBambIv/J5ql9N4uD3ULpD6uk7pAjyh+d/4Qhng3wHBEAafVyr7MCqJl4ujzuO6y1I78CGnJlHRn5eRwUMpQFA==');
define('LOGGED_IN_KEY',    'nZKZgbPtPYoqGTOb1a56fherEhzFvwosCfZB3VTRRQ1riV5JMFa2GpOaz80ihsnxGX0/Q0S7+gwz4wrIT4IucQ==');
define('NONCE_KEY',        'cQR0WNAxOwZt55WnZtR7ShtwOlc4Pq3PPkAiK7scw2fKWbpg2AfqV+/dWCIo7rhGg+Du0PHDiq7nYT3gQnGX2g==');
define('AUTH_SALT',        '2Rzf7yluGB3veFBSRmrTMsiZ4zWgObJoPZkpOqtVpxIYBB48qBrv+DuvAXko3puZcnch/78eAfX56mlvooPB6g==');
define('SECURE_AUTH_SALT', 'I1rPWCTCtFm8uMgSRzTLhQ7PlhxN9ILgI51qmbbYMb7TvykUqNm0ED7PTVULK2c8KNuY4+W747Dpj68O/ZX3hw==');
define('LOGGED_IN_SALT',   'Zw5+tmYOILN8KhM+ocjWdyZgeqWaz3+RycPbnUcnbiwIdrh59L4B0JJqH6tgMyYnWjGwdnmVmmpz8cnuOfxTeg==');
define('NONCE_SALT',       'vkDi4dIsuR0UXqreHtL5YFDW8NRuCqHY6ng21OWx0VF0jTmTBg1BsOO8jDCXYMRkFgqgri25ErRVKl7kwpAoXw==');

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';




/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
