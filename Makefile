all: up

up:
	docker compose up --watch --build --remove-orphans --force-recreate
