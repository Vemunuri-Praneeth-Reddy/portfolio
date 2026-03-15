package handlers

import (
	"encoding/json"
	"fmt"
	"net/http"
	"os"

	"github.com/Vemunuri-Praneeth-Reddy/portfolio-backend/models"
	"github.com/resend/resend-go/v2"
)

func ContactHandler(w http.ResponseWriter, r *http.Request) {

	if r.Body == nil {
		http.Error(w, "Request body is required", http.StatusBadRequest)
		return
	}

	var req models.ContactRequest
	err := json.NewDecoder(r.Body).Decode(&req)
	if err != nil {
		http.Error(w, "Invalid request body", http.StatusBadRequest)
		return
	}

	if req.Name == "" || req.Email == "" {
		http.Error(w, "Name and email are required", http.StatusBadRequest)
		return
	}

	err = sendEmail(req)
	if err != nil {
		fmt.Println("Email error:", err)
		http.Error(w, "Failed to send message", http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(map[string]string{
		"message": "Message received successfully",
	})
}

func sendEmail(req models.ContactRequest) error {
	apiKey := os.Getenv("RESEND_API_KEY")
	receiverEmail := os.Getenv("RECEIVER_EMAIL")

	client := resend.NewClient(apiKey)

	params := &resend.SendEmailRequest{
		From:    "Portfolio Contact <onboarding@resend.dev>",
		To:      []string{receiverEmail},
		Subject: fmt.Sprintf("Portfolio Contact from %s", req.Name),
		Html: fmt.Sprintf(`
			<h3>New message from your portfolio</h3>
			<p><strong>Name:</strong> %s</p>
			<p><strong>Email:</strong> %s</p>
			<p><strong>Message:</strong> %s</p>
		`, req.Name, req.Email, req.Message),
	}

	_, err := client.Emails.Send(params)
	return err
}
