default: start

init:
	docker-compose -p leaon up --build -V -d

start:
	docker-compose -p leaon up

stop:
	docker-compose -p leaon down

stop-all:
	docker stop $$(docker ps -aq)

rebuild:
	docker-compose -p utogi up --build -V -d