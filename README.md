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

## 🚀 Menjalankan Test

```bash
npx cypress open

```
---

## 🧾 Test Case List

| No. | Test Case Description                                 | Username Input                 | Password Input                 | Expected Result                                      |
|-----|--------------------------------------------------------|-------------------------------|-------------------------------|------------------------------------------------------|
| 1   | Login with valid credentials                          | `Admin`                       | `admin123`                    | Redirect to `/dashboard`                            |
| 2   | Login with invalid password                           | `Admin`                       | `wrongpassword`               | Show **Invalid credentials** message                |
| 3   | Login with empty username                             | *(empty)*                     | `admin123`                    | Show **Required** message                           |
| 4   | Login with empty password                             | `Admin`                       | *(empty)*                     | Show **Required** message                           |
| 5   | Login with both empty fields                          | *(empty)*                     | *(empty)*                     | Show **Required** message under both fields         |
| 6   | Login with whitespace only in username and password   | `"   "`                       | `"   "`                       | Show **Required** or validation error               |
| 7   | Login with SQL injection string                       | `' OR 1=1 --`                 | `anything`                    | Show **Invalid credentials** message                |
| 8   | Login with XSS payload in username                    | `<script>alert(1)</script>`   | `anything`                    | Show **Invalid credentials** message                |
| 9   | Login with uppercase username                         | `ADMIN`                       | `admin123`                    | Redirect to `/dashboard`                            |
| 10  | Login with very long input (100+ characters)          | `aaaaaaaaaa...` (120 chars)   | `aaaaaaaaaa...` (120 chars)   | Show **Invalid credentials** message                |
| 11  | Login using only Enter key                            | `Admin`                       | `admin123` + `{enter}`        | Redirect to `/dashboard`                            |

---