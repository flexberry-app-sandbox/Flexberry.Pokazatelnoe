docker build --no-cache -f SQL\Dockerfile.PostgreSql -t pokazatelnoe-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t pokazatelnoe-java/app ../../..
