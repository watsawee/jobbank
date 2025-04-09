FROM nginx:latest

# เพิ่มเติม: ติดตั้ง dependencies อื่นๆ ที่โปรแกรม Student job bank system ต้องการ
# ตัวอย่าง:
# RUN apt-get update && apt-get install -y --no-install-recommends \
#     openjdk-11-jre-headless \
#     && rm -rf /var/lib/apt/lists/*

# เพิ่มเติม: Copy ไฟล์ build ของ Student job bank system (สมมติว่า build แล้ว)
# ตัวอย่าง:
# COPY --from=builder /app/build /usr/share/nginx/html

# เพิ่มเติม: ตั้งค่า Nginx (ถ้าจำเป็น)
# ตัวอย่าง:
# COPY nginx.conf /etc/nginx/nginx.conf

# Expose port ที่ Nginx รัน (default คือ 80)
EXPOSE 80

# Command ที่จะรันเมื่อ Container เริ่มทำงาน
# (Nginx จะรันเป็น default อยู่แล้ว)
# CMD ["nginx", "-g", "daemon off;"]