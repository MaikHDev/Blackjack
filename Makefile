all: up

up: ssl
	docker compose up --watch --build --remove-orphans --force-recreate

shell-%:
	docker compose exec $* bash

ssl:
	@if not exist ssl\localhost.pem (       \
		mkdir ssl 2>NUL                  && \
		cd ssl                           && \
		mkcert -install                  && \
		mkcert localhost                 && \
		echo SSL certificates generated     \
	) else (                                \
		echo SSL certificates already exist \
	)
