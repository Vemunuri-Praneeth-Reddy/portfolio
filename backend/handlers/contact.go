package handlers

import (
	"encoding/json"
	"fmt"
	"net/http"
	"os"

	"github.com/Vemunuri-Praneeth-Reddy/portfolio-backend/models"
	"gopkg.in/gomail.v2"
)

func ContactHandler(w http.ResponseWriter, r *http.Request) {
	if r.Body == nil {
		http.Error(w, "Empty Request body", http.StatusBadRequest)
		return
	}
	var req models.ContactRequest
	err := json.NewDecoder(r.Body).Decode(&req)
	if err != nil {
		http.Error(w, "Invalid Request body", http.StatusBadRequest)
		return
	}

	if req.Name == "" || req.Email == "" {
		http.Error(w, "Name and Email required", http.StatusBadRequest)
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
		"message": "Message Recieved successfully",
	})
}

func sendEmail(req models.ContactRequest) error {
	smtpEmail := os.Getenv("SMTP_EMAIL")
	smtpPassword := os.Getenv("SMTP_PASSWORD")
	receiverEmail := os.Getenv("RECEIVER_EMAIL")

	m := gomail.NewMessage()
	m.SetHeader("From", smtpEmail)
	m.SetHeader("To", receiverEmail)
	m.SetHeader("Subject", fmt.Sprintf("Portfolio Contact from %s", req.Name))
	m.SetBody("text/html", fmt.Sprintf(`
		<h3>New message from your portfolio</h3>
		<p><strong>Name:</strong> %s</p>
		<p><strong>Email:</strong> %s</p>
		<p><strong>Message:</strong> %s</p>
	`, req.Name, req.Email, req.Message))

	d := gomail.NewDialer("smtp.gmail.com", 587, smtpEmail, smtpPassword)

	return d.DialAndSend(m)
}
