# 🧪 Automation Testing – OrangeHRM Login Feature

## 📋 Project Summary

Proyek ini bertujuan untuk menguji fitur login pada website [OrangeHRM Open Source](https://opensource-demo.orangehrmlive.com/) menggunakan Cypress sebagai framework pengujian otomatis. Berbagai skenario diuji, mulai dari login yang berhasil, gagal, hingga edge case seperti input whitespace, SQL Injection, dan XSS.

---

## ⚙️ Tech Stack

- 🔧 **Framework**: Cypress
- 💻 **Bahasa**: JavaScript
- 🌐 **Website**: https://opensource-demo.orangehrmlive.com/
- 🧪 **Jenis Test**: End-to-End (E2E) UI Testing

---

## 🧾 Test Case List

| No | Test Case Name                           | Expected Result                                      |
|----|-------------------------------------------|------------------------------------------------------|
| 1  | Login with valid credentials              | Berpindah ke dashboard                              |
| 2  | Login with invalid password               | Pesan “Invalid credentials” muncul                  |
| 3  | Login with empty username                 | Pesan “Required” di kolom username                  |
| 4  | Login with empty password                 | Pesan “Required” di kolom password                  |
| 5  | Login with both fields empty              | Dua pesan “Required” muncul                         |
| 6  | Login with SQL injection string           | Pesan “Invalid credentials” muncul                  |
| 7  | Login with XSS payload                    | Pesan “Invalid credentials” atau ditolak            |
| 8  | Login with whitespace in username/password| Pesan “Required” atau “Invalid credentials” muncul  |
| 9  | Login with uppercase username             | Login berhasil (case-insensitive)                   |
| 10 | Login with long input (100+ chars)        | Pesan “Invalid credentials” atau ditolak            |

---