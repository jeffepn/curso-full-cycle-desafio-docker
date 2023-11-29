FROM golang:1.7-alpine as gobase

WORKDIR /usr/src/app

COPY . .

RUN CGO_ENABLED=0 go build -ldflags '-s -w' main.go

FROM scratch

COPY --from=gobase /usr/src/app /go/app

CMD ["/go/app/main"]