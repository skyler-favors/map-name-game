FROM rustlang/rust:nightly

ARG PORT
ARG ADDRESS

WORKDIR /app
COPY . .

RUN cargo build --release

CMD PORT=$PORT ADDRESS=$ADDRESS ./target/release/server
