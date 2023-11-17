docker build --no-cache -f SQL\Dockerfile.PostgreSql -t pokazatelnoe/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t pokazatelnoe/app ../..
