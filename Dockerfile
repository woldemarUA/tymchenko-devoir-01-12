# Téléchargement de l'image de base Ubuntu 20.04
FROM ubuntu:20.04

# Étiquettes pour l'image Docker
LABEL maintainer="VladTymchenko"
LABEL version="1.0"
LABEL description="Ceci est une image Docker personnalisée pour les services PHP-FPM et Nginx sous la gestion de Supervisor"

# Définit les variables d'environnement
ENV DEBIAN_FRONTEND=noninteractive
ENV nginx_vhost /etc/nginx/sites-available/default
ENV php_conf /etc/php/7.4/fpm/php.ini
ENV nginx_conf /etc/nginx/nginx.conf
ENV supervisor_conf /etc/supervisor/supervisord.conf

# Mise à jour du gestionnaire de paquets et installation de nginx, php-fpm, supervisor et nano
RUN apt update
RUN apt install -y nano
RUN apt install -y nginx php-fpm supervisor && \
    rm -rf /var/lib/apt/lists/* && \
    apt clean

# Copie de la configuration nginx dans l'image et activation de PHP-fpm dans la configuration du vhost nginx
COPY default ${nginx_vhost}
RUN sed -i -e 's/;cgi.fix_pathinfo=1/cgi.fix_pathinfo=0/g' ${php_conf} && \
    echo "\ndaemon off;" >> ${nginx_conf}
# Copie fichiers du CV a racine de site
COPY app  /var/www/html

# Copie de la configuration de Supervisor
COPY supervisord.conf ${supervisor_conf}

RUN mkdir -p /run/php && \
    chown -R www-data:www-data /var/www/html && \
    chown -R www-data:www-data /run/php

# Ajoute info.php a WEB SITE racine
RUN echo '<?php phpinfo(); ?>' > /var/www/html/info.php 

# Configuration du volume
VOLUME ["/etc/nginx/sites-enabled", "/etc/nginx/certs", "/etc/nginx/conf.d", "/var/log/nginx", "/var/www/html"]

# Copie du script start.sh et définition de la commande par défaut pour le conteneur
COPY start.sh /start.sh
CMD ["./start.sh"]

# Exposition des ports pour l'application
EXPOSE 80 443
