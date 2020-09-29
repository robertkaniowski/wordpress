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
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wp' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'm5Xl^uK)IV>cU|d:K1Lf<dBRSp$PqI-s`J|B]%InfK`p0^fg=P*#Y&o>+u79XN3E');
define('SECURE_AUTH_KEY',  'w|-PaHv&*obJ+10YNf}f^(1|v{T0fGiN[v}U@0U2-$UO^uIiTJ{4Dc%+lj_Osl8(');
define('LOGGED_IN_KEY',    '=CF=^q|a,US3F,X-pOBqM:w_A&>{qLR=!cQ^=O|[}/+{*.L0%v-,J, Os+-W>P-a');
define('NONCE_KEY',        '%.%g@(nOn(ld$I^%Pu$J!,PmlQ1H^NkDaxK ;+ogwn%|+=;q017+s&]C!W$v 6j2');
define('AUTH_SALT',        'pNWo9IG_-wDm+cFd~o/ciW`.r5+>Tcf0M*TGezy&%&2J#}7yEi!m0Cj<s3_ru+^Q');
define('SECURE_AUTH_SALT', '7vK/|DCVy++<=HMJDUOJ`?,(`4bY%ufHm))mGc4hh;;G0i^)Qb!dY.up]xp/}@_D');
define('LOGGED_IN_SALT',   '7u}+3QnL`&mW(B=LpX+h&QQuD.=|4KDzaqlb]KQ|/FDg2@jL ob[Mp{?nB/xb{&-');
define('NONCE_SALT',       'F0>Zdko%L~S --b|1lsW6;[}(9q;L;JL`vK9,Zz/H2 -M2bg6PJV9VEc$N^pI*H<');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'eymERfykQg_wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
