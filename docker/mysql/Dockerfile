FROM mysql:latest
COPY ./docker/mysql/my.cnf /etc/mysql/conf.d/
RUN apt-get update
RUN apt-get install -y locales
RUN apt-get clean
RUN rm -rf /var/lib/apt/lists/*
RUN sed -i -E 's/# (ja_JP.UTF-8)/\1/' /etc/locale.gen && locale-gen
ENV LANG ja_JP.UTF-8
CMD ["mysqld", "--character-set-server=utf8", "--collation-server=utf8_unicode_ci"]