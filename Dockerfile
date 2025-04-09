# ใช้ nginx official image
FROM nginx:latest

# คัดลอกไฟล์ HTML ไปยัง nginx
COPY . /usr/share/nginx/html

# เปิดพอร์ต 80
EXPOSE 80