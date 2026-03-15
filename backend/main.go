package main

import (
	"fmt"
	"net/http"
	"os"

	"github.com/Vemunuri-Praneeth-Reddy/portfolio-backend/handlers"
	"github.com/go-chi/chi/v5"
	"github.com/go-chi/cors"
	"github.com/joho/godotenv"
)

func main() {
	err := godotenv.Load()
	if err != nil {
		fmt.Println("Error loading .env file:", err)
	} else {
		fmt.Println("Loaded .env successfully")
	}
	port := os.Getenv("PORT")

	allowedOrigin := os.Getenv("ALLOWED_ORIGIN")
	fmt.Println("nothing:", allowedOrigin)
	r := chi.NewRouter()
	r.Use(cors.Handler(cors.Options{
		AllowedOrigins: []string{allowedOrigin},
		AllowedMethods: []string{"GET", "POST", "OPTIONS"},
		AllowedHeaders: []string{"Content-Type"},
	}))

	r.Post("/api/contact", handlers.ContactHandler)
	fmt.Println("Server running on port", port)
	http.ListenAndServe(":"+port, r)

}
