# เริ่มต้นจาก nginx official image
FROM nginx:latest

# ตั้งค่า working directory
WORKDIR /usr/share/nginx/html

# คัดลอกไฟล์ของโปรเจกต์ไปยัง docker container
COPY . /usr/share/nginx/html

# เปิด port 80 สำหรับการใช้งาน
EXPOSE 80

# เริ่มต้น nginx server
CMD ["nginx", "-g", "daemon off;"]
