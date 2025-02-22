# Docker-Advanced
# 🚀 Docker Mastery: From Beginner to Advanced

## 📌 Overview

This repository serves as a comprehensive guide to Docker, covering everything from fundamental concepts to advanced implementations. Whether you're new to containerization or looking to master Docker for production, this project is structured to help you build, manage, and deploy containerized applications efficiently.

---

## 📚 Table of Contents

- [🔰 Introduction](#-introduction)
- [📦 Installing Docker](#-installing-docker)
- [🐳 Basic Docker Commands](#-basic-docker-commands)
- [📌 Working with Docker Images](#-working-with-docker-images)
- [🏗️ Docker Containers](#️-docker-containers)
- [📂 Docker Volumes & Persistent Storage](#-docker-volumes--persistent-storage)
- [🛠️ Docker Networking](#️-docker-networking)
- [📌 Docker Compose](#-docker-compose)
- [🔒 Docker Security Best Practices](#-docker-security-best-practices)
- [🚀 Deploying a Real-World Application](#-deploying-a-real-world-application)
- [📌 Kubernetes & Docker](#-kubernetes--docker)
- [💡 Advanced Topics](#-advanced-topics)
- [📝 Resources](#-resources)

---

## 🔰 Introduction

Docker is an open-source platform for developing, shipping, and running applications inside containers. It enables developers to package applications with all their dependencies and run them consistently across different environments.

---

## 📦 Installing Docker

### **🔹 Windows / Mac**
1. Download Docker Desktop from [Docker's official website](https://www.docker.com/get-started).
2. Follow the installation instructions.
3. Run `docker version` to verify the installation.

### **🔹 Linux**
```bash
sudo apt update && sudo apt install -y apt-transport-https ca-certificates curl software-properties-common
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt update && sudo apt install -y docker-ce docker-ce-cli containerd.io
docker --version
```

---

## 🐳 Basic Docker Commands

```bash
# Check Docker version
docker --version

# Pull an image
docker pull ubuntu

# List available images
docker images

# Run a container
docker run -it ubuntu bash

# List running containers
docker ps

# List all containers
docker ps -a

# Stop a container
docker stop <container_id>

# Remove a container
docker rm <container_id>

# Remove an image
docker rmi <image_id>
```

---

## 📌 Working with Docker Images

```bash
# Build an image from a Dockerfile
docker build -t my-app .

# Tag an image
docker tag my-app my-app:v1

# Push an image to Docker Hub
docker login
docker tag my-app username/my-app:v1
docker push username/my-app:v1
```

---

## 🏗️ Docker Containers

```bash
# Run a container in detached mode
docker run -d --name mycontainer nginx

# Restart a container
docker restart mycontainer

# Attach to a running container
docker exec -it mycontainer bash

# Inspect container details
docker inspect mycontainer
```

---

## 📂 Docker Volumes & Persistent Storage

```bash
# Create a volume
docker volume create myvolume

# List volumes
docker volume ls

# Mount a volume in a container
docker run -d -v myvolume:/data --name mycontainer nginx
```

---

## 🛠️ Docker Networking

```bash
# List networks
docker network ls

# Create a new network
docker network create mynetwork

# Connect a container to a network
docker network connect mynetwork mycontainer
```

---

## 📌 Docker Compose

### **Example `docker-compose.yml`**
```yaml
version: "3"
services:
  web:
    image: nginx
    ports:
      - "8080:80"
  database:
    image: mysql
    environment:
      MYSQL_ROOT_PASSWORD: root
```
```bash
docker-compose up -d
docker-compose down
```

---

## 🔒 Docker Security Best Practices

- Run containers as non-root users.
- Use minimal base images (e.g., `alpine`).
- Scan images for vulnerabilities (`docker scan`).
- Limit container resources to prevent DoS attacks.

---

## 🚀 Deploying a Real-World Application

### `app.py`
```python
from flask import Flask
app = Flask(__name__)

@app.route("/")
def home():
    return "Hello, Docker!"

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
```

### `Dockerfile`
```Dockerfile
FROM python:3.9
WORKDIR /app
COPY app.py .
RUN pip install flask
CMD ["python", "app.py"]
```
```bash
docker build -t flask-app .
docker run -p 5000:5000 flask-app
```

---

## 📌 Kubernetes & Docker

```bash
kubectl create deployment myapp --image=my-app
kubectl expose deployment myapp --type=LoadBalancer --port=80
kubectl get services
```

---

## 💡 Advanced Topics

- Multi-stage builds
- Docker Swarm
- Custom Docker Networks
- Monitoring with Prometheus & Grafana

---

## 📝 Resources

- [Docker Documentation](https://docs.docker.com/)
- [Play with Docker](https://labs.play-with-docker.com/)
- [Kubernetes Documentation](https://kubernetes.io/docs/)

---

## 📌 Conclusion

This guide walks you through Docker from beginner to advanced levels. Keep experimenting with Docker, and you'll become a pro in no time! 🚀🐳

