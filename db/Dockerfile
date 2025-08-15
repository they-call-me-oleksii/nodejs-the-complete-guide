# Use a specific MySQL image version from Docker Hub
FROM mysql:8.0

# Set environment variables for MySQL
ENV MYSQL_ROOT_PASSWORD=my-secret-pw
ENV MYSQL_USER=myuser
ENV MYSQL_PASSWORD=myuserpw

# Copy initialization scripts
# Assuming you have a script named init_db.sql in the same directory as your Dockerfile
COPY ./init_db.sql /docker-entrypoint-initdb.d/

# When the container starts, run mysqld and execute the initialization scripts
CMD ["mysqld"]